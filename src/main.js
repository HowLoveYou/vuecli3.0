/*
 * @Author: 马晨博
 * @Date: 2019-08-08 15:47:50
 * @Last Modified by: 马晨博
 * @Last Modified time: 2019-09-05 18:59:56
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router/router.js';
import store from './store/index.js';
import BaiduMap from 'vue-baidu-map'

//引入element
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element);

//全局样式
import './styles/index.scss'; //全局样式

//引入路由拦截文件
import '@/interceptors/permission'; //拦截

//百度地图
Vue.use(BaiduMap, {
  ak: 'HbUVYMUg6PwbOnXkztdgSQlQ'
})

Vue.config.productionTip = false;

//打印
import Print from '@/utils/print.js'
Vue.use(Print);  //注册


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
