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

//////////////////////////////////
////Reading event information ////
//////////////////////////////////
// When an event occurs, the browser creates an event object, puts details into it and passes to the event handler
// What information? Depends on the event

//Example 1: Showing event information
// type -> type of event (click, keydown, etc.)
// target -> DOM element that triggered the event
// currentTarget -> DOM element that the event handler was assigned to
// istrusted -> true when the user triggered it, false if the event was generated programmatically (e.g. by the dispatchEvent method).
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


//////////////////////
////preventDefault////
//////////////////////
//avoids the default action of an event. useful when you need to stop the behavior of the browser while the event keeps propagating

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
    /*
    if (texto_explicativo.textContent.includes ("Button 0")){
        texto_explicativo.innerHTML=texto_explicativo.innerHTML.replace("Button 0", "Button 2");
    }else{
        if (!texto_explicativo.textContent.includes("Button 2"))
            texto_explicativo.innerHTML+="<br>Button "+evento.button + " has been pressed";
    }*/
});



////Defining an event handler as an object////
//Besides a function, an event handler can be assigned by using an object. When an event occurs, its handleEvent method is called.
//example 1
class EventManager {
    constructor(element) {
      element.addEventListener('click', ()=>this.sendMessage());      //by using an arrow function, this references to the eventManager class allowing to call other methods within any method
    }
  
    sendMessage() {
      alert("Has hecho click en el botón");
    }
}
  
const button_object1 = document.getElementById("eventhandler_object1");
const eventManager = new EventManager(button_object1);


//example 2
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



////Using data attributes alongside objects to assign event handler just once////
//data attribute must be called data-accion (notice event.target.dataset.accion) and its value must be guardar, cargar and
class Menu {
    constructor(elem) {
      elem.onclick = this.onClick.bind(this); 
    }
// Si no se usa bind, el this de dentro del método hace referencia al elemento que provoca el evento y no a la clase.
// bind permite usar this para llamar a los métodos y propiedades de la clase
// funciona copiando la función que queremos ejecutar y pasándole por parámetro el elemento al que va a apuntar this.

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


  ////using data attributes////
document.addEventListener('click', (event) => {
    if (event.target.dataset.contador != undefined) { // if the attribute exists...
      event.target.value++;
    }
});

document.addEventListener('click', (event)=> {
    let id = event.target.dataset.oculta;
    if (!id) return;

    let elem = document.getElementById(id);

    elem.hidden = !elem.hidden;
});


////Removing event listener (hover this text)////
//only possible when using a function with a name, not a anonymous one
const texto_hover = document.getElementById("hoverPara");
texto_hover.addEventListener("mouseover", RespondMouseOver);

const boton_para_hover=document.getElementById("clickIt");
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


////Event propagation////
//let's add event listeners all the way up on ancestors of a paragraph untill its section for both phases: capturing and bubbling 
let seccion=document.getElementById("bubbling_and_capturing");
seccion.addEventListener('click', function(evento){
    console.log("Bubbling phase: Estoy en "+evento.currentTarget.tagName+" y el evento lo lanzó "+evento.target.tagName);
});
seccion.addEventListener('click', function(evento){
    console.log("Capturing phase: Estoy en "+evento.currentTarget.tagName+" y el evento lo lanzó "+evento.target.tagName);
}, {capture:true}); //using true is equivalent to {capture:true}. it can be used with once:true to remove after using for the first time {capture:true, once:true}

let elementos=document.querySelectorAll("#bubbling_and_capturing *");
for (let elemento of elementos){
    elemento.addEventListener('click', (evento) =>{
        console.log("Bubbling phase: Estoy en "+evento.currentTarget.tagName+" y el evento lo lanzó "+evento.target.tagName);
    });
    elemento.addEventListener('click', (evento) =>{
        console.log("Capturing phase: Estoy en "+evento.currentTarget.tagName+" y el evento lo lanzó "+evento.target.tagName);
    }, {capture:true});
}

//fast way of adding event listeners to ALL elements, starting with window all the way down to the very last element at DOM
/*option 1: using function with names so eventlisteners can be removed */
/*function bubbling (evento){
    console.log("Bubbling phase: Estoy en "+evento.currentTarget.tagName+", y el evento lo lanzó "+evento.target.tagName);
}

function capturing(evento){
    console.log("Capture phase: Estoy en "+evento.currentTarget.tagName+", y el evento lo lanzó "+evento.target.tagName);
}

for (let element of document.querySelectorAll("*")){
    element.addEventListener('click', bubbling); //it can be added {once:true}
    element.addEventListener('click', capturing, {capture:true});
}*/

/*option 2: using anonymous functions. Eventlisteners can't be removed later*/
/*for (let element of document.querySelectorAll("*")){
        element.addEventListener('click', evento=>{
        console.log("Bubbling phase: Estoy en "+evento.currentTarget.tagName+", y el evento lo lanzó "+evento.target.tagName);
    }); //it can be added {once:true}
    element.addEventListener('click', evento=>{
        console.log("Capture phase: Estoy en "+evento.currentTarget.tagName+", y el evento lo lanzó "+evento.target.tagName);
    }, {capture:true});     //"{capture:true}" can be changed by just "true". {capture:true,once:true}
}*/

//stop propagation
parrafo=document.querySelector("#stop_bubbling > p");
parrafo.addEventListener('click', evento=>{
    console.log("Parando la propagación en "+evento.currentTarget.tagName);
    evento.stopPropagation();
});


////Event delegation////
//Capturing an event just on a parent element
objetivo=document.getElementById("event_delegation");
objetivo.addEventListener('click', (evento)=>{
    console.log ("event captured at "+evento.currentTarget.tagName+" y lanzado en "+evento.target.tagName);
});

//capturing a click event at table level
objetivo=document.getElementById("tabla1");
let selectedTd;

objetivo.addEventListener('click', (evento)=>{
    let td = evento.target.closest('td'); // Just in case any element inside td is clicked. Closest return the closest parent element that matches CSS selector
    if (!td) return; // if there's not a td parend (the closest element is null)
    //if (!objetivo.contains(td)) return; // check if is our table, just in case of nested tables

    if (selectedTd)
        selectedTd.classList.toggle("highlight");
    selectedTd=td;
    td.classList.toggle("highlight");
});


////UI Events////

//mouseover and mouseout
objetivo=document.getElementById("tabla2");
objetivo.addEventListener('mouseover', (evento)=>{
    evento.target.style.background="red";
});
objetivo.addEventListener('mouseout', (evento)=>{
    evento.target.style.background="";
});


//pointer
document.getElementById("caja_pointerup").addEventListener('pointerup',  mensajes_puntero);
document.getElementById("caja_pointerdown").addEventListener('pointerdown', mensajes_puntero);
document.getElementById("caja_pointermove").addEventListener('pointermove', mensajes_puntero);

function mensajes_puntero (evento){
    let nombre_destino="caja_"+evento.type;
    let caja_texto_eventos=document.getElementById(nombre_destino);
    caja_texto_eventos.innerHTML+="Event:"+evento.type+" Pointer type:"+evento.pointerType+" isprimary:"+evento.isPrimary+" PointerID:"+evento.pointerId+"<br>";
    caja_texto_eventos.scrollTo(0, caja_texto_eventos.scrollHeight);
}

//keyboard
objetivo=document.getElementById("introduccion_texto");
objetivo.addEventListener('keydown', mensajes_teclado);
objetivo.addEventListener('keyup', mensajes_teclado);

function mensajes_teclado(evento){
    let nombre_destino="caja_"+evento.type;
    caja_texto_eventos=document.getElementById(nombre_destino);
    caja_texto_eventos.innerHTML+="Event:"+evento.type+" physical key code:"+evento.code+" Character:"+evento.key+"<br>";
    caja_texto_eventos.scrollTo(0, caja_texto_eventos.scrollHeight);
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


//scroll
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


//form
let formulario=document.querySelector("form[name=form1]");
caja_texto_eventos=document.getElementById("caja_eventos_form");
//focus and blur events do not propagate in bubbling phase. Two options to avoid declaring an eventhandler for each form input:
//  1.-They propagate at capture phase, so declare them at that phase by using {capture:true}
//  2.- Add focusin and focusout events with addEventListener. They are the same as foscus and blur, but the former propagates on bubbling phase.

formulario.addEventListener("focus", (evento)=>{
    caja_texto_eventos.innerHTML+="<br>Event of type "+evento.type+" at field "+evento.target.name;
    caja_texto_eventos.scrollTo(0, caja_texto_eventos.scrollHeight);
}, {capture:true});

formulario.addEventListener("blur", (evento)=>{
    caja_texto_eventos.innerHTML+="<br>Event of type "+evento.type+" at field "+evento.target.placeholder;
    caja_texto_eventos.scrollTo(0, caja_texto_eventos.scrollHeight);

    if (!evento.target.value){
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
    caja_texto_eventos.innerHTML+="<br>Event of type "+evento.type+" at field "+evento.target.placeholder;
    caja_texto_eventos.scrollTo(0, caja_texto_eventos.scrollHeight);
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


//webpage events
caja_texto_eventos=document.getElementById("caja_eventos_pagina");
window.addEventListener("DOMContentLoaded", mensaje)
window.addEventListener("load", mensaje);

function mensaje (evento){
    caja_texto_eventos.innerHTML+="<br>Event "+evento.type+" finished at "+evento.timeStamp+" ms";
    caja_texto_eventos.scrollTo(0, caja_texto_eventos.scrollHeight);
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