////////////////
////creation////
////////////////
//example 1: literal expresion
//useful when you know the expression at writing time
const exp1=/gato/;

//example 2: by using object creator
//useful to create dynamic regular expressions taken from user inputs
const exp2=new RegExp('perro');

//Example 3: Creating a dynamic regexp and combining with modifiers
const palabraUsuario = prompt("¿Qué palabra quieres buscar?");
const regexDinamico = new RegExp(palabraUsuario, 'ig');

/*
Use literal syntax (/pattern/) when:
    The pattern is fixed and known in advance.
    You are looking for simpler, more readable code.
    You want the best performance in static situations.

Use the RegExp(‘pattern’) constructor when:
    You need a dynamic pattern that can change at runtime.
    The pattern depends on a variable or user input.
    You work with special characters that can be difficult to handle with literal syntax.
*/  

///////////////
////testing////
///////////////
//Example 1: test if a regular expression works
const regex=/javascript/;
const regex2=/JavaScript/;
const cadena='JavaScript es divertido y no es difícil. Te gustará JavaScript';
console.log(regex.test(cadena)); //false
console.log(regex2.test(cadena)) //true

//Example 2: get an array with coincidence
console.log(regex.exec(cadena)); //null
console.log(regex2.exec(cadena)) //Array["JavaScript"]


////////////////////////////////////////
////properties of regular expression////
////////////////////////////////////////
/*
  -source: The pattern of the regular expression as a string.
  -flags: The flags used in the regular expression.
  -lastIndex: position in the string from which the next search for a match will start when using a method with a g (global) or y (sticky) modifier. This property is automatically updated after each match, being its value the position right after the last letter of the last coincidence. Its value is essential to control the progress of the search through the string.
  -global: if global flag (g) is set
  -ignoreCase: if ignorecase flag (i) is set
  -sticky: if sticky flag (y) is set
  -multiline: if multiline flag (m) is set
  -unicode: if unicode flag (u) is set
*/

//Example 1: some properties
const regex = /javascript/i;
console.log(regex.source); // "javascript"
console.log(regex.sticky); // false
console.log(regex.ignoreCase); // true
console.log(regex.global); // false

//Example 2: lastIndex and iterating through results
const texto='JavaScript es divertido y no es difícil. Te gustará JavaScript';
const regexG = /javascript/ig; // Coincide con números (modificador global)

let resultado;
while ((resultado = regexG.exec(texto)) !== null) {
//  console.log(`Coincidencia encontrada con g: ${resultado[0]} en la posición ${regexG.lastIndex - resultado[0].length}`);
  console.log(`index is now at ${regexG.lastIndex} position`);
}


/////////////////
////modifiers////
/////////////////
/*
  /g: looks for all occurrences, not only the first one
  /i: case insensitive
  /m: Multiline (makes ^ and $ match at the beginning and end of each line).
  /s: Allows . to match line breaks.
  /y: Sticky search (match from last found position).
  /u: Unicode support, allowing to work with non ASCII characters, like emojis or special characters
*/

//example 1: testing using modifiers
const cadena='JavaScript es divertido y no es difícil. Te gustará JavaScript';
regex=/javascript/i;
console.log(regex.test(cadena));


//Example 2: combining modifiers
regex2=new RegExp('javascript', 'ig');
console.log (regex.exec(cadena));


//Example 3: create dinamic patterns (only possible by using object)
//  The symbol | acts as an OR operator. For example, cat|dog matches ‘cat’ or ‘dog’.
const palabrasClave = ['JavaScript', 'Python', 'Ruby'];
// Creating a dynamic pattern
const patronDinamico = new RegExp(palabrasClave.join('|'), 'ig');   //logic OR with i and g flags
const texto = 'Me encanta programar en JavaScript y Python';

console.log(patronDinamico.exec(texto));    //it only returns the first occurrence

//Example 4: sticky modifier gives you much more control
const texto = "hola hola.hola";
const regexY = /hola/y;   //it'll look for hola strictly at lastIndex position
const regexG = /hola/g;   //it'll look for hola starting at lastIndex position

let resultado;
while ((resultado = regexY.exec(texto)) !== null) {
    console .log(`Coincidencia encontrada con y: ${resultado[0]} en la posición ${regexY.lastIndex - resultado[0].length}`);
}

//if we wanted to search regexY again from the beginnig, we would have to restart regexY.lastIndex=0

while ((resultado = regexG.exec(texto)) !== null) {
    console .log(`Coincidencia encontrada con g: ${resultado[0]} en la posición ${regexG.lastIndex - resultado[0].length}`);
}





///////////////////////////////
////looking for occurrences////
///////////////////////////////
//exec returns an array with only the first occurrence even if a global flag is utilized. In order to get the rest of them, you must iterate as it keeps an index
//Example 1: getting the first occurrence
regex=/javascript/ig;
console.log(regex.exec(cadena));  // ["JavaScript"]

//Example 2: iterating to get all the occurrences
let resultado;
while ((resultado = regex.exec(cadena)) !== null) {
  console.log(resultado[0]); // "JavaScript", luego "JavaScript"
}


///////////////////
////Quantifiers////
///////////////////
/*
  *: Matches 0 or more repetitions of the previous element.
  +: Matches 1 or more repetitions of the previous element.
  ?: Matches 0 or 1 repetition of the previous element.
  {n}: Matches exactly n repetitions of the previous element.
  {n,}: Matches n or more repetitions of the previous element.
  {n,m}: Matches between n and m repetitions of the previous element.

  *, + and ? are greedy by default (they try to match as many characters as possible). If you add ? after them, they become lazy or non-greedy, trying to match as few characters as possible.
  */

//Example 1: *, zero or more repetitions
regex = /ho*la/;
console.log(regex.exec('hla'));         // ["hla"]
console.log(regex.exec('hola'));        // ["hola"]
console.log(regex.exec('hooooola'));    // ["hooooola"]

//Example 2: +, 1 or more repetitions
regex = /ho+la/;
console.log(regex.exec('hola'));        // ["hola"]
console.log(regex.exec('hooola'));      // ["hooola"]
console.log(regex.exec('hla'));         // ["null"]

//Example 3: ?, zero or 1 repetition
regex = /colou?r/;
console.log(regex.exec('color'));       // ["color"]
console.log(regex.exec('colour'));      // ["colour"]

//Example 4: {n} n repetitions
regex = /a{2}/; //will look for 2 consecutive "a"
console.log(regex.exec('aaa'));   // true, it contains, at least, 2 consecutive "a" ["aaa"]
console.log(regex.exec('aa'));    // ["aa"]
console.log(regex.exec('a'));     // null

//Example 5: {n,m} n min m max
regex = /a{2,3}/; //will look for 2 or 3 consecutive "a"
console.log(regex.exec('aaa'));   // true, it contains, at least, 2 consecutive "a" ["aaa"]
console.log(regex.exec('aa'));    // ["aa"]
console.log(regex.exec('a'));     // null

//Example 6: greedy and non-greedy behaviour
//greedy
const cadena = "<div>Texto 1</div><div>Texto 2</div>";
const greedyRegex = /<div>.*<\/div>/g;  // Codicioso. Obtiene tanta información como puede.
console.log(greedyRegex.exec(cadena));	// ['<div>Texto 1</div><div>Texto 2</div>']

//non greedy
const nonGreedyRegex = /<div>(.*?)<\/div>/g;  //non-greedy. It gets as less information as it can
const resultado = [];
let match;
while ((match = regex.exec(cadena)) !== null) {
    resultado.push(match[1]); // Capturamos el contenido dentro de las etiquetas
}
console.log(resultado); // ['Texto 1', 'Texto 2']

//Example 7: another greedy vs non-greedy example
let texto = "a123b456b";
let resultadoCodicioso=texto.match(/a.*b/);
let resultadoNoCodicioso=texto.match(/a.*?b/);
console.log(resultadoCodicioso, resultadoNoCodicioso);  // ["a123b456b"] ["a123b"]


/////////////////////////
////Character classes////
/////////////////////////
/*
  .: Matches any character (except line break).
  \d: Matches any digit (equivalent to [0-9]).
  \D: Matches any character that is not a digit.
  \w: Matches any word character (letters, numbers, underscores) (equivalent to [a-zA-Z0-9_]).
  \W: Matches any non-word character.
  \s: Matches any whitespace (spaces, tabs, line breaks).
  \S: Matches any character that is not a whitespace.
  []: allow  to define a set of characters that can be matched. For example, [aeiou] matches any vowel.
  ^: (negation) [^abc] matches any character other than a, b or c.
  // \ is used to escape character for using any special character in the regular expression
*/

//Example 1: .
regex = /a.b/;
console.log(regex.exec('acb'));   // ["acb"]
console.log(regex.exec('a#b'));   // ["a#b"]
console.log(regex.exec('ab'));     // null

//Example 2: \d, digit
regex = /\d/;
console.log(regex.exec('abc123')); // ["1"]

zzzzzzzzz
const texto = "123.456 789"; // Números con un punto entre ellos
const regexG = /\d+/g; // Coincide con números (modificador global)

let resultado;
regexG.lastIndex = 0; // Inicia desde el principio de la cadena

while ((resultado = regexG.exec(texto)) !== null) {
    console.log(`Coincidencia encontrada con g: ${resultado[0]} en la posición ${regexG.lastIndex - resultado[0].length}`);
}





//Example 3: \D, no digit
regex = /\D/;
console.log(regex.exec('123abc')); // ["a"]

//Example 4: \w, word character
regex = /\w/;
console.log(regex.exec('abc123_')); // ["a"]
console.log(regex.exec('$%&'));     // null

//Example 5: \W, not word character
regex = /\W/;
console.log(regex.exec('abc123!')); // ["!"]

//Example 6: \s, whitespace
regex = /\s/;
console.log(regex.exec('Hola mundo')); // [" "]

//Example 7: \S, not whitespace
regex = /\S/;
console.log(regex.exec('   Hola')); // ["H"]

//Example 8: []
regex = /[aeiou]/;
console.log(regex.exec('Hola'));  // ["o"]
console.log(regex.exec('zzz'));    // null

//Example 9: ^
regex = /[^aeiou]/;
console.log(regex.exec('Hola')); // ["H"]

//Example 10: \
regex=/\//;  //regular expression to look for "/"
console.log(regex.exec('/hola/'));  //["\"]


/////////////////////////
////groups and ranges////
/////////////////////////
//() allow parts of a regular expression to be grouped together.
//Example 1: ()
regex = /(abc)+/;
console.log(regex.exec('abcabcabc')); // ["abcabcabc"]


//////////////
////Limits////
//////////////
/*
  ^: Matches the beginning of a string.
  $: Matches the end of a string.
  \b (word boundary): It matches the position where a word character (such as letters and numbers) meets a non-word character (such as spaces, punctuation, etc.). It does not consume any characters, it simply marks the position.
  \B (non-word boundary): Matches a position that is not a word boundary. That is, it is used to find a match between two word characters or two non-word characters.
*/

//Example 1: ^, line start
regex = /^Hola/;
console.log(regex.exec('Hola mundo'));  // ["Hola"]
console.log(regex.exec('Mundo Hola'));  // null

//Example 2: $, end line
regex = /mundo$/;
console.log(regex.exec('Hola mundo'));  // ["mundo"]
console.log(regex.exec('mundo Hola'));  // null

//Example 3: \b, word boundary
regex = /\bHola\b/;
console.log(regex.exec('Hola mundo')); // ["Hola"]
console.log(regex.exec('Holanda'));    // null

//Example 4: \B, not word boundary
regex = /\Bola/;
console.log(regex.exec('Hola')); // ["ola"]

//Example 5: check if a string is an email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const email = "ejemplo@dominio.com";
console.log(emailRegex.exec(email)); // true