const agentTones = ['rose', 'amber', 'green', 'blue']
function SubagentCall({ name, task, status = 'started working', tone }) {
  const label = name || task || '子代理'
  const identityTone = tone || agentTones[Array.from(label).reduce((sum, char) => sum + char.codePointAt(0), 0) % agentTones.length]
  const statusLabel = { 'started working': '开始处理', working: '处理中', finished: '已完成' }[status] || status
  return (
    <div className="subagent-line" data-tone={identityTone} data-agent-name={label} data-od-id={`subagent-${status.replaceAll(' ', '-')}`}>
      <AgentIcon className="agent-mark"/>
      <span className="agent-copy"><span className="agent-name">{label}</span>{' '}<span className="agent-status">{statusLabel}</span></span>
    </div>
  )
}

Object.assign(window, { SubagentCall })
