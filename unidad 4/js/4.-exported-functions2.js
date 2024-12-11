//As this function is not exported, it's not accessible from other files
function division(dividendo, divisor) {
    if (divisor === 0) {
        return "Error: división entre cero no está permitida";
    }
    return dividendo / divisor;
}


///////////////////////////
////Exporting functions////
///////////////////////////

//Example 1: Exporting named functions
export function potencia(base, exponente) {
    return Math.pow(base, exponente); // Alternativamente, base ** exponente
}

//Example 2: default exporting
//There's only one default export in a module. If you export multiple things, you should always use named exports.
// Función para calcular el módulo (resto de una división)
export default function modulo(dividendo, divisor) {
    if (divisor === 0) {
        return "Error: división entre cero no está permitida";
    }
    return dividendo % divisor;
}
  