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
document.addEventListener("click", evento => {
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
        //let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);    // allows to switch mousedown to onMousedown
        this[event.type]();
    }

    mousedown(){
        button_object2.innerHTML = "Mouse button pressed";
    }

    mouseup(){
        button_object2.innerHTML += "...and released.";
    }

/*    onMousedown() {
        button_object2.innerHTML = "Mouse button pressed";
    }

    onMouseup() {
        button_object2.innerHTML += "...and released.";
    }*/
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

infoEvento.addEventListener("click", (evento) => {
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
        //alternative:     elem.onclick = this.onClick.bind(this); 
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
document.addEventListener('contextmenu', evento => {
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


/////////////////////////
////Event propagation////
/////////////////////////
//event delegation exists thanks to the propagation mechanism

//Example 1: Defining eventhandlers only for bubbling phase
//let's add event listeners all the way up on ancestors of a paragraph untill its section for bubbling phase
// //there's no way of selecting a parent contanier AND all its children at the same CSS selector. Therefore, two selectors have to be used
let seccion=document.getElementById("bubbling_phase");
seccion.addEventListener('click', (evento)=>{
    console.log("Fase de burbujeo: El evento ha llegado a "+evento.currentTarget.tagName+", pero lo lanzó "+evento.target.tagName);
});

let elementos=document.querySelectorAll("#bubbling_phase *");
for (let elemento of elementos){
    elemento.addEventListener('click', (evento) =>{
        console.log("Fase de burbujeo: El evento ha llegado a "+evento.currentTarget.tagName+", pero lo lanzó "+evento.target.tagName);
    });
}


//Example 2: Defining eventhandlers only for capturing phase
//let's add event listeners all the way up on ancestors of a paragraph untill its section for both phases: capturing 
seccion=document.getElementById("capturing_phase");
seccion.addEventListener('click', (evento)=>{
    console.log("Fase de captura: El evento ha llegado a "+evento.currentTarget.tagName+", pero lo lanzó "+evento.target.tagName);
}, {capture:true}); //using true is equivalent to {capture:true}. it can be used with once:true to remove after using for the first time {capture:true, once:true}

elementos=document.querySelectorAll("#capturing_phase *");
for (let elemento of elementos){
    elemento.addEventListener('click', (evento) =>{
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
    elemento.addEventListener('click', (evento) =>{
        console.log("Fase de burbujeo: El evento ha llegado a "+evento.currentTarget.tagName+", pero lo lanzó "+evento.target.tagName);
    });
    elemento.addEventListener('click', (evento) =>{
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
//Capturing an event just on a parent element
objetivo=document.getElementById("event_delegation");
objetivo.addEventListener('click', (evento)=>{
    console.log ("Burbujeo: evento capturado por "+evento.currentTarget.tagName+", pero lanzado en "+evento.target.tagName);
});


//Example 6: Event delegatin: capturing a click event at table level
let selectedTd;
document.getElementById("tabla1").addEventListener('click', (evento)=>{
    let celdaPinchada = evento.target.closest('td'); // If an element inside td is clicked, it returs the closest td  parent element. It allows to select td despide of clicking on a image or a text inside the table cell
    if (celdaPinchada){     // if there's a td parend (the closest element is not null)
        if (selectedTd)
            selectedTd.classList.toggle("highlight");
        selectedTd=celdaPinchada;
        celdaPinchada.classList.toggle("highlight");
    } 
});

//////////////////////////
////Most common events////
//////////////////////////

//Example 1: mouseover and mouseout events
objetivo=document.getElementById("tabla2");
objetivo.addEventListener('mouseover', (evento)=>{
    evento.target.style.background="red";
});
objetivo.addEventListener('mouseout', (evento)=>{
    evento.target.style.background="";
});
objetivo.addEventListener('click', (evento)=>{
    evento.target.style.background="green";
});


//Example 2: pointer events
document.getElementById("caja_pointerup").addEventListener('pointerup',  mensajes_puntero);
document.getElementById("caja_pointerdown").addEventListener('pointerdown', mensajes_puntero);
document.getElementById("caja_pointermove").addEventListener('pointermove', mensajes_puntero);

function mensajes_puntero (evento){
    let nombre_destino="caja_"+evento.type;
    let caja_texto_form=document.getElementById(nombre_destino);
    caja_texto_form.innerHTML+="Event:"+evento.type+" Pointer type:"+evento.pointerType+" isprimary:"+evento.isPrimary+" PointerID:"+evento.pointerId+"<br>";
    caja_texto_form.scrollTo(0, caja_texto_form.scrollHeight);
}


//Example 3: keyboard events
objetivo=document.getElementById("introduccion_texto");
objetivo.addEventListener('keydown', mensajes_teclado);
objetivo.addEventListener('keyup', mensajes_teclado);

function mensajes_teclado(evento){
    let nombre_destino="caja_"+evento.type;
    caja_texto_form=document.getElementById(nombre_destino);
    caja_texto_form.innerHTML+="Event:"+evento.type+" physical key code:"+evento.code+" Character:"+evento.key+"<br>";
    caja_texto_form.scrollTo(0, caja_texto_form.scrollHeight);
}

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
//focus and blur events do not propagate in bubbling phase. Two options to avoid declaring an eventhandler for each form input:
//  1.-They propagate at capture phase, so declare them at that phase by using {capture:true}
//  2.- Add focusin and focusout events with addEventListener. They are the same as focus and blur, but the former propagates on bubbling phase.

formulario.addEventListener("focus", (evento)=>{
    caja_texto_form.innerHTML+="<br>Event of type "+evento.type+" at field "+evento.target.name;
    caja_texto_form.scrollTo(0, caja_texto_form.scrollHeight);
}, {capture:true});

formulario.addEventListener("blur", (evento)=>{
    caja_texto_form.innerHTML+="<br>Event of type "+evento.type+" at field "+evento.target.placeholder;
    caja_texto_form.scrollTo(0, caja_texto_form.scrollHeight);

    if (!evento.target.value){  //if the input field is empty
        evento.target.classList.add("borde_rojo");
        evento.target.classList.remove("borde_verde");
    }else{
        evento.target.classList.add("borde_verde");
        evento.target.classList.remove("borde_rojo");
    }

    if (evento.target.name=="nombre"){
        if (evento.target.value!="perico"){
        console.log ("usted se llama perico, corríjalo");
        objetivo=document.getElementById("error");
        objetivo.hidden = !objetivo.hidden;
        evento.target.focus();  //not working on firefox
        }else{
            objetivo=document.getElementById("error");
            objetivo.hidden = !objetivo.hidden;
        }
    }
}, {capture:true});

//it is triggered every time the user change any value
formulario.addEventListener("input", registra);

//it is triggered when the element has finished changing
formulario.addEventListener("change", registra);

formulario.addEventListener("copy", noPermitido);
formulario.addEventListener("cut", noPermitido);
formulario.addEventListener("paste", registra);

//a form can be submitted by using a submit button or by pressing enter when certain form elements have focus
formulario.addEventListener("submit", registra);

function noPermitido(evento){
    evento.preventDefault();
    alert (evento.type+" is not allowed");
    registra(evento);
};

function registra(evento){
    caja_texto_form.innerHTML+="<br>Event of type "+evento.type+" at field "+evento.target.placeholder;
    caja_texto_form.scrollTo(0, caja_texto_form.scrollHeight);
}

////Changing stylesheet depending on a select field////
formulario.elements.selector_color.addEventListener('change', (event)=>{
  let hoja=document.querySelector("head :last-child");
  if (hoja.rel=="stylesheet")
    hoja.href="../css/"+formulario.elements.selector_color.options[formulario.elements.selector_color.selectedIndex].value;
  else{
    //let head = document.querySelector('head');
    let hoja_estilos = document.createElement('link');
    hoja_estilos.rel = 'stylesheet';
    hoja_estilos.type = 'text/css';
    hoja_estilos.href = "../css/"+formulario.elements.selector_color.options[formulario.elements.selector_color.selectedIndex].value;
    hoja.insertAdjacentElement("afterend", hoja_estilos);
  }
});


// Example 6: webpage events
caja_texto_pagina=document.getElementById("caja_eventos_pagina");
window.addEventListener("DOMContentLoaded", mensaje)
window.addEventListener("load", mensaje);

function mensaje (evento){
    caja_texto_pagina.innerHTML+="<br>Event "+evento.type+" finished at "+evento.timeStamp+" ms";
    caja_texto_pagina.scrollTo(0, caja_texto_pagina.scrollHeight);
};



////////////////////////////////////
////dynamic loading of an script////
////////////////////////////////////
function cargarScript(src, callback) {
    var script = document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    script.onload = callback;  // Ejecutar el callback cuando se haya cargado el script
    document.head.appendChild(script);  // Añadir el script al head
}

// Ejemplo de cómo cargar jQuery dinámicamente
document.getElementById('cargarScript').onclick = function() {
    cargarScript('https://code.jquery.com/jquery-3.6.0.min.js', function() {
        console.log('jQuery ha sido cargado con éxito');
        // Probar que jQuery funciona
        $('body').css('background-color', 'lightblue');  // Cambiar el color de fondo como prueba
    });
};