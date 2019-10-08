<template>
	<div>
		<!--css3实现-->
		<ul class='pie'>
	      	<li class='slice-1 slice'> </li> 
	      	<li class='slice-2 slice'> </li>
	      	<li class='slice-3 slice'> </li>
	      	<li class='slice-4 slice'> </li>
	      	<li class='slice-5 slice'> </li>
	      	<li class='slice-6 slice'> </li>
	      	<li class='slice-7 slice'> </li>
	     	 <li class='slice-8 slice'> </li>
	      	<li class='slice-9 slice'> </li>
	     	 <li class='slice-10 slice'> </li>
	  	</ul>
	  	<!--其他实现方法-->
	  	注:无法渐变
	  	<div class="snip"></div>
	</div>
	
</template>

<script>
	export default{
		name:'shanxing'
	}
</script>

<style lang="scss" scoped="">
@keyframes circle{
	from{
		transform: rotate(0);
	}
	to{
		transform: rotate(360deg);
	}
}


  .pie {
  	background: #ddd;
    position: relative;
    margin: 300px auto;
    width: 300px;
    height: 300px;
    border-radius: 100%;
    animation: circle 1s infinite linear;
  }
  .slice {
    overflow: hidden;
    position: absolute;
    top: 0; 
    right: 0;
    width: 50%;
    height: 50%;
    /*左下角*/
    transform-origin: 0% 100%; 
   
  }
  .slice-1 {
    transform: rotate(-36deg) skewY(-54deg);
    /*background-image: linear-gradient(left,#FFBA33,#B3450A);*/
    /*transform: rotate(-30deg) skewY(-30deg) ;*/
    background: #FFBA33;
 }
  .slice-2 {
    transform: rotate(-72deg) skewY(-54deg);
    background: #FF0000;
 }
  .slice-3 {
    transform: rotate(-108deg) skewY(-54deg);
    background: #FF5511;
 }
  .slice-4 {
    transform: rotate(-144deg) skewY(-54deg);
    background: #FF8800;
 }
  .slice-5 {
    transform: rotate(-180deg) skewY(-54deg);
    background: #FFBB00;
 }
  .slice-6 {
    transform: rotate(-216deg) skewY(-54deg);
    background: #BBFF00;
 }
  .slice-7 {
    transform: rotate(-252deg) skewY(-54deg);
    background: #77FF00;
 }
  .slice-8 {
    transform: rotate(-288deg) skewY(-54deg);
    background: #00FF00;
 }
  .slice-9 {
    transform: rotate(-324deg) skewY(-54deg);
    background: #00FF99;
 }
  .slice-10 {
    transform: rotate(-360deg) skewY(-54deg);
    background: #00FFCC;
 }
 
 
 
 .snip{
    position: absolute;
    left: 500px;
    border-top: 200px solid transparent;
    border-bottom: 200px solid transparent;
    border-right: 500px solid red;
    border-radius: 100%;
}
</style>