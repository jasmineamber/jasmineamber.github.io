(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-intersection-observer-intersection-observer"],{"0a40":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n}));var n={pageHead:a("0586").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("page-head",{attrs:{title:e.title}}),a("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[a("v-uni-view",{staticClass:"uni-title uni-common-mt"},[e._v(e._s(e.appear?"小球出现":"小球消失"))]),a("v-uni-scroll-view",{staticClass:"scroll-view",attrs:{"scroll-y":!0}},[a("v-uni-view",{staticClass:"scroll-area"},[a("v-uni-text",{staticClass:"notice"},[e._v("向下滚动让小球出现")]),a("v-uni-view",{staticClass:"ball"})],1)],1)],1)],1)},r=[]},"35ec":function(e,t,a){"use strict";a.r(t);var n=a("0a40"),i=a("484d");for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);a("6027");var o,c=a("f0c5"),s=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"2a824598",null,!1,n["a"],o);t["default"]=s.exports},"484d":function(e,t,a){"use strict";a.r(t);var n=a("e8677"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},"59ea":function(e,t,a){var n=a("5f61");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("23ad7ece",n,!0,{sourceMap:!1,shadowMode:!1})},"5f61":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".scroll-view[data-v-2a824598]{height:%?400?%;background:#fff;border:1px solid #ccc;box-sizing:border-box}.scroll-area[data-v-2a824598]{height:%?1300?%;display:flex;flex-direction:column;align-items:center}.notice[data-v-2a824598]{margin-top:%?150?%;margin:%?150?% 0 %?400?% 0}.ball[data-v-2a824598]{width:%?200?%;height:%?200?%;background:#4cd964;border-radius:50%}",""]),e.exports=t},6027:function(e,t,a){"use strict";var n=a("59ea"),i=a.n(n);i.a},e8677:function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=null,i={data:function(){return{appear:!1,title:"intersectionObserver"}},onReady:function(){var e=this;n=uni.createIntersectionObserver(this),n.relativeTo(".scroll-view").observe(".ball",(function(t){t.intersectionRatio>0&&!e.appear?e.appear=!0:!t.intersectionRatio>0&&e.appear&&(e.appear=!1)}))},onUnload:function(){n&&n.disconnect()}};t.default=i}}]);