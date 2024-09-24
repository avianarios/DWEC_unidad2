"use strict";

//primitive data types: string, number, boolean, null, undefined, bigint
//non-primitive data types: Object, Array, Function, Date, RegExp

//string is a a chain of characters enclosed in single quotes (''), double quotes (""), or inverted quotes (` `)

/*
Primitive data types:
    -Number: Integer or floating point. Special values: Infinity, -Infinity, NaN (not a number). erroneous operations can be done and JavaScript will never stop (you will get NaN)
    -BigInt: Allows to represent integers larger than (2^53)-1. Is created by appending a “n” at the end of an integer number
    -String: Chain of symbols (letters, numers, special symbols), treated as one. Must be surrounded by double, simple quotes or backticks. Double or simple quotes are the same. Backticks are extended functionality, allowing to embed variables or expresions by wrapping them in ${var}
    -Boolean: Logic value that can be true or false
    -null: Developer has to specify this value when creating a variable. It means it has no valid value
    -undefined: Variable has been created but with no value

Complex data types:    
    Object: They are a category of complex data types. They can contain data collections (pair key-value) and functionality (methods). There are some kinds of objects:
        -simple ones as {} 
        -complex ones as arrays, classes or functions
    Array: It's a subtype of an object. It is an ordered list of values of any type enclosed into brackets. Example: [1, 2, 3, “pepe”, “jose”, true]  
    Function: It's an object representing an executable chunk of code that can be called anywhere. function sumar (a,b){ return a+b;}
    Date: An object to work with dates and time. new Date();
    RegExp: An object to work with regular expressions. /\d+/
*/

/*JavaScript es débilmente tipado, es decir
    -no es necesario declarar el tipo de las variables
    -la variable puede cambiar de tipo a lo largo de su vida (no recomendado)*/


//string conversion
//Mal por llamar cadena a un booleano
let cadena = true;
console.log (typeof cadena); // boolean

cadena = String(cadena) // now value is a string "true"
console.log (typeof cadena); // string

//Integer conversion
console.log ( "4"/"2" );    //there's no "/" operator working with strings, so it is converted into integers
console.log (12+"2"); //string concat has preference over integer addition, so the result is a string
let cadena2="123";

console.log (typeof(cadena2));
let num=Number(cadena2);
console.log (typeof(num));

//Boolean conversion
//Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
console.log (Boolean(NaN));
console.log (Boolean(undefined));
console.log (Boolean(0));
console.log (Boolean(""));
//any number distinct than 0 becomes true
console.log (Boolean(11123123));
console.log (Boolean(1));
