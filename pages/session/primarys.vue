<template>
	<view class="content">
		<view class="navbar">
			<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }" @click="tabClick(index)">{{ item.text }}</view>
		</view>
		<view class="navbar-space"></view>
		<swiper :current="tabCurrentIndex" class="swiper-box" duration="300" @change="changeTab">
			<swiper-item class="tab-content" v-for="(item,index) in navList" :key="index">
				<scroll-view class="list-scroll-content" scroll-y @scrolltolower="loadData" lower-threshold="50">
					<view class="list-line"></view>
					<block v-if="item.loaded">
						<block v-if="(item.orderList.length === 0)&&(item.currentPageIndex == 1)">
							<!-- 限时抢购 -->
							<view class="record">暂无场次数据...</view>
						</block>
						<block v-else>
							<!-- 限时抢购 -->
							<view class="purchase" :class="{stop:!isSale}">
								<view class="left"><image src="../../static/img/header/pic-xianshiqiangou-n%20copy.png"></image></view>
								<view class="right" v-if="item.orderList.length > 0">
									<span class="stopSales" v-if="!isSale">{{isSaleMsg}}</span>
									<span class="open">{{item.topTipsStr}}</span>
									<view v-if="item.status < 2" class="doentime"><uni-countdown :show-day="false" :hour="item.endTime[0]" :minute="item.endTime[1]" :second="item.endTime[2]" background-color="#4A4A4A"  color="#FFFFFF" @timeup="timeup(item,index)" ></uni-countdown></view>
								</view>
							</view>
							
							<!-- 商品开始 -->
							<view  @tap="toDetail(item.status,item1.periodId)" v-for="(item1,index1) in navList[tabCurrentIndex].orderList" :key="item1.periodId" class="shopList">
								<view class="left">
									<view class="first"><image :src="(index1 < 3?'../../static/img/header/pic-no'+ (index1 + 1) +'.png':'')"></image></view>
									<view class="first-button"><image :src="item1.img"></image></view>
								</view>
								<view class="right">
									<view class="right-name">{{item1.title}}</view>
									<view class="right-pic">
										<text class="dangqian">当前均价</text>
										<view class="money"><view class="icon-m">¥</view>{{item1.lastAvgPrice}}</view>
									</view>
									<view class="right-chujia">
										{{item1.biddingTimes?item1.biddingTimes:0}}
										<text class="ci">次出价</text>
									</view>
									<view class="liji">
										<button v-if="item.status==1" type="primary"  hover-class="navigator-hover" style="background-color: rgba(255,88,71,1)">立即抢购</button>
										<button v-else-if="item.status > 1" type="primary" @tap.stop="getNexQi(item,index)"  hover-class="navigator-hover">抢购下期</button>
									</view>
								</view>
							</view>
							<!-- 商品结束 -->
							<!-- 底部加载更多 -->
							<uni-load-more v-show="item.orderList.length > 5" :status="item.loadingType" style="margin-bottom: 20upx;"></uni-load-more>
						</block>
					</block>
					<!-- 正在加载中 -->
					<uni-load-more v-else :status="item.loadingType" style="margin-top: 20upx;"></uni-load-more>
				</scroll-view>
			</swiper-item>
			
		</swiper>
	</view>
	
	
</template>

<script>
import uniLoadMore from '../../components/uni-load-more/uni-load-more.vue';
import uniCountdown from '../../components/uni-countdown/uni-countdown.vue';
var tempSeverNavList = [];
export default {
	components: { uniLoadMore,uniCountdown },
	data() {
		return {
			currentTime:'',
			isFirstLoad:true,
			tabCurrentIndex: 0,
			pageSize:10,
			isSceneDataLoad:false,
			isSale:'',//是否在售
			isSaleMsg:'',//停售消息
			navList: [{
					currentPageIndex: 1,
					text: '初级场',
					sceneid:9,
					status:0, //倒计时状态
					topTipsStr:'',
					startTime:[0,0,0],
					endTime:[0,0,0],
					loadingType: 'more',
					orderList: [],
					tryCount:0
				},
				{
					currentPageIndex: 1,
					text: '中级场',
					sceneid:10,
					status:0, //倒计时状态
					topTipsStr:'',
					startTime:[0,0,0],
					endTime:[0,0,0],
					loadingType: 'more',
					orderList: [],
					tryCount:0
				},
				{
					currentPageIndex: 1,
					text: '高级场',
					sceneid:11,
					status:0, //倒计时状态
					topTipsStr:'',
					startTime:[0,0,0],
					endTime:[0,0,0],
					loadingType: 'more',
					orderList: [],
					tryCount:0
				}]
		};
	},
	onLoad() {
		this.getSceneData();
	},
	onShow() {
		if(!this.isFirstLoad){
			let tempObj = {};
			tempObj = JSON.parse(JSON.stringify(tempSeverNavList));
			this.navList = tempObj;
			setTimeout(()=>{
				this.loadData('tabChange');
			},200);
		}
	},
	methods: {
		navBack() {
			uni.switchTab({
				url: '/pages/index/index'
			});
		},
		tabClick(index) {
			this.tabCurrentIndex = index;
		},
		async changeTab(e) {
			this.tabCurrentIndex = e.target.current;
			let index = this.tabCurrentIndex;
			let navItem = this.navList[index];
			navItem.currentPageIndex = 1;
			this.loadData('tabChange');
		},
		getSceneData(){
			if(this.isSceneDataLoad){
				return this.loadData();
			}
			this.$api.postAPI('scene/querySceneList',{"currentPage":1,"data":{},"pageSize":10}).then(res=>{
				if(res.data.code==0){
					let scenesList = res.data.data.data;
					let _data = [];
					if(scenesList&&scenesList.length > 0){
						for(let item of scenesList){
							_data.push({
								currentPageIndex: 1,
								text: item.name,
								sceneid:item.id,
								status:0, //倒计时状态
								topTipsStr:'',
								startTime:[0,0,0],
								endTime:[0,0,0],
								loadingType: 'more',
								orderList: [],
								tryCount: 0
							})
						}
						let tempObj = {};
						tempObj = JSON.parse(JSON.stringify(_data));
						tempSeverNavList = tempObj;
						this.navList = _data;
						this.isSceneDataLoad = true;
					}
					this.loadData();
				} else{
					uni.showToast({ title: res.data.msg, icon: 'none',duration:3000 });
				}
			}).catch(err=>{
				uni.hideLoading();
				return uni.showToast({ title: '网络繁忙，出错了', icon: 'none',duration:3000 });
			});
			
		},
		loadData(source) {
			//这里是将订单挂载到tab列表下
			let index = this.tabCurrentIndex;
			let navItem = this.navList[index];
		
			// if (source === 'tabChange' && navItem.loaded === true) {
			// 	//tab切换只有第一次需要加载数据
			// 	return;
			// }
			if ((source != 'tabChange')&&(navItem.loadingType === 'loading'||navItem.loadingType === 'noMore')) {
				//防止重复加载
				return;
			}
			navItem.loadingType = 'loading';
			this.getData(this.tabCurrentIndex,null,true);
		},
		getData(index,callback,isClear){
			index = index||0;
			let navItem = this.navList[index];
			let parms = {
				"currentPage": navItem.currentPageIndex,
				"data": {
					"executeStatus":1,
					"sceneId": navItem.sceneid
				},
				"pageSize": this.pageSize
			};
			this.$api.postAPI('period/queryPeriodList',parms).then(res=>{
				uni.hideLoading();
				this.$set(navItem, 'loaded', true);
				this.isFirstLoad = false;
				this.isSale = !res.data.rest;
				this.isSaleMsg = res.data.rest ? res.data.msg:'';
				if(res.data.code == 0){
					let _data = res.data.data.data;
					if(callback&&(!_data.length)){
						return callback();
					} else if(callback){
						navItem.orderList = [];
					}
					if(!_data.length){
						return;
					}
					if(isClear){
						navItem.orderList = [];
					}
					navItem.tryCount = 0; //获取到数据清空重试数
					if(navItem.orderList.length > 0){
						this.handlerData(navItem,res.data.timestamp,_data);
						navItem.orderList = navItem.orderList.concat(_data);
						if(data.length < this.pageSize){
							navItem.loadingType = 'noMore';
						} else{
							navItem.currentPageIndex++;
							navItem.loadingType = 'more';
						}
					} else{
						navItem.orderList = _data;
						this.handlerData(navItem,res.data.timestamp,_data);
						if(navItem.orderList.length < this.pageSize){
							navItem.loadingType = 'noMore';
						} else{
							navItem.currentPageIndex++;
							navItem.loadingType = 'more';
						}
					}
				} else {
					return uni.showToast({ title: res.data.msg, icon: 'none',duration:3000 });
				}
			}).catch(err=>{
				uni.hideLoading();
				return uni.showToast({ title: '网络错误', icon: 'none',duration:3000 });
			});
		},
		handlerData(navItem,timestamp,data){
			let currentTime = new Date(timestamp);
			let startTime = new Date(navItem.orderList[0].guessStartTime);
			let endTime = new Date(navItem.orderList[0].guessEndTime);
			let date1 = startTime.getTime() - currentTime.getTime();
			let date3 = endTime.getTime() - currentTime.getTime();  //时间差的毫秒数
			navItem.endTime = date3 > 0 ? this.getMSDate(date3):[0,0,0];
			if(date1 > 0){
				navItem.status = 0;//未开始
				navItem.topTipsStr = '距开始';
			} else if(date1<=0 && date3 > 0){
				navItem.status = 1; //进行中
				navItem.topTipsStr = '距结束';
			} else if(date3 <= 0){
				navItem.status = 2; //已结束
				navItem.topTipsStr = '已结束';
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
		timeup(item,index){ //倒计时结束
			console.log('-----换购 中心列表 time up请求----')
			if(item.loaded){
				item.status = 2;
				item.topTipsStr = '获取期号中...';
				item.currentPageIndex = 1;
				setTimeout(()=>{
					this.setGetData(item,index);
				},1000);
			}
		},
		setGetData(item,index){
			//尝试30次获取期号数据,每隔5s请求一次
			let timerSpan = item.tryCount > 30 ? 5000:2000;
			//100次停止请求
			if(item.tryCount > 100) return;
			this.getData(index,()=>{
				setTimeout(()=>{
					this.setGetData(item,index);
				},timerSpan)
			});
			item.tryCount++;
		},
		getNexQi(item,index){//抢购下一期
			if(!this.isSale){
				return uni.showToast({ title: '凌晨02:00-07:00停售，请休息会再来', icon: 'none',duration:3000 }); 
			}
			this.timeup(item,index);
		},
		toDetail(status,periodId){//点击按钮事件
			if(status == 1){
				uni.navigateTo({
					url:`/pages/product/detail?periodId=${periodId}`
				})
			}
		}
	}
};
</script>
<style lang="scss">
view {
	background-size: cover !important;
}

page,
.content {
	height: 100%;
}
.swiper-box {
	height: calc(100% - 90upx);
	background: rgba(245, 245, 245, 1);
}
.list-scroll-content {
	height: 100%;
}
.navbar {
	position: fixed;
	display: flex;
	width: 100%;
	height: 80upx;
	padding: 0 5px;
	background: #fff;
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.06);
	/* #ifdef APP-PLUS */
	margin-top: 40upx;
	/* #endif */
	z-index: 10;
	.nav-item {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		font-size: 28upx;
		color: rgba(155, 155, 155, 1);
		position: relative;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		&.current {
			font-size: 28upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			color: rgba(0, 0, 0, 1);
			&:after {
				content: '';
				position: absolute;
				left: 50%;
				bottom: 0;
				transform: translateX(-50%);
				width: 100upx;
				height: 0;
				border-bottom: 2px solid #ff5847;
			}
		}
	}
}
.navbar-space{
	height: 80upx;
	background: #fff;
}
.uni-swiper-item {
	height: auto;
}

div,
page {
	background: rgba(245, 245, 245, 1);
}
swiper {
	box-sizing: border-box;
}
.swiper {
	height: 14000upx;
}

.text-orange {
	color: #f37b1d;
}
.text-black {
	color: #333333;
}

.padding {
	padding: 20upx 0 30upx 0;
}

.margin-top {
	margin-top: 30upx;
}
.text-center {
	text-align: center;
}
.record{
	text-align: center;
	margin: 100upx 0;
}
.purchase {
	position: fixed;
	width: 100%;
	height: 98upx;
	background: rgba(255, 255, 255, 1);
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	z-index: 10;
	top:0;
	left: 0;
	/* #ifdef APP-PLUS */
	margin-top: 40upx;
	/* #endif */
	&:before{
		content: ' ';
		width: 100%;
		height: 20upx;
		background-color: #f5f5f5;
	}
	.left {
		width: 256upx;
		height: 80upx;
		image {
			width: 100%;
			height: 100%;
		}
	}
	&.stop{
		justify-content: space-around;
		 .left{
			display: none;
		}
	}
	.right {
		display: flex;
		padding: 0upx 30upx;
		.stopSales{
			color: #D0021B;
			font-size:24upx;
			border:1upx solid #D0021B;
			flex: 1;
			height: 36upx;
			line-height: 36upx;
			margin-right: 80upx;
			padding: 2upx 10upx;
			margin-top: 16upx;
		}
		.open {
			min-width: 90upx;
			height: 42upx;
			padding: 21upx 23upx 19upx 0upx;
			font-weight: bold;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.doentime {
			padding: 15upx 0upx;
			span {
				margin-right: 6upx;
			}
			span:not(:nth-child(2n)) {
				display: inline-block;
				width: 40upx;
				height: 40upx;
				line-height: 40upx;
				text-align: center;
				background: rgba(74, 74, 74, 1);
				color: rgba(255, 255, 255, 1);
				border-radius: 10upx;
			}
		}
	}
}
.list-line{
	height: 100upx;
	/* #ifdef APP-PLUS */
	height: 140upx;
	/* #endif */
}
/* 商品列表 */
.shopList {
	// width:690upx;
	height: 320upx;
	background: rgba(255, 255, 255, 1);
	border-radius: 20upx;
	margin: 30upx 30upx;
	display: flex;
	&:first-child{
		margin-top: 100upx;
	}
	.left {
		padding-right: 10px;
		width: 210upx;
		.first {
			width: 80upx;
			height: 80upx;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.first-button {
			width: 180upx;
			height: 180upx;
			padding: 0upx 10upx 70upx 30upx;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
	.right {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 30upx 0upx;
		padding-right: 30upx;
		.right-name {
			width: 440upx;
			font-size: 30upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			color: rgba(74, 74, 74, 1);
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		.right-pic {
			.dangqian {
				font-size: 26upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(74, 74, 74, 1);
				padding-right: 20upx;
			}
			.money {
				display: inline-block;
				font-size: 36upx;
				font-family: PingFangSC-Medium;
				font-weight: 600;
				color: rgba(255, 159, 0, 1);
			}
			.icon-m{
				display: inline-block;
				font-size: 28upx;
				margin-right: 2upx;
			}
		}
		.right-chujia {
			font-size: 26upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(255, 88, 71, 1);
			.ci {
				color: #4a4a4a;
				margin-left: 2upx;
			}
		}
		.liji {
			button {
				margin-left: 240upx;
				width: 200upx;
				height: 80upx;
				background: rgba(74, 144, 226, 1);
				border-radius: 20upx;
				font-size: 32upx;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				color: rgba(255, 255, 255, 1);
				line-height: 80upx;
			}
		}
	}
}
</style>
