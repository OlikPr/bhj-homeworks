const fontSizeSmall = document.querySelectorAll('.font-size');
const bookBig = document.getElementById('book');

fontSizeSmall.forEach((size) => {
	size.addEventListener('click', (event) => {
		event.preventDefault();
		fontSizeSmall.forEach((el) => {
			el.classList.remove('font-size_active');
		});

		size.classList.add('font-size_active');
		if (size.classList.contains('font-size_small')) {
			bookBig.classList.add('book_fs-small');
		} else {
			bookBig.classList.remove('book_fs-small');
		}

		if (size.classList.contains('font-size_big')) {
			bookBig.classList.add('book_fs-big');
		} else {
			bookBig.classList.remove('book_fs-big');
		}
	});
});

const fontSizeBig = document.querySelectorAll('.font-size');
const bookSmall = document.getElementById('book');

fontSizeBig.forEach((size) => {
	size.addEventListener('click', (event) => {
		event.preventDefault();
		fontSizeBig.forEach((el) => {
			el.classList.remove('font-size_active');
		});

		size.classList.add('font-size_active');
		if (size.classList.contains('font-size_small')) {
			bookSmall.classList.add('book_fs-small');
		} else {
			bookSmall.classList.remove('book_fs-small');
		}

		if (size.classList.contains('font-size_big')) {
			bookSmall.classList.add('book_fs-big');
		} else {
			bookSmall.classList.remove('book_fs-big');
		}
	});
});

const textColorLinks = document.querySelectorAll('.book__control_color .color');
const bookContent = document.querySelector('.book__content');

textColorLinks.forEach((text) => {
	text.addEventListener('click', (event) => {
		event.preventDefault();
		textColorLinks.forEach((el) => {
			el.classList.remove('color_active');
		});
		text.classList.add('color_active');

		const textColor = text.dataset.textColor;
		bookContent.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
		bookContent.classList.add(`book_color-${textColor}`);
	});
});

const textBgLinks = document.querySelectorAll('.book__control_background .color');
const book = document.querySelector('.book');

textBgLinks.forEach((text) => {
	text.addEventListener('click', (event) => {
		event.preventDefault();
		textBgLinks.forEach((el) => {
			el.classList.remove('color_active');
		});
		text.classList.add('color_active');

		const bgColor = text.dataset.bgColor;
		book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');
		book.classList.add(`book_bg-${bgColor}`);
	});
});