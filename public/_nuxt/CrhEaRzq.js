import{a1 as A,a3 as B,aq as D,E,a4 as N,o as g,U as x,w as h,v as M,a,a0 as l,W as z,c as v,C as T,a5 as L,q as $,b2 as V,aE as W,a2 as q,b3 as K,m as R,r as U,b as r,p as b,d as C,s as F}from"./DX4Xkoew.js";import{u as O}from"./DFT_dqRK.js";var G=function(s){var e=s.dt;return`
.p-message {
    border-radius: `.concat(e("message.border.radius"),`;
    outline-width: `).concat(e("message.border.width"),`;
    outline-style: solid;
}

.p-message-content {
    display: flex;
    align-items: center;
    padding: `).concat(e("message.content.padding"),`;
    gap: `).concat(e("message.content.gap"),`;
    height: 100%;
}

.p-message-icon {
    flex-shrink: 0;
}

.p-message-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-inline-start: auto;
    overflow: hidden;
    position: relative;
    width: `).concat(e("message.close.button.width"),`;
    height: `).concat(e("message.close.button.height"),`;
    border-radius: `).concat(e("message.close.button.border.radius"),`;
    background: transparent;
    transition: background `).concat(e("message.transition.duration"),", color ").concat(e("message.transition.duration"),", outline-color ").concat(e("message.transition.duration"),", box-shadow ").concat(e("message.transition.duration"),`, opacity 0.3s;
    outline-color: transparent;
    color: inherit;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-message-close-icon {
    font-size: `).concat(e("message.close.icon.size"),`;
    width: `).concat(e("message.close.icon.size"),`;
    height: `).concat(e("message.close.icon.size"),`;
}

.p-message-close-button:focus-visible {
    outline-width: `).concat(e("message.close.button.focus.ring.width"),`;
    outline-style: `).concat(e("message.close.button.focus.ring.style"),`;
    outline-offset: `).concat(e("message.close.button.focus.ring.offset"),`;
}

.p-message-info {
    background: `).concat(e("message.info.background"),`;
    outline-color: `).concat(e("message.info.border.color"),`;
    color: `).concat(e("message.info.color"),`;
    box-shadow: `).concat(e("message.info.shadow"),`;
}

.p-message-info .p-message-close-button:focus-visible {
    outline-color: `).concat(e("message.info.close.button.focus.ring.color"),`;
    box-shadow: `).concat(e("message.info.close.button.focus.ring.shadow"),`;
}

.p-message-info .p-message-close-button:hover {
    background: `).concat(e("message.info.close.button.hover.background"),`;
}

.p-message-info.p-message-outlined {
    color: `).concat(e("message.info.outlined.color"),`;
    outline-color: `).concat(e("message.info.outlined.border.color"),`;
}

.p-message-info.p-message-simple {
    color: `).concat(e("message.info.simple.color"),`;
}

.p-message-success {
    background: `).concat(e("message.success.background"),`;
    outline-color: `).concat(e("message.success.border.color"),`;
    color: `).concat(e("message.success.color"),`;
    box-shadow: `).concat(e("message.success.shadow"),`;
}

.p-message-success .p-message-close-button:focus-visible {
    outline-color: `).concat(e("message.success.close.button.focus.ring.color"),`;
    box-shadow: `).concat(e("message.success.close.button.focus.ring.shadow"),`;
}

.p-message-success .p-message-close-button:hover {
    background: `).concat(e("message.success.close.button.hover.background"),`;
}

.p-message-success.p-message-outlined {
    color: `).concat(e("message.success.outlined.color"),`;
    outline-color: `).concat(e("message.success.outlined.border.color"),`;
}

.p-message-success.p-message-simple {
    color: `).concat(e("message.success.simple.color"),`;
}

.p-message-warn {
    background: `).concat(e("message.warn.background"),`;
    outline-color: `).concat(e("message.warn.border.color"),`;
    color: `).concat(e("message.warn.color"),`;
    box-shadow: `).concat(e("message.warn.shadow"),`;
}

.p-message-warn .p-message-close-button:focus-visible {
    outline-color: `).concat(e("message.warn.close.button.focus.ring.color"),`;
    box-shadow: `).concat(e("message.warn.close.button.focus.ring.shadow"),`;
}

.p-message-warn .p-message-close-button:hover {
    background: `).concat(e("message.warn.close.button.hover.background"),`;
}

.p-message-warn.p-message-outlined {
    color: `).concat(e("message.warn.outlined.color"),`;
    outline-color: `).concat(e("message.warn.outlined.border.color"),`;
}

.p-message-warn.p-message-simple {
    color: `).concat(e("message.warn.simple.color"),`;
}

.p-message-error {
    background: `).concat(e("message.error.background"),`;
    outline-color: `).concat(e("message.error.border.color"),`;
    color: `).concat(e("message.error.color"),`;
    box-shadow: `).concat(e("message.error.shadow"),`;
}

.p-message-error .p-message-close-button:focus-visible {
    outline-color: `).concat(e("message.error.close.button.focus.ring.color"),`;
    box-shadow: `).concat(e("message.error.close.button.focus.ring.shadow"),`;
}

.p-message-error .p-message-close-button:hover {
    background: `).concat(e("message.error.close.button.hover.background"),`;
}

.p-message-error.p-message-outlined {
    color: `).concat(e("message.error.outlined.color"),`;
    outline-color: `).concat(e("message.error.outlined.border.color"),`;
}

.p-message-error.p-message-simple {
    color: `).concat(e("message.error.simple.color"),`;
}

.p-message-secondary {
    background: `).concat(e("message.secondary.background"),`;
    outline-color: `).concat(e("message.secondary.border.color"),`;
    color: `).concat(e("message.secondary.color"),`;
    box-shadow: `).concat(e("message.secondary.shadow"),`;
}

.p-message-secondary .p-message-close-button:focus-visible {
    outline-color: `).concat(e("message.secondary.close.button.focus.ring.color"),`;
    box-shadow: `).concat(e("message.secondary.close.button.focus.ring.shadow"),`;
}

.p-message-secondary .p-message-close-button:hover {
    background: `).concat(e("message.secondary.close.button.hover.background"),`;
}

.p-message-secondary.p-message-outlined {
    color: `).concat(e("message.secondary.outlined.color"),`;
    outline-color: `).concat(e("message.secondary.outlined.border.color"),`;
}

.p-message-secondary.p-message-simple {
    color: `).concat(e("message.secondary.simple.color"),`;
}

.p-message-contrast {
    background: `).concat(e("message.contrast.background"),`;
    outline-color: `).concat(e("message.contrast.border.color"),`;
    color: `).concat(e("message.contrast.color"),`;
    box-shadow: `).concat(e("message.contrast.shadow"),`;
}

.p-message-contrast .p-message-close-button:focus-visible {
    outline-color: `).concat(e("message.contrast.close.button.focus.ring.color"),`;
    box-shadow: `).concat(e("message.contrast.close.button.focus.ring.shadow"),`;
}

.p-message-contrast .p-message-close-button:hover {
    background: `).concat(e("message.contrast.close.button.hover.background"),`;
}

.p-message-contrast.p-message-outlined {
    color: `).concat(e("message.contrast.outlined.color"),`;
    outline-color: `).concat(e("message.contrast.outlined.border.color"),`;
}

.p-message-contrast.p-message-simple {
    color: `).concat(e("message.contrast.simple.color"),`;
}

.p-message-text {
    font-size: `).concat(e("message.text.font.size"),`;
    font-weight: `).concat(e("message.text.font.weight"),`;
}

.p-message-icon {
    font-size: `).concat(e("message.icon.size"),`;
    width: `).concat(e("message.icon.size"),`;
    height: `).concat(e("message.icon.size"),`;
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.3s;
}

.p-message-leave-active .p-message-close-button {
    opacity: 0;
}

.p-message-sm .p-message-content {
    padding: `).concat(e("message.content.sm.padding"),`;
}

.p-message-sm .p-message-text {
    font-size: `).concat(e("message.text.sm.font.size"),`;
}

.p-message-sm .p-message-icon {
    font-size: `).concat(e("message.icon.sm.size"),`;
    width: `).concat(e("message.icon.sm.size"),`;
    height: `).concat(e("message.icon.sm.size"),`;
}

.p-message-sm .p-message-close-icon {
    font-size: `).concat(e("message.close.icon.sm.size"),`;
    width: `).concat(e("message.close.icon.sm.size"),`;
    height: `).concat(e("message.close.icon.sm.size"),`;
}

.p-message-lg .p-message-content {
    padding: `).concat(e("message.content.lg.padding"),`;
}

.p-message-lg .p-message-text {
    font-size: `).concat(e("message.text.lg.font.size"),`;
}

.p-message-lg .p-message-icon {
    font-size: `).concat(e("message.icon.lg.size"),`;
    width: `).concat(e("message.icon.lg.size"),`;
    height: `).concat(e("message.icon.lg.size"),`;
}

.p-message-lg .p-message-close-icon {
    font-size: `).concat(e("message.close.icon.lg.size"),`;
    width: `).concat(e("message.close.icon.lg.size"),`;
    height: `).concat(e("message.close.icon.lg.size"),`;
}

.p-message-outlined {
    background: transparent;
    outline-width: `).concat(e("message.outlined.border.width"),`;
}

.p-message-simple {
    background: transparent;
    outline-color: transparent;
    box-shadow: none;
}

.p-message-simple .p-message-content {
    padding: `).concat(e("message.simple.content.padding"),`;
}

.p-message-outlined .p-message-close-button:hover,
.p-message-simple .p-message-close-button:hover {
    background: transparent;
}
`)},H={root:function(s){var e=s.props;return["p-message p-component p-message-"+e.severity,{"p-message-outlined":e.variant==="outlined","p-message-simple":e.variant==="simple","p-message-sm":e.size==="small","p-message-lg":e.size==="large"}]},content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},J=A.extend({name:"message",theme:G,classes:H}),Q={name:"BaseMessage",extends:q,props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},size:{type:String,default:null},variant:{type:String,default:null}},style:J,provide:function(){return{$pcMessage:this,$parentInstance:this}}},P={name:"Message",extends:Q,inheritAttrs:!1,emits:["close","life-end"],timeout:null,data:function(){return{visible:!0}},mounted:function(){var s=this;this.life&&setTimeout(function(){s.visible=!1,s.$emit("life-end")},this.life)},methods:{close:function(s){this.visible=!1,this.$emit("close",s)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{ripple:B},components:{TimesIcon:D}};function y(n){"@babel/helpers - typeof";return y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},y(n)}function j(n,s){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);s&&(t=t.filter(function(m){return Object.getOwnPropertyDescriptor(n,m).enumerable})),e.push.apply(e,t)}return e}function I(n){for(var s=1;s<arguments.length;s++){var e=arguments[s]!=null?arguments[s]:{};s%2?j(Object(e),!0).forEach(function(t){X(n,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):j(Object(e)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))})}return n}function X(n,s,e){return(s=Y(s))in n?Object.defineProperty(n,s,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[s]=e,n}function Y(n){var s=Z(n,"string");return y(s)=="symbol"?s:s+""}function Z(n,s){if(y(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var t=e.call(n,s||"default");if(y(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(n)}var _=["aria-label"];function ee(n,s,e,t,m,u){var c=E("TimesIcon"),i=N("ripple");return g(),x(W,l({name:"p-message",appear:""},n.ptmi("transition")),{default:h(function(){return[M(a("div",l({class:n.cx("root"),role:"alert","aria-live":"assertive","aria-atomic":"true"},n.ptm("root")),[n.$slots.container?z(n.$slots,"container",{key:0,closeCallback:u.close}):(g(),v("div",l({key:1,class:n.cx("content")},n.ptm("content")),[z(n.$slots,"icon",{class:T(n.cx("icon"))},function(){return[(g(),x(L(n.icon?"span":null),l({class:[n.cx("icon"),n.icon]},n.ptm("icon")),null,16,["class"]))]}),n.$slots.default?(g(),v("div",l({key:0,class:n.cx("text")},n.ptm("text")),[z(n.$slots,"default")],16)):$("",!0),n.closable?M((g(),v("button",l({key:1,class:n.cx("closeButton"),"aria-label":u.closeAriaLabel,type:"button",onClick:s[0]||(s[0]=function(p){return u.close(p)})},I(I({},n.closeButtonProps),n.ptm("closeButton"))),[z(n.$slots,"closeicon",{},function(){return[n.closeIcon?(g(),v("i",l({key:0,class:[n.cx("closeIcon"),n.closeIcon]},n.ptm("closeIcon")),null,16)):(g(),x(c,l({key:1,class:[n.cx("closeIcon"),n.closeIcon]},n.ptm("closeIcon")),null,16,["class"]))]})],16,_)),[[i]]):$("",!0)],16))],16),[[V,m.visible]])]}),_:3},16)}P.render=ee;function ne(){const n=K(),{showSuccessMessage:s,showInfoMessage:e}=O();function t(c){}function m(c,i,p=t){n.require({message:"Should this entry be deleted ?",header:"Are you sure",icon:"pi pi-info-circle",rejectLabel:"Cancel",acceptLabel:"Delete",rejectClass:"p-button-secondary p-button-outlined",acceptClass:"p-button-danger",accept:()=>{s("Action confirmed",`Entry with ID ${c} was deleted`),i(c)},reject:()=>{e("Action cancelled","No changes are processed"),p(c)}})}function u(c,i="Action confirmed",p=i,S="Attention",w="Should proceed with this action ?"){n.require({message:w,header:S,icon:"pi pi-info-circle",rejectLabel:"Cancel",acceptLabel:"Accept",rejectClass:"p-button-secondary p-button-outlined",acceptClass:"p-button-success",accept:()=>{c(),e(i,p)},reject:()=>{e("Action cancelled")}})}return{confirmDelete:m,confirmAction:u}}const se={class:"card"},oe={class:"flex flex-row gap-4"},te={class:"flex flex-row gap-4"},ae={class:"flex flex-row gap-4 flex-wrap"},ie=R({__name:"messages",setup(n){const{showSuccessMessage:s,showInfoMessage:e,showWarnMessage:t,showErrorMessage:m}=O(),{confirmAction:u,confirmDelete:c}=ne(),i=U(0);function p(){}function S(w){i.value=w}return(w,o)=>{const d=F,k=P;return g(),v("div",se,[o[10]||(o[10]=a("h2",null,"PrimeVue Toast Demo",-1)),a("div",oe,[a("div",null,[r(d,{label:"Success",class:"p-button-success",onClick:o[0]||(o[0]=f=>b(s)("Success Message","Message Content"))})]),a("div",null,[r(d,{label:"Info",class:"p-button-info",onClick:o[1]||(o[1]=f=>b(e)("Info Message","Message Content"))})]),a("div",null,[r(d,{label:"Warn",class:"p-button-warning",onClick:o[2]||(o[2]=f=>b(t)("Warn Message","Message Content"))})]),a("div",null,[r(d,{label:"Error",class:"p-button-danger",onClick:o[3]||(o[3]=f=>b(m)("Error Message","Message Content"))})])]),o[11]||(o[11]=a("h2",null,"Confirmation",-1)),a("div",te,[r(d,{label:"Trigger action with confirmation",class:"p-button-info",onClick:o[4]||(o[4]=f=>b(u)(p))}),r(d,{label:"Trigger delete action with confirmation",class:"p-button-danger",onClick:o[5]||(o[5]=f=>b(c)(1,S))})]),o[12]||(o[12]=a("h2",null,"Messages",-1)),a("div",ae,[r(k,{severity:"success"},{default:h(()=>o[6]||(o[6]=[C(" Success Message Content ")])),_:1}),r(k,{severity:"info"},{default:h(()=>o[7]||(o[7]=[C(" Info Message Content ")])),_:1}),r(k,{severity:"warn"},{default:h(()=>o[8]||(o[8]=[C(" Warning Message Content ")])),_:1}),r(k,{severity:"error"},{default:h(()=>o[9]||(o[9]=[C(" Error Message Content ")])),_:1})])])}}});export{ie as default};
