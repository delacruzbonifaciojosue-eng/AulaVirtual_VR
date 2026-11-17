export function renderRevolution(world) {
  world.innerHTML = `
    <a-sky color="#9bb5c8"></a-sky>

    <!-- Terreno -->
    <a-plane rotation="-90 0 0"
      width="40" height="40"
      color="#897e70"></a-plane>

    <!-- Edificios -->
    <a-box position="-7 3 -12"
      width="6" height="6" depth="5"
      color="#b5a18a"></a-box>

    <a-box position="7 3 -12"
      width="6" height="6" depth="5"
      color="#c1ae96"></a-box>

    <a-box position="0 4 -18"
      width="9" height="8" depth="5"
      color="#a38d74"></a-box>

    <!-- Título -->
    <a-text value="PARIS - FRANCIA - 1789"
      position="0 5 2"
      align="center" width="8"
      color="#ffffff"></a-text>

    <a-text value="Explora las perspectivas de la sociedad francesa"
      position="0 4.3 2"
      align="center" width="7"
      color="#ffffff"></a-text>

    <!-- Personajes -->
    ${character("NOBLEZA", -5, 0.9, -5, "#875a8f", "noble")}
    ${character("BURGUESIA", 0, 0.9, -5, "#397a9d", "bourgeois")}
    ${character("TERCER ESTADO", 5, 0.9, -5, "#a66a36", "third-estate")}

    <!-- Plaza -->
    <a-cylinder position="0 0.05 -5"
      radius="2" height="0.1"
      color="#a69b8a"></a-cylinder>

    <!-- Regreso -->
    <a-entity class="clickable"
      data-go="museum"
      position="0 1.2 3">

      <a-box width="2.5" height="0.6" depth="0.15"
        color="#405b72"></a-box>

      <a-text value="REGRESAR AL MUSEO"
        position="0 0 0.1"
        align="center" width="3.5"
        color="#ffffff"></a-text>
    </a-entity>
  `;
}


function character(name, x, y, z, color, destination) {
  return `
    <a-entity
      data-go="${destination}"
      position="${x} ${y} ${z}">

      <!-- Cuerpo -->
      <a-cylinder
        class="clickable"
        position="0 0.65 0"
        radius="0.35"
        height="1.3"
        color="${color}">
      </a-cylinder>

      <!-- Cabeza -->
      <a-sphere
        class="clickable"
        position="0 1.55 0"
        radius="0.3"
        color="#d8b69b">
      </a-sphere>

      <!-- Sombrero -->
      <a-box
        class="clickable"
        position="0 1.95 0"
        width="0.7"
        height="0.25"
        depth="0.5"
        color="${color}">
      </a-box>

      <!-- Nombre -->
      <a-text
        value="${name}"
        position="0 2.4 0"
        align="center"
        width="4"
        color="#ffffff">
      </a-text>

    </a-entity>
  `;
}
