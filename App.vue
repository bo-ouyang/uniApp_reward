<script>
	import {
			mapMutations
		} from 'vuex';
	import Vue from 'vue'
	
	export default {
		onLaunch: function() {
			console.log('App Launch')
			/* uni.getSetting({
            success(res) {                    
                if (!res.authSetting['scope.userLocation']) {
                    // 未授权
                    /* uni.authorize({
                        scope: 'scope.userInfo',
                        success() { //1.1 允许授权
								uni.authorize({
									scope: 'scope.userLocation',
									success() {
										
									}
								})
						
                             uni.getUserInfo({
                             	
                             })
                            
                        },
                        fail(){    //1.2 拒绝授权
                            console.log("你拒绝了授权，无法获得周边信息")
                        }
                    }) 
                }else{
                    // 已授权 ..(获取位置信息)
                }
            }
        }); */
			uni.getStorage({
				key:"userInfo",
				success:(res)=>{
					console.log(res)
					this.setlogin(res.data)
					var res = res.data
										// 如果还需要重新校验或是想要刷新token的有效时间 就再联网请求一次
										this.$api.auth({user:res.data.username}).then((ret)=>{
												this.setlogin(ret.data);
										}).catch((err)=>{
											
										})
				}
			})
			
			uni.getSystemInfo({
				success: function(e) {	
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif
					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif		
					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			})			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			...mapMutations(['setlogin'])
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "./uni.scss";
	@import "colorui/main.css";
	@import "colorui/icon.css";
	@import "colorui/animation.css";
	@import "/static/iconfont/font.scss";
	.page {
		height: 100Vh;
		width: 100vw;
		/* #ifdef APP-PLUS */
		padding-top: 64upx;
		/* #endif */
		/* #ifdef H5 */
		padding-top: 0upx;
		/* #endif */
	}

	.page.show {
		overflow: hidden;
	}
	/* #ifdef APP-PLUS */
	.nav-bar{
		padding-top: 60upx;
		min-height: 100upx;
		line-height: 100upx;
	}
	/* #endif */
	
	.cu-custom{
		height: 0;
	}
</style>
