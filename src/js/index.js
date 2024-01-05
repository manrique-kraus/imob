function aparecerMenu() {
    const menuMobile = document.querySelector('.menu-mobile');
    let botaoAbrir = document.querySelector(".icone-menu-mobile");
    let botaoFechar = document.querySelector(".icone-fechar-mobile");

    menuMobile.classList.toggle("abrir")
    botaoAbrir.classList.toggle("esconder")
    botaoFechar.classList.toggle("mostrar")
}
 // colocar transition no menu q aparece