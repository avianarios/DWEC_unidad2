//////////////////////////////////
////creating and cloning nodes////
//////////////////////////////////
//Example 1: creates a new section with a comment and a paragraph on it
/*createElement -> creates a node
createTextNode -> creates a text element
createComment -> creates a comment
appendChild -> makes a node to be child of another one*/
let seccion=document.createElement("section");
let comentario=document.createComment("Comentario creado con JS para insertarlo en el DOM dinámicamente");
let nodo=document.createElement("p");
let texto=document.createTextNode("Texto creado con JS para insertalo en el DOM dinámicamente");
seccion.appendChild(comentario);
seccion.appendChild(nodo);
nodo.appendChild(texto);
document.body.appendChild(seccion);


//Example 2: cloning a node and checking if it is connected with cloneNode and isConnected
/*You can't insert the same element twice into the DOM. If you try, the element is moved so, at the end, you have it only once. The solution is cloning it.
cloneNode(arg) -> if arg=true, it also clones children. After cloning, connecting the node to the DOM is needed
isConnected -> returns true if the node is connected to the DOM.
*/
let seccion_clonada=seccion.cloneNode(true);
console.log (seccion_clonada.isConnected);  //false
document.body.appendChild(seccion_clonada);
console.log (seccion_clonada.isConnected);  //true


//Example 3: create a temporary DOM with createDocumentFragment
//createDocumentFragment
//why? to avoid forcing web browser to renderize the DOM with each change, avoiding a loss of performance. You make all the changes at temporary DOM and then connect to the real one
let estructura_temporal=document.createDocumentFragment();
let tmp=seccion.cloneNode(true);
estructura_temporal.appendChild(tmp);
setTimeout(()=>{
    document.body.appendChild(estructura_temporal);
},3000);

//////////////////////
////Removing nodes////
//////////////////////
//Example 1: Removing elements from the DOM with remove and remmoveChild
//removing does not erases the element. It just disconnects it from the DOM, but still exists (until web browser's garbage collector removes it from memory)
//remove (node_to_remove) 
//removeChild -> Needs a reference to the parent and the node being removed (the child). Returns a reference to the removed node so it can be connected to the DOM again
let borrar=document.querySelector("#lista_compra");
borrar.isConnected ? console.log ("El elemento está conectado al DOM") : console.log ("El elemento no está conectado al DOM");
let referencia=document.querySelector("#lista").removeChild(borrar);
borrar.isConnected ? console.log ("El elemento está conectado al DOM") : console.log ("El elemento no está conectado al DOM");
document.body.appendChild(referencia);  //the "removed" element is back!
//borrar.remove();    //remove does not returns a reference to the recently removed element, so it's unrecoverable

///////////////////////
////Replacing nodes////
///////////////////////
//Example 1: replacing a child with replaceChild
//replaceChild
let sustituido=document.querySelector("#parrafos p:first-of-type");
let sustituto=document.querySelector("#parrafos p:last-of-type");
let padre=document.querySelector("#parrafos>article");
padre.replaceChild(sustituto, sustituido);

///////////////////////
////Inserting nodes////
///////////////////////
//Example 1: Insert a node before another one with insertBefore
//insertBefore(node, reference_node) -> inserts before reference_node or after the last child if null
let nuevo_parrafo=document.createDocumentFragment();
nodo=document.createElement("p");
texto=document.createTextNode("Texto creado con JS para insertalo en el DOM dinámicamente"); //equivalent to nodo.textContent("texto....");
nodo.appendChild(texto);
nuevo_parrafo.appendChild(nodo);

nodo_referencia=document.querySelector("#parrafos p:nth-of-type(3)");
padre.insertBefore(nuevo_parrafo, nodo_referencia);


//Example 2: Insert a node before another one with before
//before is similar to insertBefore method, but needless to specify parent element
let nuevo_parrafo2=nuevo_parrafo.cloneNode(true);
nodo_referencia.before(nuevo_parrafo2);


//Example 3: Clone a node and insert it after another one with after
let nuevo_parrafo3=nuevo_parrafo.cloneNode(true);
document.querySelector("#parrafos p:last-of-type").after(nuevo_parrafo3);


//Example 4: Create a node and insert it before another one with after
dir = document.createElement("input");
dir.type="text";
dir.name="direccion";
dir.placeholder = "direccion";
dir.id = "direccion";
document.getElementById("enviar").before(dir);


////append and prepend////
//1: adds a new element after the last child
//2: adds a new element before the first child
//creating 2 elements: one would be inserted after and, the other one, before
let lista=document.querySelector("ul");

//two ways of creating li element: innerHTML and createTextNode-append
let elemento=document.createElement("li");
elemento.innerHTML="kiwis"

let elemento2=document.createElement("li");
let fruta2=document.createTextNode("mango");
elemento2.append(fruta2);

lista.append(elemento); //same as lista.appendChild(elemento);
lista.prepend(elemento2);


////replaceWith and replaceWithChildren////
//1: Replaces all children, at any level, of a given node
//2: Replace only the last level of children of a given node

//let's start by cloning a section to see the difference between them
objetivo=document.querySelector("#parrafos");
seccion_clonada=objetivo.cloneNode(true);
objetivo.after(seccion_clonada);

parrafo=document.createElement("p");
parrafo.textContent="nuevo texto";
//alternative to .textContent:
//  texto=document.createTextNode("nuevo texto");
//  parrafo.appendChild(texto);

//elemento_final.replaceWith(parrafo);
objetivo.replaceWith(parrafo);  
objetivo.replaceChildren(parrafo);

////insertAdjacentElement, insertAdjacentHTML, insertAdjacentText////
//each method requires position to be provided. It can be one of the following: beforebegin, afterbegin, beforeend, afterend
//insertAdjacentElement inserts an already created (but not inserted yet) element into the DOM
//insertAdjacentHTML inserts an HTML code into DOM. No need to create an element. Much faster then innerHTML
//insertAdjacentText inserts a plain text
let punto_insercion=document.querySelector("#perro");
bb=document.createElement("p");
bb.textContent="un texto recién insertado con beforebegin de #perro";

ab=document.createElement("p");
ab.textContent="un texto recién insertado con afterbegin de #perro";

be=document.createElement("p");
be.textContent="un texto recién insertado con beforeend de #perro";

ae=document.createElement("p");
ae.textContent="un texto recién insertado con afterend de #perro";

punto_insercion.insertAdjacentElement("beforebegin", bb);
punto_insercion.insertAdjacentElement("afterbegin", ab);

punto_insercion.insertAdjacentElement("beforeend", be);
punto_insercion.insertAdjacentElement("afterend", ae);

//no need to create an element before inserting. 
punto_insercion.insertAdjacentHTML("beforeend", "<article><p>un párrafo insertado</p></article>");
// Warning! Do not insert HTML obtained from untrusted sources like database, forms or user input. It could lead to security risks
// const codigoMaligo=prompt("dame el elemento a añadir");
// document.body.insertAdjacentHTML('beforeend', codigoMaligno);

// User could have inserted `<img src onerror="(()=>{console.log('hago algo malo');})();">`;
// Thus, having provided no src, img will throw an error and onerror event will be triggered, launching a function


const titulo = document.getElementById("titulo1");
let text = "Un texto nuevo";
titulo.insertAdjacentText("afterbegin", text);*/