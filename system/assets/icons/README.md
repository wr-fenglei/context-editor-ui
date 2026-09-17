# 图标实现与历史资源

当前功能图标使用 [icons.data.js](../../icons.data.js) 中的 Lucide 1.17.0 子集与本地命令窗口图形, 不读取本目录的 PNG 图集

## 共享节点与接口

- [icon-set.js](../../icon-set.js) 为静态页面提供 `ContextEditorUIIcons.create(name, { className, size })`
- [Icons.js](../../Icons.js) 为 React 提供 `Icon({ name, size, className })` 和具有用途名称的图标包装组件
- 两个接口读取同一份 `ContextEditorUIIconData` 节点, 使用 `viewBox="0 0 24 24"`, `currentColor`, 1.5 描边与圆形线端
- `ContextEditorUIIcons.createIcons()` 替换 `i[data-lucide]`, `window.lucide.createIcons` 指向此本地适配方法, 未加载完整 Lucide 运行时
- 图形数据固定在仓库内, 不需要图标网络请求, Lucide 的许可见 [lucide-LICENSE](../../vendor/lucide-LICENSE)

普通图标为 16px, 编辑与评论为 14px, 评论向上校准 1px, 箭头为 11px, 标签图标为 14px, 尺寸和颜色读取共享配置

网页工具使用蓝色, 命令使用琥珀色, 通用工具使用紫色, 完成状态文字与复选保持中性色, Agent 的 20px 彩色身份图形见 [Agent 说明](../agents/README.md)

## 命令窗口图形

`command-window` 是项目内定义的命令窗口, `TerminalIcon` 直接引用此节点, 24 x 24 画布内的窗口轮廓为 20 x 14, 位于 `x=2, y=5`, 圆角为 2, 内部为提示箭头与短横线

画布和描边等比缩放, 不通过 CSS 压缩正方形图标制造横向比例, 静态展示与 React 工具调用共用此图形

新增功能图标先加入共享节点数据, 再由对应接口引用, 页面不内联另一个版本, 自定义图形须与固定 Lucide 子集区分来源

## 历史 PNG 图集

以下文件仅保留早期生图记录, 不用于当前组件:

- `atlas.png`: 原始透明图集, 1374 × 1145 像素
- `atlas.json`: 图集尺寸与切图坐标, 每项为横坐标, 纵坐标, 正方形边长
- `prompt.txt`: 实际使用的生成提示词

历史图集由内置 image_gen 一次生成 30 个图形, 按 6 列 5 行排列, 旧切图按非透明轮廓计算并保留留白, 当前扩充不修改其坐标或恢复遮罩渲染
