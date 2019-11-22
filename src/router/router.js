/*
 * @Author: 马晨博
 * @Date: 2019-08-08 15:49:21
 * @Last Modified by: 马晨博
 * @Last Modified time: 2019-10-08 15:43:20
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

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/test',
      name: 'test',
      component: _import('test/index')
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
    	path:'/pop',
    	name:'pop',
    	component: _import('element/index')
    }
  ]
});