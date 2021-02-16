"use strict";

mapboxgl.accessToken = 'pk.eyJ1IjoicmV1c3RsZSIsImEiOiJjamxzNnZ0dXYwYm10M2twbDI4OTBpanRtIn0.5wMezYrGtLcVb7EWUQshxA';

// Utils

let ROAD = '#7cba74'
let LINE_WIDTH = 3.5

var COLORS = {
    'train': '#43a1d8',
    'boat': '#1f648c',
    //'road': '',
    'bus': ROAD,
    'taxi': ROAD,
    'car': ROAD,
}

// Init Map
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v9',
    zoom: 1,
    minZoom: 1,
    maxZoom: 5,
    center: {
        lng: 23.15737211079022,
        lat: 39.477279244973346
    }
});

// Disable map rotation using right click + drag
map.dragRotate.disable();

// Disable map rotation using touch rotation gesture
map.touchZoomRotate.disableRotation();

// Init map
map.on('load', function(){
    
    // Load json data
    // TODO Async
    $.getJSON("/static/rtwData.geojson", function(rtwData){
        rtwData.features.forEach(feature => {
            let modeProp = feature.properties.mode.toLowerCase().split(',')
            let transportMode = modeProp[0]
            feature.properties.color = COLORS[transportMode]
        })
        
        // Add primary rtw line
        map.addLayer({
            id: "routePrimary",
            type: "line",
            
            source: {
                type: "geojson",
                data: rtwData
            },
            
            paint: {
                'line-width': LINE_WIDTH,
                'line-blur': 0,
                'line-color': {
                    'type': 'identity',
                    'property': 'color'
                }
            },
            
            layout: {
                'line-join': 'round',
                'line-cap': 'round'
            },

        })
        
    })
});
