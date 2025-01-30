The **BOM (Browser Object Model)** is a set of objects provided by the browser to interact with the user's window environment. Unlike the DOM, which focuses on the structure of the HTML document, the BOM allows manipulation of external elements such as the window, address bar, history, and page location.

Although the BOM does not have a set of rules or a single document that dictates how it should be implemented in all browsers. However, the most common browsers (such as Chrome, Firefox, Safari, etc.) have adopted a fairly similar implementation of the objects I mentioned (such as window, navigator, location, etc.), so developers can use them with a fair amount of confidence knowing that they will work similarly in most browsers.


## Main objects of the BOM

The BOM is not an official standard, but browsers implement it similarly. Its main objects are:

1. **`window`**  is the global object in the browser context and represents the browser window.  
   - All other BOM objects are within `window`.  
   - Key methods and properties:  
     - `window.open()`, `window.close()`: Open and close popup windows.  
     - `window.alert()`, `window.confirm()`, `window.prompt()`: Show pop-up dialogs.  
     - `setTimeout()`, `setInterval()`: Run functions with delay or at intervals.  

2. **`navigator`** Provides information about the browser and the user's system.  
   - Common properties:  
     - `navigator.userAgent`: Information about the browser.  
     - `navigator.language`: Browser's language.  
     - `navigator.geolocation`: Access to the user's location.  

3. **`screen`** Contains information about the user's screen.  
   - Common properties:  
     - `screen.width`, `screen.height`: Screen dimensions.  
     - `screen.availWidth`, `screen.availHeight`: Available dimensions excluding the taskbar.  

4. **`location`** Represents the current URL and allows redirection.  
   - Key properties and methods:  
     - `location.href`: Full URL of the current page.  
     - `location.pathname`: Path within the domain.  
     - `location.reload()`: Reload the page.  

5. **`history`** Allows interaction with the browsing history.  
   - Common methods:  
     - `history.back()`: Go back to the previous page.  
     - `history.forward()`: Go forward to the next page in the history.  
     - `history.go(n)`: Go to a specific page in the history (positive or negative values).  

----

# 1- Window object

The **`window`** object is one of the main components of the **BOM (Browser Object Model)** and represents the browser window where the web page is running. It is the global object in JavaScript in a browser environment, meaning you can access it directly without referencing it explicitly (for example, functions like `alert()` and `setTimeout()` are methods of the `window` object).

 Since window is the global object, any reference to it can be ignored when using a method. For example, `window.open(url)` is the same as `open(url)`.

## Properties of the `window` object

Some of the most important properties of the `window` object include:

Some of the more important properties of the `window` object include:
- `window.innerHeight`: height of the window contents, in pixels, excluding the horizontal scrollbar.
- `window.innerWidth`: width of the window contents, in pixels, excluding the vertical scroll bar.
- `window.outerHeight`: total height of the browser window, including toolbars and borders.
- `window.outerWidth`: total width of the browser window, including toolbars and borders.
- `window.screenX` and `window.screenY`: coordinates of the window's position on the screen, relative to the top left corner of the device's screen.


## Methods of the `window` object

1. **`window.setTimeout()`** Executes a function after a delay.
     ```javascript
     window.setTimeout(function() {
       alert("Hi after 2 seconds!");
     }, 2000);
     ```

2. **`window.setInterval()`**  Executes a function repeatedly at specified intervals.
    ```javascript
    let counter = 0;

    let intervalID = setInterval(() => {
        console.log(`seconds: ${counter}`);
        counter++;
    }, 1000);  // Se ejecuta cada 1000 ms (1 segundo)
    ```

3. **`window.cleartimeout()`** Cancels a timer set with setTimeout(). This is necessary to prevent execution of the scheduled function if you want to interrupt it before it completes.
    ```javascript
    setTimeout(() => {
        clearInterval(intervalID);  // Detiene la ejecución repetida (ver ejemplo anterior)
        console.log("stopped interval");
    }, 5000);
    ```

4. **`window.alert()`** Displays an alert dialog with a message.  
     ```javascript
     window.alert("Hello, world!");
     ```

5. **`window.confirm()`** Displays a dialog with a message and two buttons (OK and Cancel). Returns `true` if the user clicks OK, and `false` if they click Cancel.

6. **`window.prompt()`** Displays a dialog asking the user to enter a value. Returns the entered value or `null` if the user cancels.

7. **`window.open()`** Opens a new browser window.  
     ```javascript
     let myWindow=window.open("https://www.example.com", "_blank");
     ```

8. **`window.resizeTo(width,height)`** resizes the browser window to the specified dimensions (in pixels).
    ```javascript
    myWindow.resizeTo(800, 600);        // Cambia el tamaño de la ventana a 800x600 píxeles
    ```

9. **`window.resizeBy(increaseWidth,increaseHeight)`** resizes the browser window relative to the current window size. The values of increaseWidth and increaseHeight are added to the current window dimensions.
    ```javascript
    myWindow.resizeBy(200, 100);      // Aumenta el tamaño de la ventana en 200 píxeles de ancho y 100 píxeles de alto
    ```

10. **`window.moveTo(x,y)`** moves a pop-up window to a new position on the browser screen. Allows you to specify the X-axis (horizontal) and Y-axis (vertical) coordinates to which the window should be moved.
    ```javascript
    let myWindow = window.open("https://www.example.com", "miVentana", "width=500, height=500");
    myWindow.moveTo(100, 100); // Mueve la ventana a la posición (100, 100) en la pantalla
    ```
**Example**

```javascript
// Change the page URL
window.location.href = "https://www.new-url.com";

// Display the window's location
console.log("Window width:", window.innerWidth);
console.log("Window height:", window.innerHeight);

// Redirect after 3 seconds
window.setTimeout(function() {
  window.location.href = "https://www.example.com";
}, 3000);
