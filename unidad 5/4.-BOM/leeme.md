# Índice

1. [Principales objetos del DOM](#1--objeto-window)
2. [Objeto window](#2--objeto-window)
3. [Objeto screen](#3--objeto-screen)
4. [Objeto location](#4--objeto-location-en-javascript)
5. [Objeto history]
----


El BOM (Browser Object Model) es un conjunto de objetos proporcionados por el navegador para interactuar con el entorno de la ventana del usuario. A diferencia del DOM, que se centra en la estructura del documento HTML, el BOM permite manipular elementos externos como la ventana, la barra de direcciones, el historial y la ubicación de la página.

Aunque el BOM no tiene un conjunto de reglas o un documento único que dicte cómo debe implementarse en todos los navegadores. Sin embargo, los navegadores más comunes (como Chrome, Firefox, Safari, etc.) han adoptado una implementación bastante similar de los objetos que mencioné (como window, navigator, location, etc.), de modo que los desarrolladores pueden usarlos con bastante confianza sabiendo que funcionarán de manera similar en la mayoría de los navegadores.

# 1- Principales objetos del BOM

El BOM no es un estándar oficial, pero los navegadores lo implementan de manera similar. Sus principales objetos son:

1. `window`** Es el objeto global en el contexto del navegador y representa la ventana del navegador. Todos los demás objetos del BOM están dentro de `window` bien porque pertenecen a él o bien porque se ejecutan en el contexto global y el navegador los asocia a él.
2. `document`** El objeto que representa el documento HTML cargado en la ventana. Es la puerta de entrada al DOM.
3. `screen`** Contiene información sobre la pantalla del usuario. 
4. `navigator`** Proporciona información sobre el navegador y el sistema del usuario. 
5. `location`** Representa la URL actual y permite redireccionar.
6. `history`** Permite interactuar con el historial de navegación.
7. `localStorage`** Permite almacenar datos de forma persistente en el navegador.
8. `SessionStorage`** Similar a localStorage, pero los datos se eliminan cuando la sesión del navegador termina.
9. `window.console`** Accede a la consola del navegador, donde puedes ver los logs y depurar el código.

-----

# 2- Objeto Window

El objeto **`window`** es uno de los componentes principales del **BOM (Browser Object Model)** y representa la ventana del navegador donde se ejecuta la página web. Es el objeto global en JavaScript en un entorno de navegador, por lo que se puede usar sus métodos y acceder a sus propiedades y objetos sin necesidad de referenciarlo explícitamente. Por ejemplo, las funciones como `window.alert()` y `window.setTimeout()` se pueden ejecutar con `alert()` y `setTimeout()`.

Aunque hay algunas propiedades y objetos que no pertenecen al objeto window en el sentido estricto (es decir, no se definen explícitamente en el objeto window como propiedades y objetos propios), los navegadores asocian esos objetos con window, lo que significa que se pueden acceder como si fueran propiedades del objeto window. Por ejemplo son accesibles desde el objeto `window`:
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
- `window.innerHeight`: altura del contenido de la ventana, en píxeles, excluyendo la barra de desplazamiento horizontal.
- `window.innerWidth`: ancho del contenido de la ventana, en píxeles, excluyendo la barra de desplazamiento vertical.
- `window.outerHeight`: altura total de la ventana del navegador, incluyendo las barras de herramientas y bordes.
- `window.outerWidth`: ancho total de la ventana del navegador, incluyendo las barras de herramientas y bordes.
- `window.screenX` y `window.screenY`: coordenadas de la posición de la ventana en la pantalla, en relación con la esquina superior izquierda de la pantalla del dispositivo.


## Métodos

1. `window.setTimeout()` Ejecuta una función después de un retraso especificado.  
     ```javascript
     window.setTimeout(function() {
       alert("¡Hola después de 2 segundos!");
     }, 2000);
     ```

2. `window.setInterval()`  Ejecuta una función repetidamente en intervalos de tiempo especificados.
    ```javascript
    let counter = 0;

    let intervalID = setInterval(() => {
        console.log(`Segundos transcurridos: ${counter}`);
        counter++;
    }, 1000);  // Se ejecuta cada 1000 ms (1 segundo)
    ```

3. `window.cleartimeout()` Cancela un temporizador configurado con setTimeout(). Es necesario para evitar la ejecución de la función programada si se desea interrumpirla antes de que se complete.
    ```javascript
    setTimeout(() => {
        clearInterval(intervalID);  // Detiene la ejecución repetida (ver ejemplo anterior)
        console.log("Intervalo detenido");
    }, 5000);
    ```

4. `window.alert()` Muestra un cuadro de diálogo de alerta con un mensaje.  
     ```javascript
     window.alert("¡Hola, mundo!");
     ```

5. `window.confirm()` Muestra un cuadro de diálogo con un mensaje y dos botones (Aceptar y Cancelar). Devuelve `true` si el usuario hace clic en Aceptar y `false` si hace clic en Cancelar.

6. `window.prompt()` Muestra un cuadro de diálogo que solicita al usuario ingresar un valor. Devuelve el valor ingresado o `null` si el usuario cancela.

7. `window.open()` Abre una nueva ventana del navegador.  
     ```javascript
     let miVentana=window.open("https://www.ejemplo.com", "_blank");
     ```

8. `window.resizeTo(anchura,altura)` cambia el tamaño de la ventana del navegador a las dimensiones especificadas (en píxeles).
    ```javascript
    miVentana.resizeTo(800, 600);        // Cambia el tamaño de la ventana a 800x600 píxeles
    ```

9. `window.resizeBy(aumentoAnchura,aumentoAltura)` cambia el tamaño de la ventana del navegador en relación al tamaño actual de la ventana. Los valores de aumentoAnchura y aumentoAltura se suman a las dimensiones actuales de la ventana.
    ```javascript
    miVentana.resizeBy(200, 100);      // Aumenta el tamaño de la ventana en 200 píxeles de ancho y 100 píxeles de alto
    ```

10. `window.moveTo(x,y)` mueve una ventana emergente a una nueva posición en la pantalla del navegador. Permite especificar las coordenadas en el eje X (horizontal) y en el eje Y (vertical) a las que debe trasladarse la ventana.
    ```javascript
    let miVentana = window.open("https://www.example.com", "miVentana", "width=500, height=500");
    miVentana.moveTo(100, 100); // Mueve la ventana a la posición (100, 100) en la pantalla
    ```

Restricciones de seguridad del navegador: Muchos navegadores modernos tienen restricciones de seguridad que impiden que las ventanas emergentes se muevan o modifiquen una vez abiertas, especialmente si no son originadas por una acción explícita del usuario (por ejemplo, un clic). Esto puede variar dependiendo del navegador y sus configuraciones de seguridad.

Las ventanas emergentes son controladas por el navegador: A veces, los navegadores bloquean las ventanas emergentes automáticamente, o si las permiten, limitan lo que pueden hacer. 

Firefox tiene configuraciones más estrictas para controlar las ventanas emergentes y las acciones que puedes realizar sobre ellas, por razones de seguridad. Esto incluye limitar el movimiento y el cambio de tamaño de las ventanas emergentes, sobre todo si se abre una ventana en un contexto no completamente "confiable" o si hay un retraso en la ejecución de los comandos.


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

# 3- Objeto `screen`

El objeto `screen` proporciona información sobre la pantalla del usuario, como su resolución, dimensiones, orientación y más. Es útil para adaptar la interfaz de usuario a las características de la pantalla del dispositivo.

## Propiedades

- `screen.width` Devuelve el ancho total de la pantalla en píxeles. Este valor incluye toda la pantalla, no solo el área visible del navegador.
  ```javascript
  console.log(screen.width);
  ```

- `screen.height` Devuelve la altura total de la pantalla en píxeles. Al igual que `screen.width`, este valor representa toda la pantalla.
  ```javascript
  console.log(screen.height);
  ```

- `screen.availWidth` Devuelve el ancho disponible de la pantalla en píxeles, excluyendo áreas ocupadas por las interfaces del sistema operativo como la barra de tareas.
  ```javascript
  console.log(screen.availWidth);
  ```

- `screen.availHeight` Devuelve la altura disponible de la pantalla en píxeles, excluyendo áreas ocupadas por las interfaces del sistema operativo como la barra de tareas.
  ```javascript
  console.log(screen.availHeight);
  ```

- `screen.colorDepth` Devuelve la profundidad de color de la pantalla en bits por píxel. Indica cuántos colores puede mostrar la pantalla.
  ```javascript
  console.log(screen.colorDepth);
  ```

- `screen.pixelDepth` Devuelve la profundidad de píxeles de la pantalla en bits por píxel. En la mayoría de los casos, es igual a `screen.colorDepth`.
  ```javascript
  console.log(screen.pixelDepth);  // Ejemplo: 24
  ```

- `screen.orientation` Devuelve un objeto que contiene información sobre la orientación de la pantalla, como el ángulo `angle` y el tipo de orientación `type` (horizontal o vertical).
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


# 4- Objeto `navigator`

El objeto navigator proporciona información sobre el navegador del usuario y su entorno. Se accede a través de `window.navigator` y contiene varias propiedades y métodos útiles.

## Propiedades

Algunas de las propiedades más importantes de navigator son:
  - `navigator.userAgent`: Devuelve una cadena con información sobre el navegador y el sistema operativo.
    ```javascript
    console.log(navigator.userAgent);
    // Ejemplo de salida: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    ```
  - `navigator.userAgentData` es una API moderna que proporciona información estructurada sobre el navegador y el dispositivo del usuario. Está diseñada para reemplazar el uso de navigator.userAgent en aplicaciones modernas.
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
  - `navigator.language`: Indica el idioma preferido del usuario (ejemplo: "es-ES").
  - `navigator.languages`: Devuelve una matriz con los idiomas preferidos en orden de preferencia.
  - `navigator.onLine`: Retorna true si el navegador tiene conexión a Internet y false si no.
    ```javascript
    if (navigator.onLine) {
        console.log("Estás conectado a Internet.");
    } else {
        console.log("No hay conexión a Internet.");
    }
    ```

  - `navigator.cookieEnabled`: Indica si las cookies están habilitadas en el navegador.
  - `navigator.geolocation`: Proporciona acceso a la API de geolocalización, que permite obtener la ubicación geográfica del usuario
  - `navigator.mediaDevices`: Proporciona acceso a los dispositivos multimedia (como cámaras y micrófonos) a través de la API MediaDevices.
  - `navigator.hardwareConcurrency` Devuelve el número de núcleos de procesamiento lógicos disponibles en el dispositivo.
  - `navigator.deviceMemory` Devuelve la cantidad de memoria RAM del dispositivo en gigabytes.
  - `navigator.connection` Proporciona información sobre la conexión de red del usuario, como el tipo de conexión (Wi-Fi, 4G, etc.) y la velocidad estimada.

## Métodos

  - `navigator.geolocation.getCurrentPosition()` Obtiene la posición actual del usuario. Recibe una función de callback que se ejecuta cuando se obtiene la ubicación.
    ```javascript
    navigator.geolocation.getCurrentPosition((position) => {
        console.log("Latitud:", position.coords.latitude);
        console.log("Longitud:", position.coords.longitude);
    });
    ```

  - `navigator.geolocation.watchPosition()` Observa la posición del usuario y ejecuta una función de callback cada vez que la ubicación cambia.
  - `navigator.mediaDevices.getUserMedia()` Solicita acceso a los dispositivos multimedia del usuario, como la cámara o el micrófono. Devuelve una promesa que resuelve con un objeto MediaStream.
    ```javascript
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
          console.log("Acceso a la cámara concedido.");
      })
      .catch((error) => {
          console.error("Error al acceder a la cámara:", error);
      });
    ```

  - `navigator.clipboard.writeText()` Escribe texto en el portapapeles del usuario. Devuelve una promesa que se resuelve cuando el texto se ha copiado correctamente.
  - `navigator.clipboard.readText()` Lee el texto almacenado en el portapapeles del usuario. Devuelve una promesa que resuelve con el texto leído.
  - `navigator.vibrate()` Hace vibrar el dispositivo (si es compatible). Recibe un patrón de vibración en milisegundos.
  - `navigator.share()` Permite compartir contenido (como enlaces o archivos) a través de las opciones de compartir del dispositivo. Devuelve una promesa.


## notas importantes
  - Algunas propiedades y métodos pueden no estar disponibles en todos los navegadores o dispositivos.
  - El acceso a ciertas funcionalidades (como la geolocalización o los dispositivos multimedia) requiere el permiso del usuario.
  - El objeto `navigator` es de solo lectura, lo que significa que no se pueden modificar sus propiedades directamente.

  ----

# 4- Objeto `location` en JavaScript

El objeto `location` proporciona información sobre la URL de la página actual. También permite cambiar la URL y redirigir al navegador.

## Propiedades

- `location.href` Devuelve o establece la URL completa de la página actual.
  ```javascript
  console.log(location.href);
  location.href = "https://www.ejemplo.com";
  ```

- `location.protocol` Devuelve el protocolo de la URL (por ejemplo, `http:` o `https:`).
  ```javascript
  console.log(location.protocol);
  ```

- `location.host` Devuelve el nombre de host y el puerto (si está especificado) de la URL.
  ```javascript
  console.log(location.host);
  ```

- `location.hostname` Devuelve solo el nombre de host sin el puerto.
```javascript
console.log(location.hostname);
```

- `location.port` Devuelve el puerto de la URL.
  ```javascript
  console.log(location.port);
  ```

- `location.pathname` Devuelve la ruta de la URL.
```javascript
console.log(location.pathname);
```

- `location.search` Devuelve la cadena de consulta (query string) de la URL, incluida la "?".
```javascript
console.log(location.search);
```

- `location.hash` Devuelve el fragmento de la URL, incluida la "#".
```javascript
console.log(location.hash);
```

## Métodos

- `location.reload()` Recarga la página actual.
```javascript
location.reload();
```

- `location.replace()` Carga una nueva URL, reemplazando la página actual en el historial. No se podrá volver a la página anterior utilizando el botón de "atrás" del navegador.
```javascript
location.replace("https://www.ejemplo.com");
```

- `location.assign()` Carga una nueva URL, pero mantiene la página actual en el historial.
```javascript
location.assign("https://www.ejemplo.com");
```

## Notas
- Al modificar `location.href` o usar `location.assign()`, el navegador redirige a la nueva URL.
- El método `replace()` reemplaza la página actual en el historial, mientras que `assign()` mantiene la página actual en el historial.

----

# 5- Objeto history

# Objeto `history` en JavaScript

El objeto `history` en JavaScript es parte de la API del navegador y proporciona una interfaz para manipular el historial de sesión del navegador. Permite navegar hacia adelante y hacia atrás a través del historial del usuario, así como manipular el contenido del historial.

## Propiedades

- `history.length` Devuelve el número de elementos en el historial de sesión, incluyendo la página actual.
  ```javascript
  console.log(history.length); // Ejemplo: 5
  ```

- `history.scrollRestoration` Permite obtener o establecer el comportamiento de restauración del desplazamiento al navegar por el historial. Puede tener dos valores: "auto" (por defecto) o "manual".
  ```javascript
  console.log(history.scrollRestoration); // "auto"
  history.scrollRestoration = "manual";
  ```