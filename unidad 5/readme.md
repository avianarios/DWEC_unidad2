# Unit 5.- Interacting with web browser

## Contents

1. Adding JavaScript to a web page
    1. [Ways of loading a Script in a webpage](#1---ways-of-loading-a-script-in-a-webpage)
    2. [Ciclo de renderizado de un navegador web](#2---el-ciclo-de-renderizado-de-un-navegador-web)
2. DOM (Document Object Model)
    1. Selecting DOM elements
    2. [Manipulating attributes and properties](#2---manipulating-attributes-and-properties)
    3. [Modifying DOM](#3---modifying-dom)
    4. Navigating DOM
    5. [Events](#5---events)
        1. [Handling events](#handling-events)
        2. [Event propagation](#event-propagation)
        3. Event delegation
        4. [Most common events](#most-common-events)
4. Forms
5. BOM (Browser Object Model)
    1. Window
    2. Location
    3. Geolocation
    4. Storage
    5. Document

## 1 - Ways of loading a Script in a webpage
# How to Insert JavaScript Code into an HTML File using `<script>` Tag

## How Does It Work?

- When the browser finds a `<script>` tag, it stops rendering HTML and starts downloading and executing the code.
- Scripts are executed in the order they appear in the HTML code.

## Where to Place the `<script>` Tag?

- **In the `<head>`**: The script is downloaded and executed, and after that, the HTML is rendered.
- **At the end of the `<body>`**: HTML is rendered first, and after that, the script is downloaded and executed.

## Three Ways of Inserting JavaScript Code:

1. **Embedding script code**
2. **Loading external resources from a CDN (Content Delivery Network)**
3. **Loading your own external JS file.** There are two ways of importing and exporting code:
   - **Option 1**: Load every JS file in the same HTML file. Only recommended when the code is not related.
   - **Option 2**: Organize the content into modules and import the main module. Only possible when the code is related.

## Modifying Traditional Blocking Behavior with `async` and `defer`:

- **`async`**:
  ```html
  <script src="file1.js" async></script>
  ```
  - The rendering of the page is not blocked while the scripts are being loaded.
  - Scripts are executed as soon as they are loaded, so the order of execution is not guaranteed.

- **defer**:
  ```html
  <script src="file1.js" defer></script>
  ```
  - The rendering of the page is not blocked while the scripts are being loaded.
  - Scripts are executed in the order they are placed in the HTML code, but only after the entire page (DOM) has been parsed.

## Options:

### Option 1: Not Recommended. Embedded Script into HTML Code. It's Better in a Separate File:
```html
<script>
  setTimeout(() => {
    console.log("hola");
  }, 3000);
</script>
```

### Option 2: Loading External Resources from a CDN (Content Delivery Network). Be Careful! Load Content Only from Trusted Sources:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" integrity="sha512-wvHm8W2YdFx27tNwpYwOHKeglkIjG3CXMR1JLcEUQU9zI/hzP6UtWk4fNN0kfi32dT8Xq2a7rfFSJi5VpY2VwA==" crossorigin="anonymous" referrerpolicy="no-referrer" async></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js" async></script>
```

### Option 3: Loading an own external JS file. 3 options:
no attibute: HTML rendering is blocked until the script is donwloaded and executed:
```html
    <script src="../js/1.-script.js"></script> 

```

defer: Script is loaded at background while HTML is being rendered and is executed only when HTML is rendered. Order is maintained
```html
    <script src="../js/1.-script.js" defer></script>
```

async: script is loaded at background while HTML is being rendered but it is executed as soon as it is available, blocking HTML rendering. Order is not maintained
```html
    <script src="../js/1.-script.js" async></script>
```
---

### 2 - El ciclo de renderizado de un navegador web

El ciclo de renderizado es el proceso que sigue el navegador web para dibujar en pantalla el código HTML de una web. Comprende los siguientes pasos:

1. Descarga de recursos
2. Análisis del HTML
3. Construcción en memoria del DOM como un árbol de nodos
4. Análisis del CSS
5. Construcción de un modelo de objetos usando las reglas CSS (CSS Object Model)
6. Construcción del árbol de renderizado, combinando el DOM y el CSSOM
7. Disposición -> cálculo del tamaño y posición que ocuparán los elementos del árbol de renderizado en la página
8. Composición -> cuando se usan animaciones, transformaciones o capas complejas como imágenes flotantes o transformaciones 3D, el navegador organiza los elementos en capas. Esta fase implica combinar dichas capas para formar la imagen final en pantalla
9. Dibujado en pantalla de los elementos

Estas 9 pasos se podrían clasificar en dos fases:

1. **Construcción** (pasos 1 a 6). Es la creación de esa estructura en memoria a partir del HTML que se encuentra en el archivo.
2. **Renderizado** (pasos 7 a 9). Es el proceso que sigue, donde el navegador comienza a pintar los elementos en la pantalla. En este proceso también se cargan y se representan los recursos visuales (como imágenes, fuentes, etc.).

---

### Proceso de ejecución de la web en un navegador

La ejecución de una web en un navegador se divide en hilos a los que se les asignan tareas. Hay un hilo principal, en el que el navegador procesa la mayoría de las tareas relacionadas con la renderización de la página web y la ejecución de scripts y otros secundarios que permiten que el navegador realice otras tareas sin bloquear la carga de la página.

En un entorno de ejecución como el de los navegadores web, JavaScript se ejecuta por defecto en el hilo principal. Esto significa que todas las tareas relacionadas con la manipulación del DOM, la ejecución de eventos (como clics o desplazamientos), y la ejecución de código JavaScript se llevan a cabo en este hilo.

#### Ejemplos de hilos secundarios:

1. **Trabajadores web (Web workers)** -> ideales para tareas largas o intensivas como el procesamiento de grandes volúmenes de datos o cálculos pesados, sin afectar la experiencia del usuario. Estos trabajadores se ejecutan en un hilo separado y se comunican con el hilo principal a través de mensajes, por lo que no tienen acceso directo al DOM.
2. **Hilo de renderizado**: Algunos navegadores usan un hilo de renderizado separado del hilo principal. Este hilo es responsable de pintar los elementos en la pantalla, procesar la capa de composición y otros aspectos gráficos. Aunque la mayor parte del trabajo de renderización está vinculado al hilo principal, el proceso de compositing (organizar las capas antes de pintar) y algunas optimizaciones gráficas se pueden realizar en hilos separados para mejorar el rendimiento.
3. **Hilos de red (network threads)** para gestionar las peticiones de red.
4. **Hilo asíncrono** para ejecutar tareas asíncronas como promesas, setTimeout y las API Fetch.

---

### Formas de cargar un script externo

1. **Sin parámetro** `<script src="miScript.js"></script>`. Cuando un script se carga sin ninguno de estos atributos, se descarga y ejecuta de manera sincrónica. Esto significa que, durante la descarga y ejecución del script, el navegador detiene el procesamiento del resto de la página, incluyendo el análisis de HTML y la renderización de contenido visual.
   
2. **Con async** `<script src="script.js" async></script>` el script se descarga de manera asíncrona, es decir, en paralelo con el procesamiento del HTML y se ejecuta tan pronto como se descarga, sin esperar a que el DOM esté completamente construido. Por tanto, si el script intenta interactuar con el DOM, como éste aún no estará completamente disponible, podría causar errores al intentar acceder a elementos que aún no existen en el DOM.

3. **Con defer** `<script src="script.js" defer></script>` el script se ejecuta cuando el DOM se ha construido completamente (Fase 1, pasos 1 a 6), lo que significa que el navegador ha analizado completamente el HTML y ha construido todos los nodos del DOM. Esto asegura que si el script interactúa con elementos del DOM, esos elementos ya existan y estén listos para ser manipulados. Sin embargo, el script se ejecuta después de que el DOM esté construido, pero antes de que el navegador haya completado el proceso de renderizado visual (fase 2, pasos 7 a 9). Es decir, el DOM está listo en memoria, pero el navegador aún puede no haber terminado de pintar todo en pantalla.

El comportamiento que todo el mundo esperaría es que se pintase toda la web y luego se ejecutase el script, pero esto no tiene por qué ser así siempre. Recordemos que tanto los scripts "normales" como la "renderización" visual se ejecutan en el hilo principal. Por tanto, si el hilo principal está ocupado ejecutando un script costoso o bloqueante (como un bucle largo), puede hacer que la página no se termine de renderizar hasta que ese código termine de ejecutarse, aunque el DOM ya esté construido.

---

### Este script bloquea el hilo principal durante 5 segundos con una operación costosa.

Formas de cargar el script:

- **Sin parámetros**. El script se descarga de forma síncrona, bloqueando tanto la construcción del DOM como su renderización hasta que se complete la ejecución del script.
- **Con async**. El script se descarga de forma asíncrona. En cuanto el navegador lo encuentra lo descarga mientras construye el DOM. En cuanto termina de descargarlo, lo ejecuta SIN ESPERAR a que el DOM esté completamente construido. Si el script es bloqueante, el DOM no terminará de construirse antes de que éste se ejecute y, por tanto, si el script intenta acceder a un elemento del DOM que aún no ha sido construido, daría error.
- **Con defer**. El navegador construirá el DOM y, cuando haya acabado, descargará y ejecutará el script. Si el script no es bloqueante, el navegador renderizará el DOM mientras se ejecuta. Si el script es bloqueante y el DOM es sencillo, éste se renderizará mientras el script se ejecuta, pero si el DOM es complejo o requiere recursos externos, la renderización se retrasará hasta que el script acabe de ejecutarse.


---
## 2 - Manipulating attributes and properties

### Atributos:
- Son los valores definidos directamente en el marcado HTML de un elemento, como `alt` o `src`.
- Se almacenan en el DOM tal como fueron definidos en el HTML.
- No reflejan siempre el estado actual de los elementos, por lo que, si cambias una propiedad en JavaScript, no necesariamente se actualiza el atributo en el DOM, y viceversa.
- Se interacciona con ellos a través de los métodos `getAttribute()` y `setAttribute()`.

### Propiedades:
- Son los valores que el navegador mantiene dinámicamente y que reflejan el estado actual de un elemento.
- No están necesariamente sincronizadas con los atributos HTML.
- Se definen a través de los objetos de los elementos en JavaScript y son accesibles a través del operador punto (`.`).

### Ejemplos de diferencias entre atributos y propiedades:

- **Checkbox (`checked`)**:
  - Atributo: `input.getAttribute("checked")` devuelve `null` o `"checked"`, dependiendo de si el atributo está presente en el HTML inicial.
  - Propiedad: `input.checked` devuelve `true` o `false`, reflejando el estado actual del checkbox (puede cambiar dinámicamente).

- **Enlace (`href`)**:
  - Atributo: `enlace.getAttribute("href")` devuelve el valor original del atributo tal como está en el HTML, como `./pagina.html`.
  - Propiedad: `enlace.href` devuelve la URL absoluta calculada por el navegador, como `http://ejemplo.com/pagina.html`.

- **Disabled (`disabled`)**:
  - Atributo: `boton.getAttribute("disabled")` devuelve `"disabled"` si el atributo está presente, o `null` si no lo está.
  - Propiedad: `boton.disabled` devuelve `true` o `false`, indicando si el botón está actualmente deshabilitado.

### Ejemplo:
```javascript
let elemento = document.querySelector("img");
elemento.src = "nueva-imagen.jpg";  // está manipulando la propiedad src
elemento.setAttribute("src", "nueva-imagen.jpg");  // manipulando el atributo src
```

Algunos elementos del DOM tienen propiedades que no tienen un atributo correspondiente. Por ejemplo:
- `input.checked` (propiedad) refleja si un checkbox está actualmente marcado, pero el atributo `checked` solo tiene un valor en el HTML si se encuentra presente. Modificar la propiedad `checked` a través del operador de punto cambiará el estado de selección del checkbox, pero no afectará el atributo `checked` directamente.
- Otros ejemplos son `disabled`, `selected`.

Otros atributos no están enlazados a la propiedad del mismo nombre, como, por ejemplo, `href`. 
- `enlace.href` devuelve la URL absoluta mientras que `enlace.getAttribute("href")` devuelve el valor tal y como está en el HTML (que puede no ser una URL absoluta).

### Resumen:
Un atributo controla la configuración inicial y la propiedad el comportamiento actual. El atributo `checked` indica que está marcado inicialmente y la propiedad `checked` refleja si está marcado ahora (puede cambiar en tiempo real).

### Atributos y propiedades personalizadas:
Se pueden crear atributos y propiedades personalizadas. Hay una convención que dice que su nombre debe comenzar con `data-`.

### ¿Cuál usar, el atributo o la propiedad?
- **¿Debe verse en el DOM porque alguna herramienta deba interaccionar con él?** → Atributos (`setAttribute` y `getAttribute`).
- **¿Es para uso interno de la lógica del programa?** → Propiedades (`.`).

----
## 3 - Modifying DOM

# XSS Warning

**Warning!!!!!**  
Despite modern browsers protecting you from XSS (Cross-Site Scripting) and disabling script execution when inserted, **never insert HTML obtained from untrusted sources** like databases, forms, or user input without cleaning it first. This could lead to security risks on unprotected or old web browsers.

Here you can see three ways of preventing malicious scripts from executing
---

## Example 1: XSS Injection
```javascript
const codigoMaligno = prompt("dame el elemento a añadir");
//el usuario introduce por teclado <script>alert('te la he colado')</script>
document.body.insertAdjacentHTML('beforeend', codigoMaligno);
//script insertado en mi DOM
```

## Example 2: Cleaning a string
```javascript
function escaparHTML(cadena_sucia) {
    const parrafo = document.createElement('p');
    p.textContent = cadena_sucia;
    return parrafo.innerHTML;
}

const comentarioPeligroso = "<script>alert('XSS')</script>";
const comentarioSeguro = escaparHTML(comentarioPeligroso);   //se inserta dentro de un <p>, por lo que ya no se ejecuta.
const punto_insercion = document.querySelector("#insertar1");
punto_insercion.insertAdjacentHTML("beforebegin", comentarioSeguro); 
```

## Example 2: inserting a clean comment
```javascript
 const punto_insercion = document.querySelector("#insertar1");
 const comentarioPeligroso = "<script>alert('XSS')</script>"; // Contenido malicioso
 const textoNode = document.createTextNode(comentarioPeligroso); // Se convierte en texto plano, ya no hay peligro
 punto_insercion.appendChild(textoNode);
```

## Example 3: Inserting as clean text
```javascript
 const comentarioPeligroso = "<script>alert('XSS')</script>";
 const punto_insercion = document.querySelector("#insertar1");

// Usando insertAdjacentText para insertar el comentario
 punto_insercion.insertAdjacentText("beforebegin", comentarioPeligroso);   //Se inserta como texto plano, por lo que no se ejecuta
```
-------
# 5 - Events
An **event** is an action or change that occurs on a web page or in the browser, either due to user interaction (such as a click) or by system processes (such as a page loading completely). We can associate actions with events such as:
    - The page finishes loading
    - The user clicks a button
    - The user hovers over a dropdown
    - The user submits a form
    - The user presses a key on their keyboard

## Key concepts
- **Event handler:** A JavaScript function that executes when an event occurs.
- **Event listener:** An interface that ‘listens’ for a specific event on an element and executes the associated handler when it occurs.

## Handling events
Three ways of working with events:

1. **Inline event handlers (Manejadores en línea)**  
   *Not recommended.* Mixing HTML and JavaScript makes maintenance difficult and does not allow multiple handlers to be added for the same event.

   ```html
    <button onClick="console.log('¡Saludos, criatura!')">Saludar</button>
    <button id="enviar" onclick="saludar()">Enviar</button>
    <script>
        let saludar = () => console.log ("¡Saludos, criatura!");
    </script>

    <button id="enviar" onclick="saludar()">Enviar</button>
    <script src="codigo.js"></script>
   ```

2. **Event handler properties.** *Not recommended.* Some events can't be assigned by using properties and it only allows one handler per event
   ```javascript
    let boton = document.querySelector("#formulario_contacto button");
    boton.onclick = function () { console.log("¡Saludos, criatura!"); };

    let boton=document.querySelector("button");
    let saludar = () => console.log ("¡Saludos, criatura!");
    boton.setAttribute("onclick", "saludar");
   ```

3. **Using event listeners. *RECOMMENDED. It allows to attach more than one handler to the same event, it has control over when the event is triggered and it works even with no HTML elements
    ```javascript
    let boton=document.querySelector("#formulario_contacto button");
    boton.addEventListener("click", function (){        //it's click, not onclick
        console.log('¡Saludos, criatura!');
    });
    ```

## Event propagation

The standard DOM Events describes 3 phases of event propagation:

1. **Capturing phase** – the event goes all the way down from `Window > Document > HTML > ...` to the element.
2. **Target phase** – the event reached the target element. It isn't handled separately; it's part of both the capturing and bubbling phases.
3. **Bubbling phase** – the event bubbles all the way up from the element to `HTML > Document > Window`.

By default all events use bubbling phase. They have their origin at the element that created them and, then, they go all their way up to Window object stopping at the first element that handles them

## Most common events
    - Mouse events:
        - click: the user clicks on an element.
        - dblclick: the user double clicks.
        - mouseover: the mouse passes over an element.
        - mouseout: the mouse leaves an element.
        - mousemove: the mouse moves inside an element.
        - mouseover: the mouse pointer enters an element.
        - mouseout: the mouse pointer leaves an element.
        - mouseenter: Similar to mouseover, but does not propagate to child elements.
        - mouseleave: Similar to mouseout, but does not propagate to child elements.
        -contextmenu: the user press right click (opens the context menu).
    - Keyboard events:
        - keydown: the user presses a key.
        - keyup: the user releases a key.
        - keypress (deprecated): Similar to keydown, but only for keys that generate characters.
    - Form events:
        - submit: a form is submitted.
        - change: the value of an input field changes.
        - input: Similar to change, but occurs while the user is typing.
        - focus: an input field gains focus.
        - blur: a field loses focus.
    - Document/window events:
        - DOMContentLoaded: When the DOM is fully loaded.
        - load: all resources (images, scripts, etc.) are fully loaded.
        - resize: the browser window is resized.
        - scroll: the user scrolls the page.

