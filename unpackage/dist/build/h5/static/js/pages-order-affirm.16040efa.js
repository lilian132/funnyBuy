(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-affirm"],{5769:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{isFirstLoad:!0,periodId:"",periodData:{},addressInfo:""}},onLoad:function(a){this.periodId=a.periodId,uni.removeStorageSync("selectAddress"),this.getAddressInfo(),this.getQihaoData()},onShow:function(a){if(!this.isFirstLoad){var e=uni.getStorageSync("selectAddress");e?this.addressInfo=e:this.getAddressInfo()}},filters:{covertMobile:function(a){return a.length>=11?a.replace(/^(\d{3})\d{4}(\d{4})$/,"$1****$2"):a}},methods:{wanshang:function(){uni.navigateTo({url:"/pages/address/addressManage"})},toAddress:function(){uni.navigateTo({url:"/pages/address/addres?type=select"})},getQihaoData:function(){var a=this;this.$api.postAPI("period/queryPeriodDetail",{id:this.periodId}).then(function(e){if(uni.hideLoading(),a.isFirstLoad=!1,0!=e.data.code)return uni.showToast({title:e.data.msg,icon:"none",duration:3e3});a.periodData=e.data.data}).catch(function(a){return uni.hideLoading(),uni.showToast({title:"网络错误",icon:"none",duration:3e3})})},getAddressInfo:function(){var a=this;this.$api.postAPI("address/queryAddressDetail").then(function(e){if(uni.hideLoading(),a.isFirstLoad=!1,0!=e.data.code)return uni.showToast({title:e.data.msg,icon:"none",duration:3e3});a.addressInfo=e.data.data}).catch(function(a){return uni.hideLoading(),uni.showToast({title:"网络错误",icon:"none",duration:3e3})})},btnSureAddress:function(){if(!this.addressInfo.id)return uni.showToast({title:"完善收货信息",icon:"none",duration:3e3});var a={addressId:this.addressInfo.id,periodId:this.periodId};this.$api.postAPI("address/orderBindAddress",a).then(function(a){if(uni.hideLoading(),0!=a.data.code)return uni.showToast({title:a.data.msg,icon:"none",duration:3e3});uni.showToast({title:"操作成功"}),setTimeout(function(){uni.navigateBack()},1500)}).catch(function(a){return uni.hideLoading(),uni.showToast({title:"网络错误",icon:"none",duration:3e3})})}}};e.default=i},7962:function(a,e,t){"use strict";t.r(e);var i=t("942c"),s=t("7c0a");for(var r in s)"default"!==r&&function(a){t.d(e,a,function(){return s[a]})}(r);t("c364");var n=t("2877"),o=Object(n["a"])(s["default"],i["a"],i["b"],!1,null,"ad20ab8e",null);e["default"]=o.exports},"7c0a":function(a,e,t){"use strict";t.r(e);var i=t("5769"),s=t.n(i);for(var r in i)"default"!==r&&function(a){t.d(e,a,function(){return i[a]})}(r);e["default"]=s.a},"942c":function(a,e,t){"use strict";var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-uni-view",{staticClass:"affirm"},[t("v-uni-view",{staticClass:"perfect"},[a.addressInfo.id?t("v-uni-view",{staticClass:"address-wrap"},[t("v-uni-view",{staticClass:"left"},[t("v-uni-image",{staticClass:"adr-adv",attrs:{src:"/static/img/user/Mask.png"}})],1),t("v-uni-view",{staticClass:"right",on:{click:function(e){e=a.$handleEvent(e),a.toAddress(e)}}},[t("v-uni-view",{staticClass:"fl"},[a._v("收件人："),t("v-uni-text",[a._v(a._s(a.addressInfo.name))]),t("v-uni-view",{staticClass:"arrow-r"})],1),t("v-uni-view",[a._v("手机号码："),t("v-uni-text",[a._v(a._s(a._f("covertMobile")(a.addressInfo.moblie)))])],1),t("v-uni-view",[a._v("收货地址："),t("v-uni-text",[a._v(a._s(a.addressInfo.proviceName+a.addressInfo.cityName+a.addressInfo.areaName+a.addressInfo.address))])],1)],1)],1):t("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){e=a.$handleEvent(e),a.wanshang(e)}}},[a._v("完善收货信息")])],1),t("v-uni-view",{staticClass:"purchase"},[t("v-uni-view",{staticClass:"purchase-top"},[t("v-uni-view",{staticClass:"purchase-left"},[t("v-uni-view",{staticClass:"botton"},[t("v-uni-image",{attrs:{src:a.periodData.img}})],1)],1),t("v-uni-view",{staticClass:"purchase-right"},[t("v-uni-view",{staticClass:"tyrant"},[t("v-uni-text",[a._v(a._s(a.periodData.title))])],1),t("v-uni-view",{staticClass:"pice"},[t("v-uni-text",{staticClass:"pic1"},[a._v("市场价")]),t("v-uni-text",{staticClass:"pic2"},[a._v("¥")]),t("v-uni-text",{staticClass:"pic3"},[a._v(a._s(a.periodData.priceSell))])],1)],1)],1),t("v-uni-view",{staticClass:"purchase-bottom"},[t("v-uni-view",{staticClass:"left"},[t("v-uni-text",[a._v("留言:")]),t("v-uni-input",{attrs:{type:"text",value:"",placeholder:"选填，对本次交易的说明（服饰类商品在此备注尺寸）"}})],1),t("v-uni-view",{staticClass:"right"},[t("v-uni-view",{staticClass:"right1"}),t("v-uni-view",{staticClass:"right2"},[t("v-uni-button",{staticStyle:{"background-color":"rgba(255,88,71,1)"},attrs:{type:"primary"},on:{click:function(e){e=a.$handleEvent(e),a.btnSureAddress(e)}}},[a._v("确 认")])],1)],1)],1)],1)],1)},s=[];t.d(e,"a",function(){return i}),t.d(e,"b",function(){return s})},b2bb:function(a,e,t){var i=t("e65b");"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var s=t("4f06").default;s("b9337610",i,!0,{sourceMap:!1,shadowMode:!1})},c364:function(a,e,t){"use strict";var i=t("b2bb"),s=t.n(i);s.a},e65b:function(a,e,t){e=a.exports=t("2350")(!1),e.push([a.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-ad20ab8e]{background:#f5f5f5}.affirm[data-v-ad20ab8e]{\n  /*商品列表  */}.affirm .perfect[data-v-ad20ab8e]{min-height:%?200?%;background:#fff;border-radius:%?20?%;margin:%?30?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.affirm .perfect uni-button[data-v-ad20ab8e]{width:%?360?%;height:%?80?%;border-radius:%?10?%;border:%?2?% solid #ff5847;background:#fff;font-size:%?34?%;font-family:PingFangSC-Regular;font-weight:400;color:#ff5847}.affirm .perfect .address-wrap[data-v-ad20ab8e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;padding:%?30?%;color:#4a4a4a}.affirm .perfect .address-wrap .fl[data-v-ad20ab8e]{position:relative;font-size:%?28?%}.affirm .perfect .address-wrap .fl uni-text[data-v-ad20ab8e]{font-size:%?28?%}.affirm .perfect .address-wrap .fl .arrow-r[data-v-ad20ab8e]{position:absolute;top:%?10?%;right:0;width:%?30?%;height:%?30?%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAYFBMVEX///9KSkpOTk719fVYWFj8/PxTU1P6+vrb29vPz8/KysqZmZlxcXH4+Pjf39/FxcWOjo6Hh4d6enp1dXXj4+PT09PAwMCTk5OCgoJ+fn5tbW1dXV3W1ta5ubmenp5lZWXOWLs0AAAAvElEQVRIx83XzQ6CMBAEYBeqAlZBi4jgz/u/pdEIHvbkbDN07l/StOm0u0om1ZA976iVdx4Y9vLJDsJODDqIQZcy5QLozqazSTfr/3WdhD4Cuoqlt8B5z7pfUF8Bfd7Mem/RJ0DfTLr46dyiA6JdHO0BfUhCD4BunaVT2/GLRyLWy8Y3DLeeaosoNuScK6nLgFdDugDx6sVLH7c9yeonlvm411FsQ7WdspzvY6ks68vslEXHBHxAwUej5PMC5mQK4zaor5oAAAAASUVORK5CYII=);background-size:contain}.affirm .perfect .address-wrap uni-text[data-v-ad20ab8e],.affirm .perfect .address-wrap uni-view[data-v-ad20ab8e]{font-size:%?24?%}.affirm .perfect .address-wrap .adr-adv[data-v-ad20ab8e]{width:%?100?%;height:%?100?%}.affirm .perfect .address-wrap .left[data-v-ad20ab8e]{margin-right:%?32?%}.affirm .perfect .address-wrap .right[data-v-ad20ab8e]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.affirm .purchase[data-v-ad20ab8e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:%?475?%;background:#fff;border-radius:%?20?%;margin:%?0?% %?30?%}.affirm .purchase .purchase-top[data-v-ad20ab8e]{height:%?214?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.affirm .purchase .purchase-top .purchase-left .top[data-v-ad20ab8e]{border-radius:%?20?%;width:%?117?%;height:%?46?%}.affirm .purchase .purchase-top .purchase-left .top uni-image[data-v-ad20ab8e]{border-radius:%?20?%;width:100%;height:100%}.affirm .purchase .purchase-top .purchase-left .botton[data-v-ad20ab8e]{width:%?180?%;height:%?180?%;padding:%?30?% %?7?% %?0?% %?30?%}.affirm .purchase .purchase-top .purchase-left .botton uni-image[data-v-ad20ab8e]{width:100%;height:100%}.affirm .purchase .purchase-top .purchase-right[data-v-ad20ab8e]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-left:%?10?%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.affirm .purchase .purchase-top .purchase-right .over[data-v-ad20ab8e]{padding:%?30?% %?30?% %?0?% %?244?%}.affirm .purchase .purchase-top .purchase-right .over uni-text[data-v-ad20ab8e]{font-size:%?24?%;font-family:PingFangSC-Medium;font-weight:500;color:#4a4a4a}.affirm .purchase .purchase-top .purchase-right .tyrant[data-v-ad20ab8e]{width:%?440?%;overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis}.affirm .purchase .purchase-top .purchase-right .tyrant uni-text[data-v-ad20ab8e]{font-size:%?30?%;font-family:PingFangSC-Medium;font-weight:500;color:#4a4a4a}.affirm .purchase .purchase-top .purchase-right .pice[data-v-ad20ab8e]{position:relative;margin:%?5?% %?0?%}.affirm .purchase .purchase-top .purchase-right .pice .pic1[data-v-ad20ab8e]{font-size:%?26?%;font-family:PingFangSC-Regular;font-weight:400;color:#4a4a4a;margin-right:%?20?%}.affirm .purchase .purchase-top .purchase-right .pice .pic2[data-v-ad20ab8e]{font-size:%?28?%;font-family:PingFangSC-Medium;font-weight:500;color:#ff9f00}.affirm .purchase .purchase-top .purchase-right .pice .pic3[data-v-ad20ab8e]{font-size:%?36?%;font-family:PingFangSC-Medium;font-weight:500;color:#ff9f00}.affirm .purchase .purchase-top .purchase-right .pice[data-v-ad20ab8e]:after{content:" ";position:absolute;width:46%;top:50%;left:0;height:%?2?%;background-color:#d0021b;-webkit-transform:translateY(60%);-ms-transform:translateY(60%);transform:translateY(60%)}.affirm .purchase .purchase-top .purchase-right .bid[data-v-ad20ab8e]{font-size:%?26?%;font-family:PingFangSC-Regular;font-weight:400}.affirm .purchase .purchase-top .purchase-right .bid .bid-up[data-v-ad20ab8e]{color:#4a4a4a}.affirm .purchase .purchase-top .purchase-right .bid .bid-ci[data-v-ad20ab8e]{color:#ff5847}.affirm .purchase .purchase-bottom[data-v-ad20ab8e]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 %?30?%}.affirm .purchase .purchase-bottom .left[data-v-ad20ab8e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:baseline;-webkit-align-items:baseline;-ms-flex-align:baseline;align-items:baseline;height:%?85?%;margin-top:%?25?%;font-size:%?26?%;font-family:PingFangSC-Regular;font-weight:400;color:#4a4a4a}.affirm .purchase .purchase-bottom .left uni-text[data-v-ad20ab8e]{margin-right:%?10?%;font-size:%?28?%}.affirm .purchase .purchase-bottom .right[data-v-ad20ab8e]{margin-top:%?10?%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.affirm .purchase .purchase-bottom .right .right2[data-v-ad20ab8e]{width:%?300?%;height:%?80?%}body.?%PAGE?%[data-v-ad20ab8e]{background:#f5f5f5}',""])}}]);