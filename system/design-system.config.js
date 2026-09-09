(() => {
  const config = {
    meta: {
      id: 'user:context-editor-ui',
      name: 'context-editor-ui',
      surface: '面向对话交互的独立设计系统',
      lightLabel: '白色画布',
      darkLabel: '深色画布',
      principles: '清晰的消息层级, 克制的表面与描边, 统一的交互反馈',
      description: '为消息阅读, 内容输入和上下文编辑提供一致的界面体验'
    },
    tokens: {
      shared: {
        '--model-menu-width': '256px',
        '--model-option-height': '28px',
        '--spec-columns': 'minmax(150px, .32fr) minmax(0, .68fr)',
        '--spec-column-gap': 'var(--space-5)',
        '--profile-tag-icon-size': '13px',
        '--profile-tag-leading': '1.45',
        '--profile-tag-padding-block': 'var(--space-1)',
        '--profile-tag-padding-inline': 'var(--space-2)',
        '--avatar-group-size': 'var(--space-10)',
        '--avatar-group-overlap': 'var(--space-2)',

        '--font-display': '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", "Noto Sans CJK SC", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif',
        '--font-body': '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", "Noto Sans CJK SC", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif',
        '--font-mono': 'ui-monospace, "SFMono-Regular", "SF Mono", "Cascadia Code", "Noto Sans Mono CJK SC", Menlo, Monaco, Consolas, monospace',
        '--text-xs': '11px',
        '--text-sm': '12px',
        '--text-base': '14px',
        '--text-lg': '16px',
        '--text-xl': '18px',
        '--leading-message': '1.62',
        '--leading-compact': '1.45',
        '--space-1': '4px',
        '--space-2': '8px',
        '--space-3': '12px',
        '--space-4': '16px',
        '--space-5': '20px',
        '--space-6': '24px',
        '--space-8': '32px',
        '--space-10': '40px',
        '--space-12': '48px',
        '--radius-inline': '6px',
        '--radius-control': '8px',
        '--radius-card': '12px',
        '--radius-popover': '16px',
        '--radius-message': '20px',
        '--radius-pill': '9999px',
        '--reading-column': '780px',
        '--gutter-desktop': '32px',
        '--gutter-tablet': '24px',
        '--gutter-phone': '16px',
        '--turn-gap': '48px',
        '--message-gap': '16px',
        '--composer-min-height': '120px',
        '--message-user-max-width': '72%',
        '--message-user-max-width-tablet': '82%',
        '--message-user-max-width-phone': '92%',
        '--message-user-padding-block': '12px',
        '--message-user-padding-inline': '16px',
        '--message-action-icon-size': '19px',
        '--message-action-stroke': '1.5px',
        '--tool-icon-size': '18px',
        '--tool-row-gap': '8px',
        '--tool-stack-gap': '12px',
        '--tool-output-padding': '16px',
        '--tool-output-font-size': '12px',
        '--subagent-mark-size': '16px',
        '--subagent-pill-min-height': '34px',
        '--subagent-pill-padding-block': '5px',
        '--subagent-pill-padding-inline': '10px',
        '--subagent-pill-gap': '8px',
        '--subagent-pill-border-width': '1px',
        '--composer-padding-top': '14px',
        '--composer-border-width': '1px',
        '--composer-text-size': '14px',
        '--composer-line-height': '21px',
        '--control-target': '44px',
        '--send-visual-size': '30px',
        '--focus-ring': '0 0 0 3px color-mix(in oklch, var(--focus-color) 72%, transparent)',
        '--popover-shadow': '0 12px 32px color-mix(in oklch, var(--fg) 12%, transparent)',
        '--composer-shadow': '0 10px 34px color-mix(in oklch, var(--fg) 7%, transparent)',
        '--motion-fast': '120ms',
        '--motion-base': '180ms',
        '--ease-standard': 'cubic-bezier(.2, .8, .2, 1)'
      },
      light: {
        '--profile-icon-design': '#a65dc5',
        '--profile-icon-tech': '#3a7bd5',
        '--profile-icon-reading': '#b57a24',
        '--profile-icon-travel': '#278c85',
        '--profile-icon-sport': '#d16c42',
        '--profile-icon-music': '#c45982',

        '--palette-light-canvas': '#ffffff',
        '--palette-light-foreground': '#1a1c1f',
        '--palette-user-foreground': '#0d0d0d',
        '--palette-user-surface': '#f4f4f4',
        '--palette-selected-surface': '#f2f3f3',
        '--palette-muted': '#767778',
        '--palette-meta': '#96999d',
        '--palette-placeholder': '#aaabab',
        '--palette-hairline': '#ededed',
        '--palette-accent': '#3a83f7',
        '--palette-skill': '#924ff7',
        '--palette-diff-added': '#00a240',
        '--palette-diff-removed': '#ba2623',
        '--palette-agent-blue': '#5ea3f6',
        '--palette-agent-green': '#96da7f',
        '--bg': 'var(--palette-light-canvas)',
        '--surface': 'var(--palette-user-surface)',
        '--surface-selected': 'var(--palette-selected-surface)',
        '--fg': 'var(--palette-light-foreground)',
        '--fg-secondary': '#34363a',
        '--muted': '#757677',
        '--muted-soft': 'var(--muted)',
        '--placeholder': 'var(--muted)',
        '--border': '#eaeaea',
        '--border-soft': 'var(--palette-hairline)',
        '--accent': 'var(--palette-accent)',
        '--link': 'color-mix(in oklch, var(--accent) 72%, black)',
        '--link-hover': 'color-mix(in oklch, var(--link) 86%, black)',
        '--accent-on': '#ffffff',
        '--effort': 'color-mix(in oklch, var(--palette-skill) 92%, black)',
        '--success': 'var(--palette-diff-added)',
        '--warning': '#8a6100',
        '--danger': 'var(--palette-diff-removed)',
        '--fg-hover': 'color-mix(in oklch, var(--fg) 88%, var(--bg))',
        '--surface-hover': 'color-mix(in oklch, var(--surface) 88%, var(--fg))',
        '--accent-hover': 'color-mix(in oklch, var(--accent) 88%, black)',
        '--send-disabled': 'color-mix(in oklch, var(--fg) 52%, var(--bg))',
        '--conversation-canvas': 'var(--bg)',
        '--message-user-bg': 'var(--surface)',
        '--message-user-fg': 'var(--palette-user-foreground)',
        '--message-assistant-fg': 'var(--fg)',
        '--message-action-fg': 'var(--muted)',
        '--tool-call-fg': 'var(--muted)',
        '--tool-output-bg': 'var(--surface)',
        '--tool-output-fg': '#5b5d5f',
        '--subagent-pill-bg': 'var(--bg)',
        '--subagent-pill-border': 'var(--border-soft)',
        '--code-object-bg': 'var(--surface)',
        '--composer-bg': 'var(--bg)',
        '--composer-border': 'var(--border)',
        '--popover-bg': 'var(--bg)',
        '--popover-selected-bg': 'var(--surface-selected)',
        '--focus-color': 'var(--accent)'
      },
      dark: {
        '--profile-icon-design': '#c68de2',
        '--profile-icon-tech': '#7baef2',
        '--profile-icon-reading': '#dcb364',
        '--profile-icon-travel': '#6fc5b8',
        '--profile-icon-sport': '#e6a07c',
        '--profile-icon-music': '#df8fb1',

        '--bg': '#181818',
        '--surface': 'color-mix(in oklch, var(--bg) 88%, #ffffff)',
        '--surface-selected': 'color-mix(in oklch, var(--bg) 82%, #ffffff)',
        '--fg': '#ffffff',
        '--fg-secondary': 'color-mix(in oklch, var(--fg) 86%, var(--bg))',
        '--muted': 'color-mix(in oklch, var(--fg) 68%, var(--bg))',
        '--muted-soft': 'var(--muted)',
        '--placeholder': 'var(--muted)',
        '--border': 'color-mix(in oklch, var(--fg) 20%, var(--bg))',
        '--border-soft': 'color-mix(in oklch, var(--fg) 13%, var(--bg))',
        '--palette-accent': '#3a83f7',
        '--palette-skill': '#ad7bf9',
        '--palette-diff-added': '#40c977',
        '--palette-diff-removed': '#fa423e',
        '--accent': 'var(--palette-accent)',
        '--link': 'var(--accent)',
        '--link-hover': 'color-mix(in oklch, var(--link) 84%, #ffffff)',
        '--accent-on': '#181818',
        '--effort': 'var(--palette-skill)',
        '--success': 'var(--palette-diff-added)',
        '--warning': 'color-mix(in oklch, #8a6100 70%, #ffffff)',
        '--danger': 'var(--palette-diff-removed)',
        '--fg-hover': 'color-mix(in oklch, var(--fg) 88%, var(--bg))',
        '--surface-hover': 'color-mix(in oklch, var(--surface) 82%, var(--fg))',
        '--accent-hover': 'color-mix(in oklch, var(--accent) 82%, #ffffff)',
        '--send-disabled': 'color-mix(in oklch, var(--fg) 38%, var(--bg))',
        '--conversation-canvas': 'var(--bg)',
        '--message-user-bg': 'var(--surface)',
        '--message-user-fg': 'var(--fg)',
        '--message-assistant-fg': 'var(--fg)',
        '--message-action-fg': 'var(--muted)',
        '--tool-call-fg': 'var(--muted)',
        '--tool-output-bg': 'var(--surface)',
        '--tool-output-fg': 'var(--fg-secondary)',
        '--subagent-pill-bg': 'var(--bg)',
        '--subagent-pill-border': 'var(--border)',
        '--code-object-bg': 'var(--surface)',
        '--composer-bg': 'var(--bg)',
        '--composer-border': 'var(--border)',
        '--popover-bg': 'var(--bg)',
        '--popover-selected-bg': 'var(--surface-selected)',
        '--focus-color': 'var(--accent)'
      }
    },
    foundations: {
      colors: [
        { label: '用户消息背景', token: '--palette-user-surface' },
        { label: '正文颜色', token: '--palette-light-foreground' },
        { label: '强调色', token: '--palette-accent' },
        { label: '功能强调色', token: '--palette-skill' },
        { label: '新增内容', token: '--palette-diff-added' },
        { label: '删除内容', token: '--palette-diff-removed' }
      ],
      typography: [
        { label: '消息正文', sample: '清晰区分消息内容与操作, 保持连续的阅读体验', token: '--text-base', className: 'message-sample' },
        { label: '工具摘要', sample: '已加载工具, 执行命令并搜索网页', token: '--text-base', className: 'tool-sample' },
        { label: '时间信息', sample: '今天 16:18', token: '--text-sm', className: 'time-sample' },
        { label: '代码与路径', sample: 'system/components/ContextEditor/ContextEditor.js', token: '--text-sm', className: 'mono-sample' }
      ],
      spacing: [
        { label: '消息间距', token: '--message-gap' },
        { label: '区块间距', token: '--space-6' },
        { label: '阅读栏边距', token: '--gutter-desktop' },
        { label: '对话轮次间距', token: '--turn-gap' }
      ]
    },
    components: {
      profileTags: {
        overview: '图文标签, 自然换行, 统一间距',
        "eyebrow": "组件 06",
        "title": "个人资料标签",
        "lede": "通过图标与文字展示个人资料, 浅色背景和圆角区分标签, 窄屏自然换行",
        "source": "system/components/ProfileTags/ProfileTags.js",
        "rulesIntro": "资料标签通过文字, 图标和间距组织个人信息",
        "rules": [
          [
            "内容",
            "文字必须独立说明含义, 装饰图标不重复朗读"
          ],
          [
            "布局",
            "标签随容器换行, 长文本允许折行"
          ],
          [
            "样式",
            "使用统一的背景色, 辅助文字色, 细描边和圆角"
          ],
          [
            "图标",
            "图标为 13px, 与文字垂直居中, 按标签主题使用不同颜色, 文字独立说明含义"
          ]
        ],
        "parameters": [
          {
            "label": "字号",
            "tokens": [
              "--text-sm"
            ]
          },
          {
            "label": "图标尺寸",
            "tokens": [
              "--profile-tag-icon-size"
            ]
          },
          {
            "label": "圆角",
            "tokens": [
              "--radius-inline"
            ]
          },
          {
            "label": "内边距",
            "tokens": [
              "--profile-tag-padding-block",
              "--profile-tag-padding-inline"
            ],
            "separator": " / "
          },
          {
            "label": "标签间距",
            "tokens": [
              "--space-2"
            ]
          }
        ],
        "demo": {
          "label": "示例个人资料",
          "items": [
            { "text": "设计", "icon": "profile-design.svg", "tone": "design" },
            { "text": "科技", "icon": "profile-tech.svg", "tone": "tech" },
            { "text": "阅读", "icon": "profile-reading.svg", "tone": "reading" },
            { "text": "旅行", "icon": "profile-travel.svg", "tone": "travel" },
            { "text": "运动", "icon": "profile-sport.svg", "tone": "sport" },
            { "text": "音乐", "icon": "profile-music.svg", "tone": "music" }
          ]
        }
      },
      avatarGroup: {
        overview: '圆形裁切, 重叠排列, 主题底色',
        "eyebrow": "组件 07",
        "title": "头像组",
        "lede": "40px 圆形头像以 8px 重叠排列, 使用画布色描边区分相邻成员",
        "source": "system/components/AvatarGroup/AvatarGroup.js",
        "rulesIntro": "圆形头像按顺序重叠, 不透明底色与画布色描边区分相邻成员",
        "rules": [
          [
            "头像",
            "使用 120px PNG 头像, 以 40px 圆形显示, 透明区域由主题底色填充"
          ],
          [
            "布局",
            "按输入顺序重叠, 内容超出容器时换行"
          ],
          [
            "可访问性",
            "每个头像提供文字描述, 不将静态图片伪装成按钮"
          ],
          [
            "适用范围",
            "只展示头像集合, 不推断成员姓名、在线状态或人数之外的信息"
          ]
        ],
        "parameters": [
          {
            "label": "头像尺寸",
            "tokens": [
              "--avatar-group-size"
            ]
          },
          {
            "label": "重叠距离",
            "tokens": [
              "--avatar-group-overlap"
            ]
          },
          {
            "label": "圆角",
            "tokens": [
              "--radius-pill"
            ]
          },
          {
            "label": "描边颜色",
            "tokens": [
              "--bg"
            ]
          }
        ],
        "demo": {
          "label": "示例头像组",
          "items": [
            {
              "src": "avatar-short-hair.png",
              "alt": "短发眼镜人物头像",
              "width": 120,
              "height": 120
            },
            {
              "src": "avatar-bob-hair.png",
              "alt": "齐肩发人物头像",
              "width": 120,
              "height": 120
            },
            {
              "src": "avatar-curly-hair.png",
              "alt": "卷发人物头像",
              "width": 120,
              "height": 120
            }
          ]
        }
      },

      messages: {
        overview: '消息分层, 连续阅读, 原处操作反馈',
        eyebrow: '组件 01', title: '消息组件',
        lede: '通过对齐, 留白和背景区分用户消息与助手回复, 支持过程展开和原处复制反馈',
        source: 'system/components/MessageBubble/MessageBubble.js',
        demo: {
          user: '帮我整理本周的项目进展',
          duration: '1 分 38 秒',
          process: '我会先查看项目笔记, 再按任务整理进展',
          assistant: ['本周已完成需求梳理和交互检查', '接下来需要确认文案, 并安排体验验证'],
          codeLabel: '项目摘要',
          code: '需求梳理 → 已完成\n交互检查 → 已检查\n文案确认 → 待处理'
        },
        rulesIntro: '通过对齐, 背景和留白区分消息身份, 助手正文保持无框',
        rules: [
          ['用户消息', '用户气泡右对齐, 使用浅灰背景, 悬停或键盘聚焦时显示时间和复制操作'],
          ['助手消息', '正文保持无框, 仅对链接和行内代码进行局部强调'],
          ['处理过程', '处理过程可展开或收起, 内容按发生顺序排列'],
          ['消息操作', '复制, 赞, 踩和分支使用弱化的线框图标'],
          ['复制反馈', '复制成功在原按钮旁显示已复制并切换为勾号, 2 秒后恢复, 失败也在原处提示']
        ],
        parameters: [
          { label: '消息圆角', tokens: ['--radius-message'] },
          { label: '用户消息宽度上限', tokens: ['--message-user-max-width'] },
          { label: '用户消息内边距', tokens: ['--message-user-padding-block', '--message-user-padding-inline'], separator: ' × ' },
          { label: '对话轮次间距', tokens: ['--turn-gap'] },
          { label: '消息间距', tokens: ['--message-gap'] },
          { label: '操作图标尺寸 / 描边', tokens: ['--message-action-icon-size', '--message-action-stroke'], separator: ' / ' }
        ]
      },
      tools: {
        overview: '单行摘要, 按需展开, 状态可见',
        eyebrow: '组件 02', title: '工具调用组件',
        lede: '收起时以单行摘要显示在正文中, 展开的命令输出使用浅灰背景',
        source: 'system/components/ToolCall/ToolCall.js',
        demo: {
          rows: ['已搜索网页', '已加载工具, 执行命令并搜索网页', '已执行命令 rg -n "message|composer"'],
          output: '$ rg -n "done|pending" notes\n找到 3 组任务\n上下文草稿已就绪'
        },
        rulesIntro: '工具状态必须包含文字说明, 不能只依赖图标或颜色',
        rules: [
          ['收起状态', '线框图标, 弱化文字与可选展开箭头直接排列, 不增加卡片外框'],
          ['合并摘要', '多个动作可以合并成一句过去时摘要, 保持单行或自然换行'],
          ['展开输出', '输出使用等宽字体和浅灰背景'],
          ['错误状态', '仅在发生错误时使用错误提示色']
        ],
        parameters: [
          { label: '工具图标', tokens: ['--tool-icon-size'] },
          { label: '行内间距', tokens: ['--tool-row-gap'] },
          { label: '条目间距', tokens: ['--tool-stack-gap'] },
          { label: '输出区域圆角', tokens: ['--radius-message'] },
          { label: '输出区域内边距', tokens: ['--tool-output-padding'] },
          { label: '等宽字号', tokens: ['--tool-output-font-size'] }
        ]
      },
      subagents: {
        overview: '任务标签, 进度状态, 时间顺序',
        eyebrow: '组件 03', title: '子代理调用组件',
        lede: '任务标签和状态文字按时间顺序排列, 开始与完成状态清晰可读, 不增加卡片外框',
        source: 'system/components/SubagentCall/SubagentCall.js',
        demo: { task: '查看项目概况', tool: '已阅读项目笔记', started: '开始处理', finished: '已完成' },
        rulesIntro: '子代理的进度作为事件显示在对话中',
        rules: [
          ['任务标签', '带细描边的胶囊标签包含子代理标记和简短任务名'],
          ['任务状态', '开始处理, 处理中或已完成等状态独立显示在标签外'],
          ['时间顺序', '开始与完成状态可以出现在同一轮对话中'],
          ['详情', '默认只显示任务名和状态, 需要时才展开详情']
        ],
        parameters: [
          { label: '子代理标记', tokens: ['--subagent-mark-size'] },
          { label: '标签高度下限', tokens: ['--subagent-pill-min-height'] },
          { label: '标签内边距', tokens: ['--subagent-pill-padding-block', '--subagent-pill-padding-inline'], separator: ' × ' },
          { label: '标签内容间距', tokens: ['--subagent-pill-gap'] },
          { label: '标签描边', tokens: ['--subagent-pill-border-width'] },
          { label: '事件间距', tokens: ['--tool-stack-gap'] }
        ]
      },
      composer: {
        overview: '内容输入, 工具入口, 模型选择',
        eyebrow: '组件 04', title: '输入框组件',
        lede: '将多行输入, 上下文入口和底部工具组合在同一输入区域, 面板紧邻对应按钮',
        source: 'system/components/Composer/Composer.js',
        interface: { placeholder: '输入你想做的事', effort: '深度' },
        menus: {
          add: '添加', files: '文件和文件夹', goal: '目标', goalDescription: '设定目标并持续推进',
          plan: '计划模式', planDescription: '开启计划模式', plugins: '插件', contextEditor: '上下文编辑',
          learnMore: '了解详情'
        },
        approvalMenu: {
          title: '如何批准助手的操作?', initialValue: 'auto',
          help: '每次询问会在操作前请求确认, 自动批准仅在检测到潜在风险时询问, 完全访问允许直接执行操作',
          items: [
            { value: 'ask', label: '每次询问', description: '编辑外部文件和访问网络前始终询问' },
            { value: 'auto', label: '自动批准', description: '仅在检测到操作可能存在风险时询问' },
            { value: 'full', label: '完全访问', description: '允许访问网络和电脑上的所有文件', danger: true }
          ]
        },
        modelMenu: {
          title: '选择模型',
          initialValue: 'gpt-6-astra',
          items: [
            { value: 'default', label: '默认', description: '推荐的模型组合' },
            { value: 'gpt-6-astra', label: 'GPT-6 Astra' },
            { value: 'gpt-5.6-sol', label: 'GPT-5.6 Sol' },
            { value: 'gpt-5.6-terra', label: 'GPT-5.6 Terra' },
            { value: 'gpt-5.6-luna', label: 'GPT-5.6 Luna' },
            { value: 'gpt-5.5', label: 'GPT-5.5' },
            { value: 'gpt-5.3-codex-spark', label: 'GPT-5.3 Codex Spark' }
          ]
        },
        rulesIntro: '输入框通过阴影保持层级, 外层固定区域保持透明',
        rules: [
          ['文本输入', '输入区无内框, 占位文字使用弱化颜色, 输入内容使用正文颜色'],
          ['上下文入口', '上下文入口显示已确认与待处理数量, 点击切换展开与收起, 展开时滚动到卡片, 输入框高度保持不变'],
          ['底部工具栏', '左侧为添加和批准方式, 右侧为模型, 思考深度, 语音输入和发送'],
          ['悬停', '保持完整点击区域, 悬停背景使用紧凑的胶囊形状'],
          ['聚焦', '输入区聚焦时不显示蓝框, 输入框描边颜色保持不变'],
          ['工具面板', '面板在底部工具按钮上方展开, 与按钮间隔 8px, 点击外部或按退出键可关闭, 关闭后焦点返回按钮'],
          ['批准方式', '点击选项后同步按钮文字与勾号, 关闭面板并返回焦点, 再次打开保留当前选择, 支持方向键和确认键操作'],
          ['模型选择', '模型以单列选项展示, 勾号表示当前选择, 悬停只高亮当前行, 选择后关闭面板并同步按钮文字']
        ],
        parameters: [
          { label: '高度下限', tokens: ['--composer-min-height'] },
          { label: '输入框圆角', tokens: ['--radius-message'] },
          { label: '输入框描边', tokens: ['--composer-border-width'] },
          { label: '顶部内边距', tokens: ['--composer-padding-top'] },
          { label: '控件点击区域', tokens: ['--control-target'] },
          { label: '发送按钮尺寸', tokens: ['--send-visual-size'] }
        ]
      },
      contextEditor: {
        overview: '工作草稿, 待处理内容, 逐项确认',
        eyebrow: '组件 05', title: '上下文编辑组件',
        lede: '上下文编辑区位于对话中, 使用分隔线区分已确认的工作草稿与待处理内容',
        source: 'system/components/ContextEditor/ContextEditor.js',
        demo: {
          draft: [
            { id: 'd1', kind: 'file', title: 'packages/context-editor/src/messages.tsx', meta: '上次编辑 · 2 小时前', included: true },
            { id: 'd2', kind: 'selection', title: 'DESIGN.md 第 6 节 上下文边界', meta: '已选 12 行 · 来自工作区', included: true },
            { id: 'd3', kind: 'instruction', title: '助手正文保持无框', meta: '当前会话指令', included: true },
            { id: 'd4', kind: 'file', title: 'system/components/Composer/Composer.js', meta: '上次编辑 · 昨天', included: false }
          ],
          pending: [
            { id: 'p1', kind: 'file', title: 'system/components/Composer/spec.html', meta: '刚添加 · 未处理' },
            { id: 'p2', kind: 'note', title: '将上下文编辑入口放在输入框顶部', meta: '草稿输入 · 未处理' },
            { id: 'p3', kind: 'file', title: 'system/interactions.js', meta: '工具调用产生 · 未处理' }
          ]
        },
        rulesIntro: '待处理内容需明确并入后才进入工作草稿, 可从消息操作, 工具行或输入框进入编辑区',
        rules: [
          ['工作草稿', '已确认的上下文, 随下一条消息发送'],
          ['待处理内容', '未处理的内容, 只有明确并入后才进入工作草稿'],
          ['分隔线', '虚线分隔已确认的草稿与待处理内容'],
          ['入口', '从消息操作, 工具行或输入框进入, 不增加独立面板'],
          ['确认', '确认后工作草稿成为下一条消息的上下文']
        ],
        parameters: [
          { label: '编辑区圆角', tokens: ['--radius-message'] },
          { label: '控件点击区域', tokens: ['--control-target'] },
          { label: '控件圆角', tokens: ['--radius-control'] },
          { label: '分组内边距', tokens: ['--space-5'] },
          { label: '条目间距', tokens: ['--space-3'] },
          { label: '状态过渡时长', tokens: ['--motion-base'] }
        ]
      }
    },
    integratedDemo: {
      time: '今天 16:18',
      user: '帮我整理本周的项目进展, 并把待确认事项加入上下文',
      duration: '1 分 38 秒',
      process: '我会先查看项目笔记, 再整理进展和待确认事项',
      task: '查看项目概况',
      toolWeb: '已阅读项目笔记',
      toolCommand: '已执行命令',
      output: '$ rg -n "done|pending" notes\n找到 3 组任务\n上下文草稿已就绪',
      assistant: ['本周的需求梳理和界面交互检查已完成, 当前进展整理如下', '待确认事项已放入上下文编辑区, 可以逐项纳入, 排除或移除'],
      codeLabel: '项目摘要',
      code: '需求梳理 → 已完成\n交互检查 → 已检查\n文案确认 → 待处理\n体验验证 → 已安排'
    },
    voice: {
      assistant: '先给判断, 再给动作和可验证结果',
      tool: '使用过去时或进行时的短动作加对象',
      subagent: '任务名简短明确, 状态单独显示',
      contextEditor: '明确区分待处理内容与已确认的工作草稿'
    },
    boundaries: {
      integration: '上下文编辑入口位于消息操作, 工具行或输入框中',
      dark: '浅色与深色主题保持相同的层级和交互, 通过画布, 表面和文字颜色区分内容'
    }
  }

  const tokenValue = (token) => config.tokens.shared[token] ?? config.tokens.light[token] ?? config.tokens.dark[token] ?? ''
  const declarations = (values) => Object.entries(values).map(([name, value]) => `${name}:${value};`).join('')
  const tokenStyle = document.createElement('style')
  tokenStyle.id = 'context-editor-ui-tokens'
  tokenStyle.textContent = `:root{${declarations(config.tokens.shared)}}:root,[data-theme="light"]{color-scheme:light;${declarations(config.tokens.light)}}[data-theme="dark"]{color-scheme:dark;${declarations(config.tokens.dark)}}@media(prefers-reduced-motion:reduce){:root{--motion-fast:0ms;--motion-base:0ms;--ease-standard:linear;}}`
  document.head.appendChild(tokenStyle)

  const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character])
  const setText = (selector, value) => {
    const element = document.querySelector(selector)
    if (element) element.textContent = value
  }
  const parameterValue = (parameter) => parameter.tokens.map(tokenValue).join(parameter.separator || '')
  const renderComponentPage = (componentId) => {
    const component = config.components[componentId]
    if (!component) return
    setText('[data-config-eyebrow]', component.eyebrow)
    setText('[data-config-title]', component.title)
    setText('[data-config-lede]', component.lede)
    setText('[data-config-summary]', component.overview)
    setText('[data-config-rules-intro]', component.rulesIntro)
    setText('[data-config-parameters-intro]', '尺寸, 间距, 圆角与交互状态的设计参数')
    const rules = document.querySelector('[data-config-rules]')
    if (rules) rules.innerHTML = component.rules.map(([name, description]) => `<div class="spec-row"><dt>${escapeHtml(name)}</dt><dd>${escapeHtml(description)}</dd></div>`).join('')
    const parameters = document.querySelector('[data-config-parameters]')
    if (parameters) parameters.innerHTML = component.parameters.map((parameter) => `<div class="parameter-card"><code>${escapeHtml(parameter.tokens.join(parameter.separator || ''))}</code><strong>${escapeHtml(parameterValue(parameter))}</strong><span>${escapeHtml(parameter.label)}</span></div>`).join('')
    setText('[data-config-footer]', '统一消息, 操作与输入的视觉层级')
  }
  const renderFoundationsPage = () => {
    const root = document.getElementById('foundations-root')
    if (!root) return
    const colorRows = config.foundations.colors.map((item) => `<div class="color-token"><strong>${escapeHtml(item.label)}</strong><span class="swatch" style="background:var(${escapeHtml(item.token)})"></span><code>${escapeHtml(tokenValue(item.token))}</code></div>`).join('')
    const typeRows = config.foundations.typography.map((item) => `<div class="type-row"><span class="type-label">${escapeHtml(item.label)}</span><span class="${escapeHtml(item.className)}">${escapeHtml(item.sample)}</span><span class="type-size">${escapeHtml(tokenValue(item.token))}</span></div>`).join('')
    const spacingRows = config.foundations.spacing.map((item) => `<div class="space-track"><code>${escapeHtml(item.label)}</code><span class="space-bar" style="width:${escapeHtml(tokenValue(item.token))}"></span><span>${escapeHtml(tokenValue(item.token))}</span></div>`).join('')
    root.innerHTML = `
      <header class="review-head"><div><p class="eyebrow">基础规范</p><h1 data-od-id="foundations-title">颜色, 字体与几何</h1><p class="lede">通过颜色, 字体, 间距与圆角建立一致的视觉层级</p></div><p>${escapeHtml(config.meta.principles)}</p></header>
      <section class="review-section" data-od-id="foundation-colors"><div class="section-head"><h2>颜色角色</h2><p>颜色用于区分画布, 内容表面, 强调信息和操作状态</p></div><div class="stage">${colorRows}</div></section>
      <section class="review-section" data-od-id="foundation-typography"><div class="section-head"><h2>字体层级</h2><p>消息使用系统界面字体, 等宽字体仅用于代码, 命令和路径</p></div><div class="stage">${typeRows}</div></section>
      <section class="review-section" data-od-id="foundation-spacing"><div class="section-head"><h2>间距与几何</h2><p>阅读栏宽与消息间距共同控制内容密度和阅读节奏</p></div><div class="stage">${spacingRows}</div><div class="stage is-surface foundation-geometry"><div class="column-diagram"><div class="turn-diagram"><div class="bubble-diagram">用户气泡宽度上限为 ${escapeHtml(tokenValue('--message-user-max-width'))}</div><div class="turn-block">助手消息在阅读栏内保持无框</div></div></div></div></section>
      <section class="review-section" data-od-id="foundation-themes"><div class="section-head"><h2>浅色与深色</h2><p>${escapeHtml(config.boundaries.dark)}</p></div><div class="grid-2"><div class="theme-board" data-theme="light"><div class="theme-label"><strong>浅色</strong><span>${escapeHtml(config.meta.lightLabel)}</span></div><div class="message-pair"><div class="user-message">浅灰表面区分用户消息</div><p>助手正文保持无框</p></div></div><div class="theme-board" data-theme="dark"><div class="theme-label"><strong>深色</strong><span>${escapeHtml(config.meta.darkLabel)}</span></div><div class="message-pair"><div class="user-message">低对比表面区分用户消息</div><p>文字与操作保持清晰可辨</p></div></div></div></section>
      <footer class="review-foot">${escapeHtml(config.meta.description)}</footer>`
  }
  const applyThemeFromLocation = () => {
    const theme = new URLSearchParams(window.location.search).get('theme')
    document.documentElement.dataset.theme = theme === 'dark' ? 'dark' : 'light'
  }

  Object.assign(window, {
    ContextEditorUIConfig: config,
    ContextEditorUI: { applyThemeFromLocation, renderComponentPage, renderFoundationsPage, tokenValue }
  })
  applyThemeFromLocation()
})()
