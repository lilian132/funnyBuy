<template>
	<view class="sign">
		<!-- 背景图 -->
		<view class="primary" :style="{ background: 'url(' + imageURL[0] + ')' }">
			<!-- 右边的规则 -->
			<view class="rule">
				<view class="rule-left"></view>
				<view class="rule-right" @click="openAdPopup = true"><image src="../../static/img/error/Group%2015%20Copy.png"></image></view>
				<popup :open="openAdPopup" background="none" position="ad" @close="openAdPopup = false">
					<view style="text-align: center;"><image src="../../static/img/header/Group%2027.png" style="width: 650upx;height: 700upx;"></image></view>
				</popup>
			</view>
			<!-- 注册 -->
			<view class="zhuce"><button type="primary" @click="btn">立即注册</button></view>
		</view>
	</view>
</template>
<script>
import popup from '../../components/uni-popup/YYT-popup.vue';
export default {
	components: {
		popup
	},

	data() {
		return {
			// 背景图
			imageURL: ['../../static/img/header/mianfei.png', '../../static/img/header/pic-zhongji-n.png', '../../static/img/header/pic-gaoji-n.png'],
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
		// 点击立即注册跳转到登录页面
		btn() {
			uni.navigateTo({
				url: '/pages/login/login'
			});
		},
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
	background-size: 100% 100% !important;
}
.sign {
	width: 100%;
	height: 100%;
	.primary {
		width: 100%;
		height: 1632upx;
		height: 1260upx;
		.rule {
			padding-top: 60upx;
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
		.zhuce {
			height: 90upx;
			position: fixed;
			left: 0upx;
			bottom: 0upx;
			width: 100%;
			z-index: 120;
			button {
				width: 360upx;
				height: 80upx;
				background: rgba(248, 231, 28, 1);
				border-radius: 40upx;
				font-size: 40upx;
				font-family: SourceHanSansCN-Bold;
				font-weight: bold;
				color: rgba(225, 114, 75, 1);
				text-align: center;
				line-height: 80upx;
			}
		}
	}
}
</style>
