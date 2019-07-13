let number = '';
let operation = null;
let total = 0;

function add(n1, n2) {
  return Number(n1) + Number(n2);
}

function subtract(n1, n2) {
  return Number(n1) - Number(n2);
}

function multiply(n1, n2) {
  return Number(n1) * Number(n2);
}

function divide(n1, n2) {
  return Number(n1) / Number(n2);
}

function operate(operator, n1, n2) {
  return operator(n1, n2);
}

let display = document.querySelector('#display');
display.value = 0;


let numberButtons = document.querySelectorAll('.number');

// Number buttons
for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', function(){
    number += event.target.innerHTML;
    display.value = number;
  });
}

// Add comma
let commaButton = document.querySelector('.comma');
commaButton.addEventListener('click', function() {
  number += '.'
});

let operatorButtons = document.querySelectorAll('.operator');

// Operations button
for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click', function() {
    operation = event.target.innerHTML;
    if (number) {
      total = Number(number);
      number = '';
    }
    display.value = total;
  });
}

// Clear display
let clear = document.querySelector('.ac');
clear.addEventListener('click', function() {
  total = 0;
  number = '';
  display.value = 0;
});

// Display total
let equalButton = document.querySelector('.equals');
equalButton.addEventListener('click', function() {
  if (number && operation) {
    calculateOperation(operation);
  }
});

function calculateOperation(operation) {
  switch(operation) {
    case '+':
      total = operate(add, number, total);
      console.log(total);
      display.value = total;
      break;
    case '-': 
      total = operate(subtract, total, number);
      display.value = total;
      break;
    case 'x': 
      total = operate(multiply, number, total);
      display.value = total;
      break;
    case '%': 
      total = operate(divide, total, number);
      display.value = total;
      break;
  }
  number = '';
}