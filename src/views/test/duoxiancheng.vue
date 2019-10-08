<template>
	<div>
		
	</div>
</template>

<script>
	export default{
		name:'duoxiancheng',
		methods:{
			//多线程
			init(){
				
				let i = 0;
				
				let time = setInterval(function(){
					console.log(i*1000)
					i++;
					console.log(ss);
					let ss = 0;
					for(let j = 0;j < 3;j++){
						console.log(ss,'1245');
						setTimeout(function(){
							ss += 111;
							console.log((j+1)*800);
							console.log(j,ss,i)
						},(j+1)*800)
					}
					if(i == 3){
						clearInterval(time)
					}
				},1000)
				
				
			}
		},
		mounted(){
			this.init();
		}
	}
</script>

<style lang="scss" scoped="scoped">
</style>