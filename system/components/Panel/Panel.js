const Panel = React.forwardRef(function Panel({ header, footer, children, className = '', bodyClassName = '', ...props }, ref) {
  return (
    <section {...props} ref={ref} className={`ds-panel ${className}`.trim()}>
      {header != null && <header className="ds-panel-head">{header}</header>}
      <div className={`ds-panel-body ${bodyClassName}`.trim()}>{children}</div>
      {footer != null && <footer className="ds-panel-foot">{footer}</footer>}
    </section>
  )
})

Panel.displayName = 'Panel'
Object.assign(window, { Panel })
