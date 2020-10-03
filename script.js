const keys = document.querySelector('.calculator-buttons');
const display = document.querySelector('.calculator-display');

keys.addEventListener('click', event => {
	const key = event.target;
	const keyValue = key.textContent;
	const displayValue = display.textContent;

	if (displayValue === '0') {
		display.textContent = keyValue;
	} else {
		display.textContent += keyValue;
	}

	if (key.classList.contains('clear')) {
		display.innerHTML = '0';
	}
});
