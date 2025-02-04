# Índice

1. Programación síncrona y asíncrona
2. El ciclo de eventos en JavaScript


----

# 1- Programación síncrona y asíncrona

En JavaScript, la ejecución de código puede ser **síncrona** o **asíncrona**. Comprender esta diferencia es fundamental para trabajar con operaciones que dependen del tiempo, como la carga de scripts externos, peticiones HTTP o acceso a archivos.

## Programación Síncrona

En un entorno síncrono, las instrucciones se ejecutan en el orden en que aparecen en el código, de forma secuencial y bloqueante. Esto significa que una tarea debe completarse antes de que la siguiente pueda iniciarse. Ejemplo con un proceso pesado:

```javascript
console.log("Inicio");

function procesoPesado() {
    let suma = 0;
    for (let i = 0; i < 1e9; i++) {
        suma += i;
    }
    console.log("Proceso pesado finalizado", suma);
}

procesoPesado();
console.log("Fin");
```

Salida:
```
Inicio
Proceso pesado finalizado 499999999500000000
Fin
```

Aquí, el bucle bloquea la ejecución hasta que termina, lo que hace que "Fin" solo aparezca después de que el proceso pesado se complete.

## Programación Asíncrona

En un entorno asíncrono, algunas operaciones pueden ejecutarse en segundo plano, permitiendo que el programa continúe con otras tareas mientras se espera su finalización. La versión asíncrona del código anterior se puede implementar con `setTimeout`:

```js
console.log("Inicio");

function procesoPesadoAsync() {
    setTimeout(() => {
        let suma = 0;
        for (let i = 0; i < 1e9; i++) {
            suma += i;
        }
        console.log("Proceso pesado finalizado", suma);
    }, 0);
}

procesoPesadoAsync();
console.log("Fin");
```

Salida:
```
Inicio
Fin
Proceso pesado finalizado 499999999500000000
```

Aquí, la función `setTimeout` permite que "Fin" se imprima antes de que el proceso pesado termine, mejorando la fluidez de la aplicación.

---

# 2- El ciclo de eventos en JavaScript

El **ciclo de eventos** (event loop) es un concepto central en cómo JavaScript maneja la ejecución del código. Al ejecutar código JavaScript, el motor de JavaScript lo coloca en dos grandes estructuras de datos que marcarán cúando se procesará cada instrucción: la **pila de ejecución** (call stack) y la **cola de tareas** (task queue).

- Pila de ejecución (Call Stack): es donde se coloca el código que va a ser ejecutado. JavaScript ejecuta el código de arriba a abajo, de forma secuencial, línea por línea, de forma síncrona. Cada vez que se llama a una función, esta se apila en la pila de ejecución.
Cuando se termina de ejecutar una función, esta se "desapila", es decir, se retira de la pila de ejecución, y el flujo de control pasa a la siguiente línea de código.

- Cola de tareas (Task Queue): es donde se colocan las tareas asíncronas, como los **callbacks**, las **promesas resueltas**, o eventos como clics de botones. Estas tareas esperan a ser ejecutadas, pero no se ejecutan inmediatamente. En lugar de eso, permanecen en la cola hasta que la pila de ejecución está vacía.

El **ciclo de eventos** se encarga de mover las tareas de la cola de tareas a la pila de ejecución para ser procesadas siguiendo los siguientes pasos:
1. El event loop revisa constantemente si la pila de ejecución está vacía.
2. Si la pila está vacía, el event loop mueve la primera tarea en la cola de tareas a la pila de ejecución.
3. El proceso sigue y repite, verificando constantemente si hay tareas pendientes en la cola y si la pila está vacía.

## ¿Cómo se gestionan las operaciones asíncronas?

Las operaciones asíncronas, al colocarse en la cola de tareas, no se ejecutan inmediatamente. Lo harán una vez que la pila de ejecución se vacíe (es decir, que todo el código sincrónico se haya ejecutado), las tareas asíncronas comenzarán a moverse desde la cola de tareas a la pila de ejecución. Este mecanismo es el que hace que el código sea no bloqueante.

## Ejemplo:
```javascript
console.log('Inicio');

setTimeout(() => {
  console.log('Timeout');
}, 0);

console.log('Fin');
```

El orden de ejecución será:

1. **'Inicio'** se imprime primero porque es el primer código sincrónico.
2. `setTimeout` se coloca en la cola de tareas. Aunque tiene un retraso de 0 milisegundos, no se ejecuta inmediatamente.
3. **'Fin'** se imprime a continuación, ya que es sincrónico.
4. Una vez que la pila de ejecución está vacía, el event loop toma la tarea de la cola de tareas (el callback de `setTimeout`) y la mueve a la pila de ejecución.
5. **'Timeout'** se imprime después de que el código sincrónico ha terminado.


# Estrategias para mejorar la interactividad:
Si un script está realizando cálculos complejos o manipulaciones del DOM, las operaciones asíncronas no bloquean la ejecución del código síncrono, lo que permite que el hilo principal responda rápidamente a otras tareas pero hace que las operaciones asíncronas puedan tardar unos milisegundos en procesarse. El problema viene cuando se están haciendo operaciones más complejas que ocupen mucho tiempo de CPU ya que, en ese caso, las operaciones asíncronas podría tardar más en responder.

Para mejorar la respuesta de las operaciones asíncronas se puede hacer lo siguiente:
- **Dividir tareas grandes en pequeñas**: Si una tarea pesada debe ejecutarse de manera síncrona, se puede dividir en pequeñas tareas síncronas y usar funciones asíncronas para "pausar" entre cada fragmento. Esto permite que el event loop procese otros eventos (como interacciones del usuario) mientras se completan las tareas más pequeñas.
- **Pasar operaciones síncronas a asíncronas**: Esto significa procesar las tareas que iban a ser ejecutadas de forma síncrona, pero que no necesitan inmediatez, de forma asíncrona. Así el código no bloquea la pila de ejecución y permite que se ejecuten tareas asíncronas de manera fluida.
- **Optimización de la UI y manipulación del DOM**: Las actualizaciones del DOM y la manipulación de la interfaz de usuario deben hacerse de manera eficiente para evitar que se acumulen en la pila de ejecución muchas tareas que afecten la respuesta de la aplicación.

----

# 3- Mecanismos para conseguir asincronía

## 3.1- Funciones globales

Las funciones globales `setTimeout` y `setInterval` permiten ejecutar código de manera asíncrona después de un tiempo determinado.
- setTimeout ejecuta una función después de un período de tiempo.
- setInterval ejecuta una función repetidamente a intervalos regulares.

Ambas funciones no bloquean la ejecución del resto del código y, en su lugar, utilizan el event loop de JavaScript para gestionar el retraso.
```javascript
console.log('Antes del setTimeout');
setTimeout(() => {
    console.log('Esto se ejecuta después de 2 segundos');
}, 2000);
console.log('Después del setTimeout');
```
Salida:
```
Antes del setTimeout
Después del setTimeout
Esto se ejecuta después de 2 segundos
```

## 3.1- Eventos

En JavaScript, los eventos son una parte fundamental de la interacción con el usuario, como los clics de botones, desplazamiento de página, o el envío de formularios. Aunque no siempre se les considera "métodos asíncronos", los eventos funcionan de manera asíncrona debido a cómo el motor de JavaScript maneja su ejecución.

Cuando se dispara un evento, como un clic en un botón, JavaScript coloca al manejador del evento en la cola de tareas para que sea ejecutado una vez que la pila de ejecución esté vacía, lo que significa que el código asíncrono (el evento) no interrumpe el flujo síncrono del programa.

Por tanto, el evento no se ejecutará inmediatamente si hay tareas síncronas en la pila de ejecución, pero sí responderá tan pronto como la pila de ejecución esté vacía.

Así, si un script está realizando cálculos complejos o manipulaciones del DOM, el evento de un clic o de otra interacción del usuario podría tardar unos milisegundos en procesarse, ya que el código asíncrono (el evento) no bloquea el hilo de ejecución principal. En operaciones más complejas que ocupen mucho tiempo de CPU, el evento podría tardar más en responder.

```javascript
// Simulación de una operación síncrona compleja
function calcularOperacionLarga() {
    console.log('Iniciando operación larga...');
    for (let i = 0; i < 1e6; i++) {  // Un ciclo largo para bloquear el hilo principal
        // Simulación de tarea intensiva
        console.log(i)
    }
    console.log('Operación larga terminada');
}

document.getElementById('boton').addEventListener('click', () => {
    console.log('¡Clic detectado!');
    setTimeout(() => {  // Usar setTimeout para simular una acción asíncrona
        mostrarMensaje("botón pinchado", "mensajeEvento");
    }, 0);
});

// Ejecutar la operación larga, que bloquea el hilo
calcularOperacionLarga();

```
Salida:
```
Iniciando operación sencilla
Operación sencilla terminada
¡Clic detectado!
Cálculo complejo terminado
Operación compleja solicitada
```

## 3.2- Uso conjunto de funciones de retorno (callbacks) y eventos

Hasta ES6 (2015), la asincronía se manejaba mediante funciones de retorno (`callbacks`) y eventos. Un **callback** es una función de respuesta que se pasa como argumento a otra función y que se ejecuta una vez que esta última ha finalizado.

```javascript
//carga de un script de forma dinámica con un callback
function cargarScript(src, callback) {
    var script = document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    script.addEventListener('load', callback);
    document.head.append(script);
}
document.getElementById("boton").addEventListener('click', () => {
    cargarScript('https://code.jquery.com/jquery-3.7.1.min.js', () => {
        console.log('jQuery ha sido cargado con éxito');
        $('body').css('background-color', 'lightcoral');
    });
});
```

1. Al pinchar el botón con id "boton", se llama a la funcion cargarScript con dos parámetros, el script a cargar y una función de retorno (callback) que se ejecutará cuando la función cargarScript termine de ejecutarse (esta es la clave)
2. La función cargarScript 
    1. crea un elemento `<script>` en memoria
    2. Le asigna los parámetros `src` y `type`.
    3. Define un evento `load` sobre este script para ejecutar la función callback cuando el script se cargue. La función callback es la definida en el segundo parámetro de cargarScript (es una función de flecha que hace un console.lo gy cambia el background-color del body)
    4. Agrega el script al `head`, momento en el que el navegador inicia su descarga.

El uso del `callback` y del evento `load` garantiza que las acciones que dependen del script cargado (como usar `$` de jQuery) solo se ejecuten cuando el script esté disponible. Sin este mecanismo, podríamos intentar usar jQuery antes de que el navegador lo hubiera descargado y procesado, lo que generaría errores.

Los callbacks son una solución efectiva, pero pueden llevar a código difícil de leer, entender y mantener cuando se encadenan múltiples funciones asíncronas. Es lo que se llama la **pirámide infernal (callback hell)**

```javascript
//Pirámide infernal
function loadScript(scriptName, callback) {
    const script = document.createElement('script');
    script.src = scriptName;

    // Si ocurre un error al cargar el script
    script.onerror = function() {
        callback(new Error('Error al cargar el script: ' + scriptName), null);
    };

    // Si el script se carga con éxito
    script.onload = function() {
        callback(null, script);
    };

    // Se agrega el script al documento para iniciar la carga
    document.head.appendChild(script);
}


loadScript('1.js', function(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', function(error, script) {
      if (error) {
        handleError(error);
      } else {
        // ...
        loadScript('3.js', function(error, script) {
          if (error) {
            handleError(error);
          } else {
            // ...continua después de que se han cargado todos los script (*)
          }
        });

      }
    });
  }
});
```

Para abordar esto, en JavaScript moderno se utilizan **promesas** y `async/await`, facilitando la gestión de la asincronía de manera más estructurada.

----

# 4- Promesas
Las promesas surgen en con ES6 (ES2015) para simplificar la gestión del código asíncrono y simplificar la gestión de errores y el encadenamiento de operaciones. Son objetos que representan el estado actual de una operación asíncrona. Una promesa puede estar en uno de tres estados:
- Pendiente (pending): La operación asíncrona aún no ha terminado.
- Cumplida (fulfilled): La operación asíncrona se completó con éxito.
- Rechazada (rejected): La operación asíncrona falló.

Para ilustrar cómo funcionan las promesas, vamos a usar la API fetch, que es una API que permite manejar conexinones HTTP mediante el uso de: 
- `Request`: Representa una solicitud HTTP. Puedes usarla para personalizar detalles de la solicitud antes de pasarla a fetch().
- Una función `fetch(URL)`, que devuelve una promesa a un objeto Response
- `Response`: Representa la respuesta a una solicitud HTTP realizada con fetch(). Incluye las siguientes propiedades y métodos para trabajar con el cuerpo de la respuesta
    - `ok`: Indica si la respuesta fue exitosa (código 200-299).
    - `status`: Código de estado HTTP de la respuesta.
    - `statusText`: Mensaje asociado al código de estado HTTP.
    - `headers`: Cabeceras HTTP de la respuesta.
    - `url`: URL de la respuesta.
    - `type`: Tipo de respuesta (por ejemplo, "basic", "cors", etc.).
    - `body`: Flujo de datos del cuerpo de la respuesta.
    - `json()`: método que lee la respuesta como un JSON
    - `blob()`: método que lee la respuesta como un blob (binary large object). Se utiliza comúnmente para manejar archivos, como imágenes, videos, audios, o incluso archivos de documentos.
    - `text()`: método que lee la repuesta como texto
- `Headers`: Representa las cabeceras HTTP que puedes agregar a las solicitudes o respuestas. Permite configurar las cabeceras de la solicitud o inspeccionar las cabeceras de la respuesta.
- `FormData`: Aunque no es un objeto exclusivo de la Fetch API, se usa junto con fetch() para enviar datos de formularios (por ejemplo, para realizar una carga de archivos).
 
Fetch inicia una solicitud HTTP y devuelve un objeto promesa (`promise`) que se resuelve cuando se recibe la respuesta de la solicitud HTTP. El objeto promise proporciona los siguientes métodos:
- `then()`: Maneja el resultado cuando la promesa se resuelve (tiene éxito).
- `catch()`: Maneja los errores cuando la promesa es rechazada.
- `finally()`: Se ejecuta después de que la promesa se resuelva o sea rechazada, independientemente de lo que ocurriera.
- `all()`: Permite esperar múltiples promesas en paralelo y devolver una promesa cuando todas las de la matriz se resuelven. Si alguna es rechazada, `.all()` las rechaza todas.
- `race()`: recibe un array de promesas y devuelve una nueva promesa que se resuelve o rechaza tan pronto como la primera promesa se resuelva o se rechace.
- `allSettled()`: permite esperar que todas las promesas se resuelvan, independientemente de si se resolvieron con éxito o fueron rechazadas. Devuelve un array con objetos que contienen el estado y el valor (o el motivo del rechazo) de cada promesa.
- `any()`: funciona de manera similar a `Promise.race()`, pero en lugar de resolver con la primera promesa que se resuelva, any() resuelve con la primera promesa que no se rechace.


Flujo de trabajo:
- Se hace una conexión con fetch, que devuelve una promesa.
- Se usan los métodos del objeto `promise` para interactura con dicha promesa
  - `.then` para cuando se resuelve
  -`.catch` para cuando es rechazada
- Esa promesa se resuelve con un objeto `Response`, que representa la respuesta HTTP.
- Se accede a los datos de la respuesta (por ejemplo, el cuerpo), usando los métodos del objeto `response` como `.json()`, `.text()`, o `.blob()`, dependiendo del tipo de respuesta esperada.


```javascript
// Gestionando la asincronía mediante el uso de fetch, que devuelve una promesa. Aquí se gestiona encadenando .then (ES6)
function obtenerChiste(){
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => {
      // Verificamos que la respuesta sea exitosa
      if (!response.ok) {
        throw new Error('Hubo un problema con la solicitud');
      }
      return response.json(); // Convertimos la respuesta a JSON
    })
    .then(data => {
      // Aquí trabajamos con los datos una vez que la promesa se resuelve
      console.log(data);
    })
    .catch(error => {
      // Si hubo un error (en la solicitud o al procesar los datos)
      console.error('Error:', error);
    });
}

```

```javascript
//Uso de blob
function obtenerFoto(){
    fetch('https://picsum.photos/300')
    .then(response => response.blob())
    .then(blob => {
        const imageURL = URL.createObjectURL(blob);
        const img = `<img src="${imageURL}" alt="Imagen aleatoria"/>`;
        mostrarMensaje(img,"mensajePromesas", false);

    })
    .catch(error => console.error('Error al cargar la imagen:', error));
}
```

```javascript
//Ejemplo de Promise.all
const promesa1 = Promise.resolve(3); // Se resuelve inmediatamente con el valor 3
const promesa2 = Promise.resolve(5); // Se resuelve inmediatamente con el valor 5
const promesa3 = new Promise((resolve, reject) => setTimeout(resolve, 100, 10)); // Se resuelve después de 100 ms con el valor 10

Promise.all([promesa1, promesa2, promesa3])
  .then(values => {
    console.log(values); // [3, 5, 10]
  })
  .catch(error => {
    console.error(error); // Si alguna promesa es rechazada, se maneja aquí.
  });
```

```javascript
//Uso de Promise.all para cargar varias imágenes de forma asíncrona

// Función para cargar una imagen de forma asíncrona
function cargarImagen(url) {
  //El objeto promise acepta dos argumentos: función que ejecutar si se resuelve la promesa y función a ejecutar si se rechaza
  return new Promise((resolve, reject) => {
    //new Image() crea un objeto JavaScript que se puede utilizar más libremente para tareas en segundo plano como precargar imágenes, manipularlas con un canvas o trabajar con ellas sin la necesidad inmediata de mostrarlas en el DOM (que también se puede).
    const imagen = new Image();
    imagen.src = url;

    // Cuando la imagen se cargue correctamente (la imagen se ha descargado con éxito), marcamos la promesa como resuelta (éxito) para poder continuar. Esto hace que el código que estaba esperando la promesa (usando .then()) pueda continuar su ejecución, ahora que tiene la imagen cargada.
    imagen.onload = () => resolve(imagen);

    // Si ocurre un error al cargar la imagen marcamos la promesa como rechazada para que el código que estaba esperando .catch continúe su ejecución
    imagen.onerror = () => reject(`Error al cargar la imagen: ${url}`);
  });
}

// URLs de las imágenes a cargar
const urlImagen1 = 'https://via.placeholder.com/150';
const urlImagen2 = 'https://via.placeholder.com/200';
const urlImagen3 = 'https://via.placeholder.com/250';

// Cargar todas las imágenes de forma concurrente
const promesa1 = cargarImagen(urlImagen1); // Promesa para cargar la imagen 1
const promesa2 = cargarImagen(urlImagen2); // Promesa para cargar la imagen 2
const promesa3 = cargarImagen(urlImagen3); // Promesa para cargar la imagen 3

// Usar Promise.all para esperar que todas las imágenes se carguen
Promise.all([promesa1, promesa2, promesa3])
  .then(imagenes => {
    // Si todas las promesas se resuelven, mostrar las imágenes
    imagenes.forEach(imagen => {
      document.body.append(imagen); // Añadir la imagen al body
    });
  })
  .catch(error => {
    console.error(error); // Si alguna imagen no se carga correctamente
});

```


# 5-Async/Await
La sintaxis de ES2015 (ES6) maneja bien la asincronía, pero permite encadenar varios .then y .catch, lo que puede resultar confuso en ocasiones. ES2017 (ES8) sigue gestionando la asincronía con promesas, pero introduce una nueva sintaxis para manejarlas de manera más legible y estructurada permitiendo escribir código asíncrono con una apariencia más similar al código síncrono. Para ello usa dos elementos que sustituyen a `.then()` y `.catch()`:
  - `async` se usa a la hora de declarar la función y hace que ésta devuelva una promesa. Si dentro de la función se devuelve un valor, este se envuelve automáticamente en una promesa resuelta.
  - `await` sólo puede usarse dentro de funciones `async` y permite esperar el resultado de una promesa antes de continuar con la ejecución.


```javascript
// Gestionando la asincronía mediante el uso de fetch, que devuelve una promesa. Aquí se gestiona con await (ES8)
async function obtenerChiste() {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');  //La ejecución se detiene en `await fetch(...)` hasta que la promesa se resuelva, lo que evita el uso de `.then()` anidados.
    if (!response.ok) throw new Error('Hubo un problema con la solicitud');   // Verificamos que la respuesta sea exitosa
    const data = await response.json(); // Convertimos la respuesta a JSON
    console.log(data);  //ya se puede trabajar con los datos recibidos
  } catch (error) {
    console.error('Error:', error);   // Si hubo un error (en la solicitud o al procesar los datos)
  }
}
```


```javascript
//Si la función `async` lanza un error, la promesa devuelta será rechazada.
async function lanzarError() {
    throw new Error("Ocurrió un problema");
}

lanzarError().catch(console.error); // Error: Ocurrió un problema
```

```javascript
// Función para cargar una imagen, devuelve una promesa
function cargarImagen(url) {
  //El objeto promise acepta dos argumentos: función que ejecutar si se resuelve la promesa y función a ejecutar si se rechaza
  return new Promise((resolve, reject) => {
    const imagen = new Image();
    imagen.src = url;

    // Cuando la imagen se carga, resolvemos la promesa
    imagen.onload = () => resolve(imagen);

    // Si ocurre un error, rechazamos la promesa
    imagen.onerror = () => reject(`Error al cargar la imagen: ${url}`);
  });
}

// Función principal para cargar varias imágenes usando async/await
async function cargarImagenes() {
  try {
    // await espera hasta que esa promesa se resuelva (o sea rechazada)
    // promise.all devolverá una promesa resuelta cuando todas se resuelvan o se rechazará si alguna no se resuelve
    // Esperamos que todas las imágenes se carguen de forma concurrente
    const imagenes = await Promise.all([
      cargarImagen('https://via.placeholder.com/150'),
      cargarImagen('https://via.placeholder.com/200'),
      cargarImagen('https://via.placeholder.com/250')
    ]);

    // Si todas las imágenes se cargan correctamente, las agregamos al DOM
    imagenes.forEach(imagen => {
      document.body.append(imagen);
    });
  } catch (error) {
    // Si alguna promesa es rechazada (error en la carga de alguna imagen)
    console.error(error);
  }
}

// Llamamos a la función para cargar las imágenes
cargarImagenes();
```



---

### 🔹 **`await`**  
La palabra clave `await` solo puede usarse dentro de funciones `async`. Se usa para esperar el resultado de una promesa antes de continuar con la ejecución.

```javascript
async function obtenerDatos() {
    let respuesta = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let datos = await respuesta.json();
    console.log(datos);
}

obtenerDatos();
```


### 🔹 **Ejecutar múltiples promesas en paralelo con `Promise.all`**
Si tienes varias operaciones asíncronas que pueden ejecutarse en paralelo, puedes combinarlas con `Promise.all` en lugar de usar `await` en cada una secuencialmente.

```javascript
async function obtenerDatosParalelo() {
    let [usuario, posts] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json()),
        fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then(res => res.json())
    ]);

    console.log("Usuario:", usuario);
    console.log("Posts:", posts);
}

obtenerDatosParalelo();
```

---

### 🔹 **Diferencias con Promesas normales**
| Característica      | Promesas (`.then()`) | `async/await` |
|--------------------|----------------|------------|
| Lectura del código | Más difícil cuando hay muchas promesas encadenadas | Más legible, se parece a código síncrono |
| Manejo de errores | `.catch()` | `try/catch` |
| Ejecución en paralelo | `Promise.all()` | `Promise.all()` sigue siendo necesario |

---

### **📌 Consideraciones importantes**
1. `await` **pausa la ejecución** dentro de la función `async`, pero no bloquea el event loop.
2. `async/await` es solo **azúcar sintáctico** sobre promesas, no es un nuevo mecanismo de asincronía.
3. Para ejecutar tareas en paralelo, **no uses `await` dentro de bucles `for` si las operaciones no dependen entre sí**. Es mejor usar `Promise.all()`.

---

Si tienes dudas o quieres ver ejemplos más avanzados, no dudes en preguntar. 😊