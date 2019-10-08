<template>
	<canvas id="mycanvas1"></canvas>
</template>

<script>
	export default{
		name:'xingkong',
		methods:{
			init(){
				let canvas = document.getElementById('mycanvas1');
				let width = canvas.clientWidth;
				let height = canvas.clientHeight;
				
				canvas.width = width;
				canvas.height = height;
				
				let context = canvas.getContext('2d');
				
				context.fillStyle = "#000";
				context.fillRect(0,0,width,width)
				
				for(let i = 0; i < 200 ;i++){
					let r = Math.random()*10 + 10;
					let x = Math.random()*width;
					let y = Math.random()*height;
					let a = Math.random()*360;
					this.drawStar(context,r/2,r, x, y,a);
				}
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
				
				cxt.fillStyle = "#fb3";
				cxt.strokeStyle = "#fb3";
				cxt.lineWidth = 3;
				cxt.lineJoin = "round";
				cxt.fill();
				cxt.stroke();
			}
		},
		mounted(){
			this.init();
		}
	}
</script>

<style lang="scss" scoped="scoped">
#mycanvas1{
	width: 100%;
	height: 100%;
}
</style>