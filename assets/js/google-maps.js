function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -3.917050, lng: 40.396757};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Villaviciosa de Odón, Comunidad de Madrid, España' // Title Location
    });
}