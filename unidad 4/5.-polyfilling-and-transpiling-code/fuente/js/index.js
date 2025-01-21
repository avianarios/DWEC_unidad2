import 'regenerator-runtime/runtime';  // Importa el runtime para que los generadores funcionen

// Código moderno con ES6+
class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`;
    }
}

// Función asíncrona
const obtenerUsuarios = async () => {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    const usuarios = await respuesta.json();
    return usuarios.map((usuario) => new Usuario(usuario.name, usuario.age || 'desconocida'));
};

// Uso de promesas y funciones flecha
obtenerUsuarios()
    .then((usuarios) => {
        usuarios.forEach((usuario) => {
            console.log(usuario.saludar());
        });
    })
    .catch((error) => console.error('Error al obtener usuarios:', error));
