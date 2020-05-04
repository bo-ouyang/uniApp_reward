import Vue from 'vue'
import App from './App'
import store from "./store";
import api from '@/commons/vmeitime-http/'
// 引入自定义导航栏
import cuCustom from './colorui/components/cu-custom.vue'
Vue.prototype.$api = api

// 引入vuex 状态库
Vue.prototype.$store = store;

Vue.component('cu-custom',cuCustom)
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



// 生成环境开关
Vue.config.productionTip = false
App.mpType = 'app'


const app = new Vue({
	store,
    ...App
})
app.$mount()
