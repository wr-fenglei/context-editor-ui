// Generated PNG atlas, normalized slice bounds in assets/icons/atlas.json
(() => {
  const atlas = new URL('assets/icons/atlas.png', document.currentScript.src).href
  const width = 1374, height = 1145
  const frames = {
  "copy": [
    48.0,
    65.5,
    162
  ],
  "thumbs-up": [
    272.0,
    62.0,
    165
  ],
  "thumbs-down": [
    493.0,
    68.0,
    165
  ],
  "git-branch": [
    713.0,
    67.5,
    166
  ],
  "plus": [
    947.0,
    74.0,
    146
  ],
  "shield-check": [
    1160.0,
    60.0,
    172
  ],
  "mic": [
    39.5,
    274.0,
    179
  ],
  "arrow-up": [
    280.0,
    286.0,
    148
  ],
  "square-pen": [
    494.0,
    282.0,
    164
  ],
  "file-text": [
    711.0,
    277.0,
    174
  ],
  "text-cursor-input": [
    935.0,
    278.5,
    170
  ],
  "target": [
    1158.5,
    277.0,
    174
  ],
  "sticky-note": [
    34.0,
    495.0,
    177
  ],
  "trash-2": [
    266.0,
    495.0,
    173
  ],
  "check": [
    498.0,
    503.5,
    165
  ],
  "chevron-down": [
    720.0,
    511.0,
    155
  ],
  "chevron-right": [
    952.5,
    517.0,
    136
  ],
  "globe": [
    1157.0,
    494.5,
    178
  ],
  "square-terminal": [
    40.0,
    716.0,
    178
  ],
  "blocks": [
    269.0,
    715.5,
    170
  ],
  "code-xml": [
    483.0,
    714.5,
    179
  ],
  "bot": [
    706.0,
    717.5,
    180
  ],
  "palette": [
    936.0,
    715.0,
    175
  ],
  "cpu": [
    1156.5,
    714.0,
    179
  ],
  "book-open": [
    41.0,
    929.0,
    176
  ],
  "plane": [
    259.0,
    923.5,
    184
  ],
  "dumbbell": [
    482.0,
    925.0,
    182
  ],
  "music-2": [
    714.5,
    935.0,
    152
  ],
  "arrow-down": [
    944.0,
    943.0,
    151
  ],
  "share": [
    1163.0,
    927.5,
    166
  ]
}
  const style = (name, size = 16) => {
    const [x, y, side] = frames[name] || frames['square-pen']
    return {
      '--icon-size': `${size}px`,
      '--icon-image': `url("${atlas}")`,
      '--icon-mask-size': `${width / side * 100}% ${height / side * 100}%`,
      '--icon-mask-position': `${x / (width - side) * 100}% ${y / (height - side) * 100}%`
    }
  }
  const create = (name, { className = '', size = 16 } = {}) => {
    const icon = document.createElement('span')
    icon.className = `ui-icon ${className}`
    icon.dataset.icon = name
    icon.setAttribute('aria-hidden', 'true')
    Object.entries(style(name, size)).forEach(([key, value]) => icon.style.setProperty(key, value))
    return icon
  }
  window.ContextEditorUIIcons = { frames, style, create, atlas }
})()
