let btnS = document.querySelector("#btn-sumar");
let btnR = document.querySelector("#btn-restar");

btnS.addEventListener("click", function (e) {
  e.preventDefault();
  sumar();
});

btnR.addEventListener("click", function (e) {
  e.preventDefault();
  restar();
});

function sumar() {
  let valor1 = parseInt(document.querySelector("#valor1").value);
  let valor2 = parseInt(document.querySelector("#valor2").value);
  document.querySelector(".resultado").innerHTML = valor1 + valor2;
}

function restar() {
  let valor1 = parseInt(document.querySelector("#valor1").value);
  let valor2 = parseInt(document.querySelector("#valor2").value);
  document.querySelector(".resultado").innerHTML = Math.max(valor1 - valor2, 0);
  
}
