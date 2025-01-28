//En este ejemplo 
//  -Validación: se usa una mezcla de validación nativa con JavaScript. JS valida que las contraseñas coincidan y HTML el resto.
//  -Mensajes de error: son los nativos, salvo cuando las contraseñas no coinciden
//  -Momento de validar: al escribir y al enviar el formulario
//  -Estilado: lo hace JavaScript añadiendo y quitando clases

// Obtener el formulario y los campos relevantes
const formulario = document.getElementById('form1');

// Validar un campo individual al escribir o al perder el foco
function validateField(input) {
  if (!input.validity.valid) {
    input.classList.add('no-valido');
    input.classList.remove('valido');
    input.reportValidity(); // Mostrar el mensaje de error nativo
  } else {
    input.classList.add('valido');
    input.classList.remove('no-valido');
    input.setCustomValidity(''); // Limpiar cualquier mensaje personalizado
  }
}

// Validar contraseñas
function validatePasswords() {
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirm-password');

  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity('Las contraseñas no coinciden.');
  } else {
    confirmPassword.setCustomValidity('');
  }

  // Mostrar el mensaje actualizado en tiempo real
  confirmPassword.reportValidity();
}

// Escuchar los eventos `input` y `blur` para todos los campos
const campos = formulario.querySelectorAll('input');
campos.forEach(input => {
  input.addEventListener('input', () => {
    if (input.id == 'password' || input.id == 'confirm-password') {
      validatePasswords(); // Validar contraseñas específicamente
    }
    validateField(input); // Validar otros campos
  });

  input.addEventListener('blur', () => validateField(input)); // Validar al salir del campo
});

// Validar todo el formulario al enviar
formulario.addEventListener('submit', event => {

  campos.forEach(input => {
    validateField(input); // Validar cada campo antes de enviar
  });

  if (!formulario.checkValidity()) { // Verifica si el formulario es válido
    event.preventDefault(); // Evitar el envío si algún campo no es válido
    console.log('Formulario no válido, revise los campos.');
  } else {
    console.log('Formulario válido, enviando...');
  }
});
