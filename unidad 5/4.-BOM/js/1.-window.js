////////////////////////////////
/////////window object////////
////////////////////////////////


//reference to window object can be skipped at any method. window.open(url) == open(url)

///////////////////
//////methods//////
///////////////////

let url="https://www.mozilla.org";
let texto1=document.getElementById("texto1");
let timeoutID;
let demora=3000;
let demora2=1000;
let seconds;


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
        case "move":
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

/*
////setTimeout, setInterval and clearTimeout////
//setTimeout performs an action with a given delay
document.getElementById("settimeout").addEventListener("click", ()=>{
    setTimeout((funcion, destino, tiempo) => {
        texto1.textContent=`Ejemplo de cómo pasar parámetros a la función ${funcion} para que se vean en ${destino} a los ${tiempo} segundos`;
        texto1.classList.remove("dp_none");
    }, demora, "setTimeout", "pantalla", demora/1000);
});

//setInterval
//two paramethers: function and miliseconds to call the function. Optional paramethers, to be specified after the former, can be passed to the function
document.getElementById("setinterval").addEventListener("click", (evento)=>{
    timeoutID=setInterval(incrementSeconds, demora2, evento.currentTarget.textContent);
    texto1.classList.remove("dp_none");
    let seconds=0;
    function incrementSeconds(donde) {
        texto1.textContent = `Button "${donde}" clicked ${seconds} seconds ago`;
        seconds++;
    }
});

//clearTimeout method//
//removes the timeout by using the timestamp returned when calling setTimeout
document.getElementById("cleartimeout").addEventListener("click", (evento)=>{
    clearTimeout(timeoutID);    //cancels timeout
});


//open
//open an url in a new window
/*arguments: 
    1- the URL to load
    2- the window target (name or _self, _blank, _parent, and _top)
    3- a string of window features (properties of the new window as width, height, menubar, toolbar, location, status, scrollbar or resizable)*/

/*document.getElementById("open1").addEventListener("click", (evento)=>{
    let destino="_blank";
    let caracteristicas='height=600,width=800, resizable';
    window.open(url, destino, caracteristicas)
});

//let abreVentana=(url, destino, caracteristicas) => (window.open(url, destino, caracteristicas));
//abreVentana(url, '_blank', caracteristicas);
//abreVentana(url2, 'ventana', caracteristicas);


let espera=5000;
document.getElementById("open2").addEventListener("click", (evento)=>{
    let seconds = espera/1000;
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
});
// window.setTimeout(window.open (url), 2000); //doesn't work. setTimeout expects the first argument to be a function


//resize
//resizeBy adds or substract a certain amount of px to current window (if it is resizable)


document.getElementById("resizeBy").addEventListener("click", (evento)=>{
//    nuevaVentana=window.open(window.location.href, "unNombre", "height=1000, width=1500, resizable");
    nuevaVentana=window.open("", "unNombre", "height=1000, width=1500, resizable");
    setTimeout(() => {
    nuevaVentana.resizeBy(-400,-300);
    }, 2000);
});

document.getElementById("resizeTo").addEventListener("click", (evento)=>{
    nuevaVentana=window.open("", "unNombre", "height=1000, width=1500, resizable");
    setTimeout(() => {
        nuevaVentana.resizeTo(600, 900);
    }, 2000);
});

//move
document.getElementById("mueve_ventana").addEventListener("click", (evento)=>{
    nuevaVentana=window.open("", "unNombre", "height=800, width=1000, resizable");
    setTimeout(() => {
        nuevaVentana.moveTo(500, 500);
    }, 2000);
});

//close
document.getElementById("cierra_ventana").addEventListener("click", (evento)=>{
    nuevaVentana=window.open("", "unNombre", "height=1000, width=1500, resizable");
    setTimeout(() => {
        nuevaVentana.close();
    }, 2000);
});*/

//alert
document.getElementById("muestra_mensaje").addEventListener("click", (evento)=>{
    window.alert("esto es un mensaje");
});


//confirm
//shows a confirmation window with two buttons, ok or cancel Returns true or false
document.getElementById("muestra_confirmacion").addEventListener("click", (evento)=>{
    let opcion=window.confirm("¿Está seguro de que desea borrarlo?");
    opcion ? alert ("vamos a borrarlo") : alert ("no lo borramos");
});

//prompt
//shows an input field. A default text can be provided
document.getElementById("pide_datos").addEventListener("click", (evento)=>{
    let nombre=window.prompt("Dígame su nombre", "nombre");
    let edad=Number(window.prompt("Dígame su edad","edad"));
});


///////////////////////
///////properties//////
///////////////////////
let texto_propiedades=document.getElementById("texto_propiedades");
document.getElementById("show_window_properties_button").addEventListener("click", (evento)=>{
    texto_propiedades.innerHTML=`<br>window.innerHeight: ${window.innerHeight}
                                <br>window.innerWidth: ${window.innerWidth}
                                <br>window.location: ${window.location}
                                <br>window.document: ${window.document}
                                <br>window.screen.availHeight: ${window.screen.availHeight}
                                <br>window.screen.availWidth: ${window.screen.availWidth}
                                <br>window.screen.height: ${window.screen.height}
                                <br>window.screen.width: ${window.screen.width}
                                <br>window.screen.colorDepth: ${window.screen.colorDepth}
                                <br>window.screen.orientation.type: ${window.screen.orientation.type}
                                <br>window.navigator.userAgent: ${window.navigator.userAgent}
                                <br>window.navigator.cookieEnabled: ${navigator.cookieEnabled}
                                <br>window.navigator.geolocation: ${navigator.geolocation}
                                <br>window.navigator.language: ${navigator.language}
                                <br>window.navigator.clipboard: ${navigator.clipboard}
                                <br>window.navigator.permissions: ${navigator.permissions}                                
                                `;
    texto_propiedades.classList.remove("dp_none");
    document.documentElement.scrollTo(0, document.documentElement.scrollHeight);
});


///////////////
////history////
///////////////
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


/*
console.log (window.navigator.userAgent);

//useful when offering functionality depending on the web broser
//there's no guarantee that the browser agent is indeed the one advertised by this property.
//Some browsers allow users to modify useragent to pretend they are using another browser
//therefore, you can't rely on detecting user browser this way
if (window.navigator.userAgent.includes("Chrome")){
    //do something
}

//it is better to try to detect the funcionality needed (capability detection)
if( typeof window.addEventListener === 'function' ) {
    // let's use addEventListener
} else {
    // addEventListener is not supported, use another way
}*/


/*
//clipboard
//returns an object to read and write to system clipboard interacting with clipboard API
//we'll talk about it in a later unit
navigator.clipboard
.readText()
.then(    //this is a "promise". we'll talk about it in a later unit
  (clipText) => (document.querySelector(".cliptext").innerText = clipText),
);


//permissions
//returns an object that can be used to query and update permission status of APIs covered by the Permissions API. 
//we'll talk about it in a later unit
navigator.permissions.query({ name: "geolocation" }).then((result) => {
  if (result.state === "granted") {
    showMap();
  } else if (result.state === "prompt") {
    showButtonToEnableMap();
  }
  // Don't do anything if the permission was denied.
});*/

//////////////////////////////////////////////
//one eventlistener event delegation version//
//////////////////////////////////////////////
/*let delay=3000;
let caja_texto=document.getElementById("muestra_texto");
let segundos=0;
let delay2=1000;
let interval_ID;
let window_ID;

let url="http://127.0.0.1:50075/html/window.htm";
document.getElementById("form1").addEventListener("click", (evento)=>{
    evento.preventDefault();
    switch (evento.target.id){
        case "settimeout":
            setTimeout ( (donde, retraso)=>{
                caja_texto.textContent=`estoy metiendo un texto en ${donde} tras ${retraso} segundos`;
                caja_texto.classList.remove("dp_none");
            }, 1000, "un párrafo", delay/1000);
            break;
        case "setinterval":
            caja_texto.classList.remove("dp_none");
            interval_ID=setInterval((texto)=>{
                caja_texto.textContent=`button ${texto} pressed ${segundos} secs ago`;
                segundos++;
            }, delay2, evento.target.textContent);            
            break;
        case "stopinterval":
            clearTimeout(interval_ID);
            break;
        case "open":
                let destino="_blank";
                let parametros="height=600, widht=500, resizable";
                window_ID=window.open(url, destino, parametros);
            break;
        case "close":
                setTimeout(()=>{
                    window_ID.close();
                }, 3000);
            break;
        case "resizeTo":
            window_ID.resizeTo(700, 600);
            break;
        case "resizeBy":
            window_ID.resizeBy(-100, 200);
            break;
        case "move":
            window_ID.moveTo(700, 500);
            break;
        case "confirm":
            let opcion=window.confirm("¿Está seguro?");
            opcion ? window.alert("ha dicho que sí") : window.alert("ha dicho que no");
            break;
        case "prompt":
            let edad=window.prompt("¿qué edad tiene", "edad");
            break;
        case "propiedades":
            caja_texto.classList.remove("dp_none");
            caja_texto.textContent=`
                ${window.innerHeight}
                ${window.innerWidth}
                ${window.location}
                ${window.screen.height}
                ${window.screen.width}`;
            break;
    }
});
*/