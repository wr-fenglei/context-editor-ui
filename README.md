# context-editor-ui

面向对话交互的独立设计系统, 覆盖消息, 工具调用, 子代理, 代码块, 输入框, 上下文编辑和评审备注

共享组件提供结构, 样式和交互, 示例只组合组件并保存会话数据, 支持浅色与深色主题

[预览设计系统](https://wr-fenglei.github.io/context-editor-ui/)

## 内容

- 行内工作台示例, 包含会话切换, 评审编辑, 备注浮窗和上下文协作
- 完整的连续对话集成示例
- 12 个独立组件规范页, 包含文案按钮, 面板, 会话切换, 评审清单与备注浮窗
- 按基础值, 语义角色, 控件, 组合组件和页面模板组织的五级规范
- 统一的设计变量, 参数, 示例内容和样式
- 设计约束和技能使用说明

## 文件职责

- `system/design-system.config.js`: 设计变量, 规范, 参数和示例数据
- `system/styles.css`: 组件视觉, 响应式布局和交互状态
- `system/icons.data.js` 与 `system/icon-set.js`: Lucide 子集, 本地命令窗口图形及静态渲染
- `system/Icons.js`: 对话组件的图标接口
- `system/code-format.js`: 代码, 工具输出和 Markdown 原文的共享安全文本高亮
- `system/components/<组件>/<组件>.js`: 共享组件结构和行为
- `system/examples/workbench.js`: 会话数据, 组件间事件连接与布局组合
- `system/interactions.js`: 共享复制行为和状态反馈
- `system/motion-runtime.js`: 展开, 收起, 条目排序与移除的共享动效
- `system/MotionPresence.js`: 面板和消息的进入退出生命周期
- `DESIGN.md`: 设计约束和集成边界
- `SKILL.md`: 代理应用本系统的方式
- `system/components/<组件>/spec.html`: 规范页模板和组件挂载点, 不保存设计数值副本
- `manifest.json`: 系统标识和文件入口
- `system/verification/geometry.mjs`: 输入栏, 行操作, 标签和上下文布局的浏览器回归检查

## 页面入口

[设计系统概览](index.html) · [行内工作台](system/examples/workbench.html) · [连续对话](system/app.html) · [基础规范](system/foundations.html) · [控件几何](system/foundations.html#control-geometry)

| 组件规范页 | 负责的结构与行为 |
| --- | --- |
| [MessageBubble](system/components/MessageBubble/spec.html) | 用户消息, 助手正文, 代码对象, 过程摘要与消息操作 |
| [Composer](system/components/Composer/spec.html) | 消息输入, 上下文计数, 添加菜单, 权限和模型选择, 发送 |
| [ContextEditor](system/components/ContextEditor/spec.html) | 工作草稿, 待处理内容, 并入与确认快照 |
| [ToolCall](system/components/ToolCall/spec.html) | 工具类别图标, 摘要, 输出展开与代码高亮 |
| [SubagentCall](system/components/SubagentCall/spec.html) | Agent 身份图形与执行状态 |
| [Button](system/components/Button/spec.html) | 常显浅底与透明默认背景, 两种圆角, 五种语义, 原生属性与 ref 透传 |
| [ProfileTags](system/components/ProfileTags/spec.html) | 白底胶囊标签与类别图标 |
| [AvatarGroup](system/components/AvatarGroup/spec.html) | 人物头像的尺寸, 裁切与重叠 |
| [Panel](system/components/Panel/spec.html) | 面板容器, 标题区, 内容区与页脚插槽 |
| [SessionSwitcher](system/components/SessionSwitcher/spec.html) | 当前会话, 菜单选择, 新建入口和键盘导航 |
| [ReviewPanel](system/components/ReviewPanel/spec.html) | 验收清单, 行内编辑, 撤销, 原文复制与放入输入框 |
| [AnnotationPopover](system/components/AnnotationPopover/spec.html) | 备注标签, 详情浮窗, 编辑, 保存和移除 |

## 本地预览

集成示例需要加载共享组件文件和远程依赖, 请在仓库根目录启动本地服务

```bash
python3 -m http.server 8000
```

打开 [本地首页](http://localhost:8000/), 从组件目录进入对应页面

## 修改流程

1. 在 `system/design-system.config.js` 修改设计变量, 规范或示例数据
2. 在对应组件文件修改结构和图标
3. 在 `system/styles.css` 修改视觉和响应式布局
4. 在 `system/interactions.js` 修改复制与状态反馈, 在 `system/code-format.js` 修改共享代码高亮
5. 验证对应规范页和集成示例, 运行几何回归, 同步文档

不要在集成页或规范页中复制组件样式与行为, 页面只管理数据, 布局及组件间事件, 浮窗定位和输入高度等运行时几何由对应组件处理

本地服务启动后, 在已安装 Playwright 的环境中执行:

```bash
node system/verification/geometry.mjs
```

脚本默认访问 `http://127.0.0.1:8000`, 可通过 `BASE_URL` 指定地址, 托管运行时可通过 `PLAYWRIGHT_MODULE` 与 `CHROMIUM_PATH` 指定依赖路径, 报告与截图默认写入 `/private/tmp/context-ui-geometry`

检查覆盖 320, 390, 640, 740, 1024px 精细指针视口, 390 和 740px 粗指针视口, 以及浅色和深色主题, 包含工具栏高度, hover 背景, 发送圆与下沿留白, 状态标签高度, 按钮重叠, 上下文密度和 Agent 身份稳定性

## 作为技能使用

在本地项目中, 可要求代理先阅读本仓库再实现对话界面

```text
阅读 DESIGN.md 和 SKILL.md, 使用对应的共享组件与设计变量
```

如需作为个人技能使用, 将仓库链接或复制到技能目录, 保留名称 `context-editor-ui`, 然后重启或刷新技能发现

## 个人资料组件

资料标签和头像组通过 `window` 暴露用于创建页面元素的函数, 使用共享配置与样式, 图片保存在 `system/assets`

两项组件均为静态展示, 不包含隐含的页面跳转或账号操作

## 头像资源

三张 120 × 120 像素的头像以 40 像素显示, 使用圆形裁切, 重叠排列和不透明主题底色

## 图标

控件使用 Lucide 1.17.0 子集和本地 `command-window` 图形, 数据保存在 `system/icons.data.js`, `icon-set.js` 与 React 的 `Icons.js` 读取同一节点集合, 无运行时图标网络依赖, Lucide 许可见 `system/vendor/lucide-LICENSE`

普通图标 16px, 编辑与评论 14px, 评论向上校准 1px, 箭头 11px, 资料标签图标 14px, 工具和标签使用共享类别色, 命令窗口在 24 x 24 画布内使用 20 x 14 轮廓, 保持等比缩放与 1.5 描边, 历史 PNG 图集仅归档

Agent 默认目录为蓝色, 紫色, 琥珀, 珊瑚和青色五款, 以 20px 显示, 首次分配后在当前页面按身份保持一致, 薄荷环形仅归档, 资源与生成记录见 [Agent 说明](system/assets/agents/README.md)

## 当前规范

Composer 独立页与集成示例共用输入框和真实上下文状态, 计数随并入与确认更新, 发送后展示所用的已确认数量, 备注浮窗通过标签和间距区分引用与备注, 内容区在查看, 编辑与 hover 时始终与面板同色, 浅色为白底, 深色读取对应面板底色, 只有具体按钮在 hover 时使用 `--action-hover-bg` 灰底, 不使用内部分割线

[文案按钮规范页](system/components/Button/spec.html) 展示操作层级, 两种圆角, 五种语义与禁用状态, 工作草稿和待处理只保留分组标题, 确认栏只保留右对齐的确认按钮

文案动作共用 Button, 结束当前编辑或确认流程的提交, 取消和弹窗删除等决策使用 soft 常显语义浅底, 设置, 切换, 查看及可选操作使用 ghost 默认透明, 所有按钮 hover 与按下统一使用 `--action-hover-bg` 中性灰底, 该变量读取 `--surface-hover`, 不按 tone 改变 hover 底色, 文字与图标保留语义颜色, 不因菜单展开保持底色, 中性可选操作为灰字, 确认为蓝字, 并入与全部并入统一为绿色, 删除为红字, 需要注意的选择为紫字

背景层级与圆角分别定义, 常规面板按钮采用 rounded 的 10px 圆角, 圆形控件集中的工具栏采用 pill 的 9999px 胶囊圆角, Composer 审批与模型入口默认透明并使用胶囊形 hover 背景, 会话切换入口默认透明, 文案按钮无描边, 视觉高 32px, 粗指针点击区 44px, 键盘焦点轮廓保留

模型, 审批, 添加和会话菜单的所有选项共用 `--menu-item-radius: var(--radius-control)` 的 8px 圆角矩形, 含说明的多行选项也不继承浮窗的大圆角或工具栏入口的胶囊形状, 默认透明, 选中只显示对勾, hover 使用统一灰底, 键盘焦点轮廓保留, 复选使用固定大小的浅灰圆角底板, 所有编辑输入聚焦保持浅色边线, 完成与评论操作使用中性色

完全访问的标题, 图标和选中对勾读取 `--permission-danger`, 描述保持中性色, 上下文标识与分组标签读取 `--context-accent` 琥珀色表达控件与分组结构, 复选与正文保持中性

普通图标按钮的视觉底板固定 28px, 圆角 8px, 仅粗指针将点击区扩至 44px, 窄视口不触发放大, Composer 工具栏高 44px, hover 背景高 32px, 发送圆为 30px, 与输入框外边缘保留 8px

已确认, 待处理计数和备注数量标签使用两侧平直的 10px 圆角矩形, 作为状态摘要保留常显浅灰背景, 背景固定 30px 高且不换行, 资料标签使用白底胶囊, 标签间隔 8px, 上下文组件仅在自身容器不超过 360px 时将操作换到下一行

所有代码块共用 `code-format.js`, 浅灰背景配合琥珀语法强调, 保留正文深色和原文复制, 代码文本不会作为 HTML 执行

共享变量和五级状态规范见 `system/design-system.config.js`, 浏览入口为 [五级规范](system/foundations.html#unified-standards) 与 [控件几何](system/foundations.html#control-geometry), 设计取舍见 `system/design-rationale.md`

行内工作台使用本地示例状态, 刷新会重置, 模型和权限选择不连接真实服务, 连续对话示例也不会向模型服务发送消息

## 动效

操作反馈使用 140ms, 面板进入使用 180ms, 高度展开与条目排序使用 260ms, 退出使用 120ms, 参数统一保存在共享配置, 基础规范页提供说明

面板关闭时立即停止交互, 动画完成后移除, 连续点击可以中断并反向播放, 开启系统的减少动态效果后直接切换状态, 保留键盘操作与焦点返回

## 组件接口与组合

共享组件通过 `window` 暴露, 以下接口与行内工作台使用同一实现, 受控值由调用方更新

| 接口 | 参数 | 行为 |
| --- | --- | --- |
| `Composer` 输入 | `value`, `onValueChange(next)`, `defaultValue = ''` | 提供 `value` 时使用受控输入, 否则由组件保存文本, 成功发送后将值置空 |
| `Composer` 发送 | `onBeforeSend(text)`, `onSend(text, choices)` | 文本先去除首尾空白, 任一回调同步返回 `false` 时不清空, `choices` 含 `model`, `modelLabel`, `approval` |
| `Composer` 插槽与焦点 | `accessory`, `placeholder`, `inputRef` | `accessory` 放在上下文计数行, `inputRef` 为接收 textarea 的对象 ref |
| `Composer` 会话隔离 | `active = true`, `idPrefix` | 非活动时关闭菜单并停止输入高度测量, 未传 `idPrefix` 时由 `React.useId()` 生成实例 ID |
| `Composer` 选择项 | `modelValue/onModelChange`, `approvalValue/onApprovalChange` | 可由页面按会话保存, 值须来自共享配置中的选项, 未传值时使用组件内部状态 |
| `Composer` 上下文入口 | `includedCount`, `pendingCount`, `draftDirty`, `editorOpen`, `onToggleContextEditor`, `onOpenContextEditor` | `includedCount` 传入已确认快照数量, 切换回调优先于打开回调, 组件不修改上下文数据 |
| `useContextEditor` | `initialDraft, initialPending, { initialOpen = true, triggerRef }` | 初始值用于挂载, 返回 `confirmed`, `confirmedCount`, `dirty`, 操作方法和 `editorProps`, `triggerRef` 指向收起时返回焦点的按钮 |
| `ContextEditor` | `{...editor.editorProps}` | 展示和修改草稿及待处理内容, 仅确认动作更新已确认快照 |
| `Button` | `variant`, `shape`, `tone`, `children`, `className`, `ref`, 原生 button 属性 | variant 为 soft / ghost, 默认 soft, shape 为 rounded / pill, 默认 rounded, tone 为 neutral / confirm / merge / danger / attention, 默认 neutral, 默认 `type="button"`, 透传 disabled 与可访问属性 |
| `Panel` | `header`, `footer`, `children`, `className`, `bodyClassName`, `ref` | 渲染共享容器, 未提供的标题区或页脚不渲染, 其余 section 属性透传 |
| `SessionSwitcher` | `project`, `items`, `value`, `onChange(id)`, `onCreate()` | 条目为 `{ id, title }`, 选择和新建触发回调, 组件负责菜单关闭及焦点返回 |
| `ReviewPanel` | `title`, `filename`, `intro`, `items`, `onChange(next)` | 条目为 `{ id, text, checked }`, 组件管理行内编辑与撤销, 改动文本后清除该项核对状态 |
| `ReviewPanel` 扩展 | `onDiscuss(item, index)`, `onInsert(markdown)`, `onClose()`, `onEditingChange(dirty)`, `footer` | 页面连接备注, 输入和收起动作, `dirty` 表示当前编辑或暂存的其他条目草稿与原文不同, 仅打开编辑器不算未保存修改 |
| `AnnotationPopover` | `annotation`, `onChange(next)`, `active = true` | 由页面保存备注对象, 删除时回调 `null`, 非活动时隐藏标签和浮窗, 浮窗通过 portal 放到 body 并跟随视口定位 |

备注对象包含 `itemId`, `index`, `text`, `comment`, `draft`, `open`, `pinned`, `editing` 和 `status`, `index` 从 0 开始, `comment` 是已保存备注, `draft` 是编辑输入, 发送时只读取已保存内容

`ComposerHint` 提供共享的 Enter 发送说明, `WorkedSummary` 通过 `label` 设置摘要名称, `AssistantMessage` 通过 `title` 设置正文标题, 工作台直接使用这些接口

工作台将 `AnnotationPopover` 放进 `Composer.accessory`, 在 `onBeforeSend` 检查未保存备注, 如需继续编辑则返回 `false`, 同时展开备注编辑器, 发送成功后保存上下文与引用的副本, 后续修改不影响历史消息

每个会话挂载自己的输入, 上下文和评审状态, 切换时通过 `active` 关闭非活动交互, 不卸载草稿, 页面不实现另一套菜单或编辑器

## 加载顺序

1. 共享配置, `motion-runtime.js`, `icons.data.js`, `icon-set.js`, `code-format.js` 与 `styles.css`
2. React, ReactDOM 和 Babel, 再加载 React 的 `Icons.js` 与 `MotionPresence.js`
3. `Button`, `Panel`, `SessionSwitcher`, `MessageBubble`, `ToolCall`, `SubagentCall`, `Composer`, `ContextEditor`, `ReviewPanel` 与 `AnnotationPopover`
4. 页面组合脚本, 最后加载 `interactions.js`

`SessionSwitcher`, `ContextEditor`, `ReviewPanel` 和 `AnnotationPopover` 的文案操作依赖 `Button`, `SessionSwitcher`, `ReviewPanel` 和 `AnnotationPopover` 的容器依赖 `Panel`, `ReviewPanel` 的原文区域复用 `MessageBubble.js` 暴露的 `CodeObject`, 上下文编辑区在展开结束后计算滚动位置

静态页面调用 `ContextEditorUIIcons.create(name, options)` 创建图标, 或调用 `createIcons()` 替换 `i[data-lucide]`, `window.lucide.createIcons` 是本地适配入口, 不等同于完整 Lucide 运行时

备注是否未保存通过共享 `annotationIsDirty(annotation)` 判断, 工作台在发送前和切换引用前调用同一函数, 界面状态与发送拦截保持一致
