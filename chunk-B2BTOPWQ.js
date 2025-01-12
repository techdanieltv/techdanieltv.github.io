import{a as se}from"./chunk-JE3FXFC3.js";import{f as Re,g as Le}from"./chunk-ODTSDC7S.js";import{a as ie}from"./chunk-HC6MZPB3.js";import{c as Z,e as Be,f as ne,i as Me,j as oe,k as Te}from"./chunk-YWZIUTR5.js";import"./chunk-HU6UQ5WL.js";import{i as we,j as xe,l as Se,m as ve,n as te,q as Ae,r as $,s as Ee,u as De,v as U}from"./chunk-IE6PXRL6.js";import{a as c}from"./chunk-FERD25SW.js";import{a as ge}from"./chunk-T7KBBLU3.js";import{a as be,b as ke,c as ye}from"./chunk-SYQESB6R.js";import{c as Ce}from"./chunk-LEIMCQKJ.js";import{a as ue}from"./chunk-WMEG6PAA.js";import{a as V}from"./chunk-MM5QLNJM.js";import{c as fe,d as me,h as Y,i as q,m as F}from"./chunk-72KDLSWN.js";import{a as ee}from"./chunk-5OMUW5VI.js";import"./chunk-OBXDPQ3V.js";import"./chunk-7YR6A2SD.js";import{a as H}from"./chunk-MCRJI3T3.js";import{a as re,c as G}from"./chunk-JNW6QASV.js";import{b as Ie,e as ae,g as R,h as Ye,k as Pe,l as C}from"./chunk-XI2YEWEB.js";import{f as D}from"./chunk-RW4GY4BD.js";var z=function(e){return e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT",e}(z||{}),pe={getEngine(){let e=ue();if(e!=null&&e.isPluginAvailable("StatusBar"))return e.Plugins.StatusBar},setStyle(e){let t=this.getEngine();t&&t.setStyle(e)},getStyle:function(){return D(this,null,function*(){let e=this.getEngine();if(!e)return z.Default;let{style:t}=yield e.getInfo();return t})}},de=(e,t)=>{if(t===1)return 0;let n=1/(1-t),i=-(t*n);return e*n+i},We=()=>{!H||H.innerWidth>=768||pe.setStyle({style:z.Dark})},le=(e=z.Default)=>{!H||H.innerWidth>=768||pe.setStyle({style:e})},He=(e,t)=>D(void 0,null,function*(){typeof e.canDismiss!="function"||!(yield e.canDismiss(void 0,$))||(t.isRunning()?t.onFinish(()=>{e.dismiss(void 0,"handler")},{oneTimeCallback:!0}):e.dismiss(void 0,"handler"))}),ce=e=>.00255275*2.71828**(-14.9619*e)-1.00255*2.71828**(-.0380968*e)+1,J={MIN_PRESENTING_SCALE:.915},$e=(e,t,n,i)=>{let o=e.offsetHeight,a=!1,r=!1,d=null,k=null,y=.2,f=!0,g=0,m=()=>d&&Z(d)?d.scrollY:!0,N=ee({el:e,gestureName:"modalSwipeToClose",gesturePriority:Ee,direction:"y",threshold:10,canStart:h=>{let p=h.event.target;return p===null||!p.closest?!0:(d=ne(p),d?(Z(d)?k=Y(d).querySelector(".inner-scroll"):k=d,!!!d.querySelector("ion-refresher")&&k.scrollTop===0):p.closest("ion-footer")===null)},onStart:h=>{let{deltaY:p}=h;f=m(),r=e.canDismiss!==void 0&&e.canDismiss!==!0,p>0&&d&&oe(d),t.progressStart(!0,a?1:0)},onMove:h=>{let{deltaY:p}=h;p>0&&d&&oe(d);let v=h.deltaY/o,B=v>=0&&r,M=B?y:.9999,O=B?ce(v/M):v,A=F(1e-4,O,M);t.progressStep(A),A>=.5&&g<.5?le(n):A<.5&&g>=.5&&We(),g=A},onEnd:h=>{let p=h.velocityY,v=h.deltaY/o,B=v>=0&&r,M=B?y:.9999,O=B?ce(v/M):v,A=F(1e-4,O,M),Q=(h.deltaY+p*1e3)/o,I=!B&&Q>=.5,W=I?-.001:.001;I?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),W+=ie([0,0],[.32,.72],[0,1],[1,1],A)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),W+=ie([0,0],[1,0],[.68,.28],[1,1],A)[0]);let K=Oe(I?v*o:(1-A)*o,p);a=I,N.enable(!1),d&&Te(d,f),t.onFinish(()=>{I||N.enable(!0)}).progressEnd(I?1:0,W,K),B&&A>M/4?He(e,t):I&&i()}});return N},Oe=(e,t)=>F(400,e/Math.abs(t*1.1),500),qe=e=>{let{currentBreakpoint:t,backdropBreakpoint:n}=e,i=n===void 0||n<t,s=i?`calc(var(--backdrop-opacity) * ${t})`:"0",o=c("backdropAnimation").fromTo("opacity",0,s);return i&&o.beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),{wrapperAnimation:c("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:`translateY(${100-t*100}%)`}]),backdropAnimation:o}},Fe=e=>{let{currentBreakpoint:t,backdropBreakpoint:n}=e,i=`calc(var(--backdrop-opacity) * ${de(t,n)})`,s=[{offset:0,opacity:i},{offset:1,opacity:0}],o=[{offset:0,opacity:i},{offset:n,opacity:0},{offset:1,opacity:0}],a=c("backdropAnimation").keyframes(n!==0?o:s);return{wrapperAnimation:c("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:`translateY(${100-t*100}%)`},{offset:1,opacity:1,transform:"translateY(100%)"}]),backdropAnimation:a}},Ge=()=>{let e=c().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),t=c().fromTo("transform","translateY(100vh)","translateY(0vh)");return{backdropAnimation:e,wrapperAnimation:t}},_e=(e,t)=>{let{presentingEl:n,currentBreakpoint:i}=t,s=Y(e),{wrapperAnimation:o,backdropAnimation:a}=i!==void 0?qe(t):Ge();a.addElement(s.querySelector("ion-backdrop")),o.addElement(s.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});let r=c("entering-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(o);if(n){let d=window.innerWidth<768,k=n.tagName==="ION-MODAL"&&n.presentingElement!==void 0,y=Y(n),f=c().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),g=document.body;if(d){let m=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",b=k?"-10px":m,l=J.MIN_PRESENTING_SCALE,w=`translateY(${b}) scale(${l})`;f.afterStyles({transform:w}).beforeAddWrite(()=>g.style.setProperty("background-color","black")).addElement(n).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:w,borderRadius:"10px 10px 0 0"}]),r.addAnimation(f)}else if(r.addAnimation(a),!k)o.fromTo("opacity","0","1");else{let b=`translateY(-10px) scale(${k?J.MIN_PRESENTING_SCALE:1})`;f.afterStyles({transform:b}).addElement(y.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:b}]);let l=c().afterStyles({transform:b}).addElement(y.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:b}]);r.addAnimation([f,l])}}else r.addAnimation(a);return r},ze=()=>{let e=c().fromTo("opacity","var(--backdrop-opacity)",0),t=c().fromTo("transform","translateY(0vh)","translateY(100vh)");return{backdropAnimation:e,wrapperAnimation:t}},Ne=(e,t,n=500)=>{let{presentingEl:i,currentBreakpoint:s}=t,o=Y(e),{wrapperAnimation:a,backdropAnimation:r}=s!==void 0?Fe(t):ze();r.addElement(o.querySelector("ion-backdrop")),a.addElement(o.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});let d=c("leaving-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(n).addAnimation(a);if(i){let k=window.innerWidth<768,y=i.tagName==="ION-MODAL"&&i.presentingElement!==void 0,f=Y(i),g=c().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(b=>{if(b!==1)return;i.style.setProperty("overflow",""),Array.from(m.querySelectorAll("ion-modal:not(.overlay-hidden)")).filter(w=>w.presentingElement!==void 0).length<=1&&m.style.setProperty("background-color","")}),m=document.body;if(k){let b=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",l=y?"-10px":b,w=J.MIN_PRESENTING_SCALE,L=`translateY(${l}) scale(${w})`;g.addElement(i).keyframes([{offset:0,filter:"contrast(0.85)",transform:L,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),d.addAnimation(g)}else if(d.addAnimation(r),!y)a.fromTo("opacity","1","0");else{let l=`translateY(-10px) scale(${y?J.MIN_PRESENTING_SCALE:1})`;g.addElement(f.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:l},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);let w=c().addElement(f.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:l},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);d.addAnimation([g,w])}}else d.addAnimation(r);return d},Ke=()=>{let e=c().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),t=c().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]);return{backdropAnimation:e,wrapperAnimation:t}},je=(e,t)=>{let{currentBreakpoint:n}=t,i=Y(e),{wrapperAnimation:s,backdropAnimation:o}=n!==void 0?qe(t):Ke();return o.addElement(i.querySelector("ion-backdrop")),s.addElement(i.querySelector(".modal-wrapper")),c().addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([o,s])},Ve=()=>{let e=c().fromTo("opacity","var(--backdrop-opacity)",0),t=c().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]);return{backdropAnimation:e,wrapperAnimation:t}},Ue=(e,t)=>{let{currentBreakpoint:n}=t,i=Y(e),{wrapperAnimation:s,backdropAnimation:o}=n!==void 0?Fe(t):Ve();return o.addElement(i.querySelector("ion-backdrop")),s.addElement(i.querySelector(".modal-wrapper")),c().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([o,s])},Ze=(e,t,n,i,s,o,a=[],r,d,k)=>{let y=[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}],f=[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-s,opacity:0},{offset:1,opacity:0}],g={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:s!==0?f:y},m=e.querySelector("ion-content"),b=n.clientHeight,l=i,w=0,L=!1,N=.95,h=o.childAnimations.find(u=>u.id==="wrapperAnimation"),p=o.childAnimations.find(u=>u.id==="backdropAnimation"),v=a[a.length-1],B=a[0],M=()=>{e.style.setProperty("pointer-events","auto"),t.style.setProperty("pointer-events","auto"),e.classList.remove(U)},O=()=>{e.style.setProperty("pointer-events","none"),t.style.setProperty("pointer-events","none"),e.classList.add(U)};h&&p&&(h.keyframes([...g.WRAPPER_KEYFRAMES]),p.keyframes([...g.BACKDROP_KEYFRAMES]),o.progressStart(!0,1-l),l>s?M():O()),m&&l!==v&&(m.scrollY=!1);let A=u=>{let x=ne(u.event.target);if(l=r(),l===1&&x){let S=Z(x)?Y(x).querySelector(".inner-scroll"):x;return!!!x.querySelector("ion-refresher")&&S.scrollTop===0}return!0},Q=u=>{L=e.canDismiss!==void 0&&e.canDismiss!==!0&&B===0,u.deltaY>0&&m&&(m.scrollY=!1),q(()=>{e.focus()}),o.progressStart(!0,1-l)},I=u=>{u.deltaY>0&&m&&(m.scrollY=!1);let x=1-l,S=a.length>1?1-a[1]:void 0,T=x+u.deltaY/b,_=S!==void 0&&T>=S&&L,P=_?N:.9999,E=_&&S!==void 0?S+ce((T-S)/(P-S)):T;w=F(1e-4,E,P),o.progressStep(w)},W=u=>{let x=u.velocityY,S=(u.deltaY+x*350)/b,T=l-S,_=a.reduce((P,E)=>Math.abs(E-T)<Math.abs(P-T)?E:P);K({breakpoint:_,breakpointOffset:w,canDismiss:L,animated:!0})},K=u=>{let{breakpoint:x,canDismiss:S,breakpointOffset:T,animated:_}=u,P=S&&x===0,E=P?l:x,he=E!==0;return l=0,h&&p&&(h.keyframes([{offset:0,transform:`translateY(${T*100}%)`},{offset:1,transform:`translateY(${(1-E)*100}%)`}]),p.keyframes([{offset:0,opacity:`calc(var(--backdrop-opacity) * ${de(1-T,s)})`},{offset:1,opacity:`calc(var(--backdrop-opacity) * ${de(E,s)})`}]),o.progressStep(0)),j.enable(!1),P?He(e,o):he||d(),m&&E===a[a.length-1]&&(m.scrollY=!0),new Promise(X=>{o.onFinish(()=>{he?h&&p?q(()=>{h.keyframes([...g.WRAPPER_KEYFRAMES]),p.keyframes([...g.BACKDROP_KEYFRAMES]),o.progressStart(!0,1-E),l=E,k(l),l>s?M():O(),j.enable(!0),X()}):(j.enable(!0),X()):X()},{oneTimeCallback:!0}).progressEnd(1,0,_?500:0)})},j=ee({el:n,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:A,onStart:Q,onMove:I,onEnd:W});return{gesture:j,moveSheetToBreakpoint:K}},Je=':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, var(--ion-background-color-step-350, #c0c0be));cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0;border-end-start-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0;border-end-start-radius:0}',Qe=Je,Xe=':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, var(--ion-background-color-step-350, #c0c0be));cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}',et=Xe,tt=class{constructor(e){Ie(this,e),this.didPresent=C(this,"ionModalDidPresent",7),this.willPresent=C(this,"ionModalWillPresent",7),this.willDismiss=C(this,"ionModalWillDismiss",7),this.didDismiss=C(this,"ionModalDidDismiss",7),this.ionBreakpointDidChange=C(this,"ionBreakpointDidChange",7),this.didPresentShorthand=C(this,"didPresent",7),this.willPresentShorthand=C(this,"willPresent",7),this.willDismissShorthand=C(this,"willDismiss",7),this.didDismissShorthand=C(this,"didDismiss",7),this.ionMount=C(this,"ionMount",7),this.lockController=ge(),this.triggerController=De(),this.coreDelegate=ye(),this.isSheetModal=!1,this.inheritedAttributes={},this.inline=!1,this.gestureAnimationDismissing=!1,this.onHandleClick=()=>{let{sheetTransition:t,handleBehavior:n}=this;n!=="cycle"||t!==void 0||this.moveToNextBreakpoint()},this.onBackdropTap=()=>{let{sheetTransition:t}=this;t===void 0&&this.dismiss(void 0,Ae)},this.onLifecycle=t=>{let n=this.usersElement,i=nt[t.type];if(n&&i){let s=new CustomEvent(i,{bubbles:!1,cancelable:!1,detail:t.detail});n.dispatchEvent(s)}},this.presented=!1,this.hasController=!1,this.overlayIndex=void 0,this.delegate=void 0,this.keyboardClose=!0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.breakpoints=void 0,this.initialBreakpoint=void 0,this.backdropBreakpoint=0,this.handle=void 0,this.handleBehavior="none",this.component=void 0,this.componentProps=void 0,this.cssClass=void 0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.presentingElement=void 0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0,this.keepContentsMounted=!1,this.focusTrap=!0,this.canDismiss=!0}onIsOpenChange(e,t){e===!0&&t===!1?this.present():e===!1&&t===!0&&this.dismiss()}triggerChanged(){let{trigger:e,el:t,triggerController:n}=this;e&&n.addClickListener(t,e)}breakpointsChanged(e){e!==void 0&&(this.sortedBreakpoints=e.sort((t,n)=>t-n))}connectedCallback(){let{el:e}=this;we(e),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}componentWillLoad(){var e;let{breakpoints:t,initialBreakpoint:n,el:i,htmlAttributes:s}=this,o=this.isSheetModal=t!==void 0&&n!==void 0,a=["aria-label","role"];this.inheritedAttributes=me(i,a),s!==void 0&&a.forEach(r=>{s[r]&&(this.inheritedAttributes=Object.assign(Object.assign({},this.inheritedAttributes),{[r]:s[r]}),delete s[r])}),o&&(this.currentBreakpoint=this.initialBreakpoint),t!==void 0&&n!==void 0&&!t.includes(n)&&V("Your breakpoints array must include the initialBreakpoint value."),!((e=this.htmlAttributes)===null||e===void 0)&&e.id||xe(this.el)}componentDidLoad(){this.isOpen===!0&&q(()=>this.present()),this.breakpointsChanged(this.breakpoints),this.triggerChanged()}getDelegate(e=!1){if(this.workingDelegate&&!e)return{delegate:this.workingDelegate,inline:this.inline};let t=this.el.parentNode,n=this.inline=t!==null&&!this.hasController,i=this.workingDelegate=n?this.delegate||this.coreDelegate:this.delegate;return{inline:n,delegate:i}}checkCanDismiss(e,t){return D(this,null,function*(){let{canDismiss:n}=this;return typeof n=="function"?n(e,t):n})}present(){return D(this,null,function*(){let e=yield this.lockController.lock();if(this.presented){e();return}let{presentingElement:t,el:n}=this;this.currentBreakpoint=this.initialBreakpoint;let{inline:i,delegate:s}=this.getDelegate(!0);this.ionMount.emit(),this.usersElement=yield be(s,n,this.component,["ion-page"],this.componentProps,i),fe(n)?yield Le(this.usersElement):this.keepContentsMounted||(yield Re()),ae(()=>this.el.classList.add("show-modal"));let o=t!==void 0;o&&G(this)==="ios"&&(this.statusBarStyle=yield pe.getStyle(),We()),yield Se(this,"modalEnter",_e,je,{presentingEl:t,currentBreakpoint:this.initialBreakpoint,backdropBreakpoint:this.backdropBreakpoint}),typeof window<"u"&&(this.keyboardOpenCallback=()=>{this.gesture&&(this.gesture.enable(!1),q(()=>{this.gesture&&this.gesture.enable(!0)}))},window.addEventListener(se,this.keyboardOpenCallback)),this.isSheetModal?this.initSheetGesture():o&&this.initSwipeToClose(),e()})}initSwipeToClose(){var e;if(G(this)!=="ios")return;let{el:t}=this,n=this.leaveAnimation||re.get("modalLeave",Ne),i=this.animation=n(t,{presentingEl:this.presentingElement});if(!Be(t)){Me(t);return}let o=(e=this.statusBarStyle)!==null&&e!==void 0?e:z.Default;this.gesture=$e(t,i,o,()=>{this.gestureAnimationDismissing=!0,le(this.statusBarStyle),this.animation.onFinish(()=>D(this,null,function*(){yield this.dismiss(void 0,$),this.gestureAnimationDismissing=!1}))}),this.gesture.enable(!0)}initSheetGesture(){let{wrapperEl:e,initialBreakpoint:t,backdropBreakpoint:n}=this;if(!e||t===void 0)return;let i=this.enterAnimation||re.get("modalEnter",_e),s=this.animation=i(this.el,{presentingEl:this.presentingElement,currentBreakpoint:t,backdropBreakpoint:n});s.progressStart(!0,1);let{gesture:o,moveSheetToBreakpoint:a}=Ze(this.el,this.backdropEl,e,t,n,s,this.sortedBreakpoints,()=>{var r;return(r=this.currentBreakpoint)!==null&&r!==void 0?r:0},()=>this.sheetOnDismiss(),r=>{this.currentBreakpoint!==r&&(this.currentBreakpoint=r,this.ionBreakpointDidChange.emit({breakpoint:r}))});this.gesture=o,this.moveSheetToBreakpoint=a,this.gesture.enable(!0)}sheetOnDismiss(){this.gestureAnimationDismissing=!0,this.animation.onFinish(()=>D(this,null,function*(){this.currentBreakpoint=0,this.ionBreakpointDidChange.emit({breakpoint:this.currentBreakpoint}),yield this.dismiss(void 0,$),this.gestureAnimationDismissing=!1}))}dismiss(e,t){return D(this,null,function*(){var n;if(this.gestureAnimationDismissing&&t!==$)return!1;let i=yield this.lockController.lock();if(t!=="handler"&&!(yield this.checkCanDismiss(e,t)))return i(),!1;let{presentingElement:s}=this;s!==void 0&&G(this)==="ios"&&le(this.statusBarStyle),typeof window<"u"&&this.keyboardOpenCallback&&(window.removeEventListener(se,this.keyboardOpenCallback),this.keyboardOpenCallback=void 0);let a=yield ve(this,e,t,"modalLeave",Ne,Ue,{presentingEl:s,currentBreakpoint:(n=this.currentBreakpoint)!==null&&n!==void 0?n:this.initialBreakpoint,backdropBreakpoint:this.backdropBreakpoint});if(a){let{delegate:r}=this.getDelegate();yield ke(r,this.usersElement),ae(()=>this.el.classList.remove("show-modal")),this.animation&&this.animation.destroy(),this.gesture&&this.gesture.destroy()}return this.currentBreakpoint=void 0,this.animation=void 0,i(),a})}onDidDismiss(){return te(this.el,"ionModalDidDismiss")}onWillDismiss(){return te(this.el,"ionModalWillDismiss")}setCurrentBreakpoint(e){return D(this,null,function*(){if(!this.isSheetModal){V("setCurrentBreakpoint is only supported on sheet modals.");return}if(!this.breakpoints.includes(e)){V(`Attempted to set invalid breakpoint value ${e}. Please double check that the breakpoint value is part of your defined breakpoints.`);return}let{currentBreakpoint:t,moveSheetToBreakpoint:n,canDismiss:i,breakpoints:s,animated:o}=this;t!==e&&n&&(this.sheetTransition=n({breakpoint:e,breakpointOffset:1-t,canDismiss:i!==void 0&&i!==!0&&s[0]===0,animated:o}),yield this.sheetTransition,this.sheetTransition=void 0)})}getCurrentBreakpoint(){return D(this,null,function*(){return this.currentBreakpoint})}moveToNextBreakpoint(){return D(this,null,function*(){let{breakpoints:e,currentBreakpoint:t}=this;if(!e||t==null)return!1;let n=e.filter(a=>a!==0),s=(n.indexOf(t)+1)%n.length,o=n[s];return yield this.setCurrentBreakpoint(o),!0})}render(){let{handle:e,isSheetModal:t,presentingElement:n,htmlAttributes:i,handleBehavior:s,inheritedAttributes:o,focusTrap:a}=this,r=e!==!1&&t,d=G(this),k=n!==void 0&&d==="ios",y=s==="cycle";return R(Ye,Object.assign({key:"b4da5111fe4719fa450c39b2d4bd884a302a7924","no-router":!0,tabindex:"-1"},i,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({[d]:!0,"modal-default":!k&&!t,"modal-card":k,"modal-sheet":t,"overlay-hidden":!0,[U]:a===!1},Ce(this.cssClass)),onIonBackdropTap:this.onBackdropTap,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),R("ion-backdrop",{key:"c12dbf747e0eb914eaf1331798548ffc7e147763",ref:f=>this.backdropEl=f,visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),d==="ios"&&R("div",{key:"da546ee80c6576b5acc66e959fd5009e0b9a8160",class:"modal-shadow"}),R("div",Object.assign({key:"306ebe6427440ad5f7ed36d590e562d15a503b75",role:"dialog"},o,{"aria-modal":"true",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:f=>this.wrapperEl=f}),r&&R("button",{key:"c5d17e346fe255a7c0cacbbf15c0083f2d09c488",class:"modal-handle",tabIndex:y?0:-1,"aria-label":"Activate to adjust the size of the dialog overlaying the screen",onClick:y?this.onHandleClick:void 0,part:"handle"}),R("slot",{key:"5cc714170a00b67f3eda0cd1d6f37c1489a99c83"})))}get el(){return Pe(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}},nt={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};tt.style={ios:Qe,md:et};export{tt as ion_modal};
