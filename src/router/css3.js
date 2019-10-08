import { _import } from '../utils/common' //模块加载方法

const css3 = [
	//css3属性
	{
		path:'border',
		name:'border',
		component:_import('css3/components/border')
	},
	{
		path:'background',
		name:'background',
		component:_import('css3/components/background')
	},
	{
		path:'textshadow',
		name:'textshadow',
		component:_import('css3/components/textshadow')
	},
	{
		path:'transform',
		name:'transform',
		component:_import('css3/components/transform')
	},
	{
		path:'transition',
		name:'transition',
		component:_import('css3/components/transition')
	},
	{
		path:'animation',
		name:'animation',
		component:_import('css3/components/animation')
	},
	
	//梯形
	{
		path:'tixing',
		name:'tixing',
		component:_import('css3/components/tixing')
	},
	//扇形
	{
		path:'shanxing',
		name:'shanxing',
		component:_import('css3/components/shanxing')
	},
	//圆环旋转效果
	{
		path:'ring',
		name:'ring',
		component:_import('css3/components/ring')
	},
	//星球动画
	{
		path:'xingqiuanimation',
		name:'xingqiuanimation',
		component:_import('css3/components/xingqiu_animation')
	},
	//太极
	{
		path:'taiji',
		name:'taiji',
		component:_import('css3/components/taiji')
	},
	
	
	
	
	//点绕着圈转
	{
		path:'test1',
		name:'test1',
		component:_import('css3/animation/test1')
	},
	{
		path:'test2',
		name:'test2',
		component:_import('css3/animation/test2')
	}
]

export default css3
