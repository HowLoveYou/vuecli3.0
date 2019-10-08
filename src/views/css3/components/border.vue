<template>
	<div class="border">
		
	</div>
</template>

<script>
	export default{
		name:"border",
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
.border{
	margin: 100px auto;
	width: 300px;
	height: 300px;
	background: red;
	border-radius: 30px;
	box-shadow: 100px 100px 30px #888888;  /*左右 上下模糊度 颜色 */
}
</style>