# 🚀 Kamal Kishore - AI/ML Engineer & Software Developer Portfolio

> A fully responsive, modern, animated 3D interactive personal portfolio website built with **Three.js** and **GSAP**.

## ✨ Features

### 3D & Graphics
- **Three.js 3D Environment** with floating geometric objects
- **Particle System** with interactive physics
- **3D Rotating Skills Cube** displaying expertise
- **Parallax Camera Movement** tied to mouse position
- **Depth-of-Field Effects** for visual depth
- **Neon Glow Lighting** with multiple light sources

### Animations & Interactions
- **Typewriter Effect** on hero title
- **GSAP Scroll Animations** with ScrollTrigger
- **Smooth Parallax** effects on scroll
- **Hover Effects** on cards and buttons
- **Stagger Animations** for lists and grids
- **Theme Transition Animations** (Light/Dark mode)

### UI/UX
- **Glassmorphism Design** with modern aesthetics
- **Neon Color Palette** with gradients
- **Fully Responsive** (Mobile, Tablet, Desktop)
- **Smooth Navigation** with scroll linking
- **Light/Dark Theme Toggle** with persistence
- **Contact Form** with validation and feedback

### Performance
- **WebGL Optimization** for 3D rendering
- **Debounced & Throttled** event handlers
- **Efficient DOM Updates**
- **Canvas-based Rendering**
- **Mobile-optimized** 3D scene

## 📁 Project Structure

```
portfolio/
├── index.html                 # Main HTML file with all sections
├── css/
│   ├── styles.css            # Core styles, layout, glassmorphism
│   └── animations.css        # CSS animations and transitions
├── js/
│   ├── config.js             # Configuration, constants, utilities
│   ├── three-scene.js        # Three.js scene setup & 3D objects
│   ├── animations.js         # GSAP animation sequences
│   └── interactions.js       # User interactions & events
└── assets/                   # (Optional) Images, models, etc.
    └── .gitkeep
```

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| **Neon Cyan** | `#00d9ff` | Primary accent, glow effects |
| **Neon Purple** | `#b537f2` | Secondary accent, gradients |
| **Neon Pink** | `#ff006e` | Highlight, alternative accent |
| **Neon Blue** | `#0096ff` | Links, interactive elements |
| **Neon Green** | `#00ff88` | Success states, indicators |
| **Neon Orange** | `#ff6b35` | Warning, special highlights |

### Theme Support
- **Light Mode**: Clean white backgrounds with subtle shadows
- **Dark Mode**: Deep navy backgrounds with vibrant neon accents

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required!

### Installation

1. **Clone or download the project:**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Open in browser:**
   ```bash
   # Option 1: Direct file open
   open index.html
   
   # Option 2: Using Python (if installed)
   python -m http.server 8000
   # Then visit: http://localhost:8000
   
   # Option 3: Using Node.js http-server
   npx http-server
   # Then visit: http://localhost:8080
   ```

3. **Local server recommended** for proper CORS and performance

## 📋 Sections & Content

### 1. **Home / Hero Section**
- Typewriter animated title
- Floating 3D geometric objects
- Scrolling particles background
- Call-to-action buttons
- Animated scroll indicator

### 2. **About Me**
- Professional bio
- Key highlights with neon accents
- Statistics cards (5+ semesters, 20+ projects, 100% passion)
- Glassmorphic design

### 3. **Skills & Expertise**
- Organized by category:
  - **Languages**: Python, C++, Java, JavaScript
  - **Web Technologies**: HTML/CSS, React, Node.js, SQL
  - **Specializations**: ML, APIs, DSA, 3D Graphics
- Interactive 3D rotating skills cube
- Hover animations on badges

### 4. **Featured Projects**
- 6 project cards with:
  - Project description
  - Tech stack badges
  - GitHub & Live Demo links
  - Hover elevation effects
- Responsive grid layout

### 5. **Contact**
- Contact form with validation
- Multiple contact methods
- Social media icons
- Success/error feedback animations

### 6. **Navigation**
- Floating navbar with transparency
- Smooth scroll navigation
- Active section highlighting
- Mobile hamburger menu
- Theme toggle (Light/Dark)

## 🎭 3D Objects & Scenes

### Floating Objects
1. **Cyan Cube** - Rotating box with emissive glow
2. **Purple Sphere** - Orbiting icosahedron
3. **Pink Torus** - Floating ring with rotation

### Particle System
- 1000+ particles with physics
- Responsive to scrolling
- Smooth motion blur effect
- Configurable spread and speed

### Skills Cube
- 6-faced cube displaying skills
- Canvas-based textures
- Continuous rotation
- Each face: emoji + skill name

## 🎬 Key Animations

### GSAP Animations
- **Typewriter Effect** - Character-by-character text reveal
- **Scroll Triggers** - Animations tied to scroll position
- **Stagger Effects** - Sequential animations for lists
- **Parallax** - Depth-based movement
- **Morphing** - Shape transitions

### CSS Animations
- **Glow Pulse** - Neon effect pulsing
- **Float** - Smooth up/down movement
- **Bounce** - Springy entrance effects
- **Spin** - Continuous rotation
- **Fade & Blur** - Entry transitions

## ⚙️ Configuration

Edit `js/config.js` to customize:

```javascript
// Colors
COLORS = { neonCyan: '#00d9ff', ... }

// Three.js Settings
THREE_CONFIG = { fov: 75, ... }

// Particles
PARTICLE_CONFIG = { count: 1000, size: 1.5, ... }

// Animation Timings
TIMINGS = { typewriterSpeed: 0.08, ... }
```

## 🎮 Interactive Features

### Mouse Interactions
- Parallax camera movement
- Hover effects on cards
- Dynamic lighting response

### Scroll Interactions
- Parallax text movement
- Scroll-triggered animations
- Navbar transparency changes
- Depth-of-field adjustments

### Theme Toggle
- Smooth transition animation
- Persistent in localStorage
- Dark/Light mode detection

### Form Validation
- Real-time field validation
- Success/Error messages
- Loading state feedback

## 📱 Responsive Breakpoints

| Breakpoint | Width | Optimizations |
|-----------|-------|----------------|
| Mobile | < 480px | Single column, reduced 3D |
| Tablet | 480px - 768px | 2 columns, mobile menu |
| Desktop | > 768px | Full multi-column layouts |

## 🔧 Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ Full | Recommended |
| Firefox | ✅ Full | Excellent |
| Safari | ✅ Full | iOS & macOS |
| Edge | ✅ Full | Chromium-based |
| IE 11 | ❌ No | Use modern browsers |

## 📦 Dependencies

All dependencies are loaded from CDN:

```html
<!-- Three.js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

<!-- GSAP -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/MotionPathPlugin.min.js"></script>
```

**No build tools needed!** Everything runs in the browser.

## 🎯 Usage Tips

### Customizing Content
1. **Update Hero Text** - Edit text in HTML `<h1>` and `<p>` tags
2. **Add Projects** - Duplicate `.project-card` div and update content
3. **Change Colors** - Modify CSS variables in `:root` selector
4. **Update Skills** - Edit skill badges in the Skills section

### Customizing 3D Scene
1. **Change object colors** - Edit `COLORS` in `config.js`
2. **Adjust particle count** - Modify `PARTICLE_CONFIG.count`
3. **Change rotation speed** - Update `rotationSpeed` in `three-scene.js`
4. **Modify lighting** - Adjust light properties in `setupLights()`

### Customizing Animations
1. **Animation duration** - Edit values in `TIMINGS` or GSAP timeline
2. **Easing functions** - Change `ease:` parameters in GSAP
3. **Scroll trigger offsets** - Modify `ScrollTrigger` settings
4. **Typewriter speed** - Adjust `TIMINGS.typewriterSpeed`

## 🌟 Advanced Features

### Custom Shaders
To add custom shaders to 3D objects:

```javascript
const material = new THREE.ShaderMaterial({
    vertexShader: customVertexShader,
    fragmentShader: customFragmentShader
});
```

### Post-Processing Effects
To add post-processing (bloom, color grading):

```javascript
const composer = new THREE.EffectComposer(renderer);
composer.addPass(new THREE.RenderPass(scene, camera));
// Add more passes...
```

### Physics Simulation
For advanced particle physics:

```javascript
const world = new CANNON.World();
// Setup physics...
```

## 🚀 Performance Optimization

### Current Optimizations
- ✅ Debounced scroll events
- ✅ Throttled mouse events
- ✅ Efficient particle updates
- ✅ Canvas texture caching
- ✅ CSS GPU acceleration

### Further Optimization Tips
- Use lower particle count on mobile
- Implement LOD (Level of Detail) for 3D objects
- Lazy-load images
- Enable GZIP compression on server
- Use Service Workers for caching

## 🐛 Debugging

Enable debug mode:
```javascript
// In any JavaScript file
CONFIG.Logger.log('Message');
CONFIG.Logger.warn('Warning');
CONFIG.Logger.error('Error');

// Performance monitoring
CONFIG.Performance.start('label');
// ... code ...
CONFIG.Performance.end('label');
```

## 📚 File Documentation

### config.js
- Color constants and themes
- Three.js configuration
- Utility functions (debounce, throttle, etc.)
- Logger and Performance monitoring

### three-scene.js
- Scene initialization and setup
- 3D object creation
- Particle system management
- Camera parallax controls
- Animation loop

### animations.js
- GSAP animation sequences
- Scroll trigger animations
- Typewriter effect
- Hover animations
- Form animations

### interactions.js
- Navigation and scroll effects
- Theme toggle
- Contact form handling
- Mobile menu toggle
- Event listeners setup

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open-source and available for personal and commercial use.

## 👨‍💻 Author

**Kamal Kishore**
- AI/ML Engineer & Software Developer
- Specializing in interactive web experiences

## 🔗 Links

- **Portfolio**: [Your URL Here]
- **GitHub**: [Your GitHub URL]
- **LinkedIn**: [Your LinkedIn URL]
- **Email**: contact@kamalks.dev

## 🎓 Technologies Used

- **3D Graphics**: Three.js
- **Animations**: GSAP, CSS3
- **Styling**: CSS3 (Flexbox, Grid, Variables)
- **Scripting**: Vanilla JavaScript (ES6+)
- **Icons**: Unicode Emojis
- **Fonts**: System fonts (no external dependencies)

## 📈 Future Enhancements

- [ ] Backend integration for form submission
- [ ] Blog section with articles
- [ ] Case studies for projects
- [ ] Resume download
- [ ] Dark mode enhancements
- [ ] More 3D scenes
- [ ] Advanced shader effects
- [ ] Newsletter signup
- [ ] Analytics integration
- [ ] SEO optimization

## 🙏 Acknowledgments

- Three.js team for the amazing 3D library
- GSAP team for powerful animation toolkit
- Modern web community for inspiration

---

**Made with ❤️ by Kamal Kishore**

Last updated: January 2024
