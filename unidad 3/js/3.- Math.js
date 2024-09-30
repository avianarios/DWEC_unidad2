//Math object is focused on performing mathematical operations with numbers but it has nothing to do with representation or solo operations
//there's no constructor,so it can't be instantiated. You can't do let a=new Math();

//Some properties
console.log ("Pi: "+Math.PI+
            "\ne: "+Math.E+
            "\nlog 2: "+Math.LN2+
            "\nlog 10:"+Math.LN10+
            "\nsquare root 2:"+Math.SQRT2+
            "\nsquare root 1/2:"+Math.SQRT1_2+
            "\nbase 2 log e:"+Math.LOG2E+
            "\nbase 2 log 10:"+Math.LOG10E
);

/*some methods about rounding:
    -floor rounds down
    -ceil rounds up
    -round rounds to the next integer
    -trunc removes anything beyond decimal point*/
let real=3.193;
let real2=3.6;
console.log (Math.floor(real),
             Math.ceil(real),
             Math.round(real),
             Math.trunc(real));

console.log (Math.floor(real2), 
            Math.ceil(real2), 
            Math.round(real2), 
            Math.trunc(real2));

/*some basic methods 
    -abs -> absolute: turn negative into positive numbers
    -sqrt -> square root
    -pow -> power
    -exp -> e^x
    -log
    -max
    -min
*/

let numero3=4;
//when using an object, JavaScript has to unbox it and convert to a primitive number, so it adds a delay
console.log (Math.abs(-5));
console.log (Math.abs(new Number(-15.2)));

console.log (Math.sqrt(numero3));
console.log (Math.pow(2, numero3));
console.log (Math.max(4, 5, 2, 1, 18));
console.log (Math.min(1, 5, 9, 21));


///////Spread operator////////
//parámetros de expansión o de propagación//
//since ES6
//Allows to expand elements from an iterable component into individual components

//example 1
//Math.max method expects a list of items, not an array
let arr = [3, 5, 1];
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert( Math.max(1, ...arr, ...arr1, 2, ...arr2, 25));  


//random -> returns a pseudorandom number between 0 (included) and 1 (not included)
let max=10;
let min=5;
console.log (Math.random()*max);    //pseudorandom real number
console.log (Math.floor(Math.random()*max));    //pseudorandom integer number
console.log (Math.random()*(max-min)+min);  //pseudorandom number between min (included) and max (not included)
console.log (Math.random()*(max-min+1)+min);  //pseudorandom number between min (included) and max (included)
//caution: for secure applications, crypto.getRandomValues() must be used


/*trigonometric functions
    sin->sine
    cos->cosine
    tan->tangent
    asin->inverse of sine
    acos->inverse of cosine
    atan->inverse of tangent
*/