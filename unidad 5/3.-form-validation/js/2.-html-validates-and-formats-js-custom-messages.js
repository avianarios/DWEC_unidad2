//En este ejemplo 
//  -Validación: nativa.
//  -Mensajes de error: personalizados
//  -Momento de validar: en cada pulsación (evento input) y al mandar (evento submit)
//  -Estilado: nativo, con las pseudoclases :valid y :invalid en el fichero de estilos CSS


// Función para validar campos
const validateField = (field) => {
  // Reseteamos el mensaje de error
  field.setCustomValidity('');

  // Validación personalizada
  if (field.name == 'name') {
    if (field.required && !field.value.trim()) {
      field.setCustomValidity('Este campo es obligatorio.');
    }
    if (field.value.length < 8) {
      field.setCustomValidity('El nombre debe tener al menos 8 caracteres.');
    }
  }

  if (field.required && !field.value.trim()) {
    field.setCustomValidity('Este campo es obligatorio.');
  }

  if (field.type == 'email' && field.value && !field.value.includes('@')) {
    field.setCustomValidity('Formato de correo electrónico no válido.');
  }

  if (field.pattern && field.value && !new RegExp(field.pattern).test(field.value)) {
    field.setCustomValidity('El teléfono debe tener el formato 123 123 123.');
  }

  if (field.name == 'password' && field.value.length < 8) {
    field.setCustomValidity('La contraseña debe tener al menos 8 caracteres.');
  }

  if (field.name == 'confirm-password' && field.value !== document.getElementById('password').value) {
    field.setCustomValidity('Las contraseñas no coinciden.');
  }
  field.reportValidity();
};


// if (field.name.validity.valid){
//   field.setCustomValidity("un mensaje");
// }
// validity.valueMissing
// validity.tooShort
// validity.patternMismatch
// validity.typeMismatch


const form = document.getElementById('form1');
const fields = form.querySelectorAll('input');

// Validar campos en tiempo real (oninput)
/*fields.forEach((field) => {
  field.addEventListener('input', () => validateField(field));
});*/
form.addEventListener('input', (event)=>{
  if (event.target.type == 'input') {
    validateField(event.target);
  }
});

form.addEventListener('submit', function (event) {
  // Validamos todos los campos antes de enviar
  fields.forEach((field) => validateField(field));

  if (!form.checkValidity()) {
    event.preventDefault(); // Evitamos el envío si no es válido
    alert('Por favor, corrige los errores antes de enviar el formulario.');
  } else {
    alert('Formulario válido, enviando...');
    form.submit();
  }
});