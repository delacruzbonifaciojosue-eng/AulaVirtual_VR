
export function renderClassroom(world) {
  world.innerHTML = `
    <!-- ILUMINACIÓN LIGERA -->
    <a-light type="ambient"
      color="#ffffff"
      intensity="0.85"></a-light>

    <a-light type="directional"
      color="#ffffff"
      intensity="0.45"
      position="-3 6 4"></a-light>

    <!-- CIELO -->
    <a-sky color="#b9d8e8"></a-sky>

    <!-- PISO -->
    <a-plane rotation="-90 0 0"
      width="24"
      height="24"
      color="#c4cbd0"
      material="roughness: 1"></a-plane>

    <!-- TECHO -->
    <a-plane position="0 6 0"
      rotation="90 0 0"
      width="16"
      height="14"
      color="#edf1f2"></a-plane>

    <!-- PAREDES -->
    <a-box position="0 3 -7"
      width="16"
      height="6"
      depth="0.3"
      color="#e8e5dc"></a-box>

    <a-box position="-8 3 0"
      width="0.3"
      height="6"
      depth="14"
      color="#dce6e9"></a-box>

    <a-box position="8 3 0"
      width="0.3"
      height="6"
      depth="14"
      color="#dce6e9"></a-box>

    <!-- FRANJA DECORATIVA TRASERA -->
    <a-box position="0 0.35 -6.82"
      width="15.8"
      height="0.7"
      depth="0.08"
      color="#6a9ca9"></a-box>

    <!-- PIZARRÓN -->
    <a-box position="0 3.5 -6.76"
      width="9.8"
      height="3.8"
      depth="0.12"
      color="#244b50"></a-box>

    <!-- MARCO DEL PIZARRÓN -->
    <a-box position="0 5.43 -6.66"
      width="10"
      height="0.12"
      depth="0.08"
      color="#b9a27b"></a-box>

    <a-box position="0 1.57 -6.66"
      width="10"
      height="0.12"
      depth="0.08"
      color="#b9a27b"></a-box>

    <!-- ENCABEZADO -->
    <a-text value="EDUVR CLASSROOM"
      position="0 5.0 -6.64"
      align="center"
      width="8"
      color="#ffffff"
      font="roboto"></a-text>

    <a-text value="¡APRENDE, EXPLORA Y DESCUBRE!"
      position="0 4.5 -6.64"
      align="center"
      width="7"
      color="#b9e6e9"></a-text>

    <a-text value="Selecciona una materia"
      position="0 4.0 -6.64"
      align="center"
      width="7"
      color="#ffffff"></a-text>

    <!-- MATERIAS -->
    ${subjectButton("HISTORIA", -3.1, 3.0, -6.55, "#bd7846", "museum")}
    ${subjectButton("MATEMÁTICAS", 0, 3.0, -6.55, "#397eb4", "coming")}
    ${subjectButton("BIOLOGÍA", 3.1, 3.0, -6.55, "#438e65", "coming")}

    ${subjectButton("QUÍMICA", -3.1, 1.95, -6.55, "#8b69b4", "coming")}
    ${subjectButton("FÍSICA", 0, 1.95, -6.55, "#b99a43", "coming")}
    ${subjectButton("GEOGRAFÍA", 3.1, 1.95, -6.55, "#398f91", "coming")}

    <!-- ESCRITORIO DEL PROFESOR -->
    <a-box position="0 0.85 -3.8"
      width="3.5"
      height="0.18"
      depth="1.3"
      color="#9b704d"></a-box>

    <a-box position="0 0.42 -3.8"
      width="3.2"
      height="0.7"
      depth="1.05"
      color="#785438"></a-box>

    <!-- MESA DE ALUMNOS -->
    ${studentDesk(-3.4, -0.2)}
    ${studentDesk(3.4, -0.2)}
    ${studentDesk(-3.4, -2.1)}
    ${studentDesk(3.4, -2.1)}

    <!-- VENTANAS -->
    <a-box position="-7.78 3.7 -1.5"
      width="0.06"
      height="2.4"
      depth="3"
      color="#9ed5e5"
      material="roughness: 0.4"></a-box>

    <a-box position="7.78 3.7 -1.5"
      width="0.06"
      height="2.4"
      depth="3"
      color="#9ed5e5"
      material="roughness: 0.4"></a-box>

    <!-- MARCOS DE VENTANAS -->
    <a-box position="-7.7 3.7 -1.5"
      width="0.12"
      height="2.6"
      depth="3.2"
      color="#ffffff"
      material="wireframe: true"></a-box>

    <a-box position="7.7 3.7 -1.5"
      width="0.12"
      height="2.6"
      depth="3.2"
      color="#ffffff"
      material="wireframe: true"></a-box>

    <!-- PANEL DE BIENVENIDA -->
    <a-box position="0 2.6 3.6"
      width="5.5"
      height="1.1"
      depth="0.12"
      color="#397b8d"></a-box>

    <a-text value="¡BIENVENIDO!"
      position="0 2.8 3.68"
      align="center"
      width="5"
      color="#ffffff"></a-text>

    <a-text value="Tu aventura de aprendizaje comienza aquí"
      position="0 2.4 3.68"
      align="center"
      width="5"
      color="#ffffff"></a-text>
  `;
}


// ==================================
// BOTONES DE MATERIAS
// ==================================

function subjectButton(name, x, y, z, color, destination) {
  return `
    <a-entity class="clickable"
      data-go="${destination}"
      position="${x} ${y} ${z}"
      geometry="primitive: box; width: 2.7; height: 0.75; depth: 0.12"
      material="color: ${color}; roughness: 1"
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


// ==================================
// MESAS DE ALUMNOS
// ==================================

function studentDesk(x, z) {
  return `
    <!-- Superficie -->
    <a-box position="${x} 0.85 ${z}"
      width="1.8"
      height="0.12"
      depth="1"
      color="#bd956d"></a-box>

    <!-- Soporte -->
    <a-box position="${x} 0.43 ${z}"
      width="0.16"
      height="0.75"
      depth="0.16"
      color="#777f84"></a-box>

    <!-- Asiento -->
    <a-box position="${x} 0.48 ${z + 0.85}"
      width="0.9"
      height="0.12"
      depth="0.75"
      color="#527e91"></a-box>
  `;
}
