let anyos=prompt("¿Cuántos años tienes?", "año");
let mayoria_edad= (anyos>=18);
let fechoria_cometida=true;

if (mayoria_edad){
  console.log("Eres mayor de edad");
}else{
  console.log("eres menor de edad");
}

//if
if (mayoria_edad && fechoria_cometida){
    let carcel=true;
    console.log("A la cárcel directo");
}else{
  if (fechoria_cometida){
    let reformatorio=true;
    console.log ("Al reformatorio");
  }else{
    console.log("Sigue así, respeta la ley");
  }
}
console.log (carcel); //carcel don't exists outside previous if. It has a local scope

//variable scope
if (1){
  let cadena="hola";
  console.log(cadena);  //prints hola
}
console.log (cadena);   //error! cadena is not defined


/* ternary operator ? : works as an if. It is shorter and appealing, but less readable.
 Be carefull, it's not very intuitive when nesting*/

//Equivalent to first if
( mayoria_edad ) ? console.log("Eres mayor de edad") : console.log("Eres menor de edad");

//Equivalent to second if
//several expressions can be nested (expression 1 ... expression n) but be careful, they have to be expressions.
//Defining a variable is not an expression is a statement
(mayoria_edad && fechoria_cometida) ? (carcel=true, console.log("A la cárcel directo")) : fechoria_cometida ? console.log("Al reformatorio") : console.log("Sigue así, respeta la ley"); //same as before, but much more difficult to read
  

//switch
//this is the only structure that needs break statement
let nota = Number(prompt("¿Qué nota sacaste?",0));
//be careful with variable types. They have to match or comparison won't work

switch (nota) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
    console.log( 'Tienes que estudiar más' );
    break;
  case 5:
    console.log( 'Por los pelos' );
    break;
  case 6:
  case 7:
  case 8:
    console.log( 'Bien' );
    break;
  default:
    console.log( "¡Excelente!" );
}

