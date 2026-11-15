let partidas = 0;
let ganadas = 0;
let empatadas = 0;
let perdidas = 0;

function jugar(jugador) {
  const opciones = ["piedra", "papel", "tijera"];
  const maquina = opciones[Math.floor(Math.random() * opciones.length)];
  let mensaje;

  partidas++;

  if (jugador === maquina) {
    mensaje = "Empate";
    empatadas++;
  } else if (
    (jugador === "piedra" && maquina === "tijera") ||
    (jugador === "tijera" && maquina === "papel") ||
    (jugador === "papel" && maquina === "piedra")
  ) {
    mensaje = "Ganas";
    ganadas++;
  } else {
    mensaje = "Pierdes";
    perdidas++;
  }

  

  document.getElementById("jugada-jugador").textContent =
    `Tu elección: ${jugador}`;
  document.getElementById("jugada-maquina").textContent =
    `Elección máquina: ${maquina}`;
  document.getElementById("mensaje").textContent = `Resultado: ${mensaje}`;

  document.getElementById("marcador").textContent =
    `Partidas jugadas: ${partidas}`;
  document.getElementById("ganadas").textContent = `Partidas ganadas: ${ganadas}`;
  document.getElementById("empatadas").textContent = `Partidas empatadas: ${empatadas}`;
  document.getElementById("perdidas").textContent = `Partidas perdidas: ${perdidas}`;
}
