// SPA (Single Page Application), o Aplicación de Página Única, es un tipo de aplicación web o sitio web que carga una sola página HTML y actualiza dinámicamente el contenido de esa página a medida que el usuario interactúa con la aplicación. Esto contrasta con las aplicaciones tradicionales que cargan una nueva página del servidor cada vez que el usuario hace una acción (por ejemplo, al hacer clic en un enlace o enviar un formulario).

// En una SPA, todo el contenido necesario para la aplicación se carga una vez al principio, y luego, conforme el usuario navega o realiza acciones dentro de la app, solo se cargan los datos o los componentes necesarios sin recargar la página completa. Esto permite una experiencia de usuario más fluida y rápida, ya que evita las recargas completas y las interrupciones visuales típicas en aplicaciones tradicionales.


document.addEventListener('DOMContentLoaded', () => {
    // Recuperar el estado desde sessionStorage
    // if (sessionStorage.getItem('nombre')) {
    //     document.getElementById('nombre').value = sessionStorage.getItem('nombre');
    // }
    // if (sessionStorage.getItem('edad')) {
    //     document.getElementById('edad').value = sessionStorage.getItem('edad');
    // }


    const seccion1=document.getElementById('seccion1');
    const seccion2=document.getElementById('seccion2');
    const seccion3=document.getElementById('seccion3');

    // Recuperar el estado desde history.state
    if (history.state) {
        document.getElementById('nombre').value = history.state.nombre || '';
        document.getElementById('edad').value = history.state.edad || '';
    }

    // Sección 1: Avanzar al siguiente paso
    document.getElementById('next1').addEventListener('click', () => {
        const nombre = document.getElementById('nombre').value;
//        sessionStorage.setItem('nombre', nombre);  // Guardamos en sessionStorage
        history.pushState({ nombre }, "", location.href);  // Guardamos en history.state

        seccion1.classList.toggle("oculto");
        seccion2.classList.toggle("oculto");
    });

    // Sección 2: Avanzar al siguiente paso
    document.getElementById('next2').addEventListener('click', () => {
        const edad = document.getElementById('edad').value;
//        sessionStorage.setItem('edad', edad);  // Guardamos en sessionStorage
        history.pushState({ nombre: document.getElementById('nombre').value, edad }, "", location.href);  // Guardamos en history.state
        seccion2.classList.toggle("oculto");
        seccion3.classList.toggle("oculto");
    });

    // Sección 2: Volver al paso anterior
    document.getElementById('prev2').addEventListener('click', () => {
        seccion2.classList.toggle("oculto");
        seccion1.classList.toggle("oculto");
    });

    // Sección 3: Volver al paso anterior
    document.getElementById('prev3').addEventListener('click', () => {
        seccion3.classList.toggle("oculto");
        seccion2.classList.toggle("oculto");
    });

    // Formulario: Enviar datos y mostrar resultado
    document.getElementById('miFormulario').addEventListener('submit', function(event) {
        event.preventDefault();  // Evita el envío del formulario

        // Obtener los valores del formulario
        const nombre = document.getElementById('nombre').value;
        const edad = document.getElementById('edad').value;

        // Mostrar los datos en la página
        document.getElementById('resultado').innerText = `Nombre: ${nombre}, Edad: ${edad}`;
        this.reset();

        // Limpiar los datos almacenados de sessionStorage
        // sessionStorage.removeItem('nombre');
        // sessionStorage.removeItem('edad');
        history.replaceState({}, "", location.href);
    });

    // Este evento se produce cuando el usuario navega hacia atrás o adelante
    window.addEventListener('popstate', (event) => {
        //Se comprueba si el estado anterior o siguiente del historial tiene un objeto state...
        if (event.state) {
            //Se cogen las propiedades .nombre .edad del objeto state
            document.getElementById('nombre').value = event.state.nombre || '';
            document.getElementById('edad').value = event.state.edad || '';
        }
    });
});
