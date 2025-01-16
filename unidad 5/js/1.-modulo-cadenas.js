// strings.js

// Función para convertir una cadena a mayúsculas
export function toUpperCase(str) {
    return str.toUpperCase();
}

// Función para convertir una cadena a minúsculas
export function toLowerCase(str) {
    return str.toLowerCase();
}

// Función para comprobar si una cadena contiene otra (sin distinguir mayúsculas y minúsculas)
export function containsSubstring(str, substring) {
    return str.toLowerCase().includes(substring.toLowerCase());
}

// Función para eliminar los espacios al principio y al final de una cadena
export function trimString(str) {
    return str.trim();
}

// Función para reemplazar una palabra por otra en una cadena
export function replaceWord(str, oldWord, newWord) {
    return str.replace(new RegExp(oldWord, 'g'), newWord); // Reemplaza todas las ocurrencias
}
