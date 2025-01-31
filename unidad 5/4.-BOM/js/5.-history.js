// Mostrar la longitud del historial
console.log('history.length:', history.length);

// Probar history.state
history.pushState({ page: 1 }, "Página 1", "?page=1");
console.log('history.state después de pushState:', history.state);

// Probar replaceState
history.replaceState({ page: 2 }, "Página 2", "?page=2");
console.log('history.state después de replaceState:', history.state);

// Agregar una nueva entrada al historial
history.pushState({ page: 3 }, "Página 3", "?page=3");
console.log('history.state después de una nueva entrada de pushState:', history.state);


document.body.addEventListener("click", (evento)=>{
    switch (evento.target.id){
        case "back":
            window.history.back();
            break;
        case "forward":
            window.history.forward();
            break;
        case "go":
            window.history.go(parseInt(document.getElementById("posiciones").value));
            break;
    }
});