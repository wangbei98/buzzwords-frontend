<template>
	<view>
		<cu-custom bgColor="bg-gradual-green">
			<block slot="content">好好说话</block>
		</cu-custom>
		<view class="cu-bar bg-white search fixed" :style="[{top:CustomBar + 'px'}]">
			<!-- #ifndef MP-WEIXIN -->
			<view class="action" @tap="showModal">
				<button class="cu-btn bg-gradual-cyan shadow-blur round">{{filters[curFilterIndex]}}
				<text class="cuIcon-triangledownfill"></text></button>
			</view>
			<!-- #endif -->
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input type="text" placeholder="输入搜索的关键词" v-model="searchText" confirm-type="search"></input>
			</view>
			<view class="action">
				<button class="cu-btn bg-gradual-green shadow-blur round" @tap="handleSearch">搜索</button>
			</view>
		</view>
		<scroll-view scroll-y="true">
			<view class="padding-sm">
				<view class="flex flex-wrap justify-between">
					<button class="margin-sm basis-sm shadow cu-btn" 
					 :class="['bg-'+colors[index%8],toggleDelay?'animation-slide-bottom':'']"
					 :style="[{animationDelay: (index + 1)*0.1 + 's'}]" 
					 v-for="(item,index) in questions" :key="index"
					 @tap="handleDetail" :data-qid='questions[index].qid'>
					 {{item.word}}</button>
				</view>
			</view>
		</scroll-view>
		<!-- #ifdef MP-WEIXIN -->
			<view class="cu-modal" :class="showRadioModal?'show':''" @tap="hideModal">
				<view class="cu-dialog" @tap.stop="">
					<radio-group class="block" @change="radioChange">
						<view class="cu-list menu text-left">
							<view class="cu-item" v-for="(filter,index) in filters" :key="index">
								<label class="flex justify-between align-center flex-sub">
									<view class="flex-sub">{{filter}}</view>
									<radio class="round" :class="radio=='radio' + index?'checked':''" 
									 :checked="radio=='radio' + index?true:false"
									 :value="index"></radio>
								</label>
							</view>
						</view>
					</radio-group>
				</view>
			</view>
		<!-- #endif -->
		
		<view class="cu-modal" :class="hintModal?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">提示</view>
					<view class="action" @tap="hideHinModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					查询失败
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				hidden: true,
				listCurID: '',
				list: [],
				listCur: '',
				questions:[],
				toggleDelay:false,
				colors:['red','orange','olive','green','cyan','blue','purple','mauve'],
				curFilterIndex:0,
				filters:['所有','已回答','未回答'],
				showRadioModal:false,
				hintModal:false,
				searchText:''
			};
		},
		onLoad() {
			this.refreshData()
		},
		onShow(){
			this.refreshData()
		},
		onPullDownRefresh() {
			var that = this
			setTimeout(function () {
				that.refreshData()
				uni.stopPullDownRefresh();
			}, 1000);
		},
		onReady() {
			
		},
		methods: {
			// #ifndef MP-WEIXIN
			handleDetail(e){
				var qid = e.currentTarget.dataset.qid
				uni.navigateTo({
					url: '/pages/detail/detail?qid='+qid,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			// #endif
			// #ifdef MP-WEIXIN
			handleDetail(e){
				var qid = e.currentTarget.dataset.qid
				this.goDetailPage(qid)
			},
			// #endif
			goDetailPage(qid){
				uni.navigateTo({
					url: '/pages/detail/mp-detail?qid='+qid,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			refreshData(){
				uni.showLoading({
					title: 'loading',
					mask: false
				});
				var that = this
				uni.request({
					url: 'https://bytescloud.cn/api/questions',
					method: 'GET',
					data: {},
					success: res => {
						if(that.curFilterIndex == 0){
							that.questions = res.data.data.questions.sort()
						}else if(that.curFilterIndex == 1){
							that.questions = res.data.data.questions
							.filter(question => question.answers.length > 0).sort()
						}else if(that.curFilterIndex == 2){
							that.questions = res.data.data.questions
							.filter(question => question.answers.length == 0).sort()
						}
						uni.hideLoading()
					},
					fail: () => {},
					complete: () => {}
				});
			},
			showModal(){
				this.showRadioModal = true
			},
			hideModal(){
				this.showRadioModal = false
			},
			showHintModal(){
				this.hintModal = true
			},
			hideHinModal(){
				this.hintModal = false
			},
			radioChange(e){
				this.curFilterIndex = e.detail.value
				this.refreshData()
			},
			handleSearch(){
				var that = this
				uni.request({
					url: 'https://bytescloud.cn/api/question/search',
					method: 'GET',
					data: {
						word:that.searchText
					},
					header:{
					  // "Content-Type":"application/json"
					   //这里修改json为text   json的话请求会返回400（bad request）
					   "Content-Type": "application/text"
					},
					success: res => {
						if (res.data.code == 0){
							var qid = res.data.data.qid
							that.goDetailPage(qid)
						}else{
							that.showHintModal()
						}
					},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	page {
		padding-top: 100upx;
	}

	.indexes {
		position: relative;
	}

	.indexBar {
		position: fixed;
		right: 0px;
		bottom: 0px;
		padding: 20upx 20upx 20upx 60upx;
		display: flex;
		align-items: center;
	}

	.indexBar .indexBar-box {
		width: 40upx;
		height: auto;
		background: #fff;
		display: flex;
		flex-direction: column;
		box-shadow: 0 0 20upx rgba(0, 0, 0, 0.1);
		border-radius: 10upx;
	}

	.indexBar-item {
		flex: 1;
		width: 40upx;
		height: 40upx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24upx;
		color: #888;
	}

	movable-view.indexBar-item {
		width: 40upx;
		height: 40upx;
		z-index: 9;
		position: relative;
	}

	movable-view.indexBar-item::before {
		content: "";
		display: block;
		position: absolute;
		left: 0;
		top: 10upx;
		height: 20upx;
		width: 4upx;
		background-color: #f37b1d;
	}

	.indexToast {
		position: fixed;
		top: 0;
		right: 80upx;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		width: 100upx;
		height: 100upx;
		border-radius: 10upx;
		margin: auto;
		color: #fff;
		line-height: 100upx;
		text-align: center;
		font-size: 48upx;
	}
</style>
