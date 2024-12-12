const tabs = document.querySelectorAll('.tab');
const content = [...document.querySelectorAll(".tab__content")];

console.log(content)

tabs.forEach((tab, index) => {
	tab.addEventListener('click', () => {
		tabs.forEach((tabs) => {
			tabs.classList.remove('tab_active');
		});

		content.forEach((content) => {
			content.classList.remove('tab__content_active');
		});

		tab.classList.add('tab_active');
		content[index].classList.add('tab__content_active');
	});
});