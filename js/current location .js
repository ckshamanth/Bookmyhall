const getlocation = () => {
  // Get the location from the user
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
  } 
  else
  {
      alert("Geolocation is not supported by this browser.");
  }
};
                      
const showPosition = (position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude                     


const des = document.querySelector("p");
des.innerHTML = "Latitude:" + lat + "   Longitude:" + long;
};


const showError = (error) =>
 {
    switch (error.code)
    {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
                                      
         case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;

        case error. TIMEOUT:
            alert("The request to get user Location timed out.");
            break;

        case error.UNKNOWN_ERROR:   
            alert("UNKNOWN_ERROR occured.");
            break;   

        default:
            alert("UNKNOWN_ERROR occured.");
    }    
}
