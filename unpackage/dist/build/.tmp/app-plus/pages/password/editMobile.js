(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/password/editMobile"],{"021d":function(e,t,n){},"15b4":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},"190b":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("a34a"));function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n,i,o,r,a){try{var u=e[r](a),s=u.value}catch(c){return void n(c)}u.done?t(s):Promise.resolve(s).then(i,o)}function a(e){return function(){var t=this,n=arguments;return new Promise(function(i,o){var a=e.apply(t,n);function u(e){r(a,i,o,u,s,"next",e)}function s(e){r(a,i,o,u,s,"throw",e)}u(void 0)})}}var u={name:"login",data:function(){return{phoneNumber:"",code:"",getCodeisWaiting:!1,getCodeText:"获取验证码",isGetCode:!1}},methods:{setTimer:function(){var e=this,t=59;this.getCodeText="重新获取(60)",this.Timer=setInterval(function(){if(t<=0)return e.getCodeisWaiting=!1,e.getCodeText="获取验证码",void clearInterval(e.Timer);e.getCodeText="重新获取("+t+")",t--},1e3)},getCode:function(){var t=this;if(e.hideKeyboard(),!this.getCodeisWaiting){if(!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))return e.showToast({title:"请填写正确手机号码",icon:"none"}),!1;this.getCodeisWaiting=!0;var n={clientType:1,mobile:this.phoneNumber,veriCodeType:3};this.$api.postAPI("users/getVeriCode",n).then(function(e){t.isGetCode=!0,t.getCodeText="发送中...",t.setTimer()}).catch(function(e){t.getCodeisWaiting=!1})}},btnEdit:function(){var t=a(i.default.mark(function t(){var n,o,r,a,u;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e.hideKeyboard(),/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber)){t.next=4;break}return e.showToast({title:"请填写正确手机号码",icon:"none"}),t.abrupt("return",!1);case 4:if(""!=this.code){t.next=8;break}return t.abrupt("return",e.showToast({title:"请输入验证码",icon:"none"}));case 8:if(/^\d{4,6}$/g.test(this.code)){t.next=10;break}return t.abrupt("return",e.showToast({title:"请输入正确验证码",icon:"none"}));case 10:if(e.showLoading({title:"提交中..."}),n={newMobile:this.phoneNumber,mobile:"",veriCode:this.code},o="users/modifyMobile",this.isGetCode){t.next=15;break}return t.abrupt("return",e.showToast({title:"请获取验证码",icon:"none",duration:3e3}));case 15:return t.next=17,this.$api.postAPI(o,n);case 17:if(r=t.sent,a=r.data,e.hideLoading(),0!=a.code){t.next=28;break}u=e.getStorageInfoSync("userInfo"),u.mobile=this.phoneNumber,e.setStorageSync("userInfo",u),e.showToast({title:"修改成功",icon:"success"}),setTimeout(function(){e.navigateBack()},1500),t.next=29;break;case 28:return t.abrupt("return",e.showToast({title:a.msg,icon:"none",duration:3e3}));case 29:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}()}};t.default=u}).call(this,n("6e42")["default"])},"31c3":function(e,t,n){"use strict";n.r(t);var i=n("15b4"),o=n("bc8b");for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n("94bb");var a=n("2877"),u=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,null,null);t["default"]=u.exports},"94bb":function(e,t,n){"use strict";var i=n("021d"),o=n.n(i);o.a},bc8b:function(e,t,n){"use strict";n.r(t);var i=n("190b"),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t["default"]=o.a}},[["fad1","common/runtime","common/vendor"]]]);