/*
 * @Author: 马晨博
 * @Date: 2019-08-08 15:49:21
 * @Last Modified by: 马晨博
 * @Last Modified time: 2020-05-22 11:42:24
 */
import Vue from 'vue';
import Router from 'vue-router';
import {
  _import
} from '../utils/common'; //模块加载方法

Vue.use(Router);

import css3 from './css3.js';
import canvas from './canvas.js';
import sass from './sass';
import nativejs from './native';
import plug from './plug';
import es6 from './es6';
import vue from './vue';

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/test',
      name: 'test',
      component: _import('test/test1')
    },
    {
      path: '/',
      name: 'login',
      component: _import('login/index')
    },
    //拖拽
    {
      path: '/drag',
      name: 'drag',
      component: _import('drag/index')
    },
    {
      path: '/drag1',
      name: 'drag1',
      component: _import('drag1/index1')
    },
    {
      path: '/drag2',
      name: 'drag2',
      component: _import('drag2/index')
    },
    {
      path: '/drag3',
      name: 'drag3',
      component: _import('drag3/index1')
    },
    //多线程
    {
      path: '/duoxiancheng',
      name: 'duoxiancheng',
      component: _import('test/duoxiancheng')
    },
    //websocket
    {
      path: '/websocket',
      name: 'websocket',
      component: _import('socket/index')
    },
    //css3
    {
      path: '/css',
      name: 'css',
      component: _import('css3/index'),
      children: [].concat(css3)
    },
    //css3
    {
      path: '/es6',
      name: 'es6',
      component: _import('es6/index'),
      children: [].concat(es6)
    },
    //canvas
    {
      path: '/canvas1',
      name: 'canvas1',
      component: _import('canvas/index2')
    },
    {
      path: '/canvas',
      name: 'canvas',
      component: _import('canvas/index'),
      children: [].concat(canvas)
    },
    //gis
    {
      path: '/gis',
      name: 'gis',
      component: _import('gis/index'),
    },
    //sass
    {
      path: '/sass',
      name: 'sass',
      component: _import('sass/index'),
      redirect: "/sass/if",
      children: [].concat(sass)
    },
    //
    {
      path: '/vue',
      name: 'vue',
      component: _import('vue/index'),
      children: [].concat(vue)
    },
    {
      path: '/webpack',
      name: 'webpack',
      component: _import('webpack/index')
    },
    //打印
    {
      path: '/print',
      name: 'print',
      component: _import('print/index')
    },
    //element
    {
      path: '/pop',
      name: 'pop',
      component: _import('element/index')
    },
    //原生js
    {
      path: '/native',
      name: 'native',
      component: _import('js/index'),
      children: [].concat(nativejs)
    },
    //插件
    {
      path: '/plug',
      name: 'plug',
      component: _import('plug/index'),
      children: [].concat(plug)
    },
    //二维码
    {
      path: '/qrcode',
      name: 'qrcode',
      component: _import('qrcode/index'),
    },
    //pdf
    {
      path: '/pdf',
      name: 'pdf',
      component: _import('pdf/index'),
    },
    //视频监控
    {
      path: '/videocall',
      name: 'videocall',
      component: _import('videocall/index'),
    },
    //富文本编辑
    {
      path: '/edit',
      name: 'edit',
      component: _import('edit/edit')
    }
  ]
});