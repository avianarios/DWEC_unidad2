//////////////////////////
////getCurrentPosition////
//////////////////////////
//returns geoLocationPosition object wich has two properties: coords and timestamp
//geoLocationPosition.coords returns a geoLocationCoordinates object. Its two most used properties ar latitude and longitude
//arguments: 1: mantadory, success callback, 2: optional, error callback, 3: optional, options
//example 1, just success function

let caja_mensaje=document.getElementById("texto_coordenadas");
document.getElementById("getcurrentposition_button").addEventListener("click", damePosicion);

const opciones = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000,
};

function damePosicion(){
  if (navigator.geolocation) {    //should be checked 
      navigator.geolocation.getCurrentPosition(muestraPosicion, muestraError, opciones);
  } else { 
      caja_mensaje.innerHTML="Su navegador no soporta geolocalización";
  }
}

function muestraPosicion(position) {
  inicializaMapa();
  muestraCaracterísticas(position);
  pintaMapa(position);
}

function inicializaMapa(){
  //avoids leaflet error: "Map Container Is Already Initialized". It removes the map and creates it again
  //map-wrapper and map
  const mapWrp = document.getElementById('map-wrapper');
  mapWrp.classList.add("dp_none");
  const map = document.getElementById('map');

  //Create a new map element
  const newMap = document.createElement('div');
  newMap.setAttribute('id', 'map');
  newMap.classList.add("dp_none");

  // Remove older/previous map element
  mapWrp.removeChild(map);

  // insert new map element
  mapWrp.append(newMap);
}

function muestraCaracterísticas(position){
  caja_mensaje.classList.remove("dp_none");
  caja_mensaje.innerHTML= `<br>position.coords.latitude:${position.coords.latitude}
  <br>position.coords.longitude:${position.coords.longitude}
  <br>position.coords.accuracy:${position.coords.accuracy}
  <br>position.coords.altitudeAccuracy:${position.coords.altitudeAccuracy}
  <br>position.coords.heading:${position.coords.heading}
  <br>position.coords.speed:${position.coords.speed}
  <br>position.coords.timestamp:${position.coords.timestamp}
  `;
}

function muestraError(error) {
  switch(error.code) {
      case error.PERMISSION_DENIED:
        caja_mensaje.innerHTML="El usuario denegó la petición de localización";
          break;
      case error.POSITION_UNAVAILABLE:
        caja_mensaje.innerHTML="La información sobre localización no está disponible";
          break;
      case error.TIMEOUT:
        caja_mensaje.innerHTML="Se agotó el tiempo de la petición";
          break;
      default:
        caja_mensaje.innerHTML="Ocurrió un error desconocido";
  }
}

function pintaMapa(position){
  //provided by leaflet (https://leafletjs.com/)
  document.getElementById("map-wrapper").classList.remove("dp_none");
  document.getElementById("map").classList.remove("dp_none");

  let map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 14);
  
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

  L.marker([position.coords.latitude, position.coords.longitude]).addTo(map)
    .bindPopup('Your current position')
    .openPopup();
}

/////////////////////
////watchPosition////
/////////////////////
//provides updated (if the device is moving) or more accurate position information (getCurrentPosition provides quick unaccurate info by default)

document.getElementById("watchposition_button").addEventListener("click", damePosicionTiempoReal);

let destino={
  latitude: 0,
  longitude: 0,
};

function damePosicionTiempoReal(){
  if (navigator.geolocation) {    //should be checked 
      let id=navigator.geolocation.watchPosition(muestraPosicionTiempoReal, muestraError, opciones);
  } else { 
      caja_mensaje.innerHTML="Su navegador no soporta geolocalización";
  }
}

function muestraPosicionTiempoReal(position) {
  inicializaMapa();
  muestraCaracterísticas(position);
  if (destino.latitude === position.coords.latitude && destino.longitude === position.coords.longitude) {
    console.log("Felicidades, has llegado a tu destino.");
    navigator.geolocation.clearWatch(id);
  }
  pintaMapa(position);
}

 
/*const watchID = navigator.geolocation.watchPosition((position) => {
    console.log(position.coords.latitude, position.coords.longitude);
});
*/