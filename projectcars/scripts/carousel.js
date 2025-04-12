document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const images = Array.from(track.children);
    let currentIndex = 0;
    let interval;

    const updateCarousel = () => {
        const imageWidth = images[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    };

    const startCarousel = () => {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
        }, 3000); // Cambia cada 3 segundos
    };

    const stopCarousel = () => {
        clearInterval(interval);
    };

    // Inicia el carrusel automáticamente
    startCarousel();

    // Detiene el carrusel al pasar el mouse
    track.addEventListener("mouseenter", stopCarousel);

    // Reinicia el carrusel al quitar el mouse
    track.addEventListener("mouseleave", startCarousel);

    // Ajusta el carrusel al cargar
    updateCarousel();

    document.getElementById("gallery-button").addEventListener("click", () => {
        window.location.href = "gallery.html";
    });

    document.getElementById("about-button").addEventListener("click", () => {
        window.location.href = "about.html";
    });

    document.getElementById("contact-button").addEventListener("click", () => {
        window.location.href = "contact.html";
    });
});