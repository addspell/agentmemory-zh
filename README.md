# agentmemory-zh

agentmemory viewer 的简体中文汉化层：一个本地反向代理，在页面返回浏览器前注入中文词典和字体覆盖样式，不修改上游 `@agentmemory/agentmemory` 的安装文件。

## 组成

| 路径 | 作用 |
| --- | --- |
| `src/server.js` | 反向代理；注入 `src/zh.js` 与 `src/zh-font.css`，并转发 WebSocket |
| `src/zh.json` | 译文词典（英文原文 → 简体中文），当前 978 条 |
| `src/zh.js` | 由词典构建出的运行时注入脚本 |
| `src/zh-font.css` | 小字号加粗与颜色覆盖，缓解深色主题下发虚 |
| `tools/build-zh-js.js` | 从 `src/zh.json` 重建 `src/zh.js` |
| `tools/translate.js` | 用 OpenAI 兼容接口补译新词条（可选） |
| `patches/agentmemory-0.9.30-local.patch` | 针对上游 0.9.30 的本地功能补丁，与汉化无关 |

## 运行

需要 Node.js 18+。

```bash
npm install
node src/server.js
```

默认监听 `http://127.0.0.1:3123/`，转发到 `http://127.0.0.1:3113/`。

### 环境变量

| 变量 | 默认值 | 说明 |
| --- | --- | --- |
| `PORT` | `3123` | 汉化代理监听端口 |
| `LISTEN_HOST` | `127.0.0.1` | 监听地址 |
| `UPSTREAM_HOST` | `127.0.0.1` | 上游主机 |
| `UPSTREAM_PORT` | `3113` | 上游端口（源码部署的 viewer 常见为 `3112`） |
| `UPSTREAM_PROTO` | `http` | 上游协议，可设为 `https` |
| `WS_HOST` / `WS_PORT` | 跟随上游 | WebSocket 上游，源码部署时设 `WS_PORT=3112` |

### 两种部署方式

使用打包版（`dist/viewer`，默认 `3113`）：

```bash
node src/server.js
```

使用源码启动的 viewer（HTTP `3112`）：

```bash
WS_PORT=3112 UPSTREAM_PORT=3112 node src/server.js
```

如果 `3112` 只是直接提供 `index.html` 而没有代理 `/agentmemory` 接口，请把 `UPSTREAM_PORT` 指向真正的 API 端口，仅将 `WS_PORT` 设为 `3112`。

## 重新生成注入脚本

修改 `src/zh.json` 后：

```bash
node tools/build-zh-js.js
```

脚本只读取词典并生成 `src/zh.js`，不会改动上游安装目录。

## 扫描并补译

`tools/translate.js` 从 `data/en-final.json` 读取待译英文串、写入 `data/zh.partial.json` 缓存，最终输出 `src/zh.json`。它读取 `AGENTMEMORY_ENV_FILE` 指定的 `.env`（默认 `~/.agentmemory/.env`）中的 `OPENAI_BASE_URL`、`OPENAI_MODEL`、`OPENAI_API_KEY`。

```bash
AGENTMEMORY_ENV_FILE=~/.agentmemory/.env node tools/translate.js
```

缺失清单写入 `data/zh-missing.json`。也可以直接手工编辑 `src/zh.json`。

## 关于本地补丁

`patches/agentmemory-0.9.30-local.patch` 是另一组改动，覆盖会话 observation 分片、摘要刷新、semantic fact 转 Memories 等，和页面汉化相互独立。它作用于已安装包的构建产物：

```bash
cd node_modules/@agentmemory/agentmemory
patch -p0 < /path/to/patches/agentmemory-0.9.30-local.patch
```

升级上游版本后补丁可能无法直接应用，请先复核。

## 说明

- 产品名、命令、路径、函数 ID、模型名和用户数据保持英文，不做翻译。
- 页面注入后会禁用 HTML 缓存，避免浏览器继续显示旧译文。
- 上游项目：<https://github.com/rohitg00/agentmemory>（Apache-2.0）。
