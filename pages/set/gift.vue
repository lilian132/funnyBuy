<template>
	<view class="gifts">
	<view class="gift">
		<view class="gift-left">
			<image src="../../static/img/user/pic-douzi-n.png">	</image>
			<text>500金豆</text>
		</view>
		<view class="gift-right">
			<image src="../../static/img/user/Group%207.png">	</image>
			<text>2019-06-16</text>
		</view>
	</view>
	<view class="gift">
		<view class="gift-left">
			<image src="../../static/img/user/pic-douzi-n.png">	</image>
			<text>500金豆</text>
		</view>
		<view class="gift-right">
			<image src="../../static/img/user/Group%205.png">	</image>
			<text>2019-06-16</text>
		</view>
	</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	page{
		background:rgba(245,245,245,1);
	};
	.gifts{
		margin: 30upx 30upx;
		border-radius:20upx;
		background:rgba(255,255,255,1);
	.gift{
		display: flex;
		justify-content: space-between;
		border-bottom: 1upx solid #F5F5F5;
		.gift-left{
			height: 158upx;
			display: flex;
			align-items: center;
			justify-content: center;
			image{
				padding: 0 30upx 0 30upx;
				width: 90upx;
				height: 90upx;
			}
			text{
                font-size:30upx;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(74,74,74,1);
			}
		}
		.gift-right{
			
			padding-right: 30upx;
			display: flex;
			flex-direction: column;
			// align-items: center;
			justify-content: center;
			image{
				width:126upx;
                height:54upx;
				padding-left: 38upx;
			}
			text{
                font-size:28upx;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(74,74,74,1);
			}
		}
	}
	}
</style>