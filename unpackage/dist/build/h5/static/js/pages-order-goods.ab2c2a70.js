(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-goods"],{"2ac9":function(t,e,a){"use strict";var i=a("ca98"),n=a.n(i);n.a},"5b4c":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"navbar"},t._l(t.navList,function(e,i){return a("v-uni-view",{key:i,staticClass:"nav-item",class:{current:t.tabCurrentIndex===i},on:{click:function(e){e=t.$handleEvent(e),t.tabClick(i)}}},[t._v(t._s(e.text))])}),1),a("v-uni-swiper",{staticClass:"swiper-box",attrs:{current:t.tabCurrentIndex,duration:"300"},on:{change:function(e){e=t.$handleEvent(e),t.changeTab(e)}}},t._l(t.navList,function(e,i){return a("v-uni-swiper-item",{key:i,staticClass:"tab-content"},[a("v-uni-scroll-view",{staticClass:"list-scroll-content",attrs:{"scroll-y":"","lower-threshold":"50"},on:{scrolltolower:function(e){e=t.$handleEvent(e),t.loadData(e)}}},[e.loaded?[0===e.orderList.length?[a("v-uni-view",{staticClass:"record"},[a("v-uni-image",{attrs:{src:"../../static/img/error/pic-zanwujilu-n.png"}})],1),a("v-uni-view",{staticClass:"queren"},[a("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){e=t.$handleEvent(e),t.btn(e)}}},[t._v("立即抢购")])],1)]:[t._l(e.orderList,function(e){return a("v-uni-view",{key:e.periodId,staticClass:"purchase",on:{click:function(a){a=t.$handleEvent(a),t.toDetail(e)}}},[a("v-uni-view",{staticClass:"purchase-top"},[a("v-uni-view",{staticClass:"purchase-left"},[a("v-uni-view",{staticClass:"top"},[1==e.executeStatus?a("v-uni-image",{attrs:{src:"../../static/img/footer/pic-qianggouzhong.png"}}):2==e.executeStatus?a("v-uni-image",{attrs:{src:"../../static/img/footer/pic-daiqueren.png"}}):a("v-uni-image",{attrs:{src:"../../static/img/footer/pic-over.png"}})],1),a("v-uni-view",{staticClass:"button"},[a("v-uni-image",{attrs:{src:e.img}})],1)],1),a("v-uni-view",{staticClass:"purchase-right"},[a("v-uni-view",{staticClass:"over"},[e.executeStatus>=1&&e.executeStatus<=2?[a("v-uni-text",{staticStyle:{"margin-right":"4upx"}},[t._v(t._s(e.tips))]),e.isRefreshTime?a("uni-countdown",{attrs:{"show-day":!1,hour:e.countdownTime[0],minute:e.countdownTime[1],second:e.countdownTime[2],color:"#4A4A4A","border-color":"#ffffff"},on:{timeup:function(a){a=t.$handleEvent(a),t.timeup(e)}}}):t._e()]:[a("v-uni-text",[t._v(t._s("1"===e.isWin?"已抢中":"未抢中"))])]],2),a("v-uni-view",{staticClass:"tyrant"},[a("v-uni-text",[t._v(t._s(e.title))])],1),a("v-uni-view",{staticClass:"pice"},[a("v-uni-text",{staticClass:"pic1"},[t._v(t._s(e.executeStatus>2?"最终均价":"当前均价"))]),a("v-uni-text",{staticClass:"pic2"},[t._v("¥")]),a("v-uni-text",{staticClass:"pic3"},[t._v(t._s(e.lastAvgPrice))])],1),a("v-uni-view",{staticClass:"bid"},[a("v-uni-text",{staticClass:"bid-up"},[t._v("已出价"),a("v-uni-text",{staticClass:"bid-ci"},[t._v(t._s(e.biddingTimes||0))]),t._v("次")],1)],1)],1)],1),a("v-uni-view",{staticClass:"purchase-bottom"},[a("v-uni-view",{staticClass:"left"},[t._v(t._s(t._f("covertDate")(e.guessStartTime)))]),a("v-uni-view",{staticClass:"right"},[1==e.executeStatus?[a("v-uni-button",{staticStyle:{"background-color":"#ff5847"},attrs:{type:"primary"},on:{click:function(a){a.stopPropagation(),a=t.$handleEvent(a),t.toDetail(e)}}},[t._v("出价抢购")])]:[a("v-uni-button",{staticStyle:{"background-color":"#4a90e2"},attrs:{type:"primary"},on:{click:function(a){a.stopPropagation(),a=t.$handleEvent(a),t.toNextQi(e)}}},[t._v("抢购下期")])]],2)],1)],1)}),a("uni-load-more",{staticStyle:{"margin-bottom":"20upx"},attrs:{status:e.loadingType}})]]:a("uni-load-more",{staticStyle:{"margin-top":"20upx"},attrs:{status:e.loadingType}})],2)],1)}),1)],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},"82c3":function(t,e,a){"use strict";a.r(e);var i=a("e0c0"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);e["default"]=n.a},c9e1:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-3bb9c843],uni-page-body[data-v-3bb9c843]{height:100%}.swiper-box[data-v-3bb9c843]{height:calc(100% - %?90?%);background:#f5f5f5}.list-scroll-content[data-v-3bb9c843]{height:100%}.navbar[data-v-3bb9c843]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:%?90?%;padding:0 5px;background:#fff;-webkit-box-shadow:0 1px 5px rgba(0,0,0,.06);box-shadow:0 1px 5px rgba(0,0,0,.06);position:relative;z-index:10}.navbar .nav-item[data-v-3bb9c843]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:100%;font-size:%?28?%;color:#9b9b9b;position:relative;font-family:PingFangSC-Medium;font-weight:500}.navbar .nav-item.current[data-v-3bb9c843]{font-size:%?28?%;font-family:PingFangSC-Medium;font-weight:500;color:#000}.navbar .nav-item.current[data-v-3bb9c843]:after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);width:%?100?%;height:0;border-bottom:2px solid #ff5847}.uni-swiper-item[data-v-3bb9c843]{height:auto}\n/*商品列表  */.purchase[data-v-3bb9c843]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:%?351?%;background:#fff;border-radius:%?20?%;margin:%?30?% %?30?%}.purchase .purchase-top[data-v-3bb9c843]{height:%?214?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.purchase .purchase-top .purchase-left .top[data-v-3bb9c843]{border-radius:%?20?%;width:%?117?%;height:%?46?%}.purchase .purchase-top .purchase-left .top uni-image[data-v-3bb9c843]{border-radius:%?20?%;width:100%;height:100%}.purchase .purchase-top .purchase-left .button[data-v-3bb9c843]{width:%?180?%;height:%?180?%;padding:%?30?% %?7?% %?0?% %?30?%}.purchase .purchase-top .purchase-left .button uni-image[data-v-3bb9c843]{width:100%;height:100%}.purchase .purchase-top .purchase-right[data-v-3bb9c843]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.purchase .purchase-top .purchase-right .over[data-v-3bb9c843]{padding:%?30?% %?30?% %?0?% %?188?%;text-align:right}.purchase .purchase-top .purchase-right .over uni-text[data-v-3bb9c843]{font-size:%?24?%;font-family:PingFangSC-Medium;font-weight:500;color:#4a4a4a}.purchase .purchase-top .purchase-right .over .uni-countdown__splitor[data-v-3bb9c843],.purchase .purchase-top .purchase-right .over[data-v-3bb9c843] .uni-countdown__number{font-size:%?24?%;margin:0;padding:0;border:none}.purchase .purchase-top .purchase-right .tyrant[data-v-3bb9c843]{width:%?450?%;overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis}.purchase .purchase-top .purchase-right .tyrant uni-text[data-v-3bb9c843]{font-size:%?30?%;font-family:PingFangSC-Medium;font-weight:500;color:#4a4a4a}.purchase .purchase-top .purchase-right .pice[data-v-3bb9c843]{margin:%?5?% %?0?%}.purchase .purchase-top .purchase-right .pice .pic1[data-v-3bb9c843]{font-size:%?26?%;font-family:PingFangSC-Regular;font-weight:400;color:#4a4a4a;margin-right:%?20?%}.purchase .purchase-top .purchase-right .pice .pic2[data-v-3bb9c843]{font-size:%?28?%;font-family:PingFangSC-Medium;font-weight:500;color:#ff9f00}.purchase .purchase-top .purchase-right .pice .pic3[data-v-3bb9c843]{font-size:%?36?%;font-family:PingFangSC-Medium;font-weight:500;color:#ff9f00}.purchase .purchase-top .purchase-right .bid[data-v-3bb9c843]{font-size:%?26?%;font-family:PingFangSC-Regular;font-weight:400}.purchase .purchase-top .purchase-right .bid .bid-up[data-v-3bb9c843]{color:#4a4a4a}.purchase .purchase-top .purchase-right .bid .bid-ci[data-v-3bb9c843]{color:#ff5847}.purchase .purchase-bottom[data-v-3bb9c843]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:0 %?30?%}.purchase .purchase-bottom .left[data-v-3bb9c843]{margin-top:%?25?%;font-size:%?26?%;font-family:PingFangSC-Regular;font-weight:400;color:#4a4a4a}.purchase .purchase-bottom .right[data-v-3bb9c843]{width:%?240?%}.record[data-v-3bb9c843]{margin:%?267?% %?230?% %?97?% %?230?%}.record uni-image[data-v-3bb9c843]{width:%?290?%;height:%?250?%}.queren[data-v-3bb9c843]{height:%?80?%}.queren uni-button[data-v-3bb9c843]{width:%?360?%;background:#ff5847;font-size:%?32?%;font-family:PingFangSC-Medium;font-weight:500}',""])},ca98:function(t,e,a){var i=a("c9e1");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("06e7b356",i,!0,{sourceMap:!1,shadowMode:!1})},e0c0:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(a("a34a")),n=o(a("fd3c")),r=o(a("c7cc"));function o(t){return t&&t.__esModule?t:{default:t}}function s(t,e,a,i,n,r,o){try{var s=t[r](o),c=s.value}catch(u){return void a(u)}s.done?e(c):Promise.resolve(c).then(i,n)}function c(t){return function(){var e=this,a=arguments;return new Promise(function(i,n){var r=t.apply(e,a);function o(t){s(r,i,n,o,c,"next",t)}function c(t){s(r,i,n,o,c,"throw",t)}o(void 0)})}}var u={components:{uniLoadMore:n.default,uniCountdown:r.default},data:function(){return{tabCurrentIndex:0,pageSize:10,navList:[{currentPageIndex:1,text:"全部",loadingType:"more",orderList:[]},{currentPageIndex:1,text:"抢购中",loadingType:"more",orderList:[]},{currentPageIndex:1,text:"已抢中",loadingType:"more",orderList:[]},{currentPageIndex:1,text:"未抢中",loadingType:"more",orderList:[]}]}},onLoad:function(t){this.tabCurrentIndex=+t.state,this.loadData()},filters:{covertDate:function(t){return t?new Date(t).Format("yyyy-MM-dd hh:mm:ss"):""}},methods:{btn:function(){uni.switchTab({url:"/pages/session/primarys"})},loadData:function(t){var e=this.tabCurrentIndex,a=this.navList[e];"tabChange"===t&&!0===a.loaded||"loading"!==a.loadingType&&"noMore"!==a.loadingType&&(a.loadingType="loading",this.getData(this.tabCurrentIndex))},changeTab:function(){var t=c(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.tabCurrentIndex=e.target.current,this.loadData("tabChange");case 2:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),tabClick:function(t){this.tabCurrentIndex=t},getData:function(t){var e=this;t=t||0;var a=this.navList[t],i={currentPage:a.currentPageIndex,data:{},pageSize:this.pageSize};t>0&&(i.data.status=t),this.$api.postAPI("guess/myGuessList",i).then(function(t){if(uni.hideLoading(),e.$set(a,"loaded",!0),0!=t.data.code)return uni.showToast({title:t.data.msg,icon:"none",duration:3e3});if(a.orderList.length>0){var i=e.handlerData(t.data.timestamp,t.data.data.data);a.orderList=a.orderList.concat(i),i.length<e.pageSize?a.loadingType="noMore":(a.currentPageIndex++,a.loadingType="more")}else a.orderList=e.handlerData(t.data.timestamp,t.data.data.data),a.orderList.length<e.pageSize?a.loadingType="noMore":(a.currentPageIndex++,a.loadingType="more")}).catch(function(t){return uni.hideLoading(),uni.showToast({title:"网络错误",icon:"none",duration:3e3})})},handlerData:function(t,e){var a=[].concat(e),i=!0,n=!1,r=void 0;try{for(var o,s=a[Symbol.iterator]();!(i=(o=s.next()).done);i=!0){var c=o.value;this.handlerTime(t,c)}}catch(u){n=!0,r=u}finally{try{i||null==s.return||s.return()}finally{if(n)throw r}}return a},handlerTime:function(t,e){var a=this,i=new Date(t||e.currentTime);if(t&&(e.currentTime=t),1==e.executeStatus){var n=new Date(e.guessEndTime),r=n.getTime()-i.getTime();e.tips="距结束",e.isRefreshTime=!1,this.$nextTick(function(){e.isRefreshTime=!0,e.countdownTime=r>0?a.getMSDate(r):[0,0,0]})}else if(2==e.executeStatus){var o=new Date(e.lotteryTime),s=new Date(e.guessEndTime),c=s.getTime()-i.getTime();i=i.getTime()+c+1e3;var u=o.getTime()-i;e.tips="结果确认中",e.isRefreshTime=!1,this.$nextTick(function(){e.isRefreshTime=!0,e.countdownTime=u>0?a.getMSDate(u):[0,0,0]})}},getMSDate:function(t){Math.floor(t/864e5);var e=t%864e5,a=Math.floor(e/36e5),i=e%36e5,n=Math.floor(i/6e4),r=i%6e4,o=Math.round(r/1e3);return[a,n,o]},timeup:function(t){var e=this;1==t.executeStatus?(t.tips="获取中...",t.isRefreshTime=!1,setTimeout(function(){t.executeStatus=2,e.handlerTime(null,t)},1e3)):2==t.executeStatus&&(t.executeStatus=3,t.tips="获取中...",t.isRefreshTime=!1,setTimeout(function(){e.navList=[{currentPageIndex:1,text:"全部",loadingType:"more",orderList:[]},{currentPageIndex:1,text:"抢购中",loadingType:"more",orderList:[]},{currentPageIndex:1,text:"已抢中",loadingType:"more",orderList:[]},{currentPageIndex:1,text:"未抢中",loadingType:"more",orderList:[]}],e.loadData("tabChange")},3e3))},toDetail:function(t){uni.navigateTo({url:"/pages/product/detail?periodId=".concat(t.periodId)})},toNextQi:function(t){this.$api.postAPI("period/nextNewPeroid",{id:t.periodId}).then(function(t){if(uni.hideLoading(),0!=t.data.code)return uni.showToast({title:t.data.msg,icon:"none",duration:3e3});uni.navigateTo({url:"/pages/product/detail?periodId=".concat(t.data.data.id)})}).catch(function(t){return uni.hideLoading(),uni.showToast({title:"网络错误",icon:"none",duration:3e3})})}}};e.default=u},f35d:function(t,e,a){"use strict";a.r(e);var i=a("5b4c"),n=a("82c3");for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);a("2ac9");var o=a("2877"),s=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,"3bb9c843",null);e["default"]=s.exports}}]);