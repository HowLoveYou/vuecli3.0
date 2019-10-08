let default_theme = [];
//午夜蓝主题
let midnight_theme = [
          {
                    "featureType": "water",					//河流
                    "elementType": "all",
                    "stylers": {
                              "color": "#021019"
                    }
          },
          {
                    "featureType": "highway",					//公路
                    "elementType": "geometry.fill",
                    "stylers": {
                              "color": "#000000"
                    }
          },
          {
                    "featureType": "highway",
                    "elementType": "geometry.stroke",
                    "stylers": {
                              "color": "#147a92"
                    }
          },
          {
                    "featureType": "arterial",
                    "elementType": "geometry.fill",
                    "stylers": {
                              "color": "#000000"
                    }
          },
          {
                    "featureType": "arterial",
                    "elementType": "geometry.stroke",
                    "stylers": {
                              "color": "#0b3d51"
                    }
          },
          {
                    "featureType": "local",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#000000"
                    }
          },
          {
                    "featureType": "land",				//土地
                    "elementType": "all",
                    "stylers": {
                              "color": "#08304b"
                    }
          },
          {
                    "featureType": "railway",					//铁路
                    "elementType": "geometry.fill",
                    "stylers": {
                              "color": "#000000"
                    }
          },
          {
                    "featureType": "railway",
                    "elementType": "geometry.stroke",
                    "stylers": {
                              "color": "#08304b"
                    }
          },
          {
                    "featureType": "subway",
                    "elementType": "geometry",
                    "stylers": {
                              "lightness": -70
                    }
          },
          {
                    "featureType": "building",
                    "elementType": "geometry.fill",
                    "stylers": {
                              "color": "#000000"
                    }
          },
          {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": {
                              "color": "#857f7f"
                    }
          },
          {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                              "color": "#000000"
                    }
          },
          {
                    "featureType": "building",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#022338"
                    }
          },
          {
                    "featureType": "green",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#062032"
                    }
          },
          {
                    "featureType": "boundary",
                    "elementType": "all",
                    "stylers": {
                              "color": "#1e1c1c"
                    }
          },
          {
                    "featureType": "manmade",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#022338"
                    }
          },
          {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": {
                              "visibility": "off"
                    }
          },
          {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": {
                              "visibility": "off"
                    }
          },
          {
                    "featureType": "all",
                    "elementType": "labels.text.fill",		//文字
                    "stylers": {
                              "color": "#efef05ff",
                              "visibility": "on"
                    }
          }
];
			
//精简主题
let simple_theme = [
          {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": {
                              "lightness": 20
                    }
          },
          {
                    "featureType": "highway",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#f49935"
                    }
          },
          {
                    "featureType": "railway",
                    "elementType": "all",
                    "stylers": {
                              "visibility": "off"
                    }
          },
          {
                    "featureType": "local",
                    "elementType": "labels",
                    "stylers": {
                              "visibility": "off"
                    }
          },
          {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": {
                              "color": "#d1e5ff"
                    }
          },
          {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": {
                              "visibility": "off"
                    }
          }
];
			
//黑夜风格
let night_theme = [
          {
                    "featureType": "land",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#212121"
                    }
          },
          {
                    "featureType": "building",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#2b2b2b"
                    }
          },
          {
                    "featureType": "highway",
                    "elementType": "all",
                    "stylers": {
                              "lightness": -42,
                              "saturation": -91
                    }
          },
          {
                    "featureType": "arterial",
                    "elementType": "geometry",
                    "stylers": {
                              "lightness": -77,
                              "saturation": -94
                    }
          },
          {
                    "featureType": "green",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#1b1b1b"
                    }
          },
          {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#181818"
                    }
          },
          {
                    "featureType": "subway",
                    "elementType": "geometry.stroke",
                    "stylers": {
                              "color": "#181818"
                    }
          },
          {
                    "featureType": "railway",
                    "elementType": "geometry",
                    "stylers": {
                              "lightness": -52
                    }
          },
          {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                              "color": "#313131"
                    }
          },
          {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": {
                              "color": "#8b8787"
                    }
          },
          {
                    "featureType": "manmade",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#1b1b1b"
                    }
          },
          {
                    "featureType": "local",
                    "elementType": "geometry",
                    "stylers": {
                              "lightness": -75,
                              "saturation": -91
                    }
          },
          {
                    "featureType": "subway",  
                    "elementType": "geometry",
                    "stylers": {
                              "lightness": -65
                    }
          },
          {
                    "featureType": "railway",
                    "elementType": "all",
                    "stylers": {
                              "lightness": -40
                    }
          },
          {
                    "featureType": "boundary",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#8b8787",
                              "weight": "1",
                              "lightness": -29
                    }
          },
          
          {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": {
                              "visibility": "off"
                    }
          }
]

export default{
	default_theme,
	midnight_theme,
	simple_theme,
	night_theme
}
		