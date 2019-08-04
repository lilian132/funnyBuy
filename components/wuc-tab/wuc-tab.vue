<template>
	<view style="background:rgba(245,245,245,1);">
		<scroll-view class="wuc-tab" :class="tabClass" :style="tabStyle" scroll-with-animation scroll-x :scroll-left="scrollLeft">
			<div v-if="!textFlex">
				<div
					class="wuc-tab-item"
					:class="[index === tabCur ? selectClass + ' cur' : '']"
					v-for="(item, index) in tabList"
					:key="index"
					:id="index"
					@tap="tabSelect(index, $event)"
				>
					<text :class="item.icon"></text>
					<span>{{ item.name }}</span>
				</div>
			</div>
			<div class="flex text-center" v-if="textFlex">
				<div
					class="wuc-tab-item flex-sub"
					:class="index === tabCur ? selectClass + ' cur' : ''"
					v-for="(item, index) in tabList"
					:key="index"
					:id="index"
					@tap="tabSelect(index, $event)"
				>
					<text :class="item.icon"></text>
					<span>{{ item.name }}</span>
				</div>
			</div>
		</scroll-view>
	</view>
</template>
<script>
export default {
	name: 'wuc-tab',
	data() {
		return {};
	},
	props: {
		tabList: {
			type: Array,
			default() {
				return [];
			}
		},
		tabCur: {
			type: Number,
			default() {
				return 0;
			}
		},
		tabClass: {
			type: String,
			default() {
				return '';
			}
		},
		tabStyle: {
			type: String,
			default() {
				return '';
			}
		},
		textFlex: {
			type: Boolean,
			default() {
				return false;
			}
		},
		selectClass: {
			type: String,
			default() {
				return 'text-blue';
			}
		}
	},
	methods: {
		tabSelect(index, e) {
			if (this.currentTab === index) return false;
			this.$emit('update:tabCur', index);
			this.$emit('change', index);
		}
	},
	computed: {
		scrollLeft() {
			return (this.tabCur - 1) * 60;
		}
	}
};
</script>
<style>
div,
scroll-view,
swiper {
	box-sizing: border-box;
}
.wuc-tab {
	white-space: nowrap;
}
.wuc-tab-item {
	height: 60upx;
	display: inline-block;
	line-height: 60upx;
	/* margin: 0 120upx; */
	/* padding: 0 20upx; */
	font-size: 24upx;
	font-family: PingFangSC-Medium;
	font-weight: 500;
	color: rgba(155, 155, 155, 1);
}

.wuc-tab-item.cur {
	border-bottom: 4upx solid #ff5847;
}

.wuc-tab.fixed {
	position: fixed;
	width: 100%;
	top: 0;
	z-index: 1024;
	box-shadow: 0 1upx 6upx rgba(0, 0, 0, 0.1);
}

.flex {
	display: flex;
}
.text-center {
	text-align: center;
}
.flex-sub {
	flex: 1;
}

.bg-white {
	background-color: #ffffff;
}

.text-orange {
	font-size: 24upx;
	font-family: PingFangSC-Medium;
	font-weight: 500;
	color: rgba(0, 0, 0, 1);
}

.text-xl {
	font-size: 36upx;
}
</style>
