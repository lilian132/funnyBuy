<template>
	<view class="affirm">
		<view class="perfect">
			<view class="address-wrap" v-if="addressInfo.id">
				<view class="left"><image class="adr-adv" src="/static/img/user/Mask.png"></image></view>
				<view class="right" @tap="toAddress">
					<view class="fl">收件人：<text>{{addressInfo.name}}</text><view class="arrow-r"></view></view>
					<view>手机号码：<text>{{addressInfo.moblie|covertMobile}}</text></view>
					<view>收货地址：<text>{{addressInfo.proviceName + addressInfo.cityName + addressInfo.areaName + addressInfo.address}}</text></view>
				</view>
			</view>
			<button v-else type="primary" @click="wanshang">完善收货信息</button>
		</view>
		<view class="purchase">
			<view class="purchase-top">
				<view class="purchase-left">
					<view class="botton"><image :src="periodData.img"></image></view>
				</view>
				<view class="purchase-right">
					<view class="tyrant"><text>{{periodData.title}}</text></view>
					<view class="pice">
						<text class="pic1">市场价</text>
						<text class="pic2">¥</text>
						<text class="pic3">{{periodData.priceSell}}</text>
					</view>
				</view>
			</view>
			<view class="purchase-bottom">
				<view class="left"><text>留言:</text> <input type="text" value="" placeholder="选填，对本次交易的说明（服饰类商品在此备注尺寸）" /></view>
				<view class="right">
					<view class="right1"></view>
					<view class="right2"><button type="primary" style="background-color: rgba(255,88,71,1)" @click="btnSureAddress">确 认</button></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			isFirstLoad:true,
			periodId:'',
			periodData:{},
			addressInfo:''
		};
	},
	onLoad(option) {
		this.periodId = option.periodId;
		uni.removeStorageSync('selectAddress');
		this.getAddressInfo();
		this.getQihaoData();
	},
	onShow(e) {
		if(!this.isFirstLoad){
			let curSelectAddress = uni.getStorageSync('selectAddress');
			if(curSelectAddress){
				this.addressInfo = curSelectAddress;
			} else {
				this.getAddressInfo();
			}
		}
	},
	filters:{
		covertMobile(value){
			return value.length >= 11 ? value.replace(/^(\d{3})\d{4}(\d{4})$/,"$1****$2"):value;
		}
	},
	methods: {
		wanshang(){
			uni.navigateTo({
				url: '/pages/address/addressManage'
			})
		},
		toAddress(){
			uni.navigateTo({
				url: '/pages/address/addres?type=select'
			})
		},
		getQihaoData(){//获取期号数据
			this.$api.postAPI('period/queryPeriodDetail',{"id": this.periodId}).then(res=>{
				uni.hideLoading();
				this.isFirstLoad = false;
				if(res.data.code == 0){
					this.periodData = res.data.data;
				} else {
					return uni.showToast({ title: res.data.msg, icon: 'none',duration:3000 });
				}
			}).catch(err=>{
				uni.hideLoading();
				return uni.showToast({ title: '网络错误', icon: 'none',duration:3000 });
			})
		},
		getAddressInfo(){//获取地址数据
			this.$api.postAPI('address/queryAddressDetail').then(res=>{
				uni.hideLoading();
				this.isFirstLoad = false;
				if(res.data.code == 0){
					this.addressInfo = res.data.data;
				} else {
					return uni.showToast({ title: res.data.msg, icon: 'none',duration:3000 });
				}
			}).catch(err=>{
				uni.hideLoading();
				return uni.showToast({ title: '网络错误', icon: 'none',duration:3000 });
			})
		},
		btnSureAddress(){
			if(!this.addressInfo.id){
				return uni.showToast({ title: '完善收货信息', icon: 'none',duration:3000 });
			}
			let parms = {
				addressId:this.addressInfo.id,
				periodId:this.periodId
			};
			this.$api.postAPI('address/orderBindAddress',parms).then(res=>{
				uni.hideLoading();
				if(res.data.code == 0){
					uni.showToast({ title: '操作成功'});
					setTimeout(()=>{
						// uni.navigateTo({
						// 	url:'/pages/order/details'
						// })
						uni.navigateBack();
					},1500);
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
page {
	background: rgba(245, 245, 245, 1);
}
.affirm {
	.perfect {
		min-height: 200upx;
		background: rgba(255, 255, 255, 1);
		border-radius: 20upx;
		margin: 30upx;
		display: flex;
		align-items: center;
		justify-content: center;
		button {
			width: 360upx;
			height: 80upx;
			border-radius: 10upx;
			border: 2upx solid rgba(255, 88, 71, 1);
			background: rgba(255, 255, 255, 1);
			font-size: 34upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(255, 88, 71, 1);
		}
		.address-wrap{
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
			padding: 30upx;
			color: #4a4a4a;
			.fl{
				position: relative;
				font-size: 28upx;
				text{
					font-size: 28upx;
				}
				.arrow-r{
					position: absolute;
					top:10upx;
					right: 0;
					width: 30upx;
					height: 30upx;
					background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAYFBMVEX///9KSkpOTk719fVYWFj8/PxTU1P6+vrb29vPz8/KysqZmZlxcXH4+Pjf39/FxcWOjo6Hh4d6enp1dXXj4+PT09PAwMCTk5OCgoJ+fn5tbW1dXV3W1ta5ubmenp5lZWXOWLs0AAAAvElEQVRIx83XzQ6CMBAEYBeqAlZBi4jgz/u/pdEIHvbkbDN07l/StOm0u0om1ZA976iVdx4Y9vLJDsJODDqIQZcy5QLozqazSTfr/3WdhD4Cuoqlt8B5z7pfUF8Bfd7Mem/RJ0DfTLr46dyiA6JdHO0BfUhCD4BunaVT2/GLRyLWy8Y3DLeeaosoNuScK6nLgFdDugDx6sVLH7c9yeonlvm411FsQ7WdspzvY6ks68vslEXHBHxAwUej5PMC5mQK4zaor5oAAAAASUVORK5CYII=);
					background-size: contain;
				}
			}
			text,view{
				font-size: 24upx;
			}
			.adr-adv{
				width: 100upx;
				height: 100upx;
			}
			.left{
				margin-right: 32upx;
			}
			.right{
				flex:1;
			}
		}
	}
	/*商品列表  */
	.purchase {
		display: flex;
		flex-direction: column;
		height: 475upx;
		background: rgba(255, 255, 255, 1);
		border-radius: 20upx;
		margin: 0upx 30upx;
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
				.botton {
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
				// align-items: center;
				justify-content: center;
				// margin-top: 93upx;
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
						top:50%;
						left: 0;
						height: 2upx;
						background-color: #D0021B;
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
			flex-direction: column;
			// align-items: center;
			// justify-content: space-between;

			padding: 0 30upx;
			.left {
				display: flex;
				align-items: baseline;
				height: 85upx;
				margin-top: 25upx;
				font-size: 26upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(74, 74, 74, 1);
				text{
					margin-right: 10upx;
					font-size: 28upx;
				}
			}
			.right {
				// width: 300upx;
				margin-top: 10upx;
				height: 80upx;
				display: flex;
				justify-content: space-between;
				.right1 {
				}
				.right2 {
					width: 300upx;
					height: 80upx;
				}
			}
		}
	}
}
</style>
