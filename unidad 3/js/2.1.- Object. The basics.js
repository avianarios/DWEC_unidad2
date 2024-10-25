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
//Example 1: simple object
let persona={}; //empty object
let usuario={
  nombre:"Procopio",
  edad:27,
  Rando: "prefecto"
}

//Example 2: complex object
let usuario2={
    id:"1",
    nombre:"pepe",
    edad:30,
    saluda:function(){
      console.log ("hola");
    },
    despidete(como){
      console.log (como);
    },
    pregunta:()=>console.log ("¿estás bien?")
}

//Example 3: create a complex object by using a constructor
function Perro(nombre, raza) {
    this.nombre = nombre;
    this.raza = raza;
    this.saludar= function(){
        console.log("guau guau")
    };
}

let perro1=new Perro ("pirata","beagle"); //new is an operator that instantiates objects from construtor functions
/*
Differences between create an object with let and with new
  -let inherits directly from Object.prototype while new can create a chain of inheritance. We'll cover later
  -Using new with a constructor allows you to create multiple instances of the object with the same structure and functionality, ideal for object templates.
  -With a constructor, you can define methods directly in the prototype, saving memory, since all instances share these methods. This is not possible when you define an object with {}, because all methods are copied to each instance.
*/


//Example 4: Unstructuring with rest parameter to create a new object
//this example uses unstructuring to assign street property to streetName variable and creates an object address with two properties: postalCode and city
const { streetName, ...address } = {
    street: 'Platz der Republik 1',
    postalCode: '11011',
    city: 'Berlin',
  };

console.log (address);

//Example 5: create users by using a "factory function", a function that creates and returns objects
function makeUser(name, age){
    return{
        name: name,
        age: age,
    };
}

let user2=makeUser("paco", 40);
console.log (user2);

//Example 6: same as before but function as arrow
//as properties have the same name as parameters, they can be removed
//here they have been removed from arrow, but can be done in traditional funcion as well
let creaUsuario=(name,age)=>(
    {name, age}
);

user=creaUsuario("pepe", 30);
console.log (user);


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

//Example 2: defining a property by using defineProperty. The three properties can be omitted. Their default value is false
//it allows more control over this property 
Object.defineProperty(persona, 'nombre', {
  value: 'Juan',
  writable: false,  // El valor no se puede cambiar
  enumerable: true,  // Se puede listar en bucles
  configurable: false  // No se puede eliminar ni reconfigurar
});

console.log(persona.nombre);  // "Juan"
persona.nombre = 'Pedro';  // No tiene efecto
console.log(persona.nombre);  // Sigue siendo "Juan"

//Example 3: defining a new function by using defineProperty
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

//Example 4: external assignment of an arrow function to a property
persona1={
  nombre:"pepe",
  profesion: "fontanero",
  medidas: {
      altura:180,
      pecho: 100,
  },
};

persona1.edad=37;
persona1.saluda=()=>console.log ("hola a todos");
delete(persona1.medidas);
persona1.saluda();
console.log (persona1);

//example 4: external assignment of an expression function to a property
let usuario={nombre:"pepe"}
let diHola2=function (saludo){
  console.log(saludo);
}

usuario.saluda=diHola2;
usuario.saluda("hola, estimado usuario");


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
//freezes the object completely, i.e. does not allow adding, deleting or modifying properties.
const persona = { nombre: 'Juan', edad: 30 };
Object.freeze(persona);

persona.edad = 31;  // No tiene efecto
persona.genero = 'masculino'; // No se puede agregar
delete persona.nombre; // No se puede eliminar

console.log(persona);  // { nombre: 'Juan', edad: 30 }


//example 2: object.seal
//it does not allow properties to be added or removed, but existing properties can still be modified.
const persona = { nombre: 'Juan', edad: 30 };
Object.seal(persona);

// Intentos de modificación
persona.edad = 31;  // Esto funciona, se modifica la propiedad existente
persona.genero = 'masculino'; // No se puede agregar, ya que el objeto está sellado
delete persona.nombre; // No se puede eliminar, ya que el objeto está sellado

console.log(persona);  // { nombre: 'Juan', edad: 31 }


//example 3: Object.preventExtensions
//it prevents new properties from being added to the object, but allows existing properties to be modified and removed.
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

//Example 3: for of... (Object.keys return an iterable array)
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

//Example 5: when defining a property as enumerable:false, it is not shown when iterating over object's properties
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
//From a practical point of view, objects with the same properties and values but different order are functionally equivalent, and if you work with them, they will behave in the same way. The order of the properties does not change how you can access them or their meaning within the program. 
//objects should be considered differents when there are differences in the number or name of properties or in their values.
//when it comes to copying variables, the result is two different elements at different memory positions. This won't happen with objects
let aux="hola";
let aux2=aux;   
aux2="adios";   //if I modify aux2, aux still holds its original value
console.log(aux, aux2);
console.log (aux==aux2, aux===aux2);    //comparing only value and value and type

//Example 1: copying objects with Object.assign method
//copy one ore more objects into another (to create two different objects with the same values)
let objeto1={
    nombre:"pepe",
    profesion: "fontanero"
};
objeto1.edad=33;

let objeto2={
    nacionalidad:"Española"
}

let objeto4=Object.assign({}, objeto1, objeto2);  //copy objeto1 and objeto2 into objeto4. Overwrite if exist
let objeto5=Object.assign({}, objeto4);  //copys objeto4 into objeto5
console.log(objeto4, objeto5);

//Example 2: deep clone with global function structuredClone
//Object.assign creates a surface copy, meaning it does not copy nested objects (it keeps them as reference)
//structuredClone allows objects inside objects to be copied as well (deep clone)
persona1={
    nombre:"pepe",
    profesion: "fontanero",
    medidas: {
        altura:180,
        pecho: 100,
    }
};

let persona2=Object.assign({}, persona1);   //first level of persona1 is copied by value (they are different copies of the same object in different locations in memory) whereas nested levels are copied by reference (they are pointers pointing to the same object)
persona2.nombre="juan";
persona1.medidas.altura=170;
console.log(persona1, persona2);
persona2=structuredClone(persona1);   //all levels are copied by value
persona1.medidas.altura=200;
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

objeto1.nombre="fede";
console.log(objeto2.nombre);

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

//next solution, using an external library like lodash with specific methods for comparing, it'll be discussed it in a later unit


/////////////////////////////
////basic usage of "this"////
/////////////////////////////
//Using this allows you to write methods that work for any object that calls them. Instead of relying on the object name, which may or may not be the same in all cases, this always refers to the actual object, making your code more flexible, reusable and dynamic.
//The value of this is defined when the function is called, not when it's defined. It depends on its execution context and it is different depending on how the function is called, whether as a method on an object, globally, as a callback function, or using call, apply, or bind.
//this is a reference to the current object in execution

//example 1: calling a method within an object
const obj = {
    nombre: "Carlos",
    saludar: function() {
      console.log("Hola soy "+this.nombre); //this = obj
    }
};
  
obj.saludar();  //Hola soy Carlos

//example 2: creating a function externally and assigning it to an object
let usuario={nombre:"pepe"}

let diHola1=()=>{
    console.log("Hola soy "+this.nombre);
};

usuario.saluda=diHola1;
usuario.saluda();   //Hola soy pepe


//example 3: using this with properties and methods.
//"this" only works with methods. When a method is invoked, this refers to the object that invoked the method.
let persona={
  nombre:"pepe",
  edad:25,
  profesion: "fontanero",
  no_funciona: this,
  dame_objeto(){
    return this;
  },
  dame_nombre:function(){
    return this.nombre;
  },
  dame_edad(){
    return this.edad;
  },
}

console.log (persona.no_funciona.nombre);    //doesn't work. "this" is only for methods
console.log (persona.dame_objeto().nombre);  //it works
console.log (persona.dame_nombre());
console.log (persona.dame_edad());


//example 4: internal and external functions
let persona1={
  nombre:"pepe",
  profesion: "fontanero",
  medidas: {
      altura:180,
      pecho: 100,
  },
  //two differente ways of declaring a function
  buenosDias(){
    console.log (`yo, ${this.nombre}, te doy los buenos días`);
  },
  //defining as a constant an arrow function that utilizes "this" and calling it 
  felizAnyo: function(){
      const saludar_anyo=()=> console.log (`yo, ${this.nombre}, te felicito el año nuevo`);
      saludar_anyo();
  }
};

//example 5: creating two functions for later assignment to the object
persona1.buenasTardes=function(){
    console.log (`yo, ${this.nombre}, te doy las buenas tardes`);
};
persona1.buenasNoches=()=>{
    console.log (`yo, ${this.nombre}, te doy las buenas noches`); //this doesn't work
};

persona1.buenosDias();
persona1.buenasTardes();  //this function is being invoked as a method of the object
persona1.buenasNoches();  //arrow functions don't have their own this. Instead, they get it from the context they were created at
persona1.felizAnyo();