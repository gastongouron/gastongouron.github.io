L.mapbox.accessToken = 'pk.eyJ1IjoiZmFiaWVuY2F0YWxhbm8iLCJhIjoiY2lvNXplajZ3MDA1Y3Yza25nZDVhZmc1ZyJ9.WKfQ6nGrMyxlX0vLmR_reQ';

var mapTooltipsJS = L.mapbox.map('map-tooltips-js', 'mapbox.light').setView([51.530724, -0.07861], 13);

var myLayer = L.mapbox.featureLayer().addTo(mapTooltipsJS);

var drink = 'img/drink.png'
var food  = 'img/food.png'
var music = 'img/music.png'
var bar   = 'img/bar.png'

var collection = [
                 ['CARAVAGGIO MY LOCAL NAPOLITAN RESTAURANT','107-112 Leadenhall St, London EC3A 4DP',              [-0.080735,51.513584], food],
                 ['VINOTECAMY BEST LOCAL WINE BAR',          '7 Saint John Street, London EC1M 4AA',                [-0.101915,51.520108], drink],
                 ['KIPFERLTHE BEST AUSTRIAN CAFÉ',           '20 Camden Passage, London N1 8ED',                    [-0.103477,51.535158], drink],
                 ['BISTROTHÈQUE MY LOCAL SUNDAY BRUNCH',     '23-27 Wadeson St, London E2 9DR',                     [-0.055945,51.534170], drink],
                 ['SAPONARA MY BEST TRIP TO ITALY IN LONDON','23 Prebend St, London N1 8PF',                        [-0.096328,51.536939], drink],
                 ['DALSTON JAZZ BARMY BEST CASUAL & UNUSUAL FRIDAY NIGHT IN LONDON','4 Bradbury St, London N16 8JN',[-0.076353,51.548686], drink],
                 ['CAFÉ 338MY LOCAL BREAKFAST HANGOVER SPOT','338 Bethnal Green Rd, London, UK E2 0AG',             [-0.063212,51.526500], drink],
                 ];

var geojson = [];

for (i = 0; i < collection.length; i++) {

geojson.push({"type": "Feature", "geometry": {"type": "Point", "coordinates": collection[i][2],}, "properties": {"title": collection[i][0], "description": collection[i][1], "icon": {"iconUrl": collection[i][3], "iconSize": [50, 50], "iconAnchor": [25, 25], "popupAnchor": [0, -25], "className": "dot"}}});

}

myLayer.on('layeradd', function(element) {
  var marker = element.layer,
    feature = marker.feature;
  marker.setIcon(L.icon(feature.properties.icon));
  var content = '<h2>'+ feature.properties.title+'<\/h2>' + '<h6>'+ feature.properties.description+'</h6>';
  marker.bindPopup(content);
});

myLayer.setGeoJSON(geojson);
mapTooltipsJS.scrollWheelZoom.disable();

