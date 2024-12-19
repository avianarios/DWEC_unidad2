// Función que suma dos números
function suma(a, b) {
    return a + b;
}

// Función que calcula el factorial de un número
function factorial(n) {
    if (n === 0) return 1; // Caso base
    return n * factorial(n - 1); // Llamada recursiva
}

// Llamadas a las funciones
console.log("Suma de 5 y 3:", suma(5, 3));

const numero = 5;
console.log(`Factorial de ${numero}:`, factorial(numero));

// Bucle para probar puntos de interrupción
for (let i = 1; i <= 5; i++) {
    console.log(`Número: ${i}`);
}
