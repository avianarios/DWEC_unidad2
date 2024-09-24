//1. Explain each otuput of the following code
Console.log( null || 2 || undefined );
Console.log( 1 && null && 2 );
Console.log( null || 2 && 3 || 4 );

let x = 3;

console.log((x < 5) && (x > 0)); 
console.log((x < 5) && (x > 6));
console.log((x > 2) || (x > 5));
console.log((x > 3) || (x < 0));
console.log(!(x == 3));
console.log(!(x < 2));


//2. Change the code inside console.log so output is true
const numOne = 5;
const numTwo = 6;
console.log(numOne == numTwo);

//3. Ask user for his age and check that it is not between 14 and 90 inclusively. Create two variants: the first one using NOT !, the second one – without it.

//4. Explain what result will produce the following code
(-1 || 0) && ( 'first' );
(-1 && 0) || ( 'second' );
(null || -1 && 1)  && ( 'third' );
