(() => {
  const assets = new URL('../../assets/', document.currentScript.src)
  function ProfileTags({ items = ContextEditorUIConfig.components.profileTags.demo.items, label = '个人资料', id = 'profile-tags' } = {}) {
    const list = document.createElement('ul')
    list.className = 'profile-tags'; list.dataset.odId = id; list.setAttribute('aria-label', label)
    items.forEach((item, index) => {
      const tag = document.createElement('li'); tag.className = 'profile-tag'; tag.dataset.odId = `${id}-${index + 1}`
      if (item.icon) {
        const icon = document.createElement('span'); icon.className = 'profile-tag-icon'; icon.setAttribute('aria-hidden', 'true')
        icon.style.setProperty('--profile-icon', `url("${new URL(item.icon, assets).href}")`); tag.append(icon)
      }
      const text = document.createElement('span'); text.textContent = item.text; tag.append(text); list.append(tag)
    })
    return list
  }
  Object.assign(window, { ProfileTags })
})()
