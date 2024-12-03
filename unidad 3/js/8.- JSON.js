/*JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy to read and write for both humans and machines. Although based on JavaScript object syntax, JSON is language independent and is used in a wide variety of technologies and programming languages to transfer structured data.

Basic rules: 
  -Objects and Arrays: Property names must be double-quoted strings; trailing commas are forbidden.
  -Numbers: Leading zeros are prohibited. A decimal point must be followed by at least one digit. NaN and Infinity are unsupported.
*/


/////////////////////////////////////////
////converting a object into a string////
/////////////////////////////////////////
//stringify Converts a JavaScript value (such as an object or array) into a JSON string. This is useful when you need to send data to a server in JSON format or store it somewhere as a string.
//JSON.stringify(valor, reemplazador, espacio);

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


//Example 3: using JSON.stringify with replacer function
//Replacers allows to remove or to replace properties from the resulting JSON string
const persona = {
  nombre: "Juan",
  edad: 30,
  contraseña: "secreta"
};

//new clave is "undefined" if its value was "contraseña"
const json = JSON.stringify(persona, (clave, valor) => {
  if (clave === "contraseña") {
    return undefined;
  }
  return valor;
});

console.log(json); // {"nombre":"Juan","edad":30}

//Example 4: using JSON.stringify with replacer function
const persona = {
  nombre: "Juan",
  edad: 30,
  contraseña: "secreta"
};

const json = JSON.stringify(persona, ["nombre", "edad"]);

console.log(json); // {"nombre":"Juan","edad":30}


//Example 4: using JSON.stringify with space parameter
//controls how many spaces to leave in indentation for readability
const persona = {
  nombre: "Juan",
  edad: 30,
  direccion: {
    ciudad: "Madrid",
    pais: "España"
  }
};

//const json = JSON.stringify(persona, null, 2);
const json = JSON.stringify(persona, null, "\t");
console.log(json);



//////////////////////////////////////////
////converting a string into an object////
//////////////////////////////////////////
//parse convert a string into an object
//two parameters: string and reviver
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
const objeto=JSON.parse(jsonText, null, 15);
console.log(objeto, typeof(objeto));

//Example 3: using a replacer function
const json = '{"nombre": "Juan", "edad": 30, "direccion": "Madrid"}';

const objeto = JSON.parse(json, (clave, valor) => {
  if (clave == "direccion") {
    return undefined;  // Elimina la propiedad "direccion"
  }
  return valor;  // Mantiene el resto de las propiedades
});

console.log(objeto);



//////////////////////////////////////////////
///using JSON to compare objects or arrays////
//////////////////////////////////////////////
//example 1: comparing arrays by using JSON.stringify
//JSON.stringify deals correctly with nested arrays, but it doesn't work when there are functions or undefined
console.log (JSON.stringify(arr1) == JSON.stringify(arr2)); // true
console.log (JSON.stringify(arr1) == JSON.stringify(arr3)); // false
const arr4=[1, true, undefined, null, function (){return 1}];
const arr5=[1, true, null, null, null];
console.log (JSON.stringify(arr4)==JSON.stringify(arr5)); //returns true, but it shouldn't

//example 2: comparing objects by using JSON.stringify. It converts correctly nested objects, but it fails when there are functions or undefined within an object
let obj4={
    a: {b:1, c:function(){return 1}},
    b:2,
    c:undefined
};
let obj5={
    a: {b:1},
    b:2
};

console.log (JSON.stringify(obj4)==JSON.stringify(obj5));   //returns true, but it should be false
