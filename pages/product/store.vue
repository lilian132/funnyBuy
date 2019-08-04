<template>
	<view class="store">
		<view class="explain">
			<text>金豆可用来出价抢购，增加获得商品机率，<span>且抢购过程中用出的金豆可退回50%哦</span></text>
		</view>
		<view class="beans">
			<view class="beans-pea" v-for="(item,index) in list" :key="index" @click="toPayPop(item)">
				<view class="doudou"><text>{{item.buyNum}}金豆</text></view>
				<view class="pices">
					<text class="pic">¥</text>
					<text class="money">{{item.price}}</text>
				</view>
			</view>
		</view>
		<view class="advertising">
			<image src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=781011805,4127206800&fm=26&gp=0.jpg"></image>
		</view>
		<view ref="masklayer" @tap="hidePop" class="mask_layer" :class="{show:showPay}"></view>
		<view class="pay_pop" :class="{show:showPay}">
			<view class="total-info">
				<view>支付方式</view>
				<view class="m">¥{{payMoney}}</view>
			</view>
			<view class="payment">
				<radio-group name="radio" @change="changePayType">
					<label class="pay-item pay-weixin">
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
					<label class="pay-item pay-zhifubao">
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
					</label>
				</radio-group>
			</view>
			<view class="agreement">
				<view class="agreement-left">
					<label>
			           <checkbox checked="checked" color="#FFCC33" style="transform:scale(0.7);vertical-align: 2upx;" />
					   我已同意《用户协议》
			        </label>
				</view>
			</view>
			<view @tap="btnToPay" class="btnPay" hover-class="navigator-hover">立即支付</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				payType: 1,
				showPay:false,
				payMoney:0,
				curPayItem:'',
				list:[]
			}
		},
		onLoad() {
			this.getMyDD();
		},
		methods:{
			getMyDD(){//获取我的预测数据
				this.$api.postAPI('points/pointsProductList').then(res=>{
					uni.hideLoading();
					if(res.data.code == 0){
						this.list = res.data.data;
					} else {
						return uni.showToast({ title: res.data.msg, icon: 'none',duration:3000 });
					}
				}).catch(err=>{
					uni.hideLoading();
					return uni.showToast({ title: '网络错误', icon: 'none',duration:3000 });
				})
			},
			//选择支付方式
			changePayType(e) {
				this.payType = e.mp.detail.value;
			},
			hidePop(){
				this.showPay = !this.showPay;
				setTimeout(()=>{
					this.$refs.masklayer.$el.style.display = 'none';
				},200);
			},
			toPayPop(item){
				this.payMoney = item.price;
				this.curPayItem = item;
				this.$refs.masklayer.$el.style.display = 'block';
				setTimeout(()=>{
					this.showPay = true;
				},100);
			},
			btnToPay(){
				if(!this.curPayItem) return;
				this.confirm();
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
				this.$api.postAPI('points/buyPoints',{'outOrderNo':orderNo,'productTicketId':this.curPayItem.id}).then(res=>{
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
.store {
	padding: 30upx 30upx;
	.explain {
		width: 690upx;
		height: 80upx;
		font-size: 24upx!important;
		color: #4a4a4a;
		span{
			color: #ff8678;
		}
	}
	.beans {
		margin-top: 30upx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		min-height: 580upx;
		.beans-pea {
			width: 28.7%;
			height: 162upx;
			background: rgba(242, 164, 36, 0.04);
			border-radius: 10upx;
			border: 1upx solid rgba(245, 166, 35, 1);
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-bottom: 30upx;
			&:hover{
				background-color:rgba(242, 164, 36, 0.3);
				// opacity:1;
				// opacity: value;
			}
			// margin-bottom: 30upx;
			.doudou {
				text {
					font-size: 30upx;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					color: rgba(74, 74, 74, 1);
				}
			}
			.pices {
				margin-top: 8upx;
				.pic {
					font-size: 24upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(74, 74, 74, 1);
				}
				.money {
					font-size: 30upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(74, 74, 74, 1);
				}
			}
		}
	}
	.advertising{
		margin-top: 180upx;
        height:300upx;
		image{
			width: 100%;
			height: 300upx;
			border-radius:20upx;
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
	.pay_pop{
		position: fixed;
		width: 100%;
		bottom: -50%;
		left: 0;
		background-color: #fff;
		transition: bottom ease-in 0.35s;
		z-index: 11;
		border-radius:20upx 20upx 0px 0px;
		&.show{
			bottom: 0;
		}
		.total-info{
			display: flex;
			color: #4a4a4a;
			height: 102upx;
			padding: 0 30upx;
			justify-content: space-between;
			border-bottom: 1upx solid #e0e7eb;
			view{
				font-size: 30upx;
				line-height: 100upx;
			}
			.m{
				color: #FF5847;
			}
		}
		.payment {
				height: 221upx;
				background: rgba(255, 255, 255, 1);
				.pay-item{
					height: 110upx;
					border-bottom: 1upx solid #e0e7eb;
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 0 30upx;
					.pay-left {
						display: flex;
						align-items: center;
						image {
							padding: 0 28upx 0upx 0;
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
						padding-right: 0;
					}
				}
			}
			.agreement{
				display: flex;
				margin: 21upx 20upx 30upx 30upx;
				.agreement-left{
					height: 30upx;
					font-size:24upx;
					font-family:PingFangSC-Regular;
					font-weight:400;
					color:rgba(0,0,0,1);
					image{
						vertical-align:middle;
						width: 100%;
						height: 100%;
					}
				}
			}
			.btnPay {
				width: 100%;
				height: 100upx;
				line-height: 100upx;
				background-color: #FF5847;
				text-align: center;
				color: #fff;
				font-size: 34upx;
				font-weight: 500;
				letter-spacing: 1upx;
			}
	}
}
</style>
