# 1.- Agregar JavaScript a una página web

## Contenido

1. Agregar JavaScript a una página web
    1. [Formas de cargar un script en una página web](#1---formas-de-cargar-un-script-en-una-página-web)
    2. [Ciclo de renderizado de un navegador web](#2---el-ciclo-de-renderizado-de-un-navegador-web)


----

## 1 - Formas de cargar un script en una página web
Cómo insertar código JavaScript en un archivo HTML usando la etiqueta `<script>`

## ¿Cómo funciona?

- Cuando el navegador encuentra una etiqueta `<script>`, detiene la renderización de HTML y comienza a descargar y ejecutar el código.
- Los scripts se ejecutan en el orden en que aparecen en el código HTML.

## ¿Dónde colocar la etiqueta `<script>`?

- **En el `<head>`**: El script se descarga y ejecuta, y después se renderiza el HTML.
- **Al final del `<body>`**: El HTML se renderiza primero, y luego se descarga y ejecuta el script.

## Tres formas de insertar código JavaScript:

1. **Insertar código directamente en la página**
2. **Cargar recursos externos desde una CDN (Content Delivery Network)**
3. **Cargar tu propio archivo JS externo**. Hay dos formas de importar y exportar código:
   - **Opción 1**: Cargar cada archivo JS en el mismo archivo HTML. Solo recomendable cuando el código no está relacionado.
   - **Opción 2**: Organizar el contenido en módulos e importar el módulo principal. Solo posible cuando el código está relacionado.

## Modificando el comportamiento tradicional de bloqueo con `async` y `defer`:

- **`async`**:
  ```html
  <script src="file1.js" async></script>
  ```
  - La renderización de la página no se bloquea mientras se cargan los scripts.
  - Los scripts se ejecutan tan pronto como se cargan, por lo que el orden de ejecución no está garantizado.

- **defer**:
  ```html
  <script src="file1.js" defer></script>
  ```
  - La renderización de la página no se bloquea mientras se cargan los scripts.
  - Los scripts se ejecutan en el orden en que aparecen en el código HTML, pero solo después de que toda la página (DOM) haya sido analizada.

## Opciones:

### Opción 1: No recomendada. Script incrustado en el código HTML. Es mejor en un archivo separado:

```html
<script>
  setTimeout(() => {
    console.log("hola");
  }, 3000);
</script>
```

### Opción 2: Cargar recursos externos desde un CDN (Content Delivery Network). ¡Cuidado! Carga contenido solo de fuentes confiables:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" integrity="sha512-wvHm8W2YdFx27tNwpYwOHKeglkIjG3CXMR1JLcEUQU9zI/hzP6UtWk4fNN0kfi32dT8Xq2a7rfFSJi5VpY2VwA==" crossorigin="anonymous" referrerpolicy="no-referrer" async></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js" async></script>
```

### Opción 3: Cargar un archivo JS externo propio. 3 opciones:
- **Sin atributo**: La renderización de la página está bloqueada hasta que el script sea descargado y ejecutado.
```html
    <script src="../js/1.-script.js"></script> 

```

- **defer**: El script se carga en segundo plano mientras se renderiza el HTML y se ejecuta solo cuando el HTML ha sido completamente renderizado. El orden se mantiene.
```html
    <script src="../js/1.-script.js" defer></script>
```

- **async**: El script se carga en segundo plano mientras se renderiza el HTML, pero se ejecuta tan pronto como está disponible, bloqueando la renderización del HTML. El orden no se mantiene.
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

Estos 9 pasos se podrían clasificar en dos fases:

1. **Construcción** (pasos 1 a 6). Es la creación de esa estructura en memoria a partir del HTML que se encuentra en el archivo.
2. **Renderizado** (pasos 7 a 9). Es el proceso que sigue, donde el navegador comienza a pintar los elementos en la pantalla. En este proceso también se cargan y se representan los recursos visuales (como imágenes, fuentes, etc.).

---

### Proceso de ejecución de la web en un navegador

La ejecución de una web en un navegador se divide en hilos a los que se les asignan tareas. Hay un hilo principal, en el que el navegador procesa la mayoría de las tareas relacionadas con la renderización de la página web y la ejecución de scripts y otros secundarios que permiten que el navegador realice otras tareas sin bloquear la carga de la página.

En un entorno de ejecución como el de los navegadores web, JavaScript se ejecuta por defecto en el hilo principal. Esto significa que todas las tareas relacionadas con la manipulación del DOM, la ejecución de eventos (como clics o desplazamientos), y la ejecución de código JavaScript se llevan a cabo en este hilo.

#### Ejemplos de hilos secundarios:

1. **Trabajadores web (Web workers)** -> ideales para tareas largas o intensivas como el procesamiento de grandes volúmenes de datos o cálculos pesados, sin afectar la experiencia del usuario. Estos trabajadores se ejecutan en un hilo separado y se comunican con el hilo principal a través de mensajes, por lo que no tienen acceso directo al DOM.
2. **Hilo asíncrono** para ejecutar tareas asíncronas como promesas, setTimeout y las API Fetch.
3. **Hilo de renderizado**: Algunos navegadores usan un hilo de renderizado separado del hilo principal. Este hilo es responsable de pintar los elementos en la pantalla, procesar la capa de composición y otros aspectos gráficos. Aunque la mayor parte del trabajo de renderización está vinculado al hilo principal, el proceso de compositing (organizar las capas antes de pintar) y algunas optimizaciones gráficas se pueden realizar en hilos separados para mejorar el rendimiento.
4. **Hilos de red (network threads)** para gestionar las peticiones de red.


---

### Formas de cargar un script externo

1. **Sin parámetro** `<script src="miScript.js"></script>`. Cuando el navegador llega a la etiqueta del script, lo descarga de forma síncrona, bloqueando tanto la construcción del DOM como su renderización hasta que se complete su ejecución.
   
2. **Con async** `<script src="script.js" async></script>` Cuando el navegador llega a la etiqueta del script, empieza adescargarlo inmediatamente de manera asíncrona, es decir, mientras se construye el DOM y lo ejecuta tan pronto como se descargue, sin esperar a que el DOM esté completamente construido. Por tanto, si el script intenta interactuar con el DOM, como éste aún no estará completamente disponible, podría causar errores al intentar acceder a elementos que aún no existen. Si el DOM fuera muy sencillo y el script no fuera bloqueante, quizás podrían estar disponibles los elementos del DOM.

3. **Con defer** `<script src="script.js" defer></script>` Cuando el navegador llega a la etiqueta del script, espera a descargarlo a que el DOM se haya construido completamente (Fase 1, pasos 1 a 6), es decir, a que el navegador haya analizado completamente el HTML y haya construido el árbol del DOM. Por tanto, el script puede interactuar con los elementos del DOM, puesto que el árbol ya se ha construido. Sin embargo, el script se ejecuta después de que el DOM esté construido, pero antes de que el navegador haya completado el proceso de renderizado visual (fase 2, pasos 7 a 9). Es decir, el DOM está construido en memoria, pero el navegador aún puede no haber terminado de pintar todo en pantalla. Si el script es bloqueante, el hilo principal el renderizado del DOM se retrasará hasta que el script se haya terminado de ejecutar.

**Ejemplo**: Script que bloquea el hilo principal durante 5 segundos con una operación costosa.
```JavaScript
console.log("Inicio del script");
const start = Date.now();
while (Date.now() - start < 5000) {
    // Bloquea el hilo principal durante 5 segundos
}
console.log("Fin del script");
```

Formas de cargar este script:

- **Sin parámetros**. El script se descarga de forma síncrona, bloqueando tanto la construcción del DOM como su renderización hasta que se complete su ejecución.
- **Con async**. El script se descarga de forma asíncrona, mientras el navegador construye el DOM. En cuanto termina de descargarlo, lo ejecuta SIN ESPERAR a que el DOM esté completamente construido. Como el script es bloqueante, el DOM no terminará de construirse antes de que éste se ejecute y, por tanto, si el script intenta acceder a un elemento del DOM que aún no ha sido construido, daría error.
- **Con defer**. El navegador construirá el DOM y, cuando haya acabado, descargará y ejecutará el script. Como el script es bloqueante, el DOM estará construido en memoria, pero no será renderizado, salvo que el DOM sea muy sencillo y no requiera recursos externos. En otro caso, la renderización se retrasará hasta que el script acabe de ejecutarse. En cualquier caso, el Script podrá acceder y manipular los elementos del DOM.

[Volver atrás](https://github.com/avianarios/codigo_DWEC/tree/main/unidad%205)
