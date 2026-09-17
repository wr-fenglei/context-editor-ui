function reviewMarkdown(title, items) {
  return `# ${title}\n\n${items.map(item => `- [${item.checked ? 'x' : ' '}] ${item.text}`).join('\n')}`
}

function ReviewPanel({ title, filename = 'review.md', intro = '核对项目, 编辑内容或添加备注', items, onChange, onDiscuss, onInsert, onClose, onEditingChange, footer }) {
  const [editing, setEditing] = React.useState(null)
  const [undo, setUndo] = React.useState(null)
  const [feedback, setFeedback] = React.useState('')
  const fieldRef = React.useRef(null)
  const listRef = React.useRef(null)
  const sourceRef = React.useRef(null)
  const drafts = React.useRef(new Map())
  const copyRequest = React.useRef(0)
  const mounted = React.useRef(true)
  const editingCallback = React.useRef(onEditingChange)
  editingCallback.current = onEditingChange
  const sourceId = `review-source-${React.useId().replace(/:/g, '')}`
  const checked = items.filter(item => item.checked).length
  const markdown = reviewMarkdown(title, items)
  const hasUnsavedEdits = items.some(item => editing?.id === item.id
    ? editing.text !== item.text
    : drafts.current.has(item.id) && drafts.current.get(item.id) !== item.text)

  React.useEffect(() => { mounted.current = true; return () => { mounted.current = false; copyRequest.current++ } }, [])
  React.useEffect(() => { editingCallback.current?.(hasUnsavedEdits) }, [hasUnsavedEdits])
  React.useEffect(() => () => editingCallback.current?.(false), [])
  React.useEffect(() => {
    if (editing && !items.some(item => item.id === editing.id)) setEditing(null)
    if (undo && !items.some(item => item.id === undo.id)) setUndo(null)
  }, [items, editing?.id, undo?.id])

  const resize = React.useCallback(() => {
    const field = fieldRef.current
    if (!field) return
    field.style.height = 'auto'
    const style = getComputedStyle(field)
    field.style.height = `${field.scrollHeight + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth)}px`
  }, [])
  React.useLayoutEffect(resize, [editing?.text, resize])
  React.useEffect(() => {
    if (!editing) return
    fieldRef.current?.focus({ preventScroll: true })
    const observer = new ResizeObserver(resize)
    if (listRef.current) observer.observe(listRef.current)
    return () => observer.disconnect()
  }, [editing?.id, resize])

  const restoreFocus = id => requestAnimationFrame(() => {
    const button = [...(listRef.current?.querySelectorAll('[data-edit-id]') || [])].find(element => element.dataset.editId === String(id))
    button?.focus({ preventScroll: true })
  })
  const edit = item => {
    if (editing) drafts.current.set(editing.id, editing.text)
    setEditing({ id: item.id, text: drafts.current.get(item.id) ?? item.text })
    setFeedback('')
  }
  const cancel = () => {
    if (!editing) return
    const id = editing.id
    drafts.current.delete(id)
    setEditing(null)
    setFeedback('已取消修改')
    restoreFocus(id)
  }
  const save = () => {
    if (!editing?.text.trim()) return
    const before = items.find(item => item.id === editing.id)
    if (!before) { setEditing(null); return }
    const text = editing.text.trim()
    if (text !== before.text) {
      setUndo({ id: before.id, before: { ...before }, afterText: text })
      onChange(items.map(item => item.id === before.id ? { ...item, text, checked: false } : item))
      setFeedback(before.checked ? '修改已保存, 此项需要重新核对' : '修改已保存')
    } else setFeedback('内容未改变')
    drafts.current.delete(before.id)
    setEditing(null)
    restoreFocus(before.id)
  }
  const undoEdit = () => {
    if (!undo) return
    const current = items.find(item => item.id === undo.id)
    if (!current || current.text !== undo.afterText) { setUndo(null); setFeedback('此项已再次改变, 保留当前内容'); return }
    onChange(items.map(item => item.id === undo.id ? { ...item, text: undo.before.text, checked: undo.before.checked } : item))
    setFeedback('已撤销修改, 核对状态已恢复')
    setUndo(null)
    restoreFocus(undo.id)
  }
  const copy = async () => {
    const request = ++copyRequest.current
    try {
      await navigator.clipboard.writeText(markdown)
      if (mounted.current && request === copyRequest.current) setFeedback('已复制清单原文')
    } catch {
      if (!mounted.current || request !== copyRequest.current) return
      if (sourceRef.current) sourceRef.current.open = true
      setFeedback('复制失败, 可展开 Markdown 原文选取复制')
    }
  }

  return <Panel className="review-panel" bodyClassName="review-panel-body" data-testid="document-panel" aria-label="产出审阅" header={<>
    <FileIcon className="review-file-icon"/><span className="review-filename">{filename}</span>
    <button type="button" className="ds-icon-button" data-testid="document-copy" aria-label="复制清单原文" onClick={copy}><CopyIcon/></button>
    {onClose ? <button type="button" className="ds-icon-button" data-testid="document-close" aria-label="收起产出文档" onClick={onClose}><Icon name="x"/></button> : null}
  </>} footer={footer}>
    <h2 className="review-title">{title}</h2>
    {intro ? <p className="review-intro">{intro}</p> : null}
    <details className="review-checklist" open>
      <summary><span>验收项目</span><span className="review-count" data-testid="review-count">已勾选 {checked} / {items.length}</span><ChevronDownIcon/></summary>
      <ul ref={listRef} className="review-items">
        {items.map((item, index) => <li key={item.id} className="review-item" data-row-index={index} data-editing={editing?.id === item.id}>
          <label className="review-check-control">
            <input type="checkbox" checked={Boolean(item.checked)} disabled={editing?.id === item.id} data-testid="review-item" aria-label={`标记已核对: ${item.text}`} onChange={event => onChange(items.map(value => value.id === item.id ? { ...value, checked: event.target.checked } : value))}/>
            <span className="review-check-plate" aria-hidden="true"><CheckIcon/></span>
          </label>
          {editing?.id === item.id ? <div className="review-item-editor">
            <textarea ref={fieldRef} rows={1} value={editing.text} data-testid="item-editor" aria-label={`编辑第 ${index + 1} 项`} onChange={event => setEditing({ ...editing, text: event.target.value })} onKeyDown={event => {
              if (event.nativeEvent.isComposing) return
              if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) { event.preventDefault(); save() }
              if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); cancel() }
            }}/>
            <div className="review-row-actions">
              <button type="button" className="ds-icon-button review-save" data-testid="item-save" aria-label={`保存第 ${index + 1} 项修改`} disabled={!editing.text.trim()} onClick={save}><CheckIcon/></button>
              <button type="button" className="ds-icon-button" data-testid="item-cancel" aria-label={`取消第 ${index + 1} 项修改`} onClick={cancel}><Icon name="x"/></button>
            </div>
          </div> : <>
            <span className="review-item-text">{item.text}</span>
            <div className="review-row-actions">
              <button type="button" className="ds-icon-button" data-edit-id={item.id} data-edit-index={index} data-unsaved={drafts.current.has(item.id) && drafts.current.get(item.id) !== item.text} aria-label={`编辑第 ${index + 1} 项: ${item.text}`} onClick={() => edit(item)}><Icon name="pen"/></button>
              {onDiscuss ? <button type="button" className="ds-icon-button review-discuss" data-discuss-index={index} aria-label={`讨论第 ${index + 1} 项: ${item.text}`} onClick={() => onDiscuss(item, index)}><Icon name="message-square"/></button> : null}
            </div>
          </>}
        </li>)}
      </ul>
    </details>
    <details className="review-source" ref={sourceRef}>
      <summary><CodeIcon/><span>Markdown 原文</span><ChevronDownIcon/></summary>
      <div data-testid="document-source"><CodeObject label="Markdown" language="markdown" codeId={sourceId}>{markdown}</CodeObject></div>
    </details>
    {onInsert ? <div className="review-insert"><Button type="button" tone="confirm" variant="ghost" data-testid="document-discuss" onClick={() => { onInsert(markdown); setFeedback('审阅结果已放入输入框, 等待发送') }}><Icon name="corner-down-right"/>将审阅结果放入输入框</Button></div> : null}
    <div className="review-feedback-row"><p className="review-feedback" data-testid="document-feedback" role="status" aria-live="polite">{feedback}</p>{undo && !editing ? <Button type="button" tone="neutral" variant="ghost" data-testid="item-undo" onClick={undoEdit}>撤销修改</Button> : null}</div>
  </Panel>
}

Object.assign(window, { ReviewPanel, reviewMarkdown })
