(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-nav-dot-nav-dot"],{"2c45":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return i}));var i={pageHead:e("0586").default,uniIcons:e("1a49").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("page-head",{attrs:{title:t.title}}),e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",{staticClass:"uni-title"},[e("uni-icons",{attrs:{size:"16",type:"info"}}),t._v("说明 :")],1),e("v-uni-view",{staticClass:"uni-helllo-text"},[e("v-uni-view",[t._v("在App端可在pages.json里配置buttons，暂不支持动态改变buttons的样式，使用onNavigationBarButtonTap可监听红点按钮的点击事件。")])],1)],1)],1)},u=[]},"7bef":function(t,n,e){"use strict";e.r(n);var i=e("93de"),a=e.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=a.a},"93de":function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{title:"nav-dot"}},onReady:function(){this.setStyle(0,!0),this.setStyle(1,!0,"9")},methods:{setStyle:function(t,n,e){var i=getCurrentPages();i[i.length-1]}},onNavigationBarButtonTap:function(t){uni.showToast({title:0===t.index?"你点了消息按钮":"你点了关注按钮",icon:"none"}),this.setStyle(t.index,!1)}};n.default=i},f8a6:function(t,n,e){"use strict";e.r(n);var i=e("2c45"),a=e("7bef");for(var u in a)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(u);var o,s=e("f0c5"),r=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"653cace8",null,!1,i["a"],o);n["default"]=r.exports}}]);