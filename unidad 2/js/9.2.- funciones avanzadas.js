
////////RECURSION//////////
//Two ways of creating a function: traditional
function pow(x, n) {
    let result = 1;
    // multiply result by x n times in the loop
    for (let i = 0; i < n; i++) {
      result *= x;
    }
    return result;
}
console.log( pow(2, 3) ); // 8
  
//or recursive 
//Not all problems can be expressed as recursive functions. Two conditions must be satisfied:
//1.- there must be a base case that finishes recursion
//2.- there must be a way of dividing problems in subproblems
//Recursive functions call themselves
function pow(x, n) {
  if (n == 1) { //base case
    return x;
  } else {
    return x * pow(x, n - 1); //breaking down in subproblems
  }
}
console.log( pow(2, 3) ); // 8


///////Rest parameters////////
//example 1
//allows to pass an undetermined number or parameters. Must be placed at the end
function sumaTodo(aux,...numeros){
  let acumulado=aux;
  for (let num of numeros){
    acumulado+=num;
  }
  return acumulado;
}
console.log (sumaTodo(0,1,2,3,4,5,6,7,8));

//example 2  
let concatena2 = (...palabras) => {
  let resultado="";
  for (let palabra of palabras){
    resultado+=palabra;
  }
  return resultado;
}

console.log (concatena("a", "b", "c", "d"));

//example 3
function restarRecursivo(total,...numeros){
  if (numeros.length==1){
    return (total-=numeros.pop());
  }else{
    total-=numeros.pop();
    return (restarRecursivo(total,...numeros));
  }
}
let aux=1000;
console.log(restarRecursivo(aux,4,56,24,2,123,123,123));

///////Spread syntax////////
//operador de expansión o de propagación//
let arr = [3, 5, 1];
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

//an array can't be passed to Math.max, as it expects a list of items. Spread syntax “expands” an iterable object arr into the list of arguments.
alert( Math.max(1, ...arr, ...arr1, 2, ...arr2, 25));  

/////////Autoexecutable functions///////
//executed once, then can't be called again
//option 1
(function() { console.log("hola mundo") }) ();

//option 2
( function(quien){
  console.log("hola " + quien);
})("mundo");


/////////Nested functions and closure/////////////
//a function created within another function
//inner function is invisible outside and can use outer variables
function saludador(quien){
  return function(){ //acá se crea la funcion anónima a retornar. No hace falta nombre
    console.log("hola " + quien);
  }
}
var saluda = saludador("mundo");
saluda(); //hola mundo


function creaUsuario(quien){
  let nombre; //inner variables can't be accessed outside function
  return function usu(){  //need a name to create properties
    nombre=quien;
    console.log("Usuario "+nombre+" creado");
  };
  usu.apellido="perez";
}

let usua=creaUsuario("pepe");
usua.apellido="gonzález";
console.log (usua.apellido);  //gonzález
console.log (usua.nombre);  //undefined
usua();
  
  
//scope and closure
//"use strict" is needed. Otherwise, some of them would work, but they wouldn't have to
//functions remember where they were created using a [[environment]] property
//allowing them to access an exterior function scope within an inner function

//example 1
nombre= "Máximo";
function saluda() {
  console.log("Hola, " + nombre);
}
nombre="Procopio";
saluda(); //Procopio

//example 2
function creaUsuario() {
  let nombre= "Pepe";

  return function() {
    return nombre;
  };
}

let nombre = "Manolo";
let usuario = creaUsuario();  // crea una función
usuario(); // Pepe. Es el valor de la variable interna

//Example 3
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


//Example 4
let frase = "hola";

if (1) {
  let usuario = "Patrocinio";
  function saluda() {
    console.log(`${frase}, ${usuario}`);
  }
}

saluda();   //Saluda is unknown outside the "if" block if "use strict" is present

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
// ámbito global
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

//Example 8
// ámbito global
const e = 10;

function sum(a) {
  return function sum2(b) {
    return function sum3(c) {
      // ámbito de funciones externas
      return function sum4(d) {
        // ámbito local
        return a + b + c + d + e;
      };
    };
  };
}

const sum2 = sum(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const result = sum4(4);
console.log(result); // 20


///////////callback functions////////////
//a callback function is the one which is passed as argument to another function to be called
//example 1
function calculate(a, b, fn) {
  var c = a + b + fn(a, b);
  return c;
}

function sum(a, b) {
  return a + b;
}

function product(a, b) {
  return a * b;
}

console.log(calculate(10, 20, sum));  //60
console.log(calculate(10, 20, product));  //230
  
  
//example 2
function ask(question, yes, no) {
  if (confirm(question)) yes()  //confirm shows up a window asking accept or cancel
  else no();
}

//showOk and showCancel are called callback functions
function showOk() {
  console.log( "You agreed." );
}

function showCancel() {
  console.log( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);


//example 3
//Another way to express the last code (not recommended tough)
function pregunta(question, yes, no) {
  if (confirm(question)) yes()  //confirm shows up a window asking accept or cancel
  else no();
}

pregunta(
  "Agree?",
  function() {console.log("estás de acuerdo");},
  function () { console.log ("no estás de acuerdo");}
);
  
  
  