////////////////
////nodetype////
////////////////
//it gets the type of node
/*most common:
    1->element-> etiquetas de nodo
    2->atributo-> atributos de un elemento
    3->text-> texto dentro del nodo
    8->comentario-> comentarios de HTML que no son visibles, pero existen
    9->document -> todos los elementos descienden del nodo document, es la raíz*/
console.log (document.getElementById("titulo1").nodeType,
            document.body.firstChild.nodeType,  //the first child of body is a comment because there is no space between them. If there were a space, DOM would've created an empty #text node
            document.body.getElementsByTagName("section")[0].firstChild.nodeType, //the fist child of the section tag is an empty text node
            document.getElementById("titulo1").firstChild.nodeType,
            document.nodeType);


////////////////
////nodename////
////////////////
console.log (document.getElementById("titulo1").nodeName,
            document.body.firstChild.nodeName,  //the first child of body is a comment because there is no space between them. If there were a space, DOM would've created an empty #text node
            document.body.getElementsByTagName("section")[0].firstChild.nodeName, //the fist child of the section tag is an empty text node
            document.getElementById("titulo1").firstChild.nodeName,
            document.nodeName);


///////////////////////////////////
////getting and setting content////
///////////////////////////////////


///////innerHTML and outerHTML///////
//both includes HTML tags
//1:Gets the elements within the selected element, including HTML tags and text spaces
//2:Gets the elements within the selected element and the element itself, including HTML tags but no text spaces

//example 1: substitute a text
document.getElementById("titulo1").innerHTML="<p>Animales que viven con nosotros (modificado tras haber sido renderizado)</p>";
console.log ("innerHTML:"+document.getElementById("titulo1").innerHTML);
console.log ("outterHTML:"+document.getElementById("titulo1").outerHTML);


//example 2: adds a text to a list of elements
//const parrafos=document.getElementsByTagName("p");
//let listaParrafos=Array.prototype.slice.call(parrafos);
let listaParrafos=Array.from (document.querySelectorAll("p.normal"));
listaParrafos.forEach(elemento => {
    setTimeout(()=>{
        elemento.innerHTML+=" <strong>Este texto ha sido añadido tras crear el DOM usando innerHTML</strong>";        //Should innerText or textContend be used, HTML tags would've been literally added
    }, 3000);
});

//example 3
let aux=document.querySelector("h3");
aux.outerHTML="<h2>Este es el nuevo encabezado de nivel 2 que ha sustituido al de nivel 3</h2>";
console.log (aux.outerHTML);        //be carefull, aux still holds a reference to the former element altough it doesn't exist anymore!!
console.log (document.querySelector("h2"));     //undefined (h2 no longer exists and there were only one h2 header)

///////innerText and outerText ///////
//Both gets ONLY the visible text of the element and its children, without HTML tags or text spacing
//1:If overriding it doesn't override selected HTML element
//2:If overriding it overrides selected HTML element
document.querySelector("h2").innerHTML="<h3>nuevo encabezado de nivel 2<h3>";
setTimeout(()=>{
    document.querySelector("h2").outerHTML="<h3>ahora el encabezado de nivel 2 pasa a ser de nivel 3</h3>";
    }, 10000);


///////textContent///////
//Gets all the text of the element and its descendants, including invisible, with spacing. Doesn't get HTML tags and doesn't interpret them --> Should be used
//example 1
let seleccionado=Array.from(document.getElementsByClassName("especial"));
seleccionado.forEach(elemento=>{
    setTimeout(()=>{
        elemento.textContent+=" <strong>Este texto ha sido añadido tras crear el DOM usando textContent</strong>";
    }, 3000);
});

//example 2
setTimeout(()=>{
    document.getElementById("enviar").textContent="Texto cambiado";
}, 2000);


//////////////////////////////////
///manipulating node attributes///
//////////////////////////////////

//HTML standard attributes have the DOM properties counterparts. They're case insensitive
//Non standard attributes can be created. they are useful to pass custom data from HTML to JavaScrip or to mark HTML elements to do something with them in JavaScript. User doesn't get affected

/*Example of standard and non-standard attributes:
<section class="container" data-attr="value"></div>
class and data-attr are attributes. the former is standard, the latter is not
*/

//first of all, I select the element I'll be working with
let imagen=document.querySelector("img");


/////////Creating and setting attributes/////////
//with standard attributes, setAttribute or the name of the attribute preceeded by a dot can be used
//with custom attributes, only setAttribute

//remember: document.body is equivalent to document.querySelector("body")
document.body.myData = {        //it works, but DOM is not modified, so it can't be used
    name: 'Cesar',
    title: 'Emperador'
  };
  //this is the way of creating non-standard attributes
document.body.setAttribute('fecha','11/1/2024');  //it works
imagen.alt="el nuevo texto de la imagen";
imagen.src="https://picsum.photos/300";
imagen.derechos_de_autor="no";  //it doesn't work
imagen.setAttribute("derechos_de_autor", "no");


/////////Checking element's attributes/////////
//example 1: changing src attribute from images
console.log("¿La imagen tiene atributos?:"+imagen.hasAttributes());
console.log("¿La imagen tiene el atributo derechos de autor?:"+imagen.hasAttribute("derechos_de_autor"));
console.log("¿La imagen tiene el atributo cámara?:"+imagen.hasAttribute("camara"));
if (imagen.hasAttribute('src')){
    console.log ("El atributo src de la imagen es "+imagen.getAttribute('src'));
    imagen.setAttribute('src', 'https://picsum.photos/300');
}

//example 2: adding id to the first paragraph of any section, no matter if it's direct child or not
aux=document.body.querySelectorAll("section p:first-of-type");
let i=0;
for (let parrafo of aux){
	parrafo.setAttribute("id",`id_parrafo${i}`);
    i++;
}


/////////Getting attribute names/////////
console.log("Nombres de los atributos de la imagen:"+imagen.getAttributeNames());
imagen.getAttributeNames().forEach((atributo)=>{
    console.log(atributo);
});

//attributes can also be obtained with document.querySelector("img").attributes
//but this way an NamedNodeMap is returned, not an Array and, besides, attributes values are returned as well
//it can be iterated by using for...of
for (let atributo of imagen.attributes){
    console.log (atributo);
}

//in order to use forEach, an array has to be created in any of the three following ways
Array.from (imagen.attributes).forEach((atributo)=>{
    console.log (atributo);
});
  
[...imagen.attributes].forEach((atributo)=>{
    console.log (atributo);
});
  
Array.prototype.forEach.call(
    imagen.attributes,
    (atributo)=>{ console.log (atributo); }
);

//example creating non-standard attribute and iterating through them
//attributes collection is iterable
document.body.setAttribute('myData.age','25');
for (let attr of document.body.attributes) { 
    console.log( `${attr.name} = ${attr.value}` );
}

/////////Removing attributes/////////
//Removing id from paragraphs
let parrafos=Array.from (document.getElementsByTagName("p"));
parrafos.forEach(element => {
        if (element.hasAttribute('id')){
            element.removeAttribute('id');
        }
});


////////Special attribute: class////////
//class is an attribute than can store many values separated by spaces. Thus, it needs to be treated differently
//aux=document.body.querySelector("#parrafos p.normal");  //I get the first paragraph with any class defined

//getting classes information
//classlist -> returns a list of classes
//classlist.value  -> returns the list of classes as a string
//classlist.length
//classlist.contains("class") -> returns true if element has "class"

let enlaces=document.body.querySelectorAll("a");    //I get the links
for (let enlace of enlaces){
    if (enlace.classList.length>0){
        console.log (enlace.classList.length,
                     enlace.classList.value); 
        console.log(enlace.classList.item(enlace.classList.length-1)); //Returns a specific class
        console.log (enlace.classList.contains("una_clase"));   
    }
}


//performing operation with classes
//classlist.add -> adds a class
//enlaces=document.body.querySelectorAll("a");    //I get the links
for (let enlace of enlaces){
    enlace.classList.add("clase_nueva1","clase_nueva2");        //Adds classes
}

//classname gets and set the class attribute
console.log(enlaces[0].className);      //gets all classes
enlaces[0].className="una_clase";       //sets classes

//classlist.replace(old, new)
enlace=enlaces[0].classList;    //Selecting the first link
enlace.replace("clase_nueva1", "clase_mas_nueva1");

//classlist.remove -> removes a class
enlace.remove("clase_nueva2");
enlace=enlaces[1].classList;    //Selecting the first link
enlace.remove(enlace.item(enlace.length-1));    //removes the last class


//classlist.toggle("clase") -> remove "clase" if exists, creates if not
enlace.toggle("clase_nueva");


/////////toggling boolean attribute's value/////////
//Boolean values are tricky in HTML. If they exists, they are true. Otherwise, they are false. They have no value, just exists or no. If they are assigned to true, they are treated as an string
let boton=document.getElementById("enviar");
boton.setAttribute("disabled", "");     //it's a boolean attribute with true value.
boton.toggleAttribute("disabled");  //if it doesn't exist, it is created (in a boolean attribute, means true). If it exists, it is removed (in a boolean attribute, means false)


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