"use strict";

mapboxgl.accessToken = 'pk.eyJ1IjoicmV1c3RsZSIsImEiOiJjamxzNnZ0dXYwYm10M2twbDI4OTBpanRtIn0.5wMezYrGtLcVb7EWUQshxA';

// Utils

let ROAD = '#7cba74';

var COLORS = {
    'train': '#43a1d8',
    'boat': '#1f648c',
    //'road': '',
    'bus': ROAD,
    'taxi': ROAD,
    'car': ROAD,
};


// Init Map
var map = new mapboxgl.Map({
    container: 'map',
    //style: 'mapbox://styles/mapbox/satellite-v9',
    style: 'mapbox://styles/mapbox/dark-v9',
    //style: 'mapbox://styles/reustle/cjk79zycy0by52so62irk2j4m',
    zoom: 1.5,
    minZoom: 1,
    maxZoom: 5,
    //maxBounds: [ [-180, -85], [180, 85] ],
    center: {
        lng: 9.346689392360958,
        lat: 25.680995922791197
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
                'line-width': 2.5,
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

