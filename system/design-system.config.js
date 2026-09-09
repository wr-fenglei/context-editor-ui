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
        { label: 'User surface', token: '--palette-user-surface' },
        { label: 'Foreground', token: '--palette-light-foreground' },
        { label: 'Accent', token: '--palette-accent' },
        { label: 'Skill', token: '--palette-skill' },
        { label: 'Diff added', token: '--palette-diff-added' },
        { label: 'Diff removed', token: '--palette-diff-removed' }
      ],
      typography: [
        { label: 'message', sample: '清晰区分消息内容与操作, 保持连续的阅读体验', token: '--text-base', className: 'message-sample' },
        { label: 'tool', sample: 'Loaded a tool, ran a command, searched the web', token: '--text-base', className: 'tool-sample' },
        { label: 'metadata', sample: 'Today 4:18 PM', token: '--text-sm', className: 'time-sample' },
        { label: 'code', sample: 'system/components/ContextEditor/ContextEditor.js', token: '--text-sm', className: 'mono-sample' }
      ],
      spacing: [
        { label: 'message gap', token: '--message-gap' },
        { label: 'section gap', token: '--space-6' },
        { label: 'column gutter', token: '--gutter-desktop' },
        { label: 'turn gap', token: '--turn-gap' }
      ]
    },
    components: {
      profileTags: {
        overview: '图文标签, 自然换行, 统一间距',
        "eyebrow": "Component 06",
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
            "绑定 surface、fg-secondary、border-soft 与 radius-inline"
          ],
          [
            "图标",
            "图标与文字垂直居中, 使用一致的尺寸和间距"
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
            {
              "text": "女性",
              "icon": "profile-female.svg"
            },
            {
              "text": "IP 重庆"
            },
            {
              "text": "已实名",
              "icon": "profile-identity.svg"
            },
            {
              "text": "重庆大学",
              "icon": "profile-school.svg"
            },
            {
              "text": "互联网"
            },
            {
              "text": "Steam·8487h",
              "icon": "profile-steam.svg"
            }
          ]
        }
      },
      avatarGroup: {
        overview: '圆形裁切, 重叠排列, 主题底色',
        "eyebrow": "Component 07",
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
        eyebrow: 'Component 01', title: '消息组件',
        lede: '通过对齐, 留白和背景区分用户消息与助手回复, 支持过程展开和原处复制反馈',
        source: 'system/components/MessageBubble/MessageBubble.js',
        demo: {
          user: '帮我整理本周的项目进展',
          duration: '1m 38s',
          process: '我会先查看项目笔记, 再按任务整理进展',
          assistant: ['本周已完成需求梳理和交互检查', '接下来需要确认文案, 并安排体验验证'],
          codeLabel: 'Project summary',
          code: 'requirements → complete\ninteraction  → reviewed\ncopy         → pending'
        },
        rulesIntro: '消息身份由 alignment, surface 和 whitespace 表达, assistant 正文不增加 card shell',
        rules: [
          ['User message', '右对齐浅灰 bubble, hover 或 keyboard focus 时显示时间和复制操作'],
          ['Assistant message', '保持无框正文, link 与 inline code 才获得局部强调'],
          ['Worked summary', '使用原生 details, 展开内容按发生顺序排列'],
          ['Message actions', '复制, 赞, 踩和分支使用低显著度 outline icon'],
          ['Copy feedback', '复制成功在原按钮旁显示已复制并切换为勾号, 2 秒后恢复, 失败也在原处提示']
        ],
        parameters: [
          { label: 'message radius', tokens: ['--radius-message'] },
          { label: 'user max-width', tokens: ['--message-user-max-width'] },
          { label: 'user padding', tokens: ['--message-user-padding-block', '--message-user-padding-inline'], separator: ' × ' },
          { label: 'turn gap', tokens: ['--turn-gap'] },
          { label: 'message gap', tokens: ['--message-gap'] },
          { label: 'action icon / stroke', tokens: ['--message-action-icon-size', '--message-action-stroke'], separator: ' / ' }
        ]
      },
      tools: {
        overview: '单行摘要, 按需展开, 状态可见',
        eyebrow: 'Component 02', title: '工具调用组件',
        lede: 'Collapsed row 留在正文流, 只有 command output 获得浅灰 surface',
        source: 'system/components/ToolCall/ToolCall.js',
        demo: {
          rows: ['Searched the web', 'Loaded a tool, ran commands, searched the web', 'Ran command rg -n "message|composer"'],
          output: '$ rg -n "done|pending" notes\n3 task groups found\nContext draft ready'
        },
        rulesIntro: '工具状态必须同时包含文字, 不能只依赖 icon 或颜色',
        rules: [
          ['Collapsed row', 'Outline icon, muted label 和可选 chevron 直接排列, 不包 card'],
          ['Grouped call', '多个动作可以合并成一句过去时摘要, 保持单行或自然换行'],
          ['Expanded output', '输出使用 mono 字体和浅灰 surface'],
          ['Error state', '只有真实错误使用 danger role']
        ],
        parameters: [
          { label: 'tool icon', tokens: ['--tool-icon-size'] },
          { label: 'row gap', tokens: ['--tool-row-gap'] },
          { label: 'stack gap', tokens: ['--tool-stack-gap'] },
          { label: 'output radius', tokens: ['--radius-message'] },
          { label: 'output padding', tokens: ['--tool-output-padding'] },
          { label: 'mono size', tokens: ['--tool-output-font-size'] }
        ]
      },
      subagents: {
        overview: '任务标签, 进度状态, 时间顺序',
        eyebrow: 'Component 03', title: 'Subagent 调用组件',
        lede: 'Task pill 与 lifecycle text 位于同一 timeline, started 和 finished 保持可读但不形成卡片',
        source: 'system/components/SubagentCall/SubagentCall.js',
        demo: { task: 'Review project brief', tool: 'Read project notes', started: 'started working', finished: 'finished' },
        rulesIntro: 'Subagent 是对话事件, 不是独立工作面板',
        rules: [
          ['Task pill', '轻描边 pill 包含 agent mark 与 2 至 4 个词的任务名'],
          ['Lifecycle', 'started working, working 或 finished 独立写在 pill 外'],
          ['Timeline', 'started 与 finished 可以出现在同一 turn 中'],
          ['Detail', '默认只显示任务名和状态, 需要时才展开详情']
        ],
        parameters: [
          { label: 'agent mark', tokens: ['--subagent-mark-size'] },
          { label: 'pill min-height', tokens: ['--subagent-pill-min-height'] },
          { label: 'pill padding', tokens: ['--subagent-pill-padding-block', '--subagent-pill-padding-inline'], separator: ' × ' },
          { label: 'pill gap', tokens: ['--subagent-pill-gap'] },
          { label: 'pill border', tokens: ['--subagent-pill-border-width'] },
          { label: 'timeline stack', tokens: ['--tool-stack-gap'] }
        ]
      },
      composer: {
        overview: '内容输入, 工具入口, 模型选择',
        eyebrow: 'Component 04', title: '输入框组件',
        lede: '将多行输入, 上下文入口和底部工具组合在同一输入区域, 面板紧邻对应按钮',
        source: 'system/components/Composer/Composer.js',
        interface: { placeholder: 'Do anything', approval: 'Approve for me', effort: 'Ultra' },
        modelMenu: {
          title: 'Select model',
          initialValue: 'gpt-6-astra',
          items: [
            { value: 'default', label: 'Default', description: 'Recommended set of models' },
            { value: 'gpt-6-astra', label: 'GPT-6 Astra' },
            { value: 'gpt-5.6-sol', label: 'GPT-5.6 Sol' },
            { value: 'gpt-5.6-terra', label: 'GPT-5.6 Terra' },
            { value: 'gpt-5.6-luna', label: 'GPT-5.6 Luna' },
            { value: 'gpt-5.5', label: 'GPT-5.5' },
            { value: 'gpt-5.3-codex-spark', label: 'GPT-5.3 Codex Spark' }
          ]
        },
        rulesIntro: 'Composer 是对话中唯一持续 elevated 的对象, 外层 sticky dock 必须透明',
        rules: [
          ['Textarea', '无内框, placeholder 使用 muted role, 正文使用 foreground'],
          ['Context accessory', '上下文入口显示已确认与待处理数量, 点击切换展开与收起, 展开时滚动到卡片, 不改变 composer 高度'],
          ['Bottom bar', '左侧 add 和 approval, 右侧 model, effort, microphone 和 send'],
          ['Hover', '保持完整 target, 可见 hover surface 使用紧凑 pill'],
          ['Focus', 'Textarea 不出现蓝框, composer border 颜色保持不变'],
          ['Menus', '面板在底部工具按钮上方展开, 与按钮间隔 8px, 支持 outside click, Escape 和 focus return'],
          ['Model selection', '模型以单列选项展示, 勾号表示当前选择, hover 只高亮当前行, 选择后关闭面板并同步按钮文字']
        ],
        parameters: [
          { label: 'minimum height', tokens: ['--composer-min-height'] },
          { label: 'composer radius', tokens: ['--radius-message'] },
          { label: 'composer border', tokens: ['--composer-border-width'] },
          { label: 'top padding', tokens: ['--composer-padding-top'] },
          { label: 'control target', tokens: ['--control-target'] },
          { label: 'send visual', tokens: ['--send-visual-size'] }
        ]
      },
      contextEditor: {
        overview: '工作草稿, 待处理内容, 逐项确认',
        eyebrow: 'Component 05', title: '上下文编辑组件',
        lede: 'Context Editor 是对话流内的对象, 用一条 boundary 把 confirmed work draft 与 pending input 硬性分开',
        source: 'system/components/ContextEditor/ContextEditor.js',
        demo: {
          draft: [
            { id: 'd1', kind: 'file', title: 'packages/context-editor/src/messages.tsx', meta: '上次编辑 · 2 小时前', included: true },
            { id: 'd2', kind: 'selection', title: 'DESIGN.md §6 Context boundary', meta: '已选 12 行 · 来自工作区', included: true },
            { id: 'd3', kind: 'instruction', title: 'Assistant 正文保持无框', meta: '当前会话指令', included: true },
            { id: 'd4', kind: 'file', title: 'system/components/Composer/Composer.js', meta: '上次编辑 · 昨天', included: false }
          ],
          pending: [
            { id: 'p1', kind: 'file', title: 'system/components/Composer/spec.html', meta: '刚添加 · 未处理' },
            { id: 'p2', kind: 'note', title: '把 Context Editor 入口放到 composer accessory', meta: '草稿输入 · 未处理' },
            { id: 'p3', kind: 'file', title: 'system/interactions.js', meta: '工具调用产生 · 未处理' }
          ]
        },
        rulesIntro: 'Pending input 是未处理 input, 不是 work draft 内容; 入口只来自 message action, tool row 或 composer accessory',
        rules: [
          ['Work draft', '已确认的上下文, 随下一条消息发送'],
          ['Pending input', '未处理 input, 只有明确并入后才进入工作草稿'],
          ['Boundary', '虚线边界把 confirmed draft 与 pending input 分开'],
          ['Entry points', 'message action, tool row 或 composer accessory, 不新增独立面板'],
          ['Confirm', '确认后工作草稿成为下一条消息的上下文']
        ],
        parameters: [
          { label: 'editor radius', tokens: ['--radius-message'] },
          { label: 'control target', tokens: ['--control-target'] },
          { label: 'control radius', tokens: ['--radius-control'] },
          { label: 'group padding', tokens: ['--space-5'] },
          { label: 'stack gap', tokens: ['--space-3'] },
          { label: 'state motion', tokens: ['--motion-base'] }
        ]
      }
    },
    integratedDemo: {
      time: 'Today 4:18 PM',
      user: '帮我整理本周的项目进展, 并把待确认事项加入上下文',
      duration: '1m 38s',
      process: '我会先查看项目笔记, 再整理进展和待确认事项',
      task: 'Review project brief',
      toolWeb: 'Read project notes',
      toolCommand: 'Ran commands',
      output: '$ rg -n "done|pending" notes\n3 task groups found\nContext draft ready',
      assistant: ['本周的需求梳理和界面交互检查已完成, 当前进展整理如下', '待确认事项已放入上下文编辑区, 可以逐项纳入, 排除或移除'],
      codeLabel: 'Project summary',
      code: 'requirements → complete\ninteraction  → reviewed\ncopy         → pending\nvalidation   → scheduled'
    },
    voice: {
      assistant: '先给判断, 再给动作和可验证结果',
      tool: '使用过去时或进行时的短动作加对象',
      subagent: '任务名使用 2 至 4 个词, lifecycle 独立表达',
      contextEditor: '明确区分 pending input 与 confirmed work draft'
    },
    boundaries: {
      integration: 'Context Editor 入口只能作为 message action, tool row 或 composer accessory',
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
      <header class="review-head"><div><p class="eyebrow">Foundations</p><h1 data-od-id="foundations-title">颜色, 字体与几何</h1><p class="lede">通过颜色, 字体, 间距与圆角建立一致的视觉层级</p></div><p>${escapeHtml(config.meta.principles)}</p></header>
      <section class="review-section" data-od-id="foundation-colors"><div class="section-head"><h2>颜色角色</h2><p>颜色用于区分画布, 内容表面, 强调信息和操作状态</p></div><div class="stage">${colorRows}</div></section>
      <section class="review-section" data-od-id="foundation-typography"><div class="section-head"><h2>字体层级</h2><p>系统 UI 负责消息, monospace 只用于 code, command 和 path</p></div><div class="stage">${typeRows}</div></section>
      <section class="review-section" data-od-id="foundation-spacing"><div class="section-head"><h2>间距与几何</h2><p>阅读栏宽与消息间距共同控制内容密度和阅读节奏</p></div><div class="stage">${spacingRows}</div><div class="stage is-surface foundation-geometry"><div class="column-diagram"><div class="turn-diagram"><div class="bubble-diagram">User bubble, ${escapeHtml(tokenValue('--message-user-max-width'))} maximum</div><div class="turn-block">Assistant message stays unboxed across the reading column</div></div></div></div></section>
      <section class="review-section" data-od-id="foundation-themes"><div class="section-head"><h2>Light 与 dark</h2><p>${escapeHtml(config.boundaries.dark)}</p></div><div class="grid-2"><div class="theme-board" data-theme="light"><div class="theme-label"><strong>Light</strong><span>${escapeHtml(config.meta.lightLabel)}</span></div><div class="message-pair"><div class="user-message">浅灰表面区分用户消息</div><p>Assistant 正文保持无框</p></div></div><div class="theme-board" data-theme="dark"><div class="theme-label"><strong>Dark</strong><span>${escapeHtml(config.meta.darkLabel)}</span></div><div class="message-pair"><div class="user-message">低对比表面区分用户消息</div><p>文字与操作保持清晰可辨</p></div></div></div></section>
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
