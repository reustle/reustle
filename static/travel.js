mapboxgl.accessToken = 'pk.eyJ1IjoicmV1c3RsZSIsImEiOiJESzd6YVRnIn0.Hh9AwQw1X0PR_TOewZMMzA';

// Utils

var tripsToFeatures = function(trips){
    
    var cleanTrips = [];
    trips.forEach(function(trip){
        cleanTrips.push({
            type: 'Feature',
            properties: {},
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
    style: 'mapbox://styles/mapbox/light-v9',
    zoom: 1,
    center: {
        lng: 9.346689392360958,
        lat: 25.680995922791197
    }
});

// disable map rotation using right click + drag
map.dragRotate.disable();
// disable map rotation using touch rotation gesture
map.touchZoomRotate.disableRotation();

// Set up lines

var tripsSrc = new mapboxgl.GeoJSONSource({
    data: {
        type: 'FeatureCollection',
        features: tripsToFeatures(rawTrips)
    }
});

// Init
map.on('load', function(){
    map.addSource('trips', tripsSrc);
    map.addLayer({
        id: 'route',
        type: 'line',
        source: 'trips',
        layout: {
            'line-join': 'round',
            'line-cap': 'round'
        },
        paint: {
            'line-color': '#4EADE4',
            'line-width': 7
        }
    });
});

