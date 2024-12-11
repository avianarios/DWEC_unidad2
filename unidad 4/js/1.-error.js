/*
Types of errors:
  -predictable: They arise from conditions that we know could occur and can therefore be anticipated. Examples: Try to divide by zero, Passing an invalid value to a function or Look for a file that does not exist 
  -unpredictable. They arise from external or unforeseen factors so they cannot be easily anticipated. These errors may be related to the system environment (such as hardware failures or network problems) or to unexpected circumstances within the code that we cannot foresee during development. Examples: Network failure or loss of connection to external servers, Stack overflow due to unexpected data or too big data or Hardware failures, like a faulty hard disk drive

How to control errors?
    -Predictable errors: conditional sentences
    -Unpredictable errors: try...catch 

When to use "if" statement?
    -To treat expected or common errors.
    -Programmer chooses whether to interrupt or not execution on "if" block.
    -If you want to keep code simple

When to use throw...catch statement?
    -To treat severe, exceptional or unpredictable errors.
    -If you want to force the code to inmediately handle the error.
    -If you want to offer a centralized error handler.
    -If you want to make sure the code beneath the error is not executed (try block execution is interrupted when an error occurs).
    -When you want to offer a centralized error handler.
    
Advantages of using try..catch:
    -It allows for centralised error handling when used in conjunction with a log system or a global error handler.
    -Serious errors are easier to identify and handle globally.
    -Facilitates debugging and error logging.
    -It interrupts the flow completely, forcing you to deal with the problem.

-How is a try...catch...finally block used?
    1.- The code in try {...} is executed.
    2.- If an error occurs
        2.1.- The execution of the code inside the try block is halted
        2.2.- An Error object is created (altough another value can be thrown, not recommended though)
        2.3.- The control is passed to the catch block, where the error (or value) is handled.
    3.- After handling the error, the program executes "finally" block and code outside try...catch normally 
*/


//////////////////////////
////controlling errors////
//////////////////////////
//Example 1: Basic usage of try...catch...finally
try {
    funcionInexistente();
} catch (error) {
    console.error(err.name, err.message, err.stack);
} finally {
    console.log("Este bloque se ejecuta siempre");
}
console.log("El código ha fallado, pero no se ha terminado el programa");


//Example 2: Expected error controlling: if vs try...catch
//Recommended to use if. checking a variable is not an unexpected error, so it's better to use if instead
function procesarEntrada(edad) {
    if (typeof edad !== "number" || edad < 0) {
      console.error("La edad debe ser un número positivo.");
      return;
    }
    console.log(`Edad válida: ${edad}`);
}
  
procesarEntrada(25); // Edad válida
procesarEntrada("25"); // Error de validación
procesarEntrada(-5); // Error de validación
  



//Example 3: Unexpected error and Error object usage
//When an error occurs, an error object is returned. It has properties like name, message, and stack.
//An "if" cannot predict this error because JavaScript does not evaluate whether a function exists before attempting to execute it.
try{
    funcionInexistente();
}catch(err){
    //err is an object with details about the error
    console.error(err.name, err.message, err.stack);
}
console.log("El código ha fallado, pero no se ha terminado el programa");


//Example 4: Unexpected error
function procesarJSON(datos) {
    try {
      const usuario = JSON.parse(datos); // Intentamos parsear un JSON
      console.log("Datos procesados:", usuario);
    } catch (err) {
      console.error("Error al procesar el JSON:", err.message);
    }
}
  
// Test de validación con JSON mal formado
procesarJSON('{"nombre": "Ana", edad: 30}');  // Error al procesar el JSON: Unexpected string in JSON at position 22
  

//////////////////////////////
////throwing custom errors////
//////////////////////////////
/*In some ocasions, JavaScript engine automatically throws errors:
    -Syntactic errors when code is not properly written (SyntaxError). Example:  let a=;
    -Reference errors when an undefined variable is accessed (ReferenceError). Example: console.log(x) with x not being declared
    -Type error when trying to access a null or undefined property, try to invoke something that is not a function or try to perform an operation with incompatible data types (TypeError). Examples:
        -let usuario=null; console.log (usuario.nombre)
        -let saludo=5; saludo();
        -let a="z"; let b=5; console.log(a*b);

In some other cases, we might need to throw errors by ourselves:
    -When JavaScript engine is not automatically detecting an error
    -When we want to create our own custom error objects

Custom errors can be thrown anywhere in our code and caught in our try-catch blocks.*/

/*"throw" can throw any value, not only error objects. Despite possible, it's not recommended as, once catched in a catch block, the error will be treated as a that value (string for instance), losing information about the error
*/
//Example 1: try...catch is not needed. Instead an "if" statement could be used
function procesarEntrada(edad) {
    try {
        if (typeof edad !== "number" || edad < 0) {
        //Throwing a string is not ideal, as it does not provide all the useful information normally associated with an error (such as the type of error, the call stack, etc.).
            throw "La edad debe ser un número positivo.";
        }
        console.log(`Edad válida: ${edad}`);
    } catch (error) {
        //The error will be treated as a string.
        console.error(`Error: ${error}`);
    }
}
  
procesarEntrada(25); // Edad válida
procesarEntrada("25"); // Error
procesarEntrada(-5); // Error


//Example 2: throwing a custom error by using the Error object 
//try...catch is not needed, it should be used "if" as it's a predictable and simple error
function dividir(a, b) {
    if (b==0) {
        //an Error object is thrown, which provides more information about the error
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}
  
//try block catches the error previously thrown and logs it
try {
    console.log(dividir(10, 0));
} catch (error) {
    console.log("Error capturado:", error.message); // "Error capturado: No se puede dividir por cero"
}


//Example 3: throwing an Error object
//dealing with asynchronous code.
//Why try...catch instead of if? Asynchronous code is unexpected by definition. They can't be dealt with if because they are not executed synchronously
async function obtenerDatosUsuario() {
    //await temporarily pauses fetch until the promise is resolved
    const respuesta = await fetch('https://api.ejemplo.com/usuario');
  
    if (!respuesta.ok) {
      throw new Error('No se pudo obtener los datos del usuario');
    }
  
    const datos = await respuesta.json();
    return datos;
}
  
try {
    obtenerDatosUsuario()
      .then(usuario => console.log(usuario))
      .catch(error => console.error("Error:", error.message));
} catch (error) {
    console.log("Error capturado:", error.message); // Aquí capturamos cualquier error no esperado
}
  

//Alternative: creating a function to include try...catch
async function obtenerDatosUsuario() {
    const respuesta = await fetch('https://api.ejemplo.com/usuario');
  
    if (!respuesta.ok) {
      throw new Error('No se pudo obtener los datos del usuario');
    }
  
    const datos = await respuesta.json();
    return datos;
  }
  
async function ejecutar() {
    try {
      const usuario = await obtenerDatosUsuario();
      console.log(usuario);
    } catch (error) {
      console.error("Error:", error.message);
    }
}
  
ejecutar();
  

//Example 4: throwing an Error object
//loading a node.js module to deal with file system operations
//why try...catch?-> We don't know if the file exists or not at runtime
const fs = require('fs');

function leerArchivo(ruta) {
  if (!fs.existsSync(ruta)) {
    throw new Error("El archivo no existe");
  }

  return fs.readFileSync(ruta, 'utf8');
}

try {
  const contenido = leerArchivo('./archivo-inexistente.txt');
  console.log(contenido);
} catch (error) {
  console.log("Error al leer el archivo:", error.message); // Captura el error si el archivo no existe
}


//Example 5: throwing a syntax error
//when there's a syntax error in the code, a SyntaxError can be thrown
let JSON_usuario='{"nombre":"perico"}';
try{
    let usuario=JSON.parse(JSON_usuario);       //If I use "address" field, an error would occur
    if (!usuario.direccion) {
        throw new SyntaxError("No tengo la dirección");
      }
}catch(err){
    console.error(err.message);
}


//////////////////////////////////////
////Creating custom error handlers////
//////////////////////////////////////
//Example 1: Simple error handler
/*Not recommended as you are not using Error object, but an object with some properties. Therefore...
    -You lose information about the error like stack traces.
    -You can't create specific error handlers for different types of errors either*/
function manejadorError(error){
    console.error(error.cod, error.mensaje);
}

try{
    funcion_erronea();
}catch (err){
    throw new manejadorError({cod:1, mensaje:"error personalizado", error:err})
}


//Example 2: creating a custom ValidationError class extending Error class
//Recommended
class ValidationError extends Error {
    constructor(message) {
      super(message);  // Llamamos al constructor de la clase Error
      this.name = 'ValidationError';
    }
}
  
// Función que valida datos de un usuario
function validarUsuario(usuario) {
    if (!usuario || typeof usuario !== 'object' || !usuario.nombre) {
      throw new ValidationError("Los datos del usuario son inválidos");
    }
  
    return `Bienvenido, ${usuario.nombre}`;
}
  
// Función principal que usa try...catch
function manejarDatosUsuario(usuario) {
    try {
      const mensaje = validarUsuario(usuario);
      console.log(mensaje);  // Si no hay error, este código se ejecutará, mostrando el mensaje
    } catch (error) {
      // Capturamos el error y manejamos el error personalizado
      if (error instanceof ValidationError) {
        console.error(`Error de validación: ${error.message}`);  // Manejo específico para ValidationError
      } else {
        console.error(`Error desconocido: ${error.message}`);  // Manejo de otros errores
      }
    }
}
  
// Ejemplo de uso con datos no válidos
const usuarioInvalido = null;
manejarDatosUsuario(usuarioInvalido);  // Esto lanza un ValidationError

// Ejemplo de uso con datos válidos
const usuarioValido = { nombre: 'Juan' };
manejarDatosUsuario(usuarioValido);  // Esto imprime el mensaje de bienvenida

/*
////////////////////////////
////global error catcher////
////////////////////////////
window.addEventListener('error', (message, url, line, col, error)=>{
    console.error(`${message}\n At ${line}:${col} of ${url}`);
});*/