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
let cadena_Objeto=new String("Una Cadena Objeto");


//////////////////////////////////
////getting string information////
//////////////////////////////////
//example 1: getting string length
console.log (cadena_Objeto.length);

//example 2: getting the character located at certain position
console.log (cadena_Objeto[2], cadena_Objeto.at(2));  //two ways of accessing 3rd character
console.log (cadena_Objeto.at(-1), cadena_Objeto[cadena_Objeto.length-1]);  //two ways of accessing the last character


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
texto="Hola Hola Hola";
console.log(texto.replace("Hola", "Adiós"));  // 'Adiós Hola Hola'

//Example 4: replace can be used with regular expressions
str = "La casa es azul y azul se va a quedar";
console.log(str.replace(/azul/g, "verde")); // "La casa es verde y verde se va a quedar"

//Example 5: replacing all occurrences of a substring
console.log(texto.replaceAll("Hola", "Adiós")); // 'Adiós Adiós Adiós'

//Example 6: removing empty spaces from the beginning and ending of a string
texto="   hola   hola   hola   ";
console.log (cadena_Objeto.trim());

//Example 7: removing empty spaces only from the beginning of a string
console.log (cadena_Objeto.trimStart());

//Example 8: removing empty spaces only from the ending of a string
console.log (cadena_Objeto.trimEnd());

//example 9: padStart (total_length, character) adding characters at the beginning until length is reached. If length is less than string's length, it does nothing
console.log (cadena_Objeto.padStart(cadena_Objeto.length+5,"a")); //adds as many "a" at the beginning as necessary so cadena_objeto's size is cadena_Objecto.length+5

//example 10: padEnd
console.log (cadena_Objeto.padEnd(cadena_Objeto.length+5, 0));


//////////////////////////////
////looking for substrings////
//////////////////////////////
//Example 1: indexOf returns the position of a searched substring in a string
let buscar="a"
//console.log(cad3.indexOf(buscar)); 
if (cad3.indexOf(buscar) != -1){  //returns the position, starting at position 1, where it starts the first occurrence of a aa within a string. Return -1 if not found
  console.log(`cadena ${buscar} encontrada`);
}

//Example 2: the starting position from which look for the substring can be specified
console.log(cad3.indexOf(buscar, 20)); 

//Example 3: lastIndexOf returns the position where it starts the last occurrence of a substring within a string. Return -1 if not found
console.log(cad3.lastIndexOf(buscar));

//example 4: includes returns true or false depending on if a string includes a substring
console.log (cad3.includes("ed"), cad3.includes("esto no está"));

//example 5: startsWith returns true if a string object starts with a substring
console.log(cad3.startsWith("SOME"));

//example 6: endsWith returns true if a string object ends with a substring
console.log (cad3.endsWith("hola"));

//Example 7: search returns the position where the located text starts at the string or -1 if not found
console.log(texto.search("JavaScript"));

//Example 8: search can be used with regular expressions
console.log(str.search(/ES/i));

//match can return an array with the first occurrence of the desired substring or with all occurrences if g flag is set. It returns null if not found 
//Example 9: match usage using a string. It returns an array with the first occurrence. 
console.log(texto.match("es"));   //"es" is a string and it's converted to /es/

//Example 10: match usage with some flags. It returns an array with all occurrences 
console.log(texto.match(/ES/gi));

//Example 11: match usage with a more complex regular expression. It returns an array with all occurrences
texto = "Las manzanas son rojas, pero los plátanos son amarillos. Mzanas voy a comprar";
console.log(texto.match(/\b[m]\w+/gi)); // ["manzanas", "Manzanas"]

//Example 12: looking for a substring by using regular expressions
//match can be used with regular expressions
texto = "JavaScript es divertido y no es difícil";
console.log(texto.match(/javascript/i));

//Example 13: looking for all occurrences by using regular expressions
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