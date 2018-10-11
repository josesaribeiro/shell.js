webpackJsonp([7],{"9giF":function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("7+uW");document.addEventListener("DOMContentLoaded",function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);t.length>0&&t.forEach(function(t){t.addEventListener("click",function(){var a=t.dataset.target,e=document.getElementById(a);t.classList.toggle("is-active"),e.classList.toggle("is-active")})});var a=Array.prototype.slice.call(document.querySelectorAll(".navbar-item"),0);a.length>0&&a.forEach(function(a){a.addEventListener("click",function(){var e=a.offsetParent.querySelectorAll(".navbar-menu");e.length>0&&(document.getElementById(e[0].id).classList.remove("is-active"),t.forEach(function(t){t.classList.contains("is-active")&&t.classList.remove("is-active")}))})})});var s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"header"},[e("nav",{staticClass:"navbar has-shadow",class:{"is-primary is-transparent":t.isHomepage},attrs:{role:"navigation","aria-label":"main navigation"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"navbar-brand"},[e("router-link",{staticClass:"navbar-item",attrs:{id:"logo",to:{name:"home"}}},[t._v("shell.js")]),t._v(" "),t._m(0)],1),t._v(" "),e("div",{staticClass:"navbar-menu",attrs:{id:"navMenu"}},[e("div",{staticClass:"navbar-end"},[e("router-link",{staticClass:"navbar-item is-hidden-touch",attrs:{to:{name:"documentation"}}},[t._v("Documentation")]),t._v(" "),e("div",{staticClass:"navbar-item has-dropdown is-hoverable is-hidden-desktop"},[e("router-link",{staticClass:"navbar-item",attrs:{to:{name:"documentation"}}},[t._v("Documentation")]),t._v(" "),e("div",{staticClass:"navbar-dropdown is-boxed"},[e("div",{staticClass:"navbar-item is-subitem"},[t._v("Installation")]),t._v(" "),e("router-link",{staticClass:"navbar-item",attrs:{to:{path:"/documentation/start"}}},[e("span",{staticClass:"navbar-item-text"},[t._v("Start")])]),t._v(" "),e("router-link",{staticClass:"navbar-item",attrs:{to:{path:"/documentation/usage"}}},[e("span",{staticClass:"navbar-item-text"},[t._v("Usage")])]),t._v(" "),e("div",{staticClass:"navbar-item is-subitem"},[t._v("Customization")]),t._v(" "),e("router-link",{staticClass:"navbar-item",attrs:{to:{path:"/documentation/parameters"}}},[e("span",{staticClass:"navbar-item-text"},[t._v("Parameters")])]),t._v(" "),e("router-link",{staticClass:"navbar-item",staticStyle:{"margin-left":"1rem"},attrs:{to:{path:"/documentation/parameters#user"}}},[e("span",{staticClass:"navbar-item-text"},[t._v("User")])]),t._v(" "),e("router-link",{staticClass:"navbar-item",staticStyle:{"margin-left":"1rem"},attrs:{to:{path:"/documentation/parameters#host"}}},[e("span",{staticClass:"navbar-item-text"},[t._v("Host")])]),t._v(" "),e("router-link",{staticClass:"navbar-item",staticStyle:{"margin-left":"1rem"},attrs:{to:{path:"/documentation/parameters#path"}}},[e("span",{staticClass:"navbar-item-text"},[t._v("Path")])]),t._v(" "),e("router-link",{staticClass:"navbar-item",staticStyle:{"margin-left":"1rem"},attrs:{to:{path:"/documentation/parameters#style"}}},[e("span",{staticClass:"navbar-item-text"},[t._v("Style")])]),t._v(" "),e("router-link",{staticClass:"navbar-item",staticStyle:{"margin-left":"1rem"},attrs:{to:{path:"/documentation/parameters#theme"}}},[e("span",{staticClass:"navbar-item-text"},[t._v("Theme")])]),t._v(" "),e("router-link",{staticClass:"navbar-item",staticStyle:{"margin-left":"1rem"},attrs:{to:{path:"/documentation/parameters#responsive"}}},[e("span",{staticClass:"navbar-item-text"},[t._v("Responsive")])]),t._v(" "),e("router-link",{staticClass:"navbar-item",staticStyle:{"margin-left":"1rem"},attrs:{to:{path:"/documentation/parameters#commands"}}},[e("span",{staticClass:"navbar-item-text"},[t._v("Commands")])]),t._v(" "),e("router-link",{staticClass:"navbar-item",staticStyle:{"margin-left":"1rem"},attrs:{to:{path:"/documentation/parameters#typed"}}},[e("span",{staticClass:"navbar-item-text"},[t._v("Typed")])])],1)],1),t._v(" "),e("router-link",{staticClass:"navbar-item",attrs:{to:{name:"examples"}}},[t._v("Examples")]),t._v(" "),e("a",{staticClass:"navbar-item",attrs:{title:"View on GitHub",href:"https://github.com/davidecaruso/shell.js",target:"_blank"}},[e("b-icon",{attrs:{pack:"fab",icon:"github",size:"is-big"}})],1)],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"navbar-burger",attrs:{role:"button","data-target":"navMenu","aria-label":"menu","aria-expanded":"false"}},[a("span",{attrs:{"aria-hidden":"true"}}),this._v(" "),a("span",{attrs:{"aria-hidden":"true"}}),this._v(" "),a("span",{attrs:{"aria-hidden":"true"}})])}]};var i={render:function(){var t=this.$createElement,a=this._self._c||t;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"content"},[a("p",[this._v("Made with\n        "),a("b-icon",{attrs:{pack:"fas",icon:"heart",size:"is-small"}}),this._v("\n         by "),a("a",{attrs:{href:"https://about.me/davidecaruso",target:"_blank"}},[this._v("Davide Caruso")]),this._v(".\n      ")],1),this._v(" "),this._m(0)])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("small",[this._v("\n          Licensed under "),a("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php",target:"_blank"}},[this._v("MIT")]),this._v(".\n        ")])])}]},r={name:"App",components:{TheHeader:e("VU/8")({name:"Header",data:function(){return{isHomepage:!1}},watch:{$route:function(){this.isHomepage="/"===this.$route.path}}},s,!1,function(t){e("avg1")},null,null).exports,TheFooter:e("VU/8")({name:"Footer"},i,!1,null,null,null).exports}},o={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("the-header"),this._v(" "),a("router-view"),this._v(" "),a("the-footer")],1)},staticRenderFns:[]};var l=e("VU/8")(r,o,!1,function(t){e("c+uy")},null,null).exports,c=e("/ocq");n.default.use(c.a);var m=new c.a({mode:"history",scrollBehavior:function(t,a,e){return t.hash?{selector:t.hash}:{x:0,y:0}},routes:[{path:"/",name:"home",component:function(){return e.e(0).then(e.bind(null,"bvEa"))}},{path:"/documentation",name:"documentation",component:function(){return e.e(2).then(e.bind(null,"KTW+"))},redirect:"documentation/start",children:[{path:"start",name:"documentation/start",component:function(){return e.e(4).then(e.bind(null,"sRa0"))}},{path:"usage",name:"documentation/usage",component:function(){return e.e(3).then(e.bind(null,"q2MB"))}},{path:"parameters",name:"documentation/parameters",component:function(){return e.e(5).then(e.bind(null,"6fko"))}}]},{path:"/examples",name:"examples",component:function(){return e.e(1).then(e.bind(null,"gbUf"))}}]}),u=e("5CJf"),v=e.n(u),d=e("O3Oo"),p=e.n(d);e("9giF");n.default.use(p.a),n.default.use(v.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:m,components:{App:l},template:"<App/>"})},avg1:function(t,a){},"c+uy":function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.22c6a118240946247a2a.js.map