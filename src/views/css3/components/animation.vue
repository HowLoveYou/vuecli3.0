<template>
	<div class="animation">
		<div class="box">
		</div>
	</div>
</template>

<script>
	export default{
		name:'animation',
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
.animation{
	.box{
		border-radius: 50%;
		margin: 100px auto;
		width: 100px;
		height: 100px;
		background: yellow;
		animation: myfirst 2s linear infinite;
		animation-direction:alternate-reverse;
	}
}
@keyframes myfirst{
	0%{
		background: yellow;
		transform: rotate(30deg) translateX(10px);
	}
	30%{
		background: red;
		transform: rotate(120deg) translateX(30px);
	}
	60%{
		background: blue;
		transform: rotate(270deg) translateX(50px);
	}
	100%{
		background: #0086B3;
		transform: rotate(360deg) translateX(0px);
	}
}
</style>