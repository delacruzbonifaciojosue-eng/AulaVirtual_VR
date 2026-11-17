export function renderClassroom(world) {
  world.innerHTML = `
    <a-sky color="#172538"></a-sky>

    <!-- Piso -->
    <a-plane rotation="-90 0 0"
      width="24" height="24"
      color="#77736d"></a-plane>

    <!-- Pared trasera -->
    <a-box position="0 3 -7"
      width="16" height="6" depth="0.3"
      color="#d6d0c5"></a-box>

    <!-- Paredes laterales -->
    <a-box position="-8 3 0"
      width="0.3" height="6" depth="14"
      color="#c7c1b6"></a-box>

    <a-box position="8 3 0"
      width="0.3" height="6" depth="14"
      color="#c7c1b6"></a-box>

    <!-- Pizarra -->
    <a-box position="0 3.4 -6.75"
      width="9" height="3.5" depth="0.12"
      color="#172e35"></a-box>

    <a-text value="EDUVR CLASSROOM"
      position="0 4.7 -6.65"
      align="center" width="8"
      color="#ffffff"></a-text>

    <a-text value="Selecciona una materia"
      position="0 4.1 -6.65"
      align="center" width="7"
      color="#d7e9ef"></a-text>

    <!-- Materias -->
    ${subjectButton("HISTORIA", -3.1, 3.0, -6.55, "#b87940", "museum")}
    ${subjectButton("MATEMÁTICAS", 0, 3.0, -6.55, "#2876a8", "coming")}
    ${subjectButton("BIOLOGÍA", 3.1, 3.0, -6.55, "#34885a", "coming")}

    ${subjectButton("QUÍMICA", -3.1, 1.9, -6.55, "#8b5cb1", "coming")}
    ${subjectButton("FÍSICA", 0, 1.9, -6.55, "#bd9a36", "coming")}
    ${subjectButton("GEOGRAFÍA", 3.1, 1.9, -6.55, "#368b87", "coming")}

    <!-- Escritorio del profesor -->
    <a-box position="0 0.7 -3.5"
      width="4" height="0.2" depth="1.2"
      color="#60442e"></a-box>

    <!-- Ventanas laterales -->
    <a-box position="-7.8 3.5 -2"
      width="0.08" height="2.4" depth="3"
      color="#6c9fb7"></a-box>

    <a-box position="7.8 3.5 -2"
      width="0.08" height="2.4" depth="3"
      color="#6c9fb7"></a-box>

    <!-- Información -->
    <a-text value="Bienvenido a tu aula virtual"
      position="0 2.1 2"
      align="center" width="7"
      color="#ffffff"></a-text>
  `;
}

function subjectButton(name, x, y, z, color, destination) {
  return `
    <a-entity class="clickable"
      data-go="${destination}"
      position="${x} ${y} ${z}"
      geometry="primitive: box; width: 2.7; height: 0.75; depth: 0.12"
      material="color: ${color}; metalness: 0.1; roughness: 0.8"
      animation__hover="property: scale; to: 1.06 1.06 1.06; startEvents: mouseenter; dur: 150"
      animation__leave="property: scale; to: 1 1 1; startEvents: mouseleave; dur: 150">

      <a-text value="${name}"
        align="center"
        position="0 0 0.08"
        width="3.8"
        color="#ffffff"></a-text>
    </a-entity>
  `;
}