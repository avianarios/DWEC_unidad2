//este script añade un botón al final del body que al hacer click añade una fila con varias tarjetas y añade una hoja de estilos en la cabecera del html para darles formato

const botonAnyadir=document.createElement("button");
botonAnyadir.innerText="Crear productos";
botonAnyadir.id="botonAnyadir";
document.querySelector("main").prepend(botonAnyadir);

//Enlaza la hoja de estilos para dar formato a las tarjetas
const link = document.createElement("link"); // Crear el elemento <link>
link.rel = "stylesheet";
link.href = "../css/tarjetas.css";
document.head.append(link);


const numeroTarjetas=4;

const contenedorTarjetas = document.querySelector("#contenedorTarjetas");
botonAnyadir.addEventListener("click", () => {
    //Creo el contenedor que contendrá las tarjetas
    const contenedorTarjetas=document.createElement("section");
    contenedorTarjetas.classList.add("contenedorTarjetas");
    for (let i = 0; i < numeroTarjetas; i++) {  // Crear varias tarjetas
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

        // Insertar la tarjeta en su contenedor
        contenedorTarjetas.append(tarjeta);
    }
    //añado el contenedor con las tarjetas al final del contenedor main
    document.querySelector("main").append(contenedorTarjetas);
});




