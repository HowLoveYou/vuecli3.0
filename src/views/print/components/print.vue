<template>
	<div class="print">
		<div class="page" v-for="(pageData,num) in pageDatas">
			<div class="page-head" >
				<div class="title">{{title}}</div>
				<div class="time">{{time}}</div>
			</div>
			<table class="print-table">
				<thead>
					<tr>
						<th>序号</th>
						<th v-for="item in tableHead">{{item.label}}</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item,index) in pageData">
						<td>{{num*pagenum + index + 1}}</td>
						<td v-for="itemtd in tableHead">{{item[itemtd.value]}}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>

</template>

<script>
	export default {
		props:{
			title:{
				type:String,
				default:''
			},
			time:{
				type:String,
				default:''
			},
			tableHead:{
				type:Array,
				default:() => []
			},
			tableData:{
				type:Array,
				default:() => []
			},
		},
		watch:{
			tableHead:{
				handler(){
					this.getPageData();
				},
				deep:true
			},
			tableData:{
				handler(){
					this.getPageData();
				},
				deep:true
			},
		},
		data() {
			return {
				pagenum:20,
				pageDatas:[],
				title:'',//标题
				time:'',//时间
				tableHead:[],//表格头部
				tableData: [],//表格数据
			}
		},
		methods:{
			//获取每页打印的数据
			getPageData(){
				let {pagenum} = this;
				let pages = Math.ceil(this.tableData.length/pagenum);//向上取整
				let pageDatas = [];
				for(let i = 0;i < pages;i++){
					let pageData = [];
					if(i == (pages - 1)){//最后一页的数据
						if(i*pagenum != this.tableData.length){
							pageData = this.tableData.slice(i*pagenum,this.tableData.length);
						}
					}else{
						pageData =  this.tableData.slice(i*pagenum,(i+1)*pagenum);
					}
					pageDatas.push(pageData)
				}
				this.pageDatas = pageDatas;
			}
		},
		mounted(){
			this.getPageData();
		}
	}
</script>
<style lang="scss" scoped="scoped">
.page{
	padding:10px;
}
.page-head{
	line-height: 36px;
	.title{
		text-align: center;
		font-size: 24px;
		font-weight: 600;
	}
	.time{
		text-align: right;
		font-size: 16px;
	}
}
.print-table{
	width: 100%;
    border-collapse: collapse;  
    border-spacing: 0; 
    font-size: 12px;
    tr{
    	height: 42px;  
    	line-height: 42px;
    }
    th{
    	font-weight: bold; 
    	background: #ddd;
    }
   	th,td{
   		border: 1px solid #ccc;
   		text-align: center;
   	}
}
</style>