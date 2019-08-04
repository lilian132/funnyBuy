<template>
	<view class="content">
		<view class="navbar">
			<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }" @click="tabClick(index)">{{ item.text }}</view>
		</view>
		<swiper :current="tabCurrentIndex" class="swiper-box" duration="300" @change="changeTab">
			<swiper-item class="tab-content" v-for="(item1,index) in navList" :key="index">
				<scroll-view class="list-scroll-content" scroll-y @scrolltolower="loadData" lower-threshold="50">
					<block v-if="item1.loaded">
						<block v-if="item1.orderList.length === 0">
							<!-- 限时抢购 -->
							<view class="record"><image src="../../static/img/error/pic-zanwujilu-n.png"></image></view>
							<!-- 商品 开始-->
							<view class="queren"><button type="primary" @click="btn">立即抢购</button></view>
						</block>
						<block v-else>
							<view  @tap="toSure(item)" class="purchase" v-for="item in item1.orderList" :key="item.periodId">
								<view class="purchase-top">
									<view class="purchase-left">
										<view class="top">
											<image v-if="item.status==0" src="../../static/img/error/pic-daiqueren.png"></image>
											<image v-else-if="item.status==1||item.status==2" src="../../static/img/error/pic-sh.png"></image>
											<image v-else src="../../static/img/error/pic-end.png"></image>
											</view>
										<view class="button"><image :src="item.img"></image></view>
									</view>
									<view class="purchase-right">
										<view class="tyrant"><text>{{item.title}}</text></view>
										<view class="pice">
											<text class="pic1">市场价</text>
											<text class="pic2">¥</text>
											<text class="pic3">{{item.priceSell}}</text>
										</view>
									</view>
								</view>
								<view class="purchase-bottom">
									<view class="left">{{item.guessStartTime}}</view>
									<view class="right" v-if="item.status == '0' || item.status == '1'|| item.status == '2'">
										<button type="primary" style="background-color: rgba(255,88,71,1)">{{item.status == '0' ?'去确认':'确认收货'}}</button>
									</view>
								</view>
							</view>
							<!-- 底部加载更多 -->
							<uni-load-more :status="item1.loadingType" style="margin-bottom: 20upx;"></uni-load-more>
						</block>
					</block>
					<!-- 正在加载中 -->
					<uni-load-more v-else :status="item1.loadingType" style="margin-top: 20upx;"></uni-load-more>
				</scroll-view>
			</swiper-item>
			</swiper>
			<view class="mask_layer"></view>
			<view ref="masklayer" @tap="hidePop" class="mask_layer" :class="{show:showPay}"></view>
			<view class="msg_pop" :class="{show:showPay}">
				<view class="pop_bd">是否确认收货？</view>
				<view class="pop_ft">
					<view @tap="btnCancle" class="btn_cancle">取消</view>
					<view @tap="btnSureOK" class="btn_ok">确认</view>
				</view>
			</view>
	</view>
</template>

<script>
import uniLoadMore from '../../components/uni-load-more/uni-load-more.vue';
export default {
	components: {
		uniLoadMore
	},
	data() {
		return {
			isFirstLoad:true,
			tabCurrentIndex: 0,
			pageSize:10,
			showPay:false,
			tempOpItem:{},
			navList: [
				{
					currentPageIndex: 1,
					text: '全部',
					loadingType: 'more',
					orderList: []
				},
				{
					currentPageIndex: 1,
					text: '待确认',
					loadingType: 'more',
					orderList: []
				},
				{
					currentPageIndex: 1,
					text: '待收货',
					loadingType: 'more',
					orderList: []
				},
				{
					currentPageIndex: 1,
					text: '已完成',
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
	onShow() {
		if(!this.isFirstLoad){
			this.refreshData();
		}
	},
	methods: {
		btn(){
			uni.redirectTo({
				url: '/pages/session/primarys'
			})
		},
		refreshData(){
			this.navList = [
				{
					currentPageIndex: 1,
					text: '全部',
					loadingType: 'more',
					orderList: []
				},
				{
					currentPageIndex: 1,
					text: '待确认',
					loadingType: 'more',
					orderList: []
				},
				{
					currentPageIndex: 1,
					text: '待收货',
					loadingType: 'more',
					orderList: []
				},
				{
					currentPageIndex: 1,
					text: '已完成',
					loadingType: 'more',
					orderList: []
				}
			]
			this.loadData('tabChange');
		},
		//确认收货
		toSure(item) {
			if(item.status == '0'){//确认订单
				uni.navigateTo({
					url: `/pages/order/affirm?periodId=${item.periodId}`
				});
			} else if(item.status != '3') {//确认收货
				this.toShowPop();
				this.tempOpItem = item;
			} else{
				uni.navigateTo({
					url: `/pages/product/detail?periodId=${item.periodId}`
				});
			}
		},
		btnSureOK(){
			let _this = this;
			_this.confirmReceipt(this.tempOpItem,()=>{
				this.hidePop();
				uni.showToast({ title: '操作成功', icon: 'none' });
				//刷新数据
				setTimeout(()=>{
					_this.refreshData();
				},1200)
			})
		},
		btnCancle(){
			this.hidePop();
		},
		//确认收货
		confirmReceipt(item,callback){
			let params = {
				"orderNo": item.orderNo,
				"periodId": item.periodNo
			};
			this.$api.postAPI('address/confirmReceipt',params).then(res=>{
				uni.hideLoading();
				if(res.data.code == 0){
					callback&&callback();
				} else {
					return uni.showToast({ title: res.data.msg, icon: 'none',duration:3000 });
				}
			}).catch(err=>{
				uni.hideLoading();
				return uni.showToast({ title: '网络错误', icon: 'none',duration:3000 });
			})
		},
		//获取订单列表
		loadData(source) {
			//这里是将订单挂载到tab列表下
			let index = this.tabCurrentIndex;
			let navItem = this.navList[index];
			let state = navItem.state;

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
		changeTab(e) {
			this.tabCurrentIndex = e.target.current;
			this.loadData('tabChange');
		},
		//顶部tab点击
		tabClick(index) {
			this.tabCurrentIndex = index;
			console.log(index);
		},
		getData(index){
			index = index|| 0;
			let navItem = this.navList[index];
			let params = {
				"currentPage": navItem.currentPageIndex,
				"data": {},
				"pageSize": this.pageSize
			};
			if(index > 0){
				params.data.status = index;
			}
			this.$api.postAPI('guess/myOrderList',params).then(res=>{
				uni.hideLoading();
				this.$set(navItem, 'loaded', true);
				this.isFirstLoad = false;
				if(res.data.code == 0){
					if(navItem.orderList.length > 0){
						let data = res.data.data.data;
						navItem.orderList = data;
						if(data.length < this.pageSize){
							navItem.loadingType = 'noMore';
						} else{
							navItem.currentPageIndex++;
							navItem.loadingType = 'more';
						}
					} else{
						navItem.orderList = res.data.data.data;
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
		hidePop(){
			this.showPay = !this.showPay;
			setTimeout(()=>{
				this.$refs.masklayer.$el.style.display = 'none';
			},200);
		},
		toShowPop(item){
			this.$refs.masklayer.$el.style.display = 'block';
			setTimeout(()=>{
				this.showPay = true;
			},100);
		}
	}
};
</script>

<style lang="scss">
page,
.content {
	height: 100%;
}
html /deep/ .uni-modal__bd{
	color: #4a4a4a;
	font-size: 30upx;
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
			display: flex;
			margin-top: 93upx;
			margin-left: 10upx;
			flex-direction: column;
			.over {
				padding: 30upx 30upx 0upx 244upx;
				text {
					font-size: 24upx;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					color: rgba(74, 74, 74, 1);
				}
			}
			.tyrant {
				width: 440upx;
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
				position: relative;
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
				&:after{
					content: ' ';
					position: absolute;
					width: 46%;
					top: 50%;
					left: 0;
					height: 1px;
					background-color: #D0021B;
					-webkit-transform: translateY(60%);
					-ms-transform: translateY(60%);
					transform: translateY(60%);
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
.mask_layer{
	position: fixed;
	width: 100%;
	height: 100%;
	left: 0;
	top:0;
	background-color: rgba(0,0,0,0.75);
	z-index: 10;
	opacity: 0;
	transition: opacity ease-in 0.35s;
	display: none;
	&.show{
		display: block;
		opacity: 1;
	}
}
.msg_pop * {
    box-sizing: border-box;
}
.msg_pop{
	position: fixed;
	width: 80%;
	max-width: 600upx;
	top:50%;
	left: 50%;
	transform: translate(-50%,-50%);
	background-color: #fff;
	text-align: center;
	border-radius: 6upx;
	overflow: hidden;
	transition: bottom ease-in 0.35s;
	z-index: 999;
	display: none;
	&.show{
		display: block;
	}
	.pop_bd{
		padding: 1.3em 1.6em 1.3em;
		min-height: 40px;
		font-size: 15px;
		line-height: 1.4;
		color: #4a4a4a;
		max-height: 400px;
		overflow-y: auto;
		word-wrap: break-word;
		word-break: break-all;
		white-space: pre-wrap;
		border-bottom: 2upx solid #E1E1E1;
	}
	.pop_ft{
		position: relative;
		line-height: 48px;
		font-size: 18px;
		display: flex;
		.btn_cancle{
			display: block;
			flex: 1;
			color: #4a4a4a;
			text-decoration: none;
			-webkit-tap-highlight-color: #000;
			position: relative;
			height: 100upx;
			line-height: 100upx;
			border-right: 2upx solid #E1E1E1;
		}
		.btn_ok{
			display: block;
			flex: 1;
			color: #4a4a4a;
			text-decoration: none;
			-webkit-tap-highlight-color: #007aff;
			position: relative;
			height: 100upx;
			line-height: 100upx;
		}
	}
}
</style>
