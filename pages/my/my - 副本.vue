<template>
	<view>
		<!-- 导航栏 -->
		<cu-custom bgColor="bg-gradual-blue" class="nav-bar" :isBack="false">
			<block slot="backText">返回</block><block slot="content">我的</block>
		</cu-custom>
		
		<view class="grid bg-gradual-blue col-1" >
			
			<!-- 头像 -->
			<view class="padding-lr-lg padding-top-lg logo-box">	
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
								<view class='cu-tag'>江苏-省苏州市</view>
							</view>	
							
						</view>
						<view class="action">
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
			
			<!-- list -->
<view  class="cu-list menu">
    <view  class="cu-item">
        <view  class="content">
            <text  class="cuIcon-circlefill text-grey"></text>
            <text  class="text-grey">发布任务</text>
        </view>
    </view>

    <view  class="cu-item">
        <uni-navigator  class="content">
            <text  class="cuIcon-discoverfill text-orange"></text>
            <text  class="text-grey">我的报名</text>
        </uni-navigator>
    </view>
    <view  class="cu-item">
        <view  class="content">
            <text  class="cuIcon-tagfill text-red  margin-right-xs"></text>
            <text  class="text-grey">标签</text>
        </view>
        <view  class="action">
            <view  class="cu-tag round bg-orange light">音乐</view>
            <view  class="cu-tag round bg-olive light">电影</view>
            <view  class="cu-tag round bg-blue light">旅行</view>
		</view>
    </view>
    <view  class="cu-item">
        <view  class="content">
            <text  class="cuIcon-warn text-green"></text>
            <text  class="text-grey">文本</text>
        </view>
        <view  class="action">
            <text  class="text-grey text-sm">小目标还没有实现！</text>
        </view>
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
			
		},
		onLoad:function(){
			loginRes = this.checkLogin('../my/my', 1);
			if(!loginRes){return ;}
		}
	}
</script>

<style>
	.logo-box{
		min-height: 180upx;
	}
	.logo-box .cu-item{
		min-height: 180upx;
	}
	.wallet-bar{
		min-height: 80upx;
	}
</style>
