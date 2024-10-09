// Datos ficticios de empresas
const companiesData = {
    "Google": {
        image: "google.jpg",
        description: "Google es una empresa líder en desarrollo de software y tecnologías avanzadas. Sus innovaciones incluyen Google Search, Google Cloud y YouTube.",
        positions: ["Desarrollador de Software", "Ingeniero de Redes", "Machine Learning"],
        rating: "⭐⭐⭐⭐☆ (4.5 de 5)"
    },
    "Tesla": {
        image: "tesla.png",
        description: "Tesla se enfoca en la investigación y desarrollo de vehículos eléctricos y soluciones de energía sostenible. Han revolucionado la industria automotriz con su tecnología avanzada.",
        positions: ["Analista de Datos", "Especialista en Energía"],
        rating: "⭐⭐⭐☆☆ (3.8 de 5)"
    },
    "Netflix": {
        image: "netflix.jpg",
        description: "Netflix es una plataforma de streaming líder que ofrece una amplia variedad de contenido original y licenciado. Su enfoque en la innovación ha revolucionado la forma en que consumimos entretenimiento.",
        positions: ["Desarrollador Frontend", "Gerente de Contenido"],
        rating: "⭐⭐⭐⭐⭐ (5.0 de 5)"
    }
};

// Mostrar detalles de la empresa en el modal
function showDetails(companyName) {
    const modal = document.getElementById("companyModal");
    const title = document.getElementById("modal-title");
    const image = document.getElementById("modal-image");
    const description = document.getElementById("modal-description");
    const positions = document.getElementById("modal-positions");
    const rating = document.querySelector(".modal-rating span");

    const company = companiesData[companyName];
    title.textContent = companyName;
    image.src = company.image;
    description.textContent = company.description;
    positions.innerHTML = company.positions.map(position => `<li>${position}</li>`).join("");
    rating.textContent = company.rating;

    modal.style.display = "block";
}

// Cerrar el modal
function closeModal() {
    document.getElementById("companyModal").style.display = "none";
}
