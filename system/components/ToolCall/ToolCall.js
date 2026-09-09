function ToolIcon({ kind }) {
  if (kind === 'web') return <Icon strokeWidth={1.8}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></Icon>
  if (kind === 'command') return <Icon strokeWidth={1.8}><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M7 10l2 2-2 2M12 14h5"/></Icon>
  return <Icon strokeWidth={1.8}><path d="M14 6a4 4 0 0 0-5 5L3 17l4 4 6-6a4 4 0 0 0 5-5l-3 3-3-3 2-4z"/></Icon>
}

function ToolCall({ kind = 'tool', label, expandable = false }) {
  return (
    <div className="tool-row" data-od-id={`tool-call-${kind}`}>
      <ToolIcon kind={kind} />
      <span className="tool-label">{label}</span>
      {expandable ? <span className="tool-chevron" aria-hidden="true" /> : null}
    </div>
  )
}

function ToolOutput({ children, outputId }) {
  return <pre className="tool-output" id={outputId} data-od-id="tool-output">{children}</pre>
}

Object.assign(window, { ToolCall, ToolOutput })
