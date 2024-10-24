/*

In JavaScript classes are just syntactic sugar meaning under the hood, they are just objects with another syntax

Classes always are in strict mode:
  -Using undeclared variables is not allowed (non strict mode creates a global variable)
  -Reserved words can't be used   ()
  -"this" is always undefined if called with no context (non strict mode is assigned to global object window)
  -non-configurable properties can't be modified

*/


/////////////////////////
////declaring a class////
/////////////////////////
//Example 1: declaring a class
class Persona {
  // El constructor se ejecuta cuando creamos una instancia de la clase
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Un método que pueden usar todas las instancias de esta clase
  saludar() {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
  }
}

//Example 2: classes are just "sintactic sugar" of builder functions meaning class are treated just as functions
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
}
console.log(typeof Persona);  // "function"

/*previous code is equivalent to...
function Persona(nombre) {
  this.nombre = nombre;
}
*/

/////////////////////////////
////instantiating a class////
/////////////////////////////
const persona1 = new Persona('Juan', 30); //new calls constructor method
persona1.saludar(); // Output: Hola, me llamo Juan y tengo 30 años.



//////////////////////////////
////class as an expression////
//////////////////////////////
let perro=class{
  ladra(){
    console.log("guau, guau");
  }
};

let a=new perro();
a.ladra();
new perro().ladra();


//you can provide a name, just like functions
//the name is only visible inside the class
let gatito=class gato{
  maulla(){
    console.log("miau, miau");
    console.log(gato);  //a class is a function!!
  }
}
//let c=new gato();   //error
new gatito().maulla();
let b=new gatito();
b.maulla();

///////////////////////////
////getters and setters////
///////////////////////////
let lechoncillo=class lechon{

  constructor(nombre, edad){
    this.nombre=nombre;
    this.edad=edad;
  }

  //do not use the same name of a property as a getter or setter
  get edad(){
    return this.anyos;
  }

  set edad(anyos){
    this.anyos=anyos;
  }

  //alternative getter and setter
  getNombreMarrano(){
    return this.nombre;
  }

  setNombreMarrano(nombre){
    this.nombre=nombre;
  }
}

let marranillo=new lechoncillo("pipas");
console.log (marranillo.edad);  //edad is a getter. Look at the syntax
marranillo.edad=2;  //Edad is a setter. with this syntax, they are called with equal instead of parenthesis
console.log (marranillo, Object.keys(marranillo).length);

//with this alternative setter and getter, parenthesis must be used
marranillo.setNombreMarrano("puerquín");  
console.log (marranillo.getNombreMarrano()); 

////////////////////////////////////////////////////
//////////losing this (pérdida de this)/////////////
////////////////////////////////////////////////////
/*this references the context where it was called. If it is different from the object (context) where it was created, 
it no longer references its object*/
class Button {
  constructor(value) {
    this.value = value;
  }
  click() {
    console.log(this.value);  //undefined. "this" doesn't exist in this context
  }
  clack = () => { //fixes this losing problem
    console.log(this.value);
  }
}

let button = new Button("hello");
setTimeout(button.click, 1000); // undefined. This no longer references its object
setTimeout(button.clack, 1000); // this from clack references its class

/////////////////////////////////////////
////class extension/Herencia de clase////
/////////////////////////////////////////
//Example 1
class Animal {
  hacerSonido() {
    console.log("El animal hace un sonido");
  }
}

class Perro extends Animal {
  hacerSonido() {
    console.log("El perro ladra");
  }
}

const perro = new Perro();
perro.hacerSonido();  // "El perro ladra"


//Example 2
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

/////////////////////////////////////////////
//////////////method overriding//////////////
/////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////
///////extending from a class created with a function////////
/////////////////////////////////////////////////////////////
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

class animal extends creaClase() {}
new animal("pelusa").corre(4); 
a=new animal("mancha");
a.corre(3);

////////////////////////////////////////
////////overriding a constructor////////
////////////////////////////////////////
class Animal {
  constructor(nombre) {
    this.velocidad = 0;
    this.nombre = nombre;
  }
}

class Conejo extends Animal{
  constructor(nombre, tamanyoOrejas){
    super(nombre);    //super must be called in order for the parent constructor to create an object for "this"
    this.tamanyoOrejas=tamanyoOrejas;
  }
}

let conejo = new Conejo("Conejito pequeño", 5);
console.log(conejo.nombre);
console.log(conejo.tamanyoOrejas);

///////////////////////////////////////////////////
////////////////static methods/////////////////////
///////////////////////////////////////////////////
//static methods are assigned to a class rather than to an object
//a good candidate to be static method is the one which is appliable to the class, but not to any particular object
//they must be called by using the class name, not the instantiate object
//"regular" methods are called "instance methods"

//example 1
//comparaVelocidad does not belong to any object. It belongs to the parent class
//comparaVelocidad can only be called from the class, not the instantiated objects
class Animal {
  constructor(nombre, velocidad=0) {
    this.velocidad = velocidad;
    this.nombre = nombre;
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
//conejito.comparaVelocidad(conejito, perrito); //Error, is not a valid function


///////////////////////////////////////////////////
////////////////static properties//////////////////
///////////////////////////////////////////////////
//as with static methods, it must be applied to class-meaningful properties. 
class Mamiferos {
  static numeroPatas=4;
  constructor(nombre, maxVelocidad) {
    this.maxVelocidad = maxVelocidad;
    this.nombre = nombre;
  }

  corre(velocidad) {
    this.velocidad = velocidad;
    console.log(`${this.nombre} corre a una velocidad de ${this.velocidad}.`);
  }

  static comparaMaxVelocidad(animal1, animal2){
   return animal1.maxVelocidad-animal2.maxVelocidad;
  }
}

class conejo extends Mamiferos{};
class perro extends Mamiferos{};

let animales=[
  new conejo("achuchao", 7),
  new perro("roque", 2),
  new perro("cibeles", 8)
];
console.log (Mamiferos.numeroPatas, animales[0].numeroPatas);  //first works, second not
Mamiferos.nombre="fufas";  //not working, not static property

animales.sort(Animal.comparaMaxVelocidad);
for (let animal of animales){
  console.log(animal.nombre);
}

//Internal and external interface
//Internal: Methods and properties accesibles from other methods but not from outside
//External: methods and properties accesibles also from outside the class
/*it's a good idea to isolate internal behaviour and state from external agressions. 
    -protects users from themselves. It avoids users making changes to internal properties 
    -allows internal code to be modified if external interface is kept
    -it hides complexity, making simple the usage of your code 
*/

////////////////////////////////////////////////////
/////////////private properties/////////////////////
////////////////////////////////////////////////////
//underscore is a convention for private properties
//users should not access underscored properties outside the class
//but nothing prevents user from changing their value
class tostadora{
  constructor (potencia){
    this._potencia= potencia;
  }
  get potencia(){
    return this._potencia;
  }
}

let tostadora1=new tostadora(100);
tostadora1._potencia=225; //it works, but programmers shouldn't do this
console.log (tostadora1.potencia);

///////////////////////////////////////////////////
//////////////////protected properties/////////////
// it's a new feature. Old browsers may need polyfills
// Protected properties are preceded by sharp and are not accessible outside
////////////////////////////////////////////////////
class tostadora{
  #tamanyoDelPan;
  constructor (potencia, tamanyoPan){
    this._potencia=potencia;
    this.#tamanyoDelPan=10;
    this.marca=marca;
    this.modelo=modelo;
  }
  
  getPotencia(){
    return this._potencia;
  }
  
  #setPotencia(potencia){
    this._potencia=potencia;
  }

  set tamanyoPan(tamanyo){  //don't use as name of the setter the name of the property. It'll throw an error
    this.#tamanyoDelPan=tamanyo;
  }
  
  get tamanyoPan(){
    return this.#tamanyoDelPan;
  }
}

let tostadora1=new tostadora(100, 8);
//tostadora1.#tamanyoDelPan=10;  //Error (it's private)
//using official getters and setters: treat them as a property, point and equal
tostadora1.tamanyoPan=10; //setter
console.log (tostadora1.tamanyoPan);  //getter

//using getters and setters defined as traditional methods. Usage as regular methods: with parenthesis
//tostadora1.setPotencia(10);  //setter Error, no such a function (it's private)
tostadora1.getPotencia(); //getter


//Example 2: private properties and methods are not inherited
class electrodomestico{
  #potencia
  constructor (potencia){
    this.#potencia=potencia;
  }
  
  getPotencia(){
    return this.#potencia;
  }
  
  #setPotencia(potencia){
    this.#potencia=potencia;
    //this[#potencia]=potencia; //not working. Private properties do not allow brackets
  }
}

class batidora extends electrodomestico{
  constructor(nombre, modelo, potencia){
    super(potencia);
    this.nombre=nombre;
    this.modelo=modelo;
  }
  
  getPotencia(){
    //return this.#potencia;  //error: private name #potencia not defined
    //return super.#potencia;  //error: private fields can't be accessed on super
    return super.getPotencia();
  }
  
  setPotencia(potencia){
    //super.#setPotencia(250);  //error: private fields can't be accessed on super
  }
}

let b=new batidora("ufesa", "ax23", 500);
console.log (b.getPotencia());

///////////////////////////////////////////////
///////////////intanceof//////////////////////
//////////////////////////////////////////////
//allows to check if an object is an instance of a class
//ejemplo 1
class Electrodomestico{};
let electro=new electrodomestico();

// ¿Es un objeto de la clase Electrodoméstico?
console.log( electro instanceof Electrodomestico ); // verdadero


//ejemplo 2
let matriz = [1, 2, 3];
console.log( matriz instanceof Array ); // verdadero
console.log( matriz instanceof Object ); // verdadero
//la clase Array hereda de Object


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

let miMixin = (claseBase) => class extends claseBase {
  constructor() {
    super();
  }
  resta() {
    this.contador--;
    return this;
  }
}

class Extendida extends miMixin(Base1) {
  reinicia() {
    this.contador = 0;
    return this;
  }
}

let miObjeto = new Extendida();
miObjeto.aumenta().aumenta().muestra().resta().reinicia().muestra();