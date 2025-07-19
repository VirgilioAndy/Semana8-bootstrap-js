// script.js - Validaciones y alerta personalizada

document.getElementById("alertButton").addEventListener("click", function () {
  alert("¡Gracias por visitar Comercial Danielitos!");
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    e.preventDefault();
    alert("Por favor, completa todos los campos obligatorios.");
  } else {
    alert("Formulario enviado correctamente. ¡Gracias por tu mensaje!");
  }
});
