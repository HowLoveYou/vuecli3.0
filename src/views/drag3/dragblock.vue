<template>
	<div class="drag-block" @mousedown="drag">
		<slot></slot>
	</div>
</template>

<script>
	export default{
		name:'drag-block',
		props:{
			cutparent:{
				
			},
			pt:{
				
			},
			size:{
				
			}
		},
		data(){
			return{
				block:null,
				row:null,
				col:null,
				parentBox:null,//父元素的宽高
				elBox:null,//拖拽元素的宽高
			}
		},
		methods:{
			init(){
				let parent = this.$el.parentNode;//获取该元素的父元素
				let parent_w = parent.clientWidth;//父元素的宽
				let parent_h = parent.clientHeight;//父元素的高
				
				let row = this.cutparent.substring(1, 2);//行
				let col = this.cutparent.substring(3, 4);//列
				//一个方格
				let block  = {
					width:parent_w/col,
					height:parent_h/row
				}
				this.block = block;
				this.row = row;
				this.col = col;
				this.parentBox = {
					width:parent_w,
					height:parent_h
				}
				//拖拽的宽高以及默认位置
				this.$el.style.width = this.size.split('x')[0] * block.width + 'px';
				this.$el.style.height = this.size.split('x')[1] * block.height + 'px';
				this.$el.style.left = (this.pt.substring(1, 2) - 1) * block.width + 'px';
				this.$el.style.top = (this.pt.substring(3, 4) - 1) * block.height + 'px';
				console.log(parseFloat(this.$el.style.width))
				this.elBox = {
					width:parseFloat(this.$el.style.width),
					height:parseFloat(this.$el.style.height),
				}
			},
			drag(e){
				let {block,row,col} = this;
				let that = this;
				let odiv =  e.target; //拖拽的目标
				
				 //算出鼠标相对元素的位置
	            let disX = e.clientX - odiv.offsetLeft;
	            let disY = e.clientY - odiv.offsetTop;
	            
	            document.onmousemove = (e)=>{       //鼠标按下并移动的事件
	                //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
	                let left = e.clientX - disX;    
	                let top = e.clientY - disY;
	                //移动当前元素
	                left = left < 0 ? 0 : left;
	                top = top < 0 ? 0 : top;
	                odiv.style.left = left + 'px';
	                odiv.style.top = top + 'px';
	            };
				document.onmouseup = (e) => {
					//获取元素的left、top
					let left = parseInt(odiv.style.left);
			        let top = parseInt(odiv.style.top);
					//取block的一半
					let half_w = block.width/2;
					let half_h = block.height/2;
					
					//取左右在第几个位置
					let k = parseInt(left / half_w);
			        let n = parseInt(top / half_h);
					k > (col - 1) * 2 ? k = (col - 1) * 2 : null;
			        n > (row - 1) * 2 ? n = (row - 1) * 2 : null;
					
					if (k % 2 == 0) {
						let end_left = (((k + 2) / 2) - 1) * block.width;
						end_left = (end_left + that.elBox.width) > that.parentBox.width ? (that.parentBox.width - that.elBox.width) : end_left;
		                odiv.style.left = end_left + "px";
		            } else {
		            	let end_left = (((k + 3) / 2) - 1) * block.width;
		            	end_left = (end_left + that.elBox.width) > that.parentBox.width ? (that.parentBox.width - that.elBox.width) : end_left;
		                odiv.style.left = end_left + "px"
		            } if (n % 2 == 0) {
		            	let end_top = (((n + 2) / 2) - 1) * block.height;
						end_top = (end_top + that.elBox.height) > that.parentBox.height ? (that.parentBox.height - that.elBox.height) : end_top;
		                odiv.style.top = end_top + "px"
		            } else {
		            	let end_top = (((n + 3) / 2) - 1) * block.height;
						end_top = (end_top + that.elBox.height) > that.parentBox.height ? (that.parentBox.height - that.elBox.height) : end_top;
		                odiv.style.top = end_top + "px"
		            }  
	                document.onmousemove = null;
	                document.onmouseup = null;
	            };
			}
		},
		mounted(){
			this.init();
		}
	}
</script>

<style lang="scss" scoped="scoped">
.drag-block{
	position: absolute;
	background: black;
}
.animated{
	animation: .5s linear 1s;
}
</style>