
document.documentElement.classList.add('withJS');

const navElement = document.getElementById('js-menu-state');
const navAction = document.getElementById('js-toggle-btn');
const bodyHTML = document.getElementsByTagName('body');

let togglerState = false;

navAction.addEventListener('click', () => {
    if (!togglerState) {
        navElement.setAttribute('class', 'nav-menu__items-show');
        bodyHTML[0].setAttribute('class', 'body-hidden');
        togglerState = true;
    } else if (togglerState) {
        navElement.setAttribute('class', 'nav-menu__items-hidden');
        bodyHTML[0].setAttribute('class', 'body-show');
        togglerState = false;
    }
});