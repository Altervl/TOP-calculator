// Elements
const keyboard = document.querySelector('#keyboard');
const display = document.querySelector("#display");

keyboard.addEventListener('click', (event) => {
    let target = event.target;

    if (target.tagName === 'BUTTON') {
        addToDisplay(target.textContent);
    };

    if (target.textContent === 'C') {
        clearDisplay();
    };
});

// Variables
let firstNum = null;
let secondNum = null;
let operator = null;


// Functions
function addToDisplay(char) {
    display.value += char;
};

function clearDisplay() {
    display.value = '';
};

// Operations
function add(a, b) {
    return Number(a) + Number (b);
};

function subtract(a, b) {
    return Number(a) - Number(b);
};

function multiply(a, b) {
    return Number(a) * Number(b);
};

function divide(a, b) {
    return Number(a) / Number(b);
};

// Calculation function
function operate(a, operator, b) {
    switch (operator) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '*': return multiply(a, b);
        case '/': return divide(a, b);
    };
};
