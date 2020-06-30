<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block><block slot="content">关于</block>
		</cu-custom>
		<view class='margin-xl bg-white padding-xl radius shadow-lg'>
		  <view class='text-center margin-bottom text-lg  text-grey'>关于「buzzwords好好说话」</view>
		  <view class='text-content'>
		    <view>欢迎使用「buzzwords好好说话」</view>
		    <view class='margin-top-sm'>本项目是我个人开发的小程序，用来帮助用户翻译互联网黑话和拼音缩写。</view>
		    <view class='margin-top-sm'>基于uni-app开发，使用vue语言，组件库使用color-ui。color-ui 是一款优秀的高颜值小程序组件库，是我见过最漂亮的小程序组件。目前该项目的作者（可能因为太忙）没有提供文档，因此本项目参考了该开源项目的小程序原生代码，加以改造,运用在uni-app框架内。</view>
		    <view class='margin-top-sm'>如果你觉得本项目还不错，可以扫描赞赏码支持一下！</view>
		    <view class='margin-top-sm'>本项目持续更新中！</view>
		  </view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'about',
		data(){
			return{
				
			}
		}
	}
</script>

<style>
	.UCenter-bg {
	  background-image: url(https://image.weilanwl.com/color2.0/index.jpg);
	  background-size: cover;
	  height: 700rpx;
	  display: flex;
	  justify-content: center;
	  padding-top: 40rpx;
	  overflow: hidden;
	  position: relative;
	  flex-direction: column;
	  align-items: center;
	  color: #fff;
	  font-weight: 300;
	  text-shadow: 0 0 3px rgba(0,0,0,0.3);
	}
	.UCenter-bg text{
	  opacity: 0.8;
	}
	.UCenter-bg image {
	  width: 250rpx;
	  height: 250rpx;
	}
	
	.UCenter-bg .animation-wave {
	  position: absolute;
	  bottom: 0;
	}

</style>
