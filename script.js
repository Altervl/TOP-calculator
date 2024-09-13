// Elements
const keyboard = document.querySelector('#keyboard');
const display = document.querySelector("#display");
display.value = '0';

// Operands and operator
let firstNum = '';
let secondNum = '';
let operator = null;

// Event handling
keyboard.addEventListener('click', (event) => {
    let target = event.target;
    let char = target.textContent;

    // Enter operands
    if (target.className === 'digit') {
        if (display.value === '0') {
            display.value = '';
        }

        // User can enter up to 18 characters.
        if (display.value.length < 18) {
            // Insert digits to operands.
            if (!operator) {
                if (char === '.' && firstNum.includes('.')) {
                    // pass
                } else {
                    firstNum += char;
                    insertDigit(char);
                };
            } else {
                if (char === '.' && secondNum.includes('.')) {
                    // pass
                } else {
                    secondNum += char;
                    insertDigit(char);
                };
            };
        };

    
    // Enter operator
    } else if (target.className === 'operator') {
        if (firstNum, operator, secondNum) {
            display.value = operate(firstNum, operator, secondNum);
        };

        operator = char;
        insertOperator(char);
    };

    if (target.textContent === 'C') {
        clearDisplay();
    };

    if (target.textContent === '=') {
        if (firstNum, operator, secondNum) {
            display.value = operate(firstNum, operator, secondNum);
        };
    };
});


// Functions

function insertDigit(char) {
    display.value += char;
};

function insertOperator(char) {
    if (display.value.slice(-1) !== char) {
        display.value += char;
    };
};

function clearDisplay() {
    display.value = '0';
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

    return Math.round(result * 1000) / 1000;
};
