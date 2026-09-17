const Button = React.forwardRef(function Button(props, ref) {
  // Babel transforms these scripts into a shared scope; avoid generated rest helpers
  const attributes = Object.assign({}, props)
  const tone = props.tone === undefined ? 'neutral' : props.tone
  const variant = props.variant === undefined ? 'soft' : props.variant
  const shape = props.shape === undefined ? 'rounded' : props.shape
  const type = props.type === undefined ? 'button' : props.type
  delete attributes.tone
  delete attributes.variant
  delete attributes.shape
  delete attributes.children
  attributes.ref = ref
  attributes.type = type
  attributes.className = `ds-button ${props.className || ''}`.trim()
  attributes['data-tone'] = tone
  attributes['data-variant'] = variant
  attributes['data-shape'] = shape
  return React.createElement('button', attributes, props.children)
})

Button.displayName = 'Button'
Object.assign(window, { Button })
