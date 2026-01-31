function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(saveLocation);
    } else {
      alert("Geolocation not supported");
    }
  }
  
  function saveLocation(position) {
    localStorage.setItem("lat", position.coords.latitude);
    localStorage.setItem("lng", position.coords.longitude);
  
    window.location.href = "services.html";
  }
  