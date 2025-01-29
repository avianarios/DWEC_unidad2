//loading a script dynamically when the user gets to the bottom of the window when doing scroll

window.addEventListener('scroll', () => {
    const alturaDocumento = document.documentElement.scrollHeight;  // Altura total del documento
    const alturaVentana = window.innerHeight;   // Altura de la ventana visible (viewport)
    const desplazamientoActual = window.scrollY || document.documentElement.scrollTop;  // Desplazamiento actual desde el top de la página

    // Comprobamos si el desplazamiento llegó al final
    if (desplazamientoActual + alturaVentana >= alturaDocumento - 10) {
        cargarScript('https://code.jquery.com/jquery-3.7.1.min.js', ()=>{
            console.log('jQuery ha sido cargado con éxito');
            // Probar que jQuery funciona
            $('body').css('background-color', 'lightcoral');  // Cambiar el color de fondo como prueba
        });
    }
});

function cargarScript(src, callback) {
    var script = document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    script.addEventListener('load', callback);  // Ejecutar el callback cuando se haya cargado el script
    //    script.onload = callback;  // Ejecutar el callback cuando se haya cargado el script
    document.head.appendChild(script);  // Añadir el script al head
}