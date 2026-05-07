/* ====================================
   THREE-SCENE.JS
   Three.js 3D Environment & Objects
   ==================================== */

class ThreeScene {
    constructor() {
        this.container = document.getElementById('canvas-container');
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.controls = null;
        this.particles = null;
        this.floatingObjects = [];
        this.animationId = null;
        this.mouse = { x: 0, y: 0 };
        this.targetMouse = { x: 0, y: 0 };
        
        this.init();
    }

    /**
     * Initialize Three.js scene
     */
    init() {
        CONFIG.Logger.log('Initializing Three.js Scene');
        
        // Scene setup with interactive blue fog
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.Fog(0x000000, 400, 800);  // Pure black fog
        
        // Camera setup
        const { width, height, aspect } = CONFIG.getViewportDimensions();
        this.camera = new THREE.PerspectiveCamera(
            CONFIG.THREE_CONFIG.fov,
            aspect,
            CONFIG.THREE_CONFIG.near,
            CONFIG.THREE_CONFIG.far
        );
        this.camera.position.z = 50;
        this.camera.position.y = 20;
        
        // Renderer setup
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: false,
            powerPreference: 'high-performance'
        });
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFShadowShadowMap;
        this.renderer.setClearColor(0x000000, 1);
        this.container.appendChild(this.renderer.domElement);
        
        // Lighting
        this.setupLights();
        
        // Particles
        this.createParticles();
        
        // Floating objects
        this.createFloatingObjects();
        
        // Skills cube
        this.createSkillsCube();
        
        // Event listeners
        this.setupEventListeners();
        
        // Start animation loop
        this.animate();
        
        CONFIG.Logger.log('Three.js Scene Initialized');
    }

    /**
     * Setup lighting
     */
    setupLights() {
        // Ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);  // Increased intensity
        this.scene.add(ambientLight);
        
        // Directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);  // Increased intensity
        directionalLight.position.set(50, 50, 50);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        this.scene.add(directionalLight);
        
        // Point light - cyan glow (bright)
        const pointLight1 = new THREE.PointLight(0x00d9ff, 2.0, 300);
        pointLight1.position.set(30, 30, 30);
        this.scene.add(pointLight1);
        
        // Point light - purple glow (bright)
        const pointLight2 = new THREE.PointLight(0xb537f2, 1.8, 300);
        pointLight2.position.set(-30, 20, -30);
        this.scene.add(pointLight2);
        
        // Additional pink accent light
        const pointLight3 = new THREE.PointLight(0xff006e, 1.5, 250);
        pointLight3.position.set(0, -40, 40);
        this.scene.add(pointLight3);
    }

    /**
     * Create particle system
     */
    createParticles() {
        const geometry = new THREE.BufferGeometry();
        const vertices = [];
        const particleCount = 2500;  // Increased for more visible effect
        
        for (let i = 0; i < particleCount; i++) {
            const x = (Math.random() - 0.5) * CONFIG.PARTICLE_CONFIG.spread;
            const y = (Math.random() - 0.5) * CONFIG.PARTICLE_CONFIG.spread;
            const z = (Math.random() - 0.5) * CONFIG.PARTICLE_CONFIG.spread;
            vertices.push(x, y, z);
        }
        
        geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices), 3));
        
        // Create velocities for particle movement
        const velocities = [];
        for (let i = 0; i < particleCount; i++) {
            velocities.push(
                (Math.random() - 0.5) * CONFIG.PARTICLE_CONFIG.speed,
                (Math.random() - 0.5) * CONFIG.PARTICLE_CONFIG.speed,
                (Math.random() - 0.5) * CONFIG.PARTICLE_CONFIG.speed
            );
        }
        geometry.userData.velocities = velocities;
        
        const material = new THREE.PointsMaterial({
            color: 0x00d9ff,
            size: 3.5,  // Increased size for better visibility
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.9,  // Increased opacity
            depthWrite: false,
            emissive: 0x00d9ff,
            emissiveIntensity: 0.4
        });
        
        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
    }

    /**
     * Create floating 3D objects
     */
    createFloatingObjects() {
        // Floating Cube
        const cubeGeometry = new THREE.BoxGeometry(18, 18, 18);
        const cubeMaterial = new THREE.MeshPhongMaterial({
            color: 0x00d9ff,
            wireframe: false,
            shininess: 150,
            emissive: 0x00d9ff,
            emissiveIntensity: 0.6
        });
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.set(-40, 0, 0);
        cube.castShadow = true;
        this.floatingObjects.push({
            mesh: cube,
            type: 'cube',
            rotationSpeed: { x: 0.005, y: 0.008, z: 0.003 },
            position: { x: -40, y: 0, z: 0 }
        });
        this.scene.add(cube);
        
        // Floating Sphere
        const sphereGeometry = new THREE.IcosahedronGeometry(14, 4);
        const sphereMaterial = new THREE.MeshPhongMaterial({
            color: 0xb537f2,
            wireframe: false,
            shininess: 150,
            emissive: 0xb537f2,
            emissiveIntensity: 0.5
        });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(40, 20, 0);
        sphere.castShadow = true;
        this.floatingObjects.push({
            mesh: sphere,
            type: 'sphere',
            rotationSpeed: { x: 0.003, y: 0.006, z: 0.004 },
            position: { x: 40, y: 20, z: 0 }
        });
        this.scene.add(sphere);
        
        // Floating Torus
        const torusGeometry = new THREE.TorusGeometry(22, 10, 16, 100);
        const torusMaterial = new THREE.MeshPhongMaterial({
            color: 0xff006e,
            wireframe: false,
            shininess: 150,
            emissive: 0xff006e,
            emissiveIntensity: 0.5
        });
        const torus = new THREE.Mesh(torusGeometry, torusMaterial);
        torus.position.set(0, -30, -30);
        torus.castShadow = true;
        this.floatingObjects.push({
            mesh: torus,
            type: 'torus',
            rotationSpeed: { x: 0.004, y: 0.005, z: 0.006 },
            position: { x: 0, y: -30, z: -30 }
        });
        this.scene.add(torus);
    }

    /**
     * Create rotating skills cube for display
     */
    createSkillsCube() {
        const skillsContainer = document.getElementById('skills-cube');
        if (!skillsContainer) return;
        
        // Create smaller scene for skills
        const skillsScene = new THREE.Scene();
        skillsScene.background = null;
        
        // Camera for skills
        const width = skillsContainer.clientWidth;
        const height = skillsContainer.clientHeight;
        const skillsCamera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        skillsCamera.position.z = 50;
        
        // Renderer for skills
        const skillsRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        skillsRenderer.setSize(width, height);
        skillsRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        skillsContainer.appendChild(skillsRenderer.domElement);
        
        // Create cube with skills on each face
        const skillsGeometry = new THREE.BoxGeometry(30, 30, 30);
        const skillsTextures = this.createSkillsTextures();
        const skillsMaterial = skillsTextures.map(texture => 
            new THREE.MeshPhongMaterial({
                map: texture,
                emissive: 0x00d9ff,
                emissiveIntensity: 0.1
            })
        );
        
        const skillsCube = new THREE.Mesh(skillsGeometry, skillsMaterial);
        skillsScene.add(skillsCube);
        
        // Lighting for skills cube
        const light = new THREE.PointLight(0xffffff, 1, 200);
        light.position.set(30, 30, 30);
        skillsScene.add(light);
        
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        skillsScene.add(ambientLight);
        
        // Animation for skills cube
        const animateSkillsCube = () => {
            skillsCube.rotation.x += 0.005;
            skillsCube.rotation.y += 0.007;
            skillsRenderer.render(skillsScene, skillsCamera);
            requestAnimationFrame(animateSkillsCube);
        };
        
        animateSkillsCube();
        
        // Handle resize
        const resizeSkillsRenderer = () => {
            const newWidth = skillsContainer.clientWidth;
            const newHeight = skillsContainer.clientHeight;
            skillsCamera.aspect = newWidth / newHeight;
            skillsCamera.updateProjectionMatrix();
            skillsRenderer.setSize(newWidth, newHeight);
        };
        
        window.addEventListener('resize', resizeSkillsRenderer);
    }

    /**
     * Create canvas textures for skills cube faces
     */
    createSkillsTextures() {
        const skills = [
            { title: 'Python', emoji: '🐍' },
            { title: 'JavaScript', emoji: '⚡' },
            { title: 'React', emoji: '⚛️' },
            { title: 'Node.js', emoji: '📦' },
            { title: 'Machine Learning', emoji: '🤖' },
            { title: '3D Graphics', emoji: '🎯' }
        ];
        
        return skills.map(skill => {
            const canvas = document.createElement('canvas');
            canvas.width = 512;
            canvas.height = 512;
            const ctx = canvas.getContext('2d');
            
            // Background gradient
            const gradient = ctx.createLinearGradient(0, 0, 512, 512);
            gradient.addColorStop(0, '#00d9ff');
            gradient.addColorStop(1, '#b537f2');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 512, 512);
            
            // Draw emoji
            ctx.font = 'bold 150px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#ffffff';
            ctx.fillText(skill.emoji, 256, 256);
            
            // Draw title
            ctx.font = 'bold 60px Arial';
            ctx.fillStyle = '#ffffff';
            ctx.fillText(skill.title, 256, 380);
            
            const texture = new THREE.CanvasTexture(canvas);
            texture.magFilter = THREE.LinearFilter;
            texture.minFilter = THREE.LinearFilter;
            return texture;
        });
    }

    /**
     * Setup event listeners
     */
    setupEventListeners() {
        // Mouse move for parallax
        document.addEventListener('mousemove', (e) => {
            this.targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            this.targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        });
        
        // Window resize
        window.addEventListener('resize', () => this.onWindowResize());
        
        // Scroll for depth effect
        window.addEventListener('scroll', () => {
            const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
            this.camera.position.z = 50 - scrollProgress * 20;
        });
    }

    /**
     * Handle window resize
     */
    onWindowResize() {
        const { width, height, aspect } = CONFIG.getViewportDimensions();
        
        this.camera.aspect = aspect;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }

    /**
     * Update particles
     */
    updateParticles() {
        const positions = this.particles.geometry.attributes.position.array;
        const velocities = this.particles.geometry.userData.velocities;
        
        for (let i = 0; i < positions.length; i += 3) {
            positions[i] += velocities[i];
            positions[i + 1] += velocities[i + 1];
            positions[i + 2] += velocities[i + 2];
            
            // Wrap around boundaries
            const spread = CONFIG.PARTICLE_CONFIG.spread;
            if (positions[i] > spread / 2) positions[i] = -spread / 2;
            if (positions[i] < -spread / 2) positions[i] = spread / 2;
            if (positions[i + 1] > spread / 2) positions[i + 1] = -spread / 2;
            if (positions[i + 1] < -spread / 2) positions[i + 1] = spread / 2;
            if (positions[i + 2] > spread / 2) positions[i + 2] = -spread / 2;
            if (positions[i + 2] < -spread / 2) positions[i + 2] = spread / 2;
        }
        
        this.particles.geometry.attributes.position.needsUpdate = true;
    }

    /**
     * Update floating objects
     */
    updateFloatingObjects() {
        this.floatingObjects.forEach(obj => {
            obj.mesh.rotation.x += obj.rotationSpeed.x;
            obj.mesh.rotation.y += obj.rotationSpeed.y;
            obj.mesh.rotation.z += obj.rotationSpeed.z;
            
            // Floating animation
            obj.mesh.position.y = obj.position.y + Math.sin(Date.now() * 0.001) * 5;
        });
    }

    /**
     * Update camera parallax with mouse
     */
    updateCameraParallax() {
        // Smooth lerp to target mouse position
        this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.1;
        this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.1;
        
        // Apply parallax to camera
        const parallaxAmount = 5;
        this.camera.position.x = this.mouse.x * parallaxAmount;
        this.camera.position.y = 20 + this.mouse.y * parallaxAmount;
    }

    /**
     * Main animation loop
     */
    animate() {
        this.animationId = CONFIG.raf(() => {
            // Update
            this.updateParticles();
            this.updateFloatingObjects();
            this.updateCameraParallax();
            
            // Render
            this.renderer.render(this.scene, this.camera);
            
            // Continue loop
            this.animate();
        });
    }

    /**
     * Dispose scene
     */
    dispose() {
        CONFIG.caf(this.animationId);
        this.renderer.dispose();
        this.container.removeChild(this.renderer.domElement);
    }
}

// Initialize scene when DOM is ready
let threeScene = null;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        threeScene = new ThreeScene();
        window.threeScene = threeScene;
    });
} else {
    threeScene = new ThreeScene();
    window.threeScene = threeScene;
}
