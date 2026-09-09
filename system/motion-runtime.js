(() => {
  const media = window.matchMedia('(prefers-reduced-motion: reduce)')
  const active = new Set(), current = new WeakMap(), layouts = new WeakMap(), rowAnimations = new WeakMap()
  const value = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim()
  const duration = (name) => media.matches ? 0 : parseFloat(value(name)) || 0
  const play = (element, frames, token = '--motion-base', easing = '--ease-standard') => {
    if (!element || !duration(token) || !element.animate) return null
    const animation = element.animate(frames, { duration: duration(token), easing: value(easing) || 'ease-out', fill: 'both' })
    active.add(animation)
    animation.finished.then(() => active.delete(animation), () => active.delete(animation))
    return animation
  }
  const stop = (element) => { current.get(element)?.cancel(); current.delete(element) }
  const settled = (element) => Promise.resolve(current.get(element)?.finished).catch(() => {})
  const reveal = (element, show, mode = 'collapse') => {
    const previous = current.get(element), style = getComputedStyle(element)
    const opacity = previous ? style.opacity : show ? 0 : 1
    const height = previous ? element.getBoundingClientRect().height : show ? 0 : element.getBoundingClientRect().height
    const transform = previous ? style.transform : show ? `translateY(${value('--motion-distance')}) scale(.985)` : 'none'
    const margin = previous ? style.marginTop : show ? '0px' : style.marginTop
    stop(element)
    const targetMargin = getComputedStyle(element).marginTop
    const frames = mode === 'popover'
      ? [{ opacity, transform }, { opacity: show ? 1 : 0, transform: show ? 'none' : `translateY(${value('--motion-distance')}) scale(.985)` }]
      : [{ height: `${height}px`, opacity, marginTop: margin }, { height: show ? `${element.scrollHeight}px` : '0px', opacity: show ? 1 : 0, marginTop: show ? targetMargin : '0px' }]
    if (mode !== 'popover') element.style.overflow = 'hidden'
    const animation = play(element, frames, show ? (mode === 'popover' ? '--motion-base' : '--motion-layout') : '--motion-exit', show ? '--ease-standard' : '--ease-exit')
    if (animation) current.set(element, animation)
    return Promise.resolve(animation?.finished).then(() => {
      if (animation && current.get(element) !== animation) return false
      if (show || !animation) { stop(element); element.style.overflow = '' }
      return true
    }, () => false)
  }
  const offset = (element) => {
    const transform = getComputedStyle(element).transform
    return rowAnimations.has(element) && transform !== 'none' ? new DOMMatrixReadOnly(transform).m42 : 0
  }
  const measure = (root) => new Map(Array.from(root?.querySelectorAll('[data-motion-key]') || []).map((element) => [element.dataset.motionKey, { top: element.getBoundingClientRect().top + scrollY - offset(element), group: element.parentElement, element }]))
  const capture = (root) => { if (root) layouts.set(root, measure(root)) }
  const layout = (root) => {
    if (!root) return
    const before = layouts.get(root)
    before?.forEach((item) => {
      const animation = rowAnimations.get(item.element)
      if (!animation) return
      item.top += offset(item.element)
      animation.cancel()
      rowAnimations.delete(item.element)
    })
    const after = measure(root)
    layouts.set(root, after)
    if (!before || media.matches) return
    after.forEach((item, key) => {
      const previous = before.get(key)
      let frames
      if (!previous || previous.group !== item.group) frames = [{ opacity: 0, transform: `translateY(${value('--motion-distance')})` }, { opacity: 1, transform: 'none' }]
      else if (Math.abs(previous.top - item.top) > 1) frames = [{ transform: `translateY(${previous.top - item.top}px)` }, { transform: 'none' }]
      if (frames) {
        const animation = play(item.element, frames, '--motion-layout')
        if (animation) {
          rowAnimations.set(item.element, animation)
          animation.finished.then(() => {
            animation.cancel()
            if (rowAnimations.get(item.element) === animation) rowAnimations.delete(item.element)
          }, () => {})
        }
      }
    })
  }
  const remove = (element) => {
    if (!element) return Promise.resolve()
    element.inert = true
    const style = getComputedStyle(element)
    element.style.overflow = 'hidden'
    const animation = play(element, [{ height: `${element.getBoundingClientRect().height}px`, opacity: 1, paddingTop: style.paddingTop, paddingBottom: style.paddingBottom }, { height: '0px', opacity: 0, paddingTop: '0px', paddingBottom: '0px', borderBottomWidth: '0px' }], '--motion-exit', '--ease-exit')
    return Promise.resolve(animation?.finished).catch(() => {})
  }
  document.addEventListener('click', (event) => {
    const summary = event.target.closest?.('summary'), details = summary?.parentElement
    if (!details?.matches('details[data-motion-disclosure]')) return
    event.preventDefault()
    const show = details.dataset.expanded ? details.dataset.expanded !== 'true' : !details.open
    details.dataset.expanded = String(show)
    summary.setAttribute('aria-expanded', String(show))
    const body = details.querySelector(':scope > .disclosure-body')
    if (!body) return
    if (show) details.open = true
    body.inert = !show
    reveal(body, show).then((completed) => {
      if (!completed || details.dataset.expanded !== String(show)) return
      if (!show) details.open = false
      stop(body)
      body.style.overflow = ''
    })
  })
  media.addEventListener('change', () => { if (media.matches) active.forEach((animation) => { try { animation.finish() } catch { animation.cancel() } }) })
  window.ContextEditorUIMotion = { duration, play, reveal, stop, settled, capture, layout, remove }
})()
