function MotionPresence({ show, children, mode = 'collapse', as: Tag = 'div', className = '', appear = false, ...props }) {
  const [present, setPresent] = React.useState(show)
  const ref = React.useRef(null)
  const initial = React.useRef(true)
  const version = React.useRef(0)
  React.useLayoutEffect(() => {
    const element = ref.current
    const first = initial.current
    initial.current = false
    if (!element) return
    const request = ++version.current
    element.inert = !show
    if (show) setPresent(true)
    if (first && show && !appear) return
    ContextEditorUIMotion.reveal(element, show, mode).then((completed) => {
      if (completed && request === version.current && !show) setPresent(false)
    })
  }, [show])
  React.useLayoutEffect(() => () => { version.current++; ContextEditorUIMotion.stop(ref.current) }, [])
  if (!show && !present) return null
  return <Tag {...props} ref={ref} className={`motion-presence ${className}`} data-motion-state={show ? 'open' : 'closing'} aria-hidden={!show ? true : undefined}>{children}</Tag>
}
Object.assign(window, { MotionPresence })
