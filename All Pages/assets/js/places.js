function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -33.867, lng: 151.195 },
    zoom: 15,
  });

  var request = {
    location: map.getCenter(),
    radius: "50000",
    type: ["restaurant"],
  };

  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    var placesContainer = document.getElementById("places-container");
    placesContainer.innerHTML = "";

    for (var i = 0; i < results.length; i++) {
      var place = results[i];

      var placeCard = document.createElement("div");
      placeCard.className = "place-card";

      var placeImage = document.createElement("img");
      placeImage.className = "place-image";
      placeImage.src =
        "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" +
        place.photos[0].photo_reference +
        "&key=AIzaSyD1ywNCiVeJNcxz7eK9KFzYwmvXleZT3ko";

      var placeName = document.createElement("h2");
      placeName.className = "place-name";
      placeName.innerHTML = place.name;

      var placeRating = document.createElement("p");
      placeRating.className = "place-rating";
      placeRating.innerHTML = "Rating: " + place.rating;

      placeCard.appendChild(placeImage);
      placeCard.appendChild(placeName);
      placeCard.appendChild(placeRating);
      placesContainer.appendChild(placeCard);
    }
  }
}

function getCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;

        var map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: lat, lng: lng },
          zoom: 15,
        });

        var request = {
          location: { lat: lat, lng: lng },
          radius: "500",
          type: ["restaurant"],
        };

        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);
      },
      function (error) {
        alert("Error getting current location: " + error.message);
      }
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}
