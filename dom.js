const buttons = document.querySelectorAll(".btn");
const display = document.querySelector("displayer");
let number1 = "";
let number2 = "";
let operator = undefined;
let displayer = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(innerHTML);
  });
});

function operate(number1, operator, number2){
  if (operator === "+"){
    return add(number1, number2)
  } else if (operator === "-"){
    return subtract(number1, number2)
  }
}

function add(number1, number2){
  return (number1 + number2)
}
function subtract(number1, number2){
  return (number1  number2)
}