
export function renderMuseum(world) {
  world.innerHTML = `

    <!-- AMBIENTE -->
    <a-sky color="#b9d0dc"></a-sky>

    <!-- PISO -->
    <a-plane rotation="-90 0 0"
      width="24"
      height="24"
      color="#c5bca9"></a-plane>

    <!-- PAREDES -->
    <a-box position="0 3 -7"
      width="16"
      height="6"
      depth="0.3"
      color="#e9e2d5"></a-box>

    <a-box position="-8 3 0"
      width="0.3"
      height="6"
      depth="14"
      color="#d8e0df"></a-box>

    <a-box position="8 3 0"
      width="0.3"
      height="6"
      depth="14"
      color="#d8e0df"></a-box>

    <!-- FRANJA INFERIOR -->
    <a-box position="0 0.25 -6.8"
      width="15.8"
      height="0.5"
      depth="0.08"
      color="#927451"></a-box>

    <!-- ENCABEZADO DEL MUSEO -->
    <a-text value="MUSEO VIRTUAL DE HISTORIA"
      position="0 5.35 -6.65"
      align="center"
      width="9"
      color="#344e59"></a-text>

    <a-text value="Un recorrido por los acontecimientos que cambiaron el mundo"
      position="0 4.85 -6.65"
      align="center"
      width="8"
      color="#52636a"></a-text>

    <!-- LÍNEA DEL TIEMPO -->
    <a-box position="0 3.75 -6.65"
      width="9"
      height="1.35"
      depth="0.12"
      color="#d6c6a9"></a-box>

    <a-text value="REVOLUCIÓN FRANCESA"
      position="0 4.2 -6.55"
      align="center"
      width="6"
      color="#493a2d"></a-text>

    <a-text value="1789"
      position="-3 3.65 -6.55"
      align="center"
      width="2"
      color="#493a2d"></a-text>

    <a-text value="1792"
      position="0 3.65 -6.55"
      align="center"
      width="2"
      color="#493a2d"></a-text>

    <a-text value="1799"
      position="3 3.65 -6.55"
      align="center"
      width="2"
      color="#493a2d"></a-text>

    <a-text value="Inicio"
      position="-3 3.35 -6.55"
      align="center"
      width="2"
      color="#493a2d"></a-text>

    <a-text value="República"
      position="0 3.35 -6.55"
      align="center"
      width="2"
      color="#493a2d"></a-text>

    <a-text value="Napoleón"
      position="3 3.35 -6.55"
      align="center"
      width="2"
      color="#493a2d"></a-text>

    <!-- PANEL LATERAL IZQUIERDO -->
    ${sidePanel(
      -6.65, 2.6, -2.1, 90,
      "LAS CAUSAS",
      "Desigualdad social\\nCrisis económica\\nPrivilegios de los estamentos\\nIdeas de la Ilustración",
      "#527b83"
    )}

    <!-- PANEL LATERAL DERECHO -->
    ${sidePanel(
      6.65, 2.6, -2.1, -90,
      "LAS CONSECUENCIAS",
      "Fin de la monarquía absoluta\\nTransformaciones sociales\\nDifusión de ideas de libertad\\nInfluencia internacional",
      "#8b694a"
    )}

    <!-- PORTAL CENTRAL -->
    <a-box position="-1.8 1.65 -5.1"
      width="0.18"
      height="3.1"
      depth="0.25"
      color="#927451"></a-box>

    <a-box position="1.8 1.65 -5.1"
      width="0.18"
      height="3.1"
      depth="0.25"
      color="#927451"></a-box>

    <a-box position="0 3.15 -5.1"
      width="3.8"
      height="0.18"
      depth="0.25"
      color="#927451"></a-box>

    <a-box position="0 1.55 -5.15"
      width="3.4"
      height="2.8"
      depth="0.12"
      color="#344e59"></a-box>

    <a-text value="EXPLORA LA HISTORIA"
      position="0 2.35 -5.05"
      align="center"
      width="3"
      color="#ffffff"></a-text>

    <!-- BOTÓN DE ENTRADA -->
    <a-box class="clickable"
      data-go="revolution"
      position="0 1.25 -4.95"
      width="2.8"
      height="0.65"
      depth="0.15"
      color="#bd7846">

      <a-text value="ENTRAR"
        position="0 0 0.1"
        align="center"
        width="3"
        color="#ffffff"></a-text>

    </a-box>

    <!-- BOTÓN REGRESAR -->
    <a-box class="clickable"
      data-go="classroom"
      position="-5.2 1.2 -4.8"
      width="2"
      height="0.65"
      depth="0.15"
      color="#405b72">

      <a-text value="REGRESAR"
        position="0 0 0.1"
        align="center"
        width="3"
        color="#ffffff"></a-text>

    </a-box>

    <!-- INDICACIÓN -->
    <a-text value="Recorre el museo y descubre nuestra historia"
      position="0 0.6 -2"
      align="center"
      width="6"
      color="#46565b"></a-text>

  `;
}


// ==================================
// PANELES LATERALES
// ==================================

function sidePanel(x, y, z, rotation, title, description, color) {
  return `
    <a-entity position="${x} ${y} ${z}"
      rotation="0 ${rotation} 0">

      <a-box
        width="3.6"
        height="2.7"
        depth="0.15"
        color="${color}">
      </a-box>

      <a-text value="${title}"
        position="0 0.85 0.09"
        align="center"
        width="3.2"
        color="#ffffff">
      </a-text>

      <a-text value="${description}"
        position="0 -0.05 0.09"
        align="center"
        width="3.1"
        color="#ffffff">
      </a-text>

    </a-entity>
  `;
}
