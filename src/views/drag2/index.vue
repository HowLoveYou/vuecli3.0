<template>
	<div class="drag2">
		<dragbox></dragbox>
	</div>
</template>

<script>
	
	import dragbox from './components/dragbox'
	
	export default{
		name:'drag',
		components:{
			dragbox
		}
	}
</script>

<style lang="scss" scoped="scoped">
.drag2{
	width: 100%;
	height: 100%;
	background: #00FFCC;
	position: relative;
}
</style>