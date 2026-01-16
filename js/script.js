// Menu Toggle para dispositivos móviles
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    if (navbarToggle) {
        navbarToggle.addEventListener('click', function() {
            navbarToggle.classList.toggle('active');
            navbarMenu.classList.toggle('active');
        });
    }

    // Smooth scroll para los enlaces de navegación
    const navLinks = document.querySelectorAll('.navbar-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                navbarMenu.classList.remove('active');
                navbarToggle.classList.remove('active');
            }
        });
    });

    // Botones de agendar cita
    const buttons = document.querySelectorAll('.btn-primary, .btn-contacto');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            agendarCita();
        });
    });

    // CARRUSEL DE EQUIPO
    initCarousel();

    // Animación al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.servicio-card, .testimonial-card');
    cards.forEach(card => {
        observer.observe(card);
    });

    // Validación simple de formulario (si lo hubiera)
    console.log('Landing page Cimevet cargada correctamente');
});

// FUNCIONALIDAD CARRUSEL
function initCarousel() {
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicators = document.querySelectorAll('.indicator');
    
    if (!track) return;
    
    let currentIndex = 0;
    const cards = track.querySelectorAll('.team-card');
    const totalCards = cards.length;
    let autoAdvanceInterval;
    
    function updateCarousel() {
        const offset = -currentIndex * 100;
        track.style.transform = `translateX(${offset}%)`;
        
        // Actualizar indicadores
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalCards;
        updateCarousel();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        updateCarousel();
    }
    
    function startAutoAdvance() {
        autoAdvanceInterval = setInterval(nextSlide, 2000);
    }
    
    function stopAutoAdvance() {
        clearInterval(autoAdvanceInterval);
    }
    
    function resetAutoAdvance() {
        stopAutoAdvance();
        startAutoAdvance();
    }
    
    // Event listeners botones
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoAdvance();
    });
    
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoAdvance();
    });
    
    // Event listeners indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
            resetAutoAdvance();
        });
    });
    
    // Detener auto-advance al pasar el mouse sobre el carrusel
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    if (carouselWrapper) {
        carouselWrapper.addEventListener('mouseenter', stopAutoAdvance);
        carouselWrapper.addEventListener('mouseleave', startAutoAdvance);
    }
    
    // Iniciar auto-advance
    startAutoAdvance();
}

// Función para agendar cita
function agendarCita() {
    const telefono = '+51987809574';
    const mensaje = 'Hola Veterinaria Cimevet, me gustaría agendar una cita para mi mascota.';
    const whatsappUrl = `https://wa.me/${telefono.replace(/\D/g, '')}?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, '_blank');
}

// Hacer la función disponible globalmente
window.agendarCita = agendarCita;
