<template>
	<view class="">
		<!-- 导航栏 -->
		<cu-custom bgColor="bg-gradual-blue" class="nav-bar" :isBack="false">
			<block slot="backText">返回</block>
			<block slot="content">我的</block>
		</cu-custom>
		
<!-- 		
		<view class="cu-bar bg-gradual-blue search nav-bar fixed">
			<view class="action">
				<text class="cuIcon-message lg"></text>
			</view>
			<view class="content">我的</view>
			<view class="action">
				<text class="cuIcon-settings lg"></text>
			</view>
		</view> -->
		
		
		<view class="grid col-1">
			
			<!-- 头像 -->
			<view class="padding-lr-lg bg-gradual-blue padding-top-lg padding-bottom-sm logo-box">	
				<!-- list -->
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" 
						style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png);">
							<view class="cu-tag badge">Lv1</view>
						</view>
						<view class="content ">
							<view class="text-grey">
								<view class="text-cut text-black text-bold">bool</view>
								<view class="cu-tag round bg-orange sm">初级</view>
							</view>

							<view class="text-gray text-md flex">
								<view class="text-cut">ID：10000</view>
							</view>	
							<view class="text-gray text-md flex">
								<view class='cu-tag'>男</view>
								<view class='cu-tag'>26岁</view>
								<view class='cu-tag'>江苏省-苏州市</view>
							</view>	
							
						</view>
						<view class="action" @tap="intro">
							<!-- <view class="text-grey text-xs">22:20</view> -->
							<view class="cuIcon-right text-gray"></view>
						</view>
					</view>
				</view>	
				<!-- end list -->
				
				<view class="padding-sm bg-white ">
					<view class="flex">
						<text class="cuIcon-roundcheckfill text-green margin-left-sm">Lv1 初级</text>
					</view>
					<view class="flex margin-top-xs">
						<view class="cu-progress round">
							<view class="bg-green" style="width:80%"></view>
						</view>
						<text class="margin-left">80%</text>
					</view>
				</view>
				

			</view>
			
			
			<!-- 我的钱包 -->
			<view class="cu-bar wallet-bar bg-white solid-bottom margin-top-xs">
				<view class="action">
					<text class="cuIcon-title text-blue"></text>我的钱包
				</view>
			</view>
			<view class="padding bg-white">
				<view class="flex">
					<view class="flex-sub padding-xs text-center ">
						<view class="text-lg text-bold margin-bottom-xs">0.00</view>
						<text class="text-sm text-gray">余额</text>
					</view>
					<view class="flex-sub padding-xs text-center text-sm">
						<view class="text-lg text-bold margin-bottom-xs">0.00</view>
						<text class="text-sm text-gray">保证金</text>
					</view>
				</view>
			</view>
			
			<!-- 我的钱包 -->
			<view class="cu-bar wallet-bar bg-white solid-bottom margin-top-xs">
				<view class="action">
					<text class="cuIcon-title text-blue"></text>我的帮忙
				</view>
			</view>
			<view class="padding bg-white">
				<view class="flex">
					<view class="flex-sub padding-xs text-center ">
						<view class="text-lg text-bold margin-bottom-xs cuIcon-roundcheck "></view>
						<text class="text-sm text-gray">未提交</text>
					</view>
					<view class="flex-sub padding-xs text-center text-sm cuIcon-roundcheckfill text-blue">
						<view class="text-lg text-bold margin-bottom-xs"></view>
						<text class="text-sm text-gray">已提交</text>
					</view>
					<view class="flex-sub padding-xs text-center text-sm cuIcon-warnfill text-red" >
						<view class="text-lg text-bold margin-bottom-xs"></view>
						<text class="text-sm text-gray">复审/被举报</text>
					</view>
					<view class="flex-sub padding-xs text-center text-sm cuIcon-timefill <text-blue></text-blue>">
						<view class="text-lg text-bold margin-bottom-xs"></view>
						<text class="text-sm text-gray">浏览历史</text>
					</view>
				</view>
			</view>
			

		</view>
		
		
		
		<!-- list -->
		<view  class="cu-list menu solid-top margin-top-xs">
			<view  class="cu-item">
				<view  class="content">
					<text  class="cuIcon-circlefill text-grey"></text>
					<text  class="text-grey">发布任务</text>
				</view>
				<view  class="action">
					<text  class="text-grey text-sm cuIcon-right"></text>
				</view>
			</view>

			<!-- <view  class="cu-item">
				<navigator  class="content">
					<text  class="cuIcon-discoverfill text-orange"></text>
					<text  class="text-grey">我的报名</text>
				</navigator>
				<view  class="action">
					<text  class="text-grey text-sm cuIcon-right"></text>
				</view>
			</view> -->

			<view  class="cu-item">
				<navigator  class="content">
					<text  class="cuIcon-discoverfill text-orange"></text>
					<text  class="text-grey">我的消息</text>
				</navigator>
				<view  class="action">
					<text  class="text-grey text-sm cuIcon-right"></text>
				</view>
			</view>

			<view  class="cu-item">
				<view  class="content">
					<text  class="cuIcon-circlefill text-grey"></text>
					<text  class="text-grey">举报维权</text>
				</view>
				<view  class="action">
					<text  class="text-grey text-sm cuIcon-right"></text>
				</view>
			</view>


			<view  class="cu-item">
				<view  class="content">
					<text  class="cuIcon-circlefill text-grey"></text>
					<text  class="text-grey">流水报表</text>
				</view>
				<view  class="action">
					<text  class="text-grey text-sm cuIcon-right"></text>
				</view>
			</view>

			<view  class="cu-item">
				<view  class="content">
					<text  class="cuIcon-circlefill text-grey"></text>
					<text  class="text-grey">反馈建议</text>
				</view>
				<view  class="action">
					<text  class="text-grey text-sm cuIcon-right"></text>
				</view>
			</view>

		</view>			
	
	
	
		
		
		
	</view>
</template>

<script>
	
	var loginRes;
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			intro(){
				uni.navigateTo({
					url: '../intro/intro'
				})
			}
		},
		onLoad:function(){
			loginRes = this.checkLogin('../my/my', 1);
			if(!loginRes){return ;}
		}
	}
</script>

<style>
	.logo-box{
		/* min-height: 180upx; */
	}
	.logo-box .cu-item{
		min-height: 180upx;
	}
	.wallet-bar{
		min-height: 80upx;
	}
</style>
