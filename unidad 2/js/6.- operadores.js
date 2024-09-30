"use strict";

/*operands are the numbers over which the operation is performed
operators are the symbols that determines which operation is performed
Unary: operation performed over just one operand
binary: operation performed over two operands
*/

///////string contatenation///////
let cadena="hola",
    cadena2="amados",
    cadena3="alumnos",
    cadena4='7',
    cadena5='10';
console.log(cadena+" "+cadena2+" "+cadena3);
console.log(`${cadena} ${cadena2} ${cadena3}`);
console.log(5+5+'4');

///////
/*Math operators:
 +, -, *, /, % (remainer, resto), ** (exponentiation, exponente) */
 ///////
 let numero=5,
    numero2=12;
console.log (numero2%numero);
console.log (numero**2);
console.log(+cadena4 + -cadena5);   //cadenas are converted into numbers thanks to the +/- operator
let numero_negativo=-numero;
console.log (numero_negativo);

console.log(numero2);
numero2-=numero;
console.log(numero2);

//Be careful with operators precedence. It may change the result of the operation
let x=2*2+1;
console.log(x);
console.log(3+10*2, 3+(10*2), (3+10)*2);

///////Assignment operator///////
//= is also an operator, returning a value. Expressions are evaluated from right to left, taking into account operator precedence
let a=4;
let b=5;
let c=4-(a=b+1);    //confusing syntax. Not recommended
let d=a=b=4+3;
console.log (c, d);

///////modify-in-place operators///////
let n=5;
c=n--;  //first n value is returned and then n value is decremented
console.log(c);
c=--n;  //first n value is decremented and then n value is returned
console.log(c);

console.log(n=n+5, n+=5);
console.log(n);
console.log(n*=2);
console.log(n++, ++n);
console.log(n);
console.log(n--, --n);


/////////comparison operators/////////
let num1=3,
    num2=num3=5;

let cad1="hola",
    cad2="Hola",
    cad3="holas";

//unicode is used to determine the order of the letters
console.log( num1>num2 );
console.log( num2==num3 );
console.log( num1!=num2 );
console.log("----------------------------");
console.log( cad1>cad2 );
console.log( cad1==cad2 );
console.log( cad1=cad2 );
console.log("----------------------------");
console.log( "4">num1 );

/*Equality cannot differentiate 0 or empty string from false 
due to the fact that empty string, and false, are converted to zero*/
console.log("----------------------------");
console.log( 0==false );    //true
console.log( ""==false );   //true

/*therefore, if differentiate is needed, strict equality must be used
strict equality do not convert any data type so, if they are not the same
type, it returns false*/
console.log("----------------------------");
console.log( 0===false );
console.log( ""===false );

//be carefull comparing with a variable that could take null or undefined value
console.log("----------------------------");
console.log( a>4 ); //a is still undefined, but no error is thrown
a=3;
console.log( a>4 );



///////logical operators///////
a=d=true;
b=c=false;  //remember that 0, empty string, Null or NaN are false, 1 or higher are true

//or operator ||
console.log ( a || b, b || c );
console.log( a || b || c); //should any operand be true, evaluation is stopped and true is returned
if ( a || b ){
    console.log("alguno de los dos es verdadero");
}else{
    console.log("los dos son falsos");
}
console.log("---------------------------");

//or processes values until first true valor is found, returning the argument and leaving the unexplored
console.log (a||b||c||"ninguno");
c || console.log("texto");  //should c be false, texto would shown up
console.log("---------------------------");

//and operator (&&)
console.log ( a && b, b && c );
console.log( a && b && c);  //should any operand be false, evaluation is stopped and false is returned
a && console.log("texto");  //if a exists, texto is shown
(a>0) && console.log("a es mayor que cero");    //if a is greater than zero, a text is shwon. No recomendable: poco legible
console.log("---------------------------");

//not operator (!)
console.log(!(c||d)&&(a||b));


///////nulish operator///////
// || do not distinguish between 0, empty string or false. They are all "false" values
// ?? distinguishes
let valor = 0;

//useful to assing default values to variables
let resultado=height || 100;     //returns 100. 0 is converted to false. but it's a number
let resultado2=height ?? 100;     //returns 0 as it should do
console.log (resultado, resultado2);  