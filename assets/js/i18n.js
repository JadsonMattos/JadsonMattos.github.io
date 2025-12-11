// Sistema de Internacionalização EN/PT - COMPLETO
const translations = {
    en: {
        // Hero/Navigation
        'hero-title-short': 'I\'m a fullstack developer in Brazil...',
        'hero-title-expandable': ' with a strong backend focus building end-to-end solutions across web and mobile. Passionate about emerging technologies: AI, blockchain, automation, SaaS, and scalability.',
        'hero-subtitle': 'Java • Spring Boot • Node.js • NestJS • Python • TypeScript • React • Next.js • Mobile',
        'nav-about': 'ABOUT',
        'nav-skills': 'SKILLS',
        'nav-projects': 'PROJECTS',
        'nav-services': 'SERVICES',
        
        // About Section
        'about-title': 'Hello, I\'m Jadson 👋',
        'availability-badge': '🟢 Available for new projects',
        'about-intro': '<strong>Fullstack Developer with a strong backend focus, creating robust APIs and scalable solutions.</strong> Currently developing systems with Java (Spring Boot) and Node.js (NestJS) at Horizon, building end-to-end solutions across web and mobile platforms.',
        'about-what-i-do': '<strong>💼 What I do:</strong><br>• Development of RESTful APIs with Java Spring Boot, Node.js, and Python<br>• Full Stack applications with React, TypeScript, and SQL/NoSQL databases<br>• Mobile development for iOS and Android platforms<br>• Microservices architecture, automation, and scalable SaaS solutions<br>• Tests (TDD) and best practices (SOLID, Clean Code)',
        'about-stack': '<strong>🚀 Main Stack:</strong> Java • Spring Boot • Node.js • NestJS • TypeScript • Python • React • Next.js • Mobile • PostgreSQL • MongoDB • Docker',
        'about-experience': '<strong>📊 Experience:</strong> Fullstack Developer with backend expertise, +16 projects on GitHub, working with agile methodologies. Passionate about emerging technologies: AI, blockchain, automation, SaaS, and scalability.',
        'cta-whatsapp': '💬 Chat on WhatsApp',
        'cta-calendly': '📅 Schedule Meeting',
        'cta-quote': '📝 Request Quote',
        'sticky-cta-text': '📅 Schedule Free Meeting',
        'focus-toggle-on': 'Enable Focus Mode',
        'focus-toggle-off': 'Exit Focus Mode',
        'music-toggle-on': 'Play background music',
        'music-toggle-off': 'Stop background music',

        // Presentation Mode
        'presentation-open': 'Presentation Mode',
        'presentation-close': 'Exit presentation',
        'presentation-prev': 'Previous',
        'presentation-next': 'Next',
        'presentation-hint': 'Use ← → to navigate, press P to toggle, ESC to exit.',
        'presentation-empty': 'No sections available for presentation right now.',
        'presentation-view-section': 'View full section',
        'presentation-progress-label': 'Slide',
        'presentation-progress-of': 'of',
        'presentation-about-summary': 'Snapshot of who I am, core stack and availability for new work.',
        'presentation-about-highlights': 'Fullstack developer with strong backend focus|Web, mobile & scalable APIs|Passionate about AI, blockchain, automation, SaaS',
        'presentation-metrics-summary': 'Real-time indicators that prove active contributions and delivery capacity.',
        'presentation-metrics-highlights': '16+ projects delivered|Live GitHub commits and pull requests|Top languages updated in real time',
        'presentation-timeline-summary': 'Timeline of professional evolution from first steps to current roles.',
        'presentation-timeline-highlights': '2024: Backend at Horizon (Remote)|2025: Full Stack at Zarpar (Remote)|Continuous growth since 2022',
        'presentation-skills-summary': 'Technology coverage across backend, frontend, mobile, DevOps and collaboration with visual charts.',
        'presentation-skills-highlights': 'Radar balance between disciplines|Time allocation per stack|Projects grouped by programming language|Mobile development included',
        'presentation-projects-summary': 'Curated portfolio with filters to explore featured solutions by stack.',
        'presentation-projects-highlights': 'Interactive filters per stack|Web, mobile & full-stack projects|Live demos and GitHub links|Advanced technologies showcased',
        'presentation-services-summary': 'Service catalog describing how I help teams launch faster.',
        'presentation-services-highlights': 'Backend, frontend, mobile & full stack|Web and mobile development|Estimated delivery timelines|Quote CTA keeps leads on site',
        'presentation-process-summary': 'Agile workflow from briefing to delivery with transparent checkpoints.',
        'presentation-process-highlights': 'Free 30-minute briefing|Weekly sprints with demos|Deployment and documentation guaranteed',
        'presentation-faq-summary': 'Answers to the most common scope, budget and communication questions.',
        'presentation-faq-highlights': 'Clear payment structure|Post-delivery support included|Agile change management with feedback loops',
        'presentation-contact-summary': 'Direct contact channels, resume downloads and inline project briefing form.',
        'presentation-contact-highlights': 'Responses under 24h|Resume in PDF and DOC|Formspree-powered project kickoff form',
        'easteregg-konami-message': 'Konami Mode unlocked! Creativity boosted 🚀',
        'easteregg-minigame-title': 'Catch the Rocket',
        'easteregg-minigame-instruction': 'Click the rocket five times before the timer runs out.',
        'easteregg-minigame-score': 'Score',
        'easteregg-minigame-target': 'Move to catch the rocket',
        'easteregg-minigame-start': 'Start mini-game',
        'easteregg-minigame-success': 'Great reflexes! Mission accomplished.',
        'easteregg-minigame-tryagain': 'Almost! Try again to complete the mission.',
        'easteregg-minigame-close': 'Close mini-game',
        
        // Metrics Section
        'metrics-title': 'By the Numbers',
        'metrics-projects': 'Projects Completed',
        'metrics-projects-desc': 'Full Stack applications',
        'metrics-commits': 'Total Commits',
        'metrics-commits-desc': 'Across public repositories',
        'metrics-prs': 'Pull Requests',
        'metrics-prs-desc': 'Opened or merged contributions',
        'metrics-stars': 'GitHub Stars',
        'metrics-stars-desc': 'Across public repositories',
        'metrics-contributions': 'Contributions this year',
        'metrics-contributions-desc': 'Commits, PRs & code reviews',
        'metrics-languages': 'Top Languages',
        'metrics-languages-desc': 'Based on active repositories',
        'metrics-footnote': 'Updated live from GitHub · Last sync: <span data-stat="last-sync">--</span>',
        
        // Timeline Section
        'timeline-title': 'Professional Experience',
        'timeline-subtitle': 'My career journey in software development',
        'timeline-date-1': 'Dec 2024 - Present',
        'timeline-title-1': 'Backend Developer',
        'timeline-company-1': 'Horizon | Remote',
        'timeline-desc-1': 'Developing RESTful APIs with Java Spring Boot and Node.js NestJS. Working with microservices architecture, PostgreSQL, MongoDB, and AWS cloud services.',
        'timeline-date-2': 'Feb 2025 - Present',
        'timeline-title-2': 'Full Stack Developer',
        'timeline-company-2': 'Zarpar | Remote',
        'timeline-desc-2': 'Developing full-stack solutions with modern technologies. Working on scalable web applications with React, Node.js, and cloud infrastructure.',
        'timeline-date-3': '2023 - 2024',
        'timeline-title-3': 'Web Development Student',
        'timeline-company-3': 'Trybe | Remote',
        'timeline-desc-3': 'Intensive full-stack development training with 1,500+ hours of hands-on practice. Built 50+ projects covering front-end, back-end, computer science, and soft skills.',
        'timeline-date-4': '2022',
        'timeline-title-4': 'First Steps in Programming',
        'timeline-company-4': 'Self-taught | Online Courses',
        'timeline-desc-4': 'Started learning programming with Python and JavaScript through online courses. Built personal projects and participated in coding challenges.',
        
        // Skills Section
        'skills-title': 'Skills',
        'skills-summary-title': 'Summary',
        'skills-summary-text': 'Full Stack Developer',
        'skills-chart-radar-title': 'Skill Coverage Radar',
        'skills-chart-radar-desc': 'Balance between backend, frontend, DevOps and collaboration.',
        'skills-chart-pie-title': 'Time Allocation by Stack',
        'skills-chart-pie-desc': 'Weekly focus dedicated to each stack.',
        'skills-chart-bar-title': 'Projects by Language',
        'skills-chart-bar-desc': 'Portfolio distribution per technology.',
        'skills-technical-title': 'Technical',
        
        // Projects Section
        'projects-title': 'Projects',
        'projects-filter-featured': 'Featured',
        'projects-filter-all': 'All',
        'projects-filter-fundamentos': 'Fundamentals',
        'projects-filter-frontend': 'Front-end',
        'projects-filter-backend': 'Back-end',
        'projects-filter-cs': 'Computer Science',
        
        // Services Section
        'services-title': 'Services & Contact',
        'services-subtitle': 'I offer professional web development for companies and personal projects',
        'service-backend-title': '⚙️ Backend Development',
        'service-backend-desc': 'Robust RESTful APIs with Java Spring Boot, Node.js, or Python',
        'service-backend-time': 'Timeline: 2-4 weeks',
        'service-frontend-title': '🎨 Frontend Development',
        'service-frontend-desc': 'Modern interfaces with React, TypeScript, and responsive design',
        'service-frontend-time': 'Timeline: 1-3 weeks',
        'service-fullstack-title': '🚀 Full Stack Projects',
        'service-fullstack-desc': 'Complete applications from scratch to deployment',
        'service-fullstack-time': 'Timeline: 4-8 weeks',
        'service-integration-title': '🔧 Integrations & APIs',
        'service-integration-desc': 'System integration, microservices, and automation',
        'service-integration-time': 'Timeline: 1-2 weeks',
        'service-cta': '📝 Request Detailed Quote',
        
        // Process/How I Work Section
        'process-title': 'How I Work',
        'process-subtitle': 'Agile methodology with continuous delivery and transparent communication',
        'process-step1-title': 'Briefing',
        'process-step1-desc': 'Free 30-minute meeting to understand your needs',
        'process-step2-title': 'Proposal',
        'process-step2-desc': 'Detailed proposal with scope, timeline, and investment (48h)',
        'process-step3-title': 'Development',
        'process-step3-desc': 'Agile sprints with weekly deliveries and feedback',
        'process-step4-title': 'Delivery',
        'process-step4-desc': 'Testing, deployment, and documentation',
        'process-cta-calendly': '📅 Schedule Free Meeting',
        'process-cta': '💬 Chat on WhatsApp',
        
        // FAQ Section
        'faq-title': 'Frequently Asked Questions',
        'faq-subtitle': 'Common questions about working together',
        'faq-q1': '❓ How long does a typical project take?',
        'faq-a1': 'It depends on the complexity. Small projects (landing pages, simple apps): 1-2 weeks. Medium projects (full web apps): 4-6 weeks. Large projects (complex systems): 8-12 weeks.',
        'faq-q2': '💰 How does payment work?',
        'faq-a2': 'Typically 50% upfront to start the project and 50% upon final delivery. For longer projects, we can split into milestones. Payment via bank transfer or PIX.',
        'faq-q3': '🛠️ Do you offer post-delivery support?',
        'faq-a3': 'Yes! All projects include 30 days of free support for bug fixes. Ongoing maintenance and new features can be arranged separately.',
        'faq-q4': '📞 How do we communicate during the project?',
        'faq-a4': 'WhatsApp for quick questions, email for detailed discussions, and weekly video calls to review progress. I\'m available during business hours (9am-6pm BRT) and respond within 24 hours.',
        'faq-q5': '🔄 Can I request changes during development?',
        'faq-a5': 'Absolutely! I work with agile sprints and weekly demos. Feedback is encouraged and adjustments are part of the process. Major scope changes may affect timeline and budget.',
        'faq-q6': '📋 What do I need to provide to get started?',
        'faq-a6': 'A clear description of what you need, any design references or mockups (if available), content (text, images), and login credentials for any existing systems. Don\'t worry if you don\'t have everything—I\'ll help you figure it out during the briefing!',
        'faq-more-questions': 'Still have questions?',
        'faq-contact': '💬 Ask me directly on WhatsApp',
        
        // Contact Section
        'contact-title': 'Contact',
        'contact-intro': 'I\'d love to hear from you! I\'m open to collaborations, especially on open source projects. Interesting job opportunity? Or want to chat? Contact me!',
        'contact-email': 'Feel free to write to me about anything: ',
        'contact-email-suffix': '. I\'ll respond soon.',
        'contact-resume': 'My resume is available here: ',
        'contact-resume-pdf': 'PDF',
        'contact-resume-doc': 'DOC',
        'contact-response-time-label': 'Average response time',
        'contact-response-time-value': 'Under 24 hours',
        'contact-availability-label': 'Availability',
        'contact-availability-value': 'Open for new freelance projects',
        'contact-form-title': 'Start a project',
        'contact-form-subtitle': 'Fill the form and I\'ll get back to you in less than 24 hours.',
        'contact-form-name': 'Name',
        'contact-form-name-placeholder': 'Your name',
        'contact-form-email': 'Email',
        'contact-form-email-placeholder': 'name@email.com',
        'contact-form-phone': 'Phone / WhatsApp',
        'contact-form-phone-placeholder': '+55 (48) 90000-0000',
        'contact-form-budget': 'Budget',
        'contact-form-budget-placeholder': 'Select an option',
        'contact-form-budget-option-1': 'Up to R$5k',
        'contact-form-budget-option-2': 'R$5k - R$10k',
        'contact-form-budget-option-3': 'R$10k - R$20k',
        'contact-form-budget-option-4': 'Above R$20k',
        'contact-form-budget-option-5': 'I\'m not sure yet',
        'contact-form-message': 'Project details',
        'contact-form-message-placeholder': 'Describe your project, timeline and goals',
        'contact-form-submit': 'Send Message',
        'contact-form-privacy': 'By submitting you agree to be contacted via email or WhatsApp for this request.',
        'contact-form-success': 'Thanks! Your message has been sent successfully.',
        'contact-form-error': 'Something went wrong. Please try again or email me directly.',
        
        // Footer
        'footer-text': 'Jadson de Sousa Mattos'
    },
    
    pt: {
        // Hero/Navigation
        'hero-title-short': 'Sou um desenvolvedor fullstack no Brasil...',
        'hero-title-expandable': ' com forte foco em backend construindo soluções end-to-end para web e mobile. Apaixonado por tecnologias emergentes: IA, blockchain, automação, SaaS e escalabilidade.',
        'hero-subtitle': 'Java • Spring Boot • Node.js • NestJS • Python • TypeScript • React • Next.js • Mobile',
        'nav-about': 'SOBRE',
        'nav-skills': 'SKILLS',
        'nav-projects': 'PROJETOS',
        'nav-services': 'SERVIÇOS',
        
        // About Section
        'about-title': 'Olá, sou Jadson 👋',
        'availability-badge': '🟢 Disponível para novos projetos',
        'about-intro': '<strong>Desenvolvedor Fullstack com forte foco em backend, criando APIs robustas e soluções escaláveis.</strong> Atualmente desenvolvendo sistemas em Java (Spring Boot) e Node.js (NestJS) na Horizon, construindo soluções end-to-end para web e mobile.',
        'about-what-i-do': '<strong>💼 O que eu faço:</strong><br>• Desenvolvimento de APIs RESTful com Java Spring Boot, Node.js e Python<br>• Aplicações Full Stack com React, TypeScript e bancos SQL/NoSQL<br>• Desenvolvimento mobile para iOS e Android<br>• Arquitetura de microserviços, automação e soluções SaaS escaláveis<br>• Testes (TDD) e boas práticas (SOLID, Clean Code)',
        'about-stack': '<strong>🚀 Stack Principal:</strong> Java • Spring Boot • Node.js • NestJS • TypeScript • Python • React • Next.js • Mobile • PostgreSQL • MongoDB • Docker',
        'about-experience': '<strong>📊 Experiência:</strong> Desenvolvedor Fullstack com expertise em backend, +16 projetos no GitHub, trabalho com metodologias ágeis. Apaixonado por tecnologias emergentes: IA, blockchain, automação, SaaS e escalabilidade.',
        'cta-whatsapp': '💬 Falar no WhatsApp',
        'cta-calendly': '📅 Agendar Reunião',
        'cta-quote': '📝 Solicitar Orçamento',
        'sticky-cta-text': '📅 Agendar Reunião Gratuita',
        'focus-toggle-on': 'Ativar modo foco',
        'focus-toggle-off': 'Sair do modo foco',
        'music-toggle-on': 'Tocar música ambiente',
        'music-toggle-off': 'Parar música ambiente',

        // Presentation Mode
        'presentation-open': 'Modo apresentação',
        'presentation-close': 'Sair da apresentação',
        'presentation-prev': 'Anterior',
        'presentation-next': 'Próximo',
        'presentation-hint': 'Use as setas ← → para navegar, pressione P para alternar e ESC para sair.',
        'presentation-empty': 'Nenhuma seção disponível para apresentação no momento.',
        'presentation-view-section': 'Ver seção completa',
        'presentation-progress-label': 'Slide',
        'presentation-progress-of': 'de',
        'presentation-about-summary': 'Resumo rápido sobre quem sou, stack principal e disponibilidade para novos projetos.',
        'presentation-about-highlights': 'Fullstack com forte foco em backend|Web, mobile e APIs escaláveis|Apaixonado por IA, blockchain, automação, SaaS',
        'presentation-metrics-summary': 'Indicadores em tempo real que evidenciam atividade e capacidade de entrega.',
        'presentation-metrics-highlights': '16+ projetos entregues|Commits e PRs atualizados ao vivo|Linguagens mais usadas sempre atualizadas',
        'presentation-timeline-summary': 'Linha do tempo da evolução profissional dos primeiros passos até hoje.',
        'presentation-timeline-highlights': '2024: Backend na Horizon (Remoto)|2025: Full Stack na Zarpar (Remoto)|Evolução contínua desde 2022',
        'presentation-skills-summary': 'Cobertura tecnológica em backend, frontend, mobile, DevOps e colaboração com gráficos visuais.',
        'presentation-skills-highlights': 'Radar equilibrado entre disciplinas|Tempo dedicado por stack|Projetos agrupados por linguagem|Desenvolvimento mobile incluído',
        'presentation-projects-summary': 'Portfólio curado com filtros para explorar soluções por stack.',
        'presentation-projects-highlights': 'Filtros interativos por stack|Projetos web, mobile e full-stack|Links de demo e GitHub|Tecnologias avançadas em destaque',
        'presentation-services-summary': 'Catálogo de serviços mostrando como ajudo equipes a lançar mais rápido.',
        'presentation-services-highlights': 'Backend, frontend, mobile e full stack|Desenvolvimento web e mobile|Prazos estimados de entrega|CTA para orçamento sem sair do site',
        'presentation-process-summary': 'Fluxo ágil do briefing à entrega com checkpoints transparentes.',
        'presentation-process-highlights': 'Briefing gratuito de 30 minutos|Sprints semanais com demos|Deploy e documentação garantidos',
        'presentation-faq-summary': 'Respostas às perguntas mais comuns sobre escopo, orçamento e comunicação.',
        'presentation-faq-highlights': 'Estrutura clara de pagamento|Suporte pós-entrega incluso|Gestão ágil de mudanças com feedback contínuo',
        'presentation-contact-summary': 'Canais diretos, currículo para download e formulário de briefing no próprio site.',
        'presentation-contact-highlights': 'Respostas em até 24h|Currículo em PDF e DOC|Formulário Formspree para iniciar o projeto',
        'easteregg-konami-message': 'Modo Konami ativado! Criatividade no máximo 🚀',
        'easteregg-minigame-title': 'Capture o Foguete',
        'easteregg-minigame-instruction': 'Clique no foguete cinco vezes antes do tempo acabar.',
        'easteregg-minigame-score': 'Pontuação',
        'easteregg-minigame-target': 'Mover para capturar foguete',
        'easteregg-minigame-start': 'Iniciar mini-game',
        'easteregg-minigame-success': 'Ótimos reflexos! Missão cumprida.',
        'easteregg-minigame-tryagain': 'Quase! Tente novamente para completar a missão.',
        'easteregg-minigame-close': 'Fechar mini-game',
        
        // Metrics Section
        'metrics-title': 'Em Números',
        'metrics-projects': 'Projetos Concluídos',
        'metrics-projects-desc': 'Aplicações Full Stack',
        'metrics-commits': 'Total de Commits',
        'metrics-commits-desc': 'Em repositórios públicos',
        'metrics-prs': 'Pull Requests',
        'metrics-prs-desc': 'Abertos ou mergeados',
        'metrics-stars': 'Stars no GitHub',
        'metrics-stars-desc': 'Em repositórios públicos',
        'metrics-contributions': 'Contribuições neste ano',
        'metrics-contributions-desc': 'Commits, PRs e code reviews',
        'metrics-languages': 'Principais Linguagens',
        'metrics-languages-desc': 'Com base em repositórios ativos',
        'metrics-footnote': 'Atualizado em tempo real do GitHub · Última sincronização: <span data-stat="last-sync">--</span>',
        
        // Timeline Section
        'timeline-title': 'Experiência Profissional',
        'timeline-subtitle': 'Minha trajetória no desenvolvimento de software',
        'timeline-date-1': 'Dez 2024 - Presente',
        'timeline-title-1': 'Desenvolvedor Backend',
        'timeline-company-1': 'Horizon | Remoto',
        'timeline-desc-1': 'Desenvolvendo APIs RESTful com Java Spring Boot e Node.js NestJS. Trabalhando com arquitetura de microserviços, PostgreSQL, MongoDB e serviços AWS.',
        'timeline-date-2': 'Fev 2025 - Presente',
        'timeline-title-2': 'Desenvolvedor Full Stack',
        'timeline-company-2': 'Zarpar | Remoto',
        'timeline-desc-2': 'Desenvolvendo soluções full-stack com tecnologias modernas. Trabalhando em aplicações web escaláveis com React, Node.js e infraestrutura em nuvem.',
        'timeline-date-3': '2023 - 2024',
        'timeline-title-3': 'Estudante de Desenvolvimento Web',
        'timeline-company-3': 'Trybe | Remoto',
        'timeline-desc-3': 'Treinamento intensivo de desenvolvimento full-stack com mais de 1.500 horas de prática. Construí mais de 50 projetos cobrindo front-end, back-end, ciência da computação e soft skills.',
        'timeline-date-4': '2022',
        'timeline-title-4': 'Primeiros Passos na Programação',
        'timeline-company-4': 'Autodidata | Cursos Online',
        'timeline-desc-4': 'Comecei a aprender programação com Python e JavaScript através de cursos online. Construí projetos pessoais e participei de desafios de código.',
        
        // Skills Section
        'skills-title': 'Habilidades',
        'skills-summary-title': 'Resumo',
        'skills-summary-text': 'Desenvolvedor Full Stack',
        'skills-chart-radar-title': 'Radar de Habilidades',
        'skills-chart-radar-desc': 'Equilíbrio entre backend, frontend, DevOps e colaboração.',
        'skills-chart-pie-title': 'Tempo por Stack',
        'skills-chart-pie-desc': 'Foco semanal dedicado a cada stack.',
        'skills-chart-bar-title': 'Projetos por Linguagem',
        'skills-chart-bar-desc': 'Distribuição do portfólio por tecnologia.',
        'skills-technical-title': 'Técnicas',
        
        // Projects Section
        'projects-title': 'Projetos',
        'projects-filter-featured': 'Destaques',
        'projects-filter-all': 'Todos',
        'projects-filter-fundamentos': 'Fundamentos',
        'projects-filter-frontend': 'Front-end',
        'projects-filter-backend': 'Back-end',
        'projects-filter-cs': 'Ciência da Computação',
        
        // Services Section
        'services-title': 'Serviços & Contato',
        'services-subtitle': 'Ofereço desenvolvimento web profissional para empresas e projetos pessoais',
        'service-backend-title': '⚙️ Desenvolvimento Backend',
        'service-backend-desc': 'APIs RESTful robustas com Java Spring Boot, Node.js ou Python',
        'service-backend-time': 'Prazo: 2-4 semanas',
        'service-frontend-title': '🎨 Desenvolvimento Frontend',
        'service-frontend-desc': 'Interfaces modernas com React, TypeScript e design responsivo',
        'service-frontend-time': 'Prazo: 1-3 semanas',
        'service-fullstack-title': '🚀 Projetos Full Stack',
        'service-fullstack-desc': 'Aplicações completas do zero ao deploy',
        'service-fullstack-time': 'Prazo: 4-8 semanas',
        'service-integration-title': '🔧 Integrações & APIs',
        'service-integration-desc': 'Integração entre sistemas, microserviços e automações',
        'service-integration-time': 'Prazo: 1-2 semanas',
        'service-cta': '📝 Solicitar Orçamento Detalhado',
        
        // Process/How I Work Section
        'process-title': 'Como Trabalho',
        'process-subtitle': 'Metodologia ágil com entregas contínuas e comunicação transparente',
        'process-step1-title': 'Briefing',
        'process-step1-desc': 'Reunião gratuita de 30 minutos para entender suas necessidades',
        'process-step2-title': 'Proposta',
        'process-step2-desc': 'Proposta detalhada com escopo, cronograma e investimento (48h)',
        'process-step3-title': 'Desenvolvimento',
        'process-step3-desc': 'Sprints ágeis com entregas semanais e feedback',
        'process-step4-title': 'Entrega',
        'process-step4-desc': 'Testes, deploy e documentação completa',
        'process-cta-calendly': '📅 Agendar Reunião Gratuita',
        'process-cta': '💬 Falar no WhatsApp',
        
        // FAQ Section
        'faq-title': 'Perguntas Frequentes',
        'faq-subtitle': 'Dúvidas comuns sobre trabalhar juntos',
        'faq-q1': '❓ Quanto tempo leva um projeto típico?',
        'faq-a1': 'Depende da complexidade. Projetos pequenos (landing pages, apps simples): 1-2 semanas. Projetos médios (aplicações web completas): 4-6 semanas. Projetos grandes (sistemas complexos): 8-12 semanas.',
        'faq-q2': '💰 Como funciona o pagamento?',
        'faq-a2': 'Geralmente 50% de entrada para iniciar o projeto e 50% na entrega final. Para projetos mais longos, podemos dividir em marcos. Pagamento via transferência bancária ou PIX.',
        'faq-q3': '🛠️ Você oferece suporte após a entrega?',
        'faq-a3': 'Sim! Todos os projetos incluem 30 dias de suporte gratuito para correção de bugs. Manutenção contínua e novas funcionalidades podem ser acordadas separadamente.',
        'faq-q4': '📞 Como nos comunicamos durante o projeto?',
        'faq-a4': 'WhatsApp para questões rápidas, e-mail para discussões detalhadas, e chamadas de vídeo semanais para revisar o progresso. Estou disponível em horário comercial (9h-18h BRT) e respondo em até 24 horas.',
        'faq-q5': '🔄 Posso solicitar mudanças durante o desenvolvimento?',
        'faq-a5': 'Absolutamente! Trabalho com sprints ágeis e demos semanais. Feedback é encorajado e ajustes fazem parte do processo. Mudanças maiores de escopo podem afetar cronograma e orçamento.',
        'faq-q6': '📋 O que preciso fornecer para começar?',
        'faq-a6': 'Uma descrição clara do que você precisa, referências de design ou mockups (se disponíveis), conteúdo (textos, imagens), e credenciais de acesso para sistemas existentes. Não se preocupe se não tiver tudo—vou te ajudar a organizar durante o briefing!',
        'faq-more-questions': 'Ainda tem dúvidas?',
        'faq-contact': '💬 Pergunte diretamente no WhatsApp',
        
        // Contact Section
        'contact-title': 'Contato',
        'contact-intro': 'Eu adoraria ouvir de você! Estou aberto a colaborações, especialmente em projetos de código aberto. Oportunidade de trabalho interessante? Ou quer conversar? Contate-me!',
        'contact-email': 'Fique à vontade para me escrever sobre qualquer coisa: ',
        'contact-email-suffix': '. Responderei em breve.',
        'contact-resume': 'Meu currículo está disponível aqui: ',
        'contact-resume-pdf': 'PDF',
        'contact-resume-doc': 'DOC',
        'contact-response-time-label': 'Tempo médio de resposta',
        'contact-response-time-value': 'Menos de 24 horas',
        'contact-availability-label': 'Disponibilidade',
        'contact-availability-value': 'Aberto para novos projetos freelance',
        'contact-form-title': 'Inicie um projeto',
        'contact-form-subtitle': 'Preencha o formulário e retornarei em menos de 24 horas.',
        'contact-form-name': 'Nome',
        'contact-form-name-placeholder': 'Seu nome',
        'contact-form-email': 'Email',
        'contact-form-email-placeholder': 'nome@email.com',
        'contact-form-phone': 'Telefone / WhatsApp',
        'contact-form-phone-placeholder': '+55 (48) 90000-0000',
        'contact-form-budget': 'Orçamento',
        'contact-form-budget-placeholder': 'Selecione uma opção',
        'contact-form-budget-option-1': 'Até R$5 mil',
        'contact-form-budget-option-2': 'R$5 mil - R$10 mil',
        'contact-form-budget-option-3': 'R$10 mil - R$20 mil',
        'contact-form-budget-option-4': 'Acima de R$20 mil',
        'contact-form-budget-option-5': 'Ainda não sei',
        'contact-form-message': 'Detalhes do projeto',
        'contact-form-message-placeholder': 'Descreva seu projeto, prazo e objetivos',
        'contact-form-submit': 'Enviar mensagem',
        'contact-form-privacy': 'Ao enviar você concorda em ser contactado por email ou WhatsApp sobre esta solicitação.',
        'contact-form-success': 'Obrigado! Sua mensagem foi enviada com sucesso.',
        'contact-form-error': 'Algo deu errado. Tente novamente ou me envie um email diretamente.',
        
        // Footer
        'footer-text': 'Jadson de Sousa Mattos'
    }
};

// Função para aplicar tradução
function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });
    const lastSyncEl = document.querySelector('[data-stat="last-sync"]');
    if (lastSyncEl && lastSyncEl.dataset.value) {
        lastSyncEl.textContent = lastSyncEl.dataset.value;
    }
    
    // Atualizar atributo lang do HTML
    document.documentElement.setAttribute('lang', lang);
    window.currentLanguage = lang;
    
    // Salvar preferência
    localStorage.setItem('language', lang);
    
    // Atualizar botão de idioma
    updateLanguageButton(lang);

    if (window.updateSkillCharts) {
        window.updateSkillCharts(lang);
    }

    if (window.updatePresentationTexts) {
        window.updatePresentationTexts(lang);
    }

    if (window.updateFocusModeLanguage) {
        window.updateFocusModeLanguage(lang);
    }

    if (window.updateMusicLanguage) {
        window.updateMusicLanguage(lang);
    }

    const languageField = document.getElementById('contact-language');
    if (languageField) {
        languageField.value = lang;
    }
}

// Atualizar texto do botão de idioma
function updateLanguageButton(lang) {
    const btn = document.querySelector('.language-toggle');
    if (btn) {
        btn.textContent = lang === 'en' ? '🇧🇷 PT' : '🇺🇸 EN';
        btn.setAttribute('data-lang', lang);
    }
}

// Inicializar idioma
document.addEventListener('DOMContentLoaded', function() {
    // Criar botão de idioma
    const langBtn = document.createElement('button');
    langBtn.className = 'language-toggle';
    langBtn.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 25px;
        cursor: pointer;
        font-weight: bold;
        font-size: 0.9rem;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        transition: all 0.3s;
    `;
    
    // Idioma padrão: INGLÊS
    const savedLang = localStorage.getItem('language') || 'en';
    const initialLang = savedLang;
    
    langBtn.textContent = initialLang === 'en' ? '🇧🇷 PT' : '🇺🇸 EN';
    langBtn.setAttribute('data-lang', initialLang);
    
    langBtn.addEventListener('click', function() {
        const current = this.getAttribute('data-lang');
        const newLang = current === 'en' ? 'pt' : 'en';
        setLanguage(newLang);
    });
    
    langBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    langBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(langBtn);
    
    // Aplicar idioma inicial
    setLanguage(initialLang);
});

// Mobile - ajustar posições dos botões flutuantes
if (window.innerWidth <= 600) {
    const style = document.createElement('style');
    style.textContent = `
        .language-toggle { 
            top: 15px !important; 
            right: 15px !important; 
            padding: 8px 12px !important;
            font-size: 0.8rem !important;
        }
        .theme-toggle { 
            bottom: 20px !important; 
            right: 15px !important; 
            width: 45px !important;
            height: 45px !important;
            font-size: 1.2rem !important;
        }
        .whatsapp-float {
            bottom: 20px !important;
            left: 15px !important;
            width: 50px !important;
            height: 50px !important;
            font-size: 1.5rem !important;
        }
    `;
    document.head.appendChild(style);
}
