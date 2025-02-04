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
//Clave de la API api-ninjas.com

//Código común a .all y .any
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

//Ejemplo 1: Promise.all
document.getElementById('cargarTodasCitas').addEventListener('click', async () => {
    try {
        // Usamos Promise.all para realizar las peticiones en paralelo
        const [cita1,cita2,cita3] = await Promise.all([
            obtenerCitas(),
            obtenerCitas(),
            obtenerCitas(),
        ]);

        const tarjetas = `
            <section class="card">
                <h2>Cita 1</h2>
                <p>"${cita1[0].quote}"</p>
                <p><label>- ${cita1[0].author}</label></p>
            </section>
    
            <section class="card">
                <h2>Cita 2</h2>
                <p>"${cita2[0].quote}"</p>
                <p><label>- ${cita2[0].author}</label></p>
            </section>
        
            <section class="card">
                <h2>Cita 3</h2>
                <p>"${cita3[0].quote}"</p>
                <p><label>- ${cita3[0].author}</label></p>
            </section>
        `;
        
        mostrarMensaje(tarjetas, 'mensajeAllAny',false);

    } catch (error) {
        mostrarMensaje(`Hubo un error: ${error.message}`, 'mensajeAllAny');
    }
});


//Ejemplo 2: Promise.any
// Función para manejar la API de Shazam (no funcionará porque no tenemos clave)
async function obtenerCancion() {
    const url = 'https://shazam.p.rapidapi.com/songs/v2/get-details?id=1217912247&l=en-US';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'Sign Up for Key',  // Aquí debería ir tu clave de API válida
            'x-rapidapi-host': 'shazam.p.rapidapi.com'
        }
    };
    const response = await fetch(url, options);
    if (!response.ok) {
        console.log(`${response.type} ${response.status}`);
        throw new Error('Error al obtener la canción: ' + response.statusText);
    }
    return response.json();
}
    

document.getElementById('cargarAlgunasCitas').addEventListener('click', async () => {
    try {
        // Usamos Promise.any para devolver la primera promesa que se resuelva
        const [resultado] = await Promise.any([
            obtenerCancion(),
            obtenerCitas()
        ]);

        // Verificamos si el resultado es de la cita o de la canción
        let tarjeta;
        if (resultado.quote) {  // Si el resultado tiene la propiedad 'quote', es de la cita
            tarjeta = `
                <section class="card">
                    <h2>Cita</h2>
                    <p>"${resultado.quote}"</p>
                    <p><label>- ${resultado.author}</label></p>
                </section>
            `;
        } else if (resultado.title) {  // Si tiene la propiedad 'title', es de la canción
            tarjeta = `
                <section class="card">
                    <h2>Canción</h2>
                    <p>"${resultado.title}"</p>
                    <p><label>- ${resultado.subtitle}</label></p>
                </section>
            `;
        }
        mostrarMensaje(tarjeta, 'mensajeAllAny',false);
    } catch (error) {
        mostrarMensaje(`Hubo un error: ${error.message}`, 'mensajeAllAny');
    }
});