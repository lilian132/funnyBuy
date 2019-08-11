<template>
	<view class="rule">
		<text class="content-wrap">
			<text class="title">当前均价：</text>
			\n当前均价=当前商品所有用户（出价之和/出价次数之和）所得来的平均价格，当前均价是随着用户出价不断变化的，以抢购结束后的当前均价为判断标准。当前均价不会时时更新，在抢购过程中，系统会在相应时间段内更新当前均价，给用户出价作为参考。
			\n<text class="title">出价抢购：</text>
			\n用户支付一定数量的金豆进行出价，初级场出价范围0~99.99，中级场出价范围0~999.99，高级场出价范围0~999.99。
			\n<text class="title">抢购手续费：</text>
			\n每次出价都要扣除一定数量的金豆作为手续费，场次不同每次扣除的手续费不同。
			\n<text class="title">抢购时间：</text>
			\n场次不同则抢购时间长短不同，初级场每期抢购10分钟，中级场每期抢购15分钟，高级场每期抢购20分钟。			
			\n<text class="title">抢购成功标准：</text>
			\n每期选出一名抢购用户，我的出价和抢购结束后的当前均价差价最小，且出价用时最短者抢购成功。
			\n<text class="title">差价：</text>
			\n差价=|我的出价-当前均价| 例如：我的出价为80，当前均价为100，则差价=|80-100|=20，差价越小，则抢购成功机率越大
			\n<text class="title">退豆：</text>
			\n抢购成功，出价所消耗的金豆不退还；抢购失败，退还所消耗的金豆50%，赠豆除外。
		</text>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.rule{
		padding: 30upx;
		color: #4a4a4a;
		.title{
			font-weight: bold;
			color:#FF5847;
		}
	}
</style>
