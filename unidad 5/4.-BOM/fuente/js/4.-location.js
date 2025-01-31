////////////////////////////
///////location object//////
////////////////////////////
///location is an object representing the URL the object is linked to
//location is linked to window.location and document.location

//properties
// href
// protocol
// host
// hostname
// pathname
// search
// hash

let texto1=document.getElementById("texto1");
document.getElementById("show_location").addEventListener("click", (evento)=>{
  evento.target.innerText.includes("show") ? 
      evento.target.innerText=evento.target.innerText.replace("show", "hide") : 
      evento.target.innerText=evento.target.innerText.replace("hide", "show");
  texto1.classList.toggle("dp_none");

  texto1.innerHTML=`<ul class="lista_viñetas">
                      <li>location: ${location}</li>
                      <li>location.href: ${location.href}</li>
                      <li>window.location.protocol: ${window.location.protocol}</li>
                      <li>location.host: ${location.host}</li>
                      <li>window.location.hostname: ${window.location.hostname}</li>
                      <li>location.pathname: ${location.pathname}</li>
                      <li>location.search: ${location.search}</li>
                      <li>location.hash: ${location.hash}</li>
                    </ul>`;
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

