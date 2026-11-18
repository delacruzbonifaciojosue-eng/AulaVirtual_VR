
export function renderRevolution(world) {
  world.innerHTML = `

    <!-- CIELO Y TERRENO -->
    <a-sky color="#a9c6d8"></a-sky>

    <a-plane rotation="-90 0 0"
      width="40"
      height="40"
      color="#a99b85"></a-plane>

    <!-- CALLES -->
    <a-plane rotation="-90 0 0"
      position="0 0.02 0"
      width="7"
      height="30"
      color="#c2b49d"></a-plane>

    <!-- EDIFICIOS DEL FONDO -->
    ${building(-7, 3, -12, "#c7b49a")}
    ${building(7, 3, -12, "#d1bea5")}
    ${building(0, 4, -19, "#b9a58c")}

    <!-- TÍTULO -->
    <a-text value="PARÍS, FRANCIA - 1789"
      position="0 5.2 1"
      align="center"
      width="9"
      color="#ffffff"></a-text>

    <a-text value="Una sociedad dividida por los privilegios"
      position="0 4.55 1"
      align="center"
      width="8"
      color="#ffffff"></a-text>

    <!-- PANEL EDUCATIVO -->
    <a-box position="0 3.4 -13.9"
      width="8"
      height="1.8"
      depth="0.15"
      color="#344e59"></a-box>

    <a-text value="LA SOCIEDAD FRANCESA"
      position="0 3.9 -13.8"
      align="center"
      width="6"
      color="#ffffff"></a-text>

    <a-text
      value="La sociedad estaba organizada en tres estamentos:\nclero, nobleza y tercer estado.\nEl tercer estado incluía a la burguesía y los sectores populares."
      position="0 3.35 -13.8"
      align="center"
      width="7"
      color="#e4eeee"></a-text>

    <!-- PLAZA CENTRAL -->
    <a-cylinder position="0 0.06 -5"
      radius="7"
      height="0.12"
      color="#b9aa92"></a-cylinder>

    <a-cylinder position="0 0.13 -5"
      radius="5.5"
      height="0.04"
      color="#c9bda8"></a-cylinder>

    <!-- PERSONAJES -->
    ${character(
      "NOBLEZA",
      "Segundo estado",
      "Privilegios y grandes propiedades",
      -5,
      "#80518c",
      "noble",
      "noble"
    )}

    ${character(
      "BURGUESÍA",
      "Parte del tercer estado",
      "Comerciantes y profesionales",
      0,
      "#397a9d",
      "bourgeois",
      "bourgeois"
    )}

    ${character(
      "SECTORES POPULARES",
      "Parte del tercer estado",
      "Campesinos y trabajadores",
      5,
      "#a66a36",
      "third-estate",
      "popular"
    )}

    <!-- INDICACIÓN -->
    <a-box position="0 0.5 2"
      width="6"
      height="0.75"
      depth="0.1"
      color="#344e59"></a-box>

    <a-text value="SELECCIONA UN PERSONAJE PARA EXPLORAR"
      position="0 0.5 2.07"
      align="center"
      width="6"
      color="#ffffff"></a-text>

    <!-- REGRESAR -->
    <a-entity class="clickable"
      data-go="museum"
      position="0 1.1 4">

      <a-box width="2.8"
        height="0.65"
        depth="0.15"
        color="#405b72"></a-box>

      <a-text value="REGRESAR AL MUSEO"
        position="0 0 0.1"
        align="center"
        width="3.5"
        color="#ffffff"></a-text>
    </a-entity>

  `;
}


// ==================================
// EDIFICIOS
// ==================================

function building(x, y, z, color) {
  return `
    <a-box position="${x} ${y} ${z}"
      width="6"
      height="6"
      depth="5"
      color="${color}"></a-box>

    <!-- TECHO -->
    <a-box position="${x} 6.1 ${z}"
      width="6.3"
      height="0.25"
      depth="5.3"
      color="#75665a"></a-box>

    <!-- VENTANAS -->
    ${windowBox(x - 1.5, 3.7, z + 2.55)}
    ${windowBox(x + 1.5, 3.7, z + 2.55)}
    ${windowBox(x - 1.5, 2, z + 2.55)}
    ${windowBox(x + 1.5, 2, z + 2.55)}
  `;
}

function windowBox(x, y, z) {
  return `
    <a-box position="${x} ${y} ${z}"
      width="0.9"
      height="1.1"
      depth="0.08"
      color="#658b9c"></a-box>
  `;
}


// ==================================
// PERSONAJES
// ==================================

function character(name, subtitle, description, x, color, destination, style) {
  return `
    <a-entity
      position="${x} 0.15 -5"
      data-go="${destination}">

      <!-- BASE -->
      <a-cylinder position="0 0.08 0"
        radius="1.05"
        height="0.12"
        color="#8d806d"></a-cylinder>

      <!-- CUERPO -->
      <a-cylinder class="clickable"
        position="0 1 0"
        radius="0.48"
        height="1.65"
        color="${color}"></a-cylinder>

      <!-- CABEZA -->
      <a-sphere class="clickable"
        position="0 2.05 0"
        radius="0.34"
        color="#d8b69b"></a-sphere>

      <!-- CABELLO -->
      <a-sphere position="0 2.22 -0.02"
        radius="0.35"
        theta-length="85"
        color="#49372d"></a-sphere>

      <!-- DETALLES DE VESTIMENTA -->
      ${outfit(style, color)}

      <!-- NOMBRE -->
      <a-text value="${name}"
        position="0 2.85 0"
        align="center"
        width="4"
        color="#ffffff"></a-text>

      <!-- DESCRIPCIÓN -->
      <a-text value="${subtitle}"
        position="0 3.2 0"
        align="center"
        width="3.8"
        color="#f2e6d2"></a-text>

      <!-- INDICACIÓN -->
      <a-text value="SELECCIONAR"
        position="0 -0.05 0.8"
        align="center"
        width="2.5"
        color="#ffffff"></a-text>

    </a-entity>
  `;
}


// ==================================
// DETALLES DE VESTIMENTA
// ==================================

function outfit(style, color) {
  if (style === "noble") {
    return `
      <a-box position="0 1.85 0.05"
        width="0.8"
        height="0.35"
        depth="0.12"
        color="#d6c5a3"></a-box>

      <a-box position="0 1.05 0.46"
        width="0.55"
        height="0.5"
        depth="0.08"
        color="#d6c5a3"></a-box>
    `;
  }

  if (style === "bourgeois") {
    return `
      <a-box position="0 1.75 0.1"
        width="0.7"
        height="0.2"
        depth="0.1"
        color="#e1d5bd"></a-box>

      <a-box position="0 1.1 0.45"
        width="0.15"
        height="0.8"
        depth="0.08"
        color="#e1d5bd"></a-box>
    `;
  }

  return `
    <a-box position="0 1.75 0"
      width="0.85"
      height="0.22"
      depth="0.12"
      color="#704b32"></a-box>

    <a-box position="0 0.8 0.45"
      width="0.7"
      height="0.25"
      depth="0.08"
      color="#704b32"></a-box>
  `;
}
