import {
  _import
} from '../utils/common' //模块加载方法
const plug = [{
    path: "color",
    name: "color",
    component: _import('plug/color/index')
  },
  //时间插件
  {
    path: 'dateplus',
    name: 'dateplus',
    component: _import('datePlus/datepicker')
  },
  //瀑布式布局
  {
    path: 'waterfall',
    name: 'waterfall',
    component: _import('waterfall/index')
  },
]
export default plug