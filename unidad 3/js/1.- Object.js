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
//directly
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

console.log (usuario2.saluda());
console.log (usuario2.despidete("con dios"));
console.log (usuario2.pregunta());


//Using constructor
function Perro(nombre, raza) {
    this.nombre = nombre;
    this.raza = raza;
    this.saludar= function(){
        console.log("guau guau")
    };
}

//new is an operator that instantiates objects from construtor functions
let perro1=new Perro ("pirata","beagle");
console.log (perro1.saludar());

//with rest parameter
//allows to create an object without knowing the amount of properties it will have
const { street, ...address } = {
    street: 'Platz der Republik 1',
    postalCode: '11011',
    city: 'Berlin',
  };

console.log (address);

//create users by using a "factory function", a function that creates and returns objects
function makeUser(name, age){
    return{
        name: name,
        age: age,
    };
}

let user2=makeUser("paco", 40);
console.log (user2);

//same as before but function as arrow
//as properties have the same name as parameters, they can be removed
//here they have been removed from arrow, but can be done in traditional funcion as well
let creaUsuario=(name,age)=>(
    {name, age}
);

user=creaUsuario("pepe", 30);
console.log (user);

///////////////////////////
////getting object info////
///////////////////////////
const persona = { nombre: "Procopio", cargo: "Prefecto", edad: 29};
console.log (Object.keys(persona));    //returns an array with keys (name of properties)
console.log (Object.values(persona));   //returns an array with values (values of the properties)
console.log (Object.entries(persona));  //returns an array of pairs key-value

///////////////////////////////////
////accessing object properties////
///////////////////////////////////
console.log (persona.nombre);    //returns value
console.log (persona.noExiste);    //returns undefined, but no error
console.log (persona["cargo"]);     //by using brackets, complex field names can be used
console.log ("hola" in persona);     //returns false, but no error
console.log ("edad" in persona);   //returns true
//brackets notation allows to calculate in real-time the key 
let llave=prompt("¿Qué quieres saber del usuario?");  //needs to be a valid key name
console.log(persona[llave]);    //llave=edad or nombre...

//////////////////////////////////////
////Adding and removing properties////
//////////////////////////////////////
//example 1: assigning spare properties
persona.licenciado=false;
persona['lugar de nacimiento']="Roma";  //this name is only possible by using brackets
console.log(persona);

//example 2: using brackets to access properties
let clave1=prompt("¿Qué elemento quieres crear?");
let valor=prompt("Dame la cantidad");
let obj={
    [clave1]: valor
}
console.log (obj);
console.log (obj[clave1]);

//example 3: external assignment of an arrow function to a property
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

//////////////////////////////////////
///////iterating trough objects///////
//////////////////////////////////////
//example 1: Object.keys() can be used to iterate trough an object
let llaves=Object.keys(persona);        //llaves=['name', 'age']
for (let i=0; i<llaves.length; i++){       //traditional for
  console.log (persona[llaves[i]]);
}

//example 2: using for...in (non-iterable structure)
//Objects can be classified as iterable and non-iterable//
//Both of them have special for structures to iterate over that makes it easier than traditional for
//How do I know if it's an iterable object?
console.log (persona[Symbol.iterator]);  //if returns undefined, then it does not exist and, therefore, it is not iterable

//for...in -> non-iterable object
for (let clave in persona) {
  console.log(clave, persona[clave]);
}

//example 3: by using object.values() and traditional for
let valores=Object.values(persona);        //llaves=['name', 'age']
for (let i=0; i<valores.length; i++){       //traditional for
    console.log (valores[i]);
}

//example 4: by using Object.values and iterable for...of structure
//Object.values returns an array. It's an iterable object that can be iterated by using for...of instead of for...in
for (let valor of Object.values(persona)){      
    console.log (valor);
}

//example 5: by using forEach, a method that iterates trough arrays. Remember: keys, values and entries are object methods that return an array
Object.values(persona).forEach((valor)=>console.log(valor));
Object.entries(persona).forEach(([clave, valor]) => console.log(`${clave}: ${valor}`)); //brackets are needed to unstructure an array into separate variables

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
/////Copying and comparing objects/////
///////////////////////////////////////
//when it comes to copy variables, they are different elements at different memory position
let aux="hola";
let aux2=aux;   
aux2="adios";   //if I modify aux2, aux still holds its original value
console.log(aux, aux2);
console.log (aux==aux2, aux===aux2);    //comparing onle value and value and type


//when copying objects, they both point to the same memory location. Second object it's just a reference to the first one
//therefore objects can't be compared with == (it'll happen the same with arrays)
//objeto1 and objeto2 points to the same memory location
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
console.log (objeto1==objeto2); //true. They are both the same object
console.log (objeto1==objeto3); //false. They are different objects (although they have the same information)
console.log (objeto1===objeto2);    //true
console.log (objeto1===objeto3);    //false. when using === with objects, JS not only verifies their type, but if both objects point to the same memory location


/////////////////////
////assign method////
/////////////////////
//Cloning and copying
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
console.log(objeto4);

////global function structuredClone////
//Object.assign creates a surface copy, meaning it does not copy nested objects
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



////////////
////THIS////
////////////
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

//example 3: calling a method from outside its object
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


//example 4. Calling this from prototype
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


//example 5: controlling which objects references this by using .call()
const obj1 = { nombre: "Carlos" };
const obj2 = { nombre: "María" };

function saludar() {
  console.log(`Hola, soy ${this.nombre}`);
}

saludar.call(obj1);  // "Hola, soy Carlos"
saludar.call(obj2);  // "Hola, soy María"


//example 6: this inside a nested function
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
  

//Example 7: this within arrow functions
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


//example 8: another example of this within arrow functions
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
  

/*//example 9: using this with properties and methods.
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


//example 10: internal and external functions
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

//example 11: creating two functions for later assignment to the object
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


//example 12: making "this" in a arrow function work
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
grupo.muestraNombre();*/


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
////prototipical inheritance////
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
//example 1. By using Object.create
const animal = {
    hacerSonido() {
      console.log('Sonido de animal');
    }
};
  
const perro = Object.create(animal);
perro.hacerSonido = () => { console.log('Guau guau') };
  
const bulldog = Object.create(perro);
bulldog.hacerSonido();  // 'Guau guau' (heredado de `perro`)
  
//example 2: by using create. Calling father methods from child
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

//example 3: protoype chain
const abuelo = {
  edad: 70
};

const padre = Object.create(abuelo);
padre.nombre = "Carlos";

const hijo = Object.create(padre);
console.log(hijo.nombre);  // "Carlos" (se encuentra en el prototipo 'padre')
console.log(hijo.edad);    // 70 (se encuentra en el prototipo 'abuelo')


//example 4: by using setPrototypeOf
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



