const menuIcon = document.querySelectorAll('[data-animar]');
const hamburguer = document.querySelector('div#btn');
const animation = 'animar';
const header = document.querySelector('header');
const nav = document.querySelector('nav');

function MenuMobile () {
    menuIcon.forEach (function (element) {
        if (!element.classList.contains(animation)) {
            element.classList.add(animation);
            header.classList.add(animation);
            nav.style.display = 'flex';
            document.querySelector('.logo').style.display = 'none';
        } else {
            element.classList.remove(animation);
            header.classList.remove(animation);
            nav.style.display = 'none';
            document.querySelector('.logo').style.display = 'flex';
        }
    });
}

function Warn() {
    alert('Meramente ilustrativo.');
}

hamburguer.onclick = () => MenuMobile();
