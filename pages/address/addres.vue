<template>
	<view class="address">
		<view class="address-box">
			<view class="message" v-for="item in addressList" :key="item.id">
				<view class="left" @tap="selectAddress(item)">
					<view class="message-top">
						<text class="name">{{item.name}}</text>
						<view class="phone">{{item.moblie}}</view>
						<view class="default" v-if="item.isDefault=='1'"><image src="../../static/img/temp/Group%206.png"></image></view>
					</view>
					<view class="message-botton"><text>{{item.proviceName+item.cityName+item.areaName+item.address}}</text></view>
				</view>
				<view class="right">
					<view class="modification" @click.stop="addAddress('edit', item)"><text>修改</text></view>
				</view>
			</view>
		</view>
		<view class="added"><button type="primary" @click="addAddress('add')" >+新增地址</button></view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			type:'',
			addressList: [],
			totalCount:0,
			isFirstLoad:true
		};
	},
	onLoad(option) {
		this.type = option.type;
		this.getListData();
	},
	onShow() {
		if(!this.isFirstLoad){
			this.getListData();
		}
	},
	methods: {
		getListData(){//获收货数据
			let params = {
				"currentPage": this.currentPage,
				"pageSize": this.pageSize
			};
			this.$api.postAPI('address/queryAddressList',params).then(res=>{
				uni.hideLoading();
				if(res.data.code == 0){
					this.addressList = res.data.data.data;
					this.totalCount = res.data.data.count;
				} else {
					return uni.showToast({ title: res.data.msg, icon: 'none',duration:3000 });
				}
			}).catch(err=>{
				uni.hideLoading();
				return uni.showToast({ title: '网络错误', icon: 'none',duration:3000 });
			})
		},
		addAddress(type, item) {
			if(type == 'edit'){
				console.log(JSON.stringify(item));
				uni.navigateTo({
					url: `/pages/address/addressManage?type=${type}&data=${encodeURIComponent(JSON.stringify(item))}`
				});
			} else {
				uni.navigateTo({url: `/pages/address/addressManage?type=${type}}`});
			}
		},
		selectAddress(item){
			if(this.type == 'select'){
				uni.setStorageSync('selectAddress',item);
				setTimeout(function(){
					uni.navigateBack();
				},500);
			}
		}
	}
};
</script>

<style lang="scss">
page {
	background: rgba(245, 245, 245, 1);
	height: 100%;
}
.address-box {
	background: rgba(255, 255, 255, 1);
	border-radius: 20upx;
	margin: 30upx 30upx;
	.message {
		min-height: 158upx;
		border-bottom: 1upx solid #e0e7eb;
		display: flex;
		.left {
			flex: 1;
			.message-top {
				display: flex;
				padding: 30upx 30upx 0upx 30upx;
				align-items: center;
				.name {
					margin-right: 30upx;
					font-size: 32upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(74, 74, 74, 1);
				}
				.phone {
					font-size: 28upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(74, 74, 74, 1);
				}
				.default{
					display: flex;
					align-items: center;
					justify-content: center;
					margin-left: 30upx;
					image{
						width: 60upx;
						height: 40upx;
					}
				}
			}
			.message-botton {
				margin-left: 30upx;
				text {
					font-size: 24upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(74, 74, 74, 1);
				}
			}
		}
		.right {
			width: 126upx;
			border-left: 1upx solid #e0e7eb;
			height: 80upx;
			border-radius: 1upx;
			margin-top: 39upx;
			.modification {
				text {
					height: 80upx;
					font-size: 28upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(74, 74, 74, 1);
					line-height: 80upx;
					padding-left: 35upx;
				}
			}
		}
	}
}
.added {
	height: 80upx;
	margin: 150upx 115upx 0 115upx;
	button {
		background: rgba(255, 88, 71, 1);
	}
}
</style>
