function CopyButton({ targetId, label, odId }) {
  return (
    <span className="copy-control">
      <button className="icon-button compact" type="button" aria-label={label} data-copy-target={targetId} data-od-id={odId}>
        <CopyIcon className="copy-default-icon"/><CheckIcon className="copy-success-icon"/>
      </button>
    </span>
  )
}

function MessageBubble({ children, time = '13:40', messageId = 'source-user-message', showMeta = false }) {
  return (
    <div data-od-id="user-message-component">
      <div className="message-row is-user"><div className="user-message" id={messageId}>{children}</div></div>
      <div className={`user-meta${showMeta ? ' is-visible' : ''}`}><span>{time}</span><CopyButton targetId={messageId} label="复制用户消息" odId="copy-user-message"/></div>
    </div>
  )
}

function AssistantMessage({ children, messageId = 'assistant-message' }) {
  return <div className="assistant-message" id={messageId} data-od-id="assistant-message-component">{children}</div>
}

function WorkedSummary({ duration = '1 分 38 秒', children, open = true }) {
  return <details className="worked" open={open} data-od-id="worked-summary"><summary>已处理 {duration}</summary><div className="work-log">{children}</div></details>
}

function CodeObject({ label, codeId, children }) {
  return (
    <div className="code-object" data-od-id="code-object">
      <div className="code-head"><span className="code-label"><span aria-hidden="true">‹/›</span>{label}</span><div className="code-actions"><CopyButton targetId={codeId} label="复制代码" odId="copy-code-action"/></div></div>
      <pre id={codeId}>{children}</pre>
    </div>
  )
}

function MessageActions({ targetId = 'assistant-message', onEditContext }) {
  return (
    <div className="assistant-actions" data-od-id="assistant-actions">
      <CopyButton targetId={targetId} label="复制回复" odId="copy-response-action"/>
      <button className="icon-button compact" type="button" aria-label="有帮助" data-status-message="已记录为有帮助" data-od-id="positive-action"><PositiveIcon/></button>
      <button className="icon-button compact" type="button" aria-label="没有帮助" data-status-message="已记录为没有帮助" data-od-id="negative-action"><NegativeIcon/></button>
      <button className="icon-button compact" type="button" aria-label="从此处分支" data-status-message="已创建分支入口" data-od-id="branch-action"><BranchIcon/></button>
      {onEditContext ? <button className="icon-button compact" type="button" aria-label="编辑上下文" aria-haspopup="true" onClick={onEditContext} data-od-id="edit-context-action"><ContextIcon/></button> : null}
    </div>
  )
}

Object.assign(window, { CopyButton, MessageBubble, AssistantMessage, WorkedSummary, CodeObject, MessageActions })
