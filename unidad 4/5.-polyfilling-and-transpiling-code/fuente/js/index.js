//import 'regenerator-runtime/runtime';  // Importa el runtime para que los generadores funcionen
import 'regenerator-runtime';

// Código moderno con ES6+
class Usuario {
    constructor(nombre, email, company) {
        this.nombre=nombre;
        this.correo=email;
        this.empresa=company;
    }

    saludar() {
        return `Hola, me llamo ${this.nombre}, mi correo es ${this.correo} y trabajo en ${this.empresa.name}`;
    }
}

// Función asíncrona
const obtenerUsuarios = async () => {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    const usuarios = await respuesta.json();
    return usuarios.map((usuario) => new Usuario(usuario.name, usuario.email, usuario.company));
};

// Uso de promesas y funciones flecha
obtenerUsuarios()
    .then((usuarios) => {
        usuarios.forEach((usuario) => {
            console.log(usuario.saludar());
        });
    })
    .catch((error) => console.error('Error al obtener usuarios:', error));



  // Uso de la desestructuración
  const persona = new Usuario('Juan', 'juan@juan.es', 'Juan S.L.');
  const { nombre, correo } = persona;
  
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
  
