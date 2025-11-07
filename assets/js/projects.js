// Vanilla JS - Substitui jQuery mantendo comportamento original
document.addEventListener('DOMContentLoaded', function() {
    render_projects('featured');
});

let render_projects = (slug) => {
    let projects_area = document.querySelector('.projects-wrapper');
    
    if (!projects_area) return;

    // Remover classe hover de todos os botões
    document.querySelectorAll('.white-button').forEach(btn => {
        btn.classList.remove('white-button-hover');
    });
    
    // Adicionar classe hover no botão clicado
    const activeButton = document.getElementById(slug);
    if (activeButton) {
        activeButton.classList.add('white-button-hover');
    }

    let projects_obj = [
        {
            image: 'assets/images/lessons.png',
            link: 'https://github.com/JadsonMattos/LessonsLearned',
            title: 'Lessons Learned',
            demo: 'https://jadsonmattos.github.io/LessonsLearned',
            technologies: ['HTML5', 'CSS3', 'JavaScript'],
            description: "✨ Responsive web page with semantic HTML5 and modern CSS3. Demonstrates clean code structure, CSS positioning techniques, and responsive design principles.",
            categories: ['featured', 'fundamentos']
        },
        {
            image: 'assets/images/calendar.png',
            link: 'https://github.com/JadsonMattos/Tryber-Calendar',
            title: 'Interactive Calendar',
            demo: 'https://jadsonmattos.github.io/Tryber-Calendar',
            technologies: ['JavaScript', 'DOM', 'Events'],
            description: "📅 Dynamic calendar application with task management. Features: Event handling, DOM manipulation, data persistence with LocalStorage, and interactive UI components.",
            categories: ['featured', 'fundamentos']
        },
        {
            image: 'assets/images/paleta.png',
            link: 'https://github.com/JadsonMattos/Pixel-Arts',
            title: 'Pixel Art Editor',
            demo: 'https://jadsonmattos.github.io/Pixel-Arts',
            technologies: ['JavaScript', 'Canvas', 'CSS Grid'],
            description: "🎨 Interactive pixel art editor with color palette management. Implements dynamic grid generation, event listeners, and real-time canvas rendering.",
            categories: ['featured', 'fundamentos']
        },
        {
            image: 'assets/images/todo.png',
            link: 'https://github.com/JadsonMattos/Todo-List',
            title: 'Task Manager',
            demo: 'https://jadsonmattos.github.io/Todo-List',
            technologies: ['JavaScript', 'LocalStorage', 'CRUD'],
            description: "✅ Full-featured task management app. Implements CRUD operations, data persistence, filtering, and state management with vanilla JavaScript.",
            categories: ['featured', 'fundamentos']
        },
        {
            image: 'assets/images/meme.png',
            link: 'https://github.com/JadsonMattos/Meme-Generator',
            title: 'Meme Generator',
            demo: 'https://jadsonmattos.github.io/Meme-Generator',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            description: "Aplicação usando HTML, CSS e JAVASCRIPT onde seja possível fazer upload de imagens para criar memes.",
            categories: ['fundamentos']
        },
        {
            image: 'assets/images/color-guess.png',
            link: 'https://github.com/JadsonMattos/Color-Guess',
            title: 'Color Guess',
            demo: 'https://jadsonmattos.github.io/Color-Guess',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            description: "Nesta aplicação deverá ser possível jogar um jogo de adivinhação de cores.",
            categories: ['fundamentos']
        },
        {
            image: 'assets/images/carta.png',
            link: 'https://github.com/JadsonMattos/Carta-Misteriosa',
            title: 'Carta Misteriosa',
            demo: 'https://jadsonmattos.github.io/Carta-Misteriosa',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            description: "Dado um valor digitado em um campo de texto, as palavras terão a aparência de uma carta onde cada palavra possui uma estilização própria.",
            categories: ['fundamentos']
        },
        {
            image: 'assets/images/travel.png',
            link: 'https://github.com/JadsonMattos/Trybe-Travel',
            title: 'Form Travel',
            demo: 'https://jadsonmattos.github.io/Trybe-Travel',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            description: "Formulário para concorrer a uma viagem.",
            categories: ['fundamentos']
        },
        {
            image: 'assets/images/techGalery.png',
            link: 'https://github.com/JadsonMattos/Tech-Gallery',
            title: 'Tech Gallery',
            demo: 'https://jadsonmattos.github.io/Tech-Galery',
            technologies: ['HTML', 'CSS'],
            description: "Página web que é uma galeria de fotos com algumas linguagens e frameworks front-end.",
            categories: ['fundamentos']
        },
        {
            image: 'assets/images/tryflix.png',
            link: 'https://github.com/JadsonMattos/Tryflix',
            title: 'Tryflix',
            demo: 'https://jadsonmattos.github.io/Tryflix',
            technologies: ['HTML', 'CSS'],
            description: "Desenvolvendo catálogo com flexbox, esboço apenas.",
            categories: ['fundamentos']
        },
        {
            image: 'assets/images/trybewarts.png',
            link: 'https://github.com/JadsonMattos/Trybewarts',
            title: 'Trybewarts',
            demo: 'https://jadsonmattos.github.io/Trybewarts',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            description: "Formulário dinâmico.",
            categories: ['fundamentos']
        },
        {
            image: 'assets/images/generate.png',
            link: 'https://github.com/JadsonMattos/generate-password',
            title: 'Generate Pass',
            demo: 'https://generate-pass.surge.sh',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            description: "Para uma sequência de 12 caracteres e com 30 tentativas aleatórias por segundos, o tempo para adivinhar a senha passa dos 10 anos.",
            categories: ['frontend']
        },
        {
            image: 'assets/images/validate.png',
            link: 'https://github.com/JadsonMattos/camps-validation',
            title: 'Camps Validation',
            demo: 'https://camps-validation.surge.sh',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            description: "Validador de campos.",
            categories: ['frontend']
        },
        {
            image: 'assets/images/microblogs.png',
            link: 'https://github.com/JadsonMattos/microblogs',
            title: 'Microblogs',
            demo: 'https://microblogs-app.surge.sh',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            description: "Página para leitura de posts de várias pessoas.",
            categories: ['frontend']
        },
        {
            image: 'assets/images/heroes.png',
            link: 'https://github.com/JadsonMattos/superheroes',
            title: 'Super Heroes',
            demo: 'https://heroes-super.surge.sh',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            description: "Apis heroes and alerts.",
            categories: ['frontend']
        },
        {
            image: 'assets/images/pet.png',
            link: 'https://github.com/JadsonMattos/select-pet',
            title: 'Random Pets',
            demo: 'https://dogsandcats.surge.sh',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            description: "Aplicação que exibe fotos aleatórias de cães e gatos.",
            categories: ['frontend']
        },
        {
            image: 'assets/images/cambio.png',
            link: 'https://github.com/JadsonMattos/casa-de-cambio',
            title: 'Casa de Câmbio',
            demo: 'https://exchange-home.surge.sh',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            description: "O projeto da casa de câmbio é uma aplicação que busca a conversão da taxa de uma moeda para diversas outras.",
            categories: ['frontend']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    
    // Vanilla JS substituindo jQuery hide().html().fadeIn()
    projects_area.style.display = 'none';
    projects_area.innerHTML = projects.join('');
    
    // Fade in effect
    projects_area.style.display = '';
    projects_area.style.opacity = '0';
    setTimeout(function() {
        projects_area.style.transition = 'opacity 0.4s';
        projects_area.style.opacity = '1';
    }, 10);
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}"><b>DEMO</b></a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}
