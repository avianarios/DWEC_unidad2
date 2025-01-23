////////////////////////////////
////getting node information////
////////////////////////////////
// There most common types of node are:
//     1->element-> etiquetas de nodo. Their value is always null
//     2->atributo-> atributos de un elemento
//     3->text-> texto dentro del nodo
//     8->comentario-> comentarios de HTML que no son visibles, pero existen
//     9->document -> todos los elementos descienden del nodo document, es la raíz

// How to get node information?
//     1.- Select one node
//     2.- Check nodeType, nodeName and nodeValue properties
    

//Example 1: element nodes
let titulo1=document.getElementById("titulo1");
console.log (titulo1.nodeType, titulo1.nodeName, titulo1.nodeValue);    //nodeValue of a type-1 node is always null
console.log (document.body.nodeType, document.body.nodeName, document.body.nodeValue);      //nodeValue of a type-9 node is always null

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
inHTML.innerHTML="<strong>texto cambiado, mediante innerHTML, tras crear el DOM</strong>";
outHTML.outerHTML="<strong>texto cambiado, mediante outerHTML, tras crear el DOM</strong>";

//Example 3: using innerHTML to add text to a list of elements
let listaParrafos=Array.from (document.querySelectorAll("p.normal"));
listaParrafos.forEach(elemento => {
    setTimeout(()=>{
        elemento.innerHTML+=" <strong>Este texto ha sido añadido tras crear el DOM usando innerHTML</strong>";        //Should innerText or textContend be used, HTML tags would've been literally added
    }, 3000);
});

//Example 4: using outerHTML to turn h3 into h2
let h3=document.querySelector("h3");
h3.outerHTML="<h2>Este encabezado de nivel 2 ha sustituido al de nivel 3</h2>";


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
let txtContent=document.getElementById("txtContent");

console.log(inTxt.innerText);
console.log(ouTxt.outerText);
console.log(txtContent.textContent);

inTxt.innerText="<strong>texto cambiado, mediante innerText, tras crear el DOM</strong>";
ouTxt.outerText="<strong>texto cambiado, mediante outerText, tras crear el DOM</strong>";
txtContent.textContent="<strong>texto cambiado, mediante contentText, tras crear el DOM</strong>";

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


////////////////////////////////////////////////////
////manipulating node attributes and properties////
///////////////////////////////////////////////////
// Two types of properties/atributes
//     -standard. They exist as part of the HTML standard
//     -Non standard. It doesn't exist a predefined property/attribute with the same name. They are useful to pass custom data from HTML to JavaScrip or to mark HTML elements to do something with them in JavaScript. User doesn't get affected

// Example:
//     <section class="container" data-attr="value"></div>
//     -class -> standard
//     -data-attr -> non standard

// El nombre de los atributos personalizados, por convención, debe comenzar por "data-", pero como en los siguientes ejemplos se van a mezclar atributos y propiedades para demostrar su funcionamiento y las propiedades no pueden contener el guión, se van a omitir el data-
 

//Example 1: checking element's attribute with attributes property and hasAttribute(att_name) and hasAttributes method
let imagen=document.querySelector("img");
console.log("¿La imagen tiene atributos?:"+imagen.hasAttributes());
console.log("¿La imagen tiene el atributo src?:"+imagen.hasAttribute("src"));


//Example 2: show all attributes
console.log(imagen.attributes);


//Example 3: working with custom properties
//remember: they are not inserted into DOM and they are accessed by using dot (.)
//watch DOM to see how it DOES NOT change
document.body.autor="Alejandro Viana";  //we're setting a custom property. It won't be visible at the DOM
console.log(document.body.autor);   //it works
console.log(document.body.getAttribute("autor"));   //it doesn't work. Autor is a property, and getAttribute reads attributes

imagen.autor="Procopio Máximo";
console.log(imagen.autor);      //it works
console.log(imagen.getAttribute("autor"));  //it doesn't work


//Example 4: Working with custom attributes
//remember: they are inserted into DOM and they are accessed by using setAttribute and getAttribute
//watch DOM to see how it changes
document.body.setAttribute('fecha','11/1/2024');
console.log(document.body.getAttribute("fecha"));  //it works
console.log(document.body.fecha);   //it doesn't work. Fecha is a custom attribute and dot is used with properties

imagen.setAttribute("derechos_de_autor", "no");
console.log(imagen.derechos_de_autor);  //it doesn't work. derechos_de_autora is a attribute, not a property
console.log(imagen.getAttribute("derechos_de_autor"));  //it works


//Example 5: working with standard attributes and properties
//Most of standard properties are linked to the attributes with the same name and will change at the same time
//watch DOM to see how it changes
imagen.setAttribute("alt","Una imagen aleatoria");  //standard attribute
console.log (imagen.getAttribute("alt"));       //standard attribute
console.log (imagen.alt);       //standard property

imagen.src="https://picsum.photos/300"; //standard property
console.log (imagen.src);   //standard property
console.log (imagen.getAttribute("src"));   //standard attribute

//Example 6: using getAttribute instead of . at id attribute
// When defining an element with the id=‘text_coordinates’ attribute, the browser automatically creates a property on the document object called text_coordinates.
// This allows the element to be accessed directly as document.text_coordinates.
// This is not a recommended practice because it can cause conflicts if you declare a global variable with the same name as the id. 
// Although document.id works, it's always better to use document.getElementById(‘id’) to keep the code clearer, safer, and more compliant with best practices.

//<p id="miElemento">Texto inicial</p>
// const elemento = document.getElementById("miElemento");
// console.log(elemento.id); // "miElemento" (propiedad)
// console.log(elemento.getAttribute("id")); // "miElemento" (atributo)

// var miElemento = "Conflicto";
// console.log(document.miElemento); // Puede ser ambiguo
// console.log(elemento.getAttribute("id")); // "miElemento" (atributo)


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

//Example 10: removing standard and custom attributes
parrafo=document.querySelector("section#modificarClases>p#idPorEliminar");
parrafo.removeAttribute("id");
imagen.removeAttribute("autor");

//Example 11: removing standard and custom properties
//They can't be removed. What can be done is assigning null value
parrafo.autor=null;

////////////////////////////
////Working with classes////
////////////////////////////
//  Class is an attribute that can store many values separated by spaces. Thus, it needs to be treated differently

//  To work with classes
//  -class: es un atributo que contiene las clases definidas en el HTML. Cuando trabajas con class, manipulas el atributo directamente, pero no tienes los métodos útiles que proporciona classList.
//  -classList: is a property of an HTML element that returns an object that conatins some methdos to manipulate classes efficiently:
//      -classList -> returns a DOMTokenList of classes (similar to an Array)
//      -classList.length -> returns the number of classes
//      -classList.value  -> returns the list of classes as a string
//      -classList.name -> returns all classes as a string
//      -classList.item(0) -> item is a method that returns the class located at position indicated as argument
//      -classList.contains("class") -> returns true if element has "class"


//Example 1: getting class information and assigning a new class with class as attribute
elemento=document.querySelector('#clases>p');

console.log(elemento.class);  // Obtiene las clases como una cadena de texto.
elemento.class = 'nueva-clase';  // Cambia el atributo class.


//Example 2: adding a new class with class as attribute  
elemento = document.querySelector("#miElemento");
let clasesExistentes = elemento.getAttribute("class");
elemento.setAttribute("class", clasesExistentes + " nueva-clase");


//Example 3: removing class with class as attribute
elemento = document.querySelector("#miElemento");
clasesExistentes = elemento.getAttribute("class");
clasesExistentes = clasesExistentes.split(' ').filter(clase => clase !== 'clase-a-eliminar').join(' ');
elemento.setAttribute("class", clasesExistentes);


//Example 4: getting class information with class property
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


//Example 5: adding a class with classlist.add
for (let parrafo of listaParrafos){
    parrafo.classList.add("clase_nueva1","clase_nueva2");
}


//Example 6: removing a class with classList.remove
listaParrafos.forEach(parrafo=>{
    parrafo.classList.remove("rojo");
});


//Example 7: removing the last class of the first paragraph
parrafo=listaParrafos[0];
parrafo.classList.remove(parrafo.classList.item(parrafo.classList.length-1)); 


//Example 8: setting a class with classList.className with class as property
//classname gets and set the class attribute
console.log (listaParrafos[2].className);
listaParrafos[2].className="unaClase";


//Example 9: replacing classes with classList.replace(old, new)
parrafo=listaParrafos[3];    //Selecting the first link
parrafo.classList.replace("clase_nueva1", "clase_mas_nueva1");


//Example 10: removing a class if it exists or creating if not with classList.toggle("clase")
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


///////////////////////////////////
////manipulating CSS Properties////
///////////////////////////////////
/*CSS property names are converted to JavaScript identifier with these rules:
    If the property is made of one word, it remains as it is: height stays as is (in lowercase).
    If the property is made of several words, separated by dashes, the dashes are removed and it is converted to camel case: background-attachment becomes backgroundAttachment.
    The property float, being a reserved JavaScript keyword, is converted to cssFloat.*/

//use elemento.style.CSSConvertedPropertyName, to modify or create inline styles. Not recommended though
let elemento=document.getElementById("parrafo1");
const miEstilo= `
    width: 80%;
    background-color: red;
    border: 2px;
    font-size: 2em;
    color: white;
    margin: 20px;
    padding-left: 10px;
    padding-bottom: 10px;
    border: 2px solid black;
`;
elemento.style.cssText=miEstilo;


setTimeout(()=>{
  elemento.style.backgroundColor="#00ff00";
  elemento.style.fontSize="1rem";
  elemento.style.textAlign="center";
  elemento.style.fontWeight="bold";
}, 3000);



//////////////////////////////////////////////
////////////modify CSS stylesheets////////////
//////////////////////////////////////////////
//Reasons to modify CSS instead of inline stlye:
//1-Apply the change to all elements with a certain selector. 
//2-Apply the change to future elements that will be added dynamically later on.
//3-Applying changes to a huge amount of elements sharing the selector would be extremely slow
//////////////////////////////////////////////
//these rules are temporary and they don't overwrite the css file
const hoja_estilos = document.styleSheets[0];
const reglaACambiar = Array.from(hoja_estilos.cssRules).find(
  regla => regla.selectorText === '.tarjeta'
);

if (reglaACambiar) {
  reglaACambiar.style.setProperty('background-color', 'red');
}
