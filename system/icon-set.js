// Shared Lucide nodes for static and React components
(() => {
  const assets = new URL('assets/', document.currentScript.src)
  const nodes = window.ContextEditorUIIconData
  const style = (name, size = 16) => ({ '--icon-size': `${size}px` })
  const create = (name, { className = '', size = 16 } = {}) => {
    if (!nodes[name]) throw new Error(`Unknown icon: ${name}`)
    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    const attributes = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': 'true', class: `ui-icon ${className}`, 'data-icon': name, 'data-lucide': name }
    Object.entries(attributes).forEach(([key, value]) => icon.setAttribute(key, value))
    icon.style.setProperty('--icon-size', `${size}px`)
    nodes[name].forEach(([tag, attributes]) => {
      const child = document.createElementNS('http://www.w3.org/2000/svg', tag)
      Object.entries(attributes).forEach(([key, value]) => child.setAttribute(key, value))
      icon.append(child)
    })
    return icon
  }
  const createIcons = () => document.querySelectorAll('i[data-lucide]').forEach((placeholder) => {
    placeholder.replaceWith(create(placeholder.dataset.lucide, { className: placeholder.className }))
  })
  const catalog = window.ContextEditorUIConfig.agents
  const aliases = { rose: 'lavender', green: 'cyan', mint: 'cyan' }
  const agentAsset = (tone = 'blue') => new URL(`agents/${aliases[tone] || tone}.png?v=components-20260917`, assets).href
  const identities = new Map()
  let pool = []
  const nextTone = () => {
    if (!pool.length) {
      pool = catalog.map(item => item.id)
      for (let i = pool.length - 1; i > 0; i--) {
        const value = new Uint32Array(1); crypto.getRandomValues(value)
        const j = value[0] % (i + 1)
        ;[pool[i], pool[j]] = [pool[j], pool[i]]
      }
    }
    return pool.pop()
  }
  const agentIdentity = (name, preferred) => {
    if (!identities.has(name)) {
      const tone = aliases[preferred] || preferred || nextTone()
      identities.set(name, { tone, src: agentAsset(tone) })
    }
    return identities.get(name)
  }
  window.ContextEditorUIIcons = { nodes, style, create, createIcons, agentAsset, agentIdentity }
  window.lucide = { createIcons }
})()
