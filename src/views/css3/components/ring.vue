<template>
	<div class="ring">
		
	</div>
</template>

<script>
	export default{
		name:"ring",
	}
</script>

<style lang="scss" scoped="scoped">
.ring{
	width: 400px;
	height: 400px;
	border: 100px solid pink;
	border-left-color: red;
	border-right-color: blue;
	border-top-color: yellow;
	margin: 100px auto;
	border-radius: 100%;
	animation: circle .5s infinite linear;
}
@keyframes circle{
	from{
		transform: rotate(0);
	}
	to{
		transform: rotate(360deg)
	}
}
</style>