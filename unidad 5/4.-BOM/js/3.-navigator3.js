


document.getElementById("getcurrentposition_button").addEventListener("click", ()=>{
  const map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([0, 0]),
        zoom: 13
    })
  });
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        const coords = ol.proj.fromLonLat([position.coords.longitude, position.coords.latitude]);
        const marker = new ol.Overlay({
            position: coords,
            element: document.createElement('div'),
            positioning: 'center-center'
        });
        marker.getElement().style.width = '10px';
        marker.getElement().style.height = '10px';
        marker.getElement().style.backgroundColor = 'red';
        marker.getElement().style.borderRadius = '50%';
        map.addOverlay(marker);
        map.getView().setCenter(coords);
    });
  }
});


