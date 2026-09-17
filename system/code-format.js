(() => {
  // Shared presentation for code, Markdown source and plain-text tool output
  // Tokens only describe syntax, never execution status or user-provided markup
  const textValue = (value) => Array.isArray(value) ? value.map(textValue).join('') : value == null ? '' : String(value)
  const keywords = new Set(['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'async', 'await', 'import', 'export', 'from', 'class', 'new', 'true', 'false', 'null', 'undefined', 'def', 'with', 'as', 'try', 'catch', 'throw'])
  const lexical = /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\/\/.*$|\b[A-Za-z_$][\w$]*\b/g

  function tokenize(value, { language = 'auto' } = {}) {
    const text = textValue(value)
    const tokens = []
    const append = (text, kind = '') => {
      if (!text) return
      const previous = tokens[tokens.length - 1]
      if (previous && previous.kind === kind) previous.text += text
      else tokens.push({ text, kind })
    }
    const inline = (line) => {
      let cursor = 0
      lexical.lastIndex = 0
      for (const match of line.matchAll(lexical)) {
        const token = match[0]
        const start = match.index
        append(line.slice(cursor, start))
        let kind = ''
        if (/^["'`]/.test(token)) kind = /^\s*:/.test(line.slice(start + token.length)) ? 'key' : 'string'
        else if (token.startsWith('//') && (start === 0 || /\s/.test(line[start - 1]))) kind = 'comment'
        else if (keywords.has(token)) kind = 'keyword'
        append(token, kind)
        cursor = start + token.length
      }
      append(line.slice(cursor))
    }

    for (const part of text.split(/(\r\n|\n|\r)/)) {
      if (/^(?:\r\n|\n|\r)$/.test(part)) { append(part); continue }
      if (language !== 'plain' && /^\s{0,3}#{1,6}\s+/.test(part)) { append(part, 'heading'); continue }
      if (language !== 'plain' && /^\s*(?:```|~~~)/.test(part)) { append(part, 'mark'); continue }
      const bullet = language !== 'plain' && part.match(/^(\s*(?:[-*+] |\d+[.)] )(?:\[[ xX]\] )?)(.*)$/)
      if (bullet) { append(bullet[1], 'mark'); inline(bullet[2]); continue }
      const key = part.match(/^(\s*)([\p{L}_$][\p{L}\p{N}_$ .\/-]*)(\s*(?::|→)\s*)(.*)$/u)
      if (key) {
        append(key[1]); append(key[2], 'key'); append(key[3]); inline(key[4]); continue
      }
      inline(part)
    }
    return tokens
  }

  function renderInto(element, text, options) {
    const doc = element.ownerDocument
    const code = doc.createElement('code')
    code.className = 'code-content'
    tokenize(text, options).forEach(({ text, kind }) => {
      if (!kind) { code.append(doc.createTextNode(text)); return }
      const span = doc.createElement('span')
      span.className = `code-syntax-${kind}`
      span.textContent = text
      code.append(span)
    })
    element.replaceChildren(code)
  }

  function react(text, options) {
    return window.React.createElement('code', { className: 'code-content' },
      tokenize(text, options).map(({ text, kind }, index) => kind
        ? window.React.createElement('span', { className: `code-syntax-${kind}`, key: index }, text)
        : text))
  }

  window.ContextEditorUICode = Object.freeze({ tokenize, renderInto, react })
})()
