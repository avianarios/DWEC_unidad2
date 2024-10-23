/*regular expressions

Sets: Brackets [] allow you to define a set of characters that can be matched. For example, [aeiou] matches any vowel.
Negation: [^abc] matches any character other than a, b or c.
Groups: Parentheses () allow parts of a regular expression to be grouped together. For example, (abc)+ matches one or more repetitions of ‘abc’.
Alternation: The symbol | acts as an OR operator. For example, cat|dog matches ‘cat’ or ‘dog’.
Escape character for using any special character in the regular expression: \
*/

////////////////
////creation////
////////////////
//example 1: literal expresion
const exp1=/gato/;

//example 2: by using object creator
const exp2=new RegExp('perro');


///////////////
////testing////
///////////////
//Example 1: test if a regular expression works
const regex=/javascript/;
const regex2=/JavaScript/;
const cadena='JavaScript es divertido y no es difícil. Te gustará JavaScript';
console.log(regex.exec(cadena)); //false
console.log(regex2.texto(cadena)) //true

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
regex=/javascript/i;
console.log(regex.exec(cadena));  //true


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

//  |: logic OR
//example 3: create dinamic patterns (only possible by using object)
// Lista de palabras clave que el usuario puede ingresar
const palabrasClave = ['JavaScript', 'Python', 'Ruby'];

// Crear un patrón dinámico que busque cualquiera de las palabras clave
const patronDinamico = new RegExp(palabrasClave.join('|'), 'ig');   //logic OR with i and g flags

// Cadena de texto en la que se buscarán las palabras clave
const texto = 'Me encanta programar en JavaScript y Python';

// Usamos el patrón dinámico para buscar coincidencias en el texto
console.log(patronDinamico.exec(texto));  //true

// También podemos usarlo para encontrar todas las coincidencias
const coincidencias = texto.match(patronDinamico);
console.log(coincidencias); // ["JavaScript"]

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

///////////////////////////////////////////////////////////
////getting information about regular expression itself////
///////////////////////////////////////////////////////////
/*Properties:

    source: The pattern of the regular expression as a string.
    flags: The flags used in the regular expression.
    lastIndex: Index where the next search with exec() will start.
    global, ignoreCase, multiline, sticky, unicode: Indicate whether certain flags are active.*/
//Example 1:
regex = /javascript/ig;
console.log(regex.source); // "javascript"
console.log(regex.sticky); // false
console.log(regex.ignoreCase); // true

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

regex = /a{2,3}/; //will look for 2 or 3 consecutive "a"
console.log(regex.exec('aaa'));   // true, it contains, at least, 2 consecutive "a" ["aaa"]
console.log(regex.exec('aa'));    // ["aa"]
console.log(regex.exec('a'));     // null

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
*/

//Example 1: .
regex = /a.b/;
console.log(regex.exec('acb'));   // ["acb"]
console.log(regex.exec('a#b'));   // ["a#b"]
console.log(regex.exec('ab'));     // null

//Example 2: \d, digit
regex = /\d/;
console.log(regex.exec('abc123')); // ["1"]

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


