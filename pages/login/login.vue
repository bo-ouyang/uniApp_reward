<template>
	<view class="login">
		<!-- 导航栏 -->
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block><block slot="content">登录</block>
		</cu-custom>
		
		<view class="grid margin-bottom text-center col-1" >
	
			<view class="padding logo-box">
				<view class="cu-avatar radius lg margin-left" 
				style="background-image: url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);">
					<!-- <view class="cu-tag badge cuIcon-female bg-pink" ></view> -->
					<!-- <view class="cu-tag badge cuIcon-male bg-blue" ></view> -->
				</view>
			</view>
		</view>
		
		<form>
			<view class="cu-form-group">
				<view class="title">
					<text class='cuIcon-mobile text-orange'></text>
				</view>
				<input placeholder="请输入手机号" name="input"></input>
				<view class="cu-capsule radius">
					<view class='cu-tag bg-blue '>+86</view>
					<view class="cu-tag line-blue">中国大陆</view>
				</view>
			</view>
			
			<view class="cu-form-group">
				<view class="title"> 
				 <text class='cuIcon-peoplelist text-orange'></text>
				</view>
				<input placeholder="请输入验证码" name="input"></input>
				<button class='cu-btn bg-blue shadow'>验证码</button>
			</view>	
			
		</form>
		
		<view class="solid-bottom text-md padding text-center">
			<text class="text-grey">未注册手机验证后自动登录</text>
		</view>
		
				<view class="cu-form-group">
					<checkbox class='round checked' :checked="true" value="B"></checkbox>
					<view class="title">已同意并阅读
						<text class="agreement text-blue">《用户协议和隐私政策》</text>
					</view>
				</view>
		
		
		<view class="padding flex flex-direction">
			<button class="cu-btn bg-blue margin-tb-sm lg"> 登 录 </button>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onLoad:function(options){
			console.log(options)
			uni.hideTabBar()
		}
	}
</script>

<style>
	.login{
		height: 100Vh;
		width: 100vw;
		background: #FFFFFF;
	}
	.logo-box .cu-avatar{
		margin: 80upx auto;
		width: 180upx;
		height: 180upx;
	}
	.cu-form-group{
		background: #FFF0F0;
		border-radius: 50upx;
		border:none;
		width: 90vw;
		margin: 20upx auto;
		min-height: 80upx;
		
	}
	.agreement{
		
	}
</style>
