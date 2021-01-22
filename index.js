const MENU = document.querySelector('.menu1');
const MENU1 = document.querySelector('.menu');
const MENU3 = document.querySelector('.menu3');
const BODY = document.querySelector('.body1');

MENU.addEventListener('click', () => {

    MENU1.classList.remove('menu');

});

MENU3.addEventListener('click', () => {
    MENU1.classList.add('menu');
});