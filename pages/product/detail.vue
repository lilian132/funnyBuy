<template>
	<view class="detail">
		<!-- 报名中-->
		<view class="purchase">
			<block v-if="isSale">
				<view class="left" :class="{'c':this.periodData.executeStatus == 3 ?true:false}">{{timeTipText}}</view>
				<view class="right" v-if="showDateTime">
					<span class="open">{{timeTipText1}}</span>
					<view class="doentime" v-if="!isTimeUpLoading">
						<view class="doentime" v-if="countdownTime">
							<uni-countdown v-if="isRefreshTime" :show-day="false" :hour="countdownTime.h" :minute="countdownTime.m" :second="countdownTime.s" background-color="#FFFFFF" color="#4A4A4A" border-color="#FFFFFF" @timeup="timeup"></uni-countdown>
						</view>
					</view>
				</view>
			</block>
			<block v-else-if="isSale!=''">
				<view class="left">停售中</view>
				<view class="right" v-show="showDateTime">
					<span class="open">{{isSaleMsg}}</span>
				</view>
			</block>
		</view>
		<!-- 详情轮播 -->
		<!-- 首页轮播图 -->
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="lotteryInfo" :class="[isShowLottery?'show':'']" v-if="currentWinnerMsg!=''">{{currentWinnerMsg}}</view>
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item v-for="(item,index) in periodData.subImgs" :key="index" class="swiper-item">
							<view class="swiper-item uni-bg-red"><image :src="item"></image></view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<!-- 抢购价格 -->
		<view class="present">
			<view class="present-right">
				<view class="left">
					<view class="present-left">
						<text class="black">{{periodData.title}}</text>
					</view>
					<view class="worth">
						<view class="wort">市场价</view>
						<text class="money">¥ {{periodData.priceSell}}</text>
					</view>
					<view class="words">
						<text class="baoming">{{periodData.participateNum}}</text>
						人参与
						<text class="kong">|</text>
						<text class="circusee">{{periodData.watchNum}}</text>
						人围观
					</view>
				</view>
				<view class="right">
					<view class="riggt">
						<view class="buy">当前均价<view @tap="showPriceTips" class="price_tips"></view></view>
						<view class="pic"><view class="icon-price">¥</view><view class="m" :class="{up:isUpdatePrice}">{{periodData.lastAvgPrice}}</view></view>
					</view>
					<!-- 更新时间 -->
					<view class="update">
						<text>更新时间：{{lastUpdateTime}}</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 匹配度 -->
		<view class="matched" v-if="periodData.rateString">
			<view class="matched1">
				<image src="../../static/img/temp/pic-jiangpin-n.png"></image>
			</view>
			<view class="matched2">
				恭喜<text class="name">{{periodData.userName}}</text>抢购成功，匹配度<text class="manyi">{{periodData.rateString}}</text>!
			</view>
		</view>
		<!-- 天天抢购 -->
		<uni-collapse>
			<uni-collapse-item v-if="titleObj" :titleObj="titleObj" :open="false">
				<view>
					<!-- 折线图 -->
					<view class="average ">
						<view class="line-top-t">近<text style="color: #ff5847;">20</text>期成交价</view>
						<view class="history">
							<view class="left">
								最低价：
								<text class="history-low">¥{{minPrice}}</text>
							</view>
							<view class="right">
								最高价：
								<text class="history-high">¥{{maxPrice}}</text>
							</view>
						</view>
						<view class="qiun-columns">
							<view class="qiun-charts">
								<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" @touchstart="touchLineA"
								 @touchmove="moveLineA" @touchend="touchEndLineA"></canvas>
							</view>
						</view>
					</view>
				</view>
			</uni-collapse-item>
		</uni-collapse>
		<!-- 柱状图 -->
		<view class="average average-zhu" style="margin-top: 20upx;">
			<view class="qiun-columns">
				<view class="qiun-bg-white qiun-title-bar qiun-common-mt"></view>
				<view class="title"><view>当前商品平均价格</view><view>{{periodData.sceneConfig&&periodData.sceneConfig.hoistoryDesc}}</view></view>
				<view class="qiun-charts">
					<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" @touchstart="touchColumn"
								 @touchmove="moveColumn" @touchend="touchEndColumn"></canvas>
					 <view class="line-left"></view>
					 <view class="line-bottom"></view>
				</view>
				<view class="priceMsg">
					<view class="tip-price" :style="{top:pitem.top+'upx'}" :class="{show:pitem.isShow}" v-for="(pitem,index) in priceMsgArr" :key="index">
						{{pitem.userName + ' 出价：' + pitem.guessPrices}}
					</view>
				</view>
				<view v-if="isNoPrice" class="noPrice">
					<image src="../../static/img/temp/pic-wait-update.png"></image>
				</view>
			</view>
		</view>
		<!-- 我的预测 -->
		<view class="foremy" v-if="woDeYCData.length">
			<view class="forecast-top">
				<view class="left">
					<text class="left1">我的出价</text>
					<text class="le">已出价</text>
					<text class="left2">{{woDeYCData.length}}</text>
					<text class="left3">次</text>
				</view>
				<view @tap="toYCPage(1)" class="right"><image src="../../static/img/header/icon-xiangyou-n.png"></image></view>
			</view>
			<view class="forecast-bottom">
				<view v-for="(item,index) in woDeYCData" :key="index" class="box">
					<image v-if="item.isWin=='1'" src="../../static/img/temp/dianzan.png"></image>
					<view class="box1">
					</view>
					<view class="box2">
						<text class="pic">¥</text>
						<text class="money">{{item.guessPrices}}</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 全民预测 -->
		<view class="forecast" v-if="allYCData.length">
			<view class="forecast-top">
				<view class="left">
					<text class="left1">全民预测</text>
					<text class="left2">{{allYCCount}}</text>
					<text class="left3">条</text>
				</view>
				<view @tap="toYCPage(2)"  class="right"><image src="../../static/img/header/icon-xiangyou-n.png"></image></view>
			</view>
			<view class="forecast-bottom">
				<view class="box" v-for="(item,index) in allYCData" :key="index">
					<image v-if="item.isWin=='1'" src="../../static/img/temp/dianzan.png"></image>
					<view class="box1">
						<text>{{item.userName}}</text>
					</view>
					<view class="box2">
						<text class="pic">¥</text>
						<text class="money">{{item.guessPrices}}</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 说明 -->
		<view class="state">
			<view class="left">
				<text>场次：{{periodData.sceneConfig&&periodData.sceneConfig.sceneName}}</text>
				<text>退豆比例：{{periodData.sceneConfig&&periodData.sceneConfig.pointRate}}%</text>
			</view>
			<view class="right">
				<text>抢购时间：{{periodData.sceneConfig&&periodData.sceneConfig.panicBuyingTime}}分钟</text>
				<text>抢购手续费：{{periodData.sceneConfig&&periodData.sceneConfig.pointsNum}}豆/次</text>
			</view>
		</view>
		<!-- 玩法规则 -->
		<view class="top-regulation">
			<view class="regulation">
				<view class="left"><text class="qiang">玩法规则</text></view>
				<view class="right" @tap="toRulePage(1)">
					<text>详细规则</text>
					<image src="../../static/img/header/icon-xiangyou-n.png"></image>
				</view>
			</view>
			<view class="baoming">
				每期选出一名中奖用户，我的出价和抢购结束后的当前均价最接近(即匹配度最高)，且出价用时最短者获奖。
			</view>
		</view>
		<!-- 抢购流程 -->
		<view class="top-technological">
			<view class="technological">
				<view class="left"><text class="qiang">抢购流程</text></view>
				<view class="right">
					<text>详细流程</text>
					<image src="../../static/img/header/icon-xiangyou-n.png"></image>
				</view>
			</view>
			<view class="liucheng"><image src="../../static/img/header/pic-liucheng-n.png"></image></view>
		</view>
		<!-- 最新成交 -->
		<view class="make">
			<view class="make-top">
				<view class="left"><text class="qiang">最新成交</text></view>
				<view class="right" @tap="btnMoreSuccess">
					<image src="../../static/img/header/icon-xiangyou-n.png"></image>
				</view>
			</view>
			<view class="make-bottom">
				<view @tap="btnMoreSuccess(item)" class="makes" v-for="item in newSuccessData" :key="item.periodId">
					<image :src="item.img"></image>
					<view class="jia">
						<text class="qiang">抢购均价</text>
						<text class="money">¥{{item.periodLastPrice}}</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 开始抢购 -->
		<view class="start">
			<block v-if="periodData.executeStatus == 1">
				<view class="start-left">
					<view class="input">
						<input type="digit" placeholder="请输入价格"  v-model="numberPrice"/>
						<view class="refresh" @tap="toRandPrice"></view>
					</view>
				</view>
				<view @tap="toPrice" class="start-right">
					<text class="kaishi">开始抢购</text>
					<text class="meici">{{periodData.sceneConfig.pointsNum}}豆/次</text>
				</view>
				<view @tap="toPopPrice" class="btn-batchPrice">批量出价</view>
			</block>
			<block v-else-if="periodData.executeStatus >= 2">
				<view @tap="toPrice" class="start-right" style="width: 100%;">
					<text class="kaishi">{{nextQiStr}}</text>
				</view>
			</block>
		</view>
		<view class="pop_info" :class="{show:(showDui|showSure)}">
			<view class="layer"></view>
			<view class="duiChange" :class="{show:showDui}">
				<image @tap="closePop(1)" class="close" src="../../static/img/temp/icon-close.png"></image>
				<image class="pic1" src="../../static/img/temp/pic-duidou.png"></image>
				<view class="tips">豆子不足</view>
				<button @tap="eventButtonNav(1)" type="primary">去商城兑换</button>
			</view>
			<view class="sureOrder" :class="{show:showSure}">
				<image @tap="closePop(2)" class="close" src="../../static/img/temp/icon-close.png"></image>
				<image class="pic1"  src="../../static/img/temp/pic-success.png"></image>
				<view class="tips">恭喜您抢购到<text>{{periodData.title}}</text></view>
				<button @tap="eventButtonNav(2)" type="primary">去确认订单</button>
			</view>
		</view>
		<view ref="masklayer" @tap="hidePop" class="mask_layer" :class="{show:showPay}"></view>
		<view class="pop_price" :class="{show:showPay}">
			<view class="pop_price_h">
				<text><text class="icon-tip"></text>
					 我的出价和抢购结束后的当前均价最接近(即匹配度最高)，且用时最短者获奖，默认系统随机出价，可自行修改
					 初级场出价范围0~99.99
				</text>
			</view>
			<view class="input-wrap">
				<view class="left">
					<textarea type="text" @input="batchPriceChange" v-model="textBatchPrice" placeholder="请输入价格，多个用“,”逗号隔开，例：88.88,66.66" placeholder-style="color:#999999;"/>
					<view @tap="clearPriceText" class="clear">清空</view>
				</view>
				<view class="right">
					<view @tap="btnBatchPrice(5)" class="btn-quick">随机出价5次</view>
					<view @tap="btnBatchPrice(10)" class="btn-quick">随机出价10次</view>
					<view @tap="btnBatchPrice(20)" class="btn-quick">随机出价20次</view>
				</view>
			</view>
			<view @tap="batchToPrice" class="btnPay" hover-class="navigator-hover">出价</view>
		</view>
		<view ref="masklayer" @tap="hidePopPrice" class="mask_layer_price" :class="{show:showTipPrice}"></view>
		<view class="pop_price_tips" :class="{show:showTipPrice}">
			<view class="title">什么是当前均价？</view>
			<view class="tips-wrap">
				当前均价=当前商品所有用户（出价之和/出价次数之和）所得来的平均价格，当前均价是随着用户出价不断变化的，以抢购结束后的当前均价为判断标准。
				当前均价不会实时更新，在抢购过程中，系统会在相应时间段内更新当前均价，给用户出价作为参考。
			</view>
			<view class="btnok" @tap="hidePopPrice">我知道了</view>
		</view>
	</view>
</template>

<script>
//倒计时
import uniCountdown from '../../components/uni-countdown/uni-down.vue';
// 数字按钮
import uniNumberBox from '@/components/uni-number-box/uni-number-box.vue';
// 折叠面板
import uniCollapse from '../../components/uni-collapse/uni-collapse.vue';
import uniCollapseItem from '../../components/uni-collapse-item/uni-collapse-item.vue';
// 柱状图 折线图
import uCharts from '../../components/u-charts/u-charts.js';
var _self;
var canvaLineA=null;
var canvaColumn = null;
var winnerTimmer = null;
export default {
	components: { uniNumberBox, uniCollapse, uniCollapseItem, uniCountdown },
	data() {
		return {
			// 轮播图数据
			indicatorDots: true,
			autoplay: true,
			interval: 3000,
			duration: 1000,
			// 折线图'
			cWidth: '',
			cHeight: '',
			cWidthZhu:'40',
			pixelRatio: 1,
			serverData: '',
			periodId:'',
			periodData:{},
			periodHistoryData:{},
			periodCurrentPriceData:[],//当前期价格
			lastUpdateTime:'',//更新时间
			minPrice:0,
			maxPrice:0,
			newLottery:{},
			titleObj:null,
			isTimeUpLoading:false,//是否为倒计时结束正在获取中的状态...
			timeTipText:'',//顶部倒计时文本
			timeTipText1:'',
			currentTime:'',//当前时间
			showDateTime:false,//是否显示倒计时
			countdownTime:{h:0,m:0,s:0},//倒计时
			isRefreshTime:true,
			woDeYCData:[],//我的预测
			allYCData:[],//全民预测
			allYCCount:0,//全民预测总条数
			newSuccessData:[],//最新成交数据
			isShowLottery:false,//显示中奖
			showDui:false,//显示兑换pop
			showSure:false,//显示兑换pop
			numberPrice:'',//出价
			numberCount:1,//出价次数
			isFirstLoad:true,//是否第一次加载
			nextQiStr:'抢购结果获取中...',
			isMyWin:'',//是否我中奖
			isSale:'',//是否在售
			isSaleMsg:'',//停售消息
			isOpenSocket:false,//是否打开websocket
			winnerList:[],//中奖消息列表
			currentWinnerMsgId:'',
			currentWinnerMsg:'',//当前中奖消息
			isUpdatePrice:false,//价格动画
			priceMsgArr:[],//出价消息列表
			isNoPrice:false,//是否已经更新价格
			showPay:false,
			showTipPrice:false,
			textBatchPrice:'',
			isSetChange:false,
			maxRandomPrice:100, //出价最大值
			trySocketCount:0,
			batchPrice:[//批量出价
				{price:''},
				{price:''},
				{price:''},
				{price:''},
				{price:''},
				{price:''}
			] 
		};
	},

	onLoad(option) {
		_self = this;
		uni.closeSocket();
		this.cWidth = uni.upx2px(750);
		this.cHeight = uni.upx2px(400);
		this.cWidthZhu = uni.upx2px(40);
		this.periodId = option.periodId;
		this.getQihaoData();
		this.getHistoryData(); //获取历史数据
		setTimeout(()=>{
			this.getNewSuccessData();//获取最新成交数据
		},1200);
	},
	onBackPress(e) {
		uni.closeSocket();
		//如果还存在，则清除掉中奖轮播
		winnerTimmer&&clearTimeout(winnerTimmer);
		this.isRefreshTime = false;
	},
	onShow() {
		//如果还存在，则清除掉中奖轮播
		winnerTimmer&&clearTimeout(winnerTimmer);
	},
	methods: {
		getQihaoData(callback){//获取期号数据
			this.$api.postAPI('period/queryPeriodDetail',{"id": this.periodId}).then(res=>{
				uni.hideLoading();
				if(res.data.code == 0){
					if(this.periodData.executeStatus&&callback&&res.data.data&&(this.periodData.executeStatus == res.data.data.executeStatus)){
						return callback(res.data.data.executeStatus);
					}
					let oldPrice =  this.periodData.lastAvgPrice;
					let newPrice = res.data.data.lastAvgPrice;
					this.periodData = res.data.data;
					this.currentTime = res.data.timestamp;
					this.lastUpdateTime = new Date(this.currentTime).Format('hh:mm:ss');
					this.handlerGuess(res.data.timestamp);
					this.isFirstLoad = false;
					this.isSale = !res.data.rest;
					this.isSaleMsg = res.data.rest ? res.data.msg:'';
					this.isTimeUpLoading = false; //是否为倒计时结束状态
					//倒计时结束回调时更新价格动画
					if(callback&&this.periodData.executeStatus == 2){
						this.periodData.lastAvgPrice = oldPrice;
						this.isUpdatePrice = true;
						setTimeout(()=>{
							this.periodData.lastAvgPrice = newPrice;
							this.isUpdatePrice = false;
						},400);
					}
					//获取当前柱形图数据
					this.getCurrentLineData();
					this.getWoDeYC(callback);
					if(this.periodData.executeStatus>2){
						//获取全民预测记录
						this.getAllYCData();
					}
					//抢购中接收推送消息
					if(this.periodData.executeStatus == 1){
						this.toWebSocket();
					}
					if((this.periodData.executeStatus < 3)&&!callback){
						setTimeout(()=>{
							this.addWatchNumber();//记录围观人数
						},1000);
					}
					winnerTimmer&&clearTimeout(winnerTimmer);
					if(!callback){
						setTimeout(()=>{
							this.getWinnerList();//获取中奖消息
						},2000);
					}
				} else {
					return uni.showToast({ title: res.data.msg, icon: 'none',duration:3000 });
				}
			}).catch(err=>{
				uni.hideLoading();
				return uni.showToast({ title: '网络错误', icon: 'none',duration:3000 });
			})
		},
		getHistoryData(){//获取往期历史走势数据
			this.$api.postAPI('period/historyList',{"id": this.periodId}).then(res=>{
				uni.hideLoading();
				if(res.data.code == 0){
					this.periodHistoryData = res.data.data;
					
					let LineA = { categories: [], series: [] };
					//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
					let dataNumArr = res.data.data.list.map(res=>{return res.lastAvgPrice});
					LineA.series = [{name:'均价',color:'#FF5847',data:dataNumArr}];
					LineA.categories = new Array(dataNumArr.length).fill(null).map((_, h) => h+1);
					this.minPrice = res.data.data.minmax&&res.data.data.minmax.minPrice||0;
					this.maxPrice = res.data.data.minmax&&res.data.data.minmax.maxPrice||0;
					this.newLottery = res.data.data.newPeriodLotteryInfo;
					this.titleObj = {name:'天天抢购',...this.newLottery};
					this.showLineA('canvasLineA', LineA,{min:this.minPrice,max:this.maxPrice});
					
				} else {
					return uni.showToast({ title: res.data.msg, icon: 'none',duration:3000 });
				}
			}).catch(err=>{
				uni.hideLoading();
				return uni.showToast({ title: '网络错误', icon: 'none',duration:3000 });
			})
		},
		getCurrentLineData(){//获取当前期走势数据
			this.$api.postAPI('period/periodHistoryList',{"id": this.periodId}).then(res=>{
				uni.hideLoading();
				if(res.data.code == 0){
					this.periodCurrentPriceData = res.data.data;
					if(res.data.data&&res.data.data.length > 0 ){//更新时间
						let lastTime = res.data.data[res.data.data.length - 1].createTime;
						lastTime&&(this.lastUpdateTime = new Date(lastTime).Format('hh:mm:ss'));
					}
					
					let Column = { categories: [], series: [] };
					//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
					let dataNumArr = res.data.data.map(res=>{return res.curAvgPrice});
					Column.series = [{name:'均价',color:'rgba(255,88,71,0.3)',data:dataNumArr}];
					let curStar = this.periodData.guessStartTime;
					let xArr = res.data.data.map(res=>{return (new Date(res.createTime)).Format('hh:mm')});
					let totalL = this.periodData.sceneConfig.frequencyNum + 1;
					let timeSpan = 5*60*1000;
					if(this.periodData.sceneConfig.sceneName == '初级场'){
						timeSpan = 2*60*1000;
					} else if(this.periodData.sceneConfig.sceneName == '中级场'){
						timeSpan = 3*60*1000;
					}
					if(this.periodData.sceneConfig.historyIntervalTime){
						timeSpan = this.periodData.sceneConfig.historyIntervalTime *60*1000;
					}
					if(xArr.length == 0){
						this.isNoPrice = true;
						for(let i = 0;i < totalL;i++){
							curStar += timeSpan;
							xArr.push(new Date(curStar).Format('hh:mm'));
						}
					} else if((xArr.length > 0) && (xArr.length < totalL)){
						this.isNoPrice = false;
						let _last = this.periodCurrentPriceData[this.periodCurrentPriceData.length - 1].createTime;
						let _total = totalL - xArr.length;
						for(let i = 0;i < _total;i++){
							_last += timeSpan;
							xArr.push(new Date(_last).Format('hh:mm'));
						}
					} else {
						this.isNoPrice = false;
					}
					if(((this.periodCurrentPriceData.length>0)&&(this.periodData.executeStatus==3)) || (xArr.length == totalL)){
						xArr[xArr.length - 1] = '结束';
					}
					Column.categories = xArr;
					this.showColumn('canvasColumn', Column,xArr.length > 6 ? true:false);
					
				} else {
					return uni.showToast({ title: res.data.msg, icon: 'none',duration:3000 });
				}
			}).catch(err=>{
				uni.hideLoading();
				return uni.showToast({ title: '网络错误', icon: 'none',duration:3000 });
			})
		},
		getWoDeYC(callback){//获取我的预测数据
			let token = uni.getStorageSync('token');
			let userInfo_token = uni.getStorageSync('userInfo_token');
			if(!token || !userInfo_token){
				this.nextQiStr = '抢购下期';
				return ;
			} 
			let params = {
				currentPage:1,
				data:{"id": this.periodId},
				pageSize:4
			}
			this.$api.postAPI('guess/queryMyPeriodGuess',{"id": this.periodId}).then(res=>{
				uni.hideLoading();
				if(res.data.code == 0){
					this.woDeYCData = res.data.data;
					if(this.woDeYCData&&(this.woDeYCData.length>0)){
						let _userInfo = uni.getStorageSync('userInfo');
						if(_userInfo){
							let nickName = _userInfo.nickName?_userInfo.nickName:'';
							this.nextQiStr = this.periodData.userName == nickName ? '恭喜您抢购成功，去确认订单！':'抢购失败，抢购下期';
							this.isMyWin = this.periodData.userName == nickName? true:false;
							if((this.periodData.executeStatus > 1) && this.isMyWin && callback){//我中奖，去确认订单
								this.showSure = true;
							}
						} else {
							this.nextQiStr = '抢购下期';
						}
					} else{
						this.nextQiStr = '抢购下期';
					}
				} else {
					return uni.showToast({ title: res.data.msg, icon: 'none',duration:3000 });
				}
			}).catch(err=>{
				uni.hideLoading();
				return uni.showToast({ title: '网络错误', icon: 'none',duration:3000 });
			})
		},
		getAllYCData(){//获取期号数据
			let params = {
				currentPage:1,
				data:{"id": this.periodId},
				pageSize:4
			}
			this.$api.postAPI('period/panicBuyingRecord',params).then(res=>{
				uni.hideLoading();
				if(res.data.code == 0){
					this.allYCData = res.data.data.data;
					this.allYCCount = res.data.data.totalCount;
				} else {
					return uni.showToast({ title: res.data.msg, icon: 'none',duration:3000 });
				}
			}).catch(err=>{
				uni.hideLoading();
				return uni.showToast({ title: '网络错误', icon: 'none',duration:3000 });
			})
		},
		getNewSuccessData(){//获取最新成交数据
			let params = {
				currentPage:1,
				pageSize:3
			}
			this.$api.postAPI('guess/newGuessResult',params).then(res=>{
				uni.hideLoading();
				if(res.data.code == 0){
					this.newSuccessData = res.data.data.data;
				} else {
					return uni.showToast({ title: res.data.msg, icon: 'none',duration:3000 });
				}
			}).catch(err=>{
				uni.hideLoading();
				return uni.showToast({ title: '网络错误', icon: 'none',duration:3000 });
			})
		},
		handlerGuess(timestamp){//处理事件
			let currentTime = new Date(timestamp);
			let _time = [0,0,0];
			if(this.periodData.executeStatus == 0){
				this.timeTipText = '限时抢购';
				this.timeTipText1 = '距开场';
				this.showDateTime = true;
				let startTime = new Date(this.periodData.guessStartTime);
				let date1 = startTime.getTime() - currentTime.getTime();
				_time = date1 > 0 ? this.getMSDate(date1):[0,0,0];
			} else if(this.periodData.executeStatus == 1){
				this.timeTipText = '抢购中';
				this.timeTipText1 = '距结束';
				this.showDateTime = true;
				let endTime = new Date(this.periodData.guessEndTime);
				let date2 = endTime.getTime() - currentTime.getTime();
				_time = date2 > 0 ? this.getMSDate(date2):[0,0,0];
			} else if(this.periodData.executeStatus == 2){
				this.timeTipText = '结果确认中';
				this.timeTipText1 = '';
				this.showDateTime = true;
				let lotteryTime = new Date(this.periodData.lotteryTime);
				let date3 = lotteryTime.getTime() - currentTime.getTime();
				_time = date3 > 0 ? this.getMSDate(date3):[0,0,0];
			} else if(this.periodData.executeStatus == 3){
				this.timeTipText = '已结束';
				this.timeTipText1 = '';
				this.showDateTime = false;
				_time = [0,0,0];
			}
			this.isRefreshTime = false;
			this.$nextTick(()=>{
				this.isRefreshTime = true;
				this.countdownTime.h = _time[0];
				this.countdownTime.m = _time[1];
				this.countdownTime.s = _time[2];
			})
		},
		getWinnerList(){//获取中奖列表消息
			this.$api.postAPI('period/queryWinInfoLunbo').then(res=>{
				uni.hideLoading();
				if(res.data.code == 0){
					winnerTimmer&&clearTimeout(winnerTimmer);
					this.winnerList = res.data.data;
					this.handlerWinner();
				} else {
					return uni.showToast({ title: res.data.msg, icon: 'none',duration:3000 });
				}
			}).catch(err=>{
				uni.hideLoading();
				return uni.showToast({ title: '网络错误', icon: 'none',duration:3000 });
			})
		},
		handlerWinner(){//处理中奖列表轮播
			this.currentWinnerMsgId = this.currentWinnerMsgId||0;
			if((this.currentWinnerMsgId > 0) && (this.currentWinnerMsgId >= (this.winnerList.length - 1))){
				this.currentWinnerMsgId = 0;
				this.getWinnerList();
			}
			let currentWinner = this.winnerList[this.currentWinnerMsgId];
			this.currentWinnerMsg = `恭喜${currentWinner.nickName}用户,获得${currentWinner.title}`;
			setTimeout(()=>{
				this.isShowLottery = true;
			},1000);
			winnerTimmer = setTimeout(()=>{
				this.currentWinnerMsgId++;
				this.handlerWinner();
			},40000);
			setTimeout(()=>{
				this.isShowLottery = false;
			},11000);
		},
		showLineA(canvasId, chartData,minmax) {
			canvaLineA = new uCharts({
				$this: _self,
				canvasId: canvasId,
				type: 'line',
				fontSize: 11,
				legend: false,
				dataLabel: true,
				dataPointShape: true,
				background: '#FFFFFF',
				pixelRatio: _self.pixelRatio,
				categories: chartData.categories,
				series: chartData.series,
				animation: true,
				enableScroll: true, //开启图表拖拽功能
				xAxis: {
					gridColor: '#CCCCCC',
					disableGrid: false,
					scrollShow: true,
					type: 'calibration',
					itemCount:7
				},
				yAxis: {
					disableGrid: true,
					dashLength: 4,
					splitNumber: 2,
					min: minmax.min,
					max: minmax.max
				},
				width: _self.cWidth,
				height: _self.cHeight,
				extra: {
					line: {
						type: 'straight'
					}
				}
			});
		},
		touchLineA(e) {
			canvaLineA.scrollStart(e);
		},
		moveLineA(e) {
			canvaLineA.scroll(e);
		},
		touchEndLineA(e) {
			canvaLineA.scrollEnd(e);
			//下面是toolTip事件，如果滚动后不需要显示，可不填写
			canvaLineA.showToolTip(e, {
				format: function(item, category) {
					return category + ' ' + item.name + ':' + item.data
				}
			});
		},
		touchColumn(e) {
			canvaColumn.scrollStart(e);
		},
		moveColumn(e) {
			canvaColumn.scroll(e);
		},
		touchEndColumn(e) {
			canvaColumn.scrollEnd(e);
		},
		showColumn(canvasId, chartData,canXScroll) {
			canvaColumn = new uCharts({
				$this: _self,
				canvasId: canvasId,
				type: 'column',
				legend: false,
				fontSize: 11,
				background: '#ffffff',
				pixelRatio: _self.pixelRatio,
				animation: true,
				categories: chartData.categories,
				series: chartData.series,
				enableScroll: true, //开启图表拖拽功能
				scrollPosition:'right',
				xAxis: {
					itemCount:7,
					disableGrid: true,
					scrollShow:canXScroll,
					scrollAlign:'right'
				},
				yAxis: {
					disableGrid: true
				},
				dataLabel: true,
				width: _self.cWidth,
				height: _self.cHeight,
				extra: {
					column: {
						width: _self.cWidthZhu
					}
				}
			});
		},
		getMSDate(date3){
			//计算出相差天数
			var days=Math.floor(date3/(24*3600*1000))
			//计算出小时数
			var leave1=date3%(24*3600*1000)    //计算天数后剩余的毫秒数
			var hours=Math.floor(leave1/(3600*1000))
			//计算相差分钟数
			var leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数
			var minutes=Math.floor(leave2/(60*1000))
			//计算相差秒数
			var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
			var seconds=Math.round(leave3/1000)
			return [hours,minutes,seconds];
		},
		timeup(){ //倒计时结束
			if(this.isFirstLoad) return;
			console.log('ttt---detail-time up---')
			if((this.periodData.executeStatus>=0) && (this.periodData.executeStatus<3)){//总共延缓5秒，3次试尝试
				this.timeTipText1 = '正在获取中...';
				this.isTimeUpLoading = true;
				setTimeout(()=>{
					this.setGetData();
				},1000);
			}
		},
		setGetData(){
			this.getQihaoData((res)=>{
				if(this.periodData.executeStatus == res) {
					setTimeout(()=>{
						this.setGetData();
					},2000);
				}
			})
		},
		toWebSocket(){
			let _this = this;
			if(this.trySocketCount > 3){
				return;
			}
			uni.closeSocket();
			setTimeout(()=>{
				uni.connectSocket({
				  url: `ws://112.74.21.125:8091?periodId=${_this.periodId}`
				});
				uni.onSocketOpen(function (res) {
				  console.log('WebSocket连接已打开！');
				  _this.isOpenSocket = true;
				});
				uni.onSocketError(function (res) {
				  console.log('WebSocket连接打开失败，请检查！');
				  _this.isOpenSocket = false;
				  setTimeout(()=>{
					  _this.trySocketCount++;
					  _this.toWebSocket();
				  },1500);
				});
				uni.onSocketClose(function(){
					_this.isOpenSocket = false;
				})
				uni.onSocketMessage(function (res) {
				  console.log('收到服务器内容：' + res.data);
				  let data = JSON.parse(res.data);
				  if(data.serviceId == 1000){//柱形图消息
					_this.isNoPrice = false;
					_this.updateZXChart(data.data);
					_this.isUpdatePrice = true;
					setTimeout(()=>{
						_this.periodData.lastAvgPrice = data.data.curAvgPrice;
						_this.isUpdatePrice = false;
					},500);
				  } else if(data.serviceId == 1001){//出价
						_this.priceMsgArr.push({
							userName:data.data.userName,
							guessPrices:data.data.guessPrices,
							isShow:false,
							top:_this.random(0,360)
						});
						setTimeout(()=>{
							_this.priceMsgArr[0].isShow = true;
						},300);
						setTimeout(()=>{
							_this.priceMsgArr.shift();
						},9000)
					  
				  } else if(data.serviceId == 1004){//围观人数
					  _this.periodData.watchNum = data.data.num;
				  } else if(data.serviceId == 1005){//参与人数
					  _this.periodData.biddingTimes = data.data.num;
				  }
				});
			},300);
		},
		random(lower, upper) {
			return Math.floor(Math.random() * (upper - lower)) + lower;
		},
		toPrice(){
			if(!this.isSale){
				return uni.showToast({ title: this.isSaleMsg, icon: 'none',duration:3000 });
			}
			if(this.periodData.executeStatus == 1){//正在抢购中
				this.userToPrice();
			} else if(this.periodData.executeStatus > 1){//抢购下期
				if(this.isMyWin){//我中奖，去确认订单
					//this.showSure = true;
					this.eventButtonNav(2);
				} else{
					this.getNexQi();
				}
			}
		},
		async userToPrice(isBatch,priceList){
			let curPrice = '',priceCount = 1;
			if(isBatch){
				let isCheckTrue = true;
				let curArr = [];
				for (let item of priceList) {
					let _curPrice = item.price ? parseFloat(item.price):0;
					if(_curPrice < 0){
						uni.showToast({ title: '请输入大于0的数字', icon: 'none' });
						 isCheckTrue = false;
						return false;
					}
					curArr.push(_curPrice);
				}
				if(!isCheckTrue) return;
				curPrice = curArr.join();
				priceCount = curArr.length;
			} else{
				curPrice = this.numberPrice ? parseFloat(this.numberPrice):0;
				if(curPrice <= 0){
					return uni.showToast({ title: '请输入大于0的数字', icon: 'none',duration:3000 }); 
				}
				priceCount = 1;
			}
			//判断用户是否已登录
			let token = uni.getStorageSync('token');
			let userInfo_token = uni.getStorageSync('userInfo_token');
			if(!token || !userInfo_token){
				return uni.navigateTo({url:'/pages/login/login'});
			}
			let myPoints = await this.getMyPoints();
			let curPoints = priceCount * ((this.periodData.sceneConfig&&this.periodData.sceneConfig.pointsNum)|0);
			if(curPoints > myPoints){//去购换豆子
				isBatch&&this.hidePop();
				//return this.showDui = true
				return uni.navigateTo({
					url:'/pages/product/store'
				});
			}
			
			let params = {
				guessPrices: curPrice,
				outOrderNo:this.getUUID(),
				periodId: this.periodId
			}
			this.$api.postAPI('guess/guessPrice',params).then(res=>{
				uni.hideLoading();
				isBatch&&this.hidePop();
				if(res.data.code == 0){
					uni.showToast({ title: '出价成功',duration:3000 });
					setTimeout(()=>{
						this.getWoDeYC();//更新出价记录
					},1500)
				} else {
					return uni.showToast({ title: res.data.msg, icon: 'none',duration:3000 });
				}
			}).catch(err=>{
				uni.hideLoading();
				return uni.showToast({ title: '网络错误', icon: 'none',duration:3000 });
			})
		},
		batchToPrice(){
			if(this.textBatchPrice=='') {
				return uni.showToast({ title: '请至少填写一个价格', icon: 'none' });
			}
			let _tempArr = this.textBatchPrice.split(',');
			let _tempArr2 = [];
			for (let item of _tempArr) {
				let num = parseFloat(item);
				if(!isNaN(num)){
					_tempArr2.push({price:num.toFixed(2)})
				}
			}
			this.batchPrice = _tempArr2;
			let curArr = this.batchPrice.filter(item => {return item.price != ''});
			console.log(curArr.length);
			if(curArr.length == 0){
				return uni.showToast({ title: '请至少填写一个价格', icon: 'none' });
			}
			this.userToPrice(true,curArr);
		},
		getNexQi(){//抢购下一期
			this.$api.postAPI('period/nextNewPeroid',{'id':this.periodId}).then(res=>{
				uni.hideLoading();
				if(res.data.code == 0){
					uni.redirectTo({
						url:`/pages/product/detail?periodId=${res.data.data.id}`
					});
				} else {
					return uni.showToast({ title: res.data.msg, icon: 'none',duration:3000 });
				}
			}).catch(err=>{
				uni.hideLoading();
				return uni.showToast({ title: '网络错误', icon: 'none',duration:3000 });
			})
		},
		async getMyPoints(){
			let res = await this.$api.postAPI('points/detail');
			let res_data = res.data;
			if(res_data.code == 0){
				//this.giftPoints = res_data.data.giftPoints;
				return res_data.data.points;
			} else {
				uni.showToast({ title: res_data.msg, icon: 'none',duration:3000 });
				return 0;
			}
		},
		getUUID() {
			return 'xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/[xy]/g, function(c) {
				var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
				return v.toString(16);
			});
		},
		updateZXChart(item){
			this.periodCurrentPriceData.push(item);
			let curData = this.periodCurrentPriceData;
			if(curData&&curData.length > 0 ){//更新时间
				let lastTime = curData[curData.length - 1].createTime;
				lastTime&&(this.lastUpdateTime = new Date(lastTime).Format('hh:mm:ss'));
			}
			
			let Column = { categories: [], series: [],scrollPosition:'right',xAxis:{scrollAlign:'right'} };
			//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
			let dataNumArr = curData.map(res=>{return res.curAvgPrice});
			Column.series = [{name:'均价',color:'rgba(255,88,71,0.3)',data:dataNumArr}];
			let xArr = curData.map(res=>{return (new Date(res.createTime)).Format('hh:mm')});
			let totalL = this.periodData.sceneConfig.frequencyNum + 1;
			let timeSpan = 5*60*1000;
			if(this.periodData.sceneConfig.sceneName == '初级场'){
				timeSpan = 2*60*1000;
			} else if(this.periodData.sceneConfig.sceneName == '中级场'){
				timeSpan = 3*60*1000;
			}
			if(this.periodData.sceneConfig.historyIntervalTime){
				timeSpan = this.periodData.sceneConfig.historyIntervalTime *60*1000;
			}
			let _last = curData[curData.length - 1].createTime;
			let _total = totalL - xArr.length;
			for(let i = 0;i < _total;i++){
				_last += timeSpan;
				xArr.push(new Date(_last).Format('hh:mm'));
			}
			xArr[xArr.length - 1] = '结束';
			Column.categories = xArr;
			canvaColumn.updateData(Column);
		},
		closePop(index){//关闭弹窗
			if(index == 1){
				this.showDui = false;
			} else if (index == 2){
				this.showSure = false;
			} else{
				this.showDui = false;
				this.showSure = false;
			}
		},
		eventButtonNav(index){
			let url = '';
			if(index == 1){
				url = '/pages/product/store'
			} else if(index == 2){
				url = '/pages/order/order?state=1'
			}
			url&&uni.navigateTo({url});
		},
		btnMoreSuccess(item){
			if(item.periodId){
				uni.navigateTo({
					url:`/pages/product/detail?periodId=${item.periodId}`
				})
			} else{
				uni.navigateTo({
					url:'/pages/product/newlist?title=newlist'
				})
			}
		},
		//添加围观人数
		addWatchNumber(){
			this.$api.postAPI('period/watchNumber',{'id':this.periodId}).then(res=>{
				console.log('添加围观人数');
			}).catch(err=>{
				uni.hideLoading();
				return uni.showToast({ title: '网络错误', icon: 'none',duration:3000 });
			})
		},
		toYCPage(index){
			let url = index == 1 ? '/pages/product/wdyc':'/pages/product/allyc';
			uni.navigateTo({url:url+'?periodId=' + this.periodId});
		},
		toRulePage(index){
			uni.navigateTo({url:'/pages/product/playerRule'});
		},
		hidePop(){
			this.showPay = !this.showPay;
			setTimeout(()=>{
				this.$refs.masklayer.$el.style.display = 'none';
			},200);
		},
		toPopPrice(){
			this.$refs.masklayer.$el.style.display = 'block';
			setTimeout(()=>{
				this.showPay = true;
			},100);
		},
		random2(lower, upper) {
			return (Math.random() * (upper - lower) + lower).toFixed(2);
		},
		toRandPrice(){
			this.numberPrice = this.random2(1,this.maxRandomPrice);
		},
		batchPriceChange(e){//批量出价文本框input事件
			let curText = e.detail.value;
			if(curText=='' || this.isSetChange) return;
			this.isSetChange = true;
			setTimeout(()=>{
				this.textBatchPrice = curText.replace(/[^\d+(,\d\d\d)*.\d+$]/g,'');
				this.isSetChange = false;
			},10);
		},
		clearPriceText(){
			this.textBatchPrice = '';
		},
		btnBatchPrice(count){
			let _count = [];
			for(let i = 0 ;i < count; i++){
				_count.push(this.random2(1,this.maxRandomPrice));
			}
			this.textBatchPrice = _count.join();
		},
		showPriceTips(){//展示当前均价弹窗
			this.$refs.masklayer.$el.style.display = 'block';
			setTimeout(()=>{
				this.showTipPrice = true;
			},100);
		},
		hidePopPrice(){
			this.showTipPrice = !this.showTipPrice;
			setTimeout(()=>{
				this.$refs.masklayer.$el.style.display = 'none';
			},200);
		}
	}
};
</script>

<style lang="scss">
page {
	background: rgba(245, 245, 245, 1);
}
.detail{
	width: 750upx;
	overflow: hidden;
}
.purchase {
	width: 100%;
	height: 80upx;
	background: linear-gradient(90deg, rgba(252, 114, 126, 1) 0%, rgba(235, 35, 65, 1) 100%);
	background-color: #f97575;
	display: flex;
	justify-content: space-between;
	z-index: 100;
	position: fixed;
	top: 80upx;
	left: 0;
	top: var(--window-top);
	.left {
		padding: 0 10px;
		min-width: 130upx;
		height: 79upx;
		line-height: 80upx;
		text-align: center;
		color: #fff;
		letter-spacing: 2upx;
		background-color: #eb2341;
	}
	.left.c{background-color: #f37b8d;}
	.right {
		display: flex;
		padding: 0upx 30upx;
		.open {
			height: 79upx;
			line-height: 80upx;
			margin-right: 23upx;
			color: #fff;
			letter-spacing: 2upx;
		}
		.doentime {
			height: 79upx;
			line-height: 80upx;
			span {
				margin-right: 6upx;
				color: #fff;
			}
			span:not(:nth-child(2n)) {
				display: inline-block;
				width: 40upx;
				height: 40upx;
				line-height: 40upx;
				text-align: center;
				background: #ffffff;
				color: rgba(74, 74, 74, 1);
				border-radius: 10upx;
			}
		}
	}
}
/* 轮播图样式 */
.swiper {
	width: 100%;
	height: 600upx;
	margin-top: 80upx;
}
.swiper-item {
	height: 100%;
	width: 100%;
}
.swiper-item image {
	height: 100%;
	width: 100%;
}
.uni-padding-wrap{position: relative;}
.lotteryInfo{
	position: absolute;
	z-index: 99;
	background-color: rgba(0,0,0,0.7);
	color: #fff;border-radius: 20upx;
	height: 60upx;
	line-height: 60upx;
	padding: 0 20upx;
	bottom: 60upx;
	left: 0;
	transform: translateX(300%);
	transition: transform ease 0.6s,opacity ease-in 0.6s;
	opacity: 0;
	max-width: 680upx;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.lotteryInfo.show{
	transform: translateX(0);
	opacity: 1;
}
/* 抢购 */
.present {
	height: 266upx;
	background: rgba(255, 255, 255, 1);
	margin: 10upx 0upx 20upx 0upx;
	display: flex;
	flex-direction: column;
	.present-right {
		height: 266upx;
		display: flex;
		.left {
			flex: 1;
			background: rgba(255, 255, 255, 1);
			padding-left: 30upx;
			
			.present-left {
				width: 420upx;
				padding: 30upx 0upx 0 0upx;
				max-height: 88upx;
				overflow: hidden;
				text-overflow: ellipsis;
				.black {
					font-size: 36upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(0, 0, 0, 1);
					line-height: 100%;
				}
			}
			.worth {
				display: flex;
				align-items: center;
				.wort {
					font-size: 26upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(74, 74, 74, 1);
					text-align: center;
					margin-right: 20upx;
				}
				.money {
					width: 180upx;
					height: 67upx;
					font-size: 36upx;
					line-height: 67upx;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					color: rgba(255, 159, 0, 1);
				}
			}
			.words {
				font-size: 27upx;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				.kong {
					padding: 0upx 8upx 0upx 10upx;
				}
				.baoming {
					color: #d0021b;
				}
				.circusee {
					color: #4a90e2;
				}
			}
			.update {
				text {
					font-size: 20upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(74, 74, 74, 1);
				}
			}
		}
		.right {
			width: 300upx;
			display: flex;
			flex-direction: column;
			.riggt{
				height: 174upx;
				background: rgba(235, 35, 65, 1);
				width: 300upx;
				display: flex;
				flex-direction: column;
				align-items: center;
				.buy {
					font-size: 36upx;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					color: rgba(255, 255, 255, 1);
					padding-top: 20upx;
					height: 50upx;
					.price_tips{
						display: inline-block;
						width: 30upx;
						height: 30upx;
						margin-left: 10upx;
						background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAOVBMVEVHcEz///////////////////////////////////////////////////////////////////////99PJZNAAAAEnRSTlMAq57gBrlx7PYWRTrAj08iy1fAtO1DAAAB4klEQVRIx62X25aDIAxFQe6IiPP/HzsStWNrwqWMD12r6iaHJIaEMfSSXk9BGGuNCJP2kjVfTgf783bZoF0TOvMP8uT5XEfDDTBCmNvfUMbddNlR2q/HvdVrdWmZCuKjORXGDw/JeO7FRAKVy4Eu6PJuOfAF9bxU8JCTyhyHFxRCu5SfCF9yiYdtpcfyElhViaaDWCSJaZ6qmSQnRDn4amnJoeebEew+MyalZ16A7VvEnMG9uPshPZXnfRv3tphAfLWvaRCvmbvMOQvBYoTDzOf3r/1kHZy1wyxnS/gzbF0P7OzLNCejRMEQL34tgxum4fViNLXjAgxq9emu2AvnrFJ7zLMC2QuflD/W6ISZgtTQp/pO+MAmIrsqsIcUzf5a++EVkkzsv6wfZvlbKr5QeSaYzT9fwLtiOwYPyR5y2FCohpJkKD0HPoy5+EkKMowXpehioMkdncWgVIbYSsXhKkOFAkgftS+Gtx6QSOktFP0tpa1S9MnjBqrzSuxYVQ66Ld/fKgcdpKhxrZbfj1jycI8pRbzlupsi2gr0+mwrxhqasVaqtYkDG0Hi7aNpaB+D+9/GdaxlHmvWB8eEnOfqPtEIcZ90VMN88/1odAxl6nMoU7qj1sg5j4PC7sL3cXAmPPwLoa0zlsAWJmMAAAAASUVORK5CYII=);
						background-size: contain;
					}
				}
				.pic {
					color: rgba(255, 255, 255, 1);
					white-space: nowrap;
					overflow: hidden;
					height: 84upx;
					line-height: 84upx;
					padding-bottom: 20upx;
					.icon-price{
						display: inline-block;
						font-size: 40upx;
						font-family: PingFangSC-Medium;
						font-weight: 500;
					}
					.m{
						display: inline-block;
						font-size: 60upx;
						font-family: PingFangSC-Medium;
						font-weight: 500;
						transform: translateY(0);
						opacity: 1;
						background-color:transparent;
						transition: transform ease 0.4s,opacity ease-in 0.4s;
						&.up{
							opacity: 0;
							transform: translateY(-30upx);
							background-color: #ec8c8c;
						}
					}
				}
			}
			.update {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				text {
					font-size: 20upx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(74, 74, 74, 1);
				}
			}
		}
	}
}
/* 匹配度 */
.matched{
	margin: 30upx 30upx;
    height:356upx;
    background:rgba(255,255,255,1);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	.matched1{
		margin-top: 14upx;
		image{
			width: 300upx;
			height: 250upx;
		}
	}
	.matched2{
		margin-bottom: 26upx;
		font-size:28upx;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:#000000;
		.name{
            font-size:28upx;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:#FF5947;
		}
		.manyi{
			font-size:28upx;
			font-family:PingFangSC-Regular;
			font-weight:400;
			color:#FF5947;
		}
	}
}
/* 柱状图 */
.average {
	height: 556upx;
	background: rgba(255, 255, 255, 1);
	overflow: hidden;
	.title{
		display: flex;
		justify-content: space-between;
		padding: 0 30upx 30upx;
		view{
			font-size: 26upx;
			&:nth-child(2){
				font-size: 20upx;
			}
		}
	}
	.line-top-t{
		font-size: 26upx;
		padding: 0 30upx;
	}
	.history {
		padding: 10upx 30upx;
		display: flex;
		justify-content: space-between;
		.left {
			font-size: 26upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(0, 0, 0, 1);
			.history-low {
				font-size: 26upx;
				font-family: PingFangSC-Medium;
				color: #ff5847;
			}
		}
		.right {
			font-size: 26upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(0, 0, 0, 1);
			.history-high {
				font-size: 26upx;
				font-family: PingFangSC-Medium;
				color: #ff5847;
			}
		}
	}
	.qiun-columns {
		page {
			background: #f2f2f2;
			width: 509upx;
			overflow-x: hidden;
		}
		.qiun-padding {
			padding: 2%;
			width: 96%;
		}
		.qiun-wrap {
			display: flex;
			flex-wrap: wrap;
		}
		.qiun-rows {
			display: flex;
			flex-direction: row !important;
		}
		.qiun-columns {
			display: flex;
			flex-direction: column !important;
		}
		.qiun-common-mt {
			margin-top: 10upx;
		}
		.qiun-bg-white {
			background: #ffffff;
		}
		.qiun-title-bar {
			width: 96%;
			padding: 10upx 2%;
			flex-wrap: nowrap;
		}
		.qiun-title-dot-light {
			border-left: 10upx solid #0ea391;
			padding-left: 10upx;
			font-size: 32upx;
			color: #000000;
		}
		.qiun-charts {
			width: 750upx;
			height: 500upx;
			background-color: #ffffff;
			// padding: 30upx 80upx;
		}
		.charts {
			width: 750upx;
			height: 500upx;
			background-color: #ffffff;
			// padding: 30upx 20upx;
		}
	}
}
.average-zhu{
	position: relative;
	height: 540upx;
	.qiun-charts{
		position: relative;
	}
	.priceMsg{
		position: absolute;
		z-index: 8;
		width: 750upx;
		height: 400upx;
		left: 0;
		top:100upx;
		.tip-price{
			position: absolute;
			z-index: 9;
			background-color: #E5E5E5;
			color: #4a4a4a;
			padding: 6upx 20upx;
			border-radius: 18upx;
			height: 40upx;
			line-height: 40upx;
			font-size: 20upx;
			right: 0;
			transform: translateX(100%);
			opacity: 0.75;
			transition: transform ease-in 9s,opacity ease-in 8.5s;
			&.show{
				opacity:1;
				transform: translateX(-400%);
			}
		}
	}
	.noPrice{
		position: absolute;
		z-index: 7;
		width: 130upx;
		height: 110upx;
		top:50%;
		left: 50%;
		transform: translate(-50%,-50%);
		image{
			width: 100%;
			height: 100%;
		}
	}
	.line-left{
		position: absolute;
		width: 1upx;
		height: 348upx;
		left: 90upx;
		top:0;
		background-color: #E5E5E5;
	}
	.line-bottom{
		position: absolute;
		width: 620upx;
		height: 1upx;
		left: 90upx;
		top: 346upx;
		background-color: #E5E5E5;
	}
}
/* 我的预测 */
.foremy{
	margin-top: 30upx;
    height:227upx;
    background:rgba(255,255,255,1);
	.forecast-top{
		height: 86upx;
		border-bottom: 1upx solid #E0E7EB;
		padding: 0 30upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.left{
			.left1{
                font-size:34upx;
                font-family:PingFangSC-Medium;
                font-weight:500;
                color:rgba(0,0,0,1);
			}
			.le{
				margin-left: 40upx;
			}
			.left2{
                font-size:24upx;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:#FF3C0E;
			}
			.left3{
				font-size:24upx;
				font-family:PingFangSC-Regular;
				font-weight:400;
				color: #060606;
			}
		}
		.right{
			image{
				width: 30upx;
				height: 30upx;
			}
		}
	}
	.forecast-bottom{
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding: 0 10upx;
		margin-top: 20upx;
		.box{
			width:165upx;
            height:80upx;
            background:rgba(255,255,255,1);
            border-radius:20upx;
            border:2upx solid #FF5847;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			position: relative;
			margin-right: 10upx;
			image{
				position: absolute;
				width: 60upx;
				height: 60upx;
				left: -8upx;
				top:-14upx;
			}
			.box1{
				width: 100%;
                font-size:30upx;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(74,74,74,1);
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.box2{
				width: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				text-align: center;
				.pic{
                    font-size:24upx;
                    font-family:PingFangSC-Medium;
                    font-weight:500;
                    color:rgba(255,88,71,1);
				}
				.money{
					 font-size:30upx;
					font-family:PingFangSC-Medium;
					font-weight:500;
					color:rgba(255,88,71,1);
				}
			}
		}
	}
}
/* 全名预测 */
.forecast{
	margin-top: 30upx;
    height:288upx;
    background:rgba(255,255,255,1);
	.forecast-top{
		height: 86upx;
		border-bottom: 1upx solid #E0E7EB;
		padding: 0 30upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.left{
			.left1{
                font-size:34upx;
                font-family:PingFangSC-Medium;
                font-weight:500;
                color:rgba(0,0,0,1);
				vertical-align: -4upx;
			}
			.left2{
				margin-left: 40upx;
                font-size:24upx;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:#FF3C0E;
			}
			.left3{
				font-size:24upx;
				font-family:PingFangSC-Regular;
				font-weight:400;
				color: #060606;
			}
		}
		.right{
			image{
				width: 30upx;
				height: 30upx;
				margin-top: 20upx;
			}
		}
	}
	.forecast-bottom{
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding: 0 10upx;
		margin-top: 20upx;
		.box{
			width:150upx;
            height:134upx;
            background:rgba(255,255,255,1);
            border-radius:20upx;
            border:2upx solid rgba(155,155,155,1);
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			position: relative;
			padding: 0 10upx;
			margin-right: 10upx;
			image{
				position: absolute;
				width: 60upx;
				height: 60upx;
				left: -8upx;
				top:-14upx;
			}
			.box1{
				width: 100%;
                font-size:30upx;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(74,74,74,1);
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.box2{
				text-align: center;
				.pic{
                    font-size:24upx;
                    font-family:PingFangSC-Medium;
                    font-weight:500;
                    color:rgba(255,88,71,1);
				}
				.money{
					 font-size:30upx;
					font-family:PingFangSC-Medium;
					font-weight:500;
					color:rgba(255,88,71,1);
				}
			}
		}
	}
}
/* 说明 */
.state {
	height: 134upx;
	background: rgba(255, 255, 255, 1);
	margin: 20upx 0upx 20upx 0upx;
	display: flex;
	align-items: center;
	justify-content: center;
	justify-content: space-between;
	padding: 0upx 30upx;
	margin-top: 70upx;
	font-size: 26upx;
	font-family: PingFangSC-Regular;
	font-weight: 400;
	color: rgba(74, 74, 74, 1);
	view{
		font-size: 26upx;
	}
	.left {
		display: flex;
		flex-direction: column;
	}
	.right {
		display: flex;
		flex-direction: column;
	}
}
/* 玩法规则 */
.top-regulation {
	height: 277upx;
	background-color: #ffffff;
	margin-bottom: 20upx;
	.regulation {
		height: 86upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0upx 30upx;
		border-bottom: 1upx solid #e0e7eb;
		.left {
			display: flex;
			align-items: center;
			justify-content: center;
			.qiang {
				font-size: 34upx;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				color: rgba(0, 0, 0, 1);
			}
		}
		.right {
			display: flex;
			align-items: center;
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
			}
		}
	}
	.baoming {
		height: 190upx;
		padding: 30upx;
		font-size: 26upx;
		color: #4a4a4a;
		image {
			width: 100%;
			height: 100%;
		}
	}
}

/* 抢购流程 */
.top-technological {
	height: 212upx;
	background-color: #ffffff;
	.technological {
		height: 86upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0upx 30upx;
		border-bottom: 1upx solid #e0e7eb;
		.left {
			display: flex;
			align-items: center;
			justify-content: center;
			.qiang {
				font-size: 34upx;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				color: rgba(0, 0, 0, 1);
			}
		}
		.right {
			display: flex;
			align-items: center;
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
			}
		}
	}
	.liucheng {
		widows: 100%;
		height: 126upx;
		image {
			width: 100%;
			height: 100%;
		}
	}
}
/* 最新成交 */
.make{
    height:370upx;
    background:rgba(255,255,255,1);
	margin-bottom: 130upx;
	margin-top: 30upx;
	.make-top{
		height: 86upx;
		border-bottom: 1upx solid #E0E7EB;
		padding: 0 30upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.left{
			text{
                font-size:34upx;
                font-family:PingFangSC-Medium;
                font-weight:500;
                color:rgba(0,0,0,1);
			}
		}
		.right{
			image{
				width:30upx;
                height:30upx;
			}
		}
	}
	.make-bottom{
		display: flex;
		align-items: center;
		justify-content: space-around;
		
		.makes{
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 24upx;
			image{
				width: 180upx;
				height: 180upx;
			}
			.jia{
				margin-top: 23upx;
				.qiang{
					margin-right: 12upx;
                    font-size:20upx;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(74,74,74,1);
				}
				.money{
                    font-size:24upx;
                    font-family:PingFangSC-Medium;
                    font-weight:500;
                    color:rgba(255,159,0,1);
				}
			}
		}
	}
}
/* 开始抢购 */
.start {
	.jia1 /deep/ .uni-numbox__value{
		width: 100upx;
	}
	.jia1 /deep/ .uni-numbox__value input{
		margin-top: 6upx;
	}
	height: 102upx;
	background: rgba(255, 255, 255, 1);
	display: flex;
	position: fixed;
	left: 0upx;
	bottom: 0upx;
	width: 100%;
	z-index: 120;
	.start-left {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: 20upx;
		text{
			font-size: 24upx;
		}
		.input{
			position: relative;
			input{
				width: 270upx;
				height: 80upx;
				line-height: 80upx;
				border: 2upx solid #9B9B9B;
				padding: 0 8upx;
				color:rgba(0,0,0,0.25);
				border-radius:10upx;
			}
			.refresh{
				position: absolute;
				z-index: 11;
				width: 30upx;
				height: 34upx;
				background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABEBAMAAAAvo0vtAAAAIVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAt9G3DAAAAC3RSTlMAgHlhDFJCbh0mNL7kdXYAAAH2SURBVEjHhVXBTsJAEK0CUrhNiyKcrHpQT5AYjJ4KXjzSmHCGGDXeaEQTb4CJXtHEaDxhNH6n3dlu292drnMh9HV2dt68ebUsOd53ppYh2rBhgj2AoRleN8PQN8OuGYZDM1z3Saz4+QsYEwK0LzyIw9G5eUrAKPZU9BGy4SxMKMCuhK4pKLSkK7cVVCb2VU2WeK2qqDzUr/i6nQ+fdyfNtMJR90eQ2pSS5xydJpxLTRdDPHmZjGRfSi5AZoheQvhbh8/tJduoJ/guxafws0WjoRh21I3jCz4T/QSiShj315PmX73JyIbNZcRgffxhTF4IpLRZlhNJSJ8uRo/zU9I4ziigb5XZDyHcInu+ZXXz1oIpZBOH2aRgDozwJSK62FGAJYhYxaqsxJiC2SDryEqLgkvIS5i37xz2TDD8l22sXcebk42VsTHWd42CV5AWxl2DgmeohxnkGN0I81a5KixSTTW+BAvCiLgJVIHurMBVhKpo0DdjKgqwfbK0K14bkkpsiCLa6biXY3FF1SXt1AYCwiXn6V72dJeseOnuVHSvwrWEpdhpFg8p+iw5IzcXOFbst6U46j1e377m/9Ivxqlw8bvB1blw/Um+IbOufEW0Bk/WHPtAXvZAsXvFEGypvKvJxw5MaHT+t2jphP5Gnl0ebTu3g2zqHz1AZ1hNKnWPAAAAAElFTkSuQmCC);
				background-size: contain;
				right: 20upx;
				top:50%;
				transform: translateY(-55%);
			}
		}
	}
	.start-right {
		width: 216upx;
		background: rgba(255, 88, 71, 1);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		.kaishi {
			font-size: 34upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			color: rgba(255, 255, 255, 1);
		}
		.meici {
			font-size: 20upx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			color: rgba(255, 255, 255, 1);
		}
	}
	.btn-batchPrice{
		width: 216upx;
		text-align: center;
		background-color: #F7B500;
		color: #fff;
		font-size: 34upx;
		line-height: 100upx;
	}
}
.pop_info{
	display: none;
	&.show{
		display: block;
	}
}
.pop_info .layer{
	position: fixed;
	background-color: rgba(0,0,0,.75);
	left: 0;
	top:44px;
	right: 0;
	bottom: 0;
	z-index: 998;
}
.duiChange,.sureOrder{
	position: fixed;
	top:50%;
	left: 50%;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 10upx;
	padding: 30upx;
	transform: translate(-50%,-50%);
	z-index: 998;
	display: none;
	&.show{
		display: block;
	}
}
.duiChange{
	.close{
		width: 40upx;
		height: 40upx;
		position: absolute;
		left: 30upx;
		top:30upx;
	}
	 .pic1{
		width: 310upx;
		height: 360upx;
		margin: 56upx 70upx 0;
	}
	.tips{
		color: #A4A4A4;
		font-size: 28upx;
		margin: 25upx 0 60upx;
		text-align: center;
	}
	button{
		width: 360upx;
		height: 80upx;
		line-height: 80upx;
		color: #fff;
		background-color: #FF5847;
		border-radius: 20upx;
	}
}
.sureOrder{
	.close{
		width: 40upx;
		height: 40upx;
		position: absolute;
		left: 30upx;
		top:30upx;
	}
	 .pic1{
		width: 340upx;
		height: 280upx;
		margin: 56upx 55upx 0;
	}
	.tips{
		color: #A4A4A4;
		font-size: 28upx;
		margin: 25upx 0 60upx;
		text-align: center;
		text{
			color: #FF5947;
			margin-left: 10upx;
		}
	}
	button{
		width: 360upx;
		height: 80upx;
		line-height: 80upx;
		color: #fff;
		background-color: #FF5847;
		border-radius: 20upx;
	}
} 
.mask_layer{
	position: fixed;
	width: 100%;
	height: 100%;
	left: 0;
	top:0;
	background-color: rgba(0,0,0,0.75);
	z-index: 992;
	opacity: 0;
	transition: opacity ease-in 0.35s;
	display: none;
	&.show{
		display: block;
		opacity: 1;
	}
}
.pop_price{
	position: fixed;
	width: 100%;
	bottom: -70%;
	left: 0;
	background-color: #fff;
	transition: bottom ease-in 0.35s;
	z-index: 993;
	border-radius:20upx 20upx 0px 0px;
	&.show{
		bottom: 0;
	}
	.pop_price_h{
		display: flex;
		padding: 30upx 30upx 20upx;
		color: #666;
		font-size: 28upx;
		.icon-tip{
			display: inline-block;
			width: 30upx;
			height: 30upx;
			background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAAJ1BMVEX/////WEf/ubL/lYr/fW//pZv/YlL/8vD/1ND/bV7/4+H/x8H/jYHPug2VAAABm0lEQVQ4y4WVO08CQRSFbxAEhebCQhAoJGqhFRYmllCqjWBj6cYYHxUxxlBYSGUr0WhihYU9JkZjYiGNjX9KYJedOfPydDvf7syds/dBJNRZ2no4vW9dk0nJZQ5U+G3rNDXkSId9jTZYUkXhySGDjhC/s6Inmc6wpkVp64aO8wJfsEHfro+Zc1McZ6N2Q9yMVgprLwKXA5oWKyWiqng38OZS4BrRnHiqT/A6XFayIDtxm2240FbiRjyJvWvHxyM8tOPR4Um2Y48o5sDcp4wLL9KsC9chcA0fSB4bcEn6XQZchmtrOE8NN+65cI58F67893VPyb44YgjtkegZQ4OLee0U7JZFW9gDykV6ZYdKeJaqWzmvddWU0l7wlSJPQWT9tMzHie5j5nbBU4KbKa4VsQLHnmcYazDBtgrlwbh1+LBbE6qACJJx/ws8c7SWaXOZ983UC1uP5a+chThmxlHbb5poOWqaCRMeiKZa1emJPAu04D2YB1e2hhrqE+m2OmtWZbqjT6o3kSSbpjl3/hPQuw8yq7Oyt9G6kVf+AOVnhsu//aPIAAAAAElFTkSuQmCC);
			background-size: contain;
			margin-right: 4upx;
		}
	}
	.input-wrap{
		display: flex;
		padding: 0 30upx 30upx;
		color: #666;
		font-size: 28upx;
		flex-wrap: wrap;
		justify-content: space-between;
		.left{
			position: relative;
			textarea{
				width:420upx;
				height:260upx;
				padding: 20upx;
				border:4upx solid #FF5847;
				border-radius:10upx;
				font-size: 24upx;
			}
			.clear{
				position: absolute;
				right: 20upx;
				bottom: 10upx;
				padding: 6upx;
				font-size: 24upx;
				font-weight:400;
				color:rgba(0,0,0,0.5);
			}
		}
		.right{
			.btn-quick{
				width:200upx;
				height:80upx;
				line-height: 80upx;
				border-radius:10px;
				border:4upx solid #FF5847;
				color: #E02020;
				font-size:24upx;
				text-align: center;
				&:nth-child(2){
					margin: 22upx 0;
				}
			}
		}
	}
	.btnPay {
		width: 100%;
		height: 100upx;
		line-height: 100upx;
		background-color: #FF5847;
		text-align: center;
		color: #fff;
		font-size: 34upx;
		font-weight: 500;
		letter-spacing: 1upx;
	}
}

.mask_layer_price{
	position: fixed;
	width: 100%;
	height: 100%;
	left: 0;
	top:0;
	background-color: rgba(0,0,0,0.75);
	z-index: 992;
	opacity: 0;
	transition: opacity ease-in 0.35s;
	display: none;
	&.show{
		display: block;
		opacity: 1;
	}
}
.pop_price_tips{
	position: fixed;
	width: 510upx;
	top: 50%;
	left: 50%;
	opacity: 0;
	background-color: #fff;
	transform: translate(-50%,-50%);
	transition: opacity ease-in 0.35s;
	z-index: 993;
	border-radius:20upx;
	&.show{
		opacity: 1;
	}
	.title{
		padding: 30upx 30upx 20upx;
		color: #000;
		text-align: center;
		font-size: 34upx;
	}
	.tips-wrap{
		text-align: center;
		padding: 20upx 30upx 60upx;
		font-size: 26upx;
		color:rgba(0,0,0,0.85)
	}
	.btnok {
		width: 100%;
		height: 100upx;
		line-height: 100upx;
		background-color: #FF5847;
		text-align: center;
		color: #fff;
		font-size: 34upx;
		font-weight: 500;
		letter-spacing: 1upx;
		border-radius: 0 0 20upx 20upx;
	}
}
</style>
