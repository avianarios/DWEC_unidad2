"use strict";
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
  

///////////////////////////////////////
////fixing "this" broken references////
///////////////////////////////////////
//Using this allows you to write methods that work for any object that calls them. Instead of relying on the object name, which may or may not be the same in all cases, this always refers to the actual object, making your code more flexible, reusable and dynamic.
//The value of this is defined when the function is called, not when it's defined. It depends on its execution context and it is different depending on how the function is called, whether as a method on an object, globally, as a callback function, or using call, apply, or bind.
//this is a reference to the current object in execution

//example 1: calling a method from outside its object
const obj = {
    nombre: "Carlos",
    saludar: function() {
      console.log("Hola soy "+this.nombre);
      //console.log (this.navigator);   will work in a non strict mode
    }
};
  
obj.saludar();  //this points to obj, as saludar() is being invoked as a method of obj
const saludarFuera = obj.saludar; //function reference is copied into saludarFuera, but without obj as context
saludarFuera();  ////"this" value is determined when a function is invoked. saludarFuera is called with no object as a reference. Therefore, when using strict mode will return error and when using non strict mode it will reference global object. And as it has no "nombre" property, it will return undefined


//solutions:
const saludarAtado = obj.saludar.bind(obj); // Atamos `this` a `obj`
saludarAtado(); // Ahora `this` dentro de `saludar()` siempre será `obj`, imprime "Carlos"

saludarFuera.call(obj); // Invoca `saludar()` con `this` apuntando a `obj`, imprime "Carlos"


/*******************************
 * zzzzzzzzzzzz
 * Sí, puedes llamar al método del prototipo directamente con Persona.prototype.saludar.call(persona1);, pasando la instancia persona1 (o cualquier otra instancia) como contexto. Esto se hace usando call, ya que saludar en el prototipo no tiene un contexto de this por sí mismo; necesita que se le proporcione uno.
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

// Llamar al método del prototipo directamente
Persona.prototype.saludar.call(persona1); // Salida: ¡Hola!, soy Obdulio

 
 */
//example 2. Calling this from prototype
const padre = {
    nombre: "Padre",
    saludar: function() {
      console.log("hola, te saludo:"+this.nombre);
    }
};
  
const hijo = Object.create(padre);
hijo.nombre = "Hijo";
hijo.saludar();  // "Hijo"
//hijo inherits from its prototype, padre. When calling hijo.saludar(), this refers to hijo, not padre

//saludar method can be overriden in the child, but it still can call its parent method
hijo.saludar = function() {
  console.log("Hola desde el hijo");
  Object.getPrototypeOf(this).saludar.call(this);  // Llama al método del padre con `this` refiriéndose a `hijo`
};
hijo.saludar();


//example 3: controlling which objects references this by using .call()
const obj1 = { nombre: "Carlos" };
const obj2 = { nombre: "María" };

function saludar() {
  console.log(`Hola, soy ${this.nombre}`);
}

saludar.call(obj1);  // "Hola, soy Carlos"
saludar.call(obj2);  // "Hola, soy María"


//example 4: this inside a nested function
const obj3 = {
    nombre: "Carlos",
    saludar: function() {
      console.log(this.nombre);  // Correcto, `this` es `obj`
      
      function funcionInterna() {
        console.log(this.nombre);  // ¡Error! `this` aquí apunta al objeto global o undefined en modo estricto
      }
  
      funcionInterna(); //"this" value is determined when a function is invoked. funcionInterna is called with no object as a reference. Therefore, "this" references to global object Window.
    }
};
  
obj3.saludar(); 
  

//Example 5: this within arrow functions
//in an arrow function, "this" doesn't reference to the object that invoked the method
//this references the context where the arrow function was defined. Therefore no matter which object is invoking function, this will always be refered to the scope where arrow function was created
const obj4 = {
    nombre: "Carlos",
    saludar: function() {
      console.log(this.nombre);  // Correcto, `this` es `obj`
  
      const funcionInterna = () => {
        console.log(this.nombre);  // An arrow function inherit "this" from the context where it was created so `this` references funcionInterna's context which is obj
      };
  
      funcionInterna();
    }
};
  
obj4.saludar();  // "Carlos", "Carlos"


//example 6: another example of this within arrow functions
const usuario2={nombre:"pepe"}

let diHola=function (){
  return(`Hola, soy ${this.nombre}`);
}

let diAdios=() => (`Adiós, soy ${this.nombre}`);

//assign function to object property
usuario2.saluda=diHola;
usuario2.despidete=diAdios;

console.log(usuario2.saluda());
console.log(usuario2.despidete()); //doesn't work. This points to global object
//solutions:
//1: convert to traditional function
/*
function diAdios(){
  console.log (`Adiós, soy ${this.nombre}`);
}

2: encapsulate within a traditional function or create a traditional function
  despidete: function() {
    const despedida = () => `Adiós, soy ${this.nombre}`;
    return despedida();
  }

3: use a getter
  get despidete() {
    return (() => `Adiós, soy ${this.nombre}`)();
  }

4: 
 */
  

//example 7: making "this" in a arrow function work
let grupo = {
    nombre: "Los amigos",
    habitantes: ["Máximo", "Higinio", "Salustiano"],
    localidades: ["Jódar", "Guarromán", "La cabra del santo cristo"],
  
    muestraLista() {
        this.habitantes.forEach(
            //arrow functions have no "this", so here "this" references muestraLista's context which is grupo. That's why it works
            persona => console.log(this.nombre + ': ' + persona)   
        );
    },

    muestraLocalidades() {
        this.habitantes.forEach(function(persona) {
          console.log(persona+" es de:"+ this.localidades);     // Undefined
        });
    },
  
    muestraNombre(){
      console.log(this.nombre);
    }
};
  
grupo.muestraLista();
grupo.muestraLocalidades();
grupo.muestraNombre();


///////////////////////////////////
////?. special syntax construct////
///////////////////////////////////
//it's been recently added. Allows to return undefined instead of error ir a property doesn't exist.
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


/////////////////////
////encapsulation////
/////////////////////
//Example 1: encapsulation in constructor functions
//it is not a real encapsulation. It's a convention. Therefore, it can be changed from outside the object
function Persona(nombre, edad) {
  this._nombre = nombre;  // Propiedad "pseudo-privada" (convención)
  this._edad = edad;      // Propiedad "pseudo-privada" (convención)
}

const persona1 = new Persona("Mamerto", 30);

// Modificar las propiedades "pseudo-privadas"
console.log(persona1._nombre); // Mamerto
persona1._nombre = "Petra";
console.log(persona1._nombre); // Petra


//Example 2: encapsulation in classes (from ECMAScript 2022)
//it's a real encapsulation. It can't be changed from outside the object
class Persona {
  #nombre; // Propiedad privada
  #edad;   // Propiedad privada

  constructor(nombre, edad) {
      this.#nombre = nombre;
      this.#edad = edad;
  }

  getNombre() {
      return this.#nombre;
  }
}

const persona2 = new Persona("Saturnino", 40);
console.log(persona2.getNombre()); // Saturnino
console.log(persona2.#nombre);     // Error: propiedad privada


///////////////////////////
////getters and setters////
///////////////////////////
//when creating an object, it's desirable to encapsulate its information avoiding users to access it from outside. Therefore, methods to access an consult its properties must be provided
//getters: allow to access the value of a property
//setters: allow to set a value to a property
/*they are better than using regular functions due to:
  -better encapsulation
  -legibility
  -easy to change implementations
*/
//be careful not to use the same name for the property and the parameter of the setter
//example 1
//_ before any property name indicates a "private property" not to be used outside the object. This is a programming convention, nothing prevents from accessing outside.
let alumno={
  _nombre:"pepe",
  _edad:25,

  get edad(){
    return this._edad;
  },
  get nombre(){
    return this._nombre;
  },
  set edad(nuevaEdad){
    this._edad=nuevaEdad;
  },
  set nombre(nuevoNombre){
    this._nombre=nuevoNombre;
  }
}

console.log (alumno.edad);  //calls getter
alumno.edad=22; //calls setter


//example 2
//getter and setter
let vehiculo = {
  _marca: "",
  _modelo: "",
  _circulando: "",
  set circulando(value) {
    this._circulando = value;
  },
  set marcaModelo(aux){
      [this._marca, this._modelo]=aux.split(' ');
  },
  get circulando(){
    return this._circulando;
  },
  get marcaModelo(){
      return `${this._marca} ${this._modelo}`;
  }
};

let coche = { };

Object.setPrototypeOf(coche, vehiculo);   //prototypical inheritance
coche.circulando="true";
coche.marcaModelo="ford fiesta";  
console.log(vehiculo, coche);
/* Instead of getter and setter, regular functions could be created (not recommended)
  creaMarcaModelo(aux){
      bla,bla
  },
  dimeMarcaModelo(){
      bla,bla        
  }
  coche.creaMarcaModelo("ford fiesta");
*/

zzzzzzzzzzzzzzzzzzzzzzzzzz
PONER SETTER Y GETTER
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
//example 1. Using Object.create to inherit
const animal = {
    hacerSonido() {
      console.log('Sonido de animal');
    }
};
  
const perro = Object.create(animal);
perro.hacerSonido = () => { console.log('Guau guau') };
  
const bulldog = Object.create(perro);
bulldog.hacerSonido();  // 'Guau guau' (heredado de `perro`)
  
//example 2: Creating a inheritance chain by using Object.create
const abuelo = {
  edad: 70
};

const padre2 = Object.create(abuelo);
padre.nombre = "Carlos";

const hijo = Object.create(padre);
console.log(hijo.nombre);  // "Carlos" (se encuentra en el prototipo 'padre')
console.log(hijo.edad);    // 70 (se encuentra en el prototipo 'abuelo')

//example 3: Using Object.create to inherit and Object.getPrototypeOf to  call father methods from child
const padre = {
    saludar() {
      console.log(`Hola desde el padre, soy ${this.nombre}`);
    }
};
  
const hijo = Object.create(padre);    //hijo is inheriting from padre
hijo.nombre = "Carlos";
  
hijo.saludar = function() {
  console.log("Hola desde el hijo");
    //this value inside saludar method could be unexpected, depending on how method is invoked. saludar.call(this) forces this to point to the child
    Object.getPrototypeOf(this).saludar.call(this);  // calls father method but this points to the child
};
  
hijo.saludar();
// Imprime:
// "Hola desde el hijo"
// "Hola desde el padre"

//example 4: Using Object.setPrototypeOf to, once created the object, stablish its father
let vehiculo2 = {
  marca: "",
  modelo: "",
  saluda(){
    console.log (`hola desde vehículo ${this.marca} ${this.modelo}`);
  }
};

let coche = { };
vehiculo2.marca="seat";
Object.setPrototypeOf(coche, vehiculo2);   //prototypical inheritance
console.log(coche.marca);


//example 5: same as before
const animal2={
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
Object.setPrototypeOf(conejo, animal2);  //animal is the prototype of conejo. The latter inherits from the former
//conejo.__proto__=animal;    shorter, but outdated. 
Object.setPrototypeOf(perro, animal2);
Object.setPrototypeOf(conejito, conejo);

console.log(conejo.come, perro.come, conejito.come);
console.log (perro.desplazate(), conejo.desplazate());

//Example 6: use prototype property to define methods in the prototype
//it can also be used to define properties with a value in the prototype, but this property will be shared. To create unique properties, combine defineProperty with getters and setters
function Persona(nombre) {
  this.nombre = nombre;
}

// Definimos un método en el prototipo
Persona.prototype.saludar = function() {
  console.log(`Hola, soy ${this.nombre}`);
};

const persona1 = new Persona("Carlos");
persona1.saludar(); // Salida: Hola, soy Carlos
console.log (Persona);

//Example 6: chained inheritance. Possible only with New
function Vehiculo(tipo) {
  this.tipo = tipo;
}

Vehiculo.prototype.mover = function() {
  console.log(`El ${this.tipo} se está moviendo`);
};

function Automovil(marca) {
  Vehiculo.call(this, "automóvil");
  this.marca = marca;
}

// Heredamos de Vehiculo
Automovil.prototype = Object.create(Vehiculo.prototype);
Automovil.prototype.constructor = Automovil;

Automovil.prototype.acelerar = function() {
  console.log(`El ${this.marca} está acelerando`);
};

function Camioneta(marca, traccion) {
  Automovil.call(this, marca);
  this.traccion = traccion;
}

// Heredamos de Automovil
Camioneta.prototype = Object.create(Automovil.prototype);
Camioneta.prototype.constructor = Camioneta;

Camioneta.prototype.atravesarTerreno = function() {
  console.log(`La ${this.marca} con tracción ${this.traccion} atraviesa el terreno`);
};

// Crear una instancia de Camioneta
let miCamioneta = new Camioneta("Toyota", "4x4");
miCamioneta.mover(); // "El automóvil se está moviendo"
miCamioneta.acelerar(); // "El Toyota está acelerando"
miCamioneta.atravesarTerreno(); // "La Toyota con tracción 4x4 atraviesa el terreno"


//////////////////
////overriding////
//////////////////

// Let's override constructor iniciar
let vehiculo3 = {
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
let coche = Object.create(vehiculo3); // Crea un nuevo objeto que hereda de vehiculo

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
vehiculo3.iniciar.call(coche); // Salida: Iniciando el vehículo Ford Fiesta del año 2022



