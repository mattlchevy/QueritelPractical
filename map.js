function initMap(){
    var settings = {
    center: {lat: 18.109581, lng: -77.2975082} , //Jamaica
    zoom: 8,
    minZoom: 2,
    mapTypeId: 'roadmap',
    gestureHandling: 'greedy',
    streetViewControl: false,
    mapTypeControl: true,
    zoomControl: true,
    fullscreenControl: true

}
    let googleMap = new google.maps.Map(document.getElementById('mainMap'), settings);

    let input_group = document.createElement("div");


    let input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("placeholder","Search Here");
    input.style.marginTop = "12px";
    

    input_group.appendChild(input);


    let searchBox = new google.maps.places.SearchBox(input);

    googleMap.controls[google.maps.ControlPosition.TOP_CENTER].push(input_group);

    googleMap.addListener('bounds_changed', function () {
        searchBox.setBounds(googleMap.getBounds());
    });

    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function () {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach(function (marker) {
            marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };
            markers.push(new google.maps.Marker({
                map: googleMap,
                icon: icon,
                title: place.name,
                position: place.geometry.location
            }));

            if (place.geometry.viewport) {

                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        googleMap.fitBounds(bounds);
    });
        //get the zoom value of the map
    function getZoom(googleMap) {
        let zoom = 0;
        if (googleMap !== undefined){
            zoom = googleMap.getZoom();

            return zoom;
        }

        return zoom;
    }
    //zoom in the map
    function zoomIn(googleMap) {
        let zoom = 0;
        if (googleMap !== undefined){
            zoom = googleMap.getZoom();
            zoom += 1;

            googleMap.setZoom(zoom);
        }

    }
    //zoom out the map
    function zoomOut(googleMap) {
        let zoom = 0;
        if (googleMap !== undefined){
            zoom = googleMap.getZoom();
            zoom -= 1;

            if (zoom === 0){
                zoom = 1;
            }

            googleMap.setZoom(zoom);
        }
    }
    
    //get the icons used in the setup of the map
    
    
    
    //zoom to location
    function zoomToMarker(marker) {
        googleMap.setZoom(20);
        googleMap.setCenter(marker.getPosition());

    }

   } 
   