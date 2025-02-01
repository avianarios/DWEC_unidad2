import mostrarMensaje from './mostrarMensajes.js';

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
                mostrarMensaje("Error al obtener la ubicación: " + error.message, "mensajeGeolocalizacion")
            }, { enableHighAccuracy: true }
        );
    } else {
        mostrarMensaje("Geolocalización no soportada en este navegador.", "mensajeGeolocalizacion");
    }
});


// Portapapeles
document.getElementById("readText").addEventListener("click", () => {
    navigator.clipboard.readText()
        .then((text) => {
            document.getElementById("clipboardText").textContent = "Texto leído: " + text;
        })
        .catch(() => {
            mostrarMensaje("Error al leer el texto", "mensajePortapapeles");
        });
});

document.getElementById("writeText").addEventListener("click", () => {
    navigator.clipboard.writeText("¡Hola, mundo!")
        .then(() => {
            document.getElementById("clipboardText").textContent = "Texto copiado al portapapeles: '¡Hola, mundo!'";
        })
        .catch(() => {
            mostrarMensaje("Error al copiar texto", "mensajePortapapeles");
        });
});



// Vibración
document.getElementById("vibrate").addEventListener("click", () => {
    if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200]); // Vibra dos veces
    } else {
        mostrarMensaje("Vibración no soportada en este navegador.", "mensajeVibracion");
    }
});