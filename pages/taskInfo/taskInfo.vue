<template>
	<view class="page">
		
		
		<view class="cu-bar bg-gradual-blue search fixed nav-bar">
			<view class="action" @tap="BackPage">
				<text class="cuIcon-back"></text> 返回
			</view>
			<view class="content">任务详情</view>
			<view class="action" @tap="shareInfo">
				<text class="cuIcon-more"></text>
			</view>
		</view>
		
		<view class="cu-bar nav-bar"></view>
		
		<!-- 标题 -->
		<view class="cu-bar bg-white solid-bottom ">
			<view class="action">
				<!-- <text class="cuIcon-title text-blue"></text> -->
				<text class="text-black text-bold text-lg">
					支付宝关注领红包
				</text>
			</view>
			<view class="action">
				<text class="cuIcon-warn text-xs">举报</text>
			</view>
		</view>
		
		<!-- 信息 -->
		<view class="cu-list menu-avatar">
			
			<view class="cu-item user-box" >
				<view class="cu-avatar radius lg" 
				style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png);">
					<view class="cu-tag badge">v1</view>
				</view>
				<view class="content">
					<view class="text-grey">
						<view class="cu-tag cu-cate bg-orange">认证注册</view>
					</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">
							37 人 已赚，剩余 7 个
						</view>
					</view>
					
					<view class="flex text-gray">
						<view class="cu-progress round">
							<view class="bg-green" style="width:80%"></view>
						</view>
						<text class="margin-left">80%</text>
					</view>
					
				</view>
				<view class="action">
					<view class="text-grey text-sm">22:20</view>
					<view class="text-red text-bold text-lg"> 5￥ </view>
				</view>
			</view>

		</view>



		<!--  -->
		<view class="bg-white padding-xs solid-bottom">
			<view class="grid margin-bottom text-center col-4">
				<view class="text-center solid-left padding-tb-sm">
					<text class="text-bold text-lg">44人</text>
					<text class="block text-grey text-xs margin-top-xs">
						已完成
					</text>
				</view>
				
				<view class="text-center solid-left padding-tb-sm">
					<text class="text-bold text-lg">1小时</text>
					<text class="block text-grey text-xs margin-top-xs">
						完成时间
					</text>
				</view>
				<view class="text-center solid-left padding-tb-sm">
					<text class="text-bold text-lg">1天</text>
					<text class="block text-grey text-xs margin-top-xs">
						审核周期
					</text>
				</view>
				<view class="text-center solid-left padding-tb-sm">
					<text class="text-bold text-lg">￥100</text>
					<text class="block text-grey text-xs margin-top-xs">
						托管金额
					</text>
				</view>
			</view>
			
		</view>

		<!-- 任务进度 -->
		<view class="cu-bar bg-white solid-bottom margin-top-xs">
			<view class="action">
				<text class="cuIcon-title text-blue"></text> 
				<text class="text-black text-bold ">任务进度</text>
			</view>
		</view>
		<view class="bg-white padding">
			<view class="cu-steps">
				<view class="cu-item" :class="index>num?'':'text-blue'" v-for="(item,index) in numList" :key="index">
					<text class="num" :class="index==2?'err':''" :data-index="index + 1"></text> {{item.name}}
				</view>
			</view>
		</view>

		<!-- 设备 -->
		<view class="cu-bar bg-white solid-bottom margin-top-sm">
			<view class="action">
				<text class="cuIcon-title text-blue"></text> 
				<text class="text-black text-bold ">操作设备</text>
			</view>
		</view>
		<view class="bg-white padding-xs platform-cut">
			<image class="cu-platform round sm" src="../../static/platform/android.png" mode=""></image>
			<image class="cu-platform round sm" src="../../static/platform/iphone.png" mode=""></image>
			<image class="cu-platform round sm" src="../../static/platform/h5.png" mode=""></image>
		</view>

		<!-- 任务说明 -->
		<view class="cu-bar bg-white solid-bottom margin-top-sm">
			<view class="action">
				<text class="cuIcon-title text-blue"></text> 
				<text class="text-black text-bold ">任务说明</text>
			</view>
		</view>
		<view class="bg-white padding-lg padding-tb-sm ">
			<text>
				任务说明 页面大标题，用于结果页等单一信息页 2222222222 任务说明 页面大标题，用于结果页等单一信息页 任务说明 页面大标题，用于结果页等单一信息页
			</text>
		</view>


		<!-- 任务步骤 -->
		<view class="cu-bar bg-white solid-bottom margin-top-sm">
			<view class="action">
				<text class="cuIcon-title text-blue"></text> 
				<text class="text-black text-bold ">任务步骤</text>
			</view>
		</view>
		<view class="bg-white padding-lg padding-tb-sm ">
			
			<view class="" v-for="(item,index) in 2" :key="index">
				<view class='cu-tag round bg-blue margin-right-xs'>{{index+1}}</view>
				<text>必须展示注册姓名</text>
				<view class="grid margin-bottom margin-top-xs text-center col-2 padding-xs">
					<view class="text-center solid">
						<image src="../../static/demo.png" mode="widthFix"></image>
						<view class="cu-tag badge bg-orange" style="padding:10px;">示例图</view>
					</view>
					<view class="text-center align-center solid">
						
						<image src="../../static/upload.png" mode="widthFix" class="margin-top-lg" 
						style="width: 120upx;height: 120upx;">
						</image>
					</view>
				</view>
			</view>
			

		</view>

		<!-- 上传验证 -->
		<view class="cu-bar bg-white solid-bottom margin-top-sm">
			<view class="action">
				<text class="cuIcon-title text-blue"></text> 
				<text class="text-black text-bold ">上传验证</text>
			</view>
		</view>
		<view class="bg-white padding-lg padding-tb-sm ">

			
			<view class="" v-for="(item,index) in 2" :key="index">
				<view class='cu-tag round bg-blue margin-right-xs'>{{index+1}}</view>
				<text>必须展示注册姓名</text>
				<view class="grid margin-bottom margin-top-xs text-center col-2 padding-xs">
					<view class="text-center solid">
						<image src="../../static/demo.png" mode="widthFix"></image>
						<view class="cu-tag badge bg-orange" style="padding:10px;">示例图</view>
					</view>
					<view class="text-center align-center solid">
						
						<image src="../../static/upload.png" mode="widthFix" class="margin-top-lg" 
						style="width: 120upx;height: 120upx;">
						</image>
					</view>
				</view>
			</view>


		</view>

		
		<!-- 留白 -->
		<view class="margin-top-footer"></view>

		<!-- 底部 -->
		<view class="cu-bar bg-white tabbar border shop fixed-footer solid-top">
			<button class="action" open-type="contact">
				<view class="cuIcon-service text-green">
					<view class="cu-tag badge"></view>
				</view>
				联系对方
			</button>
			<view class="action text-orange">
				<view class="cuIcon-favor"></view> 关注店铺
			</view>
			<view class="action">
<!-- 					<view class="cuIcon-cart">
					<view class="cu-tag badge">99</view>
				</view> -->
				<view class="text-center text-bold margin-bottom-xs text-lg">
					10
				</view>
				剩余名额
			</view>
			<view class="bg-blue submit">立即报名</view>
		</view>





		
	</view>
</template>

<script>
	import share from "@/commons/share.js";
	export default {
		data() {
			return {
				numList: [
					{
						name: '报名'
					}, {
						name: '操作'
					}, {
						name: '上传验证'
					}, {
						name: '等审核'
					}, 
					{
						name: '完成'
					}, 
				],
				num: 0,
				scroll: 0
			}
		},
		onLoad() {

		},
		onBackPress() {
			//监听back键，关闭弹出菜单
			if (this.shareObj.shareMenu.isVisible()) {
				this.shareObj.shareMenu.hide();
				this.shareObj.alphaBg.hide();
				return true
			}
		},
		methods: {
			BackPage() {
				uni.navigateBack({
					delta: 1
				});
			},
			// Share(){
			// 	uni.share({
			// 		provider: "qq",
			// 		scene: "WXSceneSession",
			// 		type: 1,
			// 		summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
			// 		success: function (res) {
			// 			console.log("success:" + JSON.stringify(res));
			// 		},
			// 		fail: function (err) {
			// 			console.log("fail:" + JSON.stringify(err));
			// 		}
			// 	});
			// },
			shareInfo(){
				let shareInfo={
					href:"https://uniapp.dcloud.io",
					title:"分享测试",
					desc:"分享测试",
					imgUrl:"/static/logo.png"
				};
				let shareList=[
					{
						icon:"/static/sharemenu/wx.png",
						text:"微信好友",
					},
					{
						icon:"/static/sharemenu/pyq.png",
						text:"朋友圈"
					},
					{
						icon:"/static/sharemenu/weibo.png",
						text:"微博"
					},
					{
						icon:"/static/sharemenu/qq.png",
						text:"QQ"
					},
					{
						icon:"/static/sharemenu/copy.png",
						text:"复制"
					},
					{
						icon:"/static/sharemenu/more.png",
						text:"更多"
					},
				];
				this.shareObj=share(shareInfo,shareList,function(index){
					console.log("点击按钮的序号: " + index);
					let shareObj={
						href:shareInfo.href||"",
						title:shareInfo.title||"",
						summary:shareInfo.desc||"",
						success:(res)=>{
							console.log("success:" + JSON.stringify(res));
						},
						fail:(err)=>{
							console.log("fail:" + JSON.stringify(err));
						}
					};
					switch (index) {
						case 0:
							shareObj.provider="weixin";
							shareObj.scene="WXSceneSession";
							shareObj.type=0;
							shareObj.imageUrl=shareInfo.imgUrl||"";
							uni.share(shareObj);
							break;
						case 1:
							shareObj.provider="weixin";
							shareObj.scene="WXSenceTimeline";
							shareObj.type=0;
							shareObj.imageUrl=shareInfo.imgUrl||"";
							uni.share(shareObj);
							break;
						case 2:
							shareObj.provider="sinaweibo";
							shareObj.type=0;
							shareObj.imageUrl=shareInfo.imgUrl||"";
							uni.share(shareObj);
							break;
						case 3:
							shareObj.provider="qq";
							shareObj.type=1;
							shareObj.imageUrl=shareInfo.imgUrl||"";
							uni.share(shareObj);
							break;
						case 4:
							uni.setClipboardData({
								data:shareInfo.href,
								complete() {
									uni.showToast({
										title: "已复制到剪贴板"
									})
								}
							})
							break;
						case 5:
							plus.share.sendWithSystem({
								type:"web",
								title:shareInfo.title||"",
								thumbs:[shareInfo.imgUrl||""],
								href:shareInfo.href||"",
								content: shareInfo.desc||"",
							})
							break;
					};
				});
				this.$nextTick(()=>{
					this.shareObj.alphaBg.show();
					this.shareObj.shareMenu.show();
				})
			}	
			
			
			
		}
	}
</script>

<style>
	.user-box{
		min-height: 180upx;
	}
	.cu-platform{
		width: 50upx;
		height: 50upx;
		margin-left: 18upx;
	}
	.fixed-footer{
		width: 100vw;
		bottom: 0;
		left: 0;
		position: fixed;
	}
	.margin-top-footer{
		height: 120upx;
	}
</style>
