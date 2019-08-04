<!-- <script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script> -->
<script>
	/**
	 * vuex管理登陆状态，具体可以参考官方登陆模板示例
	 */
	import {
		mapMutations
	} from 'vuex';
	export default {
		methods: {
			...mapMutations(['login'])
		},
		onLaunch: function() {
			// #ifdef APP-PLUS
			setTimeout(function(){
				uni.showToast({ title: '渠道'+ plus.runtime.channel, icon: 'none',duration:4000 });
			},3000);
			// #endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
	}
</script>
<style>
	/*每个页面公共css */
	@import './common/uni.css';
</style>
