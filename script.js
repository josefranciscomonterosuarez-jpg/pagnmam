// ===== UTILIDADES =====
console.log("Script cargado correctamente ✨");

// ===== SMOOTH SCROLL PARA NAVEGACIÓN =====
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== ANIMACIÓN DEL TÍTULO =====
document.addEventListener("DOMContentLoaded", function() {
    const titulo = document.querySelector("h1");
    
    if (titulo) {
        // Efecto de click mejorado
        titulo.style.cursor = 'pointer';
        titulo.addEventListener('click', function() {
            this.style.transition = 'color 0.3s ease';
            this.style.color = "cyan";
            
            // Revertir color después de 2 segundos
            setTimeout(() => {
                this.style.color = 'white';
            }, 2000);
            
            console.log("¡Hiciste click en el título!");
        });
        
        // Efecto hover
        titulo.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease';
            this.style.transform = 'scale(1.05)';
        });
        
        titulo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
});

// ===== ANIMACIÓN AL HACER SCROLL =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animación a todas las secciones
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// ===== EFECTOS EN ENLACES DE NAVEGACIÓN =====
document.querySelectorAll('nav a').forEach(link => {
    link.style.transition = 'color 0.3s ease, border-bottom 0.3s ease';
    
    link.addEventListener('mouseenter', function() {
        this.style.color = 'cyan';
        this.style.borderBottom = '2px solid cyan';
        this.style.paddingBottom = '5px';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.color = 'white';
        this.style.borderBottom = 'none';
    });
});

// ===== INDICADOR DE SECCIÓN ACTIVA =====
window.addEventListener('scroll', function() {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    // Resaltar link activo
document.querySelectorAll('nav a').forEach(link => {
        link.style.color = 'white';
        if (link.getAttribute('href') === '#' + current) {
            link.style.color = 'cyan';
            link.style.borderBottom = '2px solid cyan';
        } else {
            link.style.borderBottom = 'none';
        }
    });
});

// ===== DETECTOR DE TEMA OSCURO/CLARO =====
function detectarTemaPreferido() {
    const prefiereOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log('Tema preferido del usuario:', prefiereOscuro ? 'Oscuro' : 'Claro');
    return prefiereOscuro;
}

detectarTemaPreferido();

// ===== INFORMACIÓN DE DEPURACIÓN =====
console.log('Usuario:', navigator.userAgent.split(' ').pop());
console.log('Resolución:', window.innerWidth + 'x' + window.innerHeight);