mapboxgl.accessToken = 'pk.eyJ1IjoicmV1c3RsZSIsImEiOiJESzd6YVRnIn0.Hh9AwQw1X0PR_TOewZMMzA';

// Utils

var GREEN = '#35d835';
var BLUE = '#4EADE4';
var ORANGE = '#da870a';

var COLORS = {
    'train': BLUE,
    'bus': ORANGE,
    'taxi': ORANGE,
    'boat': GREEN,
    'ferry': GREEN,
};

var tripsToFeatures = function(trips){
    // Convert a list of json to geojson features
    
    var cleanTrips = [];
    trips.forEach(function(trip){
        var tripColor = COLORS[trip.mode] || BLUE;

        cleanTrips.push({
            type: 'Feature',
            properties: {
                color: tripColor

            },
            geometry: {
                type: 'LineString',
                coordinates: trip.coords
            }
        });
    });
    
    return cleanTrips;
};

// Init Map

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v9',
    zoom: 1,
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
    map.addSource('trips', {
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features: tripsToFeatures(rawTrips)
        }
    });
    map.addLayer({
        id: 'route',
        type: 'line',
        source: 'trips',
        layout: {
            'line-join': 'round',
            'line-cap': 'round'
        },
        paint: {
            'line-width': 4,
            'line-color': {
                'type': 'identity',
                'property': 'color'
            }
        }
    });
});

