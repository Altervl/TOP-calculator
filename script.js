// Elements
const keyboard = document.querySelector('#keyboard');
const del = document.querySelector('#delete');
const display = document.querySelector("#display");
display.value = '0';

// Operands and operator
let firstNum = '0';
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
    } else if (target.id === 'delete') {
        if (!operator) {
            if (firstNum === '') {
                firstNum = '0';
            }
            firstNum = firstNum.slice(0, -1);
        } else {
            if (secondNum === '') {
                operator = null;
            };

            secondNum = secondNum.slice(0, -1);
        };

        deleteChar();

        if (display.value === '') {
            display.value = '0';
        };
    };

    // Clear display
    if (target.textContent === 'C') {
        clearDisplay();
    };

    // Calculate
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

function deleteChar() {
    display.value = display.value.slice(0, -1);
};

function clearDisplay() {
    display.value = '0';
    firstNum = '0'
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

    console.log(result);

    if (result === Infinity && num2 === 0) {
        return "zero division error";
    } else if (isNaN(result)) {
        return "not a number error";
    } else {
        firstNum = result;
        secondNum = '';
        operator = null;
        return Math.round(result * 1000) / 1000;
    };
};
