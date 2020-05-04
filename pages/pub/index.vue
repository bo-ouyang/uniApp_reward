<template>
	<view class="">
		<!-- 导航栏 -->
		<cu-custom bgColor="bg-gradual-blue" class="nav-bar" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">发布/管理任务</block>
		</cu-custom>
		
		
		
		
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

							<view class="text-gray text-md flex" style="font-size: 12px;">
								<view class="text-cut">ID：10000</view>
							</view>	
							<!-- <view class="text-gray text-md flex">
								<view class='cu-tag'>男</view>
								<view class='cu-tag'>26岁</view>
								<view class='cu-tag'>江苏省-苏州市</view>
							</view>	 -->
							
						</view>
						<view class="action" @tap="intro">
							<!-- <view class="text-grey text-xs">22:20</view> -->
							<view class="cuIcon-right text-gray"></view>
						</view>
					</view>
				</view>	
				<!-- end list -->
				
				<!-- <view class="padding-sm bg-white ">
					<view class="flex">
						<text class="cuIcon-roundcheckfill text-green margin-left-sm">Lv1 初级</text>
					</view>
					<view class="flex margin-top-xs">
						<view class="cu-progress round">
							<view class="bg-green" style="width:80%"></view>
						</view>
						<text class="margin-left">80%</text>
					</view>
				</view> -->
				

			</view>
			
			
			
			<view class="cu-bar wallet-bar bg-white solid-bottom margin-top-xs">
				<view class="action">
					<text class="cuIcon-title text-blue"></text>店铺信息
				</view>
			</view>
			<view class="padding bg-white">
				<view class="flex">
					<view class="flex-sub padding-xs text-center " @tap="target('balanceDetail')">
						<view class="text-lg text-bold margin-bottom-xs">0.00</view>
						<text class="text-sm text-gray">余额</text>
					</view>
					<view class="flex-sub padding-xs text-center text-sm" @tap="target('balanceDetail')">
						<view class="text-lg text-bold margin-bottom-xs">0.00</view>
						<text class="text-sm text-gray">店铺分</text>
					</view>
					<view class="flex-sub padding-xs text-center text-sm" @tap="target('balanceDetail')">
						<view class="text-lg text-bold margin-bottom-xs">0.00</view>
						<text class="text-sm text-gray">信誉分</text>
					</view>
				
				</view>
			</view>
			<view class="padding bg-white solid">
				<view class="flex">
					<view class="flex-sub padding-xs text-center " @tap="target('publish')">
						<text class="text-sm text-red">发布任务</text>
					</view>
					<view class="flex-sub padding-xs text-center text-sm" @tap="target('publisherCash')">	
						<text class="text-sm text-red">提现</text>
					</view>
				</view>
			</view>
			
			<navTab ref="navTab" :tabTitle="manage" @changeTab='changeTab'></navTab>
			
			<swiper :current="currentTab" @change="swiperTab" style="height: 300px;width: 100%;">
				<swiper-item v-for="(listItem,listIndex) in manage" :key="listIndex">
					<scroll-view  scroll-y="true" @scrolltolower="lower1" scroll-with-animation :scroll-into-view="toView">
				<view  class="cu-list grid col-3 no-border">
					<view  class="cu-item" v-for="(item,index) in listItem.lists"  >
						<view  :class='"cuIcon-" + item.icon+"  text-red"'>
						<view  class="cu-tag badge blue">{{item.num}}</view>
						</view>
						<text >{{item.title}}</text>
						<text >{{item.desc}}</text>
					</view>
				</view>
				
					
				
					</scroll-view>
				</swiper-item>
			</swiper>
			
			
			
			

		</view>
		
		
		
		
	
	
		
		
		
	</view>
</template>

<script>
	
	var loginRes;
	import navTab from '../../components/navTab.vue';
	export default {
		
		components: {navTab},
		data() {
			return {
				currentPage:'index',
				toView:'',//回到顶部id
			
				currentTab: 0, //sweiper所在页
				
				TabCur: 0,
				scrollLeft: 0,
				cu_item:[
					{title:'发布任务','target':'../pub/index'},
					{title:'我的报名','target':'report.vue'},
					{title:'我的消息','target':'report.vue'},
					{title:'举报维权','target':'report.vue'},
					{title:'流水报表','target':'../publish/index'},
					{title:'反馈建议','target':'../publish/index'},
				],
				
				manage:[
					
					{title:'任务管理',lists:[
						
						{title:'待审核',target:'',num:0,desc:'等待人工审核',icon:'edit'},
						{title:'展示中',target:'',num:0,desc:'',icon:'edit'},
						{title:'已暂停',target:'',num:0,desc:'',icon:'edit'},
						{title:'审核失败',target:'',num:0,desc:'',icon:'edit'},
						{title:'退款任务',target:'',num:0,desc:'退款中/退款失败',icon:'edit'},
						{title:'其他状态',target:'',num:0,desc:'',icon:'edit'},
						{title:'复审相关',target:'',num:0,desc:'复审/举报',icon:'edit'},
					]},
					{title:'规范文档'},
					{title:"功能拓展"}
				]
			}
		},
		methods: {
			intro(){
				uni.redirectTo({
					url: '../intro/intro'
				})
			},
			changeTab(index){
				this.currentTab = index;
			},
			// swiper 滑动
			swiperTab: function(e) {
				var index = e.detail.current //获取索引
				this.$refs.navTab.longClick(index);
			},
			target(url){
				uni.navigateTo({
					url:url
				})
			}
		},
		onLoad:function(){
			//loginRes = this.checkLogin('../my/my', 1);
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
