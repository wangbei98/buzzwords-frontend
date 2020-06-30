<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block><block slot="content">
			{{word}}</block></cu-custom>
		
		<view class="cu-card dynamic" :class="isCard?'no-card':''">
			<view class="cu-item shadow">
				<view class="cu-list menu-avatar comment solids-top">
					<view class="cu-item">
						<!-- <view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view> -->
						<view class="cu-avatar round ">{{word}}</view>
						<view class="content" v-if="latestAnswer==null">
							<view class="text-grey">{{word}}</view>
							<view class="text-gray text-content text-df">
								
							</view>
							<view class="bg-grey padding-sm radius margin-top-sm  text-sm">
								<view class="flex">
									<view>解释：</view>
									<view class="flex-sub">暂时没有解答，点击下方添加答案</view>
								</view>
							</view>
						</view>
						<view class="content" v-else>
							<view class="text-grey">{{word}}</view>
							<view class="text-gray text-content text-df">
								
							</view>
							<view class="bg-grey padding-sm radius margin-top-sm  text-sm">
								<view class="flex">
									<view>解释：</view>
									<view class="flex-sub">{{latestAnswer.meaning}}</view>
								</view>
								<view class="flex">
									<view>来源：</view>
									<view class="flex-sub">{{latestAnswer.fromWhat}}</view>
								</view>
								<view class="flex">
									<view>例子：</view>
									<view class="flex-sub">{{latestAnswer.example}}</view>
								</view>
								<view class="flex" v-if="latestAnswer.atype >= 0">
									<view>分类：</view>
									<view class="flex-sub">{{picker[latestAnswer.atype]}}</view>
								</view>
							</view>
							<view class="margin-top-sm flex justify-end">
								<!-- <view class="text-gray text-df">{{latestAnswer.created_time | timeFormatter}}</view> -->
								<view>
									<text class="cuIcon-appreciatefill margin-lr-xs text"></text>5
									<text class="cuIcon-appreciatefill margin-lr-xs text-red"></text>10
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-titles text-orange"></text> 修改记录
			</view>
			<view class="padding flex flex-wrap justify-between align-center bg-white">
				<button class="cu-btn round sm bg-green" @tap="handleAddAnswer">添加答案</button>
			</view>
		</view>
		
		<view class="cu-timeline">
			<view class="cu-item" v-for="(answer,index) in answers" :key="index">
				<view class="content">
					<view class="flex justify-between">
						<view class="cu-capsule radius">
							<view class="cu-tag bg-cyan">{{answer.created_time | timeFormatterGetDate}}</view>
							<view class="cu-tag line-cyan">{{answer.created_time | timeFormatterGetTime}}</view>
						</view>
						<button class="cu-btn round sm bg-blue" @tap="handleEditAnswer" :data-aid="answer.aid">修改</button>
					</view>
					
					<view class="margin-top">【解释】{{answer.meaning}}</view>
					<view class="margin-top">【来源】{{answer.fromWhat}}</view>
					<view class="margin-top">【例子】{{answer.example}}</view>
					<view class="margin-top" v-if="answer.atype>=0">【分类】{{picker[answer.atype]}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isCard: false,
				qid:'',
				word:'',
				answers:[],
				latestAnswer:null,
				picker: ['饭圈', 'QQ', '游戏']
			};
		},
		onLoad(e){
			this.qid = e.qid
			this.refreshData(this.qid)
		},
		onShow() {
			this.refreshData(this.qid)
		},
		onPullDownRefresh() {
			var that = this
			setTimeout(function () {
				that.refreshData(that.qid)
				uni.stopPullDownRefresh();
			}, 1000);
		},
		methods:{
			handleAddAnswer(){
				uni.navigateTo({
					url: '/pages/add/addAnswer?qid='+this.qid + '&aid=' + '',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			handleEditAnswer(e){
				var aid = e.currentTarget.dataset.aid
				uni.navigateTo({
					url: '/pages/add/addAnswer?qid='+this.qid + '&aid=' + aid,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			refreshData(qid){
				uni.showLoading({
					title: 'loading',
					mask: false
				});
				uni.request({
					url: 'https://bytescloud.cn/api/question',
					method: 'GET',
					data: {
						qid:qid
					},
					header:{
					  // "Content-Type":"application/json"
					   //这里修改json为text   json的话请求会返回400（bad request）
					   "Content-Type": "application/text"
					},
					success: res => {
						this.word = res.data.data.question.word
						this.answers = res.data.data.question.answers.sort((a,b)=>{
							if (a.create_time < b.created_time)return 1
							else return -1
						})
						if(this.answers.length > 0){
							this.latestAnswer = this.answers[0]
						}
						uni.hideLoading()
					},
					fail: () => {},
					complete: () => {}
				});
			}
		},
		filters:{
			timeFormatterGetDate(timestamp){
				var time = new Date(parseInt(timestamp) * 1000)
				var year = time.getFullYear()
				var month = time.getMonth() + 1
				var date = time.getDate()
				if(month<10){
					month = "0"+month;
				}
				if(date<10){
					date = "0"+date;
				}
				return year+"/"+month+"/"+date
			},
			timeFormatterGetTime(timestamp){
				// return new Date(parseInt(timestamp) * 1000).toLocaleString().split(" ")[1];
				var time = new Date(parseInt(timestamp) * 1000)
				// var timeString = time.toLocaleTimeString()
				var hours = time.getHours()
				var minutes = time.getMinutes()
				if(hours<10){
					hours = "0"+hours;
				}
				if(minutes<10){
					minutes = "0"+minutes;
				}
				return hours + ':' + minutes
			}
		}
	}
</script>

<style>
	.cu-card.dynamic>.cu-item>.text-content {
        margin-bottom: 1px;
        margin-top: 6px;
    }
</style>
