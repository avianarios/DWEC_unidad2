//although you can work with arrays as you would do with a primitive type, they are objects

let matriz1=new Array();
let matrizFrutas=["chirimoya", "mango", "aguacate"];  //most used. Can be created empty
//an array can store different data types
let matrizMezcla=["hola", 1, 4.2, function(){console.log ("saludos");}]


//Spread operator
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5]; // [1, 2, 3, 4, 5]
console.log(array2);

//example 3
function sumar(a, b, c) {
  return a + b + c;
}

const numeros = [1, 2, 3];
console.log(sumar(...numeros)); // 6

//show the whole array
console.log(matrizFrutas);

//run array function
console.log (matrizMezcla[2]);

//Access to an element and replace it
matrizFrutas[2]="sandía";

//access to the last element
console.log (matrizFrutas[matrizFrutas.length-1]);
console.log (matrizFrutas[matrizFrutas.at(-1)]);    //may not work on old browsers


////////////ITERATE/////////////
//option #1. Needs to define a function
let funcion = (elemento) => console.log (elemento);
matrizFrutas.forEach(funcion);

//option #2
//Objects can be classified as iterable and non-iterable//
//Both of them have special for structures to iterate over that makes it easier than traditional for
//How do I know if it's an iterable object?
console.log (matriz[Symbol.iterator]);  //if returns function, then it exists and, therefore, it's iterable
for (let fruta of matrizFrutas){  //for...of->non-iterable objects
    console.log (fruta);
}

//option #3, traditional way. Needs to get array length
for (let i=0; i<matrizFrutas.length; i++){
    console.log (matrizFrutas[i]);
}

//Iterate over the bidimensional array
//option #1
let funcion2=(elemento)=>{
    for (let subelemento of elemento){
      console.log (subelemento);
    } 
  }
  matrizComidas.forEach(funcion2);

//option #2
matrizComidas.forEach(fila=>{
    fila.forEach(i=>{
        console.log(i);
      });
    });

///////////STACKS AND QUEUES//////////
//arrays can act as stacks, queues and, of course, arrays
//array as stack: pop and push
matrizFrutas.pop(); // remove "aguacate" from the top position (the end)
console.log (matrizFrutas);
matrizFrutas.push ("piña"); //adds "piña" to the top position (the end)
console.log (matrizFrutas);

//array as a queue: shift and push
matrizFrutas.shift();   //extracts an element fro the beginning. It is very costly, as all array elements have to me moved one position backward
console.log(matrizFrutas);
matrizFrutas.push ("piña"); //adds "piña" to the last position
console.log(matrizFrutas);

//unshift adds an element to the beginning of array
//it is really costly, as all array elements have to be moved one position forward to make room for the new one
matrizFrutas.unshift("guayaba");

////////CONVERSION TO STRING//////////
console.log(matrizFrutas.toString());


/////////MULTIDIMENSIONAL ARRAYS///////
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


//matrizAlimentos is a pointer to the memory space of matrizComida
let matrizAlimentos=matrizComida;

console.log (matrizComida);

for (let categoria of matrizComida){
    for (let fruta of categoria){
        console.log (fruta);
    }
}

matrizAlimentos[2][2]="puerro";
console.log (matrizComida);


//Arrays comparison with == or === is tricky
//both arrays are different objects, so == is always false.
//you have to compare them item by item
console.log (matrizComida==matrizAlimentos);    //True. both of them point to the same memory area
console.log (matrizComida==matrizComida2);      //False. both have the same elements, but are different objects, meaning each one has his own memory area

//SLICE returns subarray, but without changing original array
matrizFrutas.slice(1,2);   //starting from position 1, remove 2 elements
console.log (matrizFrutas);
let b=matrizComida[1].slice(1);  //remove from the 1st until the last element of first subarray
console.log (b);
console.log (matrizComida);


//SPLICE returns subarray, but removing it from original array
matrizFrutas.splice(1,2);   //starting from position 1, remove 2 elements
console.log (matrizFrutas);
let a=matrizComida[1].splice(1);  //remove from the 1st until the last element of first subarray
console.log (a);
console.log (matrizComida);
matrizComida[2].splice(1,3,"queso", "requesón", "yogur");   //replaces elements 1 to 3 with the following values
matrizComida[2].splice(1,0,"kéfir", "flan");   //inserts 2 elements at position 1
console.log (matrizComida);

//CONCAT creates a new array that includes values from other arrays and additional items.
console.log(matrizFrutas.concat(matrizComida[1],"otra fruta"));

//FOREACH method allows to run a function for every element of the array.
matrizFrutas.forEach((elemento,indice,matriz) =>{
    console.log (`El elemento ${elemento} está en la posición ${indice} de la matriz \'${matriz}\'`);
});

matrizFrutas.forEach((elemento) =>{
    console.log (elemento);
});

matrizComida[1].forEach(comida=>console.log(comida));

/*Less elegant and slower alternative
for (let i=0; i<matrizComida[1].lenght; i++){
    console.log (matrizComida[1][i]);
}
*/

//Get position of an element in an array
console.log (matrizFrutas.indexOf("mango"), matrizFrutas.indexOf("esta no existe"));

//returns if an element exists in an array
console.log (matrizFrutas.includes("mango"), matrizFrutas.includes("esta no existe"));

//get the position of the last element (in case they are repeated)
console.log (matrizFrutas.lastIndexOf("mango"));


let inventario=[
    { nombre: "manzanas", cantidad: 2 },
    { nombre: "plátanos", cantidad: 0 },
    { nombre: "cerezas", cantidad: 5 },
  ];

//returns the index of the firts element that matches, -1 otherwise
console.log (matrizFrutas.findIndex(elemento=>elemento.nombre=="aguacate"));

//returns the index of the last element that matches, -1 otherwise
console.log (matrizFrutas.findLastIndex(elemento=>elemento.nombre=="aguacate"));

//returns the first element that matches, undefined otherwise
console.log (matrizFrutas.find(elemento=>elemento.nombre=="aguacate"));

//find object and get one of its properties
let elemento=inventario.find(elemento=>elemento.nombre=="manzanas");
(elemento!==undefined) ? 
    console.log (`he encontrado ${elemento.cantidad} unidades`):
    console.log ("no hay");

//Alternative to previous line: define function outside
let esFruta=(fruta)=> fruta.nombre=="cerezas"; //arrow function
console.log (inventario.find(esFruta));

//1.- FILTER returns an array of all matching elements
let elementos = inventario.filter(item => item.cantidad < 3);
console.log (elementos);

let razasAnimales=[
    {animal: "perro", raza:"salchicha", pacientes:5},
    {animal: "perro", raza:"chihuahua", pacientes:7},
    {animal: "gato", raza:"angora", pacientes:2},
    {animal: "gato", raza:"romano", pacientes:1},
  ];
razasAnimales.filter(elemento=>(elemento.animal=="perro") && (elemento.pacientes>6));

let razas=["perro 1", "perro 2", "gato 1"];
let perros2=razas.filter(elemento=>elemento.startsWith("perro"));

//2.- Iterate over results
let listado = (elemento) => 
    console.log (`El elemento ${elemento.nombre} tiene ${elemento.cantidad} unidades`);
elementos.forEach(listado);

//MAP creates a new array as the result to apply some function to an existing one
let numeros=[7,13,2,5];
numeros.map(x=>x*2);

let razasPerro=["salchicha", "podenco", "chucho"];
razasPerro.map(x=>"perro "+x);

//REDUCE
//When we need to iterate over an array – we can use forEach, for or for..of.
//When we need to iterate and return the data for each element – we can use map.
//When we need to iterate and return a single value calculated by using the whole array, we can use reduce
//zero or empty brackets need to be added as 2nd parameter of reduce when using an empty array. It is the starting value;
let result = numeros.reduce((sum, current) => sum + current);
console.log( result );

console.log(numeros.reduce((total, actual)=>total+actual));     //concatenates strings

//JOIN does the opposite to string.split. It returns a string made of concatenating the elements of an array
let nombres=['Purificación', 'Procopio', 'Patrocinio', 'Apolinar'];
let cad=nombres.join();
console.log (cad,typeof(cad));

let razasGato="pelo corto, pelo largo, angora, callejero";
let matrizRazasGato=razasGato.split(",");
console.log (matrizRazasGato);


//COPY arrays
let arr = arrCopy = [1, 2, 3];
let arrCopy2 = [...arr]; // spread the array into a list of parameters then put the result into a new array
let  arrCopy3=Array.from(arr);  //copy numeros values into numeros2. If we use =, a reference is created and both are the same object

// do the arrays have the same contents?
console.log(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true
console.log(JSON.stringify(arr) === JSON.stringify(arrCopy2)); // true
console.log(JSON.stringify(arr) === JSON.stringify(arrCopy3)); // true

// are the arrays equal?
console.log(arr === arrCopy); // true (same reference)
console.log(arr === arrCopy2); // false (not same reference)
console.log(arr === arrCopy3); // false (not same reference)

// modifying our initial array does not modify the copy:
arr.push(4);
console.log(arr); // 1, 2, 3, 4
console.log(arrCopy); // 1, 2, 3, 4
console.log(arrCopy2); // 1, 2, 3
console.log(arrCopy3); // 1, 2, 3


//SORT sorts the original array and returns it
let numeros2=Array.from(numeros);
numeros2.sort();    //numeros2 has been ordered converting numbers to strings, so 15<2 as 1<2
console.log (numeros);

//In order to sort numbers properly, a function has to be provided
//numbers a,b are sorted depending on what is returned by this function:
//   <0, then a is ordered first
//   0, then there is no change between a and b
//   >0 ,then b is ordered first
let ordenaNumeros=(a,b)=>{
    /*it can't be expressed with ?, as it does not support return statement
    (a>b) ? (return 1) :
            (a==b) ? return 0 :
            return -1;*/
    if (a>b){
      return 1;
    }else if (a==b){
      return 0;
    }return -1;
}
numeros2.sort(ordenaNumeros);
console.log (numeros2, numeros);    //numeros2 has changed
numeros2=Array.from(numeros);

//a shorter adn much more elegant version
numeros.sort((a,b)=>a-b);

//REVERSE do as its name suggests in an array. it modifies the array
numeros.reverse();
console.log (numeros);

//Array.isArray() is the only way to know if something is an array
console.log (typeof(numeros));  //object
console.log(Array.isArray(numeros));  //true


//Spread operator (operador de expansión)
//transform an array into a list of arguments
let arr = [3, 5, 1];
let arr2 = [-1, 0, 7];
let arr3= [2, 8, ...arr, -21, ...arr2];  //spread can be used to combine several arrays

console.log( Math.max(...arr) );  //Math.max needs a list of arguments, not an array
console.log( Math.max(1, ...arr2, 21, ...arr) );  //several arrays can be combined
console.log (Math.max(...arr3));

//any iterable object, and string is, works with spread operator
let cad="hola";
console.log(...cad);    //returns every letter separately 
console.log([...cad]);  //returns an array of letters
//array.from iterables