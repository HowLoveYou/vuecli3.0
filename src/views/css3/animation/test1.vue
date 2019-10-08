<template>
	<div>
		<div class="box">
			<div class="small-box"></div>
		</div>
		<div class="box1">
			<div class="small-box"></div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'box'
	}
</script>

<style lang="scss" scoped="scoped">
.box{
	margin: 10px auto;
	width: 100px;
	height: 100px;
	position: relative;
	border-radius: 50% 50%;
	/*background: #FF00FF;*/
	border: 1px dashed #00FFFF;
	.small-box{
		position: absolute;
		left: -5px;
		top: 45px;
		width: 10px;
		height: 10px;
		background: red;
		border-radius: 50% 50%;
		transform-origin: 55px 5px;
		animation: circle 3s linear infinite;
	}
}
.box1{
	margin: 100px auto;
	width: 100px;
	height: 100px;
	position: relative;
	/*background: #FF00FF;*/
	border: 1px dashed #00FFFF;
	.small-box{
		position: absolute;
		left: -5px;
		top: 45px;
		width: 10px;
		height: 10px;
		background: red;
		/*border-radius: 50% 50%;*/
		animation: Square 4s linear infinite;
	}
}
@keyframes circle{
	100%{
		transform: rotate(-360deg);
	}
}
@keyframes Square{
	0%{
		left: -5px;
		top: -5px;
	}
	25%{
		left: -5px;
		top: 95px;
	}
	50%{
		left: 95px;
		top: 95px;
	}
	75%{
		left: 95px;
		top: -5px;
	}
	100%{
		left: -5px;
		top: -5px;
	}
}
</style>