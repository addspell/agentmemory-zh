const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const dict = JSON.parse(fs.readFileSync(path.join(ROOT, 'src', 'zh.json'), 'utf8'));

// 词典值里也常混着半角逗号、分号、括号。只在中文旁边做全角化，
// 不碰 URL、代码标识符和纯英文片段。
function normalizeZhPunctuation(text) {
  if (!text) return text;
  var out = text;
  out = out.replace(/([\u4e00-\u9fff])\s*\(/g, '$1（');
  out = out.replace(/\)\s*,/g, '），');
  out = out.replace(/\)\s*;/g, '）；');
  out = out.replace(/\)\s*:/g, '）：');
  out = out.replace(/([\u4e00-\u9fff])\s*,/g, '$1，');
  out = out.replace(/([\u4e00-\u9fff])\s*;/g, '$1；');
  out = out.replace(/([\u4e00-\u9fff])\s*:/g, '$1：');
  out = out.replace(/([，。；：！？、）】》”’])\s*,/g, '$1，');
  out = out.replace(/([，。；：！？、）】》”’])\s*;/g, '$1；');
  out = out.replace(/([，。；：！？、）】》”’])\s*:/g, '$1：');
  // 中文标点后不留空格，避免「， 已移除」这类拼接痕迹
  out = out.replace(/([，。；：！？、）】》”’])[ \t]+/g, '$1');
  // 中文后的半角右括号与句末句号统一成全角
  out = out.replace(/([\u4e00-\u9fff])\s*\)/g, '$1）');
  out = out.replace(/([\u4e00-\u9fff])\.(?=\s|$)/g, '$1。');
  return out;
}

// 动态短文案不在采集结果里，补入精确映射。
Object.assign(dict, {
  'DARK': '深色', 'LIGHT': '浅色',
  'Skip to content': '跳转到正文',
  'Open overview': '打开概览',
  'Viewer sections': '查看器分区',
  'Viewer authorization required': '需要查看器授权',
  'Enter AGENTMEMORY_SECRET to unlock viewer API access.': '输入 AGENTMEMORY_SECRET 以解锁查看器 API 访问。',
  'Unlock': '解锁',
  'waiting for first sync': '等待首次同步',
  'report issue →': '报告问题 →',
  'Work': '工作', 'Insight': '洞察', 'System': '系统', 'Memory': '记忆',
  'connecting': '连接中', 'live': '实时', 'offline': '离线',
  'reconnecting': '重新连接中',
  'no project': '无项目',
  'All statuses': '全部状态',
  'Pick a session…': '选择会话…',
  'of': '共', 'types': '种类型',
  'Search': '搜索', 'Clear': '清除',
  'Relations': '关系',
  'Status': '状态', 'STATUS': '状态',
  'Obs': '观察数', 'OBS': '观察数',
  'Started': '开始时间', 'STARTED': '开始时间',
  'ACTIVE': '进行中',
  'WAITING': '等待中',
  'COMPLETED': '已完成',
  'active': '进行中',
  'From': '从', 'To': '至',
  'Show only this project': '仅显示此项目', 'Show only this agent': '仅显示此智能体',
  'waiting': '等待中',
  'completed': '已完成',
  'ready': '就绪',
  'running': '运行中',
  'starting': '启动中',
  'stopped': '已停止',
  'off': '关闭',
  'failed': '失败',
  'closed': '正常',
  'open': '断开',
  'half-open': '半开',
  'OBSERVE': '观察', 'COMPRESS': '压缩', 'CONSOLIDATE': '整合',
  'REFLECT': '反思', 'SKILL EXTRACT': '技能提取',
  'observe': '观察', 'compress': '压缩', 'consolidate': '整合',
  'reflect': '反思', 'skill extract': '技能提取',
  'remember': '保存记忆', 'forget': '忘记', 'evolve': '保存记忆新版本',
  'share': '共享', 'delete': '删除', 'import': '导入', 'export': '导出',
  'action_create': '创建行动', 'action_update': '更新行动', 'action create': '创建行动', 'action update': '更新行动',
  'lease_acquire': '获取租约', 'lease_release': '释放租约', 'lease_renew': '续租',
  'lease acquire': '获取租约', 'lease release': '释放租约', 'lease renew': '续租',
  'routine_run': '运行例程', 'routine run': '运行例程',
  'signal_send': '发送信号', 'signal send': '发送信号',
  'checkpoint_resolve': '解决检查点', 'checkpoint resolve': '解决检查点',
  'mesh_sync': '同步对等节点', 'mesh sync': '同步对等节点',
  'relation_create': '关联记录', 'relation_update': '更新关联', 'relation create': '关联记录', 'relation update': '更新关联',
  'sentinel_create': '创建哨兵', 'sentinel_trigger': '哨兵触发', 'sentinel create': '创建哨兵', 'sentinel trigger': '哨兵触发',
  'sketch_create': '开始草图', 'sketch_promote': '提升草图', 'sketch_discard': '丢弃草图',
  'sketch create': '开始草图', 'sketch promote': '提升草图', 'sketch discard': '丢弃草图',
  'retention_score': '计算留存分数', 'retention score': '计算留存分数',
  'crystallize': '结晶已完成工作', 'diagnose': '运行诊断', 'heal': '修复存储数据',
  'index_persist': '保存搜索索引', 'index persist': '保存搜索索引',
  'facet_tag': '标记记录', 'facet tag': '标记记录',
  'lesson_save': '保存经验', 'lesson_recall': '召回经验', 'lesson_strengthen': '强化经验', 'lesson_delete': '删除经验',
  'lesson save': '保存经验', 'lesson recall': '召回经验', 'lesson strengthen': '强化经验', 'lesson delete': '删除经验',
  'obsidian_export': '导出到 Obsidian', 'obsidian export': '导出到 Obsidian',
  'insight_search': '搜索洞察', 'insight search': '搜索洞察',
  'skill_extract': '提取技能', 'skill extract': '提取技能',
  'core_add': '添加核心记忆', 'core_remove': '移除核心记忆', 'core add': '添加核心记忆', 'core remove': '移除核心记忆',
  'auto_page': '分页移出记忆', 'auto page': '分页移出记忆',
  'vision_embed': '嵌入图像', 'vision embed': '嵌入图像',
  'slot_append': '追加槽位', 'slot_replace': '替换槽位', 'slot_create': '创建槽位', 'slot_delete': '删除槽位', 'slot_reflect': '反思到槽位',
  'slot append': '追加槽位', 'slot replace': '替换槽位', 'slot create': '创建槽位', 'slot delete': '删除槽位', 'slot reflect': '反思到槽位',
  'graph_compact': '压缩图谱来源', 'graph compact': '压缩图谱来源',
  'session_sweep': '标记过期会话为放弃', 'session sweep': '标记过期会话为放弃',
  'audit': '审计', 'memory': '记忆', 'lesson': '经验', 'action': '行动',
  'crystal': '结晶', 'session': '会话', 'observation': '观察',
  'Processed observations': '已处理观察',
  'Compressed observations': '已压缩观察',
  'checked': '检查于',
  'consolidated': '整合于',
  'Saved a memory': '已保存记忆',
  'Saved a new memory version': '已保存记忆新版本',
  'Ran a routine': '已运行例程',
  'Sent a signal': '已发送信号',
  'Resolved a checkpoint': '已解决检查点',
  'Synced with a peer': '已同步对等节点',
  'Linked records': '已关联记录',
  'Updated a link': '已更新关联',
  'Created a sentinel': '已创建哨兵',
  'A sentinel fired': '哨兵已触发',
  'Started a sketch': '已开始草图',
  'Promoted a sketch': '已提升草图',
  'Discarded a sketch': '已丢弃草图',
  'Scored retention': '已计算留存分数',
  'Crystallized finished work': '已结晶完成的工作',
  'Ran diagnostics': '已运行诊断',
  'Repaired stored data': '已修复存储数据',
  'Saved the search index': '已保存搜索索引',
  'Tagged records': '已标记记录',
  'Saved a lesson': '已保存经验',
  'Recalled lessons': '已召回经验',
  'Strengthened a lesson': '已强化经验',
  'Deleted a lesson': '已删除经验',
  'Exported to Obsidian': '已导出到 Obsidian',
  'Searched insights': '已搜索洞察',
  'Added core memory': '已添加核心记忆',
  'Removed core memory': '已移除核心记忆',
  'Paged memory out': '已分页移出记忆',
  'Embedded an image': '已嵌入图像',
  'Appended to a slot': '已追加槽位',
  'Replaced a slot': '已替换槽位',
  'Created a slot': '已创建槽位',
  'Deleted a slot': '已删除槽位',
  'Reflected into a slot': '已反思到槽位',
  'Compacted graph provenance': '已压缩图谱来源',
  'Marked stale sessions abandoned': '已将过期会话标记为放弃',
  'Created an action': '已创建行动',
  'Updated an action': '已更新行动',
  'Took a lease': '已获取租约',
  'Released a lease': '已释放租约',
  'Renewed a lease': '已续租',
  'Ran consolidation': '已运行整合',
  'Reflected on memories': '已反思记忆',
  'Extracted a skill': '已提取技能',
  'Memory saved': '记忆已保存',
  'Memory deleted': '记忆已删除',
  'Lesson learned': '已学习经验',
  'Action created': '行动已创建',
  'Crystal saved': '结晶已保存',
  'Session ended': '会话已结束',
  'Session running': '会话运行中',
  'Waiting:': '等待：',
  'Ready:': '就绪：',
  'Off:': '关闭：',
  'Each layer below says why it is empty or what it is waiting for.': '下方各层会说明为何为空或正在等待什么。',
  'How consolidation works, its schedule and last run →': '整合的工作方式、计划与上次运行 →',
  'Raw observations stay searchable as they are. Consolidation': '原始观察保持原样，仍可搜索。整合',
  'turns them into longer-lived layers: semantic facts': '会将它们转化为留存更久的层次：语义事实',
  'and procedures': '和流程',
  'Durable facts distilled from session summaries': '从会话摘要中提炼的持久事实',
  'Repeatable workflows, from finished sessions and from patterns that recur across sessions': '来自已完成会话和跨会话反复出现模式的可重复流程',
  'Links between memories (supersedes, extends, contradicts)': '记忆之间的关联（取代、扩展、矛盾）',
  'None yet: links are saved when a memory updates or relates to another.': '暂无：当某条记忆更新或与另一条记忆相关时会保存关联。',
  'Function metrics and workers': '函数指标与工作进程',
  'Workers': '工作进程', 'Worker': '工作进程',
  'Function': '函数', 'Calls': '调用次数', 'Failed': '失败次数',
  'Each layer below says why it is empty or what it is waiting for.': '下方各层会说明为何为空或正在等待什么。',
  '. Each layer below says why it is empty or what it is waiting for.': '。下方各层会说明为何为空或正在等待什么。',
  'How consolidation works, its schedule and last run →': '整合的工作方式、计划与上次运行 →',
  'CLOSED': '正常', 'OPEN': '断开', 'HALF-OPEN': '半开',
  'not in use': '未使用',
  'No function has run since the worker started. Calls appear here as agents observe, search and save.': '工作进程启动后尚无函数运行。智能体进行观察、搜索和保存时，调用会显示在这里。',

  // 概览 / 健康
  'Observations': '观察数',
  'ok': '正常',
  'connected': '已连接',
  'configuration': '配置',
  'available': '可用',
  'healthy': '健康',
  'degraded': '降级',
  'critical': '严重',
  'unknown': '未知',
  'on': '开启',
  'configured': '已配置',
  'complete': '完成',
  'done': '完成',
  'empty': '空',
  'Ports': '端口',
  'Waiting for embeddings': '等待嵌入',
  'Pending vector log': '待处理向量日志',
  'Capture': '采集',
  'Inbox': '收件箱',
  'Since start': '自启动以来',
  'Inspect': '检查',
  'Embeddings': '嵌入',
  'closed (0 failures)': '闭合（0 次失败）',
  'Process': '进程',
  'Summaries': '摘要',
  'Last run': '上次运行',
  'When': '时间',
  'decay': '衰减',
  'procedural': '流程',
  'semantic': '语义',
  'Knowledge graph extraction': '知识图谱提取',
  'Memory consolidation': '记忆整合',
  'LLM-powered observation compression': 'LLM 驱动的观察压缩',
  'In-conversation context injection': '会话内上下文注入',
  'Extracts entities and relations from observations into a knowledge graph.': '从观察中提取实体与关系，构建知识图谱。',
  'Periodically summarizes sessions into semantic facts + procedures.': '定期将会话总结为语义事实和流程。',
  'Every observation is compressed by the LLM for richer summaries (costs tokens). OFF uses zero-LLM synthetic compression.': '每条观察都由 LLM 压缩以生成更丰富的摘要（消耗 token）。关闭时使用零 LLM 的合成压缩。',
  "Hooks write recalled context into Claude Code's conversation. OFF captures in the background without injecting.": 'hook 会将召回上下文写入 Claude Code 的对话。关闭时仅在后台采集，不注入。',
  'Merged from the newest 20 summaries once at least 5 exist.': '至少有 5 条摘要后，从最新的 20 条摘要合并。',
  'From pattern memories seen in 2+ sessions, once 2 exist.': '从至少 2 个会话中出现过的模式记忆提取，至少需要 2 条。',
  'Facts and procedures unused for 30 days lose 10% strength per period (never below 0.1).': '事实和流程若 30 天未使用，每个周期损失 10% 强度（不低于 0.1）。',
  'Why these can be empty →': '为什么这些可能为空 →',
  '1 · captured': '1 · 已采集',
  '2 · session end': '2 · 会话结束',
  '3 · merge': '3 · 合并',
  '4 · repeat': '4 · 重复模式',
  '5 · forget': '5 · 遗忘',

  // 记忆
  'Type': '类型',
  'Updated': '更新时间',
  'fact': '事实',
  'workflow': '工作流',
  'architecture': '架构',
  'bug': '缺陷',
  'pattern': '模式',
  'preference': '偏好',
  'Filter by project': '按项目筛选',
  'Filter by agent': '按智能体筛选',
  'Filter by type': '按类型筛选',
  'No memory has an agent id yet': '尚无记忆带有智能体 id',
  'Select all shown memories': '选择当前显示的全部记忆',
  'Select this memory': '选择此记忆',
  'consolidation →': '整合 →',
  'Lesson decay and scoring →': '经验衰减与评分 →',
  'How crystals are built →': '结晶如何构建 →',
  'Action lifecycle →': '行动生命周期 →',

  // 图谱
  'Rebuild': '重建',
  'nodes': '节点',
  'relations': '关系',
  'unlinked': '未连接',
  'Zoom': '缩放',
  'A function, class or other code symbol.': '函数、类或其他代码符号。',
  'An error or bug the agent ran into.': '智能体遇到的错误或缺陷。',
  'A decision or the reasoning behind one.': '一项决策或背后的理由。',
  'A library, framework or tool.': '库、框架或工具。',
  'A person named in the work.': '工作中提到的人物。',
  'uses': '使用', 'depends on': '依赖于', 'causes': '导致',
  'One calls or uses the other.': '一方调用或使用另一方。',
  'One needs the other to work.': '一方需要另一方才能工作。',
  'One led to the other.': '一方导致了另一方。',
  'file': '文件',
  'concept': '概念',
  'function': '函数',
  'error': '错误',
  'decision': '决策',
  'library': '库',
  'person': '人物',
  'project': '项目',
  'location': '位置',
  'organization': '组织',
  'event': '事件',

  // 会话 / 观察
  'End session…': '结束会话…',
  'Summarize…': '生成摘要…',
  'Tools used*': '使用的工具*',
  'Files touched*': '涉及的文件*',
  'Running so far': '目前运行时长',
  'Id': 'ID',
  'Directory': '目录',
  'Tools': '工具',
  'Files': '文件',
  'Summary': '摘要',
  'Minimum importance': '最低重要度',
  'Filter sessions by project': '按项目筛选会话',
  'Filter sessions by agent': '按智能体筛选会话',
  'Filter sessions by status': '按状态筛选会话',
  'No session has an agent id yet': '尚无会话带有智能体 id',
  'command run': '命令执行',
  'discovery': '发现',
  'conversation': '对话',
  'file edit': '文件编辑',
  'web fetch': '网页获取',
  'file write': '文件写入',
  'subagent': '子智能体',
  'notification': '通知',
  'task': '任务',
  'other': '其他',

  // 活动 / 画像
  'active days': '活跃天数',
  'sessions': '会话',
  'observations': '观察',
  'busiest day': '最忙的一天',
  'less': '少',
  'more': '多',
  'Most touched files': '最常涉及的文件',
  'Recent highlights': '近期亮点',
  'Recurring errors': '重复出现的错误',
  'Conventions': '约定',
  'Frequently uses': '经常使用',
  'Import': '导入',
  'Space': '空格',
  'loaded, newest first': '已加载，最新在前',

  // 审计
  'From': '从',
  'To': '至',
  'target': '目标',
  'In the loaded entries': '在已加载条目中',
  'Other operations': '其他操作',
  'User': '用户',
  'Quality': '质量',
  'Entry': '条目',
  'Targets': '目标',
  'copy JSON': '复制 JSON',
  'hide': '收起',
  'details': '详情',
  'copy curl': '复制 curl',
  'Clear all': '全部清除',
  'Clear filters': '清除筛选',
  'Filtering on the server…': '正在服务器上筛选…',
  'No audit entries yet': '暂无审计条目',
  'No audit entries match': '没有匹配的审计条目',
  'Any project': '任意项目',
  'Any agent': '任意智能体',
  'Any type': '任意类型',
  'Forgot': '已忘记',
  'Deleted': '已删除',
  'Imported': '已导入',
  'Exported': '已导出',
  'Shared': '已共享',
  'Ran consolidation': '运行了整合',
  'Created an action': '创建了行动',
  'Updated an action': '更新了行动',
  'Took a lease': '获取了租约',
  'Released a lease': '释放了租约',
  'Renewed a lease': '续租了',
  'Ran a routine': '运行了例程',
  'Sent a signal': '发送了信号',
  'Resolved a checkpoint': '解决了检查点',
  'Synced with a peer': '同步了对等节点',
  'Linked records': '关联了记录',
  'Updated a link': '更新了关联',
  'Created a sentinel': '创建了哨兵',
  'A sentinel fired': '哨兵已触发',
  'Started a sketch': '开始了草图',
  'Promoted a sketch': '提升了草图',
  'Discarded a sketch': '丢弃了草图',
  'Scored retention': '计算了留存分数',
  'Crystallized finished work': '将已完成工作结晶',
  'Ran diagnostics': '运行了诊断',
  'Repaired stored data': '修复了存储数据',
  'Saved the search index': '保存了搜索索引',
  'Tagged records': '标记了记录',
  'Saved a lesson': '保存了经验',
  'Recalled lessons': '召回了经验',
  'Strengthened a lesson': '强化了经验',
  'Deleted a lesson': '删除了经验',
  'Exported to Obsidian': '导出到 Obsidian',
  'Reflected on memories': '反思了记忆',
  'Searched insights': '搜索了洞察',
  'Extracted a skill': '提取了技能',
  'Added core memory': '添加了核心记忆',
  'Removed core memory': '移除了核心记忆',
  'Paged memory out': '分页移出记忆',
  'Embedded an image': '嵌入了图像',
  'Appended to a slot': '追加到槽位',
  'Replaced a slot': '替换了槽位',
  'Created a slot': '创建了槽位',
  'Deleted a slot': '删除了槽位',
  'Reflected into a slot': '反思到槽位',
  'Compacted graph provenance': '压缩了图谱来源',
  'Marked stale sessions abandoned': '将过期会话标记为放弃',
  '; a lesson links here when it is crystallized from this session.': '；当某条经验由此会话结晶而成时，会链接到这里。',

  // 健康页补充
  'Every check passed.': '所有检查均已通过。',
  'Every check passed. Capture, search and the stream are working.': '所有检查均已通过。采集、搜索和实时流均正常。',
  'Some checks need attention.': '部分检查需要处理。',
  'Waiting for the first health report from the server.': '正在等待服务器发送首份健康报告。',
  'Report': '报告',
  '· updates every 30 s over the live stream, no refresh needed': '· 每 30 秒通过实时流更新，无需刷新',
  'same report as a plain page →': '以普通页面查看同一份报告 →',
  "The worker's link to the iii engine, which stores the data and runs the functions.": '工作进程与 iii 引擎的连接，后者负责存储数据并运行函数。',
  "Stored in the engine's local files (the default). Set AGENTMEMORY_STATE_BACKEND=redis to use Redis.": '存储在引擎的本地文件中（默认）。设置 AGENTMEMORY_STATE_BACKEND=redis 可使用 Redis。',
  "This page's own connection. Offline means the numbers here stop changing.": '此页面自身的连接。离线表示此处的数字将停止更新。',
  'The keyword index holds observations, memories and lessons, so its total is larger than the observation count.': '关键词索引包含观察、记忆和经验，因此总数大于观察数。',
  'A tool call with the same input and the same output as one stored in the last 5 minutes is skipped when the hook sends no event id.': '如果 hook 未发送事件 id，输入和输出都与最近 5 分钟内已存储记录相同的工具调用会被跳过。',
  'No embedding provider, so search is keyword only. Set an embedding provider key (for example OPENAI_API_KEY) and restart.': '没有嵌入提供方，因此搜索仅使用关键词。设置嵌入提供方密钥（例如 OPENAI_API_KEY）并重启。',
  'Redis event relay': 'Redis 事件中继',
  'A test event sent through Redis every 30 seconds came back to the worker.': '每 30 秒通过 Redis 发送的测试事件已返回工作进程。',
  'The engine stopped relaying live events through Redis, usually after Redis restarted. Data is still saved. Restart agentmemory to resume live updates.': '引擎已停止通过 Redis 中继实时事件，通常发生在 Redis 重启后。数据仍会保存。重启 agentmemory 可恢复实时更新。',
  'not saved yet': '尚未保存',
  'Checking…': '检查中…',

  // 活动 / 画像补充
  'Show all': '显示全部',
  'No file reads or edits in the newest sessions yet.': '最新会话中尚无文件读取或编辑。',
  'The newest sessions have no captured tool use yet. Kinds of work appear here as agents read, edit, run and search.': '最新会话尚未采集到工具使用。智能体读取、编辑、运行和搜索时，相应工作类型会显示在这里。',
  'Loading…': '加载中…',
  'Load older sessions': '加载更早的会话',
  'No errors recorded in the last 20 sessions. Failed tool calls land here once the same kind of error shows up.': '最近 20 个会话中没有记录错误。同类错误再次出现时，失败的工具调用会显示在这里。',
  'No prompt recorded': '未记录提示词',
  'rule': '规则',
  ', last active': '，最后活跃',
  'Functions': '函数',
  'Just captured. Importance is set when the observation is compressed.': '刚刚采集。重要度会在观察被压缩时设置。',
  // 回放页导入说明由「文本 + <code>~/.claude/projects</code> + 文本」三段拼成，
  // 两个文本节点要能接成「即 Claude Code 保存在 ~/.claude/projects 的格式」。
  'Agents connected with hooks are recorded live and need no import. Import is for work done before agentmemory was connected: it reads chat transcripts saved as JSONL, one message per line (the format Claude Code keeps under': '通过 hook 接入的智能体会被实时记录，无需导入。导入功能用于 agentmemory 接入之前的工作：它读取保存为 JSONL 的聊天记录，每行一条消息（即 Claude Code 在',
  '; other agents that write the same message format work too). Each file becomes a session with its observations, and agentmemory derives a crystal and lessons from it, so it shows up here, on Sessions and in recall.': ' 下保存的格式；其他写入相同消息格式的智能体也可以使用）。每个文件都会成为一个会话及其观察，agentmemory 会从中提取结晶和经验，因此它会显示在回放、会话和召回中。',
  'Mon': '周一', 'Tue': '周二', 'Wed': '周三', 'Thu': '周四',
  'Fri': '周五', 'Sat': '周六', 'Sun': '周日'
});
delete dict['agentmemory ·'];
delete dict['agentmemory ·'];
Object.keys(dict).forEach(function (key) {
  dict[key] = normalizeZhPunctuation(dict[key]);
});
const zhJson = JSON.stringify(dict).replace(/<\//g, '<\\/');

const js = String.raw`(function () {
  'use strict';
  if (window.__agentmemoryZhInstalled) return;
  window.__agentmemoryZhInstalled = true;

  var DICT = __ZH_DICT__;
  var LOCALE = 'zh-CN';

  // 内容容器：用户数据、观察正文、代码、日志一律不翻译。
  var SKIP_SELECTOR = [
    'pre', 'code', 'textarea', 'script', 'style', 'noscript', 'svg',
    '.obs-narrative', '.obs-facts', '.obs-title', '.obs-item-title', '.obs-item-sub',
    '.obs-item-body', '.obs-block-label', '.obs-code', '.obs-tool', '.obs-raw',
    '.ses-prompt', '.ses-summary', '.session-preview', '.session-title',
    '.mem-detail-content', '.mem-head', '.mem-excerpt', '.mem-diff', '.mem-diff-sum',
    '.replay-body', '.replay-detail', '.replay-tool', '.replay-event-label', '.replay-raw',
    '.audit-fn', '.audit-sum > span[id]', '.audit-more dd', '.audit-more pre', '.audit-more code',
    '.entity-link', '.session-project', '.ses-id-mini',
    '.gd-obs', '.gd-name', '.gd-raw', '.src-text', '.src-list',
    '.ver-text', '.layer-preview',
    '.tag', '.file-tag', '.id-chip', '.mem-chip', '.cmd-block pre', '.code', '.hljs'
  ].join(',');

  var ATTRS = ['title', 'aria-label', 'placeholder', 'alt'];

  // copyBtn 的 label 参数是英文短语，按后缀统一映射成中文。
  var COPY_LABELS = (function () {
    var kinds = { observation: '观察', session: '会话', node: '节点', lesson: '经验', action: '行动', memory: '记忆', crystal: '结晶', audit: '审计', entry: '条目', file: '文件', function: '函数', concept: '概念', pattern: '模式', person: '人物', decision: '决策', error: '错误', library: '库', project: '项目', event: '事件', tool: '工具' };
    var out = {
      'command': '命令', 'curl command': 'curl 命令', 'value': '内容', 'text': '文本',
      'memory text': '记忆文本', 'crystal text': '结晶文本', 'raw entry': '原始记录',
      'MCP call': 'MCP 调用', 'node name': '节点名称', 'audit entry id': '审计条目 ID',
      'curl for all': '全部 curl', 'concepts': '概念'
    };
    Object.keys(kinds).forEach(function (k) {
      out[k + ' id'] = kinds[k] + ' ID';
      out[k + ' name'] = kinds[k] + '名称';
    });
    return out;
  })();

  // 帮助按钮的 aria-label 是固定术语，单独映射，避免「什么是 Action？」这种中英混排。
  var HELP_TERMS = {
    'Action': '行动',
    'Activity heatmap': '活动热力图',
    'Audit log': '审计日志',
    'Average latency': '平均延迟',
    'Capture inbox': '采集收件箱',
    'Confidence': '置信度',
    'Consolidation': '整合',
    'Context saved (estimate)': '已保存上下文（估算）',
    'Conventions': '约定',
    'Crystal': '结晶',
    'Decay': '衰减',
    'Edge': '边',
    'Engine connection': '引擎连接',
    'Event loop delay': '事件循环延迟',
    'Failure rate': '失败率',
    'Feature flags': '功能开关',
    'Function calls': '函数调用',
    'Health status': '健康状态',
    'Heap': '堆内存',
    'Importance': '重要度',
    'Keyword index (BM25)': '关键词索引（BM25）',
    'Knowledge graph': '知识图谱',
    'LLM circuit breaker': 'LLM 熔断器',
    'Lesson': '经验',
    'Live updates': '实时更新',
    'Local capture spool': '本地采集暂存区',
    'Memory': '记忆',
    'Missing from index': '索引中缺失',
    'Node': '节点',
    'Observation': '观察',
    'Pending vector backfill': '待回填向量',
    'Procedures': '流程',
    'Project profile': '项目画像',
    'RSS': 'RSS（常驻内存）',
    'Ready': '就绪',
    'Replay': '回放',
    'Semantic facts': '语义事实',
    'Session': '会话',
    'State store': '状态存储',
    'Strength': '强度',
    'Targets': '目标',
    'Unlinked nodes': '未关联节点',
    'Uptime': '运行时长',
    'Uses': '使用次数',
    'Vector index': '向量索引',
    'Version': '版本',
    'Workers': '工作线程'
  };

  // 详情页属性里的 Open xxx / Open xxx in session yyy。
  var OPEN_KINDS = {
    'observation': '观察', 'session': '会话', 'memory': '记忆', 'lesson': '经验',
    'action': '行动', 'crystal': '结晶', 'node': '节点', 'graph node': '图谱节点',
    'file': '文件', 'project': '项目', 'entry': '条目', 'audit entry': '审计条目',
    'function': '函数', 'concept': '概念', 'pattern': '模式', 'error': '错误', 'tool': '工具'
  };
  var SKIP_TAGS = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1, PRE: 1, CODE: 1, SVG: 1 };

  function isSkipped(el) {
    if (!el || !el.closest) return true;
    if (SKIP_TAGS[el.tagName]) return true;
    // 复制按钮常放在 id-chip 等用户数据容器里，但按钮文字本身是界面文案。
    if (el.closest('.copy-btn')) return false;
    // src-list 里混着文件路径和类型标签；kind-tag 是界面枚举（action/lesson 等），只放行它。
    if (el.closest('.kind-tag')) return false;
    // 空态提示（未记录提示词等）不是用户数据，需要翻译。
    if (el.closest('.session-preview.none, .empty-state, .empty-desc')) return false;
    return !!el.closest(SKIP_SELECTOR);
  }

  function hasCjk(s) { return /[\u4e00-\u9fff]/.test(s); }

  // 只在中文旁边做全角标点归一化；英文逗号、代码标识符和 URL 保持原样。
  function normalizeZhPunctuation(text) {
    if (!text) return text;
    var out = text;
    out = out.replace(/([\u4e00-\u9fff])\s*\(/g, '$1（');
    out = out.replace(/\)\s*,/g, '），');
    out = out.replace(/\)\s*;/g, '）；');
    out = out.replace(/\)\s*:/g, '）：');
    out = out.replace(/([\u4e00-\u9fff])\s*,/g, '$1，');
    out = out.replace(/([\u4e00-\u9fff])\s*;/g, '$1；');
    out = out.replace(/([\u4e00-\u9fff])\s*:/g, '$1：');
    out = out.replace(/([，。；：！？、）】》”’])\s*,/g, '$1，');
    out = out.replace(/([，。；：！？、）】》”’])\s*;/g, '$1；');
    out = out.replace(/([，。；：！？、）】》”’])\s*:/g, '$1：');
    // 中文标点后不留空格，避免「， 已移除」这类拼接痕迹
    out = out.replace(/([，。；：！？、）】》”’])[ \t]+/g, '$1');
    // 中文后的半角右括号与句末句号统一成全角
    out = out.replace(/([\u4e00-\u9fff])\s*\)/g, '$1）');
    out = out.replace(/([\u4e00-\u9fff])\.(?=\s|$)/g, '$1。');
    return out;
  }

  function translateExact(s) {
    if (!s) return s;
    var trimmed = s.trim();
    if (!trimmed) return s;
    var hit = DICT[trimmed];
    if (!hit) return s;
    var lead = s.match(/^\s*/)[0];
    var tail = s.match(/\s*$/)[0];
    return lead + normalizeZhPunctuation(hit) + tail;
  }

  function translateDurationLabel(value) {
    var t = String(value || '').trim();
    var m;
    if ((m = t.match(/^(\d+)h\s+(\d+)m$/i))) return m[1] + ' 小时 ' + m[2] + ' 分钟';
    if ((m = t.match(/^(\d+)m$/i))) return m[1] + ' 分钟';
    if ((m = t.match(/^(\d+)h$/i))) return m[1] + ' 小时';
    if ((m = t.match(/^(\d+)s$/i))) return m[1] + ' 秒';
    if ((m = t.match(/^(\d+)d$/i))) return m[1] + ' 天';
    if (/^running$/i.test(t)) return '运行中';
    return value;
  }

  function translateDynamic(s) {
    // 不再因为含中文就整体跳过：会话时间、健康页状态常是「3m ago (10月20日)」这种中英混排。
    if (!s) return s;
    var out = s;

    out = out.replace(/\bjust now\b/g, '刚刚');
    out = out.replace(/\b(\d+)\s+min ago\b/g, '$1 分钟前');
    out = out.replace(/\b(\d+)\s*m ago\b/g, '$1 分钟前');
    out = out.replace(/\b(\d+)\s*h ago\b/g, '$1 小时前');
    out = out.replace(/\b(\d+)\s*d ago\b/g, '$1 天前');
    out = out.replace(/\b([\d,]+)\s+obs\b/g, '$1 条观察');

    // 会话卡片里的会话时长（formatDuration 输出 3m / 2h 30m / 1d）。
    // 只在整段就是这个短标签时转换，避免碰到用户正文里的同形文本。
    out = translateDurationLabel(out);

    // 健康页里已部分汉化的行，补掉剩余英文。
    out = out.replace(/\b([\d,]+)\s+records?\s+trimmed\b/g, '已清理 $1 条记录');
    out = out.replace(/\b([\d,]+)\s+ids?\s+removed\b/g, '已移除 $1 个 id');
    out = out.replace(/\bIt does not run again\./g, '不会再次运行。');
    out = out.replace(/\bHooks write here only while the server is unreachable\./g, '仅在服务不可达时，钩子程序会写入这里。');
    out = out.replace(/\bLast drained\s+([^.\n]+)(\.?)/gi, '上次排空于 $1$2');
    out = out.replace(/Spool 与收件箱,\s*使用 --drain 可立即发送 spool:/g, '暂存队列与收件箱；使用 --drain 可立即发送暂存内容：');
    out = out.replace(/Spool 与收件箱,/g, '暂存队列与收件箱，');
    out = out.replace(/\bSpool and inbox,\s*with --drain to send the spool now:/gi, '暂存队列与收件箱；使用 --drain 可立即发送暂存内容：');
    out = out.replace(/\bif it was on when the server started\b/g, '若服务启动时已启用');
    out = out.replace(/\bactions grouped into one digest after each consolidation at session end\b/g, '每次整合在会话结束时将行动归并成一份摘要');
    out = out.replace(/-\s*facts and\s*-\s*procedures\b/g, '- 事实 和 - 流程');
    out = out.replace(/^closed\s*\(([\d,]+)\s+failures?\)$/i, '已关闭（$1 次失败）');
    out = out.replace(/^closed$/i, '已关闭');

    out = out.replace(/^checked\s+(.+)$/g, '检查于 $1');
    out = out.replace(/^consolidated\s+(.+)$/g, '整合于 $1');

    out = out.replace(/\breconnecting\s*·\s*(\d+)s\b/g, '重新连接中 · $1 秒');
    out = out.replace(/\boffline\s*·\s*retry\s*(\d+)s\b/g, '离线 · $1 秒后重试');
    out = out.replace(/^live\s*·\s*health quiet$/g, '实时 · 健康数据暂无更新');
    out = out.replace(/^connecting$/g, '连接中');
    out = out.replace(/^live$/g, '实时');
    out = out.replace(/^offline$/g, '离线');

    out = out.replace(/^(\d+)\s+features?\s+off$/g, '$1 项功能未开启');
    out = out.replace(/^all features on$/g, '全部功能开启');

    out = out.replace(/^full sync\s+(.+?),\s*streaming since\s+(.+)$/g, '完整同步 $1，实时流自 $2 起');
    out = out.replace(/^full sync\s+(.+?),\s*stream reconnecting$/g, '完整同步 $1，实时流正在重连');
    out = out.replace(/^full sync\s+(.+)$/g, '完整同步 $1');
    out = out.replace(/^waiting for first sync$/g, '等待首次同步');

    // 帮助按钮、复制按钮以及分页/筛选提示。
    out = out.replace(/^What is (.+)\?$/g, function (_, term) {
      var key = term.trim();
      return '什么是' + (HELP_TERMS[key] || DICT[key] || key) + '？';
    });
    out = out.replace(/^Copy (.+)$/gi, function (_, label) {
      var key = label.trim();
      var zh = COPY_LABELS[key] || COPY_LABELS[key.toLowerCase()] || OPEN_KINDS[key.toLowerCase()] || DICT[key];
      return zh ? '复制 ' + zh : '复制 ' + key;
    });
    out = out.replace(/^Showing\s+([\d,]+)\s+of\s+([\d,]+)\s+sessions?,\s*newest first$/g, '显示 $1 / $2 个会话，最新在前');
    out = out.replace(/^Showing\s+([\d,]+)\s+of\s+([\d,]+)\s+observations$/g, '显示 $1 / $2 条观察');
    out = out.replace(/^Showing\s+([\d,]+)\s+of\s+([\d,]+)\s+latest memories$/g, '显示 $1 / $2 条最新记忆');
    out = out.replace(/^Showing\s+([\d,]+)\s+newest entries$/g, '显示最新 $1 条条目');
    out = out.replace(/^Showing the newest\s+([\d,]+)\s+of\s+([\d,]+)\.\s*Open a session for its full timeline\.$/g, '显示 $2 条中最新的 $1 条。打开会话可查看完整时间线。');
    out = out.replace(/^Showing the\s+([\d,]+)\s+most connected of\s+([\d,]+)\s+nodes\.\s*Search finds the rest on the server\.$/g, '显示 $2 个节点中连接最多的 $1 个。搜索可在服务器上找到其余节点。');
    out = out.replace(/^Load\s+([\d,]+)\s+more$/g, '再加载 $1 条');
    out = out.replace(/^Load\s+([\d,]+)\s+older$/g, '再加载 $1 条更早的');
    out = out.replace(/^\+([\d,]+)\s+more$/g, '另有 $1 条');
    out = out.replace(/^([\d,]+)\s+targets?$/g, '$1 个目标');
    out = out.replace(/^All\s+\(([\d,]+)\)$/g, '全部（$1）');
    out = out.replace(/^Strength\s+([\d.]+)\s+of\s+10$/g, '强度 $1 / 10');
    out = out.replace(/^Importance\s+([\d.]+)\s+of\s+10\.\s*(Low|Medium|High)\.$/g, function (_, n, level) {
      return '重要度 ' + n + ' / 10。' + ({ Low: '低', Medium: '中', High: '高' }[level] || level) + '。';
    });

    out = out.replace(/^([\d,]+)\s+incl\.\s+older versions$/g, '$1 条（含旧版本）');
    out = out.replace(/^across\s+([\d,]+)\s+sessions?$/g, '覆盖 $1 个会话');
    out = out.replace(/^([\d,]+)\s+running now$/g, '$1 个正在运行');
    out = out.replace(/^([\d,]+)\s+with vectors$/g, '$1 条带向量');
    out = out.replace(/^keyword only,\s*no embeddings$/g, '仅关键词，无向量');
    out = out.replace(/^of\s+([\d,]+)\s+MB heap\s*·\s*RSS\s+([\d,]+)\s+MB$/g, '堆内存上限 $1 MB · RSS $2 MB');
    out = out.replace(/^event loop\s+([\d.]+)\s+ms behind$/g, '事件循环延迟 $1 毫秒');
    out = out.replace(/^no failures across\s+([\d,]+)\s+functions?$/g, '$1 个函数无失败');
    out = out.replace(/^([\d,]+)\s+failed across\s+([\d,]+)\s+functions?$/g, '$1 次失败，涉及 $2 个函数');
    out = out.replace(/^none recorded yet$/g, '暂无记录');
    out = out.replace(/\bnothing recorded\b/gi, '无记录');
    out = out.replace(/^([\d,]+)\s+off,\s*no LLM$/g, '$1 项关闭（未配置 LLM）');
    out = out.replace(/^([\d,]+)\s+waiting$/g, '$1 条等待中');
    out = out.replace(/^~?([\d,]+)\s+tokens\s+\(estimate\)$/g, '约 $1 token（估算）');

    out = out.replace(/^Last run\s+(.+?)[:：]\s*([\d,]+)\s+new facts\.?$/g, '上次运行 $1：新增 $2 条事实。');
    out = out.replace(/^Last run\s+(.+?)[:：]\s*([\d,]+)\s+new procedures\.?$/g, '上次运行 $1：新增 $2 条流程。');
    out = out.replace(/^Last run\s+(.+?)\s+failed[:：]\s*(.+)$/g, '上次运行 $1 失败：$2');
    out = out.replace(/^([\d,]+)\s+new facts from\s+([\d,]+)\s+summaries$/g, '从 $2 条摘要新增 $1 条事实');
    out = out.replace(/^([\d,]+)\s+new procedures from\s+([\d,]+)\s+summaries$/g, '从 $2 条摘要新增 $1 条流程');
    out = out.replace(/\b([\d,]+)\s+new facts\b/gi, '新增 $1 条事实');
    out = out.replace(/\b([\d,]+)\s+new procedures\b/gi, '新增 $1 条流程');
    out = out.replace(/^([\d,]+)\s+links saved\.$/g, '已保存 $1 条关联。');

    out = out.replace(/^Waiting:\s*([\d,]+)\s+of\s+([\d,]+)\s+session summaries needed\.\s*A summary is written when a session ends\.$/g, '等待：需要 $2 个会话摘要，当前已有 $1 个。会话结束时写入摘要。');
    out = out.replace(/^Ready: runs when the next session ends\.$/g, '就绪：将在下一个会话结束时运行。');
    out = out.replace(/^Off: add an LLM provider key to (.+) and restart; consolidation turns on with it\.$/g, '关闭：在 $1 中添加 LLM 提供商密钥并重启；整合会随之一同开启。');
    out = out.replace(/^Off: CONSOLIDATION_ENABLED is set to false; remove it or set it to true and restart\.$/g, '关闭：CONSOLIDATION_ENABLED 被设为 false；移除该项或设为 true 后重启。');
    out = out.replace(/^Extracted from each finished session with a summary and 3\+ observations\.\s*The cross-session pass also needs ([\d,]+) pattern memories seen in ([\d,]+)\+ sessions \(you have ([\d,]+)\)\.$/g, '从每个有摘要且至少 3 条观察的已完成会话中提取。跨会话阶段还需要 $1 条模式记忆，且每条至少在 $2 个会话中出现（当前有 $3 条）。');
    out = out.replace(/^need\s+([\d,]+)\s+summaries\s+\(have\s+([\d,]+)\)$/g, '需要 $1 条摘要（当前 $2 条）');
    out = out.replace(/^need\s+([\d,]+)\s+recurring patterns\s+\(have\s+([\d,]+)\)$/g, '需要 $1 条重复模式（当前 $2 条）');
    out = out.replace(/^Set\s+(\w+)=false\s+and restart to turn it off\.$/g, '将 $1=false 并重启即可关闭。');
    out = out.replace(/^Still running\.\s*The last observation arrived\s+(.+?)\s+after the start\.$/g, '仍在运行。最后一条观察在开始后 $1 到达。');
    out = out.replace(/^\*\s*counted over the\s+([\d,]+)\s+observations loaded below\.\s*Load more to widen it\.$/g, '* 按下方已加载的 $1 条观察统计。加载更多可扩大范围。');
    out = out.replace(/^(?:·\s*)?busiest day\s*·\s*([\d,]+)\s+(?:obs|条观察)$/g, '最忙的一天 · $1 条观察');

    out = out.replace(/^([\d,]+)\s+observations?$/g, '$1 条观察');
    out = out.replace(/^([\d,]+)\s+sessions?$/g, '$1 个会话');
    out = out.replace(/^([\d,]+)\s+nodes?$/g, '$1 个节点');
    out = out.replace(/^([\d,]+)\s+relations?$/g, '$1 条关系');
    out = out.replace(/^([\d,]+)\s+obs$/g, '$1 条观察');
    out = out.replace(/^([\d,]+)\s+files?$/g, '$1 个文件');
    out = out.replace(/^([\d,]+)\s+projects?$/g, '$1 个项目');
    out = out.replace(/^([\d,]+)\s+memories?$/g, '$1 条记忆');
    out = out.replace(/^([\d,]+)\s+lessons?$/g, '$1 条经验');
    out = out.replace(/^([\d,]+)\s+crystals?$/g, '$1 个结晶');
    out = out.replace(/^([\d,]+)\s+actions?$/g, '$1 个行动');
    out = out.replace(/^([\d,]+)\s+types?$/g, '$1 种类型');
    out = out.replace(/^([\d,]+)\s+of\s+([\d,]+)\s+types$/g, '$1 / $2 种类型');
    out = out.replace(/^([\d,]+)\s+of\s+([\d,]+)$/g, '$1 / $2');

    out = out.replace(/^([\d,]+)\s+sessions?\s+·\s+active\s+(.+)$/g, '$1 个会话 · 活跃于 $2');
    // 画像页前缀带用户名：addspell · 19 sessions · active 刚刚
    out = out.replace(/^(.*?)\s*·\s*([\d,]+)\s+sessions?\s*·\s*active\s+(.+)$/gi, '$1 · $2 个会话 · 活跃于 $3');
    out = out.replace(/\b([\d,]+)\s+sessions?\s*·\s*active\s+(.+)$/gi, '$1 个会话 · 活跃于 $2');
    out = out.replace(/^([\d,]+)\s+pending\s+·\s+([\d,]+)\s+retrying\s+·\s+([\d,]+)\s+dead$/g, '$1 待处理 · $2 重试中 · $3 死信');
    out = out.replace(/^([\d,]+)\s+accepted\s+·\s+([\d,]+)\s+stored\s+·\s+([\d,]+)\s+duplicates skipped\s+·\s+([\d,]+)\s+recovered by retry\s+·\s+([\d,]+)\s+dead$/g, '$1 已接收 · $2 已存储 · $3 重复跳过 · $4 重试恢复 · $5 死信');
    out = out.replace(/^([\d,]+)\s+accepted\s+·\s+([\d,]+)\s+stored\s+·\s+([\d,]+)\s+duplicates skipped$/g, '$1 已接收 · $2 已存储 · $3 重复跳过');
    out = out.replace(/^([\d,]+)\s+stored\s+·\s+([\d,]+)\s+duplicates skipped$/g, '$1 已存储 · $2 重复跳过');
    out = out.replace(/^([\d,]+)\s+observations?\s+·\s+([\d,]+)\s+sessions?$/g, '$1 条观察 · $2 个会话');
    out = out.replace(/^([\d,]+)\s+relations?$/g, '$1 条关系');
    out = out.replace(/^([\d,]+)\s+not searchable$/g, '$1 条不可搜索');
    out = out.replace(/^([\d,]+)\s+not embedded$/g, '$1 条未嵌入');
    out = out.replace(/^([\d,]+)\s+not indexed$/g, '$1 条未索引');
    out = out.replace(/^([\d,]+)\s+dead letters?$/g, '$1 条死信');
    out = out.replace(/^([\d,]+)\s+accepted$/g, '$1 已接收');
    out = out.replace(/^([\d,]+)\s+stored$/g, '$1 已存储');
    out = out.replace(/^([\d,]+)\s+documents?$/g, '$1 个文档');
    out = out.replace(/^([\d,]+)\s+vectors?$/g, '$1 个向量');
    out = out.replace(/^([\d,]+)\s+vector changes?$/g, '$1 次向量变更');
    out = out.replace(/^([\d,]+)\s+nodes?\s*·\s*([\d,]+)\s+edges?$/g, '$1 个节点 · $2 条边');
    out = out.replace(/^([\d,]+)\s+since start$/g, '自启动以来 $1');
    out = out.replace(/^([\d,]+)\s+of\s+([\d,]+)\s+MB\s+\((\d+)%\)$/g, '$1 / $2 MB（$3%）');
    out = out.replace(/^([\d,]+)\s+\(([\d,]+)\s+running\)$/g, '$1 个（$2 个运行中）');
    out = out.replace(/^([\d,]+)\s+latest\s*·\s*([\d,]+)\s+including older versions$/g, '$1 条最新 · $2 条含旧版本');
    out = out.replace(/^([\d,]+)\s+new facts from\s+([\d,]+)\s+summaries$/g, '从 $2 条摘要新增 $1 条事实');
    out = out.replace(/^([\d,]+)\s+new insights?$/g, '新增 $1 条洞察');
    out = out.replace(/^([\d,]+)\s+days?\s+\((CONSOLIDATION_DECAY_DAYS)\)$/g, '$1 天（$2）');
    out = out.replace(/^runs at most once every\s+(\d+)\s+minutes?\s+\((.+)\)$/i, '最多每 $1 分钟运行一次（$2）');
    out = out.replace(/^skipped:\s*fewer than\s+(\d+)\s+recurring patterns$/g, '已跳过：重复模式少于 $1 条');
    out = out.replace(/^Show only\s+(.+?)\s+observations$/g, '仅显示$1观察');
    // 健康页状态存储类型：file / memory 这类枚举值译成中文，Redis、SQLite 保留原名
    out = out.replace(/^([\w.-]+)\s*·\s*ok\s*·\s*([\d.]+)\s*ms$/g, function (m, kind, ms) {
      var stores = {
        file: '文件', memory: '内存', redis: 'Redis', sqlite: 'SQLite',
        postgres: 'PostgreSQL', postgresql: 'PostgreSQL', jsonl: 'JSONL'
      };
      return (stores[kind.toLowerCase()] || kind) + ' · 正常 · ' + ms + ' 毫秒';
    });
    out = out.replace(/^([\w.-]+)\s*·\s*(\d+)\s*(?:obs|条观察)$/g, '$1 · $2 条观察');
    out = out.replace(/^·\s*([\d,]+)\s+relations?$/g, '· $1 条关系');
    out = out.replace(/^·\s*showing the\s+([\d,]+)\s+most connected$/g, '· 显示连接最多的 $1 个');
    out = out.replace(/^·\s*started$/g, '· 已开始');
    out = out.replace(/^·\s*updates live$/g, '· 实时更新');
    out = out.replace(/^·\s*tier all$/g, '· 全部层级');
    out = out.replace(/^·\s*tier\s+([\w-]+)$/gi, function (_, tier) {
      var tiers = { all: '全部层级', backfill: '回填', semantic: '语义事实', procedural: '流程' };
      return '· ' + (tiers[tier.toLowerCase()] || ('层级 ' + tier));
    });
    out = out.replace(/^REST\s+([\d,]+)\s*·\s*streams\s+([\d,]+)\s*·\s*viewer\s+(\S+)$/g, function (m, rest, streams, viewer) {
      return 'REST ' + rest + ' · 实时流 ' + streams + ' · 查看器 ' + (viewer === 'off' ? '关闭' : viewer);
    });
    out = out.replace(/^local\s+\((\d+)\s+dims\)$/g, '本地（$1 维）');
    out = out.replace(/^Search memories for\s+(.+)$/g, '搜索记忆：$1');
    out = out.replace(/^(.+?)\s*:\s*show only observations touching it$/g, '$1：仅显示涉及它的观察');
    out = out.replace(/^Files read, edited or written in the last\s+([\d,]+)\s+sessions,\s*relative to\s+(.+?)\.?$/g, '最近 $1 个会话中读取、编辑或写入的文件，相对于 $2。');

    // 活动 / 画像 / 回放中的动态计数与状态。
    out = out.replace(/^Counts the ([\d,]+) sessions loaded in this viewer, on the day each started\. Pick a shaded day to list its sessions\.$/g, '统计此查看器已加载的 $1 个会话，按各自开始日期计算。点击有阴影的日期可列出当天会话。');
    out = out.replace(/^([\d,]+) observations from the ([\d,]+) newest sessions$/g, '最新 $2 个会话中的 $1 条观察');
    out = out.replace(/^([\d,]+) in the last ([\d,]+) sessions$/g, '最近 $2 个会话中有 $1');
    out = out.replace(/^([\d,]+) observations \+ ([\d,]+) memories \+ ([\d,]+) lessons\. The keyword index holds observations, memories and lessons, so its total is larger than the observation count\.$/g, '$1 条观察 + $2 条记忆 + $3 条经验。关键词索引包含观察、记忆和经验，因此总数大于观察数。');
    out = out.replace(/^Saved at most every (\d+) minutes? \((.+)\)\. ([\d,]+) buckets?, ([\d,]+) unsaved changes?\.$/g, '最多每 $1 分钟保存一次（$2）。$3 个桶，$4 条未保存更改。');
    out = out.replace(/^v([\d.]+) · engine ([\d.]+)$/g, 'v$1 · 引擎 $2');
    out = out.replace(/^The picker above lists all ([\d,]+) loaded sessions\.$/g, '上方选择器列出全部 $1 个已加载会话。');
    out = out.replace(/^([\d,]+) loaded, newest first$/g, '$1 个已加载，最新在前');
    out = out.replace(/^failing: (.+)$/g, '失败：$1');
    out = out.replace(/^Log writes failing: (.+)$/g, '日志写入失败：$1');
    out = out.replace(/^(.+?) \(([\d,]+) observations?\)$/g, '$1（$2 条观察）');

    // 详情页属性：Open action / memory / lesson / crystal ...，以及 in session 形式。
    out = out.replace(/^Open (observation|memory|lesson|action|crystal|session|node|graph node|file|project|entry|audit entry|function|concept|pattern|error|tool)\s+(.+?)\s+in session\s+(.+)$/gi, function (m, kind, name, session) {
      var zh = OPEN_KINDS[kind.toLowerCase()] || kind;
      return '打开会话 ' + session + ' 中的' + zh + ' ' + name;
    });
    out = out.replace(/^Open (observation|memory|lesson|action|crystal|session|node|graph node|file|project|entry|audit entry|function|concept|pattern|error|tool)\s+(.+)$/gi, function (m, kind, name) {
      return '打开' + (OPEN_KINDS[kind.toLowerCase()] || kind) + ' ' + name;
    });
    out = out.replace(/^Frequently uses:\s*(.+)$/g, '经常使用：$1');
    out = out.replace(/^(.+?)\s+Link to this observation\.$/g, '$1 指向此观察的链接。');

    // 健康页的保存状态整句：先处理「saved X, unsaved changes since Y」，
    // 否则会被下面的通用 saved 规则吞掉，留下半句英文。
    out = out.replace(/^saved\s+(.+?)[,，]\s*unsaved changes since\s+(.+)$/gi, function (m, at, since) {
      return '已于 ' + at.trim() + '保存，自 ' + since.trim() + '起有未保存更改';
    });
    out = out.replace(/\bsaved\s+(.+?)[,，]\s*unsaved changes since\s+(.+?)(?=\.|$)/gi, function (m, at, since) {
      return '已于 ' + at.trim() + '保存，自 ' + since.trim() + '起有未保存更改';
    });
    out = out.replace(/^not saved since start[,，]\s*unsaved changes since\s+(.+)$/gi, '启动后尚未保存，自 $1 起有未保存更改');
    out = out.replace(/^not saved since start$/gi, '启动后尚未保存');
    out = out.replace(/^saved\s+(.+)$/gi, '已于 $1 保存');
    out = out.replace(/\bsnapshot rebuilt\s+([^.\n]+)(\.?)/gi, '快照重建于 $1$2');
    out = out.replace(/\bfinished\s+([^.\n]+)\./gi, '完成于 $1。');
    out = out.replace(/^finished\s+(.+)$/i, '完成于 $1');

    // 健康页 trim 状态整句：补齐全角标点，去掉拼接留下的空格
    out = out.replace(/(已清理 [\d,]+ 条记录)\s*[,，]\s*(已移除 [\d,]+ 个 id)\s*[,，]\s*(完成于[^。\n]*)。?\s*(不会再次运行。)?/g,
      function (m, a, b, c, d) { return a + '，' + b + '，' + c + '。' + (d || ''); });
    out = out.replace(/^last drained\s+(.+)$/i, '上次排空于 $1');
    out = out.replace(/^last run\s+(.+)$/i, '上次运行 $1');
    out = out.replace(/^next run\s+(.+)$/i, '下次运行 $1');
    out = out.replace(/^every\s+(\d+)\s+hours?/i, '每 $1 小时');
    out = out.replace(/^every\s+(\d+)\s+minutes?/i, '每 $1 分钟');
    out = out.replace(/^every\s+(\d+)\s+seconds?/i, '每 $1 秒');

    out = out.replace(/\bopen observation\s+(\S+)\s+in session\s+(\S+)/gi, '在会话 $2 中打开观察 $1');
    out = out.replace(/^open observation\s+(\S+)$/i, '打开观察 $1');
    out = out.replace(/\bfrom\s+(\d{1,2}\/\d{1,2}\/\d{4}.*?)\s+to\s+(\d{1,2}\/\d{1,2}\/\d{4}.*?)$/i, '从 $1 到 $2');
    out = out.replace(/\bfrom\s+(.+?)\s+to\s+(.+)$/i, '从 $1 到 $2');

    // 复制按钮标签：copyBtn 生成的小写文本
    out = out.replace(/^copy (text|curl for all|curl|id|name|MCP call|JSON)$/i, function (m, k) {
      var map = { 'text': '文本', 'curl for all': '全部 curl', 'curl': 'curl', 'id': 'ID', 'name': '名称', 'mcp call': 'MCP 调用', 'json': 'JSON' };
      return '复制 ' + (map[k.toLowerCase()] || k);
    });
    // 筛选框 aria-label
    out = out.replace(/^Filter sessions by (.+)$/i, '按 $1 筛选会话');
    out = out.replace(/^Filter by (.+)$/i, '按 $1 筛选');
    // 来源计数
    out = out.replace(/^1 source$/i, '1 个来源');
    out = out.replace(/^([\d,]+) sources$/i, '$1 个来源');
    out = out.replace(/^([\d.]+)%\s*·\s*([\d,]+) uses$/i, '$1% · $2 次使用');
    out = out.replace(/^priority (\d+)$/i, '优先级 $1');
    out = out.replace(/^(\d+) relations?$/i, '$1 个关系');
    // 下拉选项计数：仅当标签本身在词典里时翻译标签，括号统一成全角
    out = out.replace(/^(.+?)\s+\(([\d,]+)\)$/, function (m, label, n) {
      var key = label.trim();
      var zh = DICT[key];
      if (!zh) return m;
      return zh + '（' + n + '）';
    });

    // 复制按钮 aria-label / title：Copy <label>
    out = out.replace(/^Copy (.+)$/, function (m, k) {
      var zh = COPY_LABELS[k] || OPEN_KINDS[k.toLowerCase()] || DICT[k];
      return zh ? '复制 ' + zh : m;
    });

    out = out.replace(/^\+([\d,]+) more\.$/i, '还有 $1 条。');
    out = out.replace(/^Confidence ([\d.]+)%$/i, '置信度 $1%');
    out = out.replace(/^importance (\d+)\+$/i, '重要度 $1+');
    out = out.replace(/^([\d,]+)\s+actions?\s*·\s*([\d,]+)\s+ready$/i, '$1 个行动 · $2 个就绪');
    out = out.replace(/^Next reconnect attempt in (.+)\.$/i, '下次重连尝试在 $1 后。');
    out = out.replace(/^Reconnecting now\.$/i, '正在重新连接。');
    out = out.replace(/^Showing data as of (.+)\.$/i, '数据截至 $1。');
    out = out.replace(/^REST (.+) · streams (.+) · viewer (.+)$/i, function (m, rest, streams, viewer) {
      return 'REST ' + rest + ' · 流 ' + streams + ' · 查看器 ' + (viewer === 'off' ? '关闭' : viewer);
    });
    out = out.replace(/^The newest observations from the (\d+) newest sessions, grouped by session\. New ones appear at the top the moment an agent records them\.$/i,
      '来自最近 $1 个会话的最新观察，按会话分组。智能体一记录，新的观察就会出现在最上方。');
    out = out.replace(/^Working normally\. (\d+) notes? below about features that are off or checks that did not run\.$/i,
      '运行正常。下方 $1 条说明涉及未开启的功能或未执行的检查。');
    out = out.replace(/^(\d+) in the last (\d+) sessions$/i, '最近 $2 个会话中有 $1');

    // 会话时长与开始/结束时间的 title 提示。
    out = out.replace(/^No start time recorded$/i, '未记录开始时间');
    out = out.replace(/^Still running\.$/i, '仍在运行。');
    out = out.replace(/^Still running\.\s*The last observation arrived\s+(.+?)\s+after the start\.$/i, function (_, span) {
      return '仍在运行。最后一条观察在开始后 ' + translateDurationLabel(span) + ' 到达。';
    });
    out = out.replace(/^From\s+(.+?)\s+to\s+(.+)$/i, '从 $1 到 $2');

    return normalizeZhPunctuation(out);
  }

  function translateText(raw) {
    if (!raw || !/[A-Za-z]/.test(raw)) return raw;
    var exact = translateExact(raw);
    if (exact !== raw) return exact;
    // 文本节点常带排版缩进，动态规则按去掉首尾空白后的内容匹配。
    var lead = raw.match(/^\s*/)[0];
    var tail = raw.match(/\s*$/)[0];
    var core = raw.slice(lead.length, raw.length - tail.length);
    return lead + translateDynamic(core) + tail;
  }

  function translateFeedText(raw) {
    if (!raw || !/[A-Za-z]/.test(raw)) return raw;
    var exact = translateExact(raw);
    if (exact !== raw) return exact;
    // feed 的冒号后可能是记忆、会话或经验正文，只翻译已知的事件前缀与计数。
    var idx = raw.indexOf(': ');
    if (idx < 0) return translateDynamic(raw);
    var prefix = raw.slice(0, idx);
    var rest = raw.slice(idx + 2);
    var prefixZh = DICT[prefix.trim()] || translateDynamic(prefix.trim());
    var restZh = rest.trim().replace(/^([\d,]+)\s+observations?$/g, '$1 条观察');
    return prefixZh + '：' + restZh;
  }

  function processTextNode(node) {
    var el = node.parentElement;
    if (!el || isSkipped(el)) return;
    var next;
    if (el.closest('.audit-sum')) {
      // 审计摘要只翻译操作动词与备注里的层级枚举，目标名称和函数名保持原文。
      next = el.classList.contains('audit-sum')
        ? translateAuditSummaryText(node.nodeValue)
        : translateAuditNote(node.nodeValue);
    } else if (el.closest('.feed-text')) {
      next = translateFeedText(node.nodeValue);
    } else {
      next = translateText(node.nodeValue);
    }
    if (next !== node.nodeValue) node.nodeValue = next;
  }

  // 审计摘要形如 “Processed observations: 名称”，只替换第一个冒号前的动词。
  function translateAuditSummaryText(raw) {
    if (!raw) return raw;
    var idx = raw.indexOf(': ');
    var verb = idx >= 0 ? raw.slice(0, idx) : raw;
    var rest = idx >= 0 ? raw.slice(idx + 2) : '';
    var hit = DICT[verb.trim()];
    var verbZh = hasCjk(verb) ? verb : (hit || translateText(verb));
    if (!rest) return verbZh;
    // 单目标摘要的引号内是记录名称，保持原文。
    if (/^\s*[“"]/.test(rest)) return verbZh + '：' + translateAuditNote(rest);
    var units = {
      memory: '条记忆', observation: '条观察', session: '个会话', lesson: '条经验',
      action: '个行动', crystal: '个结晶', 'graph node': '个图谱节点', record: '条记录'
    };
    var counts = rest.replace(/\b([\d,]+)\s+(memories|memory|observations?|sessions?|lessons?|actions?|crystals?|graph nodes?|records?)\b/g, function (_, n, word) {
      var key = word.replace(/s$/, '');
      return n + ' ' + (units[key] || word);
    });
    return verbZh + '：' + translateAuditNote(counts);
  }

  // 审计备注里的层级名是固定枚举，只翻译括号中的值。
  function translateAuditNote(text) {
    var tiers = { all: '全部层级', backfill: '回填', semantic: '语义事实', procedural: '流程' };
    return text.replace(/(\(\s*)([a-z][\w-]*)(\s*\))/gi, function (_, open, tier, close) {
      var value = tiers[tier.toLowerCase()];
      return value ? '（' + value + '）' : open + tier + close;
    });
  }

  // 被跳过的内容容器（实体链接、标签、ID 等）里仍可能有界面动作属性，
  // 例如 title="Open memory mem_xxx"。只翻译以动作词开头的值，避免碰用户数据。
  var UI_ATTR_PREFIX = /^(Open|Copy|What is|Show|Filter|Search|Load|Sort|Toggle|Rebuild|Refresh|Dismiss)\b/i;

  function processElement(el) {
    if (!el || el.nodeType !== 1) return;
    var skipped = isSkipped(el);
    for (var i = 0; i < ATTRS.length; i++) {
      var a = ATTRS[i];
      var v = el.getAttribute(a);
      if (!v || !/[A-Za-z]/.test(v)) continue;
      if (skipped && !UI_ATTR_PREFIX.test(v)) continue;
      var next = el.closest('.feed-text') ? translateFeedText(v) : translateText(v);
      if (next !== v) el.setAttribute(a, next);
    }
  }

  function scan(root) {
    if (!root) return;
    if (root.nodeType === 3) { processTextNode(root); return; }
    if (root.nodeType !== 1 && root.nodeType !== 9 && root.nodeType !== 11) return;
    if (root.nodeType === 1) processElement(root);
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null);
    var n;
    while ((n = walker.nextNode())) {
      if (n.nodeType === 3) processTextNode(n);
      else processElement(n);
    }
  }

  // 行内 <a>/<code> 会把一句 UI 文案拆成多个文本节点，整段替换后再清掉已被吞并的子节点。
  var MERGED = {
    'Everything on these pages updates live over one streaming connection; nothing refreshes on a timer. Click any': '这些页面上的所有内容都通过一条实时流更新，不会按定时器刷新。点击任意',
    'page: the same checks and verdict, pushed over the stream every 30 seconds. Every problem says what to do. Scroll down for how consolidation works.': '页面：每 30 秒通过实时流推送相同的检查与结论。每个问题都会说明如何处理。向下滚动查看整合的工作方式。',
    'are durable facts, architecture notes, conventions and preferences agents keep across sessions. Saving a near-duplicate, or editing one here, creates a new version': '是智能体跨会话保留的持久事实、架构说明、约定和偏好。保存近似重复项或在此编辑，都会创建新版本',
    'and keeps the old one as history. Click a row for provenance, versions, edits and copy actions. Longer-lived facts and procedures are distilled from sessions by': '并保留旧版本作为历史。点击一行可查看来源、版本、编辑和复制操作。更持久的事实与流程由会话经',
    'Raw observations stay searchable as they are. Consolidation': '原始观察保持原样且仍可搜索。整合',
    'turns them into longer-lived layers: semantic facts': '会把它们转化为留存更久的层次：语义事实',
    'and procedures': '和流程',
    'are single runs of an agent in a project. Pick one to see its observations': '是智能体在某个项目中的一次完整运行。选择一个会话以查看其观察',
    'in order, the files it touched, and the memories and lessons it produced. New sessions and observations appear here live.': '按顺序查看它触碰的文件，以及产生的记忆和经验。新会话和观察会实时出现在这里。',
    'cached for up to an hour; Rebuild refreshes it': '缓存最长一小时；重建会刷新它',
    'condenses a finished chain of actions into one narrative with outcomes, files and lessons, so later sessions reuse it without replaying raw observations.': '将已完成的一连串行动浓缩为一段叙述，包含结果、文件和经验，后续会话无需回放原始观察即可复用。',
    'is the live version of the': '是在线版本，对应',
    'lists every change agentmemory made to stored data, newest first, as it happens. Target ids': '按发生时间倒序列出 agentmemory 对存储数据所做的每项变更。目标 id',
    'open the record they changed; details shows everything the entry recorded.': '会打开被更改的记录；详情显示该条目记录的全部内容。',
    'then a letter to jump ·': '然后按字母键跳转 ·',
    'for a short explanation, or use the keys below.': '查看简短说明，或使用下方按键。',
    'plays or pauses,': '播放或暂停，',
    'step.': '步。',
    '(still running; updates live)': '（仍在运行；实时更新）',
    '(10/18/2026, 11:25:30 PM)': ''
  };

  function mergeInlineNodes(root) {
    if (!root || root.nodeType !== 1) return;
    var candidates = root.querySelectorAll('p, .card > div, .empty-title, .mem-note, .inline-note, .go-desc, .flag-item-desc, .card-note, .stat-note, dd, dt');
    for (var i = 0; i < candidates.length; i++) {
      var el = candidates[i];
      if (isSkipped(el) || !el.textContent || !/[A-Za-z]/.test(el.textContent)) continue;
      var raw = el.textContent.replace(/\s+/g, ' ').trim();
      if (!MERGED[raw]) continue;
      el.textContent = MERGED[raw];
    }
  }

  function translateTitle() {
    if (document.title === 'agentmemory viewer') document.title = 'agentmemory 查看器';
  }

  // 所有日期统一按中文区域显示。
  (function patchLocale() {
    var originals = {};
    ['toLocaleDateString', 'toLocaleTimeString', 'toLocaleString'].forEach(function (name) {
      originals[name] = Date.prototype[name];
      Date.prototype[name] = function (locale, opts) {
        if (!locale || /^en(-|$)/i.test(String(locale))) locale = LOCALE;
        return originals[name].call(this, locale, opts);
      };
    });
    var NumberProto = Number.prototype;
    if (NumberProto && NumberProto.toLocaleString) {
      var nOriginal = NumberProto.toLocaleString;
      NumberProto.toLocaleString = function (locale, opts) {
        if (!locale || /^en(-|$)/i.test(String(locale))) locale = LOCALE;
        try { return nOriginal.call(this, locale, opts); } catch (_) { return nOriginal.call(this); }
      };
    }
  })();

  document.documentElement.lang = LOCALE;
  translateTitle();

  function fullPass() {
    mergeInlineNodes(document.body);
    scan(document.body);
    translateTitle();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fullPass, { once: true });
  } else {
    fullPass();
  }

  var pending = null;
  var observer = new MutationObserver(function (records) {
    for (var i = 0; i < records.length; i++) {
      var r = records[i];
      if (r.type === 'characterData') {
        if (r.target && r.target.parentElement && !isSkipped(r.target.parentElement)) {
          // 已被本脚本改写的节点不要重复处理。
          var cur = r.target.nodeValue;
          if (!hasCjk(cur)) processTextNode(r.target);
        }
      } else if (r.type === 'childList') {
        for (var j = 0; j < r.addedNodes.length; j++) {
          var n = r.addedNodes[j];
          if (n.nodeType === 3) processTextNode(n);
          else if (n.nodeType === 1) { mergeInlineNodes(n); scan(n); }
        }
      } else if (r.type === 'attributes') {
        processElement(r.target);
      }
    }
    if (pending) clearTimeout(pending);
    pending = setTimeout(function () { pending = null; translateTitle(); }, 120);
  });

  function startObserver() {
    if (!document.body) return;
    observer.observe(document.body, {
      childList: true, subtree: true, characterData: true,
      attributes: true, attributeFilter: ATTRS
    });
  }
  if (document.body) startObserver();
  else document.addEventListener('DOMContentLoaded', startObserver, { once: true });
})();`;

const outFile = path.join(ROOT, 'src', 'zh.js');
fs.writeFileSync(outFile, js.replace('__ZH_DICT__', zhJson) + '\n');
console.log(path.relative(ROOT, outFile), fs.statSync(outFile).size, 'dict', Object.keys(dict).length);
