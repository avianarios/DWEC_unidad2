/////////////////////////
////scope and closure////
/////////////////////////
/*Scope refers to the accessibility of variables within a program. In JavaScript, there are different types of scope:
    -Global Scope: Variables defined outside any function have a global scope and are accessible from anywhere in the code.
    -Function Scope: Variables defined inside a function are local to that function and cannot be accessed from outside it.
    -Block Scope: Introduced in ES6 with let and const, block scope limits access to variables within blocks of code, such as those delimited by {} braces.
    
Closure is the mechanism that allows a function to access variables in its creation context, even after the outer function has finished executing. It allows functions that remember their state
*/

//example 0
let tratamiento="señor";
function saluda(nombre, saludo){
  let tratamiento="Don";  //local variable prevails over global one
  console.log (`${saludo} ${tratamiento} ${nombre}`);
}

saluda("pepe", "hola");

//example 1
let globalVar = 'Global';
function exampleFunction() {
  let localFuncVar = 'Local a la función';
  console.log(globalVar);
  console.log(localFuncVar);
  //console.log(localIfVar);  //Error. It's not defined
  if (1){
    let localIfVar="Local al if";
    console.log(globalVar);
    console.log(localFuncVar);
    console.log(localIfVar);
  }
}

exampleFunction();
console.log(globalVar);
//console.log(localFuncVar);    //Error. It's not defined
//console.log(localIfVar);    //Error. It's not defined

//example 2
let frase = "hola";

if (1) {
  let usuario = "Patrocinio";
  function saluda() {
    console.log(`${frase}, ${usuario}`);
  }
}

saluda();   //Saluda is unknown outside the "if" block if "use strict" is present

//example 3
/*The lexical environment is the context in which a function was created, not in which it was called. This means that a function remembers the place where it was defined and has access to the variables in that context even if it is invoked elsewhere.

When nested function was created, nombre="pepe". No matter if nombre changes its value, this function will remember its lexical environment
*/
function creaUsuario() {
  let nombre= "Pepe";

  return function() {
    return nombre;
  };
}

let nombre = "Manolo";
//creaUsuario()();
let usuario = creaUsuario();  // crea una función
console.log(usuario()); // Pepe. Es el valor de la variable interna

//Example 4
//nested function lexical environment has no value for the variable "nombre"
function persona(aux){
  let nombre=aux;
  return function(){
    return nombre;
  }
}

let persona1=persona("pepe");
let persona2=persona("manolo");
//same variable, different value
console.log(persona1());
console.log(persona2());


//example 5
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // In add5's closure, x=5. It shows 7
console.log(add10(2)); // In add10's closure, x=10. It shows 12


//example 6
function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;


//example 7
const f = 10;

function sum(a) {
  return function (b) {
    return function (c) {
      // ámbito de funciones externas
      return function (d) {
        // ámbito local
        return a + b + c + d + f;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20


//////////////////////////////////////
/////////Nested functions/////////////
//////////////////////////////////////
//a function created within another function
//inner function is invisible outside and can use outer variables
//example 1
function externa() {
  console.log("Soy la función externa");

  function interna() {
      console.log("Soy la función interna");
  }

  interna(); // Llamamos a la función interna desde dentro de la función externa
}

externa(); // Llamada a la función externa

//Example 2
//inner function can be returned. Thus, by calling external function, internal one is executed
//this is called high-order function
function saludador(quien){
  return function(){ //acá se crea la funcion anónima a retornar. No hace falta nombre
    console.log("hola " + quien);
  }
}
var saluda = saludador("mundo");
saluda(); //hola mundo


////////////////////////////////
////Autoexecutable functions////
////////////////////////////////
//executed once, then can't be called again
//option 1
(function() { console.log("hola mundo") }) ();

//option 2
( function(quien){
  console.log("hola " + quien);
})("mundo");



///////////////////////////////////////////////////////////////
/////passign a variable number of parameters to a function/////
///////////////////////////////////////////////////////////////
//a variable number of variables can be passed to a function with no need of declaring them at the header. 
/*two methods:
  -arguments: is older, is an object with some array features like index and length, doesn't work at arrow functions and is local to function
  -rest operator: is newer, returns an array and works at any situation

*/
//example 1: using "arguments", a local object of any function containing its parameters. It can't be used at arrow functions
function sumaTodo() {
  let acumulado=0;  
  // Recorremos el objeto `arguments` comenzando desde el índice 1
  for (let i = 0; i < arguments.length; i++) {
    acumulado += arguments[i]; // Suma cada argumento al acumulado
  }

  return acumulado;
}

console.log(sumaTodo(1, 2, 3, 4, 5, 6, 7, 8)); // Salida: 36

//example 2: converting "arguments" local object to an array
function restar() {
  let total = args[0]; // El primer número es la base para restar

  for (let i = 1; i < args.length; i++) {
    total -= args[i]; // Restamos cada número al total
  }

  return total;

/*Optional (more at the next unit)
  const args = Array.from(arguments); // Convertimos `arguments` en una matriz
  let total=matriz_argumentos.shift();
  for (let elemento of matriz_argumentos){
    total-=elemento;
  }
  return total;
  */
}

console.log(restar(10, 2, 3, 4)); // Salida: 1 (10 - 2 - 3 - 4)


//Example 3: using rest parameters that creates an array from an undefined number of elements
function sumaTodo(...numeros){
  let acumulado=0;
  for (let num of numeros){
    acumulado+=num;
  }
  return acumulado;
}
console.log (sumaTodo(1,2,3,4,5,6,7,8));


//example 4: rest parameters works with arrow functions
let concatena2 = (...palabras) => {
  let resultado="";
  for (let palabra of palabras){
    resultado+=palabra;
  }
  return resultado;
}

console.log (concatena("a", "b", "c", "d"));


//example 5: more rest parameter
//iterative
function restar(total, ...numeros) {
  // Recorremos la matriz de números
  for (let num of numeros) {
    total -= num; // Restamos cada número al total
  }
  return total; // Devolvemos el total final
}

let aux = 1000;
console.log(restar(aux, 4, 56, 24, 2, 123, 123, 123)); // Salida: 644



/////////////////
////RECURSION////
/////////////////
/*Not all problems can be expressed as recursive algorithms. Two conditions must be satisfied:
  -1.- there must be a base case that finishes recursion
  -2.- there must be a way of dividing problems in subproblems
Recursive functions call themselves with a subproblem as argument until a stop recursion condition is met
*/

//example 1: power
//non recursive v1
function pow(x,n){
  return (x**n);
}
 
//non recursive v2
function pow(x, n) {
  let result = 1;
  // multiply result by x n times in the loop
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
console.log( pow(2, 3) ); // 8

//recursive
function pow(x, n) {
  if (n == 1) { //base case
    return x;
  } else {
    return x * pow(x, n - 1); //breaking down in subproblems
  }
}

console.log( pow(2, 3) ); // 8

//example 2: substraction
//non recursive
function restar() {
  let total = args[0]; // El primer número es la base para restar
  for (let i = 1; i < args.length; i++) {
    total -= args[i]; // Restamos cada número al total
  }

  return total;

/*
  const args = Array.from(arguments); // Convertimos `arguments` en una matriz
  let total=matriz_argumentos.shift();
  for (let elemento of matriz_argumentos){
    total-=elemento;
  }
  return total;
  */
}
console.log(restar(10, 2, 3, 4)); // Salida: 1 (10 - 2 - 3 - 4)

//recursive v1
function restarRecursivoV1() {
  const args = Array.from(arguments); // Convertimos `arguments` en una matriz

  // Función interna recursiva
  function restar(total, index) {
    if (index >= args.length) {
      return total; // Caso base: si se han procesado todos los argumentos
    } else {
      return restar(total - args[index], index + 1); // Restamos el número actual y llamamos a la función de nuevo
    }
  }

  return restar(args[0], 1); // Iniciamos con el primer argumento y el índice 1
}

console.log(restarRecursivoV1(10, 2, 3, 4)); 

//recursive v2
function restarRecursivoV2() {
  let total = arguments[0]; // El primer argumento es el total
  let numeros = Array.prototype.slice.call(arguments, 1); // Convertimos el resto de argumentos en un arreglo

  if (numeros.length == 1) {
    return (total -= numeros.pop());
  } else {
    total -= numeros.pop();
    return restarRecursivoV2(total, ...numeros);
  }
}
console.log(restarRecursivoV2(10,2,3,4));


//recursive v3
function restarRecursivoV3(total,...numeros){
  if (numeros.length==1){
    return (total-=numeros.pop());    //removes the last element from an array and returns it
  }else{
    total-=numeros.pop();
    return (restarRecursivoV3(total,...numeros));
  }
}
console.log(restarRecursivoV3(10,2,3,4));
