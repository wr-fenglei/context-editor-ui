---
name: context-editor-ui
description: Build or refine context-editing and plugin interfaces that must appear inside existing conversations without disrupting native message, tool, subagent, and composer continuity
user-invocable: true
---

# context-editor-ui

Use this skill for context-editing, tool, agent or plugin output embedded in an existing conversation

Do not use it for dashboards, settings, navigation, marketing pages, host-shell replicas or generic component libraries

## Required reading

1. Read `DESIGN.md` for scope, visual invariants and integration boundaries
2. Load `system/design-system.config.js` for every token, rule, parameter and demo value
3. Inspect the matching component under `system/components/<component>/<component>.js`

## Source ownership

- Change data, tokens, voice or documented parameters in `design-system.config.js`
- Change component structure or icon geometry in the matching component JS
- Change visual behavior or responsive states in `styles.css`
- Change copy and status interaction in `interactions.js`
- Never repair a component with inline CSS in `system/app.html` or a spec template

## Workflow

1. Identify the smallest component and state in scope
2. Update its owned source only
3. Open the matching file under `system/components/<component>/spec.html`
4. Verify the same result in `system/app.html`
5. Check keyboard focus, menu dismissal, narrow width and conversation continuity

## Hard boundaries

- Pending input is not work-draft content
- The work draft is the current confirmed context
- Context Editor controls belong in a message action, tool row or composer accessory
- Light and dark themes share the same hierarchy, layout and interaction behavior

## Delivery check

- No dashboard, inspector panel or unrelated form was introduced
- Spec pages contain templates and mounts, not copied design values
- Components use semantic colors for content, surfaces and interaction states
- Hover, focus, pressed and disabled states retain readable foreground and background pairs
- Mobile has no horizontal scroll, clipped code or overlapping composer controls
