<template>
	<div class="drag">
		drag12313
	</div>
</template>

<script>
	export default{
		name:'drag',
		props:{
			options:{
			}
		},
		methods:{
			clickfn(){
				let blockW = this.options.blockW;
				 let blockH = this.options.blockH;
				 console.log(this.options.block);
				 let a = {
				 	row:this.options.row,
				 	col:this.options.col
				 }
				 console.log(a);
				 $('.drag').mousedown(function(e) {
			    	var that = $(this);
			        var c = parseInt($(this).css("left"));
			        var d = parseInt($(this).css("top"));
			        var f = e.pageX;
			        var g = e.pageY;
			        e.stopPropagation();
			        var moveFn = function(h) {
			            var i = h.pageX;
			            var j = h.pageY;
			            that.css({
			                left: (c + i - f) + "px",
			                top: (d + j - g) + "px"
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
			            k > (a.col - 1) * 2 ? k = (a.col - 1) * 2 : null;
			            n > (a.row - 1) * 2 ? n = (a.row - 1) * 2 : null;
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
			}
		},
		mounted(){
			let {clickfn} = this;
			setTimeout(()=>{
				clickfn();
			},0)
		}
	}
</script>

<style lang="scss" scoped="scoped">
.drag{
	position: absolute;
}
</style>