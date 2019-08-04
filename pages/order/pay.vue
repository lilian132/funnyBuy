<template>
	<view class="pay">
		<view class="bean">
			<view class="beaner"><image src="../../static/img/user/pic-douzi-n.png"></image></view>
			<view class="gold"><text>{{payNumber}}金豆</text></view>
			<view class="pice">
				<text style="font-size: 28upx;">¥</text>
				<text>{{price}}</text>
			</view>
		</view>
		<view class="payment">
			<radio-group name="radio" @change="changePayType">
				<label class="pay-weixin">
					<view class="pay-left">
						<image src="../../static/img/user/pic-weixin-n.png"></image>
						<text>微信</text>
					</view>
						<view class="pay-right">
							<view class="reset" >
								<radio value="1" color="#fa436a" :checked='payType == 1' />
								</radio>
							</view>
						</view>
				</label>
				<label class="pay-zhifubao">
					<view class="pay-weixin">
						<view class="pay-left">
							<image src="../../static/img/user/pic-zhifubao.png"></image>
							<text>支付宝</text>
						</view>
						<view class="pay-right">
							<view class="reset">
								<radio value="2" color="#fa436a" :checked='payType == 2' />
								</radio>
							</view>
						</view>
					</view>
				</label>
			</radio-group>
		</view>
	    <view class="agreement">
			<view class="agreement-left">
				<label>
                   <checkbox  color="#FFCC33" style="transform:scale(0.7)" />
                </label>
			</view>
			<view class="agreement-right">
				<text>我已同意《用户协议》</text>
			</view>
		</view>
		<view class="flex-blue"><button type="primary" @tap="confirm">立即支付</button></view>
		<view>{{payMessage}}</view>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				payType: 1,
				payNumber:0,
				ticketId:0,
				price:0,
				payMessage: ''
			};
		},
		computed: {
		
		},
		onLoad(options) {
			this.payNumber = options.num;
			this.price = options.price;
			this.ticketId = options.id;
		},

		methods: {
			//选择支付方式
			changePayType(e) {
				this.payType = e.mp.detail.value;
			},
			getUUID() {
				return 'xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/[xy]/g, function(c) {
					var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
					return v.toString(16);
				});
			},
			//确认支付
			confirm() {
				let orderNo = this.getUUID();
				this.$api.postAPI('points/buyPoints',{'outOrderNo':orderNo,'productTicketId':this.ticketId}).then(res=>{
					uni.hideLoading();
					if(res.data.code == 0){
						this.toPay(res.data.data.orderNo);
					} else {
						return uni.showToast({ title: res.data.msg, icon: 'none',duration:3000 });
					}
				}).catch(err=>{
					uni.hideLoading();
					return uni.showToast({ title: '网络错误', icon: 'none',duration:3000 });
				})
			},
			toPay(orderNo){
				let params = {
					'orderNo':orderNo,
					'payType':this.payType
				}
				uni.showLoading({title:'正在提交中...'});
				this.$api.postAPI('pay/pay',params).then(res=>{
					setTimeout(function(){
						uni.hideLoading();
					},8000);
					if(res.data.code == 0){
						this.goClientPay(res.data.data);
					} else {
						return uni.showToast({ title: res.data.msg, icon: 'none',duration:3000 });
					}
				}).catch(err=>{
					uni.hideLoading();
					return uni.showToast({ title: '网络错误', icon: 'none',duration:3000 });
				})
			},
			goClientPay(data){
				let payType = this.payType == 1?'wxpay':'alipay';
				let packageInfo = this.payType == 1?'Sign=WXPay':'Sign=alipay';
				let orderInfo = {
					appid : data.appid,
					partnerid : data.partnerid,
					prepayid : data.prepayid,
					package : packageInfo,
					noncestr : data.noncestr,
					timestamp : data.timestamp,
					sign : data.sign
				}
				uni.requestPayment({
					provider: payType,
					orderInfo: JSON.stringify(orderInfo), //微信、支付宝订单数据
					success: function (res) {
						uni.hideLoading();
						console.log('success:' + JSON.stringify(res));
						this.payMessage = res;
						uni.showToast({ title: res, icon: 'none',duration:3000 });
						setTimeout(()=>{
							uni.navigateBack();
						},1500)
					},
					fail: function (err) {
						uni.hideLoading();
						console.log('fail:' + JSON.stringify(err));
						uni.showToast({ title: '支付失败', icon: 'none',duration:3000 });
					}
				});

			}
		}
	}
</script>

<style lang="scss">
page {
	background: rgba(245, 245, 245, 1);
}
.pay {
	.bean {
		height: 458upx;
		background: rgba(255, 255, 255, 1);
		border-top: 1upx solid #e0e7eb;
		display: flex;
		flex-direction: column;
		align-items: center;
		.beaner {
			width: 150upx;
			height: 151upx;
			padding: 78upx 300upx 50upx 300upx;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.gold {
			padding-bottom: 20upx;
			text {
				font-size: 30upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(74, 74, 74, 1);
			}
		}
		.pice {
			text {
				font-size: 36upx;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				color: rgba(255, 159, 0, 1);
			}
		}
	}
	.payment {
		height: 221upx;
		background: rgba(255, 255, 255, 1);
		margin-top: 20upx;
		.pay-weixin {
			height: 110upx;
			border-bottom: 1upx solid #e0e7eb;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.pay-left {
				display: flex;
				align-items: center;
				image {
					padding: 0 28upx 0upx 58upx;
					width: 50upx;
					height: 50upx;
				}
				text {
					font-size: 36upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(74, 74, 74, 1);
				}
			}
			.pay-right {
				padding-right: 80upx;
			}
		}
		.pay-zhifubao {
			height: 110upx;
		}
	}
	.agreement{
		display: flex;
		margin: 21upx 20upx 0 60upx;
		.agreement-left{
			width: 30upx;
			height: 30upx;
			image{
				vertical-align:middle;
				width: 100%;
				height: 100%;
			}
		}
		.agreement-right{
			padding-left: 20upx;
			padding-top: 8upx;
			text{
                font-size:24upx;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(0,0,0,1);
			}
		}
	}
	.flex-blue {
		margin-top: 60upx;
		// width: 520upx;
		height: 80upx;
		margin: 100upx 105upx 0 125upx;
		button {
			background: rgba(255, 88, 71, 1);
		}
	}
}

</style>
