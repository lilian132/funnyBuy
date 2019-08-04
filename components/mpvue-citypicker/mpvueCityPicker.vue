<template>
  <div class="mpvue-picker">
    <div :class="{'pickerMask':showPicker}" @click="maskClick" catchtouchmove="true"></div>
    <div class="mpvue-picker-content " :class="{'mpvue-picker-view-show':showPicker}">
      <div class="mpvue-picker__hd" catchtouchmove="true">
        <div class="mpvue-picker__action"  @click="pickerCancel">取消</div>
				<div class="mpvue-address">选择地址</div>
        <div class="mpvue-picker__action"  @click="pickerConfirm">确定</div>
      </div>
      <picker-view indicator-style="height: 40px;" class="mpvue-picker-view" :value="pickerValue" @change="pickerChange">
        <block>
          <picker-view-column>
            <div class="picker-item" v-for="(item,index) in provinceDataList" :key="index">{{item.label}}</div>
          </picker-view-column>
          <picker-view-column>
            <div class="picker-item" v-for="(item,index) in cityDataList" :key="index">{{item.label}}</div>
          </picker-view-column>
          <picker-view-column>
            <div class="picker-item" v-for="(item,index) in areaDataList" :key="index">{{item.label}}</div>
          </picker-view-column>
        </block>
      </picker-view>
    </div>
  </div>
</template>

<script>
// import provinceData from './city-data/province.js';
// import cityData from './city-data/city.js';
// import areaData from './city-data/area.js';
export default {
  data() {
    return {
      pickerValue: [0, 0, 0],
			provinceData:[],
			cityData:[],
			areaData:[],
      provinceDataList: [],
      cityDataList: [],
      areaDataList: [],
			/* 是否显示控件 */
			showPicker: false,
    };
  },
	created() {
		this.init();
	},
  props: {
    /* 默认值 */
    pickerValueDefault: {
      type: Array,
      default(){
				return [0, 0, 0]
			}
    },
    /* 主题色 */
    themeColor: String
  },
  methods: {
		init() {
			this.getProvice(res=>{
				this.provinceData = res;
				this.provinceDataList = this.provinceData;
				let _id = res[0].id;
				if(this.pickerValueDefault[0] != 0){
					_id = res.find(c=>{return c.id == this.pickerValueDefault[0]}).id || 0;
					let _index = res.findIndex(c=>{return c.id == this.pickerValueDefault[0]});
					this.$set(this.pickerValue,0,_index >= 0 ? _index : 0);
				}
				
				res&&res.length&&this.getCityOrArea(_id,resCity=>{
					this.cityData = resCity;
					this.cityDataList = this.cityData;
					
					let _id1 = resCity[0].id;
					if(this.pickerValueDefault[1] != 0){
						_id1 = resCity.find(c=>{return c.id == this.pickerValueDefault[1]}).id || 0;
						let _index1 = resCity.findIndex(c=>{return c.id == this.pickerValueDefault[1]});
						this.$set(this.pickerValue,1,_index1 >= 0 ? _index1 : 0);
					}
					if(resCity&&resCity.length == 0 && (this.pickerValueDefault!=[0,0,0])){
						this._$emit('onConfirm');
					}
					resCity&&resCity.length&&this.getCityOrArea(_id1,resArea=>{
						this.areaData = resArea;
						this.areaDataList = this.areaData;
						
						if(this.pickerValueDefault[2] != 0){
							let _index2 = resArea.findIndex(c=>{return c.id == this.pickerValueDefault[2]});
							this.$set(this.pickerValue,2,_index2 >= 0 ? _index2 : 0);
							this._$emit('onConfirm');
						}
					});
				});
			});
		},
    show() {
      setTimeout(() => {
        this.showPicker = true;
      }, 0);
    },
    maskClick() {
      this.pickerCancel();
    },
    pickerCancel() {
      this.showPicker = false;
      this._$emit('onCancel');
    },
    pickerConfirm(e) {
      this.showPicker = false;
      this._$emit('onConfirm');
    },
    showPickerView() {
      this.showPicker = true;
    },
    pickerChange(e) {
      let changePickerValue = e.mp.detail.value;
      if (this.pickerValue[0] !== changePickerValue[0]) {
        // 第一级发生滚动
				let _id = this.provinceData[changePickerValue[0]].id;
        this.getCityOrArea(_id,resCity=>{
					this.cityData = resCity;
					this.cityDataList = this.cityData;
					
					changePickerValue[1] = 0;
					changePickerValue[2] = 0;
					
					let _id1 = this.cityData[0].id;
					this.getCityOrArea(_id1,resArea=>{
						this.areaData = resArea;
						this.areaDataList = this.areaData;
						
						this.pickerValue = changePickerValue;
						this._$emit('onChange');
					})
				});
      } else if (this.pickerValue[1] !== changePickerValue[1]) {
        // 第二级滚动
					let _id = this.cityData[changePickerValue[1]].id;
					this.getCityOrArea(_id,resArea=>{
						this.areaData = resArea;
						this.areaDataList = this.areaData;
						changePickerValue[2] = 0;
						this.pickerValue = changePickerValue;
						this._$emit('onChange');
					});
      }
    },
    _$emit(emitName) {
      let pickObj = {
        label: this._getLabel(),
        value: this.pickerValue,
        cityCode: this._getCityCode(),
				code:this._getCode()
      };
      this.$emit(emitName, pickObj);
    },
    _getLabel() {
      let pcikerLabel =
        this.provinceDataList[this.pickerValue[0]].label +
        '-' +
        this.cityDataList[this.pickerValue[1]].label +
        '-' +
        (this.areaDataList[this.pickerValue[2]] ? this.areaDataList[this.pickerValue[2]].label:'');
      return pcikerLabel;
    },
		_getCode(){
			let pcikerLabel =
			  this.provinceDataList[this.pickerValue[0]].value +
			  '-' +
			  this.cityDataList[this.pickerValue[1]].value +
			  '-' +
			  (this.areaDataList[this.pickerValue[2]] ? this.areaDataList[this.pickerValue[2]].value : 0);
			return pcikerLabel;
		},
    _getCityCode() {
      return this.areaDataList[this.pickerValue[2]] ? this.areaDataList[this.pickerValue[2]].value : 0;
    },
		getProvice(callback){//获取省份
			this.$api.postAPI('common/getAllProvince').then(res=>{
				uni.hideLoading();
				if(res.data.code == 0){
					let data = res.data.code == 0 ? res.data.data: [];
					let _data = data.map(p=>{
						p.value = p.id;
						p.label = p.name
						return p;
					})
					callback&&callback(_data);
				} else {
					return uni.showToast({ title: res.data.msg, icon: 'none',duration:3000 });
				}
			}).catch(err=>{
				uni.hideLoading();
				return uni.showToast({ title: '网络错误', icon: 'none',duration:3000 });
			})
		},
		getCityOrArea(id,callback){//获取省份
			this.$api.postAPI(`common/getArea/${id}`).then(res=>{
				uni.hideLoading();
				if(res.data.code == 0){
					let data = res.data.code == 0 ? res.data.data: [];
					let _data = data.map(p=>{
						p.value = p.id;
						p.label = p.name
						return p;
					})
					callback&&callback(_data);
				} else {
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

<style>
.pickerMask {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
}
.mpvue-picker-content {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  transition: all 0.3s ease;
  transform: translateY(100%);
  z-index: 3000;
}
.mpvue-picker-view-show {
  transform: translateY(0);
}
.mpvue-picker__hd {
  display: flex;
  padding: 9px 15px;
  background-color: #fff;
  position: relative;
  text-align: center;
  font-size: 17px;
}
.mpvue-picker__hd:after {
  content: ' ';
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #e5e5e5;
  color: #e5e5e5;
  transform-origin: 0 100%;
  transform: scaleY(0.5);
}
.mpvue-picker__action {
  display: block;
  flex: 1;
  color: #FF5847;
}
.mpvue-picker__action:first-child {
  text-align: left;
  color: #FF5847;
}
.mpvue-picker__action:last-child {
  text-align: right;
}
.mpvue-address{
  font-size:32upx;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(0,0,0,1);
}
.picker-item {
  text-align: center;
  line-height: 40px;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
}
.mpvue-picker-view {
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 238px;
  background-color: rgba(255, 255, 255, 1);
}
</style>
