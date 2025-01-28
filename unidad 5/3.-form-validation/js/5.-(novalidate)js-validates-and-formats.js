//En este ejemplo 
//  -Validación: exclusivamente con JavaScript, anulando la nativa con "novalidate" y usando las propiedades de validity
//  -Mensajes de error: JS, como nodos en el DOM (como no hay validación nativa, no se pueden sobreescribir)
//  -Momento de validar: al enviar el formulario
//  -Estilado: JS, añadiendo clases (que están en el fichero CSS)


const campos=document.querySelectorAll("input"); // Selecciona todos los campos
campos.forEach(campo => {
  campo.classList.add('no-valido');
});

document.getElementById('form1').addEventListener('submit', function(event) {
  event.preventDefault(); // Previene el envío del formulario para validarlo primero
  let isValid=true; // Variable para marcar si el formulario es válido
  

  campos.forEach(campo => {
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
      campo.classList.add('no-valido');
      campo.classList.remove('valido');
    } else {
      errorElement.textContent = ''; // Limpiar el mensaje de error si no hay error
      campo.classList.add('valido');
      campo.classList.remove('no-valido');
    }
  });

  // Si todos los campos son válidos, enviamos el formulario
  if (isValid) {
    event.target.submit();
  }
});


// if (errorText) {
//   errorElement.textContent = errorText;
//   campo.classList.add('no-valido');
//   campo.classList.remove('valido');
//   isValid = false; // **Marcar el formulario como no válido**
// } else {
//   errorElement.textContent = ''; // Limpiar el mensaje de error si no hay error
//   campo.classList.add('valido');
//   campo.classList.remove('no-valido');
// }
// });


// Función que se llama para validar cada campo
/*
el siguiente código lo he encontrado por ahí, pero no me gusta
Lo pongo para que tengáis una alternativa, pero no lo recomiendo. No me gusta tener que definir los campos en una matriz y luego recorrerlo para añadir los escuchadores de eventos. Tampoco me gusta tener que usar los atributos de los campos en el HTML para definir las reglas de validación, prefiero el objeto validity

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
});*/
