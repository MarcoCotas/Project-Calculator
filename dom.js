const buttons = document.querySelectorAll(".btn");
const display = document.querySelector("#displayer");
const equal = document.querySelector("#equal");
const plus = document.querySelector("#add");
const minus = document.querySelector("#minus");
const divide = document.querySelector("#divide");
const times = document.querySelector("#times");
const float = document.querySelector("#float");
const clear = document.querySelector("#clear");
const negative = document.querySelector("#negative");
let number1 = "";
let number2 = "";
let operator = undefined;

function operate(number1, operator, number2) {
  if (operator === "+") {
    return adiction(number1, number2);
  } else if (operator === "-") {
    return subtracion(number1, number2);
  } else if (operator === "*") {
    return multiplication(number1, number2);
  } else if (operator === "/") {
    return division(number1, number2);
  }
}

function adiction(number1, number2) {
  return number1 + number2;
}
function subtracion(number1, number2) {
  return number1 - number2;
}

function multiplication(number1, number2) {
  return number1 * number2;
}
function division(number1, number2) {
  return number1 / number2;
}
