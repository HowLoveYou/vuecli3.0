import {
	_import
} from '../utils/common' //模块加载方法

const canvas = [
	//五角星
	{
		path: 'wujiaoxing',
		name: 'wujiaoxing',
		component: _import('canvas/components/wujiaoxing')
	},
	{
		path: 'xingkong',
		name: 'xingkong',
		component: _import('canvas/components/xingkong')
	},
]

export default canvas