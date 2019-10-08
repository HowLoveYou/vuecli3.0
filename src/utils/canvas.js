
/*
 	*画一条线*
 	* canvas  线条路径    线条颜色   线条宽度
 */
export function drawline(cxt,arr,strokeColor,lineWidth){
	cxt.beginPath();
	for(let item of arr){
		cxt.lineTo(item[0],item[1]);
	}
	cxt.lineWidth = lineWidth ? lineWidth : 5;
	cxt.strokeStyle = strokeColor ? strokeColor : '#000';
	cxt.stroke();
}
