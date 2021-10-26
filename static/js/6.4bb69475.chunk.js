(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[6],{100:function(e,t,a){"use strict";a.r(t);var n=a(1),c=(a(76),a(4)),s=a.n(c),i=a(23),o=a(62),r=a(2);a(77);const l=({lineWidth:e,lineHeight:t,notchWidth:a,notchHeight:c,collapseDelay:i,collapsed:o,className:l,style:d})=>Object(n.jsxs)("div",{className:s()("divider",l),style:{"--lineWidth":e,"--lineHeight":t,"--notchWidth":a,"--notchHeight":c,"--collapseDelay":Object(r.c)(i),...d},children:[Object(n.jsx)("div",{className:s()("divider__line",{"divider__line--collapsed":o})}),Object(n.jsx)("div",{className:s()("divider__notch",{"divider__notch--collapsed":o}),style:{"--collapseDelay":Object(r.c)(i+160)}})]});l.defaultProps={lineWidth:"100%",lineHeight:"2px",notchWidth:"90px",notchHeight:"10px",collapsed:!1,collapseDelay:0};var d=l,u=a(59),b=a(14),h=a(0),j=a(56),m=a(57);a(78);var p=({className:e,resize:t="none",value:a,onChange:c,minRows:i=1,maxRows:o,...r})=>{const[l,d]=Object(h.useState)(i),[u,b]=Object(h.useState)(),j=Object(h.useRef)();Object(h.useEffect)((()=>{const e=getComputedStyle(j.current),t=parseInt(e.lineHeight,10),a=parseInt(e.paddingTop,10)+parseInt(e.paddingBottom,10);b({lineHeight:t,paddingHeight:a})}),[]);return Object(n.jsx)("textarea",{className:s()("textarea",e),ref:j,onChange:e=>{c(e);const{lineHeight:t,paddingHeight:a}=u,n=e.target.rows;e.target.rows=i;const s=~~((e.target.scrollHeight-a)/t);s===n&&(e.target.rows=s),o&&s>=o&&(e.target.rows=o,e.target.scrollTop=e.target.scrollHeight),d(o&&s>o?o:s)},style:{"--resize":t},rows:l,value:a,...r})},O=a(9),_=a(22),g=a(10);a(79);var x=({id:e,label:t,hasValue:a,value:c,multiline:i,className:o,style:l,error:d,onBlur:u,...x})=>{const[f,v]=Object(h.useState)(!1),y=Object(O.c)(),N=Object(h.useRef)(),w=e||`input-${y}`,$=`${w}-label`,S=`${w}-error`,H=i?p:"input";return Object(n.jsxs)("div",{className:s()("input",o,{"input--error":!!d}),style:l,children:[Object(n.jsxs)("div",{className:"input__content",children:[Object(n.jsx)("label",{className:s()("input__label",{"input__label--focused":f,"input__label--has-value":!!c}),id:$,htmlFor:w,children:t}),Object(n.jsx)(H,{className:"input__element",id:w,"aria-labelledby":$,"aria-describedby":d?S:void 0,onFocus:()=>v(!0),onBlur:e=>{v(!1),u&&u(e)},value:c,...x}),Object(n.jsx)("div",{className:s()("input__underline",{"input__underline--focused":f})})]}),Object(n.jsx)(j.a,{component:null,children:!!d&&Object(n.jsx)(m.a,{timeout:Object(r.b)(g.b.base.durationM),children:e=>{var t;return Object(n.jsx)("div",{className:s()("input__error",`input__error--${e}`),id:S,role:"alert",style:{"--height":Object(_.a)(e)?Object(r.d)(null===(t=N.current)||void 0===t?void 0:t.getBoundingClientRect().height):"0px"},children:Object(n.jsxs)("div",{className:"input__error-message",ref:N,children:[Object(n.jsx)(b.a,{icon:"error"}),d]})})}})})]})},f=a(64),v=a(66),y=a(20),N=a(27);const w=g.b.base.durationS;function $(e,t=Object(r.c)(0),a=1){const n=Object(r.b)(e)*a;return{"--delay":Object(r.c)((Object(r.b)(t)+n).toFixed(0))}}t.default=()=>{const{status:e}=Object(O.j)(),t=Object(h.useRef)(),a=Object(O.b)(""),c=Object(O.b)(""),[l,p]=Object(h.useState)(!1),[S,H]=Object(h.useState)(!1),[M,R]=Object(h.useState)("");Object(O.k)();const k=Object(h.useCallback)((async e=>{if(e.preventDefault(),R(""),!l)try{p(!0);const e=await fetch("https://api.hamishw.com/message",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.value,message:c.value})}),t=await e.json(),n=function({status:e,errorMessage:t,fallback:a="There was a problem with your request"}){return 200!==e&&(t||{500:"There was a problem with the server, try again later",404:"There was a problem connecting to the server. Make sure you are connected to the internet"}[e]||a)}({status:null===e||void 0===e?void 0:e.status,errorMessage:null===t||void 0===t?void 0:t.error,fallback:"There was a problem sending your message"});if(n)throw new Error(n);H(!0),p(!1)}catch(t){p(!1),R(t.message)}}),[a.value,c.value,l]);return Object(n.jsxs)(f.a,{className:s()("contact",`contact--${e}`),children:[Object(n.jsxs)(y.a,{children:[Object(n.jsx)("title",{children:"Contact | Hamish Williams"}),Object(n.jsx)("meta",{name:"description",content:"Send me a message if you\u2019re interested in discussing a project or if you just want to say hi"})]}),Object(n.jsxs)(j.a,{component:null,children:[!S&&Object(n.jsx)(m.a,{appear:!0,mountOnEnter:!0,unmountOnExit:!0,timeout:1600,onEnter:_.b,children:e=>Object(n.jsxs)("form",{className:"contact__form",method:"post",onSubmit:k,children:[Object(n.jsx)(u.a,{className:s()("contact__title",`contact__title--${e}`,{"contact__title--hidden":N.a}),level:3,as:"h1",style:$(g.b.base.durationXS,w,.3),children:Object(n.jsx)(o.a,{text:"Say hello",start:"exited"!==e&&!N.a,delay:300})}),Object(n.jsx)(d,{className:s()("contact__divider",`contact__divider--${e}`,{"contact__divider--hidden":N.a}),style:$(g.b.base.durationXS,w,.4)}),Object(n.jsx)(x,{required:!0,className:s()("contact__input",`contact__input--${e}`,{"contact__input--hidden":N.a}),style:$(g.b.base.durationXS,w),autoComplete:"email",label:"Your Email",type:"email",maxLength:512,...a}),Object(n.jsx)(x,{required:!0,multiline:!0,className:s()("contact__input",`contact__input--${e}`,{"contact__input--hidden":N.a}),style:$(g.b.base.durationS,w),autoComplete:"off",label:"Message",maxLength:4096,...c}),Object(n.jsx)(j.a,{component:null,children:!!M&&Object(n.jsx)(m.a,{timeout:Object(r.b)(g.b.base.durationM),children:e=>{var a;return Object(n.jsx)("div",{className:s()("contact__form-error",`contact__form-error--${e}`),style:{"--height":Object(_.a)(e)?Object(r.d)(null===(a=t.current)||void 0===a?void 0:a.getBoundingClientRect().height):"0px"},children:Object(n.jsx)("div",{className:"contact__form-error-content",ref:t,children:Object(n.jsxs)("div",{className:"contact__form-error-message",children:[Object(n.jsx)(b.a,{className:"contact__form-error-icon",icon:"error"}),M]})})})}})}),Object(n.jsx)(i.a,{className:s()("contact__button",`contact__button--${e}`,{"contact__button--hidden":N.a,"contact__button--sending":l}),style:$(g.b.base.durationM,w),disabled:l,loading:l,loadingText:"Sending...",icon:"send",type:"submit",children:"Send Message"})]})}),S&&Object(n.jsx)(m.a,{appear:!0,mountOnEnter:!0,unmountOnExit:!0,onEnter:_.b,timeout:0,children:e=>Object(n.jsxs)("div",{className:"contact__complete","aria-live":"polite",children:[Object(n.jsx)(u.a,{level:3,as:"h3",className:s()("contact__complete-title",`contact__complete-title--${e}`),children:"Message Sent"}),Object(n.jsx)(v.a,{size:"l",className:s()("contact__complete-text",`contact__complete-text--${e}`),style:$(g.b.base.durationXS),children:"I\u2019ll get back to you within a couple days, sit tight"}),Object(n.jsx)(i.a,{secondary:!0,iconHoverShift:!0,className:s()("contact__complete-button",`contact__complete-button--${e}`),style:$(g.b.base.durationM),href:"/",icon:"chevronRight",children:"Back to homepage"})]})})]})]})}},58:function(e,t,a){},59:function(e,t,a){"use strict";var n=a(1),c=a(0),s=a(4),i=a.n(s),o=a(20),r=a.p+"static/media/gotham-bold.73ce573b.woff2";a(58);t.a=({children:e,level:t=1,as:a,align:s="auto",weight:l="medium",className:d,...u})=>{const b=Math.min(Math.max(t,0),4),h=a||`h${Math.max(b,1)}`;return Object(n.jsxs)(c.Fragment,{children:["bold"===l&&Object(n.jsxs)(o.a,{children:[Object(n.jsx)("link",{rel:"preload",href:r,as:"font",crossorigin:""}),Object(n.jsx)("style",{children:`\n              @font-face {\n                font-family: 'Gotham';\n                font-weight: 700;\n                src: url(${r}) format('woff2');\n                font-display: swap;\n              }\n            `})]}),Object(n.jsx)(h,{className:i()(d,"heading",`heading--align-${s}`,`heading--level-${b}`,`heading--weight-${l}`),...u,children:e})]})}},62:function(e,t,a){"use strict";var n=a(1),c=a(0),s=a(4),i=a.n(s),o=a(9),r=a(61),l=a(21),d=a(27);a(63);const u=["\u30a2","\u30a4","\u30a6","\u30a8","\u30aa","\u30ab","\u30ad","\u30af","\u30b1","\u30b3","\u30b5","\u30b7","\u30b9","\u30bb","\u30bd","\u30bf","\u30c1","\u30c4","\u30c6","\u30c8","\u30ca","\u30cb","\u30cc","\u30cd","\u30ce","\u30cf","\u30d2","\u30d5","\u30d8","\u30db","\u30de","\u30df","\u30e0","\u30e1","\u30e2","\u30e4","\u30e6","\u30e8","\u30fc","\u30e9","\u30ea","\u30eb","\u30ec","\u30ed","\u30ef","\u30f0","\u30f1","\u30f2","\u30f3","\u30ac","\u30ae","\u30b0","\u30b2","\u30b4","\u30b6","\u30b8","\u30ba","\u30bc","\u30be","\u30c0","\u30c2","\u30c5","\u30c7","\u30c9","\u30d0","\u30d3","\u30d6","\u30d9","\u30dc","\u30d1","\u30d4","\u30d7","\u30da","\u30dd"],b="glyph",h="value";const j=({text:e,start:t=!0,delay:a=0,className:s,...j})=>{const m=Object(c.useRef)([{type:b,value:""}]),p=Object(c.useRef)(),O=Object(o.h)();return Object(c.useEffect)((()=>{const n=p.current,c=e.split("");let s;const i=()=>{const e=m.current.map((e=>`<span class="decoder-text__${e.type}">${e.value}</span>`));n.innerHTML=e.join("")},o=Object(r.g)(0,(e=>{m.current=function(e,t,a){return e.map(((e,n)=>{if(n<a)return{type:h,value:e};if(a%1<.5){const e=Math.floor(Math.random()*u.length);return{type:b,value:u[e]}}return{type:b,value:t[n].value}}))}(c,m.current,e),i()}));return!t||s||O||d.a||(s=Object(r.a)(Object(r.b)(a),Object(r.e)({from:0,to:c.length,stiffness:8,damping:5})).start(o)),O&&(m.current=c.map(((e,t)=>({type:h,value:c[t]}))),i()),()=>{s&&s.stop()}}),[O,t,a,e]),Object(n.jsxs)("span",{className:i()("decoder-text",s),...j,children:[Object(n.jsx)(l.a,{className:"decoder-text__label",children:e}),Object(n.jsx)("span",{"aria-hidden":!0,className:"decoder-text__content",ref:p})]})};t.a=Object(c.memo)(j)},63:function(e,t,a){},64:function(e,t,a){"use strict";var n=a(1),c=a(0),s=a(4),i=a.n(s);a(65);const o=Object(c.forwardRef)((({as:e="div",children:t,className:a,...c},s)=>Object(n.jsx)(e,{className:i()("section",a),ref:s,...c,children:t})));t.a=o},65:function(e,t,a){},66:function(e,t,a){"use strict";var n=a(1),c=a(4),s=a.n(c);a(67);t.a=({children:e,size:t="m",as:a="p",align:c="auto",weight:i="auto",secondary:o,className:r,...l})=>Object(n.jsx)(a,{className:s()(r,"text",`text--align-${c}`,`text--size-${t}`,`text--weight-${i}`,{"text--secondary":o}),...l,children:e})},67:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){}}]);
//# sourceMappingURL=6.4bb69475.chunk.js.map