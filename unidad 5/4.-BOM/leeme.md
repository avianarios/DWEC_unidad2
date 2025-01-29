

El BOM (Browser Object Model) es un conjunto de objetos proporcionados por el navegador para interactuar con el entorno de la ventana del usuario. A diferencia del DOM, que se centra en la estructura del documento HTML, el BOM permite manipular elementos externos como la ventana, la barra de direcciones, el historial y la ubicación de la página.

Aunque el BOM no tiene un conjunto de reglas o un documento único que dicte cómo debe implementarse en todos los navegadores. Sin embargo, los navegadores más comunes (como Chrome, Firefox, Safari, etc.) han adoptado una implementación bastante similar de los objetos que mencioné (como window, navigator, location, etc.), de modo que los desarrolladores pueden usarlos con bastante confianza sabiendo que funcionarán de manera similar en la mayoría de los navegadores.

## Principales objetos del BOM

El BOM no es un estándar oficial, pero los navegadores lo implementan de manera similar. Sus principales objetos son:

1. **`window`** Es el objeto global en el contexto del navegador y representa la ventana del navegador.  
    - Todos los demás objetos del BOM están dentro de `window`.  
   - Métodos y propiedades destacadas:  
     - `window.open()`, `window.close()`: Abrir y cerrar ventanas emergentes.  
     - `window.alert()`, `window.confirm()`, `window.prompt()`: Mostrar diálogos emergentes.  
     - `setTimeout()`, `setInterval()`: Ejecutar funciones con retraso o en intervalos.  

2. **`navigator`** Proporciona información sobre el navegador y el sistema del usuario.  
   - Propiedades comunes:  
     - `navigator.userAgent`: Información sobre el navegador.  
     - `navigator.language`: Idioma del navegador.  
     - `navigator.geolocation`: Acceso a la ubicación del usuario.  

3. **`screen`** Contiene información sobre la pantalla del usuario.  
   - Propiedades comunes:  
     - `screen.width`, `screen.height`: Dimensiones de la pantalla.  
     - `screen.availWidth`, `screen.availHeight`: Dimensiones disponibles sin la barra de tareas.  

4. **`location`** Representa la URL actual y permite redireccionar.  
   - Propiedades y métodos destacados:  
     - `location.href`: URL completa de la página actual.  
     - `location.pathname`: Ruta dentro del dominio.  
     - `location.reload()`: Recargar la página.  

5. **`history`** Permite interactuar con el historial de navegación.  
   - Métodos comunes:  
     - `history.back()`: Volver a la página anterior.  
     - `history.forward()`: Ir a la siguiente página en el historial.  
     - `history.go(n)`: Ir a una página específica en el historial (valores positivos o negativos).  

-----

# 1- Objeto Window

El objeto **`window`** es uno de los componentes principales del **BOM (Browser Object Model)** y representa la ventana del navegador donde se ejecuta la página web. Es el objeto global en JavaScript en un entorno de navegador, lo que significa que puedes acceder a él directamente sin necesidad de referenciarlo explícitamente (por ejemplo, las funciones como `alert()` y `setTimeout()` son métodos del objeto `window`).

 Al ser window el objeto global, se puede obviar cualquier referencia a el a la hora de usar un método. Por ejemplo, `window.open(url)` es igual que `open(url)`


## Propiedades del objeto `window`

Algunas de las propiedades más importantes del objeto `window` incluyen:

1. **`window.document`** Accede al documento HTML cargado en la ventana del navegador. Esto es una referencia al objeto `document` que permite interactuar con el DOM de la página.

2. **`window.location`** Contiene la URL actual del navegador y permite redirigir la página a una nueva URL. Sus propiedades más comunes son:
    - `window.location.href`: Obtiene o establece la URL completa.  
    - `window.location.pathname`: Obtiene o establece la ruta de la URL.

3. **`window.history`**  Permite interactuar con el historial del navegador. Sus métodos más comunes son:
    - `window.history.back()`: Regresa a la página anterior.  
    - `window.history.forward()`: Avanza a la siguiente página en el historial.

4. **`window.screen`**  Proporciona información sobre la pantalla del usuario, como su tamaño y la disponibilidad de la pantalla. Sus propiedades más comunes son:
    - `window.screen.width`: Ancho de la pantalla.  
    - `window.screen.height`: Alto de la pantalla.

5. **`window.navigator`** Proporciona información sobre el navegador y el sistema operativo del usuario. Sus propiedades más comunes son:
    - `window.navigator.userAgent`: Información sobre el navegador.  
    - `window.navigator.language`: Idioma del navegador.

6. **`window.localStorage` y `window.sessionStorage`** Permiten almacenar datos de manera persistente en el navegador. `localStorage` guarda los datos indefinidamente, mientras que `sessionStorage` los guarda solo para la sesión actual.

7. **`window.console`** Ofrece acceso a la consola del navegador para depuración y salida de mensajes. Ejemplo: `window.console.log()` para mostrar mensajes en la consola.


## Métodos del objeto `window`

1. **`window.setTimeout()`** Ejecuta una función después de un retraso especificado.  
     ```javascript
     window.setTimeout(function() {
       alert("¡Hola después de 2 segundos!");
     }, 2000);
     ```

2. **`window.setInterval()`**  Ejecuta una función repetidamente en intervalos de tiempo especificados.
    ```javascript
    let counter = 0;

    let intervalID = setInterval(() => {
        console.log(`Segundos transcurridos: ${counter}`);
        counter++;
    }, 1000);  // Se ejecuta cada 1000 ms (1 segundo)
    ```

3. **`window.cleartimeout()`** Cancela un temporizador configurado con setTimeout(). Es necesario para evitar la ejecución de la función programada si se desea interrumpirla antes de que se complete.
    ```javascript
    setTimeout(() => {
        clearInterval(intervalID);  // Detiene la ejecución repetida (ver ejemplo anterior)
        console.log("Intervalo detenido");
    }, 5000);
    ```

4. **`window.alert()`** Muestra un cuadro de diálogo de alerta con un mensaje.  
     ```javascript
     window.alert("¡Hola, mundo!");
     ```

5. **`window.confirm()`** Muestra un cuadro de diálogo con un mensaje y dos botones (Aceptar y Cancelar). Devuelve `true` si el usuario hace clic en Aceptar y `false` si hace clic en Cancelar.

6. **`window.prompt()`** Muestra un cuadro de diálogo que solicita al usuario ingresar un valor. Devuelve el valor ingresado o `null` si el usuario cancela.

7. **`window.open()`** Abre una nueva ventana del navegador.  
     ```javascript
     let miVentana=window.open("https://www.ejemplo.com", "_blank");
     ```

8. **`window.resizeTo(anchura,altura)`** cambia el tamaño de la ventana del navegador a las dimensiones especificadas (en píxeles).
    ```javascript
    miVentana.resizeTo(800, 600);        // Cambia el tamaño de la ventana a 800x600 píxeles
    ```

9. **`window.resizeBy(aumentoAnchura,aumentoAltura)`** cambia el tamaño de la ventana del navegador en relación al tamaño actual de la ventana. Los valores de aumentoAnchura y aumentoAltura se suman a las dimensiones actuales de la ventana.
    ```javascript
    miVentana.resizeBy(200, 100);      // Aumenta el tamaño de la ventana en 200 píxeles de ancho y 100 píxeles de alto
    ```

10. **`window.moveTo(x,y)`** mueve una ventana emergente a una nueva posición en la pantalla del navegador. Permite especificar las coordenadas en el eje X (horizontal) y en el eje Y (vertical) a las que debe trasladarse la ventana.
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
