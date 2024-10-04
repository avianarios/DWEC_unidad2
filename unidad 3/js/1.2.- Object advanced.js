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
  
const { nombre, edad } = persona; //unstructuring

console.log(nombre); // Carlos
console.log(edad);   // 25

  
//example 2. Changing name besides unstructuring
const persona = {
    nombre: 'Ana',
    edad: 30,
    ciudad: 'Madrid'
};
  
const { nombre: nombreCompleto, ciudad: localizacion } = persona;

console.log(nombreCompleto); // Ana
console.log(localizacion);   // Madrid
  
//example 3. a default value can be specified
const usuario = {
    nombre: 'Luis'
};
  
const { nombre, edad = 18 } = usuario;
  
console.log(nombre); // Luis
console.log(edad);   // 18 (valor por defecto)
  

//example 4. nested unstructuration
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
  
//example 5. unstructuring objects passed as arguments to a function
const mostrarInfo = ({ nombre, edad }) => {
    console.log(`Nombre: ${nombre}, Edad: ${edad}`);
};
  
const persona = { nombre: 'Pedro', edad: 40 };
mostrarInfo(persona);  // Nombre: Pedro, Edad: 40
  
//example 6. Unsctructuring a function that returns an object
const crearUsuario=()=>({
    nombre: 'Marta',
    rol: 'admin'
});
  
const { nombre, rol } = crearUsuario();
  
console.log(nombre); // Marta
console.log(rol);    // admin

//example 7: combining unstructuration with rest operator
const persona = {
    nombre: 'Laura',
    edad: 28,
    ciudad: 'Sevilla'
};
  
const { nombre, ...otrosDatos } = persona;
  
console.log(nombre);      // Laura
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
const obj = {
    nombre: "Carlos",
    saludar: function() {
      console.log(this.nombre);  // Correcto, `this` es `obj`
      
      function funcionInterna() {
        console.log(this.nombre);  // ¡Error! `this` aquí apunta al objeto global o undefined en modo estricto
      }
  
      funcionInterna(); //"this" value is determined when a function is invoked. funcionInterna is called with no object as a reference. Therefore, "this" references to global object Window.
    }
};
  
obj.saludar(); 
  

//Example 5: this within arrow functions
//in an arrow function, "this" doesn't reference to the object that invoked the method
//this references the context where the arrow function was defined. Therefore no matter which object is invoking function, this will always be refered to the scope where arrow function was created
const obj = {
    nombre: "Carlos",
    saludar: function() {
      console.log(this.nombre);  // Correcto, `this` es `obj`
  
      const funcionInterna = () => {
        console.log(this.nombre);  // An arrow function inherit "this" from the context where it was created so `this` references funcionInterna's context which is obj
      };
  
      funcionInterna();
    }
};
  
obj.saludar();  // "Carlos", "Carlos"


//example 6: another example of this within arrow functions
let usuario={nombre:"pepe"}

let diHola=function (){
  return(`Hola, soy ${this.nombre}`);
}

let diAdios=() => (`Adiós, soy ${this.nombre}`);

//assign function to object property
usuario.saluda=diHola;
usuario.despidete=diAdios;

console.log(usuario.saluda());
console.log(usuario.despidete()); //doesn't work. This points to global object
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

const padre = Object.create(abuelo);
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


//example 5: same as before
let animal={
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
//conejo.__proto__=animal;    shorter, but outdated. 
Object.setPrototypeOf(perro, animal);
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

//////////////////
////overriding////
//////////////////

// Let's override constructor iniciar
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



