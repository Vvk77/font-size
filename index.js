const inputEl = document.querySelector("#input");
const outputEl = document.querySelector("#output");
const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");

function colorChange  () {
  outputEl.innerText = inputEl.value;
outputEl.style.color = "red";
};

function color () {
    outputEl.innerText = inputEl.value;
  outputEl.style.color = "blue";
  };

  function change () {
    outputEl.innerText = inputEl.value;
  outputEl.style.color = "green";
  };




red.addEventListener("click",colorChange);
green.addEventListener("click",color);
blue.addEventListener("click",change);