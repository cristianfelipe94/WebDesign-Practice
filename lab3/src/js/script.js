(function IIFE() {
	const actionOpenBio = document.getElementById('js-open-bio');

	const actionOpenImg = document.getElementById('js-img-opener');

	const imageBlur = document.getElementById('js-img-blur');
	

	const containerOpenClose = document.getElementById('js-bio-container');

	const containerBioOpenClose = document.getElementById('js-bio-container');

	const containerImgOpenClose = document.getElementById('js-img-container');
	

	let togglerBio = false;
	let togglerImg = false;

	actionOpenBio.addEventListener('click', () => {
		if (togglerBio === false) {
			containerBioOpenClose.setAttribute('class', 'bio-content-showing');
			togglerBio = true;
		} else {
			containerBioOpenClose.setAttribute('class', 'bio-content-hidden');
			togglerBio = false;
		}
	});


	actionOpenImg.addEventListener('click', () => {
		if (togglerImg === true) {
			containerImgOpenClose.setAttribute('class', 'post-container-hidden');
			imageBlur.setAttribute('class', 'post-img-blur');
			togglerImg = false;
		} else {
			containerImgOpenClose.setAttribute('class', 'post-container-showing');
			imageBlur.setAttribute('class', 'post-img-Noblur');
			togglerImg = true;
		}
	});
}());
