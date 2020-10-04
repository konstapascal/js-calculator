const calculator = document.querySelector;
const display = document.querySelector('.calculator-display');
const keys = document.querySelector('.calculator-buttons');

keys.addEventListener('click', event => {
	const key = event.target;
	const keyValue = key.textContent;
	const displayValue = display.textContent;

	// check if key is number
	if (key.classList.contains('number')) {
		if (displayValue === '0') {
			display.textContent = keyValue;
		} else {
			display.textContent += keyValue;
		}
	}

	// check if key is operator
	if (key.classList.contains('operator')) {
		console.log(key);
	}

	// check if key pressed is clear
	if (key.classList.contains('clear')) {
		display.innerHTML = '0';
	}
});
