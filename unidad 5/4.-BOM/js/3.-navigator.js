/*
console.log (window.navigator.userAgent);
//useful when offering functionality depending on the web broser
//there's no guarantee that the browser agent is indeed the one advertised by this property.
//Some browsers allow users to modify useragent to pretend they are using another browser
//therefore, you can't rely on detecting user browser this way
if (window.navigator.userAgent.includes("Chrome")){
    //do something
}

//it is better to try to detect the funcionality needed (capability detection)
if( typeof window.addEventListener === 'function' ) {
    // let's use addEventListener
} else {
    // addEventListener is not supported, use another way
}*/


// Propiedades del objeto navigator
document.getElementById("userAgent").textContent = navigator.userAgent;
document.getElementById("language").textContent = navigator.language;
document.getElementById("languages").textContent = navigator.languages.join(", ");
document.getElementById("cookieEnabled").textContent = navigator.cookieEnabled ? "Sí" : "No";
document.getElementById("online").textContent = navigator.onLine ? "Sí" : "No";
document.getElementById("hardwareConcurrency").textContent = navigator.hardwareConcurrency;
document.getElementById("deviceMemory").textContent = navigator.deviceMemory || "No disponible";

if (navigator.connection) {
    document.getElementById("connectionType").textContent = navigator.connection.effectiveType;
    document.getElementById("connectionSpeed").textContent = navigator.connection.downlink;
} else {
    document.getElementById("connectionType").textContent = "No soportado";
    document.getElementById("connectionSpeed").textContent = "No soportado";
}

// Información de userAgentData
if (navigator.userAgentData) {
    document.getElementById("uaBrands").textContent = navigator.userAgentData.brands.map(b => `${b.brand} (${b.version})`).join(", ");
    document.getElementById("uaPlatform").textContent = navigator.userAgentData.platform;
    document.getElementById("uaMobile").textContent = navigator.userAgentData.mobile ? "Sí" : "No";

    navigator.userAgentData.getHighEntropyValues(["architecture", "platformVersion"])
        .then((data) => {
            document.getElementById("uaArchitecture").textContent = data.architecture || "No disponible";
            document.getElementById("uaPlatformVersion").textContent = data.platformVersion || "No disponible";
        });
} else {
    document.getElementById("uaBrands").textContent = "No soportado";
    document.getElementById("uaPlatform").textContent = "No soportado";
    document.getElementById("uaMobile").textContent = "No soportado";
    document.getElementById("uaArchitecture").textContent = "No soportado";
    document.getElementById("uaPlatformVersion").textContent = "No soportado";
}

// Geolocalización
document.getElementById("getLocation").addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                document.getElementById("latitude").textContent = position.coords.latitude;
                document.getElementById("longitude").textContent = position.coords.longitude;
            },
            (error) => {
                alert("Error al obtener la ubicación: " + error.message);
            }, { enableHighAccuracy: true }
        );
    } else {
        alert("Geolocalización no soportada en este navegador.");
    }
});


//Mapa de leaflet
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
//    muestraCaracterísticas(position);
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



// Portapapeles
document.getElementById("copyText").addEventListener("click", () => {
    navigator.clipboard.writeText("¡Hola, mundo!")
        .then(() => {
            document.getElementById("clipboardText").textContent = "Texto copiado: ¡Hola, mundo!";
        })
        .catch(() => {
            alert("Error al copiar texto.");
        });
});

document.getElementById("readText").addEventListener("click", () => {
    navigator.clipboard.readText()
        .then((text) => {
            document.getElementById("clipboardText").textContent = "Texto leído: " + text;
        })
        .catch(() => {
            alert("Error al leer texto.");
        });
});

// Vibración
document.getElementById("vibrate").addEventListener("click", () => {
    if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200]); // Vibra dos veces
    } else {
        alert("Vibración no soportada en este dispositivo.");
    }
});