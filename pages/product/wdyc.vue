<template>
	<view class="yc">
		<view class="header">
			<view></view>
			<view>预测价</view>
			<view>时间</view>
		</view>
		<view class="list">
			<view class="row" :class="{isWin:(item.isWin=='1')}" v-for="(item,index) in woDeYCData" :key="index">
				<view class="col-h"><image class="zl" v-if="item.isWin=='1'" src="../../static/img/temp/dianzan.png"></image></view>
				<view class="col">¥<span></span>{{item.guessPrices}}</view><view class="col">{{item.createTime|toFormatDt}}</view>
			</view>
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
				woDeYCData:[]
			};
		},
		onLoad(option) {
			this.periodId = option.periodId;
			this.getWoDeYC();
		},
		filters:{
			toFormatDt(dtStr){
				if(!dtStr) return '';
				let dt = new Date(dtStr);
				let m = dt.getMonth().toString().PadLeft(2,'0');
				let d = dt.getDay().toString().PadLeft(2,'0');
				let hh = dt.getHours().toString().PadLeft(2,'0');
				let mm = dt.getMinutes().toString().PadLeft(2,'0');
				let ss = dt.getSeconds().toString().PadLeft(2,'0');
				return m + "-" + d + " "+ hh + ":" + mm + ":" + ss;
			}
		},
		methods:{
			getWoDeYC(){//获取我的预测数据
				this.$api.postAPI('guess/queryMyPeriodGuess',{"id": this.periodId}).then(res=>{
					uni.hideLoading();
					if(res.data.code == 0){
						this.woDeYCData = res.data.data;
						//this.woDeYCData= [{guessPrices:'22.2',createTime:'2019-06-22 16:14:00'}]
					} else {
						return uni.showToast({ title: res.data.msg, icon: 'none',duration:3000 });
					}
				}).catch(err=>{
					uni.hideLoading();
					return uni.showToast({ title: '网络错误', icon: 'none',duration:3000 });
				})
			}
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
				width: 50%;
				text-align: center;
				&:nth-child(1){
					width: 40upx;
				}
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
				.col-h{
					width: 40upx;
				}
				.col{
					width: 50%;
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
	}
</style>
