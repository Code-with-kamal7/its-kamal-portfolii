/* ====================================
   CONFIG.JS
   Configuration, Constants & Utilities
   ==================================== */

// ========== COLOR PALETTE ==========
const COLORS = {
    // Light Mode
    lightBg: '#ffffff',
    lightBgSecondary: '#f5f7fa',
    lightText: '#1a1a2e',
    lightTextSecondary: '#6c757d',
    
    // Dark Mode
    darkBg: '#0f0f1e',
    darkBgSecondary: '#1a1a2e',
    darkText: '#e0e0e0',
    darkTextSecondary: '#b0b0b0',
    
    // Neon Colors
    neonCyan: '#00d9ff',
    neonPurple: '#b537f2',
    neonPink: '#ff006e',
    neonBlue: '#0096ff',
    neonGreen: '#00ff88',
    neonOrange: '#ff6b35',
};

// ========== THREE.JS CONFIGURATION ==========
const THREE_CONFIG = {
    fov: 75,
    aspect: window.innerWidth / window.innerHeight,
    near: 0.1,
    far: 10000,
    fog: {
        color: 0x0f0f1e,
        near: 50,
        far: 5000
    },
    lights: {
        ambient: {
            color: 0xffffff,
            intensity: 0.5
        },
        directional: {
            color: 0xffffff,
            intensity: 0.8,
            position: { x: 5, y: 10, z: 7 }
        },
        point: {
            color: 0x00d9ff,
            intensity: 1,
            distance: 100,
            decay: 2
        }
    }
};

// ========== PARTICLE SYSTEM CONFIG ==========
const PARTICLE_CONFIG = {
    count: 1000,
    size: 1.5,
    speed: 0.02,
    spread: 500,
    opacity: 0.6,
    color: 0x00d9ff
};

// ========== ANIMATION TIMINGS ==========
const TIMINGS = {
    typewriterSpeed: 0.08,
    scrollTriggerOffset: 100,
    parallaxSpeed: 0.5,
    floatDuration: 3,
    glowDuration: 2,
    navbarTransitionDuration: 0.4
};

// ========== EASING FUNCTIONS ==========
const EASING = {
    easeInQuad: (t) => t * t,
    easeOutQuad: (t) => t * (2 - t),
    easeInOutQuad: (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    easeInCubic: (t) => t * t * t,
    easeOutCubic: (t) => (--t) * t * t + 1,
    easeInOutCubic: (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * (t - 2)) * (2 * (t - 2)) + 1,
    easeInExpo: (t) => t === 0 ? 0 : Math.pow(2, 10 * t - 10),
    easeOutExpo: (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
    easeInCirc: (t) => 1 - Math.sqrt(1 - Math.pow(t, 2)),
    easeOutCirc: (t) => Math.sqrt(1 - Math.pow(t - 1, 2))
};

// ========== UTILITY FUNCTIONS ==========

/**
 * Get contrasting color for dark/light modes
 */
function getThemeColor(lightColor, darkColor) {
    const isDarkMode = document.body.classList.contains('dark-mode');
    return isDarkMode ? darkColor : lightColor;
}

/**
 * Debounce function for performance
 */
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

/**
 * Throttle function for scroll and mouse events
 */
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Map a value from one range to another
 */
function map(value, in_min, in_max, out_min, out_max) {
    return ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

/**
 * Linear interpolation
 */
function lerp(a, b, t) {
    return a + (b - a) * t;
}

/**
 * Clamp value between min and max
 */
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

/**
 * Get random number between min and max
 */
function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Distance between two 2D points
 */
function distance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}

/**
 * Convert hex color to RGB
 */
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

/**
 * Convert RGB to Hex
 */
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/**
 * Smooth scroll to element
 */
function smoothScrollToElement(element, offset = 0) {
    const target = element instanceof HTMLElement ? element : document.querySelector(element);
    if (!target) return;
    
    const topPos = target.offsetTop - offset;
    window.scrollTo({
        top: topPos,
        behavior: 'smooth'
    });
}

/**
 * Get viewport dimensions
 */
function getViewportDimensions() {
    return {
        width: window.innerWidth,
        height: window.innerHeight,
        aspect: window.innerWidth / window.innerHeight
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight &&
        rect.bottom > 0 &&
        rect.left < window.innerWidth &&
        rect.right > 0
    );
}

/**
 * Get element's position relative to viewport
 */
function getElementPosition(element) {
    const rect = element.getBoundingClientRect();
    return {
        top: rect.top,
        left: rect.left,
        bottom: rect.bottom,
        right: rect.right,
        width: rect.width,
        height: rect.height,
        centerX: rect.left + rect.width / 2,
        centerY: rect.top + rect.height / 2
    };
}

/**
 * Add event listener with cleanup
 */
function addEventListenerWithCleanup(element, event, handler) {
    element.addEventListener(event, handler);
    return () => element.removeEventListener(event, handler);
}

/**
 * Detect if user prefers dark mode
 */
function prefersDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * Set theme (light or dark)
 */
function setTheme(theme) {
    const body = document.body;
    body.classList.remove('light-mode', 'dark-mode');
    body.classList.add(theme === 'dark' ? 'dark-mode' : 'light-mode');
    localStorage.setItem('theme', theme);
}

/**
 * Get current theme
 */
function getTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return prefersDarkMode() ? 'dark' : 'light';
}

/**
 * Initialize theme on page load
 */
function initTheme() {
    const theme = getTheme();
    setTheme(theme);
}

/**
 * Performance: Request animation frame polyfill
 */
const raf = (function() {
    return window.requestAnimationFrame ||
           window.webkitRequestAnimationFrame ||
           function(callback) {
               return setTimeout(callback, 16);
           };
})();

/**
 * Cancel animation frame
 */
const caf = (function() {
    return window.cancelAnimationFrame ||
           window.webkitCancelAnimationFrame ||
           function(id) {
               clearTimeout(id);
           };
})();

/**
 * Logger utility
 */
const Logger = {
    log: (message, data = null) => {
        console.log(`[Portfolio] ${message}`, data || '');
    },
    warn: (message, data = null) => {
        console.warn(`[Portfolio] ${message}`, data || '');
    },
    error: (message, data = null) => {
        console.error(`[Portfolio] ${message}`, data || '');
    }
};

/**
 * Performance monitoring
 */
const Performance = {
    startTime: {},
    start: (label) => {
        Performance.startTime[label] = performance.now();
    },
    end: (label) => {
        const endTime = performance.now();
        const duration = endTime - Performance.startTime[label];
        Logger.log(`${label}: ${duration.toFixed(2)}ms`);
        return duration;
    }
};

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', initTheme);

// Export for use in other scripts
window.CONFIG = {
    COLORS,
    THREE_CONFIG,
    PARTICLE_CONFIG,
    TIMINGS,
    EASING,
    getThemeColor,
    debounce,
    throttle,
    map,
    lerp,
    clamp,
    randomBetween,
    distance,
    hexToRgb,
    rgbToHex,
    smoothScrollToElement,
    getViewportDimensions,
    isInViewport,
    getElementPosition,
    addEventListenerWithCleanup,
    prefersDarkMode,
    setTheme,
    getTheme,
    initTheme,
    raf,
    caf,
    Logger,
    Performance
};
