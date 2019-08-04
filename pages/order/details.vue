<template>
	<view class="details">
		<view class="tail">
			<view class="tail1">
				<view class="left">
					<image src="https://img12.360buyimg.com/babel/s350x370_jfs/t1/39294/13/7115/66489/5ce364d2E0eae12fc/ef2238659b639bb7.jpg!q90!cc_350x370"></image>
				</view>
				<view class="right">
					<view class="right1"><text>Apple iPhoneX 128G 土豪金色</text></view>
					<view class="right2">
						<text class="qiang">抢购均价</text>
						<text class="gou">¥</text>
						<text class="pic">39.5</text>
					</view>
				</view>
			</view>
			<view class="tail2">
				<view class="message">
					<view class="aged">
						<text class="dingdan">订单编号：</text>
						<text class="bianhao">NO123456789</text>
					</view>
				</view>
				<view class="message">
					<view class="aged">
						<text class="dingdan">下单时间：</text>
						<text class="bianhao">2019-06-11 11:00:00</text>
					</view>
				</view>
				<view class="message">
					<view class="aged">
						<text class="dingdan">收件人：</text>
						<text class="bianhao">小溪流</text>
					</view>
				</view>
				<view class="message">
					<view class="aged">
						<text class="dingdan">手机号码：</text>
						<text class="bianhao">134 7876 9786</text>
					</view>
				</view>
				<view class="message">
					<view class="aged">
						<text class="dingdan">收货地址：</text>
						<text class="bianhao">广东省深圳市宝安区西乡共乐小学</text>
					</view>
				</view>
			</view>
			<view class="tail3">
				<view class="message">
					<view class="aged">
						<text class="dingdan">留言：</text>
						<text class="bianhao">需要尺寸为S，谢谢</text>
					</view>
				</view>
				<view class="message">
					<view class="aged">
						<text class="dingdan">物流信息：</text>
						<text class="bianhao"></text>
					</view>
				</view>
				<view class="message">
					<view class="aged">
						<text class="dingdan">物流编号：</text>
						<text class="bianhao">88888888</text>
					</view>
				</view>
				<view class="message">
					<view class="aged">
						<text class="dingdan">快递公司：</text>
						<text class="bianhao">顺丰快递</text>
					</view>
				</view>
				<view class="message">
					<view class="aged">
						<text class="dingdan">已下单</text>
						<text class="bianhao"></text>
					</view>
				</view>
				<view class="message">
					<view class="aged">
						<text class="dingdan" style="font-size: 24upx;">你的订单已进入出库状态</text>
						<text class="bianhao"></text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script></script>

<style lang="scss">
page {
	background: rgba(245, 245, 245, 1);
}
.details {
	.tail {
		margin: 30upx;
		height: 995upx;
		background: rgba(255, 255, 255, 1);
		border-radius: 20upx;
	}
	.tail1 {
		height: 240upx;
		display: flex;
		.left {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			image {
				width: 180upx;
				height: 180upx;
			}
		}
		.right {
			margin-left: 10upx;
			width: 480upx;
			display: flex;
			flex-direction: column;
			.right1 {
				margin-top: 40upx;
				text {
					font-size: 30upx;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					color: rgba(74, 74, 74, 1);
				}
			}
			.right2 {
				.qiang {
					font-size: 26upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(74, 74, 74, 1);
				}
				.gou {
					margin-left: 20upx;
					font-size: 28upx;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					color: rgba(255, 159, 0, 1);
				}
				.pic {
					font-size: 36upx;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					color: rgba(255, 159, 0, 1);
				}
			}
		}
	}
	.tail2 {
		height: 350upx;
		border: 1upx solid #e0e7eb;
		.message {
			margin: 10upx 0 0 30upx;
			.aged {
				.dingdan {
					font-size: 30upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(74, 74, 74, 1);
				}
				.bianhao {
					font-size: 24upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(74, 74, 74, 1);
				}
			}
		}
	}
	.tail3 {
		height: 350upx;
		.message {
			margin: 10upx 0 0 30upx;
			.aged {
				.dingdan {
					font-size: 30upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(74, 74, 74, 1);
				}
				.bianhao {
					font-size: 24upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(74, 74, 74, 1);
				}
			}
		}
	}
}
</style>
