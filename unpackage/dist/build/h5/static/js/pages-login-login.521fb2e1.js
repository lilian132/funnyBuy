(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"0eec":function(e,t,i){"use strict";i.r(t);var n=i("1e34"),r=i("43cd");for(var s in r)"default"!==s&&function(e){i.d(t,e,function(){return r[e]})}(s);i("5e29");var o=i("2877"),a=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,"c0d39048",null);t["default"]=a.exports},"1e34":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"logo-user"},[i("v-uni-view",{staticClass:"logo-users"},[i("v-uni-image",{attrs:{src:"../../static/img/common/logo.png"}})],1)],1),i("v-uni-view",{staticClass:"uni-flex"},[i("v-uni-view",{staticClass:"flex-red"},[i("v-uni-input",{staticClass:"uni-input",attrs:{value:"",maxlength:"11",placeholder:"请输入手机号"},model:{value:e.phoneNumber,callback:function(t){e.phoneNumber=t},expression:"phoneNumber"}})],1),e.loginSMSType?i("v-uni-view",{staticClass:"flex-yellow"},[i("v-uni-view",{staticClass:"flex-green"},[i("v-uni-input",{staticClass:"uni-input",attrs:{password:"",type:"text",placeholder:"请输入验证码"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1),i("v-uni-view",{staticClass:"forget1",class:{gray:e.getCodeisWaiting},attrs:{"hover-class":"navigator-hover"},on:{click:function(t){t.stopPropagation(),t=e.$handleEvent(t),e.getCode()}}},[i("v-uni-text",[e._v(e._s(e.getCodeText))])],1)],1):i("v-uni-view",{staticClass:"flex-yellow"},[i("v-uni-view",{staticClass:"flex-green"},[i("v-uni-input",{staticClass:"uni-input",attrs:{password:"",type:"text",placeholder:"请输入密码"},model:{value:e.passwd,callback:function(t){e.passwd=t},expression:"passwd"}})],1),i("v-uni-navigator",{attrs:{url:"../register/forget?title=forget","hover-class":"navigator-hover"}},[i("v-uni-view",{staticClass:"forget"},[i("v-uni-text",[e._v("忘记密码?")])],1)],1)],1)],1),i("v-uni-view",{staticClass:"message"},[i("v-uni-view",{attrs:{"hover-class":"navigator-hover"},on:{click:function(t){t=e.$handleEvent(t),e.changeLoginType(t)}}},[i("v-uni-view",{staticClass:"message-left"},[e._v(e._s(e.loginSMSType?"账号密码登录":"短信验证码登录"))])],1)],1),i("v-uni-view",{staticClass:"flex-login"},[i("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){t=e.$handleEvent(t),e.doReg(t)}}},[e._v("登录")])],1),i("v-uni-view",{staticClass:"privacy"},[i("v-uni-text",{staticClass:"left"},[e._v("登录即代表您已同意")]),i("v-uni-text",{staticClass:"right"},[e._v("《天天抢购隐私政策》")])],1)],1)},r=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return r})},"3c35":function(e,t){(function(t){e.exports=t}).call(this,{})},4362:function(e,t,i){t.nextTick=function(e){setTimeout(e,0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,n="/";t.cwd=function(){return n},t.chdir=function(t){e||(e=i("df7c")),n=e.resolve(t,n)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"43cd":function(e,t,i){"use strict";i.r(t);var n=i("9efd"),r=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);t["default"]=r.a},"46b3":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* logo */.logo-user[data-v-c0d39048]{height:%?310?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.logo-user .logo-users[data-v-c0d39048]{width:%?150?%;height:%?150?%;border-radius:%?50?%}.logo-user .logo-users uni-image[data-v-c0d39048]{width:100%;height:100%}\n/* 输入框 */.uni-flex[data-v-c0d39048]{padding:%?30?% %?30?%}.uni-flex .flex-red[data-v-c0d39048]{height:%?100?%;border-radius:%?10?% %?10?% %?10?% %?10?%;border:1px solid #e4e4e4}.uni-flex .flex-red uni-input[data-v-c0d39048]{line-height:100%;width:100%;height:100%;padding-left:%?20?%}.uni-flex .flex-yellow[data-v-c0d39048]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.uni-flex .flex-yellow .flex-green[data-v-c0d39048]{margin-top:%?30?%;width:%?486?%;height:%?100?%;border-top:1px solid #e4e4e4;border-left:1px solid #e4e4e4;border-bottom:1px solid #e4e4e4;border-radius:%?10?% %?0?% %?0?% %?10?%;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.uni-flex .flex-yellow .flex-green uni-input[data-v-c0d39048]{line-height:100%;width:100%;height:100%;padding-left:%?20?%}.uni-flex .flex-yellow .forget[data-v-c0d39048]{position:absolute;right:%?0?%;margin-top:%?30?%;margin-right:%?30?%;width:%?215?%;height:%?100?%;border-radius:%?0?% %?10?% %?10?% %?0?%;border-top:%?2?% solid #e4e4e4;border-right:%?2?% solid #e4e4e4;border-bottom:%?2?% solid #e4e4e4;line-height:%?100?%;text-align:center}.uni-flex .flex-yellow .forget uni-text[data-v-c0d39048]{font-size:%?24?%;font-family:PingFangSC-Regular;font-weight:400;color:#4a4a4a}.uni-flex .flex-yellow .forget1[data-v-c0d39048]{position:absolute;right:%?0?%;margin-top:%?30?%;margin-right:%?30?%;width:%?204?%;height:%?100?%;color:#ff5847;border-radius:%?0?% %?10?% %?10?% %?0?%;border:%?2?% solid #ff5847;font-size:%?24?%;font-family:PingFangSC-Regular;font-weight:400;line-height:%?100?%;text-align:center}.uni-flex .flex-yellow .forget1.gray[data-v-c0d39048]{color:#aaa;border-color:#e4e4e4;background-color:#fff!important;opacity:1}.message[data-v-c0d39048]{padding:%?0?% %?30?%;margin-bottom:%?117?%}.message .message-left[data-v-c0d39048]{font-size:%?24?%;font-family:PingFangSC-Regular;font-weight:400;color:#4a4a4a}.flex-login[data-v-c0d39048]{padding:%?0?% %?30?%;margin-bottom:%?313?%;height:%?80?%}.flex-login uni-button[data-v-c0d39048]{width:%?520?%;background:#ff5847}.flex-login .button-hover[data-v-c0d39048]{background:#e04838}\n/* 登录说明 */.privacy[data-v-c0d39048]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.privacy .left[data-v-c0d39048]{font-size:%?24?%;font-family:PingFangSC-Regular;font-weight:400;color:#9b9b9b}.privacy .right[data-v-c0d39048]{font-size:%?24?%;font-family:PingFangSC-Regular;font-weight:400;color:#ff5847}',""])},"5e29":function(e,t,i){"use strict";var n=i("9a74"),r=i.n(n);r.a},9323:function(module,exports,__webpack_require__){"use strict";(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */!function(){function t(e){if(e)d[0]=d[16]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0,this.blocks=d,this.buffer8=l;else if(a){var t=new ArrayBuffer(68);this.buffer8=new Uint8Array(t),this.blocks=new Uint32Array(t)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}var r="input is invalid type",e="object"==typeof window,i=e?window:{};i.JS_MD5_NO_WINDOW&&(e=!1);var s=!e&&"object"==typeof self,h=!i.JS_MD5_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;h?i=global:s&&(i=self);var f=!i.JS_MD5_NO_COMMON_JS&&"object"==typeof module&&module.exports,o=__webpack_require__("3c35"),a=!i.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,n="0123456789abcdef".split(""),u=[128,32768,8388608,-2147483648],y=[0,8,16,24],c=["hex","array","digest","buffer","arrayBuffer","base64"],p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),d=[],l;if(a){var A=new ArrayBuffer(68);l=new Uint8Array(A),d=new Uint32Array(A)}!i.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),!a||!i.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(e){return"object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});var b=function(e){return function(i){return new t(!0).update(i)[e]()}},v=function(){var e=b("hex");h&&(e=w(e)),e.create=function(){return new t},e.update=function(t){return e.create().update(t)};for(var i=0;i<c.length;++i){var n=c[i];e[n]=b(n)}return e},w=function w(t){var e=eval("require('crypto')"),i=eval("require('buffer').Buffer"),s=function(n){if("string"==typeof n)return e.createHash("md5").update(n,"utf8").digest("hex");if(null===n||void 0===n)throw r;return n.constructor===ArrayBuffer&&(n=new Uint8Array(n)),Array.isArray(n)||ArrayBuffer.isView(n)||n.constructor===i?e.createHash("md5").update(new i(n)).digest("hex"):t(n)};return s};t.prototype.update=function(e){if(!this.finalized){var t,i=typeof e;if("string"!==i){if("object"!==i)throw r;if(null===e)throw r;if(a&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||a&&ArrayBuffer.isView(e)))throw r;t=!0}for(var n,s,o=0,u=e.length,l=this.blocks,c=this.buffer8;o<u;){if(this.hashed&&(this.hashed=!1,l[0]=l[16],l[16]=l[1]=l[2]=l[3]=l[4]=l[5]=l[6]=l[7]=l[8]=l[9]=l[10]=l[11]=l[12]=l[13]=l[14]=l[15]=0),t)if(a)for(s=this.start;o<u&&s<64;++o)c[s++]=e[o];else for(s=this.start;o<u&&s<64;++o)l[s>>2]|=e[o]<<y[3&s++];else if(a)for(s=this.start;o<u&&s<64;++o)(n=e.charCodeAt(o))<128?c[s++]=n:n<2048?(c[s++]=192|n>>6,c[s++]=128|63&n):n<55296||n>=57344?(c[s++]=224|n>>12,c[s++]=128|n>>6&63,c[s++]=128|63&n):(n=65536+((1023&n)<<10|1023&e.charCodeAt(++o)),c[s++]=240|n>>18,c[s++]=128|n>>12&63,c[s++]=128|n>>6&63,c[s++]=128|63&n);else for(s=this.start;o<u&&s<64;++o)(n=e.charCodeAt(o))<128?l[s>>2]|=n<<y[3&s++]:n<2048?(l[s>>2]|=(192|n>>6)<<y[3&s++],l[s>>2]|=(128|63&n)<<y[3&s++]):n<55296||n>=57344?(l[s>>2]|=(224|n>>12)<<y[3&s++],l[s>>2]|=(128|n>>6&63)<<y[3&s++],l[s>>2]|=(128|63&n)<<y[3&s++]):(n=65536+((1023&n)<<10|1023&e.charCodeAt(++o)),l[s>>2]|=(240|n>>18)<<y[3&s++],l[s>>2]|=(128|n>>12&63)<<y[3&s++],l[s>>2]|=(128|n>>6&63)<<y[3&s++],l[s>>2]|=(128|63&n)<<y[3&s++]);this.lastByteIndex=s,this.bytes+=s-this.start,s>=64?(this.start=s-64,this.hash(),this.hashed=!0):this.start=s}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[t>>2]|=u[3&t],t>=56&&(this.hashed||this.hash(),e[0]=e[16],e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.bytes<<3,e[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},t.prototype.hash=function(){var e,t,i,n,r,s,o=this.blocks;this.first?t=((t=((e=((e=o[0]-680876937)<<7|e>>>25)-271733879<<0)^(i=((i=(-271733879^(n=((n=(-1732584194^2004318071&e)+o[1]-117830708)<<12|n>>>20)+e<<0)&(-271733879^e))+o[2]-1126478375)<<17|i>>>15)+n<<0)&(n^e))+o[3]-1316259209)<<22|t>>>10)+i<<0:(e=this.h0,t=this.h1,i=this.h2,t=((t+=((e=((e+=((n=this.h3)^t&(i^n))+o[0]-680876936)<<7|e>>>25)+t<<0)^(i=((i+=(t^(n=((n+=(i^e&(t^i))+o[1]-389564586)<<12|n>>>20)+e<<0)&(e^t))+o[2]+606105819)<<17|i>>>15)+n<<0)&(n^e))+o[3]-1044525330)<<22|t>>>10)+i<<0),t=((t+=((e=((e+=(n^t&(i^n))+o[4]-176418897)<<7|e>>>25)+t<<0)^(i=((i+=(t^(n=((n+=(i^e&(t^i))+o[5]+1200080426)<<12|n>>>20)+e<<0)&(e^t))+o[6]-1473231341)<<17|i>>>15)+n<<0)&(n^e))+o[7]-45705983)<<22|t>>>10)+i<<0,t=((t+=((e=((e+=(n^t&(i^n))+o[8]+1770035416)<<7|e>>>25)+t<<0)^(i=((i+=(t^(n=((n+=(i^e&(t^i))+o[9]-1958414417)<<12|n>>>20)+e<<0)&(e^t))+o[10]-42063)<<17|i>>>15)+n<<0)&(n^e))+o[11]-1990404162)<<22|t>>>10)+i<<0,t=((t+=((e=((e+=(n^t&(i^n))+o[12]+1804603682)<<7|e>>>25)+t<<0)^(i=((i+=(t^(n=((n+=(i^e&(t^i))+o[13]-40341101)<<12|n>>>20)+e<<0)&(e^t))+o[14]-1502002290)<<17|i>>>15)+n<<0)&(n^e))+o[15]+1236535329)<<22|t>>>10)+i<<0,t=((t+=((n=((n+=(t^i&((e=((e+=(i^n&(t^i))+o[1]-165796510)<<5|e>>>27)+t<<0)^t))+o[6]-1069501632)<<9|n>>>23)+e<<0)^e&((i=((i+=(e^t&(n^e))+o[11]+643717713)<<14|i>>>18)+n<<0)^n))+o[0]-373897302)<<20|t>>>12)+i<<0,t=((t+=((n=((n+=(t^i&((e=((e+=(i^n&(t^i))+o[5]-701558691)<<5|e>>>27)+t<<0)^t))+o[10]+38016083)<<9|n>>>23)+e<<0)^e&((i=((i+=(e^t&(n^e))+o[15]-660478335)<<14|i>>>18)+n<<0)^n))+o[4]-405537848)<<20|t>>>12)+i<<0,t=((t+=((n=((n+=(t^i&((e=((e+=(i^n&(t^i))+o[9]+568446438)<<5|e>>>27)+t<<0)^t))+o[14]-1019803690)<<9|n>>>23)+e<<0)^e&((i=((i+=(e^t&(n^e))+o[3]-187363961)<<14|i>>>18)+n<<0)^n))+o[8]+1163531501)<<20|t>>>12)+i<<0,t=((t+=((n=((n+=(t^i&((e=((e+=(i^n&(t^i))+o[13]-1444681467)<<5|e>>>27)+t<<0)^t))+o[2]-51403784)<<9|n>>>23)+e<<0)^e&((i=((i+=(e^t&(n^e))+o[7]+1735328473)<<14|i>>>18)+n<<0)^n))+o[12]-1926607734)<<20|t>>>12)+i<<0,t=((t+=((s=(n=((n+=((r=t^i)^(e=((e+=(r^n)+o[5]-378558)<<4|e>>>28)+t<<0))+o[8]-2022574463)<<11|n>>>21)+e<<0)^e)^(i=((i+=(s^t)+o[11]+1839030562)<<16|i>>>16)+n<<0))+o[14]-35309556)<<23|t>>>9)+i<<0,t=((t+=((s=(n=((n+=((r=t^i)^(e=((e+=(r^n)+o[1]-1530992060)<<4|e>>>28)+t<<0))+o[4]+1272893353)<<11|n>>>21)+e<<0)^e)^(i=((i+=(s^t)+o[7]-155497632)<<16|i>>>16)+n<<0))+o[10]-1094730640)<<23|t>>>9)+i<<0,t=((t+=((s=(n=((n+=((r=t^i)^(e=((e+=(r^n)+o[13]+681279174)<<4|e>>>28)+t<<0))+o[0]-358537222)<<11|n>>>21)+e<<0)^e)^(i=((i+=(s^t)+o[3]-722521979)<<16|i>>>16)+n<<0))+o[6]+76029189)<<23|t>>>9)+i<<0,t=((t+=((s=(n=((n+=((r=t^i)^(e=((e+=(r^n)+o[9]-640364487)<<4|e>>>28)+t<<0))+o[12]-421815835)<<11|n>>>21)+e<<0)^e)^(i=((i+=(s^t)+o[15]+530742520)<<16|i>>>16)+n<<0))+o[2]-995338651)<<23|t>>>9)+i<<0,t=((t+=((n=((n+=(t^((e=((e+=(i^(t|~n))+o[0]-198630844)<<6|e>>>26)+t<<0)|~i))+o[7]+1126891415)<<10|n>>>22)+e<<0)^((i=((i+=(e^(n|~t))+o[14]-1416354905)<<15|i>>>17)+n<<0)|~e))+o[5]-57434055)<<21|t>>>11)+i<<0,t=((t+=((n=((n+=(t^((e=((e+=(i^(t|~n))+o[12]+1700485571)<<6|e>>>26)+t<<0)|~i))+o[3]-1894986606)<<10|n>>>22)+e<<0)^((i=((i+=(e^(n|~t))+o[10]-1051523)<<15|i>>>17)+n<<0)|~e))+o[1]-2054922799)<<21|t>>>11)+i<<0,t=((t+=((n=((n+=(t^((e=((e+=(i^(t|~n))+o[8]+1873313359)<<6|e>>>26)+t<<0)|~i))+o[15]-30611744)<<10|n>>>22)+e<<0)^((i=((i+=(e^(n|~t))+o[6]-1560198380)<<15|i>>>17)+n<<0)|~e))+o[13]+1309151649)<<21|t>>>11)+i<<0,t=((t+=((n=((n+=(t^((e=((e+=(i^(t|~n))+o[4]-145523070)<<6|e>>>26)+t<<0)|~i))+o[11]-1120210379)<<10|n>>>22)+e<<0)^((i=((i+=(e^(n|~t))+o[2]+718787259)<<15|i>>>17)+n<<0)|~e))+o[9]-343485551)<<21|t>>>11)+i<<0,this.first?(this.h0=e+1732584193<<0,this.h1=t-271733879<<0,this.h2=i-1732584194<<0,this.h3=n+271733878<<0,this.first=!1):(this.h0=this.h0+e<<0,this.h1=this.h1+t<<0,this.h2=this.h2+i<<0,this.h3=this.h3+n<<0)},t.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,i=this.h2,r=this.h3;return n[e>>4&15]+n[15&e]+n[e>>12&15]+n[e>>8&15]+n[e>>20&15]+n[e>>16&15]+n[e>>28&15]+n[e>>24&15]+n[t>>4&15]+n[15&t]+n[t>>12&15]+n[t>>8&15]+n[t>>20&15]+n[t>>16&15]+n[t>>28&15]+n[t>>24&15]+n[i>>4&15]+n[15&i]+n[i>>12&15]+n[i>>8&15]+n[i>>20&15]+n[i>>16&15]+n[i>>28&15]+n[i>>24&15]+n[r>>4&15]+n[15&r]+n[r>>12&15]+n[r>>8&15]+n[r>>20&15]+n[r>>16&15]+n[r>>28&15]+n[r>>24&15]},t.prototype.toString=t.prototype.hex,t.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,i=this.h2,n=this.h3;return[255&e,e>>8&255,e>>16&255,e>>24&255,255&t,t>>8&255,t>>16&255,t>>24&255,255&i,i>>8&255,i>>16&255,i>>24&255,255&n,n>>8&255,n>>16&255,n>>24&255]},t.prototype.array=t.prototype.digest,t.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(16),t=new Uint32Array(e);return t[0]=this.h0,t[1]=this.h1,t[2]=this.h2,t[3]=this.h3,e},t.prototype.buffer=t.prototype.arrayBuffer,t.prototype.base64=function(){for(var e,t,i,n="",r=this.array(),s=0;s<15;)e=r[s++],t=r[s++],i=r[s++],n+=p[e>>>2]+p[63&(e<<4|t>>>4)]+p[63&(t<<2|i>>>6)]+p[63&i];return e=r[s],n+(p[e>>>2]+p[e<<4&63]+"==")};var _=v();f?module.exports=_:(i.md5=_,o&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return _}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))}()}).call(this,__webpack_require__("4362"),__webpack_require__("c8ba"))},"9a74":function(e,t,i){var n=i("46b3");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("4f06").default;r("2fe4efe6",n,!0,{sourceMap:!1,shadowMode:!1})},"9efd":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(i("a34a"));r(i("9323"));function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t,i,n,r,s,o){try{var a=e[s](o),u=a.value}catch(l){return void i(l)}a.done?t(u):Promise.resolve(u).then(n,r)}function o(e){return function(){var t=this,i=arguments;return new Promise(function(n,r){var o=e.apply(t,i);function a(e){s(o,n,r,a,u,"next",e)}function u(e){s(o,n,r,a,u,"throw",e)}a(void 0)})}}var a={data:function(){return{loginSMSType:!0,phoneNumber:"",code:"",passwd:"",getCodeisWaiting:!1,getCodeText:"获取验证码",isGetCode:!1,fromPage:"",isLoginOK:!1}},onLoad:function(e){this.fromPage=e.url,uni.setNavigationBarTitle({title:this.loginSMSType?"短信登录":"登录"})},onBackPress:function(){if("user"==this.fromPage&&!this.isLoginOK)return uni.switchTab({url:"/pages/index/index"}),!0},methods:{setTimer:function(){var e=this,t=59;this.getCodeText="重新获取(60)",this.Timer=setInterval(function(){if(t<=0)return e.getCodeisWaiting=!1,e.getCodeText="获取验证码",void clearInterval(e.Timer);e.getCodeText="重新获取("+t+")",t--},1e3)},changeLoginType:function(){this.loginSMSType=!this.loginSMSType,uni.setNavigationBarTitle({title:this.loginSMSType?"短信登录":"登录"})},getCode:function(){var e=this;if(uni.hideKeyboard(),!this.getCodeisWaiting){if(!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))return uni.showToast({title:"请填写正确手机号码",icon:"none"}),!1;this.getCodeisWaiting=!0;var t={clientType:1,mobile:this.phoneNumber,veriCodeType:1};this.$api.postAPI("users/getVeriCode",t).then(function(t){e.isGetCode=!0,e.getCodeText="发送中...",e.setTimer()}).catch(function(t){e.getCodeisWaiting=!1})}},doReg:function(){var e=o(n.default.mark(function e(){var t,i,r,s;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(uni.hideKeyboard(),/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber)){e.next=4;break}return uni.showToast({title:"请填写正确手机号码",icon:"none"}),e.abrupt("return",!1);case 4:if(!this.loginSMSType){e.next=13;break}if(""!=this.code){e.next=9;break}return e.abrupt("return",uni.showToast({title:"请输入验证码",icon:"none"}));case 9:if(/^\d{4,6}$/g.test(this.code)){e.next=11;break}return e.abrupt("return",uni.showToast({title:"请输入正确验证码",icon:"none"}));case 11:e.next=15;break;case 13:if(""!=this.passwd){e.next=15;break}return e.abrupt("return",uni.showToast({title:"请输入密码",icon:"none"}));case 15:if(uni.showLoading({title:"提交中..."}),t={clientType:1,mobile:this.phoneNumber,veriCode:this.code},i="users/loginRegister",this.loginSMSType){e.next=23;break}t={clientType:1,loginName:this.phoneNumber,password:this.passwd},i="users/loginWithPassword",e.next=25;break;case 23:if(this.isGetCode){e.next=25;break}return e.abrupt("return",uni.showToast({title:"请获取验证码",icon:"none",duration:3e3}));case 25:return e.next=27,this.$api.postAPI(i,t);case 27:if(r=e.sent,s=r.data,uni.hideLoading(),0!=s.code){e.next=42;break}if(s.data.token){e.next=33;break}return e.abrupt("return");case 33:if(uni.setStorageSync("token",s.data.token),uni.setStorageSync("userInfo_token",s.data),s.data.hasPwd){e.next=37;break}return e.abrupt("return",uni.navigateTo({url:"/pages/password/set"}));case 37:uni.showToast({title:"登录成功",icon:"success"}),this.isLoginOK=!0,setTimeout(function(){uni.navigateBack()},1500),e.next=43;break;case 42:return e.abrupt("return",uni.showToast({title:s.msg,icon:"none",duration:3e3}));case 43:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),toLogin:function(){uni.hideKeyboard(),uni.redirectTo({url:"login"}),uni.navigateBack()}}};t.default=a},a34a:function(e,t,i){e.exports=i("bbdd")},bbdd:function(e,t,i){var n=function(){return this||"object"===typeof self&&self}()||Function("return this")(),r=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,s=r&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,e.exports=i("96cf"),r)n.regeneratorRuntime=s;else try{delete n.regeneratorRuntime}catch(o){n.regeneratorRuntime=void 0}},df7c:function(e,t,i){(function(e){function i(e,t){for(var i=0,n=e.length-1;n>=0;n--){var r=e[n];"."===r?e.splice(n,1):".."===r?(e.splice(n,1),i++):i&&(e.splice(n,1),i--)}if(t)for(;i--;i)e.unshift("..");return e}var n=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,r=function(e){return n.exec(e).slice(1)};function s(e,t){if(e.filter)return e.filter(t);for(var i=[],n=0;n<e.length;n++)t(e[n],n,e)&&i.push(e[n]);return i}t.resolve=function(){for(var t="",n=!1,r=arguments.length-1;r>=-1&&!n;r--){var o=r>=0?arguments[r]:e.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,n="/"===o.charAt(0))}return t=i(s(t.split("/"),function(e){return!!e}),!n).join("/"),(n?"/":"")+t||"."},t.normalize=function(e){var n=t.isAbsolute(e),r="/"===o(e,-1);return e=i(s(e.split("/"),function(e){return!!e}),!n).join("/"),e||n||(e="."),e&&r&&(e+="/"),(n?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(s(e,function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,i){function n(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var i=e.length-1;i>=0;i--)if(""!==e[i])break;return t>i?[]:e.slice(t,i-t+1)}e=t.resolve(e).substr(1),i=t.resolve(i).substr(1);for(var r=n(e.split("/")),s=n(i.split("/")),o=Math.min(r.length,s.length),a=o,u=0;u<o;u++)if(r[u]!==s[u]){a=u;break}var l=[];for(u=a;u<r.length;u++)l.push("..");return l=l.concat(s.slice(a)),l.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var t=r(e),i=t[0],n=t[1];return i||n?(n&&(n=n.substr(0,n.length-1)),i+n):"."},t.basename=function(e,t){var i=r(e)[2];return t&&i.substr(-1*t.length)===t&&(i=i.substr(0,i.length-t.length)),i},t.extname=function(e){return r(e)[3]};var o="b"==="ab".substr(-1)?function(e,t,i){return e.substr(t,i)}:function(e,t,i){return t<0&&(t=e.length+t),e.substr(t,i)}}).call(this,i("4362"))}}]);