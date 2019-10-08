<template>
	<div class="box">
		<li class="box1">
			1 translate （2d）
		</li>
		<li class="box2">
			2 translate (3d)
		</li>
		<li class="box3">
			3 scale
		</li>
		<li class="box4">
			4 rotate
		</li>
		<li class="box5">
			5 skew
		</li>
		<li class="box6">
			6 skew   
		</li>
		
		
		原理: 倾斜的理解:skewX  往x轴方向压，直到角度为指定值，但是高度不变
	</div>
</template>

<script>
	export default{
		name:'transform',
	}
</script>

<style lang="scss" scoped="scoped">
.box{
	width: 310px;
	height: 5000px;
	border-right: 1px solid red;
	li{
		width: 300px;
		height: 300px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 30px;
		font-size: 24px;
		position: relative;
	}
	.box1{
		background: yellow;
		transform: translate(10px,10px);  /*平移*/
		transform: translateX(100px); /*x轴平移*/
		transform: translateY(200px); /*Y轴平移*/
	}
	.box2{
		background: blue;
		transform: translate3d(400px,100px,30px);  /*平移*/
	}
	.box3{
		background: pink;
		transform: scale(2,0.5);  /*缩小*/  /*scaleX,scaleY,*/
	}
	.box4{
		transform-origin:50% 40%; /*旋转基点*/
		background: #00FF00;
		/*transform: rotate(30deg);中心点*/ 
		/*transform: rotateX(80deg);*/
		/*transform: rotateY(30deg);*/
		/*transform: rotate3d(10,0,10,30deg);  前面的x,y,z 取div的坐标点*/
		transform:rotateZ(90deg)
	}
	.box5{
		background: #795DA3;
		/*transform: skew(30deg,20deg);*/
		/*transform: skewX(30deg);*/
		/*transform: skewY(20deg);*/
	}
	.box6{
		border:10px solid red;
		background: #00FFFF;
		transform: skewX(45deg);
	}

}
</style>