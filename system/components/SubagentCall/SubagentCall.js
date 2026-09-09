function SubagentCall({ task, status = 'started working', tone = 'green' }) {
  return (
    <div className="subagent-line" data-tone={tone} data-od-id={`subagent-${status.replaceAll(' ', '-')}`}>
      <span className="agent-pill"><span className="agent-mark" aria-hidden="true"><span/><span/><span/><span/></span><span>{task}</span></span>
      <span className="agent-status">{status}</span>
    </div>
  )
}

Object.assign(window, { SubagentCall })
