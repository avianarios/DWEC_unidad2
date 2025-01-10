/*
JavaScript modules are a way to organise and structure code into smaller, reusable parts.
 Each module
    -can contain classes, functions, variables, or other elements
    -Allows you to export and import only what you need to facilitate collaboration and keep your code clean and organised.

Advantages of using modules
    -Code reuse: Facilitates the use of components in different parts of a project or even in other projects.
    -Organisation: Divide the code into smaller, more specialised files.
    -Encapsulation: Allows you to control which parts of the module are accessible from the outside and which remain private.
    -Avoid naming conflicts: Each module has its own scope.
    -Performance: Modules can be loaded when they are needed, reducing the initial load time of the application.
    -Bundlers, like Webpack or Rollup, are designed to work with ES6 modules. They bundle all the modules into a single file, reducing the number of requests to the server while keeping the advantages of modularity for the programmer.
   
Criteria for dividing into modules:
    1.-Single Responsibility Principle. Each module should have a well-defined responsibility. This means that a module should handle a single part of the system.
    2.-High Cohesion. The elements within a module should be closely related to each other.
    3.-Loose Coupling. Modules should be independent of each other, so that changes in one module do not affect the others. This helps avoiding circular dependencies.
    4.-Reusability. Modules should be designed to be reusable in other parts of the system providing a clear API. Besides, if a function is used in several modules, consider moving it to a separate module.
    5.-Consider having a third party modules that handles interaction with third party services, like a database, an API, or a library. This way, you can easily replace the third party service without affecting the rest of the application.
    6.-Adapt to business logic. Each module should represent a logical and significant part of the system according to business needs. For instance: products, providers and requests could be appropiate modules.
    7.-Size and complexity. Modules shouldn't be too small or too big. A module should be big enough to be useful, but small enough to be easy to understand, maintain, test and scalate.

There are two ways of importing and exporting functions in JavaScript:
    -CommonJS modules: It's used in Node.js and some bundlers for compatibility reasons and due to the fact that in earlier versions, ES6 modules were not supported in Node.js. The syntax is:
        -"require" to import
        -"module.exports" to export
    They are still in use in the latest versions of Node.js, but they are not supported in modern browsers. Despite many libraries still use CommonJS, some are migrating to ES6 modules.
    -ES6 modules: It's used in modern browsers and in Node.js from version 13 onwards. It's the future, so you should utilize them instead of CommonJS modules. The syntax is:
        -"import" to import
        -"export" to export

When I use "type": "module" in package.json, I'm telling node.js to use ES6 modules instead of CommonJS modules.js. Therefore
    -.js files are treated as ES6 modules. If require or module.exports are used in a .js file, an error will be thrown.
    -.cjs files are treated as CommonJS modules. If import or export are used in a .cjs file, an error will be thrown.

If I don't use "type": "module" in package.json, node.js will use CommonJS modules by default. Therefore
    -.js files are treated as CommonJS modules. If import or export are used in a .js file, an error will be thrown.
    -.mjs files are treated as ES6 modules. If require or module.exports are used in a .mjs file, an error will be thrown.
*/


//Example 1: CommonJS modules
//CommonJS is a standard for structuring modules in JavaScript, originally designed for non-browser environments like Node.js. It was one of the first widely adopted solutions for handling modules in JavaScript before the introduction of ES6 modules.

/*
IMPORTING:

const fs = require('fs'); // Importar el módulo de sistema de archivos
const { sumar: adding, restar: substracting } = require('./functions1.js'); // Importación de funciones nombradas
const multiplicar = require('./functions1.js'); // Importación de la función por defecto
const operaciones = require('../4.-organizing code/js/functions2.js'); // Importación de todas las funciones nombradas

console.log(adding(5, 3));
console.log(substracting(10, 7));
console.log(multiplicar(4, 5));
console.log("hola");

try {
    console.log(operaciones.division(10, 2)); // No funcionará porque 'division' no está exportada
} catch (error) {
    console.log("Error: " + error);
}

console.log(operaciones.power(2, 3));
console.log(operaciones.module(15, 3));


EXPORTING:
module.exports={
    sumar,
    restar
}
*/


//Example 2: ES6 modules
//Recommended when code is related and is big enough to be divided into smaller parts
import elNombreQueYoQuiera, { sumar as adding, restar, PI } from './1.-functions1.js';  //importing named functions and default function as elNombreQueYoQuiera
import * as operaciones from './1.-functions2.js';    //importing all named functions

console.log(adding(5, 3));
console.log(restar(10, 7));
console.log(PI);
console.log(elNombreQueYoQuiera(4, 5));

try{
    console.log (operaciones.division(10, 2));        //wont work as division is not exported
}catch (error){
    console.log ("Error: " + error);
}
console.log (operaciones.power(2, 3));
console.log (operaciones.module(15, 3));





