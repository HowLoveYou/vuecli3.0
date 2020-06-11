import {
  _import
} from '../utils/common' //模块加载方法

const vue = [{
  path: 'model',
  name: 'model',
  component: _import('vue/model/index')
}, ]

export default vue