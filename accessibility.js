(() => {
 const $=id=>document.getElementById(id);
 const launch=$("a11y-launch"), panel=$("a11y-panel"), close=$("a11y-close"), announce=$("a11y-announcement");
 const key="umni-accessibility-v1";
 let settings={size:100,contrast:false,motion:false};
 try{settings={...settings,...JSON.parse(localStorage.getItem(key)||"{}")}}catch(_){}
 const clamp=n=>Math.min(150,Math.max(100,n));
 const apply=()=>{
  settings.size=clamp(Number(settings.size)||100);
  document.documentElement.classList.toggle("a11y-text-large",settings.size!==100);
  document.documentElement.classList.toggle("a11y-contrast",!!settings.contrast);
  document.documentElement.classList.toggle("a11y-reduce-motion",!!settings.motion);
  document.documentElement.style.setProperty("--a11y-root-size",settings.size+"%");
  document.documentElement.style.setProperty("--a11y-factor",String(settings.size/100));
  $("a11y-size-label").textContent="Tamanho do texto: "+settings.size+"%";
  $("a11y-contrast").checked=!!settings.contrast;
  $("a11y-motion").checked=!!settings.motion;
  try{localStorage.setItem(key,JSON.stringify(settings))}catch(_){}
 };
 const open=()=>{panel.hidden=false;launch.setAttribute("aria-expanded","true");close.focus()};
 const shut=()=>{panel.hidden=true;launch.setAttribute("aria-expanded","false");launch.focus()};
 launch.addEventListener("click",()=>panel.hidden?open():shut());
 close.addEventListener("click",shut);
 document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!panel.hidden)shut()});
 $("a11y-more").addEventListener("click",()=>{settings.size+=10;apply();announce.textContent="Texto aumentado para "+settings.size+"%"});
 $("a11y-less").addEventListener("click",()=>{settings.size-=10;apply();announce.textContent="Texto ajustado para "+settings.size+"%"});
 $("a11y-contrast").addEventListener("change",e=>{settings.contrast=e.target.checked;apply()});
 $("a11y-motion").addEventListener("change",e=>{settings.motion=e.target.checked;apply()});
 $("a11y-reset").addEventListener("click",()=>{settings={size:100,contrast:false,motion:false};apply();announce.textContent="Preferências restauradas"});
 document.querySelectorAll("form").forEach(form=>{
  form.addEventListener("invalid",e=>{
   const field=e.target;
   field.setAttribute("aria-invalid","true");
   if(!field.dataset.a11yErrorId){
    const msg=document.createElement("span");msg.className="sr-only";msg.id="a11y-error-"+Math.random().toString(36).slice(2);
    msg.textContent="Campo obrigatório ou valor inválido: "+(field.labels?.[0]?.textContent?.trim()||field.name||"campo");
    field.insertAdjacentElement("afterend",msg);
    field.setAttribute("aria-describedby",[field.getAttribute("aria-describedby"),msg.id].filter(Boolean).join(" "));
    field.dataset.a11yErrorId=msg.id;
   }
  },true);
  form.addEventListener("input",e=>{if(e.target.matches("input,textarea,select")&&e.target.validity.valid)e.target.removeAttribute("aria-invalid")});
 });
 apply();
})();