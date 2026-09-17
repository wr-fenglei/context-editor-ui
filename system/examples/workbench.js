// The example owns session data only; interaction and presentation live in library components
function WorkbenchSession({ session, active }) {
  const demo = ContextEditorUIConfig.workbenchDemo
  const inputRef = React.useRef(null)
  const contextTriggerRef = React.useRef(null)
  const documentTriggerRef = React.useRef(null)
  const sentEndRef = React.useRef(null)
  const editor = useContextEditor(session.empty ? [] : demo.draft, session.empty ? [] : demo.pending, { initialOpen: false, triggerRef: contextTriggerRef })
  const [draft, setDraft] = React.useState('')
  const [items, setItems] = React.useState(session.items || [])
  const [annotation, setAnnotation] = React.useState(null)
  const [reviewDirty, setReviewDirty] = React.useState(false)
  const [messages, setMessages] = React.useState([])
  const [documentOpen, setDocumentOpen] = React.useState(!session.empty)
  const [model, setModel] = React.useState(ContextEditorUIConfig.components.composer.modelMenu.initialValue)
  const [approval, setApproval] = React.useState(ContextEditorUIConfig.components.composer.approvalMenu.initialValue)
  const focusInput = () => requestAnimationFrame(() => { inputRef.current?.focus({ preventScroll: true }); inputRef.current?.closest('.composer')?.scrollIntoView({ block: 'nearest', behavior: 'instant' }) })

  const changeItems = next => {
    setItems(next)
    setAnnotation(current => current ? { ...current, text: next.find(item => item.id === current.itemId)?.text || current.text } : null)
  }
  const discuss = (item, index) => {
    if (annotationIsDirty(annotation)) {
      setAnnotation(current => ({ ...current, open: true, status: '先保存或取消当前备注', pinned: true }))
      return
    }
    setAnnotation(current => current?.itemId === item.id ? { ...current, open: false } : { itemId: item.id, index, text: item.text, comment: '', open: false, editing: false })
    focusInput()
  }
  const insertReview = markdown => { setDraft(current => current.trim() ? `${current}\n\n${markdown}` : markdown); focusInput() }
  const beforeSend = () => {
    if (annotationIsDirty(annotation)) {
      setAnnotation(current => ({ ...current, open: true, status: '备注尚未保存, 保存或取消后再发送', pinned: true }))
      return false
    }
    return true
  }
  const send = (text, choices) => {
    const quote = annotation ? { index: annotation.index, text: annotation.text, comment: annotation.comment || '' } : null
    setMessages(current => [...current, { id: `${session.id}-${current.length}`, text, quote, context: editor.confirmed.map(item => ({ ...item })), ...choices }])
    setAnnotation(null)
  }
  React.useEffect(() => {
    if (!active || !messages.length) return
    const frame = requestAnimationFrame(() => { sentEndRef.current?.scrollIntoView({ block: 'nearest', behavior: 'instant' }); inputRef.current?.focus({ preventScroll: true }) })
    return () => cancelAnimationFrame(frame)
  }, [messages.length])
  React.useEffect(() => { if (active && session.empty) focusInput() }, [active])

  const openDocument = () => {
    setDocumentOpen(true)
    requestAnimationFrame(() => document.getElementById(`${session.id}-review-region`)?.scrollIntoView({ block: 'nearest', behavior: 'instant' }))
  }
  const closeDocument = () => { setDocumentOpen(false); documentTriggerRef.current?.focus({ preventScroll: true }) }
  const state = reviewDirty ? '文档待保存' : editor.dirty ? '草稿待确认' : '已保存'
  return <section className="wb-session" hidden={!active} data-session-id={session.id} data-active={active}>
    <div className="wb-session-status"><span className="wb-status" role="status">{state} · 上下文 {editor.confirmedCount} 项</span><Button ref={contextTriggerRef} type="button" tone="neutral" variant="ghost" aria-expanded={editor.open} onClick={editor.toggleEditor} data-testid="context-open"><ContextIcon/>上下文</Button></div>
    <div className="wb-layout" data-document-open={documentOpen}>
      <main className="wb-conversation" aria-label="对话内容">
        {!session.empty && <>
          <p className="time-divider">今天</p>
          <MessageBubble messageId={`${session.id}-prompt`} showMeta time="14:32">{session.prompt}</MessageBubble>
          <article className="wb-response">
            <WorkedSummary duration="23 秒" open={false}>
              <SubagentCall name="项目梳理员" status="finished"/>
              <ToolCall kind="web" label="已阅读组件与样式"/>
              <ToolCall kind="command" label="已检查交互状态" expandable output={'$ rg -n "message|composer"\n已检查消息与输入组件'} outputId={`${session.id}-command`}/>
            </WorkedSummary>
            <div className="wb-team"><SubagentCall name="界面检查员" status="finished" tone="blue"/><SubagentCall name="交互核对员" status="finished" tone="lavender"/></div>
            <AssistantMessage messageId={`${session.id}-answer`} title={session.heading}>
              <p>{session.intro}</p>
              <WorkedSummary label="检查依据" open={false}>{session.findings.map(([title, text]) => <section key={title}><h3>{title}</h3><p>{text}</p></section>)}</WorkedSummary>
            </AssistantMessage>
            <div className="wb-links"><button className="ds-link-button" type="button" onClick={editor.openEditor}><FileIcon/>Composer.js</button><button className="ds-link-button" type="button" onClick={editor.openEditor}><FileIcon/>MessageBubble.js</button></div>
            <button className="wb-document-link ds-link-button" ref={documentTriggerRef} type="button" aria-expanded={documentOpen} onClick={openDocument}><FileIcon/>{session.output}<Icon name="arrow-up-right"/></button>
            <MessageActions targetId={`${session.id}-answer`} onEditContext={editor.openEditor}/>
          </article>
        </>}
        {session.empty && !messages.length && <p className="wb-empty">开始新对话</p>}
        <section className="wb-sent" aria-label="已发送消息">{messages.map(message => <article className="wb-sent-turn" key={message.id} data-testid="sent-message">
          <MessageBubble messageId={message.id} time={`刚刚 · 携带 ${message.context.length} 项上下文 · ${message.modelLabel}`} showMeta>
            {message.quote && <span className="message-quote">第 {message.quote.index + 1} 项 · {message.quote.text}{message.quote.comment ? `\n备注: ${message.quote.comment}` : ''}</span>}
            {message.text}
          </MessageBubble>
        </article>)}</section><div ref={sentEndRef}/>
        <div className="wb-composer-slot"><Composer idPrefix={session.id} active={active} inputRef={inputRef} value={draft} onValueChange={setDraft} placeholder="补充意见, 或选择一条进行讨论..." includedCount={editor.confirmedCount} pendingCount={editor.pending.length} draftDirty={editor.dirty} editorOpen={editor.open} onOpenContextEditor={editor.openEditor} onToggleContextEditor={editor.toggleEditor} modelValue={model} onModelChange={setModel} approvalValue={approval} onApprovalChange={setApproval} onBeforeSend={beforeSend} onSend={send} accessory={<AnnotationPopover annotation={annotation} onChange={setAnnotation} active={active}/>}/><ComposerHint/></div>
        <MotionPresence show={editor.open}><ContextEditor {...editor.editorProps}/></MotionPresence>
      </main>
      {!session.empty && <aside id={`${session.id}-review-region`} className="wb-review-slot" hidden={!documentOpen} aria-label="产出审阅">
        <ReviewPanel title={session.output} intro="核对项目, 编辑内容或添加备注" items={items} onChange={changeItems} onDiscuss={discuss} onInsert={insertReview} onClose={closeDocument} onEditingChange={setReviewDirty} footer={<SubagentCall name="界面检查员" tone="blue" status="整理 · 当前会话"/>}/>
      </aside>}
    </div>
  </section>
}

function Workbench() {
  const demo = ContextEditorUIConfig.workbenchDemo
  const [sessions, setSessions] = React.useState(demo.sessions)
  const [active, setActive] = React.useState(demo.sessions[0].id)
  const serial = React.useRef(0)
  const create = () => {
    const id = `new-${++serial.current}`
    setSessions(current => [...current, { id, title: `新对话 ${serial.current}`, empty: true, items: [] }])
    setActive(id)
  }
  return <Panel className="wb-window" bodyClassName="wb-body" data-testid="review-workspace" aria-label="行内工作台" header={<div className="wb-top"><SessionSwitcher project={demo.project} items={sessions} value={active} onChange={setActive} onCreate={create}/></div>}>
    {sessions.map(session => <WorkbenchSession key={session.id} session={session} active={active === session.id}/>)}
  </Panel>
}
ReactDOM.createRoot(document.getElementById('workbench-root')).render(<Workbench/>)
