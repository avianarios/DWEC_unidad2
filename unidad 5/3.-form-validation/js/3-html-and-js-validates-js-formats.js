//En este ejemplo 
//  -Validación: mezcla de nativa con JavaScript. HTML valida todo salvo las contraseñas, que las valida JS usando sus atributos
//  -Mensajes de error: nativos, salvo cuando las contraseñas no coinciden.
//  -Momento de validar: en cada pulsación (input) y al enviar el formulario (submit)
//  -Estilado: JavaScript, añadiendo y quitando clases. Para comprobar qué clase le corresponde, tiene que comprobar el resultado de la evaluación nativa, para lo que usa validity.valid

// Obtener el formulario
const formulario = document.getElementById('form1');

// Para la validación uso validity.valid
function validarCampo(input) {
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
function validarClaves(claveModificada) {
  let claves = document.querySelectorAll("[type=password]");
  const password = claves[0];
  const confirmPassword = claves[1];

  if (password.value != confirmPassword.value) {
    if (claveModificada.id == "password" && confirmPassword.value!="") {
      password.setCustomValidity('Las contraseñas no coinciden.');
    }else{
      confirmPassword.setCustomValidity('Las contraseñas no coinciden.');
    }
  }else{
    password.setCustomValidity('');
    confirmPassword.setCustomValidity('');
  }

  if (claveModificada.id == "password") {
    password.reportValidity(); // Mostrar el mensaje de error actualizado
  }else{
    confirmPassword.reportValidity();
  }
}

// Validar campos al escribir
formulario.addEventListener('input', evento => {
  if (evento.target.id == "password" || evento.target.id == "confirm-password") {
      validarClaves(evento.target);  // Llamamos con el campo que se está modificando
  }else{
    validarCampo(evento.target);
  }
});


// Validar todo el formulario al enviar
formulario.addEventListener('submit', event => {

  campos.forEach(input => {
    validarCampo(input); // Validar cada campo antes de enviar
  });

  if (!formulario.checkValidity()) { // Verifica si el formulario es válido
    event.preventDefault(); // Evitar el envío si algún campo no es válido
    console.log('Formulario no válido, revise los campos.');
  } else {
    console.log('Formulario válido, enviando...');
    formulario.submit();
  }
});
