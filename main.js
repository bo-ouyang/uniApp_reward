import Vue from 'vue'
import App from './App'

// 引入vuex 状态库
import store from "./store";
Vue.prototype.$store = store;

//检查登录
Vue.prototype.checkLogin = function(backpage, backtype){
	var SUID  = uni.getStorageSync('SUID');
	var SRAND = uni.getStorageSync('SRAND');
	var SNAME = uni.getStorageSync('SNAME');
	var SFACE = uni.getStorageSync('SFACE');
	if(SUID == '' || SRAND == '' || SFACE == ''){

		if(backtype==1){
			uni.navigateTo({
				url: '../login/login?backpage='+backpage+'&backtype='+backtype,
			});
		}else{
			uni.redirectTo({
				url:'../login/login?backpage='+backpage+'&backtype='+backtype,
			});
		}

		return false;
	}
	return [SUID, SRAND, SNAME, SFACE];
}

// 引入自定义导航栏
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

// 生成环境开关
Vue.config.productionTip = false
App.mpType = 'app'


const app = new Vue({
    ...App
})
app.$mount()
