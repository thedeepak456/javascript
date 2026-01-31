const lat = localStorage.getItem("lat");
const lng = localStorage.getItem("lng");

if (!lat || !lng) {
  alert("Location not found");
  window.location.href = "index.html";
}

// Create map
const map = L.map("map").setView([lat, lng], 14);

// Map tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap"
}).addTo(map);

// User marker (BLUE)
L.marker([lat, lng])
  .addTo(map)
  .bindPopup("You are here")
  .openPopup();

// Store all markers
let markers = [];

/* -------- COLORED ICONS -------- */
const icons = {
  pharmacy: new L.Icon({
    iconUrl: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
    iconSize: [32, 32]
  }),

  supermarket: new L.Icon({
    iconUrl: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
    iconSize: [32, 32]
  }),

  gym: new L.Icon({
    iconUrl: "https://maps.google.com/mapfiles/ms/icons/orange-dot.png",
    iconSize: [32, 32]
  })
};

/* -------- UPDATE SERVICES -------- */
function updateServices() {
  // Remove old markers
  markers.forEach(m => map.removeLayer(m));
  markers = [];

  // Get checked services
  const checked = document.querySelectorAll("input[type=checkbox]:checked");

  checked.forEach(box => {
    fetchService(box.value);
  });
}

/* -------- FETCH SERVICE -------- */
function fetchService(type) {
  let filter = "";

  if (type === "pharmacy") {
    filter = `node["amenity"="pharmacy"]`;
  } 
  else if (type === "supermarket") {
    filter = `node["shop"="supermarket"]`;
  } 
  else if (type === "gym") {
    filter = `node["leisure"="fitness_centre"]`;
  }

  const query = `
    [out:json];
    (
      ${filter}(around:2000, ${lat}, ${lng});
    );
    out;
  `;

  fetch("https://overpass-api.de/api/interpreter", {
    method: "POST",
    body: query
  })
    .then(res => res.json())
    .then(data => {
      data.elements.forEach(place => {
        const marker = L.marker(
          [place.lat, place.lon],
          { icon: icons[type] }
        )
          .addTo(map)
          .bindPopup(place.tags.name || type);

        markers.push(marker);
      });
    });
}
