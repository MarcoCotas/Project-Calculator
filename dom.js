const btn = document.querySelectorAll(".btn");
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
display.textContent = "";
let reset = false;

btn.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;

    if (buttonText === "Clear") {
      number1 = "";
      number2 = "";
      operator = undefined;
      display.textContent = "";
      return;
    }

    if (["+", "-", "*", "/"].includes(buttonText)) {
      number1 = parseFloat(display.textContent);
      operator = buttonText;
      display.textContent = "";
    } else if (buttonText === "=") {
      number2 = parseFloat(display.textContent);
      operate(number1, operator, number2);
      number1 = parseFloat(display.textContent);
    } else {
      display.textContent += buttonText;
    }
  });
});

function operate(number1, operator, number2) {
  if (operator === "+") {
    number1 = addiction(number1, number2);
    display.textContent = number1;
  } else if (operator === "-") {
    number1 = subtraction(number1, number2);
    display.textContent = number1;
  } else if (operator === "*") {
    number1 = multiplication(number1, number2);
    display.textContent = number1;
  } else if (operator === "/") {
    number1 = division(number1, number2);
    display.textContent = number1;
  }
}

function addiction(number1, number2) {
  return number1 + number2;
}
function subtraction(number1, number2) {
  return number1 - number2;
}

function multiplication(number1, number2) {
  return number1 * number2;
}
function division(number1, number2) {
  return number1 / number2;
}
