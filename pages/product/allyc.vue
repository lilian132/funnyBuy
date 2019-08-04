<template>
	<view class="yc">
		<view class="header">
			<view></view>
			<view>用户</view>
			<view>预测价</view>
			<view>时间</view>
		</view>
		<view class="list">
			<view class="row" :class="{isWin:(item.isWin=='1')}" v-for="(item,index) in allYCData" :key="index">
				<view class="col-h"><image class="zl" v-if="item.isWin=='1'" src="../../static/img/temp/dianzan.png"></image></view>
				<view class="col" style="text-align: left;padding-left: 4upx;">{{item.userName}}</view>
				<view class="col">¥<span></span>{{item.guessPrices}}</view>
				<view class="col">{{item.createTime |toFormatDt}}</view>
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
				allYCData:[],
				currentPage:1,
				pageSize:30,
				isFirstLoad:true
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
				let m = dt.getMonth().toString().PadLeft(2,'0');
				let d = dt.getDay().toString().PadLeft(2,'0');
				let hh = dt.getHours().toString().PadLeft(2,'0');
				let mm = dt.getMinutes().toString().PadLeft(2,'0');
				let ss = dt.getSeconds().toString().PadLeft(2,'0');
				return m + "-" + d + " "+ hh + ":" + mm + ":" + ss;
			}
		},
		methods:{
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
	}
</style>
