import mostrarMensaje from './mostrarMensajes.js';

document.getElementById("show_location").addEventListener("click", () => {
  const mensaje = `
    <dl class="lista-definicion">
      <dt><strong>location:</strong></dt>
      <dd>${location}</dd>

      <dt><strong>location.href:</strong></dt>
      <dd>${location.href}</dd>

      <dt><strong>window.location.protocol:</strong></dt>
      <dd>${window.location.protocol}</dd>

      <dt><strong>location.host:</strong></dt>
      <dd>${location.host}</dd>

      <dt><strong>window.location.hostname:</strong></dt>
      <dd>${window.location.hostname}</dd>

      <dt><strong>location.pathname:</strong></dt>
      <dd>${location.pathname}</dd>

      <dt><strong>location.search:</strong></dt>
      <dd>${location.search}</dd>

      <dt><strong>location.hash:</strong></dt>
      <dd>${location.hash}</dd>
    </dl>
  `;
  mostrarMensaje(mensaje, "mensajeLocation");
});


//iterating through location.search
/*location="https://duckduckgo.com/?t=ffab&q=viajes+a+islandia&ia=web"
parametros=new URLSearchParams (location.search);
for (const [key, value] of parametros){
  console.log (`${key}: ${value}`);
}*/



/////////////////
/////methods/////
/////////////////

//assign method
//moves to another url
let url="https://www.mozilla.org";

document.getElementById("assign_button").addEventListener("click", (evento)=>{
  location.assign(url);
  /*the next sentences makes JavaScript to call assign method
  window.location=url;
  location.href=url;*/
});

document.getElementById("replace_button").addEventListener("click", (evento)=>{
  //similar to assign, but it doesn't create an entrance in browser's history. back button can't be pressed
  location.replace(url);
});

document.getElementById("reload_button").addEventListener("click", (evento)=>{
  //location.reload(); //reloads current page using cache when content hasn't changed
  location.reload(true); //forces to download all content from server
});

