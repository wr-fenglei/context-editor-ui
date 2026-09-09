# context-editor-ui

Conversation UI design system for messages, tool calls, subagents, code objects, message actions, the composer and the Context Editor

This is a screenshot-derived, unofficial implementation and does not represent any official product tokens

## What is included

- One integrated conversation example
- Six component implementations shared by specs and the integrated page
- One configuration source for tokens, parameters, evidence and demo content
- One stylesheet for component visuals and spec layout
- Six specification pages for foundations, messages, tool calls, subagents, the composer and the Context Editor
- A skill entry and concise design constraints

## Source of truth

- `system/design-system.config.js` owns tokens, rules, parameters and demo data
- `system/styles.css` owns component visuals, responsive layout and interaction states
- `system/Icons.js` owns shared icon geometry
- `system/components/<component>/<component>.js` owns component structure
- `system/interactions.js` owns shared copy and status behavior
- `DESIGN.md` owns non-code design constraints and integration boundaries
- `SKILL.md` tells the agent how to apply the system
- `system/components/<component>/spec.html` contains mounts and templates only, never copied design values

## Project structure

```text
.
├── index.html
├── DESIGN.md
├── SKILL.md
├── manifest.json
└── system/
    ├── design-system.config.js
    ├── styles.css
    ├── interactions.js
    ├── Icons.js
    ├── app.html
    ├── foundations.html
    └── components/
        ├── MessageBubble/
        │   ├── MessageBubble.js
        │   └── spec.html
        ├── ToolCall/
        │   ├── ToolCall.js
        │   └── spec.html
        ├── SubagentCall/
        │   ├── SubagentCall.js
        │   └── spec.html
        ├── Composer/
        │   ├── Composer.js
        │   └── spec.html
        └── ContextEditor/
            ├── ContextEditor.js
            └── spec.html
```

## Local preview

Run a local server from the repository root because the integrated example loads shared JSX files and CDN dependencies

```bash
python3 -m http.server 8000
```

Open these entries

- Overview: `http://localhost:8000/`
- Integrated example: `http://localhost:8000/system/app.html`
- Foundations: `http://localhost:8000/system/foundations.html`

## Change workflow

1. Change tokens, evidence, rules or demo data in `system/design-system.config.js`
2. Change structure or icons in the matching `system/components/<component>/<component>.js`
3. Change visual or responsive behavior in `system/styles.css`
4. Change copy or status behavior in `system/interactions.js`
5. Verify the matching `system/components/<component>/spec.html`
6. Verify the integrated page

Do not repair components with inline CSS in `system/app.html` or spec templates

## Use as a skill

For a local project, ask the agent to read this repository before implementing conversation UI

```text
Read DESIGN.md and SKILL.md, then use the matching shared component and tokens
```

To expose it as a personal skill, link or copy this repository to the skills directory as `context-editor-ui`, then restart or refresh skill discovery
