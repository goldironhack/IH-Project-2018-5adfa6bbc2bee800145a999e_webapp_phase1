var URL_POLYGON_ID = "https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson";

var CSS_COLOR_NAMES = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure",
"Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet",
"Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral",
"CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan",
"DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki",
"DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed",
"DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray",
"DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink",
"DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick",
"FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite",
"Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew",
"HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush",
"LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
"LightGoldenRodYellow","LightGray","LightGrey","LightGreen",
"LightPink","LightSalmon","LightSeaGreen","LightSkyBlue",
"LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
"Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine",
"MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen",
"MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
"MediumVioletRed","MidnightBlue","MintCream","MistyRose",
"Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab",
"Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
"PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru",
"Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue",
"SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna",
"Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow",
"SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato",
"Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];


function getDataFromURLS(){
	alert("Soon!.... :) ");
}

function updateAllDatasets(){
	alert("Soon!.... :) ");
}

function fillTable(){
	alert("Soon!.... :) ");
}

function updateChart(){
		alert("Soon!.... :) ");
}

function onGoogleMapResponse(){

	map = new google.maps.Map(document.getElementById('googleMapContainer'), {
 		center: {lat: 40.7291, lng: -73.9965},
		zoom: 10
	});

	/*map.data.loadGeoJson(
      "https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson"
	); */

	var data = $.get(URL_POLYGON_ID, function(){})
		.done( function(){
			var obj = JSON.parse(data.responseText);
			var polygon = [];

			for( var k = 0; k < obj.features.length; k++ )
			{
				polygon.push(obj.features[k].geometry.coordinates[0]);
			}

			for( var i = 0; i < polygon.length; i++){
				var latLng = [];
				if(polygon[i].length == 1 )
				{
					console.log(polygon[i].length);
					for(var m = 0; m < polygon[i][0].length; m++){
						latLng.push({lat: polygon[i][0][m][1], lng: polygon[i][0][m][0]});
					}
				}
				else {
					console.log(polygon[i].length)
					for(var j = 0; j < polygon[i].length; j++){
						var latTmp = polygon[i][j][1];
						var lngTmp = polygon[i][j][0];
						if( latTmp != null &&  latTmp.length > 1 )
						{
							latLng.push({lat: latTmp[1], lng: latTmp[0]});
							latLng.push({lat: lngTmp[1], lng: lngTmp[0]});
						}
						else {
							latLng.push({lat: polygon[i][j][1], lng: polygon[i][j][0]});
						}
					}
				}

				var r = Math.floor((Math.random() * CSS_COLOR_NAMES.length));
				console.log("r"+r);
				var district = new google.maps.Polygon({
						paths: latLng,
						strokeColor: '#FF0000',
						strokeOpacity: 0.8,
						strokeWeight: 1,
						fillColor:  '#FF0000',
						fillOpacity: 0.50
					});
				district.setMap(map);
			}
		})
		.fail( function(error){
			console.error(error);
		}); */
}

function drawBorderOfDistricts(){
	alert("Soon!.... :) ");
}

$(document).ready( function(){
	$("#getDataButton").on("click", getDataFromURLS);
	$("#updateTableButton").on("click", fillTable);
	$("#updateChartButton").on("click", updateChart);
})
