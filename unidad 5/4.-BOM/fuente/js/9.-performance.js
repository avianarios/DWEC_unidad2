import mostrarMensaje from './mostrarMensajes.js';


// Ejemplo de uso del objeto performance
document.getElementById('startTestNow').addEventListener('click', function() {
    const start = performance.now();  // Marca el tiempo de inicio
    let sum = 0;

    // Realiza una operación para medir el tiempo de ejecución
    for (let i = 0; i < 1e5; i++) {
        sum += i;
    }

    for (let i = 0; i < 1e5; i++) {
        sum += i;
    }
    
    const end = performance.now();  // Marca el tiempo de finalización
    const duration = end - start;  // Calcula la duración

    // Muestra el resultado en la interfaz
    const results = document.getElementById('results');
    mostrarMensaje(`Duración de la operación: ${duration/1000} sg`, "mensajeResults");
});



document.getElementById("startTestMark").addEventListener("click", () => {
    // Usamos performance.mark() para marcar el inicio y fin de un bloque de código
    performance.mark('inicio');

    // Simulamos una operación (por ejemplo, un bucle o alguna acción)
    let sum;  // Definir la variable sum para evitar un error
    for (let i=0, sum=0; i < 1e5; i++) {
        console.log(sum);
        sum += i;
    }

    performance.mark('mitad'); // Marcamos la mitad

    for (let i=0, sum=0; i < 1e5; i++) {
        sum += i;
    }

    performance.mark('fin'); // Marcamos el fin

    // Medimos el tiempo transcurrido entre las marcas
    performance.measure('Duración de la primera mitad', 'inicio', 'mitad');
    performance.measure('Duración de la segunda mitad', 'mitad', 'fin');

    // Obtenemos las medidas
    const medidasInicioMitad = performance.getEntriesByName('Duración de la primera mitad');
    const medidasMitadFin = performance.getEntriesByName('Duración de la segunda mitad');

    // Calculamos la duración en segundos y mostramos los resultados
    const durationInicioMitad = medidasInicioMitad[0].duration / 1000; // Convertir de ms a s
    const durationMitadFin = medidasMitadFin[0].duration / 1000; // Convertir de ms a s

    // Mostrar los resultados
    mostrarMensaje(`La operación desde inicio hasta la mitad tardó: ${durationInicioMitad} segundos. La operación desde la mitad hasta el fin tardó: ${durationMitadFin} segundos.`, "mensajeResults");

    // Limpiamos las entradas de rendimiento para evitar residuos
    performance.clearMarks();
    performance.clearMeasures();
});
