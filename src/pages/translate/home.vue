<template>
	<view>
		<cu-custom bgColor="bg-gradual-green">
			<block slot="content">翻译</block>
		</cu-custom>
		<form>
			<view class="cu-form-group align-start margin-top margin-left-lg margin-right-lg">
				<view class="title">输入句子</view>
				<textarea maxlength="-1"
				placeholder="input"
				v-model="before"></textarea>
			</view>
		</form>
		<button class="cu-btn block bg-blue lg margin-left-lg margin-right-lg margin-top"
			@tap="handleSubmit">
			<text class=" cuIconfont-spin"></text> 提交
		</button>
		<view class='margin-xl bg-white padding-xl radius shadow-lg' @tap="handleCopyRes" v-if="after!=''">
		  <view class='text-center margin-bottom text-lg  text-grey'>翻译结果</view>
		  <view class='text-content'>
		    <view class='margin-top-lg'>{{after}}</view>
		  </view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				before:'',
				after:''
			}
		},
		methods:{
			handleSubmit(){
				uni.showLoading({
					title: 'loading',
					mask: false
				});
				uni.request({
					url: 'https://bytescloud.cn/api/translate',
					method: 'GET',
					data: {
						before:this.before
					},
					header:{
					  // "Content-Type":"application/json"
					   //这里修改json为text   json的话请求会返回400（bad request）
					   "Content-Type": "application/text"
					},
					success: res => {
						if(res.data.code == 0){
							this.after = res.data.data.after
							uni.hideLoading()
						}else{
							console.log(res);
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			handleCopyRes(){
				uni.setClipboardData({
					data:this.after
				})
			}
		}
	}
</script>

<style>
</style>
