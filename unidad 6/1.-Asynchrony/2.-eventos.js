import mostrarMensaje from './mostrarMensajes.js';


// Simulación de una operación síncrona larga
function calcularOperacionLarga() {
    console.log('Iniciando operación larga...');
    for (let i = 0; i < 1e6; i++) {  // Un ciclo largo para bloquear el hilo principal
        // Simulación de tarea intensiva
        console.log(i)
    }
    console.log('Operación larga terminada');
}

// Simulación de otra tarea síncrona más corta
function calcularOperacionCorta(){
    console.log('Iniciando tarea corta');
    for (let i = 0; i < 1e6; i++) {  // Una tarea más corta para permitir al usuario hacer clic
        // Esto es solo para simular trabajo que no bloquea tanto
    }
    console.log('Tarea corta terminada');
}

// Agregar un manejador de evento al botón
document.getElementById('boton').addEventListener('click', () => {
    console.log('¡Clic detectado!');
    setTimeout(() => {  // Usar setTimeout para simular una acción asíncrona
        mostrarMensaje("botón pinchado", "mensajeEvento");
    }, 0);
});

// Ejecutar la operación larga, que bloquea el hilo
calcularOperacionLarga();
calcularOperacionCorta();

