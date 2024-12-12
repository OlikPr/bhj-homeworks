
const dropdown = document.querySelector('.dropdown')
const list = document.querySelector('.dropdown__list');
const listItems = document.querySelectorAll('.dropdown__item');
const value = document.querySelector('.dropdown__value');

dropdown.addEventListener('click', () => {
	list.classList.toggle('dropdown__list_active');
})

for (const item of listItems) {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		e.stopPropagation();
		const selectedValue = item.textContent;
		value.textContent = selectedValue;
		list.classList.remove('dropdown__list_active');
	})
}