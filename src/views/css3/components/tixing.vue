<template>
	<div>
		<div class="tixing">
			<div class="left-aside"></div>
			<div class="right-aside"></div>
		</div>
		<p>
			原理:主要使用的是skew(倾斜属性),只倾斜X轴,把左右俩边的盒子进行拼接。
		</p>
	</div>
</template>

<script>
	export default{
		name:'tixing',
	}
</script>

<style lang="scss" scoped="scoped">
.tixing{
	width: 500px;
	height: 50px;
	background: #DD6161;
	margin: 100px auto;
	display: flex;
	/*transform: rotate(180deg);*/
	.left-aside,.right-aside{
		width: 50%;
		height: 100%;
		background: #00FF99;
		border-top: 5px solid #000;
		transform-origin: 0% 0%;
	}
	.left-aside{
		/*transform-origin: 0% 0%;*/
		border-left: 5px solid #000;
		transform: skewX(-45deg) translateX(50px);	
	}
	.right-aside{
		border-right: 5px solid #000;
		/*transform-origin: 0% 0%;*/
		transform: skewX(45deg) translateX(-50px);	
	}
}
</style>