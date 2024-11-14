"use strict";
/////////////////////////////
////stablishing a context////
/////////////////////////////
//bind, call and apply (similar to call, but receives arguments in an array)

//Example 1: BIND can provide a value to a parameter in a function
function multiplicar(a, b) {
  return a * b;
}

const duplicar = multiplicar.bind(null, 2); // The first argument of bind is "this". If unused, it must be set to "null". The second one matches the first one at the function
//we could set all parameters by using bind(null, 2, 3)
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

//Example 1. chained inheritance in literal objects by using Object.create
const animal = {
  hacerSonido() {
    console.log('Sonido de animal');
  }
};

const perro = Object.create(animal);
const bulldog = Object.create(perro);
bulldog.hacerSonido();


//Example 2: inheriting from a class created with a function
function creaClase() {
  return class {
    constructor(nombre) {
      this.velocidad = 0;
      this.nombre = nombre;
    }
    corre(velocidad) {
      this.velocidad = velocidad;
      console.log(`${this.nombre} corre a una velocidad de ${this.velocidad}.`);
    }
  };
}

class animal extends creaClase() {};
new animal("pelusa").corre(4); 
a=new animal("mancha");
a.corre(3);


//Example 3: chained inheritance in constructor function
/*Two methods can be used:
  -Object.create allows you to create a new object with a specific prototype. This is useful when you want to establish the prototype of an object from the moment of its creation.
  -Object.setPrototypeOf allows you to change the prototype of an existing object at runtime. It is used when you want to modify the prototype of an object after it has already been created.
*/
function Animal(tipo) {
  this.tipo = tipo;
}

Animal.prototype.mover = function() {
  console.log(`El ${this.tipo} se está moviendo`);
};

// Función para crear una nueva clase que herede de otra
function crearClase(ClaseHija, ClasePadre) {
  ClaseHija.prototype = Object.create(ClasePadre.prototype);    // La ClaseHija hereda de ClasePadre, incluido su constructor
  ClaseHija.prototype.constructor = ClaseHija;    // El constructor de ClaseHija apunta a su verdadero constructor
}

/*
// Alternative to crearClase: setPrototypeOf. It allows to change prototype even if the object has been created
function crearClase(ClaseHija, ClasePadre) {
  Object.setPrototypeOf(ClaseHija.prototype, ClasePadre.prototype);
  ClaseHija.prototype.constructor = ClaseHija;
}*/

// Creando Mamífero y heredando de Animal
function Mamifero(nombre) {
  Animal.call(this, "mamífero"); // Llamamos al constructor de Animal con el contexto de Mamífero
  this.nombre = nombre;
}
crearClase(Mamifero, Animal);
Mamifero.prototype.comer = function() {
  console.log(`${this.nombre} está comiendo`);
};

// Creando Gato y heredando de Mamífero
function Gato(nombre) {
  Mamifero.call(this, nombre); // Llamamos al constructor de Mamífero para heredar la inicialización de nombre
}
crearClase(Gato, Mamifero);
Gato.prototype.maullar = function() {
  console.log(`${this.nombre} está maullando`);
};

// Crear una instancia de Gato
let miGato = new Gato("Tizón");
miGato.mover();   // "El mamífero se está moviendo" (heredado de Animal)
miGato.comer();   // "Tizón está comiendo" (heredado de Mamífero)
miGato.maullar(); // "Tizón está maullando" (específico de Gato)


//Example 4: basic inheritance using class
class Animal {
  constructor(nombre) {
    this.velocidad = 0;
    this.nombre = nombre;
  }
  corre(velocidad) {
    this.velocidad = velocidad;
    console.log(`${this.nombre} corre a una velocidad de ${this.velocidad}.`);
  }
  para() {
    this.velocidad = 0;
    console.log(`${this.nombre} se queda quieto.`);
  }
}

class Conejo extends Animal{
  salta(distancia){
    this.distancia = distancia;
    console.log(`${this.nombre} salta a una distancia de ${this.distancia}.`);
  }
}

let conejo= new Conejo("Fufo");
conejo.corre();
conejo.salta(5);


//Example 5: Chained inheritance using class
//under the hood, it is prototypical inheritance. Methods in the class are assigned to prototype
//there's an implicit constructor in class that creates the object with no initialization
//parent constructor needs to be invoked at child constructor when the latter initializes any property
class Animal {
  mover() {
    console.log("El animal se está moviendo");
  }
}

class Mamifero extends Animal {
  comer() {
    console.log(`${this.nombre} está comiendo`);
  }
}

class Gato extends Mamifero {
  // The Gato class has its own constructor that initializes the cat's name. For this constructor to work correctly, it needs to ensure that the inheritance chain (between Gato and Mamífero, which inherits from Animal) is properly established.
  
  constructor(nombre) {
    // The super keyword calls the parent's constructor and is necessary when the child class has its own constructor. If it didn't, JavaScript would automatically call the parent constructor.
    super();
    this.nombre = nombre;
  }

  maullar() {
    console.log(`${this.nombre} está maullando`);
  }
}

// Crear una instancia de Gato
let miGato = new Gato("Tizón");
miGato.mover();   // "El animal se está moviendo" (heredado de Animal)
miGato.comer();   // "Tizón está comiendo" (heredado de Mamífero)
miGato.maullar(); // "Tizón está maullando" (específico de Gato)


/////////////////////
////Encapsulation////
/////////////////////
/*
Encapsulation is about limiting direct access to certain properties and methods of an object. Its benefits are:
  -protecting internal data
  -ensuring the object is used in a controlled way
  -allowing internal code to be modified without affecting the external interface
  -hiding complexity

Interaction with the object is allowed only through specific methods, and it is achieved by using:
  -private properties and methods: these are not accessible from outside the object instance
  -getters (accessors): allow access to the value of a property
  -setters (mutators): allow setting a value to a property

Getters and setters are preferable to regular functions because they provide:
  -better encapsulation
  -improved readability
*/

//Example 1: Encapsulation in literal objects
//Using _ at the beginning of the name indicates private property, but it's just a convention that indicates you not to use this property outside the object. Despite that, you can do it. It is not a real encapsulation.

//be careful not to use the same name for the property and the parameter of the setter
let vehiculo = {
  _marca:"",
  _modelo:"",
  _circulando:false,

  get marca() {
    return this._marca;
  },
  set marca(nuevaMarca) {
    this._marca = nuevaMarca;
  },
  get modelo() {
    return this._modelo;
  },
  set modelo(nuevoModelo) {
    this._modelo = nuevoModelo;
  },
  get circulando() {
    return this._circulando;
  },
  set circulando(enCirculacion) {
    this._circulando = enCirculacion;
  }

};

// Crear un objeto coche que hereda de vehiculo
let coche = Object.create(vehiculo);

//I can modify "private" properties
coche._marca="Ford";  
coche._modelo="Escort";
coche._circulando=false;
console.log(coche._marca);

// Using setters to spefify values
coche.marca = "Volkswagen";
coche.modelo = "Golf";
coche.circulando = true;

// Using getters to show property values
console.log(coche.marca);
console.log(coche.modelo);
console.log(coche.circulando);
console.log(vehiculo);            // { _marca: "", _modelo: "", _circulando: false }
console.log(coche);               // { marca: "Volkswagen", modelo: "Golf", circulando: true }


//Example 2: encapsulation in construction functions
/*Remember:
  -By using "this", properties and methods belong to the instance of the object that is created with new Persona(...).
  -By declaring local properties and methods instead of using "this", any access from outside is prevented
  -The only way of being able to use local properties is defining methods inside the object, implying they are replicated in every object instance
*/

function Persona(nombre, edad) {
  let _nombre = nombre;
  let _edad = edad;
  this._direccion="calle pez";  //despite being marked as private, it can be reached from outside

  //Defining getter and setter this way permits using them as if they were a property (persona1.nombre would be the getter)
  //writable, enumerable an configurable can't be used here, as it would collide with set behaviour
  Object.defineProperty(this, 'nombre', {
    get: function() {
      return _nombre;
    },
    set: function(nuevoNombre) {
      _nombre = nuevoNombre;
    }
  });

/*ugly alternative: defining them as regular functions
  this.getNombre = function() {
    return _nombre;
  };

  this.setNombre = function(nuevoNombre) {
    _nombre = nuevoNombre;
  };

  outside: mamerto.getNombre();
*/

  Object.defineProperty(this, 'edad', {
    get: function() {
      return _edad;
    },
    set: function(nuevaEdad) {
      _edad = nuevaEdad;
    }
  });

  //public method, as it's defined with "this"
  this.despedirse=function(){
    console.log(`Adiós, soy ${_nombre} y tengo ${calcularEdad()} años.`);
  };

  //Private method. Can't be invoked from outside
  function calcularEdad() {
    return _edad;
  }
}

//public method that can be invoked by any instance of Persona
Persona.prototype.saludar = function() {
  console.log(`Yo, ${this.nombre}, te saludo.`);
};

const mamerto = new Persona("Mamerto", 30);

// getters are used like if they were properties
console.log(mamerto.nombre);
mamerto.nombre = "Mamertín";
console.log(mamerto.nombre);
mamerto.saludar();
mamerto.despedirse();
mamerto.calcularEdad(); //Error


//Example 3: Chained inheritance using class and private properties
class Animal{
  mover(){
    console.log("me estoy moviendo");
  }
  comer(){
    console.log("estoy comiendo");
  }
};

class Mamifero extends Animal{
  #tipo;
  constructor(nuevoTipo){
    super();  //super must be called in order for the parent constructor to create an object for "this"
    this.#tipo=nuevoTipo;
  }
  set tipo(nuevoTipo){
    this.#tipo=nuevoTipo;
  }
  get tipo(){
    return this.#tipo;
  }
}
const aux=new Mamifero("Can");
aux.tipo;


class Perro extends Mamifero{
  #nombre;
  edad;
  constructor(nuevoTipo, nuevoNombre){
    super(nuevoTipo);
    this.#nombre=nuevoNombre;
  }
  set nombre(nuevoNombre){
    this.#nombre=nuevoNombre;
  }
  get nombre(){
    return this.#nombre;
  }
}

const miPerro=new Perro("canis lupus","roque");
miPerro.tipo;
miPerro.mover();
console.log(miPerro); //only shows edad, the only unprotected property


//Example 4: encapsulation in classes (from ECMAScript 2022)
class Electrodomestico {
  #fabricante;
  #marca;

  constructor(fabricante, marca, modelo, potencia) {
    this.#fabricante = fabricante;
    this.#marca = marca;
    this.modelo = modelo;
    this.potencia = potencia;
  }

  get fabricante() {
    return this.#fabricante;
  }

  set fabricante(nuevoFabricante) {
    this.#fabricante = nuevoFabricante;
  }

  get marca() {
    return this.#marca;
  }

  set marca(nuevaMarca) {
    this.#marca = nuevaMarca;
  }

  // Método público para mostrar la información pública del electrodoméstico
  mostrarInfo() {
    console.log(`Marca: ${this.#marca}, Modelo: ${this.modelo}, Potencia: ${this.potencia}W`);
    this.#logInfo(); // Llamada al método privado desde un método público
  }

  // Método privado
  #logInfo() {
    console.log(`Información privada: Fabricante: ${this.#fabricante}, Marca: ${this.#marca}`);
  }
}

class Tostadora extends Electrodomestico {
  #tamanyoDelPan; // Propiedad privada

  constructor(fabricante, marca, modelo, potencia, tamanyoDelPan) {
    super(fabricante, marca, modelo, potencia); // Llamada al constructor de la clase base
    this.#tamanyoDelPan = tamanyoDelPan; // Inicializamos la propiedad privada
  }

  // Getter para #tamanyoDelPan
  get tamanyoDelPan() {
    return this.#tamanyoDelPan;
  }

  // Setter para #tamanyoDelPan
  set tamanyoDelPan(tamano) {
    if (tamano > 0 && tamano <= 20) {
      this.#tamanyoDelPan = tamano;
    } else {
      console.log("Tamaño del pan no válido.");
    }
  }

  // Método para mostrar información sobre la tostadora
  mostrarInfoTostadora() {
    this.mostrarInfo(); // Llamada al método de la clase base
    console.log(`Tamaño del pan: ${this.#tamanyoDelPan} cm`);
  }

  // Método privado específico de la tostadora
  #prepararPan() {
    console.log(`Preparando pan de ${this.#tamanyoDelPan} cm.`);
  }

  // Método público que invoca al método privado
  tostar() {
    this.#prepararPan(); // Llamada al método privado
    console.log(`La tostadora está tostando un pan de ${this.#tamanyoDelPan} cm.`);
  }
}

// Crear una instancia de Tostadora
const miTostadora = new Tostadora("Ufesa", "Tosteria", "X1000", 800, 10);

// Usar los accesores y modificadores
console.log(miTostadora.fabricante);
console.log(miTostadora.marca);
miTostadora.marca = "SuperToster";
console.log(miTostadora.marca);

miTostadora.tostar();
miTostadora.mostrarInfoTostadora();
miTostadora.#prepararPan(); // Error: private method not accessible from outside class


//////////////////////////
////overriding methods////
//////////////////////////

//Example 1: Overriding child method in literal object and calling its parent method by using Object.getPrototypeOf and call
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
};

hijo.saludarDesdePadre = function() {
  Object.getPrototypeOf(this).saludar.call(this);  // calls padre.saludar method but with hijo's context.
  //padre.saludar.call(this); //Alternative
};

hijo.saludar();
hijo.saludarDesdePadre();


//Example 3: Overriding child method in prototype in constructor function and calling parent's method in constructor function by using Object.getPrototypeOf and call
function Vehiculo() {}

Vehiculo.prototype.acelerar = function() {
  console.log("El vehículo está acelerando.");
};

// Constructor para Coche, que hereda de Vehiculo
function Coche(marca) {
  Vehiculo.call(this); // Llama al constructor de Vehiculo. same as Vehiculo.constructor.call(this)
  this.marca = marca;
}

// Establece la herencia prototípica
Coche.prototype = Object.create(Vehiculo.prototype);
Coche.prototype.constructor = Coche;

// Sobrescribe el método acelerar en el prototipo de Coche
Coche.prototype.acelerar = function() {
  // Llama al método acelerar de Vehiculo
  Vehiculo.prototype.acelerar.call(this);
  console.log(`El modelo ${this.marca} acelera más rápido!`);
};

const coche = new Coche("Toyota");
coche.acelerar();  


//Example 3: Overriding child method in class and calling parent's method by using super
class Animal {
  hacerSonido() {
    console.log("El animal hace un sonido.");
  }
}

class Perro extends Animal {
  constructor(nombre) {
    super();    // Llama al constructor del padre (Animal)
    this.nombre = nombre;
  }

  hacerSonido() {
    super.hacerSonido(); // Llama al método "hacerSonido" del padre (Animal)
    console.log(`${this.nombre} ladra más fuerte!`);
  }
}

const perro = new Perro("Roque");
perro.hacerSonido();  


//Example 4:Overriding methods
class Animal {
  constructor(nombre) {
    this.velocidad = 0;
    this.nombre = nombre;
  }
  corre(velocidad) {
    this.velocidad = velocidad;
    console.log(`${this.nombre} corre a una velocidad de ${this.velocidad}.`);
  }
  para() {
    this.velocidad = 0;
    console.log(`${this.nombre} se queda quieto.`);
  }
}

class Conejo extends Animal{
  para(msg=2000){ //will override parent's method "para"
    super.para(); //references parent's method "para"
    this.escondete(msg);
  }
  escondete(msg=2000){
    //setTimeout(function() { super.stop() }, msg);   //error, super only works with arrow functions when using it inside functions
    setTimeout(() => {
       super.para();
       console.log(`${this.nombre} se esconde en su madriguera durante ${msg/1000} segundos`)
     },msg); // call parent "para" after 1sec
  }
  salta(distancia){
    this.distancia = distancia;
    console.log(`${this.nombre} salta a una distancia de ${this.distancia}.`);
  }
}

let conejo= new Conejo("Fufo");
conejo.para();  //method from conejo, not animal
conejo.corre(6);
conejo.salta(5);


/////////////////////////////////////
////static methods and properties////
/////////////////////////////////////
/* Two types of methods and properties:
  - Instance: Associated with instances of an object (i.e., objects created from a constructor function or a class). 
    -These methods are defined in the prototype of the constructor function or class.
    -They are invoked using the name of the instance (e.g., `instance.method()`).
    -Instance properties are created within the constructor function or class using `this.propertyName`.

  - Static: Associated with the constructor function or class itself, not with its instances.
    -They are invoked directly from the constructor function or class (e.g., `ClassName.method()`), without creating an instance.
    -Static methods and properties are prefixed with `static` in a class definition and do not appear on instances.
    -Static properties are unique to the class. Although they are not directly available on every instance, the value of a static property is consistent and ‘shared’ across all instances, since it comes from the same class.
*/


//Example 1: static methods and properties at constructor functions
//A static method or property is not replicated at every instance of Mamifero (it is not defined in the constructor function) and not inherited (it is not defined in prototype)
function Mamifero(nombre, velocidad = 0) {
  this.nombre = nombre;
  this.velocidad = velocidad;
  Mamifero.numeroInstancias++;
}

Mamifero.prototype.corre = function(velocidad) {
  this.velocidad = velocidad;
  console.log(`${this.nombre} corre a una velocidad de ${this.velocidad}.`);
};

// Static method. If defined within the object, it would be a local method
Mamifero.comparaVelocidad = function(animal1, animal2) {
  if (animal1.velocidad - animal2.velocidad < 0)
    return "corre más " + animal2.nombre;
  else
    return "corre más " + animal1.nombre;
};

//static property. If defined within the object, it could be local, global or instance, depending on how it would be defined
Mamifero.numeroPatas=4;
Mamifero.numeroInstancias=0;

function crearClase(ClaseHija, ClasePadre) {
  Object.setPrototypeOf(ClaseHija.prototype, ClasePadre.prototype);
  ClaseHija.prototype.constructor = ClaseHija;
}

function Conejo(nombre, velocidad) {
  Mamifero.call(this, nombre, velocidad);  // Llamar al constructor de Mamifero
}
crearClase(Conejo, Mamifero);

function Perro(nombre, velocidad) {
  Mamifero.call(this, nombre, velocidad);  // Llamar al constructor de Mamifero
}
crearClase(Perro, Mamifero);

let conejito = new Conejo("achuchao", 7);
let perrito = new Perro("cibeles", 3);

console.log(Mamifero.comparaVelocidad(conejito, perrito));
console.log (Mamifero.numeroPatas, Mamifero.numeroInstancias);
// conejito.comparaVelocidad(conejito, perrito);  // Error, no es una función válida


//Example 2: by using classes
//comparaVelocidad does not belong to any object. It belongs to the parent class
//comparaVelocidad can only be called from the class, not the instantiated objects
class Animal {
  static numeroInstancias=0;

  constructor(nombre, velocidad=0) {
    this.velocidad = velocidad;
    this.nombre = nombre;
    Animal.numeroInstancias++;
  }
  corre(velocidad) {
    this.velocidad = velocidad;
    console.log(`${this.nombre} corre a una velocidad de ${this.velocidad}.`);
  }
  static comparaVelocidad(animal1, animal2){
    if (animal1.velocidad-animal2.velocidad<0)
      return "corre más "+animal2.nombre;
    else
      return "corre más "+animal1.nombre;
  }
}

class conejo extends Animal{};
class perro extends Animal{};

let conejito=new conejo("achuchao",7);
let perrito=new perro("cibeles",3);
console.log(Animal.comparaVelocidad(conejito, perrito));
console.log(Animal.numeroInstancias);
//conejito.comparaVelocidad(conejito, perrito); //Error, is not a valid function


//Example 3: using classes and an array of objects
class Vehiculo {
  static numeroRuedas = 4; // Propiedad estática que representa el número de ruedas

  constructor(modelo, maxVelocidad) {
    this.maxVelocidad = maxVelocidad; // Propiedad de instancia
    this.modelo = modelo;
  }

  desplaza(velocidad) {
    this.velocidad = velocidad;
    console.log(`${this.modelo} se desplaza a una velocidad de ${this.velocidad} km/h.`);
  }

  static comparaMaxVelocidad(vehiculo1, vehiculo2) {
    return vehiculo1.maxVelocidad - vehiculo2.maxVelocidad;
  }
}

class Auto extends Vehiculo {};
class Moto extends Vehiculo {};

let vehiculos = [
  new Auto("Sedán", 200),
  new Moto("Scooter", 80),
  new Auto("Camioneta", 160)
];

console.log(Vehiculo.numeroRuedas, vehiculos[0].numeroRuedas); // El primero funciona, el segundo no

Vehiculo.modelo = "Genérico"; // No funciona, no es una propiedad estática

vehiculos.sort(Vehiculo.comparaMaxVelocidad);

vehiculos.forEach((vehiculo) => {
  console.log(vehiculo.modelo);
});


/////////////////////////////
////unstructuring objects////
/////////////////////////////
//instead of brackets, braces are needed 
//example 1
const persona = {
  nombre: 'Bartolo',
  edad: 25,
  ciudad: 'Cercedilla del monte'
};

const { nombre, edad, altura=150 } = persona;

console.log(nombre);
console.log(edad);
console.log(altura);


//example 2. Renaming properties when unstructuring
const { nombre: nombreCompleto, ciudad: localizacion } = persona;

console.log(nombreCompleto);
console.log(localizacion);
  

//example 3. nested unstructuration
const producto = {
    nombre: 'Portátil',
    especificaciones: {
      peso: '1,5kg',
      almacenamiento: '512GB'
    }
};
  
const { especificaciones: { peso, almacenamiento } } = producto;
  
console.log(peso);
console.log(almacenamiento);
  

//example 4. unstructuring objects passed as arguments to a function
const persona2 = {
  nombre: 'Bartolo',
  edad: 25,
  ciudad: 'Cercedilla del monte'
};

const mostrarInfo = ({ nombre, edad }) => {
    console.log(`Nombre: ${nombre}, Edad: ${edad}`);
};
  
mostrarInfo(persona2);
  

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
    nombre: 'Blacina',
    profesion: 'Diseñadora',
    edad: 28,
    ciudad: 'Sevilla'
};
  
const { profesion, ...otrosDatos } = persona3;
  
console.log(profesion);      // "diseñadora"
console.log(otrosDatos);  // { edad: 28, ciudad: 'Sevilla' }



////////////////////////
////Object operators////
////////////////////////
/*
instanceOf checks not only whether an object was created directly from a class, but also whether there is a reference in the prototype chain of that object to the prototype of the class being checked.

?. operator (optional chaining)
  -checks if the expression to its left is null or undefined. If it is, it stops the evaluation and returns undefined instead of throwing an error. If it is neither null nor undefined, it continues with normal evaluation.
  -Overusing ?. can suppress coding errors inappropriately, making them harder to debug. For instance, object?.property?.subproperty will result in undefined if object don't exist
  -It should only be used for properties that are optional and can be absent without causing an issue. If an object itself is required, but a property within it is optional, it’s preferable to write object.property?.subproperty instead of object?.property?.subproperty. This way, if object happens to be undefined, a programming error will alert us, allowing us to fix it.
  -only works if the variable is declared but is undefined or null
*/

//Example 1: instanceOf
class Electrodomestico{};
let electro=new Electrodomestico();

// ¿Es un objeto de la clase Electrodoméstico?
console.log( electro instanceof Electrodomestico );


//Example 2: instanceOf
let matriz = [1, 2, 3];
console.log( matriz instanceof Array ); // verdadero
console.log( matriz instanceof Object ); // verdadero
//la clase Array hereda de Object


//Example 3: optional chaining with properties
let persona = {};
console.log(persona.direccion);  //undefined
//console.log(persona.direccion.calle);   //error. You're trying to access a property (calle) of undefined (direccion doesn't exist)

//could be solved by checking before with ? or &&. Not very elegant
console.log(persona.direccion ? persona.direccion.calle : undefined);
console.log(persona.direccion && persona.direccion.calle && persona.direccion.calle.nombre ); //if all properties exist, nombre si printed. Otherwise, undefined is returned

//The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.
console.log( persona.direccion?.calle ); // undefined


//Example 4: optional chaining with methods
let userAdmin = {
    isAdmin() {
      console.log("I am admin");
    }
  };
  
let userGuest = {};
userAdmin.isAdmin?.(); // I am admin
//userGuest.isAdmin(); // error (method doesn't exist)
userGuest.isAdmin?.(); // undefined


//Example 5: avoiding overuse of ?.
let clave = "nombre";

let personal1 = {
  nombre: "Felipe",
  direccion: {
    calle: "pez",
    numero: 2
  }
};

let persona2=null;

console.log (persona1.[clave] ); // Felipe
console.log (persona1.direccion.localidad) //error
console.log (persona1.direccion?.localidad) //undefined
console.log (persona2?.nombre ); // Not recommended. It can hide the fact that persona2 doesn't exist
console.log (persona2.nombre ); // Recommended. It throws an error as it doesn't exist
console.log (persona3?.nombre); //Error. ?.only works if the variable is declared but is undefined or null

/////////////////////
///////mixins////////
/////////////////////
//In JavaScript, a class can't inherit from two classes
//Solution: inherit and copy methods
class Base1 {
  constructor() {
    this.contador = 0;
  }
  aumenta() {
    this.contador++;
    return this;
  }
  muestra(){
    console.log(this.contador);
    return this;
  }
}

//function that takes a base class as argument and returns a new class with additional methods
let miMixin = (claseBase) => class extends claseBase {
  constructor() {
    super();
  }
  resta() {
    this.contador--;
    return this;
  }
}

//mixin is used to extend the functionality of Base1
class Extendida extends miMixin(Base1) {
  reinicia() {
    this.contador = 0;
    return this;
  }
}

let miObjeto = new Extendida();
miObjeto.aumenta().aumenta().muestra().resta().reinicia().muestra();