(() => {
  const statusElement = (source) => source?.closest('[data-message-actions]')?.querySelector('[data-message-status]') || document.querySelector('[data-live-status]')
  const setStatus = (message, source) => {
    const status = statusElement(source)
    if (status) status.textContent = message
  }
  const feedbackTimers = new WeakMap()
  const copyRequests = new WeakMap()
  const showCopyFeedback = (button, message, success) => {
    const control = button?.closest('.copy-control')
    if (!control) { setStatus(message); return }
    clearTimeout(feedbackTimers.get(control))
    control.dataset.copyFeedback = message
    control.dataset.copyState = success ? 'success' : 'error'
    let announcement = document.getElementById('copy-announcement')
    if (!announcement) {
      announcement = document.createElement('span')
      announcement.id = 'copy-announcement'
      announcement.className = 'sr-only'
      announcement.setAttribute('role', 'status')
      announcement.setAttribute('aria-live', 'polite')
      document.body.append(announcement)
    }
    announcement.textContent = `${button.getAttribute('aria-label')}: ${message}`
    feedbackTimers.set(control, setTimeout(() => {
      delete control.dataset.copyFeedback
      delete control.dataset.copyState
    }, success ? 2000 : 4000))
  }
  const copyText = async (text, message, button) => {
    const request = {}
    if (button) copyRequests.set(button, request)
    try {
      await navigator.clipboard.writeText(text)
      if (!button || copyRequests.get(button) === request) showCopyFeedback(button, message || '已复制', true)
    } catch {
      if (!button || copyRequests.get(button) === request) showCopyFeedback(button, '复制失败, 请重试', false)
    }
  }

  const onClick = async (event) => {
    const source = event.target instanceof Element ? event.target : null
    if (!source) return
    const copyButton = source.closest('[data-copy-target]')
    if (copyButton) {
      const target = document.getElementById(copyButton.dataset.copyTarget)
      if (!target) { showCopyFeedback(copyButton, '未找到可复制内容', false); return }
      const text = target.innerText || target.textContent || ''
      await copyText(text, '已复制', copyButton)
      return
    }
    const statusButton = source.closest('[data-status-message]')
    if (statusButton) setStatus(statusButton.dataset.statusMessage, statusButton)
  }

  const bindMessageActions = () => {
    if (document.documentElement.dataset.actionsBound) return
    document.documentElement.dataset.actionsBound = 'true'
    document.addEventListener('click', onClick)
  }

  Object.assign(window, { ContextEditorUIInteractions: { bindMessageActions, copyText, setStatus } })
  bindMessageActions()
})()
