function SessionSwitcher({ project, items = [], value, onChange, onCreate }) {
  const [open, setOpen] = React.useState(false)
  const rootRef = React.useRef(null)
  const triggerRef = React.useRef(null)
  const menuRef = React.useRef(null)
  const openingPosition = React.useRef('selected')
  const menuId = React.useId()
  const current = items.find(item => item.id === value)
  const currentTitle = current?.title || '选择会话'

  const close = (restoreFocus = false) => {
    setOpen(false)
    if (restoreFocus) triggerRef.current?.focus({ preventScroll: true })
  }
  const show = position => {
    openingPosition.current = position
    setOpen(true)
  }
  const menuItems = () => Array.from(menuRef.current?.querySelectorAll('[role="menuitemradio"], [role="menuitem"]') || [])

  React.useLayoutEffect(() => {
    if (!open) return
    const options = menuItems()
    const target = openingPosition.current === 'last' ? options[options.length - 1] :
      openingPosition.current === 'first' ? options[0] :
      menuRef.current?.querySelector('[aria-checked="true"]') || options[0]
    ;(target || menuRef.current)?.focus({ preventScroll: true })
  }, [open])

  React.useEffect(() => {
    if (!open) return
    const outside = event => {
      if (!rootRef.current?.contains(event.target)) close(false)
    }
    document.addEventListener('pointerdown', outside)
    return () => document.removeEventListener('pointerdown', outside)
  }, [open])

  const onMenuKeyDown = event => {
    if (event.key === 'Escape') {
      event.preventDefault()
      event.stopPropagation()
      close(true)
      return
    }
    if (event.key === 'Tab') {
      close(true)
      return
    }
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    const options = menuItems()
    if (!options.length) return
    const currentIndex = options.indexOf(document.activeElement)
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? options.length - 1 :
      (currentIndex + (event.key === 'ArrowDown' ? 1 : -1) + options.length) % options.length
    options[next].focus({ preventScroll: true })
  }

  return (
    <div className="ds-session-switcher" ref={rootRef}>
      {project && <><span className="ds-session-project" title={project}>{project}</span><span className="ds-session-separator" aria-hidden="true">/</span></>}
      <Button ref={triggerRef} type="button" className="ds-session-trigger" variant="ghost" tone="neutral" aria-haspopup="menu" aria-expanded={open} aria-controls={open ? menuId : undefined}
        aria-label={`切换会话, 当前: ${currentTitle}`} title={currentTitle}
        onClick={() => open ? close(true) : show('selected')}
        onKeyDown={event => {
          if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault()
            show(event.key === 'ArrowDown' ? 'first' : 'last')
          }
        }}>
        <span className="ds-session-current">{currentTitle}</span>
        <Icon name="chevron-down" className={open ? 'ds-session-chevron is-open' : 'ds-session-chevron'}/>
      </Button>
      {open && <Panel ref={menuRef} id={menuId} role="menu" aria-label={project ? `${project}的会话` : '选择会话'} tabIndex={-1}
        className="ds-session-menu" bodyClassName="ds-session-menu-body" onKeyDown={onMenuKeyDown}>
        {project && <p className="ds-session-menu-label" role="presentation">{project}</p>}
        {items.map(item => <button type="button" role="menuitemradio" aria-checked={item.id === value} tabIndex={-1} key={item.id}
          className="ds-session-option" onClick={() => { close(true); onChange?.(item.id) }}>
          <span>{item.title}</span><span className="ds-session-check" aria-hidden="true">{item.id === value && <Icon name="check"/>}</span>
        </button>)}
        {!items.length && <p className="ds-session-menu-label" role="presentation">暂无会话</p>}
        {onCreate && <><div className="ds-session-divider" role="separator"/><button type="button" role="menuitem" tabIndex={-1} className="ds-session-option ds-session-create"
          onClick={() => { close(true); onCreate() }}><Icon name="square-pen"/><span>新建对话</span></button></>}
      </Panel>}
    </div>
  )
}

Object.assign(window, { SessionSwitcher })
