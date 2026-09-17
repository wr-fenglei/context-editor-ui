function SubagentCall({ name, task, status = 'started working', tone }) {
  const label = name || task || '子代理'
  const identity = ContextEditorUIIcons.agentIdentity(label, tone)
  const statusLabel = { 'started working': '开始处理', working: '处理中', finished: '已完成' }[status] || status
  return (
    <div className="subagent-line" data-tone={identity.tone} data-agent-name={label} data-od-id={`subagent-${status.replaceAll(' ', '-')}`}>
      <img className="agent-mark" src={identity.src} alt="" aria-hidden="true"/>
      <span className="agent-copy"><span className="agent-name">{label}</span>{' '}<span className="agent-status">{statusLabel}</span></span>
    </div>
  )
}

Object.assign(window, { SubagentCall })
