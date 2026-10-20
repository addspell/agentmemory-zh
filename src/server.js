const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const LISTEN_HOST = process.env.LISTEN_HOST || '127.0.0.1';
const LISTEN_PORT = Number(process.env.PORT || 3123);
const UPSTREAM_HOST = process.env.UPSTREAM_HOST || '127.0.0.1';
const UPSTREAM_PORT = Number(process.env.UPSTREAM_PORT || 3113);
// WebSocket 默认跟 HTTP 走同一上游；源码部署时通常是 3112。
const WS_HOST = process.env.WS_HOST || UPSTREAM_HOST;
const WS_PORT = Number(process.env.WS_PORT || UPSTREAM_PORT);
// 上游若是 HTTPS，把 UPSTREAM_PROTO 设为 https。
const UPSTREAM_PROTO = process.env.UPSTREAM_PROTO || 'http';
const upstreamClient = UPSTREAM_PROTO === 'https' ? https : http;
const ZH_JS = fs.readFileSync(path.join(__dirname, 'zh.js'), 'utf8').replace(/<\//g, '<\\/');
const ZH_CSS_PATH = path.join(__dirname, 'zh-font.css');
const ZH_CSS = fs.existsSync(ZH_CSS_PATH) ? fs.readFileSync(ZH_CSS_PATH, 'utf8') : '';

function buildInjection(nonce) {
  // 服务端 nonce 必须与 CSP 一致，脚本才能通过 script-src 检查。
  return `<script nonce="${nonce}">${ZH_JS}</script>\n`;
}

function buildStyle() {
  // 字体覆盖样式，插在 </head> 之前，保证排在页面自带 <style> 之后生效。
  if (!ZH_CSS) return '';
  return `<style id="zh-font-override">\n${ZH_CSS}</style>\n`;
}

function injectHtml(html) {
  const nonceMatch = html.match(/<script[^>]*\bnonce="([^"]+)"/i);
  if (!nonceMatch) return html;
  const nonce = nonceMatch[1];
  let out = html.replace(/<html\b([^>]*)\blang="[^"]*"/i, '<html$1lang="zh-CN"');
  if (!/\blang="zh-CN"/i.test(out)) out = out.replace(/<html\b/i, '<html lang="zh-CN"');
  if (!/<title>/i.test(out)) {
    // 页面标题由注入脚本处理，这里不额外改动。
  }
  const styleTag = buildStyle();
  if (styleTag) {
    out = /<\/head>/i.test(out)
      ? out.replace(/<\/head>/i, styleTag + '</head>')
      : styleTag + out;
  }
  out = out.replace(/(<script\b[^>]*\bnonce="[^"]+"[^>]*>)/i, (match) => buildInjection(nonce) + match);
  return out;
}

function proxyRequest(req, res) {
  const target = `${UPSTREAM_PROTO}://${UPSTREAM_HOST}:${UPSTREAM_PORT}${req.url}`;
  const headers = Object.assign({}, req.headers, { host: `${UPSTREAM_HOST}:${UPSTREAM_PORT}` });
  // 上游会校验 Origin；浏览器的 3123 同源请求需要伪装成 3113 同源。
  if (headers.origin) headers.origin = `http://${UPSTREAM_HOST}:${UPSTREAM_PORT}`;
  if (headers.referer) {
    headers.referer = headers.referer.replace(/^http:\/\/127\.0\.0\.1:3123/i, `http://${UPSTREAM_HOST}:${UPSTREAM_PORT}`);
  }
  delete headers['accept-encoding'];

  const upstream = upstreamClient.request(target, { method: req.method, headers }, (up) => {
    const baseHeaders = {};
    for (const [k, v] of Object.entries(up.headers)) {
      const lower = k.toLowerCase();
      if (lower === 'content-length' || lower === 'content-encoding' || lower === 'transfer-encoding') continue;
      baseHeaders[k] = v;
    }

    const isHtml = String(up.headers['content-type'] || '').toLowerCase().includes('text/html');
    if (!isHtml || req.method === 'HEAD') {
      res.writeHead(up.statusCode || 502, baseHeaders);
      up.pipe(res);
      return;
    }

    const chunks = [];
    up.on('data', (c) => chunks.push(c));
    up.on('end', () => {
      const html = Buffer.concat(chunks).toString('utf8');
      const body = Buffer.from(injectHtml(html), 'utf8');
      // 汉化靠运行时注入，页面一旦被缓存就会继续显示旧版本；这里显式禁用缓存。
      baseHeaders['cache-control'] = 'no-store, no-cache, must-revalidate';
      delete baseHeaders.etag;
      delete baseHeaders['last-modified'];
      baseHeaders['content-length'] = String(body.length);
      res.writeHead(up.statusCode || 200, baseHeaders);
      res.end(body);
    });
    up.on('error', () => {
      if (!res.headersSent) res.writeHead(502, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('上游响应中断');
    });
  });

  upstream.on('error', (err) => {
    if (!res.headersSent) res.writeHead(502, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('无法连接 agentmemory viewer: ' + err.message);
  });
  req.pipe(upstream);
}

function proxyUpgrade(req, socket, head) {
  // 让浏览器的 ws://127.0.0.1:3123 直接转到 3112，避免 3122 端口不存在。
  const target = `http://${WS_HOST}:${WS_PORT}${req.url}`;
  const upstream = http.request(target, {
    method: req.method,
    headers: (() => {
      const headers = Object.assign({}, req.headers, { host: `${WS_HOST}:${WS_PORT}` });
      if (headers.origin) headers.origin = `http://${UPSTREAM_HOST}:${UPSTREAM_PORT}`;
      if (headers.referer) {
        headers.referer = headers.referer.replace(/^http:\/\/127\.0\.0\.1:3123/i, `http://${UPSTREAM_HOST}:${UPSTREAM_PORT}`);
      }
      return headers;
    })()
  });
  upstream.on('upgrade', (upRes, upSocket, upHead) => {
    socket.write(
      `HTTP/1.1 101 Switching Protocols\r\n` +
      Object.entries(upRes.headers).map(([k, v]) => `${k}: ${v}`).join('\r\n') +
      '\r\n\r\n'
    );
    if (upHead && upHead.length) socket.write(upHead);
    upSocket.pipe(socket).pipe(upSocket);
  });
  upstream.on('response', (upRes) => {
    // WebSocket 未升级时把状态码透传回去。
    socket.write(`HTTP/1.1 ${upRes.statusCode} ${upRes.statusMessage || ''}\r\n\r\n`);
    socket.destroy();
  });
  upstream.on('error', () => socket.destroy());
  upstream.end();
}

const server = http.createServer(proxyRequest);
server.on('upgrade', proxyUpgrade);
server.on('clientError', (err, socket) => {
  if (socket.writable) socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(LISTEN_PORT, LISTEN_HOST, () => {
  console.log(`中文查看器已启动: http://${LISTEN_HOST}:${LISTEN_PORT}/`);
});
