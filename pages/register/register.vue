<template>
	<view>
		<!-- logo -->
		<view class="logo-user">
			<view class="logo-users"><image src="../../static/logo.png"></image></view>
		</view>
		<!-- 输入框 -->
		<view class="uni-flex">
			<view class="flex-red"><input v-model="phoneNumber" class="uni-input" maxlength="11" placeholder="请输入手机号" /></view>
			<view class="flex-yellow">
				<view class="flex-green"><input class="uni-input" v-model="code" password type="text" placeholder="请输入验证码" /></view>
				<view class="forget">
					<text @click.stop="getCode()">{{ getCodeText }}</text>
				</view>
			</view>
		</view>
		<!-- 短信验证 -->
		<view class="message">
			<navigator url="../login/login?title=login"><view class="message-left">账号密码登录</view></navigator>
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
			phoneNumber: '',
			code: '',
			passwd: '',
			getCodeText: '获取验证码',
			getCodeBtnColor: '#ffffff',
			getCodeisWaiting: false
		};
	},
	onLoad() {},
	methods: {
		Timer() {},
		getCode() {
			// uni.request({
			// 	url: 'http://112.74.21.125:8085/users/getVeriCode',
			// 	method: 'POST',
			// 	data: {
			// 		clientType: 1,
			// 		mobile: this.phoneNumber,
			// 		veriCodeType: 1
			// 	},
			// 	header: {
			// 		'content-type': 'application/json'
			// 	},
			// 	success: res => {
			// 		// this.getCodeText = res.data.code
			// 		console.log(res);
			// 	},
			// 	fail: res => {
			// 		console.log(res);
			// 	}
			// 	// complete: () => {}
			// });
			this.$api.postAPI('users/getVeriCode',{noncestr: Date.now()}).then(res=>{
				console.log('11');
			}).catch(err=>{
				//TODO handle the exception
				console.log('22');
			})
			
			uni.showLoading({
				title: '提交中...'
			});
			if (this.getCodeisWaiting) {
				return;
			}
			if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber)) {
				uni.showToast({ title: '请填写正确手机号码', icon: 'none' });
				return false;
			}
			this.getCodeText = '发送中...';
			this.getCodeisWaiting = true;
			this.getCodeBtnColor = 'rgba(255,255,255,0.5)';
			//用定时器模拟请求效果
			setTimeout(() => {
				uni.showToast({ title: '验证码已发送', icon: 'none' });
				//默认6666
				this.code = 6666;
				this.setTimer();
			}, 1000);
		},
		setTimer() {
			let holdTime = 60;
			this.getCodeText = '重新获取(60)';
			this.Timer = setInterval(() => {
				if (holdTime <= 0) {
					this.getCodeisWaiting = false;
					this.getCodeBtnColor = '#ffffff';
					this.getCodeText = '获取验证码';
					clearInterval(this.Timer);
					return;
				}
				this.getCodeText = '重新获取(' + holdTime + ')';
				holdTime--;
			}, 1000);
		},
		doReg() {
			uni.hideKeyboard();
			//验证规则
			if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber)) {
				uni.showToast({ title: '请填写正确手机号码', icon: 'none' });
				return false;
			}
			//获取用户验证码是否一致
			uni.request({
				url: 'http://112.74.21.125:8085/users/loginRegister',
				method: 'POST',
				data: {
					hasPwd: false,
					clientType: 1,
					mobile: this.phoneNumber,
					veriCode: '6666'
				},
				header: {
					'content-type': 'application/json'
				},
				success: res => {
					console.log(res);
				},
				fail: res => {
					console.log(res);
				}
			});
			// 把新用户注册信息存储在服务器
			setTimeout(() => {
				uni.setStorage({
					key: 'storage_key',
					data: 'token',
					success: function(){
						uni.hideLoading();
						uni.showToast({ title: '登录成功', icon: 'success' });
						setTimeout(function() {
							uni.navigateTo({
								url: '../password/set'
							});
						}, 1000);
					}
				});
				// uni.getStorage({
				// 	key: 'UserList',
				// 	success: res => {
				// 		//增加记录，密码md5
				// 		res.data.push({ username: this.phoneNumber, passwd: md5(this.passwd) });
				// 		uni.setStorage({
				// 			key: 'UserList',
				// 			data: res.data,
				// 			success: function() {
				// 				uni.hideLoading();
				// 				uni.showToast({ title: '登录成功', icon: 'success' });
				// 				setTimeout(function() {
				// 					uni.navigateTo({
				// 						url: '../password/set'
				// 					});
				// 				}, 1000);
				// 			}
				// 		});
				// 	},
				// 	fail: e => {
				// 		uni.hideLoading();
				// 		console.log('error');
				// 		//新建UserList
				// 		uni.setStorage({
				// 			key: 'UserList',
				// 			data: [{ username: this.phoneNumber, passwd: md5(this.passwd) }],
				// 			success: function() {
				// 				uni.hideLoading();
				// 				uni.showToast({ title: '登录成功', icon: 'success' });
				// 				setTimeout(function() {
				// 					uni.navigateBack();
				// 				}, 1000);
				// 			},
				// 			fail: function(e) {
				// 				console.log('set error:' + JSON.stringify(e));
				// 			}
				// 		});
				// 	}
				// });
			}, 1000);
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
		width: 106upx;
		height: 110upx;
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
