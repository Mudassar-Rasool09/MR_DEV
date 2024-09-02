import{r as u,u as V,j as d,F as R,a as B,b as J}from"./index-Bcpk374m.js";const j={_origin:"https://api.emailjs.com"},X=(e,t="https://api.emailjs.com")=>{j._userID=e,j._origin=t},q=(e,t,a)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class M{constructor(t){this.status=t.status,this.text=t.responseText}}const A=(e,t,a={})=>new Promise((i,r)=>{const s=new XMLHttpRequest;s.addEventListener("load",({target:o})=>{const n=new M(o);n.status===200||n.text==="OK"?i(n):r(n)}),s.addEventListener("error",({target:o})=>{r(new M(o))}),s.open("POST",j._origin+e,!0),Object.keys(a).forEach(o=>{s.setRequestHeader(o,a[o])}),s.send(t)}),G=(e,t,a,i)=>{const r=i||j._userID;return q(r,e,t),A("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:r,service_id:e,template_id:t,template_params:a}),{"Content-type":"application/json"})},W=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},Y=(e,t,a,i)=>{const r=i||j._userID,s=W(a);q(r,e,t);const o=new FormData(s);return o.append("lib_version","3.2.0"),o.append("service_id",e),o.append("template_id",t),o.append("user_id",r),A("/api/v1.0/email/send-form",o)},Z={init:X,send:G,sendForm:Y};let K={data:""},Q=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||K,ee=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,te=/\/\*[^]*?\*\/|  +/g,T=/\n+/g,y=(e,t)=>{let a="",i="",r="";for(let s in e){let o=e[s];s[0]=="@"?s[1]=="i"?a=s+" "+o+";":i+=s[1]=="f"?y(o,s):s+"{"+y(o,s[1]=="k"?"":t)+"}":typeof o=="object"?i+=y(o,t?t.replace(/([^,])+/g,n=>s.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,n):n?n+" "+l:l)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=y.p?y.p(s,o):s+":"+o+";")}return a+(t&&r?t+"{"+r+"}":r)+i},b={},L=e=>{if(typeof e=="object"){let t="";for(let a in e)t+=a+L(e[a]);return t}return e},ae=(e,t,a,i,r)=>{let s=L(e),o=b[s]||(b[s]=(l=>{let c=0,p=11;for(;c<l.length;)p=101*p+l.charCodeAt(c++)>>>0;return"go"+p})(s));if(!b[o]){let l=s!==e?e:(c=>{let p,f,g=[{}];for(;p=ee.exec(c.replace(te,""));)p[4]?g.shift():p[3]?(f=p[3].replace(T," ").trim(),g.unshift(g[0][f]=g[0][f]||{})):g[0][p[1]]=p[2].replace(T," ").trim();return g[0]})(e);b[o]=y(r?{["@keyframes "+o]:l}:l,a?"":"."+o)}let n=a&&b.g?b.g:null;return a&&(b.g=b[o]),((l,c,p,f)=>{f?c.data=c.data.replace(f,l):c.data.indexOf(l)===-1&&(c.data=p?l+c.data:c.data+l)})(b[o],t,i,n),o},se=(e,t,a)=>e.reduce((i,r,s)=>{let o=t[s];if(o&&o.call){let n=o(a),l=n&&n.props&&n.props.className||/^go/.test(n)&&n;o=l?"."+l:n&&typeof n=="object"?n.props?"":y(n,""):n===!1?"":n}return i+r+(o??"")},"");function D(e){let t=this||{},a=e.call?e(t.p):e;return ae(a.unshift?a.raw?se(a,[].slice.call(arguments,1),t.p):a.reduce((i,r)=>Object.assign(i,r&&r.call?r(t.p):r),{}):a,Q(t.target),t.g,t.o,t.k)}let H,F,O;D.bind({g:1});let x=D.bind({k:1});function re(e,t,a,i){y.p=t,H=e,F=a,O=i}function v(e,t){let a=this||{};return function(){let i=arguments;function r(s,o){let n=Object.assign({},s),l=n.className||r.className;a.p=Object.assign({theme:F&&F()},n),a.o=/ *go\d+/.test(l),n.className=D.apply(a,i)+(l?" "+l:"");let c=e;return e[0]&&(c=n.as||e,delete n.as),O&&c[0]&&O(n),H(c,n)}return r}}var oe=e=>typeof e=="function",_=(e,t)=>oe(e)?e(t):e,ie=(()=>{let e=0;return()=>(++e).toString()})(),U=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),ne=20,k=new Map,le=1e3,P=e=>{if(k.has(e))return;let t=setTimeout(()=>{k.delete(e),w({type:4,toastId:e})},le);k.set(e,t)},ce=e=>{let t=k.get(e);t&&clearTimeout(t)},I=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,ne)};case 1:return t.toast.id&&ce(t.toast.id),{...e,toasts:e.toasts.map(s=>s.id===t.toast.id?{...s,...t.toast}:s)};case 2:let{toast:a}=t;return e.toasts.find(s=>s.id===a.id)?I(e,{type:1,toast:a}):I(e,{type:0,toast:a});case 3:let{toastId:i}=t;return i?P(i):e.toasts.forEach(s=>{P(s.id)}),{...e,toasts:e.toasts.map(s=>s.id===i||i===void 0?{...s,visible:!1}:s)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(s=>s.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+r}))}}},$=[],C={toasts:[],pausedAt:void 0},w=e=>{C=I(C,e),$.forEach(t=>{t(C)})},de={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ue=(e={})=>{let[t,a]=u.useState(C);u.useEffect(()=>($.push(a),()=>{let r=$.indexOf(a);r>-1&&$.splice(r,1)}),[t]);let i=t.toasts.map(r=>{var s,o;return{...e,...e[r.type],...r,duration:r.duration||((s=e[r.type])==null?void 0:s.duration)||(e==null?void 0:e.duration)||de[r.type],style:{...e.style,...(o=e[r.type])==null?void 0:o.style,...r.style}}});return{...t,toasts:i}},pe=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(a==null?void 0:a.id)||ie()}),E=e=>(t,a)=>{let i=pe(t,e,a);return w({type:2,toast:i}),i.id},m=(e,t)=>E("blank")(e,t);m.error=E("error");m.success=E("success");m.loading=E("loading");m.custom=E("custom");m.dismiss=e=>{w({type:3,toastId:e})};m.remove=e=>w({type:4,toastId:e});m.promise=(e,t,a)=>{let i=m.loading(t.loading,{...a,...a==null?void 0:a.loading});return e.then(r=>(m.success(_(t.success,r),{id:i,...a,...a==null?void 0:a.success}),r)).catch(r=>{m.error(_(t.error,r),{id:i,...a,...a==null?void 0:a.error})}),e};var me=(e,t)=>{w({type:1,toast:{id:e,height:t}})},ge=()=>{w({type:5,time:Date.now()})},fe=e=>{let{toasts:t,pausedAt:a}=ue(e);u.useEffect(()=>{if(a)return;let s=Date.now(),o=t.map(n=>{if(n.duration===1/0)return;let l=(n.duration||0)+n.pauseDuration-(s-n.createdAt);if(l<0){n.visible&&m.dismiss(n.id);return}return setTimeout(()=>m.dismiss(n.id),l)});return()=>{o.forEach(n=>n&&clearTimeout(n))}},[t,a]);let i=u.useCallback(()=>{a&&w({type:6,time:Date.now()})},[a]),r=u.useCallback((s,o)=>{let{reverseOrder:n=!1,gutter:l=8,defaultPosition:c}=o||{},p=t.filter(h=>(h.position||c)===(s.position||c)&&h.height),f=p.findIndex(h=>h.id===s.id),g=p.filter((h,S)=>S<f&&h.visible).length;return p.filter(h=>h.visible).slice(...n?[g+1]:[0,g]).reduce((h,S)=>h+(S.height||0)+l,0)},[t]);return{toasts:t,handlers:{updateHeight:me,startPause:ge,endPause:i,calculateOffset:r}}},he=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,be=x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,xe=x`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ye=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${he} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${be} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${xe} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ve=x`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,we=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ve} 1s linear infinite;
`,je=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Ee=x`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Ne=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${je} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ee} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ke=v("div")`
  position: absolute;
`,$e=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Ce=x`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,_e=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Ce} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,De=({toast:e})=>{let{icon:t,type:a,iconTheme:i}=e;return t!==void 0?typeof t=="string"?u.createElement(_e,null,t):t:a==="blank"?null:u.createElement($e,null,u.createElement(we,{...i}),a!=="loading"&&u.createElement(ke,null,a==="error"?u.createElement(ye,{...i}):u.createElement(Ne,{...i})))},Se=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Fe=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Oe="0%{opacity:0;} 100%{opacity:1;}",Ie="0%{opacity:1;} 100%{opacity:0;}",Me=v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Te=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Pe=(e,t)=>{let a=e.includes("top")?1:-1,[i,r]=U()?[Oe,Ie]:[Se(a),Fe(a)];return{animation:t?`${x(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${x(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ze=u.memo(({toast:e,position:t,style:a,children:i})=>{let r=e.height?Pe(e.position||t||"top-center",e.visible):{opacity:0},s=u.createElement(De,{toast:e}),o=u.createElement(Te,{...e.ariaProps},_(e.message,e));return u.createElement(Me,{className:e.className,style:{...r,...a,...e.style}},typeof i=="function"?i({icon:s,message:o}):u.createElement(u.Fragment,null,s,o))});re(u.createElement);var qe=({id:e,className:t,style:a,onHeightUpdate:i,children:r})=>{let s=u.useCallback(o=>{if(o){let n=()=>{let l=o.getBoundingClientRect().height;i(e,l)};n(),new MutationObserver(n).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return u.createElement("div",{ref:s,className:t,style:a},r)},Ae=(e,t)=>{let a=e.includes("top"),i=a?{top:0}:{bottom:0},r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:U()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...i,...r}},Le=D`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,N=16,He=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:i,children:r,containerStyle:s,containerClassName:o})=>{let{toasts:n,handlers:l}=fe(a);return u.createElement("div",{style:{position:"fixed",zIndex:9999,top:N,left:N,right:N,bottom:N,pointerEvents:"none",...s},className:o,onMouseEnter:l.startPause,onMouseLeave:l.endPause},n.map(c=>{let p=c.position||t,f=l.calculateOffset(c,{reverseOrder:e,gutter:i,defaultPosition:t}),g=Ae(p,f);return u.createElement(qe,{id:c.id,key:c.id,onHeightUpdate:l.updateHeight,className:c.visible?Le:"",style:g},c.type==="custom"?_(c.message,c):r?r(c):u.createElement(ze,{toast:c,position:p}))}))},z=m;const Ue="/home/assets/tos-Ci8uHXta.png",Ve="/home/assets/ji-BEsMUpWw.png",Re="/home/assets/tabel-yzIgfqvL.png",Je=()=>{const e=V(s=>s.theme.darkMode),[t,a]=u.useState({name:"",email:"",subject:"",message:""}),i=s=>{a({...t,[s.target.name]:s.target.value})},r=s=>{s.preventDefault(),Z.send("service_8ntqheo","template_ysnzad3",t,"a_l6VVvshh9vBVJkM").then(o=>{console.log("SUCCESS!",o.status,o.text),z.success("Message sent successfully!")},o=>{console.log("FAILED...",o),z.error("Message failed to send.")}),a({name:"",email:"",subject:"",message:""})};return d.jsxs("div",{className:`w-full h-fit relative overflow-y-auto  flex items-center iu  justify-center transition-colors ${e?" bg-black text-white":"bg-white text-black"}`,children:[e?d.jsxs(d.Fragment,{children:[d.jsx("img",{className:" absolute  bottom-0 right-0 yu ",src:Ue,alt:""}),d.jsx("img",{className:" absolute scale-0 md:scale-[1]   bottom-0 left-10 yu ",src:Ve,alt:""})]}):d.jsx("img",{className:" absolute  bottom-0 left-0 yu ij",src:Re,alt:""}),d.jsx(He,{position:"top-center",reverseOrder:!1}),d.jsxs("div",{className:"w-full z-10 max-w-4xl mx-auto px-4  md:p-9 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-4 lg:gap-8 overflow-y-auto  mt-14  ",children:[d.jsxs("div",{className:"flex flex-col justify-center   md:space-y-4 lg:space-y-4",children:[d.jsx("span",{className:"text-xl  z-1 lg:text-5xl font-bold",children:"Contact Us"}),d.jsx("span",{className:"text-lg font-normal flex-nowrap ",children:"mudassarrasoolchishti@gmail.com"}),d.jsx("span",{className:"text-xl font-bold",children:"Based In"}),d.jsx("span",{className:"text-lg font-normal",children:"Pakistan / Pakpattan"}),d.jsxs("div",{className:"flex space-x-4 text-2xl mt-4",children:[d.jsx(R,{className:"hover:text-blue-600 transition-colors"}),d.jsx(B,{className:"hover:text-pink-500 transition-colors"}),d.jsx(J,{className:"hover:text-gray-700 transition-colors"})]})]}),d.jsx("div",{className:"  mt-4  md:mb-0 lg:mb-0 ",children:d.jsxs("form",{onSubmit:r,className:"flex flex-col space-y-6",children:[d.jsx("input",{type:"text",name:"name",placeholder:"Name",value:t.name,onChange:i,required:!0,className:`py-3 text-xl border-b-2 outline-none transition-colors ${e?"bg-gray-800 bg-transparent border-white placeholder:text-gray-400":"border-black bg-transparent "}`}),d.jsx("input",{type:"email",name:"email",placeholder:"Email",value:t.email,required:!0,onChange:i,className:`py-3 text-xl border-b-2 outline-none transition-colors bg-transparent p-2 ${e?"bg-gray-800 border-white placeholder:text-gray-400 bg-transparent  ":"border-black bg-transparent "}`}),d.jsx("input",{type:"text",name:"subject",placeholder:"Subject",value:t.subject,onChange:i,required:!0,className:` bg-transparent py-3 text-xl border-b-2 outline-none transition-colors ${e?"bg-gray-800 border-white bg-transparent placeholder:text-gray-400":"border-black"}`}),d.jsx("textarea",{name:"message",placeholder:"Some Details",value:t.message,onChange:i,required:!0,rows:3,className:` bg-transparent py-3 text-xl border-b-2 outline-none transition-colors ${e?"bg-gray-800 border-white placeholder:text-gray-400 bg-transparent ":"border-black"}`}),d.jsx("button",{type:"submit",className:`w-full py-4 rounded-xl text-xl mb-8 transition-colors ${e?"bg-white text-black":"bg-black text-white"}`,children:"Contact Us"})]})})]})]})};export{Je as default};
