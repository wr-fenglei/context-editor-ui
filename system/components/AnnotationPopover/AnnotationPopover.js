function annotationIsDirty(annotation) {
  return Boolean(annotation?.editing && (annotation.draft ?? annotation.comment ?? '') !== (annotation.comment || ''))
}

function AnnotationPopover({ annotation, onChange, active = true }) {
  const chipRef = React.useRef(null)
  const popupRef = React.useRef(null)
  const editorRef = React.useRef(null)
  const editRef = React.useRef(null)
  const latest = React.useRef(annotation)
  const hideTimer = React.useRef(null)
  const restoring = React.useRef(false)
  const [position, setPosition] = React.useState(null)
  const titleId = `annotation-title-${React.useId().replace(/:/g, '')}`
  latest.current = annotation
  const update = patch => { if (latest.current) onChange({ ...latest.current, ...patch }) }
  const inside = element => element && (chipRef.current?.contains(element) || popupRef.current?.contains(element))
  const close = (restore = false) => {
    clearTimeout(hideTimer.current)
    update({ open: false, pinned: false })
    if (restore) { restoring.current = true; chipRef.current?.focus({ preventScroll: true }); requestAnimationFrame(() => { restoring.current = false }) }
  }
  const open = () => { clearTimeout(hideTimer.current); update({ open: true }) }
  const leave = () => {
    clearTimeout(hideTimer.current)
    hideTimer.current = setTimeout(() => {
      if (!latest.current?.pinned && !latest.current?.editing && !inside(document.activeElement)) close()
    }, 180)
  }
  const reposition = React.useCallback(() => {
    const chip = chipRef.current, popup = popupRef.current
    if (!chip || !popup) return
    const viewport = window.visualViewport
    const x = viewport?.offsetLeft || 0, y = viewport?.offsetTop || 0
    const width = viewport?.width || window.innerWidth, height = viewport?.height || window.innerHeight
    const style = getComputedStyle(popup)
    const margin = parseFloat(style.getPropertyValue('--panel-padding'))
    const gap = parseFloat(style.getPropertyValue('--space-2'))
    const rect = chip.getBoundingClientRect()
    const availableAbove = rect.top - y - margin - gap
    const availableBelow = y + height - margin - rect.bottom - gap
    const above = availableAbove >= popup.scrollHeight || availableAbove > availableBelow
    const maxHeight = Math.max(0, Math.max(availableAbove, availableBelow))
    const popupHeight = Math.min(popup.scrollHeight, maxHeight)
    const popupWidth = Math.min(parseFloat(style.getPropertyValue('--annotation-width')), width - margin * 2)
    const left = Math.max(x + margin, Math.min(rect.left, x + width - popupWidth - margin))
    const top = above ? Math.max(y + margin, rect.top - gap - popupHeight) : Math.min(y + height - popupHeight - margin, rect.bottom + gap)
    const next = { left, top, width: popupWidth, maxHeight }
    setPosition(previous => previous && Object.keys(next).every(key => previous[key] === next[key]) ? previous : next)
  }, [])

  React.useLayoutEffect(() => {
    if (!active || !annotation?.open) { setPosition(null); return }
    reposition()
    const observer = new ResizeObserver(reposition)
    if (popupRef.current) observer.observe(popupRef.current)
    window.addEventListener('resize', reposition)
    window.addEventListener('scroll', reposition, true)
    window.visualViewport?.addEventListener('resize', reposition)
    window.visualViewport?.addEventListener('scroll', reposition)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', reposition)
      window.removeEventListener('scroll', reposition, true)
      window.visualViewport?.removeEventListener('resize', reposition)
      window.visualViewport?.removeEventListener('scroll', reposition)
    }
  }, [active, annotation?.open, annotation?.editing, annotation?.text, annotation?.comment, reposition])
  React.useEffect(() => {
    if (active && annotation?.open && annotation?.editing) editorRef.current?.focus({ preventScroll: true })
  }, [active, annotation?.open, annotation?.editing, annotation?.itemId])
  React.useEffect(() => {
    if (!active && annotation?.open) update({ open: false, pinned: false })
  }, [active, annotation?.open])
  React.useEffect(() => {
    if (!active || !annotation?.open) return
    const outside = event => { if (!inside(event.target)) close() }
    const keydown = event => {
      if (event.key === 'Escape' && !event.isComposing) { event.preventDefault(); event.stopPropagation(); close(true) }
    }
    document.addEventListener('pointerdown', outside)
    document.addEventListener('keydown', keydown)
    return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', keydown) }
  }, [active, annotation?.open, onChange])
  React.useEffect(() => () => clearTimeout(hideTimer.current), [])

  if (!annotation || !active) return null
  const draft = annotation.draft ?? annotation.comment ?? ''
  const dirty = annotationIsDirty(annotation)
  const finish = save => {
    update({ comment: save ? draft.trim() : (annotation.comment || ''), draft: undefined, editing: false, open: true, pinned: true, status: save ? '备注已保存' : '已取消备注修改' })
    requestAnimationFrame(() => editRef.current?.focus({ preventScroll: true }))
  }
  const blur = event => {
    if (event.relatedTarget && !inside(event.relatedTarget) && !latest.current?.pinned && !latest.current?.editing) close()
  }
  const popup = annotation.open ? <Panel ref={popupRef} className="annotation-popover" bodyClassName="annotation-body" style={{ ...position, visibility: position ? 'visible' : 'hidden' }} role="dialog" aria-modal="false" aria-labelledby={titleId} data-testid="quote-popover" onPointerEnter={event => { if (event.pointerType !== 'touch') clearTimeout(hideTimer.current) }} onPointerLeave={leave} onBlur={blur} header={<>
    <span id={titleId} className="annotation-title">第 {annotation.index + 1} 项 · 引用内容</span>
    <div className="annotation-actions">
      <button type="button" ref={editRef} className="ds-icon-button" data-testid="quote-edit" aria-label="编辑备注" onClick={() => update({ editing: true, open: true, pinned: true, draft, status: '' })}><Icon name="pen"/></button>
      <button type="button" className="ds-icon-button ds-action-remove" data-testid="quote-clear" aria-label="移除备注和引用" onClick={() => onChange(null)}><TrashIcon/></button>
      <button type="button" className="ds-icon-button" data-testid="quote-close" aria-label="收起备注详情" onClick={() => close(true)}><Icon name="x"/></button>
    </div>
  </>}>
    <p className="annotation-selection">{annotation.text}</p>
    {annotation.editing ? <div className="annotation-editor">
      <label htmlFor={`${titleId}-editor`}>补充备注</label>
      <textarea id={`${titleId}-editor`} ref={editorRef} rows={2} value={draft} placeholder="添加你的意见..." data-testid="quote-editor" onChange={event => update({ draft: event.target.value, status: '' })} onKeyDown={event => {
        if (event.key === 'Enter' && (event.metaKey || event.ctrlKey) && !event.nativeEvent.isComposing) { event.preventDefault(); finish(true) }
      }}/>
      <div className="annotation-edit-actions"><Button type="button" tone="neutral" data-testid="quote-cancel" onClick={() => finish(false)}>取消</Button><Button type="button" tone="confirm" data-testid="quote-save" onClick={() => finish(true)}>保存</Button></div>
    </div> : annotation.comment ? <div className="annotation-comment"><span className="annotation-comment-label">备注</span><p>{annotation.comment}</p></div> : null}
    <p className="annotation-status" data-testid="quote-status" role="status" aria-live="polite">{dirty ? '备注有未保存修改' : annotation.status || ''}</p>
  </Panel> : null

  return <span className="annotation-accessory" onPointerEnter={event => { if (event.pointerType !== 'touch') open() }} onPointerLeave={leave} onBlur={blur}>
    <button type="button" ref={chipRef} className="context-accessory annotation-chip" data-testid="quote-chip" aria-haspopup="dialog" aria-expanded={Boolean(annotation.open)} aria-label={dirty ? '1 条备注, 有未保存修改' : '1 条备注'} onFocus={event => { if (!restoring.current && event.currentTarget.matches(':focus-visible')) open() }} onClick={() => {
      if (annotation.open && annotation.pinned) close()
      else update({ open: true, pinned: true })
    }}><Icon name="message-square"/><span>1 条备注</span>{dirty ? <span className="annotation-draft-mark" aria-hidden="true">*</span> : null}</button>
    {popup ? ReactDOM.createPortal(popup, document.body) : null}
  </span>
}

Object.assign(window, { AnnotationPopover, annotationIsDirty })
