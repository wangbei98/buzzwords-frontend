<template>
	<view>
		<scroll-view scroll-y class="page">
			<cu-custom bgColor="bg-gradual-blue" :isBack="true">
				<block slot="backText">返回</block><block slot="content">添加词条</block>
			</cu-custom>
			<view class="cu-card">
				<view class="cu-item bg-img shadow-blur" 
				:style="[{backgroundImage:'url('+img+')'}]">
					<view class="cardTitle">
						欢迎提供网络黑话词条
					</view>
				</view>
			</view>
			<!-- <view class="cu-tabbar-height"></view> -->
			<form>
				<view class="cu-form-group margin-top margin-left margin-right">
					<view class="title">黑话</view>
					<input placeholder="输入黑话" name="input" v-model="word"></input>
				</view>
				<view class="cu-form-group margin-top margin-left margin-right">
					<view class="title">选择分类</view>
					<picker @change="PickerChange" :value="index" :range="picker">
						<view class="picker">
							{{index>-1?picker[index]:'选择词条分类'}}
						</view>
					</picker>
				</view>
				<view class="cu-form-group margin-top margin-left margin-right">
					<view class="title">解释</view>
					<input placeholder="添加解释" name="input" v-model="meaning"></input>
				</view>
				<view class="cu-form-group align-start margin-top margin-left margin-right">
					<view class="title">来源</view>
					<textarea maxlength="-1"
					@input="textareaBInput" 
					placeholder="添加来源"
					v-model="fromWhat"></textarea>
				</view>
				<view class="cu-form-group align-start margin-top margin-left margin-right">
					<view class="title">例句</view>
					<textarea maxlength="-1" 
					@input="textareaBInput" 
					placeholder="添加例句"
					v-model="example"></textarea>
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
				meaning:'',
				fromWhat:'',
				example:'',
				picker: ['饭圈', 'QQ', '游戏'],
				index:-1,
				img:'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg'
			}
		},
		methods:{
			handleSubmit(){
				if(this.word.length == 0 || this.meaning.length == 0){
					uni.showModal({
						title: '提示',
						content: '「词条或解释」为空',
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
					url: 'https://bytescloud.cn/api/word',
					method: 'POST',
					data: {
						word:this.word,
						qid:this.qid,
						atype:this.index,
						meaning:this.meaning,
						fromWhat:this.fromWhat,
						example:this.example
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
			},
			PickerChange(e) {
				this.index = e.detail.value
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
