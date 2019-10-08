<template>
	<div class="canvas-page">
		<div class="diagram">
			<div class="canvas-device" ref="canvasDevice">
				<div class="jzq-box">
					<span :class="canvasdata.id">{{jzqname}}</span>
				</div>
				<div class="jzqhl-box">
					<li v-for="item in hlArr" :class="item.id">
						{{item.name}}
					</li>
				</div>
				<div class="zx-box">
					<div class="zx-small-box" v-for="item in hlArr" :style="{width:(100/hlArr.length)+'%'}">
						<li v-for="zx in item.feeders" :class="zx.id">
							{{zx.name}}
						</li>
					</div>
				</div>
				<div class="street-box">
					<li v-for="item in streetArr" :class="item.id">
						{{item.name}}
						<div class="point-box">
							<span v-for="zx in item.data" class="point-span"></span>
						</div>
					</li>
				</div>
			</div>
			<canvas id="mycanvas2"></canvas>
		</div>
	</div>
</template>

<script>
	
	import {drawline} from '@/utils/canvas.js'
	
	export default{
		name:'canvas-page',
		data(){
			return{
				canvasdata:{
					name:'四海汽车集中器',
					id:'shqc',
					data:[
						{name:"集中器回路1",id:'hl_1',feeders:[
							{name:'支线1',id:'line_1'},
							{name:'支线2',id:'line_2'},
							{name:'支线3',id:'line_3'},
						]},
						{name:"集中器回路2",id:'hl_2',feeders:[
							{name:'支线4',id:'line_4'},
							{name:'支线5',id:'line_5'},
							{name:'支线6',id:'line_6'},
						]},
						{name:"集中器回路3",id:'hl_3',feeders:[
							{name:'支线7',id:'line_7'},
							{name:'支线8',id:'line_8'},
							{name:'支线9',id:'line_9'},
						]}
					]
				},
				
				
				jzqname:'',//集中器
				hlArr:[],//回路数组
				zxArr:[],//支线数组
				streetArr:[
					{
						name:'街道1',
						id:'street_1',
						data:['line_1','line_2','line_4']
					},
					{
						name:'街道2',
						id:'street_2',
						data:['line_3','line_5','line_6']
					},
					{
						name:'街道3',
						id:'street_3',
						data:['line_7','line_8',]
					},
					{
						name:'街道4',
						id:'street_4',
						data:['line_9']
					},
				],//街道数组
			}
		},
		created(){
			this.handledata();
		},
		mounted(){
			this.init();
		},
		methods:{
			handledata(){
				let {canvasdata} = this;
				this.jzqname = canvasdata.name;
				for(let item of canvasdata.data){
					this.hlArr.push(item);
					this.zxArr = this.zxArr.concat(item.feeders);
				}
				
			},
			init(){
				let canvas = document.getElementById('mycanvas2');
				let width = this.$refs.canvasDevice.clientWidth;
				let height = this.$refs.canvasDevice.clientHeight;
				canvas.width = width;
				canvas.height = height;
				let cxt = canvas.getContext('2d');
//				let arr = [[30,30],[30,80],[80,80],[80,150],];
//				drawline(cxt,arr,'orange',5);
				this.begin(cxt);
			},
			begin(cxt){
				let {canvasdata} = this;
				let {getPosition,halfValue,getPt} = this;
				let canvasBox = this.$refs.canvasDevice;
				//获取四个盒子的高度位置
				let boxArr = ['jzq-box','jzqhl-box','zx-box','street-box'];
				let boxTopArr = boxArr.map( item => {
					let boxEle = canvasBox.getElementsByClassName(item)[0];
					let boxTop = getPosition(boxEle).top;
					return boxTop;
				})
				//三条基线的高度
				let length = boxTopArr.length -1;
				let baseLineArr = [];
				for(let i = 0;i < length;i++){
					let baseLine = halfValue(boxTopArr[i],boxTopArr[i+1]);
 					baseLineArr.push(baseLine);
				}
				
				//开始划线
				let jzqEle = canvasBox.getElementsByClassName(canvasdata.id)[0];
				let jzqElePt = getPt(jzqEle);
				drawline(cxt,[jzqElePt,[jzqElePt[0],baseLineArr[0]]],'orange',5);
				
				let hlPtArr = this.hlArr.map( (item,i) => {
					let hlEle = canvasBox.getElementsByClassName(item.id)[0];
					let hlPt = getPt(hlEle);
					drawline(cxt,[[hlPt[0],baseLineArr[0]],hlPt],'orange',5);
					drawline(cxt,[hlPt,[hlPt[0],baseLineArr[1]]],'orange',5);
					let zxPtArr = item.feeders.map( (zxpt,i) => {
						let zxEle =  canvasBox.getElementsByClassName(zxpt.id)[0];
						let zxPt = getPt(zxEle);
						drawline(cxt,[[zxPt[0],baseLineArr[1]],zxPt],'orange',5);
						return zxPt
					})
					zxPtArr.sort( (a,b) => {return a-b} );
					drawline(cxt,[[zxPtArr[0][0],baseLineArr[1]],[zxPtArr[zxPtArr.length-1][0],baseLineArr[1]]],'orange',5)//基线二
					return hlPt;
				})
				hlPtArr.sort( (a,b) => {return a-b} );
				drawline(cxt,[[hlPtArr[0][0],baseLineArr[0]],[hlPtArr[hlPtArr.length-1][0],baseLineArr[0]]],'orange',5)//基线一
				//街道划线（倒着划线）
				let staggernum = 1;
				let stagger = 0;
				for(let street of this.streetArr){
					let streetEle = canvasBox.getElementsByClassName(street.id)[0];
					let streetEleLeft = getPosition(streetEle).left;
					//获取街道上的小点
					let streetPointSpanArr = streetEle.getElementsByClassName('point-span');
					let streetPointsArr = [];
					for(let item of streetPointSpanArr){
						let left = getPt(item)[0]+streetEleLeft;
						streetPointsArr.push(left);
					}
					streetPointsArr.sort( (a,b) => {return a-b} );
					//获取街道所对应的支线位置
					let zxArr = street.data.map( item => {
						let zxEle = canvasBox.getElementsByClassName(item)[0];
						let zxPt = getPt(zxEle);
						let left = zxPt[0];
						return left;
					})
					zxArr.sort( (a,b) => {return a-b} );
					//所有折线点
					let brokenLineArr = streetPointsArr.map( (item,i) => {
						console.log(stagger);
						let zxPoint = [zxArr[i],boxTopArr[2]];//开始划线的点
						let centerPointOne = [zxArr[i],baseLineArr[2]+stagger*10];//中间第一个点   //基线3
						let centerPointTwo = [item,baseLineArr[2]+stagger*10];//中间第二个点
						let spanPoint = [item,boxTopArr[3]];//街道点
						let brokenLine = [zxPoint,centerPointOne,centerPointTwo,spanPoint];
						drawline(cxt,brokenLine,'yellow',5);
						if(staggernum%2 == 0){
							stagger = -stagger;
						}else{
							stagger = -stagger + 1;
						}
						staggernum++;
					});
					
				}
			},
			//获取元素的位置
			getPosition(ele){
				let left = ele.offsetLeft;
				let top = ele.offsetTop;
				let width = ele.clientWidth;
				return {left:left,top:top,width:width};
			},
			getPt(ele){
				let left = ele.offsetLeft;
				let top = ele.offsetTop;
				let width = ele.clientWidth;
				return [(left+width/2),top];
			},
			//获取基线的高度
			halfValue(num1,num2){
				return (num1+num2)/2;
			}
		},
	}
</script>

<style lang="scss" scoped="scoped">
.canvas-page{
	width: 100%;
	height: 100%;
	.diagram{
		width: 100%;
		height: 100%;
		position: relative;
	}
}
.canvas-device{
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}
.jzq-box,.jzqhl-box,.zx-box,.street-box{
	width: 100%;
	/*background: orange;*/
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.zx-small-box{
	display: flex;
	justify-content: space-around;
	align-items: center;
}
/*街道*/
.street-box{
	li{
		width: 200px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		border: 1px solid #ccc;
		position: relative;
		.point-box{
			height: 1px;
			width: 100%;
			position:absolute;
			top:0;
			left:0;
			display:flex;
			justify-content: center;
			span{
				margin: 0 10px;
			}
		}
		
	}
}
/*集中器回路*/
.jzqhl-box{
	
}
</style>