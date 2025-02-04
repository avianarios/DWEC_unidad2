# Index

The BOM (Browser Object Model) is a set of objects provided by the browser to interact with the user's window environment. Unlike the DOM, which focuses on the structure of the HTML document, the BOM allows manipulation of external elements such as the window, address bar, history, and page location.

While the BOM doesn't have a single set of rules or a document dictating how it should be implemented across all browsers, the most common browsers (such as Chrome, Firefox, Safari, etc.) have adopted a fairly similar implementation of the objects mentioned (like window, navigator, location, etc.), so developers can use them confidently knowing they will behave similarly across most browsers.

The BOM is not an official standard, but browsers implement it similarly. Its main objects are:

1. [Window Object](#1--window-object)
2. [Screen Object](#2--screen-object)
3. [Navigator Object](#3--navigator-object)
4. [Location Object](#4--location-object)
5. [History Object](#5--history-object)
6. [LocalStorage Object](#6--localstorage-object)
7. [SessionStorage Object](#7--sessionstorage-object)
8. [Cookies](#8--cookies)
9. [Performance Object](#9--performance-object)

-----

# 1- Window Object

The `window` object is one of the main components of the **BOM (Browser Object Model)** and represents the browser window where the web page runs. It is the global object in JavaScript in a browser environment, so you can use its methods and access its properties and objects without explicitly referencing it. For example, functions like `window.alert()` and `window.setTimeout()` can be executed as `alert()` and `setTimeout()`.

Since `window` is the global object in the browser, anything defined in the global scope (variables with `var`, functions declared with `function`, predefined objects like `document`, `console`, etc.) becomes a property of `window` and can be accessed as if they were its properties. For example, they are accessible from the `window` object:

- Objects:
    - `window.document`
    - `window.screen`
    - `window.navigator`
    - `window.location`
    - `window.history`
    - `window.localStorage`
    - `window.sessionStorage`
    - `window.console`
- Methods:
    - `window.setTimeout`
    - `window.setInterval`
    - `window.alert`
    - `window.confirm`
    - `window.prompt`
    - `window.open`
    - `window.resizeTo`
    - `window.resizeBy`
    - `window.moveTo`

In the browser environment, when accessing an object or method of the `window` object, the browser automatically resolves them as properties of that object since it's global. It's not necessary to write `window.document`; you can simply write `document` because internally the browser resolves it as `window.document`.

## Properties

Some of the most important properties of the `window` object include:
- **`window.innerHeight`**: The height of the visible area within the browser, in pixels, excluding the horizontal scrollbar.
  
- **`window.innerWidth`**: The width of the visible area within the browser, in pixels, excluding the vertical scrollbar and tabs.

- **`window.outerHeight`**: The total height of the browser window, including toolbars and borders.

- **`window.outerWidth`**: The total width of the browser window, including toolbars and borders.

- **`window.screenX`**: The horizontal distance (in pixels) from the left edge of the screen to the left edge of the browser window.

- **`window.screenY`**: The vertical distance (in pixels) from the top edge of the screen to the top edge of the browser window.

## Methods

- **`window.setTimeout()`**: Executes a function after a specified delay.  
     ```javascript
     window.setTimeout(function() {
       alert("Hello after 2 seconds!");
     }, 2000);
     ```

- **`window.setInterval()`**: Executes a function repeatedly at specified intervals.
    ```javascript
    let counter = 0;

    let intervalID = setInterval(() => {
        console.log(`Seconds elapsed: ${counter}`);
        counter++;
    }, 1000);  // Executes every 1000 ms (1 second)
    ```

- **`window.cleartimeout()`**: Cancels a timer set with `setTimeout()`. It's needed to prevent the scheduled function from running if you want to interrupt it before it completes.
    ```javascript
    setTimeout(() => {
        clearInterval(intervalID);  // Stops the repeated execution (see previous example)
        console.log("Interval stopped");
    }, 5000);
    ```

- **`window.alert()`**: Displays an alert dialog box with a message.  
     ```javascript
     window.alert("Hello, world!");
     ```

- **`window.confirm()`**: Displays a dialog box with a message and two buttons (OK and Cancel). It returns `true` if the user clicks OK and `false` if they click Cancel.

- **`window.prompt()`**: Displays a dialog box asking the user to input a value. It returns the entered value or `null` if the user cancels.

- **`window.open()`**: Opens a new browser window.  
     ```javascript
     let myWindow = window.open("https://www.example.com", "_blank");
     ```

- **`window.resizeTo(width, height)`**: Resizes the browser window to the specified dimensions (in pixels).
    ```javascript
    myWindow.resizeTo(800, 600);        // Resizes the window to 800x600 pixels
    ```

- **`window.resizeBy(widthIncrease, heightIncrease)`**: Resizes the browser window relative to its current size. The `widthIncrease` and `heightIncrease` values are added to the current window dimensions.
    ```javascript
    myWindow.resizeBy(200, 100);      // Increases the window size by 200 pixels in width and 100 pixels in height
    ```

- **`window.moveTo(x, y)`**: Moves a popup window to a new position on the browser screen. You can specify the coordinates on the X (horizontal) and Y (vertical) axes where the window should be moved.
    ```javascript
    let myWindow = window.open("https://www.example.com", "myWindow", "width=500, height=500");
    myWindow.moveTo(100, 100); // Moves the window to the position (100, 100) on the screen
    ```

Browser security restrictions: Many modern browsers have security restrictions that prevent popup windows from being moved or modified once opened, especially if they weren't triggered by an explicit user action (e.g., a click). This may vary depending on the browser and its security settings.

Popup windows are controlled by the browser: Sometimes browsers automatically block popups, or if they allow them, they limit what they can do.

Firefox has stricter settings for controlling popups and actions you can perform on them for security reasons. This includes limiting the movement and resizing of popups, especially if the window is opened in a not fully "trusted" context or if there's a delay in executing the commands.

## Main Events

- **`window.onload`**: Fired when the page has finished loading.
- **`window.onresize`**: Fired when the window is resized.
- **`window.onscroll`**: Fired when the user scrolls the page.
- **`window.onbeforeunload`**: Fired before the page is closed or reloaded.

**Usage Example:**

```javascript
// Change the page URL
window.location.href = "https://www.new-url.com";

// Display window size
console.log("Window width:", window.innerWidth);
console.log("Window height:", window.innerHeight);

// Redirect after 3 seconds
window.setTimeout(function() {
  window.location.href = "https://www.example.com";
}, 3000);
```

----

# 2- `screen` Object

The `screen` object provides information about the user's screen, such as its resolution, dimensions, orientation, and more. It's useful for adapting the user interface to the device's screen features.

## Properties

- **`screen.width`**: Returns the total width of the screen in pixels. This value includes the entire screen, not just the visible area of the browser.
  ```javascript
  console.log(screen.width);
  ```

- **`screen.height`**: Returns the total height of the screen in pixels. Like `screen.width`, this value represents the entire screen.
  ```javascript
  console.log(screen.height);
  ```

- **`screen.availWidth`**: Returns the available width of the screen in pixels, excluding areas occupied by the operating system's interfaces such as the taskbar.
  ```javascript
  console.log(screen.availWidth);
  ```

- **`screen.availHeight`**: Returns the available height of the screen in pixels, excluding areas occupied by the operating system's interfaces such as the taskbar.
  ```javascript
  console.log(screen.availHeight);
  ```

- **`screen.colorDepth`**: Returns the color depth of the screen in bits per pixel. It indicates how many colors the screen can display.
  ```javascript
  console.log(screen.colorDepth);
  ```

- **`screen.pixelDepth`**: Returns the pixel depth of the screen in bits per pixel. In most cases, it is equal to `screen.colorDepth`.
  ```javascript
  console.log(screen.pixelDepth);  // Example: 24
  ```

- **`screen.orientation`**: Returns an object containing information about the screen's orientation, such as the `angle` and the `type` (landscape or portrait).
  ```javascript
  if (screen.orientation) {
    console.log(screen.orientation.type);  // Example: "landscape-primary"
  } else {
    console.log("Orientation not available");
  }
  ```

```javascript
console.log("Total screen width: " + screen.width);
console.log("Total screen height: " + screen.height);
console.log("Available width for content: " + screen.availWidth);
console.log("Available height for content: " + screen.availHeight);
console.log("Color depth: " + screen.colorDepth);
console.log("Pixel depth: " + screen.pixelDepth);

if (screen.orientation) {
  console.log("Screen orientation: " + screen.orientation.type);
} else {
  console.log("Orientation not available");
}
```

## Notes
- The `screen` object has no associated methods; it only provides information about the screen.
- The `screen` properties reflect the physical screen resolution and do not change based on the browser window.
- The `screen.orientation` property may not be available in all browsers or devices, so it is recommended to check for its existence before using it.

---

# 3- `navigator` Object

The `navigator` object provides information about the user's browser and environment. It is accessed through `window.navigator` and contains several useful properties and methods.

## Properties

Some of the most important properties of `navigator` are:
  - **`navigator.userAgent`**: Returns a string with information about the browser and operating system. It is useful for offering functionality depending on the browser.
    ```javascript
    console.log(navigator.userAgent);
    // Example output: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    ```
  - **`navigator.userAgentData`**: This is a modern API that provides structured information about the browser and device. It is designed to replace the use of `navigator.userAgent` in modern applications.
    ```javascript
      if (navigator.userAgentData) {
        console.log(navigator.userAgentData.brands); // Information about browser brands
        console.log(navigator.userAgentData.platform); // Platform of the operating system
        console.log(navigator.userAgentData.mobile); // Whether it is a mobile device

        // Get detailed information
        navigator.userAgentData.getHighEntropyValues(["platformVersion"])
            .then((data) => {
                console.log("Operating system version:", data.platformVersion);
            });
      } else {
          console.log("The userAgentData API is not supported in this browser.");
      }
      ```
  - **`navigator.language`**: Indicates the user's preferred language (e.g., "en-US").

  - **`navigator.languages`**: Returns an array of the user's preferred languages in order of preference.

  - **`navigator.onLine`**: Returns true if the browser is connected to the internet and false if not.
    ```javascript
    if (navigator.onLine) {
        console.log("You are connected to the internet.");
    } else {
        console.log("No internet connection.");
    }
    ```

  - **`navigator.cookieEnabled`**: Indicates whether cookies are enabled in the browser.

  - **`navigator.geolocation`**: It provides access to the geolocation API, which allows the geographic location of the user to be obtained using the following methods:
    - `getCurrentPosition(functionSuccess, functionError, Options)`: Returns the current position once.
    - `watchPosition(functionSuccess, functionError, Options)`: Gets the location continuously.
    - `clearWatch(id)`: Stops the watch started with `watchPosition()`.

    If the location cannot be obtained, `functionError` receives an error object with one of these properties:
    - `error.PERMISSION_DENIED`: User denied permission.
    - `error.POSITION_UNAVAILABLE`: Location could not be determined.
    - `error.TIMEOUT`: The timeout has expired.

    ```javascript
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
          (position) => {
              document.getElementById("latitude").textContent = position.coords.latitude;
              document.getElementById("longitude").textContent = position.coords.longitude;
          },
          (error) => {
              alert("Error obtaining location: " + error.message);
          }, { enableHighAccuracy: true }
      );
    } else {
      alert("Geolocation is not supported in this browser.");
    }
    ```

  - **`navigator.mediaDevices`**: Provides access to multimedia devices (such as cameras and microphones) through the MediaDevices API.

  - **`navigator.hardwareConcurrency`**: Returns the number of logical processor cores available on the device.

  - **`navigator.deviceMemory`**: Returns the amount of RAM on the device in gigabytes.

  - **`navigator.connection`**: Provides information about the user's network connection, such as connection type (Wi-Fi, 4G, etc.) and estimated speed.

## Methods

  - **`navigator.geolocation.getCurrentPosition()`**: Obtains the user's current position. It receives a callback function that is executed when the location is obtained.
    ```javascript
    navigator.geolocation.getCurrentPosition((position) => {
        console.log("Latitude:", position.coords.latitude);
        console.log("Longitude:", position.coords.longitude);
    });
    ```

  - **`navigator.geolocation.watchPosition()`**: Watches the user's position and executes a callback function every time the location changes.

  - **`navigator.mediaDevices.getUserMedia()`**: Requests access to the user's multimedia devices, such as the camera or microphone. It returns a promise that resolves with a MediaStream object.
    ```javascript
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
          console.log("Camera access granted.");
      })
      .catch((error) => {
          console.error("Error accessing camera:", error);
      });
    ```

  - **`navigator.clipboard.writeText()`**: Writes text to the user's clipboard. It returns a promise that resolves when the text has been successfully copied.

  - **`navigator.clipboard.readText()`**: Reads the text stored on the user's clipboard. It returns a promise that resolves with the text read.

  - **`navigator.vibrate()`**: Vibrates the device (if supported). It receives a vibration pattern in milliseconds.

  - **`navigator.share()`**: Allows sharing content (such as links or files) through the device's sharing options. It returns a promise.


## Important Notes
  - Some properties and methods may not be available on all browsers or devices.
  - Access to certain features (such as geolocation or multimedia devices) requires user permission.
  - The `navigator` object is read-only, meaning its properties cannot be modified directly.
  - Some properties, such as `navigator.userAgent`, may be modified by the user or browser extensions, so they are not reliable. Therefore, it is not recommended to detect the browser type like this:
  ```javascript
  if (window.navigator.userAgent.includes("Chrome")){
      //do something
  }

  //It is better to detect the needed functionality (feature detection)
  if( typeof window.addEventListener === 'function' ) {
    // let's use addEventListener
  } else {
      // addEventListener is not supported, use another way
  }
  ```

-----

# 4- `location` Object

The `location` object provides information about the current page URL. It also allows changing the URL and redirecting the browser.

## Properties

- **`location.href`**: Returns or sets the full URL of the current page, adding it to the history.
  ```javascript
  console.log(location.href);
  location.href = "https://www.example.com";
  ```

- **`location.protocol`**: Returns the URL protocol (e.g., `http:` or `https:`).
  ```javascript
  console.log(location.protocol);
  ```

- **`location.host`**: Returns the hostname and port (if specified) of the URL.
  ```javascript
  console.log(location.host);
  ```

- **`location.hostname`**: Returns only the hostname without the port.
  ```javascript
  console.log(location.hostname);
  ```

- **`location.port`**: Returns the port of the URL.
  ```javascript
  console.log(location.port);
  ```

- **`location.pathname`**: Returns the path of the URL.
  ```javascript
  console.log(location.pathname);
  ```

- **`location.search`**: Returns the query string of the URL, including the `?`.
  ```javascript
  console.log(location.search);
  ```

- **`location.hash`**: Returns the fragment of the URL, including the `#`.
  ```javascript
  console.log(location.hash);
  ```

## Methods

- **`location.reload()`**: Reloads the current page.
  ```javascript
  location.reload();
  ```

- **`location.replace()`**: Loads a new URL, replacing the current page in history. The user cannot return to the previous page using the back button.
  ```javascript
  location.replace("https://www.example.com");
  ```

- **`location.assign()`**: Loads a new URL but keeps the current page in history.
  ```javascript
  location.assign("https://www.example.com");
  ```

## Notes
- Modifying `location.href` or using `location.assign()` redirects the browser to the new URL.
- The `replace()` method replaces the current page in history, while `assign()` keeps the current page in history.

----

# 5- `history` Object

The `history` object allows interaction with the browser's navigation history and stores information associated with the current page state using a data object, without reloading it. This object can be retrieved when the user navigates back or forward. It provides a way to store information about the visited page, which differs from two other objects used for storing data: `localStorage` and `sessionStorage`.

This object is useful for single-page applications (SPAs) where manipulating the history without reloading the page is necessary.

## Methods

- **`history.back()`**: Goes back to the previous page in history.
  ```javascript
  history.back();
  ```

- **`history.forward()`**: Moves forward to the next page in history.
  ```javascript
  history.forward();
  ```

- **`history.go(n)`**: Moves through history in the specified direction (`n` is positive to move forward, negative to move backward).
  ```javascript
  history.go(-1); // Goes back one page
  history.go(2);  // Moves forward two pages
  ```

When navigating between pages, the browser only remembers the URLs. However, the following methods, `history.pushState()` and `history.replaceState()`, allow storing additional information that remains accessible when the user uses the browser's back and forward buttons. This is an easy way to maintain data in history without needing `localStorage`, `sessionStorage`, or server requests. This information can be accessed using the `history.state` property.

- **`history.pushState(state, title, url)`**: Adds a new entry to the history composed of an object, a title, and a URL, updating the visible URL in the address bar without reloading the page.
  ```javascript
  history.pushState({ page: 2 }, "Page 2", "?page=2");
  console.log(history.state); // { page: 2 }
  ```

- **`history.replaceState(state, title, url)`**: Replaces the current entry in history with one composed of an object, a title, and a URL.
  ```javascript
  history.replaceState({ page: 3 }, "Page 3", "?page=3");
  console.log(history.state); // { page: 3 }
  ```

### Use Cases
- Navigating within an application without losing the current state.
- Allowing users to share specific links, such as a particular image. The following code ensures that if a user shares `https://mywebsite.com?image=5`, opening the link will display the correct image.
  ```javascript
  function viewImage(id) {
    history.pushState({ image: id }, "Image " + id, "?image=" + id);
  }
  ```
- In multi-step forms, changing the URL at each step without losing entered data.
- Updating the URL without generating unnecessary traffic, as long as the changes are minimal.

## Properties

- **`history.length`**: Returns the number of entries in the session history, including the current page.
  ```javascript
  console.log(history.length);
  ```

- **`history.state`**: Returns the state information (the object) associated with the active history entry (the one currently in the URL).
  ```javascript
  history.pushState({ page: 1 }, "Page 1", "?page=1");
  console.log(history.state); // { page: 1 }
  ```

## Related Events
  - **`popstate`**: Fires when the user navigates through the history (e.g., using the browser's forward/back buttons).
  ```javascript
  window.addEventListener('popstate', function(event) {
    console.log('History navigation:', event.state);
  });
  ```

----

# 6- `localStorage` Object

The `localStorage` object allows storing data persistently in the user's browser. 

## Main Features

1. **Lifetime**: Stored data remains in the browser until it is explicitly deleted.
2. **Scope**: Only pages of the same origin (protocol + domain + port) can access the data.
3. **Capacity**: Most modern browsers allow up to **5 MB** of data to be stored per origin.
4. **Data type**: Only text strings (`string`) can be stored. To store objects, they must be converted to text.
5. **Availability**: Data is available in all tabs and windows of the same source.

## Methods

- **`localStorage.setItem(key, value)`**: Stores a value in `localStorage` under a specific key.
     ```javascript
     localStorage.setItem("name", "John");
     ```

- **`localStorage.getItem(key)`**: Retrieves the value stored under a specific key.
     ```javascript
     const name = localStorage.getItem("name");
     console.log(name); // "John"
     ```

- **`localStorage.removeItem(key)`**: Removes an item from `localStorage` by its key.
     ```javascript
     localStorage.removeItem("name");
     ```

- **`localStorage.clear()`**: Removes all stored items in `localStorage` for the current origin.
     ```javascript
     localStorage.clear();
     ```

- **`localStorage.key(index)`**: Returns the name of the key at the specified position.
     ```javascript
     const firstKey = localStorage.key(0);
     console.log(firstKey);
     ```

## Properties

- **`localStorage.length`**: Returns the number of items stored in `localStorage`.
     ```javascript
     const count = localStorage.length;
     console.log(count);
     ```

## Related Events

When data is modified in `localStorage`, a `storage` event is fired in other windows or tabs of the same source. This is useful for synchronising data between tabs.
```javascript
window.addEventListener("storage", (event) => {
    console.log("Change in localStorage:", event.key, event.newValue);
});
```

## Storing Objects and Arrays

Since `localStorage` can only store strings, if you need to save objects or arrays, you must convert them to JSON using `JSON.stringify()` when saving and `JSON.parse()` when retrieving.

  ```javascript
  // Save an object
  const user = { name: "John", age: 30 };
  localStorage.setItem("user", JSON.stringify(user));

  // Retrieve the object
  const savedUser = JSON.parse(localStorage.getItem("user"));
  console.log(savedUser); // { name: "John", age: 30 }
  ```

## Limitations and Considerations
  - Security: Do not store sensitive information (such as passwords or tokens) in `localStorage`, as it is accessible via JavaScript and can be vulnerable to XSS (Cross-Site Scripting) attacks.
  - Synchronization: Changes in `localStorage` do not automatically sync across different devices or browsers.

----

# 7- `sessionStorage` Object

The `sessionStorage` object allows temporary data storage in the browser for the duration of the page session. Data stored in `sessionStorage` is deleted when the browser tab or window is closed.

## Main Features
1. **Lifetime**: The data is only valid for the duration of the page session. If the browser tab or window is closed, the data is lost.
2. **Scope**: Only pages of the same origin (protocol + domain + port) can access the data.
3. **Capacity**: Most modern browsers allow up to **5 MB** of data to be stored per origin.
4. **Data type**: Only text strings (`string`) can be stored. To store objects, they must be converted to text.
5. **Availability**: Data is only available to the tab that created it. Any other tab can NOT access the data, even if it comes from the same source. 

Examples:
  - Same tab, same origin:
    - Open https://www.example.com/page1 and store something in `sessionStorage`.
    - Navigate to https://www.example.com/page2.
    - `sessionStorage` remains accessible, as the origin has not changed.
  - Same tab, different origin:
    - Open https://www.example.com and store something in `sessionStorage`.
    - Navigate to https://www.otherexample.com.
    - `sessionStorage` resets, as the origin has changed.
  - Two tabs, same origin:
    - Open https://www.example.com in two different tabs.
    - Each tab has its own instance of `sessionStorage`, and data is not shared between them.

## Methods

- **`sessionStorage.setItem(key, value)`**: Stores a value associated with a key.
  ```javascript
  sessionStorage.setItem('name', 'John');
  ```

- **`sessionStorage.getItem(key)`**: Retrieves the value associated with a key.
  ```javascript
  let name = sessionStorage.getItem('name');
  console.log(name); // Output: John
  ```

- **`sessionStorage.removeItem(key)`**: Removes the key-value pair associated with the specified key.
  ```javascript
  sessionStorage.removeItem('name');
  ```

- **`sessionStorage.clear()`**: Removes all key-value pairs stored in `sessionStorage`.
  ```javascript
  sessionStorage.clear();
  ```

- **`sessionStorage.key(index)`**: Returns the key at the specified position.
  ```javascript
  sessionStorage.key(3);
  ```
## Properties

- **`sessionStorage.length`**: Returns the number of key-value pairs stored in `sessionStorage`.

## Storing Objects and Arrays

Since `sessionStorage` can only store strings, if you need to save objects or arrays, you must convert them to JSON using `JSON.stringify()` when saving and `JSON.parse()` when retrieving.

  ```javascript
  // Save an object
  const user = { name: "John", age: 30 };
  sessionStorage.setItem("user", JSON.stringify(user));

  // Retrieve the object
  const savedUser = JSON.parse(sessionStorage.getItem("user"));
  console.log(savedUser); // { name: "John", age: 30 }
  ```

----

# 8- Cookies

Cookies are small pieces of data that websites store in the user's browser. They are primarily used to remember information about the user, such as preferences, login sessions, or tracking data, as HTTP is a stateless protocol. They don't actually belong to the BOM, but to the `document` object, which defines the DOM, but since this is defined in the global scope, it becomes a property of the `window` object and can be accessed through `window.document` or `document`.

Each time the user makes a request to the server, the browser returns the cookies that belong to that domain through the "cookie" header. They can be sent with any type of resource, not just web pages, and are associated with a domain. Therefore, there are two types of cookies based on their origin domain:
  - First-party cookies: created by the current domain's server.
  - Third-party cookies: sent by servers with domains different from the one the user is visiting. These are commonly used for advertising and tracking purposes, but browsers are currently limiting their use for privacy reasons.

## What are cookies used for?

Cookies have several common uses:
- **Maintain user session**: For example, remembering that a user has logged in.
- **Store preferences**: Such as language or website theme.
- **Tracking and analytics**: To collect data on user behavior.

## Main features

- **Lifetime**: Data is stored until the defined expiry date. If not defined, it will be deleted when the browser is closed.
- **Scope**: Only pages on the same domain can access the biscuits, although they are not restricted by protocol or port.
- **Capacity**: Usually limited to about 4 KB per biscuit, including name, value and attributes.
- **Data type**: They can only store strings. To store objects, they need to be converted to text.
- **Availability**: They can be accessible from different tabs, windows and browser sessions, as long as they comply with the restrictions of the domain and the established attributes.

## How do cookies work?

1. **The server sends a cookie**: When a user visits a website, the server can send a cookie to the browser via the `Set-Cookie` HTTP header.
2. **The browser stores the cookie**: The browser stores the cookie and sends it back to the server with each subsequent request using the `Cookie` header.

In the browser, cookies can be read and written using the `document.cookie` property.

## Properties

- **`expires`**: Defines the cookie's expiration date. Format: UTC date (e.g., Thu, 31 Dec 2024 12:00:00 UTC).
- **`max-age`**: Defines the cookie's duration in seconds (alternative to `expires`).
- **`path`**: Defines the path where the cookie is valid. Default value: the current document's path.
- **`domain`**: Defines the domain for which the cookie is valid. Default value: the current domain. If `domain.com` is specified, it will be accessible from `sub.domain.com` as well.
- **`secure`**: Indicates that the cookie will only be sent over HTTPS connections.
- **`samesite`**: Controls whether the cookie is sent in cross-site requests. Possible values:
  - Strict: The cookie is only sent in requests from the same site.
  - Lax: The cookie is sent in same-site requests and some cross-site requests (e.g., navigation through links).
  - None: The cookie is sent in all requests (requires `secure` to be enabled).
- **`cookie`**: A property that allows...
  - ...reading it to obtain all the cookies. It contains a text string with `name=value` pairs of all cookies for the domain, separated by semicolons (;). Other properties are not obtained.
  - ...writing it to create new cookies. Fields not specified take default values:
    - `expires` or `max-age`: considered a session cookie, which is deleted when the browser is closed.
    - `path`: the directory in which the cookie is created (for example, on https://example.com/page1, the path is /page1).
    - `domain`: the cookie is only valid on the domain where it was created.
    - `secure`: false
    - `samesite`: lax, meaning it will be sent in first-level navigation requests.

  This property does NOT allow modifying an existing cookie. What it does if the name of an existing cookie is given is actually recreate it. Therefore, you would need to specify the same parameters.

  ```javascript
    document.cookie="user=Procopio"; //Creates a cookie named "user" with value "Procopio"
    document.cookie="address=fish street"; //Creates a cookie named "address" with value "fish street"
    console.log (document.cookie);  //Returns the string "user=Procopio; address=fish street"
    
    //It seems like a modification, but it's actually deleting and recreating it. The same attributes should be specified for it to be a modification
    document.cookie="user=Patrocinio";
  ```

## Cookie Limitations

- **Maximum size**: 4 KB per cookie.
- **Maximum number**: Depends on the browser, but usually around 50 cookies per domain.
- **Security**: Cookies can be vulnerable to attacks like XSS (Cross-Site Scripting) or CSRF (Cross-Site Request Forgery).

## Best practices

- **Do not store sensitive information**: Like passwords or personal data.
- **Use secure cookies**: Whenever possible, use the `Secure` and `SameSite` attributes.
- **Respect user privacy**: Comply with regulations like GDPR.

---

| Feature            | `localStorage` | `sessionStorage` | `history.state` | `Cookies` |
|--------------------|----------------|------------------|-----------------|----------|
| **Persistence**     | Data **does not get deleted** when the browser is closed. | Data **gets deleted** when the tab or browser is closed. | Data **gets deleted** when the page is reloaded or the URL changes. | Cookies can **persist** depending on the value of `expires` or `max-age`. |
| **Scope**           | Available in all tabs using the same URL/origin. | Only available in the current tab. | Only available in the session history. | Accessible from any page within the domain if no specific `path` or `domain` is set. |
| **Capacity**        | ~5-10 MB (depends on the browser). | ~5 MB. | Depends on the browser but usually more **limited**. | Limited to **4 KB** per cookie, and the browser can store multiple cookies per domain. |
| **Accessibility**   | Can be read by any script in the same page. | Only accessible in the current tab. | Only accessible when moving in the history using `popstate`. | Can be accessed via JavaScript using `document.cookie`, but not from other domains (due to the same-origin policy). |
| **Security**        | Not automatically deleted, which can be a privacy risk. | Safer than `localStorage` because the data gets deleted when the tab is closed. | Safer because it is only accessible in the navigation session. | Can be **marked as HttpOnly** to prevent being accessed through JavaScript, improving security. Also, they can have the `secure` attribute to be transmitted only over HTTPS. |
| **Recommended use** | For storing long-term user settings, data that should persist after the browser is closed. | For storing temporary data that should disappear when the tab is closed. | For handling navigation within a SPA or multi-step forms. | For storing data that should be sent to the server with each HTTP request (e.g., authentication, user preferences). |

----

# 9- `performance` Object

The `performance` object provides an interface to access various functionalities related to webpage performance. These functionalities include measuring the load speed and execution of resources. This object is useful for developers when improving the user experience, optimizing load times, and making adjustments to overall web performance.

## Methods

- **`performance.now()`**: Returns the time elapsed in milliseconds since the document was loaded. This property has much higher precision than `Date.now()`, as it is not affected by system clock adjustments.
  ```javascript
  let start = performance.now();

  // Here goes the code you want to measure
  for (let i = 0; i < 1000000; i++) {}

  let end = performance.now();
  console.log(`The code took: ${end - start} milliseconds`);
  ```

- **`performance.mark()`**: Allows marking a specific point in time to measure the performance of a code block.
  ```javascript
  performance.mark('start');

  // Code block to measure
  for (let i = 0; i < 1000000; i++) {}

  performance.mark('end');
  ```

- **`performance.measure()`**: After marking points with `performance.mark()`, you can use `performance.measure()` to measure the time between those specific points.
  ```javascript
  performance.measure('Measure1', 'start', 'end');
  const measures = performance.getEntriesByName('Measure1');
  console.log('Time between marks:', measures[0].duration);
  ```

- **`performance.clearMarks()`**: Removes performance marks created with `performance.mark()`.
  ```javascript
  performance.clearMarks('start');
  performance.clearMarks('end');
  ```

- **`performance.clearMeasures()`**: Removes performance measurements created with `performance.measure()`.
  ```javascript
  performance.clearMeasures('Measure1');
  ```

## Basic usage example

```javascript
// Mark the start of an operation
performance.mark("start");

// Execute some operation (for example, a function)
someFunction();

// Mark the end of the operation
performance.mark("end");

// Measure the time between marks
performance.measure("operationDuration", "start", "end");

// Get the measurement time
const measures = performance.getEntriesByName("operationDuration");
console.log(measures[0].duration);
```

## Common uses

- **Load performance analysis**: Allows measuring how long it takes to load the page or specific parts of it.
- **Optimization of function execution time**: Helps measure how long it takes to execute different code fragments.
- **Debugging and monitoring**: Used to identify performance bottlenecks in web applications.

## Considerations

- The `performance` object is useful in most modern browsers, but some of its properties may not be available or behave differently in older browsers.
- Some properties, like `performance.memory`, are not supported in all browsers.

## Conclusion

The `performance` object is an essential tool for analyzing and improving web application performance. It provides detailed control over execution time measurement and resource monitoring.

[Volver atrás](https://github.com/avianarios/codigo_DWEC/tree/main/unidad%205)