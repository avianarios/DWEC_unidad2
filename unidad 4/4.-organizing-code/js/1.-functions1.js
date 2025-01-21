///////////////////////////
////Exporting functions////
///////////////////////////

//Example 1: Exporting named functions
export const sumar = (a, b) => a + b;
export const restar = (a, b) => a - b;

//Example 2: default exporting
//There's only one default export in a module. If you export multiple things, you should always use named exports.
export default function multiplicar(a, b) {
    return a * b;
}

//Example 3: Exporting variables
export const PI = 3.14159;
export const circumference = (r) => 2 * PI * r;
