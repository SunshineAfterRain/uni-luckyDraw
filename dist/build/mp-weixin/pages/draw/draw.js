(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/draw/draw"],{5324:function(n,o,t){"use strict";t.r(o);var a=t("661e"),e=t.n(a);for(var c in a)"default"!==c&&function(n){t.d(o,n,function(){return a[n]})}(c);o["default"]=e.a},"5a1a":function(n,o,t){},"661e":function(n,o,t){"use strict";(function(n){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t={data:function(){return{login:!1,options:[{icon:"icon-draw",class:"bg-gradual-red",text:"发起抽奖",url:"/pages/draw/actionForm"},{icon:"icon-draw",class:"bg-gradual-orange",text:"我的发起",url:"/pages/draw/actionForm"},{icon:"icon-draw",class:"#e54d42",text:"我的发起",url:"/pages/draw/actionForm"}]}},components:{},methods:{checkSession:function(){var o=this;n.checkSession({success:function(n){o.login=!0},fail:function(){o.login=!1,n.navigateTo({url:"/pages/login/login"})}})},goTo:function(o){n.navigateTo({url:this.options[o].url})}},onLoad:function(){},onShow:function(){this.checkSession()}};o.default=t}).call(this,t("9cd9")["default"])},"6b97":function(n,o,t){"use strict";var a=function(){var n=this,o=n.$createElement;n._self._c},e=[];t.d(o,"a",function(){return a}),t.d(o,"b",function(){return e})},"9f13":function(n,o,t){"use strict";var a=t("5a1a"),e=t.n(a);e.a},fe2f:function(n,o,t){"use strict";t.r(o);var a=t("6b97"),e=t("5324");for(var c in e)"default"!==c&&function(n){t.d(o,n,function(){return e[n]})}(c);t("9f13");var i=t("17cc"),r=Object(i["a"])(e["default"],a["a"],a["b"],!1,null,"92cf9968",null);o["default"]=r.exports}},[["7ffe","common/runtime","common/vendor"]]]);