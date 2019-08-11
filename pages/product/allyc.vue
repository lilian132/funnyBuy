<template>
	<view class="yc">
		<view class="header">
			<view></view>
			<view style="">用户</view>
			<view style="width: 150upx;">出价</view>
			<view style="width: 160upx;">
				差价
				<image @tap="showPriceTips" src="../../static/img/user/warn.png"></image>
			</view>
			<view>时间</view>
		</view>
		<view class="list">
			<view class="row" :class="{isWin:(item.isWin=='1')}" v-for="(item,index) in allYCData" :key="index">
				<view class="col-h"><image class="zl" v-if="item.isWin=='1'" src="../../static/img/temp/dianzan.png"></image></view>
				<view class="col" style="text-align: left;padding-left: 4upx; overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{item.userName}}</view>
				<view class="col" style="width: 150upx;">¥<span></span>{{item.guessPrices}}</view>
				<view class="col" style="width: 160upx;">{{item.subPrice||'--'}}</view>
				<view class="col" style="width: 240upx;">{{item.createTime |toFormatDt}}</view>
			</view>
		</view>
		<view ref="masklayer" @tap="hidePopPrice" class="mask_layer_price" :class="{show:showTipPrice}"></view>
		<view class="pop_price_tips" :class="{show:showTipPrice}">
			<view class="title">什么是差价？</view>
			<view class="tips-wrap">
				差价=| 我的出价 - 当前均价 |<br/>
				例如我的出价为80，当前均价为100，<br/>
				则差价=| 80 - 100 |=20，<br/>
				差价越小，则抢购成功机率越大。
			</view>
			<view class="btnok" @tap="hidePopPrice">我知道了</view>
		</view>
	</view>
</template>

<script>
	String.prototype.PadLeft = function (len, charStr) {
	    var s = this + '';
	    return new Array(len - s.length + 1).join(charStr || '') + s;
	}
	export default{
		data(){
			return {
				periodId:'',
				allYCData:[],
				currentPage:1,
				pageSize:30,
				isFirstLoad:true,
				showTipPrice: false,
			};
		},
		onLoad(option) {
			this.periodId = option.periodId;
			this.getAllYCData();
		},
		filters:{
			toFormatDt(dtStr){
				if(!dtStr) return '';
				let dt = new Date(dtStr);
				let m = (dt.getMonth() + 1).toString().PadLeft(2,'0');
				let d = dt.getDate().toString().PadLeft(2,'0');
				let hh = dt.getHours().toString().PadLeft(2,'0');
				let mm = dt.getMinutes().toString().PadLeft(2,'0');
				let ss = dt.getSeconds().toString().PadLeft(2,'0');
				return m + "-" + d + " "+ hh + ":" + mm + ":" + ss;
			}
		},
		methods:{
			showPriceTips(){//展示差价提示弹窗
				this.$refs.masklayer.$el.style.display = 'block';
				setTimeout(()=>{
					this.showTipPrice = true;
				},100);
			},
			hidePopPrice(){
				this.showTipPrice = !this.showTipPrice;
				setTimeout(()=>{
					this.$refs.masklayer.$el.style.display = 'none';
				},200);
			},
			getAllYCData(type='init'){//获取期号数据
				let params = {
					currentPage:this.currentPage,
					data:{"id": this.periodId},
					pageSize:this.pageSize
				}
				this.$api.postAPI('period/panicBuyingRecord',params).then(res=>{
					uni.hideLoading();
					if(res.data.code == 0){
						this.isFirstLoad = false;
						this.currentPage++;
						let data = res.data.data.data;
						this.moreStatus = data.length == 0 ?'noMore':'';
						if(type=='more'){
							this.allYCData = this.allYCData.concat(data);
						} else{
							this.allYCData = res.data.data.data;
						}
					} else {
						return uni.showToast({ title: res.data.msg, icon: 'none',duration:3000 });
					}
				}).catch(err=>{
					uni.hideLoading();
					return uni.showToast({ title: '网络错误', icon: 'none',duration:3000 });
				})
			}
		},
		onReachBottom() {
			if(this.moreStatus!='noMore')
				this.getAllYCData('more');
		}
	}
</script>

<style lang="scss">
	.yc{
		.header{
			display: flex;
			align-items: center;
			height: 80upx;
			line-height: 80upx;
			background-color: #fff;
			border-top: 1upx solid #E0E7EB;
			color: #4a4a4a;
			font-size: 30upx;
			view{
				width: 31%;
				text-align: center;
				&:nth-child(1){
					width: 40upx;
				}
			}
			uni-image{
				width: 30upx;
				height: 30upx;
				top: 1px;
				left: 2px;
			}
		}
		.list{
			background-color: #fff;
			border-top: 10upx solid #E0E7EB;
			padding: 20upx 0;
			color: #4a4a4a;
			.row{
				display: flex;
				align-items: center;
				height: 60upx;
				line-height: 60upx;
				padding: 0 30upx;
				.col-h{
					width: 40upx;
				}
				.col{
					width: 31%;
					text-align: center;
				}
				&.isWin{
					color: #FF5847;
				}
				.zl{
					width: 40upx;
					height: 40upx;
				}
			}
		}
		.mask_layer_price{
			position: fixed;
			width: 100%;
			height: 100%;
			left: 0;
			top:0;
			background-color: rgba(0,0,0,0.75);
			z-index: 992;
			opacity: 0;
			transition: opacity ease-in 0.35s;
			display: none;
			&.show{
				display: block;
				opacity: 1;
			}
		}
		.pop_price_tips{
			position: fixed;
			width: 510upx;
			top: 50%;
			left: 50%;
			opacity: 0;
			background-color: #fff;
			transform: translate(-50%,-50%);
			transition: opacity ease-in 0.35s;
			z-index: 993;
			border-radius:20upx;
			&.show{
				opacity: 1;
			}
			.title{
				padding: 30upx 30upx 20upx;
				color: #000;
				text-align: center;
				font-size: 34upx;
			}
			.tips-wrap{
				text-align: left;
				padding: 20upx 30upx 60upx;
				font-size: 26upx;
				color:rgba(0,0,0,0.85)
			}
			.btnok {
				width: 100%;
				height: 100upx;
				line-height: 100upx;
				background-color: #FF5847;
				text-align: center;
				color: #fff;
				font-size: 34upx;
				font-weight: 500;
				letter-spacing: 1upx;
				border-radius: 0 0 20upx 20upx;
			}
		}
	}
</style>
