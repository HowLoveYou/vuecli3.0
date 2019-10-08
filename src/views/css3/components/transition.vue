<template>
	<div class="transition">
		<h4>过渡</h4>
		<div class="box">
			
		</div>
	</div>
</template>

<script>
	export default{
		name:'transition',
		data(){
			return{
				
			}
		},
		
	}
</script>
	
<style lang="scss" scoped="scoped">
.transition{
	.box{
		margin: 20px auto;
		width:100px;
		height: 200px;
		background: red;
		transition:all 1s linear .2s; /*属性 过渡时间  曲线  延迟*/
		&:hover{
			width: 200px;
			transform:rotate(30deg);
		}
	}
}
</style>