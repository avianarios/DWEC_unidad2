/*JavaScript provides a string primitive type and a String object
Primitive type is lighter, more efficient in terms of being stored in memory and easier to use. However, sometimes it is recommended to use an object: 
    -Objects can create properties and store additional information
    -Objects have predefined methods and properties
    -Objects can change their value and they are still the same object, pointing to the same memory location. Primitive types, can't. You can assign a new value to the same variable, but this is a new reference although it keeps the same variable name. Advantage: saves memory and allows to share values
    -Interoperability with APIs expecting objects. Remember an API is a set of functions, methods or access points that a program or system makes available for others to interact with it. These functions define:
        -What can be done: For example, obtaining information, sending data or performing specific operations.
        -How it is to be done: Including the parameters to be sent, the data structures to be accepted and the format of the responses.
        -What is returned: As data in a defined format (e.g. JSON or XML) or even error messages in case something does not work as expected.
*/

/////////////////////////
////creating a string////
/////////////////////////
//example 1: creating as a primitive type
let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;
let lista= `Lista de compra:
    *Pepinillos
    *Tomates
    *Calabacines`;  //it has to be with inverted quotes
let cad1="Esto es un texto aleatorio";
let cad2="Ho\nla"; // /n is new line while /t is tab
let texto = "JavaScript es divertido y no es difícil";
//quotes need to be protected in order to print them inside the message
//if they are the same to quote the message
let cad3="SOME CHARACTERS need to be protected in order to be printed: \" \\";  

//example 2: creating as an object
const cadObj1=new String("Una Cadena Objeto");


//////////////////////////////////
////getting string information////
//////////////////////////////////
//example 1: getting string length
const cadObj1=new String("Una Cadena Objeto");
console.log (cadObj1.length);

//example 2: getting the character located at certain position
const cadObj1=new String("Una Cadena Objeto");
console.log (cadObj1[2], cadObj1.at(2));  //two ways of accessing 3rd character
console.log (cadObj1.at(-1), cadObj1[cadObj1.length-1]);  //two ways of accessing the last character


/////////////////
////Iterating////
/////////////////
//Example 1: by using for...of, as strings are iterable objects
let cad1="Esto es un texto aleatorio";
for (let letra of cad1){
  console.log(letra);
}

//Example 2: by converting a string into an array with split and using forEach
let cad1="Esto es un texto aleatorio";
cad1.split("").forEach(letra => {
  console.log(letra);
});

//Example 3: by converting a string into an array with Array.from and using forEach
let cad1="Esto es un texto aleatorio";
Array.from(cad1).forEach(letra => {
  console.log(letra); // Imprime: 'h', 'o', 'l', 'a'
});

//Example 4: by using traditional for
let cad1="Esto es un texto aleatorio";
for (let i = 0; i < cad1.length; i++) {
  console.log(cad1[i]);
}



//////////////////////////////////////////////
////modifying the value of a string Object////
//////////////////////////////////////////////
//Objects are inmutable. If their value has to be changed, a new object has to be created
//any operation converts an object into a primitive value

//Example 1: changing a single character
const cadObj1=new String("Una Cadena Objeto");
cadObj1[0]="a";  //strings can't be modified this way as they are inmutable objects
console.log(cadObj1, typeof cadObj1);

//Example 2: assigning a new string to an object
const cadObj1=new String("Una Cadena Objeto");
let cadObj2=cadObj1;
console.log(typeof(cadObj2), cadObj2);
cadObj2="hola";
console.log(typeof(cadObj2), cadObj2);

cadObj2=new String ("hola");
console.log(typeof(cadObj2), cadObj2);

//Example 3: concatenating two string objects
const cadObj1=new String("Una Cadena Objeto");
const cadObj2=new String("Otra Cadena Objeto");

let cad3=cadObj1.valueOf()+" concatenado "+cadObj2.valueOf();
console.log(cad3,typeof cad3);


//////////////////////////////
////Operation over strings////
//////////////////////////////
//The following methods belongs to String object, but can be applied also to primitive values due to autoboxing (JS temporarily converts a primitive value into an object in order to apply the method)

//Example 1: changing case to capital letters and small letters
const cadObj1=new String("Una Cadena Objeto");
let mayusculas=cadObj1.toUpperCase();   //autoboxing
let minusculas=cadObj1.toLowerCase();
let cadObj1May=new String(cadObj1.toUpperCase());
let cadObj1Min=new String(cadObj1.toLowerCase());

console.log(mayusculas, typeof mayusculas, cadObj1May, typeof cadObj1May);

//Example 3: replacing the first occurrence of a substring
texto="Hola Hola Hola";
console.log(texto.replace("Hola", "Adiós"));  // 'Adiós Hola Hola'

//Example 4: replace can be used with regular expressions
texto = "La casa es azul y azul se va a quedar";
console.log(texto.replace(/azul/g, "verde")); // "La casa es verde y verde se va a quedar"

//Example 5: replacing all occurrences of a substring
texto="Hola Hola Hola";
console.log(texto.replaceAll("Hola", "Adiós")); // 'Adiós Adiós Adiós'

//Example 6: removing empty spaces from the beginning and ending of a string
texto="   hola   hola   hola   ";
console.log (texto.trim());

//Example 7: removing empty spaces only from the beginning of a string
texto="   hola   hola   hola   ";
console.log (texto.trimStart());

//Example 8: removing empty spaces only from the ending of a string
texto="   hola   hola   hola   ";
console.log (texto.trimEnd());

//example 9: padStart (total_length, character) adding characters at the beginning until length is reached. If length is less than string's length, it does nothing
texto="   hola   hola   hola   ";
console.log (texto.padStart(texto.length+5,"a")); //adds as many "a" at the beginning as necessary so string's size is increased by 5

//example 10: padEnd. Same as padStart but at the end
texto="   hola   hola   hola   ";
console.log (texto.padEnd(texto.length+5, 0));


//////////////////////////////
////looking for substrings////
//////////////////////////////
//Example 1: indexOf returns the position of a searched substring in a string
let buscar="JavaScript";
const texto='JavaScript es divertido y no es difícil. Es seguro que te gustará JavaScript';
//console.log(cadena.indexOf(buscar)); 
if (texto.indexOf(buscar) != -1){  //returns the position, starting at position 1, where it starts the first occurrence of substring within a string. Return -1 if not found
  console.log(`cadena ${buscar} encontrada`);
}

//Example 2: the starting position from which look for the substring can be specified
console.log(texto.indexOf(buscar, 20)); 

//Example 3: lastIndexOf returns the position where it starts the last occurrence of a substring within a string. Return -1 if not found
console.log(texto.lastIndexOf(buscar));

//example 4: includes returns true or false depending on if a string includes a substring
console.log (texto.includes(buscar), texto.includes("esto no está"));

//example 5: startsWith returns true if a string object starts with a substring
console.log(texto.startsWith("SOME"));

//example 6: endsWith returns true if a string object ends with a substring
console.log (texto.endsWith("corredor"));

//Example 7: search works with regular expressions. It returns the position where the regular expression is located at the string or -1 if not found
const texto='JavaScript es divertido y no es difícil. Es seguro que te gustará JavaScript';
console.log(texto.search("javascript"));  //it automatically creates the /mancha/ regular expression
console.log(texto.search(/JAVASCRIPT/i));

//Example 8: match looks for a regular expression and returns an array with what has been found. It returns null if not found 
const texto='JavaScript es divertido y no es difícil. Es seguro que te gustará JavaScript';
console.log(texto.match("aburrido"));   //"aburrido" is a string and it's converted to /aburrido/
console.log(texto.match(/javascript/i));
console.log(texto.match(/ES/gi));
console.log(texto.match(/\b[J]\w+/gi)); 

//Example 9: looking for all occurrences by using regular expressions
//matchAll can only be used with regular expressions
texto = "abc123def456ghi789";
let regex = /\d+/g;
let matches = texto.matchAll(regex);  //it returns an iterable with results
for (const match of matches) {
  console.log(match[0]);  // 123, 456, 789
}


//////////////////////////
////getting substrings////
//////////////////////////
//Example 1:String is an iterable object, so it works with spread operator
let cad="hola";
let a,b,c,d=console.log(...cad);    //returns every letter separately 
console.log([...cad]);  //returns an array of letters

//Example 2: using substring to extract a substring. It doesn't modify original string
console.log (cad1.substring(0,4));  //extracts a substring from position 0 to 4
console.log (cad1.substring(7));  //extracts a substring from position 7 to the end

//Example 3: slice returns a substring without changing original
console.log (cad3.slice(2,10));     //returns substring from position 2 to 9
console.log (cad3.slice(15, cad3.length-10));    //returns substring from position 15 until 11 to the end
console.log (cad3.slice(25));  //returns substring from position 25 to the end
console.log (cad3.slice(-10,-5));  //returns substring from 10th to the end until 5th to the end

//Example 4: split returns an array of substrings separated by the argument without changing original
console.log (cad3.split(" "));

//Example 5: split can be used with regular expressions
let cadena = "Juan Pérez, Calle Falsa 123. María López, Avenida Siempre Viva 456; Pedro Gómez: Calle de la Amargura 789";
let partes = cadena.split(/[,.;:\s]+/);
console.log(partes);
// Output: ["Juan", "Pérez", "", "Calle", "Falsa", "123", "María", "López", "", "Avenida", "Siempre", "Viva", "456", "Pedro", "Gómez", "", "Calle", "de", "la", "Amargura", "789"]


///////////////////////////
////converting a string////
///////////////////////////
//example 1: split converts a string into an array
let razasGato="pelo corto, pelo largo, angora, callejero";
let matrizRazasGato=razasGato.split(",");
console.log (matrizRazasGato, typeof(matrizRazasGato));


//////////////////////////
////repeating a string////
//////////////////////////
//example 1: repeating a string
const cadObj1=new String("Una Cadena Objeto");
console.log (cadObj1.repeat(3));


/////////////////////////
////comparing strings////
/////////////////////////
//Example 1: by using double equal
console.log ("adiós"==new String("adiós"));  //true

//Example 2: by using comparison operators based on unicode value of each letter. Capital letters are placed first
console.log ("ADIÓS"<"adiós");  //true

//Example 3: by using localeCompare, that allows to specify comparison conditions. It returns -1, 0 or 1 depending on a string being less, equal or greater than another
/*
using the standard comparison operators like <, >, or === to compare strings in JavaScript does not take into account language-specific (locale) rules, so the behaviour may be incorrect or unexpected when you are working with accents, special characters or capital letters in languages that are not the default language of your computer.

localeCompare allows to specify
  -language: allows to compare text strings according to language-specific linguistic rules
  -sensitivity:
    -base: Ignores accent and case differences
    -accent: Case-insensitive, but distinguish accents
    -case: Ignores accents, but is case-sensitive
    -variant: Full sensitivity
*/
console.log ("texto".localeCompare("Texto"));  //-1, as the first string is less than second one (t<T)
console.log ("äpfel" < "zitrone"); // false. It's not working as ä comes before z
console.log ("äpfel".localeCompare("zitrone", 'de')); // -1,now it's working

//Example 4: by using localeCompare with sensitivity
console.log ("café".localeCompare("Cafe", 'es', {sensitivity: 'base'}));  //0

//Example 5: by using localeCompare to sort
var elements = [ 'casa', 'cacao', 'CAFÉ', 'café', 'california' ];
console.log (elements.sort((a, b) => a.localeCompare(b)));
// Returning sorted elements