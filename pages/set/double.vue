<template>
	<view class="sign">
		<!-- 背景图 -->
		<view class="signs" :style="{ background: 'url(' + imageURL[0] + ')' }">
			<!-- 立即领取 -->
			<view class="get">
				<image src="../../static/img/header/Group%2013.png"></image>
			</view>
		</view>
		
		<!-- 立即领取 -->
		<view class="start">
			<image src="../../static/img/error/Group%2010.png"></image>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			// 背景图
			imageURL: ['../../static/img/header/song.png', '../../static/img/header/pic-zhongji-n.png', '../../static/img/header/pic-gaoji-n.png']
		};
	}
};
</script>

<style lang="scss">
view {
	background-size: cover !important;
}
.sign {
	.signs {
		width: 100%;
		height: 2700upx;
		margin-bottom: 120upx;
		/* 开始抢购 */
		.get{
			margin: 0 145upx 0 145upx;
			padding-top: 305upx;
			image{
				width:460upx;
				height:80upx;
			}
		}
	}
	
	.start {
        height:120upx;
        background:rgba(1,132,255,1);
		display: flex;
		position: fixed;
		left: 0upx;
		bottom: 0upx;
		width: 100%;
		z-index: 120;
		display: flex;
		align-items: center;
		justify-content: center;
		image{
			width: 460upx;
			height: 80upx;
		}
	}
}
</style>
