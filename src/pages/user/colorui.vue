<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block><block slot="content">color-ui</block>
		</cu-custom>
		<image class="color-ui-img" src="/static/color-ui.png" mode="aspectFit"></image>
	</view>
</template>

<script>
	export default{
		name:'colorui'
	}
</script>

<style>
	.color-ui-img{
		width: 700upx;
		margin-top: 25upx;
		margin-left: 25upx;
		margin-right: 25upx;
	}
</style>
