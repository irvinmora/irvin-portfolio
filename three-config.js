// Configuración de Three.js para fondo 3D
let scene, camera, renderer, particles;
let mouseX = 0, mouseY = 0;

function initThreeJS() {
    // Verificar si Three.js está disponible
    if (typeof THREE === 'undefined') {
        console.warn('Three.js no está cargado. El fondo 3D no se mostrará.');
        return;
    }
    
    // Crear escena
    scene = new THREE.Scene();
    
    // Crear cámara
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;
    
    // Crear renderer
    renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    const container = document.getElementById('three-container');
    if (container) {
        container.appendChild(renderer.domElement);
        
        // Crear geometría de partículas
        const particleCount = 500;
        const particlesGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        
        // Colores para modo claro/oscuro
        const lightModeColors = [
            new THREE.Color(0x6366f1), // Azul
            new THREE.Color(0x10b981), // Verde
            new THREE.Color(0xf59e0b), // Naranja
        ];
        
        const darkModeColors = [
            new THREE.Color(0x818cf8), // Azul claro
            new THREE.Color(0x34d399), // Verde claro
            new THREE.Color(0xfbbf24), // Amarillo
        ];
        
        for (let i = 0; i < particleCount; i++) {
            // Posiciones aleatorias en un cubo
            positions[i * 3] = (Math.random() - 0.5) * 100;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
            
            // Colores aleatorios
            const colorArray = document.body.classList.contains('light-mode') ? lightModeColors : darkModeColors;
            const color = colorArray[Math.floor(Math.random() * colorArray.length)];
            
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }
        
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        // Material de partículas
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.2,
            vertexColors: true,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending
        });
        
        // Crear sistema de partículas
        particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);
        
        // Añadir luz
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);
        
        // Manejar redimensionamiento
        window.addEventListener('resize', onWindowResize);
        
        // Seguir movimiento del ratón
        document.addEventListener('mousemove', onMouseMove);
        
        // Iniciar animación
        animate();
    }
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseMove(event) {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
}

function animate() {
    requestAnimationFrame(animate);
    
    // Rotar partículas
    if (particles) {
        particles.rotation.x += 0.001;
        particles.rotation.y += 0.002;
        
        // Efecto de seguimiento del ratón
        particles.rotation.x += mouseY * 0.0005;
        particles.rotation.y += mouseX * 0.0005;
        
        // Animar partículas individualmente
        const positions = particles.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
            positions[i + 1] += Math.sin(Date.now() * 0.001 + i) * 0.01;
        }
        particles.geometry.attributes.position.needsUpdate = true;
    }
    
    renderer.render(scene, camera);
}

// Inicializar Three.js cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Esperar a que Three.js se cargue
    if (typeof THREE !== 'undefined') {
        initThreeJS();
    } else {
        // Reintentar después de un tiempo
        setTimeout(() => {
            if (typeof THREE !== 'undefined') {
                initThreeJS();
            }
        }, 1000);
    }
    
    // Actualizar colores de partículas cuando cambie el tema
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            setTimeout(updateParticleColors, 500);
        });
    }
});

function updateParticleColors() {
    if (!particles) return;
    
    const colors = particles.geometry.attributes.color.array;
    const isLightMode = document.body.classList.contains('light-mode');
    
    const lightModeColors = [
        new THREE.Color(0x6366f1),
        new THREE.Color(0x10b981),
        new THREE.Color(0xf59e0b),
    ];
    
    const darkModeColors = [
        new THREE.Color(0x818cf8),
        new THREE.Color(0x34d399),
        new THREE.Color(0xfbbf24),
    ];
    
    const colorArray = isLightMode ? lightModeColors : darkModeColors;
    
    for (let i = 0; i < colors.length; i += 3) {
        const color = colorArray[Math.floor(Math.random() * colorArray.length)];
        colors[i] = color.r;
        colors[i + 1] = color.g;
        colors[i + 2] = color.b;
    }
    
    particles.geometry.attributes.color.needsUpdate = true;
}