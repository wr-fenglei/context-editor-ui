(() => {
  const config = {
    "meta": {
      "id": "user:context-editor-ui",
      "name": "context-editor-ui",
      "surface": "面向对话交互的独立设计系统",
      "lightLabel": "白色画布",
      "darkLabel": "深色画布",
      "principles": "正文连续阅读, 控件状态统一",
      "description": "消息, 输入, 上下文与行内审阅共用同一套设计变量和交互规则",
      "revision": "2026-09-17"
    },
    "tokens": {
      "shared": {
        "--model-menu-width": "200px",
        "--model-option-height": "28px",
        "--spec-columns": "max-content minmax(0, 1fr)",
        "--spec-column-gap": "var(--space-4)",
        "--profile-tag-icon-size": "14px",
        "--profile-tag-leading": "1.45",
        "--profile-tag-padding-block": "6px",
        "--profile-tag-padding-inline": "12px",
        "--avatar-group-size": "var(--space-10)",
        "--avatar-group-overlap": "var(--space-2)",
        "--font-display": "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"Segoe UI\", \"Noto Sans CJK SC\", \"PingFang SC\", \"Microsoft YaHei\", system-ui, sans-serif",
        "--font-body": "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"Segoe UI\", \"Noto Sans CJK SC\", \"PingFang SC\", \"Microsoft YaHei\", system-ui, sans-serif",
        "--font-mono": "ui-monospace, \"SFMono-Regular\", \"SF Mono\", \"Cascadia Code\", \"Noto Sans Mono CJK SC\", Menlo, Monaco, Consolas, monospace",
        "--text-xs": "11px",
        "--text-sm": "12px",
        "--text-base": "13px",
        "--text-lg": "14px",
        "--text-xl": "16px",
        "--leading-message": "1.7",
        "--leading-compact": "1.6",
        "--space-1": "4px",
        "--space-2": "8px",
        "--space-3": "12px",
        "--space-4": "16px",
        "--space-5": "20px",
        "--space-6": "24px",
        "--space-8": "32px",
        "--space-10": "40px",
        "--space-12": "48px",
        "--radius-inline": "4px",
        "--radius-control": "8px",
        "--radius-card": "12px",
        "--radius-popover": "20px",
        "--radius-message": "20px",
        "--radius-pill": "9999px",
        "--reading-column": "680px",
        "--gutter-desktop": "24px",
        "--gutter-tablet": "16px",
        "--gutter-phone": "12px",
        "--turn-gap": "48px",
        "--message-gap": "16px",
        "--composer-min-height": "120px",
        "--message-user-max-width": "72%",
        "--message-user-max-width-tablet": "82%",
        "--message-user-max-width-phone": "92%",
        "--message-user-padding-block": "12px",
        "--message-user-padding-inline": "16px",
        "--message-action-icon-size": "16px",
        "--disclosure-icon-size": "11px",
        "--tool-icon-size": "16px",
        "--tool-row-gap": "8px",
        "--tool-stack-gap": "12px",
        "--tool-output-padding": "16px",
        "--tool-output-font-size": "12px",
        "--subagent-mark-size": "20px",
        "--composer-padding-top": "12px",
        "--composer-border-width": "1px",
        "--composer-text-size": "var(--editor-font-size)",
        "--composer-line-height": "1.7",
        "--control-target": "28px",
        "--send-visual-size": "30px",
        "--focus-ring": "0 0 0 1px var(--focus-color)",
        "--popover-shadow": "0 3px 8px color-mix(in srgb, var(--shadow-color) 4%, transparent), 0 14px 36px color-mix(in srgb, var(--shadow-color) 9%, transparent)",
        "--composer-shadow": "var(--panel-shadow)",
        "--motion-fast": "140ms",
        "--motion-base": "180ms",
        "--motion-layout": "260ms",
        "--motion-exit": "120ms",
        "--motion-distance": "6px",
        "--ease-exit": "cubic-bezier(.4, 0, 1, 1)",
        "--ease-standard": "cubic-bezier(.22, 1, .36, 1)",
        "--control-touch": "44px",
        "--editor-font-size": "13px",
        "--action-icon-size": "14px",
        "--icon-stroke": "1.5",
        "--comment-offset-y": "-1px",
        "--check-size": "18px",
        "--check-radius": "4px",
        "--panel-padding": "16px",
        "--panel-radius": "20px",
        "--panel-shadow": "0 1px 3px color-mix(in srgb, var(--shadow-color) 6%, transparent), 0 9px 26px color-mix(in srgb, var(--shadow-color) 4%, transparent)",
        "--composer-border": "var(--input-border)",
        "--control-visual-size": "28px",
        "--toolbar-height": "44px",
        "--toolbar-icon-width": "36px",
        "--toolbar-add-width": "44px",
        "--toolbar-hover-size": "32px",
        "--toolbar-hover-radius": "var(--radius-pill)",
        "--toolbar-gap": "2px",
        "--toolbar-edge": "5px",
        "--context-chip-height": "30px",
        "--context-chip-gap": "6px",
        "--context-row-padding": "6px",
        "--profile-tag-radius": "var(--radius-pill)",
        "--profile-tag-gap": "8px",
        "--profile-tag-content-gap": "6px",
        "--code-radius": "var(--radius-message)",
        "--code-padding": "16px",
        "--code-font-size": "12px",
        "--code-leading": "1.8",
        "--button-primary-border": "transparent",
        "--context-accent": "var(--code-syntax-amber)",
        "--annotation-width": "360px",
        "--review-row-min-height": "40px",
        "--popover-z-index": "40",
        "--workbench-status-space": "240px",
        "--composer-max-width": "var(--reading-column)",
        "--review-panel-max-width": "560px",
        "--add-menu-max-width": "320px",
        "--context-group-title-size": "var(--text-lg)",
        "--action-remove-fg": "var(--permission-danger)",
        "--action-merge-fg": "var(--merge-accent)",
        "--action-confirm-fg": "var(--link)",
        "--button-height": "32px",
        "--button-radius": "10px",
        "--button-font-size": "var(--text-base)",
        "--button-line-height": "20px",
        "--button-padding-inline": "14px",
        "--button-padding-block": "6px",
        "--button-icon-gap": "6px",
        "--annotation-inset": "4px",
        "--annotation-content-radius": "calc(var(--panel-radius) - var(--annotation-inset))",
        "--annotation-content-bg": "var(--bg)",
        "--action-attention-fg": "var(--palette-skill)",
        "--action-hover-bg": "var(--surface-hover)",
        "--menu-item-radius": "var(--radius-control)"
      },
      "light": {
        "--profile-tag-bg": "var(--bg)",
        "--profile-tag-border": "var(--border)",
        "--profile-tag-fg": "var(--fg-secondary)",
        "--profile-icon-design": "var(--accent-icon-coral)",
        "--profile-icon-tech": "var(--accent-icon-blue)",
        "--profile-icon-reading": "var(--accent-icon-amber)",
        "--profile-icon-travel": "var(--accent-icon-teal)",
        "--profile-icon-sport": "var(--accent-icon-violet)",
        "--profile-icon-music": "var(--accent-icon-rose)",
        "--palette-light-canvas": "#ffffff",
        "--palette-light-foreground": "#22262c",
        "--palette-user-foreground": "#234566",
        "--palette-user-surface": "#e9f3ff",
        "--palette-selected-surface": "#eef0f2",
        "--palette-muted": "#626a75",
        "--palette-meta": "#626a75",
        "--palette-placeholder": "#626a75",
        "--palette-hairline": "#e3e6e9",
        "--palette-accent": "#2563eb",
        "--palette-skill": "#7542c8",
        "--palette-diff-added": "#00a240",
        "--palette-diff-removed": "#ba2623",
        "--palette-agent-blue": "#5687ca",
        "--palette-agent-green": "#6b934d",
        "--palette-agent-rose": "#c96589",
        "--palette-agent-amber": "#b67e28",
        "--bg": "var(--palette-light-canvas)",
        "--surface": "#f6f7f8",
        "--surface-selected": "var(--palette-selected-surface)",
        "--fg": "var(--palette-light-foreground)",
        "--fg-secondary": "#505864",
        "--muted": "#626a75",
        "--muted-soft": "var(--muted)",
        "--placeholder": "var(--muted)",
        "--border": "#e3e6e9",
        "--border-soft": "var(--palette-hairline)",
        "--accent": "var(--palette-accent)",
        "--link": "#245fb9",
        "--link-hover": "color-mix(in oklch, var(--link) 86%, black)",
        "--accent-on": "#ffffff",
        "--effort": "var(--palette-skill)",
        "--success": "var(--muted)",
        "--warning": "#9a5909",
        "--danger": "var(--palette-diff-removed)",
        "--fg-hover": "color-mix(in oklch, var(--fg) 88%, var(--bg))",
        "--surface-hover": "#f6f7f8",
        "--accent-hover": "color-mix(in oklch, var(--accent) 88%, black)",
        "--send-disabled": "var(--surface-selected)",
        "--conversation-canvas": "var(--bg)",
        "--message-user-bg": "var(--palette-user-surface)",
        "--message-user-fg": "var(--palette-user-foreground)",
        "--message-assistant-fg": "var(--fg)",
        "--message-action-fg": "var(--muted)",
        "--tool-call-fg": "var(--muted)",
        "--tool-output-bg": "var(--surface)",
        "--tool-output-fg": "var(--fg-secondary)",
        "--code-object-bg": "var(--surface)",
        "--composer-bg": "var(--bg)",
        "--composer-border": "var(--border)",
        "--popover-bg": "var(--bg)",
        "--popover-selected-bg": "var(--surface-hover)",
        "--focus-color": "#929aa4",
        "--border-strong": "#c7cdd4",
        "--input-border": "var(--border)",
        "--shadow-color": "#22262c",
        "--disabled-fg": "#929aa4",
        "--button-primary-bg": "var(--button-confirm-bg)",
        "--button-primary-hover-bg": "var(--action-hover-bg)",
        "--button-primary-fg": "var(--action-confirm-fg)",
        "--accent-icon-blue": "#2878e8",
        "--accent-icon-coral": "#d94f70",
        "--accent-icon-amber": "#aa750a",
        "--accent-icon-teal": "#168899",
        "--accent-icon-violet": "#8554cf",
        "--accent-icon-rose": "#cf409c",
        "--tool-icon-web": "var(--accent-icon-blue)",
        "--tool-icon-command": "var(--accent-icon-amber)",
        "--tool-icon-tool": "var(--accent-icon-violet)",
        "--code-syntax-amber": "#99670a",
        "--code-syntax-blue": "var(--link)",
        "--code-syntax-comment": "var(--muted)",
        "--permission-danger": "#c64043",
        "--button-neutral-bg": "#f2f3f4",
        "--button-neutral-hover-bg": "var(--action-hover-bg)",
        "--button-confirm-bg": "#eaf2ff",
        "--button-confirm-hover-bg": "var(--action-hover-bg)",
        "--button-merge-bg": "#edfff4",
        "--button-merge-hover-bg": "var(--action-hover-bg)",
        "--button-danger-bg": "#fdebed",
        "--button-danger-hover-bg": "var(--action-hover-bg)",
        "--button-model-bg": "var(--button-attention-bg)",
        "--button-model-hover-bg": "var(--action-hover-bg)",
        "--button-attention-bg": "#f3edfc",
        "--button-attention-hover-bg": "var(--action-hover-bg)",
        "--merge-accent": "#00823c"
      },
      "dark": {
        "--palette-agent-blue": "#83b3f0",
        "--palette-agent-green": "#aad37e",
        "--palette-agent-rose": "#ec91b4",
        "--palette-agent-amber": "#e6b767",
        "--profile-tag-bg": "var(--bg)",
        "--profile-tag-border": "var(--border)",
        "--profile-tag-fg": "var(--fg-secondary)",
        "--profile-icon-design": "var(--accent-icon-coral)",
        "--profile-icon-tech": "var(--accent-icon-blue)",
        "--profile-icon-reading": "var(--accent-icon-amber)",
        "--profile-icon-travel": "var(--accent-icon-teal)",
        "--profile-icon-sport": "var(--accent-icon-violet)",
        "--profile-icon-music": "var(--accent-icon-rose)",
        "--bg": "#181b20",
        "--surface": "#22262c",
        "--surface-selected": "#303640",
        "--fg": "#eef0f3",
        "--fg-secondary": "#c8ced7",
        "--muted": "#a1aab7",
        "--muted-soft": "var(--muted)",
        "--placeholder": "var(--muted)",
        "--border": "#363e49",
        "--border-soft": "var(--border)",
        "--palette-accent": "#8ab6ff",
        "--palette-skill": "#c4a4ff",
        "--palette-diff-added": "#40c977",
        "--palette-diff-removed": "#fa423e",
        "--accent": "var(--palette-accent)",
        "--link": "var(--accent)",
        "--link-hover": "color-mix(in oklch, var(--link) 84%, #ffffff)",
        "--accent-on": "#181b20",
        "--effort": "var(--palette-skill)",
        "--success": "var(--muted)",
        "--warning": "#e9b768",
        "--danger": "var(--palette-diff-removed)",
        "--fg-hover": "color-mix(in oklch, var(--fg) 88%, var(--bg))",
        "--surface-hover": "#292e36",
        "--accent-hover": "color-mix(in oklch, var(--accent) 82%, #ffffff)",
        "--send-disabled": "var(--surface-selected)",
        "--conversation-canvas": "var(--bg)",
        "--message-user-bg": "#22354e",
        "--message-user-fg": "#d4e6ff",
        "--message-assistant-fg": "var(--fg)",
        "--message-action-fg": "var(--muted)",
        "--tool-call-fg": "var(--muted)",
        "--tool-output-bg": "var(--surface)",
        "--tool-output-fg": "var(--fg-secondary)",
        "--code-object-bg": "var(--surface)",
        "--composer-bg": "var(--bg)",
        "--composer-border": "var(--border)",
        "--popover-bg": "var(--bg)",
        "--popover-selected-bg": "var(--surface-hover)",
        "--focus-color": "#8793a2",
        "--palette-meta": "var(--muted)",
        "--palette-placeholder": "var(--muted)",
        "--border-strong": "#536071",
        "--input-border": "var(--border)",
        "--shadow-color": "#000000",
        "--disabled-fg": "#798493",
        "--button-primary-bg": "var(--button-confirm-bg)",
        "--button-primary-hover-bg": "var(--action-hover-bg)",
        "--button-primary-fg": "var(--action-confirm-fg)",
        "--accent-icon-blue": "#8dbbff",
        "--accent-icon-coral": "#ff91a8",
        "--accent-icon-amber": "#ecc16c",
        "--accent-icon-teal": "#76d4df",
        "--accent-icon-violet": "#c9a7ff",
        "--accent-icon-rose": "#f59bda",
        "--tool-icon-web": "var(--accent-icon-blue)",
        "--tool-icon-command": "var(--accent-icon-amber)",
        "--tool-icon-tool": "var(--accent-icon-violet)",
        "--code-syntax-amber": "#eac16b",
        "--code-syntax-blue": "var(--link)",
        "--code-syntax-comment": "var(--muted)",
        "--permission-danger": "#ff9499",
        "--button-neutral-bg": "#2a3038",
        "--button-neutral-hover-bg": "var(--action-hover-bg)",
        "--button-confirm-bg": "#24364d",
        "--button-confirm-hover-bg": "var(--action-hover-bg)",
        "--button-merge-bg": "#203a2c",
        "--button-merge-hover-bg": "var(--action-hover-bg)",
        "--button-danger-bg": "#44272e",
        "--button-danger-hover-bg": "var(--action-hover-bg)",
        "--button-model-bg": "var(--button-attention-bg)",
        "--button-model-hover-bg": "var(--action-hover-bg)",
        "--button-attention-bg": "#352b47",
        "--button-attention-hover-bg": "var(--action-hover-bg)",
        "--merge-accent": "#4ade80"
      }
    },
    "foundations": {
      "motion": [
        {
          "label": "悬停与按下反馈",
          "token": "--motion-fast",
          "description": "只改变颜色或透明度, 不缩放控件和复选底板"
        },
        {
          "label": "面板进入",
          "token": "--motion-base",
          "description": "从对应按钮上方淡入, 位移为 6px"
        },
        {
          "label": "展开与条目排序",
          "token": "--motion-layout",
          "description": "高度和位置连续变化, 保持阅读顺序"
        },
        {
          "label": "面板退出",
          "token": "--motion-exit",
          "description": "退出时立即停止交互, 动画结束后移除"
        }
      ],
      "icons": [
        {
          "name": "copy",
          "label": "复制"
        },
        {
          "name": "thumbs-up",
          "label": "有帮助"
        },
        {
          "name": "thumbs-down",
          "label": "没有帮助"
        },
        {
          "name": "git-branch",
          "label": "创建分支"
        },
        {
          "name": "plus",
          "label": "添加"
        },
        {
          "name": "shield-check",
          "label": "批准方式"
        },
        {
          "name": "mic",
          "label": "语音输入"
        },
        {
          "name": "arrow-up",
          "label": "发送"
        },
        {
          "name": "square-pen",
          "label": "上下文编辑"
        },
        {
          "name": "file-text",
          "label": "文件"
        },
        {
          "name": "text-cursor-input",
          "label": "选中文本"
        },
        {
          "name": "target",
          "label": "指令"
        },
        {
          "name": "sticky-note",
          "label": "备注"
        },
        {
          "name": "trash-2",
          "label": "删除"
        },
        {
          "name": "arrow-up",
          "label": "上移"
        },
        {
          "name": "arrow-down",
          "label": "下移"
        },
        {
          "name": "check",
          "label": "确认"
        },
        {
          "name": "chevron-down",
          "label": "展开"
        },
        {
          "name": "chevron-right",
          "label": "进入"
        },
        {
          "name": "globe",
          "label": "网页"
        },
        {
          "name": "command-window",
          "label": "命令"
        },
        {
          "name": "blocks",
          "label": "工具"
        },
        {
          "name": "code-xml",
          "label": "代码"
        },
        {
          "name": "palette",
          "label": "设计"
        },
        {
          "name": "cpu",
          "label": "科技"
        },
        {
          "name": "book-open",
          "label": "阅读"
        },
        {
          "name": "plane",
          "label": "旅行"
        },
        {
          "name": "dumbbell",
          "label": "运动"
        },
        {
          "name": "music-2",
          "label": "音乐"
        },
        {
          "name": "share",
          "label": "分享"
        },
        {
          "name": "pen",
          "label": "行内编辑"
        },
        {
          "name": "message-square",
          "label": "评论"
        }
      ],
      "colors": [
        {
          "label": "画布",
          "token": "--bg"
        },
        {
          "label": "正文",
          "token": "--fg"
        },
        {
          "label": "辅助文字",
          "token": "--muted"
        },
        {
          "label": "浅灰表面",
          "token": "--surface"
        },
        {
          "label": "边线",
          "token": "--border"
        },
        {
          "label": "用户消息",
          "token": "--message-user-bg"
        },
        {
          "label": "链接",
          "token": "--link"
        },
        {
          "label": "模型提示",
          "token": "--effort"
        },
        {
          "label": "图标蓝",
          "token": "--accent-icon-blue"
        },
        {
          "label": "珊瑚红",
          "token": "--accent-icon-coral"
        },
        {
          "label": "琥珀",
          "token": "--accent-icon-amber"
        },
        {
          "label": "青色",
          "token": "--accent-icon-teal"
        },
        {
          "label": "紫色",
          "token": "--accent-icon-violet"
        },
        {
          "label": "玫红",
          "token": "--accent-icon-rose"
        },
        {
          "label": "完全访问权限",
          "token": "--permission-danger"
        },
        {
          "label": "上下文内容标识",
          "token": "--context-accent"
        },
        {
          "label": "并入绿色",
          "token": "--action-merge-fg"
        }
      ],
      "typography": [
        {
          "label": "消息正文",
          "sample": "清晰区分消息内容与操作, 保持连续的阅读体验",
          "token": "--text-base",
          "className": "message-sample"
        },
        {
          "label": "工具摘要",
          "sample": "已加载工具, 执行命令并搜索网页",
          "token": "--text-sm",
          "className": "tool-sample"
        },
        {
          "label": "时间信息",
          "sample": "今天 16:18",
          "token": "--text-xs",
          "className": "time-sample"
        },
        {
          "label": "代码与路径",
          "sample": "system/components/ContextEditor/ContextEditor.js",
          "token": "--text-sm",
          "className": "mono-sample"
        }
      ],
      "spacing": [
        {
          "label": "消息间距",
          "token": "--message-gap"
        },
        {
          "label": "区块间距",
          "token": "--space-6"
        },
        {
          "label": "阅读栏边距",
          "token": "--gutter-desktop"
        },
        {
          "label": "对话轮次间距",
          "token": "--turn-gap"
        }
      ],
      "controls": [
        {
          "label": "普通行操作: 图标 / 视觉背景 / 点击区",
          "tokens": [
            "--action-icon-size",
            "--control-visual-size",
            "--control-target"
          ]
        },
        {
          "label": "输入栏: 高度 / hover 圆 / 发送圆",
          "tokens": [
            "--toolbar-height",
            "--toolbar-hover-size",
            "--send-visual-size"
          ]
        },
        {
          "label": "输入栏: 按钮间隔 / 右侧留白",
          "tokens": [
            "--toolbar-gap",
            "--toolbar-edge"
          ]
        },
        {
          "label": "计数标签: 背景高度 / 图文间隔",
          "tokens": [
            "--context-chip-height",
            "--context-chip-gap"
          ]
        },
        {
          "label": "文件与资料标签: 圆角 / 标签间隔",
          "tokens": [
            "--profile-tag-radius",
            "--profile-tag-gap"
          ]
        },
        {
          "label": "触屏点击区, 不改变视觉背景",
          "tokens": [
            "--control-touch"
          ]
        },
        {
          "label": "文案按钮: 视觉高度 / 矩形圆角 / 胶囊圆角 / 水平内边距",
          "tokens": [
            "--button-height",
            "--button-radius",
            "--radius-pill",
            "--button-padding-inline"
          ]
        },
        {
          "label": "面板内菜单项圆角: 单行和多行共用, 与工具栏入口形状独立",
          "tokens": [
            "--menu-item-radius"
          ]
        }
      ]
    },
    "components": {
      "profileTags": {
        "overview": "图文标签, 自然换行, 统一间距",
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
            "白色画布上的白底胶囊标签, 灰边线, 图标使用共享撞色, 深色按语义变量适配"
          ],
          [
            "图标",
            "14px图标, 珊瑚红, 蓝, 琥珀, 青, 紫与玫红区分类别, 图文间隔6px, 标签间隔8px"
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
              "--profile-tag-radius"
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
              "--profile-tag-gap"
            ]
          }
        ],
        "demo": {
          "label": "示例个人资料",
          "items": [
            {
              "text": "设计",
              "iconName": "palette",
              "tone": "design"
            },
            {
              "text": "科技",
              "iconName": "cpu",
              "tone": "tech"
            },
            {
              "text": "阅读",
              "iconName": "book-open",
              "tone": "reading"
            },
            {
              "text": "旅行",
              "iconName": "plane",
              "tone": "travel"
            },
            {
              "text": "运动",
              "iconName": "dumbbell",
              "tone": "sport"
            },
            {
              "text": "音乐",
              "iconName": "music-2",
              "tone": "music"
            }
          ]
        }
      },
      "avatarGroup": {
        "overview": "圆形裁切, 重叠排列, 主题底色",
        "eyebrow": "组件 07",
        "title": "头像组",
        "lede": "40 像素圆形头像以 8 像素重叠排列, 使用画布色描边区分相邻成员",
        "source": "system/components/AvatarGroup/AvatarGroup.js",
        "rulesIntro": "圆形头像按顺序重叠, 不透明底色与画布色描边区分相邻成员",
        "rules": [
          [
            "头像",
            "使用 120 像素人物头像, 以 40 像素圆形显示, 透明区域由主题底色填充"
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
      "messages": {
        "overview": "消息分层, 连续阅读, 原处操作反馈",
        "eyebrow": "组件 01",
        "title": "消息组件",
        "lede": "通过对齐, 留白和背景区分用户消息与助手回复, 支持过程展开和原处复制反馈",
        "source": "system/components/MessageBubble/MessageBubble.js",
        "demo": {
          "user": "帮我整理本周的项目进展",
          "duration": "1 分 38 秒",
          "process": "我会先查看项目笔记, 再按任务整理进展",
          "assistant": [
            "本周已完成需求梳理和交互检查",
            "接下来需要确认文案, 并安排体验验证"
          ],
          "codeLabel": "项目摘要",
          "code": "需求梳理 → 已完成\n交互检查 → 已检查\n文案确认 → 待处理"
        },
        "rulesIntro": "通过对齐, 背景和留白区分消息身份, 助手正文保持无框",
        "rules": [
          [
            "用户消息",
            "用户气泡右对齐, 浅蓝背景与深蓝正文, 悬停或键盘聚焦时显示时间和复制操作"
          ],
          [
            "助手消息",
            "正文保持无框, 仅对链接和行内代码进行局部强调"
          ],
          [
            "处理过程",
            "处理过程可展开或收起, 内容按发生顺序排列"
          ],
          [
            "消息操作",
            "复制, 赞, 踩和分支使用弱化的线框图标"
          ],
          [
            "复制反馈",
            "复制成功时图标交叉淡入切换为勾号, 原按钮旁显示已复制, 2 秒后恢复, 失败也在原处提示"
          ]
        ],
        "parameters": [
          {
            "label": "消息圆角",
            "tokens": [
              "--radius-message"
            ]
          },
          {
            "label": "用户消息宽度上限",
            "tokens": [
              "--message-user-max-width"
            ]
          },
          {
            "label": "用户消息内边距",
            "tokens": [
              "--message-user-padding-block",
              "--message-user-padding-inline"
            ],
            "separator": " × "
          },
          {
            "label": "对话轮次间距",
            "tokens": [
              "--turn-gap"
            ]
          },
          {
            "label": "消息间距",
            "tokens": [
              "--message-gap"
            ]
          },
          {
            "label": "操作图标尺寸",
            "tokens": [
              "--message-action-icon-size"
            ]
          }
        ]
      },
      "tools": {
        "overview": "单行摘要, 按需展开, 状态可见",
        "eyebrow": "组件 02",
        "title": "工具调用组件",
        "lede": "收起时以单行摘要显示在正文中, 展开的命令输出使用浅灰背景",
        "source": "system/components/ToolCall/ToolCall.js",
        "demo": {
          "rows": [
            "已搜索网页",
            "已加载工具, 执行命令并搜索网页",
            "已执行命令 rg -n \"message|composer\""
          ],
          "output": "$ rg -n \"done|pending\" notes\n找到 3 组任务\n上下文草稿已就绪"
        },
        "rulesIntro": "工具状态必须包含文字说明, 不能只依赖图标或颜色",
        "rules": [
          [
            "收起状态",
            "线框图标, 弱化文字与可选展开箭头直接排列, 不增加卡片外框"
          ],
          [
            "合并摘要",
            "多个动作可以合并成一句过去时摘要, 保持单行或自然换行"
          ],
          [
            "展开输出",
            "点击摘要展开或收起, 高度连续变化, 输出使用等宽字体和浅灰背景"
          ],
          [
            "错误状态",
            "仅在发生错误时使用错误提示色"
          ],
          [
            "命令图标",
            "使用 20:14 的横向窗口轮廓, 与 16px 图标画布和 1.5 描边保持一致"
          ]
        ],
        "parameters": [
          {
            "label": "工具图标",
            "tokens": [
              "--tool-icon-size"
            ]
          },
          {
            "label": "行内间距",
            "tokens": [
              "--tool-row-gap"
            ]
          },
          {
            "label": "条目间距",
            "tokens": [
              "--tool-stack-gap"
            ]
          },
          {
            "label": "输出区域圆角",
            "tokens": [
              "--radius-message"
            ]
          },
          {
            "label": "输出区域内边距",
            "tokens": [
              "--tool-output-padding"
            ]
          },
          {
            "label": "等宽字号",
            "tokens": [
              "--tool-output-font-size"
            ]
          }
        ]
      },
      "subagents": {
        "overview": "彩色标记, 子代理名称, 进度状态",
        "eyebrow": "组件 03",
        "title": "子代理调用组件",
        "lede": "彩色图形区分子代理身份, 名称与状态按时间顺序显示",
        "source": "system/components/SubagentCall/SubagentCall.js",
        "demo": {
          "agents": [
            {
              "name": "资料助手"
            },
            {
              "name": "整理助手"
            },
            {
              "name": "检查助手"
            }
          ],
          "tool": "已阅读项目笔记"
        },
        "rulesIntro": "子代理的进度作为事件显示在对话中",
        "rules": [
          [
            "行内布局",
            "20px 彩色图形, 图文间距8px, 名称和完成状态使用中性灰"
          ],
          [
            "身份区分",
            "同一身份在开始和完成时沿用同一图形, 形状与名称共同区分身份"
          ],
          [
            "任务状态",
            "名称后显示开始处理, 处理中或已完成, 状态不只依赖颜色表达"
          ],
          [
            "换行",
            "长名称自然换行, 后续文字与首行文字对齐, 状态词保持完整"
          ],
          [
            "图形分配",
            "新 agent 从四种透明图形中随机分配, 一轮内不重复, 同名 agent 在开始与完成状态保持相同图形, 可通过 tone 显式指定"
          ],
          [
            "默认资源",
            "五款身份图形按随机队列分配, 同一身份在当前页面保持一致, 不再使用薄荷环形结"
          ]
        ],
        "parameters": [
          {
            "label": "子代理标记",
            "tokens": [
              "--subagent-mark-size"
            ]
          },
          {
            "label": "图文间距",
            "tokens": [
              "--tool-row-gap"
            ]
          },
          {
            "label": "事件间距",
            "tokens": [
              "--tool-stack-gap"
            ]
          }
        ]
      },
      "composer": {
        "overview": "共享输入框, 支持草稿受控, 备注插槽与发送前检查",
        "eyebrow": "组件 04",
        "title": "输入框组件",
        "lede": "将多行输入, 上下文入口和底部工具组合在同一输入区域, 面板紧邻对应按钮",
        "source": "system/components/Composer/Composer.js",
        "interface": {
          "placeholder": "输入你想做的事",
          "sendHint": "Enter 发送 · Shift + Enter 换行",
          "effort": "深度"
        },
        "menus": {
          "add": "添加",
          "files": "文件和文件夹",
          "goal": "目标",
          "goalDescription": "设定目标并持续推进",
          "plan": "计划模式",
          "planDescription": "开启计划模式",
          "plugins": "插件",
          "contextEditor": "上下文编辑",
          "learnMore": "了解详情"
        },
        "approvalMenu": {
          "title": "如何批准助手的操作?",
          "initialValue": "auto",
          "help": "每次询问会在操作前请求确认, 自动批准仅在检测到潜在风险时询问, 完全访问允许直接执行操作",
          "items": [
            {
              "value": "ask",
              "label": "每次询问",
              "description": "编辑外部文件和访问网络前始终询问"
            },
            {
              "value": "auto",
              "label": "自动批准",
              "description": "仅在检测到操作可能存在风险时询问"
            },
            {
              "value": "full",
              "label": "完全访问",
              "description": "允许访问网络和电脑上的所有文件",
              "danger": true
            }
          ]
        },
        "modelMenu": {
          "title": "选择模型",
          "initialValue": "gpt-6-astra",
          "items": [
            {
              "value": "default",
              "label": "默认",
              "description": "推荐的模型组合"
            },
            {
              "value": "gpt-6-astra",
              "label": "GPT-6 Astra"
            },
            {
              "value": "gpt-5.6-sol",
              "label": "GPT-5.6 Sol"
            },
            {
              "value": "gpt-5.6-terra",
              "label": "GPT-5.6 Terra"
            },
            {
              "value": "gpt-5.6-luna",
              "label": "GPT-5.6 Luna"
            },
            {
              "value": "gpt-5.5",
              "label": "GPT-5.5"
            },
            {
              "value": "gpt-5.3-codex-spark",
              "label": "GPT-5.3 Codex Spark"
            }
          ]
        },
        "rulesIntro": "输入框通过阴影保持层级, 外层固定区域保持透明",
        "rules": [
          [
            "文本输入",
            "输入区无内框, 占位文字使用弱化颜色, 输入内容使用正文颜色"
          ],
          [
            "上下文入口",
            "已确认与待处理计数保持单行, 底色固定 30px 高, 与备注标签均使用两侧平直的 10px 圆角矩形, 草稿修改另行提示, 点击切换上下文编辑区"
          ],
          [
            "底部工具栏",
            "左侧为添加和批准方式, 右侧为模型, 思考深度, 语音输入和发送"
          ],
          [
            "悬停",
            "工具栏 44px 高, 图标 hover 为 32px 圆形, 审批与模型默认透明, hover 或按下显示 32px 高灰色胶囊, 发送圆 30px"
          ],
          [
            "聚焦",
            "文本输入聚焦时保留浅色边线, 不加深边框或叠加光效"
          ],
          [
            "工具面板",
            "面板以 180ms 淡入, 120ms 退出, 在底部工具按钮上方展开, 与按钮间隔 8px, 点击外部或按退出键可关闭, 关闭后焦点返回按钮, 面板内模型, 审批与添加菜单项共用 --menu-item-radius, 不继承浮窗外壳的大圆角或工具栏入口的胶囊圆角"
          ],
          [
            "批准方式",
            "点击选项后同步按钮文字与勾号, 关闭面板并返回焦点, 再次打开保留当前选择, 支持方向键和确认键操作"
          ],
          [
            "模型选择",
            "模型以单列展示, 所有选项包括带说明的默认项均使用 8px 圆角矩形, 选中只有对勾, hover 统一灰底, 选择后关闭并同步按钮文字"
          ],
          [
            "扩展接口",
            "支持受控草稿与模型/权限, accessory 插槽承载备注, onBeforeSend 返回 false 时保留输入"
          ],
          [
            "完全访问",
            "权限图标和标题使用红色, 菜单及输入栏入口保持一致"
          ],
          [
            "组件容器",
            "根据输入栏实际宽度收起模型深度和权限文字, 不依据整页宽度猜测可用空间"
          ],
          [
            "宽度与对齐",
            "输入框最大 680px, 在可用对话区域内居中, 添加菜单最大 320px, 由触发按钮向右展开且不超过输入框可用宽度"
          ],
          [
            "独立示例",
            "与集成页复用 Composer 和 useContextEditor, 计数来自真实确认快照, 展开上下文编辑与发送反馈使用实际状态, 不保留独立视觉覆盖"
          ],
          [
            "入口层级",
            "审批用灰字, 完全访问用红字, 模型用紫字, 仅菜单展开或鼠标点击后的焦点不保留底色, 键盘焦点保留可见轮廓"
          ]
        ],
        "parameters": [
          {
            "label": "高度下限",
            "tokens": [
              "--composer-min-height"
            ]
          },
          {
            "label": "输入框圆角",
            "tokens": [
              "--radius-message"
            ]
          },
          {
            "label": "输入框描边",
            "tokens": [
              "--composer-border-width"
            ]
          },
          {
            "label": "顶部内边距",
            "tokens": [
              "--composer-padding-top"
            ]
          },
          {
            "label": "控件点击区域",
            "tokens": [
              "--control-target"
            ]
          },
          {
            "label": "发送按钮尺寸",
            "tokens": [
              "--send-visual-size"
            ]
          },
          {
            "label": "工具栏 / hover / 发送圆",
            "tokens": [
              "--toolbar-height",
              "--toolbar-hover-size",
              "--send-visual-size"
            ],
            "separator": " / "
          },
          {
            "label": "工具栏 hover 圆角",
            "tokens": [
              "--toolbar-hover-radius"
            ]
          },
          {
            "label": "计数标签高度",
            "tokens": [
              "--context-chip-height"
            ]
          },
          {
            "label": "输入框 / 添加菜单宽度上限",
            "tokens": [
              "--composer-max-width",
              "--add-menu-max-width"
            ],
            "separator": " / "
          },
          {
            "label": "菜单项圆角: 模型 / 审批 / 添加",
            "tokens": [
              "--menu-item-radius"
            ]
          }
        ]
      },
      "contextEditor": {
        "overview": "工作草稿, 待处理内容, 逐项确认",
        "eyebrow": "组件 05",
        "title": "上下文编辑组件",
        "lede": "区分编辑草稿, 已确认快照与待处理内容, 支持勾选, 排序, 移除, 并入和确认",
        "source": "system/components/ContextEditor/ContextEditor.js",
        "demo": {
          "draft": [
            {
              "id": "d1",
              "kind": "file",
              "title": "packages/context-editor/src/messages.tsx",
              "meta": "上次编辑 · 2 小时前",
              "included": true
            },
            {
              "id": "d2",
              "kind": "selection",
              "title": "DESIGN.md 第 6 节 上下文边界",
              "meta": "已选 12 行 · 来自工作区",
              "included": true
            },
            {
              "id": "d3",
              "kind": "instruction",
              "title": "助手正文保持无框",
              "meta": "当前会话指令",
              "included": true
            },
            {
              "id": "d4",
              "kind": "file",
              "title": "system/components/Composer/Composer.js",
              "meta": "上次编辑 · 昨天",
              "included": false
            }
          ],
          "pending": [
            {
              "id": "p1",
              "kind": "file",
              "title": "system/components/Composer/spec.html",
              "meta": "刚添加 · 未处理"
            },
            {
              "id": "p2",
              "kind": "note",
              "title": "将上下文编辑入口放在输入框顶部",
              "meta": "草稿输入 · 未处理"
            },
            {
              "id": "p3",
              "kind": "file",
              "title": "system/interactions.js",
              "meta": "工具调用产生 · 未处理"
            }
          ]
        },
        "rulesIntro": "待处理内容需明确并入后才进入工作草稿, 可从消息操作, 工具行或输入框进入编辑区",
        "rules": [
          [
            "工作草稿",
            "编辑中的修改保留为草稿, 确认后替换供下一条消息使用的快照"
          ],
          [
            "待处理内容",
            "未处理的内容, 只有明确并入后才进入工作草稿"
          ],
          [
            "分隔线",
            "分组细线区分编辑草稿与待处理内容, 每条内容不重复增加边框"
          ],
          [
            "入口",
            "从消息操作, 工具行或输入框进入, 审阅示例可并排展示关联文档"
          ],
          [
            "确认",
            "确认后工作草稿成为下一条消息的上下文"
          ],
          [
            "状态过渡",
            "纳入和排除平滑切换, 排序时条目移动到新位置, 移除时收起, 确认结果在原处淡入"
          ],
          [
            "复选",
            "浅色圆角底板内显示对勾, 未选中内部留白, hover 不扩大底板"
          ],
          [
            "窄屏密度",
            "不在740px提前拆行, 容器小于360px才将行操作放到下一行, 行间仅保留2px间隔"
          ],
          [
            "内容强调",
            "黄色用于组件结构, 标题图标与分组名称共用琥珀色; 并入与全部并入使用独立绿色, 确认用蓝色, 正文, 复选和状态保持中性色"
          ],
          [
            "分组标题",
            "工作草稿和待处理使用 14px / 500, 琥珀色强调, 辅助说明保持 12px"
          ],
          [
            "操作语义",
            "独立文案动作复用 Button, 并入为绿字, 默认透明, hover 统一灰底, 确认为蓝字浅蓝底, 删除图标保持红色, 不显示描边"
          ],
          [
            "信息密度",
            "分组只保留工作草稿与待处理标题, 底栏仅保留右对齐确认按钮, 未确认状态由输入框计数入口提示"
          ],
          [
            "操作层级",
            "收起与并入为 ghost 可选操作, 并入使用绿字; 添加到待处理提交当前输入, 确认工作草稿结束当前编辑, 均保留 soft 浅底"
          ]
        ],
        "parameters": [
          {
            "label": "编辑区圆角",
            "tokens": [
              "--radius-message"
            ]
          },
          {
            "label": "控件点击区域",
            "tokens": [
              "--control-target"
            ]
          },
          {
            "label": "控件圆角",
            "tokens": [
              "--radius-control"
            ]
          },
          {
            "label": "分组内边距",
            "tokens": [
              "--space-5"
            ]
          },
          {
            "label": "条目间距",
            "tokens": [
              "--space-3"
            ]
          },
          {
            "label": "状态过渡时长",
            "tokens": [
              "--motion-base"
            ]
          },
          {
            "label": "分组标题字号",
            "tokens": [
              "--context-group-title-size"
            ]
          },
          {
            "label": "删除 / 并入 / 确认颜色",
            "tokens": [
              "--action-remove-fg",
              "--action-merge-fg",
              "--action-confirm-fg"
            ],
            "separator": " / "
          }
        ]
      },
      "panel": {
        "name": "面板",
        "eyebrow": "共享组件",
        "title": "面板",
        "lede": "标题, 内容和底部操作共用一个容器",
        "overview": "评审文档与备注浮窗通过 Panel 插槽组合, 背景, 边线, 圆角和间距由共享变量定义",
        "rulesIntro": "Panel 只负责容器与分区, 内容行为由使用它的组件提供",
        "rules": [
          [
            "结构",
            "通过 header, children 和 footer 插槽组织内容, 不提供插槽时不渲染空分区"
          ],
          [
            "视觉",
            "白底细边线, 面板圆角20px, 分区内边距16px, 深色主题读取相同语义角色"
          ],
          [
            "按钮",
            "结束当前流程的取消, 确认和删除用 Button soft 常显语义浅底, 可选查看与切换用 ghost, 独立操作组为 rounded, 图标按钮保持 14px 图形与 28px 视觉底板"
          ],
          [
            "复用",
            "组件通过 className 与 bodyClassName 组织内容布局, 不在页面覆盖面板颜色, 圆角或焦点样式"
          ]
        ],
        "parameters": [
          {
            "label": "面板圆角",
            "tokens": [
              "--panel-radius"
            ]
          },
          {
            "label": "分区内边距",
            "tokens": [
              "--panel-padding"
            ]
          },
          {
            "label": "标题字号",
            "tokens": [
              "--text-lg"
            ]
          },
          {
            "label": "按钮圆角",
            "tokens": [
              "--button-radius"
            ]
          },
          {
            "label": "操作图标",
            "tokens": [
              "--action-icon-size"
            ]
          }
        ],
        "demo": {
          "title": "评审面板",
          "subtitle": "标题, 内容与操作保持固定的分区间距",
          "body": "工作草稿尚未确认, 保存后作为下一条消息的上下文",
          "initialStatus": "等待确认"
        },
        "source": "system/components/Panel/Panel.js"
      },
      "sessionSwitcher": {
        "name": "会话切换",
        "eyebrow": "共享组件",
        "title": "会话切换",
        "lede": "项目名称与当前会话保持在同一导航行",
        "overview": "菜单共用 Panel 容器, 已选会话只显示对勾, hover 使用灰底, 通过受控值更新页面内容",
        "rulesIntro": "会话导航只负责选择与新建事件, 会话数据由页面持有",
        "rules": [
          [
            "状态",
            "会话入口用 ghost 圆角矩形, 默认灰字透明背景, hover 或按下显示灰底, 菜单当前项只有右侧对勾, 展开和焦点不保留底色, 面板内选项共用 8px 菜单圆角矩形"
          ],
          [
            "键盘",
            "方向键, Home和End在菜单项间移动, Enter或空格选择, Escape关闭并返回入口"
          ],
          [
            "关闭",
            "选择和新建后返回入口焦点, 点击外部关闭并保留外部点击目标, Tab自然离开菜单"
          ],
          [
            "长文本",
            "入口长标题省略显示并提供完整title, 菜单标题允许换行, 菜单宽度受视口约束"
          ]
        ],
        "parameters": [
          {
            "label": "文字字号",
            "tokens": [
              "--text-sm"
            ]
          },
          {
            "label": "菜单圆角",
            "tokens": [
              "--panel-radius"
            ]
          },
          {
            "label": "菜单内边距",
            "tokens": [
              "--space-2"
            ]
          },
          {
            "label": "选项圆角",
            "tokens": [
              "--menu-item-radius"
            ]
          },
          {
            "label": "点击区域",
            "tokens": [
              "--control-target"
            ]
          }
        ],
        "demo": {
          "project": "对话设计",
          "initialValue": "visibility",
          "items": [
            {
              "id": "visibility",
              "title": "消息可见性检查"
            },
            {
              "id": "context",
              "title": "上下文交互规范"
            },
            {
              "id": "components",
              "title": "组件与状态整理"
            },
            {
              "id": "theme",
              "title": "浅色主题评审"
            }
          ]
        },
        "source": "system/components/SessionSwitcher/SessionSwitcher.js"
      },
      "reviewPanel": {
        "overview": "评审清单, 行内修改, 核对与撤销",
        "eyebrow": "组件 09",
        "title": "评审面板",
        "lede": "使用共享 Panel, 图标, 按钮和代码块组合评审清单, 项目数据通过 onChange 交给调用方保存",
        "source": "system/components/ReviewPanel/ReviewPanel.js",
        "demo": {
          "title": "消息页调整清单",
          "intro": "核对项目, 编辑内容或添加备注",
          "items": [
            {
              "id": "visibility",
              "text": "连续发送消息时, 消息与输入框不重叠",
              "checked": false
            },
            {
              "id": "copy",
              "text": "复制提示完整显示在当前消息内部",
              "checked": false
            },
            {
              "id": "narrow",
              "text": "窄屏下的反馈按钮可点击, 提示不越界",
              "checked": false
            }
          ]
        },
        "rulesIntro": "内容修改与核对分开保存, 组合页面不覆盖共享控件样式",
        "rules": [
          [
            "状态边界",
            "items 由调用方控制, 编辑文本, 草稿, 撤销和反馈由组件维护, 使用稳定实例保留跨会话未保存编辑"
          ],
          [
            "行内编辑",
            "保存后清除此项核对状态, 取消保留原文, Cmd/Ctrl + Enter 保存, IME 确认键不触发保存"
          ],
          [
            "核对与撤销",
            "逐项更新 checked, 修改支持撤销, 恢复之前的文本与核对状态"
          ],
          [
            "输出与复制",
            "Markdown 源文本由 reviewMarkdown 生成, 通过共享 CodeObject 展示, 复制保留完整原文"
          ],
          [
            "组合接口",
            "onDiscuss 传递项目及索引, onInsert 传递 Markdown, onEditingChange 通知当前或暂存草稿是否与已保存文本不同, 仅打开编辑器不标记未保存, onClose 由页面控制面板可见性"
          ],
          [
            "面板宽度",
            "最大 560px, 窄容器内使用可用宽度, 不按屏幕一半持续拉伸"
          ],
          [
            "操作层级",
            "将审阅结果放入输入框与撤销修改为可选操作, 使用 ghost, 默认只显示语义文字, hover 才显示统一灰底"
          ]
        ],
        "parameters": [
          {
            "label": "面板圆角 / 内边距",
            "tokens": [
              "--panel-radius",
              "--panel-padding"
            ],
            "separator": " / "
          },
          {
            "label": "行最小高度 / 操作图标",
            "tokens": [
              "--review-row-min-height",
              "--action-icon-size"
            ],
            "separator": " / "
          },
          {
            "label": "复选底板 / 圆角",
            "tokens": [
              "--check-size",
              "--check-radius"
            ],
            "separator": " / "
          },
          {
            "label": "面板宽度上限",
            "tokens": [
              "--review-panel-max-width"
            ]
          }
        ]
      },
      "annotation": {
        "overview": "备注标签, 引用详情与受控草稿",
        "eyebrow": "组件 10",
        "title": "备注浮窗",
        "lede": "通过输入框附件标签查看和编辑备注, 浮窗跟随锚点避让视口边界, 草稿由调用方按会话保存",
        "source": "system/components/AnnotationPopover/AnnotationPopover.js",
        "demo": {
          "itemId": "copy",
          "index": 1,
          "text": "复制提示完整显示在当前消息内部",
          "comment": "请在当前回复旁显示复制反馈",
          "open": false,
          "editing": false
        },
        "rulesIntro": "annotation 为受控数据, 关闭浮窗与删除备注是不同操作",
        "rules": [
          [
            "状态归属",
            "itemId, index, text, comment, draft, editing, open 均由调用方保存, pinned 与 status 记录浮窗和反馈状态"
          ],
          [
            "显示与定位",
            "备注标签使用 10px 圆角矩形, hover, 键盘聚焦或点击标签打开详情, 点击可固定, 点击外部与 Escape 收起, 浮窗挂载至 body 以避开父容器裁切"
          ],
          [
            "草稿保留",
            "关闭详情或 active=false 保留未保存草稿与 editing, 只有取消明确丢弃草稿, 保存才替换 comment"
          ],
          [
            "操作样式",
            "输入聚焦保持浅色边框, 保存使用 confirm 浅蓝底, 取消使用 neutral 浅灰底, 文案按钮均无描边"
          ],
          [
            "发送联动",
            "调用方在发送前检测 editing 且 draft 不同于 comment, 打开备注编辑器并保留输入草稿"
          ],
          [
            "内容分区",
            "外壳内保留 4px 留白, 引用与备注在查看, 编辑和 hover 时均与面板同色, 浅色主题保持白底, 仅具体按钮显示 hover 灰底, 无内部分割线, 通过标签和 12px 间距区分内容"
          ]
        ],
        "parameters": [
          {
            "label": "浮窗宽度 / 圆角",
            "tokens": [
              "--annotation-width",
              "--panel-radius"
            ],
            "separator": " / "
          },
          {
            "label": "标签视觉高度 / 圆角 / 点击区",
            "tokens": [
              "--context-chip-height",
              "--button-radius",
              "--control-target"
            ],
            "separator": " / "
          },
          {
            "label": "输入字号 / 操作图标",
            "tokens": [
              "--editor-font-size",
              "--action-icon-size"
            ],
            "separator": " / "
          },
          {
            "label": "外壳留白 / 内层圆角",
            "tokens": [
              "--annotation-inset",
              "--annotation-content-radius"
            ],
            "separator": " / "
          },
          {
            "label": "查看 / 编辑 / hover 内容底色",
            "tokens": [
              "--annotation-content-bg"
            ],
            "separator": " / "
          }
        ]
      },
      "button": {
        "name": "文案按钮",
        "eyebrow": "共享组件",
        "title": "文案按钮",
        "lede": "按操作在当前流程中的角色选择背景, 按周围控件选择圆角, 文字颜色表达语义",
        "overview": "必需决策常显浅底, 可选操作默认透明, 支持圆角矩形与胶囊两种形状",
        "source": "system/components/Button/Button.js",
        "rulesIntro": "背景层级, 圆角和语义颜色分别选择, 所有独立文案动作复用 Button",
        "rules": [
          [
            "操作层级",
            "结束当前编辑或确认流程的必需决策用 soft 常显浅底, 如弹窗取消与删除, 备注保存与取消, 工作草稿确认"
          ],
          [
            "可选操作",
            "设置, 切换, 查看, 收起与可选并入用 ghost, 默认背景透明, hover 或按下才显示统一灰底, 仅展开菜单不保留底色"
          ],
          [
            "圆角选择",
            "rounded 为 10px 圆角矩形, 用于常规面板与独立操作组; pill 为两端半圆的胶囊, 用于周围圆形控件集中的区域, 如输入栏审批与模型入口, 面板内菜单项独立使用 --menu-item-radius 的 8px 圆角矩形"
          ],
          [
            "语义字色",
            "neutral: 必需决策用正文色, 可选操作用灰色; danger: 删除和风险红色; attention: 需要注意的设置紫色; confirm: 确认蓝色; merge: 并入绿色"
          ],
          [
            "尺寸",
            "视觉高度 32px, 字号 13px, 行高 20px, 左右内边距 14px, 图文间隔 6px, 背景和圆角选择不改变点击区"
          ],
          [
            "交互",
            "所有按钮 hover 与按下共用中性灰背景 --action-hover-bg, 与删除图标一致, 不按 tone 改变背景色, 文字和图标保留语义色, 无描边和阴影, 不改变尺寸, 键盘 focus-visible 保留细灰轮廓"
          ],
          [
            "触屏",
            "粗指针点击区域 44px, 单行视觉背景保持 32px, 长文案换行时背景随内容扩展"
          ],
          [
            "禁用",
            "文字使用禁用色, soft 保留浅灰底, ghost 保持透明, 禁止触发和 hover 变色"
          ],
          [
            "接口",
            "Button 透传原生 button 属性与 ref, type 默认 button; variant 为 soft / ghost, 默认 soft; shape 为 rounded / pill, 默认 rounded; tone 为 neutral / confirm / merge / danger / attention"
          ],
          [
            "范围",
            "上下文计数与备注标签是状态摘要, 使用两侧平直的 10px 圆角矩形, 保留 30px 常显浅底; 菜单项选中只显示对勾, 正文链接与过程展开项保持内容布局"
          ]
        ],
        "parameters": [
          {
            "label": "视觉高度 / 矩形圆角 / 胶囊圆角",
            "tokens": [
              "--button-height",
              "--button-radius",
              "--radius-pill"
            ],
            "separator": " / "
          },
          {
            "label": "字号 / 行高",
            "tokens": [
              "--button-font-size",
              "--button-line-height"
            ],
            "separator": " / "
          },
          {
            "label": "水平内边距 / 图文间隔",
            "tokens": [
              "--button-padding-inline",
              "--button-icon-gap"
            ],
            "separator": " / "
          },
          {
            "label": "soft 默认底色: 普通 / 确认 / 并入 / 删除 / 注意",
            "tokens": [
              "--button-neutral-bg",
              "--button-confirm-bg",
              "--button-merge-bg",
              "--button-danger-bg",
              "--button-attention-bg"
            ],
            "separator": " / "
          },
          {
            "label": "所有按钮 hover / 按下背景",
            "tokens": [
              "--action-hover-bg"
            ]
          }
        ]
      }
    },
    "integratedDemo": {
      "time": "今天 16:18",
      "user": "帮我整理本周的项目进展, 并把待确认事项加入上下文",
      "duration": "1 分 38 秒",
      "process": "我会先查看项目笔记, 再整理进展和待确认事项",
      "agents": [
        {
          "name": "资料助手"
        },
        {
          "name": "整理助手"
        }
      ],
      "toolWeb": "已阅读项目笔记",
      "toolCommand": "已执行命令",
      "output": "$ rg -n \"done|pending\" notes\n找到 3 组任务\n上下文草稿已就绪",
      "assistant": [
        "本周的需求梳理和界面交互检查已完成, 当前进展整理如下",
        "待确认事项已放入上下文编辑区, 可以逐项纳入, 排除或移除"
      ],
      "codeLabel": "项目摘要",
      "code": "需求梳理 → 已完成\n交互检查 → 已检查\n文案确认 → 待处理\n体验验证 → 已安排"
    },
    "voice": {
      "assistant": "先给判断, 再给动作和可验证结果",
      "tool": "使用过去时或进行时的短动作加对象",
      "subagent": "名称与颜色保持一致, 状态紧随名称显示",
      "contextEditor": "区分待处理内容, 编辑草稿与已确认的发送快照"
    },
    "boundaries": {
      "integration": "上下文编辑入口位于消息操作, 工具行或输入框中",
      "dark": "浅色与深色主题保持相同的层级和交互, 通过画布, 表面和文字颜色区分内容"
    },
    "responsive": [
      {
        "query": "(pointer: coarse)",
        "tokens": {
          "--control-target": "var(--control-touch)",
          "--toolbar-icon-width": "var(--control-touch)",
          "--editor-font-size": "16px"
        }
      }
    ],
    "standards": {
      "levels": [
        [
          "基础值",
          "颜色, 字级, 间距, 圆角和图标尺寸"
        ],
        [
          "语义角色",
          "正文, 辅助文字, 表面, 边线和操作主次"
        ],
        [
          "控件",
          "按钮, 复选, 菜单和输入的统一状态"
        ],
        [
          "组合组件",
          "消息, 上下文, 行内审核和备注浮窗"
        ],
        [
          "页面模板",
          "连续对话与并排审阅共用组件定义"
        ]
      ],
      "states": [
        [
          "菜单",
          "所有面板内菜单项共用 --menu-item-radius 的 8px 圆角矩形, 包括模型, 审批, 添加和会话选项及多行说明项, 不继承浮窗大圆角或入口胶囊形状, 选中仅显示右侧对勾, 默认透明, hover 才显示统一灰底"
        ],
        [
          "复选",
          "18px 浅灰底, 4px 圆角, 选中显示对勾, hover 不放大"
        ],
        [
          "编辑与评论",
          "14px 细线图标, 评论上移 1px, 视觉底板28px, 点击区桌面28px, 触屏44px"
        ],
        [
          "文本输入",
          "主输入, 备注与行内编辑共用浅色边线, 聚焦不加深, 不叠加光效"
        ],
        [
          "操作主次",
          "结束当前编辑或确认流程的必需决策用 soft 常显浅底, 如弹窗取消与删除; 设置, 切换, 查看和可选操作用 ghost, 默认透明, hover 或按下显示统一灰底"
        ],
        [
          "圆角选择",
          "常规面板和独立操作组用 10px 圆角矩形; 周围圆形控件集中的区域用两端半圆的胶囊, 如输入栏审批与模型入口, 圆角与背景层级独立选择"
        ],
        [
          "入口状态",
          "所有按钮 hover 与按下背景统一为删除图标同款中性灰, 文字和图标保留语义色, 可选入口默认透明, 展开不保持底色, 键盘 focus-visible 保留轮廓, 禁用不响应操作或 hover"
        ],
        [
          "状态颜色",
          "可选普通操作用灰字, 删除与风险用红字, 需要注意的设置用紫字, 确认用蓝字, 并入用绿字, 颜色不替代文字或图标"
        ],
        [
          "上下文",
          "分组只保留标题, 底栏只保留右对齐确认按钮, 未确认修改由计数入口提示, 下一条消息仅使用已确认快照"
        ],
        [
          "边界",
          "工具与助手正文不加卡片, 独立审阅和备注面板使用细边框及柔和阴影, 备注查看, 编辑和 hover 时均保持面板底色, 仅具体按钮提供灰底反馈"
        ],
        [
          "输入栏几何",
          "工具栏 44px 高, 图标 hover 为 32px 圆形, 审批与模型为 32px 高胶囊, 默认透明, hover 或按下显示统一灰底, 发送圆 30px, 底部外缘保留 8px"
        ],
        [
          "紧凑标签",
          "上下文计数与备注标签使用 10px 圆角矩形, 常显浅底固定 30px 高; 文件标签使用胶囊圆角, 标签间隔 8px, 图文间隔 6px"
        ],
        [
          "响应式边界",
          "窗口宽度控制排布, 触摸控制点击区, 两者不共用放大规则, 上下文组件按实际容器宽度换行"
        ],
        [
          "代码与身份色",
          "代码标题, 字符串与键使用琥珀色, 列表符号用蓝色, 工具和资料图标使用共享撞色序列"
        ],
        [
          "页面复用",
          "工作台只组装内置组件与会话数据, 不维护独立输入框, 菜单, 面板或复选实现"
        ],
        [
          "权限与内容强调",
          "完全访问的图标, 标题和对勾为红色, 黄色用于上下文标识与分组等组件结构, 并入操作用绿色, 描述与正文保持中性"
        ],
        [
          "内容宽度",
          "输入框最大 680px 并在可用对话区域居中, 评审面板最大 560px, 添加菜单最大 320px, 窄屏按可用宽度收缩"
        ],
        [
          "分组标题",
          "上下文分组标题 14px / 500, 辅助说明 12px, 标题使用琥珀色"
        ]
      ]
    },
    "agents": [
      {
        "id": "blue",
        "label": "蓝色折叠花瓣"
      },
      {
        "id": "lavender",
        "label": "紫色折纸四瓣"
      },
      {
        "id": "amber",
        "label": "琥珀六芒星"
      },
      {
        "id": "coral",
        "label": "珊瑚折纸蝶"
      },
      {
        "id": "cyan",
        "label": "青色三瓣风车"
      }
    ],
    "workbenchDemo": {
      "project": "对话设计",
      "sessions": [
        {
          "id": "messages",
          "title": "消息可见性检查",
          "prompt": "检查消息页的输入体验, 整理需要调整的细节",
          "heading": "先解决遮挡, 再统一操作反馈",
          "intro": "需要调整两处: 消息滚动时机和复制提示的显示边界",
          "findings": [
            [
              "发送后保持新消息完整可见",
              "等待输入框高度稳定, 再计算滚动位置, 让回复自然进入阅读区域"
            ],
            [
              "复制反馈留在当前消息内部",
              "提示靠近触发按钮, 避免被内容块裁切, 阅读过程保持连续"
            ]
          ],
          "output": "消息页调整清单",
          "items": [
            {
              "id": "messages-item-0",
              "text": "连续发送消息时, 消息与输入框不重叠",
              "checked": false
            },
            {
              "id": "messages-item-1",
              "text": "复制提示完整显示在当前消息内部",
              "checked": false
            },
            {
              "id": "messages-item-2",
              "text": "窄屏下的反馈按钮可点击, 提示不越界",
              "checked": false
            }
          ],
          "messages": [],
          "draft": ""
        },
        {
          "id": "context",
          "title": "上下文交互规范",
          "prompt": "检查工作草稿和待处理内容之间的交互",
          "heading": "先确认范围, 再发送上下文",
          "intro": "区分草稿调整与已确认内容, 避免待处理文件直接进入下一条消息",
          "findings": [
            [
              "待处理内容需要明确并入",
              "文件并入后进入工作草稿, 允许勾选或排除"
            ],
            [
              "确认后更新消息携带范围",
              "草稿尚未确认时, 发送仍使用上一份已确认内容"
            ]
          ],
          "output": "上下文验收清单",
          "items": [
            {
              "id": "context-item-0",
              "text": "待处理文件默认不随消息发送",
              "checked": false
            },
            {
              "id": "context-item-1",
              "text": "取消勾选的文件不显示删除线",
              "checked": false
            },
            {
              "id": "context-item-2",
              "text": "未确认的草稿修改保留状态提示",
              "checked": false
            }
          ],
          "messages": [],
          "draft": ""
        },
        {
          "id": "components",
          "title": "组件与状态整理",
          "prompt": "整理消息页组件的默认, 悬浮和焦点状态",
          "heading": "让状态反馈保持一致",
          "intro": "对按钮, 展开控件和输入区分别定义反馈, 避免整片区域出现高亮",
          "findings": [
            [
              "输入区只保留一层焦点边界",
              "焦点反馈放在输入组件外层, 内部文本区保持无框"
            ],
            [
              "操作反馈跟随触发位置",
              "复制和评价的结果保留在当前消息中, 不挤出列表边界"
            ]
          ],
          "output": "组件状态清单",
          "items": [
            {
              "id": "components-item-0",
              "text": "按钮有悬浮和按下反馈",
              "checked": false
            },
            {
              "id": "components-item-1",
              "text": "键盘焦点保持可见",
              "checked": false
            },
            {
              "id": "components-item-2",
              "text": "减少动态效果设置下不播放位移动画",
              "checked": false
            }
          ],
          "messages": [],
          "draft": ""
        },
        {
          "id": "theme",
          "title": "浅色主题评审",
          "prompt": "检查浅色主题的文字层级和组件阴影",
          "heading": "白色画布, 清楚的内容层级",
          "intro": "用深色正文保证阅读, 通过细边框与阴影区分独立操作面板",
          "findings": [
            [
              "正文与执行记录使用不同字色",
              "正文用深色, 执行记录与时间作为灰色辅助信息"
            ],
            [
              "阴影只放在独立组件",
              "输入区和上下文面板具有阴影, 正文段落保持无框"
            ]
          ],
          "output": "浅色主题检查清单",
          "items": [
            {
              "id": "theme-item-0",
              "text": "正文在白色背景上清晰可读",
              "checked": false
            },
            {
              "id": "theme-item-1",
              "text": "独立面板与底层画布能够区分",
              "checked": false
            },
            {
              "id": "theme-item-2",
              "text": "选中与未选中的内容均保留可读性",
              "checked": false
            }
          ],
          "messages": [],
          "draft": ""
        }
      ],
      "draft": [
        {
          "id": "composer",
          "kind": "file",
          "title": "Composer.js",
          "meta": "输入框组件 · 今天 14:28",
          "included": true
        },
        {
          "id": "message",
          "kind": "file",
          "title": "MessageBubble.js",
          "meta": "消息组件 · 今天 14:25",
          "included": true
        },
        {
          "id": "design",
          "kind": "file",
          "title": "DESIGN.md",
          "meta": "设计规范 · 来自项目",
          "included": false
        }
      ],
      "pending": [
        {
          "id": "interactions",
          "kind": "file",
          "title": "interactions.js",
          "meta": "工具调用添加 · 尚未并入"
        }
      ]
    }
  }

  const tokenValue = (token, seen = new Set()) => { if (seen.has(token)) return ''; seen.add(token); const value = config.tokens.shared[token] ?? config.tokens.light[token] ?? config.tokens.dark[token] ?? ''; return value.replace(/var\((--[\w-]+)\)/g, (_, name) => tokenValue(name, new Set(seen))); }
  const declarations = (values) => Object.entries(values).map(([name, value]) => `${name}:${value};`).join('')
  const tokenStyle = document.createElement('style')
  tokenStyle.id = 'context-editor-ui-tokens'
  tokenStyle.textContent = `:root,[data-theme]{${declarations(config.tokens.shared)}}:root,[data-theme="light"]{color-scheme:light;${declarations(config.tokens.light)}}[data-theme="dark"]{color-scheme:dark;${declarations(config.tokens.dark)}}@media(prefers-reduced-motion:reduce){:root{--motion-fast:0ms;--motion-base:0ms;--motion-layout:0ms;--motion-exit:0ms;--ease-standard:linear;}}`
  tokenStyle.textContent += config.responsive.map(rule => `@media${rule.query}{:root,[data-theme]{${declarations(rule.tokens)}}}`).join('')
  document.head.appendChild(tokenStyle)

  const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character])
  const setText = (selector, value) => {
    const element = document.querySelector(selector)
    if (element) element.textContent = value
  }
  const parameterValue = (parameter) => parameter.tokens.map(token => tokenValue(token)).join(parameter.separator || '')
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
      <section class="review-section" id="unified-standards"><div class="section-head"><h2>统一规范</h2><p>按粒度组织, 组件与示例直接复用配置</p></div><div class="parameter-grid">${config.standards.levels.map(([title,description]) => `<div class="parameter-card"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(description)}</span></div>`).join('')}</div><dl class="spec-list">${config.standards.states.map(([title,description]) => `<div class="spec-row"><dt>${escapeHtml(title)}</dt><dd>${escapeHtml(description)}</dd></div>`).join('')}</dl></section>
      <section class="review-section" data-od-id="foundation-colors"><div class="section-head"><h2>颜色角色</h2><p>颜色用于区分画布, 内容表面, 强调信息和操作状态</p></div><div class="stage">${colorRows}</div></section>
      <section class="review-section" id="control-geometry"><div class="section-head"><h2>控件几何</h2><p>点击区与视觉背景独立, 窄视口不触发触屏放大, hover 不改变尺寸</p></div><div class="parameter-grid">${config.foundations.controls.map(item => `<div class="parameter-card"><code>${escapeHtml(item.tokens.join(' / '))}</code><strong>${escapeHtml(item.tokens.map(token => tokenValue(token)).join(' / '))}</strong><span>${escapeHtml(item.label)}</span></div>`).join('')}</div></section>
      <section class="review-section" id="icons" data-od-id="foundation-icons"><div class="section-head"><h2>图标库</h2><p>Lucide 与本地横向命令图标共用细线规范, 功能图标16px, 行操作14px, agent 使用20px彩色图形</p></div><div class="icon-catalog" id="icon-catalog"></div><div class="icon-library-links"><a href="icons.data.js" download>下载图标数据</a><a href="vendor/lucide-LICENSE">图标许可</a></div></section>
      <section class="review-section" id="motion" data-od-id="foundation-motion"><div class="section-head"><h2>动效规范</h2><p>动效用于表达状态和位置变化, 开启减少动态效果后立即切换, 不影响操作结果</p></div><div class="parameter-grid">${config.foundations.motion.map((item) => `<div class="parameter-card"><strong>${escapeHtml(tokenValue(item.token))}</strong><span>${escapeHtml(item.label)}</span><span>${escapeHtml(item.description)}</span></div>`).join('')}</div></section>
      <section class="review-section" data-od-id="foundation-typography"><div class="section-head"><h2>字体层级</h2><p>消息使用系统界面字体, 等宽字体仅用于代码, 命令和路径</p></div><div class="stage">${typeRows}</div></section>
      <section class="review-section" data-od-id="foundation-spacing"><div class="section-head"><h2>间距与几何</h2><p>阅读栏宽与消息间距共同控制内容密度和阅读节奏</p></div><div class="stage">${spacingRows}</div><div class="stage is-surface foundation-geometry"><div class="column-diagram"><div class="turn-diagram"><div class="bubble-diagram">用户气泡宽度上限为 ${escapeHtml(tokenValue('--message-user-max-width'))}</div><div class="turn-block">助手消息在阅读栏内保持无框</div></div></div></div></section>
      <section class="review-section" data-od-id="foundation-themes"><div class="section-head"><h2>浅色与深色</h2><p>${escapeHtml(config.boundaries.dark)}</p></div><div class="grid-2"><div class="theme-board" data-theme="light"><div class="theme-label"><strong>浅色</strong><span>${escapeHtml(config.meta.lightLabel)}</span></div><div class="message-pair"><div class="user-message">浅蓝表面区分用户消息</div><p>助手正文保持无框</p></div></div><div class="theme-board" data-theme="dark"><div class="theme-label"><strong>深色</strong><span>${escapeHtml(config.meta.darkLabel)}</span></div><div class="message-pair"><div class="user-message">低对比表面区分用户消息</div><p>文字与操作保持清晰可辨</p></div></div></div></section>
      <footer class="review-foot">${escapeHtml(config.meta.description)}</footer>`
    const catalog = document.getElementById('icon-catalog')
    config.foundations.icons.forEach((item) => {
      const sample = document.createElement('div')
      sample.className = 'icon-sample'
      sample.append(ContextEditorUIIcons.create(item.name, { size: 24 }))
      const label = document.createElement('span')
      label.textContent = item.label
      sample.append(label)
      catalog.append(sample)
    })
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
