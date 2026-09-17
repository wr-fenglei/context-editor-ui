# Agent 图标

默认使用五款 image_gen 生成的透明身份图形, 保留已确认的蓝色, 替换旧紫色, 加入琥珀, 珊瑚和青色, 薄荷环形不在默认目录中

| 文件 | 图形 | 来源 |
| --- | --- | --- |
| `blue.png` | 蓝色折叠花瓣 | 沿用已确认资源, 提示词见 [blue-prompt.txt](blue-prompt.txt) |
| `lavender.png` | 紫色四瓣折纸, 使用宽面和可辨识折线 | 2026-09-17 替换旧紫色图形 |
| `amber.png` | 琥珀色六芒星 | 2026-09-17 新增 |
| `coral.png` | 珊瑚色折纸蝶形 | 2026-09-17 第二轮新增 |
| `cyan.png` | 青色三瓣旋转折纸 | 2026-09-17 第二轮新增 |

组件使用 96 x 96 RGBA PNG, 保留透明通道, 通过 `--subagent-mark-size` 显示为 20px, 新生成图的原始尺寸为 1254 x 1254, 衍生尺寸仅使用 Lanczos 重采样, 不修改颜色或透明通道

紫色和琥珀的提示词见 [第一轮提示词](2026-09-17-prompts.md), 检查数据见 [第一轮透明度记录](2026-09-17-validation.json), 其中薄荷图形的记录与 `mint.png` 仅归档, `lavender-prompt.txt` 仅记录被替换的旧版紫色图形

珊瑚和青色的提示词见 [第二轮提示词](PROMPTS-20260917-v2.md), 检查数据见 [第二轮透明度记录](validation-20260917-v2.json), 两款已查看 20px 缩图, alpha 范围为 0..255, 可见像素中 alpha 不低于 250 的比例分别为 96.3% 和 96.2%

图形目录由 `ContextEditorUIConfig.agents` 定义, `ContextEditorUIIcons.agentIdentity(name, preferred)` 在身份首次出现时分配图形, 未指定时使用洗牌队列, 一轮内按随机顺序使用五款资源, 相同身份在当前页面生命周期中保持同一图形, 页面刷新后可重新分配, 显式指定时采用该图形

支持的图形 ID 为 `blue`, `lavender`, `amber`, `coral` 和 `cyan`, 旧别名 `rose` 映射到 `lavender`, `green` 和 `mint` 映射到 `cyan`, 新调用使用当前 ID

颜色标识身份, 不表达执行状态, 开始, 处理中和完成保持同一图形, 完成文字使用中性色, 人物头像使用独立资源
