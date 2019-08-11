<template>
	<view class="newlist">
		<view @tap="toDetail(item)" v-for="(item,index) in newSuccessData" :key="index" class="newest">
			<view class="new">
				<view class="left">
					<image :src="item.img"></image>
				</view>
				<view class="right">
					<view class="title"><text>{{item.title}}</text></view>
					<view class="piced">
						<view class="lef">
							<text class="lef1">当前均价</text>
							<text class="lef2">¥</text>
							<text class="lef3">{{item.periodLastPrice}}</text>
						</view>
					</view>
					<view class="name">
						抢中用户 :
						<text class="xiaoxiao">{{item.nickName}}</text>
					</view>
					<view class="piced">
						<view class="lef">
							<text class="lef1">抢中价格</text>
							<text class="lef2">¥</text>
							<text class="lef3">{{item.userGuessPrice}}</text>
						</view>
						<view class="righ">
							<text class="righ1">差价 ：</text>
							<text class="righ2" style="color: #FF9F00; font-size: 30upx;">¥{{item.subPrice}}</text>
						</view>
					</view>
					<view class="timed">
						<view class="let">
							<text class="let1">{{item.biddingTimes}}</text>
							<text>次出价</text>
						</view>
						<view class="rigt"><text>{{item.startTime|covertDate}}</text></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default{
	data(){
		return {
			isFirstLoad:true,
			pageIndex:1,
			pageSize:10,
			moreStatus:'',
			newSuccessData:[]
		}
	},
	onLoad() {
		this.getNewSuccessData();
	},
	filters:{
		covertDate(value){
			return value?(new Date(value).Format('yyyy-MM-dd hh:mm:ss')):''
		}
	},
	methods:{
		getNewSuccessData(type='init'){//获取最新成交数据
			let params = {
				currentPage:this.pageIndex,
				pageSize:this.pageSize
			}
			this.$api.postAPI('guess/newGuessResult',params).then(res=>{
				uni.hideLoading();
				if(res.data.code == 0){
					this.isFirstLoad = false;
					this.pageIndex++;
					let data = res.data.data.data;
					this.moreStatus = data.length == 0 ?'noMore':'';
					if(type=='more'){
						this.newSuccessData = this.newSuccessData.concat(data);
					} else{
						this.newSuccessData = res.data.data.data;
					}
				} else {
					return uni.showToast({ title: res.data.msg, icon: 'none',duration:3000 });
				}
			}).catch(err=>{
				uni.hideLoading();
				return uni.showToast({ title: '网络错误', icon: 'none',duration:3000 });
			})
		},
		toDetail(item){
			uni.navigateTo({
				url:`/pages/product/detail?periodId=${item.periodId}`
			})
		}
	},
	onReachBottom() {
		if(this.moreStatus!='noMore')
			this.getNewSuccessData('more');
	}
}
</script>

<style lang="scss">
page {
	background: rgba(245, 245, 245, 1);
}
.newest {
	height: 298upx;
	background: rgba(255, 255, 255, 1);
	border-radius: 20upx;
	margin: 30upx;
	.new {
		display: flex;
		.left {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 44upx;
			image {
				width: 180upx;
				height: 180upx;
			}
		}
		.right {
			width: 480upx;
			display: flex;
			flex-direction: column;
			// align-items: center;
			justify-content: space-between;
			.title {
				margin-top: 30upx;
				width: 100%;
				overflow: hidden;
				white-space:nowrap;
				text-overflow:ellipsis;
				text {
					font-size: 30upx;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					color: rgba(74, 74, 74, 1);
				}
			}
			.name {
				font-size: 24upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: #4a4a4a;
				.xiaoxiao {
					margin-left: 15upx;
					font-size: 24upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: #ff5847;
				}
			}
			.piced {
				display: flex;
				justify-content: space-between;
				align-items: center;
				.lef {
					.lef1 {
						font-size: 26upx;
						font-family: PingFangSC-Regular;
						font-weight: 400;
						color: rgba(74, 74, 74, 1);
					}
					.lef2 {
						margin-left: 10upx;
						font-size: 28upx;
						font-family: PingFangSC-Medium;
						font-weight: 500;
						color: rgba(255, 159, 0, 1);
					}
					.lef3 {
						font-size: 30upx;
						font-family: PingFangSC-Medium;
						font-weight: 500;
						color: rgba(255, 159, 0, 1);
					}
				}
				.righ {
					.righ1 {
						font-size: 24upx;
						font-family: PingFangSC-Regular;
						font-weight: 400;
						color: rgba(74, 74, 74, 1);
					}
					.righ2 {
						margin-right: 37upx;
						font-size: 24upx;
						font-family: PingFangSC-Regular;
						font-weight: 400;
						color: #ff5847;
					}
				}
			}
			.timed {
				display: flex;
				justify-content: space-between;
				padding-top:10upx;
				.let {
					font-size: 26upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					.let1 {
						color: #ff5847;
					}
				}
				.rigt {
					margin-right: 30upx;
					font-size: 26upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
				}
			}
		}
	}
}
</style>
