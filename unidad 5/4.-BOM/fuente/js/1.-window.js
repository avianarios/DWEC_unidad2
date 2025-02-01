import mostrarMensaje from './mostrarMensajes.js';

// Ejemplo de interacción con los botones

document.getElementById('settimeout').addEventListener('click', ()=>{
    let segundos=2;
    setTimeout(()=>{
        mostrarMensaje(`¡Mensaje después de ${segundos}!`, "mensajeTemporizacion");
    }, segundos*1000);
});

// Código para el contador con setInterval
document.getElementById('setinterval').addEventListener('click', ()=>{
    let count = 0;
    const counter = setInterval(()=>{
        count++;
        // Mostrar el contador usando la función mostrarMensaje
        mostrarMensaje(`Contador: ${count}`, 'mensajeTemporizacion', false); // Llama a mostrarMensaje sin ocultar
    }, 1000);

    // Detener el contador cuando se haga clic en el botón 'cleartimeout'
    document.getElementById('cleartimeout').addEventListener('click', ()=>{
        clearInterval(counter);
        // Puedes mostrar un mensaje cuando el contador se detiene
        mostrarMensaje('Contador detenido', 'mensajeTemporizacion', true); // Mostrar mensaje de detener
    });
});



document.getElementById('open1').addEventListener('click', ()=>{
    window.open('https://www.example.com', '_blank', 'width=600,height=400');
});

document.getElementById('open2').addEventListener('click', ()=>{
    setTimeout(()=>{
        window.open('https://www.example.com', '_blank', 'width=600,height=400');
    }, 2000);
});

document.getElementById('resizeBy').addEventListener('click', ()=>{
    window.resizeBy(200, 200);
});

document.getElementById('resizeTo').addEventListener('click', ()=>{
    window.resizeTo(800, 600);
});

document.getElementById('moveTo').addEventListener('click', ()=>{
    window.moveTo(200, 100);
});

document.getElementById('close').addEventListener('click', ()=>{
    window.close();
});

document.getElementById('muestra_mensaje').addEventListener('click', ()=>{
    alert('Este es un mensaje de alerta');
});

document.getElementById('muestra_confirmacion').addEventListener('click', ()=>{
    const confirmation = confirm('¿Estás seguro?');
    if (confirmation) {
        mostrarMensaje('¡Confirmado!', 'mensajeInteraccion'); // Mostrar mensaje de detener
    } else {
        mostrarMensaje('¡Cancelado!', 'mensajeInteraccion'); // Mostrar mensaje de detener
    }
});

document.getElementById('pide_datos').addEventListener('click', ()=>{
    const nombre=prompt('¿Cuál es tu nombre?');
    mostrarMensaje(`¡Hola, ${nombre}`, 'mensajeInteraccion'); // Mostrar mensaje de detener
});

window.addEventListener("resize", actualizarParametros);
window.addEventListener("load", actualizarParametros);

function actualizarParametros(){
    document.getElementById("innerHeight").textContent = window.innerHeight;
    document.getElementById("innerWidth").textContent = window.innerWidth;
    document.getElementById("outerHeight").textContent = window.outerHeight;
    document.getElementById("outerWidth").textContent = window.outerWidth;
    document.getElementById("screenX").textContent = window.screenX;
    document.getElementById("screenY").textContent = window.screenY;
}