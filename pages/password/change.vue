<template>
	<view>
		<!-- 输入框 -->
		<view class="uni-flex">
			<view class="flex-green"><input v-model="password" class="uni-input" password maxlength="11" placeholder="请输入原密码" /></view>
			<view class="flex-green"><input v-model="newPassword" class="uni-input" password type="text" placeholder="请输入6-16个字符的新密码" />
			</view>
			<view class="flex-blue"><button type="primary" @tap="doReg">完成</button></view>
		</view>
	</view>
</template>

<script>
	export default {
	data() {
	    return {
	        password:'',
			newPassword:''
	    }
	},
	methods: {
		doReg() {
			uni.hideKeyboard();
			//验证规则
			if (this.password == '') {
				uni.showToast({ title: '请输入原密码', icon: 'none' });
				return false;
			}
			if (this.newPassword.length < 6 || this.newPassword.length > 16) {
				uni.showToast({ title: '请输入6-16个字符的新密码', icon: 'none' });
				return false;
			}
			
			uni.showLoading({
				title: '提交中...'
			});
			let parms = {
				"oldPassword": this.password,
				"newPassword": this.newPassword
			}
			this.$api.postAPI('users/modifyPassword',parms).then(res=>{
				uni.hideLoading();
				if(res.data.code == 0){
					uni.showToast({ title: '修改成功', icon: 'success'});
					setTimeout(function(){
						uni.navigateBack();
						//uni.redirectTo({url: '/pages/user/userInfo?title=userInfo'});
					},1500);
				} else {
					return uni.showToast({ title: res.data.msg, icon: 'none',duration:3000 });
				}
			}).catch(err=>{
				uni.hideLoading();
				return uni.showToast({ title: '网络错误', icon: 'none',duration:3000 });
			})
		}
	},
}
</script>

<style lang="scss">
.uni-flex {
	padding: 64upx 64upx;
	.flex-green {
		height: 100upx;
		border: 1px solid #ccc;
		margin-bottom: 30upx;
		position: relative;
		border-radius:10upx;
		input {
			line-height: 100%;
			width: 100%;
			height: 100%;
			padding-left: 30upx;
			font-size:30upx;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(155,155,155,1);
		}
	}
	.flex-blue {
		margin-top: 100upx;
		button {
			width:520upx;
            height:80upx;
            background:rgba(255,88,71,1);
            border-radius:10px;
            opacity:0.6;
			line-height: 80upx;
		}
	}
}
</style>
