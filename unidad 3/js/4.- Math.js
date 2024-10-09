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

////////////////
////rounding////
////////////////
let real=3.193;
let real2=3.6;

//example 1: floor rounds down
console.log (Math.floor(real), Math.floor(real2));

//example 2: ceil rounds up
console.log (Math.ceil(real), Math.ceil(real2));

//example 3: round rounds to the next integer
console.log (Math.round(real), Math.round(real2));

//example 4: trunc removes anything beyond decimal point
console.log (Math.trunc(real),Math.trunc(real2);


/////////////////////////////////////
////Basic mathematical operations////
/////////////////////////////////////
let numero3=4;
//when using an object, JavaScript has to unbox it and convert to a primitive number, so it adds a delay
//example 1:Math.abs turn negative into positive numbers
console.log (Math.abs(-5));
console.log (Math.abs(new Number(-15.2)));

//example 2: square root
console.log (Math.sqrt(numero3));

//example 3: power
console.log (Math.pow(2, numero3));

//example 4: neperian logarithm
function logBase10(x) {
    return Math.log(x) / Math.log(10);
}

console.log(logBase10(100)); // 2 (porque 10^2 = 100)

//example 5: minimum number
console.log (Math.min(1, 5, 9, 21));

//example 6: max number
let arr = [3, 5, 1];
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

//it expects a list of items, not an array
console.log (Math.max(1, ...arr, ...arr1, 2, ...arr2, 25));   //using spread operator (since ES6) that expands elements from an iterable component into individual ones

//example 7: random number. 
//Caution: It is not really a random number, it's a pseudorandom number between 0 (included) and 1 (not included)
//for secure applications, crypto.getRandomValues() must be used
let max=10;
let min=5;
console.log (Math.random()*max);    //pseudorandom real number
console.log (Math.floor(Math.random()*max));    //pseudorandom integer number
console.log (Math.random()*(max-min)+min);  //pseudorandom number between min (included) and max (not included)
console.log (Math.random()*(max-min+1)+min);  //pseudorandom number between min (included) and max (included)

///////////////////////////////
////trigonometric functions////
///////////////////////////////

//Example 1: sin
console.log(Math.sin(Math.PI / 2)); // 1 (seno de 90 grados)

//Example 2: cosin
console.log(Math.cos(Math.PI)); // -1 (coseno de 180 grados)

//Example 3: tan
console.log(Math.tan(Math.PI / 4)); // 1 (tangente de 45 grados)

//Example 4: asin (arcoseno, inverso del seno)
console.log(Math.asin(1)); // π/2 (o aproximadamente 1.5708)

//Example 5:arcosin (arco coseno, inverso del coseno)
console.log(Math.acos(-1)); // π (o aproximadamente 3.14159)

//Example 6: atan (arco tangente, inversa de la tangente)
console.log(Math.atan(1)); // π/4 (o aproximadamente 0.7854)

//Example 7: hypoten(x,y) (hipotenusa de una triángulo rectángulo con catetos de longitud x,y )
console.log(Math.hypot(3, 4)); // 5 (porque 3^2 + 4^2 = 25)
