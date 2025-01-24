////////////////////////////////
////Attaching event handlers////
////////////////////////////////

//Example 1: Attaching one event handler
//node.addEventListener(event, callback); 
let cambiaColor = document.getElementById("cambiaClase");
const toggle = () => cambiaColor.classList.toggle("fondo-rojo");
cambiaColor.addEventListener("click", toggle);


//Example 2: Attaching two event handlers to the same element
let cambiaTxt=document.getElementById("cambiaTexto");
let contador=0;
cambiaTxt.addEventListener("click", ()=>{contador++});
cambiaTxt.addEventListener("click", ()=>{cambiaTxt.innerText="Veces pulsado:"+contador;});


// Example 3: Attaching an event handler to the document wich will be triggered when clicking at any button (thanks to bubbling) because of the CSS selector used in the condition: evento.target.matches("button")
document.addEventListener("click", evento=> {
    if (evento.target.matches("button")) {   //CSS selector
      console.log("Clicked Button")
    }
});

const li=document.createElement("li");
const newButton = document.createElement("button")
newButton.textContent="Attached button after creating event handlers";
li.appendChild(newButton);
let lugar_insercion=document.getElementById("lista_botones1");
lugar_insercion.insertAdjacentElement("beforeend", newButton);


//Example 4: Defining an event handler as an object
class EventManager {
    constructor(element) {
        if (!element){
            throw new Error("The element must be provided");
        }
        element.addEventListener('click', this.sendMessage);
    }
  
    sendMessage() {
      alert("Has hecho click en el botón");
    }
}

const boton1 = document.getElementById("eventhandler_object1");
try{
    const eventManager = new EventManager(boton1);
}catch(error){
    console.log(error.message)
}


//Example 5: Defining an event handler as an object
class Manejador {
    handleEvent(event) {
        this[event.type]();
    }

    mousedown(){
        button_object2.innerHTML = "Mouse button pressed";
    }

    mouseup(){
        button_object2.innerHTML += "...and released.";
    }
}
let menu = new Manejador();
let button_object2=document.getElementById("eventhandler_object2");
button_object2.addEventListener('mousedown', menu);
button_object2.addEventListener('mouseup', menu);


//////////////////////////////////
////Reading event information ////
//////////////////////////////////
// When an event occurs, the browser creates an event object, puts details into it and passes to the event handler
// What information? Depends on the event

//Example 1: Showing event information
// type -> type of event (click, keydown, etc.)
// target -> DOM element that triggered the event
// currentTarget -> DOM element that the event handler was assigned to
// isTrusted -> true when the user triggered it, false if the event was generated programmatically (e.g. by the dispatchEvent method).
// timeStamp -> provides the exact time (in milliseconds) at which the event occurred, since the execution of the web page started. It is useful to calculate the duration between two events or to manage events accurately.
// clientX / clientY -> in case of a mouse event, contain the coordinates of the mouse
// altKey -> returns true when alt key was pressed
// ctrlKey -> returns true when crtl key was pressed
// shiftKey -> returns true when shift key was pressed
// metaKey -> returns true when meta key was pressed


let infoEvento = document.getElementById("informacionEvento");
let texto_explicativo=document.getElementById("texto_coordenadas");

infoEvento.addEventListener("click", evento=> {
    if (texto_explicativo.classList.contains ("dp_none")){ texto_explicativo.classList.remove("dp_none"); }
    texto_explicativo.innerHTML="Button "+evento.button + " has been pressed<br>";
    texto_explicativo.innerHTML+="An event of type: "+evento.type + " has occurred at:" + evento.target+"<br> but was generated at"+evento.target+" at timestamp of "+evento.timeStamp +"<br> at coordinates X:"+evento.clientX+" Y:"+evento.clientY;
    ( evento.isTrusted ) ? texto_explicativo.innerHTML+="<br>Is a trusted event (launched by web browser)" : texto_explicativo.innerHTML+="Is not a trusted event (launched by programmer)";

    if (evento.altKey) texto_explicativo.innerHTML+="<br>alt Key pressed";
    if (evento.ctrlKey) texto_explicativo.innerHTML+="<br>control Key pressed";
    if (evento.shiftKey) texto_explicativo.innerHTML+="<br>shift Key pressed";
    if (evento.metaKey) texto_explicativo.innerHTML+="<br>meta Key pressed"; //MAC only
});


//Example 2: dataset can be used to assign event handler just once
// dataset -> returns the custom attributes data* of an HTML element like data-id, data-estado, data-accion, etc.
// in the HTML code, there must be a data-accion attribute called data-accion and its value must be save, load and search. It can be reached by using event.target.dataset.accion
class Menu {
    constructor(elem) {
        elem.addEventListener("click", this.onClick.bind(this));
        //bind(this) garantiza que el contexto de this dentro del manejador apunte a la instancia de la clase, no al elemento que disparó el evento.
    }
    
    save() {
        this.contenedor_texto.textContent="save button pressed";
    }

    load() {
        this.contenedor_texto.textContent="load button pressed";
    }

    search() {
        this.contenedor_texto.textContent="search button pressed";
    }

    onClick(event) {
        this.contenedor_texto=document.getElementById("texto_botones_accion");
        let action = event.target.dataset.accion;
        if (action) {
            this[action](); //calls the method that matches the name of the action in data-accion
        }
    };
}

let botones=document.getElementById("botones_accion");
new Menu(botones);


//Example 3: using dataset attribute
document.querySelector("#botones_accion").addEventListener('click', (event) => {
    if (event.target.dataset.contador) { // if the attribute exists...
      event.target.value++;
    }else{
        if (event.target.dataset.oculta){
            elem.hidden=!elem.hidden;
        }
    }
});


////////////////////////////////////
////preventing default behaviour////
////////////////////////////////////
//avoids the default action of an event. useful when you need to stop the behavior of the browser while the event keeps propagating
//evento.preventDefault()

//Example 1: Preventing the default action of a link
document.querySelector("a").addEventListener("click", function(event) {
    event.preventDefault();  // Evita que el enlace navegue
    alert("Me niego a mandarte allí");
});


//Example 2: Preventing the default action of the mouse right-click button
//this eventlistener is attached to the document, so it will be triggered when right-clicking anywhere in the document
document.addEventListener('contextmenu', evento=> {
    evento.preventDefault();        //removes default action when pressing right button
    let texto_explicativo=document.getElementById("texto_coordenadas");
    if (texto_explicativo.classList.contains ("dp_none")){ texto_explicativo.classList.remove("dp_none"); }
    texto_explicativo.innerHTML="Button "+evento.button + " has been pressed";
    alert("no pulses más el botón derecho");
    /*
    if (texto_explicativo.textContent.includes ("Button 0")){
        texto_explicativo.innerHTML=texto_explicativo.innerHTML.replace("Button 0", "Button 2");
    }else{
        if (!texto_explicativo.textContent.includes("Button 2"))
            texto_explicativo.innerHTML+="<br>Button "+evento.button + " has been pressed";
    }*/
});


///////////////////////////////
////Removing event listener////
///////////////////////////////
//only possible when using a named function
const texto_hover = document.getElementById("tituloHover");
texto_hover.addEventListener("mouseover", RespondMouseOver);

const boton_para_hover=document.getElementById("botonParaHover");
boton_para_hover.addEventListener("click", RespondClick);
 
function RespondMouseOver() {
    objetivo=document.getElementById("caja_hover");
    objetivo.hidden="";
    document.getElementById("caja_hover").innerHTML += "mouseover Event !!" + "<br>";
}
 
function RespondClick() {
    texto_hover.removeEventListener("mouseover", RespondMouseOver);
    boton_para_hover.textContent="Start listening for events again";
    document.getElementById("caja_hover").innerHTML = 'EventListener removed. Now mouseover event doesn\'t work !!';
}


//////////////////////////////////
////Propagation and delegation////
//////////////////////////////////
//event delegation exists thanks to the propagation mechanism

//Example 1: Defining eventhandlers only for bubbling phase
//let's add event listeners all the way up on ancestors of a paragraph untill its section for bubbling phase
// //there's no way of selecting a parent contanier AND all its children at the same CSS selector. Therefore, two selectors have to be used
let seccion=document.getElementById("bubbling_phase");
seccion.addEventListener('click', evento=>{
    console.log("Fase de burbujeo: El evento ha llegado a "+evento.currentTarget.tagName+", pero lo lanzó "+evento.target.tagName);
});

let elementos=document.querySelectorAll("#bubbling_phase *");
for (let elemento of elementos){
    elemento.addEventListener('click', evento=>{
        console.log("Fase de burbujeo: El evento ha llegado a "+evento.currentTarget.tagName+", pero lo lanzó "+evento.target.tagName);
    });
}


//Example 2: Defining eventhandlers only for capturing phase
//let's add event listeners all the way up on ancestors of a paragraph untill its section for both phases: capturing 
seccion=document.getElementById("capturing_phase");
seccion.addEventListener('click', evento=>{
    console.log("Fase de captura: El evento ha llegado a "+evento.currentTarget.tagName+", pero lo lanzó "+evento.target.tagName);
}, {capture:true}); //using true is equivalent to {capture:true}. it can be used with once:true to remove after using for the first time {capture:true, once:true}

elementos=document.querySelectorAll("#capturing_phase *");
for (let elemento of elementos){
    elemento.addEventListener('click', evento=>{
        console.log("Fase de captura: El evento ha llegado a "+evento.currentTarget.tagName+", pero lo lanzó "+evento.target.tagName);
    }, {capture:true});
}


//Example 3: Defining eventhandlers for both capturing and bubbling phase
seccion=document.getElementById("bubbling_and_capturing_phase");
seccion.addEventListener('click', function(evento){
    console.log("Fase de burbujeo: El evento ha llegado a "+evento.currentTarget.tagName+", pero lo lanzó "+evento.target.tagName);
});
seccion.addEventListener('click', function(evento){
    console.log("Fase de captura: El evento ha llegado a "+evento.currentTarget.tagName+", pero lo lanzó "+evento.target.tagName);
}, {capture:true}); //using true is equivalent to {capture:true}. it can be used with once:true to remove after using for the first time {capture:true, once:true}

elementos=document.querySelectorAll("#bubbling_and_capturing_phase *");
for (let elemento of elementos){
    elemento.addEventListener('click', evento=>{
        console.log("Fase de burbujeo: El evento ha llegado a "+evento.currentTarget.tagName+", pero lo lanzó "+evento.target.tagName);
    });
    elemento.addEventListener('click', evento=>{
        console.log("Fase de captura: El evento ha llegado a "+evento.currentTarget.tagName+", pero lo lanzó "+evento.target.tagName);
    }, {capture:true});
}

//fast way of adding event listeners to ALL elements, starting with window all the way down to the very last element at DOM
/*option 1: using function with names so eventlisteners can be removed */
/*function bubbling (evento){
    console.log("Fase de burbujeo: El evento ha llegado a "+evento.currentTarget.tagName+", pero lo lanzó "+evento.target.tagName);
}

function capturing(evento){
    console.log("Fase de captura: El evento ha llegado a "+evento.currentTarget.tagName+", pero lo lanzó "+evento.target.tagName);
}

for (let element of document.querySelectorAll("*")){
    element.addEventListener('click', bubbling); //it can be added {once:true}
    element.addEventListener('click', capturing, {capture:true});
}*/

/*option 2: using anonymous functions. Eventlisteners can't be removed later*/
/*for (let element of document.querySelectorAll("*")){
        element.addEventListener('click', evento=>{
        console.log("Fase de burbujeo: El evento ha llegado a "+evento.currentTarget.tagName+", pero lo lanzó "+evento.target.tagName);
    }); //it can be added {once:true}
    element.addEventListener('click', evento=>{
        console.log("Fase de captura: El evento ha llegado a "+evento.currentTarget.tagName+", pero lo lanzó "+evento.target.tagName);
    }, {capture:true});     //"{capture:true}" can be changed by just "true". {capture:true,once:true}
}*/

//Example 4: stop propagation
// stopPropagation() method stops the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.
function responder(evento){
    console.log("Fase de burbujeo: El evento ha llegado a "+evento.currentTarget.tagName+", pero lo lanzó "+evento.target.tagName);
}
document.getElementById("bubbling_and_capturing").addEventListener('click', responder);
document.getElementById("stop_bubbling").addEventListener('click', responder);
parrafo=document.querySelector("#stop_bubbling > p");
parrafo.addEventListener('click', evento=>{
    console.log("Parando la propagación en "+evento.currentTarget.tagName+".El evento no subirá por la cadena del DOM");
    evento.stopPropagation();
});


//Example 5: Event delegation
//An eventlistener is added to a parent element, so it will be triggered when clicking on any of its children avoiding the need of adding an eventlistener to each child
objetivo=document.getElementById("event_delegation");
objetivo.addEventListener('click', evento=>{
    console.log ("Burbujeo: evento capturado por "+evento.currentTarget.tagName+", pero lanzado en "+evento.target.tagName);
});


//Example 6: Event delegatin: capturing a click event at table level
let selectedTd;
document.getElementById("tabla1").addEventListener('click', evento=>{
    let celdaPinchada = evento.target.closest('td'); // If an element inside td is clicked, it returs the closest td  parent element. It allows to select td despide of clicking on a image or a text inside the table cell
    if (celdaPinchada){     // if there's a td parend (the closest element is not null)
        if (selectedTd)
            selectedTd.classList.toggle("highlight");
        selectedTd=celdaPinchada;
        celdaPinchada.classList.toggle("highlight");
    } 
});

/////////////////////
////Common events////
/////////////////////

//Example 1: mouse events
objetivo=document.getElementById("tabla2");

//mouseover event is triggered when the mouse pointer enters the element
objetivo.addEventListener('mouseover', evento=>{
    evento.target.style.background="red";
});

//mouseout event is triggered when the mouse pointer leaves the element
objetivo.addEventListener('mouseout', evento=>{
    evento.target.style.background="";
});

//click event is triggered when the element is clicked
objetivo.addEventListener('click', evento=>{
    evento.target.style.background="green";
});


//Example 2: pointer events
//pointer events are similar to mouse events, but they are more advanced and support pen and touch input
const mensajes_puntero=evento=>{
    let nombre_destino="caja_"+evento.type;
    let caja_texto_form=document.getElementById(nombre_destino);
    caja_texto_form.innerHTML+="Event:"+evento.type+" Pointer type:"+evento.pointerType+" isprimary:"+evento.isPrimary+" PointerID:"+evento.pointerId+"<br>";
    caja_texto_form.scrollTo(0, caja_texto_form.scrollHeight);
};

//pointerup event is triggered when the pointer is released
document.getElementById("caja_pointerup").addEventListener('pointerup',  mensajes_puntero);

//pointerdown event is triggered when the pointer is pressed
document.getElementById("caja_pointerdown").addEventListener('pointerdown', mensajes_puntero);

//pointermove event is triggered when the pointer is moved
document.getElementById("caja_pointermove").addEventListener('pointermove', mensajes_puntero);



//Example 3: keyboard events
const mensajes_teclado=evento=>{
    let nombre_destino="caja_"+evento.type;
    caja_texto_form=document.getElementById(nombre_destino);
    caja_texto_form.innerHTML+="Event:"+evento.type+" physical key code:"+evento.code+" Character:"+evento.key+"<br>";
    caja_texto_form.scrollTo(0, caja_texto_form.scrollHeight);
};

objetivo=document.getElementById("introduccion_texto");

//keydown event is triggered when a key is pressed
objetivo.addEventListener('keydown', mensajes_teclado);

//keyup event is triggered when a key is released
objetivo.addEventListener('keyup', mensajes_teclado);


/*Function to add an event listener dynamically
function addGlobalEventListener(type, selector, callback, options) {
  document.addEventListener(
    type,
    e => {
      if (e.target.matches(selector)) callback(e)
    },
    options
  )
}

//call to the previous function with a button
addGlobalEventListener(
  "click",
  ".btn",
  () => {
    console.log("Clicked Button")
  },
  { once: true }
)*/


//Example 4: scroll events
objetivo=document.getElementById("muestra_desplazamiento");
texto=document.getElementById("pixeles_desplazamiento");
objetivo.addEventListener('click', ()=>{
    texto.classList.toggle("oculto");
    if (objetivo.textContent.includes("show"))
        objetivo.textContent=objetivo.textContent.replace("show", "hide");
    else
        objetivo.textContent=objetivo.textContent.replace("hide", "show");
});

window.addEventListener('scroll', ()=>{
    texto.textContent = window.scrollY + 'px';
});


//Example 5: form events
let formulario=document.querySelector("form[name=form1]");
caja_texto_form=document.getElementById("caja_eventos_form");

const registra=evento=>{
    caja_texto_form.innerHTML+=`<br>Se ha lanzado el evento ${evento.type} en el campo ${evento.target.name}. El campo ${evento.target.name} tiene el valor ${evento.target.value}`;
    caja_texto_form.scrollTo(0, caja_texto_form.scrollHeight);
    console.log(`Se ha lanzado el evento ${evento.type} en el campo ${evento.target.name}. El campo ${evento.target.name} tiene el valor ${evento.target.value}`);
};

const noPermitido=evento=>{
    evento.preventDefault();
    alert (evento.type+" is not allowed");
    registra(evento);
};

//focusin event is triggered when an element receives focus
formulario.addEventListener("focusin", evento=>{
    registra(evento);
    evento.target.classList.toggle("focoCampoFormulario");  //this can be done by using input:focus at CSS, but it's just an example
});

//focusout event is triggered when an element loses focus
formulario.addEventListener("focusout", evento=>{
    registra(evento);
    evento.target.classList.toggle("focoCampoFormulario");  //this can be done by using input:focus at CSS, but it's just an example
});

//input event is triggered when the value of an input element is changed while it keeps focused
formulario.addEventListener("input", evento=>{
    registra(evento);
});

//change event is triggered when the value of an input element is changed and the element loses focus
formulario.addEventListener("change", registra);

//a form can be submitted by using a submit button or by pressing enter when certain form elements have focus
formulario.addEventListener("submit", registra);

//Changing stylesheet depending on a select field
formulario.elements.selector_color.addEventListener('change', event=> {
    const hoja = document.querySelector("[rel=stylesheet]:last-of-type");
    const colorSeleccionado = formulario.elements.selector_color.value; // Obtener directamente el valor seleccionado
    const nuevaHoja = "../css/" + colorSeleccionado;

    if (hoja) {
        hoja.href = nuevaHoja; // Cambiar directamente el href si ya existe una hoja de estilos
    } else {
        const nuevaHojaEstilos = document.createElement('link');
        nuevaHojaEstilos.rel = 'stylesheet';
        nuevaHojaEstilos.type = 'text/css';
        nuevaHojaEstilos.href = nuevaHoja;
        document.head.append(nuevaHojaEstilos); // Usar append para añadir la nueva hoja de estilos al head
    }
});


//Example 6: clipboard events
//copy event is triggered when the user copies the content of an element
document.body.addEventListener("copy", noPermitido);

//cut event is triggered when the user cuts the content of an element
document.body.addEventListener("cut", noPermitido);

//paste event is triggered when the user pastes the content of an element
document.body.addEventListener("paste", registra);


// Example 7: webpage events
caja_texto_pagina=document.getElementById("caja_eventos_pagina");

//DOMContentLoaded event is triggered when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading
window.addEventListener("DOMContentLoaded", mensaje)

//load event is triggered when the whole page has loaded, including all dependent resources such as stylesheets, images, and subframes
window.addEventListener("load", mensaje);

function mensaje (evento){
    caja_texto_pagina.innerHTML+="<br>Event "+evento.type+" finished at "+evento.timeStamp+" ms";
    caja_texto_pagina.scrollTo(0, caja_texto_pagina.scrollHeight);
};



////////////////////////////////////
////dynamic loading of an script////
////////////////////////////////////
// loading a script dynamically allows a script to be loaded at the time it is needed, not when the page loads. This can be useful for loading scripts that are not needed at the beginning, but at a specific time, reducing the initial page load time.
//This can be achieved by adding a script element to the head of the page with the src of the script to be loaded in response to an event, such as click, DomContentLoaded or scroll.

//Example 1: loading a script dynamically when clicking a button
let boton=document.querySelector("button");
boton.addEventListener("click", ()=>{
    const script=document.createElement("script");
    script.src="js/scriptSencillo.js";
    script.type="text/javascript";
    document.head.append(script);
});


//Example 2: loading a script dynamically when the user gets to the bottom of the window when doing scroll
//scroll event is triggered when the user scrolls the page
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

