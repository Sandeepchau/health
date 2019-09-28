

/*---Google Maps----*/
function initMap() {
  var location = {lat: 28.669156, lng: 77.453758};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}
