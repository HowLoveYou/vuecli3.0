<template>
	<div class="test1">
		
	</div>
</template>

<script>
	export default{
		mounted(){
			console.log(this.$el.clientHeight);
		}
	}
</script>

<style lang="scss" scoped="scoped">
.test1{
	width: 300px;
	height: 200px;
	background: red;
}
</style>