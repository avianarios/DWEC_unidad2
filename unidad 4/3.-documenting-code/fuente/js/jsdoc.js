//Example 1: @module describes the current file as being a module. It has to be placed at the top of the file
/**
 * @module Matematicas
 */


//@type describes the type of an parameter or variable. VS Code uses it to suggest methods when . is typed
//Example 2: basic @type usage
/**
 * @type {string}
 */
const nombre="Furanio";


//@type can be grouped, but it's not common. It is recommended each variable has its own separated JSDoc comment
//Example 3: grouping @type
/**
 * @type {string}
 * @type {number}
 */
const nombre2="Obsidio"
const edad=23;


//Example 4: @type with arrays
/**
 * @type {number[]}
 */
const numeros=[1,2,3,4];

/**
 * @type {Array<number|string>}
 */
const mixto=[1,2,3,"hola","adios"];


//Example 5: Another way of writing @type{string[]}
/**
 * @type {Array<string>}
 */
const cadenas=["hola","adios","buen día","buena noche"];
//In many cases, VS Code does not provide string-specific suggestions when the variable is an array, even if the array contains exclusively strings. This is a known limitation


//Example 6: @param describes parameters of a function or method
/**
 * 
 * @param {string} nombre - El nombre de la persona que va a ser saludada
 * @param {string} texto - El texto que va a ser mostrado por pantalla
 */
function saluda(nombre, texto){
    console.log(texto, nombre);
}


//Example 7: @return (or @returns) describes the returned value
/**
 *  función que invierte una variable booleada pasada por argumento
 *
 * @param {Boolean} bool- El booleano que va a ser invertido
 * @return {Boolean} bool - El booleano invertido
 */

function invierte(bool) {
    return (!bool);
}


//Example 8: @example describes how the function works
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


//Example 9: @property describes properties of an object
/**
 * Representa a una persona.
 * @property {string} nombre - El nombre de la persona.
 * @property {number} edad - La edad de la persona.
 */
const persona = {
    nombre: "Ana",
    edad: 30
};


//Example 10: @throws describe exceptions a function can arise
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


//Example 11: @deprecated informs that a function is outdated and may not be used
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


//Example 12: using markdown
//be careful as some templates may not be compatible with markdown
/**
 * Calcula la suma de dos números.
 *
 * ### Ejemplo de uso:
 * ```javascript
 * const resultado = sumar(2, 3); // Devuelve 5
 * ```
 *  * ### Retorno
 * Devuelve la suma de dos números.
 * 
 * 
 * @param {number} a - Primer número.
 * @param {number} b - Segundo número.
 * @returns {number} La suma de `a` y `b`.
 */
function sumar(a, b) {
    return a + b;
}


//@see allows you to refer to another symbol or resource that may be related to the one being documented
//@link creates a link to the namepath or URL that you specify
//Example 13: @see and @link
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


//Example 14: @todo desribes what is left to do
/**
 * Filtra una lista de números impares.
 * @param {number[]} numeros - Lista de números.
 * @returns {number[]} Números impares.
 * @todo Mejorar el rendimiento del filtrado.
 */
function filtrarImpares(numeros) {
    return numeros.filter(num => num % 2 !== 0);
}


//Example 15: @default describes the default value of a parameter
/**
 * Clase que representa un producto en un catálogo.
 */
class Producto {
    /**
     * El precio del producto.
     * @type {number}
     * @default 20
     */
    precio = 20;
  
    constructor(precio) {
      if (precio) this.precio = precio;
    }
}
  
const producto1 = new Producto();
console.log(producto1.precio);  // 20

const producto2 = new Producto(30);
console.log(producto2.precio);  // 30


//Example 16: @async describes that a function is asynchronous
/**
 * Obtiene la lista de usuarios desde la API de JSONPlaceholder.
 * @async
 * @returns {Promise<Object[]>} Promesa que resuelve en un array de usuarios.
 * @throws {Error} Si no se pueden obtener los usuarios.
 */
async function obtenerUsuarios() {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!respuesta.ok) {
        throw new Error('No se pudieron obtener los usuarios');
    }
    return respuesta.json();
}

//@function describes a function
/*JSDoc can identify a function by its structure, but sometimes it fails to do so:
    -anonymous functions
    -arrow functions
    -functions inside literal objects
    -functions inside objects with dynamic names*/


//Example 17: usage of @function with an anonymous function
/**
 * @function
 */
const saludo = function() {
    console.log("Hola");
};


//Example 18: usage of @function with an arrow function
/**
 * Función que multiplica dos números
 * @function
 * @param {number} x El primer número a multiplicar
 * @param {number} y El segundo número a multiplicar
 * @returns {number} El resultado de multiplicar ambos números
 */
const multiplicar = (x, y) => x * y;


//Example 19: usage of @function with a function inside a literal object
const obj = {
    /**
     * Método que dobla el número pasado por argumento     
     * @function
     * @param {number} x El número a doblar
     * @returns {number} Devuelve el número multplicado por dos
     */
    doblar: function(x) {
        return x * 2;
    }
};


//Example 20: usage of @function with a static function inside an object
class MiClase {
    /**
     * Método que multiplica una variable por 3.
     * @function
     * @param {number} x
     * @returns {number}
     */
    static miMetodo = function(x) {
        return x * 3;
    };
}


//Example 21: usage of @function with a function inside an object with a dynamic name
const obj2 = {};
/**
 * Función que multiplica una variable por 2.
 * @function
 * @param {number} x 
 * @returns {number}
 */
obj2["hacerAlgo" + "ConNombre"] = function(x) {
    return x * 2;
};


// The @callback tag is used to document a function that will be passed as an argument to another function, often referred to as a callback, and executed when the latter completes.
//Example 22: @callback
/**
 * Procesa datos y ejecuta un callback con el resultado al finalizar.
 * @param {number[]} datos - Datos a procesar.
 * @param {procesarResultadoCallback} callback - Función a ejecutar tras procesar los datos.
 */
function procesarDatos(datos, callback) {
    const resultado = datos.map((x) => x * 2);
    callback(resultado);
}

/**
 * Callback ejecutado tras procesar los datos.
 * @callback procesarResultadoCallback
 * @param {number[]} resultado - Resultado del procesamiento.
 */

/**
 * Ejemplo de uso de la función procesarDatos.
 */
procesarDatos([1, 2, 3], (resultado) => {
    console.log(resultado); // [2, 4, 6]
});


//Example 23: @typedef is used to define a custom object that will be reused
/**
 * @typedef {Object} Person
 * @property {string} name - El nombre de la persona.
 * @property {number} age - La edad de la persona.
 */

/**
 * Crea una nueva persona.
 * @param {string} name - El nombre de la persona.
 * @param {number} age - La edad de la persona.
 * @returns {Person} Un objeto que representa a una persona.
 */
function createPerson(name, age) {
    return { name, age };
}


//Example 24: ignoring a function with @ignore
/*Why avoid documenting with @ignore?
    -Private or irrelevant code: Functions used only internally or that don't need to be documented.
    -Incomplete or experimental code: Functions still under development.
    -Avoiding documentation overload: To keep the documentation clean and focused on the most important parts.*/
/**
 * @ignore 
 */
function privateFunction() {
    // código privado
}


//Example 25: optional parameter with []
/**
 * Saluda a una persona.
 * @param {string} [nombre="amigo"] - El nombre de la persona. Si no se proporciona, se usa "amigo".
 * @returns {string} El saludo.
 */
function saludar(nombre = "amigo") {
    return `Hola, ${nombre}!`;
}

console.log(saludar());         // "Hola, amigo!"
console.log(saludar("Carlos")); // "Hola, Carlos!"