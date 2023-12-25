const getlocation = () => {
  // Ask for location permission from the user
  navigator.permissions.query({name:'geolocation'}).then((result) => {
    if (result.state === 'granted') {
      // Location permission already granted, get the location
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else if (result.state === 'prompt') {
      // Location permission not yet granted, ask for permission
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else if (result.state === 'denied') {
      // Location permission denied
      alert('Location permission has been denied. Please allow location access from your browser settings.');
    }
  });
};

const showPosition = (position) => {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  
  const des = document.querySelector("p");
  des.innerHTML = "Latitude:" + lat + "   Longitude:" + long;
};

const showError = (error) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
                                      
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;

    case error.TIMEOUT:
      alert("The request to get user Location timed out.");
      break;

    case error.UNKNOWN_ERROR:   
      alert("UNKNOWN_ERROR occured.");
      break;   

    default:
      alert("UNKNOWN_ERROR occured.");
  }    
};
