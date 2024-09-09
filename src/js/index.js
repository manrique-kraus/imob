window.sr = ScrollReveal({ reset: true });

ScrollReveal().reveal('.container-busca, .banner-mobile, .container-slider', {
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
  if (currentSlide === slider.length - 1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  mostrarSlider()
}

function voltarSlider() {
  esconderSlider()
  if (currentSlide === 0) {
    currentSlide = slider.length - 1
  } else {
    currentSlide--
  }
  mostrarSlider()
}

document.addEventListener('DOMContentLoaded', function () {
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


//filtro

function filtrarImoveis() {
    let quartos = document.getElementById("quartos").value;
    let modalidade = document.getElementById("modalidade").value;
    let categoria = document.getElementById("categoria").value;
    let localidade = document.getElementById("localidade").value;
    let valor = document.getElementById("valor").value;

    let imoveis = document.querySelectorAll(".caixa-imovel");
    let nenhumImovelEncontrado = true; 

    function formatarValor(valor) {
        // Remove R$ e substitui vírgula por ponto para converter para float
        return parseFloat(valor.replace("R$ ", "").replace(".", "").replace(",", "."));
    }

    imoveis.forEach(function (imovel) {
        const temQuartos = parseInt(imovel.querySelector(".quartos").textContent);
        const modalidadeImovel = imovel.querySelector(".modalidade").textContent.toLowerCase();
        const categoriaImovel = imovel.querySelector(".categoria").textContent.toLowerCase();
        const bairroImovel = imovel.querySelector(".localidade").textContent.trim().toLowerCase();
        const valorImovel = formatarValor(imovel.querySelector(".valor").textContent);

        console.log("valor selecionado:", valor);
        console.log("valor do imóvel:", valorImovel);

        if ((quartos === "0" || quartos == temQuartos) &&
            (modalidade === "todos" || modalidade === modalidadeImovel) &&
            (categoria === "todas" || categoria === categoriaImovel) &&
            (localidade === "todos" || localidade === bairroImovel) &&
            (valor === "todos" ||
                (valor === "200" && valorImovel <= 200000) ||
                (valor === "500" && valorImovel <= 500000) ||
                (valor === "800" && valorImovel <= 800000) ||
                (valor === "900" && valorImovel <= 900000))) {
            imovel.style.display = "block";
            nenhumImovelEncontrado = false;
        } else {
            imovel.style.display = "none";
        }
    });

    const mensagemResultado = document.getElementById("mensagem-resultado");
    const tituloImoveis = document.querySelector(".titulo-imoveis");
    if (nenhumImovelEncontrado) {
        mensagemResultado.textContent = "Nenhum imóvel encontrado.";
        mensagemResultado.style.fontSize = "20px";
        mensagemResultado.style.width = "100%"
        mensagemResultado.style.textAlign = "center";
        tituloImoveis.style.display = "none";
    } else {
        mensagemResultado.textContent = "";
        tituloImoveis.style.display = "block";
    }
}

// //filtro index

function filtrarImoveisPrincipal() {
  let modalidade = document.getElementById("modalidade").value;
  let categoria = document.getElementById("categoria").value;
  let localidade = document.getElementById("localidade").value;

  let imoveis = document.querySelectorAll(".filtro-imoveis");
  let nenhumImovelEncontrado = true;

  imoveis.forEach(function (imovel) {
      const modalidadeImovel = imovel.querySelector(".modalidade").textContent.toLowerCase();
      const categoriaImovel = imovel.querySelector(".categoria").textContent.toLowerCase();
      const bairroImovel = imovel.querySelector(".localidade").textContent.trim().toLowerCase();

      if ((modalidade === "todos" || modalidade === modalidadeImovel) &&
          (categoria === "todas" || categoria === categoriaImovel) &&
          (localidade === "todos" || localidade === bairroImovel)
      ) {
          imovel.style.display = "block";
          nenhumImovelEncontrado = false;
      } else {
          imovel.style.display = "none";
      }
  });

  const mensagemResultado = document.getElementById("mensagem-resultado");
  const imoveisBusca = document.querySelector(".imoveis-busca");

  if (nenhumImovelEncontrado) {
      mensagemResultado.textContent = "Nenhum imóvel encontrado.";
      mensagemResultado.style.fontSize = "20px";
      mensagemResultado.style.width = "100%"
      mensagemResultado.style.textAlign = "center";
      mensagemResultado.style.marginTop = "50px"
  } else {
      mensagemResultado.textContent = "";
      imoveisBusca.style.display = "block";
  }
}

// //scroll
// function direcao(e) {
//   let direcao = document.getElementById("container-imoveis");

//   if (e == 1) {
//     direcao.scrollLeft = direcao.scrollLeft - 200;
//   }else if (e == 2){
//     direcao.scrollLeft = direcao.scrollLeft + 200;
//   }
// }

function direcao(botao, tipo) {
  let container = document.querySelector(`.container-imoveis.${tipo}`);
  
  if (botao.classList.contains('botao-esquerda')) {
    container.scrollLeft -= 200;
  } else if (botao.classList.contains('botao-direita')) {
    container.scrollLeft += 200;
  }
}



   
// Função para avançar as imagens
function avancarImagem() {
  const imagens = document.querySelectorAll('.container-imagens .slider');
  const imagemAtual = document.querySelector('.container-imagens .on');
  const proximaImagem = imagemAtual.nextElementSibling || imagens[0];

  imagens.forEach(imagem => imagem.classList.remove('on'));
  proximaImagem.classList.add('on');
}
setInterval(avancarImagem, 4000);