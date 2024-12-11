/*
Web browsers starting at 2017 full support JS modules. For older browsers, they need to use polyfills or transpilers to make them work.
    -Polyfills are methods that add missing or limited functionality to older browsers. They can be written by developers or provided by libraries.
    -Transpilers convert code written in one version of JavaScript to another version, enabling you to use newer features in older browsers. Examples include Babel and TypeScript.
*/

///////////////////
////Polyfilling////
///////////////////
/*
Polyfills allow older browsers to work with new JavaScript features that are not natively supported. They are chunks of JavaScript code that add missing functionality to objects so that modern code can work in older browsers. Polyfills do not replace syntax; instead, they implement functionality that is missing, like creating a method that mimics the behavior of Array.includes() for environments where it is not available.

Options:
    -To write your own polyfills 
    -To use external libraries like corejs, regenerator-runtime or es6-shim, either installing (usually in node.js) or by using a CDN like jsdelivr (<script src="https://cdn.jsdelivr.net/npm/core-js/stable/index.js"></script>) or unpkg
*/

//Example 1: polyfilling startsWith method for browsers older than 2015
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (busqueda, posicion) {
        posicion = posicion || 0;
        return this.substr(posicion, busqueda.length) === busqueda;
    };
}

//how to use polyfilled String.prototype.startsWith method
const cadena = "Hola, mundo!";
console.log(cadena.startsWith("Hola")); // true
console.log(cadena.startsWith("Mundo")); // false


//Example 2: polyfilling Array.prototype.includes method for browsers older than 2016
if (!Array.prototype.includes) {
    Array.prototype.includes = function(element) {
      const length = this.length; // Obtener el length de la matriz
      for (let i = 0; i < length; i++) {
        if (this[i] === element) {
          return true; // Si el elemento está presente, retorna true
        }
      }
      return false; // Si no se encuentra el elemento, retorna false
    };
}
  
//how to use polyfilled Array.prototype.includes method
const estudiantesInscritos = ['Juan', 'María', 'Carlos', 'Ana'];

// Verificar si un estudiante está inscrito
function verificarInscripcion(estudiante) {
  if (estudiantesInscritos.includes(estudiante)) {
    console.log(`${estudiante} está inscrito en el curso.`);
  } else {
    console.log(`${estudiante} no está inscrito en el curso.`);
  }
}

verificarInscripcion('María'); // María está inscrita en el curso.
verificarInscripcion('Pedro'); // Pedro no está inscrito en el curso.  


//Example 3: Polyfilling Array.prototype.find method for browsers older than 2015
if (!Array.prototype.find) {
    Array.prototype.find = function(callback, thisArg) {
      const length = this.length; // Obtener el length de la matriz
      for (let i = 0; i < length; i++) {
        // Llamar a la función de callback con el valor de la matriz, el índice y el array
        if (callback.call(thisArg, this[i], i, this)) {
          return this[i]; // Retornar el primer elemento que cumpla la condición
        }
      }
      return undefined; // Si no se encuentra ningún elemento, retornar undefined
    };
}
  

//how to use polyfilled Array.prototype.find method
const array = [5, 12, 8, 130, 44];

const found = array.find(function(element) {
  return element > 10; // Busca el primer número mayor que 10
});

console.log(found); // Output: 12


//Example 4: Polyfilling Promise.all method for browsers older than 2017 (only for curiosity)
if (!Promise.all) {
    Promise.all = function(promises) {
        return new Promise(function(resolve, reject) {
            if (!Array.isArray(promises)) {
                throw new Error('Promise.all expects an array');
            }
            var resolvedCount = 0,
                results = new Array(promises.length);

            promises.forEach(function(promise, index) {
                promise.then(function(result) {
                    resolvedCount++;
                    results[index] = result;
                    if (resolvedCount === promises.length) {
                        resolve(results);
                    }
                }, reject);
            });
        });
    };
}


//Example 5: Polyfilling fetch method for browsers older than 2017  (only for curiosity)
if (!window.fetch) {
    window.fetch = function(url, options) {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(options.method || 'GET', url, true);

            for (var header in options.headers) {
                xhr.setRequestHeader(header, options.headers[header]);
            }

            xhr.onload = function() {
                if (this.status >= 200 && this.status < 300) {
                    resolve(this.response);
                } else {
                    reject(new Error(this.statusText));
                }
            };

            xhr.onerror = reject;

            xhr.send(options.body);
        });
    };
}

//Example 6: Using core-js for full ES6+ features
import 'core-js/stable';
import 'regenerator-runtime/runtime'; // Necesario para async/await

//Example 7: Using core-js with specific features
import 'core-js/features/array/includes'; // Solo polyfill para includes
import 'core-js/features/promise'; // Polyfill para Promise
import 'core-js/features/weakmap'; // Polyfill para WeakMap



///////////////////
////transpilers////
///////////////////
/*
Transpilation is the process of translating modern JavaScript code (e.g., using ES6, ES7, etc.) into an older version that is compatible with browsers that do not support those features. Transpilation only converts syntax (like transforming arrow functions into traditional function expressions) but does not add new functionality. Therefore, methods or features that didn't exist in older versions (like Array.includes()) cannot be provided by transpilation alone—they need to be polyfilled.


const suma = (a, b) => a + b;   //ES6 arrow function. Not recognized by older browsers than 2015

var suma = function (a, b) {    //Transpiled to ES5 function. Now supported by older browsers
    return a + b;
};

Process of transpiling and polyfilling:
    1.- Install babel and core-js
        npm install --save-dev @babel/core @babel/cli @babel/preset-env
        npm install core-js

        @babel/core: The core of Babel, which performs the transpilation.
        @babel/cli: Allows Babel to be run from the command line.
        @babel/preset-env: Configuration that determines how to transpile the code depending on the target browsers.

    2.- Configure babel by creating a .babelrc or babel.config.json file in your project root directory:

        {
            "presets": [
                [
                    "@babel/preset-env",
                    {
                        "useBuiltIns": "usage",
                        "corejs": "3",
                        "targets": "> 0.25%, not dead"
                    }
                ]
            ]
        }



        @babel/preset-env: Allows Babel to transpile code based on the modern JavaScript features you want to use.
        useBuiltIns: Defines how to integrate core-js polyfills:
            -‘usage": Only includes the necessary polyfills depending on the code you use and the target browsers.
            -‘entry": You need to manually import core-js into your code, but includes all necessary polyfills.

        core-js: Specifies the version of core-js you are using (in this case, version 3).
        targets: Define which browsers you will support. In this example: ‘> 0.25%, not dead": Support browsers that have more than 0.25% global usage and are not deprecated.

    3.- Add a script to your package.json file to run Babel: 
        "scripts": {
            "build": "babel src --out-dir dist"
        }
    
    4.- Run the transpilation command: npm run build
    5.- Test the code using a tool like Lambdatest, BrowserStack, Saucelabs, Comparium or Testingbot



*/
