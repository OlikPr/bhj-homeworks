const tab = document.querySelectorAll('.tab');
const content = [...document.querySelectorAll(".tab__content")];

tab.forEach((tabs) => {
	tabs.addEventListener('click', () => {
		const tabIndex = [...tab].indexOf(tabs);

		tab.forEach((tab) => {
			tab.classList.remove('tab_active');
		});

		content.forEach((content) => {
			content.classList.remove('tab__content_active');
		});

		tabs.classList.add('tab_active');
		content[tabIndex].classList.add('tab__content_active');
	});
});