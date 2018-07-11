"use strict";

mapboxgl.accessToken = 'pk.eyJ1IjoicmV1c3RsZSIsImEiOiJESzd6YVRnIn0.Hh9AwQw1X0PR_TOewZMMzA';

// Utils

let GREEN = '#35d835'
let BLUE = '#4eade4'
let ORANGE = '#da870a'

var COLORS = {
    'train': BLUE,
    'bus': ORANGE,
    'taxi': ORANGE,
    'car': ORANGE,
    'boat': GREEN,
};


// Init Map
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v9',
    zoom: 1.5,
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
            feature.properties.color = COLORS[feature.properties.name.toLowerCase()]
        })
        
        map.addLayer({
            id: "route",
            type: "line",
            
            source: {
                type: "geojson",
                data: rtwData
            },
            
            paint: {
                'line-width': 3,
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

