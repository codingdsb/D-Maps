mapboxgl.accessToken = 'pk.eyJ1IjoiZGFyc2hhbmIiLCJhIjoiY2tvcXpncWFtMDJreTJ2bzgzMDZxa3E4bCJ9.PzswPRny--UHKPlneQHXxA';
alert("Map is pointing/will be pointing to your current location if you allowe it to know your location")
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})



function successLocation(position) {
    createMapWithCurrentLocation([position.coords.longitude, position.coords.latitude])
}

function errorLocation(position) {
    createMapWithCurrentLocation([-2.24, 53.48])
}

function createMapWithCurrentLocation(center) {
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 20
    })

    var nav = new mapboxgl.NavigationControl()
    map.addControl(nav, 'top-right')

    var directions = new MapboxDirections({
        accessToken:mapboxgl.accessToken,
        unit: 'metric',
        profile: 'mapbox/cycling'
      });
      
      
    map.addControl(directions, 'top-right');
 
}
