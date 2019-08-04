<template>
	<view class="venosa">
		<view class="venosa1">
			<view class="top"><image src="../../static/img/user/user-dou-1.png"></image></view>
			<view class="bottom"><text>{{points}}金豆</text></view>
		</view>
		<view class="venosa2">
			<view class="left"><text>什么是金豆？</text></view>
			<view class="right"><image src="../../static/img/error/icon-xiangxia-n.png"></image></view>
		</view>
		<view class="venosa3">
			<view class="ledger"><text class="">金豆收支明细</text></view>
			<block v-for="(item,index) in listData" :key="index">
				<view class="ledger1 ledger-header">
					<view class="left"><text>{{item.optType | covertType}}</text></view>
					<view class="right"><text :class="{blue:(item.type!=2)}">{{item.type==2?'+':'-'}}{{item.tradeNum}}</text></view>
				</view>
				<view class="ledger1">
					<view class="left"><text>{{item.createTime|covertDate}}</text></view>
					<view class="right"><text style="color: #4A4A4A;">{{item.tradeNum}}金豆</text></view>
				</view>
			</block>
			<view v-show="listData.length == 0" class="noData">暂无记录</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				giftPoints:0,
				points:0,
				listData:[],
				currentPage:1,
				pageSize:10,
				totalCount:0,
				isFirstLoad:true
			}
		},
		onLoad() {
			this.getMyPoints();
			this.getDuoData();
		},
		filters:{
			covertType(value){
				let res = '';
				switch(value){
					case '1': res = '充值';break;
					case '2': res = '活动';break;
					case '3': res = '兑换';break;
				}
				return res;
			},
			covertDate(value){
				return value?(new Date(value).Format('yyyy.MM.dd hh:mm:ss')):''
			}
		},
		methods:{
			async getMyPoints(){
				let res = await this.$api.postAPI('points/detail');
				let res_data = res.data;
				if(res_data.code == 0){
					this.giftPoints = res_data.data.giftPoints;
					this.points = res_data.data.points;
				} else {
					return uni.showToast({ title: res_data.msg, icon: 'none',duration:3000 });
				}
			},
			getDuoData(type='init'){//获取豆数据
				let params = {
					"currentPage": this.currentPage,
					"pageSize": this.pageSize
				};
				this.$api.postAPI('points/userTradeList',params).then(res=>{
					uni.hideLoading();
					if(res.data.code == 0){
						this.isFirstLoad = false;
						this.currentPage++;
						let data = res.data.data.data;
						this.moreStatus = data.length == 0 ?'noMore':'';
						if(type=='more'){
							this.listData = this.listData.concat(data);
						} else{
							this.listData = res.data.data.data;
							this.totalCount = res.data.data.count;
						}
					} else {
						return uni.showToast({ title: res.data.msg, icon: 'none',duration:3000 });
					}
				}).catch(err=>{
					uni.hideLoading();
					return uni.showToast({ title: '网络错误', icon: 'none',duration:3000 });
				})
			},
		},
		onReachBottom() {
			if(this.moreStatus!='noMore')
				this.getDuoData('more');
		}
	}
</script>

<style lang="scss">
page {
	background: rgba(245, 245, 245, 1);
}
.venosa {
	// height: 1017upx;
	background: rgba(255, 255, 255, 1);
	border-radius: 20upx;
	margin: 20upx 30upx 30upx 30upx;
	display: flex;
	flex-direction: column;
	.venosa1 {
		height: 355upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		.top {
			margin-top: 15upx;
			image {
				width: 215upx;
				height: 215upx;
			}
		}
		.bottom {
			width: 180upx;
			height: 80upx;
			border-radius: 20upx;
			border: 2upx solid rgba(245, 166, 35, 1);
			display: flex;
			align-items: center;
			justify-content: center;
			text {
				font-size: 28upx;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				color: rgba(245, 166, 35, 1);
			}
		}
	}
	.venosa2 {
		height: 106upx;
		border-bottom: 1upx solid #e0e7eb;
		border-top: 1upx solid #e0e7eb;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.left {
			margin-left: 30upx;
			// margin-top: 30upx;
			text {
				font-size: 34upx;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				color: rgba(74, 74, 74, 1);
			}
		}
		.right {
			margin-top: 10upx;
			margin-right: 30upx;
			image {
				width: 30upx;
				height: 30upx;
			}
		}
	}
	.venosa3 {
		flex: 1;
		margin: 30upx;
		.ledger {
			margin-bottom: 30upx;
			text {
				font-size: 34upx;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				color: rgba(74, 74, 74, 1);
			}
		}
		.ledger-header{
			text{
				font-size: 32upx!important;
			}
		}
		.ledger1 {
			display: flex;
			align-items: center;
			justify-content: space-between;
			&:nth-child(odd){
				margin-bottom: 30upx;
			}
			.blue{
				color: #4A90E2!important;
			}
			.left {
				text {
					font-size: 28upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(74, 74, 74, 1);
				}
			}
			.right {
				text {
					font-size: 28upx;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					color: rgba(255, 88, 71, 1);
				}
			}
		}
		.noData{
			text-align: center;
			padding: 100upx 0;
			color: #4a4a4a;
		}
	}
}
</style>
