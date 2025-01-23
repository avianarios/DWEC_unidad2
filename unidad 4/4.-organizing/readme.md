## JavaScript Modules

JavaScript modules are a way to organize and structure code into smaller, reusable parts.  
Each module:
- Can contain classes, functions, variables, or other elements.
- Allows you to export and import only what you need to facilitate collaboration and keep your code clean and organized.

## Advantages of Using Modules
- **Code Reuse**: Facilitates the use of components in different parts of a project or even in other projects.
- **Organisation**: Divides the code into smaller, more specialized files.
- **Encapsulation**: Allows you to control which parts of the module are accessible from the outside and which remain private.
- **Avoid Naming Conflicts**: Each module has its own scope.
- **Performance**: Modules can be loaded when needed, reducing the initial load time of the application.
- **Bundlers**: Tools like Webpack or Rollup are designed to work with ES6 modules. They bundle all the modules into a single file, reducing the number of requests to the server while keeping the advantages of modularity for the programmer.

## Criteria for Dividing into Modules
1. **Single Responsibility Principle**: Each module should have a well-defined responsibility. This means that a module should handle a single part of the system.
2. **High Cohesion**: The elements within a module should be closely related to each other.
3. **Loose Coupling**: Modules should be independent of each other, so that changes in one module do not affect the others. This helps avoid circular dependencies.
4. **Reusability**: Modules should be designed to be reusable in other parts of the system by providing a clear API. If a function is used in several modules, consider moving it to a separate module.
5. **Third-Party Modules**: Consider having third-party modules that handle interaction with external services like a database, API, or library. This way, you can easily replace the third-party service without affecting the rest of the application.
6. **Adapt to Business Logic**: Each module should represent a logical and significant part of the system according to business needs. For instance: products, providers, and requests could be appropriate modules.
7. **Size and Complexity**: Modules shouldn't be too small or too big. A module should be big enough to be useful, but small enough to be easy to understand, maintain, test, and scale.

## Types of Modules in JavaScript

### 1. CommonJS Modules
CommonJS modules are used in Node.js and some bundlers for compatibility reasons and because earlier versions of Node.js did not support ES6 modules. The syntax is:
- **`require`** to import
- **`module.exports`** to export

CommonJS modules are still in use in the latest versions of Node.js, but they are not supported in modern browsers. Despite many libraries still using CommonJS, some are migrating to ES6 modules.

### 2. ES6 Modules
ES6 modules are used in modern browsers and in Node.js from version 13 onwards. They are the future, so you should utilize them instead of CommonJS modules. The syntax is:
- **`import`** to import
- **`export`** to export

## `type` in package.json

### When using `"type": "module"` in package.json
You are telling Node.js to use ES6 modules instead of CommonJS modules. Therefore:
- `.js` files are treated as ES6 modules. If `require` or `module.exports` are used in a `.js` file, an error will be thrown.
- `.cjs` files are treated as CommonJS modules. If `import` or `export` are used in a `.cjs` file, an error will be thrown.

### When not using `"type": "module"` in package.json
Node.js will use CommonJS modules by default. Therefore:
- `.js` files are treated as CommonJS modules. If `import` or `export` are used in a `.js` file, an error will be thrown.
- `.mjs` files are treated as ES6 modules. If `require` or `module.exports` are used in a `.mjs` file, an error will be thrown.

[Volver atrás](https://github.com/avianarios/codigo_DWEC/tree/main/unidad%204)
