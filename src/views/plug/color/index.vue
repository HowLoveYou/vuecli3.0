<template>
	<div>
		<h4>color插件</h4>
		<colorPicker v-model="colors" />
		<!--<photoshop v-model="color"></photoshop>-->
		<!--<material-picker v-model="color"/>-->
		<!--<chrome-picker v-model="color" />-->
		<!--<slider-picker v-model="color"/>-->
		<!--<sketch-picker v-model="color" />-->
		<!--<compact-picker v-model="color"/>-->
		<!--<swatches-picker v-model="color3"/>-->
		<!--<chrome-picker :value="color" @input="updateValue"></chrome-picker>-->
		
		<sketch-picker :value="color1" @input="updateValue"></sketch-picker>
	</div>
</template>

<script>
	
	import { Photoshop , Material ,Chrome ,Slider,Sketch,Compact,Swatches} from 'vue-color'
	
	export default{
		data(){
			return{
				colors:'',
				color: {
					hex: '#194d33',
					  hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
					  hsv: { h: 150, s: 0.66, v: 0.30, a: 1 },
					  rgba: { r: 25, g: 77, b: 51, a: 1 },
					  a: 1
				},
				color1:'#194d33',
				color2: {h: 150, s: 0.66, v: 0.30 },
				color3:{ r: 255, g: 0, b: 0 }
			}
		},
		components: {
		    photoshop: Photoshop,
		    materialPicker: Material,
		    chromePicker:Chrome,
		    sliderPicker:Slider,
		    sketchPicker:Sketch,
		    compactPicker: Compact,
		    swatchesPicker:Swatches
		},
		methods:{
			updateValue(color){
				console.log(color.hex);
			}
		}
	}
</script>

<style>
</style>