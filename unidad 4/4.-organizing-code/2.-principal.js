// main.js
import Persona from './2.-persona.js';
import Empleado from './2.-empleado.js';

const persona1 = new Persona('Procopio', 25);
persona1.saludar();

const empleado1 = new Empleado('Silverio', 28, 'Desarrollador');
empleado1.presentar();