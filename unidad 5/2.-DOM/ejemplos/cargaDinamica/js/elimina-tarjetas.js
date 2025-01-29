// Obtener el botón para eliminar las secciones con tarjetas
if (!document.getElementById("botonEliminar")) {

    const botonEliminar=document.createElement("button");
    botonEliminar.id="botonEliminar";
    botonEliminar.innerText="Eliminar productos";
    document.querySelector("main").append(botonEliminar);

    // Función para eliminar las secciones con tarjetas
    botonEliminar.addEventListener("click", () => {
    // Obtener todas las secciones dentro del contenedor
        const secciones = document.querySelectorAll(".contenedorTarjetas");
        secciones.forEach(seccion => {
            seccion.remove();  // Eliminar la sección
        });
    });
};
