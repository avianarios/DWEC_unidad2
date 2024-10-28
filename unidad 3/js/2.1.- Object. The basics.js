"use strict";
//Object "object" is the base of any other object in JS. It is where the other objects inherit
/*built-in objects:

    -Object: They contain data collections (pair key-value) and functionality (methods). All every object inherits from object "object"
    -Array: It is an ordered list of values of any type enclosed into brackets. Example: [1, 2, 3, “pepe”, “jose”, true]  
    -String: Represents a chain of text
    -Function: It's an object representing an executable chunk of code that can be called anywhere. function sumar (a,b){ return a+b;}
    -Boolean: Although it exists a boolean object, it is recommended to use primitive type as it is simpler. You can evaluate a boolean object or its content. In the first case, if it exists it returns true, even if it contains false, which is confusing. Thus, using primitive type is preferred
    -Error handling objects, like Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError and URIError
    -Math. Provides mathematical functions
    -Date: An object to work with dates and time. new Date();
    -RegExp: An object to work with regular expressions. /\d+/
    -Data Structure: Map, Set, WeakMap and WeakSet
    -JSON
    -Promise and AsyncFunction
    -Console
*/
//////////////////////////////
//////Creating objects////////
//////////////////////////////
/*
Ways of creating objects:
  -Object literals: definition of an spare object
  -Factory functions: a function with parameters that returns an object with its own methods
  -Constructor functions: a constructor that creates an instace of an object
  -Classes (starting at mES6)
*/
//Example 1: using object literal
//defines a single, specific object at the time it is created.
//you do not need to use "this" when defining the object's properties, because you are creating the properties directly on the object. However, you do need to use "this" inside the methods to access the object's properties.

//"this" is a reserved word that refers to the current execution context. Its value is defined when the method or property is called, not when it's defined. It depends on its execution context and it is different depending on how the function is called, whether as a method on an object, globally, as a callback function, or using call, apply, or bind.

//Talking about objects, it references the object that called the method and it's a way of binding properties and methods to the object instance.

const persona={
    id:1,
    nombre:"Procopio",
    edad:30,
    direccion:{
      calle:"pez",
      numero:3
    },
    saluda:function(){
      console.log (`hola soy ${this.nombre}`);  //references the current object
    },
    despidete(como){
      console.log (como);
    },
    pregunta:()=>console.log (`yo, ${this.nombre}, quiero preguntarte algo`);
};

/*create objects this way when...
  -...You need to create a simple object and do not plan to create multiple instances.
  -...The object does not require complex methods or logic.*/
  
/*Options to create a new object...
  -Option 1: duplicate the whole code of the first object and change its property's value inside the object (really inefficient)
  -Option 2: Object.assign
  -Option 3: Object.create
*/

//Example 2: creating several objects by using Object literal
//Option 1: duplicating code (highly inefficient)
const persona = {
  nombre: "Ascensio",
  saludar() {
      console.log(`Hola, soy ${this.nombre}`);
  }
};

const persona2 = {
  nombre: "Conrado",
  saludar() {
      console.log(`Hola, soy ${this.nombre}`);
  }
};

//Option 2 (Object.assign): assigning the object to an empty one and change its properties. There's no inheritance, each object receives a copy of properties and methods so code is duplicated in memory.
const personaProto = { 
  saludar() { console.log(`Hola, amigos, soy ${this.nombre}`); }
};
const persona1=Object.assign({}, personaProto);
const persona2=Object.assign({}, personaProto);
persona1.nombre="Torcuata";
persona1.saludar();
persona2.nombre="Urraca";
persona2.saludar();


//Option 3 (Object.create): creating a new object specifying its prototype (object it inherits from). There's inheritance, so each object has a prototype. Code is not duplicated in memory
const personaProto = {
  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
};

const persona1 = Object.create(personaProto); //doesn't work with nested properties
const persona2 = Object.create(personaProto); //doesn't work with nested properties
persona1.nombre = "Tiburcia";
persona1.saludar();
persona2.nombre = "Socorro";
persona2.saludar();

//Problem: both methods copy references to nested objects. This means that if you change a value in one instance's nested object, it will affect all instances that share that reference.


//Example 3: using a factory function (a function that returns an object)
//Everytime the function is called, a new object is generated with its own methods. There's no inheritance nor prototypes. Therefore, different objects don't share the same method in memory
//code can be reutilized to create new objects
/*use it when...
  -...you don't need prototypical inheritance
  -...If you need individual and complete instances without sharing methods through prototypes.
*/
const crearPersona = (nombre, edad) => {
  return {
      nombre, //as properties have the same name as parameters, parameter's name can be removed
      edad,
      saludar() {
          console.log(`Hola, soy ${this.nombre}`);
      }
  };
};

const persona1 = crearPersona("Eufrasio", 30);
const persona2 = crearPersona("Homobona", 25);


//Example 4: using a constructor function (traditional way of creating objects in JavaScript)
/*use it when...
  -...you need to create complex objects
  -...You need to create multiple instances of an object that share the same structure and methods.
  -...You want to use prototypical inheritance.
*/
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function() {   //saludar method defined inside constructor function
      console.log(`Hola, soy ${this.nombre}`);
  };
}

const persona1 = new Persona("Eufrasio", 30);
const persona2 = new Persona("Homobona", 25);


//Alternative: using Persona.prototype which is a special object in JavaScript that acts as a template or ‘prototype’ shared by all instances created from the Persona constructor function. Each instance created by new Persona() inherits the properties and methods defined in Persona.prototype, allowing functionality to be shared without duplicating methods for each instance.
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

Persona.prototype.saludar = function() {    //saludar method defined at prototype
  console.log(`Hola, soy ${this.nombre}`);
};

const persona1 = new Persona("Eufrasio", 30);
const persona2 = new Persona("Homobona", 25);


//Example 5: using classes (ES6)
/*Same functionality that constructor function, but with modern sintax
Advantages:
  -Easier syntax
  -no need to manually create methods in prototype
  -it's easier to inherit. Just use the word "extends". With constructors, you need to use Object.create or Object.setPrototypeOf
  -use of "new" to create new classes is a must. With constructors, it can be bypassed, resulting in this refering to the global object or to undefined in strict mode.
*/

class Persona {
  constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
  }

  saludar() {
      console.log(`Hola, soy ${this.nombre}`);
  }
}

const persona1 = new Persona("Eufrasio", 30);
const persona2 = new Persona("Homobona", 25);


///////////////////////////////////////////////
////accessing object properties and methods////
///////////////////////////////////////////////
//Example 1: by using dot
console.log (persona.nombre);    //returns value
console.log (persona.noExiste);    //returns undefined, but no error
console.log (usuario2.saluda());
console.log (usuario2.despidete("con dios"));
console.log (usuario2.pregunta());
console.log (perro1.saludar());

//Example 2: by using brackets
console.log (persona["cargo"]);     //by using brackets, complex field names can be used

//Example 3: accessing to properties by using dinamic names
let clave1=prompt("¿Qué elemento quieres crear?");
let valor=prompt("Dame la cantidad");
let obj2={
    [clave1]: valor
}
console.log (obj2);
console.log (obj2[clave1]);

//Example 4: brackets notation allows to calculate in real-time the key 
let llave=prompt("¿Qué quieres saber del usuario?");  //needs to be a valid key name
console.log(persona[llave]);    //llave=edad or nombre...


////////////////////////////////////////////////
////removing existing properties and methods////
////////////////////////////////////////////////
//Example 1: Removing properties
delete persona.edad;
console.log(persona.edad);

//Example 2: Removing methods
delete usuario2.saluda;
console.log(usuario2);


///////////////////////////////////////////////////////////////////////
////defining new properties and methods after the object is created////
///////////////////////////////////////////////////////////////////////
//Example 1: defining a property directly
persona.licenciado=false;
persona['lugar de nacimiento']="Roma";  //this name is only possible by using brackets
console.log(persona);

//Example 2: external assignment of an arrow function to a property
persona.saluda=()=>console.log ("hola a todos");
persona.saluda();

//Example 3: external assignment of an expression function to a property
let diHola2=function (saludo){
  console.log(saludo);
}

persona.saluda=diHola2;
persona.saluda("hola, estimado usuario");

//Example 4: defining a property by using defineProperty. The three properties can be omitted. Their default value is false
//it allows more control over this property 
Object.defineProperty(persona, 'nombre', {
  value: 'Ursicino',
  writable: false,  // El valor no se puede cambiar
  enumerable: true,  // Se puede listar en bucles
  configurable: false  // No se puede eliminar ni reconfigurar
});

console.log(persona.nombre);  // "Ursicino"
persona.nombre = 'Venancio';  // No tiene efecto
console.log(persona.nombre);  // Sigue siendo "Ursicino"

//Example 5: defining a new method by using defineProperty
let objeto = {};
Object.defineProperty(objeto, 'saludar', {
    value: function() {
        console.log("¡Hola!");
    },
    writable: false,    // No se puede modificar el método
    enumerable: true,   // Se incluye en enumeraciones
    configurable: true  // Se puede eliminar o modificar
});

objeto.saludar();  // "¡Hola!"

// Intentar cambiar el método
objeto.saludar = function() {
    console.log("¡Adiós!");
};

objeto.saludar();  // "¡Hola!", sigue siendo el mismo método
delete objeto.saludar;    // Eliminar el método
objeto.saludar();  // undefined, el método ya no existe


/////////////////////////////////////
////checking if a property exists////
/////////////////////////////////////
//Example 1: checking if an object has a property with hasOwnProperties (older, not recommended)
const obj3 = { a: 1 };
console.log(obj3.hasOwnProperty('a')); // true

//Example 2: checking if an object has a property with hasOwn
let persona = { nombre: "Juan" };
console.log(Object.hasOwn(persona, "nombre")); // true

//Example 3: checking if an object has a property with in
console.log ("hola" in persona);     //returns false, but no error
console.log ("edad" in persona);   //returns true


////////////////////////////////////////////
////preventing object from being changed////
////////////////////////////////////////////
//example 1: object.freezes
//adding, removing or modifying properties isn't allowed
const persona = { nombre: 'Juan', edad: 30 };
Object.freeze(persona);

persona.edad = 31;  // No tiene efecto
persona.genero = 'masculino'; // No se puede agregar
delete persona.nombre; // No se puede eliminar

console.log(persona);  // { nombre: 'Juan', edad: 30 }


//example 2: object.seal
//adding or removing properties isn't allowed
const persona = { nombre: 'Juan', edad: 30 };
Object.seal(persona);

// Intentos de modificación
persona.edad = 31;  // Esto funciona, se modifica la propiedad existente
persona.genero = 'masculino'; // No se puede agregar, ya que el objeto está sellado
delete persona.nombre; // No se puede eliminar, ya que el objeto está sellado

console.log(persona);  // { nombre: 'Juan', edad: 31 }


//example 3: Object.preventExtensions
//adding new properties isn't allowed
const persona = { nombre: 'Juan', edad: 30 };
Object.preventExtensions(persona);

// Intentos de modificación
persona.edad = 31;  // Esto funciona, se modifica la propiedad existente
persona.genero = 'masculino'; // No se puede agregar, ya que el objeto no puede extenderse
delete persona.nombre; // Esto funciona, se puede eliminar una propiedad existente

console.log(persona);  // { edad: 31 }


//////////////////////////////////////////
///////iterating through properties///////
//////////////////////////////////////////
const persona = { nombre: "Procopio", cargo: "Prefecto", edad: 29};
/*Three important methods
  Object.keys -> returns an array with the name of the properties
  Object.values -> returns an array with the value of the properties
  Object.entries -> returns an array with a pair key-value
*/

//Example 1: traditional for
let valores=Object.values(persona);        //llaves=['name', 'age']
for (let i=0; i<valores.length; i++){       //traditional for
    console.log (valores[i]);
}

//Example 2: for...in -> non-iterable object
//Objects can be classified as iterable and non-iterable. Both of them have special for structures to iterate over that makes it easier than traditional for
//How do I know if it's an iterable object?
console.log (persona[Symbol.iterator]);  //if returns undefined, it is not iterable
for (let clave in persona) {
  console.log(clave, persona[clave]);
}

//Example 3: for of... (Object.keys returns an iterable array)
const claves=Object.keys(persona);
for (const clave of claves) {
  console.log(`${clave}: ${persona[clave]}`);
}

//Example 4: forEach
Object.values(persona).forEach((valor) => {
  console.log(valor);
});

Object.entries(persona).forEach(([key,value]) => {
  console.log(`${key}: ${value}`);
});

//Example 5: a property defined as enumerable:false is not shown when iterating over object's properties
let persona = {
  nombre: "Juan",
  edad: 30
};

// Definimos una nueva propiedad "salario" con enumerable: false
Object.defineProperty(persona, "salario", {
  value: 50000,
  enumerable: false
});

// Intentamos enumerar las propiedades del objeto "persona"
for (let key in persona) {
  console.log(key); // Solo mostrará "nombre" y "edad"
}

// Probamos con Object.keys
console.log(Object.keys(persona)); // ["nombre", "edad"]

// Sin embargo, podemos acceder a la propiedad "salario" directamente
console.log(persona.salario); // 50000


/////////////////////////
/////Copying objects/////
/////////////////////////
//From a practical point of view, objects with the same properties and values but different order are functionally equivalent, and if you work with them, they will behave in the same way. The order of the properties does not change how you can access them or their meaning within the program. Objects should be considered different when there are differences in the number or name of properties or in their values.

//Example 1: copying and comparing variables by using == or ===
let aux="hola";
let aux2=aux;   //When a variable is assigned to another one a new pointer to a new memory position is created and the same value is stored in that position. Therefore, both of them are different elements at different memory positions
console.log (aux==aux2, aux===aux2);    //true, true. when comparing variables, only their value are compared

aux2="adios";   //Since both of them point to different memory locations, when modifying aux2, aux still holds its value
console.log (aux==aux2, aux===aux2);    //false, false

//Example 2: copying objects with Object.assign method
//copy one ore more objects into another (to create two different objects with the same values)
persona1={
    nombre:"pepe",
    profesion: "fontanero"
};
persona1.edad=33;

persona2={
    nacionalidad:"Española"
}

let persona3=Object.assign({}, persona1, persona2);  //copy persona1 and persona2 into an empty object ({}) and the assigns it to persona3
let persona4={};
Object.assign(persona4, persona3);  //copy persona3 into persona4
console.log(persona3, persona4);

//Example 3: Object.assign doesn't work with nested objects
//Object.assign creates a reference to nested objects, it does not copy them
persona1={
  nombre:"pepe",
  profesion: "fontanero",
  medidas: {
      altura:180,
      pecho: 100,
  }
};

let persona2=Object.assign({}, persona1);   //first level of persona1 is copied by value (they are different copies of the same object in different locations in memory) whereas nested levels are copied by reference (they are pointers pointing to the same object)
persona2.nombre="juan"; //if persona2 is modified so is persona1
persona1.medidas.altura=170;
console.log(persona1, persona2);


//Example 4: deep clone with global function structuredClone
//structuredClone copies by value nested objects (deep clone). They are not references, but copies pointing to different memory locations.
//structuredClone does not use prototypical inheritance
persona2=structuredClone(persona1);   //all levels are copied by value
persona1.medidas.altura=200;  //if persona1 is modified, so is not persona2
console.log(persona1, persona2);


///////////////////////////
/////Comparing objects/////
///////////////////////////
//example 1: comparison with == and ===
//objeto1 and objeto2 point to the same memory location. Second object it's just a reference to the first one
let objeto1=objeto2={
    nombre:"pepe",
    profesion: "fontanero"
};

let objeto3={
    nombre:"pepe",
    profesion: "fontanero"
};
objeto1.nombre="fede";  //if objeto1 is changed, so is objeto2, as they both point to the same memory location
console.log(objeto2.nombre);
objeto3.nombre="fede";

//equal or strictly equal can't be used to compare. They only check if objects points to the same memory location
console.log (objeto1==objeto2); //true. They both point to the same memory location
console.log (objeto1==objeto3); //false. Despite both of them have the same elements (everybody would say they are "they are equals"), they are different objects, meaning each one points to its own memory location, and this is what equal measures
console.log (objeto1===objeto2);    //true
console.log (objeto1===objeto3);    //false. when using === with objects, JS not only verifies their type, but if both objects point to the same memory location


//example 2: (solution) comparing by using a custom function
function areObjectsEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true;
}
  
console.log(areObjectsEqual(obj1, obj3)); // true
console.log(areObjectsEqual(obj4, obj5)); // true

//next solution, using an external library like lodash with specific methods for comparing, will be discussed it in a later unit


/////////////////////////////
////basic usage of "this"////
/////////////////////////////
/*
Using "this" allows to use properties and methods outside the object (Which is may be not always desirable).
If not used, properties and methods would be local and getters and setters would be needed to access and modify them.
*/

//Example 1: the need of using "this"
function Persona(nombre, edad) {
  nombre=nombre;  //won't work
  edad=edad;
/*  this.nombre = nombre;
  this.edad = edad;*/
}
Persona.prototype.saludar = function() {
  console.log(`Hola, soy ${this.nombre}`);   //"this" is needed as I'm accessing an object property from outside it. It won't work if "this" weren't used at Persona properties
};

const persona1 = new Persona("Eufrasio", 30);
persona1.saludar();
const persona2 = new Persona("Homobona", 25);
persona2.saludar();


//Example 2: using object name instead of "this"
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.aplicarDescuento = function(producto, porcentaje) {
      const descuento = producto.precio * (porcentaje / 100);
      console.log(`El precio con descuento es: ${producto.precio - descuento}`);    
  };
}

const producto1 = new Producto("Zapatos", 100);
const producto2 = new Producto("Camisa", 50);

producto1.aplicarDescuento(producto2, 20);
/*problems
  -the object has to be passed as an argument to the method. If the method changes in the future, every single call to the method must be changed. Besides, it's redundant and difficult to maintain
  -Despite not having any sense, you can call producto.aplicarDescuento(producto2,20); What does it mean? it's confusing

if "this" were removed...
  -...only from nombre and precio, they couldn't be used outside the object. Since it's producto1 who is calling aplicarDescuento over producto2 properties, the method would return NaN
  -...only from aplicarDescuento, it couldn't be used outside the object. The call would return an error
  */


//alternative
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.aplicarDescuento = function(porcentaje) {
      const descuento = this.precio * (porcentaje / 100);
      console.log(`El precio con descuento es: ${this.precio - descuento}`);
  };
}
const producto1 = new Producto("Zapatos", 100);
const producto2 = new Producto("Camisa", 50);

producto1.aplicarDescuento(20); // El precio con descuento es: 80
producto2.aplicarDescuento(10); // El precio con descuento es: 45


//Example 3: without "this" in producto object, its properties can't be accessed outside object. This could be solved by using getters
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}

function Carrito() {
  this.productos = [];
  this.agregarProducto = function(producto) {
      this.productos.push(producto);
  };
  this.totalCarrito = function() {
      let total = 0;
      this.productos.forEach(prod => {
          total += prod.precio; // It access to the property of instance price. If "this" weren't used at Producto, it wouldn't work and getters would be needed
      });
      return total;
  };
}

const producto1 = new Producto("Zapatos", 100);
const producto2 = new Producto("Camisa", 50);

const carrito = new Carrito();
carrito.agregarProducto(producto1);
carrito.agregarProducto(producto2);

console.log(`El total del carrito es: ${carrito.totalCarrito()}`);


//Example 4: "this" doesn't work with arrow functions
let usuario={nombre:"Sandalio"}
usuario.saluda=()=>{
  console.log("Hola soy "+this.nombre);
};
usuario.despidete=function(){
  console.log (`Adiós, soy ${this.nombre}`);
};

usuario.saluda();
usuario.despidete();

//solution
let usuario = { nombre: "Sandalio" };
usuario.saluda = function() {
  console.log("Hola soy " + this.nombre);
};
usuario.despidete = function() {
  console.log(`Adiós, soy ${this.nombre}`);
};

usuario.saluda();
usuario.despidete();

zzzzzzzzzzzzz TERMINAR DE EXPLICAR THIS EN FUNCIONES DE FLECHA

//Example 5: "this" doesn't work in arrow functions. Its context its defined when the function is created (lexical context), not when is called like the rest of methods
function Usuario(nombre) {
  this.nombre = nombre; // Asignar el nombre a la propiedad del objeto
  this.saluda = () => {
      console.log("Hola soy " + this.nombre); // 'this' se refiere al contexto léxico
  };
  this.despidete = function() {
      console.log(`Adiós, soy ${this.nombre}`); // 'this' se refiere al objeto 'Usuario'
  };
}

const usuario = new Usuario("Sandalio");
usuario.saluda();   // Salida: Hola soy undefined (debido a la función de flecha)
usuario.despidete(); // Salida: Adiós, soy Sandalio


//solution
function Usuario(nombre) {
  this.nombre = nombre; // Asignar el nombre a la propiedad del objeto
  this.saluda = function(){
      console.log("Hola soy " + this.nombre);
  };
  this.despidete = function() {
      console.log(`Adiós, soy ${this.nombre}`); // 'this' se refiere al objeto 'Usuario'
  };
}

const usuario = new Usuario("Sandalio");
usuario.saluda();   // Salida: Hola soy undefined (debido a la función de flecha)
usuario.despidete(); // Salida: Adiós, soy Sandalio