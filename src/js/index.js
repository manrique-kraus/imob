window.sr = ScrollReveal({ reset: true });

ScrollReveal().reveal('.container-busca, .banner-mobile, .titulo-imoveis, .container-imoveis, .botao-ver-todos', {
    origin: 'top',
    distance: '40px',
    duration: 2000,
    delay: 200,
    easing: 'cubic-bezier(0, 0, 0, 1)',
});

ScrollReveal().reveal('.top', {
    origin: 'top',
    distance: '40px',
    duration: 1500,
    delay: 550,
    easing: 'cubic-bezier(0, 0, 0, 1)',
});

ScrollReveal().reveal('.left', {
    origin: 'left',
    distance: '40px',
    duration: 1500,
    delay: 300,
    easing: 'cubic-bezier(0, 0, 0, 1)',
});

ScrollReveal().reveal('.right', {
    origin: 'right',
    distance: '40px',
    duration: 1500,
    delay: 500,
    easing: 'cubic-bezier(0, 0, 0, 1)',
});


function aparecerMenu() {
    const menuMobile = document.querySelector('.menu-mobile');
    let botaoAbrir = document.querySelector(".icone-menu-mobile");
    let botaoFechar = document.querySelector(".icone-fechar-mobile");

    menuMobile.classList.toggle("abrir")
    botaoAbrir.classList.toggle("esconder")
    botaoFechar.classList.toggle("mostrar")
}


const simular = document.getElementById('btn-financiamento');
const bancos = document.querySelector('.bancos')
simular.addEventListener('click', () => {
    bancos.classList.toggle("mostrar")
});


// pegar o select com o botao
// fazer percorrer o array
// selecionar as options que eu quero
// abrir em uma outra pagina os resultados

// const button = document.querySelector('button')

// button.addEventListener('click', () => {
//     const searchOptions = document.querySelectorAll('select')
//     const selectedOptions = getSelectedOptions(searchOptions)
//     console.log(selectedOptions)
// });


// function getSelectedOptions(searchOptions) {
//     const selectedOptions = []
//     searchOptions.forEach(select => selectedOptions.push(select.value))
//     return selectedOptions
// }


// carrosel

const imagens = document.querySelectorAll(".slide");
const setaVoltar = document.getElementById("arrow-back");
const setaAvancar = document.getElementById("arrow-go");

let imagemAtual = 0;

setaAvancar.addEventListener ("click", function() {
    if (imagemAtual === imagens.length -1) {
        return;
    }

    imagemAtual++;  

    esconderImagemAberta()
    mostrarImagem();
    mostrarOuEsconderSetas()
});

setaVoltar.addEventListener("click", function() {
    if (imagemAtual === 0) {
        return;
    }

    imagemAtual--;

    esconderImagemAberta()
    mostrarImagem();
    mostrarOuEsconderSetas()
});


function mostrarImagem() {
    imagens[imagemAtual].classList.add("mostrar");
}

function esconderImagemAberta() {
    const imagemAberta = document.querySelector(".mostrar");
    imagemAberta.classList.remove("mostrar");
}

function mostrarOuEsconderSetas() {
    const naoEhAPrimeiraImagem = imagemAtual !== 0;
    if (naoEhAPrimeiraImagem) {
        document.classList.remove("opacity")
    } else {
        document.classList.add("opacity")
    }

    const chegouNaUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length -1;
    if (chegouNaUltimaImagem) {
        document.classList.add("opacity")
    } else {
        document.classList.remove("opacity")
    }
}




