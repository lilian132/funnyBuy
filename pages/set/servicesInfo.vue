<template>
	<view class="container">
		<view class="top">
			<view class="hd">如以下常见问题未能帮助到您，请通过以下方式联系我们。</view>
			<view>
				<view class="row">QQ客服：<text style="color: #FF5B4A;">1908622314</text></view>
				<view class="row">客服热线：<text style="color: #FF5B4A;">0755-83800789</text></view>
				<view class="row">服务时间：
				<view class="time">
					<text>
						周一至周五 9:30-20:00
						周六：9:30-18:30
					</text>
			   </view>
			   </view>
			</view>
		</view>
		<view class="bd">常见问题</view>
		<view ref="mainList" class="main-container">
			<view v-for="(item,index) in list" :key="index" class="list-main-cell b-b m-t uni-collapse" :hover-stay-time="50">
				<view @tap="triggerCollapse(index)" class="uni-list-cell-navigate uni-navigate-bottom" hover-class="uni-list-cell-hover">
					<text class="cell-tit b-t">{{item.title}}</text>
					<image class="xiangyou" :class="item.open?'open':''" src="../../static/img/error/icon-xiangxia-n.png"></image>
				</view>
				<view class="uni-list uni-collapse" :class="item.open?'uni-active':''">
					<view v-for="(item2,index2) in item.list" :key="index2" class="uni-list-cell" hover-class="uni-list-cell-hover" :class="item2.open?'uni-active':''">
						<view @tap="triggerCollapse2(item2,index2)" class="uni-list-cell-navigate uni-navigate-bottom" hover-class="uni-list-cell-hover">
							<text class="cell-tit b-t">{{item2.title}}</text>
							<image class="xiangyou" :class="item2.open?'open':''" src="../../static/img/error/icon-xiangxia-n.png"></image>
						</view>
						<view class="uni-list uni-collapse" :class="item2.open?'uni-active':''">
							<text>{{item2.content}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list:[
				{
					title:'注册登录',
					list:[
						{title:'如何注册趣抢购？',
						content:`(1)应用商店下载趣抢购APP
								 (2)进入【我的】，选择短信验证码登录
								 (3)第一次登录需要填写登录密码，以后则可选择短信或密码两种登录方式
								 `
						 },
						{title:'登录时手机收不到短信验证码怎么办？',
						content:`(1)确认短信是否被手机软件拦截或过滤
								 (2)确认手机能否正常接收短信（信号、欠费、停机等）
								 (3)短信收发过程可能会有延时，请耐心等候
								 (4)仍未收到，请联系客服为您服务
								 `
						 },
						{title:'忘记登录密码怎么办？',
						content:`可在密码登陆页面点击【忘记密码】进行找回`
						 },
					]
				},
				{
					title:'抢购问题',
					list:[
						{title:'名词释义',
						content:`(1)应用商店下载趣抢购APP
								 (2)进入【我的】，选择短信验证码登录
								 (3)第一次登录需要填写登录密码，以后则可选择短信或密码两种登录方式
								 `
						 },
						{title:'抢购怎么玩？',
						content:`步骤一：免费注册会员
								步骤二：充值购买金豆（1元=100金豆）
								步骤三：选择心仪商品出价抢购，等待抢购结束
								步骤四：抢购成功，去我的订单中确认订单在您抢购之前，我们建议您花点时间看看规则和新手指引，以便您能尽快熟悉如何抢购。
								 `
						 },
						{title:'如何购买金豆？',
						content:`登录后，点击【我的】-【充值】来购买金豆，100金豆=1元，选择你想要购买的金额，点击支付即可。通过微信，支付宝均可充值。
								 `
						 },
						 {title:'抢购采用什么规则？',
						 content:`(1) 所有商品抢购，初始当前均价为0元，每一次出价会消耗一定数量的金豆，同时商品当前均价会根据用户的出价不断变化。
								(2) 在抢购过程中，系统会在相应时间段内更新当前均价，给用户出价作为参考。抢购倒计时结束后，如果您的出价和抢购结束后的当前均价差价最小，且您出价用时最短，您便成功抢购到了该商品。
								(3) 若抢购成功，请在30天内去我的订单确认订单，超过30天未确认订单，视为放弃，不返赠豆。
								(4) 若抢购失败，将返还所消耗金豆的50%，赠豆除外。
								(5) 平台严禁违规操作，最终解释权归趣抢购所有。
						 		 `
						 },
						 {title:'抢购有哪些技巧？',
						 content:` 
							(1)做好充足的准备
							参与抢购之前，准备充足的金豆，防止由于中途充值而错过抢购时机。
							(2)积累抢购经验
							新用户注册后，通过使用赠送的金豆熟悉抢购流程，从小件商品抢购出发，积累抢购经验。
							(3)选择合适的抢购时段
							参加抢购的用户越少，获胜的几率越高，因此选择一个最佳时间参与抢购是成功的关键，例如其他用户用餐、休息或约会时间。
							(4)变换出价策略
							经常变换出价策略，让对手无法总结您的出价规律，出其不意取得最后的成功。
							(5)合理的预算
							不要指望花10块钱就能赢得一台iphone，你需要花费更多的时间和金钱才有机会赢得大奖，我们发现任何参与者只要愿意花费奖品价值的1/3就能有很大几率获得该奖品。
							(6)保持良好的心态
							趣味抢购是一个游戏竞赛过程，因此良好的心态是获胜的必要条件。
						 		 `
						 },
						 {title:'金豆/赠豆/能提现吗？',
						 content:`不支持。抢购人充值获得的金豆可用于抢购，有效期为1年，到期清零。为更好地保障您的权益，平台在金豆到期后将自动延期60天。抢购人可在金豆到期后60天内继续使用，逾期将自动清零，不可恢复；赠豆通常为活动奖励赠送，不可提现。
						 		 `
						 },
						 {title:'没抢购成功能退钱吗？',
						 content:` 趣抢购有别于传统意义上的线下抢购，对于抢购成功者而言属于超低价成交，对于抢购者将有一定损耗，所参与抢购的钱均无法退还。如果抢购失败会退还所消耗金豆50%。
						 		 `
						 },
						 {title:'初级场、中级场、高级场有何区别？',
						 content:` 抢购倒计时和出价手续费有所差别。
									初级场：每出价一次消耗100金豆，抢购倒计时为10分钟。
									中级场：每出价一次消耗500金豆，抢购倒计时为15分钟。
									高级场：每出价一次消耗1000金豆，抢购倒计时为20分钟。
						 		 `
						 },
						 {title:'为什么有些商品在不同场次同时都有呢？',
						 content:` 
						    同样的商品，在初级场每出一次价消耗的金豆少，抢购倒计时短；而中、高级场每次出价消耗金豆更多，抢购倒计时稍长。您可以根据个人喜好，选择不同专区抢购心仪商品。
							为什么趣抢购商品市场价高于官方价？
							首先，作为抢购平台，大部分商品均以超低的出价次数成交，为保障平台长期稳定运营，更重要是确保广大用户能持续在平台以低价优势获得商品，部分商品价格需要有一定的上浮空间；其次，为保证后期给用户带来更加实惠的采购价格，目前趣抢购采购渠道处于不断开发中，因而前期处于过渡阶段，部分商品在采购价格的基础上有一定上浮。随着采购渠道的不断完善，后期价格上浮比例会逐渐拉小。
						 		 `
						 },
						 {title:'一场抢购什么时候结束？',
						 content:` 初级场抢购10分钟，中级场抢购15分钟，高级场抢购20分钟，当你看到倒计时器归零的时候就代表这场抢购结束了。
						 		 `
						 },
						 {title:'抢购成功后应该怎么做？',
						 content:` 哇！恭喜您抢购成功！
									首先您需要到【我的】-【我的订单】-【待确认】中确认订单并填写您的收货信息，我们会及时给您安排发货。请您在抢购结束的30天内确认订单，否则视为自愿放弃商品。如果您有任何问题请联系客服。
						 		 `
						 },
						 {title:'抢购会产生什么费用？',
						 content:` 抢购过程中每次出一次价需支付一定数额的金豆手续费
								(1)抢购成功，所消耗金豆不予返还。
								(2)抢购失败，可退还所消耗金豆50%。
						 		 `
						 },
						 {title:'什么时候为停售时段？',
						 content:`
								为保证用户基本作息时间，趣抢购每日凌02:00-07:00点为停售时段，凌晨02:00前已进入抢购倒计时的商品可继续抢购，2点前未进入抢购倒计时的商品将自动延迟到07:00。
						 		 `
						 },
						 {title:'趣抢购与其他抢购app的差别？',
						 content:`
							我知道我们是创新者，但是市面上仍然有许多竞争者，就让我们来告诉你，我们与众不同的优势在哪里，为什么你要把辛苦赚来的钱在趣抢购上进行消费。
							\n起源
							趣抢购创立于2019年7月，我们的创始人经过自身的经验和详细的调查发现现有的抢购行业存在一系列问题。我们创造出趣抢购是以道德和公平为基础的商业策略，我们希望能够为用户提供一个有趣的抢购过程，来积累干净的声誉，这是我们公司从始至终的方向。说了这么多，这里有一些方法能让你知道趣抢购是如何不同于其他抢购而脱颖而出的。
							\n建立道德声誉
							现在互联网上有许多所谓一元钱抢购，但却是以骗钱为目的。我们趣抢购认为一个公司如果没有可靠地声誉和道德底线是无法长久的生存下去的，我们开始申请许多社会奖项以及在各大应用商店里面能够持续保持很棒的评价。
							趣抢购最近也在思考邀请其他一家独立公司来监督我们的业务是公平合理的，趣抢购将来会邀请独立的会计师事务所来审计我们的商业模式以确保用户放在我们这的钱是安全的。
							\n获胜的用户总占大多数
							我们对比过其他的抢购平台，趣抢购的新用户在第一天使用时有40%的人可以抢中奖品，这个比例远高于竞争者，而我们也在努力更加提高这个百分比，让用户快乐的抢购是我们的使命。
							\n透明度和倾听用户
							就像你们看到的，我们同样的，抢购领域内为数不多提供许多技巧和窍门甚至透明了我们的商业模式，我们非常愿意倾听用户的声音以便能够更加进步。为什么我们会这么做？因为您，如果没有您就没有我们。我们感激您的每一条建议。
							\n优质的客户服务
							最后一个话题是我们很棒的客户服务，我们每一个工作人员都在努力维护您的利益，我相信我们的客户服务是首屈一指的，服务好您就是我们最高的商业价值。
							我们工作时间电话永远为您打开，以最快的速度发货等等。
							未来我们将会有更多优势，希望您能与我们一同见证！
							`
						 },
						 {title:'为什么会出现抢购卡顿现象？',
						 content:` 
									趣抢购每天都有成千上万的用户参加，我们统计过，仅有万分之一的用户会遇到卡顿的情况，究竟这种情况是怎么发生的？又如何避免呢？请注意以下提到的几点：
									\n1.参与抢购前请检查您手机当前网络是否通畅。
									一般网络信号不足2格的时候，就容易出现倒计时停顿的现象，这并不是抢购停止，而是您当前网络差页面未能及时刷新的现象。而实际抢购仍在进行中，网络正常的用户的显示也都是同步的。
									\n2.优质的手机配置是顺利抢购的硬性条件
									配置较低的手机及系统运行速度会相对缓慢，显示也容易出现延缓的情况。一般来讲同样的网络环境下iPhone7会比iPhone5反应速度更快。所以选择性能较好的手机非常有必要哦。3.网络信号良好的情况下，4G网络会比WiFi网络更稳定。
						 		 `
						 }
					]
				},
				{
					title:'发货说明',
					list:[
						{title:'确认订单后什么时候能发货？',
						content:`
							(1)虚拟商品下一个自然日发货，部分商品支持实时发奖。如您在发货前未正确填写收货信息，则发货延期。
							(2)实物商品一般在3个工作日内下单发货，具体发货时间和物流单号需要依商家而定。
							(3)预售商品发货日需根据实际采购情况而定(一般在90天内发货 )
							(4)恶意注册用户将取消抢购资格。
								 `
						 },
						{title:'长期未收到奖品怎么回事呢？',
						content:`
							(1)确保收货地址、姓名、电话等各项信息的准确性；
							(2)配送过程中请确保您的联系方式畅顺无阻，如果联络您的时间超过7天未得到回复，默认您已经放弃此商品。
								 `
						 },
						{title:'商品是正品吗？',
						content:` 
							趣抢购挑选优质服务品牌商家，保证全场奖品100%品牌正品。
							如果您认为趣抢购的奖品是假货，并能提供国家相关质检机构的证明文件，经确认后，在返还奖品金额的同时并提供假一赔十服务保障。为了保障您的利益，对趣抢购的奖品，做如下说明：
							(1)趣抢购对所有奖品均保证正品行货，正规渠道发货，所有奖品都可以享受生产厂家的全国联保服务，按照国家三包政策，针对所送出奖品履行保修、换货和退货的义务。
							(2)出现国家三包所规定的功能性故障时，经由生产厂家指定或特约售后服务中心检测确认故障属实，您可以选择换货或者维修；超过15日且在保修期内，您只能在保修期内享受免费维修服务。为了不耽误您使用，缩短故障奖品的维修时间，我们建议您直接联系生产厂家售后服务中心进行处理。您也可以直接在奖品的保修卡中查找该奖品对应的全国各地生产厂家售后服务中心联系处理。
							(3)趣抢购真诚提醒广大幸运者在您收到奖品的时候，请尽量亲自签收并当面拆箱验货，如果有问题(运输途中的损坏)请不要签收，并与快递员交涉，拒签，退回!
							(4)在收到奖品后发现有质量问题，请您不要私自处理，妥善保留好原包装，第一时间联系趣抢购客服人员，由趣抢购同发货商城协商在48小时内解决。如有破损或丢失，我们将无法为您办理退货。
							\n如对协商处理结果存在异议，请您自行到当地生产厂家售后服务中心进行检测，并开据正规检测报告（对于有些生产厂家售后服务中心无法提供检测报告的，需提供维修检验单据），如果检测报告确认属于质量问题，然后将检测报告、问题奖品及完整包装附件，一并返还发货商城办理换货手续，产生的相关费用由趣抢购追究相关责任方承担。
							趣抢购上的电子产品及配件因为生成工艺或仓储物流原因，可能会存在收到或使用过程中出现故障的几率，趣抢购不能保证所有的奖品都没有故障，但我们保证所售奖品都是全新正品行货，能够提供正规的售后保障。我们保证奖品的正规进货渠道和质量，如果您对收到的奖品质量表示怀疑，请提供生产厂家或官方出具的书面鉴定，我们会按照国家法律规定予以处理。但对于任何欺诈性行为，趣抢购将保留依法追究法律责任的权利。本规则最终解释权由趣抢购所有。
							`
						 },
						{title:'商品可以退换吗？',
						content:`
							非质量问题，不在三包范围内，不给予退换货。请尽量亲自签收并当面拆箱验货，如果发现运输途中造成了商品的损坏，请不要签收，可以拒签退回。
								 `
						 },
					]
				}
			]
		};
	},
	methods: {
		triggerCollapse(index){
			let isOpen = this.list[index].open?true:false;
			this.$set(this.list[index],'open',!isOpen)
		},
		triggerCollapse2(item){
			let isOpen = item.open?true:false;
			this.$set(item,'open',!isOpen)
		}
	}
};
</script>

<style lang="scss">
	.top{
		padding: 30upx;
		font-size: 28upx;
		.hd{
			color: #000;
			font-size: 30upx;
			line-height:42upx;
			font-weight: bold;
		}
		.time{
			display: inline-block;
			vertical-align: top;
		}
	}
	.bd{
		padding: 30upx;
		font-size:40upx;
		font-weight: bold;
	}
.list-main-cell {
	padding: 0upx 40upx;
	line-height: 103upx;
	position: relative;
	background: #fff;
	justify-content: center;
	border-top: 1upx solid #e0e7eb;
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
.xiangyou {
	width: 30upx;
	height: 30upx;
	transition: transform ease-in 0.1s;
	transform: rotate(0);
	&.open{
		transform: rotate(90deg);
	}
}
.uni-list-cell-navigate{
	display: flex;
	width: 100%;
	height: 100upx;
	line-height: 100upx;
	align-items: center;
}
.uni-list{
	background-color: #fff;
    position: relative;
    width: 100%;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
	&.uni-collapse{
		box-sizing: border-box;
		height: 0;
		overflow: hidden;
	}
	&.uni-active{
		height: auto;
	}
	.uni-list-cell{
		height: 80upx;
		margin-bottom: 10upx;
		.uni-list-cell-navigate{
			height: 70upx;
			line-height: 70upx;
		}
		.cell-tit{
			line-height: 40upx;
			color: #000;
			font-size: 28upx;
			font-weight: bold;
		}
		&.uni-active{
			height: auto;
		}
	}
}
</style>
