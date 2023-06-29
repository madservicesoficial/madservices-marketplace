function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 40.39671973267111, lng: -3.917150474442195};

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