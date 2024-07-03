let colores = ["#ffc300", "#fc0808", " #00bf29 "];
let color1, color2, color3;
let colorActual1 = null,
  colorActual2 = null,
  colorActual3 = null;
let det1 = null,
  det2 = null,
  det3 = null;
let interval, interval1, interval2;
let detenidos = 0;

function getColor(colorActual) {
  let randomColorIndex, colorAleatorio;

  do {
    randomColorIndex = Math.floor(Math.random() * colores.length);
    colorAleatorio = colores[randomColorIndex];
  } while (colorAleatorio === colorActual);

  return colorAleatorio;
}

function isSetInterval() {
  interval = setInterval(() => {
    color1 = getColor(colorActual1);
    colorActual1 = color1;
    document.getElementById("elemento").style.backgroundColor = color1;
  }, 500);

  interval1 = setInterval(() => {
    color2 = getColor(colorActual2);
    colorActual2 = color2;
    document.getElementById("elemento1").style.backgroundColor = color2;
  }, 500);

  interval2 = setInterval(() => {
    color3 = getColor(colorActual3);
    colorActual3 = color3;
    document.getElementById("elemento2").style.backgroundColor = color3;
  }, 500);
}

function detener() {
  clearInterval(interval);
  detenidos++;
  if (detenidos > 1) {
    detenidos = 1;
  }
  det1 = detenidos;
  verificarDetenidos();
}

function detener2() {
  clearInterval(interval1);
  detenidos++;
  if (detenidos > 1) {
    detenidos = 1;
  }
  det2 = detenidos;
  verificarDetenidos();
}

function detener3() {
  clearInterval(interval2);
  detenidos++;
  if (detenidos > 1) {
    detenidos = 1;
  }
  det3 = detenidos;
  verificarDetenidos();
}

function verificarDetenidos() {
  if (det1 + det2 + det3 === 3) {
    resultado();
  }
}

function resultado() {
  if (color1 === color2 && color2 === color3) {
    document.getElementById("texto").innerText = "Ganaste!!!";
  } else {
    document.getElementById("texto").innerText = "Perdiste!!!";
  }
}

function reiniciar() {
  clearInterval(interval);
  clearInterval(interval1);
  clearInterval(interval2);
  detenidos = 0;
  colorActual1 = null;
  colorActual2 = null;
  colorActual3 = null;
  det1 = null;
  det2 = null;
  det3 = null;
  document.getElementById("texto").innerText = "";
  isSetInterval();
}

isSetInterval();
