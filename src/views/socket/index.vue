<template>
	<div class="socket">
		websocket
	</div>
</template>

<script>
	export default{
		name:'websocket',
		data(){
			return{
				websock:null
			}
		},
		created(){
			this.initWebSocket();
		},
		methods:{
			//初始化websocket
			initWebSocket(){
				let wsuri = "wss://122.113.5.189:8000";
				this.websock = new WebSocket(wsuri);
				console.log(this.websock);
				this.websock.onmessage = this.websocketonmessage;
				this.websock.onopen = this.websocketonopen;
				this.websock.onerror = this.websocketonerror;
				this.websock.onclose = this.websocketclose;
			},
			websocketonopen(){//连接建立之后执行send方法发送数据
				this.websocketsend();
			},
			websocketonmessage(e){
				console.log(e);
			},
			websocketonerror(){//连接建立失败重连
				this.initWebSocket()
			},
			websocketclose(e){//关闭
				console.log('断开连接', e)
			},
			websocketsend(Data){//数据发送
	        	this.websock.send('123')
	        },
			
		},
		mounted(){
			
		},
		destoryed(){
			this.websock.close()// 离开路由之后断开websocket连接
		}
	}
</script>

<style lang="scss" scoped="scoped">
</style>