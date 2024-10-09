function mostrarCampos() {
    let rol = document.getElementById('rol').value;
    let estudianteFields = document.getElementById('estudianteFields');
    let tutorFields = document.getElementById('tutorFields');

    if (rol === 'estudiante') {
        estudianteFields.style.display = 'block';
        tutorFields.style.display = 'none';
    } else if (rol === 'tutor') {
        tutorFields.style.display = 'block';
        estudianteFields.style.display = 'none';
    } else {
        estudianteFields.style.display = 'none';
        tutorFields.style.display = 'none';
    }
}

document.getElementById('registerForm').addEventListener('submit', function(event) {
    let email = document.getElementById('email').value;
    let errorMessage = document.getElementById('error-message');
    let rol = document.getElementById('rol').value;
    let cedula = document.getElementById('cedula').value;

    if (!rol) {
        errorMessage.textContent = "Por favor seleccione su rol en el sistema.";
        event.preventDefault();
    } else if (!/^\d{10}$/.test(cedula)) {
        errorMessage.textContent = "Por favor ingrese un número de cédula válido de 10 dígitos.";
        event.preventDefault();
    } else {
        errorMessage.textContent = "";
    }
});
