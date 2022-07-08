// Ищем необходимый элемент 
const btn = document.querySelector('.btn');

// Вешаем обработчик
btn.addEventListener('click', () => {
	// Ищем icon_01
	const icon_01 = document.querySelector('.icon_01');
	// Ищем icon_02
	const icon_02 = document.querySelector('.icon_02');

	// Если icon_01 имеет класс non_active, то убираем класс non_active и делаем ее активной, а icon_02 присваиваем класс non_active
	if (icon_01.classList.contains('non_active')) {
		icon_01.classList.remove('non_active');
		icon_02.classList.add('non_active');
	} else {
		icon_01.classList.add('non_active');
		icon_02.classList.remove('non_active');
	}
})