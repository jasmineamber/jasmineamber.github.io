(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-navigator-navigator"],{"11c8":function(t,e,a){"use strict";a.r(e);var n=a("16dd"),r=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"16dd":function(t,e,a){"use strict";a("7a82");var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("5530")),i=a("26cb"),u={data:function(){return{title:"navigator"}},computed:(0,r.default)({},(0,i.mapState)({hasLeftWin:function(t){return!t.noMatchLeftWindow}}))};e.default=u},"2c17":function(t,e,a){"use strict";a.r(e);var n=a("fc6f"),r=a("11c8");for(var i in r)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(i);var u,o=a("f0c5"),c=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);e["default"]=c.exports},fc6f:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var n={pageHead:a("0586").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("page-head",{attrs:{title:t.title}}),a("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[a("v-uni-view",{staticClass:"uni-btn-v"},[a("v-uni-navigator",{attrs:{url:"navigate/navigate?title=navigate","hover-class":"navigator-hover"}},[a("v-uni-button",{attrs:{type:"default"}},[t._v("跳转到新页面")])],1),a("v-uni-navigator",{attrs:{url:"redirect/redirect?title=redirect","open-type":"redirect","hover-class":"other-navigator-hover"}},[a("v-uni-button",{attrs:{type:"default"}},[t._v("在当前页打开")])],1),t.hasLeftWin?t._e():a("v-uni-navigator",{attrs:{url:"/pages/tabBar/extUI/extUI","open-type":"switchTab","hover-class":"other-navigator-hover"}},[a("v-uni-button",{attrs:{type:"default"}},[t._v("跳转tab页面")])],1)],1)],1)],1)},i=[]}}]);