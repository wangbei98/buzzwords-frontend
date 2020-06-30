<template>
	<view>
		<scroll-view scroll-y class="page">
			<cu-custom bgColor="bg-gradual-blue" :isBack="true">
				<block slot="backText">返回</block><block slot="content">提问</block>
			</cu-custom>
			<view class="cu-card">
				<view class="cu-item bg-img shadow-blur" 
				:style="[{backgroundImage:'url('+img+')'}]">
					<view class="cardTitle">
						来提问吧
					</view>
				</view>
			</view>
			<!-- <view class="cu-tabbar-height"></view> -->
			<form>
				<view class="cu-form-group margin-top margin-left margin-right">
					<view class="title">黑话</view>
					<input placeholder="输入黑话" name="input" v-model="word"></input>
				</view>
			</form>
			
			<button class="cu-btn block bg-blue lg margin-left margin-right margin-top"
				@tap="handleSubmit">
				<text class=" cuIconfont-spin"></text> 提交
			</button>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		name:'add-question',
		data(){
			return{
				word:'',
				img:'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg'
			}
		},
		methods:{
			handleSubmit(){
				if(this.word.length == 0){
					uni.showModal({
						title: '提示',
						content: '「词条」为空',
						showCancel: false,
						cancelText: '',
						confirmText: '确定',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
					return
				}
				uni.request({
					url: 'https://bytescloud.cn/api/question',
					method: 'POST',
					data: {
						word:this.word
					},
					success: res => {
						uni.showModal({
							title: '提示',
							content: '提交成功',
							showCancel: false,
							cancelText: '',
							confirmText: '确定',
							success: res => {
								uni.navigateBack({
									delta: 1
								});
							},
							fail: () => {},
							complete: () => {}
						});
					},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}
	
	.cardTitle {
		color: #fff;
		padding: 90upx 60upx;
		font-size: 40upx;
		font-weight: 300;
		transform: skew(-10deg, 0deg);
		position: relative;
		text-shadow: 0px 0px 6upx rgba(0, 0, 0, 0.3)
	}
	
	.cardTitle::before {
		content: "";
		position: absolute;
		width: 60upx;
		height: 6upx;
		border-radius: 20upx;
		background-color: #fff;
		display: block;
		top: 60upx;
		left: 50upx;
		transform: skew(10deg, 0deg);
	}
	
	.cardTitle::after {
		content: "";
		position: absolute;
		width: 140upx;
		border-radius: 6upx;
		height: 24upx;
		background-color: #fff;
		display: block;
		bottom: 76upx;
		left: 90upx;
		transform: skew(10deg, 0deg);
		opacity: 0.1;
	}
</style>
