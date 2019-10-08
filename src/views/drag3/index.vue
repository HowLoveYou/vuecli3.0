<template>
	<div class="drag3">
		<div class="content">
			<dragblock size="2x3" pt='(2,1)' :cutparent="cutparent">
				123213123
			</dragblock>
			<dragblock size="2x2" pt='(2,3)' :cutparent="cutparent">
				123213123
			</dragblock>
			<dragblock size="1x1" pt='(2,5)' :cutparent="cutparent">
				123213123
			</dragblock>
			<dragblock size="1x3" pt='(2,3)' :cutparent="cutparent">
				123213123
			</dragblock>
			<dragblock size="2x4" pt='(2,2)' :cutparent="cutparent">
				123213123
			</dragblock>
		</div>
	</div>
</template>

<script>
	
	import dragblock from './dragblock'
	
	export default{
		name:'drag3',
		components:{
			dragblock
		},
		data(){
			return{
				cutparent:"(6,8)",
			}
		},
		methods:{
			
		},
		mounted(){
			
		}
	}
</script>

<style lang="scss" scoped="scoped">
.drag3,.content{
	overflow: hidden;
	width: 100%;
	height: 100%;
	position: relative;
}
</style>