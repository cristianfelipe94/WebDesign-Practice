(function IIFE() {
	const actionOpenBio = document.getElementById('js-open-bio');
	const containerOpenClose = document.getElementById('js-bio-container');

	let togglerBio = false;

	actionOpenBio.addEventListener('click', () => {
		if (togglerBio === false) {
			containerOpenClose.setAttribute('class', 'bio-content-showing');
			togglerBio = true;
		} else {
			containerOpenClose.setAttribute('class', 'bio-content-hidden');
			togglerBio = false;
		}
	});

}());
