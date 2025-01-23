# 2. DOM (Document Object Model)

## Contenidos
1. Selección de elementos del DOM
2. [Manipulación de atributos y propiedades](#2---manipulando-atributos-y-propiedades)
3. [Modificación del DOM](#3---modificando-el-dom)
4. Navegación por el DOM
5. [Eventos](#5---eventos)
    1. [Eventos más comunes](#51--eventos-más-comunes)
    2. [Manejo de eventos](#52--manejando-eventos)
    3. [Propagación y delegación](#53--propagación-y-delegación)

------

## 2 - Manipulando atributos y propiedades

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

## 3 - Modificando el DOM

# Advertencia sobre XSS

**¡Advertencia!!!!!**  
Aunque los navegadores modernos te protegen contra XSS (Cross-Site Scripting) y desactivan la ejecución de scripts al ser insertados, **nunca insertes HTML obtenido de fuentes no confiables**, como bases de datos, formularios o entradas de usuario, sin limpiarlo primero. Esto podría generar riesgos de seguridad en navegadores antiguos o desprotegidos.

Aquí puedes ver tres formas de prevenir la ejecución de scripts maliciosos:

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

# 5 - Eventos

Un **evento** es una acción o cambio que ocurre en una página web o en el navegador, ya sea por interacción del usuario o por procesos del sistema. Podemos asociar acciones con eventos como:
    - La página termina de cargar
    - El usuario hace clic en un botón
    - El usuario pasa el cursor por encima de un desplegable
    - El usuario envía un formulario
    - El usuario presiona una tecla en su teclado

## Conceptos clave
- **Manejador de eventos:** Una función de JavaScript que se ejecuta cuando ocurre un evento.
- **Escucha de eventos:** Una interfaz que ‘escucha’ un evento específico en un elemento y ejecuta el callback asociado cuando ocurre.

## 5.1- Eventos más comunes
- **Eventos del ratón**:
  - `click`: el usuario hace clic en un elemento.
  - `dblclick`: el usuario hace doble clic.
  - `mouseover`: el ratón pasa por encima de un elemento.
  - `mouseout`: el ratón deja un elemento.
  - `mousemove`: el ratón se mueve dentro de un elemento.
  - `mouseenter`: Similar a `mouseover`, pero no se propaga a los elementos hijos.
  - `mouseleave`: Similar a `mouseout`, pero no se propaga a los elementos hijos.
  - `contextmenu`: el usuario hace clic derecho (abre el menú contextual).

- **Eventos del teclado**:
  - `keydown`: el usuario presiona una tecla.
  - `keyup`: el usuario suelta una tecla.

- **Eventos de formulario**:
  - `submit`: un formulario es enviado.
  - `change`: el valor de un campo de entrada cambia.
  - `input`: Similar a `change`, pero ocurre mientras el usuario está escribiendo.
  - `focus`: un campo de entrada recibe el foco.
  - `blur`: un campo pierde el foco.

- **Eventos de documento/ventana**:
  - `DOMContentLoaded`: Cuando el DOM está completamente cargado.
  - `load`: todos los recursos (imágenes, scripts, etc.) están completamente cargados.
  - `resize`: la ventana del navegador se redimensiona.
  - `scroll`: el usuario desplaza la página.

- **Eventos del portapapeles**:
  - `cut`: el usuario corta texto.
  - `copy`: el usuario copia texto.
  - `paste`: el usuario pega texto.

## 5.2- Manejo de eventos
Tres formas de trabajar con eventos:

  1. **Manejadores de eventos en línea**  
     *No recomendado.* Mezclar HTML y JavaScript hace que el mantenimiento sea difícil y no permite agregar varios manejadores para el mismo evento.
   ```html
    <button onClick="console.log('¡Saludos, criatura!')">Saludar</button>
    <button id="enviar" onclick="saludar()">Enviar</button>
    <script>
        let saludar = () => console.log ("¡Saludos, criatura!");
    </script>

    <button id="enviar" onclick="saludar()">Enviar</button>
    <script src="codigo.js"></script>
   ```

2. **Propiedades de manejador de eventos**  
   *No recomendado.* Algunos eventos no pueden ser asignados utilizando propiedades y solo permiten un manejador por evento.
   ```javascript
    let boton = document.querySelector("#formulario_contacto button");
    boton.onclick = function () { console.log("¡Saludos, criatura!"); };

    let boton=document.querySelector("button");
    let saludar = () => console.log ("¡Saludos, criatura!");
    boton.setAttribute("onclick", "saludar");
   ```

3. **Usando escuchadores de eventos**  
   *Recomendado.* Permite adjuntar más de un manejador al mismo evento, tiene control sobre cuándo se activa el evento y funciona incluso sin elementos HTML.
    ```javascript
    let boton=document.querySelector("#formulario_contacto button");
    boton.addEventListener("click", function (){        //it's click, not onclick
        console.log('¡Saludos, criatura!');
    });
    ```

## 5.3- Propagación y delegación

El estándar de los eventos DOM describe 3 fases de propagación de eventos:

1. **Fase de captura** – El evento baja completamente, buscando el manejador del evento, desde el objeto principal `Window > Document > HTML > ...` hasta llegar al elemento donde ocurrió el evento.
2. **Fase de destino** – El evento llega al elemento objetivo. No se maneja por separado; es parte tanto de la fase de captura como de la fase de burbujeo.
3. **Fase de burbujeo** – El evento sube completamente, buscando el manejador del evento, comenzando desde el elemento donde ocurrió el evento, pasando por cada contenedor padre hasta llegar a `HTML > Document > Window`.

Por defecto, todos los eventos utilizan la fase de burbujeo. Tienen su origen en el elemento que los creó y luego suben hasta el objeto Window, deteniéndose en el primer elemento que los maneje.

[Volver atrás](https://github.com/avianarios/codigo_DWEC/tree/main/unidad%205)
