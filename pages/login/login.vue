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
		
		<form @submit="submit()" @reset="reset()">
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
		
		
		<!-- <view class="padding flex flex-direction">
			<button class="cu-btn bg-blue margin-tb-sm lg"> 登 录 </button>
		</view> -->
		<view class="padding flex flex-direction">
			<button  open-type="getUserInfo" @getuserinfo="getuser" >授权登录</button>
		</view>
		
		<!-- 第三方登录 -->
		<view class="oauth" v-if="isShowOauth">
			<view class="text">— 快速登录 —</view>
			<view class="list">
				<view @tap="oauthLogin('weixin')" v-if="showProvider.weixin" class="icon weixin"></view>
				<view @tap="oauthLogin('qq')" v-if="showProvider.qq" class="icon qq"></view>
				<!-- <view @tap="oauthLogin('sinaweibo')" v-if="showProvider.sinaweibo" class="icon sinaweibo"></view> -->
				<!-- <view @tap="oauthLogin('xiaomi')" v-if="showProvider.xiaomi" class="icon xiaomi"></view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShowOauth:true,
				showProvider:{
					weixin:true,
					qq:true,
					sinaweibo:false,
					xiaomi:false
				},
				avatar:'',
				username:'',
				sex:''
			}
		},
		methods: {
			getuser(e){
				console.log(e.detail.userInfo)
				if (e.detail.userInfo){
					
					uni.showModal({
					    title: '提示',
					    content: e.detail.userInfo,
					    success: function (res) {
					        if (res.confirm) {
					            console.log('用户点击确定');
					        } else if (res.cancel) {
					            console.log('用户点击取消');
					        }
					    }
					});
					console.log(222)
				              //用户按了允许授权按钮
				        } else {
				             //用户按了拒绝按钮
				 }
				/* uni.getUserInfo({
				    provider: 'weixin',
					withCredentials:true,
				    success: (infoRes) =>{
						that.$api.wxlogin({code:loginRes.code,user:infoRes.userInfo}).then((ret)=>{
								console.log(ret)
						}).catch((err)=>{
							
						})
				        console.log('-------获取微信用户所有-----');
				        console.log(JSON.stringify(infoRes.userInfo));
				    }
				}); */
				var that = this
				/* uni.getProvider({
				                    service: 'oauth',
				                    success: function(res) {
				                        console.log(res.provider);
				                        //支持微信、qq和微博等
				                        if (~res.provider.indexOf('weixin')) {
				                            uni.login({
				                                provider: 'weixin',
												scopes:'auth_user',
				                                success: (loginRes) =>{
				                                    console.log('-------获取openid(unionid)-----');
				                                    console.log(JSON.stringify(loginRes.code));
				                                    // 获取用户信息
				                                    uni.getUserInfo({
				                                        provider: 'weixin',
														withCredentials:true,
				                                        success: (infoRes) =>{
															that.$api.wxlogin({code:loginRes.code,user:infoRes.userInfo}).then((ret)=>{
																	console.log(ret)
															}).catch((err)=>{
																
															})
				                                            console.log('-------获取微信用户所有-----');
				                                            console.log(JSON.stringify(infoRes.userInfo));
				                                        }
				                                    });
				                                }
				                            });
				                        }
				                    }
				                }); */
				
				
						/* uni.getUserInfo({
							provider: 'weixin',
							'lang':'zh_CN',
							success: function (infoRes){
								console.log('用户信息：' + JSON.stringify(infoRes.userInfo));
								//console.log('用户信息：' + JSON.stringify(infoRes.userInfo.openId));
								uni.setStorage({
									key: 'userInfo',
									data: {
										username:infoRes.userInfo.nickName,
										face:infoRes.userInfo.avatarUrl,
										signature:'个性签名',
										integral:0,
										balance:0,
										envelope:0
									},
									success: function () {
										uni.hideLoading()
										uni.showToast({title: '登录成功',icon:"success"});
										setTimeout(function(){
											uni.navigateBack();
										},300)
									}
								});
							}
						}); */
					
				
				/* uni.login({
						provider: 'weixin',
						scopes:'auth_user',
						success: function (loginRes){
							console.log("success: "+JSON.stringify(loginRes));
							//案例直接获取用户信息，一般不是在APP端直接获取用户信息，比如微信，获取一个code，传递给后端，后端再去请求微信服务器获取用户信息
							uni.getUserInfo({
								provider: 'weixin',
								'lang':'zh_CN',
								success: function (infoRes){
									console.log('用户信息：' + JSON.stringify(infoRes.userInfo));
									//console.log('用户信息：' + JSON.stringify(infoRes.userInfo.openId));
									uni.setStorage({
										key: 'userInfo',
										data: {
											username:infoRes.userInfo.nickName,
											face:infoRes.userInfo.avatarUrl,
											signature:'个性签名',
											integral:0,
											balance:0,
											envelope:0
										},
										success: function () {
											uni.hideLoading()
											uni.showToast({title: '登录成功',icon:"success"});
											setTimeout(function(){
												uni.navigateBack();
											},300)
										}
									});
								}
							});
						},
						fail:(e)=>{
							console.log("fail: "+JSON.stringify(e));
						}
					}); */
			},
			submit: function(e){
				this.$api.login({})
			},
			reset: function(e){
				
			},
			oauthLogin(provider){
				uni.showLoading();
				//第三方登录
				uni.login({
					provider: provider,
					success: (loginRes)=>{
						console.log("success: "+JSON.stringify(loginRes));
						//案例直接获取用户信息，一般不是在APP端直接获取用户信息，比如微信，获取一个code，传递给后端，后端再去请求微信服务器获取用户信息
						uni.getUserInfo({
							provider: provider,
							success: (infoRes)=>{
								console.log('用户信息：' + JSON.stringify(infoRes.userInfo));
								uni.setStorage({
									key: 'UserInfo',
									data: {
										username:infoRes.userInfo.nickName,
										face:infoRes.userInfo.avatarUrl,
										signature:'个性签名',
										integral:0,
										balance:0,
										envelope:0
									},
									success: function () {
										uni.hideLoading()
										uni.showToast({title: '登录成功',icon:"success"});
										setTimeout(function(){
											uni.navigateBack();
										},300)
									}
								});
							}
						});
					},
					fail:(e)=>{
						console.log("fail: "+JSON.stringify(e));
					}
				});
			},
			/* getProvider(){
				//获取第三方登录服务
				uni.getProvider({
					service: 'oauth',
					success: (res)=>{
						let len = res.provider.length;
						for(let i=0;i<len;i++){
							//有服务才显示按钮图标
							this.showProvider[res.provider[i]] = true;
						}
						if(res.provider.length==0){
							this.isShowOauth=false;
						}
					}
				});
			}, */
		},
		onLoad:function(options){
			//this.getProvider();
			/* uni.authorize({
			    scope: 'scope.userInfo',
			    success() {
			       uni.login({
			       		provider: 'weixin',
			       		scopes:'auth_user',
			       		success: (loginRes)=>{
			       			console.log("success: "+JSON.stringify(loginRes));
			       			//案例直接获取用户信息，一般不是在APP端直接获取用户信息，比如微信，获取一个code，传递给后端，后端再去请求微信服务器获取用户信息
			       			uni.getUserInfo({
			       				provider: 'weixin',
			       				'lang':'zh_CN',
			       				success: (infoRes)=>{
			       					console.log('用户信息：' + JSON.stringify(infoRes.userInfo));
			       					uni.setStorage({
			       						key: 'userInfo',
			       						data: {
			       							username:infoRes.userInfo.nickName,
			       							face:infoRes.userInfo.avatarUrl,
			       							signature:'个性签名',
			       							integral:0,
			       							balance:0,
			       							envelope:0
			       						},
			       						success: function () {
			       							uni.hideLoading()
			       							uni.showToast({title: '登录成功',icon:"success"});
			       							setTimeout(function(){
			       								uni.navigateBack();
			       							},300)
			       						}
			       					});
			       				}
			       			});
			       		},
			       		fail:(e)=>{
			       			console.log("fail: "+JSON.stringify(e));
			       		}
			       	});
			    }
			}) */
			/* uni.authorize({
				scope:'scopr.userLocation',
				success(){
						 uni.getLocation()
				}
			}) */
			
				uni.hideTabBar()
			}
			
		
		
	}
</script>

<style lang="scss">
	@import "../../static/css/login.scss";
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
	.oauth{
		@media all and (max-height:150vw){
			display: none;
		}
		position: absolute;
		bottom: 50upx;
		width: 100%;
		.text{
			width: 100%;
			height: 60upx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: rgba($color: #000000, $alpha: 0.8);	
			font-size: 28upx;
		}
		.list{
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 20upx 0;
			.icon{
				font-size:80upx;
				margin: 0 30upx;
				color: #2a6ab9;
			}
		}
	}
</style>
