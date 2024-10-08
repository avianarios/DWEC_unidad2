///////////////////////
////creating arrays////
///////////////////////

//example 1: using brackets
let matrizFrutas=["chirimoya", "mango", "aguacate", "guayaba"];  //most used. Can be created empty
//an array can store different data types
let matrizMezcla=["hola", 1, 4.2, function(){console.log ("saludos");}]
let matrizNumeros = [1, 2, 3];

let matrizComida=[
  ["chirimoya", "mango", "aguacate", "guayaba"],
  ["tomate", "pepino", "pimiento", "berenjena"],
  ["leche", "yougur", "requesón", "queso"]
];

let matrizComida2=[
  ["chirimoya", "mango", "aguacate", "guayaba"],
  ["tomate", "pepino", "pimiento", "berenjena"],
  ["leche", "yougur", "requesón", "queso"]
];

let inventario=[
  { nombre: "manzanas", cantidad: 2 },
  { nombre: "plátanos", cantidad: 0 },
  { nombre: "cerezas", cantidad: 5 },
];

//example 2: using Array constructor
let matriz1=new Array();
let matriz2=new Array(1, 2, 3, "cuatro", true);
let matriz3=new Array(5);   //be careful. This creates an empty array with 5 empty slots!

let matrizBidimensional=new Array(
    new Array(1,2,3),
    new Array(true,"espinete",()=>"hola don pepito")
);

let matrizObjetos=[
  { nombre: "Procopio", profesion: "Centurión" },
  { nombre: "Apolinar", profesion: "Auriga" },
  { nombre: "Servando", profesion: "Esclavo" }
];


/////////////////////////////////
////accessing to its elements////
/////////////////////////////////

//example 1: accessing to an element
console.log (matrizFrutas[2], matrizObjetos[2][1]);

//example 2: access to the last element by using length property
console.log (matrizFrutas[matrizFrutas.length-1]);
console.log (matrizFrutas[matrizFrutas.at(-1)]);    //may not work on old browsers


//////////////////////////////
////inserting new elements////
//////////////////////////////

//example 1: by using spread operator that decomposes an iterable (such as an array or an object) into its individual elements (the opposite to REST))
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5]; // [1, 2, 3, 4, 5]
console.log(array2);

//example 2: combining arrays by using spread operator
let arr = [3, 5, 1];
let arr2 = [-1, 0, 7];
let arr3= [2, 8, ...arr, -21, ...arr2];  //spread can be used to combine several arrays

//example 3: by using its index
matrizNumeros[3] = 4; // Asigna 4 a la posición 3
matrizNumeros[5]= 2;  //leaves some empty spaces in between
console.log(matrizNumeros); // [1, 2, 3, 4, empty, 5]

//example 4: by using splice method. it is used to remove elements, but can also insert them (by using 0, elements to be removed)
matrizNumeros.splice(1, 0, "nuevoElemento"); // Inserta "nuevoElemento" en la posición 1 eliminando 0 elementos
console.log(matrizNumeros); // [1, "nuevoElemento", 2, 3]

//example 5: by using push method. It inserts at the end of the array
matrizNumeros.push(4); // Agrega 4 al final del array
console.log(matrizNumeros); // [1, 2, 3, 4]

//example 6: by using unshift method. It inserts at the beginning of the array
matrizNumeros.unshift(0); // Agrega 0 al inicio de la matriz
console.log(matrizNumeros); // [0, 1, 2, 3]

//example 7: by using concat to create a new array concatenating arrays or an array and an element 
matrizNumeros = [1, 2, 3];
let nuevoArray = matrizNumeros.concat([4, 5]); // Combina matrizNumeros con otra matriz
console.log(nuevoArray); // [1, 2, 3, 4, 5]
console.log(matrizFrutas.concat(matrizComida[1],"otra fruta"));


/////////////////////////
////removing elements////
/////////////////////////

matrizNumeros.pop(); // remove at the top position (the end)
console.log (matrizNumeros);

matrizNumeros.shift();   //extracts an element from the beginning. It is very costly, as all array elements have to me moved one position backward
console.log (matrizNumeros);


/////////////////////////
////changing elements////
/////////////////////////

matrizFrutas[2]="sandía";
matrizComida[2][2]="Calabaza";


////////////////////////////////////////////
////arrays behaving as stacks and queues////
////////////////////////////////////////////
//stack->LIFO data structure where the last inserted is the first leaving
//queue -> FIFO data structure where the first inserted is the first leaving

//example 1: array as stack: pop and push
matrizFrutas.pop(); // remove "aguacate" from the top position (the end)
console.log (matrizFrutas);
matrizFrutas.push ("piña"); //adds "piña" to the top position (the end)
console.log (matrizFrutas);

//example 2: array as a queue: unshift and pop
matrizFrutas.unshift("piña");   //inserts an element at the beginning. It is very costly, as all array elements have to me moved one position backward
console.log(matrizFrutas);
matrizFrutas.pop (); //extracts the last position
console.log(matrizFrutas);


//////////////////////////////////////
///////iterating through arrays///////
//////////////////////////////////////

const persona = {
  nombre: 'Carlos',
  edad: 25,
  ciudad: 'Barcelona'
};

//remember object.keys, values and entries return arrays, so they are iterable objects that can be iterated by using for...of instead of for...in
//example 1: by using traditional for with length property
let valores=Object.values(persona);        //llaves=['name', 'age']
for (let i=0; i<valores.length; i++){       //traditional for
    console.log (valores[i]);
}

for (let i=0; i<matrizFrutas.length; i++){
  console.log (matrizFrutas[i]);
}

//example 2: by using iterable for...of structure
//Objects can be classified as iterable and non-iterable//
//Both of them have special for structures to iterate over that makes it easier than traditional for
//How do I know if it's an iterable object?
console.log (matriz[Symbol.iterator]);  //if returns function, then it exists and, therefore, it's iterable
for (let fruta of matrizFrutas){  //for...of->non-iterable objects
    console.log (fruta);
}

for (let valor of Object.keys(persona)){      
    console.log (valor);
}

//example 3: using foreach with all its parameters: current element to be processed, index of the current element at the matrix and the whole matrix
//forEach is a method that iterates trough arrays. it doesn't return anything and it doesn't modify array
/*array.forEach(callback(currentValue, index, array) {
  // Código a ejecutar para cada elemento
});*/
matrizFrutas.forEach((elemento,indice,matriz) =>{
  console.log (`El elemento ${elemento} está en la posición ${indice} de la matriz \'${matriz}\'`);
});

//example 4: usage of forEach with less parameters (more common)
matrizFrutas.forEach(elemento=>console.log(elemento));
matrizComida[1].forEach(comida=>console.log(comida));
Object.values(persona).forEach((valor)=>console.log(valor));
Object.entries(persona).forEach(([clave, valor]) => console.log(`${clave}: ${valor}`)); //brackets are needed to unstructure an array into separate variables

//example 5: using forEach within an external function to iterate over a bidimensional array
let funcion2=(elemento)=>{
  for (let subelemento of elemento){
    console.log (subelemento);
  } 
}
matrizComidas.forEach(funcion2);

//example 6: using foreach with an external function to iterate over a unidimensional array
let listado = (elemento) => 
  console.log (`El elemento ${elemento.nombre} tiene ${elemento.cantidad} unidades`);
inventario.forEach(listado);

//example 7: using forEach within an internal function to iterate over a bidimensional array
matrizComidas.forEach(fila=>{
  fila.forEach(i=>{
      console.log(i);
    });
  });


/////////////////////////////////
////getting array information////
/////////////////////////////////

//Example 1: knowing if something is an array
console.log (typeof(numeros));  //object
console.log(Array.isArray(numeros));  //true

//Example 2: Getting position of an element in an array
console.log (matrizFrutas.indexOf("mango"), matrizFrutas.indexOf("esta no existe"));

//Example 3: returning if an element exists in an array
console.log (matrizFrutas.includes("mango"), matrizFrutas.includes("esta no existe"));

//Example 4: getting the position of the last element (in case they are repeated)
console.log (matrizFrutas.lastIndexOf("mango"));


///////////////////////////////////////////////////
////extracting, replacing or inserting elements////
///////////////////////////////////////////////////

//Example 1: splice removes element from original array, changing it, AND returns a subarray with the removed elements
console.log (matrizFrutas.splice(1,2), matrizFrutas);   //starting from position 1 (included), remove 2 elements
console.log (matrizComida[1].splice(1), matrizComida);  //remove from the element number 1 (included) until the last element of first subarray (due to no index provided). Remember elements are numbered starting by 0

//Example 2: splice replacing elements 1 to 3 with the following values
matrizComida[2].splice(1,3,"queso", "requesón", "yogur");
console.log (matrizComida);

//Example 3: splice inserting 2 elements starting at position 1
matrizComida[2].splice(1,0,"kéfir", "flan");
console.log (matrizComida);

//Example 4: Slice returns subarray with selected elements, but without changing original array
console.log (matrizFrutas.slice(1,2), matrizFrutas);  //returns an array with 2 elements starting from position 1
console.log (matrizComida[1].slice(1), matrizComida);  //returns an array consisting of elements from the position 1 to the end of first subarray

//Example 5: Slice can use negative indexes meaning starting from the end of the array backwards
console.log (matrizFrutas.slice(-3,-1));  //extract an array starting at the 3rd element backwards from the the end until the element at element at position just before the last element (-1)


/////////////////////////
////converting arrays////
/////////////////////////

//example 1: toString returns a string without changing original array
console.log(matrizFrutas.toString());

///////////////////////////////////////
/////Copying and comparing arrays/////
///////////////////////////////////////
//when it comes to copy variables, they are different elements at different memory position
let aux="hola";
let aux2=aux;   
aux2="adios";   //if I modify aux2, aux still holds its original value
console.log(aux, aux2);
console.log (aux==aux2, aux===aux2);    //comparing only value and value and type

//example 1: simple assignment of arrays and comparison with == and ===
//matrizAlimentos and matrizComida point to the same memory location
let matrizAlimentos=matrizComida;
console.log (matrizComida);
matrizAlimentos[2][2]="puerro"; //by modifying matrizAlimentos, matrizComida is also modified
console.log (matrizComida);

//example 2: copying by using Array.from
let mat1 = [1, 2, 3];
let mat2 = [...mat1]; // spread the array into a list of parameters then put the result into a new array
let  mat3=Array.from(mat1);  //copy numeros values into numeros2. If we use =, a reference is created and both are the same object
console.log (mat1==mat2); //false although they contain the same information, they point to different memory locations

//equal or strictly equal can't be used to compare. They only check if objects points to the same memory location
console.log(mat1 == mat2); //true. They both point to the same memory location
console.log(mat1 == mat3); //false. Despite both of them have the same elements (everybody would say they are "they are equals"), they are different objects, meaning each one points to its own memory location, and this is what equal measures
console.log(mat1 === mat2); //true
console.log(mat1 === mat3); //false. when using === with objects, JS not only verifies their type, but if both objects point to the same memory location

//example 3: comparing arrays by using Object.toString()
const arr1 = [1, [2, 3]];
const arr2 = [1, [2, 3]];
const arr3 = [1, 2, 3];

//by using toString, hierarchical relationships are lost, meaning different arrays can look the same and, therefore, return true when comparing them
console.log (arr1.toString() == arr2.toString()); //true
console.log (arr1.toString() === arr2.toString()); // true
console.log (arr1.toString() == arr3.toString()); //true, but it shouldn't
console.log (arr1.toString() === arr3.toString()); //true, but it shouldn't

//example 4: comparing arrays by using JSON.stringify
//JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy to read and write for both humans and machines. Although based on JavaScript object syntax, JSON is language independent and is used in a wide variety of technologies and programming languages to transfer structured data.
//its method stringify converts an object into string. 
//What we are comparing with JSON.stringify is if they are sintactically equals (which it may have no sense)

//JSON.stringify deals correctly with nested arrays
console.log (JSON.stringify(arr1) == JSON.stringify(arr2)); // true
console.log (JSON.stringify(arr1) == JSON.stringify(arr3)); // false

//example 5: JSON.stringify converts correctly nested arrays, but it fails when there are functions or undefined within an array
const arr4=[1, true, undefined, null, function (){return 1}];
const arr5=[1, true, null, null, null];
console.log (JSON.stringify(arr4)==JSON.stringify(arr5)); //returns true, but it shouldn't


/////////////////////////
////locating elements////
/////////////////////////

//example 1: findIndex returns the index of the first element that matches, -1 otherwise
console.log (inventario.findIndex(elemento=>elemento.nombre=="aguacate"));

//example 2: findLastIndex returns the index of the last element that matches, -1 otherwise
console.log (inventario.findLastIndex(elemento=>elemento.nombre=="aguacate"));

//example 3: find returns the first element that matches, undefined otherwise
console.log (inventario.find(elemento=>elemento.nombre=="aguacate"));

//example 4: using find to get one of the properties of object
let elemento=inventario.find(elemento=>elemento.nombre=="manzanas");
(elemento!=undefined) ? 
    console.log (`he encontrado ${elemento.cantidad} unidades e ${elemento.nombre}`):
    console.log ("no hay");

//example 5: alternative to previous example: define function outside
let esFruta=(fruta)=> fruta.nombre=="cerezas"; //arrow function
console.log (inventario.find(esFruta));


//////////////////////////
////filtering elements////
//////////////////////////

//filter returns  an array with all matching elements
//example 1: using filter with a simple condition
let elementos = inventario.filter(item => item.cantidad < 3);
console.log (elementos);

//example 2: using filter with complex conditions
let razasAnimales=[
    {animal: "perro", raza:"salchicha", pacientes:5},
    {animal: "perro", raza:"chihuahua", pacientes:7},
    {animal: "gato", raza:"angora", pacientes:2},
    {animal: "gato", raza:"romano", pacientes:1},
  ];
razasAnimales.filter(elemento=>(elemento.animal=="perro") && (elemento.pacientes>6));

//example 3: combining filter with string functions, like startsWith, endsWith or includes, to help searching for an element
let razas=["perro 1", "perro 2", "gato 1"];
let perros2=razas.filter(elemento=>elemento.startsWith("perro"));


////////////////////////////////////////////////////////////
////Performing calculations with one or several elements////
////////////////////////////////////////////////////////////
//When iterate over an array is needed – we can use forEach, for or for..of.
//When iterate and return the data for each element is needed– we can use map.
//When iterate and return a single value calculated by using the whole array is needed, we can use reduce

//map creates a new array as a result of applying some function to an existing array
//example 1: using map to multiply each number by 2
let numeros=[7,13,2,5];
console.log (numeros, numeros.map(x=>x*2));   //map creates a new array

//example 2: perform an action (concatenate) over all array element
let razasPerro=["salchicha", "podenco", "chucho"];
console.log (razasPerro, razasPerro.map(x=>"perro "+x));

//example 3: perform some calculations that returns just one value
console.log (numeros, numeros.reduce((total, actual)=>total+actual));

//example 4: perform calculations over an empty array
let matrizVacia = [];
let resultadoConValorInicial = matrizVacia.reduce((total, actual) => total + actual, 10); //a starting value (10 in this case, could be {}) must be provided to prevent it from throwing an error
console.log(resultadoConValorInicial); // 10

//example 5: combining methods to perform a calculation only over some values that meet certain condition
console.log (numeros.filter(actual=>actual>5).map(actual=>actual+10));

//example 6: combining methods to perform a calculation only over some values that meet certain condition
console.log (numeros.filter(actual=>actual>5).reduce((total, actual)=>total+actual));

let sumaDirecta = numeros.reduce((total, actual) => {
  return actual > 5 ? total + actual : total; // Solo suma si el número es mayor que 5
}, 0);
console.log(sumaDirecta); // 18


//////////////////////////////
////concatenating elements////
//////////////////////////////

//JOIN does the opposite to string.split. It returns a string made of concatenating the elements of an array
//example 1
let nombres=['Purificación', 'Procopio', 'Patrocinio', 'Apolinar'];
let cad=nombres.join();
console.log (cad,typeof(cad));

//example 2: using split (a string method), which is the opposite to join
let razasGato="pelo corto, pelo largo, angora, callejero";
let matrizRazasGato=razasGato.split(",");
console.log (matrizRazasGato);


/////////////////////////
////sorting elements/////
/////////////////////////
//SORT sorts the original array and returns it

//example 1: using sort out of the box
let numeros2=Array.from(numeros);
numeros2.sort();    //numeros2 has been ordered converting numbers to strings, so 15<2 as 1<2
console.log (numeros);

//example 2: using an ordering function
//In order to sort numbers properly, a function has to be provided
//numbers a,b are sorted depending on what is returned by this function:
//   <0, then a is ordered first
//   0, then there is no change between a and b
//   >0 ,then b is ordered first
let ordenaNumeros=(a,b)=>{
    return (a > b) ? 1 : (a == b ? 0 : -1);
}
numeros2.sort(ordenaNumeros);
console.log (numeros2, numeros);    //numeros2 has changed
numeros2=Array.from(numeros);

//example 3: a much sorter and elegant version of the ordering function
numeros.sort((a,b)=>a-b);


////////////////////////
////reversing arrays////
////////////////////////
// do as its name suggests in an array. it modifies the array
numeros.reverse();
console.log (numeros);


///////////////////////////
////filling with values////
///////////////////////////
//fill (value, start, end)

//example 1: filling a new array
let matriz4=new Array(5); //5 empty positions
matriz4.fill(0);    //fills the whole array with 0s

//example 2: filling part of the array
matrizFrutas.fill("plátano", 1, 3); // Rellena desde el índice 1 hasta el 3 (sin incluir el 3)
console.log(matrizFrutas); // ["chirimoya", "plátano", "plátano", "guayaba"]

//example 3: filling from one index untill the end
let numeros = [1, 2, 3, 4, 5];
numeros.fill(10, 2); // Rellena desde el índice 2 hasta el final con el valor 10
console.log(numeros); // [1, 2, 10, 10, 10]

//example 4: filling using negative indexes
let matriz = new Array(5).fill(0); // Crea una matriz de 5 elementos inicializados a 0
matriz.fill(7, -3); // Rellena desde el tercer último elemento hasta el final
console.log(matriz); // [0, 0, 7, 7, 7]


////////////////////////////
////unstructuring arrays////
////////////////////////////

//example 1: by using spread operator to break down an array into individual values
function sumar(a, b, c) {
  return a + b + c;
}

console.log(sumar(...[1,2,3])); // 6


//example 2. Combining unstructuration with rest operator
const numeros = [1, 2, 3, 4, 5];

const [primero, segundo, ...resto] = numeros;

console.log(primero); // 1
console.log(segundo); // 2
console.log(resto);   // [3, 4, 5]


//example 3. by using breaks to unstructuring just some variables
const numeros = [10, 20, 30];

const [a, , c] = numeros;

console.log(a); // 10
console.log(c); // 30

//example 4. providing a default value
const colores = ['rojo'];

const [color1, color2 = 'azul'] = colores;

console.log(color1); // rojo
console.log(color2); // azul (valor por defecto)

//example 5. Interchanging values
let x = 5;
let y = 10;

[x, y] = [y, x];

console.log(x); // 10
console.log(y); // 5

//example 6. Unstructuring arrays passed as arguments to a function
const sumar = ([a, b]) => {
  return a + b;
};

const numeros = [5, 10];
console.log(sumar(numeros)); // 15

//example 7. Unstructuring a function that returns multiple values
function obtenerCoordenadas() {
  return [100, 200];
}

const [x, y] = obtenerCoordenadas();

console.log(x); // 100
console.log(y); // 200

