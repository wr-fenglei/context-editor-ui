# context-editor-ui

面向对话交互的独立设计系统, 覆盖消息, 工具调用, 子代理, 代码块, 消息操作, 输入框和上下文编辑

通过清晰的消息层级, 克制的背景与描边, 统一的交互反馈呈现设计效果, 支持浅色与深色主题

[预览设计系统](https://wr-fenglei.github.io/context-editor-ui/)

## 内容

- 完整的对话界面集成示例
- 对话组件, 个人资料标签和头像组
- 基础规范及各组件的独立规范页
- 统一的设计变量, 参数, 示例内容和样式
- 设计约束和技能使用说明

## 文件职责

- `system/design-system.config.js`: 设计变量, 规范, 参数和示例数据
- `system/styles.css`: 组件视觉, 响应式布局和交互状态
- `system/icon-set.js`: 图标图集索引, 切图坐标及静态渲染
- `system/Icons.js`: 对话组件的图标接口
- `system/components/<组件>/<组件>.js`: 组件结构
- `system/interactions.js`: 共享复制行为和状态反馈
- `system/motion-runtime.js`: 展开, 收起, 条目排序与移除的共享动效
- `system/MotionPresence.js`: 面板和消息的进入退出生命周期
- `DESIGN.md`: 设计约束和集成边界
- `SKILL.md`: 代理应用本系统的方式
- `system/components/<组件>/spec.html`: 规范页模板和组件挂载点, 不保存设计数值副本
- `manifest.json`: 系统标识和文件入口

## 页面入口

- `index.html`: 设计系统概览
- `system/app.html`: 对话界面集成示例
- `system/foundations.html`: 基础规范
- `system/components/MessageBubble/spec.html`: 消息组件
- `system/components/Composer/spec.html`: 输入框组件
- `system/components/AvatarGroup/spec.html`: 头像组
- `system/components/ProfileTags/spec.html`: 个人资料标签
- `system/components/ToolCall/spec.html`: 工具调用
- `system/components/SubagentCall/spec.html`: 子代理调用
- `system/components/ContextEditor/spec.html`: 上下文编辑

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
4. 在 `system/interactions.js` 修改复制与状态反馈
5. 验证对应规范页, 然后检查集成示例

不要在集成页或规范页中添加组件的行内样式覆盖

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

全站使用 Codex 内置生图工具生成的透明图标图集, 30 个图形保存在 `system/assets/icons/atlas.png`, 基础规范页提供预览和下载入口

`atlas.json` 保存按实际轮廓归一的切图坐标, 页面通过透明遮罩取出图标并继承主题颜色, 原始图片保持完整, 生成提示词见 `system/assets/icons/prompt.txt`

子代理, 工具调用与消息操作统一使用 16 像素, 个人资料标签使用 13 像素, 箭头和复选标记按控件空间缩放, 图标尺寸不改变按钮的点击区域

## 动效

操作反馈使用 120ms, 面板进入使用 180ms, 高度展开与条目排序使用 260ms, 退出使用 120ms, 参数统一保存在共享配置, 基础规范页提供说明

面板关闭时立即停止交互, 动画完成后移除, 连续点击可以中断并反向播放, 开启系统的减少动态效果后直接切换状态, 保留键盘操作与焦点返回

集成时先加载共享配置和 `motion-runtime.js`, 再加载 React, `MotionPresence.js` 与各组件, 上下文编辑区在展开结束后计算滚动位置
