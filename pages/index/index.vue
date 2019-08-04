<template>
	<view style="background:rgba(245,245,245,1);">
		<!-- 首页轮播图 -->
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item class="swiper-item" @click="recharge">
							<view class="swiper-item uni-bg-red"><image src="../../static/img/header/chongzhi.png"></image></view>
						</swiper-item>
						<swiper-item class="swiper-item" @click="register">
							<view class="swiper-item uni-bg-red"><image src="../../static/img/header/zhuce.png"></image></view>
						</swiper-item>
						<swiper-item class="swiper-item" @click="sign">
							<view class="swiper-item uni-bg-red"><image src="../../static/img/header/qiandao.png"></image></view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<!-- 喜报 -->
		<!-- <view class="like-message"><semp-notice-bar showType='scrollLeft' :arrayText="topNotice" rows="true"></semp-notice-bar>
		</view> -->
		<view class="top-activty">
			<text class="ac">签到\n得金豆</text>
			<text class="ac">充100\n得200</text>
			<text class="ac">不中\n全返</text>
			<text class="ac">幸运\n转盘</text>
		</view>
		<!-- 推广 -->
		<view class="apply-member">
			<view class="apply-member-wrap">
				<view class="left">
					<image src="../../static/img/user/icon-member.png"></image>
					<view>成为推广专员最高享<text>10%</text></view>
				</view>
				<view>立即申请<view class="arrow-r"></view></view>
			</view>
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
		<view class="hot-info">
			<view class="title">猜啊你喜欢-立即抢购</view>
			<view class="list-wrap">
				<view v-if="isFirstLoad&&(productList.length == 0)" class="list-loading">正在加载中...</view>
				<view v-else @tap="toDetail(item)" class="p-item" v-for="item in productList" :key="item.periodId">
					<image class="p-status" src="../../static/img/temp/index-p-icon.png"></image>
					<image class="pic" :src="item.img"></image>
					<view class="content-wrap">
						<view class="name">{{item.title}}</view>
						<view class="price">当前均价<text><text class="icon-yuan">¥</text>{{item.lastAvgPrice}}</text></view>
						<view class="count"><text>{{item.biddingTimes}}</text>次出价</view>
					</view>
					<view class="time" style="display: none;">
						<uni-countdown v-if="item.isRefreshTime" v-show="false"  :show-day="false" :hour="item.endTime[0]" :minute="item.endTime[1]" :second="item.endTime[2]" background-color="#4A4A4A"  color="#FFFFFF" @timeup="timeup(item)" ></uni-countdown>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
// import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue';
import uniLoadMore from '../../components/uni-load-more/uni-load-more.vue';
// import uniNoticeBar from '../../components/uni-notice-bar/uni-notice-bar.vue';
import uniCountdown from '../../components/uni-countdown/uni-countdown.vue';
// 滚动广告
// import sempNoticeBar from '../../components/semp-notice-bar/semp-notice-bar.vue';
export default {
	components: { uniCountdown },
	data() {
		return {
			afterHeaderOpacity: 1, //不透明度
			headerPosition: 'fixed',
			headerTop: null,
			statusTop: null,
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
			scenesList:[],//场景数据
			topNotice:[],//公告
			productList:[],
			timeList:[],
			isFirstLoad:true //
		};
	},
	onLoad: function() {
		this.getScenesData();
		//this.getTopNotice();
		this.getData();
	},
	onShow() {
		if(!this.isFirstLoad){
			this.getData();
		}
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
		recharge() {
			// console.log(1235)
			uni.navigateTo({
				url: '../set/double'
			});
		},
		register() {
			uni.navigateTo({
				url: '../set/send'
			});
		},
		sign() {
			uni.navigateTo({
				url: '../set/sign'
			});
		},
		async getScenesData(){
			let params = {
				"currentPage": 1,
				"data": {},
				"pageSize": 10
			}
			let res = await this.$api.postAPI('scene/querySceneList',params);
			if(res.data.code==0){
				this.scenesList = res.data.data.data;
			} else{
				uni.showToast({ title: res.data.msg, icon: 'none',duration:3000 });
			}
		},
		getTopNotice() {//获取顶部公告
			this.$api.postAPI('period/queryWinInfoLunbo').then(res=>{
				uni.hideLoading();
				if(res.data.code == 0){
					let data = res.data.data;
					let adNotice = [];
					for (let s of data) {
						adNotice.push(`喜报：恭喜${s.nickName}玩家，猜中猜猜豆得${s.price||0 }金豆！`);
					}
					this.topNotice = adNotice;
				} else {
					return uni.showToast({ title: res.data.msg, icon: 'none',duration:3000 });
				}
			}).catch(err=>{
				uni.hideLoading();
				return uni.showToast({ title: '网络错误', icon: 'none',duration:3000 });
			})
		},
		getData(){
			let parms = {
				"currentPage": 1,
				"data": {
					"executeStatus":1,
					"isRecommend":1
				},
				"pageSize": 20
			};
			this.$api.postAPI('period/queryPeriodList',parms).then(res=>{
				this.isFirstLoad = false;
				if(res.data.code == 0){
					this.productList = res.data.data.data;
					this.handlerData(this.productList,res.data.timestamp);
				} else {
					return uni.showToast({ title: res.data.msg, icon: 'none',duration:3000 });
				}
			}).catch(err=>{
				uni.hideLoading();
				return uni.showToast({ title: '网络错误', icon: 'none',duration:3000 });
			});
		},
		handlerData(list,timestamp){
			let currentTime = new Date(timestamp);
			for (let item of list) {
				let endTime = new Date(item.guessEndTime);
				let date3 = endTime.getTime() - currentTime.getTime();  //时间差的毫秒数
				this.$set(item,'isRefreshTime',false);
				this.$nextTick(()=>{
					item.endTime = date3 > 0 ? this.getMSDate(date3):[0,0,0];
					item.isRefreshTime = true;
					this.$set(item,'isRefreshTime',true);
				})
			}
		},
		getMSDate(date3){
			//计算出相差天数
			var days=Math.floor(date3/(24*3600*1000))
			//计算出小时数
			var leave1=date3%(24*3600*1000)    //计算天数后剩余的毫秒数
			var hours=Math.floor(leave1/(3600*1000))
			//计算相差分钟数
			var leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数
			var minutes=Math.floor(leave2/(60*1000))
			//计算相差秒数
			var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
			var seconds=Math.round(leave3/1000)
			return [hours,minutes,seconds];
		},
		toDetail(item){
			uni.navigateTo({
				url:`/pages/product/detail?periodId=${item.periodId}`
			})
		},
		timeup(item){//结束
			if(!this.isFirstLoad){
				if(this.timeList.findIndex((tt)=>{return tt == item.guessEndTime})==-1){
					this.timeList.push(item.guessEndTime)
					setTimeout(()=>{
						this.getData();
					},1000)
				}
			}
		}
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
page {
	background: rgba(245, 245, 245, 1);
}
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
	height: 0;
	position: fixed;
	z-index: 10;
	background-color: #fff;
	padding-top: 44px;
	top: 0;
	/*  #ifdef  APP-PLUS  */
	height: var(--status-bar-height); //覆盖样式
	/*  #endif  */
}
.header {
	width: 92%;
	padding: 0 4%;
	height: 88upx;
	display: flex;
	align-items: center;
	position: fixed;
	top: 0;
	z-index: 10;
	background-color: #fff;

	/*  #ifdef  APP-PLUS  */
	top: var(--status-bar-height);
	/*  #endif  */

	.addr {
		width: 120upx;
		height: 60upx;
		flex-shrink: 0;
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
				color: rgba(0, 0, 0, 1);
			}
		}
	}
	.icon-btn {
		width: 120upx;
		height: 60upx;
		flex-shrink: 0;
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
/* 轮播图样式 */
.swiper {
	// margin-top: 88upx;
	width: 100%;
	height: 260upx;
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
	// display: flex;
	// align-items: center;
	// justify-content: space-between;
	image {
		width: 36upx;
		height: 36upx;
		padding: 15upx 30upx;
	}
}
/*活动*/
.top-activty{
	display: flex;
	justify-content: space-between;
	margin: 30upx;
	.ac{
		display: flex;
		width: 150upx;
		height: 100upx;
		border-radius:10upx;
		color: #fff;
		line-height: 30upx;
		align-items: center;
		justify-content: center;
		text-align: center;
		&:nth-child(1){
			background:linear-gradient(137deg,rgba(254,181,0,1) 0%,rgba(250,155,17,1) 100%);
		}
		&:nth-child(2){
			background:linear-gradient(137deg,rgba(118,181,253,1) 0%,rgba(67,151,248,1) 100%);
		}
		&:nth-child(3){
			background:linear-gradient(136deg,rgba(251,152,152,1) 0%,rgba(245,95,95,1) 100%);
		}
		&:nth-child(4){
			background:linear-gradient(136deg,rgba(255,166,109,1) 0%,rgba(253,109,59,1) 100%);
		}
	}
}
/*推广*/
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
		// margin-top: 80upx;
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
/* 热门 */
.hot-info{
	margin: 30upx;
	.title{
		color: #4A4A4A;
		height:48upx;
		line-height:48upx;
		font-size:34upx;
		font-family:PingFangSC-Medium;
	}
	.list-wrap{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.list-loading{
		width: 100%;
		height: 200upx;
		line-height: 200upx;
		text-align: center;
	}
	.p-item{
		position: relative;
		width:335upx;
		height:432upx;
		background:#fff;
		border-radius:20upx;
		margin-top: 30upx;
		.pic{
			display: flex;
			width: 180upx;
			height: 180upx;
			margin: 30upx auto 20upx;
		}
		.p-status{
			position: absolute;
			top:0;
			right:0;
			width: 117upx;
			height: 46upx;
			z-index: 9;
		}
		.content-wrap{
			padding: 0 20upx 30upx;
		}
		.name{
			width:100%;
			font-size: 26upx;
			height: 74upx;
			line-height: 36upx;
			overflow: hidden;
		}
		.price{
			font-size: 24upx;
			text{
				color: #FF9F00;
				font-size: 34upx;
				font-weight: bold;
			}
			.icon-yuan{
				margin-left: 18upx;
				margin-right: 2upx;
				font-size: 24upx;
			}
		}
		.count{
			font-size: 22upx;
			text{
				color: #FF5847;
				margin-right: 2upx;
			}
		}
	}
}
</style>
