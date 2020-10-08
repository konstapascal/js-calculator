const calculator = document.querySelector('.calculator-container');
const display = calculator.querySelector('.calculator-display');
const keys = calculator.querySelector('.calculator-buttons');

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
		calculator.dataset.lastOperator = keyValue;
	}

	// check if key pressed is clear
	if (key.classList.contains('clear')) {
		display.innerHTML = '0';
	}
});
