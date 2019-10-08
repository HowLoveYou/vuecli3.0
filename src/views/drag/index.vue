<template>
	<div class="drag-box">
		<draggable class="drag-ul" :options="options" v-modal="list" @change="change" @start="start" @end="end">
			<li class="drag-li" :class="item.classname" v-for="item in list">
				{{item.name}}
			</li>
		</draggable>
	</div>
</template>

<script>
	import draggable from 'vuedraggable'
	export default{
		name:'drag-box',
		components:{
			draggable
		},
		data(){
			return{
				list:[
					{name:'1',classname:'large'},
					{name:'2'},
					{name:'3'},
					{name:'4'},
					{name:'5'},
				],
				options:{
					sort:true,
					delay:0,
					animation:300,
				},
			}
		},
		methods:{
			change: function (evt) {
		      console.log(evt)
		      console.log(this.list);
		    },
		    //start ,end ,add,update, sort, remove 得到的都差不多
		    start: function (evt) {
		      console.log(evt)
		    },
		    end: function (evt) {
		      console.log(evt)
		      console.log(this.list);
//		      evt.item //可以知道拖动的本身
//		      evt.to    // 可以知道拖动的目标列表
//		      evt.from  // 可以知道之前的列表
//		      evt.oldIndex  // 可以知道拖动前的位置
//		      evt.newIndex  // 可以知道拖动后的位置
		    },
		    move: function (evt, originalEvent) {
		      console.log(evt)
		      console.log(originalEvent) //鼠标位置
		    }
		}
	}
</script>

<style lang="scss" scoped="scoped">
.drag-box{
	width: 100%;
	height: 100%;
	padding:20px;
	.drag-ul{
		display: flex;
		flex-wrap: wrap;
		position: relative;
	}
	.drag-li{
		height: 300px;
		width: 400px;
		background: #CF9236;
		margin: 20px;
		border-radius: 10px;
		padding: 10px;
		&.large{
			width: 500px;
			height: 400px;
			background: #63A35C;
		}
	}
}
</style>