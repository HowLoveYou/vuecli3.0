<template>
	<div class="clone">
		clone
	</div>
</template>

<script>
	
	import { clone } from '@/utils/common'
	
	export default{
		name:'clone',
		methods:{
			clone(obj){
				let newObj = Array.isArray(obj)?[]:{};
				if(obj && typeof obj ==="object"){
					for(let key in obj){
			            if(obj.hasOwnProperty(key)){
			                newObj[key]=(obj && typeof obj[key]==='object') ? this.clone(obj[key]):obj[key];
			            }
			        }
				}
				return newObj;
			},
		},
		mounted(){
			let obj = {
				name:"小三",
				age:'12',
				meal:{
					a:1,
					b:2,
					c:3
				},
				eat:()=>{
					console.log('会吃饭')
				}
			}
			
			let newobj = clone(obj);
			
			newobj.meal.b = 123;
			newobj.eat();
			console.log(newobj);
			console.log(obj);
		}
	}
</script>

<style lang="scss" scoped="scoped">
</style>