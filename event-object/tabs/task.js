const tabs = document.querySelectorAll('.tab');
const content = [...document.querySelectorAll(".tab__content")];

tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		const tabIndex = [...tabs].indexOf(tab);

		tabs.forEach((tabs) => {
			tabs.classList.remove('tab_active');
		});

		content.forEach((content) => {
			content.classList.remove('tab__content_active');
		});

		tab.classList.add('tab_active');
		content[tabIndex].classList.add('tab__content_active');
	});
});