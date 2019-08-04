<template>
	<view v-show="isLogin" class="container">
		<!-- 头部自定义 -->
		<!-- 状态栏 -->
		<view class="status" :style="{ position: headerPosition, top: statusTop, opacity: afterHeaderOpacity }"></view>
		<!-- 顶部导航栏 -->
		<view class="header" :style="{ position: headerPosition, top: headerTop, opacity: afterHeaderOpacity }">
			<!-- 中间 -->
			<view class="input-box">
				<view class="center"><text>我的</text></view>
			</view>
			<!-- 右侧 -->
			<view class="header-right">
				<view class="addr">
					<navigator url="../set/set" hover-class="navigator-hover">
					<view class="location"><image src="../../static/img/user/Rectangle%20Copy%2036.png"></image></view>
					</navigator>
				</view>
				<view class="icon-btn">
					<view></view>
					<view class="yuyin"><image src="../../static/img/user/icon-news-n%20copy%207.png"></image></view>
				</view>
			</view>
		</view>
		<!-- 占位 -->
		<view class="place"></view>
		<!-- 背景颜色 -->
		<view class="header-bar">
			<view class="bg"><image src="../../static/img/user/Groups.png"></image></view>
			<view class="header-center">
				<view class="header-wrap">
					<view @tap="toUserInfo" class="touxiang"><image :src="userAdvator"></image></view>
					<view class="register-login">
						<template v-if="isLogin">
							<view class="nickname">{{nickName}}</view>
						</template>
						<template v-else>
							<view class="left" style="display: inline-block;">
								<navigator url="../login/login?title=login" hover-class="navigator-hover"><text>登录/注册</text></navigator>
							</view>
							<view class="right" style="display: inline-block;vertical-align: -4upx;"><image src="../../static/img/user/icon-xiangyou-n%20copy%208.png"></image></view>
						</template>
					</view>
					<view class="sign">
						<view class="sign-top" @tap="toPage(2)">
							<view class="my-dd">{{points}}</view>
							<view>金豆<view class="arrow-r"></view></view>
						</view>
						<view class="sign-top" @tap="toPage(3)">
							<image src="../../static/img/user/icon-dd.png"></image>
							<view>金豆充值<view class="arrow-r"></view></view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 登录注册 -->
		<view class="apply-member">
			<view class="apply-member-wrap">
				<view class="left">
					<image src="../../static/img/user/icon-member.png"></image>
					<view>成为推广专员最高享<text>10%</text></view>
				</view>
				<view>立即申请<view class="arrow-r"></view></view>
			</view>
		</view>
		<!-- 我的抢购 -->
		<view class="tj-sction1">
			<view class="tj-item" @click="navTo('/pages/order/goods?state=1')" hover-class="common-hover" :hover-stay-time="50">
				<image src="../../static/img/user/Group%2029.png"></image>
				<text>抢购中</text>
				<view class="tj-num" v-if="panicBuyingNum>0">{{panicBuyingNum}}</view>
			</view>
			<view class="tj-item" @click="navTo('/pages/order/goods?state=2')" hover-class="common-hover" :hover-stay-time="50">
				<image src="../../static/img/user/Group%2030.png"></image>
				<text>已抢中</text>
			</view>
			<view class="tj-item" @click="navTo('/pages/order/goods?state=3')" hover-class="common-hover" :hover-stay-time="50">
				<image src="../../static/img/user/Group%2031.png"></image>
				<text>未抢中</text>
			</view>
			<view class="tj-item" @click="navTo('/pages/order/goods?state=0')" hover-class="common-hover" :hover-stay-time="50">
				<image src="../../static/img/user/Group%2032.png"></image>
				<text>我的抢购</text>
			</view>
		</view>
		<!-- 收货信息 -->
		<view class="tj-sction2">
			<view class="tj-item" @click="navTo('/pages/order/order?state=1')" hover-class="common-hover" :hover-stay-time="50">
				<image src="../../static/img/user/Group%2033.png"></image>
				<text>待确认</text>
				<view class="tj-num" v-if="conformOrderNum>0">{{conformOrderNum}}</view>
			</view>
			<view class="tj-item" @click="navTo('/pages/order/order?state=2')" hover-class="common-hover" :hover-stay-time="50">
				<image src="../../static/img/user/Group%2034.png"></image>
				<text>待收货</text>
			</view>
			<view class="tj-item" @click="navTo('/pages/order/order?state=3')" hover-class="common-hover" :hover-stay-time="50">
				<image src="../../static/img/user/Group%2035.png"></image>
				<text>已完成</text>
			</view>
			<view class="tj-item" @click="navTo('/pages/order/order?state=0')" hover-class="common-hover" :hover-stay-time="50">
				<image src="../../static/img/user/Group%2036.png"></image>
				<text>全部订单</text>
			</view>
		</view>
		<!-- 客服信息 -->
		<view class="gift">
			<navigator url="../set/gift?title=gift" hover-class="navigator-hover">
				<view class="list-message">
					<view class="list-left">
						<image src="../../static/img/user/Group%2037%20Copy.png"></image>
						<text>我的礼包</text>
					</view>
					<view class="list-right"><image src="../../static/img/header/icon-xiangyou-n.png"></image></view>
				</view>
			</navigator>
			<navigator url="../address/addres?title=addres" hover-class="navigator-hover">
				<view class="list-message" style="border-top: 1upx solid #E0E7EB;border-bottom: 1upx solid #E0E7EB">
					<view class="list-left">
						<image src="../../static/img/user/Group%2038.png"></image>
						<text>收货信息</text>
					</view>
					<view class="list-right"><image src="../../static/img/header/icon-xiangyou-n.png"></image></view>
				</view>
			</navigator>
			<navigator url="../set/servicesInfo" hover-class="navigator-hover">
				<view class="list-message" style="border-bottom:1upx solid #E0E7EB; ;">
					<view class="list-left">
						<image src="../../static/img/user/Group%2039%20Copy.png"></image>
						<text>客服中心</text>
					</view>
					<view class="list-right"><image src="../../static/img/header/icon-xiangyou-n.png"></image></view>
				</view>
			</navigator>
			<navigator url="../set/set?title=set" hover-class="navigator-hover">
				<view class="list-message">
					<view class="list-left">
						<image src="../../static/img/user/Group%2040.png"></image>
						<text>分享应用</text>
					</view>
					<view class="list-right"><image src="../../static/img/header/icon-xiangyou-n.png"></image></view>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			isFirstLoad:true,
			afterHeaderOpacity: 1, //不透明度
			headerPosition: 'fixed',
			headerTop: null,
			statusTop: null,
			imageURL: ['../../static/img/user/Groups.png', '../../static/img/header/pic-zhongji-n.png', '../../static/img/header/pic-gaoji-n.png'],
			isLogin: false,
			nickName:'',
			giftPoints:0,
			points:0,
			panicBuyingNum:0,
			conformOrderNum:0,
			userAdvator:''
		};
	},
	onLoad() {
		this.initData();
		setTimeout(()=>{
			this.isFirstLoad = false;
		},0);
	},
	onShow() {
		if(!this.isFirstLoad){
			this.initData();
		}
	},
	onNavigationBarButtonTap(e) {
		console.log(1);
		uni.navigateTo({
			url: '/pages/set/set'
		});
	},
	methods: {
		initData(){
			let token = uni.getStorageSync('token');
			let userInfo_token = uni.getStorageSync('userInfo_token');
			if(!token || !userInfo_token){
				return uni.navigateTo({url:'/pages/login/login?url=user'});
			}
			if(!userInfo_token.hasPwd){//未设置密码
				return uni.navigateTo({
					url:'/pages/password/set'
				})
			}
			this.getUserInfo();
			this.getMyPoints();
			setTimeout(()=>{
				this.getawaitNumber();
			},1000);
		},
		async getUserInfo(){
			let res = await this.$api.postAPI('users/queryUser');
			let res_data = res.data;
			this.isFirstLoad = false;
			if(res_data.code == 0){
				this.isLogin = true;
				this.nickName = res_data.data.nickName;
				this.userAdvator = '../../static/img/user/Mask.png';
				uni.setStorageSync('userInfo',res_data.data);
			} else {
				this.userAdvator = '../../static/img/user/Mask0.png';
				return uni.showToast({ title: res_data.msg, icon: 'none',duration:3000 });
			}
		},
		async getMyPoints(){
			let res = await this.$api.postAPI('points/detail');
			let res_data = res.data;
			//this.isFirstLoad = false;
			if(res_data.code == 0){
				this.giftPoints = res_data.data.giftPoints;
				this.points = res_data.data.points;
			} else {
				return uni.showToast({ title: res_data.msg, icon: 'none',duration:3000 });
			}
		},
		async getawaitNumber(){
			let res = await this.$api.postAPI('guess/myGuessCount');
			let res_data = res.data;
			if(res_data.code == 0){
				this.panicBuyingNum = res_data.data.panicBuyingNum;
				this.conformOrderNum = res_data.data.conformOrderNum;
			} else {
				return uni.showToast({ title: res_data.msg, icon: 'none',duration:3000 });
			}
		},
		toUserInfo(){
			uni.navigateTo({
				url:'/pages/user/userInfo'
			});
		},
		navTo(url) {
			uni.navigateTo({
				url
			});
		},
		toPage(id){
			let url = '';
			switch(id){
				case 1: url = '/pages/set/sign';break;
				case 2: url = '/pages/user/venosa';break;
				case 3: url = '/pages/product/store';break;
			}
			url&&uni.navigateTo({
				url
			});
		}
	}
};
</script>

<style lang="scss">
page {
	background: rgba(245, 245, 245, 1);
}
.container {
	position: relative;
	.pullDown-effects {
		position: fixed;
		//top: calc(100upx - 36vw);
		top: 0;
		z-index: 9;
		width: 100%;
		height: 36vw;
		/*  #ifdef  APP-PLUS  */
		padding-top: var(--status-bar-height);
		/*  #endif  */
		image {
			width: 100%;
			height: 36vw;
		}
	}
	/* 头部 */
	.status {
		width: 100%;
		position: fixed;
		z-index: 10;
		background-color: #ff5847;
		padding-top: 100upx;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		// height: var(--status-bar-height); //覆盖样式
		/*  #endif  */
	}
	.header {
		width: 92%;
		padding: 0 4%;
		height: 100upx;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 10;
		background: rgba(255, 88, 71, 1);

		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */
		
		.header-right{
			position: fixed;
			display: flex;
			justify-content: flex-end;
			width: 140upx;
			right: 30upx;
		}
		.addr {
			width: 120upx;
			height: 60upx;
			display: flex;
			align-items: center;
			font-size: 28upx;
			.location {
				display: flex;
				align-items: center;
				image {
					width: 44upx;
					height: 44upx;
				}
			}
		}
		.input-box {
			width: 100%;
			height: 64upx;
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			.center {
				display: flex;
				align-items: center;
				justify-content: center;
				text {
					font-size: 36upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: #fff;
				}
			}
		}
		.icon-btn {
			width: 120upx;
			height: 60upx;
			display: flex;
			justify-content: space-between;
			.yuyin {
				display: flex;
				align-items: center;
				justify-content: center;
				image {
					width: 44upx;
					height: 44upx;
				}
			}
		}
	}
	.place {
		background-color: #ffffff;
		height: 100upx;
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
	}
	/* 背景图 */
	.header-bar {
		height: 260upx;
		// margin-top: 88upx;
		position: relative;
		.bg {
			height: 200upx;
			width: 100%;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.header-center {
			width: 690upx;
			height: 255upx;
			background: rgba(255, 255, 255, 1);
			border-radius: 20upx;
			position: absolute;
			top: 130upx;
			left: 50%;
			transform: translate(-50%, -50%);
			display: flex;
			flex-direction: column;
			clear: both;
			.header-wrap{
				position: relative;
			}
			.touxiang {
				width: 120upx;
				height: 120upx;
				margin: 20upx 30upx;
				display: inline-block;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.register-login {
				vertical-align: 44upx;
				display: flex;
				align-items: center;
				justify-content: center;
				display: inline-block;
				.left {
					text {
						font-size: 34upx;
						font-family: PingFangSC-Medium;
						font-weight: 500;
						color: rgba(74, 74, 74, 1);
					}
				}
				.right {
					width: 30upx;
					height: 30upx;
					padding-left: 6upx;
					padding-bottom: 3px;
					image {
						width: 100%;
						height: 100%;
					}
				}
				.nickname{height: 60upx;line-height: 60upx;}
			}
			.sign {
				display: flex;
				align-items: center;
				justify-content: flex-start;
				margin-left: 180upx;
				margin-right: 30upx;
				margin-top: -30upx;
				.sign-top {
					display: flex;
					flex-direction: column;
					&:nth-child(1) {
						display: flex;
						align-items: center;
						justify-content: center;
						margin-right: 160upx;
					}
					&:nth-child(2) {
						display: flex;
						align-items: center;
						justify-content: center;
					}
					.my-dd{
						color: #F5A623;
						font-size: 32upx;
					}
					image {
						width: 48upx;
						height: 45upx;
						margin: 6upx 0;
						text-align: center;
					}
					text {
						text-align: center;
						font-size: 26upx;
						font-family: PingFangSC-Regular;
						font-weight: 400;
						color: rgba(74, 74, 74, 1);
						padding-top: 24upx;
					}
					.arrow-r{
						width: 20upx;
						height: 20upx;
						background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAJ1BMVEVHcExJSUlCQkJKSkpKSkpKSkpKSkpKSkpJSUlKSkpKSkpKSkpKSkqqXZoiAAAADHRSTlMAFgQi25usjeXPcESo8m1DAAAAhUlEQVQoz2NgwAm2LsIU4z5zUgBDkP3MmYkYglxnsChlysGmVA2XUkdsSo8QqVQVqNQAQ2nMmTPOxCllwKqU9cyZE1iVNmMLFixKa3ApFcCmtIAoQazasVmE1UnYHM+KQ6EzUUFHrEKsEYctinEpPClATALDmhSxJlqsyRtrRmBgUEDhAQDeNFotokPJQQAAAABJRU5ErkJggg==);
						background-size: contain;
						display: inline-block;
						margin-left: 6upx;
					}
				}
			}
		}
	}

	.user-section {
		height: 200upx;
		position: relative;
		background-color: #ec5733;
		margin-top: 260upx;
	}
	.user-info-box {
		height: 200upx;
		display: flex;
		align-items: center;
		position: relative;
		z-index: 1;
		.portrait-box {
			padding: 0upx 30upx;
			.portrait {
				width: 120upx;
				height: 120upx;
				border: 1upx solid #fff;
				border-radius: 50%;
				background-color: #fff;
			}
		}
		.username {
			color: #fff;
		}
	}
	.apply-member{
		width: 630upx;
		height: 100upx;
		background:#4a4a4a;
		box-shadow:0px 2upx 10upx 0px rgba(0,0,0,0.1);
		border-radius:20upx;
		margin: 30upx auto;
		color: #fff;
		.apply-member-wrap{
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 30upx;
			height: 100upx;
		}
		.left{
			display: flex;
			text{
				color: #F8E71C;
			}
		}
		image{
			width: 50upx;
			height: 40upx;
			margin-right: 6upx;
		}
		view{
			font-size: 24upx;
		}
		.arrow-r{
			width: 20upx;
			height: 20upx;
			background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAMFBMVEVHcEz///////////////////////////////////////////////////////////9EPuwCAAAAD3RSTlMA4tKZAawTGwUlikRo/nhPh236AAAAsklEQVQoz42TsQ2DMBRELeECJfSIBcgYLghSxBJkBHZA6TNCNkiRSUiP3NJCHx12Ge6QcOfT8/9f/87G7J7PxNrZL3cSE4wliRl+X0LTVqEPgKveWuAi0W4rWonWwMyow5iT2APDc6teA1pQ1UqhxgGFWAtmRt8KbdSsEX0dEk/quWqkRrLOM1hJUFRUq4tgLuwYOoqDZ+OUxalw2KrYxCiUHEVwFBMBhngzqD9CaPV3WwEqeG9pjWMoNAAAAABJRU5ErkJggg==);
			background-size: contain;
			display: inline-block;
			margin-left: 6upx;
		}
	}
	.tj-sction1 {
		display: flex;
		align-items: center;
		justify-content: space-around;
		background-color: #fff;
		margin: 30upx 30upx 0 30upx;
		border-radius: 20upx;

		.tj-item {
			position: relative;
			padding: 30upx 0upx;
			display: flex;
			align-items: center;
			justify-content: space-around;
			flex-direction: column;
			height: 120upx;
			image {
				width: 60upx;
				height: 60upx;
			}
			text {
				padding-top: 10upx;
				font-size: 24upx;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				color: rgba(74, 74, 74, 1);
			}
		}
		.tj-num{
			position: absolute;
			top:20upx;
			right: -10upx;
			width: 30upx;
			height: 30upx;
			font-size:20upx;
			font-weight:400;
			color: #D0021B;
			border: 1upx solid #D0021B;
			border-radius: 100%;
			text-align: center;
			line-height: 28upx;
			background-color: #fff;
		}
	}
	.tj-sction2 {
		display: flex;
		align-items: center;
		justify-content: space-around;
		background-color: #fff;
		margin: 20upx 30upx 0 30upx;
		border-radius: 20upx;

		.tj-item {
			position: relative;
			padding: 30upx 0upx;
			display: flex;
			align-items: center;
			justify-content: space-around;
			flex-direction: column;
			height: 120upx;
			image {
				width: 60upx;
				height: 60upx;
			}
			text {
				padding-top: 10upx;
				font-size: 24upx;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				color: rgba(74, 74, 74, 1);
			}
		}
		.tj-num{
			position: absolute;
			top:20upx;
			right: -10upx;
			width: 30upx;
			height: 30upx;
			font-size:20upx;
			font-weight:400;
			color: #D0021B;
			border: 1upx solid #D0021B;
			border-radius: 100%;
			text-align: center;
			line-height: 28upx;
			background-color: #fff;
		}
	}
	.gift {
		height: 412upx;
		background: rgba(255, 255, 255, 1);
		border-radius: 20upx;
		margin: 20upx 30upx;
		.list-message {
			display: flex;
			align-items: center;
			&:nth-child(2) {
				border: 1upx solid #e0e7eb;
			}
			.list-left {
				flex: 1;
				height: 104upx;
				display: flex;
				align-items: center;
				image {
					padding: 0 30upx 0 30upx;
					width: 44upx;
					height: 44upx;
				}
				text {
					font-size: 28upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(74, 74, 74, 1);
				}
			}
			.list-right {
				width: 90upx;
				display: flex;
				justify-content: center;
				align-items: center;
				image {
					width: 30upx;
					height: 30upx;
				}
			}
		}
	}
}
</style>
