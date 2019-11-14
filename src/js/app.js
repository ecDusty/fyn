// =========================
//
//     Google Maps
//     Custom Class
//
// =========================
// ===========
//
// Google Maps
//    Class
//
// ===========

class G_Model {
	constructor(API = 'AIzaSyAaYL795gcBKEjS2Ud2Rb12A7hebgrT-Fc',mapElement = document.getElementById('map')) {
		// Map Settings
		//
		this.API = API;
		this.testMarker = {lat: 22.2485, lng:114.1542}; //Hong Kong
		this.map = {};
		this.mStyles = [
			{
				name: 'FYN',
				styles: [
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
				]
			},
			{
				name: 'Bat Man',
				styles: [
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
			}
		];
		this.mapEl = mapElement;
		this.libraries = ['places','geometry'];

		this.Places = null;

		//Marker Settings
		//

	}

	createMarker(mark = { position: {}, title: '', icon: '', ani: ''}) {
		const marker = { map: null };

		mark.position ? marker.position = mark.position : mark.position;
		mark.title ? marker.title = mark.title : mark.position;
		mark.icon ? marker.icon = mark.icon : mark.icon;
		mark.ani ? marker.animation = mark.ani : marker.animation = google.maps.Animation.DROP;

		return new google.maps.Marker(marker);
	}

	textFindPlace(request,callback) {
		const self = this;
		if (self.Places == null) {
			self.Places = new google.maps.places.PlacesService(self.map)
			return self.Places.textSearch(request,callback)
		} else {
			return self.Places.textSearch(request,callback);
		}
	}

	newBounds() {
		return new google.maps.LatLngBounds();
	}

	// get(libraries){
	//   fetch(`https`)
	// }

	makeLatLng(lat,lng) {
		return new google.maps.LatLng(lat,lng);
	}

	streetViewPic(location = ``, size = `600x400`, params) {
		params ? params = `&${params}&` : params = '';
		return `https://maps.googleapis.com/maps/api/streetview?size=${size}&location=${location}${params}&key=${this.API}`
	}

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
}




// KNOCKOUT CODING SECTION
//
// * It's important to note that Knockout doesn't support the new ES6 class
// * and my compiler which converts ES6 to ES2015 seems to produce some kind of error
// * that stops Knockout from working properly, so all Knockout Classes must use the
// * older ES2015 JS structure, but other pulled in elements / classes can be written
// * in ES6 without issue.

function FynViewModel() {
  const self = this;
  self.G = new G_Model()
  let G = self.G;

  // Model Data Storage Section
  // ;
  self.intView = ko.observable(false);

  self.title = ko.observable(`FYN - Find your Neighborhood`);
  self.activeInterface = ko.observable();
  self.error = ko.observable(false);

  //


  //Menu Data & Controls
  //
  self.MenuVM = function (name,icon) {
    this.name = name;
    this.icon = icon;
    this.alt = `${name} icon`;
    this.active = ko.observable(false);
  }

  self.activeMenu = ko.observable('start');

  self.menuRemoveActive = function(item) {
    if (item.active()) {
      item.active(false);
      self.activeMenu('start');
      self.intView(false);
    } else {
      for (const menu of self.menuItems) { menu.active(false); }
      item.active(true);
      self.intView(true);
      self.activeMenu(item.name);
    }
  }

  this.menuItems = [
    new self.MenuVM(`Homes`,`images/home.svg`),
    new self.MenuVM(`Places`,`images/map.svg`),
    new self.MenuVM(`Filters`,`images/shuffle.svg`),
    new self.MenuVM(`Settings`,`images/cog.svg`)
  ]

//   self.setHomeActive = function(active){
//     self.activeInterface(active)
//     self.intViewClass(true)
//   };

// === Interface ==
// General Settings
// for INTERFACE
//
//
  self.intViewClass = ko.pureComputed({
    read: function() {
      return self.activeMenu() + ' ' + (self.intView() ? 'active' : '');
    }
  });
  self.searchBounds = '';

  // === User Info ===
  // Here we have all the user stored info
  // to offer a more personalized start for search
  self.User = {};
  self.User.location = {
    lat: null,
    lng: null
  }

  self.getUserLocation = function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(self.geoSetUserLocation)
    } else {
        //console.log('Geolocation is not supported by this browser');
    }
  }
  self.geoSetUserLocation = function(position) {
    self.User.location.lat = position.coords.latitude;
    self.User.location.lat = position.coords.lattitude;
  }

  self.googleSetUserLocation = function(position) {
    self.User.location.lat = position.geometry.location.lat();
    self.User.location.lng = position.geometry.location.lng();
  }

  //Markers
  self.clearMarkers = function(koArray) {
    for (const item of koArray()) {
      item.marker.setMap(null);
    }
    koArray.removeAll();
  }

  self.hideMarkers = function(koArray) {
    for (const item of koArray()) {
      item.marker.setMap(null);
    }
  }

  self.showMarkers = function(koArray) {
    let bounds = G.newBounds();
    for (const item of koArray()) {
      item.marker.setMap(self.G.map);
      bounds.extend(item.position);
    }
    if (koArray().length == 1) {
      G.map.setCenter(
        koArray()[0] ? koArray()[0].position : G.testMarker
      )
      G.map.setZoom(
        koArray()[0] ? 15 : 12
      );
    } else if (koArray().length > 1) {
      G.map.fitBounds(bounds);
    }
  }

  // === Primary Class for searchable item ===

  // === PLACES Class ===
  /* Here is the base places class that will be used to search for a place, create a marker for it. Save any extra data for the place that may be required, such as location, details, images, etc.

  This class is then used within the Homes Class and the Favorites
  */
  self.Places = function(place = { position: {}, title: '', icon: '', iconActiveHover: '', search: '', address: '',  ani: google.maps.Animation.DROP, place_id: '', saved: false, activeSearch: false }) {
    const foo = this;

    // Needed data points
    this.search = place.search;
    this.saved = ko.observable(false)
    this.position = place.position;
    this.address = ko.observable(place.address)
    this.title = place.title;
    this.defIcon = '/images/home-point.png';
    this.iconActiveHover = '/images/home-active.png';
    this.mapFocused = false;
    this.place_id = place.place_id;
    this.saved = place.saved ? ko.observable(place.saved) : ko.observable(false);
    this.activeSearch = place.activeSearch ? ko.observable(place.activeSearch) : ko.observable(false);
    place.icon = {
      url: foo.defIcon,
      size: new google.maps.Size(35,45),
      origin: new google.maps.Point(0,0),
      anchor: new google.maps.Point(0,43)
    }

    // Icon settings
    this.activeIcon = ko.observable(foo.defIcon);
    this.icon = place.icon;

    // Marker Setup
    this.marker = self.G.createMarker(place);

    // Marker Interaction setup
    this.marker.addListener('mouseover',function() {
      foo.iconSet(foo.iconActiveHover);
      this.setIcon(foo.icon);
    });

    this.marker.addListener('mouseout',function() {
      // foo.setDefIcon();
      foo.iconSet(foo.defIcon);
      this.setIcon(foo.icon);
    });

    this.marker.addListener('click',function() {
      // console.log(`${foo.marker}\n${foo.icon.url}\n${foo.title}`);
      self.G.map.panTo(foo.position)
    });
  }

  //
  self.Places.prototype.iconSet = function(url) {
    this.icon.url = url;
    this.activeIcon(url);
  }

  // === HOMES ===
  // Data & Controls
  //
  //
  //Control Home Interface view

  //Searching for homes
  self.homeSavedItems = ko.observableArray([]);
  self.homeActiveItems = ko.observableArray([]);
  self.homeItems = ko.observableArray([]);

  self.HomeItem = function(home = { position: {}, title: '', icon: '', iconActiveHover: '', search: '', address: '',  ani: google.maps.Animation.DROP, place_id: ''  }) {
    self.Places.call(this,home);
    const foo = this;

    // console.log(self.G.streetViewPic(foo.position));
  }

  // HomeItem functionalitys
  //
  self.HomeItem.prototype = Object.create(self.Places.prototype);
  self.HomeItem.constructor = self.HomeItem;

  self.HomeItem.prototype.setHome = function() {
    const foo = this;
    if (this.saved()) {
      this.defIcon = '/images/home-point.png';
      self.homeSavedItems.remove(foo);
      self.hSearch.subMenu() == 'show-list' ?
                this.marker.setMap(null)
              : this.marker;
    } else {
      this.defIcon = '/images/home-saved.png';
      self.homeSavedItems.push(foo);
    }

    this.activeIcon(this.defIcon);
    this.saved(!foo.saved());
    this.icon.url = this.icon.url == this.activeIcon ? this.icon.url : this.defIcon;
    this.marker.setIcon(foo.icon);
  }

  // ================
  //    Home Search
  //    Functionality
  // ================
  // This is the Object that controls all Home search functionality
  self.hSearch = {
    name: ko.observable(''),
    search: ko.observable(''),
    searched: ko.observable(false),
    subMenu: ko.observable('add-place'),
    success: ko.observable(false),

    setAdd: function() {
      self.hideMarkers(self.homeSavedItems);
      self.showMarkers(self.homeActiveItems);
      self.hSearch.subMenu('add-place');
    },

    setList: function() {
      self.hideMarkers(self.homeActiveItems);
      self.showMarkers(self.homeSavedItems);
      self.hSearch.subMenu('show-list');
    },

    searchMark: function() {
      self.clearMarkers(self.homeActiveItems)
      // console.log(self.searchBounds)
      self.G.textFindPlace({
        location: self.searchBounds,
        radius: `4000`,
        query: `${self.hSearch.search()}`
      }, self.hSearch.addMark);
    },

    checkMarkExist: function(mark) {
      // const foundItem =

      if (self.homeSavedItems().length > 1) {
        const matched = ko.utils.arrayFilter(self.hSearch.homeSavedItems, function(item) {
            return item.place_id == mark.place_id;
          });
        if (matched.length > 0) {
          console.log(mark.place_id)
          matched().forEach((item) => {
            console.log(item.place_id);
            item.marker.setMap(self.G.mapEl);
            if (item.place_id === mark.place_id) {
              console.log(item.place_id);
              item.marker.setMap(self.G.mapEl);
            }
          }) ;
        }
      } else {
        self.homeActiveItems.push(mark);
      }
    },

    addMark: function(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        // console.log(results);

        // Places have been found, so apply searching state
      self.hSearch.searched(true);

        let x = 0
        let bounds = G.newBounds();
        self.hSearch.success(true);
        for (const result of results) {
          bounds.extend(result.geometry.location);
          setTimeout(function() {
            const item = new self.HomeItem({
              position: result.geometry.location,
              title: result.name,
              address: result.formatted_address,
              search: self.hSearch.search(),
              place_id: result.place_id
            });
            if (self.hSearch.subMenu() == 'add-place')
              item.marker.setMap(self.G.map)
            else
              item.marker.setMap(null);

            self.hSearch.checkMarkExist(item);
          },((90-2*x)*x));
          x++
        }

        if (results.length === 1) {
          G.map.setCenter(results[0].geometry.location)
          G.map.setZoom(17);
        // } else if (results.length === 0) {

        } else {
          G.map.fitBounds(bounds);
        }
      } else {
        // console.log(`${results} \n ${status}`);
        self.error(status);
      }
    },

    clearSearch: function() {
      self.clearMarkers(self.homeActiveItems)
      self.hSearch.search('');
      self.hSearch.success(false);
      self.hSearch.searched(false);
    }
  }
  // END
  //============

  // === FAVORITES ===
  // Data & Controls
  //
  //
  //Control Home Interface view
  this.FavItem = function(fav = { position: {}, title: '', icon: '', iconActiveHover: '', search: '', address: '',  ani: google.maps.Animation.DROP }) {
    self.Places.call(this,fav);
    const foo = this;
  }

  // ================
  //    Favorites Search
  //    Functionality
  // ================
  // This is the Object that controls all Places search functionality





  // self.G.loadMap(self.G.API)
  // .then(self.initApp)
  //   .catch(function(response){
  //     alert(`Looks like the first URL failed. This will be due to an issue with your internet connection. You can see the response error here:\n${response}`);
  //   })
}



// ========================
//   App Initialization
// ========================
//
//
FynViewModel.prototype.initApp = () => {
  const G = this.G
  const HongKong = G.makeLatLng('22.286394','114.149139');

  G.map = new google.maps.Map(G.mapEl, {
    center: HongKong,
    zoom: 12,
    styles: G.mStyles[0].styles,
    zoomControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: true,

    mapTypeControlOptions: {
      mapTypeIds: ['fyn', 'batman']
    }
  });
  G.map.mapTypes.set('fyn', new google.maps.StyledMapType(G.mStyles[0].styles, {name: G.mStyles[0].name, typeId: 'terrain'}));
  G.map.mapTypes.set('batman', new google.maps.StyledMapType(G.mStyles[1].styles, {name: G.mStyles[1].name}));
  G.map.setMapTypeId('fyn');
  G.map.mapTypeId = 'terrain';

  // gMap = G.map;
  self.searchBounds = HongKong;
}

FynViewModel.prototype.testFeature = function(test) {
  console.log('testing something out');
}

const fyn = new FynViewModel()
ko.applyBindings(fyn);

fyn.G.loadMap(self.G.API)
.then(self.initApp)
  .catch(function(response){
    alert(`Looks like the first URL failed. This will be due to an issue with your internet connection. You can see the response error here:\n${response}`);
  })