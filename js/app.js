// initialize and add the map
initMap: () => {
    // company HQ
    const loc = { lat: 42.361145, lng: -71.057083 };
    // map centered on company HQ
    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 14,
        center: loc
    });
    // marker on company HQ
    const marker = new google.maps.Marker({ position: loc, map: map });
}