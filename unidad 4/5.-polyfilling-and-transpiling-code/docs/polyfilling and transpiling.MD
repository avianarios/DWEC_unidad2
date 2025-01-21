## Web Browser Compatibility with JS Modules

Web browsers starting from 2017 fully support JS modules. For older browsers, polyfills or transpilers are needed to make them work.

- **Polyfills** are methods that add missing or limited functionality to older browsers. These can be written by developers or provided by libraries.
- **Transpilers** convert code written in one version of JavaScript to another, enabling the use of newer syntax in older browsers. Examples include Babel and TypeScript.

---

### Polyfilling

Polyfills are pieces of code that translate newer methods, structures, or objects—understandable only by modern JavaScript engines—into code that older JavaScript engines can comprehend. They allow older browsers to work with new JavaScript features that are not natively supported. Polyfills do not modify the syntax; instead, they implement missing functionality, such as creating a method that mimics the behavior of `Array.includes()` in environments where it is not available.

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

An empaquetador (bundler) is a tool that takes the files from a project, processes them, and combines them into one or several more efficient and optimized files to be used in production. Bundlers allow developers to work with modules and resources more efficiently, and facilitate dependency management, performance optimization, and the integration of additional features.

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

## What is a transpiler?

A transpiler allows transforming JavaScript code from newer versions to older versions to ensure the code is compatible with browsers that do not support the latest language features. Examples: Babel, esbuild.
