"use strict";
///////////LOCAL AND GLOBAL VARIABLES/////////////
//use as few global variables as possible
/*Example of how to use global and local variables*/
let mensaje1="hola don pepito",
    mensaje2="hola don josé";

function muestraMensaje() {
  let mensaje1 = "Saludos desde dentro de la función!"; // If a local variable with the same name is defined, global variable can't be used
  if (1){
    let mensaje1="mensaje 1 dentro del if"; //this variable is local to if block
  }
  console.log (mensaje1, mensaje2);
  mensaje2="cambio el mensaje dentro de la función";  //a global variable can be accessed and modified inside a function
}
  
console.log ("muestro variables globales antes de llamar a la función:", mensaje1, mensaje2); //showing global message variable 
muestraMensaje();
console.log ("muestro variables globales después de llamar a la función:", mensaje1, mensaje2); //showing global message variable 
  

let adios="adios";
function hola(){
    let adios="nos despedimos";
    console.log (adios);
}
hola();


///////////ARGUMENTS/////////////
//iterating over arguments using an object called "arguments". It is a non-iterable object
//It can be converted to an array by using Array.from in order to iterate by using foreach or for..of
let tratamiento="señor";
function saluda(nombre, saludo){
    for (let key in arguments){
      console.log (arguments[key]);
    }
/* Alternative way of iterating
  for (let i=0; i<arguments.length; i++){
    console.log (arguments[i]);
  }*/
  
  let tratamiento="Don";  //local variable prevails over global one
  console.log (`${saludo} ${tratamiento} ${nombre}`);
}

saluda("pepe", "hola");

//Primitive arguments (number, string, boolean, null, undefined, symbol, y bigint) are passed as value, meaning that a copy of them is made. Therefore, its original value won't change
function muestraCliente(nombre, apellido) {
    nombre="el inconfundible "+nombre;  //an argument is a copy of a global variable. Modifying it don't change global variable
    console.log(nombre+" "+apellido);
}

let nombre="Perico";
muestraCliente(nombre,"Pérez");
console.log(nombre);  //nombre variable won't be modified

/*default value when an argument is not provided (modern JavaScript)*/
function muestraCliente2(nombre, apellido="sin apellido") {
    nombre="el inconfundible "+nombre;
    console.log(nombre+" "+apellido);
}

let nombres=["procopio","patrocinio"];

for (let i=0; i<nombres.length; i++)
  muestraCliente2(nombres[i]);    //when missing an argument, its default value is used (defined in the function)


/*It is also possible to provide a function as a default value for a parameter*/
function muestraCliente3(nombre, apellido=buscaApellido(nombre)) { //default value for arguments
    nombre="el inconfundible "+nombre;
    console.log(nombre+" "+apellido);
}

function buscaApellido(nombreBuscado){
    let nombres=[{nombre:"procopio",apellido:"máximo"},
                {nombre:"patrocinio",apellido:"Sánchez"}];
    for (let i=0; i<nombres.length; i++){
        if (nombreBuscado==nombres[i].nombre){
            return nombres[i].apellido;
        }
    }
}

muestraCliente3("procopio");

//Object arguments are passed as a reference meaning that there is a variable pointing to the original object. Thus, If function modifies object using this reference, it will change outside but, if the variable which is pointing to the object, is reassigned and then the object is modified, it won't change
function modificarObjeto(obj) {
  obj.propiedad = 'nuevo valor'; // Modifica el objeto original
}

let miObjeto = { propiedad: 'valor original' };
modificarObjeto(miObjeto);
console.log(miObjeto.propiedad); // 'nuevo valor' (cambia)


function reasignarObjeto(obj) {
  obj = { propiedad: 'otro valor' }; // Reasigna a un nuevo objeto, pero no afecta el original
}

let otroObjeto = { propiedad: 'valor original' };
reasignarObjeto(otroObjeto);
console.log(otroObjeto.propiedad); // 'valor original' (no cambia)



///////////RETURNING VALUES/////////////
let usuario={nombre:"pepe",edad:"17"};
function compruebaMayoriaEdad(edad) {
    if (edad >= 18) {
      return true;
    } else {
      return false;
    }

    //alternative #1 (BEST)
    //return (usuario.edad>=18);

    //alternative #2
    //(usuario.edad>=18) ? return true : return false;
}

function garantizaAcceso(usuario){
  if (compruebaMayoriaEdad(usuario)){
   return(`acceso garantizado a ${usuario.nombre}`);
 }else{
   return(`acceso denegado a ${usuario.nombre}`);
 }

 //alternative
 /*let accion;
 compruebaMayoriaEdad(usuario) ? accion="garantizado" : accion="denegado";
 return (`Acceso a ${usuario.nombre} ${accion}`);*/
}

console.log(garantizaAcceso(usuario));


////////////FUNCTIONS AS EXPRESSIONS////////////////
//as a function can return a value, it can be seen as an expression and, therefore, assigned to a variable
//naming the function it is not mandatory
let showMessage = function(){
  console.log("hola");
};
showMessage();


//as a function can be assigned to a variable, it can be copied
let saluda=function () {   //no need to specify function name
  console.log( "Hola" );
};  //semicolon at the end. It's an expression assigned to a variable
let func=saluda;  //no parenthesis when assigning, they are variables
func(); 
saluda(); 

// function can be used as variable value for other variables
let x = function (num) { return num * num };
let y = x(3);
console.log(y);

//named expression function
//No mandatory function name, but useful when it needs to call itself
let sayHi = function func(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    func("Guest"); // Ahora todo va bien
  }
};

let welcome = sayHi;
sayHi = null;

welcome(); // Hello, Guest (la llamada anidada funciona)

//difference num 1 between function declaration and function expressions
//Function declaration (declaración de función) can be used anywhere even in code declared before it was created
//Function expressions (expresión de función) can't be used in code until the point they are created
saluda("Procopio");
function saluda(nombre){
  console.log("hola "+nombre);
}

saluda("Higinio");
let saluda=function(nombre){
  console.log ("hola "+nombre);
};


//difference num 2 between function declaration and function expressions
//when using strict mode...
//function expressions (expresión de función) can be used even outside the scope they were declared at
//function declaration (declaración de función) can only be used within the scope they were declared at
if (1){
  function saluda(nombre){
    console.log("hola "+nombre);
  }
}else{
  function despidete(nombre){
    console.log("adiós "+nombre);
  }
}
saluda("pepe");


//this is the key. I define the variable outside the scope and, assign to the function inside
let saluda, despidete2;
if (1){
  saluda=function(nombre){
    console.log("hola "+nombre);
  }
}else{
  despidete2=function(nombre){
    console.log("adiós "+nombre);
  }
}

saluda("pepe");

////////////ARROW FUNCTIONS//////////
//similar to function expressions, but specifying the returning value

let sumar=(a,b)=>{
  return (a+b); //could've been done in a single line, but for demonstration purposes
}

//same as before but more concise
let suma=(a,b)=>(a+b);
let saluda=(nombre)=> console.log("yo te saludo "+nombre);
let despidete=()=>console.log("adiós");

let edad=prompt("¿cuál es tu edad?");
let vasPreso=(edad<=18) ?
  () => console.log("vas preso") :  //no arguments, so empty parenthesis must be present
  () => console.log("al correccional");

vasPreso(edad);

//for multiline functions, curly brace and return statement must be used
let resta=(a,b)=>{
  let resultado=a-b;
  return (resultado); //could've been done in a single line, but for demonstration purposes
}

console.log(resta(4,2));
console.log(suma(4,2));

///////////CALLBACK FUNCTIONS (funciones de retorno)//////////////
//a callback function is the one which is passed as argument to another function
//example 1
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


//example 2: Another way to express the last code (not recommended tough)
function pregunta(question, yes, no) {
  if (confirm(question)) yes()  //confirm shows up a window asking accept or cancel
  else no();
}

pregunta(
  "Agree?",
  function() {console.log("estás de acuerdo");},
  function () { console.log ("no estás de acuerdo");}
);


//example 3
function solicitudServidor(consulta, callback){
  setTimeout(function(){
    var respuesta = consulta + "lleno!";
    callback(respuesta);
  },5000);
}

function obtenerResultados(resultados){
  console.log("Respuesta del servidor: " + resultados);
}

solicitudServidor("El vaso está medio  ", obtenerResultados);
//Resultado en la consola luego de 5 segundos:
// El vaso está medio lleno!

//example 4
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