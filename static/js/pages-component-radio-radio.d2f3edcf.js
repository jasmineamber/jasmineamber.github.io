(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-radio-radio"],{"024e":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".uni-list-cell[data-v-117df12a]{justify-content:flex-start}",""]),t.exports=e},"4a60":function(t,e,a){"use strict";a.r(e);var i=a("ec04"),n=a("e613");for(var u in n)["default"].indexOf(u)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(u);a("e092");var r,l=a("f0c5"),s=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"117df12a",null,!1,i["a"],r);e["default"]=s.exports},"9fe9":function(t,e,a){var i=a("024e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("650e4816",i,!0,{sourceMap:!1,shadowMode:!1})},a203:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{title:"radio 单选框",items:[{value:"USA",name:"美国"},{value:"CHN",name:"中国",checked:"true"},{value:"BRA",name:"巴西"},{value:"JPN",name:"日本"},{value:"ENG",name:"英国"},{value:"FRA",name:"法国"}],current:0}},methods:{radioChange:function(t){for(var e=0;e<this.items.length;e++)if(this.items[e].value===t.detail.value){this.current=e;break}}}};e.default=i},e092:function(t,e,a){"use strict";var i=a("9fe9"),n=a.n(i);n.a},e613:function(t,e,a){"use strict";a.r(e);var i=a("a203"),n=a.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(u);e["default"]=n.a},ec04:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return u})),a.d(e,"a",(function(){return i}));var i={pageHead:a("0586").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("page-head",{attrs:{title:t.title}}),a("v-uni-view",{staticClass:"uni-padding-wrap"},[a("v-uni-view",{staticClass:"uni-title"},[t._v("默认样式")]),a("v-uni-view",[a("v-uni-label",{staticClass:"radio",staticStyle:{"margin-right":"30rpx"}},[a("v-uni-radio",{attrs:{value:"r1",checked:"true"}}),t._v("选中")],1),a("v-uni-label",{staticClass:"radio"},[a("v-uni-radio",{attrs:{value:"r2"}}),t._v("未选中")],1)],1)],1),a("v-uni-view",{staticClass:"uni-padding-wrap"},[a("v-uni-view",{staticClass:"uni-title"},[t._v("不同颜色和尺寸的radio")]),a("v-uni-view",[a("v-uni-label",{staticClass:"radio",staticStyle:{"margin-right":"30rpx"}},[a("v-uni-radio",{staticStyle:{transform:"scale(0.7)"},attrs:{value:"r1",checked:"true",color:"#FFCC33"}}),t._v("选中")],1),a("v-uni-label",{staticClass:"radio"},[a("v-uni-radio",{staticStyle:{transform:"scale(0.7)"},attrs:{value:"r2",color:"#FFCC33"}}),t._v("未选中")],1)],1)],1),a("v-uni-view",{staticClass:"uni-title uni-common-mt uni-common-pl"},[t._v("推荐展示样式")]),a("v-uni-view",{staticClass:"uni-list"},[a("v-uni-radio-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioChange.apply(void 0,arguments)}}},t._l(t.items,(function(e,i){return a("v-uni-label",{key:e.value,staticClass:"uni-list-cell uni-list-cell-pd"},[a("v-uni-view",[a("v-uni-radio",{attrs:{value:e.value,checked:i===t.current}})],1),a("v-uni-view",[t._v(t._s(e.name))])],1)})),1)],1)],1)},u=[]}}]);