<template>
	<div class="canvas-page">
		<canvas id="mycanvas"></canvas>
	</div>
</template>

<script>
	
	export default{
		name:'canvas-page',
		data(){
			return{
				
			}
		},
		methods:{
			//初始化
			init(){
				let c =document.getElementById("mycanvas");
				var ctx=c.getContext("2d");
				ctx.fillStyle="  #0000ff";
				ctx.fillRect(50,0,10,10);
			},
		},
		mounted(){
			this.init();
		}
	}
</script>

<style lang="scss" scoped="scoped">
.canvas-page{
	width: 100%;
	height: 100%;
	#mycanvas{
		width: 100%;
		height: 100%;
	}
}
</style>