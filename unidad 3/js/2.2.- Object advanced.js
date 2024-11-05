"use strict";
/////////////////////////////
////stablishing a context////
/////////////////////////////
//bind, call and apply (similar to call, but receives arguments in an array)

//Example 1: BIND can provide a value to a parameter in a function
function multiplicar(a, b) {
  return a * b;
}

const duplicar = multiplicar.bind(null, 2); // Fija el primer argumento a 2
console.log(duplicar(5));


//Example 2: BIND stablishes a context. It returns a function with "this" referencing the specified object 
//it has been used a literal object as we are creating only one instance
const persona = {
  nombre: "Gervasio",
  saludar: function() {
    console.log("Hola soy "+this.nombre);
    //console.log (this.navigator);   will work in a non strict mode
  }
};

persona.saludar();    //"this" context is obj
const saludarFuera = persona.saludar;    //method reference is copied into saludarFuera, but without persona object as context. Context is lost, so is "this"
saludarFuera();  //"this" value is determined when a function is invoked. saludarFuera is called with no object as a reference. Therefore, when using strict mode will return error and when using non strict mode it will reference global object. And as it has no "nombre" property, it will return undefined

const saludarBind = persona.saludar.bind(persona); // bind stablishes "this" context to obj
saludarBind(); //now, "this" inside "saludar" always refers to obj


//Example 3: BIND can provide context when calling a function
const persona = {
  nombre: "gervasio",
  saludar: function() {
      // Esta es una función regular, 'this' se refiere a 'objeto'
      //a little tricky creating an arrow function within a function, but it is intended to demonstrate concepts
      const funcionFlecha = () => {
        console.log("Hola soy "+this.nombre); // 'this' se refiere a 'objeto'
      };
      funcionFlecha();
  }
};

persona.saludar();

const funcionExterna = function() {
  console.log(this.nombre); // Aquí 'this' no se refiere a 'objeto' si se llama fuera de su contexto
};

//const nuevaFuncion = funcionExterna;  //won't work
const nuevaFuncion = funcionExterna.bind(objeto);
nuevaFuncion();


//Example 4: BIND allows "this" to operate within a nested function
const obj3 = {
  nombre: "Recaredo",
  saludar: function() {
    console.log(this.nombre);
    
    function funcionInterna() {
      console.log(this.nombre);
    }

    funcionInterna(); //"this" value is determined when a function is invoked. funcionInterna is called with no object as a reference. Therefore, "this" references to global object Window in non-strict mode or undefined if strict mode.
    funcionInterna.bind(this)();  //by using bind, a context is provided
  }
};
obj3.saludar();     //saludar context is obj3


//Example 5: CALL stablishes a context and parameters and inmediately executes the function
const usuario = {
  nombre: "Sandalio"
};

function saludar(saludo) {
  console.log(`${saludo}, soy ${this.nombre}`);
}

saludar.call(usuario, "Hola"); //Summons saludar whit "this" pointing to obj and a parameter


//Example 6: CALL summons the method in prototype directly
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

Object.defineProperty(Persona.prototype, 'saludar', {
  value: function() {
    console.log(`¡Hola!, soy ${this.nombre}`);
  },
  writable: false,
  enumerable: true,
  configurable: true
});

const persona1 = new Persona("Obdulio", 35);
Persona.prototype.saludar.call(persona1); // Call the prototype method directly passing persona1 as context. It'll do the same as persona1.saludar();


//Example 7: CALL provides a context to a function
//this may not be a good programming practice. there sould be a constructor function and a prototype with saludar. This code is just for demonstrating call function
const obj1 = { nombre: "Nepomuceno" };
const obj2 = { nombre: "Nicanora" };

function saludar() {
  console.log(`Hola, soy ${this.nombre}`);
}

saludar.call(obj1);
saludar.call(obj2);


/////////////////////
////Encapsulation////
/////////////////////
/*
Encapsulation is a key concept in object-oriented programming that consists of restricting direct access to certain data and behaviours of an object and allowing interaction with them only through defined methods. This is achieved by keeping internal data protected and providing public functions to manipulate this data in a controlled way. Two kind of functions:
  -getters: allow to access the value of a property
  -setters: allow to set a value to a property

they are better than using regular functions due to:
  -better encapsulation
  -legibility
*/


//Example 1: private properties in literal object
//There's a convention of using _ at the beginning of the name to indicate private property, but it's just a convention that indicates you not to use this property outside the object. Despite that, you can do it. It is not a real encapsulation.
let vehiculo = {
  _marca,
  _modelo,
  _circulando,
};

let coche = Object.create(vehiculo);
coche._marca="Ford";  
coche._modelo="Escort";
coche._circulando="true";
console.log(vehiculo, coche);


//Example 2: private properties in constructor function
function Persona(nombre, edad) {
  this._nombre = nombre;  // private property (convention)
  this._edad = edad;      //By using "this", _edad is accessible from outside the object
}

Persona.prototype.saludar=function(){
  console.log(`yo, ${this._nombre}, te saludo`);
}

const Mamerto = new Persona("Mamerto", 30);

console.log(Mamerto._edad); //30
Mamerto._edad = 40;
console.log(Mamerto._edad); //40
Mamerto.saludar();


//Example 3: private properties in classes (from ECMAScript 2022)
//it's a real encapsulation. It can't be changed from outside the object
class Persona {
  #nombre; // Real private property. can't be changed nor accessed from outside the object
  #edad;   

  constructor(nombre, edad) {
      this.#nombre = nombre;
      this.#edad = edad;
  }
}

const persona2 = new Persona("Saturnino", 40);
console.log(persona2.#nombre);     // Error: propiedad privada


//Example 4: defining getters and setters to get real encapsulation in literal objects
//Getters (accesador) and setters (configurador) must be used to access internal properties from outside
//be careful not to use the same name for the property and the parameter of the setter
let vehiculo = {
  _marca: "",
  _modelo: "",
  _circulando: false,

  // Getter para _marca
  get marca() {
    return this._marca;
  },

  // Setter para _marca
  set marca(nuevaMarca) {
    this._marca = nuevaMarca;
  },

  // Getter para _modelo
  get modelo() {
    return this._modelo;
  },

  // Setter para _modelo
  set modelo(nuevoModelo) {
    this._modelo = nuevoModelo;
  },

  // Getter para _circulando
  get circulando() {
    return this._circulando;
  },

  // Setter para _circulando
  set circulando(enCirculacion) {
    this._circulando = enCirculacion;
  }
};

// Crear un objeto coche que hereda de vehiculo
let coche = Object.create(vehiculo);

// Usar los setters para definir valores
coche.marca = "Ford";
coche.modelo = "Escort";
coche.circulando = true;

// Mostrar el valor de los getters
console.log(coche.marca);         // "Ford"
console.log(coche.modelo);        // "Escort"
console.log(coche.circulando);    // true
console.log(vehiculo);            // { _marca: "", _modelo: "", _circulando: false }
console.log(coche);               // { marca: "Ford", modelo: "Escort", circulando: true }


//Example 5: defining getters and setters to get real encapsulation in construction functions
/*
  1- Convert properties into local variables by removing "this". Thus, properties are prevented from being accessed from outside
  2.- Create getters (accesador) and setters (configurador) to access internal properties from outside
*/
function Persona(nombre, edad) {
  //local variables
  let _nombre = nombre;
  let _edad = edad;

  //getter
  //Remember: By using this, properties and methods belong to the instance of the object that is created with new Persona(...). Without this, variables and functions are defined in the local context of the constructor function and will not be accessible from outside it. 
  this.getNombre = function() {
    return _nombre;
  };

  //setter
  this.setNombre = function(nuevoNombre) {
    _nombre = nuevoNombre;
  };

  this.saludar = function() {
    console.log(`Yo, ${_nombre}, te saludo`);
  };
}

const mamerto = new Persona("Mamerto", 30);

console.log(mamerto.getNombre()); // "Mamerto"
mamerto.setNombre("Mamertín");
console.log(mamerto.getNombre()); // "Mamertín"
mamerto.saludar(); // "Yo, Mamertín, te saludo"

//Problem: methods are replicated at every instance

//Example 6: defining getters and setters to get real encapsulation in construction functions by using defineProperty
//It doesn't solve the former problem, it's just another way that provides more control
function Persona(nombre, edad) {
  // Variables privadas
  let _nombre = nombre;
  let _edad = edad;

  //Defining getter and setter this way permits using them as if they were a property (persona1.nombre would be the getter)
  //The only way of being able to use local properties is defining methods inside the object, implying they are replicated in every instance
  Object.defineProperty(this, 'nombre', {
    get: function() {
      return _nombre;
    },
    set: function(nuevoNombre) {
      _nombre = nuevoNombre;
    }
/*    ,
    writable: true,      // Permite que se cambie la propiedad
    enumerable: true,    // La propiedad será enumerable en un bucle
    configurable: true    // Permite modificar la propiedad más tarde*/
  });

  Object.defineProperty(this, 'edad', {
    get: function() {
      return _edad;
    },
    set: function(nuevaEdad) {
      _edad = nuevaEdad;
    }
  });
}

Persona.prototype.saludar = function() {
  console.log(`Yo, ${this.nombre}, te saludo.`);
};

const mamerto = new Persona("Mamerto", 30);

// getters are used like if they were properties
console.log(mamerto.nombre); // "Mamerto"
mamerto.nombre = "Mamertín";
console.log(mamerto.nombre); // "Mamertín"
mamerto.saludar(); // "Yo, Mamertín, te saludo."


//Example 7: defining getters and setters to get real encapsulation in classes
class Persona {
  #nombre; // Propiedad privada real
  #edad;   

  constructor(nombre, edad) {
      this.#nombre = nombre;
      this.#edad = edad;
  }

  // Getter para #nombre
  get nombre() {
    return this.#nombre;
  }

  // Setter para #nombre
  set nombre(nuevoNombre) {
    if (typeof nuevoNombre === "string" && nuevoNombre.length > 0) {
      this.#nombre = nuevoNombre;
    } else {
      console.error("Nombre inválido");
    }
  }

  // Getter para #edad
  get edad() {
    return this.#edad;
  }

  // Setter para #edad
  set edad(nuevaEdad) {
    if (Number.isInteger(nuevaEdad) && nuevaEdad > 0) {
      this.#edad = nuevaEdad;
    } else {
      console.error("Edad inválida");
    }
  }
}

// Uso de la clase con getters y setters
const persona2 = new Persona("Saturnino", 40);

// Obtener valores mediante los getters
console.log(persona2.nombre); // "Saturnino"
console.log(persona2.edad);   // 40

// Modificar valores mediante los setters
persona2.nombre = "Herminio";
persona2.edad = 45;

console.log(persona2.nombre); // "Herminio"
console.log(persona2.edad);   // 45

// Intentar acceder directamente a propiedades privadas genera un error
// console.log(persona2.#nombre); // Error


////////////////////////////////
////prototypical inheritance////
////////////////////////////////
/*
Some concepts about OOP:
  -Classes: These are static definitions of objects that defines the common properties and behaviour to all instances of that class.
  -Instances: When an object is created from a class, that class is said to be instantiated. Each object (instance) has its own memory space for the properties defined in the class.
  -Inheritance: It's a mechanism that allows a class (child) to have all properties and behaviour (methods) of the class it inherits from (parent). The child class can override the parent's methods, but it cannot change them.

Class inhteritance:
  -Objects inherit from classes
  -inheritance is static, defined at compilation time
Prototypical inheritance:
  -Objects inhterit from objects
  -Every object can have a prototype (object it inherits from)
  -Inhteritance is dinamic: Object prototype can be changed anytime with inmediate results
  */

//JavaScript uses a prototype-based inheritance model instead of the traditional class-based inheritance of other languages such as Java or C++. All objects have a prototype (accessed via __proto__ or Object.getPrototypeOf()), and if a property or method is not in the object, JavaScript looks in the prototype string.

//Example 1. Using Object.create to inherit
const animal = {
    hacerSonido() {
      console.log('Sonido de animal');
    }
};
  
const perro = Object.create(animal);
perro.hacerSonido = () => { console.log('Guau guau') };
  
const bulldog = Object.create(perro);
bulldog.hacerSonido();  // 'Guau guau' (heredado de `perro`)
  

//Example 2: Stablishing inheritance chain by using Object.create
const abuelo = {
  edad: 70
};

const padre2 = Object.create(abuelo);
padre.nombre = "Carlos";

const hijo = Object.create(padre);
console.log(hijo.nombre);  // "Carlos" (se encuentra en el prototipo 'padre')
console.log(hijo.edad);    // 70 (se encuentra en el prototipo 'abuelo')


//Example 3: use prototype property to define methods in the prototype, from which object inherits
function Persona(nombre) {
  this.nombre = nombre;
}

Persona.prototype.saludar = function() {
  console.log(`Hola, soy ${this.nombre}`);
};

const persona1 = new Persona("Viriato");
persona1.saludar();


//Example 4: Stablishing inheritance by using Object.setPrototypeOf to, once created the object, stablish its father
//less efficient than Object.create
let vehiculo = {
  marca: "",
  modelo: "",
  saluda(){
    console.log (`hola desde vehículo ${this.marca} ${this.modelo}`);
  }
};

let coche = { };
vehiculo.marca="seat";
Object.setPrototypeOf(coche, vehiculo);   //prototypical inheritance
console.log(coche.marca);


//Example 4: Another example of stablishing inheritance by using Object.setPrototypeOf
const animal={
  come: true,
  desplazate(){
      return "voy andando";
  }
};

let conejo={
  salta: true,
  desplazate(){
     return "voy saltando";
  }
};

let perro={
  ladra: true
};

let conejito={};
conejito.desplazate=()=>("voy dando saltitos");  //overrides prototype's method

//Object.setPrototype (object, prototype)
Object.setPrototypeOf(conejo, animal);  //animal is the prototype of conejo. The latter inherits from the former
Object.setPrototypeOf(perro, animal);
Object.setPrototypeOf(conejito, conejo);

console.log(conejo.come, perro.come, conejito.come);
console.log (perro.desplazate(), conejo.desplazate());


//Example 6: chained inheritance using constructor function
function Vehiculo(tipo) {
  this.tipo = tipo;
}

Vehiculo.prototype.mover = function() {
  console.log(`El ${this.tipo} se está moviendo`);
};

function coche(marca) {
  Vehiculo.call(this, "automóvil");
  this.marca = marca;
}

// Heredamos de Vehiculo
coche.prototype = Object.create(Vehiculo.prototype);
coche.prototype.constructor = coche;

//Alternative prototypical inheritance. Less recommended, as it is less efficient than Object.create
/*Object.setPrototypeOf(Coche.prototype, Vehiculo.prototype);
Coche.prototype.constructor = Coche;*/

coche.prototype.acelerar = function() {
  console.log(`El ${this.marca} está acelerando`);
};

/*alternative:
Object.defineProperty(coche.prototype, 'acelerar', {
  value: function() {
    console.log(`El ${this.marca} está acelerando`);
  },
  writable: true,      // Permite que el método se pueda sobrescribir
  enumerable: false,   // Hace que el método no aparezca en iteraciones como for...in
  configurable: true   // Permite borrar el método o modificar sus propiedades
});*/

function Camioneta(marca, traccion) {
  coche.call(this, marca);
  this.traccion = traccion;
}

// Heredamos de coche
Camioneta.prototype = Object.create(coche.prototype);
Camioneta.prototype.constructor = Camioneta;

Camioneta.prototype.atravesarTerreno = function() {
  console.log(`La ${this.marca} con tracción ${this.traccion} atraviesa el terreno`);
};

// Crear una instancia de Camioneta
let miCamioneta = new Camioneta("Toyota", "4x4");
miCamioneta.mover(); // "El automóvil se está moviendo"
miCamioneta.acelerar(); // "El Toyota está acelerando"
miCamioneta.atravesarTerreno(); // "La Toyota con tracción 4x4 atraviesa el terreno"


//Example 7: another example of prototypical inheritance by using constructor function
// Función constructora para la clase base Animal
function Animal(nombre, tipo) {
  this.nombre = nombre;
  this.tipo = tipo;
}

// Método para saludar en el prototipo de Animal
Animal.prototype.saludar = function() {
  console.log(`Hola, soy un ${this.tipo} llamado ${this.nombre}.`);
};

// Función constructora para la clase derivada Perro
function Perro(nombre, raza) {
  // Llama al constructor de Animal
  Animal.call(this, nombre, 'Perro'); // Llama al constructor de Animal con tipo 'Perro'
  this.raza = raza;
}

// Establece la herencia prototípica
Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.constructor = Perro;

// Método específico para Perro
Perro.prototype.ladrar = function() {
  console.log(`${this.nombre} dice: ¡Guau!`);
};

// Ejemplo de uso
const miPerro = new Perro("Rex", "Pastor Alemán");
miPerro.saludar(); // "Hola, soy un Perro llamado Rex."
miPerro.ladrar();  // "Rex dice: ¡Guau!"


//Example 8: Inheritance using class syntax
//under the hood, it is prototypical inheritance. Methods in the class are assigned to prototype
//there's an implicit constructor in class that creates the object with no initialization
class Vehiculo {
  acelerar() {
    console.log("El vehículo está acelerando.");
  }
}

class Coche extends Vehiculo {
  constructor(marca) {
    super();    //calls parent's constructor
    this.marca = marca;
  }
  acelerar(){
    super.acelerar(); //calls parent's method "acelerar"
    console.log(`El modelo ${this.modelo} acelera más rápido!`);
  }
}

const coche = new Coche("Toyota");
coche.acelerar();  // "El vehículo está acelerando."


//////////////////////////
////overriding methods////
//////////////////////////

//Example 1: override constructor iniciar and call parent's constructor from child with call
let vehiculo = {
  _marca: "",
  _modelo: "",
  _año: 0,
  iniciar: function() {
    console.log(`Iniciando el vehículo ${this._marca} ${this._modelo} del año ${this._año}`);
  },

  set marca(marca){
    this._marca=marca;
  },

  set modelo(modelo){
    this._modelo=modelo;
  },

  set año(año){
    this._año=año;
  },

  get marca(){
    return this._marca;
  },

  get modelo(){
    return this._modelo;
  },

  get año(){
    return this._año;
  }
};

// "Constructor" para coche
let coche = Object.create(vehiculo); // Crea un nuevo objeto que hereda de vehiculo

//setting some properties of coche object
coche.marca = "Ford";
coche.modelo = "Fiesta";
coche.año = 2022;

// Sobreescribir el método iniciar
coche.iniciar = function() {
  console.log(`Iniciando el coche ${this._marca} ${this._modelo} (${this._año})`);
};

// Usar el constructor
coche.iniciar(); // Salida: Iniciando el coche Ford Fiesta (2022)

// Probar el método del "constructor" original
vehiculo.iniciar.call(coche); // Salida: Iniciando el vehículo Ford Fiesta del año 2022


//Example 2: Overriding child method and calling its parent method by using Object.getPrototypeOf
//call provides a context at prototype
const padre = {
  saludar() {
    console.log(`Saludos desde el padre, soy ${this.nombre}`);
  }
};

const hijo = Object.create(padre);    //hijo is inheriting from padre
hijo.nombre = "Sisenando";

hijo.saludar = function() {
  console.log(`Saludos desde el hijo, soy ${this.nombre}`);
  //this value inside saludar method could be unexpected, depending on how method is invoked. saludar.call(this) forces this to point to the child
  Object.getPrototypeOf(this).saludar.call(this);  // calls father method but this points to the child
  //padre.saludar.call(this);
};

hijo.saludar();


//Example 3: Overriding child method and calling parent's method in constructor function by using call
function Vehiculo() {}

Vehiculo.prototype.acelerar = function() {
  console.log("El vehículo está acelerando.");
};

// Constructor para Coche, que hereda de Vehiculo
function Coche(marca) {
  Vehiculo.call(this); // Llama al constructor de Vehiculo
  this.marca = marca;
}

// Establece la herencia prototípica
Coche.prototype = Object.create(Vehiculo.prototype);
Coche.prototype.constructor = Coche;

// Sobrescribe el método acelerar en Coche
Coche.prototype.acelerar = function() {
  // Llama al método acelerar de Vehiculo
  Vehiculo.prototype.acelerar.call(this);
  console.log(`El modelo ${this.marca} acelera más rápido!`);
};

// Ejemplo de uso
const coche = new Coche("Toyota");
coche.acelerar();  
// Output:
// "El vehículo está acelerando."
// "El modelo Toyota acelera más rápido!"


//Example 4: Overriding child method and calling parent's method in class by using super
class Vehiculo {
  acelerar() {
    console.log("El vehículo está acelerando.");
  }
}

class Coche extends Vehiculo {
  constructor(marca) {
    super();    //calls parent's constructor
    this.marca = marca;
  }
  acelerar(){
    super.acelerar(); //calls parent's method "acelerar"
    console.log(`El modelo ${this.modelo} acelera más rápido!`);
  }
}

const coche = new Coche("Toyota");
coche.acelerar();  // "El vehículo está acelerando."


/////////////////////////////
////unstructuring objects////
/////////////////////////////
//instead of brackets, braces are needed 
//example 1
const persona = {
  nombre: 'Carlos',
  edad: 25,
  ciudad: 'Barcelona'
};

const { nombre, edad, altura=150 } = persona; //unstructuring. Default value

console.log(nombre); // Carlos
console.log(edad);   // 25
console.log(altura);

//example 2. Changing name besides unstructuring
const { nombre: nombreCompleto, ciudad: localizacion } = persona;

console.log(nombreCompleto); // Ana
console.log(localizacion);   // Madrid
  
//example 3. nested unstructuration
const producto = {
    nombre: 'Portátil',
    especificaciones: {
      peso: '1,5kg',
      almacenamiento: '512GB'
    }
};
  
const { especificaciones: { peso, almacenamiento } } = producto;
  
console.log(peso);           // 1,5kg
console.log(almacenamiento); // 512GB
  
//example 4. unstructuring objects passed as arguments to a function
const mostrarInfo = ({ nombre, edad }) => {
    console.log(`Nombre: ${nombre}, Edad: ${edad}`);
};
  
const persona2 = { nombre: 'Pedro', edad: 40 };
mostrarInfo(persona2);  // Nombre: Pedro, Edad: 40
  
//example 5. Unstructuring a function that returns an object
const crearUsuario=()=>({
    id: 'Marta123',
    puesto: 'admin'
});
  
const { id, puesto } = crearUsuario();
  
console.log(id); // Marta123
console.log(rol);    // admin

//example 6: combining unstructuration with rest operator
const persona3 = {
    nombre: 'Laura',
    profesion: 'diseñadora',
    edad: 28,
    ciudad: 'Sevilla'
};
  
const { profesion, ...otrosDatos } = persona3;
  
console.log(profesion);      // "diseñadora"
console.log(otrosDatos);  // { edad: 28, ciudad: 'Sevilla' }



///////////////////////////////////
////?. special syntax construct////
///////////////////////////////////
//it's been recently added. Allows to return undefined instead of error if a property doesn't exist.
//appliable to nested properties from declared objects
let user3 = {}; // a user without properties
//console.log(user.address.street); // Throws an error

//could be solved by checking before with ? or &&. Not very elegant
console.log(user3.address ? user3.address.street : undefined);
console.log(user3.address && user3.address.street && user3.address.street.name ); // undefined (no error)

//The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.
let user = {}; // user has no address
console.log( user?.address?.street ); // returns undefined (no error)

/* ?. should be used only to check properties that it’s fine for them not to exist.
Thus, if some object must exist, but a property is optional, then it should be written object.property?.subproperty, but not object?.property?.subproperty
because, if object happens to be undefined, we’ll see a programming error about it and fix it. Otherwise, if we overuse ?., coding errors can be silenced where not appropriate, and become more difficult to debug.*/


//?.() works with methods
let userAdmin = {
    isAdmin() {
      console.log("I am admin");
    }
  };
  
let userGuest = {};
userAdmin.isAdmin?.(); // I am admin
//userGuest.isAdmin(); // throws an error (method doesn't exist)
userGuest.isAdmin?.(); // nothing happens (although no such method)


//?.[] allows to safely read a property from an object that may not exist
let clave = "nombre";

let personal1 = {
  nombre: "Felipe"
};

let personal2 = null;

console.log( personal1?.[clave] ); // Felipe
//console.log( personal2[clave] ); // throws an error as it doesn't exist
console.log( personal2?.[clave] ); // undefined