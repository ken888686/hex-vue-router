(function(e){function t(t){for(var o,c,i=t[0],l=t[1],u=t[2],d=0,s=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&s.push(a[c][0]),a[c]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);b&&b(t);while(s.length)s.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(o=!1)}o&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},c={app:0},a={app:0},r=[];function i(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-2d0a5131":"48692dbd","chunk-2d0aed4a":"9a30e028","chunk-2d0b9d35":"901ca593","chunk-2d0c9577":"923b8bc8","chunk-2d0e9d38":"66153a91","chunk-2d208a97":"d83fefb8","chunk-2d21a3d2":"6bd1757a","chunk-2d21b8b8":"bc267e03","chunk-2d228fe9":"7e67f9bf","chunk-3052ee09":"4ea66274"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-3052ee09":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-2d0a5131":"31d6cfe0","chunk-2d0aed4a":"31d6cfe0","chunk-2d0b9d35":"31d6cfe0","chunk-2d0c9577":"31d6cfe0","chunk-2d0e9d38":"31d6cfe0","chunk-2d208a97":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-2d21b8b8":"31d6cfe0","chunk-2d228fe9":"31d6cfe0","chunk-3052ee09":"89459698"}[e]+".css",a=l.p+o,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var u=r[i],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===o||d===a))return t()}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){u=s[i],d=u.getAttribute("data-href");if(d===o||d===a)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var o=t&&t.target&&t.target.src||a,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete c[e],b.parentNode.removeChild(b),n(r)},b.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){c[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=r);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=i(e);var s=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(b);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",s.name="ChunkLoadError",s.type=o,s.request=c,n[1](s)}a[e]=void 0}};var b=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/hex-vue-router/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var b=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4360:function(e,t,n){"use strict";var o=n("5502"),c=n("0e44"),a=n("852e"),r=n.n(a);t["a"]=Object(o["a"])({plugins:[Object(c["a"])({storage:window.localStorage})],state:{isLogin:r.a.get("isLogin"),token:r.a.get("token")},getters:{},mutations:{login:function(e){e.isLogin=!0,r.a.set("isLogin",!0)},logout:function(e){e.isLogin=!1,r.a.set("isLogin",!1),r.a.set("token","")},updateToken:function(e,t){e.token=t,r.a.set("token",t)}},actions:{login:function(e,t){var n=e.commit;n("login"),n("updateToken",t)},logout:function(e){var t=e.commit;t("logout"),t("updateToken","")}},modules:{}})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),c=n("9062"),a=n.n(c),r=n("df85"),i=n("bc3a"),l=n.n(i),u=n("130e"),d={class:"text-center"};function s(e,t,n,c,a,r){var i=Object(o["resolveComponent"])("Navbar"),l=Object(o["resolveComponent"])("router-view");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(i),Object(o["createElementVNode"])("div",d,[Object(o["createVNode"])(l)])],64)}n("caad"),n("2532");var b=n("cf05"),f=n.n(b),h={class:"navbar navbar-expand-lg navbar-light bg-light"},p={class:"container"},m=["width","height"],g=Object(o["createElementVNode"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(o["createElementVNode"])("span",{class:"navbar-toggler-icon"})],-1),v={id:"navbarSupportedContent",class:"collapse navbar-collapse"},k={key:0,class:"navbar-nav me-auto mb-2 mb-lg-0"},O={class:"nav-item"},j=Object(o["createTextVNode"])(" 首頁 "),y={class:"nav-item"},N=Object(o["createTextVNode"])(" 商品列表 "),V={class:"nav-item"},E=Object(o["createTextVNode"])(" 訂單列表 "),w={key:1,class:"navbar-nav me-auto mb-2 mb-lg-0"},x={class:"nav-item"},C=Object(o["createTextVNode"])(" 首頁 "),L={class:"nav-item"},T=Object(o["createTextVNode"])(" 產品列表 "),B={class:"nav-item"},_=Object(o["createTextVNode"])(" 購物車 "),P=Object(o["createTextVNode"])(" 進入前台 "),S=Object(o["createTextVNode"])(" 登入 "),M=["disabled"],A={id:"logoutModal",ref:"logoutModal",class:"modal fade",tabindex:"-1","aria-hidden":"true","aria-labelledby":"logoutModalLabel"},z={class:"modal-dialog"},$={class:"modal-content"},D=Object(o["createElementVNode"])("div",{class:"modal-header"},[Object(o["createElementVNode"])("h5",{id:"logoutModalLabel",class:"modal-title"}," Hexschool "),Object(o["createElementVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),F={class:"modal-body"},R=Object(o["createElementVNode"])("div",{class:"modal-footer justify-content-center"},[Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal"}," OK ")],-1);function q(e,t,n,c,a,r){var i=Object(o["resolveComponent"])("router-link");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createElementVNode"])("nav",h,[Object(o["createElementVNode"])("div",p,[Object(o["createVNode"])(i,{class:"navbar-brand",to:"/"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("img",{src:f.a,alt:"logo",width:a.logoSize,height:a.logoSize},null,8,m)]})),_:1}),g,Object(o["createElementVNode"])("div",v,[e.$route.path.includes("admin")?(Object(o["openBlock"])(),Object(o["createElementBlock"])("ul",k,[Object(o["createElementVNode"])("li",O,[Object(o["createVNode"])(i,{class:"nav-link",to:"/admin"},{default:Object(o["withCtx"])((function(){return[j]})),_:1})]),Object(o["createElementVNode"])("li",y,[Object(o["createVNode"])(i,{class:"nav-link",to:"/admin/products"},{default:Object(o["withCtx"])((function(){return[N]})),_:1})]),Object(o["createElementVNode"])("li",V,[Object(o["createVNode"])(i,{class:"nav-link",to:"/admin/orders"},{default:Object(o["withCtx"])((function(){return[E]})),_:1})])])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("ul",w,[Object(o["createElementVNode"])("li",x,[Object(o["createVNode"])(i,{class:"nav-link",to:"/"},{default:Object(o["withCtx"])((function(){return[C]})),_:1})]),Object(o["createElementVNode"])("li",L,[Object(o["createVNode"])(i,{class:"nav-link",to:"/products"},{default:Object(o["withCtx"])((function(){return[T]})),_:1})]),Object(o["createElementVNode"])("li",B,[Object(o["createVNode"])(i,{class:"nav-link",to:"/carts"},{default:Object(o["withCtx"])((function(){return[_]})),_:1})])]))]),e.$route.path.includes("admin")?(Object(o["openBlock"])(),Object(o["createBlock"])(i,{key:0,type:"button",class:"btn btn-outline-secondary me-1",to:"/"},{default:Object(o["withCtx"])((function(){return[P]})),_:1})):(Object(o["openBlock"])(),Object(o["createElementBlock"])("button",{key:1,type:"button",class:"btn btn-outline-secondary me-1",onClick:t[0]||(t[0]=function(){return r.checkLogin&&r.checkLogin.apply(r,arguments)})}," 進入後台 ")),r.isLogin?(Object(o["openBlock"])(),Object(o["createElementBlock"])("button",{key:3,type:"button",class:"btn btn-outline-primary",disabled:a.isProcessing,onClick:t[1]||(t[1]=function(){return r.logout&&r.logout.apply(r,arguments)})}," 登出 ",8,M)):(Object(o["openBlock"])(),Object(o["createBlock"])(i,{key:2,to:"/admin/login",type:"button",class:"btn btn-primary"},{default:Object(o["withCtx"])((function(){return[S]})),_:1}))])]),Object(o["createElementVNode"])("div",A,[Object(o["createElementVNode"])("div",z,[Object(o["createElementVNode"])("div",$,[D,Object(o["createElementVNode"])("div",F,[Object(o["createElementVNode"])("p",null,Object(o["toDisplayString"])(a.message),1)]),R])])],512)],64)}n("d3b7");var H=n("7b17"),J=n("4360"),K=(n("3ca3"),n("ddb0"),n("6c02")),I=[{path:"/",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))},children:[{path:"",component:function(){return n.e("chunk-2d21b8b8").then(n.bind(null,"bfdb"))}},{path:"products",component:function(){return n.e("chunk-2d0c9577").then(n.bind(null,"5974"))}},{path:"product/:id",component:function(){return n.e("chunk-2d0e9d38").then(n.bind(null,"8ed9"))}},{path:"carts",component:function(){return n.e("chunk-2d0a5131").then(n.bind(null,"08c6"))}}]},{path:"/admin",component:function(){return n.e("chunk-2d0b9d35").then(n.bind(null,"3530"))},children:[{path:"",component:function(){return n.e("chunk-2d208a97").then(n.bind(null,"a66b"))}},{path:"login",component:function(){return n.e("chunk-3052ee09").then(n.bind(null,"e076"))}},{path:"products",component:function(){return n.e("chunk-2d228fe9").then(n.bind(null,"dc0d"))}},{path:"orders",component:function(){return n.e("chunk-2d0aed4a").then(n.bind(null,"0c78"))}}]}],U=Object(K["a"])({history:Object(K["b"])(),linkExactActiveClass:"active",routes:I}),G=U,Q=n("8e44"),W={data:function(){return{logoSize:25,isProcessing:!1,message:"",logoutModal:null}},computed:{isLogin:function(){return J["a"].state.isLogin}},mounted:function(){this.logoutModal=new H["a"](this.$refs.logoutModal)},methods:{checkLogin:function(){var e=this.$loading.show();Q["a"].check().then((function(e){var t=e.data.success;t&&G.push("/admin")})).catch((function(){G.push("/admin/login")})).finally((function(){e.hide()}))},logout:function(){var e=this;this.isProcessing=!0,Q["a"].logout().then((function(t){var n=t.data;e.logoutResult(!0,n.message)})).catch((function(t){e.logoutResult(!1,t.response.data.message)})).finally((function(){e.isProcessing=!1}))},logoutResult:function(e,t){this.message=t,this.logoutModal.toggle(),e&&(J["a"].dispatch("logout"),G.push("/"))}}},X=n("6b0d"),Y=n.n(X);const Z=Y()(W,[["render",q]]);var ee=Z,te={components:{Navbar:ee}};const ne=Y()(te,[["render",s]]);var oe=ne;n("ce50"),n("e40d"),n("becf");Object(o["createApp"])(oe).use(u["a"],l.a).use(r["a"],{expireTimes:"30d"}).use(J["a"]).use(G).use(a.a).mount("#app")},"8e44":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("d3b7"),n("99af");var o=n("bc3a"),c=n.n(o),a=n("df85"),r=n("4360"),i=Object(a["b"])(),l=i.cookies,u="https://vue3-course-api.hexschool.io",d={headers:{authorization:r["a"].state.token}},s={login:function(e,t){return new Promise((function(n,o){c.a.post("".concat(u,"/v2/admin/signin"),{username:e,password:t}).then((function(e){d.headers.authorization=e.data.token,l.set("token",e.data.token),l.set("isLogin",!0),n(e)})).catch((function(e){o(e)}))}))},logout:function(){return new Promise((function(e,t){c.a.post("".concat(u,"/v2/logout"),{},d).then((function(t){l.set("token",""),l.set("isLogin",!1),e(t)})).catch((function(e){t(e)}))}))},check:function(){return new Promise((function(e,t){c.a.post("".concat(u,"/v2/api/user/check"),{},d).then((function(t){e(t)})).catch((function(e){t(e)}))}))}}},ce50:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.aff95829.js.map