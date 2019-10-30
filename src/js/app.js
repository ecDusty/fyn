// Custom Code for Find Your Neighbourhood application build



// KNOCKOUT CODING SECTION
//

//Menu Items
//

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
  self.Places = function(place = { position: {}, title: '', icon: '', iconActiveHover: '', search: '', address: '',  ani: google.maps.Animation.DROP }) {
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
      console.log(`${foo.marker}\n${foo.icon.url}\n${foo.title}`);
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

  self.HomeItem = function(home = { position: {}, title: '', icon: '', iconActiveHover: '', search: '', address: '',  ani: google.maps.Animation.DROP }) {
    self.Places.call(this,home);
    const foo = this;

    console.log(self.G.streetViewPic(foo.position));
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
      console.log(self.searchBounds)
      self.G.textFindPlace({
        location: self.searchBounds,
        radius: `4000`,
        query:`${self.hSearch.search()}`
      }, self.hSearch.addMark);
    },

    addMark: function(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        console.log(results);
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
              search: self.hSearch.search()
            });
            if (self.hSearch.subMenu() == 'add-place')
              item.marker.setMap(self.G.map)
            else
              item.marker.setMap(null);
            self.homeActiveItems.push(item);
          },((90-2*x)*x));
          x++
        }

        if (results.length <= 1) {
          G.map.setCenter(results[0].geometry.location)
          G.map.setZoom(17);
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





  // ========================
  //   App Initialization
  // ========================
  //
  //
  self.initApp = function() {
    const HongKong = G.makeLatLng('22.286394','114.149139');

    G.map = new google.maps.Map(G.mapEl, {
      center: G.testMarker,
      zoom: 12,
      styles: G.mStyles[0].styles,
      disableDefaultUI:true
    });
    // gMap = G.map;
    self.searchBounds = HongKong;
  }

  self.G.loadMap(self.G.API)
  .then(self.initApp)
    .catch(function(response){
      alert(`Looks like the first URL failed. This will be due to an issue with your internet connection. You can see the response error here:\n${response}`);
    })
}
const fyn = new FynViewModel()
ko.applyBindings(fyn);