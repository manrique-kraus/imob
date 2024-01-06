window.sr = ScrollReveal({ reset: true });

ScrollReveal().reveal('.container-busca', {
    origin: 'top',
    distance: '40px',
    duration: 2000,
    delay: 200,
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
 // colocar transition no menu q aparece