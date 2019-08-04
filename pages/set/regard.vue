<template>
	<view class="venosa">
		<view class="venosa1">
			<view class="top"><image src="../../static/img/footer/logo.png"></image></view>
		</view>
		<view class="venosa2">
			<text>
				趣抢购是一款全新的趣味购物应用，以最新的电子商务经营理念，最完善公平的网上购物平台，挑战传统的B2C电子商务模式，为用户提供全新的娱乐式电子商务购物体验，打造第一流的中国电子商务品牌。商品总类繁多，更有各种潮流数码和生活用品等你来拿。
			</text>
		</view>
		<view class="venosa3">
        <text>Copyright © 2019 趣抢购版权所有</text> 
		</view>
	</view>
</template>

<script></script>

<style lang="scss">
page {
	background: rgba(245, 245, 245, 1);
}
.venosa {
	border-radius: 20upx;
	margin: 20upx 30upx 0 30upx;
	display: flex;
	flex-direction: column;
	.venosa1 {
		height: 355upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		.top {
			margin-top: 84upx;
			image {
				width: 180upx;
				height: 180upx;
			}
		}
		.bottom {
			width: 180upx;
			height: 80upx;
			border-radius: 20upx;
			border: 2upx solid rgba(245, 166, 35, 1);
			display: flex;
			align-items: center;
			justify-content: center;
			text {
				font-size: 28upx;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				color: rgba(245, 166, 35, 1);
			}
		}
	}
	.venosa2 {
		text {
			font-size: 28upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(74, 74, 74, 1);
			padding-left: 60upx;
		}
	}
	.venosa3 {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 400upx;
		text{
			color: #9B9B9B;
		}
	
	}
}
</style>
