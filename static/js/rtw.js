"use strict";

mapboxgl.accessToken = 'pk.eyJ1IjoicmV1c3RsZSIsImEiOiJESzd6YVRnIn0.Hh9AwQw1X0PR_TOewZMMzA';

// Utils

let GREEN = '#94e86f'
let BLUE = '#4eade4'
let ORANGE = '#da870a'

var COLORS = {
    'train': BLUE,
    'bus': ORANGE,
    'taxi': ORANGE,
    'car': ORANGE,
    'boat': GREEN,
    'ferry': GREEN,
};


// Init Map
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v9',
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
        let rtwDataPrimary = []
        let rtwDataOther = []
        rtwData.features.forEach(feature => {
            let nameProp = feature.properties.name.toLowerCase().split(',')
            let transportMode = nameProp[0]
            feature.properties.color = COLORS[transportMode]
            
            if(feature.properties.rtw && feature.properties.rtw == 'true'){
                rtwDataPrimary.push(feature)
            }else{
                rtwDataOther.push(feature)
            }
        })
        
        // Add primary rtw line
        map.addLayer({
            id: "routePrimary",
            type: "line",
            
            source: {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: rtwDataPrimary
                }
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
        
        // Add secondary lines
        map.addLayer({
            id: "routeOther",
            type: "line",
            
            source: {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: rtwDataOther
                }
            },
            
            paint: {
                'line-width': 2,
                'line-opacity': 0.8,
                'line-blur': 1,
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

