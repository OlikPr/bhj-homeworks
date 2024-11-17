const value = document.querySelector('.dropdown__value');
const drop = document.querySelector('dropdown__list');
const dropItem = document.querySelector('dropdown__item');


dropItems.forEach((item) => {
	item.addEventListener('click', (event) => {
		event.preventDefault();
		const selectedValue = item.textContent;
		value.textContent = selectedValue;
		drop.classList.remove('dropdown__list_active');
	})
})


value.addEventListener('click', () => {
	drop.classList.toggle('dropdown__list_active');
});