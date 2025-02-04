import mostrarMensaje from './mostrarMensajes.js';

/////////////////////////////////
//// nomenclatura then/catch ////
/////////////////////////////////

//Ejemplo 1: Asignar la función al evento de clic del botón
document.getElementById('cargarCita').addEventListener('click', ()=>{
    // Cambiar el mensaje a "Cargando..." mientras esperamos la respuesta
    mostrarMensaje(`Cargando datos, espere...`,"mensajeThen");
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }
            // Convertir la respuesta en JSON
            return response.json();
        })
        .then(data => {
            // Mostrar los datos en el contenedor
            mostrarMensaje(`${data.value}`,"mensajeThen");
        })
        .catch(error => {
            // Mostrar el error si ocurre
            mostrarMensaje(`Hubo un error: ${error.message}`,"mensajeThen");
        });
});


//Ejemplo 2
document.getElementById('cargarUsuario').addEventListener('click', ()=>{
    fetch('https://randomuser.me/api/')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
        // Convertir la respuesta en JSON
        return response.json();
    })
    .then(data => {
        // Mostrar los datos en el contenedor
        const usuario=data.results[0];
        console.log(usuario);
        let tarjeta=`
            <section class="card">
                <img src="${usuario.picture.large}" alt="Foto de perfil">
                <h2>${usuario.name.title} ${usuario.name.first} ${usuario.name.last}</h2>

                <section class="info">
                    <p><label>Correo:</label> ${usuario.email}</p>
                    <p><label>Dirección:</label> ${usuario.location.street.name} ${usuario.location.street.number}, ${usuario.location.postcode} ${usuario.location.state}, ${usuario.location.country}</p>
                    <p><label>Teléfono:</label> ${usuario.phone}</p>
                </section>

                <section class="contact">
                    <a href="mailto:${usuario.email}">Enviar Correo</a>
                </section>
            </section>`;
        mostrarMensaje(tarjeta,"mensajeThen", false);
    })
    .catch(error => {
        // Mostrar el error si ocurre
        mostrarMensaje(`Hubo un error: ${error.message}`,"mensajeThen");
    });
});

//////////////////////////////////
//// nomenclatura Await/async ////
//////////////////////////////////
//Ejemplo 1
document.getElementById('cargarGato').addEventListener('click', async () => {
    try {
      // Hacer una solicitud GET para obtener la imagen
      const response = await fetch('https://cataas.com/cat');
      
      // Verificar si la respuesta fue exitosa
      if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.statusText);
      }
  
      // Convertir la respuesta a un blob (imagen)
      const imageBlob = await response.blob();
  
      // Crear una URL para la imagen
      const imageObjectURL = URL.createObjectURL(imageBlob);
  
      // Mostrar la imagen en el HTML
      const imgHTML = `<img src="${imageObjectURL}" alt="Imagen de Gato"/>`;
      mostrarMensaje(imgHTML, 'mensajeAwait');
    } catch (error) {
      mostrarMensaje(`Error al cargar la imagen:, ${error}`, 'mensajeAwait');

    }
});
  

//Ejemplo 2
document.getElementById('cargarReceta').addEventListener('click', async () => {
    try {
      // Cambiar el mensaje a "Cargando..." mientras esperamos la respuesta
      mostrarMensaje('Cargando receta, espere...', 'mensajeAwait');
  
      // Hacer la solicitud a la API usando fetch y async/await
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      
      // Verificar si la respuesta fue exitosa
      if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.statusText);
      }
  
      // Convertir la respuesta a JSON
      const data = await response.json();
  
      // Extraer los datos de la receta
      const meal = data.meals[0];  // La receta se encuentra en el primer elemento del array 'meals'
  
      // Formatear la receta como una tarjeta
      const recetaHTML = `
        <section class="card">
          <img src="${meal.strMealThumb}" alt="Imagen de la receta" style="max-width: 100%; height: auto;">
          <h2>${meal.strMeal}</h2>
          <section class="info">
            <p><label>Categoría:</label> ${meal.strCategory}</p>
            <p><label>Instrucciones:</label> ${meal.strInstructions}</p>
            <p><label>Fuente:</label> ${meal.strSource}</p>
          </section>
        </section>
      `;
  
      // Mostrar la receta formateada en el contenedor
      mostrarMensaje(recetaHTML, 'mensajeAwait');
    } catch (error) {
      mostrarMensaje(`Hubo un error: ${error.message}`, 'mensajeAwait');
    }
  });
  


////////////////////////////////////////////
//// promise.all y any con await y sync ////
////////////////////////////////////////////
document.getElementById('cargarProductos').addEventListener('click', async () => {
    const apiKey = 'K9P7ybYHefJidGFgDM0u4g==0mKSBGC0BZSU0Eem';

    // Función para obtener citas
    async function obtenerCitas() {
        const url = 'https://api.api-ninjas.com/v1/quotes';
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey
            }
        });
        if (!response.ok) {
            throw new Error('Error al obtener citas: ' + response.statusText);
        }
        return response.json();
    }

    // Función para obtener información nutricional
    async function obtenerNutricion(query) {
        const url = `https://api.api-ninjas.com/v1/nutrition?query=${encodeURIComponent(query)}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey
            }
        });
        if (!response.ok) {
            throw new Error('Error al obtener información nutricional: ' + response.statusText);
        }
        return response.json();
    }

    // Función para obtener información sobre gatos
    async function obtenerGatos(name) {
        const url = `https://api.api-ninjas.com/v1/cats?name=${encodeURIComponent(name)}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey
            }
        });
        if (!response.ok) {
            throw new Error('Error al obtener gatos: ' + response.statusText);
        }
        return response.json();
    }

    try {
        // Usamos Promise.all para realizar las peticiones en paralelo
        const resultados = await Promise.all([
            obtenerCitas(),
            obtenerNutricion('1lb brisket and fries'),
            obtenerGatos('abyssinian')
        ]);

        // Mostrar los resultados
        console.log('Citas:', resultados[0]);
        console.log('Nutrición:', resultados[1]);
        console.log('Gatos:', resultados[2]);

        // Aquí podrías manipular el DOM para mostrar los datos en la página
        // Por ejemplo, con algo como:
        // mostrarMensaje(resultados[0], 'mensajeCitas');
        // mostrarMensaje(resultados[1], 'mensajeNutricion');
        // mostrarMensaje(resultados[2], 'mensajeGatos');

    } catch (error) {
        console.error('Error:', error.message);
        // También puedes mostrar el error en el DOM si lo prefieres
        // mostrarMensaje(`Hubo un error: ${error.message}`, 'mensajeErrores');
    }
});

    
    