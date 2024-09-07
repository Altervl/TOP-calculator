// Elements
const keyboard = document.querySelector('#keyboard');
const display = document.querySelector("#display");

// Variables
let firstNum = '';
let secondNum = '';
let operator = null;


// Event handling
keyboard.addEventListener('click', (event) => {
    let target = event.target;

    if (target.tagName === 'BUTTON') {
        let char = target.textContent;

        if (target.className === 'digit') {
            if (operator !== null) {
                secondNum  += char;
            } else {
                firstNum += char;
            };
        } else if (target.className === 'operator') {
            if (firstNum && operator && secondNum) {
                display.value = operate(firstNum, operator, secondNum);
            };

            operator = char;
        };

        addToDisplay(char);
    };

    if (target.textContent === 'C') {
        clearDisplay();
    } else if (target.textContent === '=') {
        if (firstNum, operator, secondNum) {
            display.value = operate(firstNum, operator, secondNum);
        };
    };
});


// Functions

function addToDisplay(char) {
    display.value += char;
};

function clearDisplay() {
    display.value = '';
    firstNum = '';
    secondNum = '';
    operator = null;
};

function defaultVars() {
    firstNum = result;
    secondNum = '';
    operator = null;
};

// Calculation
function operate(a, op, b) {
    console.table([a, op, b]);
    let num1 = Number(a);
    let num2 = Number(b);
    let result = 0;

    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    };

    firstNum = result;
    secondNum = '';
    operator = null;

    return result;
};
