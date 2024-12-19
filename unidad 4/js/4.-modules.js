/*JavaScript modules are a way to organise and structure code into smaller, reusable parts.
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
    

Working with node.js needs a {  "type": "module"  } in package.json (preferred) or renaming exporting and importing files to .mjs

a program should be divided into modules following the principles of modularity and separation of concerns
*/

//two ways of importing and exporting code:
//Option 1: loading several js files in the same html file and using global variables
    //not recommended: lacks of encapsulation and possible conflict between variables. loading order is important
<!-- index.html -->
<script src="file1.js"></script>
<script src="file2.js"></script>
<script src="main.js"></script>

// file1.js
function greet() {
    console.log("Hello, World!");
}
  
// file2.js
greet(); // Llama a la función definida en file1.js

//Option 2: using modules. Recommended
import { sumar as adding, restar as substracting } from './4.-exported-functions1.js';  //importing named functions
import multiplicar from './4.-exported-functions1.js';    //importing the default function
import * as operaciones from './4.-exported-functions2.js';    //importing all named functions

console.log(adding(5, 3));
console.log(substracting(10, 7));
console.log(multiplicar(4, 5));
console.log("hola");

console.log (operaciones.division(10, 2));
console.log (operaciones.potencia(2, 3));
console.log (operaciones.modulo(15, 3));


//modules can be imported statically or dynamically
//Dynamic import allows you to import modules at runtime, when you need them. This is called lazy loading (carga diferida o perezosa) and reduces the initial load time of the application.
async function loadModule() {
    const module = await import('./module.js');
    module.myFunction(); // Usar la función importada dinámicamente
}

loadModule();
