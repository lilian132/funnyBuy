<template>
	<view class="active">
		<!-- 每日签到 -->
		<navigator url="../set/sign?title=sign" hover-class="navigator-hover">
		<view class="active-sign">
			<view class="sing-left">
				<view class="left">
					<image src="../../static/img/footer/pic-meiriqiandao-n.png"></image>
				</view>
				<view class="right">
					<view class="right-day"><text>每日签到</text></view>
					<view class="right-qiandao"><text>签到得积分，每天乐不停</text></view>
					<view class="right-jifeng"><text>2019.6.10 - 2019.6.18</text></view>
				</view>
			</view>
			<view class="sing-right">
				<image src="../../static/img/user/icon-xiangyou-n.png"></image>
			</view>
		</view>
		</navigator>
		<!-- 注册送 -->
		<navigator url="../set/send?title=send" hover-class="navigator-hover">
		<view class="active-sign" style="margin: 30upx 0 30upx 0;">
			<view class="sing-left">
				<view class="left">
					<image src="../../static/img/footer/pic-zhucesong-n.png"></image>
				</view>
				<view class="right">
					<view class="right-day"><text>注册送</text></view>
					<view class="right-qiandao"><text>新注册用户送门票</text></view>
					<view class="right-jifeng"><text>2019.6.10 - 2019.6.18</text></view>
				</view>
			</view>
			<view class="sing-right">
				<image src="../../static/img/user/icon-xiangyou-n.png"></image>
			</view>
		</view>
		</navigator>
		<!-- 消费送 -->
		<view class="active-sign">
			<view class="sing-left">
				<view class="left">
					<image src="../../static/img/footer/pic-xiaofeisong-n.png"></image>
				</view>
				<view class="right">
					<view class="right-day"><text>消费送</text></view>
					<view class="right-qiandao"><text>当天充值消费满100元送猜猜豆</text></view>
					<view class="right-jifeng"><text>2019.6.10 - 2019.6.18</text></view>
				</view>
			</view>
			<view class="sing-right">
				<image src="../../static/img/user/icon-xiangyou-n.png"></image>
			</view>
		</view>
	</view>
</template>

<script></script>

<style lang="scss">
page {
	background: rgba(245, 245, 245, 1);
}
.active {
	padding: 30upx 30upx;
	.active-sign {
		width: 690upx;
		height: 168upx;
		background: rgba(255, 255, 255, 1);
		border-radius: 20upx;
		display: flex;
		.sing-left{
			display: flex;
			width: 600upx;
			align-items: center;
			.left{
				padding: 14upx 32upx 14upx 26upx;
				image{
					width: 130upx;
					height: 130upx;
				}
			}
			.right{
				display: flex;
				flex-direction: column;
				.right-day{
					text{
						font-size:30upx;
						font-family:PingFangSC-Medium;
						font-weight:500;
						color:rgba(0,0,0,1);
					}
					
				}
				.right-qiandao{
					text{
                        font-size:24upx;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(74,74,74,1);
					}
				}
				.right-jifeng{
					text{
				        font-size:24upx;
				        font-family:PingFangSC-Regular;
				        font-weight:400;
				        color:rgba(74,74,74,1);
					}
				}
			}
		}
		.sing-right{
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			image{
				width: 30upx;
				height: 30upx;
			}
		}
	}
}
</style>
