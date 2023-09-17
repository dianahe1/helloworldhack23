// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
let infoWindow;

function initMap() {

  // displays map
  const pyrmont = { lat: 40.42394220168325, lng: -86.92118386218021 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: pyrmont,
    zoom: 13,
    mapId: "8d193001f940fde3",
  });

  infoWindow = new google.maps.InfoWindow();

  // location Button 
  const locationButton = document.createElement("button");
  locationButton.setAttribute("id", "locationButton");
  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
          
          const service = new google.maps.places.PlacesService(map);
          service.nearbySearch(
            { location: pos, radius: 1000, type: "restaurant" },
            (results, status, pagination) => {
              if (status !== "OK" || !results) return;
        
              addPlaces(results, map);
              moreButton.disabled = !pagination || !pagination.hasNextPage;
              if (pagination && pagination.hasNextPage) {
                getNextPage = () => {
                  // Note: nextPage will call the same handler function as the initial call
                  pagination.nextPage();
                };
              }
            },
          );


        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        },
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function addPlaces(places, map) {
  const placesList = document.getElementById("places");

  for (const place of places) {
    if (place.geometry && place.geometry.location) {
      const image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      };

      new google.maps.Marker({
        map,
        icon: image,
        title: place.name,
        position: place.geometry.location,
      });

      const li = document.createElement("li");
      li.setAttribute("id", "resultList")

      li.textContent = place.name;
      placesList.appendChild(li);
      li.addEventListener("click", () => {
        map.setCenter(place.geometry.location);
      });
    }
  }
}

window.initMap = initMap;
