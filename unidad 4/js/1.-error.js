///////////////////////
////handling errors////
///////////////////////
/*
Types of errors:
  -predictable: They arise from conditions that we know could occur and can therefore be anticipated. Examples: Try to divide by zero, Passing an invalid value to a function or Look for a file that does not exist 
  -unpredictable. They arise from external or unforeseen factors so they cannot be easily anticipated. These errors may be related to the system environment or to unexpected circumstances within the code that we cannot foresee during development. Examples: Network failure or loss of connection to external servers, Stack overflow due to unexpected data or too big data or hardware failures, like a faulty hard disk drive

Errors can be controlled by using two methods: "if" sentences or "try..catch..finally" blocks.
  -When to use "if" statement?
    -To treat expected or common errors.
    -Programmer chooses whether to interrupt or not execution on "if" block.
    -If you want to keep code simple

  -When to use try...catch statement?
    -To treat severe, exceptional or unpredictable errors.
    -If you want to force the code to immediately handle the error before continuing the execution of the code beneath it (execution is interrupted until the error is handled):
    -If you want to offer a centralized error handler.
    
Advantages of using try..catch:
    -It interrupts the flow completely, forcing you to deal with the problem.
    -It allows for centralised error handling when used in conjunction with a log system or a global error handler.
    -Serious errors are easier to identify and handle globally.
    -Facilitates debugging and error logging.

-How is a try...catch...finally block used?
    1.- The code in try {...} is executed.
    2.- If an error occurs
        2.1.- The execution of the code inside the try block is halted
        2.2.- An Error object is created (altough another value can be thrown, not recommended though)
        2.3.- The control is passed to the catch block, where the error (or value) is handled.
    3.- After handling the error, the program executes "finally" block and code outside try...catch normally 
*/

//Example 1: Expected error handling: "if" statement
//The "if" statement is the best method here as a variable with a misleading value is not an unexpected error
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

//Example 2: Unexpected error handling: "try..catch..finally" block
//When an error occurs, an error object is returned. It has properties like name, message, and stack.
//An "if" cannot predict this error because JavaScript does not evaluate whether a function exists before attempting to execute it.
try{
    funcionInexistente();
}catch(err){
    //err is an object with details about the error
    console.error(err.name, err.message, err.stack);
}finally{   //finally is optional
  console.log("este código se ejecutará siempre");
}
console.log("El código ha fallado, pero no se ha terminado el programa");


//Example 3: Unexpected error handling
function procesarJSON(datos) {
    try {
      const usuario = JSON.parse(datos); // Intentamos analizar un JSON
      console.log("Datos procesados:", usuario);
    } catch (err) {
      console.error("Error al procesar el JSON:", err.message);
    }
}
  
// Test de validación con JSON mal formado
procesarJSON('{"nombre": "Ana", edad: 30}');  // Error al procesar el JSON: Unexpected string in JSON at position 22


/////////////////////////
////rethrowing errors////
/////////////////////////
/*
After capturing an error and handling it, it can be rethrown to be handled again at a higher level in order to perform a different action. Reasons to do that:
  1.- The error cannot be handled locally and must be handled higher in the hierarchy.
  2.- The function that catches the error does not have sufficient context or capacity to handle it completely, and needs the flow to stop and pass the error to another layer for further action.
  3.- Logging or notification of the error to a global layer (such as a monitoring system or a global error handler) needs to be performed.
*/

//Example 1: Rethrowing the same error
function conectarServidor() {
  try {
    // Simulamos un fallo de conexión
    const servidorActivo = false;
    if (!servidorActivo) {
      throw new Error("No se pudo conectar al servidor");
    }
    console.log("Conexión exitosa.");
  } catch (error) {
    console.error("Error al conectar al servidor:", error.message);
    throw error; // Relanzamos el error para manejarlo más arriba
  }
}

function iniciarConexion() {
  try {
    conectarServidor();  // Intentamos conectar al servidor
  } catch (error) {
    console.log("Error en la conexión, intentaremos más tarde.");
    // Aquí se podría reintentar la conexión
  }
}

iniciarConexion();


//Example 2: rethrowing the same error
function autenticarUsuario(usuario, contrasena) {
  if (usuario !== "admin" || contrasena !== "secreto") {
    throw new Error("Autenticación fallida");
  }
  return "Autenticado correctamente";
}

function procesarAccionesUsuario(usuario, contrasena) {
  try {
    const autenticacion = autenticarUsuario(usuario, contrasena);
    console.log(autenticacion);
    // Otras acciones, como cargar los datos del usuario...
  } catch (error) {
    console.error("Error en el flujo de autenticación:", error.message);
    // Relanzamos el error para que sea manejado en otro nivel (por ejemplo, un controlador global)
    throw error; // Este `throw` permite que el error se maneje en un nivel superior (servidor, etc.)
  }
}

try {
  procesarAccionesUsuario("user", "wrongPassword");
} catch (error) {
  console.log("Manejo global del error:", error.message);
  // Aquí se podría tomar una acción como notificar al cliente, registrar el error, etc.
}


///////////////////////////////
////Where to handle errors?////
///////////////////////////////
/*
In general, each function should handle its errors if they are specific to that function, but if the error has more global implications (e.g. problems with an API, a critical error affecting multiple parts of the system), then it is appropriate to delegate the handling of those errors to a higher-level function or a centralised error handling system.

There are 4 ways of handling errors:
  1.- Inside each function/method that could throw an unexpected error. This option is suitable if each method has a clear responsibility and you know what kind of errors can occur in each function.

  2.- Inside each function/method that could throw an unexpected error and in the piece of code that calls those functions. It is useful when a function may throw errors that need to be handled higher up in the code hierarchy. This option allows for more robust and scalable error handling, which is suitable for complex or large applications.

  3.- In the piece of code where a sequence of functions, that can be seen as a sequential process, are called, encompassing all of them. It is suitable when you have several functions that are closely related and are part of a coherent workflow. Here, the try...catch block wraps a set of dependent operations and allows you to handle errors in a grouped way.

  4.- In general code, encompassing all code. While this is a valid option in some simple cases, it is not recommended in general. By catching all errors in a general try...catch block, you lose specific control over each type of error and complicate debugging and code maintenance.
   

Why the last one shouldn't be used?
  1. Difficult to diagnose errors
    The purpose of try...catch is to catch and handle specific errors where they might occur. If there is more code than necessary inside a try, you lose track of what part of the code might actually fail. The right way to do it is to limit the try block to only the critical sections where errors may occur.

  2. Performance loss
    The try...catch is not free in terms of performance. Browsers and JavaScript engines (such as V8) do not optimise the code inside a try block. This means that wrapping large portions of code can slow down execution unnecessarily. If only a small part of the code is error-prone, it doesn't make sense to put it all in a try...catch and pay the performance cost.

  3. Mask unexpected errors
    When you put all your code in a try...catch, you may catch unexpected bugs that perhaps shouldn't be handled that way. This can hide important bugs and cause the program to continue running in an inconsistent state.

  4. error prevention is discouraged
    If all the code is in a try...catch, you rely too much on handling errors after they occur, rather than preventing them. It is better to validate inputs, check conditions, and prevent errors before they occur.

  5. Poor separation of responsibilities
    The Single Responsibility Principle (SRP) states that each function or method should be responsible for a specific task, including error handling if those errors are closely related to its operation, to prevent them from affecting other parts of the code or when the error needs to be rethrown to be handled by a general error handler.
    
    Advantages of separating responsibilities correctly
      More readable code: Each function takes care of only one task, and try...catch is applied only where it is really needed.
      Easy to debug: If an error occurs, you know exactly which function or block threw it.
      Code reuse: Independent functions can be reused without the need to repeat error handling logic.
      Specific error handling: Each try...catch can handle only the error it expects, without catching other unrelated errors.
*/

//Example 1: 1st way: One try..catch inside each method that could throw an unexpected error
function obtenerPropiedad(objeto, propiedad) {
  try {
    // Si el objeto es null o indefinido, se lanzará un error
    return objeto[propiedad];
  } catch (error) {
    console.error("Error al obtener la propiedad:", error);
    return null; // No propagamos el error, simplemente retornamos un valor seguro
  }
}

function procesarNombre(nombre) {
  try {
    // Supongamos que procesamos el nombre (por ejemplo, calcular su longitud)
    return nombre.length;
  } catch (error) {
    console.error("Error al procesar el nombre:", error);
    return 0; // Retornamos un valor seguro en caso de error
  }
}

function procesarDatos(usuario) {
  let nombre = obtenerPropiedad(usuario, 'nombre'); // Obtener el nombre del usuario
  let longitud = procesarNombre(nombre); // Procesar el nombre
  console.log("Longitud del nombre:", longitud); // Mostrar la longitud
}

let usuario = { nombre: "Juan" }; // Usuario con nombre
procesarDatos(usuario); // Llamamos a procesarDatos

let usuarioInvalido = null; // Usuario nulo
procesarDatos(usuarioInvalido); // Llamada con usuario nulo


//Example 2: 2nd way: One try..catch inside each method that could throw an unexpected error and a try catch with the calls to those functions inside to capture rethrown errors
//difference with example 1: obtenerPropiedad rethrowns an error in order to be captured by procesarDatos
function obtenerPropiedad(objeto, propiedad) {
  try {
    // Si el objeto es null o indefinido, se lanzará un error
    return objeto[propiedad];
  } catch (error) {
    console.error("Error al obtener la propiedad:", error);
    throw error; // Relanzamos el error
  }
}

function procesarNombre(nombre) {
  try {
    // Supongamos que procesamos el nombre (por ejemplo, calcular su longitud)
    return nombre.length;
  } catch (error) {
    console.error("Error al procesar el nombre:", error);
    throw error; // Relanzamos el error
  }
}

function procesarDatos(usuario) {
  try {
    let nombre = obtenerPropiedad(usuario, 'nombre'); // Obtener el nombre del usuario
    let longitud = procesarNombre(nombre); // Procesar el nombre
    console.log("Longitud del nombre:", longitud); // Mostrar la longitud
  } catch (error) {
    console.error("Error al procesar los datos:", error); // Captura los errores relanzados
  }
}

let usuario = { nombre: "Juan" }; // Usuario con nombre
procesarDatos(usuario); // Llamamos a procesarDatos

let usuarioInvalido = null; // Usuario nulo
procesarDatos(usuarioInvalido); // Llamada con usuario nulo


//Example 3: 3rd way: One try..catch block capturing errors thrown by related functions that can be seen as a sequential process
function obtenerPropiedad(objeto, propiedad) {
  // Si el objeto es null o indefinido, se lanzará un error
  return objeto[propiedad];
}

function procesarNombre(nombre) {
  // Supongamos que procesamos el nombre (por ejemplo, calcular su longitud)
  return nombre.length;
}

function procesarDatos(usuario) {
  try {
    let nombre = obtenerPropiedad(usuario, 'nombre'); // Obtener el nombre del usuario
    let longitud = procesarNombre(nombre); // Procesar el nombre
    console.log("Longitud del nombre:", longitud); // Mostrar la longitud
  } catch (error) {
    console.error("Error en el flujo de trabajo:", error); // Manejo centralizado del error
  }
}

let usuario = { nombre: "Juan" }; // Usuario con nombre
procesarDatos(usuario); // Llamamos a procesarDatos

let usuarioInvalido = null; // Usuario nulo
procesarDatos(usuarioInvalido); // Llamada con usuario nulo


//Example 4: 4th way: One general try..catch to capture every error
function obtenerPropiedad(objeto, propiedad) {
  return objeto[propiedad]; // Esto puede lanzar un error si 'objeto' es null o undefined
}

function procesarNombre(nombre) {
  return nombre.length; // Puede haber errores si 'nombre' no es una cadena
}

function procesarDatos(usuario) {
  try {
    let nombre = obtenerPropiedad(usuario, 'nombre'); // Obtener el nombre del usuario
    let longitud = procesarNombre(nombre); // Procesar el nombre
    console.log("Longitud del nombre:", longitud); // Mostrar la longitud
  } catch (error) {
    console.error("Error en el flujo de trabajo:", error); // Captura cualquier error sin importar su origen
  }
}

let usuario = { nombre: "Juan" }; // Usuario con nombre
procesarDatos(usuario); // Llamamos a procesarDatos

let usuarioInvalido = null; // Usuario nulo
procesarDatos(usuarioInvalido); // Llamada con usuario nulo


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

If any error, custom or not, is not caught (there is no try...catch around), the error propagates to the higher functions that called it, until it reaches the global function (window object in a web browser or global object in node), where it ends up stopping the program if not handled.

Custom errors can be thrown anywhere in our code and they stops the program right at the point where the error is thrown.
*/

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