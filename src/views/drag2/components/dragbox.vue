<template>
	<div class="drag-box">
		<li class="drag" v-for="item in list">
			{{item.name}}
		</li>
	</div>
</template>

<script>
	
	export default{
		name:'drag-box',
		data(){
			return{
				options:{
			        blockW: 150,
			        blockH: 100,
			        block:"(5,5)",
			        startPos: "(1,1)"
				},
				list:[
					{name:1,pt:"(1,1)",},
					{name:2,pt:"(2,2)",},
					{name:3,pt:"(3,3)",},
					{name:4,pt:"(3,5)",},
					{name:5,pt:"(4,5)",},
					{name:6,pt:"(5,3)",},
				]
			}
		},
		methods:{
			init(){
				let dragbox = this.$el;
				let block = this.options.block;
				let dragbox_w = dragbox.clientWidth;//宽度
				let dragbox_h = dragbox.clientHeight;//高度
				
				let row = block.substring(1, 2);//行
    			let col = block.substring(3, 4);//列
				let blockW =  dragbox_w/row;
				let blockH = dragbox_h/col;
				
				this.blockW = blockW;
				this.blockH = blockH;
				
				 $(".drag").css({
				 	background:'red',
			        width: blockW + "px",
			        height: blockH + "px",
			        position: "absolute",
			        top: 0 + "px",
			        left: 0 + "px",
			        border:'1px solid blue'
			    });
				
				$(".drag").mousedown(function(e) {
			    	var that = $(this);
			        var c = parseInt($(this).css("left"));
			        var d = parseInt($(this).css("top"));
			        var f = e.pageX;
			        var g = e.pageY;
			        e.stopPropagation();
			        let moveFn = function(h) {
			            var i = h.pageX;
			            var j = h.pageY;
			            
			            let left = c + i - f;
			            left = left < 0 ? 0 : left > (dragbox_w - blockW) ? (dragbox_w - blockW) : left;
			            let top = d + j - g;
			            top = top < 0 ? 0 : top > (dragbox_h - blockH) ? (dragbox_h - blockH) : top;
			            that.css({
			                left: left + "px",
			                top: top + "px"
			            })
			        };
			        $(document).on("mousemove", moveFn);
			        if (that.get(0).setCapture) {
			            that.get(0).setCapture()
			        }
			        $(document).mouseup(function(j) {
			            var l = parseInt(that.css("left"));
			            var m = parseInt(that.css("top"));
			            var i = blockW / 2;
			            var h = blockH / 2;
			            var k = parseInt(l / i);
			            var n = parseInt(m / h);
			            k < 0 ? k = 0 : null;
			            n < 0 ? n = 0 : null;
			            k > (col - 1) * 2 ? k = (col - 1) * 2 : null;
			            n > (row - 1) * 2 ? n = (row - 1) * 2 : null;
			            if (k % 2 == 0) {
			                that.animate({
			                    left: (((k + 2) / 2) - 1) * blockW + "px"
			                }, 50)
			            } else {
			                that.animate({
			                    left: (((k + 3) / 2) - 1) * blockW + "px"
			                }, 50)
			            } if (n % 2 == 0) {
			                that.animate({
			                    top: (((n + 2) / 2) - 1) * blockH + "px"
			                }, 50)
			            } else {
			                that.animate({
			                    top: (((n + 3) / 2) - 1) * blockH + "px"
			                }, 50)
			            }
			            $(document).off("mousemove").off("mouseup");
			            that.off("mouseup")
			        })
			    });
				
			},
		},
		mounted(){
			this.init();
		}
	}
	
</script>

<style lang="scss" scoped="scoped">
.drag-box{
	width: 100%;
	height: 100%;
	overflow: hidden;
	background: yellowgreen;
}
</style>