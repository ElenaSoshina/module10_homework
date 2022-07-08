// Ищем необходимый элемент 
const btn = document.querySelector('.btn');

// Вешаем обработчик на кнопку
btn.addEventListener('click', () => {
	width = window.screen.width;
	height = window.screen.height;

	// Выводим полученную информацию, используя alert
	alert(`Ширина экрана: ${width}, высота экрана: ${height}`)
});