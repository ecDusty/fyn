/* global google, ko, console */

// Custom Code for application build
const model = {

}

const octo = {

}

const view = {

}


class G_Model {
  constructor(API = 'AIzaSyAaYL795gcBKEjS2Ud2Rb12A7hebgrT-Fc',mapElement = document.getElementById('map')) {
    // Map Settings
    //
    this.API = API;
    this.testMarker = {lat: 22.2485, lng:114.1542};
    this.map = {};
    this.mStyles = [
        [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ebe3cd"
              }
            ]
          },
          {
            "elementType": "labels",
            "stylers": [
              {
                "weight": 4
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#523735"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f1e6"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#c9b2a6"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#dcd2be"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#ae9e90"
              }
            ]
          },
          {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dfd2ae"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dfd2ae"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
              {
                "weight": 2
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#93817c"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#a5b076"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#447530"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f1e6"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#fdfcf8"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f8c967"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#e9bc62"
              }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e98d58"
              }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#db8555"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#806b63"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dfd2ae"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8f7d77"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#ebe3cd"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dfd2ae"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#b9d3c2"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#92998d"
              }
            ]
          }
        ],
        [
          {
              "featureType": "all",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "off"
                  },
                  {
                      "saturation": "-100"
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "saturation": 36
                  },
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 40
                  },
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "visibility": "off"
                  },
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 16
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "administrative",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 20
                  }
              ]
          },
          {
              "featureType": "administrative",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 17
                  },
                  {
                      "weight": 1.2
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 20
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#4d6059"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#4d6059"
                  }
              ]
          },
          {
              "featureType": "landscape.natural",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#4d6059"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                  {
                      "lightness": 21
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#4d6059"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#4d6059"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "color": "#7f8d89"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#7f8d89"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#7f8d89"
                  },
                  {
                      "lightness": 17
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#7f8d89"
                  },
                  {
                      "lightness": 29
                  },
                  {
                      "weight": 0.2
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 18
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#7f8d89"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#7f8d89"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 16
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#7f8d89"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#7f8d89"
                  }
              ]
          },
          {
              "featureType": "transit",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 19
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "all",
              "stylers": [
                  {
                      "color": "#2b3638"
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#2b3638"
                  },
                  {
                      "lightness": 17
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#24282b"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#24282b"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels.text",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          }
      ]
      ];
    this.mapEl = mapElement;
    this.libraries = ['places','geometry'];

    //Marker Settings
    //

    //Interface Properties
    //
    this.home = {
      searchMarker: null,
      markers: []
    }
    this.places = {
      searchMarker: null,
      markers: []
    }
  }

  // get(libraries){
  //   fetch(`https`)
  // }

  //Asychronously Load Map scripts
  loadMap(API) {
    const gMaps = `https://maps.googleapis.com/maps/api/js`,
          arrayLibraries = [`places`,`geometry`];

    return new Promise(function(resolve, reject){
      let script = document.createElement('script');
      script.src = `${gMaps}?libraries=${arrayLibraries.join()}&key=${API}`;
      script.onload = () => resolve();
      script.onerror = () => reject(script.src);

      document.head.appendChild(script);
    })
  }

  createMarker(mark = { position: {}, title: '', icon: ''}) {
    const self = this,
          icon = mark.icon;
    if(icon) {
      return new google.maps.Marker({
        map: self.map,
        position: mark.position,
        title: mark.title,
        icon: icon,
        animation: google.maps.Animation.DROP
      })
    } else {
      return new google.maps.Marker({
        map: self.map,
        position: mark.position,
        title: mark.title,
        animation: google.maps.Animation.DROP
      })
    }
  }

  findPlace(request,callback) {
    const self = this;
    new google.maps.places.PlacesService(self.map).findPlaceFromQuery(request,callback)
  }


}

// KNOCKOUT CODING SECTION
//

//Menu Items
//

function FynViewModel() {
  const self = this;

// Model Data Storage Section
// 
  self.Gmap = new G_Model()

  self.title = ko.observable(`FYN - Find your Neighborhood`);
  self.activeInterface = ko.observable();
  self.error = ko.observable(false);

  //Menu Data & Controls
  //
  self.MenuVM = function (name,icon) {
    this.name = name;
    this.icon = icon;
    this.alt = `${name} icon`;
    this.active = ko.observable(false);
    this.setActive = () => this.active(true)
  }

  self.menuactiveTemp = ko.observable('Menu')

  self.menuRemoveActive = function(item) {
      for (self.menuItems of menu) {
          menu.active(false);
      }

      item.active(true);
  }

  self.menuItems = [
    new self.MenuVM(`Homes`,`images/home.svg`),
    new self.MenuVM(`Places`,`images/map.svg`),
    new self.MenuVM(`Filters`,`images/shuffle.svg`),
    new self.MenuVM(`Settings`,`images/cog.svg`)
  ]

  self.setHomeActive = function(active){
    self.activeInterface(active)
  };

  // Homes Data & Controls
  //
  //
  self.hSearch = {
    name: ko.observable(''),
    street: ko.observable(''),
    city: ko.observable(''),
    country: ko.observable('')
  }

  self.searchMarker = function () {
      console.log('Fire SearchMarker')
    self.Gmap.findPlace({
      query:'',
      fields:[`${self.hSearch.street}, ${self.hSearch.city}${self.hSearch.country}`]
    }, self.addMarker)
  }

  self.addMarker = function (results,status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      console.log(results);
    } else {
      self.error(true);
    }
  }
  // App Initialization
  //
  //
  self.initApp = function() {
    const G = self.Gmap
    G.map = new google.maps.Map(G.mapEl, {
      center: G.testMarker,
      zoom: 11,
      styles: G.mStyles[0],
      disableDefaultUI:true
    });
    G.home.markers.push(new google.maps.Marker({
      position: G.testMarker,
      map: G.map,
      title: 'First marker YAY!',
      animation:google.maps.Animation.DROP
    }))

  }

  self.Gmap.loadMap(self.Gmap.API).then(self.initApp)
  .catch(function(response){
    alert(`Looks like the first URL failed. Time to slowly walk away.\n${response}`);
  })
}
ko.applyBindings(new FynViewModel());