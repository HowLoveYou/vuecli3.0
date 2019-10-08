<template>
	<canvas id="mycanvas"></canvas>
</template>

<script>
	export default{
		name:'wujiaoxing',
		methods:{
			init(){
				let canvas = document.getElementById('mycanvas');
				let width = canvas.clientWidth;
				let height = canvas.clientHeight;
				
				canvas.width = width;
				canvas.height = height;
				
				let context = canvas.getContext('2d');
				context.beginPath();
				for(let i = 0 ;i < 5; i++){
					context.lineTo(Math.cos((18 + i * 72)/180*Math.PI)*300 + 400,
								-Math.sin((18 + i * 72)/180*Math.PI)*300 + 400);
					context.lineTo(Math.cos((54 + i * 72)/180*Math.PI)*150 + 400,
								-Math.sin((54 + i * 72)/180*Math.PI)*150 + 400);
				}
				context.closePath();
				context.lineWidth = 10;
				this.drawStar(context,150,300,400,400,30);
				context.stroke();
			},
			//绘制五角星方法
			drawStar(cxt,r,R,x,y,rot){
				//r，R 圆的半径    x，y偏移  rot 旋转度数
				cxt.beginPath();
				for(let i = 0 ;i < 5; i++){
					cxt.lineTo(Math.cos((18 + i * 72 - rot)/180*Math.PI)*R + x,
								-Math.sin((18 + i * 72 - rot)/180*Math.PI)*R + y);
					cxt.lineTo(Math.cos((54 + i * 72 - rot)/180*Math.PI)*r + x,
								-Math.sin((54 + i * 72 - rot)/180*Math.PI)*r + y);
				}
				cxt.closePath();
				cxt.stroke();
			}
		},
		mounted(){
			this.init();
		}
	}
</script>

<style lang="scss" scoped="scoped">
#mycanvas{
	width: 100%;
	height: 100%;
}
</style>