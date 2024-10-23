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
//quotes need to be protected in order to print them inside the message
//if they are the same to quote the message
let cad3="SOME CHARACTERS need to be protected in order to be printed: \" \\";  

//example 2: creating as an object
let cadena_Objeto=new String("Una Cadena Objeto");

//////////////////////////////////
////getting string information////
//////////////////////////////////
//example 1: getting string length
console.log (cadena_Objeto.length);

//example 2: getting the character located at certain position
console.log (cadena_Objeto[2], cadena_Objeto.at(2));  //two ways of accessing 3rd character
console.log (cadena_Objeto.at(-1), cadena_Objeto[cadena_Objeto.length-1]);  //two ways of accessing the last character


////////////////////////////
////repeating the string////
////////////////////////////
//example 1: repeating a string
console.log (cadena_Objeto.repeat(3));


///////////////////////////
////changing the string////
///////////////////////////
//strings are inmutable. Every change results in a new string object
//Example 1: changing some characters
cadena_Objeto[0]="a";  //strings can't be modified this way as they are inmutable objects

//Example 2: changing case to capital letters and small letters
let mayusculas=cadena_Objeto.toUpperCase();
let minusculas=cadena_Objeto.toLowerCase();
console.log(cadena_Objeto);       // Una Cadena Objeto
console.log(mayusculas, minusculas);  // UNA CADENA OBJETO, una cadena objeto

//Example 3: replacing the first occurrence of a substring
let texto="Hola Hola Hola";
console.log(texto.replace("Hola", "Adiós"));  // 'Adiós Hola Hola'

//Example 4: replacing all occurrences of a substring
console.log(texto.replaceAll("Hola", "Adiós")); // 'Adiós Adiós Adiós'

//Example 5: removing empty spaces from the beginning and ending of a string
texto="   hola   hola   hola   ";
console.log (cadena_Objeto.trim());

//Example 6: removing empty spaces only from the beginning of a string
console.log (cadena_Objeto.trimStart());

//Example 7: removing empty spaces only from the ending of a string
console.log (cadena_Objeto.trimEnd());

//example 8: padStart (total_length, character) adding characters at the beginning until length is reached. If length is less than string's length, it does nothing
console.log (cadena_Objeto.padStart(cadena_Objeto.length+5,"a")); //adds as many "a" at the beginning as necessary so cadena_objeto's size is cadena_Objecto.length+5

//example 9: padEnd
console.log (cadena_Objeto.padEnd(cadena_Objeto.length+5, 0));

//////////////////////////////
////looking for substrings////
//////////////////////////////
//Example 1: getting positions of a searched string 
let buscar="a"
//console.log(cad3.indexOf(buscar)); 
if (cad3.indexOf(buscar) != -1){  //returns the position, starting at position 1, where it starts the first occurrence of a aa within a string. Return -1 if not found
  console.log(`cadena ${buscar} encontrada`);
}
console.log(cad3.indexOf(buscar, 20)); //returns the position, starting at position 20, where it starts the first occurrence of a substring within a string
console.log(cad3.lastIndexOf(buscar));  //returns the position where it starts the last occurrence of a substring within a string. Return -1 if not found

//example 2: getting true or false if a string includes a substring
console.log (cad3.includes("ed"), cad3.includes("esto no está"));

//example 3: return true if a string object starts with a substring
console.log(cad3.startsWith("SOME"));

//example 4: return true if a string object ends with a substring
console.log (cad3.endsWith("hola"));

//example 5: looking for a substring by using regular expressions
//match belongs to String object, but it's similar to exec, which belongs to RegExp object
let texto = "JavaScript es divertido y no es difícil";
let resultado = texto.match(/es/);  // Busca la primera ocurrencia de "es"
console.log(resultado);  // ["es"]


//example 6: looking for all occurrences by using regular expressions
let texto = "abc123def456ghi789";
let regex = /\d+/g;
let matches = texto.matchAll(regex);

for (const match of matches) {
  console.log(match[0]);  // 123, 456, 789
}


//////////////////////////
////getting substrings////
//////////////////////////
//Example 1: using substring to extract a substring. It doesn't modify original string
console.log (cad1.substring(0,4));  //extracts a substring from position 0 to 4
console.log (cad1.substring(7));  //extracts a substring from position 7 to the end

//Example 2: slice returns a substring without changing original
console.log (cad3.slice(2,10));     //returns substring from position 2 to 9
console.log (cad3.slice(15, cad3.length-10));    //returns substring from position 15 until 11 to the end
console.log (cad3.slice(25));  //returns substring from position 25 to the end
console.log (cad3.slice(-10,-5));  //returns substring from 10th to the end until 5th to the end

//Example 3: split returns an array of substrings separated by the argument without changing original
console.log (cad3.split(" "));

//Example 4:String is an iterable object, so it works with spread operator
let cad="hola";
let a,b,c,d=console.log(...cad);    //returns every letter separately 
console.log([...cad]);  //returns an array of letters

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


/////////////////
////Iterating////
/////////////////
//Example 1: by using for...of, as strings are iterable objects
for (let letra of cad1){
  console.log("letra");
}

//Example 2: by converting a string into an array with split and using forEach
cad1.split("").forEach(letra => {
  console.log(letra);
});

//Example 3: by converting a string into an array with Array.from and using forEach
Array.from(cad1).forEach(letra => {
  console.log(letra); // Imprime: 'h', 'o', 'l', 'a'
});

//Example 4: by using traditional for
for (let i = 0; i < cad1.length; i++) {
  console.log(cad1[i]);
}



zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz


//example 5: look for the first occurrence by using regular expressions
//match returns an array with all coincidences or null if none
let texto = "JavaScript es divertido y no es difícil";
let resultado = texto.match(/es/);  // Busca la primera ocurrencia de "es"
console.log(resultado);  // ["es"]



//example 6: search by using modifiers
console.log(texto.match(/es/g));  // ["es es"]  // look for any occurrence of "es"
console.log(texto.match(/ES/i));  // ["es"]   Search for "es" string

//Example: 7: search by using common characters
const cadena = "Mi número es 12345";
console.log(cadena.match(/\d+/)); // ["12345"]  //search in a greedy way, any number
console.log(cadena.match(/\d+?/)); // ["1"]  //search in a non-greedy way, any number (similar as /\d/)
console.log(cadena.match(/\bmi\b/i)); // ["Mi"] Search for "mi" word case insensitive \b represents a word boundary
console.log(cadena.match(/\w/));


/*
zzzzzzzzzzzzz
String.match(regex): Busca coincidencias en la cadena.
String.replace(regex, replacement): Reemplaza coincidencias en la cadena.
String.search(regex): Devuelve el índice de la primera coincidencia.
String.split(regex): Divide la cadena en un array usando el patrón como delimitador.
*/

//Example 9: using word boundary and global modifier
const texto = "Las manzanas son rojas, pero los plátanos son amarillos.";
const resultado = texto.match(/\b[m]\w+/g); // ["manzanas"]

//Example 10: using greedy and non-greedy pattern
let texto = "a123b456b";
let resultadoCodicioso=texto.match(/a.*b/);
let resultadoNoCodicioso=texto.match(/a.*?b/);
console.log(resultadoCodicioso, resultadoNoCodicioso);  // ["a123b456b"] ["a123b"]


//Example 8: check if a string is an email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const email = "ejemplo@dominio.com";
console.log(emailRegex.exec(email)); // true
