const form = document.querySelector("form");

const evento = (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const asunto = document.getElementById("asunto").value;
  const mensaje = document.getElementById("mensaje").value;

  const stringListData = localStorage.getItem("data") || "[]";

  const listData = JSON.parse(stringListData); //convierte en objeto

  const data = {
    nombre,
    email,
    asunto,
    mensaje,
  };

  listData.push(data);

  localStorage.setItem("data", JSON.stringify(listData));

  form.reset();

  Swal.fire({
    title: "Exito!",
    text: "Los datos han sido enviados correctamente",
    icon: "success",
  });

}

form.addEventListener("submit", evento);