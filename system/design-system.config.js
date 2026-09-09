(() => {
  const config = {
    meta: {
      id: 'user:context-editor-ui',
      name: 'context-editor-ui',
      surface: 'responsive conversation UI',
      lightStatus: 'measured',
      darkStatus: 'provisional',
      evidence: '19 screenshots captured on 2026-08-28 · theme codex-theme-v1',
      nonClaim: '截图驱动的非官方复原系统, 不代表任何官方 token'
    },
    themeSource: {
      id: 'codex-theme-v1',
      accentSource: 'chatgpt',
      light: { variant: 'light', accent: '#3a83f7', ink: '#1a1c1f', surface: '#ffffff', contrast: 45, diffAdded: '#00a240', diffRemoved: '#ba2623', skill: '#924ff7' },
      dark: { variant: 'dark', accent: '#3a83f7', ink: '#ffffff', surface: '#181818', contrast: 60, diffAdded: '#40c977', diffRemoved: '#fa423e', skill: '#ad7bf9' }
    },
    tokens: {
      shared: {
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
        '--source-light-canvas': '#ffffff',
        '--source-light-foreground': '#1a1c1f',
        '--source-user-foreground': '#0d0d0d',
        '--source-user-surface': '#f4f4f4',
        '--source-selected-surface': '#f2f3f3',
        '--source-muted': '#767778',
        '--source-meta': '#96999d',
        '--source-placeholder': '#aaabab',
        '--source-hairline': '#ededed',
        '--source-accent': '#3a83f7',
        '--source-skill': '#924ff7',
        '--source-diff-added': '#00a240',
        '--source-diff-removed': '#ba2623',
        '--source-agent-blue': '#5ea3f6',
        '--source-agent-green': '#96da7f',
        '--bg': 'var(--source-light-canvas)',
        '--surface': 'var(--source-user-surface)',
        '--surface-selected': 'var(--source-selected-surface)',
        '--fg': 'var(--source-light-foreground)',
        '--fg-secondary': '#34363a',
        '--muted': '#757677',
        '--muted-soft': 'var(--muted)',
        '--placeholder': 'var(--muted)',
        '--border': '#eaeaea',
        '--border-soft': 'var(--source-hairline)',
        '--accent': 'var(--source-accent)',
        '--link': 'color-mix(in oklch, var(--accent) 72%, black)',
        '--link-hover': 'color-mix(in oklch, var(--link) 86%, black)',
        '--accent-on': '#ffffff',
        '--effort': 'color-mix(in oklch, var(--source-skill) 92%, black)',
        '--success': 'var(--source-diff-added)',
        '--warning': '#8a6100',
        '--danger': 'var(--source-diff-removed)',
        '--fg-hover': 'color-mix(in oklch, var(--fg) 88%, var(--bg))',
        '--surface-hover': 'color-mix(in oklch, var(--surface) 88%, var(--fg))',
        '--accent-hover': 'color-mix(in oklch, var(--accent) 88%, black)',
        '--send-disabled': 'color-mix(in oklch, var(--fg) 52%, var(--bg))',
        '--conversation-canvas': 'var(--bg)',
        '--message-user-bg': 'var(--surface)',
        '--message-user-fg': 'var(--source-user-foreground)',
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
        '--source-accent': '#3a83f7',
        '--source-skill': '#ad7bf9',
        '--source-diff-added': '#40c977',
        '--source-diff-removed': '#fa423e',
        '--accent': 'var(--source-accent)',
        '--link': 'var(--accent)',
        '--link-hover': 'color-mix(in oklch, var(--link) 84%, #ffffff)',
        '--accent-on': '#181818',
        '--effort': 'var(--source-skill)',
        '--success': 'var(--source-diff-added)',
        '--warning': 'color-mix(in oklch, #8a6100 70%, #ffffff)',
        '--danger': 'var(--source-diff-removed)',
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
        { label: 'User surface', token: '--source-user-surface' },
        { label: 'Foreground', token: '--source-light-foreground' },
        { label: 'Accent', token: '--source-accent' },
        { label: 'Skill', token: '--source-skill' },
        { label: 'Diff added', token: '--source-diff-added' },
        { label: 'Diff removed', token: '--source-diff-removed' }
      ],
      typography: [
        { label: 'message', sample: '先复原原生消息和输入框, 不增加额外面板', token: '--text-base', className: 'message-sample' },
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
        "eyebrow": "Component 06",
        "title": "个人资料标签",
        "lede": "带图标或纯文字的资料标签, 使用系统 surface、文字和圆角, 窄屏自然换行",
        "source": "system/components/ProfileTags/ProfileTags.js",
        "rulesIntro": "仅保留选定的系统风格, 标签用于展示资料, 不添加无定义的点击行为",
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
            "来源",
            "保留用户选定的图标几何, 当前数据是导入示例资料"
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
        "eyebrow": "Component 07",
        "title": "头像组",
        "lede": "40px 圆形头像以 8px 重叠排列, 使用画布色描边区分相邻成员",
        "source": "system/components/AvatarGroup/AvatarGroup.js",
        "rulesIntro": "仅保留选定的系统风格, 头像图片迁入系统资产目录",
        "rules": [
          [
            "头像",
            "使用晴日小馆的三个人物 PNG 头像, 120px 源图以 40px 显示, 圆形裁切由组件完成"
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
        eyebrow: 'Component 01', title: '消息组件',
        lede: 'User bubble, worked summary, assistant prose, code object 和 message actions 共用同一套组件实现',
        source: 'system/components/MessageBubble/MessageBubble.js',
        demo: {
          user: '先把对话消息和输入框做成原生效果',
          duration: '1m 38s',
          process: '我会先核对消息层级和对话节奏',
          assistant: ['助手正文保持无框, 不加入额外面板', '代码对象只在需要展示可复制内容时出现'],
          codeLabel: 'Message contract',
          code: 'assistant → unboxed prose\nactions   → low-emphasis outline'
        },
        rulesIntro: '消息身份由 alignment, surface 和 whitespace 表达, assistant 正文不增加 card shell',
        rules: [
          ['User message', '右对齐浅灰 bubble, hover 或 keyboard focus 时显示时间和复制操作'],
          ['Assistant message', '保持无框正文, link 与 inline code 才获得局部强调'],
          ['Worked summary', '使用原生 details, 展开内容按发生顺序排列'],
          ['Message actions', '复制, 赞, 踩和分支使用低显著度 outline icon']
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
        eyebrow: 'Component 02', title: '工具调用组件',
        lede: 'Collapsed row 留在正文流, 只有 command output 获得浅灰 surface',
        source: 'system/components/ToolCall/ToolCall.js',
        demo: {
          rows: ['Searched the web', 'Loaded a tool, ran commands, searched the web', 'Ran command rg -n "message|composer"'],
          output: '$ rg -n "message|composer" source\n19 screenshot references matched\nConversation surfaces isolated'
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
        eyebrow: 'Component 03', title: 'Subagent 调用组件',
        lede: 'Task pill 与 lifecycle text 位于同一 timeline, started 和 finished 保持可读但不形成卡片',
        source: 'system/components/SubagentCall/SubagentCall.js',
        demo: { task: 'Inspect message UI', tool: 'Read conversation screenshots', started: 'started working', finished: 'finished' },
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
        eyebrow: 'Component 04', title: '输入框组件',
        lede: 'Textarea, accessory, bottom bar, menus 和 send state 全部来自集成页使用的同一个 Composer',
        source: 'system/components/Composer/Composer.js',
        interface: { placeholder: 'Do anything', approval: 'Approve for me', model: '5.6 Sol', effort: 'Ultra' },
        rulesIntro: 'Composer 是对话中唯一持续 elevated 的对象, 外层 sticky dock 必须透明',
        rules: [
          ['Textarea', '无内框, placeholder 使用 muted role, 正文使用 foreground'],
          ['Context accessory', '上下文入口显示已确认与待处理数量, 点击切换展开与收起, 展开时滚动到卡片, 不改变 composer 高度'],
          ['Bottom bar', '左侧 add 和 approval, 右侧 model, effort, microphone 和 send'],
          ['Hover', '保持完整 target, 可见 hover surface 使用紧凑 pill'],
          ['Focus', 'Textarea 不出现蓝框, composer border 颜色保持不变'],
          ['Menus', '面板在底部工具按钮上方展开, 与按钮间隔 8px, 支持 outside click, Escape 和 focus return']
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
      user: '把上下文编辑插件的消息显示做得和原生会话一样, 先不要加入额外面板',
      duration: '1m 38s',
      process: '我先核对消息层级, 工具行, subagent pill 和 composer 的几何关系',
      task: 'Inspect message UI',
      toolWeb: 'Read conversation screenshots',
      toolCommand: 'Ran commands',
      output: '$ rg -n "message|composer|subagent" source\n19 screenshot references matched\nConversation surfaces isolated',
      assistant: ['范围已收敛到原生对话层, 保留用户消息, 助手正文, 工具调用, subagent timeline 和输入框', '上下文编辑功能只从 message action, tool row 或 composer accessory 进入, 不增加独立面板'],
      codeLabel: 'Message contract',
      code: 'user message  → soft surface bubble\nassistant     → unboxed prose\ntool call     → muted inline row\nsubagent      → outlined task pill'
    },
    voice: {
      assistant: '先给判断, 再给动作和可验证结果',
      tool: '使用过去时或进行时的短动作加对象',
      subagent: '任务名使用 2 至 4 个词, lifecycle 独立表达',
      contextEditor: '明确区分 pending input 与 confirmed work draft'
    },
    boundaries: {
      integration: 'Context Editor 入口只能作为 message action, tool row 或 composer accessory',
      dark: 'Dark 已确认 canvas, foreground, accent 与 semantic colors, component neutral 仍为 provisional'
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
    setText('[data-config-source]', `实现: ${component.source}`)
    setText('[data-config-rules-intro]', component.rulesIntro)
    setText('[data-config-parameters-intro]', '参数直接读取 system/design-system.config.js, 页面不保存数值副本')
    const rules = document.querySelector('[data-config-rules]')
    if (rules) rules.innerHTML = component.rules.map(([name, description]) => `<div class="spec-row"><dt>${escapeHtml(name)}</dt><dd>${escapeHtml(description)}</dd></div>`).join('')
    const parameters = document.querySelector('[data-config-parameters]')
    if (parameters) parameters.innerHTML = component.parameters.map((parameter) => `<div class="parameter-card"><code>${escapeHtml(parameter.tokens.join(parameter.separator || ''))}</code><strong>${escapeHtml(parameterValue(parameter))}</strong><span>${escapeHtml(parameter.label)}</span></div>`).join('')
    setText('[data-config-footer]', '真实组件, 规范和参数均来自 system/ 的共享来源')
  }
  const renderFoundationsPage = () => {
    const root = document.getElementById('foundations-root')
    if (!root) return
    const colorRows = config.foundations.colors.map((item) => `<div class="source-token"><strong>${escapeHtml(item.label)}</strong><span class="swatch" style="background:var(${escapeHtml(item.token)})"></span><code>${escapeHtml(tokenValue(item.token))}</code></div>`).join('')
    const typeRows = config.foundations.typography.map((item) => `<div class="type-row"><span class="type-label">${escapeHtml(item.label)}</span><span class="${escapeHtml(item.className)}">${escapeHtml(item.sample)}</span><span class="type-size">${escapeHtml(tokenValue(item.token))}</span></div>`).join('')
    const spacingRows = config.foundations.spacing.map((item) => `<div class="space-track"><code>${escapeHtml(item.label)}</code><span class="space-bar" style="width:${escapeHtml(tokenValue(item.token))}"></span><span>${escapeHtml(tokenValue(item.token))}</span></div>`).join('')
    root.innerHTML = `
      <header class="review-head"><div><p class="eyebrow">Foundations</p><h1 data-od-id="foundations-title">颜色, 字体与几何</h1><p class="lede">基础角色直接读取共享配置, 不在组件 spec 页中保存参数副本</p></div><p>${escapeHtml(config.meta.evidence)}</p></header>
      <section class="review-section" data-od-id="foundation-colors"><div class="section-head"><h2>颜色角色</h2><p>Source sample 用于追溯, semantic role 用于组件实现</p></div><div class="stage">${colorRows}</div></section>
      <section class="review-section" data-od-id="foundation-typography"><div class="section-head"><h2>字体层级</h2><p>系统 UI 负责消息, monospace 只用于 code, command 和 path</p></div><div class="stage">${typeRows}</div></section>
      <section class="review-section" data-od-id="foundation-spacing"><div class="section-head"><h2>间距与几何</h2><p>Reading column, turn rhythm 和 message spacing 均来自共享 token</p></div><div class="stage">${spacingRows}</div><div class="stage is-surface foundation-geometry"><div class="column-diagram"><div class="turn-diagram"><div class="bubble-diagram">User bubble, ${escapeHtml(tokenValue('--message-user-max-width'))} maximum</div><div class="turn-block">Assistant message stays unboxed across the reading column</div></div></div></div></section>
      <section class="review-section" data-od-id="foundation-themes"><div class="section-head"><h2>Light 与 dark</h2><p>${escapeHtml(config.boundaries.dark)}</p></div><div class="grid-2"><div class="theme-board" data-theme="light"><div class="theme-label"><strong>Light</strong><span>${escapeHtml(config.meta.lightStatus)}</span></div><div class="message-pair"><div class="user-message">Measured user surface</div><p>Assistant 正文保持无框</p></div></div><div class="theme-board" data-theme="dark"><div class="theme-label"><strong>Dark</strong><span>${escapeHtml(config.meta.darkStatus)}</span></div><div class="message-pair"><div class="user-message">Derived user surface</div><p>Component neutrals need evidence</p></div></div></div></section>
      <footer class="review-foot">${escapeHtml(config.meta.nonClaim)}</footer>`
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
