<template>
	<view class="content">
		<!-- 手机号码 -->
		<view class="content-box">
			<view class="phone">
				<text>手机号码</text>
				<input type="text" placeholder="请输入手机号" />
			</view>
			<!-- 建议 -->
			<view class="success">
				<text>请输入您的意见和建议,我们将不断改进</text>
				<input type="text" />
			</view>
		</view>

		<!-- 建议提交 -->
		<view class="submit"><button >提交</button></view>
		<!-- 在线客服 -->
		<view class="service">
			<!-- <image  src="../../static/img/user/Group 11.png"></image>
			<image  src="../../static/img/user/Group 12.png"></image> -->
			<image class="service-left" src="/static/img/user/Group%2011.png"></image>
			<image class="service-right" src="/static/img/user/Group%2012.png"></image>
		</view>
		<!-- 工作时间 -->
		<view class="rest">
			<view class="rest-left"><image src="/static/img/user/u2322.png"></image></view>
			<view class="rest-center">
				<text>工作日 : 9 : 30 - 21 : 00</text>
				<text>星期六 : 9 : 30 - 18 : 00</text>
			</view>
			<view class="rest-right"><image src="/static/img/user/u2322.png"></image></view>
		</view>
	</view>
</template>

<script></script>

<style lang="scss">
page {
	background: rgba(245, 245, 245, 1);
}
.content {
	padding: 30upx 30upx;
	.content-box {
		height: 500upx;
		background: rgba(255, 255, 255, 1);
		border-radius: 20px;
		.phone {
			// display: flex;
			padding: 30upx 30upx;
			text {
				font-size: 30upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(74, 74, 74, 1);
			}
			input {
				margin-top: 30upx;
				border: 1upx solid #e4e4e4;
				height: 80upx;
				width: 630upx;
			}
		}
		.success {
			// margin-top: 30upx;
			padding-left: 30upx;
			text {
				font-size: 30upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(74, 74, 74, 1);
			}
			input {
				margin-top: 25upx;
				width: 630upx;
				height: 160upx;
				border: 1upx solid #e4e4e4;
			}
		}
	}

	.submit {
		margin-top: 60upx;
		width: 520upx;
		height: 80upx;
		margin-left: 85upx;
		button {
			background: rgba(255, 88, 71, 1);
			border-radius: 10upx;
			font-size: 36upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(255, 255, 255, 1);
		}
	}
	.service {
		height: 80upx;
		display: flex;
		margin-top: 176upx;
		align-items: center;
		justify-content: center;
		.service-left {
			width: 80upx;
			height: 80upx;
		}
		.service-right {
			padding-left: 148upx;
			width: 80upx;
			height: 80upx;
		}
	}
	/* 工作时间 */
	.rest {
		display: flex;
		justify-content: space-between;
		padding: 60upx 0upx;

		.rest-left {
			width: 190upx;
			height: 2upx;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.rest-center {
			padding: 0upx 20upx;
			color: #b9b9b9;
			display: flex;
			flex-direction: column;
			text {
				font-size: 24upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(74, 74, 74, 1);
			}
		}
		.rest-right {
			width: 190upx;
			height: 2upx;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>
