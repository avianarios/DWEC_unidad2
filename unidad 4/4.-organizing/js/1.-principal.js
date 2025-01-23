//Example 1: CommonJS modules
//CommonJS is a standard for structuring modules in JavaScript, originally designed for non-browser environments like Node.js. It was one of the first widely adopted solutions for handling modules in JavaScript before the introduction of ES6 modules.

/*
IMPORTING:

const fs = require('fs'); // Importar el módulo de sistema de archivos
const { sumar: adding, restar: substracting } = require('./functions1.js'); // Importación de funciones nombradas
const multiplicar = require('./functions1.js'); // Importación de la función por defecto
const operaciones = require('../4.-organizing code/js/functions2.js'); // Importación de todas las funciones nombradas

console.log(adding(5, 3));
console.log(substracting(10, 7));
console.log(multiplicar(4, 5));
console.log("hola");

try {
    console.log(operaciones.division(10, 2)); // No funcionará porque 'division' no está exportada
} catch (error) {
    console.log("Error: " + error);
}

console.log(operaciones.power(2, 3));
console.log(operaciones.module(15, 3));


EXPORTING:
module.exports={
    sumar,
    restar
}
*/


//Example 2: ES6 modules
//Recommended when code is related and is big enough to be divided into smaller parts
import elNombreQueYoQuiera, { sumar as adding, restar, PI } from './1.-functions1.js';  //importing named functions and default function as elNombreQueYoQuiera
import * as operaciones from './1.-functions2.js';    //importing all named functions

console.log(adding(5, 3));
console.log(restar(10, 7));
console.log(PI);
console.log(elNombreQueYoQuiera(4, 5));

try{
    console.log (operaciones.division(10, 2));        //wont work as division is not exported
}catch (error){
    console.log ("Error: " + error);
}
console.log (operaciones.power(2, 3));
console.log (operaciones.module(15, 3));





