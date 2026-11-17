
import { renderClassroom } from "./scenes/classroom.js";
import { renderMuseum } from "./scenes/museum.js";
import { renderRevolution } from "./scenes/french-revolution.js";

const scene = document.querySelector("a-scene");
const world = document.querySelector("#world");

// ==========================================
// CONTENIDO HISTORICO DE LOS PERSONAJES
// ==========================================

const dialogues = {

  noble: {
    name: "REPRESENTANTE DE LA NOBLEZA",
    introduction:
      "Nuestra familia posee tierras y privilegios heredados. Durante generaciones hemos tenido una posicion privilegiada dentro de la sociedad francesa. La crisis economica amenaza nuestros beneficios.",

    question:
      "Ante las demandas de igualdad, ¿que postura deberiamos adoptar?",

    answers: [
      {
        text: "A. Conservar nuestros privilegios.",
        feedback:
          "Esta postura representa a los sectores privilegiados que buscaban mantener el orden tradicional y sus beneficios."
      },
      {
        text: "B. Aceptar la igualdad juridica.",
        feedback:
          "Esta postura supone renunciar a privilegios legales heredados y aceptar una transformacion del sistema social."
      },
      {
        text: "C. Compartir el poder politico.",
        feedback:
          "Esta propuesta implica abrir la participacion politica a otros sectores de la sociedad."
      }
    ]
  },

  bourgeois: {
    name: "REPRESENTANTE DE LA BURGUESIA",
    introduction:
      "Tenemos negocios, propiedades y educacion. Contribuimos a la economia francesa, pero nuestro poder politico no corresponde a nuestra importancia economica. Consideramos injusto que el nacimiento determine los privilegios.",

    question:
      "¿Que cambio consideras que deberia realizarse?",

    answers: [
      {
        text: "A. Mantener los privilegios de nacimiento.",
        feedback:
          "Esta opcion conserva las desigualdades juridicas del Antiguo Regimen y no responde a las demandas de igualdad de la burguesia."
      },
      {
        text: "B. Establecer igualdad ante la ley.",
        feedback:
          "Correcto. La igualdad juridica fue una de las principales demandas revolucionarias. La burguesia buscaba terminar con los privilegios legales heredados."
      },
      {
        text: "C. Permitir que solo la nobleza gobierne.",
        feedback:
          "Esta propuesta mantiene el sistema politico privilegiado que la burguesia cuestionaba."
      }
    ]
  },

  "third-estate": {
    name: "REPRESENTANTE DE LOS SECTORES POPULARES",
    introduction:
      "Somos campesinos, artesanos y trabajadores urbanos. Muchos enfrentamos dificultades para conseguir alimentos y debemos soportar numerosas cargas fiscales. La crisis economica hace cada vez mas dificil nuestra vida cotidiana.",

    question:
      "¿Cual consideras que es nuestra principal exigencia?",

    answers: [
      {
        text: "A. Aumentar los impuestos al pueblo.",
        feedback:
          "Esta medida agravaria las dificultades economicas de los sectores populares."
      },
      {
        text: "B. Reducir las cargas injustas y mejorar las condiciones de vida.",
        feedback:
          "Correcto. Las dificultades economicas, los impuestos y el precio del pan alimentaron el descontento popular."
      },
      {
        text: "C. Conservar los privilegios fiscales.",
        feedback:
          "Esta opcion mantiene una de las desigualdades que provocaban el descontento social."
      }
    ]
  }

};

// ==========================================
// SISTEMA DE NAVEGACION
// ==========================================

function navigate(destination) {

  console.log("Navegando a:", destination);

  closeDialogue();

  switch (destination) {

    case "classroom":
      renderClassroom(world);
      break;

    case "museum":
      renderMuseum(world);
      break;

    case "revolution":
      renderRevolution(world);
      break;

    case "noble":
    case "bourgeois":
    case "third-estate":
      showDialogue(destination);
      break;

    case "coming":
      console.log("Materia proximamente disponible");
      break;

    default:
      console.warn("Destino desconocido:", destination);
  }
}

// ==========================================
// CREAR PANEL DE DIALOGO 3D
// ==========================================

function showDialogue(characterId) {

  const character = dialogues[characterId];

  if (!character) return;

  closeDialogue();

  const panel = document.createElement("a-entity");

  panel.id = "dialogue-panel";

panel.setAttribute("position", "0 1.6 -2.5");

panel.setAttribute("data-character", characterId);

  panel.innerHTML = `

  <!-- Boton para cerrar -->
<a-box
  class="clickable"
  data-dialog-close="true"
  position="2.2 1.65 0.12"
  width="0.4"
  height="0.4"
  depth="0.12"
  color="#a94442">
</a-box>

<a-text
  value="X"
  position="2.2 1.65 0.21"
  align="center"
  color="#ffffff"
  width="2">
</a-text>

    <!-- Fondo del panel -->
    <a-box
      position="0 0.35 -0.05"
      width="5"
      height="3.6"
      depth="0.12"
      color="#182c40"
      material="opacity: 0.97; transparent: true">
    </a-box>

    <!-- Nombre -->
    <a-text
      value="${character.name}"
      position="-2.25 1.85 0.04"
      width="5.2"
      color="#f1c77a"
      align="left">
    </a-text>

    <!-- Presentacion -->
    <a-text
      value="${character.introduction}"
      position="-2.2 1.15 0.04"
      width="4.4"
      color="#ffffff"
      wrap-count="65"
      align="left">
    </a-text>

    <!-- Pregunta -->
    <a-text
      value="${character.question}"
      position="-2.2 0.15 0.04"
      width="4.4"
      color="#f1c77a"
      wrap-count="65"
      align="left">
    </a-text>

    <!-- Respuesta A -->
    <a-box
      class="clickable"
      data-dialog-choice="0"
      position="0 -0.25 0.12"
      width="4.5"
      height="0.38"
      depth="0.12"
      color="#42617b">
    </a-box>

    <a-text
      value="${character.answers[0].text}"
      position="-2.1 -0.25 0.20"
      width="4.3"
      color="#ffffff">
    </a-text>

    <!-- Respuesta B -->
    <a-box
      class="clickable"
      data-dialog-choice="1"
      position="0 -0.70 0.12"
      width="4.5"
      height="0.38"
      depth="0.12"
      color="#42617b">
    </a-box>

    <a-text
      value="${character.answers[1].text}"
      position="-2.1 -0.70 0.20"
      width="4.3"
      color="#ffffff">
    </a-text>

    <!-- Respuesta C -->
    <a-box
      class="clickable"
      data-dialog-choice="2"
      position="0 -1.15 0.12"
      width="4.5"
      height="0.38"
      depth="0.12"
      color="#42617b">
    </a-box>

    <a-text
      value="${character.answers[2].text}"
      position="-2.1 -1.15 0.20"
      width="4.3"
      color="#ffffff">
    </a-text>

  `;

  world.appendChild(panel);
}

// ==========================================
// MOSTRAR RETROALIMENTACION
// ==========================================

function showFeedback(characterId, choiceIndex) {

  const character = dialogues[characterId];

  const answer = character.answers[choiceIndex];

  const panel = document.querySelector("#dialogue-panel");

  if (!panel || !answer) return;

  panel.innerHTML = `

    <a-box
      position="0 0.35 -0.05"
      width="5"
      height="3.6"
      depth="0.12"
      color="#182c40">
    </a-box>
<a-box
  class="clickable"
  data-dialog-close="true"
  position="2.2 1.65 0.12"
  width="0.4"
  height="0.4"
  depth="0.12"
  color="#a94442">
</a-box>

<a-text
  value="X"
  position="2.2 1.65 0.21"
  align="center"
  color="#ffffff"
  width="2">
</a-text>
    <a-text
      value="ANALISIS HISTORICO"
      position="-2.2 1.75 0.04"
      width="5"
      color="#f1c77a">
    </a-text>

    <a-text
      value="${answer.feedback}"
      position="-2.15 0.9 0.04"
      width="4.3"
      color="#ffffff"
      wrap-count="65">
    </a-text>

    <a-box
      class="clickable"
      data-dialog-close="true"
      position="0 -0.85 0.12"
      width="2.5"
      height="0.55"
      depth="0.12"
      color="#368b67">
    </a-box>

    <a-text
      value="CONTINUAR"
      position="0 -0.85 0.22"
      align="center"
      width="3"
      color="#ffffff">
    </a-text>

  `;
}

// ==========================================
// CERRAR DIALOGO
// ==========================================

function closeDialogue() {

  const panel = document.querySelector("#dialogue-panel");

  if (panel) {
    panel.remove();
  }
}

// ==========================================
// DETECCION DE INTERACCIONES
// ==========================================

let lastInteraction = 0;

world.addEventListener("click", (event) => {

  const now = Date.now();

  if (now - lastInteraction < 350) return;

  const target = event.target.closest(
    "[data-go], [data-dialog-choice], [data-dialog-close]"
  );

  if (!target) return;

  lastInteraction = now;

  // Seleccionar respuesta
  if (target.hasAttribute("data-dialog-choice")) {

    const choice = Number(
      target.getAttribute("data-dialog-choice")
    );

    const characterId = document
      .querySelector("#dialogue-panel")
      ?.getAttribute("data-character");

    if (characterId) {
      showFeedback(characterId, choice);
    }

    return;
  }

  // Cerrar dialogo
  if (target.hasAttribute("data-dialog-close")) {

    closeDialogue();
    return;
  }

  // Navegacion normal
  const destination = target.getAttribute("data-go");

  if (destination) {
    navigate(destination);
  }

});

// ==========================================
// INICIALIZACION
// ==========================================

function initialize() {

  console.log("EduVR Classroom iniciado correctamente");

  renderClassroom(world);

}

if (scene.hasLoaded) {

  initialize();

} else {

  scene.addEventListener("loaded", initialize, {
    once: true
  });

}
