//////////////////////////
////navigating the DOM////
//////////////////////////

//following properties are used to navigate. Once reached the desired node, it can be modified as we have previouly seen

////navigation through elements////
//.children, .parentElement, .firstElementChild, .lastElementChild, .previousElementSibling, .nextElementSibling
//children returns an HTMLCollection
let origen=document.querySelector("#perro");
console.log (origen.children);
console.log (origen.children.length);
console.log (origen.children[2]);
/*How to iterate through children
for (let elemento of origen.children){
	console.log(elemento);
}*/

console.log (origen.parentElement);
console.log (origen.firstElementChild);
console.log (origen.lastElementChild);
console.log (origen.previousElementSibling);
console.log (origen.nextElementSibling);

origen.parentElement.id="nuevo_id";
origen.firstElementChild.innerHTML="texto nuevo";



////navigation through nodes////
//remember there are several types of nodes (text, comments, elements...). Whitespace between elements are also a node (#text) and, therefore, it will be selected
//.childNodes, .parentNode, .firstChild, .lastChild, .previousSibling, .nextSibling
//childnodes returns an HTMLCollection

console.log (origen.childNodes);
console.log (origen.childNodes.length);
console.log (origen.childNodes[2]);
/*How to iterate through childNodes
for (let elemento of origen.childNodes){
	console.log(elemento);
}*/
console.log (origen.parentNode);
console.log (origen.firstChild);
console.log (origen.lastChild);
console.log (origen.previousSibling);
console.log (origen.nextSibling);


//closest parent to elemento that matches "section" CSS selector
let elemento=document.querySelector("[alt*='gatito']");
console.log (elemento.closest("section"));