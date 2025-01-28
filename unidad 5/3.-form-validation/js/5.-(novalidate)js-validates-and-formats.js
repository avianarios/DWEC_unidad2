//En este ejemplo 
//  -Validación: exclusivamente con JavaScript, anulando la nativa con "novalidate". JS lo comprueba todo (aún se evalúan los atributos nativos para determinar el estilo de los campos)
//  -Mensajes de error: Los inserta JS como nodos en el DOM (como no hay validación nativa, no se pueden sobreescribir)
//  -Momento de validar: en cada pulsación y al enviar el formulario
//  -Estilado: JS, insertando clases en los campos e insertando texto en el DOM

// Función que se llama para validar cada campo
function validateField(input, field, errorElement) {
  let errorText = '';

  // Validar si el campo es obligatorio
  if (field.required && !input.value.trim()) {
    errorText = field.errorMessage || `${field.id} es obligatorio`;
  }

  // Validar patrón si está presente
  if (field.pattern && input.value && !field.pattern.test(input.value)) {
    errorText = field.errorMessage || `${field.id} no es válido`;
  }

  // Validar longitud mínima
  if (field.minLength && input.value.length < field.minLength) {
    errorText = field.errorMessage || `${field.id} es obligatorio`;
  }

  // Validar que las contraseñas coincidan
  if (field.id === 'confirm-password' && input.value !== document.getElementById('password').value) {
    errorText = 'Las contraseñas no coinciden';
  }

  // Aplicar estilo y mostrar mensajes de error
  if (errorText) {
    input.classList.add('no-valido');
    input.classList.remove('valido');
    errorElement.textContent = errorText;
    return false;
  } else {
    input.classList.add('valido');
    input.classList.remove('no-valido');
    errorElement.textContent = ''; // Borrar mensaje de error
    return true;
  }
}

// Aquí añadimos los escuchadores de eventos input para cada campo
const fields = [
  { id: 'name', type: 'text', minLength: 8, errorMessage: 'El nombre es obligatorio y debe tener una longitud mínima de 8 caracteres' },
  { id: 'email', type: 'email', pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, errorMessage: 'El correo no es válido' },
  { id: 'phone', type: 'text', pattern: /^\d{3} \d{3} \d{3}$/, errorMessage: 'El teléfono debe ser en formato 123 123 123' },
  { id: 'password', type: 'password', minLength: 8, errorMessage: 'La contraseña debe tener al menos 8 caracteres' },
  { id: 'confirm-password', type: 'password', errorMessage: 'Las contraseñas no coinciden' }
];


fields.forEach(field => {
  const input = document.getElementById(field.id);
  const errorElement = document.getElementById(`${field.id}Error`);

  // Añadimos el escuchador de evento input para cada campo
  input.addEventListener('input', function() {
    validateField(input, field, errorElement);
  });
});


// Validar y enviar el formulario
document.getElementById('form1').addEventListener('submit', function(event) {
  let formIsValid = true;

  fields.forEach(field => {
    const input = document.getElementById(field.id);
    const errorElement = document.getElementById(`${field.id}Error`);
    
    // Validamos cada campo
    if (!validateField(input, field, errorElement)) {
      formIsValid = false; // Si algún campo no es válido, no enviamos el formulario
    }
  });

  // Si todos los campos son válidos, enviamos el formulario
  if (!formIsValid) {
    event.preventDefault(); // Previene el envío si hay errores
  }
});
