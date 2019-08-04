<template>
	<view>
		<!-- 输入框 -->
		<view class="uni-flex">
			<view class="flex-red"><input  v-model="phoneNumber" class="uni-input" maxlength="11" placeholder="请输入手机号" /></view>
			<view class="flex-yellow">
				<view class="flex-green">
					<input  class="uni-input"  name="yzm" v-model="code" type="text" placeholder="请输入验证码" />
				</view>
				<view class="forget" hover-class="navigator-hover" :class='{"gray":getCodeisWaiting}'><text  @click.stop="getCode()">{{getCodeText}}</text></view>
			</view>
		</view>
		<!-- 登录 -->
		<view class="flex-blue">
			<button @tap="doReg" type="primary">下一步</button>
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
				"veriCodeType": 4
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
		doReg() {
			uni.hideKeyboard();
			//验证规则
			if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber)) {
				uni.showToast({ title: '请填写正确手机号码', icon: 'none' });
				return false;
			}
			//验证码，请求服务器比对验证码是否正确。
			if (this.code == "") {
				return uni.showToast({ title: '请输入验证码', icon: 'none' });
			} else if(!/^\d{4,6}$/g.test(this.code)){
				return uni.showToast({ title: '请输入正确验证码', icon: 'none' });
			}
			if(!this.isGetCode){
				return uni.showToast({ title: '请获取验证码', icon: 'none',duration:3000 });
			}
			uni.navigateTo({
				url:`/pages/password/setpassword?mobile=${this.phoneNumber}&code=${this.code}`
			})
		}
	}
};
</script>
<style lang="scss">
/* 输入框 */
.uni-flex {
	padding: 60upx 30upx;
	margin-bottom: 40upx;
	.flex-red {
		height: 100upx;
		border-radius:10upx 10upx 10upx 10upx;
		border: 1px solid rgba(228, 228, 228, 1);
		input {
			line-height: 100%;
			width: 100%;
			height: 100%;
			padding-left: 20upx;
		}
	}
	.flex-yellow{
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
			border-radius:10upx 0upx 0upx 10upx;
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
			width:204upx;
		    height:100upx;
			color:rgba(255,88,71,1);
			border-radius:0upx 10upx 10upx 0upx;
		    border:2upx solid rgba(255,88,71,1);
			font-size:24upx;
			font-family:PingFangSC-Regular;
			font-weight:400;
			line-height:100upx;
			text-align: center;
		}
		.forget.gray{
			color: #aaa;
			border-color: rgba(228, 228, 228, 1);
			background-color: #fff!important;
			opacity: 1;
		}
	}
	
}
.flex-blue {
	padding: 0upx 30upx;
	margin-bottom: 313upx;
	height: 80upx;
	button {
		width: 520upx;
		background: rgba(255, 88, 71, 1);
	}
}
</style>
