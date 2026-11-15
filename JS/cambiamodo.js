function CambiarModo() {
  const enlace = document.getElementById("tema-oscuro");

  enlace.disabled = !enlace.disabled;

  document.body.classList.toggle("oscuro");

  if (document.body.classList.contains("oscuro")) {
    localStorage.setItem("modo", "oscuro");
  } else {
    localStorage.setItem("modo", "claro");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("modo") === "oscuro") {
    document.getElementById("tema-oscuro").disabled = false;
    document.body.classList.add("oscuro");
  }
});
