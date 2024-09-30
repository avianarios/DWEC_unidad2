"use sctrict";
//JavaScript provides a Number primitive type and a Number object
let numero_primitivo1=5;   //primitive type
let numero_primitivo2=10;
let numero_objeto1=new Number(5);   //object
let numero_objeto2=new Number(10);

console.log (numero_primitivo1==numero_objeto1);    //true. JS makes numero_objeto1.valueof(), converting an object into a primitive value 


//Number object is focused on representation of numbers and individual operations on them like verification, conversion or access

/*some properties:
    Number.MAX_VALUE: El valor numérico más grande representable en JavaScript (~1.7976931348623157e+308).
    Number.MIN_VALUE: El valor numérico más pequeño representable (~5e-324).
    Number.NaN: Representa el valor "Not-A-Number" (NaN).
    Number.NEGATIVE_INFINITY: Representa el valor de infinito negativo.
    Number.POSITIVE_INFINITY: Representa el valor de infinito positivo.*/


////Global functions for numbers and Number methods////

//isFinite global function converts the argument to number and returns true if it's a regular number
console.log(isFinite(5),
            isFinite(new Number(5)),
            isFinite(Infinity), 
            isFinite(NaN), 
            isFinite(null), 
            isFinite("10"),
            isFinite(false),
            isFinite("Pepito piscinas"));

//Number.isFinite is a static method of Number. It is a more strict version of global function 
//JavaScript converts a primitive type into a Number Object (autoboxing)
//It checks if its argument is a number, but it doesn't convert to number
console.log(Number.isFinite(5),
            Number.isFinite(new Number(5)),
            Number.isFinite(Infinity), 
            Number.isFinite(NaN), 
            Number.isFinite(null), 
            Number.isFinite("10"),
            Number.isFinite(false),
            Number.isFinite("Pepito piscinas"));


//isNaN tries to convert argument to a number and returns true if the argument is not a number
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


//Static Method of Number object. It doesn't convert to number
console.log (Number.isInteger(5),
            Number.isInteger(new Number(5)),
            Number.isInteger(null),
            Number.isInteger("10"),
            Number.isInteger(false)
);


//parseInt and parseFloat gets a string and convert to a number
console.log(parseInt('100px'), // 100
            parseFloat('12.5em'), // 12.5
            parseInt('a12'), // NaN
            parseInt('12.5'), //12
            parseInt('0xff',16) //base 16
            );

//Number.parseInt and Number.parseFloat are static methods of Number object. They work the same way as global functions. They are present since ES6 and are the preferred methods
console.log(Number.parseInt('100px'), // 100
            Number.parseFloat('12.5em'), // 12.5
            Number.parseInt('a12'), // NaN
            Number.parseInt('12.5'), //12
            Number.parseInt('0xff',16) //base 16
            );


//Numbers can be converted to string
//Number first converts to a number and then applies toString.
//numeric system base can be specified
console.log (new Number(Infinity).toString(),
            new Number(NaN).toString(),
            new Number(null).toString(),
            new Number(false).toString(),
            new Number(5).toString()
);

console.log (String(Infinity),
            String(NaN),
            String(null),
            String(false),
            String(5)
);

//IMPRECISE CALCULATIONS
//Javascript uses IEEE754 DP to storage real numbers: 1 bit for sign, 52 for number and 11 for exponent
//some numbers don't have enough bits while others have infinite decimals

console.log (1e500); //not enough room for storing such a big number. Returns Infinity
let sum = 0.1 + 0.2;  //0.1 and 0.2 can't be stored precisely
console.log ( sum == 0.3 ); // false

//toFixed rounds the result using n digits after the point and returns it as a string
console.log( sum.toFixed(2)==0.3 ); // true 

console.log(9999999999999999);  //returns 10000000000000000





            





//returns a number between 0 and 1 (not included)
console.log(Math.random());

//Returns maximum and minimum number and a number raised to another
console.log (Math.max(3, 7,-10, 1.2));
console.log (Math.min(1,3,12, 0.2));
console.log (Math.pow(2,5));
