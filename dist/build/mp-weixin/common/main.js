(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"034f":function(e,t,o){"use strict";var n=o("368d"),r=o.n(n);r.a},"23be":function(e,t,o){"use strict";o.r(t);var n=o("e4a4"),r=o.n(n);for(var c in n)"default"!==c&&function(e){o.d(t,e,(function(){return n[e]}))}(c);t["default"]=r.a},"368d":function(e,t,o){},"3dfd":function(e,t,o){"use strict";o.r(t);var n=o("23be");for(var r in n)"default"!==r&&function(e){o.d(t,e,(function(){return n[e]}))}(r);o("034f");var c,a,l,u,i=o("f0c5"),f=Object(i["a"])(n["default"],c,a,!1,null,null,null,!1,l,u);t["default"]=f.exports},"56d7":function(e,t,o){"use strict";(function(e){o("6cdc");var t=r(o("66fd")),n=r(o("3dfd"));function r(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var u=function(){o.e("colorui/components/cu-custom").then(function(){return resolve(o("5cd4"))}.bind(null,o)).catch(o.oe)};t.default.component("cu-custom",u),t.default.config.productionTip=!1,n.default.mpType="app";var i=new t.default(a({},n.default));e(i).$mount()}).call(this,o("543d")["createApp"])},e4a4:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(o("66fd"));function r(e){return e&&e.__esModule?e:{default:e}}var c={onLaunch:function(){e.getSystemInfo({success:function(e){n.default.prototype.StatusBar=e.statusBarHeight;var t=wx.getMenuButtonBoundingClientRect();n.default.prototype.Custom=t,n.default.prototype.CustomBar=t.bottom+t.top-e.statusBarHeight}}),n.default.prototype.ColorList=[{title:"嫣红",name:"red",color:"#e54d42"},{title:"桔橙",name:"orange",color:"#f37b1d"},{title:"明黄",name:"yellow",color:"#fbbd08"},{title:"橄榄",name:"olive",color:"#8dc63f"},{title:"森绿",name:"green",color:"#39b54a"},{title:"天青",name:"cyan",color:"#1cbbb4"},{title:"海蓝",name:"blue",color:"#0081ff"},{title:"姹紫",name:"purple",color:"#6739b6"},{title:"木槿",name:"mauve",color:"#9c26b0"},{title:"桃粉",name:"pink",color:"#e03997"},{title:"棕褐",name:"brown",color:"#a5673f"},{title:"玄灰",name:"grey",color:"#8799a3"},{title:"草灰",name:"gray",color:"#aaaaaa"},{title:"墨黑",name:"black",color:"#333333"},{title:"雅白",name:"white",color:"#ffffff"}]},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};t.default=c}).call(this,o("543d")["default"])}},[["56d7","common/runtime","common/vendor"]]]);