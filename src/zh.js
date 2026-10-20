(function () {
  'use strict';
  if (window.__agentmemoryZhInstalled) return;
  window.__agentmemoryZhInstalled = true;

  var DICT = {"(still running; updates live)":"(仍在运行中；实时更新）","A 1 to 10 score for how much an observation matters: 1 to 3 low (green), 4 to 6 medium (yellow), 7 to 10 high (red). With an LLM provider the compressor rates each observation; without one every observation gets the default 5. Session-start context uses observations rated 5 or higher, highest first, and old low-rated ones are evicted first.":"1 到 10 的分数，表示一条观察的重要程度：1 到 3 为低（绿色），4 到 6 为中（黄色），7 到 10 为高（红色）。配置 LLM 提供方时由压缩器为每条观察评分；未配置时所有观察默认为 5。会话开始上下文会使用评分不低于 5 的观察，分数最高者优先，旧的低分观察会先被清除。","A background step that turns many raw observations into fewer, longer-lived records: semantic facts and procedures. It needs an LLM provider.":"一个后台步骤，将大量原始观察转化为数量更少、留存更久的记录：语义事实和流程。需要配置 LLM 提供方。","A compact summary of one finished piece of work: what happened, tools used, files touched and lessons found. Kept after raw observations are pruned.":"对一件已完成工作的简要总结：发生了什么、使用了哪些工具、涉及哪些文件以及获得的经验。在原始观察被清理后仍会保留。","A crystal":"一个结晶","A durable fact the agent should keep across sessions, such as an architecture note, a convention or a preference. Saved with memory_save or distilled from observations.":"智能体应跨会话保留的持久事实，例如架构说明、约定或偏好。通过 memory_save 保存，或从观察中提炼而来。","A file the agent read, edited or that a code import found.":"智能体读取、编辑过的文件，或代码导入发现的文件。","A follow-up the agent tracked: a task, a decision to revisit, something blocked on input. Moves pending, active, done or blocked.":"智能体跟踪的后续事项：一个任务、需要重新审视的决策，或等待输入而受阻的事项。状态会在待处理、进行中、已完成或受阻之间流转。","A project profile":"一个项目画像","A record of every change agentmemory made to stored data: saves, deletes, imports, consolidation runs. Use it to see who changed what and when.":"agentmemory 对存储数据所做的每项变更的记录：保存、删除、导入、整合运行。可以用它查看谁在何时更改了什么。","A relation between two entities, such as \"uses\", \"fixes\" or \"depends on\".":"两个实体之间的关系，例如 \"uses\"、\"fixes\" 或 \"depends on\"。","A rough estimate of prompt tokens saved by injecting a compact memory context instead of replaying every observation. It assumes about 80 tokens per observation and a 2,000 token budget per session.":"通过注入精简的记忆上下文而非回放每条观察所节省的提示 token 的粗略估算。按每条观察约 80 个 token、每个会话 2,000 token 预算计算。","A short rule learned from past work (\"always run tsc before commit\"). Its confidence grows when the agent re-confirms it and decays when unused.":"从过往工作中学到的简短规则（\"提交前始终运行 tsc\"）。智能体再次确认时其置信度会提升，长期不用则会衰减。","A small file on this machine where hooks keep observations when the server is down or does not answer. It is sent automatically on the next hook call and at every start, and each observation carries an event id so nothing is stored twice.":"本机上的一个小文件，当服务器宕机或无响应时，hook 会将观察暂存于此。它会在下一次 hook 调用时以及每次启动时自动发送，并且每条观察都带有事件 id，因此不会重复存储。","A topic that came up in the work, such as pricing or auth.":"工作中出现过的主题，例如定价或鉴权。","Actions are follow-ups an agent surfaced during a session: decisions to revisit, files to inspect, tasks blocked on input. They stay here so nothing slips between sessions, and the ready ones are handed to the next session first.":"行动是智能体在会话中提出的后续事项：需要重新审视的决策、需要查看的文件、等待输入的任务。它们保存在这里以免在会话之间被遗漏，就绪的行动会优先交给下一个会话。","Actions that are unblocked and ready to pick up next. Everything they depend on is done.":"未受阻、可以随时执行的行动。它们依赖的事项均已完成。","Activity heatmap":"活动热力图","Add to the graph":"添加到图谱","After a session ends":"会话结束后","Agents connected with hooks are recorded live and need no import. Import is for work done before agentmemory was connected: it reads chat transcripts saved as JSONL, one message per line (the format Claude Code keeps under":"通过 hook 接入的智能体会被实时记录，无需导入。导入功能用于 agentmemory 接入之前的工作：它读取保存为 JSONL 的聊天记录，每行一条消息（即 Claude Code 在","all features on":"全部功能开启","All operations":"所有操作","All projects":"所有项目","All types":"所有类型","Any importance":"任意重要性","Any status":"任意状态","At a glance":"概览","Audit log":"审计日志","Average latency":"平均延迟","Average time one call of the function took to finish.":"函数单次调用完成所需的平均时间。","Avg latency":"平均延迟","Busiest recent sessions":"近期最活跃的会话","Capture inbox":"采集收件箱","Circuit breaker":"熔断器","click to hide or show":"点击可隐藏或显示","Close":"关闭","close panels and popups":"关闭面板和弹窗","Close session details":"关闭会话详情","Consolidation is a background job that turns many raw observations into fewer records that last longer. Observations are never deleted by it and stay searchable. Each step asks the LLM to summarize, so it needs an LLM provider.":"整合是一个后台任务，将大量原始观察转化为更持久、更少的记录。它不会删除观察，观察仍可搜索。每一步都需要 LLM 进行摘要，因此需要配置 LLM 提供商。","Context saved":"上下文已保存","Context saved (estimate)":"上下文已保存（估算）","copy":"复制","Counted over memories and the last 20 sessions. Pick one to search memories for it.":"统计范围覆盖全部记忆和最近 20 个会话。选择一个即可用它搜索记忆。","Crystallize every finished action now:":"立即结晶所有已完成的行动：","Crystallizing finished actions and importing transcripts on the Replay page also produce lessons.":"在回放页结晶已完成的行动并导入会话记录也会产生经验。","Decay period":"衰减周期","details":"详情","Details":"详情","Duplicates are the same event delivered twice, for example a replay after a timeout. They are kept once.":"重复是指同一事件被投递两次，例如超时后的回放。它们只保留一次。","Each layer now":"当前各层","Embeddings used for meaning-based search. It needs an embedding provider; without one, search is keyword only.":"嵌入用于基于语义的搜索。它需要嵌入提供方；没有的话，搜索将仅基于关键词。","Empty means every accepted observation is stored.":"留空表示存储所有已接受的观察。","Engine and connection":"引擎与连接","Engine connection":"引擎连接","Entities (files, functions, concepts, errors, decisions) and the relations between them. When a session ends, the files and concepts in its observations become nodes, and ones that appear in the same observation get a \"related to\" relation; no LLM is needed for that. With GRAPH_EXTRACTION_ENABLED=true and an LLM provider, an LLM also adds typed entities and relations such as \"uses\" or \"fixes\". A structural code graph can be imported with POST /graph/import-graphify.":"实体（文件、函数、概念、错误、决策）及其之间的关系。会话结束时，其观察中的文件和概念会成为节点，出现在同一观察中的节点会建立 \"related to\"(相关）关系；这不需要 LLM。当 GRAPH_EXTRACTION_ENABLED=true 且配置了 LLM 提供方时，LLM 还会添加带类型的实体和关系，例如 \"uses\"(使用）或 \"fixes\"(修复）。可以通过 POST /graph/import-graphify 导入结构化代码图谱。","Event loop delay":"事件循环延迟","Every check passed":"所有检查均已通过","Every observation a hook sends is written here first and removed once it is stored. If storing fails or the server restarts, it is retried instead of lost. Dead letters are the ones that still failed after every retry.":"hook 发送的每条观察都会先写入此处，存储成功后即被移除。如果存储失败或服务器重启，会进行重试而不是丢失。死信是指重试全部失败的那部分。","Everything the process holds from the operating system, including code and buffers.":"进程从操作系统持有的全部内存，包括代码和缓冲区。","Failure rate":"失败率","Feature flags":"功能开关","file read":"文件读取","Filter audit entries by target id or function":"按目标 ID 或函数筛选审计条目","Filter by operation":"按操作筛选","Filter by target id or function, e.g. mem_ or lesson-save (press /)":"按目标 ID 或函数筛选，例如 mem_ 或 lesson-save(按 /)","Filter nodes by type":"按类型筛选节点","Find a node (press /)":"查找节点（按 /)","Find a node by name":"按名称查找节点","Fit the graph to the view":"将图谱适配到视图","focus search on this page":"聚焦本页搜索","from a terminal":"从终端","From an agent, call the MCP function:":"从智能体调用 MCP 函数：","From date":"开始日期","Function calls":"函数调用","Function metrics and workers":"函数指标与工作进程","General facts distilled from many sessions (\"the API uses jose for JWT\"). Produced by consolidation.":"从大量会话中提炼出的一般性事实（如 “API 使用 jose 处理 JWT”)。由整合生成。","glossary":"术语表","Glossary and keyboard shortcuts":"术语表与键盘快捷键","Glossary and keyboard shortcuts (?)":"术语表与键盘快捷键（?)","Graph details":"图谱详情","Health status":"健康状态","Healthy means everything is normal. Degraded means something needs attention but memory still works. Critical means a core part is failing.":"健康表示一切正常。降级表示有需要关注的问题，但记忆功能仍可用。严重表示核心组件出现故障。","Hooks record every tool call, edit and command.":"hook 会记录每次工具调用、编辑和命令。","How battle-tested a lesson is, from 0 to 100%. New lessons start at 50% unless the saver sets it. Each use closes 10% of the gap to 100% (50% becomes 55%). A lesson not used for a week loses 5 points per week, down to 5%; one that falls to 10% without ever being used is dropped. Recall ranks higher-confidence lessons first.":"经验的实战检验程度，范围为 0 到 100%。新经验默认 50%，保存者可自行设置。每次使用会将差距缩小 10%（50% 变为 55%）。一周未使用的经验每周扣 5 分，最低降至 5%；降至 10% 且从未被使用过的经验会被删除。召回时置信度较高的经验排在前面。","How consolidation works":"整合的工作方式","How far behind the worker is in handling work. Under 20 ms is healthy; a large value means it is busy or blocked.":"工作进程处理任务的落后程度。低于 20 ms 为健康；数值过大表示其繁忙或受阻。","How far behind the worker is. Under 100 ms is fine; above that requests answer slowly.":"工作进程的落后程度。低于 100 ms 为正常；超过该值时请求响应会变慢。","How important a memory is, from 1 to 10. memory_save and the REST API store 7; consolidation rates each distilled memory itself. Stronger memories go first into the context agents get at session start, and bulk cleanup can target weak ones.":"记忆的重要性，范围为 1 到 10。memory_save 和 REST API 默认存为 7；整合过程会为每条提炼出的记忆单独评级。更重要的记忆会优先进入智能体在会话开始时获得的上下文，批量清理时也可针对低重要性记忆。","How long the agentmemory worker has been running since it last started.":"agentmemory 工作进程自上次启动以来的运行时长。","How many relations touch this node. Nodes with more relations are drawn larger and get their labels first.":"与该节点相关联的关系数量。关系越多的节点绘制得越大，并优先显示标签。","How many times agentmemory functions (observe, search, remember, summarize and so on) ran since the worker started, with their failure counts.":"自工作进程启动以来，agentmemory 各功能（observe、search、remember、summarize 等）的运行次数及失败次数。","How many times the lesson was confirmed again: saved again with the same text by any agent, or strengthened with memory_lesson_strengthen. Each use raises confidence and restarts the decay clock.":"该经验再次被确认的次数：任何智能体以相同文本重新保存，或通过 memory_lesson_strengthen 强化。每次使用都会提升置信度并重置衰减计时。","How to fill it":"如何填写","Import a structural code graph made by graphify:":"导入由 graphify 生成的结构化代码图谱：","Import past transcripts":"导入历史会话记录","Inferred from the files and concepts above, not written by an agent. Preferences you save as memories sit on the Memories page.":"由上方文件和概念推断而来，并非由智能体撰写。你作为记忆保存的偏好位于“记忆”页面。","Is it healthy":"是否健康","is what agentmemory learned about one codebase from its sessions and memories. Agents get it as context at session start. It opens on the project an agent worked in most recently.":"是 agentmemory 从某个代码库的会话和记忆中了解到的情况。智能体会在会话开始时把它作为上下文。默认打开最近有智能体工作的项目。","JavaScript memory in use against the most it may grow to. It only matters above 80% while RSS is also over 512 MB.":"JavaScript 内存使用量与其上限的对比。仅当超过 80% 且 RSS 同时超过 512 MB 时才有影响。","JavaScript memory the worker is using, compared with the limit it may grow to. Warnings only matter when the process is also large overall.":"工作进程当前使用的 JavaScript 内存及其可增长到的上限。仅当进程整体占用也较大时，警告才有意义。","jump to a page in order":"按顺序跳转到某一页","just now":"刚刚","Keyword index":"关键词索引","Keyword index (BM25)":"关键词索引（BM25)","Keyword rebuild":"关键词重建","Kind of work":"工作类型","Knowledge graph":"知识图谱","Knowledge graph. Use plus and minus to zoom, 0 to fit, arrow keys to pan. Pick nodes from the list beside the graph.":"知识图谱。使用加号和减号缩放，0 键适配视图，方向键平移。可从图谱旁边的列表中选择节点。","Last activity":"最近活动","Latest observations":"最新观察","Lessons / crystals":"经验 / 结晶","Lessons are short rules learned from past work, such as a mistake you corrected once that an agent should not repeat. Agents recall the matching ones before they start a task.":"经验是从过去工作中总结出的简短规则，例如你纠正过一次的错误，智能体不应再重复。智能体在开始任务前会回忆匹配的经验。","live":"实时","Live feed":"实时流","Live updates":"实时更新","LLM and embeddings":"LLM 与嵌入","LLM breaker":"LLM 熔断器","LLM calls flowing normally":"LLM 调用正常流动","LLM circuit breaker":"LLM 熔断器","LLM provider":"LLM 提供商","Local capture spool":"本地采集缓冲池","Machine checks (keys, engine binary, pid files):":"机器检查（密钥、引擎二进制、pid 文件）：","Matching nodes":"匹配节点","Meaning-based search. Each vector is one embedded record.":"基于语义的搜索。每个向量对应一条已嵌入的记录。","Memory layers":"记忆分层","Memory use":"记忆使用","Missing from index":"未入索引","Most connected":"联系最多","New and removed vectors are written here right away and replayed after a crash, so nothing is embedded twice. Each save empties it.":"新增和移除的向量会立即写入此处，崩溃后重放，确保不会重复嵌入。每次保存都会清空它。","newest first · importance":"最新优先 · 重要性","No action has been marked done and crystallized yet. Crystals are built from done actions.":"尚无行动被标记为已完成并结晶。结晶由已完成的行动构建。","No actions tracked yet":"尚未跟踪任何行动","No agent has created an action on this install yet.":"此安装上还没有智能体创建过行动。","No agent has saved a lesson, and no crystal or transcript import has produced one on this install yet.":"此安装上还没有智能体保存过经验，结晶或导入对话记录也尚未产生过经验。","No crystals yet":"尚无结晶","No lessons yet":"尚无经验","No problems found: the engine is connected, the search index matches the stored observations and no function is failing.":"未发现问题：引擎已连接，搜索索引与存储的观察一致，没有函数报错。","Node types":"节点类型","Nodes with no relation yet. They sit in the dashed box under the graph until an observation mentions them together with another entity.":"尚无关系的节点。在观察中与其他实体一起被提及之前，它们位于图谱下方的虚线框内。","not recorded":"未记录","Nothing links back here yet. A memory links to this session when it is distilled from its observations by consolidation (needs an LLM) or saved with":"尚无内容链接到这里。当某条记忆由整合（需要 LLM）从该会话的观察中提炼而成，或通过保存命令保存时，才会链接到此会话。","Observations indexed":"已索引的观察","Observations that are searchable. The keyword index also contains memories and lessons, which is why its total is larger.":"可搜索的观察。关键词索引还包含记忆和经验，因此其总数更大。","Offline spool":"离线缓冲区","On a timer":"定时触发","One entity in the knowledge graph, such as a file, a function, a library or a concept.":"知识图谱中的一个实体，例如文件、函数、库或概念。","One run of an agent in a project, from start to end. Observations belong to a session.":"智能体在项目中的一段完整运行，从开始到结束。观察归属于某个会话。","One square per day. The shade is how many observations the sessions that started that day recorded; darker means more. Only the sessions loaded in this viewer are counted, and the note under the grid says how many that is.":"每天一个方格。颜色深浅表示当天开始的会话记录的观察数量；越深表示越多。仅统计此查看器中已加载的会话，网格下方的说明会显示具体数量。","One thing an agent did during a session: a file read or edit, a command, a search, an error, a decision. Hooks capture them automatically.":"智能体在一次会话中做的一件事：读取或编辑文件、执行命令、搜索、出错或决策。hook 会自动采集这些内容。","Open overview":"打开概览","open this help":"打开此帮助","Optional features that are on or off in this install. Off features leave some pages empty; each one lists the setting that turns it on.":"本安装中已开启或关闭的可选功能。关闭的功能会导致某些页面为空；每个页面都会列出开启它所需的设置。","Or from a terminal, linked to the session it came from:":"或在终端中运行，并关联到其来源会话：","Or from a terminal:":"或在终端中运行：","Or from an agent, for specific actions:":"或通过智能体针对特定行动运行：","Path to a .jsonl transcript or a folder of them; empty uses ~/.claude/projects":"指向 .jsonl 记录文件或其所在文件夹的路径；留空则使用 ~/.claude/projects","Pick a session to replay":"选择要回放的会话","plays a recorded session back step by step: prompts, responses and tool calls in order, with their real timing. It works for sessions from every connected agent.":"按步骤回放已录制的会话：按顺序呈现提示、回复和工具调用，并保留真实时间间隔。适用于所有已连接智能体的会话。","Plays back a past session step by step: prompts, responses and tool calls in the order they happened, with their real timing. Works for any session agentmemory recorded, from any connected agent.":"按步骤回放过去的会话：按发生顺序呈现提示、回复和工具调用，并保留真实时间间隔。适用于 agentmemory 记录的任何会话，无论来自哪个已连接的智能体。","Processes connected to the iii engine. agentmemory runs as one worker.":"连接到 iii 引擎的进程。agentmemory 作为一个工作进程运行。","Produced from this session":"由本次会话生成","Profile built":"画像已构建","Project profile":"项目画像","Protects against a failing LLM provider. Closed means calls go through normally. Open means too many recent failures, so calls are paused briefly. Half-open means it is testing whether the provider recovered.":"防止 LLM 提供方故障的保护机制。闭合表示调用正常通过。打开表示近期失败过多，调用被短暂暂停。半开表示正在测试提供方是否已恢复。","Provenance compaction":"来源压缩","Query it from an agent:":"从智能体查询：","Re-check now":"立即重新检查","Rebuild the profile from the latest sessions and memories now instead of using the cached copy":"立即根据最新的会话和记忆重建画像，而不是使用缓存副本","Rebuilt from stored data at every start, so it is never saved to disk.":"每次启动时从存储的数据重建，因此从不保存到磁盘。","Recall the memories relevant to a task:":"召回与任务相关的记忆：","Recent highlights":"近期亮点","Recent sessions":"近期会话","Records that are never used lose strength or confidence over time, so stale knowledge stops crowding out fresh knowledge.":"从未被使用的记录会随时间降低强度或置信度，从而避免过时知识挤占新知识。","Records waiting for an embedding so they can be found by meaning, not only by keywords.":"等待嵌入的记录，以便可以按语义而非仅按关键词检索。","Recurring errors":"重复出现的错误","related to":"关联于","Relation types":"关系类型","Relations (degree)":"关系（度数）","Repeats skipped":"已跳过重复项","Rules agentmemory infers from the files and concepts above: TypeScript when .ts files outnumber .js, a src/ layout when most files sit under src/, tests when test or spec files appear, and any concept that came up 3 or more times.":"agentmemory 从上方文件和概念中推断出的规则：当 .ts 文件多于 .js 时使用 TypeScript,大多数文件位于 src/ 下时采用 src/ 布局，出现 test 或 spec 文件时视为有测试，以及任何出现 3 次或以上的概念。","rules learned from past work":"从过往工作中学到的规则","Run consolidation now":"立即运行整合","Same call from a terminal:":"从终端执行相同调用：","Save a new memory from a terminal:":"从终端保存新记忆：","saved by agents (memory_lesson_save), stronger with each reuse; unused ones lose confidence weekly":"由智能体保存（memory_lesson_save），每次复用都会增强；未使用的规则每周降低置信度","Saving a near-duplicate of a memory, or editing it here, creates a new version instead of changing it in place. v3 means two earlier versions exist. Only the latest version is searched; older ones stay as history.":"保存记忆的近似副本，或在此处编辑，都会创建新版本而非原地修改。v3 表示已存在两个更早的版本。只有最新版本会被搜索；旧版本保留为历史。","Schedule and thresholds":"计划与阈值","Search by meaning and keyword together:":"同时按语义和关键词搜索：","Search index":"搜索索引","Search memories":"搜索记忆","Search memories by meaning or keyword (press /)":"按语义或关键词搜索记忆（按 /)","Search prompt, project, id or agent (press /)":"搜索提示、项目、id 或智能体（按 /)","Search sessions":"搜索会话","Semantic facts":"语义事实","Semantic facts / procedures":"语义事实 / 流程","Session status":"会话状态","Session to replay":"要回放的会话","Sessions and observations per day":"每日会话与观察数量","Share of calls that failed. Functions that need an LLM show as off, not failing, when no LLM provider is set.":"调用失败的比例。未设置 LLM 提供商时，需要 LLM 的函数显示为关闭而非失败。","Share of one core used since the last report. Short bursts during imports are normal.":"自上次报告以来单核占用比例。导入期间的短暂飙升属正常现象。","shows when agents worked and what they did. Pick a day, a kind of work or a file to narrow the feed; every entry links to its session and observation. The feed updates live.":"显示智能体何时工作以及做了什么。选择某天、某类工作或某个文件可缩小动态范围；每条记录都会链接到它的会话和观察。动态实时更新。","Skip to content":"跳转到正文","Spool and inbox, with --drain to send the spool now:":"暂存队列与收件箱；使用 --drain 可立即发送暂存内容：","State store":"状态存储","Step-by-step workflows the agent repeated successfully (\"to release: bump, tag, publish\"). Produced by consolidation from finished sessions with a summary; it stays empty until enough such sessions exist.":"智能体反复成功执行的逐步工作流（例如“发布流程：升版本、打标签、发布”)。由整合从带总结的已完成会话生成；在积累足够多此类会话之前会一直为空。","Still running.":"仍在运行。","Stored observations that are not searchable yet. They are added in the background; a large number that does not shrink means indexing is stuck.":"已存储但尚不可搜索的观察。它们在后台被加入索引；如果数量很大且持续不减，说明索引已卡住。","Stored records":"已存储记录","summaries of finished work":"已完成工作的总结","The files, functions, concepts and decisions agents worked with, and how they relate. Click a node to see its relations and the observations it came from.":"智能体处理过的文件、函数、概念和决策，以及它们之间的关系。点击节点可查看其关系及来源观察。导入的代码图谱节点会显示导入来源。","The full-text index used for keyword search. It holds observations, memories and lessons, so its document count is usually higher than the observation count.":"用于关键词搜索的全文索引。它包含观察、记忆和经验，因此其文档数通常高于观察数。","The LLM writes one summary when a session ends.":"会话结束时，LLM 会写入一条总结。","The number in brackets is the vector size (dimensions) the provider returns.":"括号中的数字是提供商返回的向量大小（维度）。","The observations that mentioned this entity, the sessions and projects they belong to, and memories distilled from the same observations or naming this entity. Imported code-graph nodes show the import instead.":"提及该实体的观察、它们所属的会话和项目，以及从相同观察提炼或提到该实体的记忆。导入的代码图谱节点则显示导入信息。","The older memory this one replaced. The old version is kept for history but no longer returned by search.":"被本记忆取代的旧记忆。旧版本会保留用于历史记录，但不再出现在搜索结果中。","The records the change touched. Memory, session, observation, lesson, action, crystal and graph ids open that record; other ids can be copied.":"该变更涉及的记录。记忆、会话、观察、经验、行动、结晶和图谱 id 可打开对应记录；其他 id 可复制。","The sessions, memories, observations or crystals a lesson was learned from. Crystal and import lessons record them automatically; pass sourceIds to POST /lessons to link a lesson you save by hand.":"某条经验的学习来源：会话、记忆、观察或结晶。结晶和导入类经验会自动记录；手动保存经验时，可向 POST /lessons 传入 sourceIds 来关联来源。","The two appeared in the same observation. Added without an LLM.":"两者出现在同一条观察中。无需 LLM 即可添加。","The viewer keeps one streaming connection open and updates every page the moment data changes. Nothing is refreshed on a timer.":"查看器保持一条流式连接，数据一有变化即更新所有页面。不依赖定时刷新。","The working directory an agent ran in. Memories, sessions and lessons are grouped by project.":"智能体运行时所在的工作目录。记忆、会话和经验按项目分组。","To date":"至今","Top concepts":"热门概念","Top files":"热门文件","Total memory the worker process holds from the operating system, including code and buffers.":"工作进程从操作系统占用的总内存，包括代码和缓冲区。","tracked follow-ups":"个被追踪的后续事项","Transcript file or folder to import":"要导入的转录文件或文件夹","Unblocked and ready to pick up next: every action it depends on is done. memory_frontier returns these first.":"已解除阻塞、可随时接手：其依赖的所有行动均已完成。memory_frontier 会优先返回这些内容。","Unlinked nodes":"未关联节点","Updates arrive on the live stream; nothing refreshes on a timer.":"更新通过实时流到达，没有定时刷新。","Use memories from an agent or a terminal":"使用来自某个智能体或终端的记忆","Used for summaries, consolidation, typed graph extraction and optional compression.":"用于摘要、整合、类型化图谱提取和可选压缩。","Vector index":"向量索引","Vector save":"向量保存","Viewer stream":"查看器流","Waiting and dead events as JSON:":"等待中和已失效的事件，JSON 格式：","What agentmemory has learned about one project: the concepts and files that come up most and the conventions it noticed.":"agentmemory 对单个项目所了解的内容：最常出现的概念和文件，以及它注意到的约定。","What agents did":"智能体做了什么","What changed from the previous version. Struck-through words were removed, highlighted words were added.":"与上一版本的差异。删除线表示已移除的词，高亮表示新增的词。","What this is":"这是什么","What your agents remember":"您的智能体记住了什么","When agents worked":"智能体何时工作","Where a memory came from: the sessions and observations it was distilled from. Memories saved directly with memory_save or the REST API have none.":"记忆的来源：提取它的会话和观察。通过 memory_save 或 REST API 直接保存的记忆没有此信息。","Where a record came from: an agent tool call, an automatic hook, an import or a user action.":"记录的来源：智能体工具调用、自动钩子、导入或用户操作。","Where it came from":"来源","Where the engine keeps every record: file (local files on this machine, the default) or redis (a Redis server set by AGENTMEMORY_STATE_BACKEND and AGENTMEMORY_REDIS_URL). ok means a test write and read just succeeded; the number is how long it took.":"引擎存储每条记录的位置：file（本机上的本地文件，默认值）或 redis（由 AGENTMEMORY_STATE_BACKEND 和 AGENTMEMORY_REDIS_URL 设置的 Redis 服务器）。ok 表示测试写入和读取刚刚成功；数字是所耗时间。","Whether the agentmemory worker is connected to the iii engine that stores its data and runs its functions.":"agentmemory 工作进程是否已连接到存储其数据并运行其函数的 iii 引擎。","Which agent or role wrote a record (for example coder or reviewer). Used to keep multi-agent memories apart.":"写入记录的智能体或角色（例如 coder 或 reviewer）。用于区分多智能体的记忆。","Which optional features are on":"已开启的可选功能","Why it is empty":"为什么它是空的","Zoom in":"放大","Zoom in (+)":"放大（+)","Zoom out":"缩小","Zoom out (-)":"缩小（-)","and keeps the old one as history. Click a row for provenance, versions, edits and copy actions. Longer-lived facts and procedures are distilled from sessions by":"并将旧版本保留为历史。点击某一行可查看来源、版本、编辑和复制操作。较长生命周期的知识和操作步骤由会话提炼而来，","and procedures":"和流程","are durable facts, architecture notes, conventions and preferences agents keep across sessions. Saving a near-duplicate, or editing one here, creates a new version":"是智能体在会话间保留的持久事实、架构说明、约定和偏好。保存近似重复的内容，或在此处编辑，都会创建一个新版本","are single runs of an agent in a project. Pick one to see its observations":"是智能体在项目中的单次运行。选择一个会话可查看其观察","cached for up to an hour; Rebuild refreshes it":"缓存最长一小时；点击“重建”可刷新","close":"关闭","condenses a finished chain of actions into one narrative with outcomes, files and lessons, so later sessions reuse it without replaying raw observations.":"将已完成的一连串行动浓缩为一段叙述，包含结果、文件和经验，后续会话无需回放原始观察即可复用。","copy curl":"复制 curl","copy id":"复制 id","copy MCP call":"复制 MCP 调用","docs":"文档","Everything on these pages updates live over one streaming connection; nothing refreshes on a timer. Click any":"这些页面上的所有内容都通过一条流式连接实时更新；没有任何内容依赖定时刷新。点击任意","fit":"适应","Fit (0)":"适应（0)","for a short explanation, or use the keys below.":"查看简短说明，或使用下方的按键。","in order, the files it touched, and the memories and lessons it produced. New sessions and observations appear here live.":"按顺序列出其触及的文件，以及产生的记忆和经验。新会话和观察会在此实时出现。","is the live version of the":"是","lists every change agentmemory made to stored data, newest first, as it happens. Target ids":"按最新顺序实时列出 agentmemory 对存储数据所做的每一项更改。点击目标 id","open the record they changed; details shows everything the entry recorded.":"打开其更改的记录；详情显示该条目记录的全部内容。","page: the same checks and verdict, pushed over the stream every 30 seconds. Every problem says what to do. Scroll down for how consolidation works.":"页面的实时版本：相同的检查和结论，每 30 秒通过流推送一次。每个问题都说明该如何处理。向下滚动了解整合的工作方式。","plays or pauses,":"用于播放或暂停，","Raw observations stay searchable as they are. Consolidation":"原始观察保持原样，仍可搜索。整合","search":"搜索","search ·":"搜索 ·","step.":"步骤。","then a letter to jump ·":"然后按字母键跳转 ·","turns them into longer-lived layers: semantic facts":"会将它们转化为留存更久的层次：语义事实","updates live":"实时更新","Observation":"观察","Memory":"记忆","Lesson":"经验","Crystal":"结晶","Action":"行动","Frontier":"待办前沿","Session":"会话","Project":"项目","Agent":"智能体","Consolidation":"整合","Procedures":"流程","Decay":"衰减","Strength":"强度","Importance":"重要性","Confidence":"置信度","Uses":"使用次数","Sources":"来源","Targets":"目标","Conventions":"约定","Ready":"就绪","Version":"版本","Provenance":"来源链","Changes":"变更","Supersedes":"取代","Origin":"来源","Pending vector backfill":"待回填向量","Node":"节点","Edge":"边","Heap":"堆内存","RSS":"RSS","Uptime":"运行时长","Workers":"工作进程","Replay":"回放","Overview":"概览","Memories":"记忆","Lessons":"经验","Crystals":"结晶","Graph":"图谱","Sessions":"会话","Actions":"行动","Activity":"活动","Profile":"画像","Health":"健康","Audit":"审计","are short rules learned from past work. Confidence":"是从过往工作中学到的简短规则。置信度","rises each time an agent uses a lesson and decays when it goes unused; uses":"会在智能体每次使用这条经验时提升，长期不用则衰减；使用次数","counts those confirmations. Pick a row for its sources and actions.":"统计这些确认次数。选择一行可查看它的来源和行动。","are compact summaries of finished work. They outlive pruned observations, so the next session gets the outcome, the files and the lessons in one read.":"是已完成工作的精炼总结。它们比被清理的原始观察留存更久，下一次会话一次即可读到结果、文件和经验。","are follow-ups agents track between sessions. Status moves pending, active, done or blocked;":"是智能体跨会话跟踪的后续事项。状态在待处理、进行中、已完成或受阻之间流转；","marks what is unblocked. Pick a row to change its status or see where it came from.":"标记出未受阻的事项。选择一行可更改其状态或查看它来自哪里。","A function, class or other code symbol.":"函数、类或其他代码符号。","An error or bug the agent ran into.":"智能体遇到的错误或缺陷。","A decision or the reasoning behind one.":"一项决策或背后的理由。","A convention or approach that keeps coming back.":"反复出现的约定或做法。","A library, framework or tool.":"库、框架或工具。","A person named in the work.":"工作中提到的人物。","A project or repository.":"某个项目或代码仓库。","A preference someone stated.":"某人明确表达的偏好。","A place, host or environment.":"某个地点、主机或环境。","A team or company.":"某个团队或公司。","Something that happened at a point in time, such as a release.":"在某个时间点发生的事情，例如一次发布。","One calls or uses the other.":"一方调用或使用另一方。","One imports or loads the other.":"一方导入或加载另一方。","One changes the other.":"一方修改另一方。","One led to the other.":"一方导致了另一方。","One was caused by the other.":"一方由另一方引起。","One fixes the other.":"一方修复另一方。","One needs the other to work.":"一方需要另一方才能工作。","One is waiting on the other.":"一方在等待另一方。","A person works at an organization.":"某人在某个组织工作。","Someone prefers this option.":"某人偏好该选项。","A choice made to favor this goal.":"为达成该目标而做出的选择。","An option that was considered and turned down.":"曾被考虑但被否决的选项。","Something deliberately kept away from.":"被刻意避开的事物。","file":"文件","function":"函数","concept":"概念","error":"错误","decision":"决策","pattern":"模式","library":"库","person":"人物","project":"项目","preference":"偏好","location":"位置","organization":"组织","event":"事件","uses":"使用","imports":"导入","modifies":"修改","causes":"导致","caused by":"由…导致","fixes":"修复","depends on":"依赖于","blocked by":"受阻于","prefers":"偏好","optimizes for":"优化目标为","rejected":"已否决","works at":"就职于","avoids":"避免","Built from actions":"来自这些行动","Tools used":"使用的工具","Files touched":"涉及的文件","Lessons surfaced":"得出的经验","The knowledge graph is off":"知识图谱已关闭","Graph extraction is disabled on this server.":"此服务器已禁用图谱提取。","Knowledge graph docs":"知识图谱文档","The graph could not be loaded":"图谱加载失败","No knowledge graph yet":"暂无知识图谱","A map of the files, functions, concepts, errors and decisions agents worked with, and how they relate. Each node links back to the observations and sessions it came from.":"一张展示智能体处理过的文件、函数、概念、错误和决策以及它们之间关系的地图。每个节点都能回溯到它来自的观察和会话。","Rebuilding from stored observations…":"正在从已存储的观察重建…","The rebuild failed. Check the server log.":"重建失败。请检查服务器日志。","All agents":"全部智能体","Searching…":"搜索中…","Filtering on the server…":"正在服务器上筛选…","The filter request failed. Change a filter to retry.":"筛选请求失败。更改筛选条件后重试。","The graph page reads the top ":"图谱页读取最近的 ","With LLM extraction on it also spends provider tokens.":"开启 LLM 提取时还会消耗提供方 token。","This replays the whole corpus and can take several minutes on a large store. ":"这会回放整个语料库，数据量大时可能需要几分钟。","Graph links open this panel by node id.":"视图中的图谱链接会按节点 id 打开此面板。","Node not found":"未找到节点","No session has ended yet, and nothing was imported. ":"尚无会话结束，也没有导入任何内容。","Filter lessons by text, reason or tag (press /)":"按文本、原因或标签筛选经验（按 /）","Filter crystals by text, file, project or lesson (press /)":"按文本、文件、项目或经验筛选结晶（按 /）","Filter actions by title, description or tag (press /)":"按标题、描述或标签筛选行动（按 /）","Copy command":"复制命令","Copy text":"复制文本","Filter lessons":"筛选经验","Filter crystals":"筛选结晶","Filter actions":"筛选行动","Filter actions by status":"按状态筛选行动","Filter lessons by project":"按项目筛选经验","Memory text":"记忆文本","Minimum importance":"最低重要度","Next event":"下一个事件","Previous event":"上一个事件","Playback position":"播放位置","Select this memory":"选择此记忆","Select all shown memories":"选择当前显示的全部记忆","Back to the start":"回到起点","Bulk actions":"批量操作","Close action details":"关闭行动详情","Close features":"关闭功能说明","Close lesson details":"关闭经验详情","Close memory details":"关闭记忆详情","Close node details":"关闭节点详情","Viewer sections":"查看器分区","Zoom":"缩放","Loading":"加载中","Loading…":"加载中…","Copy":"复制","curl command":"curl 命令","command":"命令","memory text":"记忆文本","crystal text":"结晶文本","raw entry":"原始条目","node id":"节点 id","node name":"节点名称","MCP call":"MCP 调用","session id":"会话 id","observation id":"观察 id","memory id":"记忆 id","lesson id":"经验 id","action id":"行动 id","crystal id":"结晶 id","audit entry id":"审计条目 id","graph node id":"图谱节点 id","value":"值","record":"记录","No sessions yet":"暂无会话","Each run of an agent in a project becomes a session with its own observations.":"智能体在某个项目中的每次运行都会成为一个会话，并带有各自的观察。","No sessions match":"没有匹配的会话","Connect an agent":"接入一个智能体","Session not found":"未找到会话","Session links anywhere in the viewer open this panel by id.":"视图中的会话链接会按 id 打开此面板。","This list shows sessions that match the search box and the project, agent and status filters. The filters run on the server over every session, not only the loaded page.":"此列表显示与搜索框以及项目、智能体和状态筛选相匹配的会话。筛选在服务器上对所有会话执行，而不只是当前已加载的部分。","Unknown session":"未知会话","User prompt":"用户提示词","What the agent learned in this session":"智能体在此会话中学到的内容","The type chips and the importance picker narrow this list on the server.":"类型标签和重要度选择器会在服务器上缩小此列表。","Observations could not be loaded":"观察加载失败","No observations yet":"暂无观察","The session is running but no tool use was captured yet. New ones appear here the moment they arrive.":"会话仍在运行，但尚未采集到工具使用。新的记录一到就会出现在这里。","This session ended before any tool use was captured.":"此会话在采集到任何工具使用之前就结束了。","This session has no observations to summarize yet.":"此会话尚无观察可供总结。","Summary saved. It is shown under Details below.":"摘要已保存，显示在下方「详情」中。","Summarize failed":"总结失败","Supported agents":"支持的智能体","No session has been recorded on this install yet.":"此安装尚未记录任何会话。","Or import transcripts you already have with the form below.":"或者用下面的表单导入你已有的对话记录。","Nothing to replay yet":"暂无可回放的内容","No session has been recorded or imported on this install yet.":"此安装尚未记录或导入任何会话。","This session has nothing to replay":"此会话没有可回放的内容","Replay steps through the prompts, responses and tool calls recorded in a session.":"回放功能会逐步展示会话中记录的提示词、回复和工具调用。","an LLM summary of the session, knowledge-graph extraction and, when consolidation is on, crystals and lessons.":"对会话的 LLM 摘要、知识图谱提取，以及在开启整合时的结晶和经验。","with no LLM provider configured, the summary and graph extraction are skipped, so ending only changes the status.":"未配置 LLM 提供方时，会跳过摘要和图谱提取，因此结束只会改变状态。","Active means the agent is still running and sending observations. Completed means the session ended.":"「进行中」表示智能体仍在运行并发送观察。「已完成」表示会话已结束。","Still running. The last observation arrived ":"仍在运行。最后一条观察到达于 ","No lessons match":"没有匹配的经验","Lesson not found":"未找到经验","Lesson decay and scoring":"经验衰减与评分","The filter matches lesson text, the reason it was learned and its tags, within the chosen project.":"筛选会匹配经验正文、学到它的原因以及它的标签，范围限定在所选项目内。","Lesson links anywhere in the viewer open this panel by id.":"视图中的经验链接会按 id 打开此面板。","Recorded one more use. Confidence and uses update here from the live stream.":"已记录一次额外使用。置信度和使用次数会在这里由实时流更新。","Strengthen failed":"强化失败","Delete failed":"删除失败","Action lifecycle":"行动生命周期","No actions match":"没有匹配的行动","Action not found":"未找到行动","The filter matches action titles, descriptions and tags, and the status picker narrows by status.":"筛选会匹配行动标题、描述和标签，状态选择器则按状态缩小范围。","Action links anywhere in the viewer open this panel by id.":"视图中的行动链接会按 id 打开此面板。","Update failed":"更新失败","How crystals are built":"结晶是如何生成的","No crystals match":"没有匹配的结晶","The filter matches crystal narratives, outcomes, files, project and lesson text.":"筛选会匹配结晶叙述、结果、文件、项目和经验正文。","Crystallizing needs an LLM provider, and none is configured. Transcript imports on the Replay page still create crystals without one.":"结晶需要 LLM 提供方，但当前未配置。回放页导入对话记录仍可在无提供方的情况下生成结晶。","The filter matches audit entries by target id or by operation.":"筛选可按目标 id 或操作类型匹配审计条目。","No audit entries match":"没有匹配的审计条目","No audit entries yet":"暂无审计条目","Processed observations":"已处理观察","Compressed observations":"已压缩观察","Ran consolidation":"运行了整合","Created an action":"创建了行动","Updated an action":"更新了行动","Took a lease":"获取了租约","Released a lease":"释放了租约","Renewed a lease":"续租了","Ran a routine":"运行了例程","Sent a signal":"发送了信号","Resolved a checkpoint":"解决了检查点","Synced with a peer":"同步了对等节点","Linked records":"关联了记录","Updated a link":"更新了关联","Created a sentinel":"创建了哨兵","A sentinel fired":"哨兵已触发","Started a sketch":"开始了草图","Promoted a sketch":"提升了草图","Discarded a sketch":"丢弃了草图","Scored retention":"计算了留存分数","Crystallized finished work":"将已完成工作结晶","Ran diagnostics":"运行了诊断","Repaired stored data":"修复了存储数据","Saved the search index":"保存了搜索索引","Tagged records":"标记了记录","Saved a lesson":"保存了经验","Recalled lessons":"召回了经验","Strengthened a lesson":"强化了经验","Deleted a lesson":"删除了经验","Exported to Obsidian":"导出到 Obsidian","Searched insights":"搜索了洞察","Extracted a skill":"提取了技能","Appended to a slot":"追加到槽位","Replaced a slot":"替换了槽位","Created a slot":"创建了槽位","Deleted a slot":"删除了槽位","Reflected into a slot":"反思到槽位","Compacted graph provenance":"压缩了图谱来源","Marked stale sessions abandoned":"将过期会话标记为放弃","REST ":"REST ","not checked yet":"尚未检查","not checked":"尚未检查","waiting for the first report":"等待首份报告","waiting for opt-in":"等待主动启用","Live updates paused.":"实时更新已暂停。","Showing data as of ":"显示的数据截至 ","Redis event relay":"Redis 事件中继","A test event sent through Redis every 30 seconds came back to the worker.":"每 30 秒通过 Redis 发送的测试事件已返回工作进程。","not saved yet":"尚未保存","not saved since start":"自启动以来未保存","Pending vector log":"待处理向量日志","unknown error":"未知错误","Off without an LLM":"未配置 LLM 时关闭","Meaning-based search is off.":"基于语义的搜索已关闭。","Shows whether observations from hooks are stored, retried or waiting offline.":"显示来自 hook 的观察是被存储、重试还是离线等待。","Since start":"自启动以来","Hooks write here only while the server is unreachable.":"仅在服务器不可达时，hook 才会写入这里。","Nothing has called the worker yet in this process. Rows appear here live as agents observe, search and save.":"本进程中还没有任何调用到达工作进程。随着智能体观察、搜索和保存，记录会实时出现在这里。","not enough input":"输入不足","no insights":"暂无洞察","export failed":"导出失败","Obsidian export":"Obsidian 导出","It runs after the next session ends, or now with the button below.":"它会在下个会话结束后运行，也可以点击下方按钮立即运行。","Saved at most every ":"最多每 ","Connected, but no health update arrived for ":"已连接，但已有以下时长未收到健康更新：","The check did not answer. The server may be restarting.":"检查未响应。服务器可能正在重启。","A one-time pass that trims each graph node and edge to its newest 32 source observations, so stores from older versions stop slowing graph search.":"一次性任务，会把每个图谱节点和边的来源观察裁剪到最新的 32 条，让旧版本产生的数据不再拖慢图谱搜索。","A tool call with the same input and the same output as one stored in the last ":"如果某次工具调用的输入和输出与最近以下时间内已存储的记录完全相同：","Procedures need ":"流程需要 ","Event loop ":"事件循环 ","critically high":"严重偏高","severely delayed":"严重延迟","no failures":"无失败","not in use":"未使用","No projects yet":"暂无项目","No profile for this project yet":"此项目暂无画像","Profiles are built from sessions, and no session with a project has been recorded yet.":"画像由会话生成，但尚未记录任何带项目的会话。","The profile lists top concepts, files, conventions, recurring errors and recent highlights for ":"画像会列出以下项目的主要概念、文件、约定、反复出现的错误和近期亮点：","the project":"该项目","None of the patterns show up often enough in this project yet.":"此项目中还没有任何模式出现得足够频繁。","This project has no file activity or concepts yet, so there is nothing to infer from.":"此项目尚无文件活动或概念，因此没有可推断的内容。","Checkout totals apply coupons first":"结账总额会先应用优惠券","Describe the fact to keep":"描述要保留的事实","Nothing changed yet. Edit the text or the type, or press Cancel.":"尚无任何更改。编辑文本或类型，或按「取消」。","Saving failed":"保存失败","Forgotten in the viewer":"已在视图中忘记","No observations match":"没有匹配的观察","Nothing captured yet":"尚未采集到任何内容","None of the loaded observations match the picked type or file.":"已加载的观察中没有匹配所选类型或文件的。","The newest sessions have no captured tool use yet.":"最新会话尚未采集到工具使用。","Press Show all above.":"请按上方的「显示全部」。","No activity yet":"暂无活动","This page shows when agents worked, what kinds of things they did and which files they touched, with a live feed of the newest observations.":"此页面显示智能体何时工作、做了哪些类型的事情以及涉及哪些文件，并实时展示最新的观察。","No sessions match ":"没有匹配的会话 ","Engine connection lost — reconnecting.":"引擎连接中断 —— 正在重新连接。","Waiting for activity":"等待活动","No LLM provider":"无 LLM 提供方","No LLM provider is set, so only structural relations exist: files and concepts that show up in the same observation, plus anything imported from a code graph. Typed entities and relations need an LLM.":"未设置 LLM 提供方，因此只有结构性关系：同一条观察中出现的文件和概念，以及从代码图谱导入的内容。带类型的实体和关系需要 LLM。","Unknown":"未知","search failed, try again":"搜索失败，请重试","keyword search (no embeddings configured)":"关键词搜索（未配置嵌入）","meaning + keyword search":"语义 + 关键词搜索","No embedding provider, so search is keyword only. Set an embedding provider key (for example OPENAI_API_KEY) and restart.":"没有嵌入提供方，因此搜索仅使用关键词。设置嵌入提供方密钥（例如 OPENAI_API_KEY）并重启。","Only concept":"仅概念","Only decision":"仅决策","Only error":"仅错误","Only file":"仅文件","Only function":"仅函数","Only library":"仅库","Only pattern":"仅模式","Only person":"仅人物","No agents":"无智能体","No prompt recorded":"未记录提示词","active":"进行中","completed":"已完成","abandoned":"已废弃","pending":"待处理","blocked":"受阻","done":"完成","cancelled":"已取消","unknown":"未知","manual":"手动","auto":"自动","info":"信息","ok":"正常","warn":"警告","action":"行动","agentmemory is unreachable.":"无法连接 agentmemory。","No data loaded yet.":"尚未加载数据。","Reconnecting now.":"正在重新连接。","Check that the server is running:":"检查服务是否在运行：","Reconnect now":"立即重连","Show all":"显示全部","Record one by hand to watch it arrive:":"手动记录一条，看看它如何到达：","No action needed. The check runs on the next health update after the rebuild.":"无需处理。重建后的下一次健康更新会运行该检查。","The keyword index is still rebuilding from stored data, so the check for observations missing from search waits until it finishes.":"关键词索引仍在根据已存数据重建，因此「搜索中缺失的观察」检查会等它完成后再运行。","Also called":"别名","Assigned to":"指派给","Capture":"采集","Concepts":"概念","Created":"创建时间","Created by":"创建者","Directory":"目录","Embeddings":"嵌入","Ended":"结束时间","Entry":"条目","Expires":"过期时间","Files":"文件","First seen":"首次出现","Function":"函数","Id":"ID","Import":"导入","Inbox":"收件箱","Inspect":"检查","Model":"模型","Observations":"观察数","Parent":"父节点","Ports":"端口","Projects":"项目","Quality":"质量","Result":"结果","Started":"开始时间","Tags":"标签","Tools":"工具","Updated":"更新时间","User":"用户","Waiting for embeddings":"等待嵌入","When":"时间","Why learned":"为何学到","uptime":"运行时长","lesson":"经验","crystal":"结晶","memory":"记忆","observation":"观察","session":"会话","agent":"智能体","tool":"工具","node":"节点","priority":"优先级","Priority":"优先级","ready":"就绪","running":"运行中","DARK":"深色","LIGHT":"浅色","Viewer authorization required":"需要查看器授权","Enter AGENTMEMORY_SECRET to unlock viewer API access.":"输入 AGENTMEMORY_SECRET 以解锁查看器 API 访问。","Unlock":"解锁","waiting for first sync":"等待首次同步","report issue →":"报告问题 →","Work":"工作","Insight":"洞察","System":"系统","connecting":"连接中","offline":"离线","reconnecting":"重新连接中","no project":"无项目","All statuses":"全部状态","Pick a session…":"选择会话…","of":"共","types":"种类型","Search":"搜索","Clear":"清除","Relations":"关系","Status":"状态","STATUS":"状态","Obs":"观察数","OBS":"观察数","STARTED":"开始时间","ACTIVE":"进行中","WAITING":"等待中","COMPLETED":"已完成","From":"从","To":"至","Show only this project":"仅显示此项目","Show only this agent":"仅显示此智能体","waiting":"等待中","starting":"启动中","stopped":"已停止","off":"关闭","failed":"失败","closed":"正常","open":"断开","half-open":"半开","OBSERVE":"观察","COMPRESS":"压缩","CONSOLIDATE":"整合","REFLECT":"反思","SKILL EXTRACT":"技能提取","observe":"观察","compress":"压缩","consolidate":"整合","reflect":"反思","skill extract":"提取技能","remember":"保存记忆","forget":"忘记","evolve":"保存记忆新版本","share":"共享","delete":"删除","import":"导入","export":"导出","action_create":"创建行动","action_update":"更新行动","action create":"创建行动","action update":"更新行动","lease_acquire":"获取租约","lease_release":"释放租约","lease_renew":"续租","lease acquire":"获取租约","lease release":"释放租约","lease renew":"续租","routine_run":"运行例程","routine run":"运行例程","signal_send":"发送信号","signal send":"发送信号","checkpoint_resolve":"解决检查点","checkpoint resolve":"解决检查点","mesh_sync":"同步对等节点","mesh sync":"同步对等节点","relation_create":"关联记录","relation_update":"更新关联","relation create":"关联记录","relation update":"更新关联","sentinel_create":"创建哨兵","sentinel_trigger":"哨兵触发","sentinel create":"创建哨兵","sentinel trigger":"哨兵触发","sketch_create":"开始草图","sketch_promote":"提升草图","sketch_discard":"丢弃草图","sketch create":"开始草图","sketch promote":"提升草图","sketch discard":"丢弃草图","retention_score":"计算留存分数","retention score":"计算留存分数","crystallize":"结晶已完成工作","diagnose":"运行诊断","heal":"修复存储数据","index_persist":"保存搜索索引","index persist":"保存搜索索引","facet_tag":"标记记录","facet tag":"标记记录","lesson_save":"保存经验","lesson_recall":"召回经验","lesson_strengthen":"强化经验","lesson_delete":"删除经验","lesson save":"保存经验","lesson recall":"召回经验","lesson strengthen":"强化经验","lesson delete":"删除经验","obsidian_export":"导出到 Obsidian","obsidian export":"导出到 Obsidian","insight_search":"搜索洞察","insight search":"搜索洞察","skill_extract":"提取技能","core_add":"添加核心记忆","core_remove":"移除核心记忆","core add":"添加核心记忆","core remove":"移除核心记忆","auto_page":"分页移出记忆","auto page":"分页移出记忆","vision_embed":"嵌入图像","vision embed":"嵌入图像","slot_append":"追加槽位","slot_replace":"替换槽位","slot_create":"创建槽位","slot_delete":"删除槽位","slot_reflect":"反思到槽位","slot append":"追加槽位","slot replace":"替换槽位","slot create":"创建槽位","slot delete":"删除槽位","slot reflect":"反思到槽位","graph_compact":"压缩图谱来源","graph compact":"压缩图谱来源","session_sweep":"标记过期会话为放弃","session sweep":"标记过期会话为放弃","audit":"审计","checked":"检查于","consolidated":"整合于","Saved a memory":"已保存记忆","Saved a new memory version":"已保存记忆新版本","Added core memory":"添加了核心记忆","Removed core memory":"移除了核心记忆","Paged memory out":"分页移出记忆","Embedded an image":"嵌入了图像","Reflected on memories":"反思了记忆","Memory saved":"记忆已保存","Memory deleted":"记忆已删除","Lesson learned":"已学习经验","Action created":"行动已创建","Crystal saved":"结晶已保存","Session ended":"会话已结束","Session running":"会话运行中","Waiting:":"等待：","Ready:":"就绪：","Off:":"关闭：","Each layer below says why it is empty or what it is waiting for.":"下方各层会说明为何为空或正在等待什么。","How consolidation works, its schedule and last run →":"整合的工作方式、计划与上次运行 →","Durable facts distilled from session summaries":"从会话摘要中提炼的持久事实","Repeatable workflows, from finished sessions and from patterns that recur across sessions":"来自已完成会话和跨会话反复出现模式的可重复流程","Links between memories (supersedes, extends, contradicts)":"记忆之间的关联（取代、扩展、矛盾）","None yet: links are saved when a memory updates or relates to another.":"暂无：当某条记忆更新或与另一条记忆相关时会保存关联。","Worker":"工作进程","Calls":"调用次数","Failed":"失败次数",". Each layer below says why it is empty or what it is waiting for.":"。下方各层会说明为何为空或正在等待什么。","CLOSED":"正常","OPEN":"断开","HALF-OPEN":"半开","No function has run since the worker started. Calls appear here as agents observe, search and save.":"工作进程启动后尚无函数运行。智能体进行观察、搜索和保存时，调用会显示在这里。","connected":"已连接","configuration":"配置","available":"可用","healthy":"健康","degraded":"降级","critical":"严重","on":"开启","configured":"已配置","complete":"完成","empty":"空","closed (0 failures)":"闭合（0 次失败）","Process":"进程","Summaries":"摘要","Last run":"上次运行","decay":"衰减","procedural":"流程","semantic":"语义","Knowledge graph extraction":"知识图谱提取","Memory consolidation":"记忆整合","LLM-powered observation compression":"LLM 驱动的观察压缩","In-conversation context injection":"会话内上下文注入","Extracts entities and relations from observations into a knowledge graph.":"从观察中提取实体与关系，构建知识图谱。","Periodically summarizes sessions into semantic facts + procedures.":"定期将会话总结为语义事实和流程。","Every observation is compressed by the LLM for richer summaries (costs tokens). OFF uses zero-LLM synthetic compression.":"每条观察都由 LLM 压缩以生成更丰富的摘要（消耗 token）。关闭时使用零 LLM 的合成压缩。","Hooks write recalled context into Claude Code's conversation. OFF captures in the background without injecting.":"hook 会将召回上下文写入 Claude Code 的对话。关闭时仅在后台采集，不注入。","Merged from the newest 20 summaries once at least 5 exist.":"至少有 5 条摘要后，从最新的 20 条摘要合并。","From pattern memories seen in 2+ sessions, once 2 exist.":"从至少 2 个会话中出现过的模式记忆提取，至少需要 2 条。","Facts and procedures unused for 30 days lose 10% strength per period (never below 0.1).":"事实和流程若 30 天未使用，每个周期损失 10% 强度（不低于 0.1）。","Why these can be empty →":"为什么这些可能为空 →","1 · captured":"1 · 已采集","2 · session end":"2 · 会话结束","3 · merge":"3 · 合并","4 · repeat":"4 · 重复模式","5 · forget":"5 · 遗忘","Type":"类型","fact":"事实","workflow":"工作流","architecture":"架构","bug":"缺陷","Filter by project":"按项目筛选","Filter by agent":"按智能体筛选","Filter by type":"按类型筛选","No memory has an agent id yet":"尚无记忆带有智能体 id","consolidation →":"整合 →","Lesson decay and scoring →":"经验衰减与评分 →","How crystals are built →":"结晶如何构建 →","Action lifecycle →":"行动生命周期 →","Rebuild":"重建","nodes":"节点","relations":"关系","unlinked":"未连接","End session…":"结束会话…","Summarize…":"生成摘要…","Tools used*":"使用的工具*","Files touched*":"涉及的文件*","Running so far":"目前运行时长","Summary":"摘要","Filter sessions by project":"按项目筛选会话","Filter sessions by agent":"按智能体筛选会话","Filter sessions by status":"按状态筛选会话","No session has an agent id yet":"尚无会话带有智能体 id","command run":"命令执行","discovery":"发现","conversation":"对话","file edit":"文件编辑","web fetch":"网页获取","file write":"文件写入","subagent":"子智能体","notification":"通知","task":"任务","other":"其他","active days":"活跃天数","sessions":"会话","observations":"观察","busiest day":"最忙的一天","less":"少","more":"多","Most touched files":"最常涉及的文件","Frequently uses":"经常使用","Space":"空格","loaded, newest first":"已加载，最新在前","target":"目标","In the loaded entries":"在已加载条目中","Other operations":"其他操作","copy JSON":"复制 JSON","hide":"收起","Clear all":"全部清除","Clear filters":"清除筛选","Any project":"任意项目","Any agent":"任意智能体","Any type":"任意类型","Forgot":"已忘记","Deleted":"已删除","Imported":"已导入","Exported":"已导出","Shared":"已共享","; a lesson links here when it is crystallized from this session.":"；当某条经验由此会话结晶而成时，会链接到这里。","Every check passed.":"所有检查均已通过。","Every check passed. Capture, search and the stream are working.":"所有检查均已通过。采集、搜索和实时流均正常。","Some checks need attention.":"部分检查需要处理。","Waiting for the first health report from the server.":"正在等待服务器发送首份健康报告。","Report":"报告","· updates every 30 s over the live stream, no refresh needed":"· 每 30 秒通过实时流更新，无需刷新","same report as a plain page →":"以普通页面查看同一份报告 →","The worker's link to the iii engine, which stores the data and runs the functions.":"工作进程与 iii 引擎的连接，后者负责存储数据并运行函数。","Stored in the engine's local files (the default). Set AGENTMEMORY_STATE_BACKEND=redis to use Redis.":"存储在引擎的本地文件中（默认）。设置 AGENTMEMORY_STATE_BACKEND=redis 可使用 Redis。","This page's own connection. Offline means the numbers here stop changing.":"此页面自身的连接。离线表示此处的数字将停止更新。","The keyword index holds observations, memories and lessons, so its total is larger than the observation count.":"关键词索引包含观察、记忆和经验，因此总数大于观察数。","A tool call with the same input and the same output as one stored in the last 5 minutes is skipped when the hook sends no event id.":"如果 hook 未发送事件 id，输入和输出都与最近 5 分钟内已存储记录相同的工具调用会被跳过。","The engine stopped relaying live events through Redis, usually after Redis restarted. Data is still saved. Restart agentmemory to resume live updates.":"引擎已停止通过 Redis 中继实时事件，通常发生在 Redis 重启后。数据仍会保存。重启 agentmemory 可恢复实时更新。","Checking…":"检查中…","No file reads or edits in the newest sessions yet.":"最新会话中尚无文件读取或编辑。","The newest sessions have no captured tool use yet. Kinds of work appear here as agents read, edit, run and search.":"最新会话尚未采集到工具使用。智能体读取、编辑、运行和搜索时，相应工作类型会显示在这里。","Load older sessions":"加载更早的会话","No errors recorded in the last 20 sessions. Failed tool calls land here once the same kind of error shows up.":"最近 20 个会话中没有记录错误。同类错误再次出现时，失败的工具调用会显示在这里。","rule":"规则",", last active":"，最后活跃","Functions":"函数","Just captured. Importance is set when the observation is compressed.":"刚刚采集。重要度会在观察被压缩时设置。","; other agents that write the same message format work too). Each file becomes a session with its observations, and agentmemory derives a crystal and lessons from it, so it shows up here, on Sessions and in recall.":" 下保存的格式；其他写入相同消息格式的智能体也可以使用）。每个文件都会成为一个会话及其观察，agentmemory 会从中提取结晶和经验，因此它会显示在回放、会话和召回中。","Mon":"周一","Tue":"周二","Wed":"周三","Thu":"周四","Fri":"周五","Sat":"周六","Sun":"周日"};
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
})();
