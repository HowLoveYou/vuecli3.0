<template>
	<div class="gis-main">
		<baidu-map class="baidu-map" :center="center" :zoom="zoom" :scroll-wheel-zoom="true" min-zoom="4" max-zoom="19"
			:mapStyle="mapStyle"
			@zoomend="queryAllData" 
			@moveend="queryAllData"
			@ready="ready">
			
			<template v-for="(item,index) in markerData" >
				 <bm-marker
					:position="getLng(item)" 
					:key='item.dgId'
					:icon="getImage(item)"
					>
				</bm-marker>
			</template>
			
			<!--海量点-->
			 <template v-for="item in massPointData">
			 	<bm-point-collection :points="item.ptArr" :shape="massPointstyle.shape" :color="item.color" :size="massPointstyle.size"></bm-point-collection>
			 </template>
			
		</baidu-map>
	</div>
</template>

<script>
	
	import bmapway from '../mixins/bmapway.js';	
	import service from '../service'
	
	export default{
		name:'gis-main',
		mixins:[bmapway],
		data(){
			return{
				map:null,
				markerData:[],//覆盖物数量
				massPointData:[],//海量点数量
				massPointstyle:{},//海量点样式
			}
		},
		created(){
		},
		methods:{
			//进入页面前请求数据
			getLng(item){
				return {
					lng:item.jd,
					lat:item.wd
				}
			},
			getImage(item){
				let img_icon = this.getMarkerIcon(item);
				let icon = {
					url:img_icon.icon,
					size:{
						width:img_icon.size.width,
						height:img_icon.size.height
					}
				}
				return icon
			},
			//获取图片地址
			getImg(img){
				let flag = this.gisThemeSwitch ? 'night_': '';
				let imgobj = require('../images/'+ flag + img);
				return imgobj;
			},
			getMarkerIcon(obj){
				let {map,getImg} = this;
				let zoom = map.getZoom();//缩放等级
				let icon = "";
				let ddjdyxzt = obj.ddjdyxzt;	//单灯节点运行状态
				let ipoleState = obj.ddldzt;	//单灯节点亮灯 1亮 0灭 
				let ipoleFault = obj.ddjdycbz;	//灯杆异常1 异常 0不异常
				let defaultFlah = obj.sjczbs;	//判断未知
				let ddlmdycbz = obj.ddlmdycbz;  //亮灭灯异常标准  0 正常  1异常
				let gzlx = obj.gzlx;//灯杆类型
				let size;
				if(zoom == 19){
					if(gzlx == '2'){
						icon = getImg("light_skq_46x27.png");//时控器
						if(ipoleState == 1){
							icon = getImg("skq_on_46x27.png");//时控器亮 
						}
					}else if(defaultFlah === "1"){ //有灯杆状态信息
						if(obj.ddtxycbz == 1){// 通讯异常
							icon = getImg("pole_ncom_46x27.png");
						}else if(obj.ddddycbz == 1){// 设备断电
							icon = getImg("pole_nele_46x27.png");
						}else if(ipoleState == 1 && ipoleFault ==0 ){	//正常
							icon = getImg("pole_on_46x27.png");
						}else if(ipoleState == 1 && ipoleFault == 1){	//异常
							icon = getImg("pole_bad_46x27.png");
							if(ddlmdycbz == '1'){
								icon = getImg("pole_faul_ld_46x27.png");    //异常灭灯
							}
						}else if(ipoleState == 0 && ipoleFault == 0){	//关灯
							icon = getImg("pole_off_46x27.png");
						}else if(ipoleState == 0 && ipoleFault == 1){	//故障
							icon = getImg("byDay_bad_46x27.png");
							if(ddlmdycbz == '1'){
								icon = getImg("pole_faul_46x27.png");  //异常亮灯
							}
						}
					}else{	//关灯状态
						icon = getImg("pole_off_46x27.png");
					}
					size = {
			         	width:46,
			         	height:27
			        }
				}else{
					if(gzlx == '2'){//时控器
						icon = getImg("light_skq_32x20.png");
						if(ipoleState == 1){
							icon = getImg("skq_on_32x20.png");//时控器亮
						}
					}else if(defaultFlah === "1"){ //有灯杆状态信息
						if(obj.ddtxycbz == 1){// 通讯异常
							icon = getImg("pole_ncom_32x20.png");
						}else if(obj.ddddycbz == 1){// 设备断电
							icon = getImg("pole_nele_32x20.png");
						}else if(ipoleState == 1 && ipoleFault ==0 ){	//正常
							icon = getImg("pole_on_32x20.png");
						}else if(ipoleState == 1 && ipoleFault == 1){	//异常
							icon = getImg("pole_bad_32x20.png");
							if(ddlmdycbz == '1'){
								icon = getImg("pole_faul_ld_32x20.png");
							}
						}else if(ipoleState == 0 && ipoleFault == 0){	//关灯
							icon = getImg("pole_off_32x20.png");
						}else if(ipoleState == 0 && ipoleFault == 1){	//故障
							icon = getImg("byDay_bad_32x20.png");
							if(ddlmdycbz == '1'){
								icon = getImg("pole_faul_32x20.png");
							}
						}
					}else{	//关灯状态
						icon = getImg("pole_off_32x20.png");
					}
					size = {
						width:32,
			         	height:20
					}
				}
				let img = {
					 icon: icon,
			         size:size
				}
				return img	
			},
			//绘制地图
			ready({BMap,map}){
				this.map = map;
				let {queryAllData} = this;
				setTimeout(function(){
					queryAllData();
				},300)
				
			},
			//获取数据
			queryAllData(){
				if(!this.map){
					return
				}
				let {map,clearBMap} = this;
				let bs = map.getBounds();//得到地图四面的边界值
      			let bssw = bs.getSouthWest();//西南的经纬度
     			let bsne = bs.getNorthEast();//东北的经纬度
     			console.log(bs,bssw)
     			let fiflterParams = {
 					"zhcq":'110109',
					"ldbId":"", 
					"norflag":"1,2",
					"unusflag":"1,2",
					"sbztflag":"1,2,3",
					"gzlx": "0"
 				}
     			let data = {
					"lng1BigDecimal":bssw.lng,
					"lat1BigDecimal":bssw.lat,
					"lng2BigDecimal":bsne.lng,
					"lat2BigDecimal":bsne.lat,
					"zhcq":fiflterParams.zhcq,
					"ldbId":fiflterParams.ldbId,
					"norflag":fiflterParams.norflag,
					"unusflag":fiflterParams.unusflag,
					"sbztflag":fiflterParams.sbztflag,
					'pch':fiflterParams.pch,
					"txfs":fiflterParams.txfs,
					'maptype':"bmap",
					"gzlx": fiflterParams.gzlx
				};
				service.queryAllData(data).then( res => {
					this.clearBMap();
					let rst = JSON.parse(res.data)
					this.zoomchange(rst);
				})
			},
			clearBMap(){
				this.markerData = [];
				this.massPointData = [];
			},
			zoomchange(allData){
				let zoom = this.map.getZoom();//缩放等级
				if(zoom >= 18){
					this.markerData = allData;
				}else if(zoom >= 14  && zoom < 18){
					this.addMassPointBMap(allData);
				}
			},
			addMassPointBMap(allData){
				console.log(allData,123)
				if(!allData){
					return
				}
				let massPointArr = [];
				let normalArr    = [];//正常
				let abnormalArr  = [];//异常
				let offLightArr  = [];//关灯
				for(let i=0;i < allData.length;i++){
					let item= allData[i];
					let pt = {
						lng:item.jd,
						lat:item.wd
					}
					let ipoleState = item.ddldzt;	// 单灯节点亮灯	 1：亮         0：不亮 
					let defaultFlah = item.sjczbs;	// 判断未知
					let ddlmdycbz = item.ddlmdycbz;  //亮灭灯异常标准  0 正常  1异常
					if(defaultFlah === "1"){ // 有灯杆状态信息
						if(ddlmdycbz == '1'){
							abnormalArr.push(pt); //数据异常
						}else if(ipoleState == 1){// 正常
							normalArr.push(pt);
						}else if(ipoleState == 0){// 关灯
							offLightArr.push(pt);
						}
					}else{	//关灯状态
						offLightArr.push(pt);
					}
				}
				let normalObj = {
					ptArr:normalArr,
					color:'#f5de1f'
				}
				let abnormalObj = {
					ptArr:abnormalArr,
					color:'#e00303'
				}
				let offLightObj = {
					ptArr:offLightArr,
					color:'#adadad'
				}
				massPointArr = [normalObj,abnormalObj,offLightObj];
				let massPointstyle = {
					shape:'BMAP_POINT_SHAPE_CIRCLE',
					color:'#adadad',
					size: this.massPointSize().size,
				}
				this.massPointData = massPointArr//海量点数据 
				this.massPointstyle = massPointstyle//海量点样式
			},
			// 设置海量点样式
			massPointSize(){
				let obj = {
					"size": "",
					"lineWeight": ""
				};
				let zoom = this.map.getZoom();
				if(zoom == 14){
					obj.iconSize = 4;
					obj.lineWeight = 1;
					obj.size = "BMAP_POINT_SIZE_SMALLER";
				}else if(zoom == 15){
					obj.iconSize = 8;
					obj.lineWeight = 2;
					obj.size = "BMAP_POINT_SIZE_SMALL";
				}else if(zoom == 16){
					obj.iconSize = 10;
					obj.lineWeight = 3;
					obj.size = "BMAP_POINT_SIZE_NORMAL";
				}else if(zoom == 17){
					obj.iconSize = 16;
					obj.lineWeight = 5;
					obj.size = "BMAP_POINT_SIZE_BIG";
				}else if(zoom == 18){
					obj.iconSize = 20;
					obj.lineWeight = 5;
				}else if(zoom == 19){
					obj.iconSize = 30;
					obj.lineWeight = 6;
				}else{
					obj.iconSize = 30;
					obj.lineWeight = 6;
				}
				return obj;
			},
			
		},
		mounted(){
			
		}
	}
</script>

<style lang="scss" scoped="scoped">
.gis-main{
	width: 100%;
	height: 100%;
	.baidu-map{
		width: 100%;
		height: 100%;
	}
}
</style>