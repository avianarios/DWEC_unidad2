# 1.- Adding JavaScript to a web page

## Contents

1. Adding JavaScript to a web page
    1. [Ways of loading a Script in a webpage](#1---ways-of-loading-a-script-in-a-webpage)
    2. [The Rendering Cycle of a Web Browser](#2---the-rendering-cycle-of-a-web-browser)

----

## 1 - Ways of loading a Script in a webpage
How to Insert JavaScript Code into an HTML File using `<script>` Tag

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
**no attibute**: HTML rendering is blocked until the script is donwloaded and executed:
```html
    <script src="../js/1.-script.js"></script> 

```

**defer**: Script is loaded at background while HTML is being rendered and is executed only when HTML is rendered. Order is maintained
```html
    <script src="../js/1.-script.js" defer></script>
```

**async**: script is loaded at background while HTML is being rendered but it is executed as soon as it is available, blocking HTML rendering. Order is not maintained
```html
    <script src="../js/1.-script.js" async></script>
```
---

### 2 - The Rendering Cycle of a Web Browser

The rendering cycle is the process a web browser follows to draw the HTML code of a webpage on the screen. It consists of the following steps:

1. Resource download
2. HTML parsing
3. Building the DOM in memory as a tree of nodes
4. CSS parsing
5. Building a CSS Object Model (CSSOM) using CSS rules
6. Building the render tree by combining the DOM and the CSSOM
7. Layout -> Calculating the size and position of elements in the render tree on the page
8. Compositing -> When animations, transformations, or complex layers like floating images or 3D transformations are used, the browser organizes elements into layers. This step combines those layers to form the final screen image.
9. Painting the elements on the screen

These 9 steps can be classified into two phases:

1. **Construction** (steps 1 to 6): The creation of the in-memory structure based on the HTML found in the file.
2. **Rendering** (steps 7 to 9): The process in which the browser begins painting elements on the screen. This process also includes loading and rendering visual resources (such as images, fonts, etc.).

---

### Web Execution Process in a Browser

The execution of a webpage in a browser is divided into threads, each assigned specific tasks. There is a main thread where the browser processes most tasks related to rendering the webpage, executing scripts, and secondary threads that allow the browser to perform other tasks without blocking the page load.

In a web browser execution environment, JavaScript runs by default on the main thread. This means that all tasks related to DOM manipulation, event execution (such as clicks or scrolls), and JavaScript code execution occur on this thread.

#### Examples of Secondary Threads:

1. **Web Workers** -> Ideal for long or intensive tasks such as processing large volumes of data or heavy calculations without affecting the user experience. These workers run in a separate thread and communicate with the main thread via messages, so they do not have direct access to the DOM.
2. **Asynchronous Thread** -> Executes asynchronous tasks such as promises, `setTimeout`, and Fetch API requests.
3. **Rendering Thread** -> Some browsers use a separate rendering thread from the main thread. This thread is responsible for painting elements on the screen, processing the compositing layer, and other graphic-related tasks. Although most rendering work is tied to the main thread, the compositing process (organizing layers before painting) and some graphic optimizations can be handled in separate threads to improve performance.
4. **Network Threads** -> Manage network requests.

---

### Ways to Load an External Script

1. **Without parameters** `<script src="myScript.js"></script>`: When the browser encounters the script tag, it downloads it synchronously, blocking both the DOM construction and rendering until execution is complete.
   
2. **With async** `<script src="script.js" async></script>`: When the browser encounters the script tag, it starts downloading it immediately in an asynchronous manner while the DOM is being constructed. It executes the script as soon as it is downloaded, without waiting for the DOM to be completely constructed. Therefore, if the script attempts to interact with the DOM, some elements might not yet exist, potentially causing errors. If the DOM is very simple and the script is non-blocking, some DOM elements might be available.

3. **With defer** `<script src="script.js" defer></script>`: When the browser encounters the script tag, it delays downloading it until the DOM is fully constructed (Phase 1, steps 1 to 6), meaning the browser has fully parsed the HTML and built the DOM tree. The script can therefore interact with DOM elements because the tree is already built. However, the script executes after the DOM is built but before the browser has completed the visual rendering process (Phase 2, steps 7 to 9). That is, the DOM is constructed in memory, but the browser may not have finished painting everything on the screen. If the script is blocking, the DOM rendering in the main thread will be delayed until the script finishes executing.


**Example**: Script that blocks the main thread for 5 seconds with a costly operation.
```JavaScript
console.log("Inicio del script");
const start = Date.now();
while (Date.now() - start < 5000) {
    // Blocks the main thread for 5 seconds
}
console.log("Fin del script");
```

Ways to Load This Script:

- **Without Parameters**: The script is downloaded synchronously, blocking both the DOM construction and its rendering until the execution is complete.
- **With async**: The script is downloaded asynchronously while the browser builds the DOM. As soon as the script finishes downloading, it executes WITHOUT WAITING for the DOM to be fully constructed. Since the script is blocking, the DOM will not finish building before the script executes, meaning that if the script tries to access a DOM element that hasn’t been built yet, it will throw an error.
- **With defer**: The browser will construct the DOM, and once it is complete, it will download and execute the script. Since the script is blocking, the DOM will be constructed in memory but not rendered unless the DOM is very simple and does not require external resources. Otherwise, the rendering will be delayed until the script finishes executing. In any case, the script will be able to access and manipulate the DOM elements.

[Volver atrás](https://github.com/avianarios/codigo_DWEC/tree/main/unidad%205)
