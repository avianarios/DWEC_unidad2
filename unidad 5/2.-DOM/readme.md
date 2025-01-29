# 2. DOM (Document Object Model)

## Contents
1. [Selecting DOM elements](#1---selecting-dom-elements)
2. [Manipulating attributes and properties](#2---manipulating-attributes-and-properties)
3. [Modifying DOM](#3---modifying-dom)
4. Navigating DOM
5. [Events](#5---events)
    1. [Common events](#51--common-events)
    2. [Handling events](#52--handling-events)
    3. [Delegating event handling](#53--delegating-event-handling)

------

The DOM (Document Object Model) is a tree-like representation of an HTML or XML document that allows scripts to access and modify its content, structure and style. It is an interface that browsers provide to manipulate web pages dynamically using JavaScript.

It provides a series of objects to represent the elements of a web, methods to modify it and events to interact with it, being possible to do the following:
  - Select nodes
  - Modify its content
  - Modify attributes
  - Create and delete nodes
  - React to events


## 1 - Selecting DOM elements

Window` is the global object representing the web browser window. `document` is a property of the `window` object representing the loaded web page. It is the DOM entry point for accessing any element.

document` also has properties that represent the elements of the web page:
  - html
  - head
  - body

The tag selection methods return the following types of objects:
  - `HTMLElement` a node
  - `HTMLCollection` a collection of nodes
    - dynamically updated if changes are made to the DOM
    - Accessed by numeric index, by name or by id
    - Traversal as an iterable list
    - Can be traversed with for or forEach if converted to Array (Array.from())
  - NodeList
    - Not updated if changes are made to the DOM (except Node.childNodes)
    - Accessed by numeric index only
    - Can be traversed with forEach

Selectors that can return multiple elements ALWAYS return a list or collection, even if there is one or no nodes.

NodeList` or `HTMLCollection` are not arrays. The main differences could be:
  - you can't use array methods like push, pop, slice, join, shift...
  - The `HTMLCollection` elements are dynamic, while Arrays are always static.

The methods for selecting nodes are:
  - Those that return a `HTMLElement` (a single node) 
    - `document.getElementByID(‘id’)`
    - `document.querySelector(‘selectorCSS’)`.
  - Those that return an `HTMLCollection` (living collection):
    - `document.getElementsByTagName(‘tag’)` `.
    - `document.getElementsByClassName(‘class’)`.
  - Those returning a `NodeList` (static collection)
    - `document.getElementsByName(‘name’)` `document.querySelector
    - `document.querySelectorAll(‘selectorCSS’)`

----

## 2 - Manipulating attributes and properties

### Attributes:
- These are the values defined directly in an element's HTML markup, such as `alt` or `src`.
- They are stored in the DOM exactly as defined in the HTML.
- They do not always reflect the current state of elements. If you change a property in JavaScript, the corresponding attribute in the DOM may not update, and vice versa.
- They are accessed and modified using the `getAttribute()` and `setAttribute()` methods.

### Properties:
- These are dynamic values maintained by the browser that reflect the current state of an element.
- They are not necessarily synchronized with HTML attributes.
- They are defined via the element objects in JavaScript and accessed using the dot operator (`.`).

### Examples of Differences Between Attributes and Properties:

- **Checkbox (`checked`)**:
  - Attribute: `input.getAttribute("checked")` returns `null` or `"checked"`, depending on whether the attribute is present in the initial HTML.
  - Property: `input.checked` returns `true` or `false`, reflecting the current state of the checkbox (which can change dynamically).

- **Link (`href`)**:
  - Attribute: `link.getAttribute("href")` returns the original attribute value as it appears in the HTML, such as `./page.html`.
  - Property: `link.href` returns the absolute URL calculated by the browser, such as `http://example.com/page.html`.

- **Disabled (`disabled`)**:
  - Attribute: `button.getAttribute("disabled")` returns `"disabled"` if the attribute is present, or `null` if it is not.
  - Property: `button.disabled` returns `true` or `false`, indicating whether the button is currently disabled.


### Example:
```javascript
let elemento = document.querySelector("img");
elemento.src = "nueva-imagen.jpg";  // está manipulando la propiedad src
elemento.setAttribute("src", "nueva-imagen.jpg");  // manipulando el atributo src
```

Some DOM elements have properties that do not have a corresponding attribute. For example:  
- `input.checked` (property) reflects whether a checkbox is currently checked, but the `checked` attribute only has a value in the HTML if it is present. Changing the `checked` property using the dot operator will alter the checkbox's selection state, but it will not directly affect the `checked` attribute.  
- Other examples include `disabled` and `selected`.  

Other attributes are not linked to properties with the same name, such as `href`.  
- `link.href` returns the absolute URL, while `link.getAttribute("href")` returns the value as it appears in the HTML (which may not be an absolute URL).  

### Summary:
An attribute controls the initial configuration, while a property reflects the current behavior. The `checked` attribute indicates the checkbox is initially checked, and the `checked` property reflects whether it is currently checked (this can change in real-time).  

### Custom Attributes and Properties:
You can create custom attributes and properties. A common convention is to prefix their names with `data-`.

### Which to use: attribute or property?
- **Should it appear in the DOM because a tool needs to interact with it?** → Attributes (`setAttribute` and `getAttribute`).  
- **Is it for internal use in the program's logic?** → Properties (`.`).  

----

## 3 - Modifying DOM

# XSS Warning

**Warning!!!!!**  
Despite modern browsers protecting you from XSS (Cross-Site Scripting) and disabling script execution when inserted, **never insert HTML obtained from untrusted sources** like databases, forms, or user input without cleaning it first. This could lead to security risks on unprotected or old web browsers.

Here you can see three ways of preventing malicious scripts from executing
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

# 5 - Events
An **event** is an action or change that occurs on a web page or in the browser, either due to user interaction or to system processes. We can associate actions with events such as:
    - The page finishes loading
    - The user clicks a button
    - The user hovers over a dropdown
    - The user submits a form
    - The user presses a key on their keyboard

## Key concepts
- **Event handler:** A JavaScript function to be executed when an event occurs.
- **Event listener:** An interface that ‘listens’ for a specific event on an element and executes the associated callback when it occurs.

## 5.1- Common events

**Caution: This is not an official manual. This is not an official manual. Not all events and their properties are shown here, but only the most commonly used ones.**

### Types of events
The most common events and when they are triggered are described below:

- **Mouse events**:
  - `click`: the user clicks on an element.
  - `dblclick`: the user double clicks.
  - `mouseover`: the mouse passes over an element.
  - `mouseout`: the mouse leaves an element.
  - `mousemove`: the mouse moves inside an element.
  - `mouseenter`: Similar to `mouseover`, but does not propagate to child elements.
  - `mouseleave`: Similar to `mouseout`, but does not propagate to child elements.
  - `contextmenu`: the user presses right click (opens the context menu).

- **Keyboard events**:
  - `keydown`: the user presses a key.
  - `keyup`: the user releases a key.

- **Form events**:
  - `submit`: a form is submitted.
  - `focus`: A "focusable" element gains focus when it becomes the user's interaction target after being clicked with the mouse, navigated to with the tab key, or using the `element.focus()` method. There can only be one element with focus at a time. This event only propagates during the capturing phase, so it is not recommended.
  - `focusin`: Similar to `focus`, but it works during the bubbling phase. Recommended.
  - `blur`: An element loses focus when it stops being the user's interaction target after another "focusable" element is clicked with the mouse, navigated to with the tab key, or the `element.focus()` method is used. It loses focus because another element has gained it. This event only propagates during the capturing phase, so it is not recommended.
  - `focusout`: Similar to `blur`, but it works only during the bubbling phase. Recommended.
  - `change`: an input field loses focus and its content has changed.
  - `input`: every time that user interacts with the input field, as long as it keeps focused.

 Which elements are focusable by default?

Interactive elements such as `input`, `button`, `a`, `textarea`, `select`, etc. You can make non-interactive elements focusable using the `tabindex` attribute, but this is not recommended because it does not align with user expectations and can cause confusion. Alternatively, you can use the `element.focus()` method.

- **Document/window events**:
  - `DOMContentLoaded`: When the DOM is fully loaded without stylesheets, images or subframes.
  - `load`: all resources (images, scripts, etc.) are fully loaded.
  - `resize`: the browser window is resized.
  - `scroll`: the user scrolls the page.

- **Clipboard events**:
  - `cut`: the user cuts text.
  - `copy`: the user copies text.
  - `paste`: the user pastes text.



### Event Attributes

When an event occurs, the browser creates an `event` object that is passed as an argument to the event handler. Events have **attributes** that allow you to work with them. These attributes depend on the type of event, but some are common to all events. Some of them are as follows:

When an event is triggered, the browser generates an event object (which will be passed as an argument to the event handler) that has a series of attributes containing information about it. These attributes depend on the type of event, but some are common to all.

- **Common attributes** for all events:
  - `type`: the type of event.
  - `isTrusted`: whether the event was generated by the browser (true) or through JavaScript (false).
  - `timeStamp`: the moment the event occurred, expressed in milliseconds since the page load began.
  - `target`: reference to the object where the event occurred.
  - `currentTarget`: reference to the object to which the event handler is assigned.

  Both target and currentTarget have the following attributes:
  - `id`: the identifier of the DOM node.
  - `className`: the name of the class.
  - `classList`: a list of the element's classes.
  - `value`: in form elements, it contains the value entered by the user.
  - `name`: the name of the element (sometimes in uppercase).
  - `type`: the type of element (button, submit, etc.)
  - `href`
  - `alt`
  - `dataset`: accesses the custom `data-` attributes.

- **Mouse event attributes**
  - `clientX`: Horizontal coordinate of the mouse pointer, relative to the browser window.
  - `clientY`: Vertical coordinate of the mouse pointer, relative to the browser window.
  - `screenX`: Horizontal coordinate of the mouse pointer, relative to the screen.
  - `screenY`: Vertical coordinate of the mouse pointer, relative to the screen.
  - `pageX`: The horizontal coordinate of the mouse pointer, relative to the full document (including page scroll).
  - `pageY`: The vertical coordinate of the mouse pointer, relative to the full document.
  - `offsetX`: The horizontal coordinate of the mouse pointer, relative to the left edge of the element that triggered the event.
  - `offsetY`: The vertical coordinate of the mouse pointer, relative to the top edge of the element that triggered the event.
  - `button`: Indicates which mouse button was pressed (0: left button, 1: middle button, 2: right button).
  - `buttons`: Indicates which mouse buttons are pressed at the time of the event. It is a numeric value that uses a bitmask to represent the pressed buttons.

- **Keyboard event attributes**
  - `key`: The value of the key that was pressed, such as "a", "Enter", "ArrowLeft", etc.
  - `altKey`: A boolean value indicating if the Alt key was pressed when the event occurred.
  - `ctrlKey`: A boolean value indicating if the Ctrl key was pressed when the event occurred.
  - `shiftKey`: A boolean value indicating if the Shift key was pressed when the event occurred.
  - `metaKey`: A boolean value indicating if the Meta key (typically the "Windows" key or "Command" key on macOS) was pressed when the event occurred.
  - `repeat`: A boolean value indicating if the key is repeating (for example, when a key is held down).

- **Touch event attributes**
  - `targetTouches`: Returns a list of the current touch points on the screen area.
  - `touches`: Returns all touch points on the screen at the time of the touch event.
  - `changedTouches`: Returns the touch points that have changed (for example, when a finger is lifted from the screen).

- **Form event attributes**
  - `disabled`
  - `checked`
  - `files`: files selected in a `file` type input field.


## 5.2- Handling events
Four ways of working with events:

1. **Inline event handlers**  
   **Not recommended.** Mixing HTML and JavaScript makes maintenance difficult and does not allow multiple handlers to be added for the same event.

   ```html
    <button onClick="console.log('¡Saludos, criatura!')">Saludar</button>
    <button id="enviar" onclick="saludar()">Enviar</button>
    <script>
        let saludar = () => console.log ("¡Saludos, criatura!");
    </script>
   ```

2. **Event handler as a property** 
    **Not recommended.** Functions are assigned to events via properties such as onclick.
    **Problems:** Only one handler can be associated with each event, limiting flexibility. This approach also lacks support for adding multiple listeners or fine-grained control over event handling.

   ```javascript
    let boton = document.querySelector("button");
    boton.onclick = function () { console.log("¡Saludos, criatura!"); };
   ```

3. **Inline-like event assignment using attributes**
    **The worst option.** Sets the event attribute directly in the DOM as a string, which is evaluated as code when the event occurs.
    **Problems:** String is evaluated in the global context, which may cause security problems or issues with `this`. Besides, complex functions can't be passed as callbacks and only one handler is allowed per event.

  ```javascript
    let boton=document.querySelector("button");
    boton.setAttribute("onclick", "console.log('saludos, criatura')");  //arrow functions doesn't work
   ```

4. **Using event listeners** 
    **Recommended.** This method allows multiple handlers to be associated with the same event. It offers more control over event handling, is more flexible, does not rely on HTML attributes or strings, allows the use of custom events, and separates presentation and logic.

    ```javascript
    let boton=document.querySelector("#formulario_contacto button");
    boton.addEventListener("click", function (){        //it's click, not onclick
        console.log('¡Saludos, criatura!');
    });
    ```

## 5.3- Delegating event handling

The standard DOM Events describes 3 phases of event propagation:

1. **Capturing phase** – the event goes all the way down, looking for the event handler, from the main objetc `Window > Document > HTML > ...` until gets the element where the event occurred.
2. **Target phase** – the event reaches the target element. It isn't handled separately; it's part of both the capturing and bubbling phases.
3. **Bubbling phase** – the event bubbles all the way up, looking for the event handler, starting at the element where the event occurred, going through every parent container until it gets to `HTML > Document > Window`.

By default all events use bubbling phase. They have their origin at the element that created them and, then, they go all their way up to Window object stopping at the first element that handles them

[Volver atrás](https://github.com/avianarios/codigo_DWEC/tree/main/unidad%205)
