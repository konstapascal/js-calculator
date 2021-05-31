const calculator = document.querySelector('.calculator-container');
const display = calculator.querySelector('.calculator-display');
const keys = calculator.querySelector('.calculator-buttons');

keys.addEventListener('click', event => {
	const key = event.target;

	if (key.classList.contains('number')) {
		if (display.textContent === '0') {
			display.innerHTML = key.innerHTML;
			calculator.dataset.lastOperator !== 'none'
				? (calculator.dataset.secondNumber = key.innerHTML)
				: (calculator.dataset.firstNumber = key.innerHTML);
		} else {
			display.innerHTML += key.innerHTML;
			calculator.dataset.lastOperator !== 'none'
				? (calculator.dataset.secondNumber += key.innerHTML)
				: (calculator.dataset.firstNumber += key.innerHTML);
		}
	}

	if (key.classList.contains('operator')) {
		calculator.dataset.lastOperator = key.innerHTML;
		display.innerHTML = '0';
	}

	if (key.classList.contains('clear-all')) {
		display.innerHTML = '0';
		calculator.dataset.firstNumber = 'none';
		calculator.dataset.secondNumber = 'none';
		calculator.dataset.lastOperator = 'none';
	}

	if (key.classList.contains('clear')) {
		display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length - 1);
		calculator.dataset.lastOperator !== 'none'
			? (calculator.dataset.secondNumber = display.innerHTML)
			: (calculator.dataset.firstNumber = display.innerHTML);

		if (display.innerHTML === '') display.innerHTML = '0';
	}

	if (key.classList.contains('equals')) {
		let result;

		if (calculator.dataset.lastOperator === '+')
			result = +calculator.dataset.firstNumber + +calculator.dataset.secondNumber;
		if (calculator.dataset.lastOperator === '-')
			result = +calculator.dataset.firstNumber - +calculator.dataset.secondNumber;
		if (calculator.dataset.lastOperator === '×')
			result = +calculator.dataset.firstNumber * +calculator.dataset.secondNumber;
		if (calculator.dataset.lastOperator === '÷')
			result = +calculator.dataset.firstNumber / +calculator.dataset.secondNumber;

		display.innerHTML = result;
	}
});
