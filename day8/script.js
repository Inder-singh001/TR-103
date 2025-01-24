function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
}

let firstOperand = '';
let secondOperand = '';
let currentOperator = null;
let shouldResetScreen = false;

const numberButtons = document.querySelectorAll('[type="button"]:not(.operator):not(.equal-sign):not(.all-clear):not(.decimal)');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equal-sign');
const clearButton = document.querySelector('.all-clear');
const pointButton = document.querySelector('.decimal');
const display = document.querySelector('.calculator-screen');


numberButtons.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.value))
);

operatorButtons.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.value))
);

equalsButton.addEventListener('click', evaluate);
clearButton.addEventListener('click', clear);
pointButton.addEventListener('click', appendPoint);


function appendNumber(number) {
    if (display.value === '0' || shouldResetScreen) resetScreen();
    display.value += number;
}


function resetScreen() {
    display.value = '';
    shouldResetScreen = false;
}

function clear() {
    display.value = '0';
    firstOperand = '';
    secondOperand = '';
    currentOperator = null;
}

function appendPoint() {
    if (shouldResetScreen) resetScreen();
    if (!display.value.includes('.'))
        display.value += '.';

}
function setOperation(operator) {
    if (currentOperator !== null) evaluate();
    firstOperand = display.value;
    currentOperator = operator;
    display.value = `${firstOperand} ${currentOperator} ${secondOperand}`
    shouldResetScreen = true;
}

function evaluate() {
    if (currentOperator === 'null' || shouldResetScreen) return;
    if (currentOperator === '/' && display.value === '0') {
        alert('you can not divide by 0');
        return;
    }
    secondOperand = display.value;
    display.value = roundResult(
        operate(currentOperator, parseFloat(firstOperand), parseFloat(secondOperand))
    );
    display.value = `${display.value}`
    currentOperator = null
}
function roundResult(number) {
    return Math.round(number * 1000) / 1000;
}


function operate(operator, num1, num2,) {
    switch (operator) {
        case '+': return add(num1, num2);
        case '-': return subtract(num1, num2);
        case '*': return multiply(num1, num2);
        case '/': return divide(num1, num2);
        default: return null;
    }
};







