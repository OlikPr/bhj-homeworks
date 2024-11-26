const products = document.querySelectorAll('.product');
// список продуктов 
const decMinus = document.querySelectorAll('.product__quantity-control_dec');
// кнопки минус
const decPlus = document.querySelectorAll('.product__quantity-control_inc');
// кнопки плюс
const numberProduct = document.querySelectorAll('.product__quantity-value');
// число продуктов при нажатии на +
const buttonProduct = document.querySelectorAll('.product__add');
// кнопка положить в корзину 
const cartProduct = [];
// массив хранящий список продуктов, которые положили в корзину 


// кнопка минуса 
decMinus.forEach((minus, index) => {
	// проходимся массивом по кнопкам 
	minus.addEventListener('click', () => {
		// навешиваем обработчик 
		let number = parseInt(numberProduct[index].textContent); // парсим число на странице 
		// присваиваем в переменную данное число на странице 
		if (number === 1) {
			numberProduct[index].textContent = 1;
			// проверяем, если данное число на странице равно единице, то оно и будет оставаться единицей  
		} else {
			number -= 1;
			// условие, чтобы число на странице не стало отрицательным 
			numberProduct[index].textContent = number;
		}
	});
});

decPlus.forEach((plus, index) => {
	// проходимся массивом по кнопкам 
	plus.addEventListener('click', () => {
		// навешиваем обработчик 
		let number = parseInt(numberProduct[index].textContent);
		// присваиваем в переменную данное число на странице 
		number += 1;
		// с каждым кликом число увеличивается на 1 
		numberProduct[index].textContent = number;
		// выводим число на экран 
	});
});

buttonProduct.forEach((button, index) => {
	// проходимся по кнопкам "положить в корзину" 
	button.addEventListener('click', () => {
		// навешиваем обработчик 
		const product = products[index];
		// выбираем продукт из списка продуктов
		const productId = product.dataset.id;
		// ID продукта из списка продуктов 
		const productImage = product.querySelector('.product__image').getAttribute('src');
		// картинка продукта из списка продуктов 
		const quantityNumber = parseInt(numberProduct[index].textContent);
		// число продуктов на странице 

		const idCartProduct = cartProduct.findIndex(item => item.id === productId);
		// поиск продукта в массиве корзины по ID, если найден, то возвращает его индекс

		if (idCartProduct !== -1) {
			cartProduct[idCartProduct].quantity += quantityNumber;
			// если индекс не равен -1, значит продукт уже есть в корзине, поэтому увеличиваем его количество
		} else {
			const objProduct = {
				id: productId,
				image: productImage,
				quantity: quantityNumber,
			};
			// если продукта нет в корзине, то создаем новый объект с продуктом (ID, картинка, количество) и добавляем в массив корзины
			cartProduct.push(objProduct);
		}
		console.log(cartProduct);
		renderCartItems();
		// функция отображения продуктов на экране корзины 
		animateProductToCart(productImage);
	});
});

function renderCartItems() {
	const cartContainer = document.querySelector('.cart__products');
	// находим контейнер корзины
	cartContainer.innerHTML = '';
	// очищаем его 
	cartProduct.forEach(item => {
		// проходимся по элементам массива корзины
		const cartProductElement = document.createElement('div');
		// создаем элемент для продукта в корзине
		cartProductElement.classList.add('cart__product');
		// добавляем класс для элемента корзины
		cartProductElement.dataset.id = item.id;
		// устанавливаем ID продукта для элемента корзины

		const productImage = document.createElement('img');
		// создаем элемент изображения продукта
		productImage.classList.add('cart__product-image');
		// добавляем класс для изображения
		productImage.src = item.image;
		// устанавливаем новое изображение продукта
		cartProductElement.appendChild(productImage);
		// добавляем изображение внутрь элемента корзины

		const productCount = document.createElement('div');
		productCount.classList.add('cart__product-count');
		productCount.textContent = item.quantity;
		cartProductElement.appendChild(productCount);
		cartContainer.appendChild(cartProductElement);
		// все то же самое, только с количеством продукта 
	});
}