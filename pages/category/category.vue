<template>
	<view>
		<view class="VerticalBox">
			<scroll-view class="VerticalNav nav" scroll-y scroll-with-animation :scroll-top="verticalNavTop">
				<view class="cu-item" :class="item.id==tabCur?'text-green cur':''" v-for="(item,index) in list" :key="index" @tap="TabSelect"
				 :data-id="item.id">
					{{item.name}}
				</view>
			</scroll-view>
			<scroll-view class="VerticalMain" scroll-y scroll-with-animation
			 :scroll-into-view="'main-'+mainCur" @scroll="VerticalMain">
				<view class="padding-top padding-lr" v-for="(item,index) in list" :key="index" :id="'main-'+item.id">
					<view class="cu-bar solid-bottom bg-white">
						<view class="action" @click="goToDetail">
							<text class="cuIcon-title text-green"></text>{{item.name}}</view>
					</view>
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
							<view class="content">
								<view class="text-grey">凯尔</view>
								<view class="text-gray text-sm flex">
									<text class="text-cut">
										<text class="cuIcon-infofill text-red  margin-right-xs"></text>
										我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。
									</text> </view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<view class="cu-tag round bg-grey sm">5</view>
							</view>
						</view>
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png);">
								<view class="cu-tag badge">99+</view>
							</view>
							<view class="content">
								<view class="text-grey">
									<text class="text-cut">瓦洛兰之盾-塔里克</text>
									<view class="cu-tag round bg-orange sm">战士</view>
								</view>
								<view class="text-gray text-sm flex">
									<text class="text-cut">
										塔里克是保护者星灵，用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。塔里克由于渎职而被放逐，离开了祖国德玛西亚，前去攀登巨神峰寻找救赎，但他找到的却是来自星界的更高层的召唤。现在的塔里克与古代巨神族的神力相融合，以瓦洛兰之盾的身份，永不疲倦地警惕着阴险狡诈的虚空腐化之力。
									</text>
								</view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<view class="cuIcon-notice_forbid_fill text-gray"></view>
							</view>
						</view>
						<view class="cu-item ">
							<view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view>
							<view class="content">
								<view class="text-pink"><text class="text-cut">莫甘娜</text></view>
								<view class="text-gray text-sm flex"> <text class="text-cut">凯尔，你被自己的光芒变的盲目！</text></view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<view class="cu-tag round bg-red sm">5</view>
							</view>
						</view>
						<view class="cu-item grayscale">
							<view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg);"></view>
							<view class="content">
								<view><text class="text-cut">伊泽瑞尔</text>
									<view class="cu-tag round bg-orange sm">断开连接...</view>
								</view>
								<view class="text-gray text-sm flex"> <text class="text-cut"> 等我回来一个打十个</text></view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<view class="cu-tag round bg-red sm">5</view>
							</view>
						</view>
						<view class="cu-item cur">
							<view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg);">
								<view class="cu-tag badge"></view>
							</view>
							<view class="content">
								<view>
									<text class="text-cut">瓦罗兰大陆-睡衣守护者-新手保护营</text>
									<view class="cu-tag round bg-orange sm">6人</view>
								</view>
								<view class="text-gray text-sm flex">
									<text class="text-cut"> 伊泽瑞尔：<text class="cuIcon-locationfill text-orange margin-right-xs"></text> 传送中...</text></view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<view class="cuIcon-notice_forbid_fill text-gray"></view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				tabCur: 1,
				mainCur: 1,
				verticalNavTop: 0,
				load: true
			};
		},
		onLoad() {
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			let list = [{
				id:1,
				name:'珠宝配饰',
			},{
				id:2,
				name:'平板电脑',
			},{
				id:3,
				name:'生活家电',
			},{
				id:4,
				name:'数码影音',
			},{
				id:5,
				name:'其它专区',
			},{
				id:6,
				name:'美食天地',
			},{
				id:7,
				name:'运动户外',
			},{
				id:8,
				name:'美妆个护',
			},{
				id:9,
				name:'家居生活',
			}];
			// for (let i = 0; i < 26; i++) {
			// 	list[i] = {};
			// 	list[i].name = String.fromCharCode(65 + i);
			// 	list[i].text = 
			// 	list[i].id = i;
			// }
			this.list = list;
			this.listCur = list[0];
		},
		onReady() {
			uni.hideLoading()
		},
		methods: {
			TabSelect(e) {
				this.tabCur = e.currentTarget.dataset.id;
				this.mainCur = e.currentTarget.dataset.id;
				this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50;
				this.isClickLeft = true;
			},
			VerticalMain(e) {
				// #ifdef MP-ALIPAY
				   return false  //支付宝小程序暂时不支持双向联动 
				// #endif
				let that = this;
				let tabHeight = 0;
				if (this.load) {
					for (let i = 0; i < this.list.length; i++) {
						let view = uni.createSelectorQuery().select("#main-" + this.list[i].id);
						view.fields({
							size: true
						}, data => {
							this.list[i].top = tabHeight;
							tabHeight = tabHeight + data.height;
							this.list[i].bottom = tabHeight;
						}).exec();
					}
					this.load = false
				}
				if(!this.isClickLeft){
					let scrollTop = e.detail.scrollTop + 10;
					for (let i = 0; i < this.list.length; i++) {
						if (scrollTop > this.list[i].top && scrollTop < this.list[i].bottom) {
							this.verticalNavTop = (this.list[i].id - 1) * 50
							this.tabCur = this.list[i].id
							console.log(scrollTop)
							return false
						}
					}
				} else {
						this.isClickLeft = false;
				}
			},
			goToDetail(){
				uni.navigateTo({
					url: '/pages/product/detail',
					animationType: 'pop-in',
					animationDuration: 200
				})
			}
		},
	}
</script>

<style>
	.VerticalNav.nav {
		width: 200upx;
		white-space: initial;
		height:calc(100vh - 188upx)
	}
	.VerticalMain{
		height:calc(100vh - 188upx)
	}
	/* #ifdef MP */
	.VerticalNav.nav,.VerticalMain{height: 100vh;}
	/* #endif */
	
	.VerticalNav.nav .cu-item {
		width: 100%;
		text-align: center;
		background-color: #fff;
		margin: 0;
		border: none;
		height: 50px;
		line-height: 50px;
		position: relative;
	}
	
	.VerticalNav.nav .cu-item.cur {
		background-color: #f1f1f1;
	}
	
	.VerticalNav.nav .cu-item.cur::after {
		content: "";
		width: 8upx;
		height: 30upx;
		border-radius: 10upx 0 0 10upx;
		position: absolute;
		background-color: currentColor;
		top: 0;
		right: 0upx;
		bottom: 0;
		margin: auto;
	}
	
	.VerticalBox {
		display: flex;
	}
	
	.VerticalMain {
		background-color: #f1f1f1;
		flex: 1;
	}
	.cu-bar {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		position: relative;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		min-height: 50px;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		-ms-flex-pack: justify;
		justify-content: space-between;
	}
	.cu-list.menu-avatar {
		overflow: hidden;
	}
	.cu-list.menu-avatar>.cu-item {
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		padding-right: 5px;
		height: 70px;
		background-color: var(--white);
		-webkit-box-pack: end;
		-webkit-justify-content: flex-end;
		-ms-flex-pack: end;
		justify-content: flex-end;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
	}
	.cu-list>.cu-item {
		-webkit-transition: all .6s ease-in-out 0s;
		-o-transition: all .6s ease-in-out 0s;
		transition: all .6s ease-in-out 0s;
		-webkit-transform: translateX(0px);
		-ms-transform: translateX(0px);
		transform: translateX(0px);
	}
	.cu-list.menu-avatar>.cu-item .content {
		position: absolute;
		left: 73px;
		width: calc(100% - 48px - 30px - 60px - 10px);
		line-height: 1.6em;
	}
</style>
