<template>
	<view class="container">
		<view class="portrait" hover-class="cell-hover" :hover-stay-time="50">
			<text class="portrait-tit">头像</text>
			<image src="../../static/img/user/Mask.png"></image>
		</view>
		<view class="nickname" hover-class="cell-hover" :hover-stay-time="50">
			<text class="nackname-tit">昵称</text>
			<text class="pet">{{nickName}}</text>
		</view>
		<navigator url="../password/editMobile" hover-class="navigator-hover">
			<view class="phone" hover-class="cell-hover" :hover-stay-time="50">
				<text class="phone-tit">手机号码</text>
				<view class="right">
					<text class="pet">{{mobilePhone}}</text>
					<image src="../../static/img/user/icon-xiangyou-n.png"></image>
				</view>
			</view>
		</navigator>
		<navigator url="../password/change" hover-class="navigator-hover">
			<view class="register" hover-class="cell-hover" :hover-stay-time="50">
				<text class="register-tit">登录密码</text>
				<image src="../../static/img/user/icon-xiangyou-n.png"></image>
			</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nickName:'',
				mobilePhone:''
			}
		},
		onShow() {
			let userInfo = uni.getStorageSync('userInfo');
			console.log('00099', userInfo)
			if (userInfo) {
				this.nickName = userInfo.nickName;
				this.mobilePhone = userInfo.mobile;
			} else {
				uni.navigateTo({url: '/pages/login/login'});
			}
		},
		methods: {
			
		}
	};
</script>

<style lang="scss">
	.container {
		.portrait {
			border-top: 2upx solid #E0E7EB;
			border-bottom: 2upx solid #E0E7EB;
			height: 150upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0upx 30upx;

			.portrait-tit {
				font-size: 30upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: #4A4A4A;
			}

			image {
				width: 120upx;
				height: 120upx;
			}
		}

		.nickname {
			height: 100upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 2upx solid #E0E7EB;
			padding: 0upx 30upx;

			.nackname-tit {
				font-size: 30upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: #4A4A4A;
			}

			.pet {
				font-size: 30upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: #4A4A4A;
			}
		}

		.phone {
			height: 100upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 2upx solid #E0E7EB;
			padding: 0upx 30upx;

			.phone-tit {
				font-size: 30upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: #4A4A4A;

			}

			.pet {
				font-size: 30upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: #4A4A4A;
				margin-right: 30upx;
			}

			image {
				width: 30upx;
				height: 30upx;
			}
		}

		.register {
			height: 100upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 2upx solid #E0E7EB;
			padding: 0upx 30upx;

			.register-tit {
				font-size: 30upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: #4A4A4A;
			}

			image {
				width: 30upx;
				height: 30upx;
			}
		}
		.logout{
			width: 80%;
			margin-top: 200upx;
			background-color: #ff5847;
		}
	}
</style>
