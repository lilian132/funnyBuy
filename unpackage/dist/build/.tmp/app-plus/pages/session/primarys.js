(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/session/primarys"],{"0e58":function(t,e,n){},"1c8b":function(t,e,n){"use strict";var a=n("0e58"),i=n.n(a);i.a},"27b8":function(t,e,n){"use strict";n.r(e);var a=n("5044"),i=n("a5c5");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("1c8b");var o=n("2877"),s=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},4406:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,a,i,r,o){try{var s=t[r](o),u=s.value}catch(d){return void n(d)}s.done?e(u):Promise.resolve(u).then(a,i)}function o(t){return function(){var e=this,n=arguments;return new Promise(function(a,i){var o=t.apply(e,n);function s(t){r(o,a,i,s,u,"next",t)}function u(t){r(o,a,i,s,u,"throw",t)}s(void 0)})}}var s=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"fd3c"))},u=function(){return n.e("components/uni-countdown/uni-countdown").then(n.bind(null,"c7cc"))},d=[],c={components:{uniLoadMore:s,uniCountdown:u},data:function(){return{currentTime:"",isFirstLoad:!0,tabCurrentIndex:0,pageSize:10,isSceneDataLoad:!1,isSale:"",isSaleMsg:"",navList:[{currentPageIndex:1,text:"初级场",sceneid:9,status:0,topTipsStr:"",startTime:[0,0,0],endTime:[0,0,0],loadingType:"more",orderList:[],tryCount:0},{currentPageIndex:1,text:"中级场",sceneid:10,status:0,topTipsStr:"",startTime:[0,0,0],endTime:[0,0,0],loadingType:"more",orderList:[],tryCount:0},{currentPageIndex:1,text:"高级场",sceneid:11,status:0,topTipsStr:"",startTime:[0,0,0],endTime:[0,0,0],loadingType:"more",orderList:[],tryCount:0}]}},onLoad:function(){this.getSceneData()},onShow:function(){var t=this;if(!this.isFirstLoad){var e={};e=JSON.parse(JSON.stringify(d)),this.navList=e,setTimeout(function(){t.loadData("tabChange")},200)}},methods:{navBack:function(){t.switchTab({url:"/pages/index/index"})},tabClick:function(t){this.tabCurrentIndex=t},changeTab:function(){var t=o(a.default.mark(function t(e){var n,i;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.tabCurrentIndex=e.target.current,n=this.tabCurrentIndex,i=this.navList[n],i.currentPageIndex=1,this.loadData("tabChange");case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),getSceneData:function(){var e=this;if(this.isSceneDataLoad)return this.loadData();this.$api.postAPI("scene/querySceneList",{currentPage:1,data:{},pageSize:10}).then(function(n){if(0==n.data.code){var a=n.data.data.data,i=[];if(a&&a.length>0){var r=!0,o=!1,s=void 0;try{for(var u,c=a[Symbol.iterator]();!(r=(u=c.next()).done);r=!0){var l=u.value;i.push({currentPageIndex:1,text:l.name,sceneid:l.id,status:0,topTipsStr:"",startTime:[0,0,0],endTime:[0,0,0],loadingType:"more",orderList:[],tryCount:0})}}catch(h){o=!0,s=h}finally{try{r||null==c.return||c.return()}finally{if(o)throw s}}var f={};f=JSON.parse(JSON.stringify(i)),d=f,e.navList=i,e.isSceneDataLoad=!0}e.loadData()}else t.showToast({title:n.data.msg,icon:"none",duration:3e3})}).catch(function(e){return t.hideLoading(),t.showToast({title:"网络繁忙，出错了",icon:"none",duration:3e3})})},loadData:function(t){var e=this.tabCurrentIndex,n=this.navList[e];("tabChange"==t||"loading"!==n.loadingType&&"noMore"!==n.loadingType)&&(n.loadingType="loading",this.getData(this.tabCurrentIndex,null,!0))},getData:function(e,n,a){var i=this;e=e||0;var r=this.navList[e],o={currentPage:r.currentPageIndex,data:{executeStatus:1,sceneId:r.sceneid},pageSize:this.pageSize};this.$api.postAPI("period/queryPeriodList",o).then(function(e){if(t.hideLoading(),i.$set(r,"loaded",!0),i.isFirstLoad=!1,i.isSale=!e.data.rest,i.isSaleMsg=e.data.rest?e.data.msg:"",0!=e.data.code)return t.showToast({title:e.data.msg,icon:"none",duration:3e3});var o=e.data.data.data;if(n&&!o.length)return n();n&&(r.orderList=[]),o.length&&(a&&(r.orderList=[]),r.tryCount=0,r.orderList.length>0?(i.handlerData(r,e.data.timestamp,o),r.orderList=r.orderList.concat(o),data.length<i.pageSize?r.loadingType="noMore":(r.currentPageIndex++,r.loadingType="more")):(r.orderList=o,i.handlerData(r,e.data.timestamp,o),r.orderList.length<i.pageSize?r.loadingType="noMore":(r.currentPageIndex++,r.loadingType="more")))}).catch(function(e){return t.hideLoading(),t.showToast({title:"网络错误",icon:"none",duration:3e3})})},handlerData:function(t,e,n){var a=new Date(e),i=new Date(t.orderList[0].guessStartTime),r=new Date(t.orderList[0].guessEndTime),o=i.getTime()-a.getTime(),s=r.getTime()-a.getTime();t.endTime=s>0?this.getMSDate(s):[0,0,0],o>0?(t.status=0,t.topTipsStr="距开始"):o<=0&&s>0?(t.status=1,t.topTipsStr="距结束"):s<=0&&(t.status=2,t.topTipsStr="已结束")},getMSDate:function(t){Math.floor(t/864e5);var e=t%864e5,n=Math.floor(e/36e5),a=e%36e5,i=Math.floor(a/6e4),r=a%6e4,o=Math.round(r/1e3);return[n,i,o]},timeup:function(t,e){var n=this;console.log("-----换购 中心列表 time up请求----"," at pages\\session\\primarys.vue:293"),t.loaded&&(t.status=2,t.topTipsStr="获取期号中...",t.currentPageIndex=1,setTimeout(function(){n.setGetData(t,e)},1e3))},setGetData:function(t,e){var n=this,a=t.tryCount>30?5e3:2e3;t.tryCount>100||(this.getData(e,function(){setTimeout(function(){n.setGetData(t,e)},a)}),t.tryCount++)},getNexQi:function(e,n){if(!this.isSale)return t.showToast({title:"凌晨02:00-07:00停售，请休息会再来",icon:"none",duration:3e3});this.timeup(e,n)},toDetail:function(e,n){1==e&&t.navigateTo({url:"/pages/product/detail?periodId=".concat(n)})}}};e.default=c}).call(this,n("6e42")["default"])},5044:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},a5c5:function(t,e,n){"use strict";n.r(e);var a=n("4406"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=i.a}},[["68f5","common/runtime","common/vendor"]]]);