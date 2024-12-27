/*// Código moderno (para probar transpilación y polyfills)
const greet = () => console.log('Hello, modern JavaScript!');
const numbers = [1, 2, 3];
console.log(numbers.includes(2)); // Usa polyfill
greet();*/

// src/index.js

class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    saludo() {
      return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
    }
  
    // Método asincrónico
    async obtenerInfo() {
      const info = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const data = await info.json();
      return data.name;
    }
  }
  
  // Uso de la desestructuración
  const persona = new Persona('Juan', 30);
  const { nombre, edad } = persona;
  
  // Uso del operador de propagación
  const persona2 = { ...persona, ciudad: 'Madrid' };
  
  // Función flecha
  const saludoFlecha = () => {
    return `Soy una función de flecha, y mi nombre es ${nombre}.`;
  };
  
  console.log(persona.saludo());
  console.log(saludoFlecha());
  console.log(persona2);
  
  // Uso de async/await
  persona.obtenerInfo().then(info => console.log('Info de la API:', info));
  
  // Ejemplo de Polyfill con Object.assign
  const objeto1 = { a: 1 };
  const objeto2 = { b: 2 };
  const combinado = Object.assign({}, objeto1, objeto2);
  console.log(combinado);
  
