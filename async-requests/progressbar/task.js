const loader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');

function fetchData() {
	loader.classList.add('loader_active');

	fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
		.then(response => response.json())
		.then(data => {
			const valuteData = data.response.Valute;

			itemsContainer.innerHTML = '';


			for (const key in valuteData) {
				const valute = valuteData[key];

				const item = document.createElement('div');
				item.classList.add('item');

				const code = document.createElement('div');
				code.classList.add('item__code');
				code.textContent = valute.CharCode;

				const value = document.createElement('div');
				value.classList.add('item__value');
				value.textContent = valute.Value;

				const currency = document.createElement('div');
				currency.classList.add('item__currency');
				currency.textContent = 'руб.';

				item.appendChild(code);
				item.appendChild(value);
				item.appendChild(currency);

				itemsContainer.appendChild(item);
			}

			loader.classList.remove('loader_active');
		})
		.catch(error => {
			console.error('Ошибка:', error);
			loader.classList.remove('loader_active');
		});
}

fetchData();