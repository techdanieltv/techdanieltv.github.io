import{c as k}from"./chunk-SYQESB6R.js";import{a as T}from"./chunk-MM5QLNJM.js";import{b as C,f as D,g as I,h as R,k as y}from"./chunk-72KDLSWN.js";import{a as w}from"./chunk-OBXDPQ3V.js";import{a as L,d as x}from"./chunk-7YR6A2SD.js";import{b as c}from"./chunk-MCRJI3T3.js";import{a as p,b as F,c as A}from"./chunk-JNW6QASV.js";import{f as u}from"./chunk-RW4GY4BD.js";var v='[tabindex]:not([tabindex^="-"]):not([hidden]):not([disabled]), input:not([type=hidden]):not([tabindex^="-"]):not([hidden]):not([disabled]), textarea:not([tabindex^="-"]):not([hidden]):not([disabled]), button:not([tabindex^="-"]):not([hidden]):not([disabled]), select:not([tabindex^="-"]):not([hidden]):not([disabled]), ion-checkbox:not([tabindex^="-"]):not([hidden]):not([disabled]), ion-radio:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable[disabled="false"]:not([tabindex^="-"]):not([hidden])',P=(e,n)=>{let t=e.querySelector(v);B(t,n!=null?n:e)},N=(e,n)=>{let t=Array.from(e.querySelectorAll(v)),o=t.length>0?t[t.length-1]:null;B(o,n!=null?n:e)},B=(e,n)=>{let t=e,o=e==null?void 0:e.shadowRoot;if(o&&(t=o.querySelector(v)||e),t){let i=t.closest("ion-radio-group");i?i.setFocus():y(t)}else n.focus()},E=0,W=0,h=new WeakMap,f=e=>({create(t){return K(e,t)},dismiss(t,o,i){return z(document,t,o,e,i)},getTop(){return u(this,null,function*(){return g(document,e)})}}),me=f("ion-alert"),fe=f("ion-action-sheet"),pe=f("ion-loading"),ge=f("ion-modal");var ve=f("ion-popover"),he=f("ion-toast"),Oe=e=>{typeof document<"u"&&$(document);let n=E++;e.overlayIndex=n},be=e=>(e.hasAttribute("id")||(e.id=`ion-overlay-${++W}`),e.id),K=(e,n)=>typeof window<"u"&&typeof window.customElements<"u"?window.customElements.whenDefined(e).then(()=>{let t=document.createElement(e);return t.classList.add("overlay-hidden"),Object.assign(t,Object.assign(Object.assign({},n),{hasController:!0})),V(document).appendChild(t),new Promise(o=>C(t,o))}):Promise.resolve(),Y=e=>e.classList.contains("overlay-hidden"),_=(e,n)=>{let t=e,o=e==null?void 0:e.shadowRoot;o&&(t=o.querySelector(v)||e),t?y(t):n.focus()},H=(e,n)=>{let t=g(n,"ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker-legacy,ion-popover"),o=e.target;if(!t||!o||t.classList.contains(oe))return;let i=()=>{if(t===o)t.lastFocus=void 0;else if(o.tagName==="ION-TOAST")_(t.lastFocus,t);else{let a=R(t);if(!a.contains(o))return;let s=a.querySelector(".ion-overlay-wrapper");if(!s)return;if(s.contains(o)||o===a.querySelector("ion-backdrop"))t.lastFocus=o;else{let d=t.lastFocus;P(s,t),d===n.activeElement&&N(s,t),t.lastFocus=n.activeElement}}},r=()=>{if(t.contains(o))t.lastFocus=o;else if(o.tagName==="ION-TOAST")_(t.lastFocus,t);else{let a=t.lastFocus;P(t),a===n.activeElement&&N(t),t.lastFocus=n.activeElement}};t.shadowRoot?r():i()},$=e=>{E===0&&(E=1,e.addEventListener("focus",n=>{H(n,e)},!0),e.addEventListener("ionBackButton",n=>{let t=g(e);t!=null&&t.backdropDismiss&&n.detail.register(x,()=>{t.dismiss(void 0,S)})}),L()||e.addEventListener("keydown",n=>{if(n.key==="Escape"){let t=g(e);t!=null&&t.backdropDismiss&&t.dismiss(void 0,S)}}))},z=(e,n,t,o,i)=>{let r=g(e,o,i);return r?r.dismiss(n,t):Promise.reject("overlay does not exist")},Q=(e,n)=>(n===void 0&&(n="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker-legacy,ion-popover,ion-toast"),Array.from(e.querySelectorAll(n)).filter(t=>t.overlayIndex>0)),O=(e,n)=>Q(e,n).filter(t=>!Y(t)),g=(e,n,t)=>{let o=O(e,n);return t===void 0?o[o.length-1]:o.find(i=>i.id===t)},q=(e=!1)=>{let t=V(document).querySelector("ion-router-outlet, ion-nav, #ion-view-container-root");t&&(e?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden"))},ye=(e,n,t,o,i)=>u(void 0,null,function*(){var r,a;if(e.presented)return;e.el.tagName!=="ION-TOAST"&&q(!0),document.body.classList.add(w),te(e.el),G(e.el),e.presented=!0,e.willPresent.emit(),(r=e.willPresentShorthand)===null||r===void 0||r.emit();let s=A(e),d=e.enterAnimation?e.enterAnimation:p.get(n,s==="ios"?t:o);(yield j(e,d,e.el,i))&&(e.didPresent.emit(),(a=e.didPresentShorthand)===null||a===void 0||a.emit()),e.el.tagName!=="ION-TOAST"&&J(e.el),e.keyboardClose&&(document.activeElement===null||!e.el.contains(document.activeElement))&&e.el.focus(),e.el.removeAttribute("aria-hidden")}),J=e=>u(void 0,null,function*(){let n=document.activeElement;if(!n)return;let t=n==null?void 0:n.shadowRoot;t&&(n=t.querySelector(v)||n),yield e.onDidDismiss(),(document.activeElement===null||document.activeElement===document.body)&&n.focus()}),we=(e,n,t,o,i,r,a)=>u(void 0,null,function*(){var s,d;if(!e.presented)return!1;let l=c!==void 0?O(c).filter(m=>m.tagName!=="ION-TOAST"):[];l.length===1&&l[0].id===e.el.id&&(q(!1),document.body.classList.remove(w)),e.presented=!1;try{G(e.el),e.el.style.setProperty("pointer-events","none"),e.willDismiss.emit({data:n,role:t}),(s=e.willDismissShorthand)===null||s===void 0||s.emit({data:n,role:t});let m=A(e),U=e.leaveAnimation?e.leaveAnimation:p.get(o,m==="ios"?i:r);t!==ee&&(yield j(e,U,e.el,a)),e.didDismiss.emit({data:n,role:t}),(d=e.didDismissShorthand)===null||d===void 0||d.emit({data:n,role:t}),(h.get(e)||[]).forEach(M=>M.destroy()),h.delete(e),e.el.classList.add("overlay-hidden"),e.el.style.removeProperty("pointer-events"),e.el.lastFocus!==void 0&&(e.el.lastFocus=void 0)}catch(m){console.error(m)}return e.el.remove(),ne(),!0}),V=e=>e.querySelector("ion-app")||e.body,j=(e,n,t,o)=>u(void 0,null,function*(){t.classList.remove("overlay-hidden");let i=e.el,r=n(i,o);(!e.animated||!p.getBoolean("animated",!0))&&r.duration(0),e.keyboardClose&&r.beforeAddWrite(()=>{let s=t.ownerDocument.activeElement;s!=null&&s.matches("input,ion-input, ion-textarea")&&s.blur()});let a=h.get(e)||[];return h.set(e,[...a,r]),yield r.play(),!0}),Ae=(e,n)=>{let t,o=new Promise(i=>t=i);return X(e,n,i=>{t(i.detail)}),o},X=(e,n,t)=>{let o=i=>{I(e,n,o),t(i)};D(e,n,o)},Ee=e=>e==="cancel"||e===S,Z=e=>e(),Se=(e,n)=>{if(typeof e=="function")return p.get("_zoneGate",Z)(()=>{try{return e(n)}catch(o){throw o}})},S="backdrop",ee="gesture",Ce=39,De=e=>{let n=!1,t,o=k(),i=(s=!1)=>{if(t&&!s)return{delegate:t,inline:n};let{el:d,hasController:l,delegate:b}=e;return n=d.parentNode!==null&&!l,t=n?b||o:b,{inline:n,delegate:t}};return{attachViewToDom:s=>u(void 0,null,function*(){let{delegate:d}=i(!0);if(d)return yield d.attachViewToDom(e.el,s);let{hasController:l}=e;if(l&&s!==void 0)throw new Error("framework delegate is missing");return null}),removeViewFromDom:()=>{let{delegate:s}=i();s&&e.el!==void 0&&s.removeViewFromDom(e.el.parentElement,e.el)}}},Ie=()=>{let e,n=()=>{e&&(e(),e=void 0)};return{addClickListener:(o,i)=>{n();let r=i!==void 0?document.getElementById(i):null;if(!r){T(`A trigger element with the ID "${i}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on an overlay component.`,o);return}e=((s,d)=>{let l=()=>{d.present()};return s.addEventListener("click",l),()=>{s.removeEventListener("click",l)}})(r,o)},removeClickListener:n}},G=e=>{c!==void 0&&F("android")&&e.setAttribute("aria-hidden","true")},te=e=>{var n;if(c===void 0)return;let t=O(c);for(let o=t.length-1;o>=0;o--){let i=t[o],r=(n=t[o+1])!==null&&n!==void 0?n:e;(r.hasAttribute("aria-hidden")||r.tagName!=="ION-TOAST")&&i.setAttribute("aria-hidden","true")}},ne=()=>{if(c===void 0)return;let e=O(c);for(let n=e.length-1;n>=0;n--){let t=e[n];if(t.removeAttribute("aria-hidden"),t.tagName!=="ION-TOAST")break}},oe="ion-disable-focus-trap";export{P as a,N as b,me as c,fe as d,pe as e,ge as f,ve as g,he as h,Oe as i,be as j,g as k,ye as l,we as m,Ae as n,Ee as o,Se as p,S as q,ee as r,Ce as s,De as t,Ie as u,oe as v};
