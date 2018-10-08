/* global google */
let map = {},
    markers = [];
// TODO: Complete the following function to initialize the map
function initMap() {
// TODO: use a constructor to create a new map JS object. You can use the coordinates
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 22.3964, lng: 114.1095},
    zoom: 11,
    disableDefaultUI:true
  });

  const aberdeenSquare = {lat: 22.2485, lng:114.1542};
  const marker = new google.maps.Marker();
  markers.push(new google.maps.Marker({
    position: aberdeenSquare,
    map:map,
    title: 'First marker YAY!'
  }))
// we used, 40.7413549, -73.99802439999996 or your own!
}