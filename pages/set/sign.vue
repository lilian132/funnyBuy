<template>
	<view class="sign">
		<!-- 背景图 -->
		<view class="primary" :style="{ background: 'url(' + imageURL[0] + ')' }">
			<!-- 右边的规则 -->
			<view class="rule">
				<view class="rule-left"></view>
				<view class="rule-right" @click="openAdPopup = true"><image src="../../static/img/error/Group%209%20Copy%202.png"></image></view>
				<popup :open="openAdPopup" background="none" position="ad" @close="openAdPopup = false">
					<view style="text-align: center;"><image src="../../static/img/header/Group%2029.png" style="width: 650upx;height: 700upx;"></image></view>
				</popup>
			</view>
			<!-- 签到奖励 -->
			<view class="attendance">
				<view class="attendance-top">
					<view class="attendance-left">
						<view class="attendance-day">
							<view class="day1"><image src="../../static/img/sign/Group%2023.png"></image></view>
							<view class="day1"><image src="../../static/img/sign/Group%2024.png"></image></view>
							<view class="day1"><image src="../../static/img/sign/Group%2010.png"></image></view>
						</view>
						<view class="attendance-day">
							<view class="day1"><image src="../../static/img/sign/Group%2011.png"></image></view>
							<view class="day1"><image src="../../static/img/sign/Group%2012.png"></image></view>
							<view class="day1"><image src="../../static/img/sign/Group%2013.png"></image></view>
						</view>
					</view>
					<view class="attendance-right">
						<view class="attendance-day2"><image src="../../static/img/sign/Group%2025.png"></image></view>
					</view>
				</view>
				<view class="attendance-bottom">
					<!-- 领取奖励 -->
					<view class="attendance-day3"><image src="../../static/img/error/Group%209.png"></image></view>
				</view>
			</view>
			<!-- 累计签到 -->
			<view class="total"><text>累计签到</text></view>
			<!-- 签到进度 -->
			<view class="schedule">
				<view class="length">
					<view class="length1">
                        <view class="lengths">
							<text>7</text>
						</view>
					</view>
					<view class="length2">
					<view class="lengths">
						<text>15</text>
					</view>
					</view>
					<view class="length3">
					<view class="lengths">
						<text>30</text>
					</view>
					</view>
				</view>
			</view>
			<!-- 累计礼包 -->
			<view class="gift">
				<view class="gift1">
					<image src="../../static/img/error/gift1.gif"></image>
					<text>50赠豆</text>
				</view>
				<view class="gift1">
					<image src="../../static/img/error/gift2.gif"></image>
					<text>100赠豆</text>
				</view>
				<view class="gift1">
					<image src="../../static/img/error/Group-5.gif"></image>
					<text>150赠豆</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
import popup from '../../components/uni-popup/YYT-popup.vue';
export default {
	components: { popup },
	data() {
		return {
			// 背景图
			imageURL: ['../../static/img/error/copy.png', '../../static/img/header/pic-zhongji-n.png', '../../static/img/header/pic-gaoji-n.png'],
			openPopup: false,
			position: '',
			background: '#fff',
			openAdPopup: false,
			percent: 0,
			showText: false,
			change: false,
			loopTimer: false,
			sizeSort: 'asc'
		};
	},

	methods: {
		open: function(position) {
			this.position = position;
			this.openPopup = true;
		},
		touchend: function() {
			clearInterval(this.loopTimer);
		},
		changeBgColor: function(e) {
			clearInterval(this.loopTimer);
			this.loopTimer = setInterval(() => {
				let r = Math.floor(Math.random() * 256);
				let g = Math.floor(Math.random() * 256);
				let b = Math.floor(Math.random() * 256);
				let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
				this.background = color;
			}, 300);
		},
		changeSize: function() {
			clearInterval(this.loopTimer);
			this.loopTimer = setInterval(() => {
				let percents = [40, 45, 50, 55, 60, 65, 70, 75, 80];

				if (this.percent <= 40) this.sizeSort = 'asc';
				if (this.percent >= 80) this.sizeSort = 'desc';
				if (this.sizeSort == 'desc') percents = percents.reverse();

				for (let i = 0; i <= percents.length; i++) {
					if (this.sizeSort == 'desc') {
						if (this.percent > percents[i]) {
							this.percent = percents[i];
							break;
						}
					} else {
						if (this.percent < percents[i]) {
							this.percent = percents[i];
							break;
						}
					}
				}
			}, 200);
		},
		reset: function() {
			this.percent = 0;
			this.background = '#fff';
			this.showText = false;
		}
	}
};
</script>
<style lang="scss">
view {
	background-size: cover !important;
}
.sign {
	.primary {
		width: 100%;
		// height: 1632upx;
		.rule {
			padding-top: 20upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.rule-left {
				width: 630upx;
			}
			.rule-right {
				flex: 1;
				image {
					width: 120upx;
					height: 50upx;
				}
			}
		}
		.attendance {
			height: 410upx;
			background: rgba(255, 255, 255, 1);
			border-radius: 20upx;
			margin: 382upx 30upx 0 30upx;
			display: flex;
			flex-direction: column;
			.attendance-top {
				flex: 1;
				display: flex;
				.attendance-left {
					flex: 1;
					.attendance-day {
						display: flex;
						padding-left: 30upx;
						&:nth-child(1) {
							padding-top: 30upx;
						}
						.day1 {
							&:nth-child(2) {
								padding: 0 30upx;
							}
							image {
								width: 116upx;
								height: 104upx;
							}
						}
					}
				}
				.attendance-right {
					width: 221upx;
					.attendance-day2 {
						display: flex;
						align-items: center;
						// justify-content: center;
						margin-top: 30upx;
						image {
							width: 191upx;
							height: 227upx;
						}
					}
				}
			}
			.attendance-bottom {
				height: 130upx;
				.attendance-day3 {
					text-align: center;
					margin-top: 10upx;
					image {
						width: 520upx;
						height: 80upx;
					}
				}
			}
		}
		.total {
			height: 100upx;
			text-align: center;
			margin-top: 35upx;
			text {
				height: 100upx;
				font-weight: bold;
				line-height: 100upx;
				text-align: center;
                font-size:30upx;
                font-family:SourceHanSansCN-Bold;
                font-weight:bold;
                color:rgba(255,255,255,1);
			}
		}
		.schedule {
			height: 60upx;
			margin: 0 30upx;
			.length{
				height: 30upx;
                background:rgba(255,255,255,0.36);
                border-radius:15upx;
				position: relative;
				.length1{
					width:60upx;
                    height:60upx;
                    background:rgba(255,207,106,1);
					border-radius:50%;
					position: absolute;
					top: -14upx;
					left: 100upx;
					display: flex;
					align-items: center;
					justify-content: center;
					.lengths{
						width:40upx;
                        height:40upx;
                        background:rgba(245,166,35,1);
						border-radius:50%;
						display: flex;
						align-items: center;
						justify-content: center;
						text{
                            font-size:24upx;
                            font-family:SourceHanSansCN-Medium;
                            font-weight:500;
                            color:rgba(255,255,255,1);
						}
					}
				}
				.length2{
					width:60upx;
				    height:60upx;
				    background:rgba(255,207,106,1);
					border-radius:50%;
					position: absolute;
					top: -14upx;
					left: 315upx;
					display: flex;
					align-items: center;
					justify-content: center;
					.lengths{
						width:40upx;
					    height:40upx;
					    background:rgba(245,166,35,1);
						border-radius:50%;
						display: flex;
						align-items: center;
						justify-content: center;
						text{
						    font-size:24upx;
						    font-family:SourceHanSansCN-Medium;
						    font-weight:500;
						    color:rgba(255,255,255,1);
						}
					}
				}
				.length3{
					width:60upx;
				    height:60upx;
				    background:rgba(255,207,106,1);
					border-radius:50%;
					position: absolute;
					top: -14upx;
					left: 606upx;
					display: flex;
					align-items: center;
					justify-content: center;
					.lengths{
						width:40upx;
					    height:40upx;
					    background:rgba(245,166,35,1);
						border-radius:50%;
						display: flex;
						align-items: center;
						justify-content: center;
						text{
						    font-size:24upx;
						    font-family:SourceHanSansCN-Medium;
						    font-weight:500;
						    color:rgba(255,255,255,1);
						}
					}
				}
			}
		}
		.gift {
			display: flex;
			align-content: center;
			justify-content: space-between;
			margin: 0 24upx 0 98upx;
			.gift1 {
				display: flex;
				flex-direction: column;
				align-content: center;
				justify-content: center;
				image {
					width: 120upx;
					height: 120upx;
				}
				text {
					margin-top: 16upx;
					font-size: 22upx;
					font-family: SourceHanSansCN-Regular;
					font-weight: 400;
					color: rgba(208, 2, 27, 1);
					text-align: center;
				}
			}
		}
	}
}
</style>
