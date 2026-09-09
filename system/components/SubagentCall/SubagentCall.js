function SubagentCall({ task, status = 'started working', tone = 'green' }) {
  return (
    <div className="subagent-line" data-tone={tone} data-od-id={`subagent-${status.replaceAll(' ', '-')}`}>
      <span className="agent-pill"><AgentIcon className="agent-mark"/><span>{task}</span></span>
      <span className="agent-status">{{ 'started working': '开始处理', working: '处理中', finished: '已完成' }[status] || status}</span>
    </div>
  )
}

Object.assign(window, { SubagentCall })
