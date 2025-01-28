# Índice

[Introducción](#introducción)
1. [Validación nativa](#1--validación-nativa)
    1. [Atributos nativos de validación](#11--atributos-nativos-de-validación)
    2. [Estilos condicionales](#12--estilos-condicionales)
2. [Validación mixta HTML y JavaScript](#2--validación-mixta-con-html-y-javascript)
3. [Validación con JavaScript](#3--validación-con-javascript)

  
-------

# Introducción

La validación de formularios es un aspecto clave para garantizar que los datos enviados por los usuarios sean correctos, seguros y útiles. Tanto HTML como JavaScript ofrecen formas de validar formularios, pero ambas tienen diferentes fortalezas y limitaciones.

No obstante, no se debe confiar nunca sólo en la validación en el cliente. Siempre hay que validar en el servidor. El usuario puede enviar un formulario falseado o desactivar JavaScript en su navegador.

Hay varios parámetros a tener en cuenta en este tipo de validación:
- **Método de validación**: nativo, JavaScript o mixto.
- **Cuándo validar**: 
  - Si es nativa, siempre es al enviar el formulario.
  - Si es con JavaScript o mixto, puede ser en cualquier momento: al escribir, al pasar a otro campo, al enviar o una combinación de las anteriores.
- **Mensajes de error**: Nativos o con JavaScript.
- **Estilado de los campos del formulario**: Nativo o mediante JavaScript


## Método de validación de campos en el cliente
Se puede realizar de tres formas:
  - de forma nativa, es decir, usando únicamente atributos HTML.
  - mediante JS.
  - mezclando la validación nativa con la de JS.

## Cuándo validar
Marca el momento en el cual se comprueba si la información es correcta. 
  - Validación nativa: siempre al enviar el formulario (evento `submit`).
  - Validación mediante JS: lo normal es hacerla en dos momentos:
    - validar cada campo al escribir (`input`) o al pasar al siguiente campo (`focusout`)
    - al enviar el formulario (`submit`). Es necesario aunque, supuestamente, ya se ha validado cada campo porque puede ocurrir:
      - Campos obligatorios que el usuario nunca tocó (si no lo tocó, la validación no se lanza).
      - Campos relacionados que dependen unos de otros (como contraseñas) que no se validaron correctamente.
      - Errores no detectados debido a la falta de un repaso global.

## Mensajes de error
- Pueden ser nativos, generados automáticamente por el navegador si hay reglas de validación nativas y no se usa `setCustomValidity`. Estos mensajes **se mandarán cuando se intente enviar el formulario ó cuando se use reportValidity()**
- Pueden gestionados por JavaScript de dos formas:
  - Modificando el DOM directamente para insertar elementos de texto.
  - Usando mensajes del sistema, mediante dos métodos:
    - `campo.setCustomValidity("msj")`,que establece un mensaje de error personalizado para un campo de formulario HTML. Al usar este método, el navegador considerará el campo no válido, y el mensaje asignado se mostrará como el error asociado a ese campo **cuando se envíe el formulario**.
    - `campo.reportValidity()`, que muestra inmediatamente el mensaje de error, sea personalizado o nativo (por ese orden) **sin esperar a que se envíe el formulario**.
  
## Estilos condicionales 
A los campos se les puede dar un estilo en función de la validez de sus datos:
  - Mediante estilos condicionales nativos (siempre que haya reglas nativas aplicadas y pseudoclases en el fichero de estilos). Se aplica en cuando las condiciones no se cumplen.
  - Mediante JS, añadiendo o quitando clases.

## formas de validar
  - `form.checkValidity()` es un método del formulario que revisa todos sus campos y devuelve true si todos son válidos, o false si alguno no lo es.
  - `campo.validity.valid` es una propiedad de cada campo que contiene true si cumple con todas las **reglas de validación nativas** que tiene asociadas y false si no. Se usa en validaciones mixtas HTML+JS

-----

# 1- Validación nativa

  Esta forma de validación es nativa, es decir, la proporciona el navegador por defecto y es posible gracias al uso de una serie de **[atributos de validación](#21--atributos-nativos-de-validación)** para campos de entrada.
  
  Incluso si no se usaran atributos de validación HTML, el navegador todavía realiza la validación básica por su cuenta, especialmente en los campos de formularios como correos electrónicos (`type="email"`) o contraseñas (`type="password"`) para asegurar que los datos tengan un formato básico adecuado. 

  Los navegadores evalúan las reglas de validación nativas, si están presentes en el código HTML, para decidir qué campos tienen datos válidos y aplicarles **[estilo condicional](#12--estilos-condicionales)** a los campos según su estado con una serie de **pseudoclases** (siempre que estén presentes en la hoja de estilos).
  
  La validación nativa también proporciona **mensajes de error estándar**, normalmente usando el idioma del sistema.

  - Ventajas:
    - **Simplicidad**: Solo necesitas agregar atributos al formulario o a los campos específicos.
    - **Compatibilidad**: Funciona en navegadores modernos sin necesidad de escribir código adicional.
    - **Mensajes de error automáticos**: Los navegadores muestran mensajes predeterminados cuando un campo no cumple los requisitos.
    - **Expresiones regulares**: Puedes usar el atributo `pattern` para definir reglas personalizadas (ejemplo: validar un correo electrónico).

  - Limitaciones:
    - **Personalización limitada**: Los mensajes de error generados automáticamente no siempre se pueden personalizar de manera sencilla.
    - **Validación básica**: Solo cubre reglas simples; validaciones complejas (como comparar dos campos o validar con datos externos) no son posibles.
    - **Dependencia del navegador**: La validación HTML puede comportarse de manera inconsistente en navegadores antiguos o mal configurados.
    - **No evita manipulaciones maliciosas**: Un usuario puede deshabilitar la validación de HTML desde las herramientas del navegador.


  ## 1.1- Atributos nativos de validación 

  Los atributos nativos de validación **siempre son evaluados** por el navegador (si están presentes), no importa si se usa `novalidate` o no en el formulario. Estos atributos permiten determinar la validez de un campo y que el navegador aplique automáticamente las pseudoclases CSS condicionales (si están presentes en la hoja de estilos).  
    
  - **Atributo `required`**. Impide que un campo esté vacío.
      ```html
        <form>
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required>
          <button type="submit">Enviar</button>
        </form>
      ```

    Si el usuario intenta enviar el formulario sin rellenar el campo `nombre`, el navegador mostrará un mensaje de error indicando que es obligatorio.

  - **Atributo `type`**. Define el tipo de entrada esperada y ayuda a validar automáticamente algunos valores. Ejemplos:
    - **email**: Verifica que el campo tenga un formato válido de correo electrónico.  
    - **url**: Asegura que la entrada sea una URL válida.  
    - **number**: Restringe los valores a números.  
    - **date**: Permite seleccionar fechas con un calendario (en navegadores compatibles).  

    ```html
    <form>
      <label for="email">Correo electrónico:</label>
      <input type="email" id="email" name="email" required>
      
      <label for="edad">Edad:</label>
      <input type="number" id="edad" name="edad" min="18" max="99" required>

      <button type="submit">Enviar</button>
    </form>
    ```

    **Validaciones automáticas:**
      - El campo `email` no aceptará entradas sin un formato válido (ejemplo: test@ejemplo.com).
      - El campo `edad` no permitirá números fuera del rango 18-99.

  - **Atributo `pattern`**. Permite usar expresiones regulares para definir un formato personalizado.

  ```html
    <form>
      <label for="telefono">Teléfono (Formato: 123-456-7890):</label>
      <input type="text" id="telefono" name="telefono" pattern="\d{3}-\d{3}-\d{4}" required>
      <button type="submit">Enviar</button>
    </form>
  ```
  **Cómo funciona:**
    - La expresión regular `\d{3}-\d{3}-\d{4}` exige que el usuario introduzca 3 dígitos, un guion, 3 dígitos más, otro guion y finalmente 4 dígitos.
    - Si el formato no se cumple, el formulario no se enviará.


  - **Atributos de rango `(min, max, step)`**. Se usan principalmente en entradas numéricas o de fecha para restringir los valores permitidos.

    ```html
    <form>
      <label for="peso">Peso (kg):</label>
      <input type="number" id="peso" name="peso" min="30" max="200" step="0.1" required>
      <button type="submit">Enviar</button>
    </form>
    ```

    **Explicación:**
    - `min="30"` y `max="200"` restringen el peso a valores entre 30 y 200 kg.
    - `step="0.1"` permite valores con un decimal (ejemplo: 70.5).

  - **Atributos de longitud `(maxlength, minlength)`**. Definen la longitud mínima y máxima de un texto.

      ```html
      <form>
        <label for="usuario">Nombre de usuario (4-10 caracteres):</label>
        <input type="text" id="usuario" name="usuario" minlength="4" maxlength="10" required>
        <button type="submit">Enviar</button>
      </form>
      ```
      Comportamiento:
        - `minlength="4"` requiere al menos 4 caracteres.
        - `maxlength="10"` limita la entrada a un máximo de 10 caracteres.

-  **Atributo `title`**. Permite mostrar mensajes personalizados cuando una validación falla.

    ```html
    <form>
      <label for="codigo">Código (4 dígitos):</label>
      <input type="text" id="codigo" name="codigo" pattern="\d{4}" title="Debe contener exactamente 4 dígitos" required>
      <button type="submit">Enviar</button>
    </form>
    ```

  - **Atributo `novalidate`**. Permite desactivar temporalmente la validación HTML para un formulario.
    ```html
    <form novalidate>
      <label for="campo">Campo:</label>
      <input type="text" id="campo" name="campo" required>
      <button type="submit">Enviar</button>
    </form>
    ```

  ## 1.2- Estilos condicionales

  Los navegadores modernos aplican automáticamente ciertas pseudoclases en los campos de un formulario (el estilo será visible si está definido en la hoja de estilos) según si los valores introducidos cumplen con las restricciones definidas en los campos del formulario.
    
  Las pseudoclases se aplican siempre que haya atributos de validación, aunque se haya desactivado la validación automática del navegador.

  - **`:valid:`** Se aplica cuando el campo es válido según las reglas de validación HTML.
      ```css
      input:valid {
        border-color: green; /* Verde si el valor es válido */
      }
      ```

  - **`:invalid:`** Se aplica cuando el valor introducido no cumple con las reglas de validación del formulario.
      ```css
      input:invalid {
        border-color: red; /* Rojo si el valor es inválido */
      }
      ```

  - **`:required:`** Se aplica a los campos que tienen el atributo `required`, es decir, que deben ser completados antes de enviar el formulario.
      ```css
        input:required {
          background-color: #f9f9f9; /* Fondo claro para campos requeridos */
        }
        ```

  - **`:optional:`** Se aplica a los campos que no tienen el atributo `required`, es decir, que son opcionales.
      ```css
      input:optional {
        background-color: #e0e0e0; /* Fondo gris para campos opcionales */
      }
      ```

  - **`:focus:`** Se aplica cuando un campo tiene el foco, es decir, cuando está activo (el usuario está escribiendo en el campo).
      ```css
      input:focus {
        outline: 2px solid blue; /* Resaltar el campo con un borde azul cuando tiene el foco */
      }
      ```

  - **`:placeholder-shown`** se aplica cuando un campo de entrada muestra un placeholder (texto de ejemplo dentro del campo) y no ha sido modificado por el usuario. Es útil para dar estilo a los campos que aún no se han llenado.
      ```css
      input:placeholder-shown {
        background-color: #f0f0f0; /* Fondo gris claro cuando el campo muestra un placeholder */
      }
      ```

  - **`:checked`** Se aplica a los elementos de formulario que están seleccionados, como casillas de verificación (`<input type="checkbox">`) o botones de radio (`<input type="radio">`). Se puede usar para aplicar estilos a estos campos cuando están marcados.
      ```css
      input:checked {
        background-color: lightgreen; /* Fondo verde cuando un checkbox o radio está seleccionado */
      }
      ```

  - **`:disabled`** Se aplica a los campos que están deshabilitados (`<input disabled>`). Esta pseudo-clase puede ayudar a dar un estilo específico a los campos que no se pueden editar o enviar.
      ```css
      input:disabled {
        background-color: #e0e0e0; /* Fondo gris para campos deshabilitados */
        cursor: not-allowed; /* Cambia el cursor para indicar que no es interactivo */
      }
      ```

  - **`:enabled`** Se aplica a los campos que están habilitados y disponibles para la interacción. Puedes usarla en combinación con `:disabled` para crear estilos contrastantes entre campos habilitados y deshabilitados.
      ```css
      input:enabled {
        background-color: white; /* Fondo blanco para campos habilitados */
      }
      ```

  - **`:out-of-range`** Se aplica a los campos cuyo valor está fuera de un rango permitido, por ejemplo, en campos numéricos con un atributo `min` y `max` o para los campos `input[type="range"]`.
      ```css
      input:out-of-range {
        border-color: orange; /* Borde naranja para valores fuera del rango */
      }
      ```

  - **`:in-range`** Se aplica cuando el valor de un campo numérico se encuentra dentro de los límites establecidos (por ejemplo, entre un `min` y un `max` especificados).
      ```css
      input[in-range] {
        border-color: blue; /* Borde azul cuando el valor está dentro del rango */
      }
      ```

---

# 2- Validación mixta con HTML y JavaScript

Una estrategia común es usar la validación de HTML para reglas simples y complementarla con JavaScript para casos más avanzados. Por ejemplo:
  1. Define un patrón con el atributo `pattern` en HTML para validar formatos específicos como correos electrónicos o números de teléfono.
  2. Usa JavaScript para:
    - Sobreescribir los mensajes nativos  mediante `campo.setCustomValidity("msj")` **cuando la validación nativa determina que un campo no es válido**. Cuando se utiliza este método, el navegador considerará el campo no válido, y el mensaje que le asignes se mostrará como el error asociado a ese campo **cuando se mande el formulario**. Para mostrar el mensaje inmediatamente (si se está usando un evento `input`), hay que usar `campo.reportValidity()`. Si se reinicia el mensaje personalizado (`campo.setCustomValidity("")`), vuelven a activarse los mensajes nativos. 
    - Validar en tiempo real mientras el usuario escribe mediante el uso del evento `input`
    - Implementar reglas avanzadas que el HTML no cubre.


  ## Ejemplo 1- Validación y estilado nativos. Personalización de los mensajes de error
  - La reglas de validación, que determinan cuándo un campo tiene un valor válido, se escriben directamente en el HTML.
  - El navegador validará automáticamente al enviar el formulario y bloqueará el envío si detecta un campo no válido basado en las reglas nativas.
  - Se mostrarán mensajes de validación nativos, salvo que se use `campo.setCustomValidity("msj")`. Si se desea que se vea el mensaje sin esperar a que se mande el formulario, hay que usar `campo.reportValidity()`


    
      ```html
        <!-- Password Field: Required and must have a minimum length -->
        <section>
          <label for="password">Password (at least 8 characters):</label>
          <input type="password" id="password" name="password" minlength="8" required>
          <small id="passwordError" class="error"></small> <!-- Mensaje de error -->
        </section>

        <!-- Confirm Password: Required and must match the password -->
        <section>
          <label for="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" name="confirm-password" required>
          <small id="confirm-passwordError" class="error"></small> <!-- Mensaje de error -->
        </section>
      ```

      ```javascript
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirm-password');

        confirmPasswordInput.addEventListener('input', function() {
          if (confirmPasswordInput.value !== passwordInput.value) {
            confirmPasswordInput.setCustomValidity("Las contraseñas no coinciden.");
            confirmPasswordInput.reportValidity();
          } else {
            confirmPasswordInput.setCustomValidity(""); // Resetea el mensaje de error
          }
        });
      ```

   
  ## Ejemplo 2: Validación y estilado nativos. Mensajes personalizados con JS
  La reglas de validación, que determinan cuándo un campo tiene un valor válido, se escriben directamente en el HTML.
  El navegador validará automáticamente al enviar el formulario y bloqueará el envío si detecta un campo no válido basado en las reglas nativas.
  Se mostrarán mensajes de validación nativos, salvo que se use `setCustomValidity`

  En este ejemplo, se deja que HTML haga la validación completa. JS sólo comprueba si se cumplen los requisitos que impone la validación nativa y, en caso contrario, muestra un mensaje personalizado con `setCustomValidity`.

  ```html
    <form action="#" method="POST">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
      <button type="submit">Submit</button>
    </form>
  ```
  ```javascript
    const validateField = (field) => {
      // Reseteamos el mensaje de error
      field.setCustomValidity('');
    
      // Validación personalizada
      if (field.required && !field.value.trim()) {
        field.setCustomValidity('Este campo es obligatorio.');
      }
    };
    
    const form = document.querySelector('form1');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar el envío del formulario para validarlo primero
        
      // Validamos el campo
      validateField(form.querySelector('input[name="nombre"]'));
    
      // Si el formulario es válido, lo enviamos
      if (form.checkValidity()) {
        console.log('Formulario válido, enviando...');
        form.submit();
      } else {
        console.log('Por favor, corrige los errores antes de enviar el formulario.');
      }
    });
  ```

  ## Ejemplo 3: Validación nativa y con JS. Estilado con JS
  - La reglas de validación, que determinan cuándo un campo tiene un valor válido, se pueden escribir en el HTML y también en JavaScript. Primero se evaluarán las reglas en el HTML y, después, las de JS. 
  - Se pueden añadir escuchadores de eventos para otros eventos diferentes a `submit` como, por ejemplo `input`, que validen el formulario antes de enviarlo.
  - Hay que evitar que se mande el campo con `preventDefault` para poder hacer la validación en JS y mandarlo, tras haberlo comprobado, con `form.submit()`.
  - Los mensajes de validación serán nativos SALVO que se configure un mensaje personalizado en JavaScript con, por ejemplo, `setCustomValidity("El campo es obligatorio")`. En ese se mostrará dicho mensaje y el campo será considerado no válido, incluso si cumple con las reglas nativas. Si se limpia el mensaje con `setCustomValidity('')`, los mensajes nativos volverán a mostrarse.

  En este ejemplo se realiza validación nativa, ya que los atributos de validación están presentes, pero JS evita que se envíe el formulario mediante el uso de `preventDefault` para hacer comprobaciones adicionales. En este ejemplo, JS simplemente comprueba que HTML ha validado con `input.validity.valid`. Si todo es correcto, manda el formulario con `form.submit()`. JS es quien se encarga de darle estilo usando `classList.add` y `classList.remove`. Para que se aplicaran los estilos nativos, habría que quitar `classList` y añadir las pseudoclases en el código CSS.


  ```html
  <form action="#" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <button type="submit">Submit</button>
  </form>
  ```
  ```javascript
  const formulario = document.getElementById('form1');

  // Función para validar en tiempo real cada campo
  //Se usa la validación del nativa del formulario. Para saber si es válido o no, se lee la propiedad validity.valid del campo
  function validateField(input) {
    if (!input.validity.valid) {
      input.classList.add('invalid');
      input.classList.remove('valid');
      return false;
    } else {
      input.classList.add('valid');
      input.classList.remove('invalid');
      return true;
    }
  }

  // Escuchar el evento 'input' para validar mientras el usuario escribe
  formulario.addEventListener('input', event=>{
    validateField(event.target); // Validar el campo específico que está siendo modificado
  });

  // Escuchar el evento 'submit' para enviar el formulario si es válido
  formulario.addEventListener('submit', event=>{ 
    event.preventDefault(); // Prevenir el envío del formulario por defecto
    const input = formulario.querySelector('input');
    if (validateField(input)) {
      console.log("Formulario válido, enviando...");
      formulario.submit(); // Aquí se envía el formulario si todo es válido
    } else {
      console.log("Formulario no válido, no se enviará.");
    }
  });
  ```

  ## Ejemplo 4: Validación exclusivamente con JS y estilado nativo

  Para validar exclusivamente con JS hay que usar la propiedad `novalidate` del formulario, que implica lo siguiente:
  - Si hubiera atributos nativos en el HTML, **se evaluarían, pero no para evitar el envío del formulario si no se cumplen, sino sólo para aplicar las pseudoclases** como, por ejemplo, `:valid` o `:invalid` (si están definidas en el CSS), ,
  - La lógica de validación que determina si un campo es válido o no y, por tanto, si el formulario se manda o no, se escribe exclusivamente en JavaScript. Podemos usar la validación nativa para detectar si se cumplen con las propiedades y métodos `input.validity` o `input.checkvalidity()`,
  - Los mensajes de validación habrá que mostrarlos mediante JS, usando `setCustomValidity()`. **No se mostrarán mensajes nativos** (ya que las reglas nativas sólo se evalúan para aplicar las pseudoclases)

```html
<form id="form1" action="#" method="POST" novalidate>
  <!-- Name Field: Required and must not be empty -->
  <section>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" minlength="8" required>
    <small id="nameError" class="error"></small> <!-- Mensaje de error -->
  </section>

  <!-- Submit Button -->
  <button type="submit">Submit</button>
</form>
```

```javascript
document.getElementById('form1').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario para validarlo primero
    let isValid = true;
  
    // Solo validamos el campo 'name'
    const nameField = {
      id: 'name',
      required: true,
      minLength: 8,
      errorMessage: 'El nombre es obligatorio y debe tener al menos 8 caracteres'
    };
  
    const nameInput = document.getElementById(nameField.id);
    const nameErrorElement = document.getElementById(`${nameField.id}Error`);
    let errorText = '';
  
    // Validar si es obligatorio
    if (nameField.required && !nameInput.value.trim()) {
      errorText = nameField.errorMessage || `${nameField.id} es obligatorio`;
    }
  
    // Validar longitud mínima si existe
    if (nameField.minLength && nameInput.value.length < nameField.minLength) {
      errorText = nameField.errorMessage || `${nameField.id} debe tener al menos ${nameField.minLength} caracteres`;
    }
  
    // Aplicar el mensaje de error si hay uno
    if (errorText) {
      nameErrorElement.textContent = errorText;
      isValid = false;
    } else {
      nameErrorElement.textContent = ''; // Limpiar el mensaje de error
    }
  
    // Si es válido, permitir el envío
    if (isValid) {
      alert("Formulario válido, se enviará");
      // Aquí puedes usar: this.submit() para enviar el formulario
    } else {
      alert("Por favor, corrige los errores antes de enviar el formulario");
    }
  });
```

----

# 3- Validación con JavaScript

La validación de formularios con JavaScript es una herramienta poderosa que complementa (o incluso reemplaza) la validación basada en HTML. JavaScript permite validar datos de manera más dinámica y personalizada, proporcionando una experiencia de usuario más rica y adaptada a las necesidades de la aplicación.

Las ventajas de usar JavaScript para validar son:
  - **Validación en tiempo real:** Puedes verificar los datos mientras el usuario escribe o selecciona valores, sin necesidad de esperar a que envíe el formulario.
  - **Reglas avanzadas:** Permite implementar validaciones complejas, como:
    - Comparar dos campos (por ejemplo, confirmar una contraseña).
    - Verificar si un nombre de usuario ya existe consultando una API.
    - Validar un formato específico que HTML no soporta.
  - **Mensajes personalizados:** Puedes mostrar mensajes de error más específicos y amigables.
  - **Compatibilidad con APIs externas**: Permite validaciones como verificar si un nombre de usuario ya está tomado mediante una API.
  
Sus limitaciones son:
  - **Dependencia del navegador**: Si JavaScript está deshabilitado, la validación no funcionará.
  - **Más trabajo**: Requiere escribir más código y manejar los errores manualmente.

Para validar exclusivamente con JavaScript, hay que desactivar la validación nativa del navegador mediante la propiedad `novalidate` en la etiqueta `form`. ¿Qué ocurre cuando se desactiva?
  - El navegador **sigue evaluando los atributos de validación nativos** (si están presentes), aunque se use `novalidate` en el formulario. Al ser evaluados, se pueden seguir usando las pseudoclases de estilo condicional (si están en la hoja de estilos).
  - **Los mensajes nativos no se muestran**. Hay que mostrar mensajes personalizados o bien con `setCustomValidity()` (recuerda que `setCustomValidity()` también se puede usar para sobreescribir los mensajes nativos en validaciones donde coexisten HTML y JS) o bien insertando nodos de texto en el DOM.
  - **Si no se impide mediante JavaScript, el navegador permite enviar el formulario aunque los campos tengan un formato incorrecto**.
  - **Las pseudoclases para estilo condicional siguen funcionando** siempre que haya atributos de validación nativos.

  
  ## Ejemplo 1. Validación básica
  Se pueden realizar comprobaciones simples, como asegurarse de que un campo no esté vacío.

  ```html
  <form id="formulario" novalidate>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre">
    <label for="email">Correo electrónico:</label>
    <input type="email" id="email" name="email">
    <button type="submit">Enviar</button>
  </form>

  <script>
    document.getElementById("formulario").addEventListener("submit", (event)=>{
      const nombre = document.getElementById("nombre").value;
      const email = document.getElementById("email").value;

      // Validación simple
      if (nombre.trim() === "") {
        console.log("El nombre es obligatorio.");
        event.preventDefault(); // Evita que el formulario se envíe
      } else if (email.trim() === "") {
        console.log("El correo electrónico es obligatorio.");
        event.preventDefault();
      }
    });
  </script>
  ```

  ## Ejemplo 2. Validación con expresiones regulares
  Puedes usar expresiones regulares para validar formatos específicos, como números de teléfono, contraseñas o correos electrónicos.

  ```html
  <form id="registro" novalidate>
    <label for="telefono">Teléfono (123-456-7890):</label>
    <input type="text" id="telefono" name="telefono">
    <button type="submit">Registrar</button>
  </form>

  <script>
    document.getElementById("registro").addEventListener("submit", (event)=>{
      const telefono = document.getElementById("telefono").value;
      const regexTelefono = /^\d{3}-\d{3}-\d{4}$/; // Expresión regular para el formato 123-456-7890

      if (!regexTelefono.test(telefono)) {
        console.log("El teléfono no tiene el formato correcto (123-456-7890).");
        event.preventDefault();
      }
    });
  </script>
  ```

  ### Ejemplo 3. Validación en tiempo real
  Por defecto la validación ocurre al enviar el formulario, pero se puede proporcionar retroalimentación instantánea mientras el usuario escribe, en lugar de esperar a que intente enviar el formulario.

  ```html
  <form novalidate>
    <label for="password">Contraseña:</label>
    <input type="password" id="password" name="password">
    <small id="error"></small>
  </form>

  <script>
    document.getElementById("password").addEventListener("input", function(){
      const password = this.value;
      const error = document.getElementById("error");

      if (password.length < 8) {
        error.textContent = "La contraseña debe tener al menos 8 caracteres.";
        error.style.color = "red";
      } else {
        error.textContent = "Contraseña válida.";
        error.style.color = "green";
      }
    });
  </script>
  ```

  ## Ejemplo 4. Validación cruzada de campos
  Comprueba si los valores de dos o más campos están relacionados, como la confirmación de contraseñas.

  ```html
  <form id="signup" novalidate>
    <label for="password">Contraseña:</label>
    <input type="password" id="password" name="password">

    <label for="confirm-password">Confirmar contraseña:</label>
    <input type="password" id="confirm-password" name="confirm-password">

    <button type="submit">Registrarse</button>
  </form>

  <script>
    document.getElementById("signup").addEventListener("submit", function (event) {
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;

      if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        event.preventDefault();
      }
    });
  </script>
  ```

  ## Buenas prácticas al validar formularios con JavaScript
    
  1. **Complementar con HTML:** Usa la validación HTML para reglas básicas y JavaScript para validaciones avanzadas o en tiempo real.
  2. **Siempre validar en el servidor:** Aunque JavaScript es útil, nunca debes confiar únicamente en la validación del cliente. Los usuarios pueden deshabilitar JavaScript o manipular los datos enviados.
  3. **Mensajes claros:** Asegúrate de que los mensajes de error sean fáciles de entender y que expliquen cómo solucionar el problema.
  4. **Usar `preventDefault()`:** Esto evita que el formulario se envíe si alguna validación falla.
  5. **Mantén el código modular:** Si tienes múltiples reglas de validación, organiza el código en funciones reutilizables.

----  

# Resumen
1. Validación sólo con HTML o mixta HTML-JS
  - Con HTML:
    - La reglas de validación, que determinan cuándo un campo tiene un valor válido, se escriben directamente en el HTML.
    - El navegador validará automáticamente al enviar el formulario y bloqueará el envío si detecta un campo no válido basado en las reglas nativas.
    - Se mostrarán mensajes de validación nativos.
  - Con HTML+JS:
    - La reglas de validación, que determinan cuándo un campo tiene un valor válido, se pueden escribir en el HTML, con require, maxlength, etc., y también en JavaScript. Primero se evaluarán las reglas en el HTML y, después, las de JS. 
    - Se pueden añadir escuchadores de eventos para otros eventos diferentes a submit como, por ejemplo input, que validen el formulario antes de enviarlo.
    - Los mensajes de validación serán nativos SALVO que se configure un mensaje personalizado en JavaScript con, por ejemplo, `setCustomValidity("El campo es obligatorio")`. En ese se mostrará dicho mensaje y el campo será considerado no válido, incluso si cumple con las reglas nativas. Si se limpia el mensaje con setCustomValidity(''), los mensajes nativos volverán a mostrarse.

        ```Javascript
        input.setCustomValidity("Error personalizado");
        console.log(input.validity.valid); // false
        input.setCustomValidity(""); // Limpias el mensaje personalizado
        console.log(input.validity.valid); // Ahora refleja si cumple las reglas nativas
        ```

2. Validación sólo con JS (novalidate)
    - Las reglas de validación, que determinan cuándo un campo tiene un valor válido, pueden escribirse tanto en el HTML con `required`, `pattern`, etc. (aunque se use novalidate), como en JavaScript.
    - Si hubiera reglas nativas en el HTML como `required`, `pattern` o `minlength`, **se evaluarían, pero no para evitar el envío del formulario si no se cumplen, sino sólo para aplicar las pseudoclases** como, por ejemplo, `:valid` o `:invalid` (si están definidas en el CSS), ,
    - La lógica de validación que determina si un campo es válido o no y, por tanto, si el formulario se manda o no, se escribe exclusivamente en JavaScript y para detectar si se cumplen hay que usar las propiedades y métodos `input.validity` o `input.checkvalidity()`,
    - Los mensajes de validación habrá que mostrarlos mediante JS, usando `setCustomValidity()`. **No se mostrarán mensajes nativos** (ya que las reglas nativas sólo se evalúan para aplicar las pseudoclases)
    - Se pueden añadir escuchadores de eventos para otros eventos diferentes a `submit` como, por ejemplo `input`, que validen los campos del formulario antes de enviarlo.

# Comparativa: Validación Nativa, con JavaScript y Mixta

| **Aspecto**                        | **Validación Nativa**                                                                                          | **Validación con JavaScript (novalidate)**                                                                        | **Validación Mixta**                                                                                                                                         |
|------------------------------------|---------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Configuración**                  | Atributos HTML como `required`, `pattern`, `minlength`, etc.                                                   | Uso de `novalidate` en el formulario para evitar la validación nativa y controlar todo con JavaScript.           | Atributos HTML combinados con lógica en JavaScript para personalizar o extender la validación.                                                                |
| **Evaluación de reglas**           | Automática, basada en atributos HTML.                                                                          | Controlada manualmente con lógica en JavaScript.                                                                 | Automática para las reglas nativas y manual para la lógica personalizada.                                                                                     |
| **Mensajes de error**              | Mensajes nativos proporcionados por el navegador o personalizados con `setCustomValidity()`.                   | Personalizados mediante JavaScript y mostrados en el DOM, generalmente con elementos como `<span>` o `<small>`.  | Los mensajes nativos se pueden sobrescribir con `setCustomValidity()`. Los mensajes adicionales se gestionan con JavaScript.                                   |
| **Pseudoclases CSS**               | Se aplican automáticamente (`:valid`, `:invalid`) según las reglas nativas.                                    | También se aplican, pero no afectan el envío del formulario.                                                     | Las pseudoclases nativas funcionan para las reglas HTML; se pueden combinar con clases adicionales manipuladas mediante JavaScript.                            |
| **Prevención del envío**           | Automática si algún campo no cumple las reglas nativas.                                                        | Manual, usando `event.preventDefault()` en el evento `submit`.                                                   | La validación nativa previene el envío automáticamente si las reglas no se cumplen; la lógica JS puede bloquearlo según sea necesario.                        |
| **Flexibilidad**                   | Limitada a las reglas nativas que permite HTML.                                                                | Totalmente flexible; puedes implementar cualquier lógica personalizada.                                          | Combinación de reglas nativas y flexibilidad para añadir reglas específicas no soportadas por HTML.                                                           |
| **Compatibilidad**                 | Estándar en navegadores modernos.                                                                              | Requiere navegadores que soporten JavaScript.                                                                    | Compatible con navegadores modernos que soporten tanto HTML5 como JavaScript.                                                                                 |
| **Facilidad de implementación**    | Alta: no requiere JavaScript para validaciones simples.                                                        | Moderada: requiere más código para implementar validaciones desde cero.                                          | Moderada: requiere conocimientos tanto de validación nativa como de JavaScript para personalizar.                                                             |
| **Control total**                  | Limitado a las reglas predefinidas en HTML.                                                                    | Completo control sobre cada aspecto de la validación.                                                            | Control compartido: las reglas nativas gestionan los casos estándar y JavaScript se usa para personalización avanzada.                                         |
| **Uso de `setCustomValidity()`**   | Permite personalizar mensajes nativos cuando la validación nativa detecta errores.                             | No tiene efecto directo, ya que no se usan mensajes nativos.                                                     | Se usa para modificar mensajes nativos cuando coexisten reglas nativas con lógica personalizada.                                                              |
| **Casos de uso recomendados**      | Formularios simples donde las reglas estándar (`required`, `pattern`, etc.) son suficientes.                    | Formularios complejos con validaciones específicas o dinámicas (ej., validación cruzada entre campos).           | Formularios donde las reglas estándar cubren parte de las necesidades y se requieren algunas validaciones personalizadas adicionales.                          |

### Resumen
1. **Validación Nativa:** Es ideal para formularios simples, con reglas estándar predefinidas y manejo automático de errores.
2. **Validación con JavaScript:** Se usa cuando necesitas validaciones avanzadas, personalización total o validaciones dinámicas no soportadas por HTML.
3. **Validación Mixta:** Combina lo mejor de ambos mundos, aprovechando la simplicidad de las reglas nativas con la flexibilidad de JavaScript para validaciones avanzadas.


[Volver atrás](https://github.com/avianarios/codigo_DWEC/tree/main/unidad%205)
