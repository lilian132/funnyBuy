<template>
	<view class="content">
		<view class="navbar">
			<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }" @click="tabClick(index)">{{ item.text }}</view>
		</view>
		<swiper :current="tabCurrentIndex" class="swiper-box" duration="300" @change="changeTab">
			<swiper-item class="tab-content" v-for="(item,index) in navList" :key="index">
				<scroll-view class="list-scroll-content" scroll-y @scrolltolower="loadData" lower-threshold="50">
					<block v-if="item.loaded">
						<block v-if="item.orderList.length === 0">
							<!-- 限时抢购 -->
							<view class="record"><image src="../../static/img/error/pic-zanwujilu-n.png"></image></view>
							<!-- 商品 开始-->
							<view class="queren"><button type="primary" @click="btn">立即抢购</button></view>
						</block>
						<block v-else>
							<view @tap="toDetail(item1)" class="purchase" v-for="item1 in item.orderList" :key="item1.periodId">
								<view class="purchase-top">
									<view class="purchase-left">
										<view class="top">
											<image v-if="item1.executeStatus==1" src="../../static/img/footer/pic-qianggouzhong.png"></image>
											<image v-else-if="item1.executeStatus==2" src="../../static/img/footer/pic-daiqueren.png"></image>
											<image v-else src="../../static/img/footer/pic-over.png"></image>
										</view>
										<view class="button"><image :src="item1.img"></image></view>
									</view>
									<view class="purchase-right">
										<view class="over">
											<block v-if="(item1.executeStatus>=1)&&(item1.executeStatus<=2)">
												<text style="margin-right: 4upx;">{{item1.tips}}</text>
												<uni-countdown v-if="item1.isRefreshTime" :show-day="false" :hour="item1.countdownTime[0]" :minute="item1.countdownTime[1]" :second="item1.countdownTime[2]" color="#4A4A4A" border-color="#ffffff" @timeup="timeup(item1)"></uni-countdown>
											</block>
											<block v-else>
												<text>{{item1.isWin === '1'?'已抢中':'未抢中'}}</text>
											</block>
										</view>
										<view class="tyrant"><text>{{item1.title}}</text></view>
										<view class="pice">
											<text class="pic1">{{item1.executeStatus>2?'最终均价':'当前均价'}}</text>
											<text class="pic2">¥</text>
											<text class="pic3">{{item1.lastAvgPrice}}</text>
										</view>
										<view class="bid">
											<text class="bid-up">
												已出价
												<text class="bid-ci">{{item1.biddingTimes || 0}}</text>
												次
											</text>
										</view>
									</view>
								</view>
								<view class="purchase-bottom">
									<view class="left">{{item1.guessStartTime|covertDate}}</view>
									<view class="right">
										<block v-if="item1.executeStatus==1">
											<button @tap.stop="toDetail(item1)"  type="primary" style="background-color: #ff5847;">出价抢购</button>
										</block>
										<block v-else>
											<button @tap.stop="toNextQi(item1)" type="primary" style="background-color: #4a90e2;">抢购下期</button>
										</block>
									</view>
								</view>
							</view>
							<!-- 底部加载更多 -->
							<uni-load-more :status="item.loadingType" style="margin-bottom: 20upx;"></uni-load-more>
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
export default {
	components: {
		uniLoadMore,
		uniCountdown
	},
	data() {
		return {
			tabCurrentIndex: 0,
			pageSize:10,
			navList: [
				{
					currentPageIndex: 1,
					text: '全部',
					loadingType: 'more',
					orderList: []
				},
				{
					currentPageIndex: 1,
					text: '抢购中',
					loadingType: 'more',
					orderList: []
				},
				{
					currentPageIndex: 1,
					text: '已抢中',
					loadingType: 'more',
					orderList: []
				},
				{
					currentPageIndex: 1,
					text: '未抢中',
					loadingType: 'more',
					orderList: []
				}
			]
		};
	},
	onLoad(options) {
		/**
		 * 修复app端点击除全部订单外的按钮进入时不加载数据的问题
		 * 替换onLoad下代码即可
		 */
		this.tabCurrentIndex = +options.state;
		// #ifndef MP
		this.loadData();
		// #endif
		// #ifdef MP
		if (options.state == 0) {
			this.loadData();
		}
		// #endif
	},
	filters:{
		covertDate(value){
			return value?(new Date(value).Format('yyyy-MM-dd hh:mm:ss')):''
		}
	},
	methods: {
		btn() {
			uni.switchTab({
				url: '/pages/session/primarys'
			});
		},
		//获取订单列表
		loadData(source) {
			//这里是将订单挂载到tab列表下
			let index = this.tabCurrentIndex;
			let navItem = this.navList[index];

			if (source === 'tabChange' && navItem.loaded === true) {
				//tab切换只有第一次需要加载数据
				return;
			}
			if (navItem.loadingType === 'loading'||navItem.loadingType === 'noMore') {
				//防止重复加载
				return;
			}
			navItem.loadingType = 'loading';
			this.getData(this.tabCurrentIndex);
		},

		//swiper 切换
		async changeTab(e) {
			this.tabCurrentIndex = e.target.current;
			this.loadData('tabChange');
		},
		//顶部tab点击
		tabClick(index) {
			this.tabCurrentIndex = index;
		},
		getData(index){
			index = index||0;
			let navItem = this.navList[index];
			let params = {
				"currentPage": navItem.currentPageIndex,
				"data": {},
				"pageSize": this.pageSize
			};
			if(index > 0){
				params.data.status = index;
			}
			this.$api.postAPI('guess/myGuessList',params).then(res=>{
				uni.hideLoading();
				this.$set(navItem, 'loaded', true);
				if(res.data.code == 0){
					if(navItem.orderList.length > 0){
						let data = this.handlerData(res.data.timestamp,res.data.data.data);
						navItem.orderList = navItem.orderList.concat(data);
						if(data.length < this.pageSize){
							navItem.loadingType = 'noMore';
						} else{
							navItem.currentPageIndex++;
							navItem.loadingType = 'more';
						}
					} else{
						navItem.orderList = this.handlerData(res.data.timestamp,res.data.data.data);
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
			})
		},
		handlerData(timestamp,data){
			let _data = [].concat(data);
			for(let item of _data){
				this.handlerTime(timestamp,item);
			}
			return _data;
		},
		handlerTime(timestamp,item){//处理事件
		
			let currentTime = new Date(timestamp ? timestamp : item.currentTime);
			
			timestamp&&(item.currentTime = timestamp);
			if(item.executeStatus == 1){
				let endTime = new Date(item.guessEndTime);
				let date2 = endTime.getTime() - currentTime.getTime();
				item.tips = '距结束';
				item.isRefreshTime = false;
				this.$nextTick(()=>{
					item.isRefreshTime = true;
					item.countdownTime = date2 > 0 ? this.getMSDate(date2):[0,0,0];
				})
			} else if(item.executeStatus == 2){
				let lotteryTime = new Date(item.lotteryTime);
				let endTime = new Date(item.guessEndTime);
				let date2 = endTime.getTime() - currentTime.getTime();
				currentTime = currentTime.getTime() + date2 + 1000;//起始时间 + 已经倒计时完的时间 + 1s
				let date3 = lotteryTime.getTime() - currentTime;
				item.tips = '结果确认中';
				item.isRefreshTime = false;
				this.$nextTick(()=>{
					item.isRefreshTime = true;
					item.countdownTime = date3 > 0 ? this.getMSDate(date3):[0,0,0];
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
		timeup(item){
			if(item.executeStatus == 1){
				item.tips ='获取中...';
				item.isRefreshTime = false;
				setTimeout(()=>{
					item.executeStatus = 2;
					this.handlerTime(null,item);
				},1000);
			} else if(item.executeStatus == 2){
				//清空重置数据，刷新
				item.executeStatus = 3;
				item.tips ='获取中...';
				item.isRefreshTime = false;
				setTimeout(()=>{
					this.navList = [
						{
							currentPageIndex: 1,
							text: '全部',
							loadingType: 'more',
							orderList: []
						},
						{
							currentPageIndex: 1,
							text: '抢购中',
							loadingType: 'more',
							orderList: []
						},
						{
							currentPageIndex: 1,
							text: '已抢中',
							loadingType: 'more',
							orderList: []
						},
						{
							currentPageIndex: 1,
							text: '未抢中',
							loadingType: 'more',
							orderList: []
						}
					]
					this.loadData('tabChange');
				},3000)
			}
		},
		toDetail(item){
			uni.navigateTo({
				url:`/pages/product/detail?periodId=${item.periodId}`
			})
		},
		toNextQi(item){//抢购下一期
			this.$api.postAPI('period/nextNewPeroid',{'id':item.periodId}).then(res=>{
				uni.hideLoading();
				if(res.data.code == 0){
					uni.navigateTo({
						url:`/pages/product/detail?periodId=${res.data.data.id}`
					});
				} else {
					return uni.showToast({ title: res.data.msg, icon: 'none',duration:3000 });
				}
			}).catch(err=>{
				uni.hideLoading();
				return uni.showToast({ title: '网络错误', icon: 'none',duration:3000 });
			})
		}
	}
};
</script>

<style lang="scss">
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
	display: flex;
	height: 90upx;
	padding: 0 5px;
	background: #fff;
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.06);
	position: relative;
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
.uni-swiper-item {
	height: auto;
}
/*商品列表  */
.purchase {
	display: flex;
	flex-direction: column;
	height: 351upx;
	background: rgba(255, 255, 255, 1);
	border-radius: 20upx;
	margin: 30upx 30upx;
	.purchase-top {
		height: 214upx;
		display: flex;
		.purchase-left {
			.top {
				border-radius: 20upx;
				width: 117upx;
				height: 46upx;
				image {
					border-radius: 20upx;
					width: 100%;
					height: 100%;
				}
			}
			.button {
				width: 180upx;
				height: 180upx;
				padding: 30upx 7upx 00upx 30upx;
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
		.purchase-right {
			flex: 1;
			.over {
				padding: 30upx 30upx 0upx 188upx;
				text-align: right;
				text {
					font-size: 24upx;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					color: rgba(74, 74, 74, 1);
				}
				/deep/ .uni-countdown__number,.uni-countdown__splitor{
					font-size: 24upx;
					margin: 0;
					padding: 0;
					border: none;
				}
			}
			.tyrant {
				width: 450upx;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				text {
					font-size: 30upx;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					color: rgba(74, 74, 74, 1);
				}
			}
			.pice {
				margin: 5upx 0upx;
				.pic1 {
					font-size: 26upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(74, 74, 74, 1);
					margin-right: 20upx;
				}
				.pic2 {
					font-size: 28upx;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					color: rgba(255, 159, 0, 1);
				}
				.pic3 {
					font-size: 36upx;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					color: rgba(255, 159, 0, 1);
				}
			}
			.bid {
				font-size: 26upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				.bid-up {
					color: #4a4a4a;
				}
				.bid-ci {
					color: #ff5847;
				}
			}
		}
	}
	.purchase-bottom {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 30upx;
		.left {
			margin-top: 25upx;
			font-size: 26upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(74, 74, 74, 1);
		}
		.right {
			width: 240upx;
		}
	}
}
.record {
	margin: 267upx 230upx 97upx 230upx;
	image {
		width: 290upx;
		height: 250upx;
	}
}
.queren {
	height: 80upx;
	button {
		width: 360upx;
		background: rgba(255, 88, 71, 1);
		font-size: 32upx;
		font-family: PingFangSC-Medium;
		font-weight: 500;
	}
}
</style>
