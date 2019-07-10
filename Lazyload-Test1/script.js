
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

// Create config object: rootMargin and threshold.
// RootMargin: Creates a margin around Viewport follows the same CSS logic.
// RootMargin: 'top right bottom left'
// Threshold: Defines when the element it's supposed to react to the Observer.
const config = {
    rootMargin: '50px 0px 50px 0px',
    threshold: 0
};

// Loads every entry image and checks if entry has attribute.
function preloadImage(img) {
    const srcAttribute = img.getAttribute('data-src');
    if (!srcAttribute) {
        return;
    }
    img.srcAttribute = srcAttribute;
}

// Register a Callback and a Config Object with an instance of IntersectionObserver.
const observer = new IntersectionObserver(function(entries, self) {

    // Iterate over each entry.
    // Entry is an Array of DOM elements.
    entries.forEach(entry => {

        // Process just the images that are intersecting.
        // IsIntersecting is a property from the Constructor IntersectionObject.
        if(entry.isIntersecting) {
            // Custom function that checks Attribute from entries.
            // From data-src to src
            preloadImage(entry.target);

            // The image is now in place, stop watching
            // Unobserve: Checks if image is out of viewport.
            self.unobserve(entry.target);
        }
    });
}, config);

// Iterate over all of your images and add them to this iterationObserver instance:
const imgs = document.querySelectorAll('[data-src]');
imgs.forEach(img => {
    observer.observe(img);
});
