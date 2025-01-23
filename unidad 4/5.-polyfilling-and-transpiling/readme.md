## JavaScript compatibility with new and old browsers

ES6 (also known as ECMAScript 2015) introduced many new features. Some of them, such as classes, arrow functions, and asynchronous functions (`async/await`), are not compatible with older JavaScript engines in older browsers. Therefore, JavaScript code with these ES6 features may not work in older browsers.

Therefore, to ensure compatibility, polyfills and transpilers should be used to convert the code to versions of JavaScript that are more compatible with older browsers.

- **Polyfills** are methods that add missing or limited functionality to older browsers. These can be written by developers or provided by libraries.
- **Transpilers** convert code written in one version of JavaScript to another, enabling the use of newer syntax in older browsers. Examples include Babel and TypeScript.

## Contents
1. [Polyfilling](#1--polyfilling)
2. [Transpiling](#2--transpiling)
3. [Automating the Transpiling and Polyfilling Process for JavaScript with Webpack and Babel](#3--automating-the-transpiling-and-polyfilling-process-for-javascript-with-webpack-and-babel)

---

### 1- Polyfilling

Polyfills are pieces of code that translate newer methods, structures, or objects—understandable only by modern JavaScript engines—into code that older JavaScript engines can comprehend. They allow older browsers to work with new JavaScript features that are not natively supported. Polyfills do not modify the syntax; instead, they implement missing functionality, such as creating a method that mimics the behavior of `Array.includes()` in environments where it is not available.

```javascript
// Example: manual polyfilling startsWith method for browsers older than 2015
if (!String.prototype.startsWith) {   //if true, browser doesn't support startsWith
    String.prototype.startsWith = function (busqueda, posicion) {
        posicion = posicion || 0;
        return this.substr(posicion, busqueda.length) === busqueda;
    };
}

// how to use polyfilled String.prototype.startsWith method
const cadena = "Hola, mundo!";
console.log(cadena.startsWith("Hola")); // true
console.log(cadena.startsWith("Mundo")); // false
```

#### Options:

- Write your own polyfills.
- Use external libraries like `core-js`, `regenerator-runtime`, or `es6-shim`:
  - These can be installed (usually in Node.js) and configured alongside a module bundler.
  - Or by using a CDN like jsdelivr:
    ```html
    <script src="https://cdn.jsdelivr.net/npm/core-js/stable/index.js"></script>
    ```
  - Or unpkg.
  
- Use web services like `polyfill.io` that automatically detect the browser and serve the appropriate polyfills. No need for configuration, just include a script tag in the HTML file:
    ```html
  <script src="https://cdn.polyfill.io/v3/polyfill.min.js?features=es2015,es2016"></script>
    ```
    It is easy to use, it is always updated and no need for configuration, but it's less customizable than core-js and you need always an internet connection to use it.

## What is a module bundler?

A bundler (empaquetador) is a tool that takes the files from a project, processes them, and combines them into one or several more efficient and optimized files to be used in production. Bundlers allow developers to work with modules and resources more efficiently, and facilitate dependency management, performance optimization, and the integration of additional features.

### Main functions of a bundler:

- **Dependency management**: It resolves and manages the dependencies of your project, identifying which files require other files to work and combining everything into a single package (or multiple packages if necessary).
- **Code transformation**: Using tools like Babel, it transpiles code, meaning it converts modern JavaScript (ES6+ or JSX) into code compatible with older browsers.
- **Code and resource optimization**: It optimizes code and resources (like images and CSS files) to make them smaller and faster to load. This may include minifying JavaScript and CSS and optimizing images.
- **Module handling**: It allows the import and export of modules, following the JavaScript module system (ESModules, CommonJS, etc.) and ensuring that only the necessary modules are loaded.
- **Static resource loading**: It manages the inclusion of static files (like images, fonts, and other assets) and allows importing these files into JavaScript code to be processed and bundled correctly. It handles routes, can do dynamic loading, etc.
- **Generation of optimized output files**: It generates output files, such as JavaScript, CSS, and other resources, that can be used in production. These files are typically minified for improved performance.
- **Support for extensions (plugins)**: These expand functionality (e.g., optimizing output, injecting environment variables, or generating HTML files), and loaders, which transform the code of specific files before being bundled (e.g., converting Sass to CSS or processing image files).
- **Code splitting**: It splits code into smaller chunks that are only loaded when needed, improving the initial page load and reducing the size of downloaded files.
- **Hot Module Replacement (HMR)**: Some tools, like Webpack, allow the hot replacement of modules during development, meaning only modified modules are updated without needing to reload the entire page, speeding up the development workflow.
- **File renaming to prevent caching**: Files are renamed (e.g., with a hash in the filename) to avoid users seeing outdated versions of the file due to browser caching.

### Examples of bundlers:

Webpack, Parcel, Vite

---

### 2- Transpiling

## What is to transpile a code?

Transpilation is the process of translating modern JavaScript code (e.g., using ES6, ES7, etc.) into an older version that is compatible with browsers that do not support those features. Transpilation only converts syntax (like transforming arrow functions into traditional function expressions) but does not add new functionality. Therefore, methods or features that didn't exist in older versions (like Array.includes()) cannot be provided by transpilation alone—they need to be polyfilled.

```JavaScript
const suma = (a, b) => a + b;   //ES6 arrow function. Not recognized by older browsers than 2015

var suma = function (a, b) {    //Transpiled to ES5 function. Now supported by older browsers
    return a + b;
};
```

## How to detect if a browser is modern or legacy?

- There are several features that can be used to detect if a browser is modern or legacy:
  - `if ('fetch' in window)`, `if ('Promise' in window)`, `if ('includes' in Array.prototype)`, `if ('assign' in Object)` or `if ('noModule' in HTMLScriptElement.prototype)`

  ```javascript
  // Example: check the nomodule attribute in the script tag in HTML.
  // This will check if the browser supports ES6 modules. 
  // If it does, it is a modern browser. If it doesn't, it is a legacy browser.
  if ('noModule' in HTMLScriptElement.prototype) { 
      // Modern browser
  } else {
      // Legacy browser
  }
  ```
  ## Use the Modernizr library:

It checks if the browser supports a wide range of features, not only ES6 modules, such as:

- CSS Grid
- Flexbox
- WebGL
- Service Workers
- Promise, fetch, etc.

Modernizr can add CSS classes to the `<html>` element, allowing you to adapt your styles based on the browser's capabilities.

You can configure Modernizr to include only the tests you need, reducing the size of the library.

It is appropriate for larger projects, as it can be heavy for small projects or where you need specific detection capabilities.

---

## 3- Automating the Transpiling and Polyfilling Process for JavaScript with Webpack and Babel

We are going to use webpack (module bundler) with babel (transpiler) in a node environment.



### 1. Install node and start off a project:
```bash
npm init -y
```

### 2.Install webpack, babel and core-js
```bash
npm install --save-dev webpack webpack-cli webpack-merge @babel/core @babel/preset-env babel-loader core-js regenerator-runtim
```
  - webpack: A module bundler that allows you to bundle and minimize your  - JavaScript files.
  - webpack-cli: Allows you to run Webpack from the command line.
  - webpack-merge:Permite combinar configuraciones de Webpack para crear diferentes configuraciones (moderno/antiguo).
  - @babel/core y @babel/preset-env: Configure babel to transpile modern code.
  - babel-loader: Loads babel in webpack for transpiling
  - core-js: A library that provides polyfills for new JavaScript features.
  - regenerator-runtime: Provides polyfills for async/await functions.

### 3. Configure Babel to specify which browsers you want to transpile to and which features you want to polyfill. Babel can look for this information at several places:
   - a `babel.config.js` or `babel.config.json` file
   - a `.browserslistrc` file
   - a `browserslist` key in the `package.json` file
   - a webpack configuration file

### 4. Configure Webpack by creating three files:
   - `webpack.common.js`: Contains the common configuration for both modern and legacy browsers.
   - `webpack.modern.js`: Contains the configuration for modern browsers.
   - `webpack.legacy.js`: Contains the configuration for legacy browsers.

        ├── webpack.common.js     # Configuración común de Webpack
        ├── webpack.modern.js     # Configuración para navegadores modernos
        ├── webpack.legacy.js     # Configuración para navegadores antiguos
        ├── package.json          # Archivo de configuración de npm
        └── babel.config.js       # Configuración de Babel (opcional)


### 5. Create scripts in `package.json` to run webpack to create different files:
- **Development**: This mode generates a larger and more readable output, with source maps to make reading and debugging easier
  - Modern: `webpack --config webpack.modern.js --mode development`
  - Legacy: `webpack --config webpack.legacy.js --mode development`
- **Production**: This mode generates a minified and optimized output, with no source maps. Difficult to read and debug but optimized for production.
  - Modern: `webpack --config webpack.modern.js --mode production` (Generates a bundle for modern browsers)
  - Legacy: `webpack --config webpack.legacy.js --mode production` (Generates a bundle for legacy browsers)

**Why do legacy and modern bundles look similar in development mode?**
- Because Babel uses a devtool called "eval" to generate source maps (mapas de origen).

**What is a source map?**
- The browser only interacts with the minified or transpiled code, but it is difficult to debug. A source map is a file that maps this minified code to the original source code, making debugging easier. Therefore, you can see the original code in the browser's developer tools and debug it.
- It makes much more sense in development mode when transpiling or minifying than in production.
- There are several types (can be configured in `webpack.config.js` by using the `devtool` property):
  - `eval-source-map`: It inserts the minified JavaScript code and its sourcemaps directly in the same execution. Not suitable for production as it contains the original code.
  - `source-map`: Creates a separate file with the map (.map file). It also includes the original source code.
  - `inline-source-map`: Instead of generating a separate .map file, this option embeds the sourcemap directly into the generated JavaScript file as a data URI in the file header. This means that no additional request is made to the server to get the .map file.
  - `nosources-source-map`: Creates a source map without the original source code. It is useful when you want to protect your code but still need to debug it in production. When debugging, you'll see the error message, the file, and the line number in the browser's developer tools, but not the code.

### 6. Test it by using local modern and old browsers or a service like BrowserStack, SauceLabs, or CrossBrowserTesting alongside a hosting service like Netlify or Vercel.

### 7. To move HTML and multimedia resources to the dist folder, you must use the following:

### 8. Install `html-webpack-plugin`, include it, and configure it in `webpack.common.js` (section plugins, new `HtmlWebpackPlugin`).
### 9. Install `css-loader`, `mini-css-extract-plugin`, and include them, and configure them in `webpack.common.js` (section rules and plugins (`MiniCssExtractPlugin`)).
### 10. Configure Webpack to move assets to the dist folder (section rules, type: `'asset/resource'`, generator: `{filename: 'assets/[name].[hash][ext]'}`).

[Volver atrás](https://github.com/avianarios/codigo_DWEC/tree/main/unidad%204)
