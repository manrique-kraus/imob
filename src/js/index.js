function aparecerMenu() {
    const menuMobile = document.querySelector('.menu-mobile');
    let possuiClasseAbrir = menuMobile.classList.contains("abrir");

    if (possuiClasseAbrir) {
        menuMobile.classList.remove("abrir")
    } else {
        menuMobile.classList.add("abrir")
    }
}

//ver se a aba que abre do menu nao vai atrapalhar restante pagina
//colocar icone de X para fechar
//colocar transiçoes e hovers