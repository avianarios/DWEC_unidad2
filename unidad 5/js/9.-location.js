////////////////////////////
///////location object//////
////////////////////////////


///location is an object representing the URL the object is linked to
//location is linked to window.location and document.location

//location is reachable through window and document
//it has many properties: hostname, href, protocol, etc.
let texto1=document.getElementById("texto1");
document.getElementById("show_location").addEventListener("click", (evento)=>{
  evento.target.innerText.includes("show") ? 
      evento.target.innerText=evento.target.innerText.replace("show", "hide") : 
      evento.target.innerText=evento.target.innerText.replace("hide", "show");
  texto1.classList.toggle("dp_none");
  texto1.innerHTML=`<ul class="lista_viñetas"><li>location: ${location}</li>
                      <li>location.href: ${location.href}</li>
                      <li>window.location.hostname: ${window.location.hostname}</li>
                      <li>document.location.protocol: ${document.location.protocol}</li></ul>`;
});

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


//iterating through location.search
/*location="https://duckduckgo.com/?t=ffab&q=viajes+a+islandia&ia=web"
parametros=new URLSearchParams (location.search);
for (const [key, value] of parametros){
  console.log (`${key}: ${value}`);
}*/

////////////////////
/////properties/////
////////////////////
let texto_propiedades=document.getElementById("texto_propiedades");
document.getElementById("show_properties_button").addEventListener("click", (evento)=>{
  texto_propiedades.innerHTML=`<br>location.href: ${location.href}
                              <br>location.protocol: ${location.protocol}
                              <br>location.host: ${location.host}
                              <br>location.hostname: ${location.hostname}
                              <br>location.port: ${location.port}
                              <br>location.search: ${location.search}`;
  texto_propiedades.classList.remove("dp_none");
  document.documentElement.scrollTo(0, document.documentElement.scrollHeight);
});
