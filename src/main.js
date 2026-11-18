
import { renderClassroom } from "./scenes/classroom.js";
import { renderMuseum } from "./scenes/museum.js";
import { renderRevolution } from "./scenes/french-revolution.js";

const scene = document.querySelector("a-scene");
const world = document.querySelector("#world");

// ==========================================
// REGISTRO DE APRENDIZAJE DE LA SESION 1
// ==========================================

const learningRecord = {
  session: 1,
  topic: "La sociedad del Antiguo Regimen",
  answers: [],
  completedCharacters: []
};

// ==========================================
// CONTENIDO HISTORICO
// SESION 1: EL ANTIGUO REGIMEN
// ==========================================

const dialogues = {

  noble: {
    name: "REPRESENTANTE DE LA NOBLEZA",

    steps: [

      {
        type: "info",
        title: "UNA SOCIEDAD HEREDADA",
        text:
          "Mi familia pertenece a la nobleza desde hace generaciones. Nuestra posicion social se transmite por nacimiento. Poseemos tierras, recibimos rentas y ocupamos posiciones importantes dentro de la sociedad francesa. Este sistema existe desde hace mucho tiempo."
      },

      {
        type: "document",
        title: "LOS PRIVILEGIOS DE LA NOBLEZA",
        document:
          "Durante el Antiguo Regimen, la nobleza disfrutaba de privilegios juridicos, sociales y fiscales. Algunos nobles estaban exentos de ciertos impuestos directos y tenian acceso preferente a cargos y honores.",
        context:
          "Sin embargo, no todos los nobles eran igualmente ricos. Existian grandes diferencias economicas dentro del propio estamento."
      },

      {
        type: "question",
        prompt:
          "Un campesino trabaja una tierra y debe pagar rentas y obligaciones a su señor. ¿Que diferencia observas entre su situacion y la de una familia noble?",

        answers: [

          {
            text: "A. Ambos tienen las mismas obligaciones.",
            feedback:
              "No necesariamente. El sistema feudal y los privilegios del Antiguo Regimen establecian obligaciones y derechos diferentes segun la posicion social."
          },

          {
            text: "B. La posicion de nacimiento influye en sus derechos y obligaciones.",
            feedback:
              "Tu observacion es importante. El nacimiento condicionaba la posicion juridica y social. Un campesino y un noble no disfrutaban de las mismas condiciones."
          },

          {
            text: "C. El campesino siempre tiene mas privilegios.",
            feedback:
              "La evidencia historica muestra lo contrario: los sectores privilegiados disfrutaban de ventajas que no estaban disponibles para la mayoria de la poblacion."
          }
        ]
      },

      {
        type: "info",
        title: "UNA DEFENSA DEL ORDEN TRADICIONAL",
        text:
          "Considero que la sociedad debe conservar sus tradiciones. La nobleza ha cumplido funciones militares, administrativas y politicas. Si desaparecen nuestros privilegios, ¿que garantizara la estabilidad del reino?"
      },

      {
        type: "question",
        prompt:
          "¿Que argumento utiliza el noble para justificar la conservacion de sus privilegios?",

        answers: [

          {
            text: "A. Que todos deben tener exactamente la misma riqueza.",
            feedback:
              "El personaje no defiende la igualdad economica. Su argumento se apoya en la tradicion y en las funciones que historicamente ha tenido la nobleza."
          },

          {
            text: "B. Que la tradicion y el orden social justifican su posicion.",
            feedback:
              "Exactamente. La nobleza podia justificar su posicion apelando a la tradicion, el nacimiento y las funciones que desempeñaba dentro del reino."
          },

          {
            text: "C. Que la sociedad debe eliminar todos los estamentos.",
            feedback:
              "Esta propuesta cuestionaria el sistema del que el personaje obtiene sus privilegios. No representa su postura."
          }
        ]
      },

      {
        type: "conclusion",
        title: "PRIMER TESTIMONIO COMPLETADO",
        text:
          "Has conocido la perspectiva de un integrante de la nobleza. Recuerda sus argumentos: nacimiento, tradicion, privilegios y estabilidad social. Comparalos con los testimonios de los otros sectores."
      }

    ]
  },

  bourgeois: {
    name: "REPRESENTANTE DE LA BURGUESIA",

    steps: [

      {
        type: "info",
        title: "RIQUEZA SIN IGUALDAD POLITICA",
        text:
          "Soy comerciante y propietario. Mi actividad economica me ha permitido adquirir riqueza y educacion. Sin embargo, mi origen familiar no pertenece a la nobleza. Aunque contribuimos a la economia, nuestra posicion social no nos permite disfrutar de todos sus privilegios."
      },

      {
        type: "document",
        title: "UNA SOCIEDAD DE ESTAMENTOS",
        document:
          "La sociedad francesa del Antiguo Regimen se organizaba en tres estamentos: clero, nobleza y tercer estado. La burguesia formaba parte del tercer estado, aunque algunos de sus integrantes tenian una considerable riqueza.",
        context:
          "La riqueza economica no significaba automaticamente pertenecer a la nobleza ni disfrutar de sus privilegios juridicos."
      },

      {
        type: "question",
        prompt:
          "Un comerciante posee mas dinero que un noble empobrecido. ¿Que podemos deducir de esta situacion?",

        answers: [

          {
            text: "A. La riqueza y el privilegio de nacimiento son cosas diferentes.",
            feedback:
              "Correcto. La riqueza economica y la posicion juridica no eran equivalentes. El nacimiento podia determinar privilegios que el dinero por si solo no otorgaba."
          },

          {
            text: "B. Todo comerciante rico se convierte automaticamente en noble.",
            feedback:
              "No. La riqueza no convertia automaticamente a una persona en noble. Existian distintas formas de adquirir titulos, pero no era una consecuencia directa de tener dinero."
          },

          {
            text: "C. Todos los integrantes del tercer estado eran pobres.",
            feedback:
              "Esta afirmacion es incorrecta. El tercer estado era muy diverso e incluia campesinos, trabajadores urbanos y burgueses con importantes recursos economicos."
          }
        ]
      },

      {
        type: "info",
        title: "EL PROBLEMA DE LA REPRESENTACION",
        text:
          "No cuestiono solamente las diferencias economicas. Tambien me pregunto por que los privilegios de nacimiento deben determinar quien puede acceder a los cargos y participar en las decisiones del reino. Considero que la contribucion y la capacidad deberian tener mayor importancia."
      },

      {
        type: "question",
        prompt:
          "¿Que contradiccion identifica el comerciante dentro del sistema social?",

        answers: [

          {
            text: "A. Tener riqueza no garantiza tener los mismos derechos y privilegios.",
            feedback:
              "Esa es una contradiccion importante. La posicion economica de algunos burgueses no se correspondia con su reconocimiento politico y juridico."
          },

          {
            text: "B. Todos los comerciantes controlaban el gobierno.",
            feedback:
              "No. La burguesia tenia influencia economica, pero no controlaba de manera general el poder politico del reino."
          },

          {
            text: "C. La nobleza no tenia ninguna ventaja social.",
            feedback:
              "La nobleza conservaba importantes privilegios. Precisamente esas diferencias eran cuestionadas por sectores de la burguesia."
          }
        ]
      },

      {
        type: "conclusion",
        title: "SEGUNDO TESTIMONIO COMPLETADO",
        text:
          "Has identificado una diferencia entre riqueza, nacimiento y poder politico. Conserva esta idea: una persona podia tener recursos economicos sin disfrutar de los mismos privilegios que otra por su origen familiar."
      }

    ]
  },

  "third-estate": {
    name: "REPRESENTANTE DE LOS SECTORES POPULARES",

    steps: [

      {
        type: "info",
        title: "LA MAYORIA DE LA POBLACION",
        text:
          "Soy parte del tercer estado. En el se encuentran campesinos, artesanos, trabajadores urbanos y burgueses. Nuestras vidas son muy distintas, pero compartimos una posicion juridica que nos diferencia de los estamentos privilegiados."
      },

      {
        type: "document",
        title: "OBLIGACIONES Y CARGAS",
        document:
          "Gran parte de la poblacion campesina debia pagar impuestos a la monarquia y, segun la region y las condiciones locales, rentas u otras obligaciones señoriales. El clero y la nobleza disfrutaban de diferentes privilegios fiscales.",
        context:
          "Las obligaciones no eran identicas para todas las personas. La situacion variaba segun la region, la actividad y la condicion social."
      },

      {
        type: "question",
        prompt:
          "¿Que consecuencia podia tener una distribucion desigual de las cargas fiscales?",

        answers: [

          {
            text: "A. Todos los sectores tendrian las mismas condiciones.",
            feedback:
              "No. Una distribucion desigual de las cargas fiscales podia aumentar las diferencias y provocar descontento entre quienes soportaban mayores obligaciones."
          },

          {
            text: "B. Los sectores con mayores obligaciones podian sentirse perjudicados.",
            feedback:
              "Correcto. Cuando las cargas recaian de forma desigual sobre la poblacion, aumentaba la percepcion de injusticia y el descontento social."
          },

          {
            text: "C. Desaparecerian automaticamente los privilegios.",
            feedback:
              "El descontento no eliminaba por si mismo los privilegios. Para transformar el sistema se necesitaban cambios politicos y sociales."
          }
        ]
      },

      {
        type: "info",
        title: "EL PRECIO DEL PAN",
        text:
          "Cuando las cosechas son malas, conseguir alimentos se vuelve mas dificil. Si el precio del pan aumenta, una familia que destina gran parte de sus ingresos a alimentarse puede quedar en una situacion desesperada. No todos tenemos ahorros o propiedades para resistir una crisis."
      },

      {
        type: "question",
        prompt:
          "¿Por que el aumento del precio del pan podia convertirse en un problema politico?",

        answers: [

          {
            text: "A. Porque afectaba la vida cotidiana y aumentaba el descontento.",
            feedback:
              "Correcto. La escasez y el encarecimiento del pan afectaban directamente la subsistencia de muchas familias y podian alimentar protestas y conflictos."
          },

          {
            text: "B. Porque solamente afectaba a los nobles.",
            feedback:
              "No. Los sectores populares eran especialmente vulnerables a las variaciones del precio de los alimentos, debido a sus limitados recursos."
          },

          {
            text: "C. Porque el precio de los alimentos no tenia relacion con la sociedad.",
            feedback:
              "Los alimentos eran fundamentales para la vida cotidiana. Su precio podia influir en la estabilidad social y en la legitimidad de las autoridades."
          }
        ]
      },

      {
        type: "conclusion",
        title: "TERCER TESTIMONIO COMPLETADO",
        text:
          "Has conocido algunas dificultades de los sectores populares. Recuerda que el tercer estado no era un grupo homogeneo: sus integrantes compartian ciertas condiciones juridicas, pero tenian recursos, intereses y necesidades diferentes."
      }

    ]
  }

};

// ==========================================
// ESTADO DEL DIALOGO ACTUAL
// ==========================================

let currentDialogue = null;
let lastInteraction = 0;

// ==========================================
// UTILIDAD PARA TEXTO EN A-FRAME
// ==========================================

function safeText(value) {

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// ==========================================
// NAVEGACION
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
// ABRIR CONVERSACION
// ==========================================

function showDialogue(characterId) {

  const character = dialogues[characterId];

  if (!character) return;

  closeDialogue();

  currentDialogue = {
    characterId,
    stepIndex: 0,
    mode: "content",
    selectedAnswer: null
  };

  const panel = document.createElement("a-entity");

  panel.id = "dialogue-panel";
  panel.setAttribute("position", "0 1.6 -2.5");
  panel.setAttribute("data-character", characterId);

  world.appendChild(panel);

  renderDialogueStep();
}

// ==========================================
// ESTRUCTURA VISUAL DEL PANEL
// ==========================================

function panelBase(title) {

  return `

    <a-box
      position="0 0.25 -0.05"
      width="5.1"
      height="3.8"
      depth="0.12"
      color="#182c40"
      material="opacity: 0.98; transparent: true">
    </a-box>

    <a-text
      value="${safeText(title)}"
      position="-2.25 1.75 0.04"
      width="5"
      color="#f1c77a"
      align="left"
      wrap-count="40">
    </a-text>

    <a-box
      class="clickable"
      data-dialog-close="true"
      position="2.25 1.72 0.13"
      width="0.38"
      height="0.38"
      depth="0.12"
      color="#a94442">
    </a-box>

    <a-text
      value="X"
      position="2.25 1.72 0.22"
      align="center"
      color="#ffffff"
      width="2">
    </a-text>

  `;
}

// ==========================================
// BOTON CONTINUAR
// ==========================================

function continueButton(label = "CONTINUAR") {

  return `

    <a-box
      class="clickable"
      data-dialog-next="true"
      position="0 -1.25 0.13"
      width="2.6"
      height="0.48"
      depth="0.12"
      color="#368b67">
    </a-box>

    <a-text
      value="${safeText(label)}"
      position="0 -1.25 0.22"
      align="center"
      color="#ffffff"
      width="3">
    </a-text>

  `;
}

// ==========================================
// MOSTRAR ETAPA DEL DIALOGO
// ==========================================

function renderDialogueStep() {

  if (!currentDialogue) return;

  const character = dialogues[currentDialogue.characterId];
  const step = character.steps[currentDialogue.stepIndex];

  const panel = document.querySelector("#dialogue-panel");

  if (!panel || !step) return;

  currentDialogue.mode = "content";
  currentDialogue.selectedAnswer = null;

  let content = "";

  // ----------------------------------------
  // INFORMACION HISTORICA
  // ----------------------------------------

  if (step.type === "info") {

    content = `

      <a-text
        value="${safeText(step.text)}"
        position="-2.2 0.9 0.04"
        width="4.4"
        color="#ffffff"
        wrap-count="58"
        align="left">
      </a-text>

      ${continueButton()}

    `;
  }

  // ----------------------------------------
  // DOCUMENTO HISTORICO
  // ----------------------------------------

  else if (step.type === "document") {

    content = `

      <a-box
        position="0 0.25 0.04"
        width="4.4"
        height="1.2"
        depth="0.05"
        color="#d8c9a7">
      </a-box>

      <a-text
        value="${safeText(step.document)}"
        position="-2.05 0.65 0.08"
        width="4.05"
        color="#29251f"
        wrap-count="55"
        align="left">
      </a-text>

      <a-text
        value="CONTEXTO HISTORICO"
        position="-2.15 -0.55 0.05"
        width="4.3"
        color="#f1c77a">
      </a-text>

      <a-text
        value="${safeText(step.context)}"
        position="-2.15 -0.85 0.05"
        width="4.3"
        color="#ffffff"
        wrap-count="58">
      </a-text>

      ${continueButton()}

    `;
  }

  // ----------------------------------------
  // PREGUNTA DE ANALISIS
  // ----------------------------------------

  else if (step.type === "question") {

    content = `

      <a-text
        value="${safeText(step.prompt)}"
        position="-2.15 1.05 0.04"
        width="4.3"
        color="#ffffff"
        wrap-count="58">
      </a-text>

      ${step.answers.map((answer, index) => `

        <a-box
          class="clickable"
          data-dialog-choice="${index}"
          position="0 ${0.05 - index * 0.58} 0.13"
          width="4.5"
          height="0.48"
          depth="0.12"
          color="#42617b">
        </a-box>

        <a-text
          value="${safeText(answer.text)}"
          position="-2.12 ${0.05 - index * 0.58} 0.22"
          width="4.15"
          color="#ffffff"
          wrap-count="48">
        </a-text>

      `).join("")}

    `;
  }

  // ----------------------------------------
  // CONCLUSION DEL PERSONAJE
  // ----------------------------------------

  else if (step.type === "conclusion") {

    content = `

      <a-text
        value="${safeText(step.text)}"
        position="-2.15 0.85 0.04"
        width="4.3"
        color="#ffffff"
        wrap-count="58">
      </a-text>

      <a-text
        value="Has terminado este testimonio."
        position="-2.15 -0.45 0.04"
        width="4.3"
        color="#f1c77a">
      </a-text>

      ${continueButton(
        currentDialogue.stepIndex === character.steps.length - 1
          ? "FINALIZAR"
          : "CONTINUAR"
      )}

    `;
  }

  panel.innerHTML =
    panelBase(step.title) + content;
}

// ==========================================
// MOSTRAR RETROALIMENTACION
// ==========================================

function showFeedback(choiceIndex) {

  if (!currentDialogue) return;

  const character = dialogues[currentDialogue.characterId];
  const step = character.steps[currentDialogue.stepIndex];

  if (!step || step.type !== "question") return;

  const answer = step.answers[choiceIndex];

  if (!answer) return;

  const panel = document.querySelector("#dialogue-panel");

  if (!panel) return;

  currentDialogue.mode = "feedback";
  currentDialogue.selectedAnswer = choiceIndex;

  // Registrar respuesta del alumno

  learningRecord.answers.push({
    character: currentDialogue.characterId,
    question: step.prompt,
    answer: answer.text,
    feedback: answer.feedback
  });

  console.log("Respuesta registrada:", learningRecord.answers);

  panel.innerHTML = `

    ${panelBase("ANALISIS HISTORICO")}

    <a-text
      value="Tu respuesta:"
      position="-2.15 1.15 0.04"
      width="4.3"
      color="#f1c77a">
    </a-text>

    <a-text
      value="${safeText(answer.text)}"
      position="-2.15 0.75 0.04"
      width="4.3"
      color="#ffffff"
      wrap-count="55">
    </a-text>

    <a-text
      value="REFLEXION"
      position="-2.15 0.15 0.04"
      width="4.3"
      color="#f1c77a">
    </a-text>

    <a-text
      value="${safeText(answer.feedback)}"
      position="-2.15 -0.25 0.04"
      width="4.3"
      color="#ffffff"
      wrap-count="58">
    </a-text>

    ${continueButton()}

  `;
}

// ==========================================
// AVANZAR EN LA CONVERSACION
// ==========================================

function nextDialogueStep() {

  if (!currentDialogue) return;

  const character = dialogues[currentDialogue.characterId];

  // Si estamos mostrando retroalimentacion,
  // avanzar a la siguiente etapa.

  if (currentDialogue.mode === "feedback") {

    currentDialogue.stepIndex++;

  }

  // Si estamos en una etapa informativa
  // o documental, avanzar normalmente.

  else {

    const currentStep =
      character.steps[currentDialogue.stepIndex];

    if (currentStep.type === "conclusion") {

      learningRecord.completedCharacters.push(
        currentDialogue.characterId
      );

      console.log(
        "Personajes completados:",
        learningRecord.completedCharacters
      );

      closeDialogue();
      return;
    }

    currentDialogue.stepIndex++;
  }

  // Verificar si existen mas etapas

  if (currentDialogue.stepIndex >= character.steps.length) {

    closeDialogue();
    return;
  }

  renderDialogueStep();
}

// ==========================================
// CERRAR DIALOGO
// ==========================================

function closeDialogue() {

  const panel = document.querySelector("#dialogue-panel");

  if (panel) {
    panel.remove();
  }

  currentDialogue = null;
}

// ==========================================
// DETECCION DE INTERACCIONES
// ==========================================

world.addEventListener("click", (event) => {

  const now = Date.now();

  if (now - lastInteraction < 350) return;

  const target = event.target.closest(
    "[data-go], [data-dialog-choice], [data-dialog-close], [data-dialog-next]"
  );

  if (!target) return;

  lastInteraction = now;

  // Seleccionar respuesta

  if (target.hasAttribute("data-dialog-choice")) {

    const choice = Number(
      target.getAttribute("data-dialog-choice")
    );

    showFeedback(choice);
    return;
  }

  // Avanzar dialogo

  if (target.hasAttribute("data-dialog-next")) {

    nextDialogueStep();
    return;
  }

  // Cerrar dialogo

  if (target.hasAttribute("data-dialog-close")) {

    closeDialogue();
    return;
  }

  // Navegacion entre escenarios

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
