window.sr = ScrollReveal({ reset: true });

ScrollReveal().reveal('.container-busca, .banner-mobile, .titulo-imoveis, .container-imoveis, .botao-ver-todos, .container-slider', {
    origin: 'top',
    distance: '40px',
    duration: 2000,
    delay: 200,
    easing: 'cubic-bezier(0, 0, 0, 1)',
});


ScrollReveal().reveal('.container', {
    origin: 'left',
    distance: '40px',
    duration: 4000,
    delay: 400,
    easing: 'cubic-bezier(0, 0, 0, 1)',
});


//menu

function aparecerMenu() {
    const menuMobile = document.querySelector('.menu-mobile');
    let botaoAbrir = document.querySelector('.icone-menu-mobile');
    let botaoFechar = document.querySelector('.icone-fechar-mobile');

    menuMobile.classList.toggle('abrir');
    botaoAbrir.classList.toggle('esconder');
    botaoFechar.classList.toggle('mostrar');
}

//carrossel

const slider = document.querySelectorAll('.slider');
const btnVoltar = document.getElementById('botao-voltar');
const btnAvancar = document.getElementById('botao-avancar');

let currentSlide = 0;

function esconderSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function mostrarSlider() {
  slider[currentSlide].classList.add('on')
}

function avancarSlider() {
  esconderSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  mostrarSlider()
}

function voltarSlider() {
  esconderSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  mostrarSlider()
}

document.addEventListener('DOMContentLoaded', function() {
  const btnVoltar = document.getElementById('botao-voltar');
  btnVoltar.addEventListener('click', voltarSlider);

  const btnAvancar = document.getElementById('botao-avancar');
  btnAvancar.addEventListener('click', avancarSlider);
});

//simulacao

let simular = document.querySelector('.botao-financiamento');
const bancos = document.querySelector('.bancos')
simular.addEventListener('click', () => {
  bancos.classList.toggle("mostrar");
});