(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-pay"],{"070b":function(e,t,i){"use strict";i.r(t);var a=i("3aa2"),n=i("ab15");for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);i("f0e8");var o=i("2877"),r=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"e2dfb980",null);t["default"]=r.exports},2354:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{payType:1,payNumber:0,ticketId:0,price:0,payMessage:""}},computed:{},onLoad:function(e){this.payNumber=e.num,this.price=e.price,this.ticketId=e.id},methods:{changePayType:function(e){this.payType=e.mp.detail.value},getUUID:function(){return"xxxx-xxxx-xxxx-xxxx-xxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,i="x"==e?t:3&t|8;return i.toString(16)})},confirm:function(){var e=this,t=this.getUUID();this.$api.postAPI("points/buyPoints",{outOrderNo:t,productTicketId:this.ticketId}).then(function(t){if(uni.hideLoading(),0!=t.data.code)return uni.showToast({title:t.data.msg,icon:"none",duration:3e3});e.toPay(t.data.data.orderNo)}).catch(function(e){return uni.hideLoading(),uni.showToast({title:"网络错误",icon:"none",duration:3e3})})},toPay:function(e){var t=this,i={orderNo:e,payType:this.payType};uni.showLoading({title:"正在提交中..."}),this.$api.postAPI("pay/pay",i).then(function(e){if(setTimeout(function(){uni.hideLoading()},8e3),0!=e.data.code)return uni.showToast({title:e.data.msg,icon:"none",duration:3e3});t.goClientPay(e.data.data)}).catch(function(e){return uni.hideLoading(),uni.showToast({title:"网络错误",icon:"none",duration:3e3})})},goClientPay:function(e){var t=1==this.payType?"wxpay":"alipay",i=1==this.payType?"Sign=WXPay":"Sign=alipay",a={appid:e.appid,partnerid:e.partnerid,prepayid:e.prepayid,package:i,noncestr:e.noncestr,timestamp:e.timestamp,sign:e.sign};uni.requestPayment({provider:t,orderInfo:JSON.stringify(a),success:function(e){uni.hideLoading(),console.log("success:"+JSON.stringify(e)),this.payMessage=e,uni.showToast({title:e,icon:"none",duration:3e3}),setTimeout(function(){uni.navigateBack()},1500)},fail:function(e){uni.hideLoading(),console.log("fail:"+JSON.stringify(e)),uni.showToast({title:"支付失败",icon:"none",duration:3e3})}})}}};t.default=a},"3aa2":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"pay"},[i("v-uni-view",{staticClass:"bean"},[i("v-uni-view",{staticClass:"beaner"},[i("v-uni-image",{attrs:{src:"../../static/img/user/pic-douzi-n.png"}})],1),i("v-uni-view",{staticClass:"gold"},[i("v-uni-text",[e._v(e._s(e.payNumber)+"金豆")])],1),i("v-uni-view",{staticClass:"pice"},[i("v-uni-text",{staticStyle:{"font-size":"28upx"}},[e._v("¥")]),i("v-uni-text",[e._v(e._s(e.price))])],1)],1),i("v-uni-view",{staticClass:"payment"},[i("v-uni-radio-group",{attrs:{name:"radio"},on:{change:function(t){t=e.$handleEvent(t),e.changePayType(t)}}},[i("v-uni-label",{staticClass:"pay-weixin"},[i("v-uni-view",{staticClass:"pay-left"},[i("v-uni-image",{attrs:{src:"../../static/img/user/pic-weixin-n.png"}}),i("v-uni-text",[e._v("微信")])],1),i("v-uni-view",{staticClass:"pay-right"},[i("v-uni-view",{staticClass:"reset"},[i("v-uni-radio",{attrs:{value:"1",color:"#fa436a",checked:1==e.payType}})],1)],1)],1),i("v-uni-label",{staticClass:"pay-zhifubao"},[i("v-uni-view",{staticClass:"pay-weixin"},[i("v-uni-view",{staticClass:"pay-left"},[i("v-uni-image",{attrs:{src:"../../static/img/user/pic-zhifubao.png"}}),i("v-uni-text",[e._v("支付宝")])],1),i("v-uni-view",{staticClass:"pay-right"},[i("v-uni-view",{staticClass:"reset"},[i("v-uni-radio",{attrs:{value:"2",color:"#fa436a",checked:2==e.payType}})],1)],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"agreement"},[i("v-uni-view",{staticClass:"agreement-left"},[i("v-uni-label",[i("v-uni-checkbox",{staticStyle:{transform:"scale(0.7)"},attrs:{color:"#FFCC33"}})],1)],1),i("v-uni-view",{staticClass:"agreement-right"},[i("v-uni-text",[e._v("我已同意《用户协议》")])],1)],1),i("v-uni-view",{staticClass:"flex-blue"},[i("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){t=e.$handleEvent(t),e.confirm(t)}}},[e._v("立即支付")])],1),i("v-uni-view",[e._v(e._s(e.payMessage))])],1)},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},ab15:function(e,t,i){"use strict";i.r(t);var a=i("2354"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);t["default"]=n.a},afeb:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-e2dfb980]{background:#f5f5f5}.pay .bean[data-v-e2dfb980]{height:%?458?%;background:#fff;border-top:%?1?% solid #e0e7eb;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.pay .bean .beaner[data-v-e2dfb980]{width:%?150?%;height:%?151?%;padding:%?78?% %?300?% %?50?% %?300?%}.pay .bean .beaner uni-image[data-v-e2dfb980]{width:100%;height:100%}.pay .bean .gold[data-v-e2dfb980]{padding-bottom:%?20?%}.pay .bean .gold uni-text[data-v-e2dfb980]{font-size:%?30?%;font-family:PingFangSC-Regular;font-weight:400;color:#4a4a4a}.pay .bean .pice uni-text[data-v-e2dfb980]{font-size:%?36?%;font-family:PingFangSC-Medium;font-weight:500;color:#ff9f00}.pay .payment[data-v-e2dfb980]{height:%?221?%;background:#fff;margin-top:%?20?%}.pay .payment .pay-weixin[data-v-e2dfb980]{height:%?110?%;border-bottom:%?1?% solid #e0e7eb;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.pay .payment .pay-weixin .pay-left[data-v-e2dfb980]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.pay .payment .pay-weixin .pay-left uni-image[data-v-e2dfb980]{padding:0 %?28?% %?0?% %?58?%;width:%?50?%;height:%?50?%}.pay .payment .pay-weixin .pay-left uni-text[data-v-e2dfb980]{font-size:%?36?%;font-family:PingFangSC-Regular;font-weight:400;color:#4a4a4a}.pay .payment .pay-weixin .pay-right[data-v-e2dfb980]{padding-right:%?80?%}.pay .payment .pay-zhifubao[data-v-e2dfb980]{height:%?110?%}.pay .agreement[data-v-e2dfb980]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:%?21?% %?20?% 0 %?60?%}.pay .agreement .agreement-left[data-v-e2dfb980]{width:%?30?%;height:%?30?%}.pay .agreement .agreement-left uni-image[data-v-e2dfb980]{vertical-align:middle;width:100%;height:100%}.pay .agreement .agreement-right[data-v-e2dfb980]{padding-left:%?20?%;padding-top:%?8?%}.pay .agreement .agreement-right uni-text[data-v-e2dfb980]{font-size:%?24?%;font-family:PingFangSC-Regular;font-weight:400;color:#000}.pay .flex-blue[data-v-e2dfb980]{margin-top:%?60?%;height:%?80?%;margin:%?100?% %?105?% 0 %?125?%}.pay .flex-blue uni-button[data-v-e2dfb980]{background:#ff5847}body.?%PAGE?%[data-v-e2dfb980]{background:#f5f5f5}',""])},eb2d:function(e,t,i){var a=i("afeb");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("1ff60b79",a,!0,{sourceMap:!1,shadowMode:!1})},f0e8:function(e,t,i){"use strict";var a=i("eb2d"),n=i.n(a);n.a}}]);