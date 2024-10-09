"use sctrict";
/*JavaScript provides a Number primitive type and a Number object
Primitive type is lighter, more efficient in terms of being stored in memory and easier to use. However, sometimes it is recommended to use an object: 
    -Store additional properties
    -Interoperability with APIs expecting objects
    -Using some methods and properties of Number object like Number.MAX_VALUE...
    -Objects can mutate, change their value and they are still the same object, pointing to the same memory location. Primitive types, can't. You can assign a new value to the same variable, but this is a new reference although it keeps the same variable name.
*/
/////////////////////////
////creating a number////
/////////////////////////

let numero_primitivo1=5;   //primitive type
let numero_primitivo2=10;
let numero_objeto1=new Number(5);   //object
let numero_objeto2=new Number(10);
let numero_no_valido=new Number("hola");    //NaN


//Number object is focused on representation of numbers and individual operations on them like verification, conversion or access

/*some properties:
    Number.MAX_VALUE: El valor numérico más grande representable en JavaScript (~1.7976931348623157e+308).
    Number.MIN_VALUE: El valor numérico más pequeño representable (~5e-324).
    Number.NaN: Representa el valor "Not-A-Number" (NaN).
    Number.NEGATIVE_INFINITY: Representa el valor de infinito negativo.
    Number.POSITIVE_INFINITY: Representa el valor de infinito positivo.*/


////////////////////////////
////checking information////
////////////////////////////
/*there global functions and Number object methods that perform the same operation
    -global functions -> work on primitive number. They convert the argument to number before performing the operation
    -Number object static methods (they are invoked from Number itself, doesn't need to instantiate number object)-> work on number objects. They are stricter than global functions, as they do not convert the argument into numbers
*/

//example 1: isFinite returns true if it's a finite number
console.log(isFinite(5),
            isFinite(new Number(5)),
            isFinite(Infinity), 
            isFinite(NaN), 
            isFinite(null), 
            isFinite("10"),
            isFinite(false),
            isFinite("Pepito piscinas"));

//JavaScript converts a primitive type into a Number Object (autoboxing) before checking if it's a number
//It checks if its argument is a number, but it doesn't convert to number
console.log(Number.isFinite(5),
            Number.isFinite(new Number(5)),
            Number.isFinite(Infinity), 
            Number.isFinite(NaN), 
            Number.isFinite(null), 
            Number.isFinite("10"),
            Number.isFinite(false),
            Number.isFinite("Pepito piscinas"));

//Example 2: isNaN tries to convert argument to a number and returns true if the argument is not a number
console.log (isNaN(5), 
            isNaN(Infinity), 
            isNaN(NaN), 
            isNaN(null), 
            isNaN("10"), 
            isNaN(false), 
            isNaN("Pepito piscinas"));

//It just checks if its argument is Not a number, but it doesn't try to convert it to number
console.log (Number.isNaN(5),
            Number.isNaN(Infinity),
            Number.isNaN(NaN),
            Number.isNaN(null),
            Number.isNaN("10"),
            Number.isNaN(false),
            Number.isNaN("pepito piscinas"));

//Example 3:method isInteger. There's no global function
//Static Method of Number object. It doesn't convert to number
console.log (Number.isInteger(5),
            Number.isInteger(new Number(5)),
            Number.isInteger(null),
            Number.isInteger("10"),
            Number.isInteger(false)
);


//////////////////
////Conversion////
//////////////////

//Example 1: valueOf converts the object to its primitive value counterpart
let objNum1 = new Number(10);       // Objeto Number con valor 10 (entero)
let objNum2 = new Number(10.5);     // Objeto Number con valor 10.5 (no entero)

console.log(objNum1.valueOf(), typeof(objNum1.valueOf()));
console.log(objNum2.valueOf(),  typeof(objNum2.valueOf()));

//example 2: conversion to string by using toString method and String global function. Numeric system base can be specified
//using toString with a Number object, it first converts to a number and then applies toString.
console.log (new Number(Infinity).toString(),
            new Number(NaN).toString(),
            new Number(null).toString(),
            new Number(false).toString(),
            new Number(5).toString()
);

//toString ca be used this way due to the autoboxing (envoltura). JavaScript temporary creates this primitive value to an equivalent object
console.log(Infinity.toString(),  // "Infinity"
            NaN.toString(),       // "NaN"
            String(null),         // "null"
            false.toString(),     // "false"
            (5).toString()        // "5"
);

//string is a global function that converts correctly undefined and null
console.log (String(Infinity),
            String(NaN),
            String(null),
            String(false),
            String(5)
);


//Example 3: converting strings to numbers
//Global function Number (same name as Number Object)
//Converts any value passed to it (string, boolean, null, etc.) to a number (integer or decimal), regardless of the format of the string.
console.log(Number('100px'), // NaN
            Number('12.5em'), // Nan
            Number('12.5'), // 12.5
            Number('a12'), // NaN
            Number('12'), //12
            Number('0xff'), //255
            Number('0b1110'),  //14
            Number(true),   //1
            Number(null),   //0
            Number(undefined)   //NaN
            );

//parseInt and parseFloat are global functions that get a string and convert to a number
//They only work with text strings and convert it to an integer or real number, ignoring any non-numeric characters from the first invalid character onwards.
console.log(parseInt('100px'), // 100
            parseInt('12.5em'), //12
            parseInt('12.5'), //12
            parseInt('a12'), // NaN
            parseInt('ff',16), //255
            parseInt('1110',2),    //14
            parseInt(true), // NaN
            parseInt(null), // NaN
            parseInt(undefined) // NaN
            );

console.log(parseFloat('100px'), // 100
            parseFloat('12.5em'), //12.5
            parseFloat('12.5'), //12.5
            parseFloat('a12'), // NaN
            parseFloat('ff',16), //NaN
            parseFloat('1110',2),    //1110
            parseFloat(true), // NaN
            parseFloat(null), // NaN
            parseFloat(undefined) // NaN
            );

//Since ES6, Number object includes a reference to parseInt and parseFloat global functions for organization purposes. Therefore, they work the same way as global functions do
console.log(Number.parseInt('100px'), // 100
            Number.parseFloat('12.5em'), // 12.5
            Number.parseInt('a12'), // NaN
            Number.parseInt('12.5'), //12
            Number.parseInt('0xff',16), //base 16
            Number.parseInt(true),  // NaN
            Number.parseInt(null),  // NaN
            Number.parseInt(undefined)  // NaN
            );

//For clarity sake, if some methods or properties of Number object are in use, it's better to use Number static methods instead of global functions

//////////////////////////////
////IMPRECISE CALCULATIONS////
//////////////////////////////
//Javascript uses IEEE754 DP to storage real numbers: 1 bit for sign, 52 for number and 11 for exponent
//integer number rank: -2^53+1 to 2^53-1

//example 1: not enoght room for such a big number
console.log (1e500); //not enough room for storing such a big number. Returns Infinity

//example 2: problems representing some real numbers
//due to the way JS represents real numbers, some of them can't be accurately represented in floating point
//9999999999999999 is just over 2^53-1, so it can't be accurately represented. Number is rounded to the next one that can be represented
console.log(9999999999999999);  //returns 10000000000000000

//example 3: problems representing some real numbers
//for better precision, libraries like Decimal.js, Big.js or bignumber.js should be used
//translation 0.1 and 0.2 into binary gives infinite decimals
let sum = 0.1 + 0.2; 
console.log (sum)   //0.30000000000000004
console.log ( sum == 0.3 ); // false

//example 4: how to fix unaccurately real number representation
//toFixed rounds the result using n digits after the point and returns it as a string
console.log( sum.toFixed(2)==0.3 ); // true 


//////////////////
////comparison////
//////////////////

//primitive values can be directly compared among them. Object Number can't. They are compared as references meaning they are equal only if they point to the same memory location
let a=42;
let b=new Number(42);
let c=new Number(42);

console.log (a === 42);       // true, comparación directa de primitivos
console.log (b === 42);       // false, b es un objeto, no un primitivo
console.log (b == 42);        // true, el valor de `b` se convierte para la comparación
console.log (b==c); //false. They point to different memory locations, although they have the same value
console.log (b.valueOf()==c.valueOf());     //true

