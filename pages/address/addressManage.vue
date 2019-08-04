<template>
	<!-- 新增地址 -->
	<view class="content">
		<view v-if="editType=='edit'" class="right-del" @tap="btnDel">删除</view>
		<view class="phone">
			<text>收件人</text>
			<view class="name"><input v-model="name" type="text" placeholder="请填写收件人姓名" /></view>
		</view>
		<view class="phone">
			<text>手机号码</text>
			<view class="name"><input v-model="tel" type="text" placeholder="请填写收货人手机号码" /></view>
		</view>
		<view class="phone">
			<text>选择地区</text>
			<view class="name" @tap="chooseCity">
				<view class="regise">
				{{ addressStrText!=''?addressStrText:'省市区县、乡镇' }}
				</view>
			</view>
		</view>
		<view class="phone">
			<text>详细地址</text>
			<view class="name"><input v-model="detailed" type="text" placeholder="街道、楼牌号等" /></view>
		</view>
		<!-- 默认地址 -->
		<view class="set">
			<text>设置为默认地址</text>
			<view class="set-box">
				<label class="radio">
					<checkbox-group @change="isDefaultChange">
					<checkbox :checked="isDefault" />
					</checkbox-group>
				</label>
			</view>
		</view>
		<view class="flex-blue"><button type="primary" @tap="save">保存</button></view>
		
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValue" @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue';
export default {
	components: {
		mpvueCityPicker
	},
	data() {
		return {
			editType: 'add',
			id: '',
			name: '',
			tel: '',
			detailed: '',
			isDefault: false,
			cityPickerValue: [0,0,0],
			themeColor: '#007AFF',
			region: { label: '省市区县、乡镇', value: [], cityCode: '' },
			addressStr:[],
			addressStrText:'',
			addressCode:[]
		};
	},
	onLoad(e) {
		//获取传递过来的参数
		this.editType = e.type;
		if (e.type == 'edit') {
			let parms = JSON.parse(decodeURIComponent(e.data));
			console.log(parms);
			this.id = parms.id;
			this.name = parms.name;
			this.tel = parms.moblie;
			this.detailed = parms.address;
			this.isDefault = (parms.isDefault ? true:false) || false;
			this.cityPickerValue = [parms.provinceId,parms.cityId,parms.areaId];
			uni.setNavigationBarTitle({
				title:'修改收货地址'
			})
		} else{
			uni.setNavigationBarTitle({
				title:'新增地址'
			})
		}
	},
	methods: {
		onCancel(e) {
			console.log(e);
		},
		chooseCity() {
			this.$refs.mpvueCityPicker.show();
		},
		onConfirm(e) {
			this.cityPickerValue = e.value;
			this.addressStrText = e.label;
			this.addressStr = e.label.split('-');
			this.addressCode = e.code.split('-');
		},
		isDefaultChange(e) {
			this.isDefault = !this.isDefault;
		},
		btnDel() {
			this.delData();
		},
		delData(){
			uni.showLoading({
				title: '正在提交'
			});
			this.$api.postAPI('address/deleteAddress',{'id':this.id}).then(res=>{
				uni.hideLoading();
				if(res.data.code == 0){
					uni.showToast({ title: '删除成功',duration:3000 });
					setTimeout(function(){
						uni.navigateBack();
					},1500)
				} else {
					return uni.showToast({ title: res.data.msg, icon: 'none',duration:3000 });
				}
			}).catch(err=>{
				uni.hideLoading();
				return uni.showToast({ title: '网络错误', icon: 'none',duration:3000 });
			})
		},
		save() {
			let data = { name: this.name, tel: this.tel, address: { detailed: this.detailed }, isDefault: this.isDefault };
			if (this.editType == 'edit') {
				data.id = this.id;
			}
			if (!data.name) {
				uni.showToast({ title: '请输入收件人姓名', icon: 'none' });
				return;
			}
			if (!data.tel) {
				uni.showToast({ title: '电话号码不能为空', icon: 'none' });
				return;
			}
			if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(data.tel)) {
				uni.showToast({ title: '请填写正确手机号码', icon: 'none' });
				return false;
			}
			if (!data.address.detailed) {
				uni.showToast({ title: '请输入收件人详细地址', icon: 'none' });
				return;
			}
			if (this.addressStr.length == 0) {
				uni.showToast({ title: '请选择收件地址', icon: 'none' });
				return;
			}
			uni.showLoading({
				title: '正在提交'
			});
			let params = {
				"address": this.detailed,
				"areaId": this.addressCode[2],
				"areaName": this.addressStr[2],
				"cityId": this.addressCode[1],
				"cityName": this.addressStr[1],
				"moblie": this.tel,
				"name": this.name,
				"proviceName": this.addressStr[0],
				"provinceId": this.addressCode[0],
				"isDefault":this.isDefault?1:0
			};
			let url = 'address/addAddress';
			if (this.editType == 'edit') {
				params.id = this.id;
				url = 'address/modifyAddress';
			}
			this.$api.postAPI(url,params).then(res=>{
				uni.hideLoading();
				if(res.data.code == 0){
					uni.showToast({ title: (this.editType == 'edit'?'修改成功':'添加成功'),duration:3000 });
					setTimeout(function(){
						uni.navigateBack();
					},1500)
				} else {
					return uni.showToast({ title: res.data.msg, icon: 'none',duration:3000 });
				}
			}).catch(err=>{
				uni.hideLoading();
				return uni.showToast({ title: '网络错误', icon: 'none',duration:3000 });
			})
		}
	},
	onBackPress() {
		if (this.$refs.mpvueCityPicker.showPicker) {
			this.$refs.mpvueCityPicker.pickerCancel();
			return true;
		}
	},
	onUnload() {
		if (this.$refs.mpvueCityPicker.showPicker) {
			this.$refs.mpvueCityPicker.pickerCancel();
		}
	}
};
</script>

<style lang="scss">
page {
	background: rgba(245, 245, 245, 1);
}
.right-del{
	position: fixed;
	top:0;
	right: 0;
	padding: 0 30upx;
	height: 88upx;
	line-height: 88upx;
	z-index: 999;
}
.content /deep/ .uni-checkbox-input{
	border-radius: 100%;
}
.content /deep/ .uni-checkbox-input-checked{
	color: #fff!important;
	background-color: #fa436a;
}
.content {
	margin: 30upx 30upx;
	background: rgba(255, 255, 255, 1);
	border-radius: 20upx;
	height: 563upx;
	.phone {
		display: flex;
		height: 140upx;
		align-items: center;
		border-bottom: 1upx solid #e0e7eb;
		text {
			width: 172upx;
			height: 140upx;
			font-size: 30upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(74, 74, 74, 1);
			text-align: center;
			line-height: 140upx;
		}
		.name {
			width: 450upx;
			height: 80upx;
			border-radius: 10upx;
			border: 2upx solid rgba(228, 228, 228, 1);
			.regise {
				line-height: 80upx;
				padding-left: 25upx;
				color: rgba(155, 155, 155, 1);
			}
			input {
				padding: 15upx 0 20upx 30upx;
				font-size: 28upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				// color: rgba(155, 155, 155, 1);
			}
		}
	}
	.set{
		display: flex;
		margin: 20upx  0  0 0;
		text{
	        font-size:30upx;
	        font-family:PingFangSC-Regular;
	        font-weight:400;
	        color:rgba(74,74,74,1);
		}
		.set-box{
			margin-left: 30upx;
			.radio{
				width: 18upx;
				height: 18upx;
			}
		}
	}
	.flex-blue {
		margin-top: 60upx;
		height: 80upx;
		margin: 150upx 85upx 0 85upx;
		button {
			background: rgba(255, 88, 71, 1);
		}
	}
}
</style>
