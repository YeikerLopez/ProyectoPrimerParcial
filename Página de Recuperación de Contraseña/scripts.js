document.getElementById('email').addEventListener('blur', function() {
    let email = document.getElementById('email').value;
    let additionalFields = document.getElementById('additionalFields');
    let errorMessage = document.getElementById('error-message');

    // Validación básica del correo
    if (!validateEmail(email)) {
        errorMessage.textContent = "Por favor ingrese un correo electrónico válido.";
        additionalFields.style.display = 'none'; // Oculta los campos adicionales si el correo no es válido
    } else {
        errorMessage.textContent = "";
        additionalFields.style.display = 'block'; // Muestra los campos adicionales si el correo es válido
    }
});

// Función para validar formato de correo electrónico
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

document.getElementById('recoveryForm').addEventListener('submit', function(event) {
    let names = document.getElementById('names').value;
    let surnames = document.getElementById('surnames').value;
    let email = document.getElementById('email').value;
    let verificationCode = document.getElementById('verificationCode').value;
    let errorMessage = document.getElementById('error-message');

    // Validaciones adicionales 
    if (!names || !surnames || !email || !verificationCode) {
        errorMessage.textContent = "Por favor complete todos los campos.";
        event.preventDefault();
    } else {
        errorMessage.textContent = "";
    }
});
