<template>
	<div class="drag-page">
		<div class="content" ref="dragbox">
			<div class="drag"></div>
			<div class="drag"></div>
		</div>
	</div>
</template>

<script>
	
	import blockDrag from './js/blockDrag.min.js'
	
	export default{
		name:'drag',
		data(){
			return{
				
			}
		},
		components:{
			
		},
		methods:{
			creat(){
				let block = "(4,4)";
				
				let dragbox = this.$refs.dragbox;
				console.log(dragbox)
				let dragbox_w = dragbox.clientWidth;//宽度
				let dragbox_h = dragbox.clientHeight;//高度
				let blockW =  dragbox_w/(block.substring(1, 2));
				let blockH = dragbox_h/(block.substring(3, 4));
				
				
				let demo = new blockDrag({
					dragNode:'.drag',
					boxNode:dragbox,
					blockW: blockW,
			        blockH: blockH,
			        block: block,
			        startPos: "(1,1)"
				});
			}
		},
		mounted(){
			this.creat();
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
	.drag {
		width: 100%;
		height: 100%;
		color: #fff;
		cursor: pointer;
		background: yellow;
		text-align: center;
		line-height: 100px;
	}
	.drag1{
		transform-origin: 0% 0%;
		transform: scaleX(2);
	}
}
</style>