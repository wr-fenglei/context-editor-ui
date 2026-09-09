function ToolIcon({ kind }) {
  if (kind === 'web') return <GlobeIcon/>
  if (kind === 'command') return <TerminalIcon/>
  return <ToolboxIcon/>
}

function ToolCall({ kind = 'tool', label, expandable = false }) {
  return (
    <div className="tool-row" data-od-id={`tool-call-${kind}`}>
      <ToolIcon kind={kind} />
      <span className="tool-label">{label}</span>
      {expandable ? <ChevronDownIcon className="tool-chevron"/> : null}
    </div>
  )
}

function ToolOutput({ children, outputId }) {
  return <pre className="tool-output" id={outputId} data-od-id="tool-output">{children}</pre>
}

Object.assign(window, { ToolCall, ToolOutput })
