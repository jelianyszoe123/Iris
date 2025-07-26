let jugador = {
  nombre: "",
  cabello: "",
  ojos: ""
};

function empezarJuego() {
  jugador.nombre = document.getElementById("nombreJugador").value;
  jugador.cabello = document.getElementById("cabelloJugador").value;
  jugador.ojos = document.getElementById("ojosJugador").value;











  document.getElementById("configuracion").style.display = "none";
  document.getElementById("juego").style.display = "block";

  escenaInicio();
}

function escenaInicio() {
  mostrarTexto(`
    Hoy es el último día de clases y el cumpleaños de Iris. Tú (${jugador.nombre}) estás con el grupo desde temprano.
    Iris te sonríe y te dice: "¡Me alegra que estés aquí, ${jugador.nombre}!"
    Nicha te mira de reojo y murmura: "Siempre confiamos en ti, ${jugador.nombre}."
    Su madre, Luz, aparece y le entrega a Iris una caja plateada...
  `);
  mostrarBotones([
    { texto: "Preguntar a Iris sobre la caja", accion: preguntarCaja },
    { texto: "Caminar hacia la escuela con Nicha", accion: paseoConNicha }
  ]);
}

function preguntarCaja() {
  mostrarTexto(`
    Te acercas a Iris. "${jugador.nombre}, creo que esto es importante...", dice.
    Luz te mira con ojos intensos: "Tú también tienes un rol que cumplir, ${jugador.nombre}."
    "Los poderes de Iris cambiarán el mundo, y tú estarás a su lado."
  `);
  mostrarBotones([
    { texto: "Aceptar tu misión", accion: entrenamiento },
    { texto: "Dudar y retirarte", accion: duda }
  ]);
}

function paseoConNicha() {
  mostrarTexto(`
    Caminas con Nicha hacia el pueblo. Entre risas, ella se detiene y te dice:
    "${jugador.nombre}, siento que contigo todo se siente... más real."
    ¿Qué haces?
  `);
  mostrarBotones([
    { texto: "Tomar su mano", accion: beso },
    { texto: "Cambiar de tema", accion: evasion }
  ]);
}

function entrenamiento() {
  mostrarTexto(`
    El grupo se reúne. Nicha dibuja un círculo mágico y te pide que te concentres.
    Tus emociones activan una chispa dentro de ti. Tu cabello ${jugador.cabello} brilla con luz.
    Iris sonríe: "Lo sabía... ${jugador.nombre} tiene magia también."
  `);
}

function duda() {
  mostrarTexto(`Te alejas del grupo. El mundo parece más oscuro. Una sombra te susurra: "Sin ti, ellos fallarán..."`);
}

function beso() {
  mostrarTexto(`
    Nicha se sonroja y se acerca lentamente. "Gracias por existir, ${jugador.nombre}..."
    . El alrededor suspira en silencio.
  `);
}

function evasion() {
  mostrarTexto(`Decides hablar sobre la misión. Nicha respira hondo. "Tú siempre tan centrado, ${jugador.nombre}..."`);
}



function mostrarTexto(html) {
  document.getElementById("historia").innerHTML = html;
}


function mostrarBotones(opciones) {
  const contenedor = document.getElementById("acciones");
  contenedor.innerHTML = "";
  opciones.forEach(op => {
    const btn = document.createElement("button");
    btn.textContent = op.texto;
    btn.onclick = op.accion;
    contenedor.appendChild(btn);
  });
}

// 🕹 Movimiento básico del personaje (modo prueba)
const canvas = document.getElementById('mapa');
const ctx = canvas?.getContext('2d');
let posX = 150, posY = 100;

if (ctx) {
  drawPlayer();
  document.addEventListener("keydown", moverPersonaje);
}

function drawPlayer() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#6a4ebf";
  ctx.beginPath();
  ctx.arc(posX, posY, 10, 0, Math.PI * 2);
  ctx.fill();
}

function moverPersonaje(e) {
  switch (e.key) {
    case "ArrowUp": posY -= 5; break;
    case "ArrowDown": posY += 5; break;
    case "ArrowLeft": posX -= 5; break;
    case "ArrowRight": posX += 5; break;
  }
  drawPlayer();
}

let inventario = [];

function agregarAlInventario(item) {
  inventario.push(item);
  actualizarInventario();
}

function actualizarInventario() {
  const contenedor = document.getElementById("listaInventario");
  contenedor.innerHTML = "";
  inventario.forEach(objeto => {
    const li = document.createElement("li");
    li.textContent = objeto;
    contenedor.appendChild(li);
  });
  document.getElementById("inventario").style.display = "block";
}


function volverAlInicio() {
  document.getElementById("juego").style.display = "none";
  document.getElementById("configuracion").style.display = "block";
}

mostrarBotones([
  { texto: "Continuar", accion: siguienteEscena },
  { texto: "Regresar al inicio", accion: volverAlInicio }
]);

function volverACapitulo5() {
  capitulo5(); // o cualquier escena que quieras
}

mostrarBotones([
  { texto: "Regresar al capítulo anterior", accion: volverACapitulo5 },
  { texto: "Seguir adelante", accion: capitulo6 }
]);




