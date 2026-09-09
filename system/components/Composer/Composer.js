function Composer({ onSend, onOpenContextEditor, includedCount = 0, pendingCount = 0, editorOpen = false }) {
  const interfaceCopy = window.ContextEditorUIConfig.components.composer.interface
  const [value, setValue] = React.useState('')
  const [addOpen, setAddOpen] = React.useState(false)
  const [approvalOpen, setApprovalOpen] = React.useState(false)
  const [modelOpen, setModelOpen] = React.useState(false)
  const rootRef = React.useRef(null)
  const textareaRef = React.useRef(null)
  const addTriggerRef = React.useRef(null)
  const approvalTriggerRef = React.useRef(null)
  const modelTriggerRef = React.useRef(null)

  const closeMenus = (returnFocus) => {
    const openTrigger = addOpen ? addTriggerRef.current : approvalOpen ? approvalTriggerRef.current : modelOpen ? modelTriggerRef.current : null
    setAddOpen(false); setApprovalOpen(false); setModelOpen(false)
    if (returnFocus && openTrigger) openTrigger.focus()
  }

  React.useEffect(() => {
    const onDocClick = (event) => { if (rootRef.current && !rootRef.current.contains(event.target)) closeMenus(false) }
    const onKey = (event) => { if (event.key === 'Escape') closeMenus(true) }
    document.addEventListener('click', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('click', onDocClick); document.removeEventListener('keydown', onKey) }
  }, [addOpen, approvalOpen, modelOpen])

  React.useEffect(() => {
    const element = textareaRef.current
    if (!element) return
    element.style.height = 'auto'
    element.style.height = `${Math.min(element.scrollHeight, window.innerHeight * 0.42)}px`
  }, [value])

  const ready = value.trim().length > 0
  const send = () => { const text = value.trim(); if (!text) return; onSend?.(text); setValue('') }
  const toggle = (setter, current) => { closeMenus(false); setter(!current) }

  return (
    <div className="composer" data-od-id="conversation-composer" ref={rootRef}>
      <div className="context-accessory-row">
        <button className="context-accessory" type="button" aria-expanded={editorOpen} onClick={() => { closeMenus(false); onOpenContextEditor?.() }} data-od-id="composer-context-accessory">
          <ContextIcon/>
          <span className="context-accessory-label">上下文</span>
          <span className="context-accessory-count"><b>{includedCount}</b> 已确认</span>
          <span className="context-accessory-sep" aria-hidden="true">·</span>
          <span className="context-accessory-count"><b>{pendingCount}</b> 待处理</span>
          <span className={`context-accessory-chevron${editorOpen ? ' is-open' : ''}`} aria-hidden="true"><ChevronDownIcon/></span>
        </button>
      </div>

      <textarea ref={textareaRef} rows="1" placeholder={interfaceCopy.placeholder} aria-label="消息输入" value={value}
                onChange={(event) => setValue(event.target.value)}
                onKeyDown={(event) => { if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); send() } }} data-od-id="composer-input"/>

      <div className="composer-bar">
        <div className="composer-left">
          <button ref={addTriggerRef} className="icon-button" id="add-trigger" type="button" aria-label="添加" aria-haspopup="menu" aria-expanded={addOpen} onClick={() => toggle(setAddOpen, addOpen)} data-od-id="add-trigger"><ComposerPlusIcon/></button>
          <button ref={approvalTriggerRef} className="mode-button" id="approval-trigger" type="button" aria-haspopup="menu" aria-expanded={approvalOpen} onClick={() => toggle(setApprovalOpen, approvalOpen)} data-od-id="approval-trigger"><ShieldIcon/><span>{interfaceCopy.approval}</span></button>
        </div>
        <div className="composer-right">
          <button ref={modelTriggerRef} className="model-button" id="model-trigger" type="button" aria-haspopup="menu" aria-expanded={modelOpen} onClick={() => toggle(setModelOpen, modelOpen)} data-od-id="model-trigger"><span className="model-name">{interfaceCopy.model}</span><span className="effort">{interfaceCopy.effort}</span><span aria-hidden="true">⌄</span></button>
          <button className="icon-button" type="button" aria-label="语音输入" data-od-id="microphone-button"><MicIcon/></button>
          <button className={`send-button${ready ? ' is-ready' : ''}`} type="button" aria-label="发送消息" onClick={send} data-od-id="send-button"><SendIcon/></button>
        </div>
      </div>

      {addOpen ? (
        <div className="popover is-add" role="menu" aria-label="添加内容" data-od-id="add-menu">
          <div className="popover-title">Add</div>
          <button className="menu-row" type="button" role="menuitem" data-od-id="add-files"><PlusIcon/><span>Files and folders</span><span/></button>
          <button className="menu-row" type="button" role="menuitem" data-od-id="add-goal"><ShieldIcon/><span><strong>Goal</strong><small>Set a goal to keep pursuing</small></span><span/></button>
          <button className="menu-row" type="button" role="menuitem" data-od-id="add-plan"><ShieldIcon/><span><strong>Plan mode</strong><small>Turn plan mode on</small></span><span/></button>
          <div className="menu-group-label">Plugins</div>
          <button className="menu-row" type="button" role="menuitem" onClick={() => { closeMenus(false); onOpenContextEditor?.() }} data-od-id="add-context-editor"><ContextIcon/><span><strong>Context Editor</strong><small>整理当前会话上下文</small></span><span/></button>
        </div>
      ) : null}

      {approvalOpen ? (
        <div className="popover is-approval" role="menu" aria-label="操作批准方式" data-od-id="approval-menu">
          <div className="popover-title"><span>How should assistant actions be approved?</span><span className="menu-link">Learn more</span></div>
          <button className="menu-row" type="button" role="menuitem" data-od-id="approval-ask"><ShieldIcon/><span><strong>Ask for approval</strong><small>Always ask to edit external files and use the internet</small></span><span/></button>
          <button className="menu-row" type="button" role="menuitem" aria-selected="true" data-od-id="approval-auto"><ShieldIcon/><span><strong>{interfaceCopy.approval}</strong><small>Only ask for actions detected as potentially unsafe</small></span><span>✓</span></button>
          <button className="menu-row is-danger" type="button" role="menuitem" data-od-id="approval-full"><ShieldIcon/><span><strong>Full access</strong><small>Unrestricted access to the internet and any file on your computer</small></span><span/></button>
        </div>
      ) : null}

      {modelOpen ? (
        <div className="popover is-model" role="menu" aria-label="模型设置" data-od-id="model-menu">
          <button className="menu-row" type="button" role="menuitem" data-od-id="model-row"><span/><span>Model</span><span className="menu-value">{interfaceCopy.model}&nbsp; ›</span></button>
          <button className="menu-row" type="button" role="menuitem" data-od-id="effort-row"><span/><span>Effort</span><span className="menu-value">{interfaceCopy.effort}&nbsp; ›</span></button>
          <button className="menu-row" type="button" role="menuitem" data-od-id="speed-row"><span/><span>Speed</span><span className="menu-value">Standard&nbsp; ›</span></button>
          <div className="menu-divider"/>
          <button className="menu-row" type="button" role="menuitem" data-od-id="advanced-row"><span/><span>Advanced</span><span className="menu-value">⌃</span></button>
        </div>
      ) : null}
    </div>
  )
}

Object.assign(window, { Composer })
