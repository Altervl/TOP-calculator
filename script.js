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
            operator = char;
        };

        addToDisplay(char);
    };

    if (target.textContent === 'C') {
        clearDisplay();
    } else if (target.textContent === '=') {
        display.value = operate(firstNum, operator, secondNum);
        firstNum = display.value;
        secondNum = '';
        operator = null;
    };
});


// Functions

function addToDisplay(char) {
    display.value += char;
};

function clearDisplay() {
    display.value = '';
};

// Calculation
function operate(a, operator, b) {
    let num1 = Number(a);
    let num2 = Number(b);
    let result = 0;

    switch (operator) {
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
    
    return result;
};
