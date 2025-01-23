//DOM//

//DYNAMIC LIST//

/*let aux=document.getElementById("parrafo1");
console.log(aux);
console.log(document.getElementById("parrafo2"));

let aux2=document.getElementsByTagName("p");
console.log(aux2[0], aux2.length);

let aux3=document.getElementsByClassName("parrafo");
console.log(aux3[1]);

let aux4=document.getElementsByName("nombre");
console.log(aux4[0]);

///STATIC LIST///
//console.log (document.querySelector("section").querySelector("p"));
//let aux6=aux5.querySelector("p");
//console.log(aux5);
//console.log(document.querySelector("section > p"));
//console.log(document.querySelectorAll("section > p"));


//nodetypes//
console.log (document.getElementById("aleatorio").nodeType);



imagenes=Array.from (document.getElementsByTagName("img"));
imagenes.forEach (imagen=>{
  setTimeout(()=>{
	  imagen.alt="otro texto cualquiera";
	  imagen.src="https://picsum.photos/200";
  }, 3000);
});

////innerHTML-outerHTML///
/*console.log (document.getElementsByTagName("header")[0].innerHTML);
document.getElementsByTagName("header")[0].innerHTML="esto es un nuevo texto";

//console.log (document.getElementsByTagName("header")[0].outerHTML);
document.getElementsByTagName("header")[0].outerHTML="esto es un nuevo texto";*/

//innerText-outerText//
/*console.log (document.getElementsByTagName("header")[0].innerText);
console.log (document.getElementsByTagName("header")[0].outerText);
document.getElementsByTagName("header")[0].outerText="<strong>hola</strong>"*/

//textContent//
/*console.log (document.getElementsByTagName("header")[0].textContent);
document.getElementsByTagName("header")[0].textContent="<strong>hola</strong>";

//document.body.fecha="11/1/24";
//document.getElementsByTagName("header")[0].fecha="hola";

//hasAttributes, hasAttribute//
cabecera=document.getElementsByTagName("header")[0];
//console.log(cabecera.hasAttributes());
//console.log (cabecera.hasAttribute("nombre"));

//setAttribute
cabecera.setAttribute("fecha","23/06/2024");
document.getElementsByTagName("img")[0].setAttribute("alt", "nuevo texto");
document.getElementsByTagName("img")[0].alt="texto viejo";

//getAttribute
miFecha=cabecera.getAttribute("fecha");
console.log(miFecha);

//removeAttribute
setTimeout(()=>{
	cabecera.removeAttribute("fecha"); 
  }, 3000);

//getAttributeNames
let propiedades=Array.from(imagenes[0].getAttributeNames());
propiedades.forEach()*/

//Classes
document.querySelector("section:first-of-type");