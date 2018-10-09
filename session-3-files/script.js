console.log('Lets Go! 💻');

let keysElement = document.getElementById('keys');
let displayElement = document.getElementById('display');

let firstNumber = 0;
let secondNumber = 0;
let lastKeyWasOperator = false;
let operator = false;

let reset = () => {
  firstNumber = 0;
  secondNumber = 0;
  lastKeyWasOperator = false;
  displayElement.textContent = '0';
};

let calculate = (firstNumber, operator, secondNumber) => {
  let result = 0;
  if (operator === 'add') {
    result = Number(firstNumber) + Number(secondNumber);
  }
  return result;
};

keysElement.onclick = event => {
  let keyElement = event.target;
  let keyId = event.target.id;
  let keyContent = event.target.textContent;
  let displayValue = displayElement.textContent;

  if (keyElement.className == 'number-key') {
    if (displayValue === '0') {
      displayElement.textContent = keyContent;
    } else {
      displayElement.textContent = displayValue + keyContent;
    }
  } else if (keyId === 'key-decimal') {
    displayElement.textContent = displayValue + '.';
  } else if (keyId === 'key-clear') {
    reset();
  } else if (keyElement.className === 'operator') {
    keyElement.classList.add('is-depressed');
    lastKeyWasOperator = true;
    firstNumber = displayElement.textContent;
    displayElement.textContent = '0';

    if (keyId === 'key-add') {
      operator = 'add';
    }
  } else if (keyId === 'key-equal') {
    secondNumber = displayElement.textContent;
    let result = calculate(firstNumber, operator, secondNumber);
    displayElement.textContent = result;
  }
};
