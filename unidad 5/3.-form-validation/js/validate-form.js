// Obtener el formulario y agregar un evento de envío
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    let isValid = true;

    // Validar el campo de nombre
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
    alert('Name is required');
    isValid = false;
    }

    // Validar el campo de correo electrónico
    const email = document.getElementById('email').value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    isValid = false;
    }

    // Validar el campo de teléfono
    const phone = document.getElementById('phone').value;
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
    alert('Please enter a valid phone number (123-456-7890)');
    isValid = false;
    }

    // Validar el campo de contraseña
    const password = document.getElementById('password').value;
    if (password.length < 8) {
    alert('Password must be at least 8 characters long');
    isValid = false;
    }

    // Validar la confirmación de la contraseña
    const confirmPassword = document.getElementById('confirm-password').value;
    if (confirmPassword !== password) {
    alert('Passwords do not match');
    isValid = false;
    }

    // Si todas las validaciones son correctas, enviar el formulario
    if (isValid) {
    alert('Form submitted successfully');
    // Aquí puedes enviar el formulario si todo está bien
    // this.submit();
    }
});