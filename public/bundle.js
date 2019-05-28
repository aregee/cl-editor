var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function i(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function s(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function h(){return u(" ")}function f(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function g(t,e){e=""+e,t.data!==e&&(t.data=e)}function m(t,e,n){t.style.setProperty(e,n)}let v;function b(t){v=t}function p(t){(function(){if(!v)throw new Error("Function called outside component initialization");return v})().$$.on_mount.push(t)}function x(){const t=v;return(e,n)=>{const o=t.$$.callbacks[e];if(o){const i=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach(e=>{e.call(t,i)})}}}const w=[],k=Promise.resolve();let H=!1;const y=[],z=[],M=[];function _(t){y.push(t)}function $(t){z.push(t)}function B(){const t=new Set;do{for(;w.length;){const t=w.shift();b(t),C(t.$$)}for(;y.length;)y.shift()();for(;z.length;){const e=z.pop();t.has(e)||(e(),t.add(e))}}while(w.length);for(;M.length;)M.pop()();H=!1}function C(t){t.fragment&&(t.update(t.dirty),o(t.before_render),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_render.forEach($))}function L(t,e){t.$$.dirty||(w.push(t),H||(H=!0,k.then(B)),t.$$.dirty=n()),t.$$.dirty[e]=!0}function j(l,r,c,a,s,d){const u=v;b(l);const h=r.props||{},f=l.$$={fragment:null,ctx:null,props:d,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:null};let g=!1;var m;f.ctx=c?c(l,h,(t,e)=>{f.ctx&&s(f.ctx[t],f.ctx[t]=e)&&(f.bound[t]&&f.bound[t](e),g&&L(l,t))}):h,f.update(),g=!0,o(f.before_render),f.fragment=a(f.ctx),r.target&&(r.hydrate?f.fragment.l((m=r.target,Array.from(m.childNodes))):f.fragment.c(),r.intro&&l.$$.fragment.i&&l.$$.fragment.i(),function(t,n,l){const{fragment:r,on_mount:c,on_destroy:a,after_render:s}=t.$$;r.m(n,l),$(()=>{const n=c.map(e).filter(i);a?a.push(...n):o(n),t.$$.on_mount=[]}),s.forEach($)}(l,r.target,r.anchor),B()),b(u)}class E{$destroy(){var e,n;n=!0,(e=this).$$&&(o(e.$$.on_destroy),e.$$.fragment.d(n),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={}),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}let N={};const O=(t,e=null)=>{document.execCommand(t,!1,e)},T=(t,e)=>{if(e=e||(t&&t.tagName?[t.tagName]:[]),!t||!t.parentNode)return e;const n=(t=t.parentNode).tagName;return t.style&&t.getAttribute&&[t.style.textAlign||t.getAttribute("align"),t.style.color||"FONT"===n&&"forecolor",t.style.backgroundColor&&"backcolor"].filter(t=>t).forEach(t=>e.push(t)),"DIV"===n?e:(e.push(n),T(t,e).filter(t=>null!=t))},R=t=>{const e=document.getSelection();if(N.range=null,e.rangeCount){let n,o=N.range=e.getRangeAt(0),i=document.createRange();i.selectNodeContents(t),i.setEnd(o.startContainer,o.startOffset),n=(i+"").length,N.metaRange={start:n,end:n+(o+"").length}}},S=t=>{let e,n=N.metaRange,o=N.range,i=document.getSelection();if(o){if(n&&n.start!==n.end){let o,i=0,l=[t],r=!1,c=!1;for(e=document.createRange();!c&&(o=l.pop());)if(3===o.nodeType){let t=i+o.length;!r&&n.start>=i&&n.start<=t&&(e.setStart(o,n.start-i),r=!0),r&&n.end>=i&&n.end<=t&&(e.setEnd(o,n.end-i),c=!0),i=t}else{let t=o.childNodes,e=t.length;for(;e>0;)e-=1,l.push(t[e])}}i.removeAllRanges(),i.addRange(e||o)}},A=t=>{const e=t.match(/<!--StartFragment-->(.*?)<!--EndFragment-->/);let n=e&&e[1]||t;return n=n.replace(/\r?\n|\r/g," ").replace(/<!--(.*?)-->/g,"").replace(new RegExp("<(/)*(meta|link|span|\\?xml:|st1:|o:|font|w:sdt)(.*?)>","gi"),"").replace(/<!\[if !supportLists\]>(.*?)<!\[endif\]>/gi,"").replace(/style="[^"]*"/gi,"").replace(/style='[^']*'/gi,"").replace(/&nbsp;/gi," ").replace(/>(\s+)</g,"><").replace(/class="[^"]*"/gi,"").replace(/class='[^']*'/gi,"").replace(/<[^\/].*?>/g,t=>t.split(/[ >]/g)[0]+">").trim(),n=P(n)},F=(t,e)=>{Array.from(t).forEach(t=>{e.some(e=>e===t.tagName.toLowerCase())&&(t.children.length&&F(t.children,e),(t=>{const e=document.createDocumentFragment();for(;t.firstChild;){const n=t.removeChild(t.firstChild);e.appendChild(n)}t.parentNode.replaceChild(e,t)})(t))})},U=t=>Object.keys(t).map(e=>t[e]),D=(t,e=[])=>{if(e&&e.length){const n={};return e.forEach(e=>{"string"==typeof e?n[e]=Object.assign({},t[e]):t[e.name]?n[e.name]=Object.assign(t[e.name],e):n[e.name]=Object.assign({},e)}),n}return t},P=t=>(["style","script","applet","embed","noframes","noscript"].forEach(e=>{t=t.replace(new RegExp(`<${e}.*?${e}(.*?)>`,"gi"),"")}),t),V=(t,e)=>t===e||!!t.parentElement&&V(t.parentElement,e);function I(t){var e;return{c(){(e=d("span")).textContent="Required",e.className="msg-error svelte-1d1bzev"},m(t,n){c(t,e,n)},d(t){t&&a(e)}}}function q(e){var n,i,l,s,v,b,p,x,w,k,H,y,z,M,$,B,C,L,j,E,N,O,T=e.error&&I();return{c(){var t,o,r;n=d("div"),i=d("div"),l=h(),s=d("div"),v=d("div"),b=d("span"),p=u(e.title),x=h(),w=d("form"),k=d("label"),H=d("input"),y=h(),z=d("span"),M=d("span"),$=u(e.label),B=h(),T&&T.c(),L=h(),(j=d("button")).textContent="Confirm",E=h(),(N=d("button")).textContent="Cancel",i.className="cl-editor-overlay svelte-1d1bzev",b.className="modal-title svelte-1d1bzev",t=H,o="type",null==(r="text")?t.removeAttribute(o):t.setAttribute(o,r),H.name="text",H.className="svelte-1d1bzev",M.className="svelte-1d1bzev",z.className="input-info svelte-1d1bzev",k.className=C="modal-label "+(e.error?"input-error":"")+" svelte-1d1bzev",j.className="modal-button modal-submit svelte-1d1bzev",j.type="submit",N.className="modal-button modal-reset svelte-1d1bzev",N.type="reset",v.className="modal-box svelte-1d1bzev",s.className="cl-editor-modal svelte-1d1bzev",m(n,"display",e.show?"block":"none"),O=[f(i,"click",e.methods.cancel),f(H,"input",e.input_input_handler),f(H,"keyup",e.methods.hideError),f(N,"click",e.methods.cancel),f(w,"submit",e.methods.confirm)]},m(t,o){c(t,n,o),r(n,i),r(n,l),r(n,s),r(s,v),r(v,b),r(b,p),r(v,x),r(v,w),r(w,k),r(k,H),H.value=e.text,_(()=>e.input_binding(H,null)),r(k,y),r(k,z),r(z,M),r(M,$),r(z,B),T&&T.m(z,null),r(w,L),r(w,j),r(w,E),r(w,N)},p(t,e){t.title&&g(p,e.title),t.text&&H.value!==e.text&&(H.value=e.text),t.items&&(e.input_binding(null,H),e.input_binding(H,null)),t.label&&g($,e.label),e.error?T||((T=I()).c(),T.m(z,null)):T&&(T.d(1),T=null),t.error&&C!==(C="modal-label "+(e.error?"input-error":"")+" svelte-1d1bzev")&&(k.className=C),t.show&&m(n,"display",e.show?"block":"none")},i:t,o:t,d(t){t&&a(n),e.input_binding(null,H),T&&T.d(),o(O)}}}function J(t,e,n){const o=x();let i,{show:l=!1,text:r="",event:c="",title:a="",label:s="",error:d=!1}=e;p(()=>{l&&setTimeout(()=>{r.focus()})});let u={confirm:function(t){t.preventDefault(),r?(console.log(r,c),o(c,r),u.cancel()):(n("error",d=!0),i.focus())},cancel:function(){n("show",l=!1),n("text",r=""),n("error",d=!1)},hideError:function(){n("error",d=!1)}};return t.$set=(t=>{"show"in t&&n("show",l=t.show),"text"in t&&n("text",r=t.text),"event"in t&&n("event",c=t.event),"title"in t&&n("title",a=t.title),"label"in t&&n("label",s=t.label),"error"in t&&n("error",d=t.error)}),{show:l,text:r,event:c,title:a,label:s,error:d,inputEl:i,methods:u,input_input_handler:function(){r=this.value,n("text",r)},input_binding:function(t,e){n("inputEl",i=t)}}}class Q extends E{constructor(t){super(),j(this,t,J,q,l,["show","text","event","title","label","error"])}}function W(t,e,n){const o=Object.create(t);return o.btn=e[n],o}function K(t){var e,n,o,i=t.btn.text||"";return{c(){e=d("button"),n=u(i),e.type="button",e.className="color-picker-btn svelte-njq4pk",m(e,"background-color",t.btn.color),o=f(e,"click",t.methods.selectColor(t.btn))},m(t,o){c(t,e,o),r(e,n)},p(o,l){t=l,o.btns&&i!==(i=t.btn.text||"")&&g(n,i),o.btns&&m(e,"background-color",t.btn.color)},d(t){t&&a(e),o()}}}function G(e){for(var n,o,i,l,u,g=e.btns,v=[],b=0;b<g.length;b+=1)v[b]=K(W(e,g,b));return{c(){n=d("div"),o=d("div"),i=h(),l=d("div");for(var t=0;t<v.length;t+=1)v[t].c();o.className="color-picker-overlay svelte-njq4pk",l.className="color-picker-wrapper svelte-njq4pk",m(n,"display",e.show?"block":"none"),u=f(o,"click",e.methods.close)},m(t,e){c(t,n,e),r(n,o),r(n,i),r(n,l);for(var a=0;a<v.length;a+=1)v[a].m(l,null)},p(t,e){if(t.btns||t.methods){g=e.btns;for(var o=0;o<g.length;o+=1){const n=W(e,g,o);v[o]?v[o].p(t,n):(v[o]=K(n),v[o].c(),v[o].m(l,null))}for(;o<v.length;o+=1)v[o].d(1);v.length=g.length}t.show&&m(n,"display",e.show?"block":"none")},i:t,o:t,d(t){t&&a(n),s(v,t),u()}}}function X(t,e,n){const o=x(),i=["ffffff","000000","eeece1","1f497d","4f81bd","c0504d","9bbb59","8064a2","4bacc6","f79646","ffff00","f2f2f2","7f7f7f","ddd9c3","c6d9f0","dbe5f1","f2dcdb","ebf1dd","e5e0ec","dbeef3","fdeada","fff2ca","d8d8d8","595959","c4bd97","8db3e2","b8cce4","e5b9b7","d7e3bc","ccc1d9","b7dde8","fbd5b5","ffe694","bfbfbf","3f3f3f","938953","548dd4","95b3d7","d99694","c3d69b","b2a2c7","b7dde8","fac08f","f2c314","a5a5a5","262626","494429","17365d","366092","953734","76923c","5f497a","92cddc","e36c09","c09100","7f7f7f","0c0c0c","1d1b10","0f243e","244061","632423","4f6128","3f3151","31859b","974806","7f6000"];let{show:l=!1,btns:r=[],event:c=""}=e;p(()=>{n("btns",r=(()=>{const t=i.map(t=>({color:`#${t}`}));return t.push({text:"#",modal:!0}),t})())});let a={close:function(){n("show",l=!1)},selectColor:t=>e=>{e.preventDefault(),console.log(c,t),o(c,t),a.close()}};return t.$set=(t=>{"show"in t&&n("show",l=t.show),"btns"in t&&n("btns",r=t.btns),"event"in t&&n("event",c=t.event)}),{show:l,btns:r,event:c,methods:a}}class Y extends E{constructor(t){super(),j(this,t,X,G,l,["show","btns","event"])}}const Z='<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M31.1 48.9l-6.7 6.7c-.8.8-1.6.9-2.1.9s-1.4-.1-2.1-.9L15 50.4c-1.1-1.1-1.1-3.1 0-4.2l6.1-6.1.2-.2 6.5-6.5c-1.2-.6-2.5-.9-3.8-.9-2.3 0-4.6.9-6.3 2.6L11 41.8c-3.5 3.5-3.5 9.2 0 12.7l5.2 5.2c1.7 1.7 4 2.6 6.3 2.6s4.6-.9 6.3-2.6l6.7-6.7c2.5-2.6 3.1-6.7 1.5-10l-5.9 5.9zM38.7 22.5l6.7-6.7c.8-.8 1.6-.9 2.1-.9s1.4.1 2.1.9l5.2 5.2c1.1 1.1 1.1 3.1 0 4.2l-6.1 6.1-.2.2L42 38c1.2.6 2.5.9 3.8.9 2.3 0 4.6-.9 6.3-2.6l6.7-6.7c3.5-3.5 3.5-9.2 0-12.7l-5.2-5.2c-1.7-1.7-4-2.6-6.3-2.6s-4.6.9-6.3 2.6l-6.7 6.7c-2.7 2.7-3.3 6.9-1.7 10.2l6.1-6.1c0 .1 0 .1 0 0z"></path><path d="M44.2 30.5c.2-.2.4-.6.4-.9 0-.3-.1-.6-.4-.9l-2.3-2.3c-.3-.2-.6-.4-.9-.4-.3 0-.6.1-.9.4L25.9 40.6c-.2.2-.4.6-.4.9 0 .3.1.6.4.9l2.3 2.3c.2.2.6.4.9.4.3 0 .6-.1.9-.4l14.2-14.2zM49.9 55.4h-8.5v-5h8.5v-8.9h5.2v8.9h8.5v5h-8.5v8.9h-5.2v-8.9z"></path></svg>',tt=({editor:t,helper:e,store:n,raw:o,modal:i,colorPicker:l})=>{const r=function(n){R(t),l.$set({show:!0,event:n}),e[n]||(e[n]=!0,l.$on(n,o=>{if(o.detail.modal){i.$set({show:!0,event:"colorHref",title:"Text color",label:"foreColor"===n?"Text color":"Background color"});const o=n;e[`${o}Modal`]||(e[`${o}Modal`]=!0,i.$on("colorHref",e=>{S(t),O(o,e.detail.color)}))}else S(t),O(n,o.detail.color)}))};return{viewHtml:{icon:'<svg viewBox="0 0 72 72" width="17px" height="100%"><path fill="none" stroke="currentColor" stroke-width="8" stroke-miterlimit="10" d="M26.9 17.9L9 36.2 26.9 54M45 54l17.9-18.3L45 17.9"></path></svg>',title:"View HTML",result:function(i){e.showEditor=!e.showEditor,t.style.display=e.showEditor?"block":"none",o.style.display=e.showEditor?"none":"block",e.showEditor?t.innerHTML=o.value:o.value=t.innerHTML,setTimeout(()=>{Object.keys(i.actionObj).forEach(t=>i.actionObj[t].disabled=!e.showEditor),i.actionObj.viewHtml.disabled=!1,i.actionObj.viewHtml.active=!e.showEditor,n.update(t=>Object.assign(t,{actionBtns:U(i.actionObj),actionObj:i.actionObj}))})}},undo:{icon:'<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M61.2 51.2c0-5.1-2.1-9.7-5.4-13.1-3.3-3.3-8-5.4-13.1-5.4H26.1v-12L10.8 36l15.3 15.3V39.1h16.7c3.3 0 6.4 1.3 8.5 3.5 2.2 2.2 3.5 5.2 3.5 8.5h6.4z"></path></svg>',title:"Undo",result:()=>O("undo")},redo:{icon:'<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M10.8 51.2c0-5.1 2.1-9.7 5.4-13.1 3.3-3.3 8-5.4 13.1-5.4H46v-12L61.3 36 45.9 51.3V39.1H29.3c-3.3 0-6.4 1.3-8.5 3.5-2.2 2.2-3.5 5.2-3.5 8.5h-6.5z"></path></svg>',title:"Redo",result:()=>O("redo")},b:{icon:"<b>B</b>",title:"Bold",result:()=>O("bold")},i:{icon:"<i>I</i>",title:"Italic",result:()=>O("italic")},u:{icon:"<u>U</u>",title:"Underline",result:()=>O("underline")},strike:{icon:"<strike>S</strike>",title:"Strike-through",result:()=>O("strikeThrough")},sup:{icon:"A<sup>2</sup>",title:"Superscript",result:()=>O("superscript")},sub:{icon:"A<sub>2</sub>",title:"Subscript",result:()=>O("subscript")},h1:{icon:"<b>H<sub>1</sub></b>",title:"Heading 1",result:()=>O("formatBlock","<H1>")},h2:{icon:"<b>H<sub>2</sub></b>",title:"Heading 2",result:()=>O("formatBlock","<H2>")},p:{icon:"&#182;",title:"Paragraph",result:()=>O("formatBlock","<P>")},blockquote:{icon:"&#8220; &#8221;",title:"Quote",result:()=>O("formatBlock","<BLOCKQUOTE>")},ol:{icon:'<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M27 14h36v8H27zM27 50h36v8H27zM27 32h36v8H27zM11.8 15.8V22h1.8v-7.8h-1.5l-2.1 1 .3 1.3zM12.1 38.5l.7-.6c1.1-1 2.1-2.1 2.1-3.4 0-1.4-1-2.4-2.7-2.4-1.1 0-2 .4-2.6.8l.5 1.3c.4-.3 1-.6 1.7-.6.9 0 1.3.5 1.3 1.1 0 .9-.9 1.8-2.6 3.3l-1 .9V40H15v-1.5h-2.9zM13.3 53.9c1-.4 1.4-1 1.4-1.8 0-1.1-.9-1.9-2.6-1.9-1 0-1.9.3-2.4.6l.4 1.3c.3-.2 1-.5 1.6-.5.8 0 1.2.3 1.2.8 0 .7-.8.9-1.4.9h-.7v1.3h.7c.8 0 1.6.3 1.6 1.1 0 .6-.5 1-1.4 1-.7 0-1.5-.3-1.8-.5l-.4 1.4c.5.3 1.3.6 2.3.6 2 0 3.2-1 3.2-2.4 0-1.1-.8-1.8-1.7-1.9z"></path></svg>',title:"Ordered List",result:()=>O("insertOrderedList")},ul:{icon:'<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M27 14h36v8H27zM27 50h36v8H27zM9 50h9v8H9zM9 32h9v8H9zM9 14h9v8H9zM27 32h36v8H27z"></path></svg>',title:"Unordered List",result:()=>O("insertUnorderedList")},hr:{icon:"&#8213;",title:"Horizontal Line",result:()=>O("insertHorizontalRule")},left:{icon:'<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M9 14h54v8H9zM9 50h54v8H9zM9 32h36v8H9z"></path></svg>',title:"Justify left",result:()=>O("justifyLeft")},right:{icon:'<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M9 14h54v8H9zM9 50h54v8H9zM27 32h36v8H27z"></path></svg>',title:"Justify right",result:()=>O("justifyRight")},center:{icon:'<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M9 14h54v8H9zM9 50h54v8H9zM18 32h36v8H18z"></path></svg>',title:"Justify center",result:()=>O("justifyCenter")},justify:{icon:'<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M9 14h54v8H9zM9 50h54v8H9zM9 32h54v8H9z"></path></svg>',title:"Justify full",result:()=>O("justifyFull")},a:{icon:Z,title:"Insert link",result:function(o){const l=o.actionObj;if(l.a.active){const t=window.getSelection(),e=document.createRange();e.selectNodeContents(document.getSelection().focusNode),t.removeAllRanges(),t.addRange(e),O("unlink"),l.a.title="Insert link",l.a.icon=Z,n.update(t=>Object.assign(t,{actionBtns:U(l),actionObj:t.actionObj}))}else R(t),i.$set({show:!0,event:"linkUrl",title:"Insert link",label:"Url"}),e.link||(e.link=!0,i.$on("linkUrl",e=>{S(t),O("createLink",e.detail),l.a.title="Unlink",l.a.icon='<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M30.9 49.1l-6.7 6.7c-.8.8-1.6.9-2.1.9s-1.4-.1-2.1-.9l-5.2-5.2c-1.1-1.1-1.1-3.1 0-4.2l6.1-6.1.2-.2 6.5-6.5c-1.2-.6-2.5-.9-3.8-.9-2.3 0-4.6.9-6.3 2.6L10.8 42c-3.5 3.5-3.5 9.2 0 12.7l5.2 5.2c1.7 1.7 4 2.6 6.3 2.6s4.6-.9 6.3-2.6l6.7-6.7C38 50.5 38.6 46.3 37 43l-6.1 6.1zM38.5 22.7l6.7-6.7c.8-.8 1.6-.9 2.1-.9s1.4.1 2.1.9l5.2 5.2c1.1 1.1 1.1 3.1 0 4.2l-6.1 6.1-.2.2-6.5 6.5c1.2.6 2.5.9 3.8.9 2.3 0 4.6-.9 6.3-2.6l6.7-6.7c3.5-3.5 3.5-9.2 0-12.7l-5.2-5.2c-1.7-1.7-4-2.6-6.3-2.6s-4.6.9-6.3 2.6l-6.7 6.7c-2.7 2.7-3.3 6.9-1.7 10.2l6.1-6.1z"></path><path d="M44.1 30.7c.2-.2.4-.6.4-.9 0-.3-.1-.6-.4-.9l-2.3-2.3c-.2-.2-.6-.4-.9-.4-.3 0-.6.1-.9.4L25.8 40.8c-.2.2-.4.6-.4.9 0 .3.1.6.4.9l2.3 2.3c.2.2.6.4.9.4.3 0 .6-.1.9-.4l14.2-14.2zM41.3 55.8v-5h22.2v5H41.3z"></path></svg>',n.update(t=>Object.assign(t,{actionBtns:U(l),actionObj:l}))}))}},removeFormat:{icon:'<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M58.2 54.6L52 48.5l3.6-3.6 6.1 6.1 6.4-6.4 3.8 3.8-6.4 6.4 6.1 6.1-3.6 3.6-6.1-6.1-6.4 6.4-3.7-3.8 6.4-6.4zM21.7 52.1H50V57H21.7zM18.8 15.2h34.1v6.4H39.5v24.2h-7.4V21.5H18.8v-6.3z"></path></svg>',title:"Remove format",result:function(e){const n=window.getSelection();if(!n.toString().length){F(t.children,e.removeFormatTags);const o=document.createRange();o.selectNodeContents(t),n.removeAllRanges(),n.addRange(o)}O("removeFormat"),n.removeAllRanges()}},image:{icon:'<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M64 17v38H8V17h56m8-8H0v54h72V9z"></path><path d="M17.5 22C15 22 13 24 13 26.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zM16 50h27L29.5 32zM36 36.2l8.9-8.5L60.2 50H45.9S35.6 35.9 36 36.2z"></path></svg>',title:"Image",result:function(){R(t),i.$set({show:!0,event:"imageUrl",title:"Insert image",label:"Url"}),e.image||(e.image=!0,i.$on("imageUrl",e=>{S(t),O("insertImage",e.detail)}))}},forecolor:{icon:'<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M32 15h7.8L56 57.1h-7.9l-4-11.1H27.4l-4 11.1h-7.6L32 15zm-2.5 25.4h12.9L36 22.3h-.2l-6.3 18.1z"></path></svg>',title:"Text color",colorPicker:!0,result:function(){r.call(null,"foreColor")}},backcolor:{icon:'<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M36.5 22.3l-6.3 18.1H43l-6.3-18.1z"></path><path d="M9 8.9v54.2h54.1V8.9H9zm39.9 48.2L45 46H28.2l-3.9 11.1h-7.6L32.8 15h7.8l16.2 42.1h-7.9z"></path></svg>',title:"Background color",colorPicker:!0,result:function(){r.call(null,"backColor")}}}};function et(){}function nt(t,e,n){const o=Object.create(t);return o.action=e[n],o}function ot(t){var e,n,o,i,l,r=t.action.icon;return{c(){(e=d("button")).className=n="cl-button "+(t.action.active?"active":"")+" svelte-mfg49m",e.title=o=t.action.title,e.disabled=i=t.action.disabled,l=f(e,"click",t.methods._btnClicked.bind(null,t.action))},m(t,n){c(t,e,n),e.innerHTML=r},p(l,c){t=c,l.actionBtns&&r!==(r=t.action.icon)&&(e.innerHTML=r),l.actionBtns&&n!==(n="cl-button "+(t.action.active?"active":"")+" svelte-mfg49m")&&(e.className=n),l.actionBtns&&o!==(o=t.action.title)&&(e.title=o),l.actionBtns&&i!==(i=t.action.disabled)&&(e.disabled=i)},d(t){t&&a(e),l()}}}function it(e){for(var n,i,l,u,g,v,b,p,x,w,k,H=e.actionBtns,y=[],z=0;z<H.length;z+=1)y[z]=ot(nt(e,H,z));return{c(){n=d("div"),i=d("div");for(var t=0;t<y.length;t+=1)y[t].c();l=h(),u=d("div"),g=h(),v=d("textarea"),b=h(),p=d("div"),x=h(),w=d("div"),i.className="cl-actionbar svelte-mfg49m",u.className="cl-content svelte-mfg49m",m(u,"height",e.height),u.contentEditable="true",v.className="cl-textarea svelte-mfg49m",m(v,"max-height",e.height),m(v,"min-height",e.height),p.className="svelte-mfg49m",w.className="svelte-mfg49m",n.className="cl svelte-mfg49m",k=[f(window,"click",e.methods._documentClick),f(u,"input",e.methods._onChange),f(u,"mouseup",e.methods._handleButtonStatus),f(u,"keyup",e.methods._handleButtonStatus),f(u,"paste",e.methods._onPaste)]},m(t,o){c(t,n,o),r(n,i);for(var a=0;a<y.length;a+=1)y[a].m(i,null);r(n,l),r(n,u),_(()=>e.div1_binding(u,null)),r(n,g),r(n,v),_(()=>e.textarea_binding(v,null)),r(n,b),r(n,p),_(()=>e.div2_binding(p,null)),r(n,x),r(n,w),_(()=>e.div3_binding(w,null)),_(()=>e.div4_binding(n,null))},p(t,e){if(t.actionBtns||t.methods){H=e.actionBtns;for(var o=0;o<H.length;o+=1){const n=nt(e,H,o);y[o]?y[o].p(t,n):(y[o]=ot(n),y[o].c(),y[o].m(i,null))}for(;o<y.length;o+=1)y[o].d(1);y.length=H.length}t.items&&(e.div1_binding(null,u),e.div1_binding(u,null)),t.height&&m(u,"height",e.height),t.items&&(e.textarea_binding(null,v),e.textarea_binding(v,null)),t.height&&(m(v,"max-height",e.height),m(v,"min-height",e.height)),t.items&&(e.div2_binding(null,p),e.div2_binding(p,null)),t.items&&(e.div3_binding(null,w),e.div3_binding(w,null)),t.items&&(e.div4_binding(null,n),e.div4_binding(n,null))},i:t,o:t,d(t){t&&a(n),s(y,t),e.div1_binding(null,u),e.textarea_binding(null,v),e.div2_binding(null,p),e.div3_binding(null,w),e.div4_binding(null,n),o(k)}}}function lt(t,e,n){const o=x(),i=function(t,e=et){let n;const o=[];function i(e){if(l=e,(i=t)!=i?l==l:i!==l||i&&"object"==typeof i||"function"==typeof i){if(t=e,!n)return;o.forEach(t=>t[1]()),o.forEach(e=>e[0](t))}var i,l}return{set:i,update:function(e){i(e(t))},subscribe:function(l,r=et){const c=[l,r];return o.push(c),1===o.length&&(n=e(i)||et),l(t),()=>{const t=o.indexOf(c);-1!==t&&o.splice(t,1),0===o.length&&n()}}}}({});let l,r,c,a,s;const d={};let{actionBtns:u=[],height:h="300px",html:f="",removeFormatTags:g=["h1","h2","blockquote"]}=e;const m={};p(()=>{const t={actionBtns:u,height:h,html:f,removeFormatTags:g};Object.assign(d,{foreColor:!1,backColor:!1,foreColorModal:!1,backColorModal:!1,image:!1,link:!1,showEditor:!0,blurActive:!1});const e=new Q({target:a}),o=new Y({target:s}),l=tt({helper:d,store:i,raw:c,editor:r,colorPicker:o,modal:e});Object.assign(m,D(l,t.actions)),i.set({actionBtns:U(m),actionObj:m}),v.setHtml(t.html),i.subscribe(t=>{n("actionBtns",u=t.actionBtns),Object.assign(m,t.actionObj)})});const v={_btnClicked:function(t){r.focus(),R(r),S(r),t.result(function(t){let e;return t.subscribe(t=>e=t)(),e}(i)),v._handleButtonStatus()},_handleButtonStatus:function(t){const e=t?[]:T(document.getSelection().focusNode);Object.keys(m).forEach(t=>{const e=m[t].active=!1;return n("actionObj",m),e}),e.forEach(t=>(m[t.toLowerCase()]||{}).active=!0),i.update(t=>Object.assign(t,{actionBtns:U(m),actionObj:m}))},_onPaste:function(t){t.preventDefault(),O("insertHTML",t.clipboardData.getData("text/html")?A(t.clipboardData.getData("text/html")):t.clipboardData.getData("text"))},_onChange:function(t){o("change",t.target.innerHTML)},_documentClick:function(t){!V(t.target,l)&&d.blurActive&&o("blur",t),d.blurActive=!0,n("helper",d)},exec:(t,e)=>{O(t,e)},getHtml:function(t){return t?P(r.innerHTML):r.innerHTML},getText:function(){return r.innerText},setHtml:function(t,e){r.innerHTML=e?P(t):t||"",n("editor",r)},saveRange:function(){R(r)},restoreRange:function(){S(r)}};return t.$set=(t=>{"actionBtns"in t&&n("actionBtns",u=t.actionBtns),"height"in t&&n("height",h=t.height),"html"in t&&n("html",f=t.html),"removeFormatTags"in t&&n("removeFormatTags",g=t.removeFormatTags)}),{editorWrapper:l,editor:r,raw:c,modal:a,colorPicker:s,actionBtns:u,height:h,html:f,removeFormatTags:g,methods:v,div1_binding:function(t,e){n("editor",r=t)},textarea_binding:function(t,e){n("raw",c=t)},div2_binding:function(t,e){n("modal",a=t)},div3_binding:function(t,e){n("colorPicker",s=t)},div4_binding:function(t,e){n("editorWrapper",l=t)}}}return new class extends E{constructor(t){super(),j(this,t,lt,it,l,["actionBtns","height","html","removeFormatTags"])}}({target:document.body,props:{html:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a odio neque. Duis ac laoreet lacus.",height:"350px"}})}();
//# sourceMappingURL=bundle.js.map
