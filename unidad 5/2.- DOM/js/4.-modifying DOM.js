//////////////////////////////////
////creating and cloning nodes////
//////////////////////////////////
//Example 1: creates a new section with a comment and a paragraph on it
/*createElement -> creates a node
createTextNode -> creates a text element
createComment -> creates a comment*/
let seccion=document.createElement("section");
let comentario=document.createComment("Comentario creado con JS para insertarlo en el DOM dinámicamente");
let nodo=document.createElement("p");
let texto=document.createTextNode("Texto creado con JS para insertalo en el DOM dinámicamente");
//nodevalue==null when type 1 or 9
console.log(seccion.nodeType, seccion.nodeName, seccion.nodeValue);
console.log (comentario.nodeType, comentario.nodeName, comentario.nodeValue);
console.log (nodo.nodeType, nodo.nodeName, nodo.nodeValue);
console.log (texto.nodeType, texto.nodeName, texto.nodeValue);


//Example 2: cloning a node and checking if it is connected with cloneNode and isConnected
// You can't insert the same element twice into the DOM. If you try, the element is moved so, at the end, you have it only once. The solution is cloning it.
// cloneNode(arg) -> if arg=true, it also clones children. After cloning, connecting the node to the DOM is needed
// isConnected -> returns true if the node is connected to the DOM.
let seccion_clonada=seccion.cloneNode(true);
console.log (seccion_clonada.isConnected);  //false


//Example 3: create a temporary DOM with createDocumentFragment
//createDocumentFragment
//why? to avoid forcing web browser to renderize the DOM with each change, avoiding a loss of performance. You make all the changes at temporary DOM and then connect to the real one
let estructura_temporal=document.createDocumentFragment();
for (let i = 0; i < 10; i++) {
    const nuevoNodo = document.createElement("div");
    nuevoNodo.textContent = `Elemento ${i}`;
    estructura_temporal.append(nuevoNodo); // Añade a la estructura temporal, no al DOM.
}
document.body.append(estructura_temporal); // Una sola inserción al DOM.



///////////////////////
////Inserting nodes////
///////////////////////

////Node API (older, supported by older browsers). Two methods:
//  -appendChild
//  -insertBefore

//Example 1: Creating a node and inserting it with appendChild (continues Example 1 of creating and cloning nodes)
//reference_node.appendChild(new_node) -> inserts new_node as the last child of reference_node
seccion=document.createElement("section");
comentario=document.createComment("Comentario insertado con appendChild");
nodo=document.createElement("p");
nodo.classList.add("insertado");
texto=document.createTextNode("Texto insertado con appendChild");
seccion.appendChild(comentario);
seccion.appendChild(nodo);
nodo.appendChild(texto);
document.body.appendChild(seccion);


//Example 2: appending a cloned node to the DOM (continues Example 2 of creating and cloning nodes)
seccion_clonada=seccion.cloneNode(true);
console.log (seccion_clonada.isConnected);  //false
document.body.appendChild(seccion_clonada);
console.log (seccion_clonada.isConnected);  //true


//Example 3: Creating a new node and inserting it before another one with insertBefore
//container_node.insertBefore(new_node, reference_node) -> inserts new_node in container_node before reference_node or after the last child if reference_node==null
let nuevo_parrafo = document.createElement("p");
texto = document.createTextNode("Texto insertado mediante insertBefore en section#insertar1 p:nth-of-type(3)");
nuevo_parrafo.classList.add("insertado");
nuevo_parrafo.appendChild(texto);

let padre = document.querySelector("section#insertar1");
let nodo_referencia = document.querySelector("section#insertar1 p:nth-of-type(3)");

padre.insertBefore(nuevo_parrafo, nodo_referencia);


////Element API (newer, supported by browsers starting at 2016). Several methods:
//  -before
//  -after
//  -append
//  -prepend
//  -insertAdjacentElement
//  -insertAdjacentHTML
//  -insertAdjacentText

//Example 4: Insert a node before another one with before
//reference_node.before(new_node) inserts new_node before reference_node as a brother
//reference_node.before(string) inserts a string before reference_node as a brother. It inserts HTML tags as text

nuevo_comentario = document.createComment("Esto es un comentario insertado con before en section#insertar1 p:first-of-type");
document.querySelector("section#insertar1 p:first-of-type").before(nuevo_comentario);


//Example 5: Insert a node after another one with after
//reference_node.after(new_node) inserts new_node after reference_node as a brother
//reference_node.after(string) inserts a string after reference_node as a brother. It inserts HTML tags as text
nuevo_nodo = document.createElement("p");
nuevo_nodo.textContent = "Texto insertado mediante after en section#insertar1 p:nth-of-type(2)";
nuevo_nodo.classList = "insertado";

document.querySelector("section#insertar1 p:nth-of-type(2)").after(nuevo_nodo);
document.querySelector("section#insertar1 p:nth-of-type(4)").after("<p>esto es un texto insertado como texto con after antes de section#insertar1 p:nth-of-type(4)</p>")


//Example 6: Insert with append and prepend
//container_node.append(new_node)-> adds a new node as the last child of the container
//container_node.prepend(new_node)-> adds a new node as the first child of the container
let punto_insercion1=document.querySelector("ul>ul:nth-of-type(1)");
let punto_insercion2=document.querySelector("ul");

//two ways of creating li element: innerHTML and createTextNode-append
let elemento=document.createElement("li");
elemento.classList.add("insertado");
elemento.innerHTML="agria (insertado con append en ul>ul:nth-of-type(1))"

let elemento2=document.createElement("li");
elemento2.classList.add("insertado");
let fruta=document.createTextNode("mango (insertado con prepend en ul)");
elemento2.append(fruta);

punto_insercion1.append(elemento);
punto_insercion2.prepend(elemento2);


//Example 7: Inserting nodes with insertAdjacentElement, insertAdjacentHTML, insertAdjacentText
// reference_node.insertAdjacentElement("where", inserted_node)-> inserts a created element
// reference_node.insertAdjacentHTML("where", inserted_node) -> inserts an HTML code into DOM. No need to create an element. Much faster than innerHTML
// reference_node.insertAdjacentText("where", inserted_node) -> inserts plain text. It treats HTML tags as text
// "Where" can be one of the following: beforebegin, afterbegin, beforeend, afterend
let punto_insercion=document.querySelector("section:nth-of-type(3)");

nodo=document.createElement("p");
nodo.textContent="un texto insertado con insertAdjacentElement beforebegin en section:nth-of-type(3). Por tanto, se coloca antes del nodo section:nth-of-type(3)";
nodo.classList.add("insertado")
punto_insercion.insertAdjacentElement("beforebegin", nodo);

nodo=document.createElement("p");
nodo.textContent="un texto insertado con insertAdjacentElement afterbegin de section:nth-of-type(3). Por tanto, se coloca como primer hijo del nodo section:nth-of-type(3)";
nodo.classList.add("insertado")
punto_insercion.insertAdjacentElement("afterbegin", nodo);

punto_insercion.insertAdjacentHTML("beforeend", "<p class=\"insertado\">un texto insertado con insertAdjacentHTML beforeend en section:nth-of-type(3). Por tanto, se coloca antes del final (como último nodo) del nodo section:nth-of-type(3)</p>");

punto_insercion.insertAdjacentText("afterend", "<p class=\"insertado\">un texto insertado con insertAdjancentText afterend de section:nth-of-type(3). Por tanto, no se interpretan las etiquetas HTML y se coloca después de que se cierre el nodo section:nth-of-type(3)</p>");


// Example 8: Creating a form field with its label and inserting it before another one with after
const fragmento = document.createDocumentFragment();
const nuevoFieldset = document.createElement("fieldset");

const etiquetaDireccion = document.createElement("label");
etiquetaDireccion.setAttribute("for", "direccion");
etiquetaDireccion.textContent = "Dirección";

const inputDireccion = document.createElement("input");
inputDireccion.setAttribute("type", "text");
inputDireccion.setAttribute("id", "direccion");
inputDireccion.setAttribute("name", "direccion");
inputDireccion.setAttribute("placeholder", "Introduce tu dirección");

// Añadir los elementos al nuevo fieldset
nuevoFieldset.appendChild(etiquetaDireccion);
nuevoFieldset.appendChild(inputDireccion);

// Añadir el fieldset al fragmento
fragmento.appendChild(nuevoFieldset);

// Insertar el fragmento después del campo "Apellidos"
const formulario = document.getElementById("formulario-contacto");
const fieldsetApellidos = formulario.querySelectorAll("fieldset")[1]; // Segundo fieldset (Apellidos)
fieldsetApellidos.after(fragmento);



// Warning!!!!! Despite modern browsers protect you from XSS (cross-site scripting) and disable script execution when inserted, never insert HTML obtained from untrusted sources like database, forms or user input without cleaning it before. It could lead to security risks on unprotected or old web browsers 

// Example 1: XSS injection:
//   const codigoMaligo=prompt("dame el elemento a añadir");
//   document.body.insertAdjacentHTML('beforeend', codigoMaligno);

// what if the user writes <script>console.log("eres un pardillo")</script> and you have an unprotected or old web browser?
// If you need to insert, use insertAdjacentText, innerText, textContent or similar or escape the code:

// Example 1: cleaning a string
// function escaparHTML(cadena_sucia) {
//     const parrafo = document.createElement('p');
//     p.textContent = cadena_sucia;
//     return parrafo.innerHTML;
// }

// const comentarioPeligroso = "<script>alert('XSS')</script>";
// const comentarioSeguro = escaparHTML(comentarioPeligroso);   //se inserta dentro de un <p>, por lo que ya no se ejecuta.
// const punto_insercion = document.querySelector("#insertar1");
// punto_insercion.insertAdjacentHTML("beforebegin", comentarioSeguro); 


// Example 2: inserting a clean comment
// const punto_insercion = document.querySelector("#insertar1");
// const comentarioPeligroso = "<script>alert('XSS')</script>"; // Contenido malicioso
// const textoNode = document.createTextNode(comentarioPeligroso); // Se convierte en texto plano, ya no hay peligro
// punto_insercion.appendChild(textoNode);


// Example 3: Inserting as clean text
// const comentarioPeligroso = "<script>alert('XSS')</script>";
// const punto_insercion = document.querySelector("#insertar1");

// // Usando insertAdjacentText para insertar el comentario
// punto_insercion.insertAdjacentText("beforebegin", comentarioPeligroso);   //Se inserta como texto plano, por lo que no se ejecuta



///////////////////////
////Replacing nodes////
///////////////////////

////Node API: replaceChild
// parentNode.replaceChild(newChild, oldChild) -> replaces oldChild, located at parentNode, with newChild
//Example 1: replacing a node with replaceChild
const nodoPadre = document.querySelector('#gato');
const nodoAntiguo = document.querySelector('#gato>img');
const nodoNuevo = document.createElement('img');
nodoNuevo.src="https://picsum.photos/300";
nodoNuevo.alt = 'Una imagen aleatoria';

nodoPadre.replaceChild(nodoNuevo, nodoAntiguo);


////Element API: 
//  element.replaceWith(newElement)-> Replaces the current node
//  element.replaceChildren(...nodes) -> replaces all child nodes, at any level, of an element with the nodes passed as arguments.
//Example 2: Replace a node with replaceWith
objetivo=document.querySelector("#sustituir1>p:first-of-type");
console.log(objetivo);
parrafo=document.createElement("p");
parrafo.classList.add("insertado");
parrafo.textContent="Párrafo que ha sustituido al que había aquí antes con replaceWith";
//alternative to .textContent:
//  texto=document.createTextNode("nuevo texto");
//  parrafo.appendChild(texto);

objetivo.replaceWith(parrafo);  

objetivo=document.querySelector("#sustituir2");
parrafo=document.createElement("p");
parrafo.textContent="Párrafo que ha sustituido al todo el bloque section que había aquí antes con replaceChildren";
parrafo.classList.add("insertado");
objetivo.replaceChildren(parrafo);


//////////////////////
////Removing nodes////
//////////////////////
// Node API: removeChild
// Element API: remove

//Example 1: Removing elements from the DOM with remmoveChild
//removing does not erases the element. It just disconnects it from the DOM, but still exists (until web browser's garbage collector removes it from memory)
//remove (node_to_remove) 
//removeChild -> Needs a reference to the parent and the node being removed (the child). Returns a reference to the removed node so it can be connected to the DOM again
let borrar=document.querySelector("#lista_compra");
borrar.isConnected ? console.log ("El elemento está conectado al DOM") : console.log ("El elemento no está conectado al DOM");
let referencia=document.querySelector("#lista").removeChild(borrar);
borrar.isConnected ? console.log ("El elemento está conectado al DOM") : console.log ("El elemento no está conectado al DOM");
document.body.appendChild(referencia);  //the "removed" element is back!


//Exmple 2: removing elements from the DOM with remove
//borrar.remove();    //remove does not returns a reference to the recently removed element, so it's unrecoverable
