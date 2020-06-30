<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block><block slot="content">
			{{word}}</block></cu-custom>
		<view class="cu-bar bg-white solid-bottom" v-for="(answer,index) in answers" :key="index">
			<view class="action">
				<text class="cuIcon-titles"
				:class="['text-'+colors[index%8]]"></text> {{answer.meaning}}
			</view>
			<view class="padding flex flex-wrap justify-between align-center bg-white">
				<!-- <button class="cu-btn round sm bg-green" >👍</button> -->
				<view class="margin-top-sm flex justify-end">
					<!-- <view class="text-gray text-df">{{latestAnswer.created_time | timeFormatter}}</view> -->
					<view>
						<!-- <text class="cuIcon-appreciatefill margin-lr-xs text-red" v-if="like[index]" :data-aid='answer.aid' @tap="disLikeIt"></text>
						<text class="cuIcon-appreciatefill margin-lr-xs text-grey" v-else="like[index]" :data-aid='answer.aid' @tap="likeIt"></text> -->
						<text class="cuIcon-appreciatefill margin-lr-xs text-grey" :data-aid='answer.aid' @tap="likeIt"></text>
						<text>{{answer.like}}</text>
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
				qid:'',
				word:'',
				// like:[],
				colors:['red','orange','olive','green','cyan','blue','purple','mauve'],
				answers:[]
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
							if (a.like < b.like)return 1
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
			},
			likeIt(e){
				var aid = e.currentTarget.dataset.aid
				var that = this
				uni.request({
					url: 'https://bytescloud.cn/api/answer/like?aid=' + aid,
					method: 'GET',
					data: {},
					header:{
					  // "Content-Type":"application/json"
					   //这里修改json为text   json的话请求会返回400（bad request）
					   "Content-Type": "application/text"
					},
					success: res => {
						that.refreshData(that.qid)
					},
					fail: () => {},
					complete: () => {}
				});
			},
			disLikeIt(e){
				var aid = e.currentTarget.dataset.aid
				var that = this
				uni.request({
					url: 'https://bytescloud.cn/api/answer/dislike?aid=' + aid,
					method: 'GET',
					data: {},
					header:{
					  // "Content-Type":"application/json"
					   //这里修改json为text   json的话请求会返回400（bad request）
					   "Content-Type": "application/text"
					},
					success: res => {
						that.refreshData(that.qid)
					},
					fail: () => {},
					complete: () => {}
				});
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
