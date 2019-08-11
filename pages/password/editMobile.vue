<template>
	<view>
		<!-- 输入框 -->
		<view class="uni-flex">
			<view class="flex-red"><input v-model="phoneNumber" class="uni-input" maxlength="11" placeholder="请输入手机号" /></view>
			<view class="flex-yellow">
				<view class="flex-green">
					<input v-model="code" class="uni-input" password type="text" placeholder="请输入验证码" />
				</view>
				<view class="forget" hover-class="navigator-hover" :class='{"gray":getCodeisWaiting}'>
				<text @click.stop="getCode()">{{ getCodeText }}</text>
				</view>
			</view>
		</view>
		<!-- 登录 -->
		<!-- <navigator url="../password/setpassword" > -->
		<view class="flex-blue" ><button hover-class="navigator-hover" type="primary" @tap="btnEdit">确认修改</button></view>
		<!-- </navigator> -->
	</view>
</template>

<script>
export default {
	name: 'login',
	data() {
		return {
			phoneNumber: '',
			code: '',
			getCodeisWaiting: false,
			getCodeText: '获取验证码',
			isGetCode:false
		};
	},
	// 方法
	methods: {
		setTimer() {
			let holdTime = 59;
			this.getCodeText = '重新获取(60)';
			this.Timer = setInterval(() => {
				if (holdTime <= 0) {
					this.getCodeisWaiting = false;
					this.getCodeText = '获取验证码';
					clearInterval(this.Timer);
					return;
				}
				this.getCodeText = '重新获取(' + holdTime + ')';
				holdTime--;
			}, 1000);
		},
		getCode() {
			uni.hideKeyboard();
			if (this.getCodeisWaiting) {
				return;
			}
			if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber)) {
				uni.showToast({ title: '请填写正确手机号码', icon: 'none' });
				return false;
			}
			this.getCodeisWaiting = true;
			let parms = {
				"clientType": 1,
				"mobile": this.phoneNumber,
				"veriCodeType": 3
			};
			this.$api.postAPI('users/getVeriCode',parms).then(res=>{
				this.isGetCode = true;
				this.getCodeText = '发送中...';
				this.setTimer();
			}).catch(err=>{
				//TODO handle the exception
				this.getCodeisWaiting = false;
			})
		},
		async btnEdit() {			
			uni.hideKeyboard();
			//验证规则
			if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber)) {
				uni.showToast({ title: '请填写正确手机号码', icon: 'none' });
				return false;
			}
			if (this.code == "") {
				return uni.showToast({ title: '请输入验证码', icon: 'none' });
			} else if(!/^\d{4,6}$/g.test(this.code)){
				return uni.showToast({ title: '请输入正确验证码', icon: 'none' });
			}
			uni.showLoading({
				title: '提交中...'
			});
			let parms = {
					"newMobile": this.phoneNumber,
					"mobile": '',
					"veriCode": this.code
				};
			let curURL = 'users/modifyMobile';
			if(!this.isGetCode){
				return uni.showToast({ title: '请获取验证码', icon: 'none',duration:3000 });
			}
			let res = await this.$api.postAPI(curURL,parms);
			let res_data = res.data;
			uni.hideLoading();
			if(res_data.code == 0){
				let userInfo = uni.getStorageSync('userInfo');
				userInfo.mobile = this.phoneNumber;
				uni.setStorageSync('userInfo',userInfo);
				uni.showToast({ title: '修改成功', icon: 'success'});
				setTimeout(function(){
					uni.navigateBack();
					// uni.navigateTo({url:'/pages/user/userInfo'});
				},1500);
			} else {
				return uni.showToast({ title: res_data.msg, icon: 'none',duration:3000 });
			}
		}
	}
};
</script>

<style lang="scss">
/* 输入框 */
.uni-flex {
	padding: 60upx 30upx;
	margin-bottom: 40upx;
	.flex-red {
		height: 100upx;
		border-radius:10upx 10upx 10upx 10upx;
		border: 1px solid rgba(228, 228, 228, 1);
		input {
			line-height: 100%;
			width: 100%;
			height: 100%;
			padding-left: 20upx;
		}
	}
	.flex-yellow{
		display: flex;
		// align-items: center;
		// justify-content: space-around;
		.flex-green {
			margin-top: 30upx;
			width: 486upx;
			height: 100upx;
			border-top: 1px solid rgba(228, 228, 228, 1);
			border-left: 1px solid rgba(228, 228, 228, 1);
			border-bottom: 1px solid rgba(228, 228, 228, 1);
			border-radius:10upx 0upx 0upx 10upx;
			position: relative;
			display: flex;
			input {
				line-height: 100%;
				width: 100%;
				height: 100%;
				padding-left: 20upx;
			}
		}
		.forget {
			position: absolute;
			right: 0upx;
			margin-top: 30upx;
			margin-right: 30upx;
			width:204upx;
		    height:100upx;
			color:rgba(255,88,71,1);
			border-radius:0upx 10upx 10upx 0upx;
		    border:2upx solid rgba(255,88,71,1);
			font-size:24upx;
			font-family:PingFangSC-Regular;
			font-weight:400;
			line-height:100upx;
			text-align: center;
		}
		.forget.gray{
			color: #aaa;
			border-color: rgba(228, 228, 228, 1);
			background-color: #fff!important;
			opacity: 1;
		}
	}
	
}
.flex-blue {
	padding: 0upx 30upx;
	margin-bottom: 313upx;
	button {
		width: 520upx;
		height: 80upx;
		background: rgba(255, 88, 71, 1);
		line-height: 80upx;
	}
}
</style>









<!-- <template>
	<view> -->
		<!-- 输入框 -->
			<!-- <view class="uni-flex">
				<view class="flex-red"><input  v-model="telephone" class="uni-input" maxlength="11" placeholder="请输入手机号" /></view>
				<view class="flex-green">
					<input  class="uni-input" name="yzm" v-model="yzm" password type="text" placeholder="请输入验证码" />
					<text v-bind:class="yzmClass" @click="getYzm()">{{yzmStatus}}</text>
				</view>
				<navigator url="../password/setpassword" hover-class="navigator-hover">
				<view class="flex-blue"><button type="primary" form-type="submit">下一步</button></view>
				</navigator>
			</view> -->
			<!-- 短信验证 -->
<!-- 			<view class="message">
				<navigator url="../login/login?title=login" hover-class="navigator-hover"><view class="message-left">已有账号去登录</view></navigator>
			</view>
	</view> -->
<!-- </template> -->

<!-- <script>
	var yzmTimer=60,yzmTime=59,yzmEnable=true;
	export default{
		data:function(){
			return {
				pageLoad:false, 
				yzm:"",
				telephone:"",
				yzmClass:"",
				yzmStatus:"获取验证码",
			};
		},
		onLoad:function(option){
			this.pageLoad=true;
		},
		methods:{
			downTimer:function(){
				var that=this;
				var it=setInterval(function(){
					yzmEnable=false;
					that.yzmStatus=yzmTime+"秒";
					that.yzmClass="yzmDisable";
					yzmTime--;
					if(yzmTime==0){
						yzmTime=59;
						yzmEnable=true;
						that.yzmClass="";
						that.yzmStatus="获取验证码";
						clearInterval(it);
					}
				},1000);
			},
			getYzm:function(){
				console.log(6666);
					if(!yzmEnable) return false;
					var that=this;
					uni.request({
						url:"http://111.230.144.142:8085/users/getVeriCode",
						method:"POST",
						data:{
							"clientType": 1,
							"mobile": "15970585370",
							"veriCodeType": 1
						},
						success:function(res){
							uni.showToast({
								title:res.data.message,
							})
							if(!res.error){
								that.downTimer();
							}
							
						}
					})
			},
		},
	}
</script> -->

<!-- <style lang="scss">
.uni-flex {
	padding: 64upx 64upx;
	.flex-red {
		height: 111upx;
		border-bottom: 1px solid #ccc;
		input {
			line-height: 100%;
			width: 100%;
			height: 100%;
		}
	}
	.flex-green {
		height: 111upx;
		border-bottom: 1px solid #ccc;
		margin-bottom: 60upx;
		input {
			line-height: 100%;
			width: 80%;
			height: 100%;
		}
		text {
			position: absolute;
			right: 62upx;
			top: 210upx;
			color: #999999;
		}
	}
	.flex-blue {
		margin-bottom: 60upx;
		button {
			background-color: #ec5733;
			border-radius: 90upx;
		}
	}
}
.message {
	display: flex;
	justify-content: space-between;
	padding: 0upx 64upx;
	color: #f28b31;
	font-size: 28px;
	margin-bottom: 120upx;
}
</style> -->