////////////////////////////////
////getting node information////
////////////////////////////////
// There most common types of node are:
//     1->element-> etiquetas de nodo
//     2->atributo-> atributos de un elemento
//     3->text-> texto dentro del nodo
//     8->comentario-> comentarios de HTML que no son visibles, pero existen
//     9->document -> todos los elementos descienden del nodo document, es la raíz

// How to get node information?
//     1.- Select one node
//     2.- Check nodeType, nodeName and nodeValue properties
    




//Example 1: element nodes
let titulo1=document.getElementById("titulo1");
console.log (titulo1.nodeType, titulo1.nodeName, titulo1.nodeValue);    //1 H1 null
console.log (document.body.nodeType, document.body.nodeName, document.body.nodeValue);

//Example 2: text nodes (type 3)
console.log (titulo1.firstChild.nodeType, titulo1.firstChild.nodeName, titulo1.firstChild.nodeValue);
let secciones=document.body.getElementsByTagName("section");
//The name of a text node is always #text
//Why there's an empty node after section? Because there's an empty space or a newline after seccion
console.log (secciones[0], secciones[0].firstChild.nodeType, secciones[0].firstChild.nodeName, secciones[0].firstChild.nodeValue);

//Example 3: comment nodes (type 8)
console.log (document.body.firstChild.nodeType, document.body.firstChild.nodeName, document.body.firstChild.nodeValue);
//there's a comment before body tag, despite it is not visible at the rendered webpage

console.log (document.nodeType, document.nodeName, document.nodeValue);
//by definition, document.nodeValue==null



///////////////////////////////////
////getting and setting content////
///////////////////////////////////
// -innerHTML
//     -Returns or sets the internal content of an HTML element, i.e. everything inside the opening and closing tags of the element. 
//     -It affects to all childs of the HTML tag (in <h1>hola</h1>, hola is the child of <h1> tag), but not to the TAG itself
// -outerHTML
//     -Returns or sets the entire content of an HTML element and the element itself (its opening and closing tags).
//     -It affects to ALL CHILDS of the HTML tag, INCLUDING the TAG itself

// Be careful!: When assigning strings to innerHTML, be sure to sanitise the content if it comes from untrusted sources, as it is vulnerable to HTML or JavaScript injection attacks.

//Example 1: Getting content
let inHTML=document.getElementById("inHTML");
let outHTML=document.getElementById("outHTML");
console.log(`inHTML ${inHTML}\nouterHTML:${outHTML}`);

//Example 2: Replacing content
inHTML.innerHTML="<strong>este texto ha sido añadido tras crear el DOM usando innerHTML</strong>";
outHTML.outerHTML="<strong>este texto ha sido añadido tras crear el DOM usando outerHTML</strong>";

//Example 3: using innerHTML to add text to a list of elements
let listaParrafos=Array.from (document.querySelectorAll("p.normal"));
listaParrafos.forEach(elemento => {
    setTimeout(()=>{
        elemento.innerHTML+=" <strong>Este texto ha sido añadido tras crear el DOM usando innerHTML</strong>";        //Should innerText or textContend be used, HTML tags would've been literally added
    }, 3000);
});

//Example 4: using outerHTML to turn h3 into h2
let h3=document.querySelector("h3");
h3.outerHTML="<h2>Este es el nuevo encabezado de nivel 2 que ha sustituido al de nivel 3</h2>";


// innerText, outerText and textContent

// outerText is similiar to outerHTML: 
//     -Devuelve el texto del nodo y sus descendientes, ignorando las etiquetas HTML y sólo si el texto es visible (si no está oculto con visibility:hidden o display:none). 
//     -Inserta el texto tratando a las etiquetas HTML como texto plano y sin reemplazar el nodo seleccinado (no pisa la etiqueta HTML)

// innerText es parecido a innerHTML:
//     -Devuelve el texto del nodo y sus descendientes, ignorando las etiquetas HTML y sólo si el texto es visible (si no está oculto con visibility:hidden o display:none). 
//     -Inserta el texto tratando a las etiquetas HTML como texto plano y reemplazando el nodo seleccinado (sí pisa la etiqueta HTML)

// textContent
//     -Devuelve el texto del nodo y sus descendientes, ignorando las etiquetas HTML, sin importar si el texto es visible o no.
//     -Inserta el texto como innerText


//Example 5: innerText, outerText and textContent
let inTxt=document.getElementById("inTxt");
let ouTxt=document.getElementById("outTxt");
let contTxt=document.getElementById("contTxt");

console.log(inTxt.innerText);
console.log(ouTxt.outerText);
console.log(contTxt.textContent);

inTxt.innerText="<strong>este texto ha sido añadido tras crear el DOM usando innerText</strong>";
ouTxt.outerText="<strong>este texto ha sido añadido tras crear el DOM usando outerText</strong>";
contTxt.textContent="<strong>este texto ha sido añadido tras crear el DOM usando contentText</strong>";


//Example 8: textContent
let seleccionado=Array.from(document.getElementsByClassName("especial"));
seleccionado.forEach(elemento=>{
    setTimeout(()=>{
        elemento.textContent+=" <strong>Este texto ha sido añadido tras crear el DOM usando textContent</strong>";
    }, 3000);
});


//Example 9: textContent
setTimeout(()=>{
    document.getElementById("enviar").textContent="Texto cambiado";
}, 2000);


////////////////////////////////////
////manipulating node attributes////
////////////////////////////////////
// Two types of atributes
//     -standard. They have DOM properties with the same name, case insensitive
//     -Non standard. They can be created. They are useful to pass custom data from HTML to JavaScrip or to mark HTML elements to do something with them in JavaScript. User doesn't get affected

// Example:
//     <section class="container" data-attr="value"></div>
//     -class -> standard
//     -data-attr -> non standard

// Manipulating...
//     -standard attributes-> setAttribute or the name of the attribute preceeded by a dot
//     -custom attributes -> only setAttribute


//Example 1: checking element's attribute with attributes property and hasAttributes() method
let imagen=document.querySelector("img");
console.log(imagen.attributes);
console.log("¿La imagen tiene atributos?:"+imagen.hasAttributes());
console.log("¿La imagen tiene el atributo src?:"+imagen.hasAttribute("src"));
console.log("¿La imagen tiene el atributo cámara?:"+imagen.hasAttribute("camara"));

//Example 2: setting non-standard attributes
//custom attributes don't become properties so they can only be accessed by using getAttribute
document.body.autor="Alejandro Viana";  //doesn't work. Use setAttribute
document.body.setAttribute('fecha','11/1/2024');
imagen.autor="Procopio Máximo";     //doesn't work. Use setAttribute
imagen.setAttribute("derechos_de_autor", "no");


//Example 3: setting standard attributes
//both setAttribute and dot, works
imagen.loading="lazy";
imagen.setAttribute("alt","Una imagen aleatoria")
imagen.src="https://picsum.photos/300";


//Example 4: Getting non-standard attributes
console.log (document.body.fecha)   //doesn't work. It is not a property, only a custom attribute. Use getAttribute
console.log (document.body.getAttribute("fecha"));
console.log (imagen.derechos_de_autor); //doesn't work. Use getAttribute
console.log (imagen.getAttribute("derechos_de_autor"));


//Example 5: Getting standard attributes
//both getAttribute and dot, works
console.log (imagen.src);   
console.log (imagen.getAttribute("alt"));


//Example 6: checking and changing standard attribute
if (imagen.hasAttribute('src')){
    console.log ("El atributo src de la imagen es "+imagen.getAttribute('src'));
    imagen.setAttribute('src', 'https://picsum.photos/300');
}


//Example 7: adding id to the first paragraph of any section as long as it is a direct child
let parrafo = document.querySelector("section#ponerID > p:first-of-type");
parrafo.setAttribute("id", "especial");
console.log(parrafo.getAttribute("id")); // Debe devolver "especial"
console.log(parrafo.id); // También debe devolver "especial"


//Example 8: Getting attribute names
console.log("Nombres de los atributos de la imagen:"+imagen.getAttributeNames());
imagen.getAttributeNames().forEach((atributo)=>{
    console.log(atributo);
});

//Example 9: iterating through attributes
//querySelector returns a NamedNodeMap, not an Array
//let imagen=document.querySelector("img");
for (let atributo of imagen.attributes){
    console.log (`nombre: ${atributo.name}, valor: ${atributo.value}`);
}

// in order to use forEach, an array has to be created in any of the three following ways
// Array.from (imagen.attributes).forEach((atributo)=>{
//     console.log (atributo);
// });
  
// [...imagen.attributes].forEach((atributo)=>{
//     console.log (atributo);
// });
  
// Array.prototype.forEach.call(
//     imagen.attributes,
//     (atributo)=>{ console.log (atributo); }
// );

//Example 10: removing attributes
parrafo=document.querySelector("section#modificarClases>p#idPorEliminar");
parrafo.removeAttribute("id");
imagen.removeAttribute("autor");


//Example 11: getting classes information
// class is an attribute than can store many values separated by spaces. Thus, it needs to be treated differently
//     classList -> returns a DOMTokenList of classes (similar to an Array)
//     classList.length -> returns the number of classes
//     classList.value  -> returns the list of classes as a string
//     classList.name -> returns all classes as a string
//     classList.item(0) -> item is a method that returns the class located at position indicated as argument
//     classList.contains("class") -> returns true if element has "class"

listaParrafos=document.body.querySelectorAll("section#modificarClases>p");
listaParrafos.forEach(parrafo=>{
    parrafo.classList.forEach(clase=>{
        console.log (clase);
    });
});
console.log (parrafo.classList.length);
console.log (parrafo.classList.value);
console.log (parrafo.classList.name);
console.log(parrafo.classList.item(0));
console.log (parrafo.classList.contains("una_clase"));   


//Example 12: removing a class with classList.remove
listaParrafos.forEach(parrafo=>{
    parrafo.classList.remove("rojo");
});


//Example 13: removing the last class of the first paragraph
parrafo=listaParrafos[0];
parrafo.classList.remove(parrafo.classList.item(parrafo.classList.length-1)); 


//Example 14: adding a class with classlist.add
for (let parrafo of listaParrafos){
    parrafo.classList.add("clase_nueva1","clase_nueva2");
}

//Example 16: setting a class with classList.className
//classname gets and set the class attribute
console.log (listaParrafos[2].className);
listaParrafos[2].className="unaClase";


//Example 17: replacing classes with classList.replace(old, new)
parrafo=listaParrafos[3];    //Selecting the first link
parrafo.classList.replace("clase_nueva1", "clase_mas_nueva1");


//Example 18: removing a class if it exists or creating if not with classList.toggle("clase")
parrafo.classList.toggle("clase_guadiana");

//////////////////////////////////////////
////toggling boolean attribute's value////
//////////////////////////////////////////
//Boolean values are tricky in HTML. If they exists, they are true. Otherwise, they are false. They have no value, just exists or no. If they are assigned to true, they are treated as an string
let boton=document.getElementById("enviar");
boton.toggleAttribute("disabled");     //if it doesn't exist, it is created (in a boolean attribute, means true). If it exists, it is removed (in a boolean attribute, means false)
setTimeout(()=>{
    boton.toggleAttribute("disabled");  
}, 5000); 



//more complex example
let mascotas=[
    {nombre:'gatín', raza:'común europeo'},
    {nombre:'perrín', raza:'cocker'}
];

let col=fila=0;
for(let elemento of document.querySelectorAll('[muestra-info]')) {
    // inserta la información correspondiente en el campo
    let field = elemento.getAttribute('muestra-info');
    elemento.innerHTML = mascotas[fila][field];
    col++;
    //como se ha usado un for let of, hay que controlar filas y columnas
  if (col%2==0){
    fila++;
    col=0;
  }
}
