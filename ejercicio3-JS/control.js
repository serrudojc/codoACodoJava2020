var form = document.querySelector("form");
var usuario = document.getElementById("usuario");
var clave = document.getElementById("clave");
var submit = document.getElementById("submit");
var mensaje = document.querySelector("p");
form.onsubmit = function (e) {
  if (usuario.value === "" && clave.value === "") {
    e.preventDefault();
    mensaje.textContent = "Completá ambos datos!";
  } else if (usuario.value === "") {
    e.preventDefault();
    mensaje.textContent = "Completá el Usuario!";
  } else if (clave.value === "") {
    e.preventDefault();
    mensaje.textContent = "Completá la Clave!";
  } else if (usuario.value.indexOf("@") === -1) {
    e.preventDefault();
    mensaje.textContent = "El usuario necesita un @!";
  } else {
    e.preventDefault();
    mensaje.textContent = "Bienvenido al sistema!";
  }
};
