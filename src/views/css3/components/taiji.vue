<template>
	<div class="taiji">

	</div>
</template>

<script>
	export default {
		name: 'taiji',
	}
</script>

<style lang="scss" scoped="scoped">
	.taiji {
		width: 0;
		height: 400px;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		border-left: 200px solid #000;
		border-right: 200px solid #fff;
		box-shadow: 0 0 30px rgba(0, 0, 0, .5);
		border-radius: 400px;
		animation:rotation 2.5s linear infinite;
	}
	
	.taiji:before,.taiji:after {
		position: absolute;
		content: "";
		display: block;
	}
	
	.taiji:before {
		width: 200px;
		height: 200px;
		top: 0;
		left: -100px;
		z-index: 1;
		background-color: #fff;
		border-radius: 50%;
		box-shadow: 0 200px 0 #000;
	}
	
	.taiji:after {
		width: 60px;
		height: 60px;
		top: 70px;
		left: -30px;
		z-index: 2;
		background-color: #000;
		border-radius: 50%;
		box-shadow: 0 200px 0 #fff;
	}
	@keyframes rotation {
	    0% {transform:rotate(0deg);}
	    100% {transform:rotate(-360deg);}
	}
</style>