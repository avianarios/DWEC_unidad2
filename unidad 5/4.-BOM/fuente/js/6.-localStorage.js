import mostrarMensaje from './mostrarMensajes.js';

// ===== Sección para datos simples (clave-valor) =====
document.getElementById("formularioSimple").addEventListener("submit", (event) => {
    event.preventDefault();
    const clave = document.getElementById("claveSimple").value;
    const valor = document.getElementById("valorSimple").value;
    localStorage.setItem(clave, valor);
    mostrarMensaje(`Datos guardados: Clave = "${clave}", Valor = "${valor}"`, "mensajeSimples");
});

document.getElementById("eliminarSimple").addEventListener("click", () => {
    const clave = document.getElementById("claveSimple").value;
    if (clave) {
        localStorage.removeItem(clave);
        mostrarMensaje(`Clave "${clave}" eliminada.`, "mensajeSimples");
    } else {
        mostrarMensaje("Por favor, introduce una clave para eliminar.", "mensajeSimples");
    }
});

// Leer datos simples
document.getElementById("leerSimple").addEventListener("click", () => {
    const clave = document.getElementById("claveSimple").value;
    if (clave) {
        const valor = localStorage.getItem(clave);
        if (valor) {
            mostrarMensaje(`Valor almacenado para "${clave}": ${valor}`);
        } else {
            mostrarMensaje(`No hay ningún valor almacenado para "${clave}".`, "mensajeSimples");
        }
    } else {
        mostrarMensaje("Por favor, introduce una clave para leer.", "mensajeSimples");
    }
});

// ===== Sección para objetos (JSON) =====
document.getElementById("formularioObjeto").addEventListener("submit", (event) => {
    event.preventDefault();
    const clave = document.getElementById("claveObjeto").value;
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const email = document.getElementById("email").value;

    // Crear un objeto con los datos del formulario
    const objeto = {
        nombre: nombre,
        edad: edad,
        email: email
    };

    // Convertir el objeto a JSON y guardarlo en localStorage
    localStorage.setItem(clave, JSON.stringify(objeto));
    mostrarMensaje(`Objeto guardado con clave "${clave}": ${JSON.stringify(objeto, null, 2)}`, "mensajeObjetos");
});

document.getElementById("eliminarObjeto").addEventListener("click", () => {
    const clave = document.getElementById("claveObjeto").value;
    if (clave) {
        localStorage.removeItem(clave);
        mostrarMensaje(`Clave "${clave}" eliminada.`, "mensajeObjetos");
    } else {
        mostrarMensaje("Por favor, introduce una clave para eliminar.", "mensajeObjetos");
    }
});

// Leer objetos
document.getElementById("leerObjeto").addEventListener("click", () => {
    const clave = document.getElementById("claveObjeto").value;
    if (clave) {
        const valor = localStorage.getItem(clave);
        if (valor) {
            const objeto = JSON.parse(valor);
            mostrarMensaje(`Objeto almacenado para "${clave}": ${JSON.stringify(objeto, null, 2)}`, "mensajeObjetos");
        } else {
            mostrarMensaje(`No hay ningún valor almacenado para "${clave}".`, "mensajeObjetos");
        }
    } else {
        mostrarMensaje("Por favor, introduce una clave para leer.", "mensajeObjetos");
    }
});