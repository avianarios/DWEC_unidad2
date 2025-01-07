/*
Web browsers starting from 2017 fully support JS modules. For older browsers, polyfills or transpilers are needed to make them work.
    -Polyfills are methods that add missing or limited functionality to older browsers. These can be written by developers or provided by libraries.
    -Transpilers convert code written in one version of JavaScript to another, enabling the use of newer syntax in older browsers. Examples include Babel and TypeScript."
*/

///////////////////
////Polyfilling////
///////////////////
/*
Polyfills are pieces of code that translate newer methods, structures, or objects, which are only understandable by modern JavaScript engines, into code that older JavaScript engines can understand. Therefore, they allow older browsers to work with new JavaScript features that are not natively supported. Polyfills do not modify the syntax; instead, they implement missing functionality, such as creating a method that mimics the behavior of Array.includes() in environments where it is not available.

Options:
    -To write your own polyfills 
    -To use external libraries like corejs, regenerator-runtime or es6-shim, 
        -either installing (usually in node.js) and configuring alongside babel or webpack
        -or by using a CDN like jsdelivr (<script src="https://cdn.jsdelivr.net/npm/core-js/stable/index.js"></script>) or unpkg
    -To use web services like polyfill.io that automatically detect the browser and serve the appropriate polyfills. No need for configuration, just include an script tag in the HTML file:
        <script src="https://cdn.polyfill.io/v3/polyfill.min.js?features=es2015,es2016"></script>
        it is easy to use, it is always updated and no need for configuration, but it's less customizable that core-js and you need always an internet connection to use it.

*/

//Example 1: manual polyfilling startsWith method for browsers older than 2015
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


//Example 2: manual polyfilling Array.prototype.includes method for browsers older than 2016
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


//Example 3: manual Polyfilling Array.prototype.find method for browsers older than 2015
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


//Example 4:manual Polyfilling Promise.all method for browsers older than 2017 (only for curiosity)
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


//Example 5:manual Polyfilling fetch method for browsers older than 2017  (only for curiosity)
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


///////////////////
////Transpiling////
///////////////////
/*
Transpilation is the process of translating modern JavaScript code (e.g., using ES6, ES7, etc.) into an older version that is compatible with browsers that do not support those features. Transpilation only converts syntax (like transforming arrow functions into traditional function expressions) but does not add new functionality. Therefore, methods or features that didn't exist in older versions (like Array.includes()) cannot be provided by transpilation alone—they need to be polyfilled.


const suma = (a, b) => a + b;   //ES6 arrow function. Not recognized by older browsers than 2015

var suma = function (a, b) {    //Transpiled to ES5 function. Now supported by older browsers
    return a + b;
};

How to dectect if a browser is modern or legacy?
    -there are several features that can be used to detect if a browser is modern or legacy:
        if ('fetch' in window), if ('Promise' in window), if ('includes' in Array.prototype), if ('assign' in Object) of (if 'noModule' in HTMLScriptElement.prototype)

        //Example: check the nomodule attribute in the script tag in HTML. This will check if the browser supports ES6 modules. If it does, it is a modern browser. If it doesn't, it is a legacy browser.
        if ('noModule' in HTMLScriptElement.prototype) { 
            // Navegador moderno
        } else {
            // Navegador antiguo
        }
    -Use modernizr library. It checks if the browser supports a wide range of features, no ontly ES6 modules, such as:
            -CSS Grid
            -Flexbox
            -WebGL
            -Service Workers
            -Promise, fetch, etc.
        -Modernizr can add CSS classes to the <html> element, allowing you to adapt your styles based on the browser's capabilities.
        -You can configure Modernizr to include only the tests you need, reducing the size of the library.
        -It is appropiate for larger projects, as it can be heavy for small projects, or where you need specific detection capabilities.




Process of transpiling and polyfilling:
    1.- Install node and start off a project
        npm init -y
    2.- Install webpack, babel and core-js
        npm install --save-dev webpack webpack-cli webpack-merge babel-loader @babel/core @babel/preset-env core-js

        webpack: A module bundler that allows you to bundle and minimize your JavaScript files.
        webpack-cli: Allows you to run Webpack from the command line.
        webpack-merge:Permite combinar configuraciones de Webpack para crear diferentes configuraciones (moderno/antiguo).
        babel-loader: Loads babel in webpack for transpiling
        @babel/core y @babel/preset-env: Configure babel to transpile modern code.
        core-js: A library that provides polyfills for new JavaScript features.
        regenerator-runtime: Provides polyfills for async/await functions.

    3.- Configure babel to specify which browsers you want to transpile to and which features you want to polyfill. Babel can look for this information at several places:
        -a babel.config.js or babel.config.json file
        -a .browserslistrc file
        -a browserslist key in package.json file
        -a webpack configuration file

    4.- Configure webpack by creating three files:
        -webpack.common.js: Contains the common configuration for both modern and legacy browsers.
        -webpack.modern.js: Contains the configuration for modern browsers.
        -webpack.legacy.js: Contains the configuration for legacy browsers.

        ├── webpack.common.js     # Configuración común de Webpack
        ├── webpack.modern.js     # Configuración para navegadores modernos
        ├── webpack.legacy.js     # Configuración para navegadores antiguos
        ├── package.json          # Archivo de configuración de npm
        └── babel.config.js       # Configuración de Babel (opcional)


    5.- Create scripts in package.json to run webpack to create different files:
        -Development: This mode generates a larger and more readable output, with source maps to make reading and debugging easier
             -Modern: webpack --config webpack.modern.js --mode development. Development
             -Legacy: webpack --config webpack.legacy.js --mode development. Development
        -Production: This mode generates a minified and optimized output, with no source maps. Difficult to read and debug but optimized for production.
            -Modern: webpack --config webpack.modern.js --mode production. Generates a bundle for modern browsers.
            -Legacy: webpack --config webpack.legacy.js --mode production. Generates a bundle for legacy browsers.

        Why legacy and modern bundles look similar in development mode? Because babel uses a devtool called "eval" to generate source maps (mapas de origen). 
        What is a source map? 
            -The browser only interacts with the minified or transpiled code, but it is difficult to debug. A source map is a file that maps this minified code to the original source code, making debugging easier. Therefore, you can see the original code in the browser's developer tools and debug it.
            -It makes much more sense in development mode when transpiling or minifying than in production
            -There are several types (can be configured in webpack.config.js by using devtool property):
                -eval-source-map: it inserts the minified JavaScript code and its sourcemaps directly in the same execution. Not suitable for production as it contains the original code
                -source-map: creates a separate file with the map (.map file). It also includes the original source code
                -inline-source-map: Instead of generating a separate .map file, this option embeds the sourcemap directly into the generated JavaScript file as a data URI in the file header. This means that no additional request is made to the server to get the .map file.
                -nosources-source-map: creates a source map without the original source code. It is useful when you want to protect your code but still need to debug it at production. When debugging, you'll at browser's developer tools the error message, the file and the line number, but not the code.

    6.- Test it by using local modern and old browsers or ar service like BrowserStack, SauceLabs or CrossBrowserTesting alongside a hosting service like Netlify or Vercel
    
    In order to move HTML and multimedia resources to dist folder, you must use the following:

    8.-Install html-webpack-plugin and include it and configure it in webpack.common.js (section plugins new HtmlWEbpackPlugin)
    9.-Install css-loader mini-css-extract-plugin and include it and configure it in webpack.common.js (section rules and plugins (MiniCssExtractPlugin))
    10.- Configure webpack to move assets to dist folder (section rules, type: 'asset/resource', generator: {filename: 'assets/[name].[hash][ext]'})


*/
