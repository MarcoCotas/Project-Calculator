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
    if (buttonText === "+/-") {
      display.textContent = (parseFloat(display.textContent) * -1).toString();
      return;
    }

    if (buttonText === "Clear") {
      number1 = "";
      number2 = "";
      operator = undefined;
      display.textContent = "";
      return;
    }
    if (buttonText === "=" && (number1 === "" || operator === undefined)) {
      alert("Insert valid equation");
    }

    if (["+", "-", "*", "/", "%"].includes(buttonText)) {
      number1 = parseFloat(display.textContent);
      operator = buttonText;
      display.textContent = "";
    } else if (buttonText === "=") {
      number2 = parseFloat(display.textContent);
      operate(number1, operator, number2);
      number1 = parseFloat(display.textContent);
      number2 = "";
      operator = undefined;
    } else {
      display.textContent += buttonText;
    }
  });
});

function operate(number1, operator, number2) {
  if (operator === "+") {
    number1 = addition(number1, number2);
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
  } else if (operator === "%") {
    number1 = modulo(number1, number2);
    display.textContent = number1;
  }
}

function addition(number1, number2) {
  return Math.round((number1 + number2) * 100) / 100;
}
function subtraction(number1, number2) {
  return Math.round((number1 - number2) * 100) / 100;
}

function multiplication(number1, number2) {
  return Math.round(number1 * number2 * 100) / 100;
}
function division(number1, number2) {
  if (number2 === 0) {
    alert("Not possible to divide by 0");
    return 0;
  }
  return Math.round((number1 / number2) * 100) / 100;
}

function modulo(number1, number2) {
  return Math.round((number1 % number2) * 100) / 100;
}
