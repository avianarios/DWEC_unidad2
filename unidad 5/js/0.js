//two ways of importing and exporting code:
/*Option 1: loading several js files in the same html file 
    -if they are not related, this is the right choice. Three ways of loading
        -no option: it blocks the rendering of the page until all files are loaded and they are executed in the order they are in the HTML code
        -async: it does not block the rendering of the page. It executes files as soon as they are loaded, so it does not guarantee the order of execution
        -defer: it does not block the rendering of the page. It executes files in order when the html has been rendered
    -if they are related, loading code this way forces the use of global variables, which is not recommended as it lacks of encapsulation and makes plausible a conflict between variables. In this case it is better to use modules

    async and defer are known as lazy loading
 */
/*
<!-- index.html -->
<script src="file1.js"></script>
<script src="file2.js"></script>
<script src="file3.js"></script>

// file1.js
function greet() {
    console.log("Hello, World!");
}
  
// file2.js
greet(); // Llama a la función definida en file1.js
*/



//modules can be imported statically or dynamically
/*Dynamic import allows to import modules at runtime, when you need them for instance, when a user interaction occurs. This is called lazy loading (carga diferida o perezosa) and reduces the initial load time of the application.
*/
//Example 2: Dynamic import when a user clicks a button with ID "cargarModulo" (lazy loading) with error handling
document.getElementById('cargarModulo').addEventListener('click', () => {
    import('./4.-moduloPesado.js')
      .then(module => {
        module.saluda();
      })
      .catch(error => console.error('Error al cargar el módulo', error));
  });
  

//Example 1: Dynamic import
// Función asíncrona para cargar el script
async function cargarScript(src) {
    const response = await fetch(src);
    const scriptContent = await response.text();
    const script = document.createElement('script');
    script.textContent = scriptContent;
    document.head.appendChild(script);
    console.log('jQuery ha sido cargado con éxito');
    // Probar que jQuery funciona
    $('body').css('background-color', 'lightblue');
}

document.getElementById('cargarScript').onclick = async function() {
    await cargarScript('https://code.jquery.com/jquery-3.6.0.min.js');
};
