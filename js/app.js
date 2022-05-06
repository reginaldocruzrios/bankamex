


document.addEventListener('DOMContentLoaded' , function() {
    barraHamburguesa();
});

function barraHamburguesa() {

    const menuH = document.querySelector('#barra');

    menuH.addEventListener('click' , function() {
        const menuPrincipal = document.querySelector('.header-nav');
        const menuOpciones = document.querySelector('.header__nav-opciones');

        menuPrincipal.classList.toggle('mostrar');
        menuOpciones.classList.toggle('mostrar');
    })
}

