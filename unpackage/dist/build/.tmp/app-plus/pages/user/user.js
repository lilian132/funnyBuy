(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"0b0f":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,a,r,i,s){try{var o=t[i](s),u=o.value}catch(c){return void n(c)}o.done?e(u):Promise.resolve(u).then(a,r)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(a,r){var s=t.apply(e,n);function o(t){i(s,a,r,o,u,"next",t)}function u(t){i(s,a,r,o,u,"throw",t)}o(void 0)})}}var o={data:function(){return{isFirstLoad:!0,afterHeaderOpacity:1,headerPosition:"fixed",headerTop:null,statusTop:null,imageURL:["../../static/img/user/Groups.png","../../static/img/header/pic-zhongji-n.png","../../static/img/header/pic-gaoji-n.png"],isLogin:!1,nickName:"",giftPoints:0,points:0,panicBuyingNum:0,conformOrderNum:0,userAdvator:""}},onLoad:function(){var t=this;this.initData(),setTimeout(function(){t.isFirstLoad=!1},0)},onShow:function(){this.isFirstLoad||this.initData()},onNavigationBarButtonTap:function(e){console.log(1," at pages\\user\\user.vue:180"),t.navigateTo({url:"/pages/set/set"})},methods:{initData:function(){var e=this,n=t.getStorageSync("token"),a=t.getStorageSync("userInfo_token");return n&&a?a.hasPwd?(this.getUserInfo(),this.getMyPoints(),void setTimeout(function(){e.getawaitNumber()},1e3)):t.navigateTo({url:"/pages/password/set"}):t.navigateTo({url:"/pages/login/login?url=user"})},getUserInfo:function(){var e=s(a.default.mark(function e(){var n,r;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.postAPI("users/queryUser");case 2:if(n=e.sent,r=n.data,this.isFirstLoad=!1,0!=r.code){e.next=12;break}this.isLogin=!0,this.nickName=r.data.nickName,this.userAdvator="../../static/img/user/Mask.png",t.setStorageSync("userInfo",r.data),e.next=14;break;case 12:return this.userAdvator="../../static/img/user/Mask0.png",e.abrupt("return",t.showToast({title:r.msg,icon:"none",duration:3e3}));case 14:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),getMyPoints:function(){var e=s(a.default.mark(function e(){var n,r;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.postAPI("points/detail");case 2:if(n=e.sent,r=n.data,0!=r.code){e.next=9;break}this.giftPoints=r.data.giftPoints,this.points=r.data.points,e.next=10;break;case 9:return e.abrupt("return",t.showToast({title:r.msg,icon:"none",duration:3e3}));case 10:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),getawaitNumber:function(){var e=s(a.default.mark(function e(){var n,r;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.postAPI("guess/myGuessCount");case 2:if(n=e.sent,r=n.data,0!=r.code){e.next=9;break}this.panicBuyingNum=r.data.panicBuyingNum,this.conformOrderNum=r.data.conformOrderNum,e.next=10;break;case 9:return e.abrupt("return",t.showToast({title:r.msg,icon:"none",duration:3e3}));case 10:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),toUserInfo:function(){t.navigateTo({url:"/pages/user/userInfo"})},navTo:function(e){t.navigateTo({url:e})},toPage:function(e){var n="";switch(e){case 1:n="/pages/set/sign";break;case 2:n="/pages/user/venosa";break;case 3:n="/pages/product/store";break}n&&t.navigateTo({url:n})}}};e.default=o}).call(this,n("6e42")["default"])},"23b3":function(t,e,n){},"55aa":function(t,e,n){"use strict";n.r(e);var a=n("6afd"),r=n("d75e");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("8331");var s=n("2877"),o=Object(s["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},"6afd":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},8331:function(t,e,n){"use strict";var a=n("23b3"),r=n.n(a);r.a},d75e:function(t,e,n){"use strict";n.r(e);var a=n("0b0f"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=r.a}},[["70cf","common/runtime","common/vendor"]]]);