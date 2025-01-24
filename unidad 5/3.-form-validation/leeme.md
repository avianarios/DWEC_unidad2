## Contents

1. [Validación de formularios](#validación-de-formularios)
2. [Validando con HTML](#validando-con-html)
3. [Validando con JavaScript](#validando-con-javascript)

-------

# Validación de Formularios

La validación de formularios es un aspecto clave para garantizar que los datos enviados por los usuarios sean correctos, seguros y útiles. Tanto HTML como JavaScript ofrecen formas de validar formularios, pero ambas tienen diferentes fortalezas y limitaciones.

## Validación con HTML

HTML proporciona atributos incorporados para validar entradas, como `required`, `pattern`, `min`, `max`, `maxlength`, `type`, entre otros. Estas características son fáciles de usar y funcionan sin necesidad de JavaScript.

### Ventajas:

- **Simplicidad**: Solo necesitas agregar atributos al formulario o a los campos específicos.
- **Compatibilidad**: Funciona en navegadores modernos sin necesidad de escribir código adicional.
- **Mensajes de error automáticos**: Los navegadores muestran mensajes predeterminados cuando un campo no cumple los requisitos.
- **Expresiones regulares**: Puedes usar el atributo `pattern` para definir reglas personalizadas (ejemplo: validar un correo electrónico).

### Limitaciones:

- **Personalización limitada**: Los mensajes de error generados automáticamente no siempre se pueden personalizar de manera sencilla.
- **Validación básica**: Solo cubre reglas simples; validaciones complejas (como comparar dos campos o validar con datos externos) no son posibles.
- **Dependencia del navegador**: La validación HTML puede comportarse de manera inconsistente en navegadores antiguos o mal configurados.
- **No evita manipulaciones maliciosas**: Un usuario puede deshabilitar la validación de HTML desde las herramientas del navegador.

## Validación con JavaScript

JavaScript permite una validación más avanzada y dinámica, ya sea complementando la validación HTML o reemplazándola por completo.

### Ventajas:

- **Flexibilidad**: Puedes implementar cualquier regla de validación, sin importar lo compleja que sea.
- **Interactividad**: Es posible dar retroalimentación en tiempo real, como mostrar un mensaje de error mientras el usuario escribe.
- **Validación avanzada**: Puedes validar datos cruzados (como confirmar que una contraseña coincide con su confirmación) o realizar validaciones en el lado cliente antes de enviarlas al servidor.
- **Compatibilidad con APIs externas**: Permite validaciones como verificar si un nombre de usuario ya está tomado mediante una API.

### Limitaciones:

- **Dependencia del navegador**: Si JavaScript está deshabilitado, la validación no funcionará.
- **Más trabajo**: Requiere escribir más código y manejar los errores manualmente.

## ¿Es realmente necesario usar JavaScript para validar formularios?

Depende del contexto:

- **Validación simple**: Para formularios básicos, la validación de HTML puede ser suficiente, especialmente si usas atributos como `pattern` o `required`.
- **Validación avanzada**: Si necesitas validaciones dinámicas, personalizadas o interacciones complejas, JavaScript es indispensable.
- **Seguridad**: Aunque tengas validación con JavaScript o HTML, siempre debes validar en el lado del servidor para proteger tu aplicación de manipulaciones maliciosas, ya que los usuarios pueden modificar o deshabilitar las validaciones del cliente.

## Combinando HTML, Expresiones Regulares y JavaScript

Una estrategia común es usar la validación de HTML para reglas simples y complementarla con JavaScript para casos más avanzados. Por ejemplo:

1. Define un patrón con el atributo `pattern` en HTML para validar formatos específicos como correos electrónicos o números de teléfono.
2. Usa JavaScript para:
   - Mostrar mensajes personalizados.
   - Validar en tiempo real mientras el usuario escribe.
   - Implementar reglas avanzadas que el HTML no cubre.

-----

## Validación mediante HTML

1. **Atributo `required`**

Este atributo asegura que un campo no pueda estar vacío.

```html
<form>
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" required>
  <button type="submit">Enviar</button>
</form>
```

Si el usuario intenta enviar el formulario sin rellenar el campo `nombre`, el navegador mostrará un mensaje de error indicando que es obligatorio.

2. **Atributo `type`**

El atributo `type` define el tipo de entrada esperada y ayuda a validar automáticamente algunos valores. Ejemplos:

- **email**: Verifica que el campo tenga un formato válido de correo electrónico.  
- **url**: Asegura que la entrada sea una URL válida.  
- **number**: Restringe los valores a números.  
- **date**: Permite seleccionar fechas con un calendario (en navegadores compatibles).  


```html
<form>
  <label for="email">Correo electrónico:</label>
  <input type="email" id="email" name="email" required>
  <br>
  <label for="edad">Edad:</label>
  <input type="number" id="edad" name="edad" min="18" max="99" required>
  <br>
  <button type="submit">Enviar</button>
</form>
```

**Validaciones automáticas:**
- El campo `email` no aceptará entradas sin un formato válido (ejemplo: test@ejemplo.com).
- El campo `edad` no permitirá números fuera del rango 18-99.

3. **Atributo `pattern`**

El atributo `pattern` permite usar expresiones regulares para definir un formato personalizado.

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

4. **Atributos de rango `(min, max, step)`**

Se usan principalmente en entradas numéricas o de fecha para restringir los valores permitidos.

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

5. **Atributos de longitud `(maxlength, minlength)`**

Definen la longitud mínima y máxima de un texto.

```html
<form>
  <label for="usuario">Nombre de usuario (4-10 caracteres):</label>
  <input type="text" id="usuario" name="usuario" minlength="4" maxlength="10" required>
  <button type="submit">Enviar</button>
</form>
```
    Comportamiento:
        `minlength="4"` requiere al menos 4 caracteres.
        `maxlength="10"` limita la entrada a un máximo de 10 caracteres.

6. **Atributo `title`**

Puedes usar el atributo `title` para mostrar mensajes personalizados cuando una validación falla.

```html
<form>
  <label for="codigo">Código (4 dígitos):</label>
  <input type="text" id="codigo" name="codigo" pattern="\d{4}" title="Debe contener exactamente 4 dígitos" required>
  <button type="submit">Enviar</button>
</form>
```
    Si el usuario introduce un valor incorrecto, verá el mensaje del atributo `title`.

7. **Atributo `novalidate`**

Si deseas desactivar temporalmente la validación HTML para un formulario, usa el atributo `novalidate`.

<form novalidate>
  <label for="campo">Campo:</label>
  <input type="text" id="campo" name="campo" required>
  <button type="submit">Enviar</button>
</form>

### Consideraciones finales

- **Simplicidad**: La validación HTML es rápida y fácil de implementar.  
- **Seguridad**: No es suficiente para proteger tu aplicación, ya que los usuarios pueden modificar el formulario desde el navegador. Siempre complementa con validación en el servidor.  
- **Mensajes personalizados**: Aunque HTML ofrece validación automática, la personalización es limitada. Si necesitas más control sobre los mensajes, JavaScript es el complemento ideal.

---

# Validando con JavaScript

La validación de formularios con **JavaScript** es una herramienta poderosa que complementa (o incluso reemplaza) la validación basada en HTML. JavaScript permite validar datos de manera más dinámica y personalizada, proporcionando una experiencia de usuario más rica y adaptada a las necesidades de tu aplicación.

### ¿Por qué usar JavaScript para la validación de formularios?

1. **Validación en tiempo real:** Puedes verificar los datos mientras el usuario escribe o selecciona valores, sin necesidad de esperar a que envíe el formulario.
2. **Reglas avanzadas:** Permite implementar validaciones complejas, como:
   - Comparar dos campos (por ejemplo, confirmar una contraseña).
   - Verificar si un nombre de usuario ya existe consultando una API.
   - Validar un formato específico que HTML no soporta.
3. **Mensajes personalizados:** Puedes mostrar mensajes de error más específicos y amigables.
4. **Control total:** JavaScript te da el control completo sobre cuándo y cómo se valida el formulario.

### Tipos de validación con JavaScript

#### 1. Validación básica
Puedes usar los valores de los campos y realizar comprobaciones simples, como asegurarte de que no estén vacíos.

```html
<form id="formulario">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre">
  <br>
  <label for="email">Correo electrónico:</label>
  <input type="email" id="email" name="email">
  <br>
  <button type="submit">Enviar</button>
</form>

<script>
  document.getElementById("formulario").addEventListener("submit", function (event) {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;

    // Validación simple
    if (nombre.trim() === "") {
      alert("El nombre es obligatorio.");
      event.preventDefault(); // Evita que el formulario se envíe
    } else if (email.trim() === "") {
      alert("El correo electrónico es obligatorio.");
      event.preventDefault();
    }
  });
</script>
```

#### 2. Validación con expresiones regulares
Puedes usar expresiones regulares para validar formatos específicos, como números de teléfono, contraseñas o correos electrónicos.

```html
<form id="registro">
  <label for="telefono">Teléfono (123-456-7890):</label>
  <input type="text" id="telefono" name="telefono">
  <br>
  <button type="submit">Registrar</button>
</form>

<script>
  document.getElementById("registro").addEventListener("submit", function (event) {
    const telefono = document.getElementById("telefono").value;
    const regexTelefono = /^\d{3}-\d{3}-\d{4}$/; // Expresión regular para el formato 123-456-7890

    if (!regexTelefono.test(telefono)) {
      alert("El teléfono no tiene el formato correcto (123-456-7890).");
      event.preventDefault();
    }
  });
</script>
```

#### 3. Validación en tiempo real
Puedes proporcionar retroalimentación instantánea mientras el usuario escribe, en lugar de esperar a que intente enviar el formulario.

```html
<form>
  <label for="password">Contraseña:</label>
  <input type="password" id="password" name="password">
  <span id="error"></span>
</form>

<script>
  document.getElementById("password").addEventListener("input", function () {
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

#### 4. Validación cruzada de campos
Comprueba si los valores de dos o más campos están relacionados, como la confirmación de contraseñas.

```html
<form id="signup">
  <label for="password">Contraseña:</label>
  <input type="password" id="password" name="password">
  <br>
  <label for="confirm-password">Confirmar contraseña:</label>
  <input type="password" id="confirm-password" name="confirm-password">
  <br>
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

### Buenas prácticas al validar formularios con JavaScript

1. **Complementar HTML:** Usa la validación HTML para reglas básicas y JavaScript para validaciones avanzadas o en tiempo real.
2. **Siempre validar en el servidor:** Aunque JavaScript es útil, nunca debes confiar únicamente en la validación del cliente. Los usuarios pueden deshabilitar JavaScript o manipular los datos enviados.
3. **Mensajes claros:** Asegúrate de que los mensajes de error sean fáciles de entender y que expliquen cómo solucionar el problema.
4. **Usar `preventDefault()`:** Esto evita que el formulario se envíe si alguna validación falla.
5. **Mantén el código modular:** Si tienes múltiples reglas de validación, organiza el código en funciones reutilizables.

### ¿Cuándo usar solo JavaScript y no HTML?

1. Cuando necesitas **validación avanzada** que HTML no puede manejar.
2. Cuando usas **formularios dinámicos** donde los campos se generan o cambian de manera programada.
3. Si necesitas integrar validaciones con APIs externas para verificar datos en tiempo real.


[Volver atrás](https://github.com/avianarios/codigo_DWEC/tree/main/unidad%205)
