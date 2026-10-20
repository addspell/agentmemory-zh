const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const EN_FILE = path.join(ROOT, 'data', 'en-final.json');
const CACHE_FILE = path.join(ROOT, 'data', 'zh.partial.json');
const OUT_FILE = path.join(ROOT, 'src', 'zh.json');
const BATCH = 20;
const CONCURRENCY = 3;
const MAX_RETRIES = 4;

function readEnv() {
  const out = {};
  const envFile = process.env.AGENTMEMORY_ENV_FILE || path.join(process.env.HOME || '.', '.agentmemory', '.env');
  for (const line of fs.readFileSync(envFile, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)=(.*)$/);
    if (m) out[m[1]] = m[2].replace(/\s+#.*$/, '').trim();
  }
  return out;
}

function readJson(file, fallback) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return fallback; }
}

function stripFence(s) {
  s = s.trim();
  const m = s.match(/^```(?:json)?\s*([\s\S]*?)\s*```$/i);
  return m ? m[1].trim() : s;
}

function extractObject(s) {
  s = stripFence(s);
  const start = s.indexOf('{');
  const end = s.lastIndexOf('}');
  if (start >= 0 && end > start) s = s.slice(start, end + 1);
  return JSON.parse(s);
}

const TERMS = [
  ['observation', '观察'], ['memory', '记忆'], ['lesson', '经验'], ['crystal', '结晶'],
  ['action', '行动'], ['frontier', '待办前沿'], ['session', '会话'], ['project', '项目'],
  ['agent', '智能体'], ['consolidation', '整合'], ['semantic facts', '语义事实'],
  ['procedures', '流程'], ['graph', '图谱'], ['capture inbox', '采集收件箱'],
  ['replay', '回放'], ['profile', '画像'], ['health', '健康'], ['audit', '审计'],
  ['pending', '待处理'], ['active', '进行中'], ['done', '已完成'], ['blocked', '受阻'],
  ['strength', '强度'], ['importance', '重要性'], ['confidence', '置信度'],
  ['decay', '衰减'], ['embedding', '嵌入'], ['token', 'token'], ['hook', 'hook']
];

function systemPrompt() {
  return [
    'You are a professional UI localization engine for the agentmemory viewer.',
    'Translate English UI copy into concise, natural Simplified Chinese.',
    'Output ONLY a JSON object whose keys are the supplied numeric ids and whose values are Chinese strings.',
    'Rules:',
    '- Preserve product names and technical terms: agentmemory, iii engine, Codex, Claude Code, MCP, REST, API, LLM, JSON, JSONL, CSV, BM25, RSS, URL, Redis, SQL, TypeScript, JavaScript.',
    '- Preserve code identifiers, function names, environment variables, paths, placeholders and literal values exactly (e.g. memory_save, GRAPH_EXTRACTION_ENABLED, ~/.agentmemory, /graph/import-graphify, src/, .ts).',
    '- Keep numbers and units intact. Do not add explanations.',
    '- Use this terminology when applicable: ' + TERMS.map(([en, zh]) => `${en}=${zh}`).join('; ') + '.',
    '- Headings, buttons and labels should be short. Help text may be a complete Chinese sentence.',
    '- Do not translate the content inside example quotations if it is data; translate the surrounding UI sentence.',
    '- Never return markdown fences or commentary.'
  ].join('\n');
}

async function callModel(env, batch) {
  const body = {
    model: env.OPENAI_MODEL,
    temperature: 0,
    messages: [
      { role: 'system', content: systemPrompt() },
      { role: 'user', content: JSON.stringify(batch) }
    ]
  };
  const r = await fetch(env.OPENAI_BASE_URL.replace(/\/$/, '') + '/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + env.OPENAI_API_KEY },
    body: JSON.stringify(body)
  });
  if (!r.ok) throw new Error('HTTP ' + r.status + ': ' + (await r.text()).slice(0, 500));
  const j = await r.json();
  const content = j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content;
  if (!content) throw new Error('empty model response: ' + JSON.stringify(j).slice(0, 500));
  return extractObject(content);
}

async function translateBatch(env, entries) {
  const batch = {};
  for (const [id, text] of entries) batch[id] = text;
  let lastErr;
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const got = await callModel(env, batch);
      const out = {};
      for (const [id, text] of entries) {
        const zh = got[id];
        if (typeof zh === 'string' && zh.trim() && /[\u4e00-\u9fff]/.test(zh)) out[id] = zh.trim();
        else throw new Error('missing translation for id ' + id + ': ' + text.slice(0, 60));
      }
      return out;
    } catch (err) {
      lastErr = err;
      console.error('batch retry ' + attempt + '/' + MAX_RETRIES + ': ' + err.message);
      await new Promise(r => setTimeout(r, 1200 * attempt));
    }
  }
  throw lastErr;
}

(async () => {
  const env = readEnv();
  if (!env.OPENAI_BASE_URL || !env.OPENAI_MODEL || !env.OPENAI_API_KEY) {
    throw new Error('缺少 OPENAI_BASE_URL / OPENAI_MODEL / OPENAI_API_KEY');
  }
  const strings = readJson(EN_FILE, []);
  if (!Array.isArray(strings) || !strings.length) throw new Error('en-final.json 为空');
  const cache = readJson(CACHE_FILE, {});
  const ids = strings.map((s, i) => String(i));
  const pending = ids.filter(id => !cache[id]);
  console.log(`总条数 ${ids.length}，已完成 ${ids.length - pending.length}，待翻译 ${pending.length}`);

  const chunks = [];
  for (let i = 0; i < pending.length; i += BATCH) chunks.push(pending.slice(i, i + BATCH));
  let cursor = 0;
  let done = 0;

  async function worker() {
    while (cursor < chunks.length) {
      const chunk = chunks[cursor++];
      const entries = chunk.map(id => [id, strings[Number(id)]]);
      try {
        const got = await translateBatch(env, entries);
        Object.assign(cache, got);
        fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2) + '\n');
        done += chunk.length;
        console.log(`进度 ${done}/${pending.length}（本批 ${chunk.length} 条）`);
      } catch (err) {
        console.error('本批失败，已跳过，可重跑补齐: ' + err.message);
      }
    }
  }

  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, chunks.length || 1) }, worker));

  const result = {};
  const missing = [];
  strings.forEach((text, i) => {
    const id = String(i);
    if (cache[id]) result[text] = cache[id];
    else missing.push(text);
  });
  fs.writeFileSync(OUT_FILE, JSON.stringify(result, null, 2) + '\n');
  console.log(`完成 ${Object.keys(result).length}/${strings.length}，缺失 ${missing.length}`);
  if (missing.length) {
    fs.writeFileSync(path.join(ROOT, 'data', 'zh-missing.json'), JSON.stringify(missing, null, 2) + '\n');
    console.log('缺失清单已写入 zh-missing.json');
  }
})().catch(err => { console.error(err.stack || err); process.exit(1); });
