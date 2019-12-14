// import "./styles.css";

const result = document.querySelector(".js-result"); // 보여지는창
const reset = document.querySelector(".js-reset"); // C
const equals = document.querySelector(".js-equals"); // =
const numbers = Array.from(document.querySelectorAll(".js-number")); // NUM
const operations = Array.from(document.querySelectorAll(".js-operation")); //+,-,*,/

let firstValue = "",
  firstDone,
  secondValue = "",
  secondDone,
  currentOperation;

function doOperation() {
  const intValueA = parseInt(firstValue, 10);
  const intValueB = parseInt(secondValue, 10);
  switch (currentOperation) {
    case "+":
      return intValueA + intValueB;
    case "-":
      return intValueA - intValueB;
    case "/":
      return intValueA / intValueB;
    case "*":
      return intValueA * intValueB;
    default:
      return;
  }
}

function handleNumberClick(e) {
  const clickedNum = e.target.innerText;
  if (!firstDone) {
    // firstDone은 전역 변수로 선언만 되어있다
    //if(firstDone)의 의미는 firstDone에 값이 있으면 조건 true이고
    //다음과 같이 !firstDone는 firstDone에 값이 없을경우에 조건문에서 true이다.
    //즉 firstDone에 아무것도 없으면 내용에 있는 코드가 실행된다.
    firstValue = firstValue + clickedNum;
    result.innerHTML = firstValue;
  } else {
    secondValue = secondValue + clickedNum;
    result.innerHTML = secondValue;
    secondDone = true;
  }
}

function calculate() {
  const operation = doOperation();
  result.innerHTML = operation;
  firstValue = operation;
  secondDone = false;
  secondValue = "";
}

function handleOperationClick(e) {
  const clickedOperation = e.target.innerText;
  if (!firstDone) {
    firstDone = true;
  }
  if (firstDone && secondDone) {
    calculate();
  }
  currentOperation = clickedOperation;
}

function handleReset() {
  firstValue = "";
  secondValue = "";
  firstDone = false;
  secondDone = false;
  currentOperation = null;
  result.innerHTML = "0";
}

function handleEqualsClick() {
  if (firstDone && secondDone) {
    calculate();
  }
}

numbers.forEach(function(number) {
  // 숫자누르기
  number.addEventListener("click", handleNumberClick);
});
operations.forEach(function(operation) {
  // 연산버튼 누르기
  operation.addEventListener("click", handleOperationClick);
});
reset.addEventListener("click", handleReset); // AC버튼
equals.addEventListener("click", handleEqualsClick); // = 버튼
