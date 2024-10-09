// Datos de ejemplo para la lista de estudiantes y progreso
const students = [
    { fullName: "Juan Pérez", company: "Google", hoursCompleted: 30, totalHours: 50, startDate: "2024-10-01", endDate: "2024-12-01", comments: [] },
    { fullName: "Ana Torres", company: "Microsoft", hoursCompleted: 25, totalHours: 40, startDate: "2024-10-05", endDate: "2024-11-30", comments: [] },
    { fullName: "Luis García", company: "Amazon", hoursCompleted: 35, totalHours: 60, startDate: "2024-10-10", endDate: "2024-12-10", comments: [] },
    { fullName: "María López", company: "Facebook", hoursCompleted: 10, totalHours: 30, startDate: "2024-10-15", endDate: "2024-11-15", comments: [] },
    { fullName: "Carlos Ruiz", company: "Apple", hoursCompleted: 0, totalHours: 40, startDate: "2024-10-20", endDate: "2024-12-20", comments: [] }
];

// Llenar la lista de estudiantes
const studentListElement = document.getElementById("student-list");

students.forEach(student => {
    // Lista de estudiantes
    const li = document.createElement("li");
    li.textContent = student.fullName;
    studentListElement.appendChild(li);
});

// Llenar la tabla de progreso
const progressTableBody = document.getElementById("progress-table").getElementsByTagName('tbody')[0];
students.forEach(student => {
    const row = progressTableBody.insertRow();
    row.insertCell(0).textContent = student.fullName;
    row.insertCell(1).textContent = student.company;
    row.insertCell(2).textContent = student.hoursCompleted;
    row.insertCell(3).textContent = student.totalHours; // Total de horas
    row.insertCell(4).textContent = student.comments.join(", ") || "Sin comentarios"; // Mostrar comentarios
    row.insertCell(5).innerHTML = `<button class="show-more-btn" onclick="showCommentBox('${student.fullName}')">Comentar</button>`;
});

// Función para mostrar el cuadro de comentarios
function showCommentBox(studentName) {
    const commentText = prompt(`Agregar comentario para ${studentName}:`);
    if (commentText) {
        const student = students.find(s => s.fullName === studentName);
        student.comments.push(commentText);
        updateProgressTable();
        alert("Comentario agregado.");
    }
}

// Actualiza la tabla de progreso después de agregar un comentario
function updateProgressTable() {
    // Limpiar la tabla
    progressTableBody.innerHTML = '';
    
    students.forEach(student => {
        const row = progressTableBody.insertRow();
        row.insertCell(0).textContent = student.fullName;
        row.insertCell(1).textContent = student.company;
        row.insertCell(2).textContent = student.hoursCompleted;
        row.insertCell(3).textContent = student.totalHours; // Total de horas
        row.insertCell(4).textContent = student.comments.join(", ") || "Sin comentarios"; // Mostrar comentarios
        row.insertCell(5).innerHTML = `<button class="show-more-btn" onclick="showCommentBox('${student.fullName}')">Comentar</button>`;
    });
}

// Simular el progreso (ejemplo simple)
setInterval(() => {
    students.forEach(student => {
        // Incrementar horas completadas aleatoriamente para simular el progreso
        const increment = Math.floor(Math.random() * 5); // Incremento entre 0 y 4 horas
        student.hoursCompleted = Math.min(student.hoursCompleted + increment, student.totalHours); // No superar el total
    });
    updateProgressChart();
}, 5000); // Actualizar cada 5 segundos

// Configuración del gráfico
const ctx = document.getElementById('progressChart').getContext('2d');
const progressChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: students.map(student => student.fullName),
        datasets: [{
            label: 'Horas Completadas',
            data: students.map(student => student.hoursCompleted),
            backgroundColor: 'rgba(216, 52, 52, 0.6)', // Color rojo
            borderColor: 'rgba(216, 52, 52, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Actualizar el gráfico de progreso
function updateProgressChart() {
    progressChart.data.datasets[0].data = students.map(student => student.hoursCompleted);
    progressChart.update();
}

// Inicializar el calendario
$(document).ready(function() {
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        events: students.map(student => ([
            {
                title: student.fullName + ' - Inicio',
                start: student.startDate,
                allDay: true,
                color: 'red' // Marcador rojo para inicio
            },
            {
                title: student.fullName + ' - Fin',
                start: student.endDate,
                allDay: true,
                color: 'gray' // Marcador gris para fin
            }
        ])).flat() 
    });
});
