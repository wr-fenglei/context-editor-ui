# context-editor-ui

## 1 Scope

- 只覆盖 conversation 中的 user message, assistant message, worked summary, tool call, subagent call, code object, message actions, composer 和 Context Editor
- Context Editor 必须像原生消息流的一部分, 不形成 dashboard, inspector, sidebar 或独立品牌 surface
- `system/app.html` 是完整集成示例, 不拥有组件样式或参数
- `index.html` 是设计系统概览, 汇总集成示例与全部规范页

## 2 Source of truth

- `system/design-system.config.js` 是 token, evidence, voice, component rules, parameters 和 demo copy 的唯一数据来源
- `system/styles.css` 是组件视觉, responsive layout 和 interaction state 的唯一实现来源
- `system/components/<组件>/<组件>.js` 是组件结构的唯一实现来源, `system/Icons.js` 是共享图标几何
- `system/interactions.js` 是 copy 和 status 行为的唯一实现来源
- `system/components/<组件>/spec.html` 只提供模板和真实组件挂载点, 不保存尺寸, 颜色或规范副本
- `manifest.json` 保留 design-system id 和入口映射

## 3 Visual foundations

- Canvas 保持纯白, assistant message 保持无框
- User message 右对齐并使用低对比 surface bubble
- Tool call 使用 muted outline icon 与文字行, 只有展开内容获得 surface
- Subagent 使用轻描边 task pill, lifecycle text 位于 pill 外
- Composer 是消息流中唯一持续 elevated 的对象, sticky dock 必须透明
- Display 与 body 使用系统 UI stack, mono 只用于 code, command 和 path
- Accent blue (#3a83f7) 用于 focus 与 UI 状态, link 使用同色相的可读深色变体, violet 用于 effort 与 skill metadata
- Shadow 只用于 composer 和真实 popover, message object 保持 flat

## 4 Conversation structure

- Reading column, gutter, turn gap, message gap 和 bubble geometry 全部读取配置 token
- User bubble 在窄屏扩大可用宽度, assistant body 仍保持无框
- Worked summary 使用原生 `details`, child event 按发生顺序排列
- Code 和 path 必须换行, 不允许水平滚动或隐藏溢出
- Mobile 必须重新分配控件宽度, 不通过压缩造成重叠

## 5 Component rules

- Message identity 由 alignment, surface 和 whitespace 表达
- Message actions 始终可发现, 但显著度低于正文
- Tool state 同时包含文字, 不能只依赖 icon 或颜色
- Tool error 仅用于真实错误, warning 不改变整行语义颜色
- Subagent task 使用短动词加对象, lifecycle 单独表达
- Composer textarea 无内框, placeholder 与正文使用不同 semantic role
- Composer open trigger 使用 selected surface, 关闭后恢复默认状态
- Add, approval 和 model menu 支持 outside click, Escape 和 focus return

## 6 Context boundary

- Pending input 是未处理 input, 不是 work draft 内容
- Work draft 是当前唯一有效的 confirmed context
- Context Editor 入口只能作为 message action, tool row 或 composer accessory
- 不在 assistant body 中插入独立 control panel
- Confirm 后工作草稿成为下一条消息的上下文, pending input 保持不变

## 7 Interaction and accessibility

- 每个 control 必须定义 default, hover, focus-visible, pressed 和 disabled
- 所有交互 target 使用配置中的 accessibility 尺寸
- Hover 不降低文字或图标对比度
- Focus 必须可见, textarea 不使用浏览器默认蓝框
- Reduced motion 下取消 transition, 状态仍由文字表达
- Narrow width 不允许 overlap, clipping 或 horizontal scroll

## 8 Evidence boundary

- Light baseline 来自配置中记录的截图证据
- Accent, ink, surface 与 semantic colors 来自 `codex-theme-v1` 主题包, 记录在 `system/design-system.config.js` 的 `themeSource`
- Dark 已确认 canvas, foreground, accent 与 semantic colors, 其余 component neutral 保持 provisional
- Source sample 与 implementation role 分离, 组件只绑定 semantic role
- 本项目是截图驱动的非官方复原系统, 不代表任何官方 token

## 9 Change workflow

1. 数据, token 或规范变化先修改 `system/design-system.config.js`
2. 结构或 icon 变化修改对应 `system/components/<组件>/<组件>.js`
3. 视觉或 responsive state 变化修改 `system/styles.css`
4. Behavior 变化修改 `system/interactions.js` 或对应组件
5. 在对应 `system/components/<组件>/spec.html` 验证后, 再检查 `system/app.html`
6. 禁止在组件 spec 页或 `system/app.html` 中添加组件覆盖值

## 10 Acceptance

- 配置, 组件 spec 页和集成页使用同一 token 与 demo 数据
- Message, tool, subagent, code, composer 和 Context Editor 可在独立规范页核对
- Composer 可输入, 发送并操作全部 menu
- Context Editor 可纳入, 排除, 排序, 并入, 添加和确认
- Light UI 保持已确认视觉, dark UI 无 contrast, clipping 或 state role 缺失
- 所有本地引用有效, 不存在旧 token, brand 或 provenance 并行来源
