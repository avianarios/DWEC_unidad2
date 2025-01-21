//As this function is not exported, it's not accessible from other files
function division(dividendo, divisor) {
    if (divisor === 0) {
        return "Error: división entre cero no está permitida";
    }
    return dividendo / divisor;
}

const numero = 5;

//declaring functions to be exported
function potencia(base, exponente) {
    return Math.pow(base, exponente); // Alternativamente, base ** exponente
}

function modulo(dividendo, divisor) {
    if (divisor === 0) {
        return "Error: división entre cero no está permitida";
    }
    return dividendo % divisor;
}

//default exporting an arrow function
export default (a)=>Math.sqrt(a);

/*another way of doing it is previously define the arrow function
const raiz=(a)=>Math.sqrt(a);
Export default raiz;
*/
  
//////////////////////////////////////////////////
////Exporting functions at the end of the file////
//////////////////////////////////////////////////
//Example 1: Reexporting all functions from another module
//it takes all the functions from 4.-exported-functions1.js and re-exports them. This way, you just need to import 4.-exported-functions2.js to get all the functions from both files.
//export * from './4.-exported-functions1.js';  

//Example 1: Exporting all at once
export{
    potencia as power,
    modulo as module,
    numero
};

//Example 2: Exporting one at a time
/*export { potencia as power }; //exporting the function potencia as power
export { modulo as module }; //exporting the function modulo as module
export {a};*/


