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
let usuario={
    id:"1",
    nombre:"pepe",
    edad:30
};

//Using constructor
function perro(nombre, raza) {
    this.nombre = nombre;
    this.raza = raza;
}

//new is an operator that instantiates objects from construtor functions
let perro1=new Perro ("pirata","beagle");
console.log (perro1);

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

let user=makeUser("paco", 40);
console.log (user);

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

//////////////////////////////////////
///////iterating trough objects///////
//////////////////////////////////////
////Object.keys() can be used to iterate trough an object
let llaves=Object.keys(persona);        //llaves=['name', 'age']
for (let i=0; i<llaves.length; i++){       //traditional for
  console.log (persona[llaves[i]]);
}

//Objects can be classified as iterable and non-iterable//
//Both of them have special for structures to iterate over that makes it easier than traditional for
//How do I know if it's an iterable object?
console.log (persona[Symbol.iterator]);  //if returns undefined, then it does not exist and, therefore, it is not iterable

//for...in -> non-iterable object
for (let clave in persona) {
  console.log(clave, persona[clave]);
}

//object.values() can be used to iterate as well
//by using a traditional for
let valores=Object.values(persona);        //llaves=['name', 'age']
for (let i=0; i<valores.length; i++){       //traditional for
    console.log ([valores[i]);
}

//or by using an iterable for...of
//Object.values returns an array. It's an iterable object that can be iterated by using for...of instead of for...in
for (let valor of Object.values(persona)){      
    console.log (valor);
}

///////////////////////////////////
////accessing object properties////
///////////////////////////////////
console.log (persona.nombre);    //returns value
console.log (persona.noExiste);    //returns undefined, but no error
console.log (persona["cargo"]);     //by using brackets, complex field names can be used
console.log ("hola" in persona);     //returns false, but no error
console.log ("edad" in persona);   //returns true

//assigning new properties with values
persona.licenciado=false;
persona['nacimiento']="Roma";
console.log(persona);

//removing properties
delete(persona.nacimiento);
delete(persona['licenciado']);
console.log(persona);

//brackets notation allows to calculate in real-time the key 
let llave=prompt("¿Qué quieres saber del usuario?");  //needs to be a valid key name
console.log(persona[llave]);    //llave=edad or nombre...

//another example of brackets
let llave2=prompt("¿Qué elemento quieres?");
let cantidad={
    [llave2]: 5
}
console.log (cantidad);
console.log (cantidad[llave2]);


//////////////////////////////////////
////Adding and removing properties////
//////////////////////////////////////
persona1={
    nombre:"pepe",
    profesion: "fontanero",
    medidas: {
        altura:180,
        pecho: 100,
    },
};

persona1.edad=37;
delete(persona1.medidas);
console.log (persona1);


////////////////////
/////Comparison/////
////////////////////
//two objects can't be compared with == (it'll happen the same with arrays)
let objeto1=objeto2={
    nombre:"pepe",
    profesion: "fontanero"
};

let objeto3={
    nombre:"pepe",
    profesion: "fontanero"
};

//object references and copy
//when copying variables, they are different elements at different memory position
let aux="hola";
let aux2=aux;   
aux2="adios";   //if I modify aux2, aux still holds its original value
console.log(aux, aux2);

//when copying objects, they both point to the same memory location. Second object it's just a reference to the first one
let usuario={ nombre:"pepe" };
let usuario2=usuario;   //usuario2 and usuario point to the same memory location. they are the same object
let usuario3={ nombre:"pepe" };

usuario.nombre="fede";
console.log(usuario2.nombre);

//Objects comparison with == or === is tricky
console.log (objeto1==objeto2); //true. They are both the same object
console.log (objeto1==objeto3); //false. They are different objects (although they have the same information)


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
//Example 1
usuario={nombre:"pepe"}
usuario2={nombre:"juan"}

//create a function that utilizes "this"
diHola=function (){
    console.log(this.nombre);
}

//assign function to an object property
usuario.saluda=diHola;
usuario2.saluda=diHola;

usuario.saluda();
usuario2.saluda();

//example 2
//"this" only works with methods
"use strict";
let persona={
      nombre:"pepe",
      ref1: this,
      ref2(){
        return this;
      }
}

console.log(persona.ref1.nombre);    //doesn't work. "this" is only for methods
console.log(persona.ref2().nombre);  //it works

//example 3
//"this" loses its context in arrow functions, so it doesn't work
usuario={nombre:"pepe"}

diHola=function (){
  return(`Hola, soy ${this.nombre}`);
}
let diAdios=() => {return(`Adiós, soy ${this.nombre}`)};

//assign function to object property
usuario.saluda=diHola;
usuario.despidete=diAdios;

console.log(usuario.saluda());
console.log(usuario.despidete());


//example 4
persona1={
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
    felizAnyo: function(){
        console.log (`yo, ${this.nombre}, te felicito el año nuevo`);
    }
};

//creating two functions for later assignment to the object
persona1.buenasTardes=function(){
      console.log (`yo, ${this.nombre}, te doy las buenas tardes`);
};
persona1.buenasNoches=()=>{     //arrow functions have no "this". Here, "this" refers to persona1's context. 
      console.log (`yo, ${this.nombre}, te doy las buenas noches`);
};

persona1.buenosDias();
persona1.buenasTardes();
persona1.buenasNoches();


//example 5
/////////////Arrow functions and "this" on arrays inside objects///////////
let grupo = {
    nombre: "Los amigos",
    habitantes: ["Máximo", "Higinio", "Salustiano"],
    localidades: ["Jódar", "Guarromán", "La cabra del santo cristo"],
  
    muestraLista() {
        this.habitantes.forEach(
            //arrow functions have no "this", so here "this" references muestraLista's context. That's why it works
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

///////?. special syntax construct/////////
//it's been recently added. Allows to return undefined instead of error ir a property doesn't exist.
//appliable to nested properties from declared objects
let user = {}; // a user without properties
//console.log(user.address.street); // Throws an error

//could be solved by checking before with ? or &&. Not very elegant
console.log(user.address ? user.address.street : undefined);
console.log( user.address && user.address.street && user.address.street.name ); // undefined (no error)

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
let coche={
    marca:"",
    modelo:"",
    set marcayModelo(aux){
        [this.marca, this.modelo]=aux.split(' ');
    }

    get marcayModelo(){
        return `${this.marca} ${this.modelo}`;
    }
}
coche.marcayModelo="Volkswagen Golf";   //launches setter
console.log(coche.marcayModelo);  //launches getter



/*//binding methods
//when passing an object method as an argument, context is lost, resulting in undefined "this"

//example 1
let usuario = {
    nombre: "Perico"
};
  
function diAlgo(frase) {
    console.log(frase + ', ' + this.nombre);
}
  
diAlgo("hola"); //undefined
//binding method to object fixes context, resulting in a usable "this"
diAlgo.bind(usuario)("hasta luego");
let funcUser = diAlgo.bind(usuario);
funcUser("adiós");

//example 2
let usuario = {
    nombre: "Perico",
    diAlgo(frase="no se qué decir"){
        console.log(frase + ', ' + this.nombre);
    }
};


usuario.diAlgo("hola");
//binding method to object fixes context, resulting in a usable "this"
let funcionEnlazada=usuario.diAlgo.bind(usuario);
funcionEnlazada("hasta luego"); //diAlgo can be called anywhere, using funcionEnlazada, and it will work
//usuario.diAlgo.bind(usuario)("adiós");
//window.nombre="bbbb";
setTimeout(usuario.diAlgo, 1000);
setTimeout(funcionEnlazada, 1000);
*/

