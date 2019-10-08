<template>
	<div class="test">
		<!--<img src="./images/login.png" alt="" />-->
		<test1></test1>
	</div>
</template>

<script>
	
	import test1 from './test1'
	
	export default{
		name:'test',
		components:{
			test1
		}
	}
	
</script>

<style lang="scss" scoped="scoped">
.test{
	width: 800px;
	height: 500px;
	border-radius: 12px;
	img{
		width: 100%;
		height: 100%;
	}
}
</style>