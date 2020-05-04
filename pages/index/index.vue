<template>
	<view >
		
		<!-- 搜索框 -->
		<view class="cu-bar search fixed bg-gradual-blue nav-bar">
			<view class="cu-avatar round" 
			style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png);"></view>
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" 
				@tap="search"
				type="text" placeholder="搜索任务" confirm-type="search"></input>
			</view>
			<view class="action" @tap="popup_bottom()">
				<text v-text="address">徐州</text>
				<text class="cuIcon-triangledownfill"></text>
			</view>
		</view>
		
		<!-- 地区选择 -->
		<linkAddress
			ref="linkAddress"
			:height="height"
			@confirmCallback="confirmCallback()"
		>
		</linkAddress>	
		
		
		
	<scroll-view :scroll-y="modalName==null" :class="modalName!=null?'show':''" class="scroll">	

		<!-- 轮播 -->
		<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500" >
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
				<video :src="item.url" autoplay loop muted :show-play-btn="false" 
				:controls="false" objectFit="cover" v-if="item.type=='video'"></video>
			</swiper-item>
		</swiper>		

		<uni-notice-bar :show-icon="true" :scrollable="true" :single="true" text="uni-app 1.6版正式发布，开发一次，时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。" />
	

		<!--  -->	
		<view  class="cu-list grid col-4 no-border">
			
			<view  class="cu-item">
				<view  class="cuIcon-cardboardfill text-red">
					<view  class="cu-tag badge">99+</view>
				</view>
				<text >试玩游戏</text>
			</view>
			
			<view  class="cu-item">
				<view  class="cuIcon-recordfill text-orange">
					<view  class="cu-tag badge"></view>
				</view>
				<text>录像</text>
			</view>
			
			<view  class="cu-item">
				<view  class="cuIcon-picfill text-yellow"></view>
				<text>图像
				</text>
			</view>
			
			<view  class="cu-item">
				<view  class="cuIcon-noticefill text-olive">
					<view  class="cu-tag badge">22</view></view>
				<text >通知
				</text>
			</view>
			
			<!-- 2 -->
			<view  class="cu-item">
				<view  class="cuIcon-upstagefill text-cyan"></view>
				<text >排行榜</text>
			</view>
			<view  class="cu-item">
				<view  class="cuIcon-clothesfill text-blue"></view>
				<text >皮肤</text>
			</view>
			<view  class="cu-item">
				<view  class="cuIcon-discoverfill text-purple"></view>
				<text >发现</text>
			</view>
			<view  class="cu-item">
				<view  class="cuIcon-questionfill text-mauve"></view>
				<text>帮助</text>
			</view>
			 
			
			
		</view>	
		
<!-- 		
				<view class="example-body">
					<uni-notice-bar :single="true" :show-icon="true" text="uni-app行业峰会频频亮相，开发者反响热烈!" />
					<uni-notice-bar :show-icon="true" text="8月12日DCloud受邀参加iWEB峰会后，9月19日DCloud CEO 王安在千人小程序峰会——见实大会，做了主题为《App和小程序，鱼与熊掌如何兼得？》的分享。" />
				</view>
		<view class="example-body">
			<uni-notice-bar :scrollable="true" :single="true" text="uni-app行业峰会频频亮相，开发者反响热烈!" />
			<uni-notice-bar :show-icon="true" :scrollable="true" :single="true" text="uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。" />
			<uni-notice-bar :scrollable="true" text="8月12日DCloud受邀参加iWEB峰会后，9月19日DCloud CEO 王安在千人小程序峰会——见实大会，做了主题为《App和小程序，鱼与熊掌如何兼得？》的分享。" />
		</view>
 -->
		
		<!-- 活动 -->
		<view class="activity">
			<image src="../../static/activity/banner_laren.jpg" class="activity_img" mode="widthFix"></image>
		</view>
		
		<!-- 任务推荐 -->
		<view class="cu-bar bg-white recommend solid-bottom">
			<view class="action sub-title">
				<text class="text-xl text-bold cuIcon-title text-blue">推荐任务</text>
				<text class="text-ABC text-blue">recommend</text>
			</view>
			<view class="task-sort">
				
			</view>
		</view>
	

			<!-- list -->
			<view class="cu-list menu-avatar">
				
				<view class="cu-item" v-for="(item,index) in 10" :key="index" @tap="taskInfo">
					<view class="cu-avatar radius lg" 
					style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png);">
						<view class="cu-tag badge">v1</view>
					</view>
					<view class="content">
						<view class="text-grey">
							<view class="text-cut">注册任务</view>
							<view class="platform-cut">	
								<image class="cu-platform round sm" src="../../static/platform/android.png" mode=""></image>
								<image class="cu-platform round sm" src="../../static/platform/iphone.png" mode=""></image>
								<image class="cu-platform round sm" src="../../static/platform/h5.png" mode=""></image>
							</view>
							
						</view>
						<view class="text-gray text-sm flex">
							<view class="text-cut">
								37 人 已赚，剩余 7 个
							</view>
						</view>
						<view class="text-gray text-sm flex">
							<view class="text-cut">
								<view class="cu-tag cu-cate bg-orange">认证注册</view>
							</view>
						</view>
					</view>
					<view class="action">
						<view class="text-grey text-sm">22:20</view>
						<view class="text-red text-lg"> 5￥ </view>
					</view>
				</view>


			</view>
			
			<view class="find-all" @tap="toHall()"><text>查看全部悬赏>>></text></view>

		
	</scroll-view>	
		
	<!-- 留白 -->
	<view class="margin-top-footer">
		<view class="footer-title">企业会员推荐</view>
		<view class="cu-list grid col-4 no-border">
			<view class="cu-item" v-for="(item,index) in 12 " :index="index">
				<view class="user-avatar"
				style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png);">
					<!-- <view class="cu-tag badge">v1</view> -->
				</view>
				<text >排行榜</text>
			</view>
		</view>
	</view>	
		
		
	</view>
</template>

<script>
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	import linkAddress from '@/components/xuan-linkAddress/xuan-linkAddress.vue'
	export default {
		components: {
			uniNoticeBar,
			linkAddress
		},
		data() {
			return {
				swiperList: [
					{
						id: 0,
						type: 'image',
						url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
					}, {
						id: 1,
						type: 'image',
						url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
					}, {
						id: 2,
						type: 'image',
						url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
					}, {
						id: 3,
						type: 'image',
						url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
					}
				],
				dotStyle: true,
				towerStart: 0,
				direction: '',
				modalName: null,
				
				height: '500px',
				address:'北京'
				
			}
		},
		onLoad() {
			/* var that = this
			uni.authorize({
				scope:"scope.userInfo",
				success(res) {
					console.log(res);
				},
				fail() {
					uni.openSetting({
						success(authSetting) {
							console.log(authSetting);
						}
					})
				}
			});
		 */
			/* uni.getProvider({
				service: 'oauth',
				success: function(res) {
					console.log(res.provider);
					//支持微信、qq和微博等
					if (~res.provider.indexOf('weixin')) {
						uni.login({
							provider: 'weixin',
							scopes:'auth_user',
							success: function(loginRes) {
								console.log('-------获取openid(unionid)-----');
								console.log(JSON.stringify(loginRes.code));
								// 获取用户信息
								uni.getUserInfo({
									provider: 'weixin',
									success: function(infoRes) {
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
		},
		methods: {
			toHall(){
				uni.navigateTo({
					url:'../hall/hall'
				})
			},
			InputFocus(e) {
				this.InputBottom = e.detail.height
				console.log(this.InputBottom)

			},
			InputBlur(e) {
				this.InputBottom = 0
			},
			search(e){
				uni.navigateTo({
					url: '../search/search'
				})
			},
			//点击弹出弹窗
			popup_bottom: function() {
				this.height = '550rpx';
				//显示
				this.show_popup();
				
			},
			//显示弹窗
			show_popup: function() {
				this.$refs.linkAddress.show();
			},
			//回掉
			confirmCallback: function() {
				let ads=this.$store.state.user_address;
				// this.address=ads.province+ads.city+ads.district;
				console.log(ads.province);
				
				switch (ads.province){
					case '北京市':
						this.address=ads.province.slice(0,-1);
						break;
					case '上海市':
						this.address=ads.province.slice(0,-1);
						break;
					case '天津市':
						this.address=ads.province.slice(0,-1);
						break;
					case '重庆市':
						this.address=ads.province.slice(0,-1);
						break;
					case '香港特别行政区':
						this.address='香港';
						break;
					case '澳门特别行政区':
						this.address='澳门';
						break;
					case '台湾':
						this.address=ads.province;
						break;
					default:
						this.address=ads.city.slice(0,-1);
						break;
				}
				
			},
			// 跳到任务详情
			taskInfo:function(e){
				uni.navigateTo({
					url: '../taskInfo/taskInfo'
				})
			}
			
			
		}
	}
</script>

<style>
	.find-all{
		margin: 20upx 250upx 20upx;
		font-size: small;
		color: #333333;
	}

		
	.footer-title{
		display: flex;
		flex:left;
		margin: 10upx;
		font-size: large;
	}
	.cu-list.grid>.cu-item {
		align-items: center;
		}
	.user-avatar{
		border-radius: 50%;
		height: 90upx;
		width: 90upx;
	}
	
	.recommend{
		margin-top: 8upx;
		/* #ifdef APP-PLUS */
		padding-top: 0;
		/* #endif */
	}
	
	/* 列表 */
	.cu-list.menu-avatar>.cu-item{
		height: 160upx; 
	}
	.platform-cut{
		margin-left: 20upx;
	}
	.cu-platform{
		width: 30upx;
		height: 30upx;
		margin-left: 10upx;
	}
	.cu-cate{
		font-size: 24upx;
		height: auto;
	}

	/* 活动 */
	.activity{
		width: 100vw;
	}
	.activity_img{
		width: 100vw;
	}
	
	.scroll{
		/* #ifdef H5 */
		margin-top: 100upx;
		/* #endif */
		/* #ifdef APP-PLUS */
		margin-top: 160upx;
		/* #endif */
	}
	/* .margin-top-footer{
		height: 60upx;
	} */
</style>

