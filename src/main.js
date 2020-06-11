/*
 * @Author: 马晨博
 * @Date: 2019-08-08 15:47:50
 * @Last Modified by: 马晨博
 * @Last Modified time: 2020-04-15 19:09:56
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
Vue.use(Print); //注册

//颜色选择器
import vcolorpicker from 'vcolorpicker'
Vue.use(vcolorpicker)

//html 转pdf
import htmlToPdf from '@/utils/htmlToPdf'
Vue.use(htmlToPdf)

//富文本编辑器
import CKEditor from '@ckeditor/ckeditor5-vue';
Vue.use(CKEditor);

import waterfall from 'vue-waterfall2'
Vue.use(waterfall)

require('@/mock');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');