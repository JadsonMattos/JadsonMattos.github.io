// Particles.js Configuration
if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#2980b9'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#2980b9',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
}

// Typed.js - Texto Digitando Automaticamente
document.addEventListener('DOMContentLoaded', function() {
    const aboutTitle = document.querySelector('[data-i18n="about-title"]');
    if (aboutTitle && typeof Typed !== 'undefined') {
        const originalText = aboutTitle.textContent;
        aboutTitle.textContent = '';
        aboutTitle.style.minHeight = '60px';
        
        setTimeout(() => {
            new Typed('[data-i18n="about-title"]', {
                strings: [
                    'Hello, I\'m Jadson 👋',
                    'Backend Developer 💻',
                    'API Specialist ⚡',
                    'Full Stack Developer 🚀'
                ],
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 2000,
                startDelay: 500,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
        }, 100);
    }
});


