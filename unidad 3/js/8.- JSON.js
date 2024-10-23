/*JSON is a global object used to work with data in JSON (JavaScript Object Notation) format.
 It allows to convert a complex object into a string to send it over a network in a standarized way

Basic rules: 
  -Objects and Arrays: Property names must be double-quoted strings; trailing commas are forbidden.
  -Numbers: Leading zeros are prohibited. A decimal point must be followed by at least one digit. NaN and Infinity are unsupported.
*/


/////////////////////////////////////////
////converting a object into a string////
/////////////////////////////////////////
//stringify Converts a JavaScript value (such as an object or array) into a JSON string. This is useful when you need to send data to a server in JSON format or store it somewhere as a string.
//Example 1: stringify
const persona = { nombre: "Ana", edad: 25 };
const personaJSON = JSON.stringify(persona);
console.log(personaJSON, typeof(personaJSON));  // {"nombre":"Ana","edad":25} String


//Example 2: stringify
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
};

let json = JSON.stringify(student);
console.log(typeof(json), json);

//////////////////////////////////////////
////converting a string into an object////
//////////////////////////////////////////
//Example 1: transform a string into an object
const personaJSON = '{"nombre":"Ana","edad":25}'; //it's a string
const persona = JSON.parse(personaJSON);
console.log(persona.nombre, typeof(persona));  // Ana Object

//Example 2:  transform a string into an object
const jsonText = `{
    "browsers": {
      "firefox": {
        "name": "Firefox",
        "pref_url": "about:config",
        "releases": {
          "1": {
            "release_date": "2004-11-09",
            "status": "retired",
            "engine": "Gecko",
            "engine_version": "1.7"
          }
        }
      }
    }
  }`;
    console.log(JSON.parse(jsonText));