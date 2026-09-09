(() => {
  const assets = new URL('../../assets/', document.currentScript.src)
  function AvatarGroup({ items = ContextEditorUIConfig.components.avatarGroup.demo.items, label = '头像组', id = 'avatar-group' } = {}) {
    const list = document.createElement('ul'); list.className = 'avatar-group'; list.dataset.odId = id; list.setAttribute('aria-label', label)
    items.forEach((item, index) => {
      const entry = document.createElement('li'); entry.className = 'avatar-group-item'; entry.dataset.odId = `${id}-${index + 1}`
      const image = document.createElement('img'); image.src = new URL(item.src, assets).href; image.alt = item.alt || `头像 ${index + 1}`; image.width = item.width || 320; image.height = item.height || 480
      entry.append(image); list.append(entry)
    })
    return list
  }
  Object.assign(window, { AvatarGroup })
})()
