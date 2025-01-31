document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;

    // Mostrar los datos en la página
    document.getElementById('resultado').innerText = `Nombre: ${nombre}, Edad: ${edad}`;
    this.reset();
});