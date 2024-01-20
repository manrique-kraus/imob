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
})


//pegar o select com o botao
//fazer percorrer o array
//selecionar as options que eu quero
//abrir em uma outra pagina os resultados

let botaoPesquisar = document.getElementById('buscarImovel');
const selects = document.querySelectorAll('#selector');
const valorSelect = selects.values;
console.log(valorSelect)


botaoPesquisar.addEventListener('click', () => {

})