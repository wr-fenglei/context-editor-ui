// Run with BASE_URL; optional PLAYWRIGHT_MODULE, CHROMIUM_PATH and QA_OUTPUT
import {createRequire} from 'node:module'
import fs from 'node:fs/promises'
const require=createRequire(import.meta.url)
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright')
const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})})
const base=process.env.BASE_URL||'http://127.0.0.1:8000',out=process.env.QA_OUTPUT||'/private/tmp/context-component-qa'
await fs.mkdir(out,{recursive:true})
const checks=[],check=(name,pass,detail)=>{checks.push({name,pass:!!pass,detail});if(!pass)console.error('FAIL',name,detail)}
const pages=['index.html','system/app.html','system/foundations.html',...['Button','Composer','ContextEditor','MessageBubble','ToolCall','SubagentCall','ProfileTags','AvatarGroup','Panel','SessionSwitcher','ReviewPanel','AnnotationPopover'].map(name=>`system/components/${name}/spec.html`)]
for(const theme of ['light','dark']) for(const width of [1280,320]) {
 for(let i=0;i<pages.length;i+=4) await Promise.all(pages.slice(i,i+4).map(async path=>{
  const page=await browser.newPage({viewport:{width,height:1000},reducedMotion:'reduce'}),errors=[]
  page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)errors.push(`${r.status()} ${r.url()}`)})
  try{
   await page.goto(`${base}/${path}?theme=${theme}`,{waitUntil:'networkidle'})
   await page.waitForFunction(()=>document.body.textContent.trim().length>150)
   const s=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,images:[...document.images].every(i=>i.complete&&i.naturalWidth),ids:[...document.querySelectorAll('[id]')].map(x=>x.id).filter((v,i,a)=>a.indexOf(v)!==i)}))
   check(`${theme}/${width}/${path}`,!errors.length&&!s.overflow&&s.images&&!s.ids.length,{...s,errors})
  }catch(e){check(`${theme}/${width}/${path}`,false,{error:e.message,errors})}finally{await page.close()}
 }))
}
for(const theme of ['light','dark'])for(const state of [{width:1280},{width:800},{width:390,touch:true},{width:320}]){
 const {width,touch=false}=state, prefix=`${theme}/${width}/${touch?'touch':'mouse'}`
 const context=await browser.newContext({viewport:{width,height:1000},hasTouch:touch,permissions:['clipboard-read','clipboard-write'],reducedMotion:'reduce'})
 const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message))
 const active=page.locator('.wb-session[data-active="true"]'),od=name=>active.locator(`[data-od-id="${name}"]`),get=name=>active.getByTestId(name),quote=name=>page.getByTestId(name)
 const switchTo=async name=>{await page.locator('.ds-session-trigger').click();await page.getByRole('menuitemradio',{name,exact:true}).click()}
 try{
  await page.goto(`${base}/system/examples/workbench.html?theme=${theme}`,{waitUntil:'networkidle'})
  await od('composer-input').waitFor()
  check(prefix+'/built-in-components',await active.locator('[data-component="Composer"]').count()===1 && await get('document-panel').count()===1 && await page.locator('[class^="iw-"],[class*=" iw-"]').count()===0)
  const geo=await active.locator('.composer').evaluate(e=>{const send=e.querySelector('.send-button'),b=send.getBoundingClientRect(),bar=e.querySelector('.composer-bar'),buttons=[...bar.querySelectorAll('button')];return {bar:bar.clientHeight,send:parseFloat(getComputedStyle(send,'::before').height),chip:parseFloat(getComputedStyle(e.querySelector('.context-accessory'),'::before').height),gap:e.getBoundingClientRect().bottom-b.y-b.height/2-15,overlap:buttons.some((x,i)=>buttons.slice(i+1).some(y=>{const a=x.getBoundingClientRect(),b=y.getBoundingClientRect();return Math.min(a.right,b.right)-Math.max(a.left,b.left)>1&&Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top)>1}))}})
  check(prefix+'/shared-composer-geometry',geo.bar===44&&geo.send===30&&geo.chip===30&&geo.gap===8&&!geo.overlap,geo)
  await od('approval-trigger').click()
  const danger=await od('approval-full').evaluate(e=>({icon:getComputedStyle(e.querySelector('svg')).color,title:getComputedStyle(e.querySelector('strong')).color,description:getComputedStyle(e.querySelector('small')).color}))
  await od('approval-full').click()
  const triggerColor=await od('approval-trigger').evaluate(e=>getComputedStyle(e).color)
  check(prefix+'/full-access-red',danger.icon===danger.title&&danger.title===triggerColor&&danger.title!==danger.description,danger)
  await od('approval-trigger').click();await od('approval-auto').click()
  const original=await active.locator('.review-item-text').first().textContent()
  await get('review-item').first().check();await active.locator('[data-edit-index="0"]').click();await get('item-editor').fill('可撤销的评审内容')
  const focus=await get('item-editor').evaluate(e=>({border:getComputedStyle(e).borderColor,outline:getComputedStyle(e).outlineStyle,shadow:getComputedStyle(e).boxShadow,expected:getComputedStyle(e.closest('.wb-session').querySelector('.composer')).borderColor}))
  check(prefix+'/shared-input-focus',focus.border===focus.expected&&focus.outline==='none'&&focus.shadow==='none',focus)
  await get('item-save').click();check(prefix+'/edit-resets-check',!(await get('review-item').first().isChecked()))
  await get('item-undo').click();check(prefix+'/undo-text-and-check',(await active.locator('.review-item-text').first().textContent())===original && await get('review-item').first().isChecked())
  await active.locator('[data-discuss-index="1"]').click();await get('quote-chip').click();await quote('quote-edit').click();await quote('quote-editor').fill('保留这条备注')
  await od('composer-input').fill('带备注的消息');await od('send-button').click()
  check(prefix+'/unsaved-annotation-blocks-send',await get('sent-message').count()===0&&(await od('composer-input').inputValue())==='带备注的消息'&&await quote('quote-editor').isVisible())
  await quote('quote-save').click();await quote('quote-close').click();await od('send-button').click()
  check(prefix+'/quote-snapshot',(await get('sent-message').first().textContent()).includes('保留这条备注'))
  await active.locator('[data-edit-index="0"]').click();await get('item-editor').fill('切换会话保留的修改');await od('composer-input').fill('会话一草稿')
  await switchTo('上下文交互规范');check(prefix+'/session-isolation',(await od('composer-input').inputValue())==='')
  await od('composer-input').fill('会话二草稿');await switchTo('消息可见性检查')
  check(prefix+'/session-preserves-drafts',(await od('composer-input').inputValue())==='会话一草稿'&&(await get('item-editor').inputValue())==='切换会话保留的修改')
  check(prefix+'/switch-preserves-trigger-focus',await page.locator('.ds-session-trigger').evaluate(e=>e===document.activeElement))
  await get('item-cancel').click()
  await get('context-open').click();await active.locator('.context-editor').waitFor()
  const tint=await active.locator('.context-editor').evaluate(e=>({icon:getComputedStyle(e.querySelector('.context-editor-mark')).color,label:getComputedStyle(e.querySelector('.context-group-label')).color,text:getComputedStyle(e.querySelector('.context-item-title')).color}))
  check(prefix+'/context-amber',tint.icon===tint.label&&tint.label!==tint.text,tint)
  await active.locator('.context-toggle').first().click();await od('composer-input').fill('未确认时发送');await od('send-button').click()
  check(prefix+'/confirmed-snapshot-before',(await get('sent-message').last().textContent()).includes('携带 2 项上下文'))
  await od('context-confirm').click();await od('composer-input').fill('确认后发送');await od('send-button').click()
  check(prefix+'/confirmed-snapshot-after',(await get('sent-message').last().textContent()).includes('携带 1 项上下文'))
  await active.locator('.context-merge').first().click();await page.waitForFunction(()=>document.querySelector('.wb-session[data-active="true"] .context-item.is-pending')===null)
  await od('context-confirm').click();check(prefix+'/pending-merge',(await od('composer-context-accessory').textContent()).includes('2 已确认'))
  await get('document-copy').click();const raw=await page.evaluate(()=>navigator.clipboard.readText());check(prefix+'/copy-source',raw.startsWith('# 消息页调整清单')&&raw.includes(original))
  await get('document-discuss').click();check(prefix+'/insert-controlled-composer',(await od('composer-input').inputValue())===raw)
  await active.locator('.review-source > summary').click();check(prefix+'/shared-code-renderer',await active.locator('.review-source .code-syntax-heading').count()>0)
  await page.screenshot({path:`${out}/workbench-${prefix.replaceAll('/','-')}.png`,fullPage:true})
  await page.locator('.ds-session-trigger').click();await page.getByRole('menuitem',{name:'新建对话',exact:true}).click()
  check(prefix+'/new-session',(await page.locator('.ds-session-trigger').textContent()).includes('新对话')&&await get('document-panel').count()===0)
  check(prefix+'/runtime',!errors.length&&await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),errors)
 }catch(e){check(prefix+'/run',false,{error:e.message,errors});await page.screenshot({path:`${out}/failure-${prefix.replaceAll('/','-')}.png`,fullPage:true})}finally{await context.close()}
}
await browser.close();await fs.writeFile(`${out}/report.json`,JSON.stringify(checks,null,2));console.log(JSON.stringify({passed:checks.filter(c=>c.pass).length,failed:checks.filter(c=>!c.pass).length,output:out}));if(checks.some(c=>!c.pass))process.exitCode=1
