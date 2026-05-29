// ===== FUNCIONES MOBILE-FIRST =====

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initMobileNavigation();
    initThemeToggle();
    initBackToTop();
    initScrollAnimations();
    initCurrentYear();
    initTouchOptimizations();
    initPerformance();
});

// ===== NAVEGACIÓN MOBILE =====
function initMobileNavigation() {
    const menuBtn = document.querySelector('.menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (menuBtn && navMenu) {
        // Toggle menú hamburguesa
        menuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            menuBtn.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
        
        // Cerrar menú al hacer clic en enlace
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuBtn.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
        
        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-menu') && !e.target.closest('.menu-btn')) {
                navMenu.classList.remove('active');
                menuBtn.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
        
        // Cerrar menú con tecla ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuBtn.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
        
        // Smooth scroll para enlaces
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Actualizar activo
                    navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Scroll suave
                    const offset = 60; // Altura navbar
                    const targetPosition = targetElement.offsetTop - offset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Actualizar enlace activo al scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const currentId = '#' + section.id;
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === currentId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===== TEMA CLARO/OSCURO =====
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Detectar preferencia del sistema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');
    
    // Aplicar tema
    if (savedTheme === 'light' || (!savedTheme && !prefersDark.matches)) {
        body.classList.add('light-mode');
    }
    
    // Toggle tema
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            
            const isLightMode = body.classList.contains('light-mode');
            localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
            
            // Feedback táctil
            themeToggle.style.transform = 'scale(0.9)';
            setTimeout(() => {
                themeToggle.style.transform = '';
            }, 150);
        });
        
        // Detectar cambios en preferencias del sistema
        prefersDark.addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                if (e.matches) {
                    body.classList.remove('light-mode');
                } else {
                    body.classList.add('light-mode');
                }
            }
        });
    }
}

// ===== BOTÓN VOLVER ARRIBA =====
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (!backToTopBtn) return;
    
    // Mostrar/ocultar
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll al top
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Feedback táctil
        backToTopBtn.style.transform = 'scale(0.9)';
        setTimeout(() => {
            backToTopBtn.style.transform = '';
        }, 150);
    });
    
    // Touch feedback
    backToTopBtn.addEventListener('touchstart', () => {
        backToTopBtn.style.transform = 'scale(0.9)';
    });
    
    backToTopBtn.addEventListener('touchend', () => {
        backToTopBtn.style.transform = '';
    });
}

// ===== ANIMACIONES AL SCROLL =====
function initScrollAnimations() {
    // Lazy load para imágenes
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        if (!img.src) {
            img.dataset.src = img.getAttribute('data-src');
            imageObserver.observe(img);
        }
    });
    
    // Animar elementos al aparecer
    const animatedElements = document.querySelectorAll('.about-card, .skill-category, .project-card, .contact-card');
    const elementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        elementObserver.observe(el);
    });
    
    // Animar barras de habilidades
    const skillBars = document.querySelectorAll('.skill-level');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0';
                
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 300);
                
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => skillObserver.observe(bar));
}

// ===== AÑO ACTUAL =====
function initCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ===== OPTIMIZACIONES TÁCTILES =====
function initTouchOptimizations() {
    // Prevenir zoom en inputs en iOS
    document.addEventListener('touchstart', function(e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            document.body.style.zoom = "100%";
        }
    });
    
    // Mejorar feedback táctil
    document.querySelectorAll('.btn, .contact-card, .social-link').forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = '';
        });
        
        element.addEventListener('touchcancel', function() {
            this.style.transform = '';
        });
    });
    
    // Prevenir scroll cuando el menú está abierto
    document.addEventListener('touchmove', function(e) {
        if (document.body.classList.contains('menu-open')) {
            e.preventDefault();
        }
    }, { passive: false });
}

// ===== OPTIMIZACIONES DE PERFORMANCE =====
function initPerformance() {
    // Defer loading de recursos no críticos
    window.addEventListener('load', function() {
        // Añadir clase loaded para animaciones
        document.body.classList.add('loaded');
        
        // Preload hover states
        setTimeout(() => {
            document.querySelectorAll('.btn, .contact-card').forEach(el => {
                el.style.transition = 'all 0.3s ease';
            });
        }, 1000);
    });
    
    // Optimizar scroll
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateActiveNavLink();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Manejar resize eficientemente
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Recalcular posiciones después del resize
            updateActiveNavLink();
        }, 250);
    });
}

// ===== MANEJO DE VISIBILIDAD =====
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        // Cuando la pestaña vuelve a ser visible
        initCurrentYear();
    }
});

// ===== FALLBACKS =====
// Si no hay soporte para IntersectionObserver
if (!('IntersectionObserver' in window)) {
    console.warn('IntersectionObserver no soportado');
    document.querySelectorAll('.skill-level').forEach(bar => {
        bar.style.width = bar.style.width || '0%';
        setTimeout(() => {
            bar.style.width = bar.style.width;
        }, 100);
    });
}

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('Error en la página:', e.message);
    
    // Fallback para imágenes rotas
    if (e.target.tagName === 'IMG') {
        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzM0MTU1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SXJ2aW4gTW9yYTwvdGV4dD48L3N2Zz4=';
        e.target.alt = 'Foto de Irvin Mora';
    }
}, true);

// ===== INICIALIZACIÓN COMPLETA =====
console.log('Portafolio de Irvin Mora cargado correctamente');