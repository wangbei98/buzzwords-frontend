(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detail-detail"],{1031:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".cu-card.dynamic>.cu-item>.text-content[data-v-4a554c77]{margin-bottom:1px;margin-top:6px}",""]),t.exports=e},1529:function(t,e,i){"use strict";i.r(e);var a=i("8e6b"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},"3a5c":function(t,e,i){"use strict";i.r(e);var a=i("934f"),s=i("1529");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("4c32");var u,c=i("f0c5"),r=Object(c["a"])(s["default"],a["b"],a["c"],!1,null,"4a554c77",null,!1,a["a"],u);e["default"]=r.exports},"4c32":function(t,e,i){"use strict";var a=i("f1e2"),s=i.n(a);s.a},"8e6b":function(t,e,i){"use strict";i("4e82"),i("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{isCard:!1,qid:"",word:"",answers:[],latestAnswer:null,picker:["饭圈","QQ","游戏"]}},onLoad:function(t){this.qid=t.qid,this.refreshData(this.qid)},onShow:function(){this.refreshData(this.qid)},onPullDownRefresh:function(){var t=this;setTimeout((function(){t.refreshData(t.qid),uni.stopPullDownRefresh()}),1e3)},methods:{handleAddAnswer:function(){uni.navigateTo({url:"/pages/add/addAnswer?qid="+this.qid+"&aid=",success:function(t){},fail:function(){},complete:function(){}})},handleEditAnswer:function(t){var e=t.currentTarget.dataset.aid;uni.navigateTo({url:"/pages/add/addAnswer?qid="+this.qid+"&aid="+e,success:function(t){},fail:function(){},complete:function(){}})},refreshData:function(t){var e=this;uni.showLoading({title:"loading",mask:!1}),uni.request({url:"https://bytescloud.cn/api/question",method:"GET",data:{qid:t},header:{"Content-Type":"application/text"},success:function(t){e.word=t.data.data.question.word,e.answers=t.data.data.question.answers.sort((function(t,e){return t.create_time<e.created_time?1:-1})),e.answers.length>0&&(e.latestAnswer=e.answers[0]),uni.hideLoading()},fail:function(){},complete:function(){}})}},filters:{timeFormatterGetDate:function(t){var e=new Date(1e3*parseInt(t)),i=e.getFullYear(),a=e.getMonth()+1,s=e.getDate();return a<10&&(a="0"+a),s<10&&(s="0"+s),i+"/"+a+"/"+s},timeFormatterGetTime:function(t){var e=new Date(1e3*parseInt(t)),i=e.getHours(),a=e.getMinutes();return i<10&&(i="0"+i),a<10&&(a="0"+a),i+":"+a}}};e.default=a},"934f":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0}},[i("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),i("template",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.word))])],2),i("v-uni-view",{staticClass:"cu-card dynamic",class:t.isCard?"no-card":""},[i("v-uni-view",{staticClass:"cu-item shadow"},[i("v-uni-view",{staticClass:"cu-list menu-avatar comment solids-top"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"cu-avatar round "},[t._v(t._s(t.word))]),null==t.latestAnswer?i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"text-grey"},[t._v(t._s(t.word))]),i("v-uni-view",{staticClass:"text-gray text-content text-df"}),i("v-uni-view",{staticClass:"bg-grey padding-sm radius margin-top-sm  text-sm"},[i("v-uni-view",{staticClass:"flex"},[i("v-uni-view",[t._v("解释：")]),i("v-uni-view",{staticClass:"flex-sub"},[t._v("暂时没有解答，点击下方添加答案")])],1)],1)],1):i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"text-grey"},[t._v(t._s(t.word))]),i("v-uni-view",{staticClass:"text-gray text-content text-df"}),i("v-uni-view",{staticClass:"bg-grey padding-sm radius margin-top-sm  text-sm"},[i("v-uni-view",{staticClass:"flex"},[i("v-uni-view",[t._v("解释：")]),i("v-uni-view",{staticClass:"flex-sub"},[t._v(t._s(t.latestAnswer.meaning))])],1),i("v-uni-view",{staticClass:"flex"},[i("v-uni-view",[t._v("来源：")]),i("v-uni-view",{staticClass:"flex-sub"},[t._v(t._s(t.latestAnswer.fromWhat))])],1),i("v-uni-view",{staticClass:"flex"},[i("v-uni-view",[t._v("例子：")]),i("v-uni-view",{staticClass:"flex-sub"},[t._v(t._s(t.latestAnswer.example))])],1),t.latestAnswer.atype>=0?i("v-uni-view",{staticClass:"flex"},[i("v-uni-view",[t._v("分类：")]),i("v-uni-view",{staticClass:"flex-sub"},[t._v(t._s(t.picker[t.latestAnswer.atype]))])],1):t._e()],1),i("v-uni-view",{staticClass:"margin-top-sm flex justify-end"},[i("v-uni-view",[i("v-uni-text",{staticClass:"cuIcon-appreciatefill margin-lr-xs text"}),t._v("5"),i("v-uni-text",{staticClass:"cuIcon-appreciatefill margin-lr-xs text-red"}),t._v("10")],1)],1)],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-titles text-orange"}),t._v("修改记录")],1),i("v-uni-view",{staticClass:"padding flex flex-wrap justify-between align-center bg-white"},[i("v-uni-button",{staticClass:"cu-btn round sm bg-green",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleAddAnswer.apply(void 0,arguments)}}},[t._v("添加答案")])],1)],1),i("v-uni-view",{staticClass:"cu-timeline"},t._l(t.answers,(function(e,a){return i("v-uni-view",{key:a,staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"flex justify-between"},[i("v-uni-view",{staticClass:"cu-capsule radius"},[i("v-uni-view",{staticClass:"cu-tag bg-cyan"},[t._v(t._s(t._f("timeFormatterGetDate")(e.created_time)))]),i("v-uni-view",{staticClass:"cu-tag line-cyan"},[t._v(t._s(t._f("timeFormatterGetTime")(e.created_time)))])],1),i("v-uni-button",{staticClass:"cu-btn round sm bg-blue",attrs:{"data-aid":e.aid},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleEditAnswer.apply(void 0,arguments)}}},[t._v("修改")])],1),i("v-uni-view",{staticClass:"margin-top"},[t._v("【解释】"+t._s(e.meaning))]),i("v-uni-view",{staticClass:"margin-top"},[t._v("【来源】"+t._s(e.fromWhat))]),i("v-uni-view",{staticClass:"margin-top"},[t._v("【例子】"+t._s(e.example))]),e.atype>=0?i("v-uni-view",{staticClass:"margin-top"},[t._v("【分类】"+t._s(t.picker[e.atype]))]):t._e()],1)],1)})),1)],1)},n=[]},f1e2:function(t,e,i){var a=i("1031");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("433ea5bc",a,!0,{sourceMap:!1,shadowMode:!1})}}]);