(() => {
  const statusElement = () => document.querySelector('[data-live-status]')
  const setStatus = (message) => {
    const status = statusElement()
    if (status) status.textContent = message
  }
  const copyText = async (text, message) => {
    try {
      await navigator.clipboard.writeText(text)
      setStatus(message || '已复制')
    } catch {
      setStatus('当前预览环境不支持复制')
    }
  }

  const onClick = async (event) => {
    const source = event.target instanceof Element ? event.target : null
    if (!source) return
    const copyButton = source.closest('[data-copy-target]')
    if (copyButton) {
      const target = document.getElementById(copyButton.dataset.copyTarget)
      const text = target?.innerText || target?.textContent || ''
      await copyText(text, '已复制')
      return
    }
    const statusButton = source.closest('[data-status-message]')
    if (statusButton) setStatus(statusButton.dataset.statusMessage)
  }

  const bindMessageActions = () => {
    if (document.documentElement.dataset.actionsBound) return
    document.documentElement.dataset.actionsBound = 'true'
    document.addEventListener('click', onClick)
  }

  Object.assign(window, { ContextEditorUIInteractions: { bindMessageActions, copyText, setStatus } })
  bindMessageActions()
})()
