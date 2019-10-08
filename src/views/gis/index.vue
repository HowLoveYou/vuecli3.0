<template>
	<div class="gis">
		<gis-main></gis-main>
	</div>
</template>

<script>
	
	import GisMain from './components/GisMain'
	
	export default{
		name:"gis",
		components:{
			GisMain
		},
		data(){
			return{
				
			}
		},
		methods:{

		},
		mounted(){
			
		}
	}
</script>

<style lang="scss" scoped="scoped">
.gis{
	height: 100%;
	display: flex;
}
</style>