//este script añade un botón al final del body que al hacer click añade un párrafo al final del body
/*const botonParrafo=document.createElement("button");
botonParrafo.innerText="Crear párrafo";
document.querySelector("main").append(botonParrafo);

botonParrafo.addEventListener("click", ()=>{
    for (let i = 0; i < 5; i++) {  // Crear 5 párrafos
        const p = document.createElement("p");  // Crear el nodo <p>
        p.innerText = "Este párrafo fue creado dinámicamente";  // Asignar el texto
        document.querySelector("main").append(p);  // Insertarlo en el DOM
    }
});*/


const botonAnyadir=document.createElement("button");
botonAnyadir.innerText="Crear productos";
botonAnyadir.id="botonAnyadir";
document.querySelector("main").prepend(botonAnyadir);

//Enlaza la hoja de estilos para dar formato a las tarjetas
const link = document.createElement("link"); // Crear el elemento <link>
link.rel = "stylesheet";
link.href = "../css/tarjetas.css";
document.head.append(link);


//crea las tarjetas de 3 en 3
const numeroTarjetas=4;

const contenedorTarjetas = document.querySelector("#contenedorTarjetas");
botonAnyadir.addEventListener("click", () => {
    const contenedorTarjetas=document.createElement("section");
    contenedorTarjetas.classList.add("contenedorTarjetas");
    for (let i = 0; i < numeroTarjetas; i++) {  // Crear 3 tarjetas
        const tarjeta = document.createElement("article");  // Crear el contenedor de la tarjeta
        tarjeta.classList.add("tarjeta");  // Añadir clase para los estilos

        // Crear y añadir la imagen a la tarjeta
        const imagen = document.createElement("img");
        imagen.src = "../img/paisaje-300.jpg";  // Imagen de ejemplo
        imagen.alt = "Imagen de tarjeta";
        tarjeta.append(imagen);

        // Crear y añadir la descripción debajo de la imagen
        const descripcion = document.createElement("p");
        descripcion.classList.add("descripcion");
        descripcion.innerText = "Texto descriptivo de la tarjeta.";
        tarjeta.append(descripcion);

        // Insertar la tarjeta en el contenedor principal
        contenedorTarjetas.append(tarjeta);
    }
    document.querySelector("main").append(contenedorTarjetas);
});




