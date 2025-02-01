import mostrarMensaje from './mostrarMensajes.js';

// Obtener las propiedades del objeto screen
document.getElementById("screenWidth").textContent = screen.width;
document.getElementById("screenHeight").textContent = screen.height;
document.getElementById("availWidth").textContent = screen.availWidth;
document.getElementById("availHeight").textContent = screen.availHeight;
document.getElementById("colorDepth").textContent = screen.colorDepth;
document.getElementById("pixelDepth").textContent = screen.pixelDepth;

// Comprobación y visualización de la orientación de la pantalla
if (screen.orientation) {
    document.getElementById("screenOrientation").textContent = screen.orientation.type;
} else {
    document.getElementById("screenOrientation").textContent = "No disponible";
}