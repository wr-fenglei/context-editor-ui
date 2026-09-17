// Run against a local server: BASE_URL=http://127.0.0.1:8877 node system/verification/geometry.mjs
// Requires Playwright. Set PLAYWRIGHT_MODULE and CHROMIUM_PATH for a managed runtime.
import { createRequire } from 'node:module'
import fs from 'node:fs/promises'
const require = createRequire(import.meta.url)
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright')
const browser = await chromium.launch({ headless: true, ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}) })
const base = process.env.BASE_URL || 'http://127.0.0.1:8000'
const out = process.env.QA_OUTPUT || '/private/tmp/context-ui-geometry'
await fs.mkdir(out, { recursive: true })
const checks = []
const check = (name, pass, detail) => { checks.push({ name, pass: Boolean(pass), detail }); if (!pass) console.error('FAIL', name, detail) }
const states = [320,390,640,740,1024].map(width => ({ width, touch: false })).concat([{ width: 390, touch: true }, { width: 740, touch: true }])
for (const theme of ['light','dark']) for (const state of states) {
  const {width,touch} = state, prefix = `${theme}/${width}/${touch?'touch':'mouse'}`
  const page = await browser.newPage({ viewport: { width, height: 1000 }, hasTouch: touch, reducedMotion: 'reduce' })
  const errors = []; page.on('pageerror', e => errors.push(e.message))
  try {
    await page.goto(`${base}/system/components/Composer/spec.html?theme=${theme}`, { waitUntil: 'networkidle' })
    await page.locator('.composer').waitFor()
    const snapshot = () => page.evaluate(() => {
      const composer = document.querySelector('.composer'), bar = document.querySelector('.composer-bar'), send = document.querySelector('.send-button'), chip = document.querySelector('.context-accessory')
      const pseudo = (el,name='::before') => { const cs = getComputedStyle(el,name); return { height: parseFloat(cs.height), width: parseFloat(cs.width), radius: cs.borderRadius, bg: cs.backgroundColor } }
      const buttons = [...bar.querySelectorAll('button')].filter(e => e.getClientRects().length)
      return { barHeight: bar.getBoundingClientRect().height, composerBottom: composer.getBoundingClientRect().bottom, sendBox: send.getBoundingClientRect().toJSON(), send: pseudo(send), chip: pseudo(chip), add: pseudo(document.querySelector('[data-od-id="add-trigger"]')), mic: pseudo(document.querySelector('[data-od-id="microphone-button"]')), hitHeight: document.querySelector('[data-od-id="add-trigger"]').getBoundingClientRect().height, overlap: buttons.some((a,i)=>buttons.slice(i+1).some(b=>{const x=a.getBoundingClientRect(),y=b.getBoundingClientRect();return Math.min(x.right,y.right)-Math.max(x.left,y.left)>1&&Math.min(x.bottom,y.bottom)-Math.max(x.top,y.top)>1})), overflow: document.documentElement.scrollWidth>innerWidth }
    })
    const before = await snapshot()
    await page.locator('[data-od-id="add-trigger"]').hover(); const hover = await snapshot()
    check(prefix+'/toolbar',before.barHeight===44 && before.send.height===30 && before.add.height===32 && before.mic.width===32 && before.hitHeight===44,before)
    const gap=before.composerBottom-(before.sendBox.y+before.sendBox.height/2+before.send.height/2)
    check(prefix+'/bottom-inset',gap>=6 && gap<=9,{gap})
    check(prefix+'/hover-invariant',hover.add.height===before.add.height && hover.add.width===before.add.width && parseFloat(hover.add.radius)>100,{before:before.add,hover:hover.add})
    check(prefix+'/chip-height',before.chip.height===30,before.chip)
    check(prefix+'/toolbar-fit',!before.overflow&&!before.overlap,before)
    if(width===390||width===640) await page.locator('.composer').screenshot({path:`${out}/composer-${prefix.replaceAll('/','-')}.png`})
    await page.goto(`${base}/system/components/ContextEditor/spec.html?theme=${theme}`,{waitUntil:'networkidle'})
    await page.locator('.context-item').first().waitFor()
    const rows=await page.evaluate(()=>{const panel=document.querySelector('.context-editor'),list=[...document.querySelectorAll('[data-od-id="context-work-draft"] .context-item')];return {panelWidth:panel.clientWidth,rows:list.map(e=>{const r=e.getBoundingClientRect(),a=e.querySelector('.context-item-actions').getBoundingClientRect(),b=e.querySelector('.context-item-body').getBoundingClientRect();return {height:r.height,inline:a.y<b.bottom&&a.bottom>b.y,actionsRight:a.right,rowRight:r.right}}),controlSize:getComputedStyle(panel).getPropertyValue('--control-target').trim(),overflow:document.documentElement.scrollWidth>innerWidth}})
    check(prefix+'/context-layout',!rows.overflow&&(rows.panelWidth<=360||rows.rows.every(r=>r.inline)),rows)
    check(prefix+'/context-density',rows.rows.every(r=>r.height<=(rows.panelWidth<=360?150:80)),rows)
    check(prefix+'/context-actions-aligned',rows.rows.every(r=>Math.abs(r.actionsRight-r.rowRight)<=1),rows)
    const confirm=await page.locator('.context-confirm').evaluate(e=>{
      const control=getComputedStyle(e), plate=getComputedStyle(e,'::before')
      const probe=document.createElement('span');probe.style.backgroundColor='var(--button-confirm-bg)';probe.style.color='var(--action-confirm-fg)';e.append(probe)
      const resolved=getComputedStyle(probe),expected={bg:resolved.backgroundColor,color:resolved.color};probe.remove()
      return {bg:plate.backgroundColor,color:control.color,border:control.borderTopWidth,plateBorder:plate.borderTopWidth,radius:plate.borderRadius,height:parseFloat(plate.height),hitHeight:e.getBoundingClientRect().height,expected}
    })
    check(prefix+'/soft-action',confirm.bg===confirm.expected.bg&&confirm.color===confirm.expected.color&&confirm.border==='0px'&&confirm.plateBorder==='0px'&&confirm.radius==='10px'&&confirm.height===32&&confirm.hitHeight===(touch?44:32),confirm)
    if(width===640||width===390)await page.locator('.context-editor').screenshot({path:`${out}/context-${prefix.replaceAll('/','-')}.png`})
    check(prefix+'/errors',!errors.length,errors)
  } catch(e) { check(prefix+'/run',false,e.message) } finally { await page.close() }
}
for(const theme of ['light','dark']) {
  const page=await browser.newPage({viewport:{width:1024,height:1000}})
  await page.goto(`${base}/system/components/ProfileTags/spec.html?theme=${theme}`,{waitUntil:'networkidle'})
  const tags=await page.locator('.profile-tag').evaluateAll(elements=>elements.map(e=>({bg:getComputedStyle(e).backgroundColor,body:getComputedStyle(document.body).backgroundColor,radius:getComputedStyle(e).borderRadius,icon:getComputedStyle(e.querySelector('svg')).color})))
  check(theme+'/tags',tags.length===6&&tags.every(t=>t.bg===t.body&&parseFloat(t.radius)>100)&&new Set(tags.map(t=>t.icon)).size===6,tags)
  await page.locator('.profile-tags').screenshot({path:`${out}/tags-${theme}.png`})
  await page.goto(`${base}/system/components/ToolCall/spec.html?theme=${theme}`,{waitUntil:'networkidle'})
  const colors=await page.locator('[data-tool-kind] > svg:first-child').evaluateAll(elements=>elements.map(e=>getComputedStyle(e).color))
  check(theme+'/tool-colors',new Set(colors).size>=3,colors)
  await page.goto(`${base}/system/components/SubagentCall/spec.html?theme=${theme}`,{waitUntil:'networkidle'})
  const agents=await page.evaluate(()=>{const api=ContextEditorUIIcons;const ids=['test-a','test-b','test-c','test-d'].map(x=>api.agentIdentity(x));return {catalog:ContextEditorUIConfig.agents.length,same:api.agentIdentity('stable').src===api.agentIdentity('stable').src,images:[...document.querySelectorAll('.agent-gallery img')].map(x=>({ok:x.complete&&x.naturalWidth===96,src:x.src})),ids:ids.map(x=>x.tone)}})
  check(theme+'/agents',agents.catalog===5&&agents.same&&agents.images.every(x=>x.ok),agents)
  await page.locator('.agent-gallery').screenshot({path:`${out}/agents-${theme}.png`})
  await page.close()
}
await browser.close()
await fs.writeFile(`${out}/report.json`,JSON.stringify(checks,null,2))
console.log(JSON.stringify({passed:checks.filter(x=>x.pass).length,failed:checks.filter(x=>!x.pass).length,output:out}))
if(checks.some(x=>!x.pass)) process.exitCode=1
