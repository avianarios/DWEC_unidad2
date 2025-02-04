# Índice

El BOM (Browser Object Model) es un conjunto de objetos proporcionados por el navegador para interactuar con el entorno de la ventana del usuario. A diferencia del DOM, que se centra en la estructura del documento HTML, el BOM permite manipular elementos externos como la ventana, la barra de direcciones, el historial y la ubicación de la página.

Aunque el BOM no tiene un conjunto de reglas o un documento único que dicte cómo debe implementarse en todos los navegadores. Sin embargo, los navegadores más comunes (como Chrome, Firefox, Safari, etc.) han adoptado una implementación bastante similar de los objetos que mencioné (como window, navigator, location, etc.), de modo que los desarrolladores pueden usarlos con bastante confianza sabiendo que funcionarán de manera similar en la mayoría de los navegadores.

El BOM no es un estándar oficial, pero los navegadores lo implementan de manera similar. Sus principales objetos son:

1. [Objeto window](#1--objeto-window)
2. [Objeto screen](#2--objeto-screen)
3. [Objeto navigator](#3--objeto-navigator)
4. [Objeto location](#4--objeto-location)
5. [Objeto history](#5--objeto-history)
6. [Objeto localStorage](#6--objeto-localstorage)
7. [Objeto SessionStorage](#7--objeto-sessionstorage)
8. [Galletitas (cookies)](#8--galletitas-cookies)
9. [Objeto Performance](#9--objeto-performance)

-----

# 1- Objeto Window

El objeto `window` es uno de los componentes principales del **BOM (Browser Object Model)** y representa la ventana del navegador donde se ejecuta la página web. Es el objeto global en JavaScript en un entorno de navegador, por lo que se puede usar sus métodos y acceder a sus propiedades y objetos sin necesidad de referenciarlo explícitamente. Por ejemplo, las funciones como `window.alert()` y `window.setTimeout()` se pueden ejecutar con `alert()` y `setTimeout()`.

Como `window` es el objeto global en el navegador, todo lo que se define en el ámbito global (variables con var, funciones declaradas con function, objetos predefinidos como document, console, etc.) se convierte en una propiedad de `window` y se puede acceder a ellos como si fueran sus propiedades. Por ejemplo son accesibles desde el objeto `window`:

- Objetos:
    - `window.document`
    - `window.screen`
    - `window.navigator`
    - `window.location`
    - `window.history`
    - `window.localStorage`
    - `window.sessionStorage`
    - `window.console`
- Métodos
    - `window.setTimeout`
    - `window.setInterval`
    - `window.alert`
    - `window.confirm`
    - `window.prompt`
    - `window.open`
    - `window.resizeTo`
    - `window.resizeBy`
    - `window.moveTo`

 En el entorno del navegador, al acceder a un objeto o método del objeto `window` el navegador los resuelve automáticamente como propiedades de dicho objeto, ya que es el global. No es necesario escribir `window.document`, es posible escribir `document` porque internamente el navegador lo resuelve como `window.document`.

## Propiedades

Algunas de las propiedades más importantes del objeto `window` incluyen:
- **`window.innerHeight`**: altura del área visible dentro del navegador, en píxeles, excluyendo la barra de desplazamiento horizontal.

- **`window.innerWidth`**: ancho del área visible dentro del navegador, en píxeles, excluyendo la barra de desplazamiento vertical y las pestañas.

- **`window.outerHeight`**: altura total de la ventana del navegador, incluyendo las barras de herramientas y bordes.

- **`window.outerWidth`**: ancho total de la ventana del navegador, incluyendo las barras de herramientas y bordes.

- **`window.screenX`**: Distancia horizontal (en píxeles) desde el borde izquierdo de la pantalla hasta el borde izquierdo de la ventana del navegador.

- **`window.screenY`**: Distancia vertical (en píxeles) desde el borde superior de la pantalla hasta el borde superior de la ventana del navegador.


## Métodos

- **`window.setTimeout()`**: Ejecuta una función después de un retraso especificado.  
     ```javascript
     window.setTimeout(function() {
       alert("¡Hola después de 2 segundos!");
     }, 2000);
     ```

- **`window.setInterval()`**: Ejecuta una función repetidamente en intervalos de tiempo especificados.
    ```javascript
    let counter = 0;

    let intervalID = setInterval(() => {
        console.log(`Segundos transcurridos: ${counter}`);
        counter++;
    }, 1000);  // Se ejecuta cada 1000 ms (1 segundo)
    ```

- **`window.cleartimeout()`**: Cancela un temporizador configurado con setTimeout(). Es necesario para evitar la ejecución de la función programada si se desea interrumpirla antes de que se complete.
    ```javascript
    setTimeout(() => {
        clearInterval(intervalID);  // Detiene la ejecución repetida (ver ejemplo anterior)
        console.log("Intervalo detenido");
    }, 5000);
    ```

- **`window.alert()`**: Muestra un cuadro de diálogo de alerta con un mensaje.  
     ```javascript
     window.alert("¡Hola, mundo!");
     ```

- **`window.confirm()`**: Muestra un cuadro de diálogo con un mensaje y dos botones (Aceptar y Cancelar). Devuelve `true` si el usuario hace clic en Aceptar y `false` si hace clic en Cancelar.

- **`window.prompt()`**: Muestra un cuadro de diálogo que solicita al usuario ingresar un valor. Devuelve el valor ingresado o `null` si el usuario cancela.

- **`window.open()`**: Abre una nueva ventana del navegador.  
     ```javascript
     let miVentana=window.open("https://www.ejemplo.com", "_blank");
     ```

- **`window.resizeTo(anchura,altura)`**: Cambia el tamaño de la ventana del navegador a las dimensiones especificadas (en píxeles).
    ```javascript
    miVentana.resizeTo(800, 600);        // Cambia el tamaño de la ventana a 800x600 píxeles
    ```

- **`window.resizeBy(aumentoAnchura,aumentoAltura)`**: Cambia el tamaño de la ventana del navegador en relación al tamaño actual de la ventana. Los valores de aumentoAnchura y aumentoAltura se suman a las dimensiones actuales de la ventana.
    ```javascript
    miVentana.resizeBy(200, 100);      // Aumenta el tamaño de la ventana en 200 píxeles de ancho y 100 píxeles de alto
    ```

- **`window.moveTo(x,y)`**: Mueve una ventana emergente a una nueva posición en la pantalla del navegador. Permite especificar las coordenadas en el eje X (horizontal) y en el eje Y (vertical) a las que debe trasladarse la ventana.
    ```javascript
    let miVentana = window.open("https://www.example.com", "miVentana", "width=500, height=500");
    miVentana.moveTo(100, 100); // Mueve la ventana a la posición (100, 100) en la pantalla
    ```

Restricciones de seguridad del navegador: Muchos navegadores modernos tienen restricciones de seguridad que impiden que las ventanas emergentes se muevan o modifiquen una vez abiertas, especialmente si no son originadas por una acción explícita del usuario (por ejemplo, un clic). Esto puede variar dependiendo del navegador y sus configuraciones de seguridad.

Las ventanas emergentes son controladas por el navegador: A veces, los navegadores bloquean las ventanas emergentes automáticamente, o si las permiten, limitan lo que pueden hacer. 

Firefox tiene configuraciones más estrictas para controlar las ventanas emergentes y las acciones que puedes realizar sobre ellas, por razones de seguridad. Esto incluye limitar el movimiento y el cambio de tamaño de las ventanas emergentes, sobre todo si se abre una ventana en un contexto no completamente "confiable" o si hay un retraso en la ejecución de los comandos.



## Eventos principales

- **`window.onload`**: Se dispara cuando la página ha terminado de cargarse.
- **`window.onresize`**: Se dispara cuando se cambia el tamaño de la ventana.
- **`window.onscroll`**: Se dispara cuando el usuario desplaza la página.
- **`window.onbeforeunload`**: Se dispara antes de que la página se cierre o se recargue.


**Ejemplo de uso:**

```javascript
// Cambiar la URL de la página
window.location.href = "https://www.nueva-url.com";

// Mostrar la ubicación de la ventana
console.log("Ancho de la ventana:", window.innerWidth);
console.log("Alto de la ventana:", window.innerHeight);

// Redirigir después de 3 segundos
window.setTimeout(function() {
  window.location.href = "https://www.ejemplo.com";
}, 3000);
```

---

# 2- Objeto `screen`

El objeto `screen` proporciona información sobre la pantalla del usuario, como su resolución, dimensiones, orientación y más. Es útil para adaptar la interfaz de usuario a las características de la pantalla del dispositivo.

## Propiedades

- **`screen.width`**: Devuelve el ancho total de la pantalla en píxeles. Este valor incluye toda la pantalla, no solo el área visible del navegador.
  ```javascript
  console.log(screen.width);
  ```

- **`screen.height`**: Devuelve la altura total de la pantalla en píxeles. Al igual que `screen.width`, este valor representa toda la pantalla.
  ```javascript
  console.log(screen.height);
  ```

- **`screen.availWidth`**: Devuelve el ancho disponible de la pantalla en píxeles, excluyendo áreas ocupadas por las interfaces del sistema operativo como la barra de tareas.
  ```javascript
  console.log(screen.availWidth);
  ```

- **`screen.availHeight`**: Devuelve la altura disponible de la pantalla en píxeles, excluyendo áreas ocupadas por las interfaces del sistema operativo como la barra de tareas.
  ```javascript
  console.log(screen.availHeight);
  ```

- **`screen.colorDepth`**: Devuelve la profundidad de color de la pantalla en bits por píxel. Indica cuántos colores puede mostrar la pantalla.
  ```javascript
  console.log(screen.colorDepth);
  ```

- **`screen.pixelDepth`**: Devuelve la profundidad de píxeles de la pantalla en bits por píxel. En la mayoría de los casos, es igual a `screen.colorDepth`.
  ```javascript
  console.log(screen.pixelDepth);  // Ejemplo: 24
  ```

- **`screen.orientation`**: Devuelve un objeto que contiene información sobre la orientación de la pantalla, como el ángulo `angle` y el tipo de orientación `type` (horizontal o vertical).
  ```javascript
  if (screen.orientation) {
    console.log(screen.orientation.type);  // Ejemplo: "landscape-primary"
  } else {
    console.log("Orientación no disponible");
  }
  ```

```javascript
console.log("Ancho total de la pantalla: " + screen.width);
console.log("Altura total de la pantalla: " + screen.height);
console.log("Ancho disponible para el contenido: " + screen.availWidth);
console.log("Altura disponible para el contenido: " + screen.availHeight);
console.log("Profundidad de color: " + screen.colorDepth);
console.log("Profundidad de píxeles: " + screen.pixelDepth);

if (screen.orientation) {
  console.log("Orientación de la pantalla: " + screen.orientation.type);
} else {
  console.log("Orientación no disponible");
}
```

## Notas
- El objeto `screen` no tiene métodos asociados; solo proporciona información sobre la pantalla.
- Las propiedades de `screen` reflejan la resolución de la pantalla física y no cambian en función de la ventana del navegador.
- La propiedad `screen.orientation` puede no estar disponible en todos los navegadores o dispositivos, por lo que se recomienda verificar su existencia antes de usarla.

---

# 3- Objeto `navigator`

El objeto `navigator` proporciona información sobre el navegador del usuario y su entorno. Se accede a través de `window.navigator` y contiene varias propiedades y métodos útiles.

## Propiedades

Algunas de las propiedades más importantes de navigator son:
  - **`navigator.userAgent`**: Devuelve una cadena con información sobre el navegador y el sistema operativo. Es útil para ofrecer funcionalidad dependiendo del navegador.
    ```javascript
    console.log(navigator.userAgent);
    // Ejemplo de salida: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    ```
  - **`navigator.userAgentData`**: Es una API moderna que proporciona información estructurada sobre el navegador y el dispositivo del usuario. Está diseñada para reemplazar el uso de navigator.userAgent en aplicaciones modernas.
    ```javascript
      if (navigator.userAgentData) {
        console.log(navigator.userAgentData.brands); // Información de las marcas del navegador
        console.log(navigator.userAgentData.platform); // Plataforma del sistema operativo
        console.log(navigator.userAgentData.mobile); // Si es un dispositivo móvil

        // Obtener información detallada
        navigator.userAgentData.getHighEntropyValues(["platformVersion"])
            .then((data) => {
                console.log("Versión del sistema operativo:", data.platformVersion);
            });
      } else {
          console.log("La API userAgentData no está soportada en este navegador.");
      }
      ```
  - **`navigator.language`**: Indica el idioma preferido del usuario (ejemplo: "es-ES").

  - **`navigator.languages`**: Devuelve una matriz con los idiomas preferidos en orden de preferencia.

  - **`navigator.onLine`**: Retorna true si el navegador tiene conexión a Internet y false si no.
    ```javascript
    if (navigator.onLine) {
        console.log("Estás conectado a Internet.");
    } else {
        console.log("No hay conexión a Internet.");
    }
    ```

  - **`navigator.cookieEnabled`**: Indica si las cookies están habilitadas en el navegador.

  - **`navigator.geolocation`**: Proporciona acceso a la API de geolocalización, que permite obtener la ubicación geográfica del usuario mediante los siguientes métodos:
    - `getCurrentPosition(funcionExito, funcionError, Opciones)`: Devuelve la posición actual una sola vez
    - `watchPosition(funcionExito, funcionError, Opciones)`: Obtiene la ubicación de manera continua.
    - `clearWatch(id)`: Detiene la observación iniciada con `watchPosition()`.

    Si la ubicación no se puede obtener, `funcionError` recibe un objeto error con una de estas propiedades:
    - `error.PERMISSION_DENIED`: El usuario denegó el permiso.
    - `error.POSITION_UNAVAILABLE`: No se pudo determinar la ubicación.
    - `error.TIMEOUT`: Se agotó el tiempo de espera.

    ```javascript
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
          (position) => {
              document.getElementById("latitude").textContent = position.coords.latitude;
              document.getElementById("longitude").textContent = position.coords.longitude;
          },
          (error) => {
              alert("Error al obtener la ubicación: " + error.message);
          }, { enableHighAccuracy: true }
      );
    } else {
      alert("Geolocalización no soportada en este navegador.");
    }
    ```

  - **`navigator.mediaDevices`**: Proporciona acceso a los dispositivos multimedia (como cámaras y micrófonos) a través de la API MediaDevices.

  - **`navigator.hardwareConcurrency`**: Devuelve el número de núcleos de procesamiento lógicos disponibles en el dispositivo.

  - **`navigator.deviceMemory`**: Devuelve la cantidad de memoria RAM del dispositivo en gigabytes.

  - **`navigator.connection`**: Proporciona información sobre la conexión de red del usuario, como el tipo de conexión (Wi-Fi, 4G, etc.) y la velocidad estimada.

## Métodos

  - **`navigator.geolocation.getCurrentPosition()`**: Obtiene la posición actual del usuario. Recibe una función de callback que se ejecuta cuando se obtiene la ubicación.
    ```javascript
    navigator.geolocation.getCurrentPosition((position) => {
        console.log("Latitud:", position.coords.latitude);
        console.log("Longitud:", position.coords.longitude);
    });
    ```

  - **`navigator.geolocation.watchPosition()`**: Observa la posición del usuario y ejecuta una función de callback cada vez que la ubicación cambia.

  - **`navigator.mediaDevices.getUserMedia()`**: Solicita acceso a los dispositivos multimedia del usuario, como la cámara o el micrófono. Devuelve una promesa que resuelve con un objeto MediaStream.
    ```javascript
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
          console.log("Acceso a la cámara concedido.");
      })
      .catch((error) => {
          console.error("Error al acceder a la cámara:", error);
      });
    ```

  - **`navigator.clipboard.writeText()`**: Escribe texto en el portapapeles del usuario. Devuelve una promesa que se resuelve cuando el texto se ha copiado correctamente.

  - **`navigator.clipboard.readText()`**: Lee el texto almacenado en el portapapeles del usuario. Devuelve una promesa que resuelve con el texto leído.

  - **`navigator.vibrate()`**: Hace vibrar el dispositivo (si es compatible). Recibe un patrón de vibración en milisegundos.

  - **`navigator.share()`**: Permite compartir contenido (como enlaces o archivos) a través de las opciones de compartir del dispositivo. Devuelve una promesa.


## notas importantes
  - Algunas propiedades y métodos pueden no estar disponibles en todos los navegadores o dispositivos.
  - El acceso a ciertas funcionalidades (como la geolocalización o los dispositivos multimedia) requiere el permiso del usuario.
  - El objeto `navigator` es de solo lectura, lo que significa que no se pueden modificar sus propiedades directamente.
  - Algunas propiedades, como `navigator.userAgent`, pueden ser modificadas por el usuario o por extensiones del navegador, por lo que no son fiables. Por tanto, no se puede fiar en detectar el tipo de navegador así:
  ```javascript
  if (window.navigator.userAgent.includes("Chrome")){
      //haz algo
  }

  //Es mejor intentar detectar la funcionalidad que se necesite (detección de capacidades)
  if( typeof window.addEventListener === 'function' ) {
    // let's use addEventListener
  } else {
      // addEventListener is not supported, use another way
  }
  ```

  ----

# 4- Objeto `location`


El objeto `location` proporciona información sobre la URL de la página actual. También permite cambiar la URL y redirigir al navegador.

## Propiedades

- **`location.href`**: Devuelve o establece la URL completa de la página actual, agregándola al historial
  ```javascript
  console.log(location.href);
  location.href = "https://www.ejemplo.com";
  ```

- **`location.protocol`**: Devuelve el protocolo de la URL (por ejemplo, `http:` o `https:`).
  ```javascript
  console.log(location.protocol);
  ```

- **`location.host`**: Devuelve el nombre de host y el puerto (si está especificado) de la URL.
  ```javascript
  console.log(location.host);
  ```

- **`location.hostname`**: Devuelve solo el nombre de host sin el puerto.
```javascript
console.log(location.hostname);
```

- **`location.port`**: Devuelve el puerto de la URL.
  ```javascript
  console.log(location.port);
  ```

- **`location.pathname`**: Devuelve la ruta de la URL.
```javascript
console.log(location.pathname);
```

- **`location.search`**: Devuelve la cadena de consulta (query string) de la URL, incluida la "?".
```javascript
console.log(location.search);
```

- **`location.hash`**: Devuelve el fragmento de la URL, incluida la "#".
```javascript
console.log(location.hash);
```

## Métodos

- **`location.reload()`**: Recarga la página actual.
```javascript
location.reload();
```

- **`location.replace()`**: Carga una nueva URL, reemplazando la página actual en el historial. No se podrá volver a la página anterior utilizando el botón de "atrás" del navegador.
```javascript
location.replace("https://www.ejemplo.com");
```

- **`location.assign()`**: Carga una nueva URL, pero mantiene la página actual en el historial.
```javascript
location.assign("https://www.ejemplo.com");
```

## Notas
- Al modificar `location.href` o usar `location.assign()`, el navegador redirige a la nueva URL.
- El método `replace()` reemplaza la página actual en el historial, mientras que `assign()` mantiene la página actual en el historial.

----

# 5- Objeto history

El objeto `history` permite interactuar con el historial de navegación del navegador y almacenar información asociada al estado de la página actual mediante un objeto de datos, sin recargarla. Dicho objeto se puede recuperar cuando el usuario navega hacia atrás o adelante. Se trata de una forma de almacenar información asociada a la la página visitada que tiene diferencias respecto a otros dos objetos usados para almacenar información, `localStorage` y `sessionStorage`

Este objeto es útil para aplicaciones de una sola página (SPA) donde se necesita manipular el historial sin recargar la página.


## Métodos

- **`history.back()`**: Regresa a la página anterior en el historial.
  ```javascript
  history.back();
  ```

- **`history.forward()`**: Avanza a la siguiente página en el historial.
  ```javascript
  history.forward();
  ```

- **`history.go(n)`**: Mueve el historial en la dirección especificada por `n` (positivo para avanzar, negativo para retroceder).
  ```javascript
  history.go(-1); // Regresa una página
  history.go(2);  // Avanza dos páginas
  ```

Al navegar entre páginas el navegador sólo recuerda las URL, pero los siguientes métodos, `history.pushState()` y `history.replaceState()`, permiten guardar información adicional que se mantiene accesible cuando el usuario usa los botones de "atrás" y "adelante" del navegador. Esto es un método fáil de mantener datos en el historial sin necesidad de usar `localStorage`, `sessionStorage` o hacer peticiones al servidor. Esta información se puede obtener leyendo la propiedad `history.state`

- **`history.pushState(state, title, url)`**: Agrega una nueva entrada al historial compuesta de un objeto, un título y una URL y añade la URL visible en la barra de direcciones sin recargar la página.
  ```javascript
  history.pushState({ page: 2 }, "Página 2", "?page=2");
  console.log(history.state); // { page: 2 }
  ```

- **`history.replaceState(state, title, url)`**: Reemplaza la entrada actual en el historial por una compuesta de un objeto, un título y una URL.
  ```javascript
  history.replaceState({ page: 3 }, "Página 3", "?page=3");
  console.log(history.state); // { page: 3 }
  ```

¿Para qué se usa eso?
- Navegar dentro de una aplicación sin perder el estado actual
- Permitir que el usuario comparta enlaces específicos como, por ejemplo, de una foto en concreto. Con el siguiente código, si el usuario comparte https://miweb.com?imagen=5, al abrirlo se  mostrará la imagen correcta.
  ```javascript
  function verImagen(id) {
    history.pushState({ imagen: id }, "Imagen " + id, "?imagen=" + id");
  }
  ```
- En formularios de varios pasos, se puede cambiar la URL en cada paso sin perder los datos ingresados.
- Actualizar la URL sin generar tráfico innecesario, siempre que sean cambios pequeños.

## Propiedades

- **`history.length`**: Devuelve el número de elementos en el historial de sesión, incluyendo la página actual.
  ```javascript
  console.log(history.length);
  ```

- **`history.state`**: Devuelve la información de estado (el objeto) asociado con la entrada de historial activa (la que hay en la URL actualmente).
  ```javascript
  history.pushState({ page: 1 }, "Página 1", "?page=1");
  console.log(history.state); // { page: 1 }
  ```

## Eventos Relacionados
  - **`popstate`**: Se dispara cuando el usuario navega por el historial (por ejemplo, usando los botones de adelante/atrás del navegador).
  ```javascript
  window.addEventListener('popstate', function(event) {
    console.log('Navegación en el historial:', event.state);
  });
  ```

--------

# 6- Objeto localStorage

El objeto `localStorage` permite almacenar datos de manera persistente en el navegador del usuario. 

## Características:
1. **Vida útil**: Los datos almacenados permanecen en el navegador hasta que se eliminan explícitamente.
2. **Alcance**: Sólo las páginas del mismo origen (protocolo + dominio + puerto) pueden acceder a los datos.
3. **Capacidad**: La mayoría de los navegadores modernos permiten almacenar hasta **5 MB** de datos por origen.
4. **Tipo de datos**: Sólo se puede almacenar cadenas de texto (`string`). Para almacenar objetos hay que convertirlos a texto.
5. **Disponibilidad**: Los datos están disponibles en todas las pestañas y ventanas del mismo origen.


## Métodos

- **`localStorage.setItem(key, value)`**: Almacena un valor en `localStorage` bajo una clave específica.
     ```javascript
     localStorage.setItem("nombre", "Juan");
     ```

- **`localStorage.getItem(key)`**: Recupera el valor almacenado bajo una clave específica.
     ```javascript
     const nombre = localStorage.getItem("nombre");
     console.log(nombre); // "Juan"
     ```

- **`localStorage.removeItem(key)`**: Elimina un elemento de `localStorage` por su clave.
     ```javascript
     localStorage.removeItem("nombre");
     ```

- **`localStorage.clear()`**: Elimina todos los elementos almacenados en `localStorage` para el origen actual.
     ```javascript
     localStorage.clear();
     ```

- **`localStorage.key(index)`**: Devuelve el nombre de la clave en la posición especificada.
     ```javascript
     const primeraClave = localStorage.key(0);
     console.log(primeraClave);
     ```

## Propiedades

- **`localStorage.length`**: Devuelve el número de elementos almacenados en `localStorage`.
     ```javascript
     const cantidad = localStorage.length;
     console.log(cantidad);
     ```

## Eventos Relacionados

Cuando se modifican los datos en `localStorage`, se dispara un evento `storage` en otras ventanas o pestañas del mismo origen. Esto es útil para sincronizar datos entre pestañas.
```javascript
window.addEventListener("storage", (event) => {
    console.log("Cambio en localStorage:", event.key, event.newValue);
});
```

## Almacenamiento de Objetos y Arrays

Dado que `localStorage` solo puede almacenar cadenas, para guardar objetos o arrays, hay que convertirlos a JSON usando `JSON.stringify()` al guardar y `JSON.parse()` al recuperar.

  ```javascript
  // Guardar un objeto
  const usuario = { nombre: "Juan", edad: 30 };
  localStorage.setItem("usuario", JSON.stringify(usuario));

  // Recuperar el objeto
  const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
  console.log(usuarioGuardado); // { nombre: "Juan", edad: 30 }
  ```

## Limitaciones y consideraciones
  - Seguridad: No se debe almacenar información sensible (como contraseñas o tokens) en `localStorage`, ya que es accesible desde JavaScript y puede ser vulnerable a ataques XSS (Cross-Site Scripting).
  - Sincronización: Los cambios en `localStorage` no se sincronizan automáticamente entre diferentes dispositivos o navegadores.

----

# 7- Objeto sessionStorage

El objeto `sessionStorage` permite almacenar datos en el navegador de manera temporal, durante la duración de la sesión de la página. 

## Características
1. **Vida útil**: Los datos sólo son válidos durante la sesión de la página. Si se cierra la pestaña o ventana del navegador, los datos se pierden.
2. **Alcance**: Sólo las páginas del mismo origen (protocolo + dominio + puerto) pueden acceder a los datos.
3. **Capacidad**: La mayoría de los navegadores modernos permiten almacenar hasta **5 MB** de datos por origen.
4. **Tipo de datos**: Sólo se puede almacenar cadenas de texto (`string`). Para almacenar objetos hay que convertirlos a texto.
5. **Disponibilidad**: Los datos sólo están disponibles para la pestaña que lo creó. Cualquier otra pestaña NO puede acceder a los datos, aunque provenga del mismo origen. 

Ejemplos:
  - Misma pestaña, mismo origen:
    - Abres https://www.ejemplo.com/pagina1 y almacenas algo en sessionStorage.
    - Navegas a https://www.ejemplo.com/pagina2.
    - El sessionStorage sigue siendo accesible, ya que el origen no ha cambiado.
  - Misma pestaña, origen diferente:
    - Abres https://www.ejemplo.com y almacenas algo en sessionStorage.
    - Navegas a https://www.otroejemplo.com.
    - El sessionStorage se restablece, ya que el origen ha cambiado.
  - Dos pestañas, mismo origen:
    - Abres https://www.ejemplo.com en dos pestañas diferentes.
    - Cada pestaña tendrá su propia instancia de sessionStorage, y los datos no se compartirán entre ellas.

## Métodos

- **`sessionStorage.setItem(key, value)`**: Almacena un valor asociado a una clave.
  ```javascript
  sessionStorage.setItem('nombre', 'Juan');
  ```

- **`sessionStorage.getItem(key)`**: Recupera el valor asociado a una clave.
  ```javascript
  let nombre = sessionStorage.getItem('nombre');
  console.log(nombre); // Output: Juan
  ``` 

- **`sessionStorage.removeItem(key)`**: Elimina el par clave-valor asociado a la clave especificada.
  ```javascript
  sessionStorage.removeItem('nombre');
  ``` 

- **`sessionStorage.clear()`**: Elimina todos los pares clave-valor almacenados en el `sessionStorage`.
  ```javascript
  sessionStorage.clear();
  ``` 

- **`sessionStorage.key(index)`**: Devuelve la clave en la posición especificada.
  ```javascript
  sessionStorage.key(3);
  ``` 

## Propiedades

- **`sessionStorage.length`**: Devuelve el número de pares clave-valor almacenados en el `sessionStorage`.

## Almacenamiento de Objetos y Arrays

Dado que `sessionStorage` solo puede almacenar cadenas, si deseas guardar objetos o arrays, debes convertirlos a JSON usando `JSON.stringify()` al guardar y `JSON.parse()` al recuperar.

  ```javascript
  // Guardar un objeto
  const usuario = { nombre: "Juan", edad: 30 };
  sessionStorage.setItem("usuario", JSON.stringify(usuario));

  // Recuperar el objeto
  const usuarioGuardado = JSON.parse(sessionStorage.getItem("usuario"));
  console.log(usuarioGuardado); // { nombre: "Juan", edad: 30 }
  ```

-----

# 8- Galletitas (Cookies)

Las galletitas (`cookies`) son pequeños fragmentos de datos que los sitios web almacenan en el navegador del usuario. Se utilizan principalmente para recordar información sobre el usuario, como preferencias, sesiones de inicio de sesión o datos de seguimiento, ya que HTTP es un protocolo sin estado. En realidad no pertecen al BOM, sino que pertenecen al objeto `document`, que define el DOM, pero como éste se define en el ámbito global, se convierte en una propiedad del objeto `window` y se puede acceder a él mediante `window.document` o `document`

Cada vez que el usuario realiza una solicitud al servidor, el navegador devuelve las cookies que pertenecen a ese dominio mediante el encabezado `cookie`. Pueden ser enviadas con cualquier tipo de recurso, no sólo páginas web y se asocian a un dominio. Existen, por tanto, dos tipos de cookies según su dominio de origen:
  - Cookies de origen (first-party): creadas por el servidor del dominio actual.
  - Cookies de terceros (third-party): enviadas por servidores con dominios diferentes al que el usuario está visitando. Estas suelen utilizarse con fines de publicidad y seguimiento, pero actualmente los navegadores están limitando su uso por razones de privacidad.

## ¿Para qué se usan las cookies?

Las cookies tienen varios usos comunes:
- **Mantener la sesión del usuario**: Por ejemplo, recordar que un usuario ha iniciado sesión.
- **Almacenar preferencias**: Como el idioma o el tema de un sitio web.
- **Rastreo y análisis**: Para recopilar datos sobre el comportamiento del usuario.

## Características

- **Vida útil**: Los datos se almacenan hasta la fecha de expiración definida. Si no está definida, se eliminarán cuando se cierre el navegador.
- **Alcance**: Sólo las páginas del mismo dominio pueden acceder a las galletitas, aunque no se restringen por protocolo ni puerto.
- **Capacidad**: Suelen estar limitadas a unos 4 KB por galletita, incluyendo nombre, valor y atributos.
- **Tipo de datos**: Sólo pueden almacenar cadenas de texto (string). Para almacenar objetos, es necesario convertirlos a texto.
- **Disponibilidad**: Pueden ser accesibles desde diferentes pestañas, ventanas y sesiones del navegador, siempre que cumplan las restricciones del dominio y los atributos establecidos.

## ¿Cómo funcionan las cookies?

1. **El servidor envía una cookie**: Cuando un usuario visita un sitio web, el servidor puede enviar una cookie al navegador mediante el encabezado HTTP `Set-Cookie`.
2. **El navegador almacena la cookie**: El navegador guarda la cookie y la envía de vuelta al servidor en cada solicitud subsiguiente mediante el encabezado `Cookie`.

En el navegador, las cookies se pueden leer y escribir usando la propiedad `document.cookie`.

## Propiedades

- **`expires`**: Define la fecha de caducidad de la cookie. Formato: Fecha en formato UTC (ejemplo: Thu, 31 Dec 2024 12:00:00 UTC).

- **`max-age`**: Define la duración de la cookie en segundos (alternativa a expires).

- **`path`**: Define la ruta en la que la cookie es válida. Valor por defecto: La ruta actual del documento.

- **`domain`**: Define el dominio para el que la cookie es válida. Valor por defecto: El dominio actual. Si se especifica dominio.com, será accesible desde sub.dominio.com también.

- **`secure`**: Indica que la cookie solo se enviará sobre conexiones HTTPS.

- **`samesite`**: Controla si la cookie se envía en solicitudes entre sitios. Valores posibles:
  - `Strict`: La cookie sólo se envía si la solicitud viene del mismo dominio.
  - `Lax`: La cookie se envía si la solicitud viene del mismo dominio y en solicitudes entre sitios cuando el usuario pincha en enlaces, no cuando la web intenta descargar recursos de forma automática (descarga de imágenes, por ejemplo).
  - `None`: La cookie se envía en todas las solicitudes y requiere que `secure` esté habilitado.

- **`cookie`**: Es una propiedade que permite...
  - ...leer de ella para obtener todas las cookies. Contiene una cadena de texto con los valores `nombre=valor` de todas las cookies del dominio, separadas por punto y coma (;). NO se obtienen el resto de propiedades.
  - ...escribir en ella para crear nuevas cookies. Los campos que no se especifiquen toman los siguientes valores por defecto:
    - `expires` o `max-age`: se considera una cookie de sesión, eliminándose cuando el navegador se cierre.
    - `path`: será el directorio en el que está cuando se crea la cookie (en https://ejemplo.com/pagina1, el path es /pagina1)
    - `domain`: la cookie será válida sólo en el dominio en el que se creó.
    - `secure`: false
    - `samesite`: lax, es decir, se enviará en solicitudes de navegación de primer nivel.
  Esta propiedad NO permite modificar una cookie ya existente. Lo que hace si se le da el nombre de una que ya existe, en realidad, es crearla de nuevo. Por tanto, habría que darle los mismos parámetros.

  ```javascript
    document.cookie="usuario=Procopio"; //Crea una cookie de nombre "usuario" y valor "Procopio"
    document.cookie="direccion=calle pez"; //Crea una cookie de nombre "direccion" y valor "calle pez"
    console.log (document.cookie);  //Devuelve la cadena de texto "usuario=Procopio; direccion=calle pez"
    
    //Parece una modificación, pero en realidad la borrar y la crear de nuevo. Habría que especificar los mismos atributos para que fuera una modificación
    document.cookie="usuario=Patrocinio";
  ```

## Limitaciones de las cookies

- **Tamaño máximo**: 4 KB por cookie.
- **Número máximo**: Depende del navegador, pero suele ser alrededor de 50 cookies por dominio.
- **Seguridad**: Las cookies pueden ser vulnerables a ataques como XSS (Cross-Site Scripting) o CSRF (Cross-Site Request Forgery).

## Buenas prácticas

- **No almacenes información sensible**: Como contraseñas o datos personales.
- **Usa cookies seguras**: Siempre que sea posible, usa el atributo `Secure` y `SameSite`.
- **Respeta la privacidad del usuario**: Cumple con regulaciones como el GDPR.

---

| Característica       | `localStorage` | `sessionStorage` | `history.state` | `Cookies` |
|----------------------|----------------|------------------|-----------------|----------|
| **Persistencia**      | Los datos **NO se borran** al cerrar el navegador. | Los datos **se borran** al cerrar la pestaña o el navegador. | Los datos **se borran** al recargar la página o cambiar de URL. | Las cookies pueden **persister** según se haya definido el valor de `expires` o `max-age`. |
| **Alcance**           | Disponible en todas las pestañas que usen la misma URL/origen. | Solo disponible en la pestaña actual. | Solo disponible en la sesión del historial. | Accesibles en cualquier página del dominio si no se establece un `path` o `domain` específico. |
| **Capacidad**         | ~5-10 MB (depende del navegador). | ~5 MB. | Depende del navegador, pero suele ser más **limitado**. | Limitadas a **4 KB** por cookie, y el navegador puede almacenar varias cookies por dominio. |
| **Accesibilidad**     | Puede ser leído desde cualquier script en la misma página. | Solo accesible en la pestaña actual. | Solo accesible al moverse en el historial con `popstate`. | Se pueden acceder mediante JavaScript a través de `document.cookie`, pero no desde otros dominios (debido a la política de mismo origen). |
| **Seguridad**         | No se borra automáticamente, lo que puede ser un riesgo de privacidad. | Más seguro que `localStorage` porque los datos se eliminan al cerrar la pestaña. | Más seguro porque solo es accesible en la sesión de navegación. | Pueden ser **marcadas como HttpOnly** para evitar que sean accesibles a través de JavaScript, lo que mejora la seguridad. Además, pueden tener el atributo `secure` para ser transmitidas solo sobre HTTPS. |
| **Uso recomendado**   | Para guardar configuraciones de usuario a largo plazo, datos que deban persistir después de cerrar el navegador. | Para almacenar datos temporales que deben desaparecer al cerrar la pestaña. | Para manejar navegación dentro de una SPA o formularios con pasos. | Para almacenar datos que deban ser enviados al servidor en cada solicitud HTTP (como autenticación, preferencias del usuario, etc.). |

----

# 9- Objeto `performance`

El objeto `performance` proporciona una interfaz para acceder a varias funcionalidades relacionadas con el rendimiento de la página web. Estas funcionalidades incluyen la medición de la velocidad de carga y la ejecución de los recursos. Este objeto es útil para los desarrolladores a la hora de mejorar la experiencia del usuario, optimizar tiempos de carga, y hacer ajustes en el rendimiento general de la web.

## Métodos

- **`performance.now()`**: Devuelve el tiempo transcurrido en milisegundos desde que el documento fue cargado. Esta propiedad tiene una precisión mucho mayor que `Date.now()`, ya que no está afectada por el ajuste del reloj del sistema.
  ```javascript
  let inicio = performance.now();

  // Aquí va el código que quieres medir
  for (let i = 0; i < 1000000; i++) {}

  let fin = performance.now();
  console.log(`El código tardó: ${fin - inicio} milisegundos`);
  ```

- **`performance.mark()`**: Permite marcar un punto específico en el tiempo para poder medir el rendimiento de un bloque de código.
  ```javascript
  performance.mark('inicio');

  // Bloque de código a medir
  for (let i = 0; i < 1000000; i++) {}

  performance.mark('fin');
  ```

- **`performance.measure()`**: Después de marcar puntos con `performance.mark()`, se puede usar `performance.measure()` para medir el tiempo entre esos puntos específicos.
  ```javascript
  performance.measure('Medición1', 'inicio', 'fin');
  const medidas = performance.getEntriesByName('Medición1');
  console.log('Tiempo entre marcas:', medidas[0].duration);
  ```


- **`performance.clearMarks()`**: Elimina las marcas de rendimiento creadas con `performance.mark()`.
  ```javascript
  performance.clearMarks('inicio');
  performance.clearMarks('fin');
  ```

- **`performance.clearMeasures()`**: Elimina las mediciones de rendimiento creadas con `performance.measure()`.
  ```javascript
  performance.clearMeasures('Medición1');
  ```

## Ejemplo básico de uso

```javascript
// Marcar el inicio de una operación
performance.mark("start");

// Ejecutar alguna operación (por ejemplo, una función)
someFunction();

// Marcar el final de la operación
performance.mark("end");

// Medir el tiempo entre las marcas
performance.measure("operationDuration", "start", "end");

// Obtener el tiempo de la medición
const measures = performance.getEntriesByName("operationDuration");
console.log(measures[0].duration);
```

## Usos comunes

- **Análisis del rendimiento de carga**: Permite medir cuánto tarda en cargar la página o partes específicas de ella.
- **Optimización del tiempo de ejecución de funciones**: Ayuda a medir cuánto tiempo lleva ejecutar diferentes fragmentos de código.
- **Depuración y monitoreo**: Utilizado para identificar cuellos de botella en el rendimiento de las aplicaciones web.

## Consideraciones

- El objeto `performance` es útil en la mayoría de los navegadores modernos, pero algunas de sus propiedades pueden no estar disponibles o funcionar de manera diferente en navegadores más antiguos.
- Algunas propiedades, como `performance.memory`, no son compatibles con todos los navegadores.

## Conclusión

El objeto `performance` es una herramienta esencial para el análisis y la mejora del rendimiento de las aplicaciones web. Ofrece un control detallado sobre la medición de tiempos de ejecución y la supervisión de recursos.

[Volver atrás](https://github.com/avianarios/codigo_DWEC/tree/main/unidad%205)