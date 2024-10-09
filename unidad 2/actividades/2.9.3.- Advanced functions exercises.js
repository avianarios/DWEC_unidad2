//1. Write the recursive version of the function square
//2. Write the autoexecutable version of the previous version
//3. Write the recursive version of the function pow
//4. Write an iterative and recursive function to add the nth first prime numbers. 
//5. Write an iterative and recursive function to calculate factorial of a given number
//6. Write a recursive function to check if a number is prime
//7. Rewrite the previous function to be autoexecutable
//8. Create a function that accepts an undetermined number of words and returns a string with all these words concatenated.
//9. Create a function that accepts three parameters: two numbers and a function that indicates the operation to be applied to the numbers: division or pow.
//10. Check the following code and explain the output
let a=b=5;
function calcula() {
  console.log(a*b);
}
a=b=10;
calcula();

//11. Check the following code and explain the output
function crearCoche() {
    let marca= "Tesla";
  
    return function() {
      return nombre;
    };
  }
  
  let marca = "MG";
  let coche = crearCoche();
  coche();

//12. Check the following code and explain the output
function coche(aux){
    let nombre=aux;
    return function(){
      return nombre;
    }
  }
  
  let coche1=coche("tesla");
  let coche2=coche("mg");
  console.log(coche1());
  console.log(coche2());

//13. Check the following code and explain the output
let animal = "gato";

if (1) {
  let animal = "conejo";
  function habla() {
     if (animal1==”conejo”){
	console.log(“Los conejos no hacen ruido”);
    }else{
	console.log (“Los gatos maúllan”);
    }
  }
}

habla();