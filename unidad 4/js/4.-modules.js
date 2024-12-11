/*JavaScript modules are a way to organise and structure code into smaller, reusable parts.
 Each module
    -can contain classes, functions, variables, or other elements
    -Allows you to export and import only what you need to facilitate collaboration and keep your code clean and organised.

Advantages of using modules
    -Code reuse: Facilitates the use of components in different parts of a project or even in other projects.
    -Organisation: Divide the code into smaller, more specialised files.
    -Encapsulation: Allows you to control which parts of the module are accessible from the outside and which remain private.
    -Avoid naming conflicts: Each module has its own scope.

Working with node.js needs a {  "type": "module"  } in package.json (preferred) or renaming exporting and importing files to .mjs
*/

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