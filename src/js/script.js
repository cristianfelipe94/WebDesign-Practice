(function IIFE() {
	const actionOpenBio = document.querySelectorAll('.js-open-bio');
	const containerOpenClose = document.querySelectorAll('.js-bio-container');

	let togglerBio = false;

	actionOpenBio.forEach((element) => {
		element.addEventListener('click', () => {
			if (togglerBio === false) {
				containerOpenClose.setAttribute('class', 'bio-content-showing');
				togglerBio = true;
			} else {
				containerOpenClose.setAttribute('class', 'bio-content-hidden');
				togglerBio = false;
			}
		});
	});

}());
