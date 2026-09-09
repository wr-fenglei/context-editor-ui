function ToolIcon({ kind }) {
  if (kind === 'web') return <GlobeIcon/>
  if (kind === 'command') return <TerminalIcon/>
  return <ToolboxIcon/>
}

function ToolCall({ kind = 'tool', label, expandable = false, output, outputId }) {
  const content = <><ToolIcon kind={kind}/><span className="tool-label">{label}</span>{expandable ? <ChevronDownIcon className="tool-chevron"/> : null}</>
  if (expandable) return <details className="tool-disclosure" data-motion-disclosure="" data-od-id={`tool-call-${kind}`}>
    <summary className="tool-row">{content}</summary>
    <div className="disclosure-body"><div className="tool-disclosure-output"><ToolOutput outputId={outputId}>{output}</ToolOutput></div></div>
  </details>
  return <div className="tool-row" data-od-id={`tool-call-${kind}`}>{content}</div>
}

function ToolOutput({ children, outputId }) {
  return <pre className="tool-output" id={outputId} data-od-id="tool-output">{children}</pre>
}

Object.assign(window, { ToolCall, ToolOutput })
