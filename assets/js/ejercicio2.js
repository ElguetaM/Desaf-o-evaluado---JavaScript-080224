let btn1 = document.querySelector("#btn-1");
let btn2 = document.querySelector("#btn-2");
let btn3 = document.querySelector("#btn-3");
let btn4 = document.querySelector("#btn-4");
let btn5 = document.querySelector("#btn-5");
let btn6 = document.querySelector("#btn-6");
let caja = document.querySelector("#caja");

btn1.addEventListener("click", function () {
  caja.style.backgroundColor = "#e53e3e";
});

btn2.addEventListener("click", function () {
  caja.style.backgroundColor = "#dd6b20";
});
btn3.addEventListener("click", function () {
  caja.style.backgroundColor = "#faf089";
});

btn4.addEventListener("click", function () {
  caja.style.backgroundColor = "#48bb78";
});
btn5.addEventListener("click", function () {
  caja.style.backgroundColor = "#81e6d9";
});

btn6.addEventListener("click", function () {
  caja.style.backgroundColor = "#d53f8c";
});
