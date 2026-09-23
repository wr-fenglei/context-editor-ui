'use strict';
(() => {
  const $ = id => document.getElementById(id);
  const screen = $('screen');
  const sheet = $('note-sheet');
  const reader = $('reader');
  const input = $('note-input');
  const initialNote = $('note-copy').textContent;
  let savedNote = initialNote;
  let draft = initialNote;
  let resolved = false;
  let mode = 'note';
  let detent = 'medium';
  let returnFocus = null;
  let isComposing = false;
  let toastTimer;
  let pointerStart = null;
  let didDrag = false;

  const sourceData = [
    { name: 'Composer.js', description: '关注输入框从一行增加到多行时的高度变化, 让消息区保留足够的底部空间, 发送后在布局稳定时更新滚动位置' },
    { name: 'MessageBubble.js', description: '关注回复正文、复制反馈和操作按钮的显示边界, 确保它们随消息内容排版, 不越过消息区域' }
  ];
  const closeIcon = '<svg class="icon" aria-hidden="true"><use href="#close"/></svg>';
  const hasDraft = () => draft !== savedNote;

  function toast(message) {
    clearTimeout(toastTimer);
    $('toast').textContent = message;
    $('toast').classList.add('visible');
    toastTimer = setTimeout(() => $('toast').classList.remove('visible'), 2200);
  }
  function syncPreview(value) {
    document.querySelectorAll('[data-preview]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.preview === value));
    });
  }
  function setDetent(value) {
    detent = value;
    sheet.dataset.detent = value;
    screen.style.setProperty('--sheet-reserve', `${screen.clientHeight * (value === 'large' ? .9 : .55) + 60}px`);
    sheet.style.height = '';
    $('grabber').setAttribute('aria-expanded', String(value === 'large'));
    $('grabber').setAttribute('aria-label', value === 'large' ? '收起为半屏备注面板' : '展开备注面板');
  }
  function updateSave() {
    $('sheet-edit').disabled = mode === 'edit' && (isComposing || !draft.trim() || draft.trim() === savedNote);
    $('draft-message').textContent = hasDraft() ? '草稿尚未保存, 收起后可继续编辑' : '修改保留在当前小样中';
  }
  function syncNote() {
    $('note-copy').textContent = savedNote;
    $('note-status').textContent = resolved ? '1 条备注已处理' : '1 条待处理备注';
    $('sheet-state').textContent = resolved ? '已处理' : '待处理';
    $('sheet-state').dataset.resolved = String(resolved);
    $('note-button-label').textContent = hasDraft() ? '备注 · 有草稿' : '1 条备注';
    $('sheet-resolve').querySelector('span').textContent = resolved ? '恢复为待处理' : '标为已处理';
    $('resolve-note').setAttribute('aria-pressed', String(resolved));
    $('resolve-note').setAttribute('aria-label', resolved ? '恢复为待处理' : '标为已处理');
    screen.classList.toggle('resolved', resolved);
  }
  function showDocument() {
    $('document-view').hidden = false;
    $('library-view').hidden = true;
    $('nav-title').textContent = '审阅';
    $('back-button').disabled = false;
    if (sheet.hidden) $('bottom-tools').hidden = false;
  }
  function renderMode(nextMode, sourceIndex) {
    mode = nextMode;
    sheet.dataset.mode = mode;
    $('note-form').hidden = mode !== 'edit';
    $('note-detail').hidden = mode !== 'note';
    $('source-detail').hidden = mode !== 'source';
    $('quote').hidden = mode === 'source';
    $('sheet-title').textContent = mode === 'edit' ? '编辑备注' : mode === 'source' ? '检查依据' : '备注';
    $('sheet-edit').hidden = mode === 'source';
    $('sheet-edit').textContent = mode === 'edit' ? '保存' : hasDraft() ? '继续编辑' : '编辑';
    $('close-sheet').innerHTML = mode === 'edit' ? '取消' : closeIcon;
    $('close-sheet').setAttribute('aria-label', mode === 'edit' ? '取消本次编辑' : '关闭面板');
    if (mode === 'edit') input.value = draft;
    if (mode === 'source') {
      const source = sourceData[sourceIndex];
      $('source-name').textContent = source.name;
      $('source-description').textContent = source.description;
    }
    syncNote();
    updateSave();
    $('sheet-scroll').scrollTop = 0;
    syncPreview(mode === 'edit' ? 'edit' : mode === 'note' ? 'note' : '');
  }
  function openSheet(nextMode = 'note', sourceIndex = 0) {
    if (sheet.hidden) returnFocus = document.activeElement;
    showDocument();
    sheet.hidden = false;
    screen.classList.add('sheet-open');
    $('bottom-tools').hidden = true;
    $('selection').setAttribute('aria-expanded', String(nextMode !== 'source'));
    renderMode(nextMode, sourceIndex);
    setDetent(nextMode === 'edit' ? 'large' : 'medium');
    if (nextMode !== 'source') {
      // Keep the selected sentence in the visible region above the half sheet.
      const relativeTop = $('selection').getBoundingClientRect().top - reader.getBoundingClientRect().top + reader.scrollTop;
      reader.scrollTop = Math.max(0, relativeTop - 180);
    }
    requestAnimationFrame(() => {
      if (sheet.hidden) return;
      if (mode === 'edit') input.focus({ preventScroll: true });
      else $('close-sheet').focus({ preventScroll: true });
    });
  }
  function closeSheet(announceDraft = true) {
    if (sheet.hidden) return;
    const wasEditing = mode === 'edit';
    sheet.hidden = true;
    screen.classList.remove('sheet-open');
    $('selection').setAttribute('aria-expanded', 'false');
    $('bottom-tools').hidden = $('document-view').hidden;
    sheet.style.height = '';
    syncPreview('read');
    syncNote();
    if (returnFocus?.isConnected && !returnFocus.closest('[hidden]')) returnFocus.focus({ preventScroll: true });
    else reader.focus({ preventScroll: true });
    if (announceDraft && wasEditing && hasDraft()) toast('草稿已保留, 可继续编辑');
  }
  function saveNote() {
    if (isComposing || !draft.trim() || draft.trim() === savedNote) return;
    savedNote = draft.trim();
    draft = savedNote;
    renderMode('note');
    setDetent('medium');
    $('sheet-edit').focus({ preventScroll: true });
    toast('备注已保存');
  }
  function cancelEdit() {
    draft = savedNote;
    renderMode('note');
    setDetent('medium');
    $('sheet-edit').focus({ preventScroll: true });
  }
  function toggleResolved() {
    resolved = !resolved;
    syncNote();
    toast(resolved ? '已标为已处理' : '已恢复为待处理');
  }

  $('selection').addEventListener('click', () => openSheet());
  $('selection').addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openSheet(); }
  });
  $('open-note').addEventListener('click', () => openSheet());
  $('edit-note').addEventListener('click', () => openSheet('edit'));
  $('close-sheet').addEventListener('click', () => mode === 'edit' ? cancelEdit() : closeSheet());
  $('sheet-edit').addEventListener('click', () => {
    if (mode === 'edit') saveNote();
    else {
      renderMode('edit');
      setDetent('large');
      input.focus({ preventScroll: true });
    }
  });
  $('note-form').addEventListener('submit', event => { event.preventDefault(); saveNote(); });
  input.addEventListener('input', () => { draft = input.value; updateSave(); syncNote(); });
  input.addEventListener('compositionstart', () => { isComposing = true; updateSave(); });
  input.addEventListener('compositionend', () => { isComposing = false; draft = input.value; updateSave(); });
  input.addEventListener('keydown', event => {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey) && !event.isComposing) { event.preventDefault(); saveNote(); }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !sheet.hidden && !event.isComposing) { event.preventDefault(); closeSheet(); }
  });
  $('resolve-note').addEventListener('click', toggleResolved);
  $('sheet-resolve').addEventListener('click', toggleResolved);
  $('text-size').addEventListener('click', () => {
    const large = screen.classList.toggle('large-type');
    $('text-size').setAttribute('aria-pressed', String(large));
    $('text-size').setAttribute('aria-label', large ? '恢复标准文字' : '放大文字');
  });
  $('reduce-transparency').addEventListener('change', event => screen.classList.toggle('solid-material', event.target.checked));
  $('back-button').addEventListener('click', () => {
    closeSheet(false);
    $('document-view').hidden = true;
    $('library-view').hidden = false;
    $('bottom-tools').hidden = true;
    $('nav-title').textContent = '项目';
    $('back-button').disabled = true;
    reader.scrollTop = 0;
    $('open-document').focus({ preventScroll: true });
  });
  $('open-document').addEventListener('click', () => { showDocument(); reader.scrollTop = 0; reader.focus({ preventScroll: true }); });
  document.querySelectorAll('[data-source]').forEach(button => button.addEventListener('click', () => openSheet('source', Number(button.dataset.source))));
  document.querySelectorAll('[data-preview]').forEach(button => button.addEventListener('click', () => {
    if (button.dataset.preview === 'read') { closeSheet(); showDocument(); reader.scrollTop = 0; syncPreview('read'); }
    else openSheet(button.dataset.preview === 'edit' ? 'edit' : 'note');
  }));

  const grabber = $('grabber');
  grabber.addEventListener('click', () => {
    if (didDrag) { didDrag = false; return; }
    setDetent(detent === 'large' ? 'medium' : 'large');
  });
  grabber.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    pointerStart = { y: event.clientY, height: sheet.offsetHeight, detent };
    didDrag = false;
    grabber.setPointerCapture(event.pointerId);
  });
  grabber.addEventListener('pointermove', event => {
    if (!pointerStart) return;
    const distance = event.clientY - pointerStart.y;
    if (Math.abs(distance) > 6) {
      didDrag = true;
      sheet.classList.add('is-dragging');
      sheet.style.height = `${Math.min(screen.clientHeight * .91, Math.max(130, pointerStart.height - distance))}px`;
    }
  });
  grabber.addEventListener('pointerup', event => {
    if (!pointerStart) return;
    const distance = event.clientY - pointerStart.y;
    const start = pointerStart;
    pointerStart = null;
    sheet.classList.remove('is-dragging');
    if (didDrag) {
      if (distance > 90 && start.detent === 'medium') closeSheet();
      else if (distance > 48) setDetent('medium');
      else if (distance < -48) setDetent('large');
      else setDetent(start.detent);
    }
    // A captured pointer emits its click on this button; the handler above suppresses it.
  });
  grabber.addEventListener('pointercancel', () => {
    pointerStart = null;
    didDrag = false;
    sheet.classList.remove('is-dragging');
    setDetent(detent);
  });
  syncNote();
})();
