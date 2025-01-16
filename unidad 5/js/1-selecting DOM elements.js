/////////////////////
////DOM selectors////
/////////////////////
//Browser API//
/*
window is the global object. It represents the web browser window
document is a property of the window object representing the web page loaded. It is the DOM entry point to access any element
document has properties as well, representing the elements in the web page:
    -documentElement
    -html
    -head
    -body
*/

console.log(window); // Objeto global
console.log(window.document); // Objeto document
console.log(document.documentElement); // <html>
console.log(document.head); // <head>
console.log(document.body); // <body>



//getElementById//
//returns an element whose id matches a passed string. Since the ids of elements are unique, this is the fastest way to select an element.
let aux=document.getElementById("parrafo1");
console.log (aux);

////getElementsByTagName////
//returns a collection of all the elements present in the document that have the specified tag name, in the order of their appearance in the document.
let aux2=document.getElementsByTagName("p");
console.log (aux2[0], aux2.length);

////getElementsByClassName////
//returns an HTMLCollection of elements that match the passed class name. Bypassing the class names separated by whitespace, we can search for multiple class names.
let aux3=document.getElementsByClassName("parrafo_cuerpo");
console.log (aux3[0], aux3.length);

////getElementsByName////
//returns a NodeList Collection of the elements that match the value of the name attribute with the passed string.
let aux4=document.getElementsByName("nombre");
console.log (aux4[0],aux4.length);

//all getElementsBy* returns a live collection, meaning that if an element is created after getElementsBy* was called, this collection is updated

////querySelector////
//returns the very first element within the document that matches the given selector. It only returns the element that matches with one of the specified CSS selectors, or a group of selectors.
let seccion=document.querySelector("section");
console.log(seccion);
//the previous result can be used as an starting point
let parrafo=seccion.querySelector("p");
console.log(parrafo);

/*body and head have their own shortctus making
document.querySelector("body") is equivalent to document.body
document.querySelector("head") is equivalent to document.head
document.querySelector("html") is equivalent to document.documentElement


////querySelectorAll////
//returns a static NodeList of elements that matches with one or a group of CSS selectors. If no element matches, an empty NodeList is returned.
//if an element is created after querySelectorAll was called, the static nodelist is NOT updated
let art=document.querySelectorAll("article");
console.log (art, art[0].textContent);


let elements=document.querySelectorAll('ul > li:last-child');   //CSS selectors can be used
console.log (elements.length, elements[0].innerHTML);   //although there is only 1 element, it is still an array

/*a NodeList is not an Array. Main differences might be:
    -array methods, like push, pop, slice, join, shift... can't be used
    -NodeList can be live or static. Arrays are always static. Live collections allow to interact with their new members even after being selected
    - 

*/