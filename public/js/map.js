document.addEventListener("DOMContentLoaded", function () {
  
  const mapDiv = document.getElementById('map');
  if (!mapDiv) return;

  const coordinates = JSON.parse(mapDiv.dataset.coordinates || '[]');
  const listingLocation = mapDiv.dataset.location || '';
  const mapToken = mapDiv.dataset.token || '';

  console.log("✅ mapToken:", mapToken);
  console.log("✅ coordinates:", coordinates);

  if (
    !mapToken ||
    coordinates.length !== 2 ||
    isNaN(Number(coordinates[0])) ||
    isNaN(Number(coordinates[1]))
  ) {
    console.error("❌ Invalid data:", { mapToken, coordinates });
    return;
  }

  mapboxgl.accessToken = mapToken;

  const map = new mapboxgl.Map({
    container: mapDiv,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: coordinates,
    zoom: 9
  });

  map.on('load', function () {
    new mapboxgl.Marker({ color: "red" })
      .setLngLat(coordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML(`<h4>${listingLocation}</h4><p>Exact location provided after booking</p>`)
      )
      .addTo(map);
  });

});