
export function renderMuseum(world) {
  world.innerHTML = `

    <!-- CIELO -->
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

    <!-- FRANJA DECORATIVA -->
    <a-box position="0 0.3 -6.8"
      width="15.8"
      height="0.6"
      depth="0.08"
      color="#9a7855"></a-box>

    <!-- COLUMNAS -->
    ${column(-6.8)}
    ${column(6.8)}

    <!-- ENCABEZADO -->
    <a-box position="0 4.9 -6.7"
      width="11"
      height="1.3"
      depth="0.15"
      color="#344e59"></a-box>

    <a-text value="MUSEO VIRTUAL DE HISTORIA"
      position="0 5.1 -6.58"
      align="center"
      width="9"
      color="#ffffff"></a-text>

    <a-text value="Conoce los acontecimientos que transformaron el mundo"
      position="0 4.7 -6.58"
      align="center"
      width="8"
      color="#dce9e9"></a-text>

    <!-- PANEL DE LÍNEA DEL TIEMPO -->
    <a-box position="0 3.3 -6.65"
      width="10.5"
      height="1.5"
      depth="0.12"
      color="#d6c6a9"></a-box>

    <a-text
      value="REVOLUCIÓN FRANCESA | 1789 - 1799"
      position="0 3.8 -6.55"
      align="center"
      width="8"
      color="#493a2d"></a-text>

    <a-text
      value="1789: Inicio de la revolución y toma de la Bastilla"
      position="0 3.45 -6.55"
      align="center"
      width="7.8"
      color="#493a2d"></a-text>

    <a-text
      value="1792: Caída de la monarquía"
      position="0 3.15 -6.55"
      align="center"
      width="7.8"
      color="#493a2d"></a-text>

    <a-text
      value="1799: Golpe de Estado de Napoleón Bonaparte"
      position="0 2.85 -6.55"
      align="center"
      width="7.8"
      color="#493a2d"></a-text>

    <!-- PANEL IZQUIERDO: CAUSAS -->
    <a-box position="-4.3 1.9 -6.6"
      width="3.5"
      height="1.8"
      depth="0.15"
      color="#527b83"></a-box>

    <a-text value="CAUSAS"
      position="-4.3 2.55 -6.48"
      align="center"
      width="3"
      color="#ffffff"></a-text>

    <a-text
      value="Desigualdad social\nCrisis económica\nPrivilegios de los estamentos\nIdeas de la Ilustración"
      position="-4.3 1.95 -6.48"
      align="center"
      width="3"
      color="#ffffff"></a-text>

    <!-- PANEL DERECHO: CONSECUENCIAS -->
    <a-box position="4.3 1.9 -6.6"
      width="3.5"
      height="1.8"
      depth="0.15"
      color="#8b694a"></a-box>

    <a-text value="CONSECUENCIAS"
      position="4.3 2.55 -6.48"
      align="center"
      width="3"
      color="#ffffff"></a-text>

    <a-text
      value="Fin de la monarquía absoluta\nCambios políticos y sociales\nDifusión de ideas de libertad\nInfluencia en otros países"
      position="4.3 1.95 -6.48"
      align="center"
      width="3"
      color="#ffffff"></a-text>

    <!-- PORTAL DE ENTRADA -->
    <a-box position="0 1.5 -4.8"
      width="3.8"
      height="2.8"
      depth="0.2"
      color="#9a7855"></a-box>

    <a-box position="0 1.5 -4.65"
      width="3.35"
      height="2.45"
      depth="0.12"
      color="#344e59"></a-box>

    <a-box class="clickable"
      data-go="revolution"
      position="0 1.35 -4.5"
      width="3"
      height="0.8"
      depth="0.15"
      color="#bd7846">

      <a-text value="ENTRAR A LA EXPERIENCIA"
        position="0 0 0.1"
        align="center"
        width="3.5"
        color="#ffffff"></a-text>

    </a-box>

    <!-- INDICACIÓN -->
    <a-text value="Explora la Revolución francesa"
      position="0 2.2 -4.45"
      align="center"
      width="4"
      color="#ffffff"></a-text>

    <!-- REGRESAR -->
    <a-box class="clickable"
      data-go="classroom"
      position="-5 1.2 -4"
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

    <!-- INDICACIÓN INFERIOR -->
    <a-text value="Aprender historia es comprender nuestro presente"
      position="0 0.7 -3"
      align="center"
      width="7"
      color="#46565b"></a-text>

  `;
}


// ==================================
// COLUMNAS DECORATIVAS
// ==================================

function column(x) {
  return `
    <a-box position="${x} 2.8 -6.65"
      width="0.35"
      height="5.3"
      depth="0.35"
      color="#b9a27f"></a-box>

    <a-box position="${x} 5.5 -6.65"
      width="0.65"
      height="0.2"
      depth="0.5"
      color="#b9a27f"></a-box>

    <a-box position="${x} 0.15 -6.65"
      width="0.65"
      height="0.2"
      depth="0.5"
      color="#b9a27f"></a-box>
  `;
}
