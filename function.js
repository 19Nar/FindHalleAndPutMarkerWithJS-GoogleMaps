// The task is to find Halle (Belgium on the map and put a marker)

var mapHalle = document.querySelector("#myMap");


function initMap() {
    var location = { lat: 50.736809, lng: 4.237090 };
    map = new google.maps.Map(mapHalle, { zoom: 4, center: location });
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        marker: marker
    })
}

mapHalle.addEventListener("click", setMarker);

function setMarker() {
    placeMarker(e.location, map)
    {
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });
        map.panTo(location);
    }
    infoWindow.open(map, marker)
};



