const users = {
  correo: "sega@gmail.com",
  contraseña: "1234",
};


document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el envío predeterminado del formulario

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validar el usuario
    if (users["correo"] === email && users["contraseña"] === password) {
      // Si es correcto, redirigir al formulario de clientes potenciales
      window.location.href = "index.html";
    } else {
      // Mostrar mensaje de error si el usuario no coincide
      document.getElementById("errorMessage").style.display = "block";
    }
  });
