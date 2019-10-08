<template>
	<!--<draggable class="drag-ul layout-one" :options="options" v-model="systemsArr" @change="change" @start="start" @end="end">
		<li v-for="(item,index) in systemsArr">
			<div class="content">
				<img :src="item.img" alt="" />
			</div>
		</li>
	</draggable>-->
	<div class="layout-one">
		<li v-for="(item,$index) in systemsArr"
			@dragstart="dragstart($index,$event)"
			@dragend="dragend($event)" 
			@drop="drop($index,$event)" 
			@dragover="dragover($event)" 
			draggable="true"
			:key='index'
			>
			<div class="content" style="position: relative;">
				<img :src="item.img" alt="" />
				<span style="position: absolute;text-align: center;left: 0;top:30px;color: #fff;z-index: 10;">{{item.name}}</span>
			</div>
		</li>
	</div>
</template>

<script>
	import draggable from 'vuedraggable'
	
	export default{
		name:'layout-one',
		data(){
			return{
				layoutStyleArr:[
					{width:'40%',height:'62.5%'},
					{width:'30%',height:'62.5%'},
					{width:'30%',height:'62.5%'},
					{width:'25%',height:'37.5%'},
					{width:'25%',height:'37.5%'},
					{width:'25%',height:'37.5%'},
					{width:'25%',height:'37.5%'},
				],
				options:{
					sort:true,
					delay:0,
//					animation:300,
				},
				systemsArr:[
					{
						name:'照明1',
						img:'http://img3.imgtn.bdimg.com/it/u=2180358788,168891397&fm=26&gp=0.jpg',
					},
					{
						name:'照明2',
						img:'http://img2.imgtn.bdimg.com/it/u=4064075977,3738371861&fm=26&gp=0.jpg'
					},
					{
						name:'照明3',
						img:'http://img0.imgtn.bdimg.com/it/u=1022109268,3759531978&fm=26&gp=0.jpg'
					},
					{
						name:'照明4',
						img:'http://img0.imgtn.bdimg.com/it/u=1551062876,69321382&fm=26&gp=0.jpg'
					},
					{
						name:'照明5',
						img:'http://img4.imgtn.bdimg.com/it/u=417950965,3249934671&fm=26&gp=0.jpg'
					},
					{
						name:'照明6',
						img:'http://img0.imgtn.bdimg.com/it/u=123807196,3598291508&fm=26&gp=0.jpg'
					},
					{
						name:'照明7',
						img:'http://img3.imgtn.bdimg.com/it/u=2870322368,453611869&fm=26&gp=0.jpg'
					},
				],
				oldsystems:[],
				
				moveIndex:null,
				targetIndex:null
			}
		},
		methods:{
			start: function (evt) {
			  this.oldsystems = this.systemsArr;
		    },
			change: function (evt) {
		       this.systemsArr = this.oldsystems;
		    },
		    end: function (evt) {
		      this.systemsArr = this.oldsystems;
		      let {oldIndex,newIndex} = evt;
		      let oldobj = this.systemsArr[oldIndex];
		      this.systemsArr[oldIndex] = this.systemsArr[newIndex];
		      this.systemsArr[newIndex] = oldobj;
		    },
		    move: function (evt, originalEvent) {
		    	console.log(this.systemsArr);
		    },
		    
		    //第二种拖拽
		    dragstart(index){
				this.moveIndex = index;
			},
			dragover(event){  //必须添加dragover事件，不然drop事件也无效
				event.preventDefault(); 
			},
			dragend(event){
//				console.log("拖放结束",event.currentTarget);
				this.$forceUpdate();
			},
			drop(index,event){
				//阻止默认行为
				event.preventDefault();
				//阻止默认行为
				event.stopPropagation();
				this.targetIndex = index;
				//先保存拖动元素index
				let temp = this.systemsArr[this.moveIndex];
				//将拖动元素位置index换成目标元素的index
				this.systemsArr[this.moveIndex] = this.systemsArr[this.targetIndex];
				//将目标元素位置index换成拖动元素的index
				this.systemsArr[this.targetIndex] = temp;
			},
		}
	}
</script>

<style lang="scss" scoped="scoped">
.layout-one{
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	li{
		padding: 15px;
		>.content{
			width: 100%;
			height: 100%;
			background:rgba(34,37,44,1);
			border-radius:10px;
			color: #fff;
			text-align: center;
			font-size: 18px;
			overflow: hidden;
			img{
				width: 100%;
				height: 100%;
			}
		}
		&:nth-child(1){
			width:40%;
			height:62.5%;
		}
		&:nth-child(2){
			width:30%;
			height:62.5%;
		}
		&:nth-child(3){
			width:30%;
			height:62.5%;
		}
		&:nth-child(4){
			width:25%;
			height:37.5%;
		}
		&:nth-child(5){
			width:25%;
			height:37.5%;
		}
		&:nth-child(6){
			width:25%;
			height:37.5%;
		}
		&:nth-child(7){
			width:25%;
			height:37.5%;
		}
	}
	
}
</style>