(function(e){function t(t){for(var r,u,i=t[0],l=t[1],s=t[2],c=0,f=[];c<i.length;c++)u=i[c],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&f.push(a[u][0]),a[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function u(e){return i.p+"js/"+({album:"album",login:"login",reg:"reg"}[e]||e)+"."+{album:"411dda98",login:"80dbdb97",reg:"d46ce803"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var s=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(c);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}a[e]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var r=n("2b0e"),a=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(a["a"]);var o=n("bc3a"),u=n.n(o),i=n("2106"),l=n.n(i),s=n("5886"),c=(n("4413"),n("657c")),d=(n("2bd9"),n("71a5")),f=n.n(d),p=n("a584"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-container",[n("b-navbar-brand",{attrs:{to:"/"}},[e._v("線上相簿")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[0===e.user.id.length?n("b-nav-item",{attrs:{to:"/login"}},[e._v("登入")]):e._e(),0===e.user.id.length?n("b-nav-item",{attrs:{to:"/reg"}},[e._v("註冊")]):e._e(),e.user.id.length>0?n("b-nav-item",{attrs:{to:"/album"}},[e._v("我的相簿")]):e._e(),e.user.id.length>0?n("b-nav-item",{on:{click:e.logout}},[e._v("登出")]):e._e()],1)],1)],1)],1),n("router-view")],1)},h=[],b={name:"App",computed:{user:function(){return this.$store.state.user}},methods:{logout:function(){var e=this;this.axios.delete("https://albumhey.herokuapp.com/users/logout").then((function(t){t.data.success?(e.$swal({icon:"success",title:"成功",text:"登出成功"}),e.$store.commit("logout"),"/"!==e.$router.path&&e.$router.push("/")):e.$swal({icon:"error",title:"錯誤",text:t.data.message})})).catch((function(t){e.$swal({icon:"error",title:"錯誤",text:t.response.data.message})}))},heartbeat:function(){var e=this;this.axios.get("https://albumhey.herokuapp.com/users/heartbeat").then((function(t){e.user.id.length>0&&(t.data||(alert("登入時效已過"),e.$store.commit("logout"),"/"!==e.$router.path&&e.$router.push("/")))})).catch((function(){alert("發生錯誤"),e.$store.commit("logout"),"/"!==e.$router.path&&e.$router.push("/")}))}},mounted:function(){var e=this;this.heartbeat(),setInterval((function(){e.heartbeat()}),5e3)}},g=b,v=n("2877"),y=Object(v["a"])(g,m,h,!1,null,null,null),w=y.exports,_=(n("b0c0"),n("d3b7"),n("8c4f")),$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"text-center"},[e._v("歡迎使用線上相簿")])},j=[],x={name:"Home",components:{}},O=x,k=Object(v["a"])(O,$,j,!1,null,null,null),P=k.exports,E=n("2f62"),S=n("0e44");r["default"].use(E["a"]);var C=new E["a"].Store({state:{user:{name:"",id:""}},mutations:{logout:function(e){e.user.name="",e.user.id=""},login:function(e,t){e.user.name=t.account,e.user.id=t._id}},actions:{},modules:{},plugins:[Object(S["a"])()]});r["default"].use(_["a"]);var T=[{path:"/",name:"Home",component:P,meta:{title:"線上相簿",login:!1}},{path:"/reg",name:"Reg",component:function(){return n.e("reg").then(n.bind(null,"b8b8"))},meta:{title:"線上相簿 | 註冊",login:!1}},{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))},meta:{title:"線上相簿 | 登入",login:!1}},{path:"/album",name:"Album",component:function(){return n.e("album").then(n.bind(null,"ee18"))},meta:{login:!0}}],A=new _["a"]({routes:T});A.beforeEach((function(e,t,n){e.meta.login&&!C.state.user?n("/login"):n()})),A.afterEach((function(e,t){var n="";n="Album"===e.name?C.state.user.name+"的相簿":e.meta.title,document.title=n}));var M=A;r["default"].config.productionTip=!1,u.a.defaults.withCredentials=!0,r["default"].use(l.a,u.a),r["default"].use(s["default"]),r["default"].component("ImgInputer",c["a"]),r["default"].use(f.a),r["default"].use(p["a"],{config:{id:"G-2BKQ3V1311"}}),new r["default"]({router:M,store:C,render:function(e){return e(w)}}).$mount("#app")}});
//# sourceMappingURL=app.d5ecd4d8.js.map