///////////////
////methods////
///////////////

let url="https://www.mozilla.org";
let texto1=document.getElementById("texto1");
let timeoutID;
let demora=3000;
let demora2=1000;

//Timing methods
//  -setTimeout
//  -setInterval
//  -clearTimeout

//Example 1: perform an action with a delay
// setTimeout performs an action with a delay
document.getElementById("settimeout").addEventListener("click", ()=>{
    setTimeout((funcion, destino, tiempo) => {
        texto1.textContent=`Ejemplo de cómo pasar parámetros a la función ${funcion} para que se vean en ${destino} a los ${tiempo} segundos`;
        texto1.classList.remove("dp_none");
    }, demora, "setTimeout", "pantalla", demora/1000);
});

//Example 2: call a function will repeatedly at the specified interval.
// setInterval (callback, delay, [param1, param2,...])
//function and miliseconds to call the function again. Optional paramethers, to be specified after the former, can be passed to the function
document.getElementById("setinterval").addEventListener("click", (evento)=>{
    let seconds=0;
    timeoutID=setInterval((donde)=>{
        texto1.textContent = `Button "${donde}" clicked ${seconds} seconds ago`;
        seconds++;
    }, demora2, evento.currentTarget.textContent);
    texto1.classList.remove("dp_none");
});

//Example 3: clearTimeout
//  removes the timeout by using the timestamp returned when calling setTimeout
document.getElementById("cleartimeout").addEventListener("click", (evento)=>{
    clearTimeout(timeoutID);    //cancels timeout
});


//window handling methods
//  -open
//  -resizeBy
//  -resizeTo
//  -move
//  -close

//Example 1: open
//open(URL, target, properties) opens an url in a new window
/*arguments: 
    1- the URL to load
    2- the window target (name or _self, _blank, _parent, and _top)
    3- a string of window features (properties of the new window as width, height, menubar, toolbar, location, status, scrollbar or resizable)*/

document.getElementById("open1").addEventListener("click", (evento)=>{
    let destino="_blank";
    let caracteristicas='height=600,width=800, resizable';
    window.open(url, destino, caracteristicas)
});

//Example 2: open two windows
//let abreVentana=(url, destino, caracteristicas) => (window.open(url, destino, caracteristicas));
//abreVentana(url, '_blank', caracteristicas);
//abreVentana(url2, 'ventana', caracteristicas);


//Example 3: open with delay
let espera=5000;
document.getElementById("open2").addEventListener("click", (evento)=>{
    let seconds = espera/1000;

    //muestra el contador
    let muestra_contador = document.getElementById('contador');
    muestra_contador.classList.toggle("dp_none");
    function incrementSeconds() {
        muestra_contador.textContent = "Opening window in " + seconds + " seconds.";
        seconds--;
        console.log (seconds);
        if (seconds==-1){
            clearInterval(cancelar_intervalo);
            muestra_contador.textContent="Window already opened";
        }
    }
    let cancelar_intervalo = setInterval(incrementSeconds, 1000);

    //abre la ventana
    window.setTimeout(() => {
        window.open (url);
    }, espera);
});
// window.setTimeout(window.open (url), 2000); //doesn't work. setTimeout expects the first argument to be a function


//Example 4: open a new window and resize it
//resizeBy(x,y) adds or substract a certain amount of px to current window (if it is resizable)
document.getElementById("resizeBy").addEventListener("click", (evento)=>{
//    nuevaVentana=window.open(window.location.href, "unNombre", "height=1000, width=1500, resizable");
    nuevaVentana=window.open("", "unNombre", "height=1000, width=1500, resizable");
    setTimeout(() => {
        nuevaVentana.resizeBy(-400,-300);
    }, 2000);
});

//Exmaple 5: open a new window and resize it to a certain size
//resizeTo(x,y) sets the window to a certain size
document.getElementById("resizeTo").addEventListener("click", (evento)=>{
    nuevaVentana=window.open("", "unNombre", "height=1000, width=1500, resizable");
    setTimeout(() => {
        nuevaVentana.resizeTo(600, 900);
    }, 2000);
});

//moveTo(x,y) moves the window to a certain position
//some browsers may not allow to move the window

document.getElementById("moveTo").addEventListener("click", (evento)=>{
    nuevaVentana=window.open("", "unNombre", "height=800, width=1000, resizable");
    setTimeout(() => {
        nuevaVentana.moveTo(500, 500);
    }, 2000);
});

//close
document.getElementById("close").addEventListener("click", (evento)=>{
    nuevaVentana=window.open("", "unNombre", "height=1000, width=1500, resizable");
    setTimeout(() => {
        nuevaVentana.close();
    }, 2000);
});


//user interaction methods
//  -alert
//  -confirm
//  -prompt

//Example 1: showing a message
//alert("msg")
document.getElementById("muestra_mensaje").addEventListener("click", (evento)=>{
    window.alert("esto es un mensaje");
});


//Example 2: confirm
//shows a confirmation window with two buttons, ok or cancel Returns true or false
document.getElementById("muestra_confirmacion").addEventListener("click", (evento)=>{
    let opcion=window.confirm("¿Está seguro de que desea borrarlo?");
    opcion ? alert ("vamos a borrarlo") : alert ("no lo borramos");
});

//Example 3: prompt
//shows an input field. A default text can be provided
document.getElementById("pide_datos").addEventListener("click", (evento)=>{
    let nombre=window.prompt("Dígame su nombre", "nombre");
    let edad=Number(window.prompt("Dígame su edad","edad"));
});


/*
let url="https://www.mozilla.org";
let texto1=document.getElementById("texto1");
let timeoutID;
let demora=3000;
let demora2=1000;
let seconds;

//window object can be skipped when using window methods and properties

document.body.addEventListener("click", (evento)=>{
    switch (evento.target.id){
        case "settimeout":
            setTimeout((funcion, destino, tiempo) => {
                texto1.textContent=`Ejemplo de cómo pasar parámetros a la función ${funcion} para que se vean en ${destino} a los ${tiempo} segundos`;
                texto1.classList.remove("dp_none");
            }, demora, "setTimeout", "pantalla", demora/1000);
            break;
        case "setinterval":
            seconds=0;
            timeoutID=setInterval((donde)=>{
                texto1.textContent = `Button "${donde}" clicked ${seconds} seconds ago`;
                seconds++;
            }, demora2, evento.currentTarget.textContent);
            texto1.classList.remove("dp_none");
            break;
        case "cleartimeout":
            clearTimeout(timeoutID);    //cancels timeout
            break;
        case "open1":
            let destino="_blank";
            let caracteristicas='height=600,width=800, resizable';
            window.open(url, destino, caracteristicas)
            break;
        case "open2":
            seconds = espera/1000;
            let muestra_contador = document.getElementById('contador');
            muestra_contador.classList.toggle("dp_none");
            function incrementSeconds() {
                muestra_contador.textContent = "Opening window in " + seconds + " seconds.";
                seconds--;
                console.log (seconds);
                if (seconds==-1){
                    clearInterval(cancelar_intervalo);
                    muestra_contador.textContent="Window already opened";
                }
            }
            let cancelar_intervalo = setInterval(incrementSeconds, 1000);
            window.setTimeout(() => {
                window.open (url);
            }, espera);
            break;
        case "resizeBy":
            nuevaVentana=window.open("", "unNombre", "height=1000, width=1500, resizable");
            setTimeout(() => {
              nuevaVentana.resizeBy(-400,-300);
            }, 2000);
            break;
        case "resizeTo":
            nuevaVentana=window.open("", "unNombre", "height=1000, width=1500, resizable");
            setTimeout(() => {
                nuevaVentana.resizeTo(600, 900);
            }, 2000);
            break;
        case "moveTo":
            nuevaVentana=window.open("", "unNombre", "height=800, width=1000, resizable");
            setTimeout(() => {
                nuevaVentana.moveTo(500, 500);
            }, 2000);
            break;
        case "close":
            nuevaVentana=window.open("", "unNombre", "height=1000, width=1500, resizable");
            setTimeout(() => {
                nuevaVentana.close();
            }, 2000);
            break;
    }

});
*/