// Datos simulados para el gráfico de horas
const data = {
    labels: ['Horas Registradas', 'Horas Restantes'],
    datasets: [{
        label: 'Horas de Práctica',
        data: [30, 20], // Ejemplo: 30 horas registradas, 20 horas restantes
        backgroundColor: [
            '#b30000', // Rojo
            '#606060'  // Gris
        ],
        borderColor: '#fff',
        borderWidth: 1
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

const hoursChart = new Chart(
    document.getElementById('hoursChart'),
    config
);

// Mostrar mensaje si no hay prácticas
const hasPractices = data.datasets[0].data[0] > 0; // Cambiar según los datos reales
if (!hasPractices) {
    document.getElementById('no-practices-message').style.display = 'block';
}

// Inicializar el calendario
$(document).ready(function() {
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        editable: true,
        events: [
            {
                title: 'Inicio de Práctica',
                start: '2024-10-01',
                description: '50 horas totales',
                color: '#b30000' // Rojo para inicio
            },
            {
                title: 'Fin de Práctica',
                start: '2024-11-30',
                description: '50 horas totales',
                color: '#606060' // Gris para fin
            }
        ],
        eventRender: function(event, element) {
            if (event.description) {
                element.find('.fc-title').append("<br/>" + event.description);
            }
        },
        locale: 'es' // Cambiar a español
    });
});
