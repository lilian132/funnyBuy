<template>
	<view>
		<!-- logo-->
		<view class="logo-user">
			<view class="logo-users"><image src="../../static/img/common/logo.png"></image></view>
		</view>
		<!-- 输入框 -->
		<view class="uni-flex" >
			<view class="flex-red"><input  value="" v-model="phoneNumber" class="uni-input" maxlength="11" placeholder="请输入手机号" /></view>
			<view v-if="loginSMSType" class="flex-yellow">
				<view class="flex-green"><input class="uni-input" v-model="code" password type="text" placeholder="请输入验证码" /></view>
				<view @click.stop="getCode()" class="forget1" :class='{"gray":getCodeisWaiting}' hover-class="navigator-hover">
					<text>{{ getCodeText }}</text>
				</view>
			</view>
			<view v-else class="flex-yellow">
				<view class="flex-green"><input  v-model="passwd" class="uni-input" password type="text" placeholder="请输入密码" /></view>
				<navigator url="../register/forget?title=forget" hover-class="navigator-hover">
				<view class="forget"><text>忘记密码?</text></view>
				</navigator>
			</view>
		</view>
		<!-- 短信验证 -->
		<view class="message">
			<view @click="changeLoginType" hover-class="navigator-hover"><view class="message-left">{{loginSMSType? '账号密码登录':'短信验证码登录'}}</view></view>
		</view>
		<!-- 登录 -->
		<view class="flex-login"><button type="primary" @tap="doReg">登录</button></view>
		<!-- 登录说明 -->
		<view class="privacy">
			<text class="left">登录即代表您已同意</text>
			<text class="right">《天天抢购隐私政策》</text>
		</view>
	</view>
</template>

<script>
import md5 from '../../common/SDK/md5.min.js';
export default {
	data() {
		return {
			loginSMSType:true,
			phoneNumber: '',
			code: '',
			passwd: '',
			getCodeisWaiting: false,
			getCodeText: '获取验证码',
			isGetCode:false,
			fromPage:'',
			isLoginOK:false //是否登录成功
		};
	},
	onLoad(option) {
		this.fromPage = option.url;
		uni.setNavigationBarTitle({title: this.loginSMSType ? '短信登录':'登录'});
	},
	onBackPress() {
		if((this.fromPage == 'user') && !this.isLoginOK){
			uni.switchTab({
				url:'/pages/index/index'
			});
			return true;
		}
	},
	methods: {
		setTimer() {
			let holdTime = 59;
			this.getCodeText = '重新获取(60)';
			this.Timer = setInterval(() => {
				if (holdTime <= 0) {
					this.getCodeisWaiting = false;
					this.getCodeText = '获取验证码';
					clearInterval(this.Timer);
					return;
				}
				this.getCodeText = '重新获取(' + holdTime + ')';
				holdTime--;
			}, 1000);
		},
		changeLoginType(){
			this.loginSMSType = !this.loginSMSType;
			uni.setNavigationBarTitle({title: this.loginSMSType ? '短信登录':'登录'});
		},
		getCode() {
			uni.hideKeyboard();
			if (this.getCodeisWaiting) {
				return;
			}
			if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber)) {
				uni.showToast({ title: '请填写正确手机号码', icon: 'none' });
				return false;
			}
			this.getCodeisWaiting = true;
			let parms = {
				"clientType": 1,
				"mobile": this.phoneNumber,
				"veriCodeType": 1
			};
			this.$api.postAPI('users/getVeriCode',parms).then(res=>{
				this.isGetCode = true;
				this.getCodeText = '发送中...';
				this.setTimer();
			}).catch(err=>{
				//TODO handle the exception
				this.getCodeisWaiting = false;
			})
		},
		async doReg() {
			uni.hideKeyboard();
			//验证规则
			if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber)) {
				uni.showToast({ title: '请填写正确手机号码', icon: 'none' });
				return false;
			}
			//请求服务器比对密码是否正确。
			if(this.loginSMSType){
				if (this.code == "") {
					return uni.showToast({ title: '请输入验证码', icon: 'none' });
				} else if(!/^\d{4,6}$/g.test(this.code)){
					return uni.showToast({ title: '请输入正确验证码', icon: 'none' });
				}
			} else if (this.passwd == "") {
				return uni.showToast({ title: '请输入密码', icon: 'none' });
			}
			uni.showLoading({
				title: '提交中...'
			});
			//把用户注册信息储存在本地,替换为上传服务器。
			let parms = {
					"clientType": 1,
					"mobile": this.phoneNumber,
					"veriCode": this.code
				};
			let curURL = 'users/loginRegister';
			if(!this.loginSMSType){
				parms = {
					"clientType": 1,
					"loginName": this.phoneNumber,
					"password": this.passwd
				}
				curURL = 'users/loginWithPassword';
			} else {
				if(!this.isGetCode){
					return uni.showToast({ title: '请获取验证码', icon: 'none',duration:3000 });
				}
			}
			let res = await this.$api.postAPI(curURL,parms);
			let res_data = res.data;
			uni.hideLoading();
			if(res_data.code == 0){
				if(!res_data.data.token){//登录或者注册异常，后台没token
					return;
				}
				uni.setStorageSync('token',res_data.data.token);
				uni.setStorageSync('userInfo_token',res_data.data);
				if(!res_data.data.hasPwd){//未设置密码
					return uni.navigateTo({
						url:'/pages/password/set'
					})
				}
				uni.showToast({ title: '登录成功', icon: 'success'});
				this.isLoginOK = true;
				setTimeout(function(){
					uni.navigateBack();
				},1500);
			} else {
				return uni.showToast({ title: res_data.msg, icon: 'none',duration:3000 });
			}
		},
		toLogin() {
			uni.hideKeyboard();
			uni.redirectTo({ url: 'login' });
			uni.navigateBack();
		}
	}
};
</script>
<style lang="scss">
/* logo */
.logo-user {
	height: 310upx;
	// margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	.logo-users {
		width: 150upx;
		height: 150upx;
		border-radius: 50upx;
		image {
			width: 100%;
			height: 100%;
		}
	}
}
/* 输入框 */
.uni-flex {
	padding: 30upx 30upx;
	.flex-red {
		height: 100upx;
		border-radius: 10upx 10upx 10upx 10upx;
		border: 1px solid rgba(228, 228, 228, 1);
		input {
			line-height: 100%;
			width: 100%;
			height: 100%;
			padding-left: 20upx;
		}
	}
	.flex-yellow {
		display: flex;
		// align-items: center;
		// justify-content: space-around;
		.flex-green {
			margin-top: 30upx;
			width: 486upx;
			height: 100upx;
			border-top: 1px solid rgba(228, 228, 228, 1);
			border-left: 1px solid rgba(228, 228, 228, 1);
			border-bottom: 1px solid rgba(228, 228, 228, 1);
			border-radius: 10upx 0upx 0upx 10upx;
			position: relative;
			display: flex;
			input {
				line-height: 100%;
				width: 100%;
				height: 100%;
				padding-left: 20upx;
			}
		}
		.forget {
			position: absolute;
			right: 0upx;
			margin-top: 30upx;
			margin-right: 30upx;
			width: 215upx;
			height: 100upx;
			border-radius: 0upx 10upx 10upx 0upx;
			border-top: 2upx solid rgba(228, 228, 228, 1);
			border-right: 2upx solid rgba(228, 228, 228, 1);
			border-bottom: 2upx solid rgba(228, 228, 228, 1);
			line-height: 100upx;
			text-align: center;
			text {
				font-size: 24upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(74, 74, 74, 1);
			}
		}
		.forget1 {
			position: absolute;
			right: 0upx;
			margin-top: 30upx;
			margin-right: 30upx;
			width: 204upx;
			height: 100upx;
			color: rgba(255, 88, 71, 1);
			border-radius: 0upx 10upx 10upx 0upx;
			border: 2upx solid rgba(255, 88, 71, 1);
			font-size: 24upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			line-height: 100upx;
			text-align: center;
		}
		.forget1.gray{
			color: #aaa;
			border-color: rgba(228, 228, 228, 1);
			background-color: #fff!important;
			opacity: 1;
		}
	}
}
// 短信验证码登录
.message {
	padding: 0upx 30upx;
	margin-bottom: 117upx;
	.message-left {
		font-size: 24upx;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(74, 74, 74, 1);
	}
}
.flex-login {
	padding: 0upx 30upx;
	margin-bottom: 313upx;
	height: 80upx;
	button {
		width: 520upx;
		background: rgba(255, 88, 71, 1);
	}
	.button-hover{
		background: #e04838;
	}
}
/* 登录说明 */
.privacy {
	display: flex;
	align-content: center;
	justify-content: center;
	.left {
		font-size: 24upx;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(155, 155, 155, 1);
	}
	.right {
		font-size: 24upx;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: #ff5847;
	}
}
</style>
