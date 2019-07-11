let displayValue = 0;

function add(n1, n2) {
  return n1 + n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

function operate(operator, n1, n2) {
  return operator(n1, n2);
}

let display = document.querySelector('#display');


let buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(event){
    display.value = event.target.innerHTML;
    displayValue = display.value;
  });
}