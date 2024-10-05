// Seleciona o botão e ícone de alternância de tema
const themeToggleButton = document.getElementById('toggle-theme');
const themeIcon = document.getElementById('theme-icon');

// Verifica o tema atual no armazenamento local
let currentTheme = localStorage.getItem('theme') || 'dark';

// Função para alternar temas
function toggleTheme() {
    // Alterna entre 'light' e 'dark'
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';

    // Atualiza o tema no body e outros elementos
    document.body.classList.toggle('light-theme', currentTheme === 'light');
    document.querySelector('.navbar').classList.toggle('light-theme', currentTheme === 'light');
    document.querySelector('.jumbotron').classList.toggle('light-theme', currentTheme === 'light');

    // Atualiza o ícone do botão com base no tema
    if (currentTheme === 'light') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        themeIcon.style.color = '#ffcc00'; // Cor do sol
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        themeIcon.style.color = '#ffffff'; // Cor da lua
    }

    // Armazena o tema escolhido no armazenamento local
    localStorage.setItem('theme', currentTheme);
}

// Aplica o tema armazenado ao carregar a página
if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
    document.querySelector('.navbar').classList.add('light-theme');
    document.querySelector('.jumbotron').classList.add('light-theme');
    themeIcon.classList.add('fa-sun');
    themeIcon.style.color = '#ffcc00'; // Cor do sol
} else {
    themeIcon.classList.add('fa-moon');
    themeIcon.style.color = '#ffffff'; // Cor da lua
}

// Adiciona o evento de clique ao botão para alternar o tema
themeToggleButton.addEventListener('click', toggleTheme);



document.addEventListener("DOMContentLoaded", function () {
    // Seleciona os elementos que devem ter a animação aplicada
    const elementsToAnimate = document.querySelectorAll('.glitch-title, .glitch-subtitle, .glitch-button');

    // Função que adiciona a animação quando o elemento entra na viewport
    const addAnimation = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe de animação quando o elemento entra na visualização
                entry.target.classList.add('glitch-visible');
                entry.target.classList.add('glitch-animate');
                // Para de observar o elemento, já que ele já está visível
                observer.unobserve(entry.target);
            }
        });
    };

    // Configura o Intersection Observer
    const observer = new IntersectionObserver(addAnimation, {
        root: null,
        threshold: 0.1 // Quando 10% do elemento estiver visível
    });

    // Observa todos os elementos
    elementsToAnimate.forEach(element => observer.observe(element));
});

lottie.loadAnimation({
    container: document.getElementById('lottie-animation'), // ID do contêiner
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'path/to/animation.json' // Caminho para seu arquivo de animação Lottie
});

