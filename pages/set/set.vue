<template>
	<view class="container">
		<view class="list-cell b-b m-t" @click="navTo('/pages/product/playerRule')" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit b-t">常见问题</text>
			<image class="xiangyou" src="../../static/img/error/icon-xiangxia-n.png"></image>
		</view>
		<view class="list-cell" @click="navTo('/pages/set/protocol')" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit b-t">服务协议</text>
			<image class="xiangyou" src="../../static/img/error/icon-xiangxia-n.png"></image>
		</view>
		<view class="list-cell b-b" @click="navTo('关于我们')" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit b-t">关于我们</text>
			<image class="xiangyou" src="../../static/img/error/icon-xiangxia-n.png"></image>
		</view>
		<navigator url="../set/suggest?title=suggest" hover-class="navigator-hover">
			<view class="list-cell b-b" @click="navTo('投诉建议')" hover-class="cell-hover" :hover-stay-time="50">
				<text class="cell-tit b-t">投诉建议</text>
				<image class="xiangyou" src="../../static/img/error/icon-xiangxia-n.png"></image>
			</view>
		</navigator>
		<view class="list-cell">
			<text class="cell-tit b-t">当前版本</text>
			<text class="cell-tip">1.0.0</text>
		</view>
		<view class="list-cell m-t b-b" @click="navTo('清除缓存')" hover-class="cell-hover" :hover-stay-time="50" style="border-bottom: 1px solid #E0E7EB;">
			<text class="cell-tit b-t">清除缓存</text>
		</view>
		<view class="quit" @click="btnLoginOut"><text>退出账号</text></view>
	</view>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
	data() {
		return {};
	},
	methods: {
		...mapMutations(['logout']),

		navTo(url) {
			uni.navigateTo({
				url
			})
		},
		//退出登录
		btnLoginOut(){
			uni.showLoading({
				title:'正在退出登录...'
			});
			this.logOut(()=>{
				uni.removeStorageSync('userInfo');
				uni.removeStorageSync('userInfo_token');
				uni.removeStorageSync('token');
				setTimeout(function(){
					uni.hideLoading();
					uni.switchTab({url: '/pages/index/index'});
				},1500)
			})
		},
		logOut(callback){
			this.$api.postAPI('users/logout').then(res=>{
				if(res.data.code == 0){
					callback&&callback();
				} else {
					uni.hideLoading();
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
.list-cell {
	display: flex;
	align-items: baseline;
	padding: 0upx 40upx;
	line-height: 103upx;
	position: relative;
	background: #fff;
	justify-content: center;
	// border-bottom: 2upx solid #f7f7f7;
	border-top: 1upx solid #e0e7eb;
	&.log-out-btn {
		margin: 344upx 64upx 100upx 64upx;
		background-color: #f0632e;
		border-radius: 90upx;
		.cell-tit {
			text-align: center;
			margin-right: 0;
		}
	}
	&.cell-hover {
		background: #fafafa;
	}
	.b-t {
		font-size: 30upx;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		color: rgba(74, 74, 74, 1);
	}
	.cell-more {
		align-self: baseline;
		margin-left: 10upx;
	}
	.cell-tit {
		flex: 1;
		margin-right: 10upx;
	}
}
.quit {
	width: 520upx;
	height: 80upx;
	background: rgba(255, 88, 71, 1);
	border-radius: 10upx;
	margin: 100upx 115upx 0 115upx;
	text {
		font-size: 36upx;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		line-height: 80upx;
		text-align: center;
		padding-left: 188upx;
	}
}
.xiangyou {
	width: 30upx;
	height: 30upx;
}
</style>
