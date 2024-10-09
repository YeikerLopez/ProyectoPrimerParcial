// Variables globales para almacenar las postulaciones
let postulations = [];

function showModal() {
    document.getElementById('applicationModal').style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById('applicationModal').style.display = 'none';
}

// Función para actualizar las posiciones y mostrar detalles según la empresa seleccionada
function updatePositions() {
    const companySelect = document.getElementById('company');
    const positionSelect = document.getElementById('position');
    const detailsDiv = document.getElementById('details');
    const companyLocation = document.getElementById('companyLocation');
    const applicationReceiver = document.getElementById('applicationReceiver');
    const activitiesDescription = document.getElementById('activitiesDescription');
    
    const company = companySelect.value;

    positionSelect.innerHTML = '<option value="">Seleccione un puesto</option>';
    detailsDiv.style.display = 'none'; // Ocultar detalles inicialmente

    // Añadir posiciones y detalles según la empresa seleccionada
    if (company === 'Google') {
        positionSelect.innerHTML += '<option value="Desarrollador">Desarrollador</option>';
        positionSelect.innerHTML += '<option value="Analista">Analista</option>';
        companyLocation.textContent = 'Ubicación: Mountain View, CA';
        applicationReceiver.textContent = 'Recibido por: Departamento de Recursos Humanos';
    } else if (company === 'Tesla') {
        positionSelect.innerHTML += '<option value="Ingeniero">Ingeniero</option>';
        positionSelect.innerHTML += '<option value="Investigador">Investigador</option>';
        companyLocation.textContent = 'Ubicación: Palo Alto, CA';
        applicationReceiver.textContent = 'Recibido por: Departamento de Ingeniería';
    } else if (company === 'Netflix') {
        positionSelect.innerHTML += '<option value="Editor">Editor</option>';
        positionSelect.innerHTML += '<option value="Productor">Productor</option>';
        companyLocation.textContent = 'Ubicación: Los Gatos, CA';
        applicationReceiver.textContent = 'Recibido por: Departamento de Producción';
    }
    
    // Mostrar detalles si hay un puesto seleccionado
    positionSelect.onchange = function() {
        if (positionSelect.value) {
            updateDetails(positionSelect.value); // Actualizar detalles según el puesto seleccionado
            detailsDiv.style.display = 'block';
        } else {
            detailsDiv.style.display = 'none';
        }
    };
}

// Función para actualizar los detalles según el puesto seleccionado
function updateDetails(selectedPosition) {
    const activitiesDescription = document.getElementById('activitiesDescription');

    // Cambiar la descripción de actividades según el puesto
    switch (selectedPosition) {
        case 'Desarrollador':
            activitiesDescription.textContent = 'Descripción de Actividades: Desarrollo de software y programación.';
            break;
        case 'Analista':
            activitiesDescription.textContent = 'Descripción de Actividades: Análisis de datos y generación de reportes.';
            break;
        case 'Ingeniero':
            activitiesDescription.textContent = 'Descripción de Actividades: Diseño de sistemas y resolución de problemas técnicos.';
            break;
        case 'Investigador':
            activitiesDescription.textContent = 'Descripción de Actividades: Investigación y desarrollo de nuevas tecnologías.';
            break;
        case 'Editor':
            activitiesDescription.textContent = 'Descripción de Actividades: Edición de contenido y revisión de guiones.';
            break;
        case 'Productor':
            activitiesDescription.textContent = 'Descripción de Actividades: Producción de contenido y gestión de proyectos.';
            break;
        default:
            activitiesDescription.textContent = ''; // Limpiar si no hay un puesto seleccionado
    }
}

// Función para enviar la postulación
function submitApplication() {
    const companySelect = document.getElementById('company');
    const positionSelect = document.getElementById('position');
    const additionalDescription = document.getElementById('additional-description').value;
    const fileInput = document.getElementById('file-input'); // Suponiendo que tienes un input para el archivo

    // Validar que se haya seleccionado una empresa y un puesto
    if (!companySelect.value || !positionSelect.value) {
        alert('Por favor, selecciona una empresa y un puesto.');
        return;
    }

    // Validar que se haya adjuntado un archivo PDF
    if (!fileInput.files.length) {
        alert('Debes adjuntar tu CV en formato PDF.');
        return;
    }

    // Confirmación antes de enviar la postulación
    if (!confirm('¿Estás seguro que deseas enviar esta postulación?')) {
        return; // Salir si el usuario cancela
    }


    const postulation = {
        company: companySelect.value,
        position: positionSelect.value,
        status: 'Pendiente', // Estado inicial de la postulación
        description: additionalDescription
    };

    // Verificar si ya se postuló a esta posición
    const alreadyApplied = postulations.some(p => p.company === companySelect.value && p.position === positionSelect.value);
    if (alreadyApplied) {
        alert('Ya te has postulado a esta posición. No puedes postularte nuevamente.');
        return;
    }

    // Agregar la postulación al array de postulaciones
    postulations.push(postulation);

    // Limpiar el formulario y cerrar el modal
    clearForm();
    closeModal();


    updatePostulationStatus();
}

// Función para cancelar una postulación
function cancelPostulation(index) {

    postulations.splice(index, 1);

    // Actualizar la tabla de estado de postulaciones
    updatePostulationStatus();
}

// Función para limpiar el formulario
function clearForm() {
    document.getElementById('company').selectedIndex = 0;
    document.getElementById('position').innerHTML = '<option value="">Seleccione un puesto</option>';
    document.getElementById('additional-description').value = '';
    document.getElementById('details').style.display = 'none'; // Ocultar detalles al limpiar
    document.getElementById('file-input').value = ''; // Limpiar el input de archivo
}

// Función para actualizar la tabla de estado de postulaciones
function updatePostulationStatus() {
    const tbody = document.querySelector('.postulation-status tbody');
    tbody.innerHTML = ''; // Limpiar la tabla

    postulations.forEach((postulation, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${postulation.company}</td>
            <td>${postulation.status}</td>
            <td><button onclick="cancelPostulation(${index})">Cancelar Postulación</button></td>
        `;
        tbody.appendChild(row);
    });
}

// Evento para cerrar el modal al hacer clic en la 'x'
document.querySelector('.close').onclick = closeModal;

// Evento para mostrar el modal al hacer clic en el botón de nueva postulación
document.querySelector('.new-application-btn').onclick = showModal;


window.onclick = function(event) {
    const modal = document.getElementById('applicationModal');
    if (event.target === modal) {
        closeModal();
    }
};
