<template>
	<div class="drag-page">
		<div class="content" ref="dragbox">
			<drag1></drag1>
			<drag1></drag1>
		</div>
	</div>
</template>

<script>
	
	import drag1 from './components/drag1'
	
	export default{
		name:'drag',
		data(){
			return{
			}
		},
		components:{
			drag1
		},
		methods:{
			
		},
		mounted(){
			
		}
	}
</script>

<style lang="scss" scoped="scoped">
.drag-page{
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.7);
	padding-top: 30px;
	color: #fff;
	.content{
		width: 100%;
		height: 100%;
		background: #00FFCC;
		position: relative;
		overflow: hidden;
	}
}
</style>