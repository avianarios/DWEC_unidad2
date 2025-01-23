// empleado.js
import Persona from './2.-persona.js';

export default class Empleado extends Persona {
    constructor(nombre, edad, puesto) {
        super(nombre, edad); // Llamamos al constructor de Persona
        this.puesto = puesto;
    }

    presentar() {
        this.saludar();
        console.log(`Trabajo como ${this.puesto}.`);
    }
}
