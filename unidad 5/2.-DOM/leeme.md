# 2. DOM (Document Object Model)

## Contenidos
1. [Selección de elementos](#1--selección-de-elementos)
2. [Manipulación de atributos y propiedades](#2--manipulación-de-atributos-y-propiedades)
3. [Modificación del DOM](#3--modificación-del-dom)
4. Navegación por el DOM
5. [Eventos](#5--eventos)
    1. [Eventos comunes](#51--eventos-comunes)
    2. [Manejo de eventos](#52--manejo-de-eventos)
    3. [Delegando la gestión de eventos](#53--delegando-la-gestión-de-eventos)

------

El DOM (Document Object Model) es una representación en forma de árbol de un documento HTML o XML que permite a los scripts acceder y modificar su contenido, estructura y estilo. Es una interfaz que los navegadores proporcionan para manipular páginas web dinámicamente mediante JavaScript.

Proporciona una serie de objetos para representar los elementos de una web, métodos para modificarla y eventos para interactuar con ella siendo posible hacer lo siguiente:
  - Seleccionar nodos
  - Modificar su contenido
  - Modificar atributos
  - Crear y eliminar nodos
  - Reaccionar a eventos

## 1 -Selección de elementos

`Window` es el objeto global que representa la ventana del navegador web. `document` es una propiedad del objeto `window` que representa la página web cargada. Es el punto de entrada del DOM para acceder a cualquier elemento.

`document` también tiene propiedades que representan los elementos de la página web:
  - html
  - head
  - body

Los métodos de selección de etiquetas devuelven los siguientes tipos de objetos:
  - `HTMLElement` un nodo
  - `HTMLCollection` una colección de nodos
    - Actualizados dinámicamente si se realizan cambios en el DOM
    - Acceso por índice numérico, por nombre o por id
    - Recorrido como lista iterable
    - Se puede recorrer con for o con forEach si se convierte en Array (Array.from())
  - `NodeList`
    - No se actualiza si se realizan cambios en el DOM (excepto Node.childNodes)
    - Sólo se accede por índice numérico
    - Se puede recorrer con forEach

Los selectores que pueden devolver múltiples elementos SIEMPRE devuelven una lista o colección, incluso si hay uno o ningún nodo.

`NodeList` o `HTMLCollection` no son Arrays. Las principales diferencias podrían ser:
  - no se pueden usar métodos de array como push, pop, slice, join, shift...
  - Los elementos `HTMLCollection` son dinámicos, mientras que los Arrays son siempre estáticos.

Los métodos para seleccionar nodos son:
  - Aquellos que devuelven un `HTMLElement` (un único nodo) 
    - `document.getElementByID("id")`
    - `document.querySelector("selectorCSS")`
  - Aquellos que devuelven un `HTMLCollection` (colección viva):
    - `document.getElementsByTagName("etiqueta")`
    - `document.getElementsByClassName("clase")`
  - Aquellos que devuelven un `NodeList` (colección estática)
    - `document.getElementsByName("nombre")`
    - `document.querySelectorAll("selectorCSS")`

----

## 2- Manipulación de atributos y propiedades

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

## 3- Modificación del DOM

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

# 5- Eventos

Un **evento** es una acción o cambio que ocurre en una página web o en el navegador, ya sea por interacción del usuario o por procesos del sistema. Podemos asociar acciones con eventos como:
    - La página termina de cargar
    - El usuario hace clic en un botón
    - El usuario pasa el cursor por encima de un desplegable
    - El usuario envía un formulario
    - El usuario presiona una tecla en su teclado

## Conceptos clave
- **Manejador de eventos:** Una función de JavaScript que se ejecuta cuando ocurre un evento.
- **Escucha de eventos:** Una interfaz que ‘escucha’ un evento específico en un elemento y ejecuta la función de respuesta (callback function) asociado cuando ocurre.

## 5.1- Eventos comunes

**OJO: Esto no es un manual oficial. Aquí no se muestran todos los eventos ni todas sus propiedades, sino los más usados.**

### Tipos de eventos
A continuación se describen los eventos más comunes y cuándo se lanzan:

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
  - `submit`: se envía el formulario.
  - `change`: un campo de entrada pierde el foco y su contenido ha cambiado.
  - `input`: cada vez que el usuario interactúa con el campo, mientras éste mantenga el foco.
  - `focus`: Un elemento "enfocable" gana el foco cuando se convierte en el objetivo de interacción del usuario tras haber pinchado con el ratón, haber navegado con tabulador o haber usado la función element.focus(). Sólo puede haber un elemento con el foco en cada momento. Este evento sólo se propaga en la fase de captura, por lo que **no está recomendado**.  
  - `focusin`: Igual que focus, pero para la fase de burbujeo. **Recomendado**
  - `blur`: Un elemento pierde el foco cuando deja de ser el objetivo de interacción del usuario tras haber pinchado en otro elemento "enfocable" con el ratón, haber navegado con tabulador o haber usado la función element.focus(). Lo pierde porque otro lo ha ganado. Este evento sólo se propaga en la fase de captura, por lo que **no está recomendado**
  - `focusout`: Igual que `blur`, pero funciona sólo en la fase de burbujeo. **Recomendado**

  ¿Qué elementos son enfocables por defecto? 
  
  Los interactivos como input, button, a, textarea, select, etc. Se puede hacer enfocables a otros elementos no interactivos usando el atributo `tabindex`, pero no está recomendado porque no es el comportamiento que los usuarios esperan y puede resultar confuso, o mediante el método element.focus()

- **Eventos de documento/ventana**:
  - `DOMContentLoaded`: Cuando el DOM está completamente cargado, pero sin hojas de estilos, imágenes o subframes.
  - `load`: todos los recursos (imágenes, scripts, etc.) están completamente cargados.
  - `resize`: la ventana del navegador se redimensiona.
  - `scroll`: el usuario desplaza la página.

- **Eventos del portapapeles**:
  - `cut`: el usuario corta texto.
  - `copy`: el usuario copia texto.
  - `paste`: el usuario pega texto.

### Atributos de eventos

Cuando ocurre un evento, el navegador crea un objeto `event` que se pasa como argumento al manejador del evento. Los eventos tienen **atributos** que permiten trabajar con ellos. Dichos atributos dependen del tipo de evento, pero hay algunos que son comunes a todos los eventos. Algunos de ellos son los siguientes:

Cuando un evento se dispara, el navegador genera un objeto event (que será pasado como argumento al manejador del evento) que tiene una serie de atributos con información sobre él. Dichos atributos dependen del tipo de evento, pero hay algunos que son comunes a todos.

- **Atributos comunes** a todos los eventos:
  - `type`: el tipo de evento.
  - `isTrusted`: si el evento fue generado por el navegador (true) o mediante JavaScript (false)
  - `timeStamp`: momento en que ocurrió el evento expresado en milisegundos desde que se inició la carga de la página.
  - `target`: referencia al objeto donde ocurrió el evento.
  - `currentTarget`: referencia al objeto al que se ha asignado el manejador del evento.

  Tanto target como currentTarget, tienen los siguientes atributos:
  - `id`: el identificador del nodo del DOM.
  - `className`: el nombre de la clase.
  - `classList`: una lista de claes del elemento.
  - `value`: en elementos de formulario, contiene el valor que el usuario ha introducido.
  - `name`: el nombre del elemento (a veces en mayúsculas).
  - `type`: tipo del elemento (button, submit, etc.)
  - `href`
  - `alt`
  - `dataset`: accede a los atributos personalizados `data-`

- **Atributos de eventos de ratón**
  - `clientX`: Coordenada horizontal del puntero del ratón, relativa a la ventana del navegador.
  - `clientY`: Coordenada vertical del puntero del ratón, relativa a la ventana del navegador.
  - `screenX`: Coordenada horizontal del puntero del ratón, relativa a la pantalla.
  - `screenY`: Coordenada vertical del puntero del ratón, relativa a la pantalla.
  - `pageX`: La coordenada horizontal del puntero del ratón, relativa al documento completo (incluyendo el desplazamiento de la página).
  - `pageY`: La coordenada vertical del puntero del ratón, relativa al documento completo.
  - `offsetX`: La coordenada horizontal del puntero del ratón, relativa al borde izquierdo del elemento que ha disparado el evento.
  - `offsetY`: La coordenada vertical del puntero del ratón, relativa al borde superior del elemento que ha disparado el evento.
  - `button`: Indica qué botón del ratón se ha presionado (0: botón izquierdo, 1: botón central, 2: botón derecho).
  - `buttons`: Indica qué botones del ratón están presionados en el momento del evento. Es un valor numérico que usa una máscara de bits para representar los botones presionados.

- **Atributos de eventos de teclado**
  - `key`: El valor de la tecla que fue presionada, como "a", "Enter", "ArrowLeft", etc.
  - `altKey`: Un valor booleano que indica si la tecla Alt estaba presionada cuando ocurrió el evento.
  - `ctrlKey`: Un valor booleano que indica si la tecla Ctrl estaba presionada cuando ocurrió el evento.
  - `shiftKey`: Un valor booleano que indica si la tecla Shift estaba presionada cuando ocurrió el evento.
  - `metaKey`: Un valor booleano que indica si la tecla Meta (generalmente la tecla de "Windows" o "Command" en macOS) estaba presionada cuando ocurrió el evento.
  - `repeat`:  Un valor booleano que indica si la tecla se está repitiendo (por ejemplo, cuando se mantiene presionada una tecla).

- **Atributos de eventos de toque**
  - `targetTouches`: Devuelve una lista de los puntos de contacto actuales en el área de la pantalla.
  - `touches`: Devuelve todos los puntos de contacto en la pantalla en el momento del evento de toque.
  - `changedTouches`: Devuelve los puntos de contacto que han cambiado (por ejemplo, cuando un dedo se ha levantado de la pantalla).

- **Atributos de eventos de formulario**
  - `disabled`
  - `checked`
  - `files`: ficheros seleccionados en un campo de tipo `file`.


## 5.2- Manejo de eventos
Cuatro formas de trabajar con eventos:

  1. **Manejadores de eventos en línea**  
    **No recomendado.** Mezclar HTML y JavaScript dificulta el mantenimiento y no permite asociar múltiples manejadores al mismo evento.

   ```javascript
    let boton = document.querySelector("button");
    boton.onclick = function () { console.log("¡Saludos, criatura!"); };
   ```

  2. **Manejador como propiedad del evento**
    **No recomendado.** Las funciones se asignan a eventos a través de propiedades como onclick.
    **Problemas:** Solo se puede asociar un manejador por evento, lo que limita la flexibilidad. Además, este enfoque no permite agregar múltiples oyentes ni un control detallado sobre el manejo del evento.
  
  ```javascript
    let boton=document.querySelector("button");
    boton.setAttribute("onclick", "console.log('saludos, criatura')");  //arrow functions doesn't work
   ```

  3. **Asignación de eventos tipo en línea mediante atributos**
    **La peor opción.** Establece el atributo del evento directamente en el DOM como una cadena, la cual se evalúa como código cuando el evento ocurre.
    **Problemas:** La cadena se evalúa en el contexto global, lo que puede generar vulnerabilidades de seguridad o problemas con this, no se pueden pasar funciones complejas como callbacks y sólo se permite un manejador por evento.

    ```javascript
    let boton = document.querySelector("button");
    boton.setAttribute("onclick", "console.log('¡Saludos, criatura!')"); // Las funciones flecha no funcionan aquí
    ```

  4. **Usando escuchadores de eventos**  
    **Recomendado.** Este método permite asociar múltiples manejadores al mismo evento. Ofrece un mayor control sobre el manejo de eventos, es más flexible, no depende de atributos HTML o cadenas de texto, permite usar eventos personalizados y separa lógica de presentación. 

    ```javascript
    let boton = document.querySelector("#formulario_contacto button");
    boton.addEventListener("click", function () { // Es "click", no "onclick"
        console.log('¡Saludos, criatura!');
    });
    ```

    Si se necesita que `this` dentro de un manejador de evento haga referencia al elemento que disparó el evento, hay que usar funciones tradicionales en vez de funciones de flecha que pierden esa referencia y hacen que `this` apunte al contexto de ejecución global. Otra opción para referenciar al objeto que disparó el evento es usar `event.target` en funciones de flecha.

## 5.3- Delegando la gestión de eventos

El estándar de los eventos DOM describe 3 fases de propagación de eventos:

1. **Fase de captura** – El evento baja completamente, buscando el manejador del evento, desde el objeto principal `Window > Document > HTML > ...` hasta llegar al elemento donde ocurrió el evento.
2. **Fase de destino** – El evento llega al elemento objetivo. No se maneja por separado; es parte tanto de la fase de captura como de la fase de burbujeo.
3. **Fase de burbujeo** – El evento sube completamente, buscando el manejador del evento, comenzando desde el elemento donde ocurrió el evento, pasando por cada contenedor padre hasta llegar a `HTML > Document > Window`.

Por defecto, todos los eventos utilizan la fase de burbujeo. Tienen su origen en el elemento que los creó y luego suben hasta el objeto Window, deteniéndose en el primer elemento que los maneje.

[Volver atrás](https://github.com/avianarios/codigo_DWEC/tree/main/unidad%205)
