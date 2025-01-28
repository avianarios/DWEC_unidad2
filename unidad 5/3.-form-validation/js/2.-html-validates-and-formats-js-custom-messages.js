//En este ejemplo 
//  -Validación: nativa, mediante atributos de HTML
//  -Mensajes de error: personalizados, mediante setCustomValidity
//  -Momento de validar: en cada pulsación (evento input) y al mandar el formulario (evento submit)
//  -Estilado: nativo, con las pseudoclases :valid y :invalid en el fichero de estilos CSS


// Función para validar campos
const validateField = (field) => {
  // Reinicio del mensaje de error
  field.setCustomValidity('');
  let msj="";

  // Para la validación personalizada leo los atributos de los campos del formulario HTML (no es lo mejor, pero es un ejemplo)
  if (field.required && !field.value.trim()) {
    msj="Este campo es obligatorio.";
  }

  if (field.value.length < 8) {
    msj+=" Debe tener al menos 8 caracteres.";
  }

  if (field.type == 'email' && field.value && !field.value.includes('@')) {
    msj=" Formato de correo electrónico no válido.";
  }

  if (field.pattern && !new RegExp(field.pattern).test(field.value)) {
    msj=" El teléfono debe tener el formato 123 123 123";
  }
  
  if (field.name == 'confirm-password' && field.value !== document.getElementById('password').value) {
    msj="Las contraseñas no coinciden.";
  }
  field.setCustomValidity(msj);
  field.reportValidity();
};


/*  //Alternativa a la función anterior usando propiedades más específicas de validity
  function validateField(input) {
    if (input.validity.valueMissing) {
      input.classList.add('invalid');
      input.classList.remove('valid');
      return false; // Campo vacío y obligatorio
    } else if (input.validity.tooShort) {
      input.classList.add('invalid');
      input.classList.remove('valid');
      return false; // Longitud insuficiente
    } else {
      input.classList.add('valid');
      input.classList.remove('invalid');
      return true; // Campo válido
    }
  }*/


const form = document.getElementById('form1');
const fields = form.querySelectorAll('input');

// Validar campos en tiempo real (oninput)
form.addEventListener('input', (event)=>{
  //el nombre debe estar en mayúsculas
  if (event.target.tagName == 'INPUT') {
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