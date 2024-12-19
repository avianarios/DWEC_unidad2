/*
https://jsdoc3.vercel.app/tags/module
https://jsdoc.app/about-getting-started

JSDoc is only available as a node package. Therefore, 
    -node must be installed
    -A node project must be initialized: npm init
    -JSDoc package must be installed: npm i jsdoc --save-dev
        -"npm install paquete --save-dev" is used when dependencies are only needed during project development, not production. They are stored under "devDependencies" section in package.json
        -"npm install paquete" is used when dependencies are needed for project production. They are stored under "dependencies" section in package.json
    -To execute jsdoc: 
        -npx jsdoc fichero_o_directorio
        -node_modules/js/jsdoc fichero_o_directorio
        -jsdoc fichero_o_directorio (if node_modules/bin is in PATH variable)

jsdoc parameters:
    -output directory (-d). if not, "out": jsdoc ficheros_js -d documentacion
    -template (-t): jsdoc ficheros_js -t template-name
        It takes a template to generate the documentation. Default template is "jsdoc" but other templates can be utilized as "minami" or "docdash". They are installed with npm i minami docdash and they also need some dependencies to be installed like taffydb and handlebars
    -configure file (-c): jsdoc ficheros_js -c fichero_configuracion
    -verbose: jsdoc ficheros_js -v
    -recurse: jsdoc directorio -r
    -Ignoring files (by using .jsignore file): jsdoc ficheros_js -i .jsignore
    -config file (usually by usind jsdoc.json file): jsdoc ficheros_js -c jsdoc.json
        using a configuration file is recommended for larger projects. It avoids entering the same parameters every time jsdoc is executed
    -plugins (-p or --plugins): jsdoc ficheros_js -p plugin-name
        All of them need to be installed with npm i --save-dev plugin-name
        Some interesting plugins:
            -markdown. markdwon is a lightweight markup language with plain text formatting syntax. It is used to write documentation in a more readable way. It is recommended to use markdown plugin to generate documentation in markdown format. Some examples:
                # Encabezado nivel 1
                ## Encabezado nivel 2
                ### Encabezado nivel 3
                Negrita: Rodear el texto con ** o __.
                Cursiva: Rodear el texto con * o _.
                Listas no ordenadas: Usar -, * o +.
                Listas ordenadas: Usar números seguidos de un punto.
                Enlaces: [Texto del enlace](https://ejemplo.com)
                Imágenes: ![Texto alternativo](https://ejemplo.com/imagen.png)
                code blocks: Usar tres acentos graves (```) antes y después del bloque de código. Se puede especificar el lenguaje de programación después de los tres acentos graves iniciales para resaltar la sintaxis.
            -jsdoc-to-markdown. It converts jsdoc comments to markdown format. It is useful when you want to generate documentation in markdown format
            -jsdoc-babel. It allows you to use babel to transpile code and yet keep jsdoc working 
            -jsdoc-export-default. It allows you to export the default export of a module in ES6 syntax
            -jsdoc-coverage. It generates a coverage report of the documentation telling you which parts of the code are documented and which are not


Despide variable and method names should be descriptive, documenting is a really good practice. Documenting is an uncomfortable yet very important process. No one likes to document, but everybody likes to understand someone else's code.

It is especially important in larger projects where multiple developers work together

Documentation helps you remember what a method does long after you’ve written it, or understand what a method coded by a colleague does.


VS Code has basic jsdoc integration. Just type "/** intro" and VS Code will create a basic structure. It does not create all the labels JSdoc has

JSDoc comments must be placed before function in order to VS Code properly detect it*/


////////////////////
////Basic labels////
////////////////////
//Example 1: @type describes the type of an parameter or variable. VS Code uses it to suggest methods when . is typed
/**
 * @type {string}
 */
const nombre="Furanio";

//Example 2: @type can be grouped, but it's not common. It is recommended each variable has its own separated JSDoc comment
/**
 * @type {string}
 * @type {number}
 */
const nombre2="Obsidio"
const edad=23;

//Example 3: it also works with arrays
/**
 * @type {number[]}
 */
const numeros=[1,2,3,4];

/**
 * @type {Array<number|string>}
 */
const mixto=[1,2,3,"hola","adios"];

//Another way of writing {string[]}
/**
 * @type {Array<string>}
 */
const cadenas=["hola","adios","buen día","buena noche"];
//In many cases, VS Code does not provide string-specific suggestions when the variable is an array, even if the array contains exclusively strings. This is a known limitation


//Example 4: @param describes parameters of a function or method
/**
 * 
 * @param {string} nombre - El nombre de la persona que va a ser saludada
 * @param {string} texto - El texto que va a ser mostrado por pantalla
 */
function saluda(nombre, texto){
    console.log(texto, nombre);
}

//Example 5: @return (or @returns) describes the returned value
/**
 *  función que invierte una variable booleada pasada por argumento
 *
 * @param {Boolean} bool- El booleano que va a ser invertido
 * @return {Boolean} bool - El booleano invertido
 */

function invierte(bool) {
    return (!bool);
}


//Example 6: @example describes how the function works
/**
 * Convierte una temperatura de Celsius a Fahrenheit.
 * @param {number} celsius - Temperatura en grados Celsius.
 * @returns {number} Temperatura convertida en grados Fahrenheit.
 * @example
 *  // Devuelve 0
 *  celsiusAFahrenheit(32);
 */

const celsiusAFahrenheit = (celsius) => {
    return celsius * 9 / 5 + 32;
};


//Example 7: @property describes properties of an object
/**
 * Representa a una persona.
 * @property {string} nombre - El nombre de la persona.
 * @property {number} edad - La edad de la persona.
 */
const persona = {
    nombre: "Ana",
    edad: 30
};


//Example 8: @throws describe exceptions a function can arise
/**
 * Divide dos números.
 * @param {number} dividendo - El número a dividir.
 * @param {number} divisor - El número por el cual dividir.
 * @returns {number} El resultado de la división.
 * @throws {Error} Si el divisor es igual a 0.
 * @example
 *  //devuelve 5
 *  dividir (10,2);
 */
function dividir(dividendo, divisor) {
    if (divisor === 0) {
        throw new Error("El divisor no puede ser 0.");
    }
    return dividendo / divisor;
}

//Example 9: @deprecated informs that a function is outdated and may not be used
/**
 * Suma dos números.
 * @deprecated Esta función será eliminada en la próxima versión. Usa `nuevaSuma` en su lugar.
 * @param {number} a - Primer número.
 * @param {number} b - Segundo número.
 * @returns {number} La suma de los números.
 */
function sumaVieja(a, b) {
    return a + b;
}

//Example 10: @see allows you to refer to another symbol or resource that may be related to the one being documented
//  @link creates a link to the namepath or URL that you specify
/**
 * Calcula el perímetro de un rectángulo.
 * @param {number} base - La base del rectángulo.
 * @param {number} altura - La altura del rectángulo.
 * @returns {number} El perímetro calculado.
 * @see calcularArea
 * @see {@link https://github.com/avianarios/codigo_DWEC/}
 */
function calcularPerimetro(base, altura) {
    return 2 * (base + altura);
}

//Example 11: @todo desribes what is left to do
/**
 * Filtra una lista de números impares.
 * @param {number[]} numeros - Lista de números.
 * @returns {number[]} Números impares.
 * @todo Mejorar el rendimiento del filtrado.
 */
function filtrarImpares(numeros) {
    return numeros.filter(num => num % 2 !== 0);
}

//Example 12: @default describes the default value of a parameter
/**
 * Saluda a una persona.
 * @param {string} [nombre="amigo"] - El nombre de la persona. Por defecto "amigo".
 * @returns {string} El saludo.
 */
function saludar(nombre = "amigo") {
    return `Hola, ${nombre}!`;
}


//Example 13: @module describes the current file as being a module. It has to be placed at the top of the file
/**
 * @module Matematicas
 */

/**
 * Suma dos números.
 * @param {number} a 
 * @param {number} b 
 * @returns {number} La suma de los dos números.
 */
export function sumar(a, b) {
    return a + b;
}
