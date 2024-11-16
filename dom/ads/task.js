const elements = Array.from(document.querySelectorAll('.rotator__case'));
elements[0].classList.add('rotator__case_active');

function nextElement() {
	for (const element of elements) {
		let elementIndex = elements.indexOf(element);
		if (element.classList.contains('rotator__case_active')) {
			element.classList.remove('rotator__case_active');
			if (elementIndex + 1 === elements.length) {
				elementIndex = 0;
			} else {
				elementIndex += 1;
			}
			elements[elementIndex].classList.add('rotator__case_active');
			const nextElementSearch = elements[elementIndex];
			const dataColor = nextElementSearch.getAttribute('data-color');
			nextElementSearch.style.color = dataColor;
			break;
		}
	}
}

setInterval(nextElement, 1000);