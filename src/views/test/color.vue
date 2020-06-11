<template>
	<ul>
		<li v-for="(color,index) in colors" @click="updatecolor(index)">
			<span :style="{background:color}" :class="{'active':index == colornum}">
				<i class="el-icon-check" v-show="index == colornum"></i>
			</span>
		</li>
		<li>
			<el-color-picker v-model="color1"></el-color-picker>
		</li>
	</ul>
</template>

<script>
	export default{
		name:'color',
		data(){
			return{
				colors:['#417505','#F5A623','#F8E71C','#8B572A','#7ED321','#417505','#BD10E0','#9013FE','#B8E986','#50E3C2'],
				colornum:0,
				color1:'#417505',
			}
		},
		methods:{
			updatecolor(index){
				this.colornum = index;
			}
		}
	}
</script>
<style lang="scss" scoped="scoped">
ul{
	margin: 20px;
	display: flex;
	flex-wrap: wrap;
	width: 200px;
	li{
		margin-bottom: 5px;
		width:16.67%;
		display: flex;
		justify-content: center;
		span{
			display: inline-block;
			width: 20px;
			height: 20px;
			cursor: pointer;
			border-radius: 2px;
			text-align: center;
			line-height: 20px;
			i{
				color: #fff;
				font-weight: 600;
			}
		}
	}
}
	
</style>
