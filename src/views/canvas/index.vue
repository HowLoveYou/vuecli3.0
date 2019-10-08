<template>
	<div class="canvas-page">
		<router-view></router-view>
	</div>
</template>

<script>
	
	export default{
		name:'canvas-page',
		data(){
			return{
				
			}
		},
		methods:{
			init(){
				
			}
		},
		mounted(){
			this.init();
		}
	}
</script>

<style lang="scss" scoped="scoped">
.canvas-page{
	width: 100%;
	height: 100%;
	overflow: hidden;
}
</style>