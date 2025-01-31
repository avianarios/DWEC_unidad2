//Ejemplo 1: addig pages to the browser history
// pushState(Object, title, URL)

let pageNumber = 1;
document.getElementById("anyadir").addEventListener("click", () => {
    // Crear el objeto de estado para la nueva página
    const stateObject = { page: pageNumber, title: `Página ${pageNumber}` };
    // Añadir al historial con pushState
    history.pushState(stateObject, `Página ${pageNumber}`, `?page=${pageNumber}`);
    console.log(`Se añadió al historial: { page: ${pageNumber}, title: "Página ${pageNumber}"}`);
    pageNumber++;
});


//Example 2: moving along history
// back, forward y go
//go(n) moves n positions from the current one. If negative it goes backwards
document.getElementById("movimiento").addEventListener("click", (evento)=>{
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


//Example 3: showing history information
window.addEventListener('popstate', (evento) => {
    console.log('history.length:', history.length);
    document.getElementById("texto").innerText=history.state.title;
});