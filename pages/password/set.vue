<template>
	<view>
		<!-- 输入框 -->
		<view class="set">
			<text>第一次登陆需要设置登录密码</text>
		</view>
			<view class="uni-flex">
				<view class="flex-red"><input v-model="password" password value="" class="input-flex-text" name="password" placeholder="请输入6-16个字符的新密码" /></view>
				<view class="flex-blue"><button type="primary" @tap="doReg" form-type="submit" class="btn-row-submit">完成注册</button></view>
			</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			password: ''
		};
	},
	onLoad() {},
	methods: {
		doReg() {
			uni.hideKeyboard();
			//验证规则
			if (this.password.length < 6 || this.password.length > 16) {
				uni.showToast({ title: '请输入6-16个字符的新密码', icon: 'none' });
				return false;
			}
			uni.showLoading({
				title: '提交中...'
			});
			this.$api.postAPI('users/setpwd',{password:this.password}).then(res=>{
				uni.hideLoading();
				if(res.data.code == 0){
					uni.setStorageSync('userInfo_token',res.data.data);
					uni.showToast({ title: '登录成功', icon: 'success'});
					setTimeout(function(){
						uni.switchTab({url: '/pages/user/user'});
					},1500);
				} else {
					return uni.showToast({ title: res.data.msg, icon: 'none',duration:3000 });
				}
			}).catch(err=>{
				uni.hideLoading();
				return uni.showToast({ title: '网络错误', icon: 'none',duration:3000 });
			})
			
		}
	}
};
</script>
<style lang="scss">
.set{
	padding: 60upx 0 0 64upx;
	text{
        font-size:28upx;
        ont-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(74,74,74,1);
	}
}
.uni-flex {
	padding: 30upx 64upx;
	.flex-red {
		height: 100upx;
		border-radius:10upx;
        border:2upx solid rgba(228,228,228,1);
		input {
			line-height: 100%;
			width: 100%;
			height: 100%;
			margin-left: 20upx;
			font-size:30upx;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(155,155,155,1);
		}
	}
	.flex-blue {
		padding: 0upx 30upx;
		margin-top: 100upx;
		button {
			width: 520upx;
			height: 80upx;
			background: rgba(255, 88, 71, 1);
			line-height: 80upx;
		}
	}
}
</style>

