(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-get-location-get-location"],{"0094":function(t,e,n){"use strict";var i,r=n("da84"),o=n("e330"),a=n("6964"),u=n("f183"),c=n("6d61"),s=n("acac"),f=n("861d"),d=n("4fad"),p=n("69f3").enforce,l=n("7f9a"),v=!r.ActiveXObject&&"ActiveXObject"in r,h=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},g=c("WeakMap",h,s);if(l&&v){i=s.getConstructor(h,"WeakMap",!0),u.enable();var b=g.prototype,w=o(b["delete"]),m=o(b.has),y=o(b.get),x=o(b.set);a(b,{delete:function(t){if(f(t)&&!d(t)){var e=p(this);return e.frozen||(e.frozen=new i),w(this,t)||e.frozen["delete"](t)}return w(this,t)},has:function(t){if(f(t)&&!d(t)){var e=p(this);return e.frozen||(e.frozen=new i),m(this,t)||e.frozen.has(t)}return m(this,t)},get:function(t){if(f(t)&&!d(t)){var e=p(this);return e.frozen||(e.frozen=new i),m(this,t)?y(this,t):e.frozen.get(t)}return y(this,t)},set:function(t,e){if(f(t)&&!d(t)){var n=p(this);n.frozen||(n.frozen=new i),m(this,t)?x(this,t,e):n.frozen.set(t,e)}else x(this,t,e);return this}})}},"10d1":function(t,e,n){n("0094")},"1bff":function(t,e,n){"use strict";n.r(e);var i=n("e0a3"),r=n("da87");for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("215d");var a,u=n("f0c5"),c=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"7a7c9a86",null,!1,i["a"],a);e["default"]=c.exports},"1c8d":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".popup-view[data-v-7a7c9a86]{width:%?500?%}.popup-title[data-v-7a7c9a86]{display:block;font-size:16px;line-height:3;margin-bottom:10px;text-align:center}.popup-buttons uni-button[data-v-7a7c9a86]{margin-left:4px;margin-right:4px}",""]),t.exports=e},"215d":function(t,e,n){"use strict";var i=n("4bd7"),r=n.n(i);r.a},"325c":function(t,e,n){"use strict";function i(t){if("number"!==typeof t||t<0)return t;var e=parseInt(t/3600);t%=3600;var n=parseInt(t/60);t%=60;var i=t;return[e,n,i].map((function(t){return t=t.toString(),t[1]?t:"0"+t})).join(":")}function r(t,e){return"string"===typeof t&&"string"===typeof e&&(t=parseFloat(t),e=parseFloat(e)),t=t.toFixed(2),e=e.toFixed(2),{longitude:t.toString().split("."),latitude:e.toString().split(".")}}n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.dateUtils=void 0,e.formatLocation=r,e.formatTime=i,n("e25e"),n("d81d"),n("d401"),n("d3b7"),n("25f0"),n("acd8"),n("ac1f"),n("1276");var o={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(t){var e="";for(var n in this.UNITS)if(t>=this.UNITS[n]){e=Math.floor(t/this.UNITS[n])+n+"前";break}return e||"刚刚"},format:function(t){var e=this.parse(t),n=Date.now()-e.getTime();if(n<this.UNITS["天"])return this.humanize(n);var i=function(t){return t<10?"0"+t:t};return e.getFullYear()+"/"+i(e.getMonth()+1)+"/"+i(e.getDate())+"-"+i(e.getHours())+":"+i(e.getMinutes())},parse:function(t){var e=t.split(/[^0-9]/);return new Date(e[0],e[1]-1,e[2],e[3],e[4],e[5])}};e.dateUtils=o},"4bd7":function(t,e,n){var i=n("1c8d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("3bf3c7b6",i,!0,{sourceMap:!1,shadowMode:!1})},"4fad":function(t,e,n){var i=n("d039"),r=n("861d"),o=n("c6b6"),a=n("d86b"),u=Object.isExtensible,c=i((function(){u(1)}));t.exports=c||a?function(t){return!!r(t)&&((!a||"ArrayBuffer"!=o(t))&&(!u||u(t)))}:u},"6d61":function(t,e,n){"use strict";var i=n("23e7"),r=n("da84"),o=n("e330"),a=n("94ca"),u=n("cb2d"),c=n("f183"),s=n("2266"),f=n("19aa"),d=n("1626"),p=n("861d"),l=n("d039"),v=n("1c7e"),h=n("d44e"),g=n("7156");t.exports=function(t,e,n){var b=-1!==t.indexOf("Map"),w=-1!==t.indexOf("Weak"),m=b?"set":"add",y=r[t],x=y&&y.prototype,O=y,S={},_=function(t){var e=o(x[t]);u(x,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(w&&!p(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return w&&!p(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(w&&!p(t))&&e(this,0===t?0:t)}:function(t,n){return e(this,0===t?0:t,n),this})},k=a(t,!d(y)||!(w||x.forEach&&!l((function(){(new y).entries().next()}))));if(k)O=n.getConstructor(e,t,b,m),c.enable();else if(a(t,!0)){var j=new O,C=j[m](w?{}:-0,1)!=j,z=l((function(){j.has(1)})),E=v((function(t){new y(t)})),M=!w&&l((function(){var t=new y,e=5;while(e--)t[m](e,e);return!t.has(-0)}));E||(O=e((function(t,e){f(t,x);var n=g(new y,t,O);return void 0!=e&&s(e,n[m],{that:n,AS_ENTRIES:b}),n})),O.prototype=x,x.constructor=O),(z||M)&&(_("delete"),_("has"),b&&_("get")),(M||C)&&_(m),w&&x.clear&&delete x.clear}return S[t]=O,i({global:!0,constructor:!0,forced:O!=y},S),h(O,t),w||n.setStrong(O,t,b),O}},"9fe6":function(t,e,n){"use strict";n("3ca3"),n("10d1"),n("ddb0"),n("7a82"),n("e439");var i=n("4ea4"),r=n("7037");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c975"),n("d3b7"),n("96cf");var o=i(n("1da1")),a=c(n("325c"));function u(t){if("function"!==typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(u=function(t){return t?n:e})(t)}function c(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!==typeof t)return{default:t};var n=u(e);if(n&&n.has(t))return n.get(t);var i={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if("default"!==a&&Object.prototype.hasOwnProperty.call(t,a)){var c=o?Object.getOwnPropertyDescriptor(t,a):null;c&&(c.get||c.set)?Object.defineProperty(i,a,c):i[a]=t[a]}return i.default=t,n&&n.set(t,i),i}var s=a.formatLocation,f={data:function(){return{title:"getLocation",hasLocation:!1,location:{},type:""}},methods:{togglePopup:function(t){this.type=t},showConfirm:function(){this.type="showpopup"},hideConfirm:function(){this.type=""},getLocation:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.doGetLocation();case 1:case"end":return e.stop()}}),e)})))()},doGetLocation:function(){var t=this;uni.getLocation({success:function(e){t.hasLocation=!0,t.location=s(e.longitude,e.latitude)},fail:function(t){t.errMsg.indexOf("auth deny")>=0?uni.showToast({title:"访问位置被拒绝"}):uni.showToast({title:t.errMsg})}})},getSetting:function(){return new Promise((function(t,e){uni.getSetting({success:function(e){void 0!==e.authSetting["scope.userLocation"]?e.authSetting["scope.userLocation"]?t(1):t(2):t(0)}})}))},openSetting:function(){var t=this;this.hideConfirm(),uni.openSetting({success:function(e){e.authSetting&&e.authSetting["scope.userLocation"]&&t.doGetLocation()},fail:function(t){}})},checkPermission:function(){return(0,o.default)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!permision.isIOS){t.next=6;break}return t.next=3,permision.requestIOS("location");case 3:t.t0=t.sent,t.next=9;break;case 6:return t.next=8,permision.requestAndroid("android.permission.ACCESS_FINE_LOCATION");case 8:t.t0=t.sent;case 9:return e=t.t0,null===e||1===e?e=1:2===e?uni.showModal({content:"系统定位已关闭",confirmText:"确定",showCancel:!1,success:function(t){}}):e.code?uni.showModal({content:e.message}):uni.showModal({content:"需要定位权限",confirmText:"设置",success:function(t){t.confirm&&permision.gotoAppSetting()}}),t.abrupt("return",e);case 12:case"end":return t.stop()}}),t)})))()},clear:function(){this.hasLocation=!1}}};e.default=f},acac:function(t,e,n){"use strict";var i=n("e330"),r=n("6964"),o=n("f183").getWeakData,a=n("825a"),u=n("861d"),c=n("19aa"),s=n("2266"),f=n("b727"),d=n("1a2d"),p=n("69f3"),l=p.set,v=p.getterFor,h=f.find,g=f.findIndex,b=i([].splice),w=0,m=function(t){return t.frozen||(t.frozen=new y)},y=function(){this.entries=[]},x=function(t,e){return h(t.entries,(function(t){return t[0]===e}))};y.prototype={get:function(t){var e=x(this,t);if(e)return e[1]},has:function(t){return!!x(this,t)},set:function(t,e){var n=x(this,t);n?n[1]=e:this.entries.push([t,e])},delete:function(t){var e=g(this.entries,(function(e){return e[0]===t}));return~e&&b(this.entries,e,1),!!~e}},t.exports={getConstructor:function(t,e,n,i){var f=t((function(t,r){c(t,p),l(t,{type:e,id:w++,frozen:void 0}),void 0!=r&&s(r,t[i],{that:t,AS_ENTRIES:n})})),p=f.prototype,h=v(e),g=function(t,e,n){var i=h(t),r=o(a(e),!0);return!0===r?m(i).set(e,n):r[i.id]=n,t};return r(p,{delete:function(t){var e=h(this);if(!u(t))return!1;var n=o(t);return!0===n?m(e)["delete"](t):n&&d(n,e.id)&&delete n[e.id]},has:function(t){var e=h(this);if(!u(t))return!1;var n=o(t);return!0===n?m(e).has(t):n&&d(n,e.id)}}),r(p,n?{get:function(t){var e=h(this);if(u(t)){var n=o(t);return!0===n?m(e).get(t):n?n[e.id]:void 0}},set:function(t,e){return g(this,t,e)}}:{add:function(t){return g(this,t,!0)}}),f}}},bb2f:function(t,e,n){var i=n("d039");t.exports=!i((function(){return Object.isExtensible(Object.preventExtensions({}))}))},d86b:function(t,e,n){var i=n("d039");t.exports=i((function(){if("function"==typeof ArrayBuffer){var t=new ArrayBuffer(8);Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}}))},da87:function(t,e,n){"use strict";n.r(e);var i=n("9fe6"),r=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},e0a3:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={pageHead:n("0586").default,uniPopup:n("27c0").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticStyle:{background:"#FFFFFF",padding:"40rpx"}},[n("v-uni-view",{staticClass:"uni-hello-text uni-center"},[t._v("当前位置经纬度")]),!1===t.hasLocation?[n("v-uni-view",{staticClass:"uni-h2 uni-center uni-common-mt"},[t._v("未获取")])]:t._e(),!0===t.hasLocation?[n("v-uni-view",{staticClass:"uni-h2 uni-center uni-common-mt"},[n("v-uni-text",[t._v("E: "+t._s(t.location.longitude[0])+"°"+t._s(t.location.longitude[1])+"′")]),n("v-uni-text",[t._v("\\nN: "+t._s(t.location.latitude[0])+"°"+t._s(t.location.latitude[1])+"′")])],1)]:t._e()],2),n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getLocation.apply(void 0,arguments)}}},[t._v("获取位置")]),n("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[t._v("清空")])],1)],1),n("uni-popup",{attrs:{show:"showpopup"===t.type,mode:"fixed"},on:{hidePopup:function(e){arguments[0]=e=t.$handleEvent(e),t.togglePopup("")}}},[n("v-uni-view",{staticClass:"popup-view"},[n("v-uni-text",{staticClass:"popup-title"},[t._v("需要用户授权位置权限")]),n("v-uni-view",{staticClass:"uni-flex popup-buttons"},[n("v-uni-button",{staticClass:"uni-flex-item",attrs:{type:"primary","open-type":"openSetting"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openSetting.apply(void 0,arguments)}}},[t._v("设置")]),n("v-uni-button",{staticClass:"uni-flex-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.togglePopup("")}}},[t._v("取消")])],1)],1)],1)],1)},o=[]},f183:function(t,e,n){var i=n("23e7"),r=n("e330"),o=n("d012"),a=n("861d"),u=n("1a2d"),c=n("9bf2").f,s=n("241c"),f=n("057f"),d=n("4fad"),p=n("90e3"),l=n("bb2f"),v=!1,h=p("meta"),g=0,b=function(t){c(t,h,{value:{objectID:"O"+g++,weakData:{}}})},w=function(t,e){if(!a(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!u(t,h)){if(!d(t))return"F";if(!e)return"E";b(t)}return t[h].objectID},m=function(t,e){if(!u(t,h)){if(!d(t))return!0;if(!e)return!1;b(t)}return t[h].weakData},y=function(t){return l&&v&&d(t)&&!u(t,h)&&b(t),t},x=function(){O.enable=function(){},v=!0;var t=s.f,e=r([].splice),n={};n[h]=1,t(n).length&&(s.f=function(n){for(var i=t(n),r=0,o=i.length;r<o;r++)if(i[r]===h){e(i,r,1);break}return i},i({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:f.f}))},O=t.exports={enable:x,fastKey:w,getWeakData:m,onFreeze:y};o[h]=!0}}]);