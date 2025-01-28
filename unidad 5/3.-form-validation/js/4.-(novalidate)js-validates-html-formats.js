//En este ejemplo 
//  -Validación: exclusivamente con JavaScript, anulando la nativa con "novalidate". JS lo comprueba todo (aún se evalúan los atributos nativos para determinar el estilo de los campos)
//  -Mensajes de error: Los inserta JS como nodos en el DOM (como no hay validación nativa, no se pueden sobreescribir)
//  -Momento de validar: al enviar el formulario
//  -Estilado: nativo. Aunque los atributos de validación nativos no se usen para validar, sí se evalúan para determinar el estilo de los campos

document.getElementById('form1').addEventListener('submit', function(event) {
  event.preventDefault(); // Previene el envío del formulario para validarlo primero

  // Obtener el formulario para usar submit más tarde
  const form = document.getElementById('form1');

  // Al no poder depender de la validación nativa, hay que hacerlo a mano
  const fields = [
    { id: 'name', type: 'text', required: true, minLength: 8, errorMessage: 'El nombre es obligatorio' },
    { id: 'email', type: 'email', required: true, errorMessage: 'El correo no es válido' },
    { id: 'phone', type: 'text', required: true, pattern: /^\d{3}-\d{3}-\d{3}$/, errorMessage: 'El teléfono debe ser en formato 123-456-789' },
    { id: 'password', type: 'password', required: true, minLength: 8, errorMessage: 'La contraseña debe tener al menos 8 caracteres' },
    { id: 'confirm-password', type: 'password', required: true, errorMessage: 'Las contraseñas no coinciden' }
  ];

  // Validar cada campo
  fields.forEach(field => {
    const input = document.getElementById(field.id);
    const errorElement = document.getElementById(`${field.id}Error`);
    let errorText = '';

    // Validar si es obligatorio
    if (field.required && !input.value.trim()) {
      errorText = field.errorMessage || `${field.id} es obligatorio`;
    }

    // Validar email (usando expresión regular propia)
    if (field.type === 'email' && input.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
      errorText = field.errorMessage || 'El correo electrónico no es válido';
    }

    // Validar patrón si existe (solo para el teléfono)
    if (field.pattern && input.value && !field.pattern.test(input.value)) {
      errorText = field.errorMessage;
    }

    // Validar longitud mínima si existe
    if (field.minLength && input.value.length < field.minLength) {
      errorText = field.errorMessage || `${field.id} debe tener al menos ${field.minLength} caracteres`;
    }

    // Validación especial para confirmación de contraseña
    if (field.id === 'confirm-password' && input.value !== document.getElementById('password').value) {
      errorText = 'Las contraseñas no coinciden';
    }

    // Aplicar el mensaje de error si hay uno
    if (errorText) {
      errorElement.textContent = errorText;
    } else {
      errorElement.textContent = ''; // Limpiar el mensaje de error
    }
  });

  // Si todo es válido, se permite el envío del formulario
  if (!formulario.checkValidity()) { // Verifica si el formulario es válido
    alert("Por favor, corrige los errores antes de enviar el formulario");
  } else {
    alert("Formulario válido, se enviará");
    form.submit(); // Enviar el formulario sin que se detenga el evento submit
  }
});
