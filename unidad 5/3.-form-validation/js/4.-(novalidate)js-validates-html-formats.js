//En este ejemplo 
//  -Validación: exclusivamente con JavaScript, anulando la nativa con "novalidate" y usando las propiedades de validity
//  -Mensajes de error: JS, como nodos en el DOM (como no hay validación nativa, no se pueden sobreescribir)
//  -Momento de validar: al enviar el formulario
//  -Estilado: nativo. Aunque los atributos de validación nativos no se usen para validar, sí se evalúan para determinar el estilo de los campos

document.getElementById('form1').addEventListener('submit', function(event) {
  event.preventDefault(); // Previene el envío del formulario para validarlo primero
  let isValid=true; // Variable para marcar si el formulario es válido
  
  const inputs = document.querySelectorAll("input"); // Selecciona todos los inputs

  inputs.forEach(campo => {
    const errorElement = document.getElementById(`${campo.id}Error`);
    let errorText = '';

    // Usamos la propiedad validity para acceder a las propiedades del campo
    if (!campo.validity.valid) {
      // Verificamos cada posible error
      if (campo.validity.valueMissing) {
        errorText = `El campo ${campo.name} es obligatorio`;
      } else if (campo.validity.tooShort) {
        errorText = `El campo ${campo.name} debe tener al menos ${campo.minLength} caracteres`;
      } else if (campo.validity.patternMismatch) {
        errorText = `El campo ${campo.name} no coincide con el formato esperado`;
      } else if (campo.validity.typeMismatch && campo.type === 'email') {
        errorText = 'El correo electrónico no es válido';
      } else if (campo.id === 'confirm-password' && campo.value !== document.getElementById('password').value) {
        errorText = 'Las contraseñas no coinciden';
      }
    }

    // Aplicar el mensaje de error si hay uno
    if (errorText) {
      errorElement.textContent = errorText;
      isValid=false; // Marcar el formulario como no válido
    } else {
      errorElement.textContent = ''; // Limpiar el mensaje de error si no hay error
    }
  });

  // Si todos los campos son válidos, enviamos el formulario
  if (isValid) {
    event.target.submit();
  }
});