import mostrarMensaje from './mostrarMensajes.js';

const setCookieBtn = document.getElementById("setCookie");
const getCookieBtn = document.getElementById("getCookie");
const deleteCookieBtn = document.getElementById("deleteCookie");
const cookieOutput = document.getElementById("cookieOutput");
const cookieList = document.getElementById("cookieList");


// Muestra todas las cookies
function listCookies() {
    const cookieList = document.getElementById("cookieList");

    if (document.cookie) {
        // Dividir las cookies en un array
        const cookies = document.cookie.split("; ");
        
        // Crear una tabla
        let table = "<table class='estilosTabla'><thead><tr><th>Nombre</th><th>Valor</th></tr></thead><tbody>";

        // Recorrer las cookies y añadir cada una como fila de la tabla
        cookies.forEach(cookie => {
            const [name, value] = cookie.split("=");
            table += `<tr><td>${decodeURIComponent(name)}</td><td>${decodeURIComponent(value)}</td></tr>`;
        });

        // Cerrar la tabla
        table += "</tbody></table>";

        // Mostrar la tabla en el contenedor
        mostrarMensaje(table, "cookieList", false);

    } else {
        mostrarMensaje("No hay cookies almacenadas", "cookieList")
    }
}



// Manejadores de eventos para los botones
document.getElementById("setCookie").addEventListener("click", ()=>{
    const name = document.getElementById("cookieName").value;
    const value = document.getElementById("cookieValue").value;
    const expiresDays = document.getElementById("cookieExpires").value || 7; // 7 días por defecto
    const maxAge = document.getElementById("cookieMaxAge").value || 60 * 60 * 24 * 7; // 7 días en segundos
    const path = document.getElementById("cookiePath").value || "/"; // Hacer accesible la cookie en todo el sitio
    const domain = document.getElementById("cookieDomain").value || location.hostname; // Usar el dominio actual
    const secure = document.getElementById("cookieSecure").checked; // Mantener como booleano
    const sameSite = document.getElementById("cookieSameSite").value || "Lax"; // "Lax" para evitar problemas en navegadores modernos


    if (!name || !value) {
        cookieOutput.textContent = "Nombre y valor son obligatorios";
        return;
    }

    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    if (expiresDays) {
        const date = new Date();
        date.setTime(date.getTime() + expiresDays * 24 * 60 * 60 * 1000);
        cookieString += `; expires=${date.toUTCString()}`;
    }

    if (maxAge) {
        cookieString += `; max-age=${maxAge}`;
    }
    
    if (path) {
        cookieString += `; path=${path}`;
    }
    
    if (domain) {
        cookieString += `; domain=${domain}`;
    }
    
    if (secure) {
        cookieString += `; Secure`;
    }
    
    if (sameSite) {
        cookieString += `; SameSite=${sameSite}`;
    }

    document.cookie = cookieString;
    mostrarMensaje(`Cookie ${cookieString} guardada correctamente`, "cookieOutput")
    listCookies(); // Asegurarse de que la lista se actualice
});

document.getElementById("getCookie").addEventListener("click", ()=>{
    const name = document.getElementById("cookieName").value;
    //Buscar el valor que haya en el campo de cookie
    if (name) {
        const cookies = document.cookie.split("; ");
        for (let cookie of cookies) {
            let [cookieName, cookieValue] = cookie.split("=");
            if (decodeURIComponent(cookieName) === name) {
                mostrarMensaje(`Nombre: ${cookieName} Valor: ${decodeURIComponent(cookieValue)}`, "cookieOutput")
                return;
            }
        }
        mostrarMensaje("Cookie no encontrada", "cookieOutput")
        listCookies(); // Mostrar lista actualizada después de leer
    }else{
        mostrarMensaje(`No hay valor en el nombre de la cookie`, "cookieOutput")
    }
});


document.getElementById("deleteCookie").addEventListener("click", ()=>{
    const name = document.getElementById("cookieName").value;
    if (name) {
        // Verificar si la cookie existe antes de intentar eliminarla
        const cookies = document.cookie.split("; ");
        let cookieExists = false;

        for (let cookie of cookies) {
            let [cookieName] = cookie.split("=");
            if (decodeURIComponent(cookieName) === name) {
                cookieExists = true;
                break;
            }
        }

        if (cookieExists) {
            // Intentamos eliminar la cookie en distintos niveles de path
            document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
            document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${location.pathname}`;
            mostrarMensaje(`Cookie '${name}' eliminada correctamente`, "cookieOutput");
        } else {
            mostrarMensaje(`La cookie '${name}' no existe`, "cookieOutput");
        }

        // document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
        // mostrarMensaje("Cookie eliminada correctamente", "cookieOutput");
        // listCookies(); // Asegurarse de que la lista se actualice después de eliminar
    }else{
        mostrarMensaje("Introduce el nombre de la cookie para eliminarla", "cookieOutput");
    }
});


document.querySelector("form").addEventListener("submit", evento=>{
    evento.preventDefault();
});


// Mostrar las cookies al cargar la página
listCookies();