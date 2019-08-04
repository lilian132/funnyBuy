<template>
	<view :class="setCollapseCellClass" :hover-class="disabled === true || disabled === 'true' ? '' : 'uni-collapse-cell--hover'">
		<view class="uni-collapse-cell__title" @click="onClick">
			<!-- <view class="uni-collapse-cell__title-extra" v-if="thumb">
				<image class="uni-collapse-cell__title-img" :src="thumb"></image>
			</view>
			<view class="uni-collapse-cell__title-inner">
				<view class="uni-collapse-cell__title-text">{{title}}</view>
			</view>
			<view class="uni-collapse-cell__title-arrow" :class="setActive">
				<uni-icon color="#bbb" size="20" type="arrowdown"></uni-icon>
			</view> -->
			<!-- 天天抢购 -->
			<view class="day">
				<view class="left">
					<text class="qiang">{{titleObj.name}}</text>
					<text class="qi">{{titleObj.periodNo}}</text>
					<text style="padding-top: 8upx;">期</text>
					<view class="pice"><text>¥{{titleObj.lastAvgPrice}}</text></view>
				</view>
				<view class="right">
					<text>历史走势</text>
					<image class="rightArrow" src="../../static/img/header/icon-xiangyou-down.png"></image>
				</view>
			</view>
		</view>
		<view
			class="uni-collapse-cell__content"
			:class="animation === 'outer' ? 'uni-collapse-cell--animation' : ''"
			:style="{ height: isOpen === 'true' || isOpen === true ? height + 'px' : '0px' }"
		>
			<view :class="setContClass" :id="elId"><slot /></view>
		</view>
	</view>
</template>

<script>
import uniIcon from '../uni-icon/uni-icon.vue';
export default {
	name: 'uni-collapse-item',
	components: {
		uniIcon
	},
	data() {
		const elId = `Uni_${Math.ceil(Math.random() * 10e5).toString(36)}`;
		return {
			isOpen: this.open,
			height: 0,
			elId: elId
		};
	},
	watch: {
		open(val) {
			this.isOpen = val;
		}
	},
	computed: {
		index() {
			return this.$parent.$children.indexOf(this);
		},
		nameSync() {
			return this.name === 0 ? this.index : this.name;
		},
		setCollapseCellClass() {
			let classList = ['uni-collapse-cell'];
			if (this.disabled === true || this.disabled === 'true') {
				classList.push('uni-collapse-cell--disabled');
			}
			if (this.isOpen === true || this.isOpen === 'true') {
				classList.push('uni-collapse-cell--open');
			}
			return classList;
		},
		setActive() {
			let classList = [];
			if (this.isOpen === true || this.isOpen === 'true') {
				classList.push('uni-active');
			}
			return classList;
		},
		setContClass() {
			let classList = [];
			if (this.isOpen === true || this.isOpen === 'true') {
				classList.push('uni-active');
			}
			if (this.animation === 'inner') {
				classList.push('uni-collapse-cell__inner');
			}
			return classList;
		}
	},
	props: {
		animation: {
			//动画效果:inner内容动；outer容器动
			type: String,
			default: 'outer'
		},
		title: String, //列表标题
		name: {
			//唯一标识符
			type: [Number, String],
			default: 0
		},
		disabled: {
			//是否禁用
			type: [Boolean, String],
			default: false
		},
		open: {
			//是否展开
			type: [Boolean, String],
			default: false
		},
		thumb: String, //缩略图
		titleObj:Object
	},
	created() {
		let parent = this.$parent || this.$root;
		let name = parent.$options.name;

		while (parent && name !== 'uni-collapse') {
			parent = parent.$parent;
			if (parent) {
				name = parent.$options.name;
			}
		}
		this.parent = parent;
	},
	// #ifdef H5
	mounted() {
		let view = uni.createSelectorQuery().select(`#${this.elId}`);
		view.fields(
			{
				size: true
			},
			data => {
				this.height = data.height;
			}
		).exec();
	},
	// #endif
	// #ifndef H5
	onReady() {
		uni.createSelectorQuery().in(this).select(`#${this.elId}`).boundingClientRect().exec((ret) => {
			this.height = ret[0].height + 'px'
		})
	},
	// #endif
	methods: {
		onClick() {
			if (this.disabled) {
				return;
			}
			let accordion = this.parent.accordion ? this.parent.accordion : false;
			if (accordion === true || accordion === 'true') {
				this.$parent.$children.forEach(vm => {
					if (vm === this) {
						return;
					}
					vm.isOpen = false;
				});
			}
			this.isOpen = !this.isOpen;
			this.parent.onChange && this.parent.onChange(this);
		}
	}
};
</script>

<style lang="scss">
@mixin collapse-hover {
	// background-color: $uni-bg-color-hover;
}

@mixin collapse-disabled {
	opacity: 0.3;
}

// $collapse-title-pd:$uni-spacing-col-lg $uni-spacing-row-lg;

.uni-collapse-cell {
	position: relative;

	&--hover {
		@include collapse-hover;
	}

	&--open {
		@include collapse-hover;
		.rightArrow {
			transform: rotate(180deg);
			-webkit-transform: rotate(180deg);
			-moz-transform: rotate(180deg);
			-o-transform: rotate(180deg);
			-ms-transform: rotate(180deg);
		}
	}

	&--disabled {
		@include collapse-disabled;
	}

	&--animation {
		transition: all 0.3s;
	}

	&:after {
		position: absolute;
		z-index: 3;
		right: 0;
		bottom: 0;
		left: 0px;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		background-color: $uni-border-color;
	}

	&__title {
		padding: 15upx 30upx;
		// width: 100%;
		// box-sizing: border-box;
		// flex: 1;
		// position: relative;
		// display: flex;
		// flex-direction: row;
		// justify-content: space-between;
		// align-items: center;

		// 			&-extra {
		// 				margin-right: 18upx;
		// 				display: flex;
		// 				flex-direction: row;
		// 				justify-content: center;
		// 				align-items: center;
		// 			}
		//
		// 			&-img {
		// 				height: $uni-img-size-base;
		// 				width: $uni-img-size-base;
		// 			}

		// 			&-arrow {
		// 				width: 20px;
		// 				height: 20px;
		// 				transform: rotate(0deg);
		// 				transform-origin: center center;
		// 				transition: transform 0.3s;
		//
		// 				&.uni-active {
		// 					transform: rotate(-180deg);
		// 				}
		// 			}

		// 			&-inner {
		// 				flex: 1;
		// 				overflow: hidden;
		// 				display: flex;
		// 				flex-direction: column;
		// 			}
		//
		// 			&-text {
		// 				font-size: $uni-font-size-lg;
		// 				text-overflow: ellipsis;
		// 				white-space: nowrap;
		// 				color: inherit;
		// 				line-height: 1.5;
		// 				overflow: hidden;
		// 			}
	}

	&__content {
		position: relative;
		width: 100%;
		overflow: hidden;
		background: $uni-bg-color;

		view {
			font-size: $uni-font-size-base;
		}
	}

	&__inner {
		opacity: 0;
		transform: translateY(-50%);
		transition: all 0.3s;
		transform-origin: center center;

		&.uni-active {
			opacity: 1;
			transform: translateY(0px);
		}
	}
	/* 天天抢购 */
		.day {
			// height: 86upx;
			background-color: #ffffff;
			display: flex;
			align-items: center;
			justify-content: space-between;
			// padding: 0upx 30upx;
			.left {
				display: flex;
				align-items: center;
				justify-content: flex-start;
				.qiang {
					font-size: 34upx;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					color: rgba(0, 0, 0, 1);
				}
				.qi {
					padding-left: 20upx;
					color: #ff3c0e;
					padding-top: 8upx;
				}
				.pice {
					margin-left: 20upx;
					min-width: 80upx;
					max-width: 142upx;
					height: 40upx;
					background: rgba(255, 60, 14, 1);
					border-radius: 20upx;
					color: rgba(255, 255, 255, 1);
					text-align: center;
					line-height: 40upx;
					padding: 0 4upx;
				}
			}
			.right {
				display: flex;
				align-items: center;
				// padding-left: 65upx;
				text {
					font-size: 28upx;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					color: rgba(74, 74, 74, 1);
					padding-right: 13upx;
				}
				image {
					width: 30upx;
					height: 30upx;
					transition: All 0.1s ease-in-out;
					-webkit-transition: All 0.1s ease-in-out;
					-moz-transition: All 0.1s ease-in-out;
					-o-transition: All 0.1s ease-in-out;
				}
			}
		}
}
</style>
