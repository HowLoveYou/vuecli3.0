<template>
	<div class="drag-box">
		 <div class="block" v-for="item of numsX*numsY" :style="{width:100/numsX+'%',height:100/numsY+'%'}">
		 	{{item}}
		 </div>
		 <slot></slot>
	</div>
</template>

<script>
	export default{
		name:'drag-box',
		props:{
			block:{
				default:"(4,4)"
			},
		},
		data(){
			return{
				numsX:0,
				numsY:0
			}
		},
		created(){
			this.numsX = this.block.substring(1, 2);
			this.numsY = this.block.substring(3, 4);
		}
	}
</script>

<style lang="scss" scoped="scoped">
.drag-box{
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	position: relative;
	.block{
		background: #00FF99;
		border: 1px solid red;
	}
}
</style>