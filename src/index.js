// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const plusBtn = document.querySelector("#js-plusBtn"),
  minusBtn = document.querySelector("#js-minusBtn"),
  multiBtn = document.querySelector("#js-multiBtn"),
  divBtn = document.querySelector("#js-divBtn"),
  text = document.querySelector("#js-number"),
  button = document.querySelectorAll(".normal-btn"),
  reset = document.querySelector("#js-resetBtn"),
  result = document.querySelector("#js-resultBtn");

let realone = 0;
let realtwo = 0;
let ans = 0;

function handlereset() {
  realone = 0;
  realtwo = 0;
  ans = 0;
  text.innerText = 0;
}

reset.addEventListener("click", handlereset);

function handleresult() {
  text.innerText = ans;
}

result.addEventListener("click", handleresult);

function plus() {
  ans += realone;
  Array.from(button).forEach(function(e) {
    e.addEventListener("click", getNum);
  });
}

plusBtn.addEventListener("click", plus);

function getNum(e) {
  const one = parseInt(e.target.value);
  realone = one;
  text.innerText = realone;
}

Array.from(button).forEach(function(e) {
  e.addEventListener("click", getNum);
});
