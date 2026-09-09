function Composer({ onSend, onOpenContextEditor, onToggleContextEditor, includedCount = 0, pendingCount = 0, editorOpen = false }) {
  const interfaceCopy = window.ContextEditorUIConfig.components.composer.interface
  const menuCopy = window.ContextEditorUIConfig.components.composer.menus
  const approvalMenu = window.ContextEditorUIConfig.components.composer.approvalMenu
  const [selectedApproval, setSelectedApproval] = React.useState(approvalMenu.initialValue)
  const currentApproval = approvalMenu.items.find((item) => item.value === selectedApproval)
  const [approvalHelpOpen, setApprovalHelpOpen] = React.useState(false)
  const modelMenu = window.ContextEditorUIConfig.components.composer.modelMenu
  const [selectedModel, setSelectedModel] = React.useState(modelMenu.initialValue)
  const currentModel = modelMenu.items.find((item) => item.value === selectedModel)
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
    setApprovalHelpOpen(false)
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

  const selectModel = (value) => {
    setSelectedModel(value)
    closeMenus(true)
  }
  const selectApproval = (value) => {
    setSelectedApproval(value)
    closeMenus(true)
  }
  const onChoiceKeyDown = (event) => {
    const keys = ['ArrowDown', 'ArrowUp', 'Home', 'End']
    if (!keys.includes(event.key)) return
    event.preventDefault()
    const options = Array.from(event.currentTarget.querySelectorAll('[role="menuitemradio"]'))
    const index = options.indexOf(document.activeElement)
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? options.length - 1 :
      (index + (event.key === 'ArrowDown' ? 1 : -1) + options.length) % options.length
    options[next]?.focus()
  }
  React.useEffect(() => {
    if (modelOpen) rootRef.current?.querySelector('.model-option[aria-checked="true"]')?.focus({ preventScroll: true })
  }, [modelOpen])

  React.useEffect(() => {
    if (approvalOpen) rootRef.current?.querySelector('.is-approval [aria-checked="true"]')?.focus({ preventScroll: true })
  }, [approvalOpen])

  const ready = value.trim().length > 0
  const send = () => { const text = value.trim(); if (!text) return; onSend?.(text); setValue('') }
  const toggle = (setter, current) => { closeMenus(false); setter(!current) }

  return (
    <div className="composer" data-od-id="conversation-composer" ref={rootRef}>
      <div className="context-accessory-row">
        <button className="context-accessory" type="button" aria-expanded={editorOpen} onClick={() => { closeMenus(false); (onToggleContextEditor || onOpenContextEditor)?.() }} data-od-id="composer-context-accessory">
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
          <button ref={approvalTriggerRef} className={`mode-button${currentApproval.danger ? ' is-danger' : ''}`} id="approval-trigger" type="button" aria-haspopup="menu" aria-expanded={approvalOpen} onClick={() => toggle(setApprovalOpen, approvalOpen)} data-od-id="approval-trigger"><ShieldIcon/><span>{currentApproval.label}</span></button>
        </div>
        <div className="composer-right">
          <button ref={modelTriggerRef} className="model-button" id="model-trigger" title={currentModel.label} type="button" aria-haspopup="menu" aria-expanded={modelOpen} onClick={() => toggle(setModelOpen, modelOpen)} data-od-id="model-trigger"><span className="model-name">{currentModel.label}</span><span className="effort">{interfaceCopy.effort}</span><ChevronDownIcon className="model-chevron"/></button>
          <button className="icon-button" type="button" aria-label="语音输入" data-od-id="microphone-button"><MicIcon/></button>
          <button className={`send-button${ready ? ' is-ready' : ''}`} type="button" aria-label="发送消息" disabled={!ready} onClick={send} data-od-id="send-button"><SendIcon/></button>
        </div>

      <MotionPresence show={addOpen} mode="popover" className="popover is-add" role="menu" aria-label="添加内容" data-od-id="add-menu">
          <div className="popover-title">{menuCopy.add}</div>
          <button className="menu-row" type="button" role="menuitem" data-od-id="add-files"><PlusIcon/><span>{menuCopy.files}</span><span/></button>
          <button className="menu-row" type="button" role="menuitem" data-od-id="add-goal"><ShieldIcon/><span><strong>{menuCopy.goal}</strong><small>{menuCopy.goalDescription}</small></span><span/></button>
          <button className="menu-row" type="button" role="menuitem" data-od-id="add-plan"><ShieldIcon/><span><strong>{menuCopy.plan}</strong><small>{menuCopy.planDescription}</small></span><span/></button>
          <div className="menu-group-label">{menuCopy.plugins}</div>
          <button className="menu-row" type="button" role="menuitem" onClick={() => { closeMenus(false); onOpenContextEditor?.() }} data-od-id="add-context-editor"><ContextIcon/><span><strong>{menuCopy.contextEditor}</strong><small>整理当前会话上下文</small></span><span/></button>
        </MotionPresence>

      <MotionPresence show={approvalOpen} mode="popover" className="popover is-approval" role="menu" aria-label="操作批准方式" data-od-id="approval-menu" onKeyDown={onChoiceKeyDown}>
          <div className="popover-title"><span>{approvalMenu.title}</span><button className="menu-link" type="button" aria-expanded={approvalHelpOpen} onClick={() => setApprovalHelpOpen((open) => !open)}>{menuCopy.learnMore}</button></div>
          <MotionPresence show={approvalHelpOpen}><p className="approval-help">{approvalMenu.help}</p></MotionPresence>
          {approvalMenu.items.map((item) => (
            <button key={item.value} className={`menu-row${item.danger ? ' is-danger' : ''}`} type="button" role="menuitemradio"
                    aria-checked={selectedApproval === item.value} onClick={() => selectApproval(item.value)} data-od-id={`approval-${item.value}`}>
              <ShieldIcon/><span><strong>{item.label}</strong><small>{item.description}</small></span>
              <span className="approval-check" aria-hidden="true">{selectedApproval === item.value ? <CheckIcon/> : null}</span>
            </button>
          ))}
        </MotionPresence>

      <MotionPresence show={modelOpen} mode="popover" className="popover is-model" role="menu" aria-label={modelMenu.title} data-od-id="model-menu" onKeyDown={onChoiceKeyDown}>
          <div className="model-menu-title">{modelMenu.title}</div>
          {modelMenu.items.map((item) => (
            <button key={item.value} className="model-option" type="button" role="menuitemradio" aria-checked={selectedModel === item.value}
                    onClick={() => selectModel(item.value)} data-od-id={`model-option-${item.value}`}>
              <span className="model-option-copy"><span>{item.label}</span>{item.description ? <small>{item.description}</small> : null}</span>
              <span className="model-option-check" aria-hidden="true">{selectedModel === item.value ? <CheckIcon/> : null}</span>
            </button>
          ))}
        </MotionPresence>
      </div>
    </div>
  )
}

Object.assign(window, { Composer })
