const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operatorPressed = false;

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}
function updateDisplay() {
    display.textContent = currentInput || '0';
}

function addToDisplay(value) {
    currentInput += value;
    operatorPressed = ['+', '-', '*', '/'].includes(value);
    updateDisplay();
}

function calculate() {
    try {
        currentInput = String(eval(currentInput.replace(',', '.')));
        updateDisplay();
    } catch (error) {
        updateDisplay('Error');
        currentInput = '';
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;
        if (buttonValue === 'C') {
            clearDisplay();
        } else if (buttonValue === 'Del') {
            currentInput = currentInput.slice(0, -1);
            updateDisplay();
        } else if (buttonValue === '=') {
            calculate();
        } else {
            if (['+', '-', '*', '/'].includes(buttonValue) && operatorPressed) return;
            addToDisplay(buttonValue);
        }
    });
});
