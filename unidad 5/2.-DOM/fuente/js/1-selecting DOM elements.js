///////////////////////////////////////
////Methods that return HTMLElement////
///////////////////////////////////////

//Example 1: getElementById
//returns an element whose id matches a passed string.
let aux=document.getElementById("parrafo1");
console.log (aux);

//Example 2: querySelector
// returns the first element within the document that matches the given selector
// There are some shortcuts: 
//  -document.querySelector("body") is equivalent to document.body
//  -document.querySelector("head") is equivalent to document.head
//  -document.querySelector("html") is equivalent to document.documentElement
console.log(document.head);
console.log(document.querySelector("section"));


//////////////////////////////////////////
////Methods that return HTMLCollection////
//////////////////////////////////////////

//Example 1: getElementsByTagName
//returns a collection of all the elements present in the document that have the specified tag name, in the order of their appearance in the document.
let aux2=document.getElementsByTagName("p");
console.log (aux2[0], aux2.length);

//Example 2: getElementsByClassName
//returns an HTMLCollection of elements that match the passed class name
let aux3=document.getElementsByClassName("parrafo_cuerpo");
console.log (aux3[0], aux3.length);



////////////////////////////////////
////Methods that return NodeList////
////////////////////////////////////

//Example 1:getElementsByName
//returns a NodeList of the elements that match the value of the name attribute with the passed string. Useful at forms
let aux4=document.getElementsByName("nombre");
console.log (aux4[0],aux4.length);


//Example 2: querySelectorAll
//returns a NodeList of elements that matches with one or a group of CSS selectors. 
nodos=document.querySelectorAll('li');
console.log (nodo.length, nodo[0]);     //despide having just one node, it is still a NodeList
nodos.forEach(nodo=>{
    console.log (nodo);
})
