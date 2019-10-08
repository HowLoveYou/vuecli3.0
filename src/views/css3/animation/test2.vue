<template>
	<div class="box" :class="{'scaled':flag}">
		<p>徐学琪同学</p>
	</div>
</template>

<script>
	export default{
		name:'123',
		data(){
			return{
				flag:false
			}
		},
		methods:{
			init(){
				setTimeout(()=>{
					this.flag = true;
				},3000)
			}
		},
		mounted(){
			this.init();
		}
	}
</script>

<style lang="scss" scoped="scoped">
.box{
	width: 200px;
	height: 200px;
	background: red;
	transform-origin: 0 0;
	transform: scale(1);
	p{
		width: 100px;
		background: blue;
		height: 20px;
		color: #fff;
		font-size: 14px;
	}
}
.scaled{
	transform: scale(4);
}
</style>