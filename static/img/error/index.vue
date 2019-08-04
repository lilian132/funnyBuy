<template>
	<view style="background:rgba(245,245,245,1);">
		<!-- 头部自定义 -->
		<view class="status_bar"></view>
		<view class="header">
			<view class="left" @click="toggleCateMask('show')"><image src="../../static/img/header/icon-more-n.png"></image></view>
			<view class="center"><text>竞猜中心</text></view>
			<view class="right"><image src="../../static/img/header/icon-news-n.png"></image></view>
		</view>
		<!-- 首页轮播图 -->
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item class="swiper-item"  v-for="(item,index) in imgList" :key="index">
							<view class="swiper-item uni-bg-red"><image :src="item.imgUrl"></image></view>
						</swiper-item>
						<!-- <swiper-item class="swiper-item">
							<view class="swiper-item uni-bg-red"><image src="../../static/img/error/n1.png"></image></view>
						</swiper-item>
						<swiper-item class="swiper-item">
							<view class="swiper-item uni-bg-red"><image src="../../static/img/error/n1.png"></image></view>
						</swiper-item> -->
					</swiper>
				</view>
			</view>
		</view>
		<!-- 喜报 -->
		<view class="like-message">
			<image src="../../static/img/header/icon-laba-n.png" mode=""></image>
			<uni-notice-bar scrollable="true" single="true" text="喜报：恭喜小溪流玩家，猜中猜猜豆得10000金豆！"></uni-notice-bar>
		</view>
		<!-- 分类开始 -->
		<view class="cate-mask" :class="cateMaskState === 0 ? 'none' : cateMaskState === 1 ? 'show' : ''" @click="toggleCateMask">
			<view class="cate-content" @click.stop.prevent="stopPrevent" @touchmove.stop.prevent="stopPrevent">
				<view class="cateList">
					<view class="more">更多</view>
					<view class="guidelines">
						<image src="../../static/img/header/icon-guide-n.png"></image>
						<text>新手指引</text>
					</view>
					<view class="guidelines">
						<image src="../../static/img/header/icon-gouwuche-n.png"></image>
						<text>兑换商城</text>
					</view>
					<navigator url="../category/activity?title=activity">
					<view class="guidelines">
						<image src="../../static/img/header/icon-gift-n.png"></image>
						<text>最新活动</text>
					</view>
					</navigator>
					<view class="guidelines">
						<image src="../../static/img/header/icon-jiangzhang-n.png"></image>
						<text>领奖台</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 分类结束-->
		<!-- 场次列表 -->
		<view class="screening">
			<view class="primary" :style="{ background: 'url(' + imageURL[0] + ')' }">
				<!-- <image src="../../static/img/header/pic-chuji-n.png"></image> -->
				<view class="left"></view>
				<view class="right">
					<text>初级场</text>
					<navigator url="../session/primarys?title=primarys" hover-class="navigator-hover"><button>GO <image src="../../static/img/header/Group.png"></image></button></navigator>
				</view>
			</view>
			<view class="intermediate" :style="{ background: 'url(' + imageURL[1] + ')' }">
				<!-- <image src="../../static/img/header/pic-chuji-n.png"></image> -->
				<view class="left"></view>
				<view class="right">
					<text>中级场</text>
					<button>GO <image src="../../static/img/header/Group%208.png"></image></button>
				</view>
			</view>
			<view class="advanced" :style="{ background: 'url(' + imageURL[2] + ')' }">
				<!-- <image src="../../static/img/header/pic-chuji-n.png"></image> -->
				<view class="left"></view>
				<view class="right">
					<text>高级场</text>
					<button>GO <image src="../../static/img/header/Group%209.png"></image></button>
					<!-- <button class="cell-more yticon icon-you">GO</button> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import uniLoadMore from '../../components/uni-load-more/uni-load-more.vue';
import uniNoticeBar from '../../components/uni-notice-bar/uni-notice-bar.vue';
export default {
	components: { uniNoticeBar},
	data() {
		return {
			//轮播
			imgList: [],
			cateMaskState: 0, //分类面板展开状态
			cateList: [],
			// 轮播图数据
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500,
			sliderlist: [],
			imageURL: ['../../static/img/header/pic-chuji-n.png', '../../static/img/header/pic-zhongji-n.png', '../../static/img/header/pic-gaoji-n.png'],
		};
	},
	onLoad: function() {
		uni.request({
			url: 'http://111.230.144.142:8085/common/queryLunbo',
			method: 'POST',
			data: {
				"id": 0,
                "imgUrl": "",
			},
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: res => {
				this.imgList = res.data.data;
				console.log(res)
			},
			fail: res=> {
				console.log(res)
			},
			// complete: () => {}
		});
	},
	methods: {
		//显示分类面板
		toggleCateMask(type) {
			console.log(1);
			let timer = type === 'show' ? 10 : 300;
			let state = type === 'show' ? 1 : 0;
			this.cateMaskState = 2;
			setTimeout(() => {
				this.cateMaskState = state;
			}, timer);
		},
		//分类点击
		// changeCate(item) {
		// 	this.cateId = item.id;
		// 	this.toggleCateMask();
		// 	uni.pageScrollTo({
		// 		duration: 300,
		// 		scrollTop: 0
		// 	});
		// 	this.loadData('refresh', 1);
		// 	uni.showLoading({
		// 		title: '正在加载'
		// 	});
		// },
		stopPrevent() {}
	},
	onNavigationBarButtonTap(e) {
		console.log('监听到原生标题栏按钮点击事件');
		console.log(e);
		// uni.navigateTo({
		// 	url: '/pages/set/set'
		// });
	}
};
</script>

<style lang="scss">
view {
	background-size: cover !important;
}
.status_bar {
        height: var(--status-bar-height);
        width: 100%;
    }
/* 头部 */
.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 22upx 30upx;
	height: 88upx;
	box-sizing: border-box;
	background: rgba(255, 255, 255, 1);
	z-index: 10;
	position: fixed;
	top:0;
	left: 0;
	width: 100%;
	.left {
		width: 44upx;
		height: 44upx;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.center {
		font-size: 22px;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(0, 0, 0, 1);
	}
	.right {
		width: 44upx;
		height: 44upx;
		image {
			width: 100%;
			height: 100%;
		}
	}
}
/* 轮播图样式 */
.swiper {
	margin-top: 88upx;
	width: 100%;
	height: 290.3upx;
}
.swiper-item {
	height: 100%;
	width: 100%;
}
.swiper-item image {
	height: 100%;
	width: 100%;
}
/* 喜报 */
.like-message {
	margin: 28upx 30upx 25upx 30upx;
	background: rgba(245, 229, 229, 1);
	height: 60upx;
	border-radius: 20upx;
	display: flex;
	// align-items: center;
	// justify-content: center;
	image {
		width: 36upx;
		height: 36upx;
		padding: 15upx 30upx;
	}
	text {
		width: 600px;
		height: 38upx;
		font-size: 26upx;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(0, 0, 0, 1);
		line-height: 37upx;
	}
}
/* 分类 */
.cate-mask {
	position: fixed;
	left: 0;
	top: var(--window-top);
	bottom: 0;
	width: 100%;
	background: rgba(0, 0, 0, 0);
	z-index: 95;
	transition: 0.3s;

	.cate-content {
		width: 500upx;
		height: 100%;
		background: #fff;
		float: left;
		transform: translateX(-50%);
		transition: 0.3s;
		.cateList {
			padding-top: 80upx;
			padding-left: 60upx;
			.more {
				height: 70upx;
				font-size: 25px;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				color: rgba(0, 0, 0, 1);
				line-height: 70upx;
				padding-bottom: 60upx;
			}
			.guidelines {
				display: flex;
				padding-bottom: 60upx;
				image {
					width: 50upx;
					height: 50upx;
					padding-top: 6upx;
				}
				text {
					padding-left: 30upx;
					padding-top: 4upx;
					font-size: 18px;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(0, 0, 0, 1);
				}
			}
		}
	}
	&.none {
		display: none;
	}
	&.show {
		background: rgba(0, 0, 0, 0.4);

		.cate-content {
			transform: translateX(0);
		}
	}
}
/* 场次 */
.screening {
	padding: 30upx 30upx;
	.primary {
		height: 200upx;
		display: flex;
		.left {
			flex: 1
		}
		.right {
			width: 272upx;
			display: flex;
			flex-direction: column;
			align-items: center;
			text {
				width: 150upx;
				height: 70upx;
				font-size: 24px;
				font-family: PingFangSC-Semibold;
				font-weight: 600;
				color: rgba(255, 255, 255, 1);
				margin-top: 30upx;
				// margin-left: 32upx;
			}
			button {
				width: 134upx;
				height: 53upx;
				background: rgba(255, 255, 255, 1);
				border-radius: 53upx;
				// text-align: center;
				// line-height: 53upx;
				color: #1895e6;
				margin-top: 20upx;
				display: flex;
				align-items: center;
				justify-content: space-around;
				    padding-left: 6px;
			        padding-right: 6px;
				image{
					// padding-left: 20upx;
					width:20upx;
			        height:30upx;
				}
				.cell-more {
					align-self: baseline;
					font-size: 10upx;
					color: #1895e6;
				}
			}
		}
	}
	.intermediate {
		// width: 690upx;
		height: 200upx;
		display: flex;
		margin: 50upx 0upx;
		.left {
			flex: 1
		}
		.right {
			width: 272upx;
			display: flex;
			flex-direction: column;
			align-items: center;
			text {
				width: 150upx;
				height: 70upx;
				font-size: 24px;
				font-family: PingFangSC-Semibold;
				font-weight: 600;
				color: rgba(255, 255, 255, 1);
				margin-top: 30upx;
				// margin-left: 32upx;
			}
			button {
				width: 134upx;
				height: 53upx;
				background: rgba(255, 255, 255, 1);
				border-radius: 53upx;
				// text-align: center;
				// line-height: 53upx;
				color:rgba(253,131,76,1);
				margin-top: 20upx;
				display: flex;
				align-items: center;
				justify-content: space-around;
				    padding-left: 6px;
                    padding-right: 6px;
				image{
					// padding-left: 20upx;
					width:20upx;
                    height:30upx;
				}
				.cell-more {
					align-self: baseline;
					font-size: 10upx;
					color: #1895e6;
				}
			}
		}
	}
	.advanced {
		// width: 690upx;
		height: 200upx;
		display: flex;
		.left {
			flex: 1
		}
		.right {
			width: 272upx;
			display: flex;
			flex-direction: column;
			align-items: center;
			text {
				width: 150upx;
				height: 70upx;
				font-size: 24px;
				font-family: PingFangSC-Semibold;
				font-weight: 600;
				color: rgba(255, 255, 255, 1);
				margin-top: 30upx;
				// margin-left: 32upx;
			}
			button {
				width: 134upx;
				height: 53upx;
				background: rgba(255, 255, 255, 1);
				border-radius: 53upx;
				// text-align: center;
				// line-height: 53upx;
				color:rgba(112,85,230,1);
				margin-top: 20upx;
				display: flex;
				align-items: center;
				justify-content: space-around;
				    padding-left: 6px;
			        padding-right: 6px;
				image{
					// padding-left: 20upx;
					width:20upx;
			        height:30upx;
				}
				.cell-more {
					align-self: baseline;
					font-size: 10upx;
					color: #1895e6;
				}
			}
		}
	}
}
</style>
