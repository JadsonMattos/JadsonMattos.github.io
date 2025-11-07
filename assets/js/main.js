// Vanilla JS - Substitui jQuery mantendo comportamento original
const EMAILJS_CONFIG = {
    serviceID: 'service_oj3gntn',
    templateID: 'template_kywetmb',
    publicKey: 'WkMClvTRGjbzrGuB4'
};

let emailjsInitialized = false;

function ensureEmailJSInitialized() {
    if (typeof emailjs === 'undefined') {
        return false;
    }

    if (!emailjsInitialized) {
        try {
            emailjs.init(EMAILJS_CONFIG.publicKey);
            emailjsInitialized = true;
        } catch (error) {
            console.error('EmailJS init failed:', error);
            return false;
        }
    }

    return true;
}

document.addEventListener('DOMContentLoaded', function() {
    initFocusMode();
    general_utils();
    initScrollAnimations();
    initCounterAnimations();
    initLightbox();
    initBackToTop();
    initStickyCTA();
    initContactForm();
    initSkillCharts();
    initPresentationMode();
    initMusicPlayer();
    initEasterEggs();
    initGitHubStats();
});

// Hide loading screen when page fully loads
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }
    
    // Register Service Worker for PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('Service Worker registrado com sucesso:', registration.scope);
            })
            .catch(function(error) {
                console.log('Falha ao registrar Service Worker:', error);
            });
    }
});

// FAQ Accordion Toggle
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const icon = element.querySelector('i');
    
    // Fechar todos os outros itens
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
            const otherAnswer = item.querySelector('.faq-answer');
            const otherIcon = item.querySelector('.faq-question i');
            otherAnswer.style.maxHeight = '0';
            otherIcon.style.transform = 'rotate(0deg)';
            item.querySelector('.faq-question').style.background = '#f8f9fa';
        }
    });
    
    // Toggle do item clicado
    if (answer.style.maxHeight && answer.style.maxHeight !== '0px') {
        answer.style.maxHeight = '0';
        icon.style.transform = 'rotate(0deg)';
        element.style.background = '#f8f9fa';
    } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.style.transform = 'rotate(180deg)';
        element.style.background = '#e8f4f8';
    }
}

// Scroll Animations with Intersection Observer
function initScrollAnimations() {
    if (document.body.classList.contains('focus-mode')) {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.add('is-visible');
        });
        return;
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    // Adicionar classes de animação aos elementos
    document.querySelectorAll('.section').forEach((section, index) => {
        // Alternar entre diferentes animações
        if (index % 3 === 0) {
            section.classList.add('fade-in-up');
        } else if (index % 3 === 1) {
            section.classList.add('fade-in-left');
        } else {
            section.classList.add('fade-in-right');
        }
        observer.observe(section);
    });

    // Animar cards de projetos
    document.querySelectorAll('.project-card').forEach(card => {
        card.classList.add('scale-in');
        observer.observe(card);
    });

    // Animar skills
    document.querySelectorAll('.skillbar').forEach(skill => {
        skill.classList.add('fade-in-right');
        observer.observe(skill);
    });
    
    // Animar skill badges
    const badgeObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const badges = entry.target.querySelectorAll('.skill-badge');
                badges.forEach((badge, index) => {
                    setTimeout(() => {
                        badge.classList.add('visible');
                    }, index * 100);
                });
                badgeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const badgeContainer = document.querySelector('.skill-badges-container');
    if (badgeContainer) {
        badgeObserver.observe(badgeContainer);
    }
}

// Contador Animado para Métricas
function initCounterAnimations() {
    const numbers = document.querySelectorAll('[data-counter-target]');
    if (!numbers.length) {
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }

            const el = entry.target;
            if (el.dataset.counterAnimated === 'true') {
                return;
            }

            const target = parseFloat(el.dataset.counterTarget);
            if (Number.isNaN(target)) {
                return;
            }

            const suffix = el.dataset.counterSuffix || '';
            const duration = parseInt(el.dataset.counterDuration, 10) || 2000;
            animateCounter(el, target, suffix, duration);
            el.dataset.counterAnimated = 'true';
        });
    }, { threshold: 0.5 });

    numbers.forEach(el => {
        const suffix = el.dataset.counterSuffix || '';
        el.textContent = `0${suffix}`;
        observer.observe(el);
    });
}

function animateCounter(element, target, suffix, duration) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 16);
}

// Lightbox para Screenshots de Projetos
function initLightbox() {
    // Criar estrutura do lightbox
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close" aria-label="Close"><i class="fas fa-times"></i></button>
            <img class="lightbox-image" src="" alt="Project Screenshot">
        </div>
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('.lightbox-image');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    // Adicionar evento de clique nas imagens dos projetos
    document.addEventListener('click', function(e) {
        if (e.target.closest('.project-card img')) {
            const img = e.target.closest('.project-card img');
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });

    // Fechar lightbox
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Fechar com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Back to Top Button
function initBackToTop() {
    // Criar botão
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.setAttribute('aria-label', 'Back to Top');
    document.body.appendChild(backToTopBtn);

    // Mostrar/esconder ao rolar
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    // Voltar ao topo ao clicar
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Sticky CTA Button
function initStickyCTA() {
    const stickyCta = document.getElementById('sticky-cta');
    if (!stickyCta) return;

    const showAfter = 300;
    const toggleStickyCTA = () => {
        if (window.pageYOffset > showAfter) {
            stickyCta.classList.add('visible');
        } else {
            stickyCta.classList.remove('visible');
        }
    };

    window.addEventListener('scroll', toggleStickyCTA);
    toggleStickyCTA();
}

// Contact Form Handling
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const feedback = document.getElementById('contact-feedback');
    const submitBtn = form.querySelector('.contact-submit');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const currentLang = window.currentLanguage || 'en';
        const langPack = translations[currentLang] || translations.en;

        const languageField = document.getElementById('contact-language');
        if (languageField) {
            languageField.value = currentLang;
        }

        if (!ensureEmailJSInitialized()) {
            if (feedback) {
                feedback.textContent = langPack['contact-form-error'];
                feedback.classList.remove('success');
                feedback.classList.add('error');
            }
            console.error('EmailJS library is not available.');
            return;
        }

        if (feedback) {
            feedback.textContent = '';
            feedback.classList.remove('success', 'error');
        }

        if (submitBtn) {
            submitBtn.disabled = true;
        }

        try {
            await emailjs.sendForm(EMAILJS_CONFIG.serviceID, EMAILJS_CONFIG.templateID, form);

            form.reset();
            if (languageField) {
                languageField.value = currentLang;
            }
            if (feedback) {
                feedback.textContent = langPack['contact-form-success'];
                feedback.classList.remove('error');
                feedback.classList.add('success');
            }
        } catch (error) {
            console.error('EmailJS submission failed:', error);
            if (feedback) {
                feedback.textContent = langPack['contact-form-error'];
                feedback.classList.remove('success');
                feedback.classList.add('error');
            }
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
            }
        }
    });
}

// GitHub Live Stats
function initGitHubStats() {
    const username = document.body.getAttribute('data-github-username');
    if (!username) {
        return;
    }

    const statsElements = {
        commits: document.querySelector('[data-stat="commits"]'),
        prs: document.querySelector('[data-stat="prs"]'),
        contributions: document.querySelector('[data-stat="contributions"]'),
        languages: document.querySelector('[data-stat="languages"]'),
        lastSync: document.querySelector('[data-stat="last-sync"]')
    };

    const setText = (key, value) => {
        if (statsElements[key]) {
            statsElements[key].textContent = value;
            statsElements[key].removeAttribute('title');
        }
    };

    const setError = (key, message) => {
        if (statsElements[key]) {
            statsElements[key].textContent = '--';
            if (message) {
                statsElements[key].title = message;
            }
        }
    };

    const updateSyncTime = () => {
        if (statsElements.lastSync) {
            const now = new Date();
            const formatted = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            statsElements.lastSync.textContent = formatted;
            statsElements.lastSync.dataset.value = formatted;
        }
    };

    const formatNumber = (value) => {
        return new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(value);
    };

    setText('commits', '...');
    setText('prs', '...');
    setText('contributions', '...');
    setText('languages', '...');
    updateSyncTime();

    const fetchContributions = async () => {
         const year = new Date().getFullYear();
         const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`);
         if (!response.ok) {
             throw new Error('Unable to load contributions');
         }
         const data = await response.json();
         if (typeof data.total === 'number') {
             return data.total;
         }

         if (data.total && typeof data.total === 'object') {
             const totals = Object.values(data.total)
                 .map(value => (typeof value === 'number' ? value : Number(value)))
                 .filter(Number.isFinite);
             if (totals.length) {
                 return totals.reduce((sum, value) => sum + value, 0);
             }
         }

         return 0;
     };

    const fetchAllRepos = async () => {
        let repos = [];
        let page = 1;
        let hasNext = true;

        while (hasNext && page <= 5) {
            const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&page=${page}`);
            if (!response.ok) {
                throw new Error('Unable to load repositories');
            }
            const data = await response.json();
            repos = repos.concat(data);

            const linkHeader = response.headers.get('Link');
            hasNext = linkHeader && linkHeader.includes('rel="next"');
            page += 1;
        }

        return repos;
    };

    const fetchTotalCommits = async () => {
        const response = await fetch(`https://api.github.com/search/commits?q=author:${username}`, {
            headers: {
                'Accept': 'application/vnd.github.cloak-preview+json'
            }
        });
        if (!response.ok) {
            throw new Error('Unable to load commits');
        }
        const data = await response.json();
        return Number.isFinite(data.total_count) ? data.total_count : 0;
    };

    const fetchTotalPullRequests = async () => {
        const response = await fetch(`https://api.github.com/search/issues?q=is:pr+author:${username}`);
        if (!response.ok) {
            throw new Error('Unable to load pull requests');
        }
        const data = await response.json();
        return Number.isFinite(data.total_count) ? data.total_count : 0;
    };

    (async () => {
        try {
            const [totalContributions, repos, totalCommits, totalPRs] = await Promise.all([
                fetchContributions().catch(error => {
                    console.warn(error);
                    setError('contributions', error.message);
                    return null;
                }),
                fetchAllRepos().catch(error => {
                    console.warn(error);
                    setError('commits', error.message);
                    setError('languages', error.message);
                    return null;
                }),
                fetchTotalCommits().catch(error => {
                    console.warn(error);
                    setError('commits', error.message);
                    return null;
                }),
                fetchTotalPullRequests().catch(error => {
                    console.warn(error);
                    setError('prs', error.message);
                    return null;
                })
            ]);

            if (Number.isFinite(totalCommits)) {
                setText('commits', formatNumber(totalCommits));
            }

            if (Number.isFinite(totalPRs)) {
                setText('prs', formatNumber(totalPRs));
            }

            if (typeof totalContributions === 'number') {
                setText('contributions', formatNumber(totalContributions));
            }

            if (Array.isArray(repos) && repos.length) {
                const languageCounts = {};
                repos.forEach(repo => {
                    if (repo.language) {
                        const language = repo.language;
                        languageCounts[language] = (languageCounts[language] || 0) + 1;
                    }
                });

                const sortedLanguages = Object.entries(languageCounts)
                    .sort((a, b) => b[1] - a[1])
                    .map(entry => entry[0]);

                if (sortedLanguages.length) {
                    const topLanguages = sortedLanguages.slice(0, 3).join(' • ');
                    setText('languages', topLanguages);
                } else {
                    setText('languages', '--');
                }
            } else if (Array.isArray(repos)) {
                setText('languages', '--');
            }
        } catch (error) {
            console.error('GitHub stats error:', error);
        } finally {
            updateSyncTime();
        }
    })();
}

let skillChartsInstances = [];
let skillChartsInitialized = false;

function getSkillChartConfigs(lang) {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const styles = getComputedStyle(document.documentElement);
    const textColor = (styles.getPropertyValue('--text-color') || '').trim() || (isDark ? '#e4e4e4' : '#1f2933');
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.18)' : 'rgba(31, 41, 55, 0.12)';
    const subtleGridColor = isDark ? 'rgba(148, 163, 184, 0.20)' : 'rgba(148, 163, 184, 0.30)';

    const labelSets = {
        en: {
            radarLabels: ['Backend APIs', 'Frontend UX', 'DevOps & Cloud', 'Testing & QA', 'Architecture', 'Collaboration'],
            radarDataset: 'Capability Level (%)',
            pieLabels: ['Backend', 'Frontend', 'DevOps', 'Discovery'],
            pieDataset: 'Weekly Focus (hours)',
            barLabels: ['JavaScript/TypeScript', 'Java', 'Python', 'Node.js', 'SQL/NoSQL'],
            barDataset: 'Projects Delivered'
        },
        pt: {
            radarLabels: ['APIs Backend', 'UX Frontend', 'DevOps & Nuvem', 'Testes & QA', 'Arquitetura', 'Colaboração'],
            radarDataset: 'Nível de Capacidade (%)',
            pieLabels: ['Backend', 'Frontend', 'DevOps', 'Discovery'],
            pieDataset: 'Foco Semanal (horas)',
            barLabels: ['JavaScript/TypeScript', 'Java', 'Python', 'Node.js', 'SQL/NoSQL'],
            barDataset: 'Projetos Entregues'
        }
    };

    const locale = labelSets[lang] ? lang : 'en';

    const palettePrimary = '#667eea';
    const paletteSecondary = '#764ba2';
    const paletteAccent = '#25D366';
    const paletteExtra = '#ffb347';

    return {
        radar: {
            type: 'radar',
            data: {
                labels: labelSets[locale].radarLabels,
                datasets: [{
                    label: labelSets[locale].radarDataset,
                    data: [92, 85, 78, 82, 88, 90],
                    backgroundColor: 'rgba(102, 126, 234, 0.20)',
                    borderColor: palettePrimary,
                    pointBackgroundColor: paletteSecondary,
                    pointBorderColor: '#ffffff',
                    pointHoverBackgroundColor: '#ffffff',
                    pointHoverBorderColor: paletteSecondary,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: textColor,
                            font: {
                                weight: '600'
                            }
                        }
                    }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        suggestedMax: 100,
                        ticks: {
                            display: false
                        },
                        pointLabels: {
                            color: textColor,
                            font: {
                                size: 12,
                                family: 'PT Sans, sans-serif'
                            }
                        },
                        grid: {
                            color: subtleGridColor
                        },
                        angleLines: {
                            color: subtleGridColor
                        }
                    }
                }
            }
        },
        pie: {
            type: 'doughnut',
            data: {
                labels: labelSets[locale].pieLabels,
                datasets: [{
                    label: labelSets[locale].pieDataset,
                    data: [18, 12, 6, 4],
                    backgroundColor: [
                        palettePrimary,
                        paletteSecondary,
                        paletteAccent,
                        paletteExtra
                    ],
                    hoverOffset: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '58%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: textColor,
                            padding: 16,
                            usePointStyle: true
                        }
                    }
                }
            }
        },
        bar: {
            type: 'bar',
            data: {
                labels: labelSets[locale].barLabels,
                datasets: [{
                    label: labelSets[locale].barDataset,
                    data: [8, 6, 5, 7, 6],
                    backgroundColor: 'rgba(102, 126, 234, 0.85)',
                    borderRadius: 10,
                    maxBarThickness: 48
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColor
                        },
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        ticks: {
                            color: textColor,
                            stepSize: 2
                        },
                        grid: {
                            color: gridColor
                        },
                        beginAtZero: true,
                        suggestedMax: 10
                    }
                }
            }
        }
    };
}

function updateSkillChartsColors() {
    if (!skillChartsInitialized) {
        return;
    }

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const styles = getComputedStyle(document.documentElement);
    const textColor = (styles.getPropertyValue('--text-color') || '').trim() || (isDark ? '#e4e4e4' : '#1f2933');
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.18)' : 'rgba(31, 41, 55, 0.12)';
    const subtleGridColor = isDark ? 'rgba(148, 163, 184, 0.20)' : 'rgba(148, 163, 184, 0.30)';

    skillChartsInstances.forEach(({ key, chart }) => {
        if (!chart) {
            return;
        }

        if (key === 'radar') {
            if (chart.options.scales && chart.options.scales.r) {
                chart.options.scales.r.pointLabels.color = textColor;
                chart.options.scales.r.grid.color = subtleGridColor;
                chart.options.scales.r.angleLines.color = subtleGridColor;
            }
            if (chart.options.plugins && chart.options.plugins.legend && chart.options.plugins.legend.labels) {
                chart.options.plugins.legend.labels.color = textColor;
            }
        } else if (key === 'pie') {
            if (chart.options.plugins && chart.options.plugins.legend && chart.options.plugins.legend.labels) {
                chart.options.plugins.legend.labels.color = textColor;
            }
        } else if (key === 'bar') {
            if (chart.options.scales) {
                if (chart.options.scales.x && chart.options.scales.x.ticks) {
                    chart.options.scales.x.ticks.color = textColor;
                }
                if (chart.options.scales.y) {
                    if (chart.options.scales.y.ticks) {
                        chart.options.scales.y.ticks.color = textColor;
                    }
                    if (chart.options.scales.y.grid) {
                        chart.options.scales.y.grid.color = gridColor;
                    }
                }
            }
        }

        chart.update('none');
    });
}

function updateSkillCharts(lang) {
    if (!skillChartsInitialized) {
        initSkillCharts();
        return;
    }

    const activeLang = lang || window.currentLanguage || localStorage.getItem('language') || 'en';
    const configs = getSkillChartConfigs(activeLang);

    skillChartsInstances.forEach(({ key, chart }) => {
        const config = configs[key];
        if (!chart || !config) {
            return;
        }

        chart.data.labels = config.data.labels.slice();

        config.data.datasets.forEach((datasetConfig, idx) => {
            if (!chart.data.datasets[idx]) {
                chart.data.datasets[idx] = {};
            }
            const dataset = chart.data.datasets[idx];
            dataset.label = datasetConfig.label;
            dataset.data = datasetConfig.data.slice();

            if (datasetConfig.backgroundColor) {
                dataset.backgroundColor = Array.isArray(datasetConfig.backgroundColor)
                    ? datasetConfig.backgroundColor.slice()
                    : datasetConfig.backgroundColor;
            }
            if (datasetConfig.borderColor) {
                dataset.borderColor = datasetConfig.borderColor;
            }
            if (datasetConfig.pointBackgroundColor) {
                dataset.pointBackgroundColor = datasetConfig.pointBackgroundColor;
            }
            if (datasetConfig.pointBorderColor) {
                dataset.pointBorderColor = datasetConfig.pointBorderColor;
            }
            if (datasetConfig.pointHoverBackgroundColor) {
                dataset.pointHoverBackgroundColor = datasetConfig.pointHoverBackgroundColor;
            }
            if (datasetConfig.pointHoverBorderColor) {
                dataset.pointHoverBorderColor = datasetConfig.pointHoverBorderColor;
            }
            if (typeof datasetConfig.borderWidth !== 'undefined') {
                dataset.borderWidth = datasetConfig.borderWidth;
            }
            if (typeof datasetConfig.hoverOffset !== 'undefined') {
                dataset.hoverOffset = datasetConfig.hoverOffset;
            }
            if (typeof datasetConfig.borderRadius !== 'undefined') {
                dataset.borderRadius = datasetConfig.borderRadius;
            }
            if (typeof datasetConfig.maxBarThickness !== 'undefined') {
                dataset.maxBarThickness = datasetConfig.maxBarThickness;
            }
        });

        chart.update();
    });

    updateSkillChartsColors();
}

function initSkillCharts() {
    if (typeof Chart === 'undefined') {
        return;
    }

    const chartElements = [
        { key: 'radar', canvas: document.getElementById('skill-radar-chart') },
        { key: 'pie', canvas: document.getElementById('skill-pie-chart') },
        { key: 'bar', canvas: document.getElementById('skill-bar-chart') }
    ].filter(item => item.canvas);

    if (!chartElements.length) {
        return;
    }

    if (skillChartsInitialized) {
        updateSkillCharts(window.currentLanguage || localStorage.getItem('language') || 'en');
        return;
    }

    const lang = window.currentLanguage || localStorage.getItem('language') || 'en';
    const configs = getSkillChartConfigs(lang);

    skillChartsInstances = chartElements.map(({ key, canvas }) => {
        const ctx = canvas.getContext('2d');
        const config = configs[key];

        if (!ctx || !config) {
            return { key, chart: null };
        }

        const chart = new Chart(ctx, config);
        return { key, chart };
    }).filter(item => item.chart);

    if (skillChartsInstances.length) {
        skillChartsInitialized = true;
        updateSkillChartsColors();
        window.updateSkillCharts = updateSkillCharts;
        window.updateSkillChartsColors = updateSkillChartsColors;
    }
}

function general_utils() {
    // smooth scrolling for nav links - versão vanilla JS
    smoothScrollInit();
    
    // animate skillbars - versão vanilla JS
    const skillbars = document.querySelectorAll('.skillbar');
    skillbars.forEach(function(skillbar) {
        const bar = skillbar.querySelector('.skillbar-bar');
        const percent = skillbar.getAttribute('data-percent');
        
        // Animar após um pequeno delay para efeito visual
        setTimeout(function() {
            bar.style.width = percent;
            bar.style.transition = 'width 1s ease-in-out';
        }, 100);
    });
}

function smoothScrollInit() {
    const links = document.querySelectorAll('.head-menu-wrap a, .extra-link a, .profile-pic-link');
    
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Funções blog removidas - Seção transformada em Serviços (HTML estático)

// WhatsApp Floating Button
(function initWhatsAppButton() {
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = 'https://wa.me/5548996122449?text=Hi!%20I%27d%20like%20to%20discuss%20a%20project';
    whatsappBtn.target = '_blank';
    whatsappBtn.className = 'whatsapp-float';
    whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    whatsappBtn.setAttribute('aria-label', 'Chat on WhatsApp');
    
    whatsappBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 30px;
        z-index: 1000;
        width: 60px;
        height: 60px;
        background: #25D366;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        transition: all 0.3s;
        text-decoration: none;
    `;
    
    whatsappBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 6px 16px rgba(37, 211, 102, 0.5)';
    });
    
    whatsappBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
    });
    
    document.body.appendChild(whatsappBtn);
})();

// Dark Mode Toggle
(function initDarkMode() {
    // Criar botão
    const btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.innerHTML = '<i class="fas fa-moon"></i>';
    btn.setAttribute('aria-label', 'Toggle Dark Mode');
    document.body.appendChild(btn);
    
    // Verificar preferência salva
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        btn.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Toggle ao clicar
    btn.addEventListener('click', function() {
        const current = document.documentElement.getAttribute('data-theme');
        const newTheme = current === 'dark' ? 'light' : 'dark';
        
        if (newTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            btn.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            btn.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'light');
        }

        if (window.updateSkillChartsColors) {
            window.updateSkillChartsColors();
        }
    });
})();

const presentationSectionConfig = {
    about: { summaryKey: 'presentation-about-summary', highlightsKey: 'presentation-about-highlights' },
    metrics: { summaryKey: 'presentation-metrics-summary', highlightsKey: 'presentation-metrics-highlights' },
    timeline: { summaryKey: 'presentation-timeline-summary', highlightsKey: 'presentation-timeline-highlights' },
    skills: { summaryKey: 'presentation-skills-summary', highlightsKey: 'presentation-skills-highlights' },
    projects: { summaryKey: 'presentation-projects-summary', highlightsKey: 'presentation-projects-highlights' },
    'blog-posts': { summaryKey: 'presentation-services-summary', highlightsKey: 'presentation-services-highlights' },
    process: { summaryKey: 'presentation-process-summary', highlightsKey: 'presentation-process-highlights' },
    faq: { summaryKey: 'presentation-faq-summary', highlightsKey: 'presentation-faq-highlights' },
    extra: { summaryKey: 'presentation-contact-summary', highlightsKey: 'presentation-contact-highlights' }
};

const presentationState = {
    active: false,
    currentIndex: 0,
    slides: [],
    overlay: null,
    button: null,
    focusReturn: null
};

const presentationSanitizer = document.createElement('div');

function initPresentationMode() {
    if (presentationState.button) {
        return;
    }

    const toggleButton = document.createElement('button');
    toggleButton.type = 'button';
    toggleButton.className = 'presentation-toggle';
    toggleButton.innerHTML = '<i class="fas fa-chalkboard"></i><span data-i18n="presentation-open">Presentation Mode</span>';
    toggleButton.addEventListener('click', togglePresentationMode);
    document.body.appendChild(toggleButton);

    const overlay = document.createElement('div');
    overlay.id = 'presentation-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.setAttribute('tabindex', '-1');
    overlay.innerHTML = `
        <div class="presentation-dialog" role="dialog" aria-modal="true">
            <button class="presentation-close" type="button">
                <i class="fas fa-times" aria-hidden="true"></i>
                <span class="sr-only" data-i18n="presentation-close">Exit presentation</span>
            </button>
            <div class="presentation-progress">
                <span data-i18n="presentation-progress-label">Slide</span>
                <span id="presentation-progress-current">0</span>
                <span data-i18n="presentation-progress-of">of</span>
                <span id="presentation-progress-total">0</span>
            </div>
            <div class="presentation-slide-container"></div>
            <div class="presentation-empty" data-i18n="presentation-empty">No sections available for presentation right now.</div>
            <div class="presentation-controls">
                <button class="presentation-prev" type="button">
                    <i class="fas fa-arrow-left" aria-hidden="true"></i>
                    <span data-i18n="presentation-prev">Previous</span>
                </button>
                <button class="presentation-next" type="button">
                    <span data-i18n="presentation-next">Next</span>
                    <i class="fas fa-arrow-right" aria-hidden="true"></i>
                </button>
            </div>
            <div class="presentation-hint" data-i18n="presentation-hint">Use ← → keys to navigate, press P to toggle, ESC to exit.</div>
        </div>
    `;

    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            exitPresentationMode();
        }
    });

    const closeBtn = overlay.querySelector('.presentation-close');
    const prevBtn = overlay.querySelector('.presentation-prev');
    const nextBtn = overlay.querySelector('.presentation-next');

    closeBtn.addEventListener('click', exitPresentationMode);
    prevBtn.addEventListener('click', function() {
        movePresentationSlide(-1);
    });
    nextBtn.addEventListener('click', function() {
        movePresentationSlide(1);
    });

    document.body.appendChild(overlay);

    presentationState.button = toggleButton;
    presentationState.overlay = overlay;

    document.addEventListener('keydown', handlePresentationKeydown, true);

    updatePresentationTexts(window.currentLanguage || localStorage.getItem('language') || 'en');
}

function togglePresentationMode() {
    if (presentationState.active) {
        exitPresentationMode();
    } else {
        enterPresentationMode();
    }
}

function enterPresentationMode() {
    if (!presentationState.overlay) {
        return;
    }

    buildPresentationSlides();

    presentationState.focusReturn = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    presentationState.active = true;
    document.body.classList.add('presentation-mode-active');

    presentationState.overlay.classList.add('is-visible');
    presentationState.overlay.setAttribute('aria-hidden', 'false');

    if (presentationState.slides.length) {
        presentationState.currentIndex = 0;
        showPresentationSlide(0);
    } else {
        updatePresentationControls();
    }

    requestAnimationFrame(() => {
        presentationState.overlay.focus();
    });
}

function exitPresentationMode() {
    if (!presentationState.overlay || !presentationState.active) {
        return;
    }

    presentationState.overlay.classList.remove('is-visible');
    presentationState.overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('presentation-mode-active');
    presentationState.active = false;

    if (presentationState.focusReturn && typeof presentationState.focusReturn.focus === 'function') {
        presentationState.focusReturn.focus();
    }
}

function buildPresentationSlides() {
    if (!presentationState.overlay) {
        return;
    }

    const container = presentationState.overlay.querySelector('.presentation-slide-container');
    const emptyMessage = presentationState.overlay.querySelector('.presentation-empty');
    const progressCurrent = presentationState.overlay.querySelector('#presentation-progress-current');
    const progressTotal = presentationState.overlay.querySelector('#presentation-progress-total');

    container.innerHTML = '';
    presentationState.slides = [];
    presentationState.currentIndex = 0;

    const order = Object.keys(presentationSectionConfig);

    order.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (!section) {
            return;
        }

        const config = presentationSectionConfig[sectionId] || {};
        const title = getSectionTitle(section, config);
        if (!title) {
            return;
        }

        const summaryText = config.summaryKey ? sanitizeToPlainText(getTranslationValue(config.summaryKey)) : getSectionSummary(section);
        const summary = summaryText ? truncateText(summaryText, 340) : '';

        const rawHighlights = config.highlightsKey ? getTranslationValue(config.highlightsKey) : '';
        const highlights = rawHighlights
            ? rawHighlights.split('|').map(item => sanitizeToPlainText(item).trim()).filter(Boolean).slice(0, 4)
            : [];

        const slideElement = document.createElement('article');
        slideElement.className = 'presentation-slide';
        slideElement.setAttribute('data-section-id', sectionId);

        const headingEl = document.createElement('h3');
        headingEl.className = 'presentation-slide-title';
        headingEl.textContent = title;
        slideElement.appendChild(headingEl);

        if (summary) {
            const summaryEl = document.createElement('p');
            summaryEl.className = 'presentation-slide-summary';
            summaryEl.textContent = summary;
            slideElement.appendChild(summaryEl);
        }

        if (highlights.length) {
            const listEl = document.createElement('ul');
            listEl.className = 'presentation-slide-list';
            highlights.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                listEl.appendChild(li);
            });
            slideElement.appendChild(listEl);
        }

        if (sectionId) {
            const viewBtn = document.createElement('button');
            viewBtn.type = 'button';
            viewBtn.className = 'presentation-view-button';
            viewBtn.setAttribute('data-i18n', 'presentation-view-section');
            viewBtn.textContent = getTranslationValue('presentation-view-section');
            viewBtn.addEventListener('click', function() {
                const targetId = this.closest('.presentation-slide').getAttribute('data-section-id');
                exitPresentationMode();
                setTimeout(() => {
                    const target = document.getElementById(targetId);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 350);
            });
            slideElement.appendChild(viewBtn);
            applyCustomCursorEnhancements(slideElement);
        }

        container.appendChild(slideElement);
        presentationState.slides.push({ element: slideElement, sectionId });
    });

    if (presentationState.slides.length) {
        emptyMessage.style.display = 'none';
        progressCurrent.textContent = '1';
        progressTotal.textContent = String(presentationState.slides.length);
        presentationState.slides[0].element.classList.add('is-active');
    } else {
        emptyMessage.style.display = 'block';
        progressCurrent.textContent = '0';
        progressTotal.textContent = '0';
    }
}

function showPresentationSlide(index) {
    if (!presentationState.slides.length) {
        updatePresentationControls();
        return;
    }

    const maxIndex = presentationState.slides.length - 1;
    const newIndex = Math.min(Math.max(index, 0), maxIndex);

    presentationState.slides.forEach((slide, slideIndex) => {
        slide.element.classList.toggle('is-active', slideIndex === newIndex);
    });

    const progressCurrent = presentationState.overlay.querySelector('#presentation-progress-current');
    const progressTotal = presentationState.overlay.querySelector('#presentation-progress-total');
    progressCurrent.textContent = String(newIndex + 1);
    progressTotal.textContent = String(presentationState.slides.length);

    presentationState.currentIndex = newIndex;
    updatePresentationControls();
}

function movePresentationSlide(delta) {
    if (!presentationState.active || !presentationState.slides.length) {
        return;
    }

    const nextIndex = presentationState.currentIndex + delta;
    if (nextIndex < 0 || nextIndex >= presentationState.slides.length) {
        return;
    }

    showPresentationSlide(nextIndex);
}

function updatePresentationControls() {
    if (!presentationState.overlay) {
        return;
    }

    const prevBtn = presentationState.overlay.querySelector('.presentation-prev');
    const nextBtn = presentationState.overlay.querySelector('.presentation-next');
    const total = presentationState.slides.length;
    const current = presentationState.currentIndex;

    const disablePrev = total <= 1 || current <= 0;
    const disableNext = total <= 1 || current >= total - 1;

    prevBtn.disabled = disablePrev;
    nextBtn.disabled = disableNext;
    prevBtn.setAttribute('aria-disabled', disablePrev);
    nextBtn.setAttribute('aria-disabled', disableNext);
}

function handlePresentationKeydown(event) {
    if (!event || typeof event.key !== 'string') {
        return;
    }

    const key = event.key;
    const target = event.target;
    const isTypingElement = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);

    if (!event.altKey && !event.ctrlKey && !event.metaKey && key.toLowerCase() === 'p') {
        if (!presentationState.active && isTypingElement) {
            return;
        }
        event.preventDefault();
        togglePresentationMode();
        return;
    }

    if (!presentationState.active) {
        return;
    }

    if (key === 'Escape') {
        event.preventDefault();
        exitPresentationMode();
        return;
    }

    if (key === 'ArrowRight' || key === 'ArrowDown') {
        event.preventDefault();
        movePresentationSlide(1);
        return;
    }

    if (key === 'ArrowLeft' || key === 'ArrowUp') {
        event.preventDefault();
        movePresentationSlide(-1);
        return;
    }

    if (key === 'Home') {
        event.preventDefault();
        showPresentationSlide(0);
        return;
    }

    if (key === 'End') {
        event.preventDefault();
        showPresentationSlide(presentationState.slides.length - 1);
    }
}

function getSectionTitle(section, config) {
    if (config && config.titleKey) {
        const customTitle = sanitizeToPlainText(getTranslationValue(config.titleKey));
        if (customTitle) {
            return customTitle;
        }
    }

    const heading = section.querySelector('.section-heading');
    if (heading) {
        return heading.textContent.trim();
    }

    const ariaLabel = section.getAttribute('aria-label');
    if (ariaLabel) {
        return ariaLabel;
    }

    return section.id || '';
}

function getSectionSummary(section) {
    const summaryAttr = section.getAttribute('data-presentation-summary');
    if (summaryAttr) {
        return sanitizeToPlainText(summaryAttr);
    }

    const paragraph = section.querySelector('.paragraph-text');
    if (paragraph) {
        return sanitizeToPlainText(paragraph.innerHTML || paragraph.textContent || '');
    }

    return sanitizeToPlainText(section.textContent || '').slice(0, 320);
}

function sanitizeToPlainText(value) {
    if (!value) {
        return '';
    }
    presentationSanitizer.innerHTML = value;
    return (presentationSanitizer.textContent || presentationSanitizer.innerText || '').trim();
}

function truncateText(value, maxLength) {
    if (!value) {
        return '';
    }
    if (value.length <= maxLength) {
        return value;
    }
    return value.slice(0, maxLength - 1).trimEnd() + '…';
}

function getTranslationValue(key, langOverride) {
    if (typeof translations === 'undefined') {
        return '';
    }
    const lang = langOverride || window.currentLanguage || localStorage.getItem('language') || 'en';
    const byLang = translations[lang] && translations[lang][key];
    if (byLang) {
        return byLang;
    }
    const fallback = translations.en && translations.en[key];
    return fallback || '';
}

function updatePresentationTexts(lang) {
    const language = lang || window.currentLanguage || localStorage.getItem('language') || 'en';
    const toggleButton = presentationState.button;
    if (toggleButton) {
        toggleButton.setAttribute('aria-label', getTranslationValue('presentation-open', language));
    }

    const overlay = presentationState.overlay;
    if (!overlay) {
        return;
    }

    const closeBtn = overlay.querySelector('.presentation-close');
    const prevBtn = overlay.querySelector('.presentation-prev');
    const nextBtn = overlay.querySelector('.presentation-next');

    if (closeBtn) {
        closeBtn.setAttribute('aria-label', getTranslationValue('presentation-close', language));
    }
    if (prevBtn) {
        prevBtn.setAttribute('aria-label', getTranslationValue('presentation-prev', language));
    }
    if (nextBtn) {
        nextBtn.setAttribute('aria-label', getTranslationValue('presentation-next', language));
    }

    if (presentationState.active) {
        const preservedIndex = presentationState.currentIndex;
        buildPresentationSlides();
        if (presentationState.slides.length) {
            const safeIndex = Math.min(preservedIndex, presentationState.slides.length - 1);
            showPresentationSlide(safeIndex);
        } else {
            updatePresentationControls();
        }
    }
}

window.updatePresentationTexts = updatePresentationTexts;

const easterEggState = {
    konamiProgress: 0,
    logoClicks: 0,
    lastLogoClick: 0,
    miniGameActive: false,
    miniGameTimer: null
};

const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

function initEasterEggs() {
    setupKonamiListener();
    setupLogoMiniGame();
    applyCustomCursorEnhancements(document);
    window.easterEggState = easterEggState;
}

function setupKonamiListener() {
    document.addEventListener('keydown', function(event) {
        const key = event.key ? event.key.toString() : '';
        if (!key) {
            return;
        }

        const expectedKey = konamiSequence[easterEggState.konamiProgress];
        if (key.toLowerCase() === expectedKey.toLowerCase()) {
            easterEggState.konamiProgress += 1;
            if (easterEggState.konamiProgress === konamiSequence.length) {
                triggerKonamiEffect();
                easterEggState.konamiProgress = 0;
            }
        } else {
            easterEggState.konamiProgress = key === konamiSequence[0] ? 1 : 0;
        }
    });
}

function triggerKonamiEffect() {
    if (document.body.classList.contains('konami-activated')) {
        return;
    }

    const messageText = getTranslationValue('easteregg-konami-message');

    document.body.classList.add('konami-activated');

    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'konami-confetti-container';

    for (let i = 0; i < 24; i += 1) {
        const piece = document.createElement('span');
        piece.className = 'konami-confetti-piece';
        piece.style.setProperty('--confetti-left', `${Math.random() * 100}%`);
        piece.style.setProperty('--confetti-delay', `${Math.random() * 1.2}s`);
        piece.style.setProperty('--confetti-duration', `${2.5 + Math.random()}s`);
        confettiContainer.appendChild(piece);
    }

    const banner = document.createElement('div');
    banner.className = 'konami-banner';
    banner.textContent = messageText || 'Konami mode unlocked!';

    document.body.appendChild(confettiContainer);
    document.body.appendChild(banner);

    setTimeout(() => {
        banner.classList.add('fade-out');
        confettiContainer.classList.add('fade-out');
    }, 3500);

    setTimeout(() => {
        document.body.classList.remove('konami-activated');
        banner.remove();
        confettiContainer.remove();
    }, 5000);
}

function setupLogoMiniGame() {
    const logo = document.getElementById('head-name');
    if (!logo) {
        return;
    }

    logo.addEventListener('click', function() {
        const now = Date.now();
        if (now - easterEggState.lastLogoClick > 2000) {
            easterEggState.logoClicks = 0;
        }
        easterEggState.lastLogoClick = now;
        easterEggState.logoClicks += 1;

        if (easterEggState.logoClicks >= 10) {
            easterEggState.logoClicks = 0;
            launchMiniGame();
        }
    });
}

function launchMiniGame() {
    if (easterEggState.miniGameActive) {
        return;
    }

    easterEggState.miniGameActive = true;
    document.body.classList.add('mini-game-active');

    const lang = window.currentLanguage || localStorage.getItem('language') || 'en';
    const overlay = document.createElement('div');
    overlay.className = 'mini-game-overlay';
    overlay.innerHTML = `
        <div class="mini-game-card">
            <button type="button" class="mini-game-close" aria-label="${getTranslationValue('easteregg-minigame-close', lang)}">
                <i class="fas fa-times"></i>
            </button>
            <h3 class="mini-game-title">${getTranslationValue('easteregg-minigame-title', lang)}</h3>
            <p class="mini-game-instruction">${getTranslationValue('easteregg-minigame-instruction', lang)}</p>
            <div class="mini-game-score">${getTranslationValue('easteregg-minigame-score', lang)}: <span>0</span> / 5</div>
            <div class="mini-game-arena">
                <button type="button" class="mini-game-target" aria-label="${getTranslationValue('easteregg-minigame-target', lang)}">🚀</button>
            </div>
            <button type="button" class="mini-game-start">${getTranslationValue('easteregg-minigame-start', lang)}</button>
            <div class="mini-game-feedback" aria-live="polite"></div>
        </div>
    `;

    document.body.appendChild(overlay);
    applyCustomCursorEnhancements(overlay);

    const closeBtn = overlay.querySelector('.mini-game-close');
    const startBtn = overlay.querySelector('.mini-game-start');
    const targetBtn = overlay.querySelector('.mini-game-target');
    const scoreEl = overlay.querySelector('.mini-game-score span');
    const feedbackEl = overlay.querySelector('.mini-game-feedback');
    const arena = overlay.querySelector('.mini-game-arena');

    let hits = 0;
    let moves = 0;
    const maxHits = 5;
    const maxMoves = 25;
    let moveInterval = null;

    function endGame(success) {
        clearInterval(moveInterval);
        moveInterval = null;
        startBtn.disabled = false;
        targetBtn.classList.remove('is-active');
        targetBtn.disabled = true;
        targetBtn.style.transform = 'translate(-50%, -50%)';
        if (success) {
            feedbackEl.textContent = getTranslationValue('easteregg-minigame-success', lang);
        } else {
            feedbackEl.textContent = getTranslationValue('easteregg-minigame-tryagain', lang);
        }
    }

    function moveTarget() {
        moves += 1;
        const padding = 20;
        const arenaRect = arena.getBoundingClientRect();
        const x = Math.random() * (arenaRect.width - padding * 2) + padding;
        const y = Math.random() * (arenaRect.height - padding * 2) + padding;
        targetBtn.style.left = `${x}px`;
        targetBtn.style.top = `${y}px`;

        if (moves >= maxMoves) {
            endGame(false);
        }
    }

    function startGame() {
        hits = 0;
        moves = 0;
        scoreEl.textContent = '0';
        feedbackEl.textContent = '';
        startBtn.disabled = true;
        targetBtn.disabled = false;
        targetBtn.classList.add('is-active');
        moveTarget();
        if (moveInterval) {
            clearInterval(moveInterval);
        }
        moveInterval = setInterval(moveTarget, 900);
    }

    targetBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        if (!targetBtn.classList.contains('is-active')) {
            return;
        }
        hits += 1;
        scoreEl.textContent = String(hits);
        moveTarget();
        if (hits >= maxHits) {
            endGame(true);
        }
    });

    startBtn.addEventListener('click', startGame);

    function closeMiniGame() {
        clearInterval(moveInterval);
        document.removeEventListener('keydown', escListener, true);
        overlay.remove();
        document.body.classList.remove('mini-game-active');
        easterEggState.miniGameActive = false;
    }

    closeBtn.addEventListener('click', closeMiniGame);
    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            closeMiniGame();
        }
    });

    function escListener(event) {
        if (event.key === 'Escape' && overlay.isConnected) {
            closeMiniGame();
        }
    }

    document.addEventListener('keydown', escListener, true);
}

function applyCustomCursorEnhancements(scope) {
    const context = scope || document;
    const targets = context.querySelectorAll('.skill-badge, .mini-game-target, .mini-game-start, .presentation-view-button');
    targets.forEach(el => {
        el.classList.add('custom-cursor-spark');
    });
}

const focusModeState = {
    enabled: false,
    button: null,
    label: null
};

const musicState = {
    enabled: false,
    audio: null,
    button: null,
    label: null,
    wasEnabledBeforeFocus: false,
    isAttemptingPlay: false
};

function initFocusMode() {
    if (focusModeState.button) {
        // Already initialized
        return;
    }

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'focus-toggle';
    btn.innerHTML = '<i class="fas fa-book-reader"></i><span></span>';
    btn.setAttribute('aria-pressed', 'false');
    btn.addEventListener('click', function() {
        setFocusMode(!focusModeState.enabled);
    });

    document.body.appendChild(btn);
    focusModeState.button = btn;
    focusModeState.label = btn.querySelector('span');

    const saved = localStorage.getItem('focusMode') === 'true';
    setFocusMode(saved, { skipStorage: true });

    if (!window.updateFocusModeLanguage) {
        window.updateFocusModeLanguage = function(lang) {
            updateFocusModeLabel(lang);
        };
    }

    const initialLang = window.currentLanguage || localStorage.getItem('language') || 'en';
    updateFocusModeLabel(initialLang);
}

function setFocusMode(enabled, options) {
    if (!focusModeState.button) {
        return;
    }

    const shouldEnable = Boolean(enabled);
    const wasEnabled = focusModeState.enabled;
    focusModeState.enabled = shouldEnable;
    focusModeState.button.setAttribute('aria-pressed', shouldEnable ? 'true' : 'false');
    document.body.classList.toggle('focus-mode', shouldEnable);

    const particles = document.getElementById('particles-js');
    if (particles) {
        particles.style.display = shouldEnable ? 'none' : '';
    }

    if (shouldEnable) {
        if (!wasEnabled && musicState.enabled) {
            musicState.wasEnabledBeforeFocus = true;
            setMusicEnabled(false, { skipStorage: true });
        } else {
            musicState.wasEnabledBeforeFocus = false;
        }
        // Close overlays or mini games that add distractions
        const miniGame = document.querySelector('.mini-game-overlay');
        if (miniGame) {
            const closeBtn = miniGame.querySelector('.mini-game-close');
            if (closeBtn) {
                closeBtn.click();
            } else {
                miniGame.remove();
                document.body.classList.remove('mini-game-active');
                if (window.easterEggState) {
                    window.easterEggState.miniGameActive = false;
                }
            }
        }

        const confetti = document.querySelectorAll('.konami-confetti-container, .konami-banner');
        confetti.forEach(el => el.remove());
        document.body.classList.remove('konami-activated');

        const sections = document.querySelectorAll('.section, .animated');
        sections.forEach(el => {
            el.classList.add('focus-visible');
        });
    } else {
        if (wasEnabled && musicState.wasEnabledBeforeFocus) {
            setMusicEnabled(true, { skipStorage: true });
            musicState.wasEnabledBeforeFocus = false;
        }
        document.querySelectorAll('.focus-visible').forEach(el => el.classList.remove('focus-visible'));
    }

    if (!options || !options.skipStorage) {
        localStorage.setItem('focusMode', shouldEnable ? 'true' : 'false');
    }

    updateFocusModeLabel(window.currentLanguage || localStorage.getItem('language') || 'en');
}

function updateFocusModeLabel(lang) {
    if (!focusModeState.button || !focusModeState.label) {
        return;
    }

    const language = lang || window.currentLanguage || localStorage.getItem('language') || 'en';
    const key = focusModeState.enabled ? 'focus-toggle-off' : 'focus-toggle-on';
    const text = getTranslationValue ? getTranslationValue(key, language) : (translations && translations[language] && translations[language][key]) || key;
    focusModeState.label.textContent = text;
    focusModeState.button.setAttribute('aria-label', text);
}

function initMusicPlayer() {
    if (musicState.button) {
        return;
    }

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'music-toggle';
    btn.innerHTML = '<i class="fas fa-music"></i><span></span>';
    btn.setAttribute('aria-pressed', 'false');
    btn.addEventListener('click', function() {
        setMusicEnabled(!musicState.enabled);
    });

    document.body.appendChild(btn);
    musicState.button = btn;
    musicState.label = btn.querySelector('span');

    const saved = localStorage.getItem('musicEnabled') === 'true';
    updateMusicLabel(window.currentLanguage || localStorage.getItem('language') || 'en');
    window.updateMusicLanguage = updateMusicLabel;
    if (saved) {
        setTimeout(() => {
            setMusicEnabled(true);
        }, 0);
    }
}

function ensureMusicAudio() {
    if (!musicState.audio) {
        const audio = new Audio('assets/audio/ambient.mp3');
        audio.loop = true;
        audio.volume = 0.25;
        audio.preload = 'auto';
        let triedFallback = false;
        audio.addEventListener('error', function handleAudioError() {
            if (!triedFallback) {
                triedFallback = true;
                audio.src = 'https://cdn.pixabay.com/download/audio/2023/10/01/audio_eefae01ed5.mp3?filename=ethereal-ambient-piano-2-178605.mp3';
                audio.load();
            }
        });
        musicState.audio = audio;
    }
    return musicState.audio;
}

function setMusicEnabled(enabled, options) {
    if (!musicState.button) {
        return;
    }

    const shouldEnable = Boolean(enabled);
    musicState.enabled = shouldEnable;
    musicState.button.setAttribute('aria-pressed', shouldEnable ? 'true' : 'false');

    const audio = ensureMusicAudio();

    if (shouldEnable) {
        musicState.isAttemptingPlay = true;
        audio.play().then(() => {
            musicState.isAttemptingPlay = false;
        }).catch(() => {
            musicState.isAttemptingPlay = false;
            musicState.enabled = false;
            musicState.button.setAttribute('aria-pressed', 'false');
            if (!options || !options.skipStorage) {
                localStorage.setItem('musicEnabled', 'false');
            }
            updateMusicLabel(window.currentLanguage || localStorage.getItem('language') || 'en');
            console.warn('Unable to start background music. Please ensure the audio file exists at assets/audio/ambient.mp3 or check autoplay permissions.');
            return;
        });
    } else if (audio && !audio.paused) {
        audio.pause();
    }

    if (!options || !options.skipStorage) {
        localStorage.setItem('musicEnabled', shouldEnable ? 'true' : 'false');
    }

    updateMusicLabel(window.currentLanguage || localStorage.getItem('language') || 'en');
}

function updateMusicLabel(lang) {
    if (!musicState.button || !musicState.label) {
        return;
    }
    const language = lang || window.currentLanguage || localStorage.getItem('language') || 'en';
    const key = musicState.enabled ? 'music-toggle-off' : 'music-toggle-on';
    const text = getTranslationValue(key, language);
    musicState.label.textContent = text || '';
    musicState.button.setAttribute('aria-label', text || '');
}
