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

btnVoltar.addEventListener('click', voltarSlider)
btnAvancar.addEventListener('click', avancarSlider)