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
let obj2={
    [clave1]: valor
}
console.log (obj2);
console.log (obj2[clave1]);

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

////////////////////////////////////////////
////preventing object from being changed////
////////////////////////////////////////////

//example 1: object.freezes
//it freezes the object completely, i.e. does not allow adding, deleting or modifying properties.
const persona = { nombre: 'Juan', edad: 30 };

//congelar el objeto
Object.freeze(persona);

persona.edad = 31;  // No tiene efecto
persona.genero = 'masculino'; // No se puede agregar
delete persona.nombre; // No se puede eliminar

console.log(persona);  // { nombre: 'Juan', edad: 30 }


//example 2: object.seal
//it does not allow properties to be added or removed, but existing properties can still be modified.
const persona = { nombre: 'Juan', edad: 30 };

// Sellar el objeto
Object.seal(persona);

// Intentos de modificación
persona.edad = 31;  // Esto funciona, se modifica la propiedad existente
persona.genero = 'masculino'; // No se puede agregar, ya que el objeto está sellado
delete persona.nombre; // No se puede eliminar, ya que el objeto está sellado

console.log(persona);  // { nombre: 'Juan', edad: 31 }


//example 3: Object.preventExtensions
//it prevents new properties from being added to the object, but allows existing properties to be modified and removed.
const persona = { nombre: 'Juan', edad: 30 };

// Prevenir extensiones al objeto
Object.preventExtensions(persona);

// Intentos de modificación
persona.edad = 31;  // Esto funciona, se modifica la propiedad existente
persona.genero = 'masculino'; // No se puede agregar, ya que el objeto no puede extenderse
delete persona.nombre; // Esto funciona, se puede eliminar una propiedad existente

console.log(persona);  // { edad: 31 }


//////////////////////////////////
////getting object information////
//////////////////////////////////
//example 1: object.hasOwnProperties 
//it verifies if the object has a particular property
const obj3 = { a: 1 };
console.log(obj3.hasOwnProperty('a')); // true

//example 2:object.keys, .values and .entries
//return array with keys, values and pairs key-value. They can be used to iterate over an object (we'll cover when talking about arrays)
const persona = { nombre: "Procopio", cargo: "Prefecto", edad: 29};
console.log (Object.keys(persona));    //returns an array with keys (name of properties)
console.log (Object.values(persona));   //returns an array with values (values of the properties)
console.log (Object.entries(persona));  //returns an array of pairs key-value



//////////////////////////////////////
///////iterating through objects///////
//////////////////////////////////////
//example 1: for...in -> non-iterable object
//Objects can be classified as iterable and non-iterable//
//Both of them have special for structures to iterate over that makes it easier than traditional for
//How do I know if it's an iterable object?
console.log (persona[Symbol.iterator]);  //if returns undefined, then it does not exist and, therefore, it is not iterable

for (let clave in persona) {
  console.log(clave, persona[clave]);
}

///////////////////////////////////////
/////Copying and comparing objects/////
///////////////////////////////////////
//when it comes to copy variables, they are different elements at different memory position
let aux="hola";
let aux2=aux;   
aux2="adios";   //if I modify aux2, aux still holds its original value
console.log(aux, aux2);
console.log (aux==aux2, aux===aux2);    //comparing only value and value and type


//when copying objects, they both point to the same memory location. Second object it's just a reference to the first one
//therefore objects can't be compared with == (it'll happen the same with arrays)
//example 1: simple assignemnt of objects. objeto1 and objeto2 points to the same memory location
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

//Example 2: copying objects with assign method
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

//Example 3: shallowly copying objects with assign method and deep clone with global function structuredClone
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