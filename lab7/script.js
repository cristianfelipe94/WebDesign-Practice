const jsMediaQuery = window.matchMedia('(min-width: 500px)');

const siteHeader = document.getElementById('js-site-header');
const siteLogo = document.getElementById('js-logo-wrapper'); 
const siteContent = document.getElementById('js-header-content');
const headerLinks = document.getElementById('js-header-links');
const searchBar = document.getElementById('search');
const searchHeader = document.getElementById('js-search-header');
const mainMenu = document.getElementById('main-menu');

function mediaQueryChecker(queryParam) {
    if(queryParam.matches) {
        siteHeader.classList.remove('site-header-mobile');
        siteLogo.classList.remove('site-header__logo-mobile');
        siteContent.classList.remove('site-header__content-mobile');
        headerLinks.classList.remove('site-header__top-links-mobile');
        searchBar.classList.remove('search-bar-mobile');
        searchHeader.classList.remove('site-header__search-mobile');
        mainMenu.classList.remove('site-header_main-nav-items-mobile');
        console.log('More than 500px');
    } else {
        siteHeader.classList.add('site-header-mobile');
        siteLogo.classList.add('site-header__logo-mobile');
        siteContent.classList.add('site-header__content-mobile');
        headerLinks.classList.add('site-header__top-links-mobile');
        searchBar.classList.add('search-bar-mobile');
        searchHeader.classList.add('site-header__search-mobile');
        mainMenu.classList.add('site-header_main-nav-items-mobile');
        console.log('Less than 500px');
    };
};

jsMediaQuery.addListener(mediaQueryChecker);

mediaQueryChecker(jsMediaQuery);