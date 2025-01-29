//este script añade un botón al final del body que al hacer click añade un párrafo al final del body
const botonParrafo=document.createElement("button");
botonParrafo.innerText="Crear párrafo";
document.querySelector("main").append(botonParrafo);

botonParrafo.addEventListener("click", ()=>{
    for (let i = 0; i < 5; i++) {  // Crear 5 párrafos
        const p = document.createElement("p");  // Crear el nodo <p>
        p.innerText = "Este párrafo fue creado dinámicamente";  // Asignar el texto
        document.querySelector("main").append(p);  // Insertarlo en el DOM
    }
});