<template>
	<div class="background">
		<div class="bg"></div>
		<!--线性渐变-->
		<div class="linear">123123</div>
		<!--径向渐变-->
		<div class="radial"></div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped="scoped">
.bg{
	margin:100px auto;
	width: 300px;
	height: 300px;
	background-image:url('../images/alert.gif'),url('../images/header_bj.gif');/*谁在前面谁就在顶上*/
	background-size: 10% 10%,100% 100%;
	background-position:90% 90%,0% 0%;
	background-repeat: no-repeat,no-repeat;
}
.linear{
	margin:100px auto;
	width: 300px;
	height: 300px;
	border-radius: 50% 50%;
	text-align: center;
	line-height: 300px;
	/*从左到右*/
	/*background: linear-gradient(to right,blue,red);*/
	/*从上到下*/
	/*background: linear-gradient(to bottom,blue,red);*/
	/*从左上到右下*/
	/*background: linear-gradient(to bottom right,blue,red);*/
	/*角度渐变*/	
    /*background: linear-gradient(60deg,blue,red);*/
    /*多个颜色渐变*/
    /*background: linear-gradient(270deg,blue,yellow,red);*/
   	/*重复渐变*/
   	background: repeating-linear-gradient(270deg,blue 5%, yellow 20%, green 30%);
	
	
	
	/*transform: rotate(60deg) skew(30deg) scale(0.5);*/
	/*animation: circle 1s infinite linear;*/
}

.radial{
	margin:100px auto;
	width: 300px;
	height: 300px;
	 /*background: radial-gradient(red, green, blue);*/
	/*background: radial-gradient(red 10%, green 30%, blue 60%)*/
	/*background: radial-gradient(circle, red, yellow, green);*/
	background: repeating-radial-gradient(red, yellow 10%, green 15%);
}


@keyframes circle{
	from{
		transform: rotate(0deg) skew(30deg) scale(0.5);
	}
	to{
		transform: rotate(360deg) skew(30deg) scale(0.5);
	}
}
</style>