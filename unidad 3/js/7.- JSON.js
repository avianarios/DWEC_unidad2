//JSON allows to convert a complex object into a string to send it over a network in a standarized way
/*
Objects and Arrays: Property names must be double-quoted strings; trailing commas are forbidden.
Numbers: Leading zeros are prohibited. A decimal point must be followed by at least one digit. NaN and Infinity are unsupported.
*/

//parse transform a string into an object
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
  

//stringify converts an object into a string
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
};

let json = JSON.stringify(student);

console.log(typeof json, json);