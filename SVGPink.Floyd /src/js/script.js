const openerCircle = document.getElementById('js-opener-circle');

const leftContainer = document.getElementById('js-left-container');
const rightContainer = document.getElementById('js-right-container');

let containerState = false;

openerCircle.addEventListener('click', () => {
	if (containerState === false) {
		leftContainer.setAttribute('class', 'slide-opened-left');
		rightContainer.setAttribute('class', 'slide-opened-right');
		openerCircle.setAttribute('class', 'opener-circle-opened');
		
		containerState = true;
	} else if (containerState === true) {
		leftContainer.setAttribute('class', 'slide-image-left');
		rightContainer.setAttribute('class', 'slide-image-right');
		openerCircle.setAttribute('class', 'opener-circle-closed');

		containerState = false;
	}
});
