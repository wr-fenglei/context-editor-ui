# 阅读与备注 · iOS 视觉小样

入口: [手机优先小样](index.html)

本轮按手机屏幕验证阅读、选区与备注, 桌面展示手机预览和参考对照, 属于候选方向, 尚未替换正式组件或页面

## 结构

- 阅读页: 系统字体, 左对齐标题与正文, 一段预设蓝色选区, 关联文件使用分组列表
- 操作层: 顶部返回与文字大小, 底部备注与处理状态分组, 编辑单独呈现
- 备注: 非模态半屏 Sheet, 保留上方原文, 点击或拖动把手可展开、收起
- 编辑: 左侧取消、右侧保存, 编辑文本区沿用正文排版, 不另加卡片边框

正文 17px, 放大后 20px, 中文标题 32px, CSS px 与原生 pt 不作等价验证

## 背景与说明区

2026-09-23 用户确认: 浅色背景优先白色, 可用淡灰, 但单独看应接近白色, 本小样画布为 `#FFFFFF`, 说明区分组底色为 `#FCFCFD`, 不用大面积可辨识灰底划分左右区域

说明区采用与手机一致的 32px 标题、17px 说明正文、44px 操作区, 参考资料改成圆角分组列表, 减少透明效果使用开关, 白色表面通过间距、细边界与阴影区分, 控件圆角 24-28px, 内容组圆角 22-26px

## 参考与适配

| 来源 | 实际观察 | 本次采用 |
| --- | --- | --- |
| [Apple HIG · Sheets](https://developer.apple.com/design/human-interface-guidelines/sheets) | Notes 选区上方保留正文, 下方非模态格式面板 | 把备注放在半屏面板, 保留阅读背景, 提供半屏与展开状态 |
| [Apple HIG · Materials](https://developer.apple.com/design/human-interface-guidelines/materials) | Liquid Glass 用于导航与操作层, 与 standard materials 区分 | 仅导航和底部控件使用半透明效果, 正文与备注选择实底 |
| [Apple HIG · Typography](https://developer.apple.com/design/human-interface-guidelines/typography) | iOS Body 默认 17pt, 支持适配文字大小 | 使用系统字体, 提供 Aa 放大正文 |
| [Bear 官方手机展示](https://bear.app/) | 左对齐标题、连续正文与顶部工具 | 段落直接排版, 不逐段包成卡片 |
| [Craft OS27 更新](https://www.craft.do/blog/craft-update-3-6-5) | 手机底部悬浮控件按用途分组 | 备注与状态组成一组, 编辑使用独立入口 |
| [WWDC26 · Communicate brand identity on iOS](https://developer.apple.com/videos/play/wwdc2026/251/) | 内容层与操作层分开, 强调色表达操作和状态 | 蓝色用于选区和操作, 绿色用于已处理状态 |

[Apple Design Resources](https://developer.apple.com/design/resources/) 已列出 iOS 27 / iPadOS 27 UI Kit, [2026-09-17 更新](https://developer.apple.com/design/whats-new/)涉及组件与系统色, 本轮核对了公开指南和官方展示, 没有下载或逐项复刻 UI Kit

`references/` 为本轮浏览实际页面得到的截图, 图片归原权利人所有, 仅用于此本地设计研究对照

## 可操作范围

点击预设选区或底部备注入口, 查看备注, 编辑并保存, 标为已处理或恢复待处理, 查看两个文件摘要, 返回文档列表, 放大文字, 减少透明效果

把手支持点击、键盘 Enter / Space 和拖动, 从展开状态向下拖动返回半屏, 从半屏向下拖动关闭, Escape 关闭并恢复触发元素焦点, 面板为非模态, 没有焦点锁定和背景压暗

本次草稿策略是项目适配, 不作为 HIG 的原样规则: Escape、拖动关闭和切换视图保留当前页中的未保存草稿, 重新编辑可以继续, 明确点击取消才丢弃草稿, 空白或未修改内容不能保存, Cmd / Ctrl + Enter 可保存, 输入法组合期间不提交

所有状态只在当前页面的内存中保留, 刷新还原, 没有接入真实文件、模型、发送或保存服务, 文件名称及检查摘要为演示内容, 不支持任意文本选区

## 验证

`verify.cjs` 覆盖状态切换、草稿保留与取消、文本安全显示、输入法组合、焦点恢复、面板拖动、减少动态与透明效果、320 / 390 / 768 / 1024 / 1440px 视口和参考资源加载

```sh
node verify.cjs
```

可通过 `PLAYWRIGHT_MODULE` 指定 Playwright 安装路径, `PLAYWRIGHT_BROWSERS_PATH` 指定浏览器目录, `IOS_STUDY_URL` 指定已启动的静态服务入口

记录: [validation.json](validation.json)

截图: [桌面阅读](reading-desktop.png), [半屏备注](note-phone.png), [编辑](edit-phone.png), [手机阅读](reading-mobile.png), [手机备注](note-mobile.png)

2026-09-23 说明区调整另检查了三个预览按钮的状态同步、整行开关开关各一次、说明展开, 并检查 320 / 390 / 768 / 781 / 1024 / 1440px 下无横向溢出, [说明区手机截图](guide-mobile.png)

验证使用 Chromium 桌面与视口模拟, 不代表原生 iOS、真实虚拟键盘、VoiceOver 或用户审美验收, 半透明与过渡是 CSS 近似, 不是原生 Liquid Glass, 独立 SVG 图标没有打包 SF Symbols
