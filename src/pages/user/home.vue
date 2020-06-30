<template>
	<view>
		<view class='UCenter-bg'>
		  <image src='/static/logo.png' class='png' mode='widthFix'></image>
		  <view class='text-black text-xl'>好好说话
		    
		  </view>
		  <text class='text-df text-black'>互联网黑话翻译</text>
		  <view class='margin-top-sm'>
		    <text class="text-black">By:王贝</text>
		  </view>
		</view>
		<view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
			<view class="cu-item" :class="menuArrow?'arrow':''" @tap="handleClickGithub">
				<view class="content" >
					<image src="/static/github.png" class="png" mode="aspectFit"></image>
					<text class="text-grey">github</text>
				</view>
			</view>
			<view class="cu-item" :class="menuArrow?'arrow':''" @tap="handleClickAbout">
				<view class="content" >
					<image src="/static/logo.png" class="png" mode="aspectFit"></image>
					<text class="text-grey">关于此小程序</text>
				</view>
			</view>
			<view class="cu-item" :class="menuArrow?'arrow':''"  @tap="handleClickColorUI">
				<view class="content">
					<image src="/static/colorui-logo.png" class="png" mode="aspectFit"></image>
					<text class="text-grey">使用ColorUI组件库</text>
				</view>
			</view>
			<view class="cu-item" :class="menuArrow?'arrow':''" @tap="handleClickReward">
				<view class="content">
					<image src="/static/zan.png" class="png" mode="aspectFit"></image>
					<text class="text-grey">赞赏支持</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'user',
		data(){
			return{
				menuBorder:true,
				menuArrow:true,
				menuCard:true,
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				ColorList: this.ColorList,
			}
		},
		methods:{
			handleClickGithub(){
				uni.setClipboardData({
					data:'https://github.com/wangbei98/buzzwords'
				})
			},
			handleClickAbout(){
				uni.navigateTo({
					url: '/pages/user/about',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			handleClickColorUI(){
				uni.navigateTo({
					url: '/pages/user/colorui',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			handleClickReward(){
				uni.previewImage({
					urls: ['https://tva1.sinaimg.cn/large/007S8ZIlly1gg2nmwh771j30i90i9q4j.jpg'],
					current: 'https://tva1.sinaimg.cn/large/007S8ZIlly1gg2nmwh771j30i90i9q4j.jpg' 
				})
			}
		}
	}
</script>

<style>
	.UCenter-bg {
	  /* background-image: url(https://image.weilanwl.com/color2.0/index.jpg); */
	  background-image: url(../../static/bg.png);
	  background-size: cover;
	  height: 700rpx;
	  display: flex;
	  justify-content: center;
	  overflow: hidden;
	  position: relative;
	  flex-direction: column;
	  align-items: center;
	  color: #fff;
	  font-weight: 300;
	  text-shadow: 0 0 3px rgba(0,0,0,0.3);
	}
	.UCenter-bg::after {
	 content: "";
	 position: absolute;
	 width: 100vw;
	 height: 50vw;
	 background-color: #f1f1f1;
	 transform: rotate(-10deg) scale(2,2);
	 bottom: -60vw;
	 left: 0;
	 right: 0;
	 margin: auto;
	
	}
	.UCenter-bg text{
	  opacity: 0.8;
	}
	.UCenter-bg image {
	  width: 250rpx;
	  height: 250rpx;
	}
</style>
