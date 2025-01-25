let currentInput = '';
let memory = 0;

function updateDisplay(value) {
    const display = document.getElementById('display');
    display.textContent = value || '0';
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

function appendOperator(operator) {
    if (currentInput === '' && operator !== '√') return;
    if (operator === '√') {
        calculateSquareRoot();
        return;
    }
    currentInput += operator;
    updateDisplay(currentInput);
}

function calculateSquareRoot() {
    try {
        const result = Math.sqrt(parseFloat(currentInput));
        if (isNaN(result)) throw new Error('Invalid Input');
        currentInput = result.toString();
        updateDisplay(currentInput);
    } catch {
        handleError();
    }
}

function calculateResult() {
    try {
        if (currentInput.includes('%')) {
            currentInput = currentInput.replace('%', '/100');
        }
        const result = eval(currentInput); // Safe for controlled inputs
        if (!isFinite(result)) throw new Error('Division by zero');
        currentInput = result.toString();
        updateDisplay(currentInput);
    } catch {
        handleError();
    }
}

function clearDisplay() {
    currentInput = '';
    updateDisplay(currentInput);
}

function handleError() {
    currentInput = '';
    updateDisplay('Error');
}
