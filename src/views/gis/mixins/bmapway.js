
import btheme from '../js/btheme.js'

let bmapway = {
	data(){
		return{
			center:'门头沟',
			zoom:'16',
			mapStyle:{},
		}
	},
	created(){
		this.mapStyle.styleJson = btheme.simple_theme; 
	},
	methods:{
		init(){
			console.log(123)
		}
	},
}
export default bmapway
