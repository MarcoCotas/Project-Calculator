const container = document.querySelector("#container");
const displayer = document.querySelector("#display");
number1 = "";
number2 = "";
operator = null;

document.body.addEventListener("keydown", (e) => {
  let keyPressed = e.key;
  if (!"0123456789/*-+=".includes(keyPressed)) {
    alert("Invalid number");
    return;
  } else {
    displayer.textContent = keyPressed;
    number1 = keyPressed;
    if (displayer === "") {
      number1 = displayer;
    }
    if ((number1 != "" && "-") || "+" || "*" || "/") {
      operator = displayer;

      operator = keyPressed;
    }
    if (displayer != "") {
      number2 = displayer;
    }
    if (operator === "+") {
      add(number1, number2);
    }
  }
});

function operate(num1, operator, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  }
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}
