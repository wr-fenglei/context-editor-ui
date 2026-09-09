function KindIcon({ kind }) {
  if (kind === 'file') return <FileIcon/>
  if (kind === 'selection') return <SelectionIcon/>
  if (kind === 'instruction') return <InstructionIcon/>
  return <NoteIcon/>
}

function ContextEditor({ editorRef, draft, pending, includedCount, attention, status, newItem, onNewItem, onToggle, onRemoveDraft, onRemovePending, onMove, onMerge, onMergeAll, onAddPending, onConfirm, onCollapse }) {
  return (
    <section ref={editorRef} className={`context-editor${attention ? ' is-attention' : ''}`} aria-label="上下文编辑" data-od-id="context-editor">
      <header className="context-editor-head">
        <span className="context-editor-mark" aria-hidden="true"><ContextIcon/></span>
        <div className="context-editor-heading">
          <strong>Context Editor</strong>
          <span className="context-editor-sub">工作草稿 {includedCount} 项 · 待处理 {pending.length} 项</span>
        </div>
        <button className="context-editor-collapse" type="button" onClick={onCollapse} data-od-id="context-editor-collapse">收起</button>
      </header>

      <div className="context-editor-body">
        <section className="context-group" data-od-id="context-work-draft">
          <div className="context-group-head">
            <span className="context-group-label">工作草稿</span>
            <span className="context-group-hint">已确认的上下文, 随下一条消息发送</span>
          </div>
          <ul className="context-list">
            {draft.map((item, index) => (
              <li key={item.id} className={`context-item${item.included ? '' : ' is-excluded'}`} data-od-id={`draft-item-${item.id}`}>
                <button className="context-toggle" type="button" role="checkbox" aria-checked={item.included} aria-label={`${item.included ? '排除' : '纳入'} ${item.title}`} onClick={() => onToggle(item.id)}>
                  <span className="context-check" aria-hidden="true">{item.included ? <CheckIcon/> : null}</span>
                </button>
                <span className="context-kind"><KindIcon kind={item.kind}/></span>
                <span className="context-item-body">
                  <span className="context-item-title">{item.title}</span>
                  <span className="context-item-meta">{item.meta}{item.included ? '' : ' · 已排除'}</span>
                </span>
                <span className="context-item-actions">
                  <button className="context-icon-button" type="button" aria-label={`上移 ${item.title}`} disabled={index === 0} onClick={() => onMove(item.id, -1)}><ArrowUpIcon/></button>
                  <button className="context-icon-button" type="button" aria-label={`下移 ${item.title}`} disabled={index === draft.length - 1} onClick={() => onMove(item.id, 1)}><ArrowDownIcon/></button>
                  <button className="context-icon-button" type="button" aria-label={`移除 ${item.title}`} onClick={() => onRemoveDraft(item.id)}><TrashIcon/></button>
                </span>
              </li>
            ))}
          </ul>
        </section>

        <div className="context-boundary" role="separator" data-od-id="context-boundary">
          <span className="context-boundary-line"/>
          <span className="context-boundary-label">待处理 input 不会进入工作草稿</span>
          <span className="context-boundary-line"/>
        </div>

        <section className="context-group" data-od-id="context-pending">
          <div className="context-group-head">
            <span className="context-group-label">待处理</span>
            <span className="context-group-hint">未处理的 input, 确认后才会并入</span>
          </div>
          <ul className="context-list">
            {pending.map((item) => (
              <li key={item.id} className="context-item is-pending" data-od-id={`pending-item-${item.id}`}>
                <span className="context-kind"><KindIcon kind={item.kind}/></span>
                <span className="context-item-body">
                  <span className="context-item-title">{item.title}</span>
                  <span className="context-item-meta">{item.meta}</span>
                </span>
                <span className="context-item-actions">
                  <button className="context-merge" type="button" onClick={() => onMerge(item.id)} data-od-id={`merge-${item.id}`}>并入</button>
                  <button className="context-icon-button" type="button" aria-label={`移除 ${item.title}`} onClick={() => onRemovePending(item.id)}><TrashIcon/></button>
                </span>
              </li>
            ))}
          </ul>
          <div className="context-add">
            <input className="context-add-input" type="text" value={newItem} placeholder="添加文件, 路径或说明" aria-label="添加待处理内容"
                   onChange={(event) => onNewItem(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter') { event.preventDefault(); onAddPending() } }} data-od-id="context-add-input"/>
            <button className="context-add-button" type="button" onClick={onAddPending} data-od-id="context-add-button">添加到待处理</button>
          </div>
          {pending.length > 0 ? <button className="context-merge-all" type="button" onClick={onMergeAll} data-od-id="context-merge-all">全部并入工作草稿</button> : null}
        </section>
      </div>

      <footer className="context-editor-foot">
        <span className="context-foot-note">确认后, 工作草稿作为下一条消息的上下文</span>
        <button className="context-confirm" type="button" onClick={onConfirm} data-od-id="context-confirm"><CheckIcon/>确认工作草稿</button>
      </footer>
      <p className="context-status" role="status" aria-live="polite">{status}</p>
    </section>
  )
}

function useContextEditor(initialDraft, initialPending) {
  const [draft, setDraft] = React.useState(initialDraft)
  const [pending, setPending] = React.useState(initialPending)
  const [open, setOpen] = React.useState(true)
  const [attention, setAttention] = React.useState(false)
  const [status, setStatus] = React.useState('')
  const [newItem, setNewItem] = React.useState('')
  const attentionTimer = React.useRef(null)
  const editorRef = React.useRef(null)
  const [openRequest, setOpenRequest] = React.useState(0)

  const includedCount = draft.filter((item) => item.included).length

  const openEditor = () => {
    setOpen(true)
    setOpenRequest((request) => request + 1)
    setAttention(true)
    clearTimeout(attentionTimer.current)
    attentionTimer.current = setTimeout(() => setAttention(false), 1400)
  }
  React.useEffect(() => () => clearTimeout(attentionTimer.current), [])

  // Wait for React to mount the card, including a reopen after collapse
  // A separate request counter also handles repeated clicks on an open editor
  React.useEffect(() => {
    if (!open || !openRequest) return
    const frame = requestAnimationFrame(() => {
      editorRef.current?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        block: 'start'
      })
    })
    return () => cancelAnimationFrame(frame)
  }, [open, openRequest])

  const toggleItem = (id) => setDraft((items) => items.map((item) => item.id === id ? { ...item, included: !item.included } : item))
  const removeDraft = (id) => setDraft((items) => items.filter((item) => item.id !== id))
  const removePending = (id) => setPending((items) => items.filter((item) => item.id !== id))
  const move = (id, direction) => setDraft((items) => {
    const index = items.findIndex((item) => item.id === id)
    const target = index + direction
    if (index < 0 || target < 0 || target >= items.length) return items
    const next = items.slice()
    ;[next[index], next[target]] = [next[target], next[index]]
    return next
  })
  const merge = (id) => {
    const item = pending.find((entry) => entry.id === id)
    if (!item) return
    setDraft((items) => [...items, { ...item, included: true, meta: '已并入 · 刚刚' }])
    setPending((items) => items.filter((entry) => entry.id !== id))
    setStatus('')
  }
  const mergeAll = () => {
    if (!pending.length) return
    setDraft((items) => [...items, ...pending.map((entry) => ({ ...entry, included: true, meta: '已并入 · 刚刚' }))])
    setPending([])
    setStatus('')
  }
  const addPending = () => {
    const title = newItem.trim()
    if (!title) return
    setPending((items) => [...items, { id: `p-${Date.now()}`, kind: 'note', title, meta: '刚添加 · 未处理' }])
    setNewItem('')
  }
  const confirmDraft = () => setStatus(`已确认 ${includedCount} 项工作草稿 · 待处理 ${pending.length} 项保持不变`)

  return {
    draft, pending, includedCount, open, attention, status, newItem,
    setOpen, setNewItem, openEditor, toggleItem, removeDraft, removePending,
    move, merge, mergeAll, addPending, confirmDraft,
    editorProps: {
      editorRef, draft, pending, includedCount, attention, status, newItem,
      onNewItem: setNewItem, onToggle: toggleItem, onRemoveDraft: removeDraft,
      onRemovePending: removePending, onMove: move, onMerge: merge, onMergeAll: mergeAll,
      onAddPending: addPending, onConfirm: confirmDraft, onCollapse: () => setOpen(false)
    }
  }
}

Object.assign(window, { KindIcon, ContextEditor, useContextEditor })
