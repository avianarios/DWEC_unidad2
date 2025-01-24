## Contents

1. [Form validation](#form-validation)
2. [Validating with HTML](#validating-with-html)
3. [Validating with JavaScript](#validating-with-javascript)


-----


# Form Validation

Form validation is a key aspect to ensure that the data submitted by users is correct, secure, and useful. Both HTML and JavaScript offer ways to validate forms, but each has different strengths and limitations.

## Validation with HTML

HTML provides built-in attributes for validating inputs, such as `required`, `pattern`, `min`, `max`, `maxlength`, `type`, among others. These features are easy to use and work without the need for JavaScript.

### Advantages:

- **Simplicity**: You only need to add attributes to the form or specific fields.
- **Compatibility**: Works in modern browsers without writing additional code.
- **Automatic error messages**: Browsers display default messages when a field does not meet the requirements.
- **Regular expressions**: You can use the `pattern` attribute to define custom rules (e.g., validating an email address).

### Limitations:

- **Limited customization**: Automatically generated error messages cannot always be easily customized.
- **Basic validation**: Only covers simple rules; complex validations (like comparing two fields or validating with external data) are not possible.
- **Browser dependency**: HTML validation may behave inconsistently in older or improperly configured browsers.
- **Does not prevent malicious manipulation**: A user can disable HTML validation using browser developer tools.


## Validation with JavaScript

JavaScript allows for more advanced and dynamic validation, either complementing HTML validation or replacing it entirely.

### Advantages:

- **Flexibility**: You can implement any validation rule, no matter how complex.
- **Interactivity**: It is possible to provide real-time feedback, such as displaying an error message while the user types.
- **Advanced validation**: You can validate cross-data (e.g., confirming that a password matches its confirmation) or perform client-side validations before submitting to the server.
- **Compatibility with external APIs**: Allows validations such as checking if a username is already taken through an API.

### Limitations:

- **Browser dependency**: If JavaScript is disabled, the validation will not work.
- **More effort**: Requires writing more code and manually handling errors.

---

## Is JavaScript Really Necessary for Form Validation?

It depends on the context:

- **Simple validation**: For basic forms, HTML validation may be sufficient, especially when using attributes like `pattern` or `required`.
- **Advanced validation**: If you need dynamic, custom validations or complex interactions, JavaScript is essential.
- **Security**: Regardless of whether you use JavaScript or HTML validation, always validate on the server-side to protect your application from malicious manipulations, as users can modify or disable client-side validations.

---

## Combining HTML, Regular Expressions, and JavaScript

A common strategy is to use HTML validation for simple rules and complement it with JavaScript for more advanced cases. For example:

- Use the `pattern` attribute in HTML to define specific formats like emails or phone numbers.
- Use JavaScript to:
  - Display custom messages.
  - Validate in real-time as the user types.
  - Implement advanced rules that HTML cannot cover.


------

## Validating with HTML

1. **`required` Attribute**

This attribute ensures that a field cannot be left empty.

```html
<form>
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" required>
  <button type="submit">Enviar</button>
</form>
```

If the user tries to submit the form without filling in the `nombre` field, the browser will display an error message indicating that it is required.

2. **`type` Attribute**

The `type` attribute defines the expected input type and helps automatically validate some values. Examples:

- **email**: Verifies that the field has a valid email format.
- **url**: Ensures that the input is a valid URL.
- **number**: Restricts the values to numbers.
- **date**: Allows selecting dates with a calendar (in compatible browsers).

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

**Automatic validations:**
- The `email` field will not accept entries without a valid format (e.g., test@example.com).
- The `age` field will not allow numbers outside the range of 18-99.


3. **`pattern` Attribute**

The `pattern` attribute allows using regular expressions to define a custom format.

```html
<form>
  <label for="telefono">Teléfono (Formato: 123-456-7890):</label>
  <input type="text" id="telefono" name="telefono" pattern="\d{3}-\d{3}-\d{4}" required>
  <button type="submit">Enviar</button>
</form>
```
**How it works:**
- The regular expression `\d{3}-\d{3}-\d{4}` requires the user to enter 3 digits, a hyphen, 3 more digits, another hyphen, and finally 4 digits.
- If the format is not met, the form will not be submitted.

4. **Range Attributes (`min`, `max`, `step`)**

These are mainly used in numeric or date inputs to restrict the allowed values.

```html
<form>
  <label for="peso">Peso (kg):</label>
  <input type="number" id="peso" name="peso" min="30" max="200" step="0.1" required>
  <button type="submit">Enviar</button>
</form>
```

**Explanation:**
- `min="30"` and `max="200"` restrict the weight to values between 30 and 200 kg.
- `step="0.1"` allows values with one decimal place (e.g., 70.5).


5. **Length Attributes (`maxlength`, `minlength`)**

Define the maximum and minimum lenght of a text.

```html
<form>
  <label for="usuario">Nombre de usuario (4-10 caracteres):</label>
  <input type="text" id="usuario" name="usuario" minlength="4" maxlength="10" required>
  <button type="submit">Enviar</button>
</form>
```
**Behavior:**
- `minlength="4"` requires at least 4 characters.
- `maxlength="10"` limits the input to a maximum of 10 characters.

6. **`title` Attribute**

It allows to display custom messages when validation fails.

```html
<form>
  <label for="codigo">Código (4 dígitos):</label>
  <input type="text" id="codigo" name="codigo" pattern="\d{4}" title="Debe contener exactamente 4 dígitos" required>
  <button type="submit">Enviar</button>
</form>
```
If the user enters an incorrect value, they will see the message from the `title` attribute.

7. **`novalidate` Attribute**

If you want to temporarily disable HTML validation for a form, use the `novalidate` attribute.

```html
<form novalidate>
  <label for="campo">Campo:</label>
  <input type="text" id="campo" name="campo" required>
  <button type="submit">Enviar</button>
</form>
```

### Final Considerations

- **Simplicity**: HTML validation is quick and easy to implement.
- **Security**: It is not enough to protect your application, as users can modify the form from the browser. Always complement with server-side validation.
- **Custom messages**: Although HTML provides automatic validation, customization is limited. If you need more control over messages, JavaScript is the ideal complement.

----

# Validating with JavaScript

Form validation with **JavaScript** is a powerful tool that complements (or even replaces) HTML-based validation. JavaScript allows you to validate data dynamically and in a more customized way, providing a richer user experience tailored to your application's needs.

### Why use JavaScript for form validation?

1. **Real-time validation:** You can verify data while the user is typing or selecting values, without waiting for them to submit the form.
2. **Advanced rules:** You can implement complex validations, such as:
   - Comparing two fields (e.g., confirm a password).
   - Checking if a username already exists by calling an API.
   - Validating a specific format that HTML does not support.
3. **Custom messages:** You can display error messages that are more specific and user-friendly.
4. **Full control:** JavaScript gives you complete control over when and how the form is validated.

### Types of Validation with JavaScript

#### 1. Basic Validation
You can use field values and perform simple checks, such as ensuring they are not empty.

```html
<form id="formulario">
  <label for="nombre">Name:</label>
  <input type="text" id="nombre" name="nombre">
  <br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  <br>
  <button type="submit">Submit</button>
</form>

<script>
  document.getElementById("formulario").addEventListener("submit", function (event) {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;

    // Simple validation
    if (nombre.trim() === "") {
      alert("Name is required.");
      event.preventDefault(); // Prevent form submission
    } else if (email.trim() === "") {
      alert("Email is required.");
      event.preventDefault();
    }
  });
</script>
```

#### 2. Validation with Regular Expressions
You can use regular expressions to validate specific formats, such as phone numbers, passwords, or emails.

```html
<form id="registro">
  <label for="telefono">Phone Number (123-456-7890):</label>
  <input type="text" id="telefono" name="telefono">
  <br>
  <button type="submit">Register</button>
</form>

<script>
  document.getElementById("registro").addEventListener("submit", function (event) {
    const telefono = document.getElementById("telefono").value;
    const regexTelefono = /^\d{3}-\d{3}-\d{4}$/; // Regular expression for format 123-456-7890

    if (!regexTelefono.test(telefono)) {
      alert("Phone number must be in the correct format (123-456-7890).");
      event.preventDefault();
    }
  });
</script>
```

#### 3. Real-time Validation
You can provide instant feedback while the user is typing, rather than waiting for them to attempt form submission.

```html
<form>
  <label for="password">Password:</label>
  <input type="password" id="password" name="password">
  <span id="error"></span>
</form>

<script>
  document.getElementById("password").addEventListener("input", function () {
    const password = this.value;
    const error = document.getElementById("error");

    if (password.length < 8) {
      error.textContent = "Password must be at least 8 characters long.";
      error.style.color = "red";
    } else {
      error.textContent = "Valid password.";
      error.style.color = "green";
    }
  });
</script>
```

#### 4. Cross-field Validation
You can check if the values of two or more fields are related, such as confirming passwords.

```html
<form id="signup">
  <label for="password">Password:</label>
  <input type="password" id="password" name="password">
  <br>
  <label for="confirm-password">Confirm Password:</label>
  <input type="password" id="confirm-password" name="confirm-password">
  <br>
  <button type="submit">Sign Up</button>
</form>

<script>
  document.getElementById("signup").addEventListener("submit", function (event) {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      event.preventDefault();
    }
  });
</script>
```

### Best Practices for Form Validation with JavaScript

1. **Complement HTML:** Use HTML validation for basic rules and JavaScript for advanced or real-time validations.
2. **Always validate on the server:** Even though JavaScript is useful, never rely solely on client-side validation. Users can disable JavaScript or manipulate the data sent.
3. **Clear messages:** Make sure error messages are easy to understand and explain how to fix the issue.
4. **Use `preventDefault()`:** This prevents the form from being submitted if any validation fails.
5. **Keep your code modular:** If you have multiple validation rules, organize your code into reusable functions.

### When to Use JavaScript and Not HTML

1. When you need **advanced validation** that HTML cannot handle.
2. When you're working with **dynamic forms** where fields are generated or changed programmatically.
3. If you need to integrate validation with external APIs to check data in real-time.


[Volver atrás](https://github.com/avianarios/codigo_DWEC/tree/main/unidad%205)
