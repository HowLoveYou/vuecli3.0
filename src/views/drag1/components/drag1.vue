<template>
	<div class="drag"></div>
</template>

<script>
	
	import blockDrag from '../js/blockDrag.min.js'
	
	export default{
		name:'drag1',
		props:{
			el:{
			}
		},
		methods:{
			creat(){
				let block = "(4,4)";
				
				let dragbox = this.$parent.$refs.dragbox;
				console.log(dragbox)
				let dragbox_w = dragbox.clientWidth;//宽度
				let dragbox_h = dragbox.clientHeight;//高度
				let blockW =  dragbox_w/(block.substring(1, 2));
				let blockH = dragbox_h/(block.substring(3, 4));
				
				
				let demo = new blockDrag({
					boxNode:dragbox,
					dragNode:'.drag',
					blockW: blockW,
			        blockH: blockH,
			        block: block,
			        startPos: "(1,1)"
				});
			},
		},
		mounted(){
			this.creat();
		}
	}
</script>

<style lang="scss" scoped="scoped">
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
</style>