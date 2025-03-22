let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators'); // Adicionado ponto para classe
let dots = indicator.querySelectorAll('ul li'); // Corrigido para querySelectorAll
let list = container.querySelector('.list');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

function setSlider() {
    // Remover a classe 'active' de todos os itens e pontos
    items.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Adicionar a classe 'active' ao item e ponto ativos
    items[active].classList.add('active');
    dots[active].classList.add('active');

    // Atualizar o número do indicador
    indicator.querySelector('.number').innerHTML = '0' + (active + 1);
}

nextButton.onclick = () => {
    active = active + 1 > lastPosition ? 0 : active + 1;
    setSlider();
};

prevButton.onclick = () => {
    active = active - 1 < 0 ? lastPosition : active - 1;
    setSlider();
};

// Inicializar o slider com o primeiro item ativo
setSlider();
