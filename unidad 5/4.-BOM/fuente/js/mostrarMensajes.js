// Función para mostrar mensajes
export default function mostrarMensaje(mensaje, donde, ocultar=true) {
    const mensajeElemento = document.getElementById(donde);
    mensajeElemento.innerHTML = mensaje; // Usamos innerHTML para renderizar el contenido HTML
    mensajeElemento.classList.add("mostrar"); // Mostrar el mensaje
  
    // Ocultar el mensaje después de 6 segundos con efecto de desvanecimiento
    if (ocultar){
        setTimeout(() => {
            mensajeElemento.classList.add("oculto");
            setTimeout(() => {
                mensajeElemento.classList.remove("mostrar");
            }, 1000); // Espera a que termine la animación antes de quitar la clase
        }, 6000);
        mensajeElemento.classList.remove("oculto");
    }
}