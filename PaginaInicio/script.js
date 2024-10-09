let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// Mostrar la imagen actual con transiciones suaves
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'flex' : 'none';
        slide.style.opacity = (i === index) ? '1' : '0';
    });
}

// Para avanzar a la siguiente imagen
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Iniciar la presentación automática
setInterval(nextSlide, 3000);

// Mostrar la primera imagen al cargar la página
showSlide(currentSlide);
