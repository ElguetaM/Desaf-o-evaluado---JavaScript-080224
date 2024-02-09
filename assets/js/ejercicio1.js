let resultado = document.querySelector(".resultado");
let nombreError = document.querySelector(".errorNombre");
let asuntoError = document.querySelector(".errorAsunto");
let mensajeError = document.querySelector(".errorMensaje");
const enviar = document.querySelector("#botton");
let formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  limpiarErrores();

  let nombre = document.querySelector("#nombre").value;
  let asunto = document.querySelector("#asunto").value;
  let mensaje = document.querySelector("#mensaje").value;
  let resultado = validar(nombre, asunto, mensaje);

  if (resultado == true) {
    correcto();
  }
});

function validar(nombre, asunto, mensaje) {
  const caracter = /[a-zA-Z]/gim;
  let validado = true;
  if (caracter.test(nombre, asunto, mensaje) == false) {
    nombreError.innerHTML = "El nombre es requerido";
    asuntoError.innerHTML = "El asunto es requerido";
    mensajeError.innerHTML = "El mensaje es requerido";
    validado = false;
  }
  return validado;
}

function limpiarErrores() {
  nombreError.innerHTML = "";
  asuntoError.innerHTML = "";
  mensajeError.innerHTML = "";
  resultado.innerHTML = "";
}

function correcto() {
  resultado.innerHTML = "Mensaje enviado con exito";
}
