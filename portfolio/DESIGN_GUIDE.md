# 🎨 PORTFOLIO DESIGN & CUSTOMIZATION GUIDE

## Color Palette Reference

### Neon Colors (Primary)
```
Neon Cyan      #00d9ff  RGB(0, 217, 255)     - Main accent, glows
Neon Purple    #b537f2  RGB(181, 55, 242)    - Secondary accent
Neon Pink      #ff006e  RGB(255, 0, 110)     - Highlights
Neon Blue      #0096ff  RGB(0, 150, 255)     - Links
Neon Green     #00ff88  RGB(0, 255, 136)     - Success
Neon Orange    #ff6b35  RGB(255, 107, 53)    - Warnings
```

### Theme Colors

**Light Mode**
```
Background:    #ffffff (White)
Secondary BG:  #f5f7fa (Light Gray)
Text:          #1a1a2e (Dark Blue-Gray)
Text Secondary: #6c757d (Medium Gray)
```

**Dark Mode**
```
Background:    #0f0f1e (Deep Navy)
Secondary BG:  #1a1a2e (Dark Navy)
Text:          #e0e0e0 (Light Gray)
Text Secondary: #b0b0b0 (Medium Gray)
```

---

## CSS Custom Properties Reference

```css
/* In css/styles.css */

:root {
    /* Colors */
    --neon-cyan: #00d9ff;
    --neon-purple: #b537f2;
    --neon-pink: #ff006e;
    --neon-blue: #0096ff;
    --neon-green: #00ff88;
    --neon-orange: #ff6b35;
    
    /* Gradients */
    --gradient-primary: linear-gradient(135deg, #0096ff, #b537f2);
    --gradient-secondary: linear-gradient(135deg, #00d9ff, #ff006e);
    
    /* Spacing Scale (8px base) */
    --spacing-xs: 0.5rem;    /* 8px */
    --spacing-sm: 1rem;      /* 16px */
    --spacing-md: 1.5rem;    /* 24px */
    --spacing-lg: 2rem;      /* 32px */
    --spacing-xl: 3rem;      /* 48px */
    --spacing-2xl: 4rem;     /* 64px */
    
    /* Typography */
    --font-family: 'Segoe UI', Tahoma, Geneva, sans-serif;
    --font-mono: 'Courier New', monospace;
    
    /* Animation */
    --transition-fast: 0.2s ease-out;
    --transition-normal: 0.4s ease-out;
    --transition-slow: 0.6s ease-out;
    
    /* Z-Index Scale */
    --z-canvas: 1;
    --z-navbar: 100;
    --z-modal: 200;
}
```

---

## Typography Scale

```css
H1 (Hero Title)
font-size: clamp(2.5rem, 8vw, 4rem)   /* Responsive scaling */
font-weight: 800
line-height: 1.2
letter-spacing: -1px

H2 (Section Titles)
font-size: clamp(2rem, 5vw, 3rem)     /* Responsive scaling */
font-weight: 700
letter-spacing: -0.5px

H3 (Subsections)
font-size: 1.3rem - 1.5rem
font-weight: 700

Body Text
font-size: 0.95rem - 1rem
line-height: 1.6
letter-spacing: 0px

Small Text
font-size: 0.8rem - 0.9rem
letter-spacing: 0.5px
text-transform: uppercase
```

---

## Component Styling

### Buttons

**Primary Button**
```css
Background: Linear gradient (Cyan → Purple)
Color: White
Padding: 12px 32px
Border Radius: 8px
Font Weight: 600
Box Shadow: 0 0 30px rgba(0, 150, 255, 0.3)
Hover: Lift 2px + increase glow
```

**Secondary Button**
```css
Background: Transparent
Color: Text color
Border: 2px solid Neon Cyan
Padding: 12px 32px
Box Shadow: Inset glow effect
Hover: Fill with cyan tint
```

### Cards

**Standard Card**
```css
Background: rgba(255, 255, 255, 0.5)  /* Light mode */
Background: rgba(26, 26, 46, 0.5)     /* Dark mode */
Backdrop Filter: blur(10px)
Border: 1px solid rgba(0, 217, 255, 0.2)
Border Radius: 12px
Box Shadow: 0 8px 32px rgba(0, 0, 0, 0.05)
Hover: Border color increases, glow added
```

### Form Inputs

**Text Input / Textarea**
```css
Background: Transparent
Border: None (bottom border only)
Border Bottom: 2px solid rgba(0, 217, 255, 0.3)
Color: Inherited from theme
Focus: Border glow effect
Padding: var(--spacing-sm)
Font: Inherit from body
```

### Badges & Pills

**Skill Badge**
```css
Background: Linear gradient (rgba blue + purple)
Border: 1px solid rgba(0, 217, 255, 0.3)
Border Radius: 8px
Padding: var(--spacing-sm)
Color: Text color
Hover: Lift + enhanced glow
```

**Tech Badge**
```css
Background: rgba(0, 217, 255, 0.15)
Border: 1px solid rgba(0, 217, 255, 0.4)
Border Radius: 20px
Padding: 4px 12px
Font Size: 0.8rem
Color: Neon blue
```

---

## Shadow System

```css
/* Subtle Shadow */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

/* Medium Shadow */
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);

/* Strong Shadow */
box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);

/* Glow Shadow (Neon Cyan) */
box-shadow: 0 0 20px rgba(0, 217, 255, 0.3);

/* Glow Shadow (Combined) */
box-shadow: 0 0 20px rgba(0, 217, 255, 0.3), 
            0 0 40px rgba(181, 55, 242, 0.2);

/* On Hover (Enhanced Glow) */
box-shadow: 0 10px 40px rgba(0, 217, 255, 0.2),
            0 0 30px rgba(181, 55, 242, 0.3);
```

---

## Responsive Breakpoints

```css
/* Desktop (Default) */
/* Assume 1200px+ */

/* Tablet */
@media (max-width: 768px) {
    /* 2-column layouts */
    /* Larger touch targets */
    /* Simplified navigation */
}

/* Mobile */
@media (max-width: 480px) {
    /* 1-column layouts */
    /* Simplified 3D scene */
    /* Mobile menu */
}

/* Font Scaling Example */
font-size: clamp(1rem, 5vw, 2rem);
/* Min: 1rem, Preferred: 5vw, Max: 2rem */
```

---

## Animation Timing

```javascript
// In js/config.js
TIMINGS = {
    // Typewriter Effect
    typewriterSpeed: 0.08,        // 80ms per character
    
    // Scroll Animation Trigger
    scrollTriggerOffset: 100,     // Pixels from top
    
    // Camera Parallax
    parallaxSpeed: 0.5,           // Intensity (0-1)
    
    // 3D Objects
    floatDuration: 3,             // Seconds
    
    // Visual Effects
    glowDuration: 2,              // Pulse duration
    
    // Navigation
    navbarTransitionDuration: 0.4 // Fade duration
}
```

---

## Easing Functions Reference

```javascript
// Available easing functions in config.js
EASING = {
    easeInQuad,       // Slow start
    easeOutQuad,      // Slow end
    easeInOutQuad,    // Slow both ends
    easeInCubic,      // Stronger slow start
    easeOutCubic,     // Stronger slow end
    easeInOutCubic,   // Stronger both ends
    easeInExpo,       // Very sharp start
    easeOutExpo,      // Very sharp end
    easeInCirc,       // Circular start
    easeOutCirc       // Circular end
}

// GSAP Easing (Built-in)
ease: 'power2.out'
ease: 'back.out'
ease: 'elastic.out'
ease: 'sine.inOut'
```

---

## 3D Scene Configuration

```javascript
// In js/config.js
THREE_CONFIG = {
    fov: 75,                    // Field of view
    aspect: width / height,     // Camera aspect
    near: 0.1,                  // Near clipping plane
    far: 10000,                 // Far clipping plane
    
    fog: {
        color: 0x0f0f1e,        // Dark navy
        near: 50,               // Fog start
        far: 5000               // Fog end
    },
    
    lights: {
        ambient: {
            color: 0xffffff,    // White
            intensity: 0.5      // 50%
        },
        directional: {
            color: 0xffffff,    // White
            intensity: 0.8,     // 80%
            position: { x: 5, y: 10, z: 7 }
        },
        point: {
            color: 0x00d9ff,    // Cyan
            intensity: 1,
            distance: 100,
            decay: 2
        }
    }
}

// Particle Configuration
PARTICLE_CONFIG = {
    count: 1000,        // Total particles
    size: 1.5,          // Particle size
    speed: 0.02,        // Movement speed
    spread: 500,        // Spread distance
    opacity: 0.6,       // Transparency
    color: 0x00d9ff     // Cyan
}
```

---

## Common Customization Tasks

### Change Primary Color Throughout
1. Open `css/styles.css`
2. Find `:root {`
3. Change `--neon-cyan: #00d9ff;` to your color
4. All cyan elements will update automatically

### Make Animations Faster
1. Open `js/config.js`
2. Find `TIMINGS = {`
3. Reduce values (e.g., `typewriterSpeed: 0.04`)
4. Shorter duration = faster animation

### Make Animations Slower
1. Open `js/config.js`
2. Find `TIMINGS = {`
3. Increase values (e.g., `typewriterSpeed: 0.15`)
4. Longer duration = slower animation

### Change Font Size
1. In `css/styles.css`, find `.hero-title`
2. Adjust `font-size: clamp(2.5rem, 8vw, 4rem);`
3. First number = minimum, third = maximum

### Add More Space Between Sections
1. In `css/styles.css`, find `.section {`
2. Increase `padding: var(--spacing-2xl);`
3. Use larger spacing variables

### Change Button Hover Effect
1. In `css/styles.css`, find `.btn-primary:hover`
2. Modify the `transform` and `box-shadow` properties

### Adjust Glow Intensity
1. In `css/styles.css`, find any `box-shadow` with color
2. Change the color opacity (last number)
3. Example: `rgba(0, 217, 255, 0.3)` → `rgba(0, 217, 255, 0.6)`

---

## CSS Grid & Flexbox Reference

```css
/* Flexbox - Navigation */
.navbar-container {
    display: flex;
    justify-content: space-between;  /* Spread items */
    align-items: center;             /* Vertical center */
    gap: var(--spacing-lg);          /* Space between items */
}

/* Grid - Projects */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: var(--spacing-2xl);
}

/* Responsive Grid */
@media (max-width: 768px) {
    grid-template-columns: 1fr;      /* Single column */
}
```

---

## Browser DevTools Tips

### Inspect Element
- Right-click → Inspect
- View CSS being applied
- Test CSS changes live
- Check responsive breakpoints

### Mobile View
- Press F12
- Click device icon
- Select device type
- Test all screen sizes

### Console Debugging
- Press F12
- Go to Console tab
- Type to test JavaScript
- See error messages

### Performance
- Press F12
- Go to Performance tab
- Record animation
- See FPS and bottlenecks

---

## Color Harmony Ideas

### Monochromatic (Single Color Scheme)
Change gradient from `(Cyan → Purple)` to `(Light Cyan → Dark Cyan)`

### Complementary (Opposite Colors)
Use colors opposite on color wheel (e.g., cyan + orange)

### Triadic (3 Colors)
Use 3 colors equally spaced on color wheel

### Analogous (Adjacent Colors)
Use colors next to each other on color wheel

---

## Animation Timing Reference

```
Fast:        0.1s - 0.3s   (Quick feedback, hovers)
Normal:      0.4s - 0.6s   (Standard transitions)
Slow:        0.8s - 1.2s   (Dramatic effects)
Very Slow:   1.5s - 3s     (Prolonged animations)

Best Practices:
- Hovers: 0.2s - 0.3s
- Page transitions: 0.4s - 0.6s
- Auto-play animations: 0.8s - 2s
- 3D rotations: 2s - 4s
```

---

## Glassmorphism Design Pattern

```css
/* Standard Glassmorphic Card */
.glass-card {
    background: rgba(255, 255, 255, 0.6);    /* Light mode */
    background: rgba(26, 26, 46, 0.6);       /* Dark mode */
    backdrop-filter: blur(10px);              /* Blur effect */
    border: 1px solid rgba(0, 217, 255, 0.2);/* Subtle border */
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
}

/* On Hover */
.glass-card:hover {
    border-color: var(--neon-cyan);
    box-shadow: 0 0 20px rgba(0, 217, 255, 0.2);
}
```

---

## Pro Customization Tips

1. **Create a backup** before major changes
2. **Test in browser** immediately after each change
3. **Use DevTools** to live-test CSS before saving
4. **Keep consistent** with existing design language
5. **Mobile test** all changes on phone
6. **Use variables** for repeated values
7. **Comment code** when making complex changes
8. **Version control** (Git) to track changes

---

## Quick Copy-Paste Snippets

### Add a new color
```css
--neon-teal: #00ffcc;
```

### Add a new shadow
```css
box-shadow: 0 0 25px rgba(0, 255, 204, 0.4);
```

### Add animation delay
```css
animation-delay: 0.2s;
```

### Make element glow on hover
```css
:hover {
    box-shadow: 0 0 20px rgba(0, 217, 255, 0.5);
}
```

---

**Design & Customization Guide for Kamal Kishore's Portfolio**
**Version 1.0.0 - January 2024**
