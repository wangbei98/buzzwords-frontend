(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-home"],{"1c8b":function(t,e,i){"use strict";i.r(e);var n=i("93fb"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"22cd":function(t,e,i){"use strict";i.r(e);var n=i("9407"),a=i("1c8b");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("5242");var s,l=i("f0c5"),r=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"563509b2",null,!1,n["a"],s);e["default"]=r.exports},"3c27":function(t,e,i){var n=i("8bee");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("0796fda0",n,!0,{sourceMap:!1,shadowMode:!1})},5242:function(t,e,i){"use strict";var n=i("3c27"),a=i.n(n);a.a},"8bee":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'uni-page-body[data-v-563509b2]{padding-top:%?100?%}.indexes[data-v-563509b2]{position:relative}.indexBar[data-v-563509b2]{position:fixed;right:0;bottom:0;padding:%?20?% %?20?% %?20?% %?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.indexBar .indexBar-box[data-v-563509b2]{width:%?40?%;height:auto;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-shadow:0 0 %?20?% rgba(0,0,0,.1);border-radius:%?10?%}.indexBar-item[data-v-563509b2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:%?40?%;height:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?24?%;color:#888}uni-movable-view.indexBar-item[data-v-563509b2]{width:%?40?%;height:%?40?%;z-index:9;position:relative}uni-movable-view.indexBar-item[data-v-563509b2]::before{content:"";display:block;position:absolute;left:0;top:%?10?%;height:%?20?%;width:%?4?%;background-color:#f37b1d}.indexToast[data-v-563509b2]{position:fixed;top:0;right:%?80?%;bottom:0;background:rgba(0,0,0,.5);width:%?100?%;height:%?100?%;border-radius:%?10?%;margin:auto;color:#fff;line-height:%?100?%;text-align:center;font-size:%?48?%}',""]),t.exports=e},"93fb":function(t,e,i){"use strict";i("4de4"),i("4e82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,hidden:!0,listCurID:"",list:[],listCur:"",questions:[],toggleDelay:!1,colors:["red","orange","olive","green","cyan","blue","purple","mauve"],curFilterIndex:0,filters:["所有","已回答","未回答"],showRadioModal:!1,hintModal:!1,searchText:""}},onLoad:function(){this.refreshData()},onShow:function(){this.refreshData()},onPullDownRefresh:function(){var t=this;setTimeout((function(){t.refreshData(),uni.stopPullDownRefresh()}),1e3)},onReady:function(){},methods:{handleDetail:function(t){var e=t.currentTarget.dataset.qid;uni.navigateTo({url:"/pages/detail/detail?qid="+e,success:function(t){},fail:function(){},complete:function(){}})},goDetailPage:function(t){uni.navigateTo({url:"/pages/detail/mp-detail?qid="+t,success:function(t){},fail:function(){},complete:function(){}})},refreshData:function(){uni.showLoading({title:"loading",mask:!1});var t=this;uni.request({url:"https://bytescloud.cn/api/questions",method:"GET",data:{},success:function(e){0==t.curFilterIndex?t.questions=e.data.data.questions.sort():1==t.curFilterIndex?t.questions=e.data.data.questions.filter((function(t){return t.answers.length>0})).sort():2==t.curFilterIndex&&(t.questions=e.data.data.questions.filter((function(t){return 0==t.answers.length})).sort()),uni.hideLoading()},fail:function(){},complete:function(){}})},showModal:function(){this.showRadioModal=!0},hideModal:function(){this.showRadioModal=!1},showHintModal:function(){this.hintModal=!0},hideHinModal:function(){this.hintModal=!1},radioChange:function(t){this.curFilterIndex=t.detail.value,this.refreshData()},handleSearch:function(){var t=this;uni.request({url:"https://bytescloud.cn/api/question/search",method:"GET",data:{word:t.searchText},header:{"Content-Type":"application/text"},success:function(e){if(0==e.data.code){var i=e.data.data.qid;t.goDetailPage(i)}else t.showHintModal()},fail:function(){},complete:function(){}})}}};e.default=n},9407:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("cu-custom",{attrs:{bgColor:"bg-gradual-green"}},[i("template",{attrs:{slot:"content"},slot:"content"},[t._v("好好说话")])],2),i("v-uni-view",{staticClass:"cu-bar bg-white search fixed",style:[{top:t.CustomBar+"px"}]},[i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal.apply(void 0,arguments)}}},[i("v-uni-button",{staticClass:"cu-btn bg-gradual-cyan shadow-blur round"},[t._v(t._s(t.filters[t.curFilterIndex])),i("v-uni-text",{staticClass:"cuIcon-triangledownfill"})],1)],1),i("v-uni-view",{staticClass:"search-form round"},[i("v-uni-text",{staticClass:"cuIcon-search"}),i("v-uni-input",{attrs:{type:"text",placeholder:"输入搜索的关键词","confirm-type":"search"},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}})],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-button",{staticClass:"cu-btn bg-gradual-green shadow-blur round",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSearch.apply(void 0,arguments)}}},[t._v("搜索")])],1)],1),i("v-uni-scroll-view",{attrs:{"scroll-y":"true"}},[i("v-uni-view",{staticClass:"padding-sm"},[i("v-uni-view",{staticClass:"flex flex-wrap justify-between"},t._l(t.questions,(function(e,n){return i("v-uni-button",{key:n,staticClass:"margin-sm basis-sm shadow cu-btn",class:["bg-"+t.colors[n%8],t.toggleDelay?"animation-slide-bottom":""],style:[{animationDelay:.1*(n+1)+"s"}],attrs:{"data-qid":t.questions[n].qid},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleDetail.apply(void 0,arguments)}}},[t._v(t._s(e.word))])})),1)],1)],1),i("v-uni-view",{staticClass:"cu-modal",class:t.hintModal?"show":""},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[i("v-uni-view",{staticClass:"content"},[t._v("提示")]),i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideHinModal.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),i("v-uni-view",{staticClass:"padding-xl"},[t._v("查询失败")])],1)],1)],1)},o=[]}}]);