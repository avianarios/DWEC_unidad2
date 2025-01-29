// loading a script dynamically allows a script to be loaded at the time it is needed, not when the page loads. This can be useful for loading scripts that are not needed at the beginning, but at a specific time, reducing the initial page load time.
//This can be achieved by adding a script element to the head of the page with the src of the script to be loaded in response to an event, such as click, DomContentLoaded or scroll.

//Example 1: loading a script dynamically when clicking a button
//este script añade un botón al final del body que al hacer click carga un script (modulo-dinamico.js)
const botonCargar=document.querySelector("button");
botonCargar.addEventListener("click", ()=>{
    const script=document.createElement("script");
    script.src="../js/crea-tarjetas.js";
    script.type="text/javascript";
    document.head.append(script);

    document.querySelector("button").remove();
});


window.addEventListener("scroll", function() {
    // Verifica si el usuario ha llegado al final de la página
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
      console.log("¡Has llegado al final de la página!");
      // Aquí puedes ejecutar lo que desees, como cargar más contenido, mostrar un mensaje, etc.

      if (!document.querySelector("[src*=elimina-tarjetas]")){
        const script=document.createElement("script");
        script.src="../js/elimina-tarjetas.js";
        script.type="text/javascript";
        document.head.append(script); 
      }
    }
});
  
