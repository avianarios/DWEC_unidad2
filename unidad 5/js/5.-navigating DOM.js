///////////////////////////////
////Traversing the children////
///////////////////////////////

//Example 1: traversing children of type Element (type 1)
// node.children returns an HTMLCollection of the inmediate childs of "node" that are of type Element (nodeType 1)
// node.firstElementChild returns the first child of "node" that is of type Element (nodeType 1)
// node.lastElementChild returns the last child of "node" that is of type Element (nodeType 1)
let origen=document.querySelector("#animales");
console.log (origen.children);
console.log (origen.firstElementChild);
console.log (origen.lastElementChild);


//children is an HTMLCollection
console.log (origen.children.length);
console.log (origen.children[1]);
//How to iterate through children?
 for (let elemento of origen.children){
 	console.log(elemento);
 }

Array.from(origen.children).forEach(element => {
	console.log (element);
});


//Example 2: Traversing children of any type
// node.childNodes returns an HTMLCollection of the inmediate childs of "node" of any type
// node.firstChild returns the first child of "node" of any type
// node.lastChild returns the last child of "node" of any type
console.log (origen.childNodes);
console.log (origen.firstChild);
console.log (origen.lastChild);

//childNodes is an HTMLCollection
console.log (origen.childNodes.length);
console.log (origen.childNodes[1]);
//How to iterate through children?
 for (let elemento of origen.childNodes){
 	console.log(elemento);
 }

Array.from(origen.childNodes).forEach(element => {
	console.log (element);
});


///////////////////////////////
////Traversing the siblings////
///////////////////////////////
//Example 1: traversing siblings of type Element (nodeType 1)
// node.previousElementSibling returns the previous sibling of "node" of type Element (nodeType 1)
// node.nextElementSibling returns the next sibling of "node" of type Element (nodeType 1)
console.log (origen.previousElementSibling);
console.log (origen.nextElementSibling);


//Example 2: traversing siblings of any type
// node.previousSibling returns the previous sibling of any type
// node.nextSibling returns the next sibling of any type
console.log (origen.previousSibling);
console.log (origen.nextSibling);


/////////////////////////////
////Traversing the parent////
/////////////////////////////
//Example 1: traversing parent of type Element (nodeType 1)
//node.parentElement returns the inmediate parent of "node" of type Element (nodeType 1)
console.log (origen.parentElement);


//Example 2: traversing parent of any type
//node.parentElement returns the inmediate parent of "node" of any type
console.log (origen.parent);


//////////////////////////
////Chaining movements////
//////////////////////////
//Example 1: chaining movements
console.log (origen.parentElement.nextElementSibling);


//Example 2: modifying properties
document.body
  .children[0]                             // Primer hijo
  .nextElementSibling                       // Hermano siguiente (segundo hijo)
  .nextElementSibling                       // Hermano siguiente (tercer hijo)
  .classList.add = "fondo-verde";    // Cambia el fondo del tercer hijo


//Example 3: creating a non-standard attribute
document.querySelector("p").
	parentElement.
	nextElementSibling.
	firstElementChild.
	setAttribute('data-modificado', 'true');


//////////////////////////
////additional methods////
//////////////////////////
//Example 1: getting the closest node that matches a selector (closest parent to the element that has an alt attribute with the word "gatito" on it)
//node.closest(CSS-Selector) -> returns the closest node to "node" going up in the DOM tree that matches the selector "CSS-Selector"
let elemento=document.querySelector("[alt*='gatito']");
console.log (elemento.closest("section"));


//Example 2: getting if the current node contains a given node
let otroNodo=document.getElementById("perro");
console.log (elemento.contains(otroNodo))