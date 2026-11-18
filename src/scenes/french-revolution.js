
export function renderRevolution(world) {
  world.innerHTML = `
    <a-sky color="#9bb5c8"></a-sky>

    <!-- TERRENO -->
    <a-plane rotation="-90 0 0"
      width="40" height="40"
      color="#897e70"></a-plane>

    <!-- PLAZA -->
    <a-cylinder position="0 0.06 -5"
      radius="7" height="0.12"
      color="#a69b8a"></a-cylinder>

    <!-- EDIFICIOS -->
    ${building(-9, -16, "#b99f82", "#634b3a")}
    ${building(9, -16, "#c9b49a", "#594638")}
    ${building(0, -21, "#aa9278", "#614a39")}

    <!-- FAROLES -->
    ${streetLamp(-8, -2)}
    ${streetLamp(8, -2)}
    ${streetLamp(-8, -12)}
    ${streetLamp(8, -12)}

    <!-- PUESTOS -->
    ${marketStall(-9, -7, "#a94e3d", "PAN")}
    ${marketStall(9, -7, "#d6a33d", "FRUTAS")}

    <!-- BARRILES Y CAJAS -->
    ${barrel(-7.5, -11)}
    ${barrel(7.5, -11)}
    ${woodenCrate(-8, -9)}
    ${woodenCrate(8, -9)}

    <!-- ENCABEZADO -->
    <a-box position="0 5.5 -10"
      width="12" height="2.2" depth="0.25"
      color="#34495e"></a-box>

    <a-text value="PARIS - FRANCIA - 1789"
      position="0 5.9 -9.84"
      align="center" width="10"
      color="#ffffff"></a-text>

    <a-text value="Conoce los grupos sociales antes de la Revolucion"
      position="0 5.15 -9.84"
      align="center" width="9"
      color="#f1dfc4"></a-text>

    <!-- PERSONAJES -->
    ${character("NOBLEZA", -5, 0, -5, "#743d4c", "noble")}
${character("BURGUESIA", 0, 0, -5, "#42627c", "bourgeois")}
${character("TERCER ESTADO", 5, 0, -5, "#806044", "third-estate")}

    <!-- INDICACIÓN -->
    <a-text value="ACERCATE A UN PERSONAJE PARA CONOCER SU HISTORIA"
      position="0 0.5 1"
      align="center" width="10"
      color="#ffffff"></a-text>

    <!-- REGRESO AL MUSEO -->
    <a-entity
      data-go="museum"
      position="-6 1.1 1"
      rotation="0 25 0">

      <a-box class="clickable"
        width="2.1"
        height="0.45"
        depth="0.08"
        color="#405b72">
      </a-box>

      <a-text value="< MUSEO"
        position="0 0 0.06"
        align="center"
        width="3"
        color="#ffffff">
      </a-text>

    </a-entity>
  `;
}


// ======================================
// EDIFICIOS
// ======================================

function building(x, z, wallColor, woodColor) {
  return `
    <a-entity position="${x} 0 ${z}">

      <a-box position="0 3 0"
        width="7" height="6" depth="4"
        color="${wallColor}"></a-box>

      <a-cone position="0 6.5 0"
        radius-bottom="4.4"
        radius-top="0.2"
        height="1.5"
        color="#65483a"></a-cone>

      <a-box position="0 5.9 2.05"
        width="7.3" height="0.2" depth="0.2"
        color="#80664f"></a-box>

      <a-box position="0 1.15 2.04"
        width="1.25" height="2.3" depth="0.12"
        color="${woodColor}"></a-box>

      <a-box position="0 2.35 2.13"
        width="1.5" height="0.16" depth="0.12"
        color="#d6bd91"></a-box>

      ${window(-2, 4.2, woodColor)}
      ${window(0, 4.2, woodColor)}
      ${window(2, 4.2, woodColor)}
      ${window(-2, 2.7, woodColor)}
      ${window(2, 2.7, woodColor)}

      ${balcony(-2, 2.7)}
      ${balcony(2, 2.7)}

      <a-box position="-3.45 3 2.08"
        width="0.15" height="6" depth="0.15"
        color="#d6bd91"></a-box>

      <a-box position="3.45 3 2.08"
        width="0.15" height="6" depth="0.15"
        color="#d6bd91"></a-box>

      <a-box position="-1 2.4 2.35"
        width="0.18" height="0.3" depth="0.18"
        color="#e8bd65"></a-box>

    </a-entity>
  `;
}


// ======================================
// VENTANAS
// ======================================

function window(x, y, woodColor) {
  return `
    <a-entity position="${x} ${y} 2.12">

      <a-box width="1.05" height="1.15" depth="0.12"
        color="#e3d0ae"></a-box>

      <a-box position="0 0 0.07"
        width="0.8" height="0.9" depth="0.04"
        color="#7296a6"></a-box>

      <a-box position="0 0 0.12"
        width="0.07" height="0.95" depth="0.04"
        color="${woodColor}"></a-box>

      <a-box position="0 0 0.12"
        width="0.85" height="0.07" depth="0.04"
        color="${woodColor}"></a-box>

    </a-entity>
  `;
}


// ======================================
// BALCONES
// ======================================

function balcony(x, y) {
  return `
    <a-entity position="${x} ${y} 2.45">

      <a-box position="0 -0.15 0"
        width="1.3" height="0.12" depth="0.55"
        color="#80664f"></a-box>

      <a-box position="0 0.2 0.2"
        width="1.3" height="0.08" depth="0.08"
        color="#493c32"></a-box>

      <a-box position="-0.55 0.02 0.2"
        width="0.07" height="0.35" depth="0.07"
        color="#493c32"></a-box>

      <a-box position="-0.18 0.02 0.2"
        width="0.07" height="0.35" depth="0.07"
        color="#493c32"></a-box>

      <a-box position="0.18 0.02 0.2"
        width="0.07" height="0.35" depth="0.07"
        color="#493c32"></a-box>

      <a-box position="0.55 0.02 0.2"
        width="0.07" height="0.35" depth="0.07"
        color="#493c32"></a-box>

    </a-entity>
  `;
}


// ======================================
// PERSONAJES
// ======================================


function character(name, x, y, z, color, destination) {

  // Vestimenta según el grupo social
  const outfits = {
    noble: {
      coat: "#743d4c",
      vest: "#d5b66c",
      pants: "#292c39",
      boots: "#30251f",
      hair: "#e4dfd0",
      hat: "#34313b",
      skin: "#d9ad91"
    },

    bourgeois: {
      coat: "#42627c",
      vest: "#d8c6a2",
      pants: "#393b42",
      boots: "#403126",
      hair: "#59412f",
      hat: "#49382d",
      skin: "#d9ad91"
    },

    "third-estate": {
      coat: "#806044",
      vest: "#b6a080",
      pants: "#403b35",
      boots: "#352820",
      hair: "#49372b",
      hat: "#51402f",
      skin: "#c99576"
    }
  };

  const outfit = outfits[destination];

  // Detalles especiales de cada personaje
  let accessories = "";

  if (destination === "noble") {
    accessories = `
      <!-- Peluca empolvada -->
      <a-sphere position="0 2.12 -0.02"
        scale="1.05 0.65 0.9"
        radius="0.25"
        color="#e4dfd0"></a-sphere>

      <a-sphere position="-0.22 1.98 0"
        radius="0.11"
        color="#e4dfd0"></a-sphere>

      <a-sphere position="0.22 1.98 0"
        radius="0.11"
        color="#e4dfd0"></a-sphere>

      <!-- Decoración dorada -->
      <a-box position="0 1.35 0.19"
        width="0.12" height="0.65" depth="0.025"
        color="#d5b66c"></a-box>

      <!-- Medalla -->
      <a-cylinder position="0.22 1.35 0.22"
        radius="0.09" height="0.035"
        rotation="90 0 0"
        color="#e8c76e"></a-cylinder>
    `;
  }

  if (destination === "bourgeois") {
    accessories = `
      <!-- Sombrero de comerciante -->
      <a-cylinder position="0 2.28 0"
        radius="0.3" height="0.07"
        color="#49382d"></a-cylinder>

      <a-cylinder position="0 2.43 0"
        radius="0.2" height="0.27"
        color="#49382d"></a-cylinder>

      <!-- Chaleco visible -->
      <a-box position="0 1.32 0.19"
        width="0.35" height="0.7" depth="0.035"
        color="#d8c6a2"></a-box>

      <!-- Libro de cuentas -->
      <a-box position="0.57 1.05 0.02"
        rotation="0 0 -12"
        width="0.24" height="0.34" depth="0.07"
        color="#76513a"></a-box>
    `;
  }

  if (destination === "third-estate") {
    accessories = `
      <!-- Gorro de trabajador -->
      <a-sphere position="0 2.2 0"
        scale="1.15 0.55 1"
        radius="0.25"
        color="#51402f"></a-sphere>

      <!-- Pañuelo -->
      <a-box position="0 1.68 0.02"
        width="0.45" height="0.12" depth="0.38"
        color="#a34d3e"></a-box>

      <!-- Bolsa de trabajo -->
      <a-box position="0.48 0.95 -0.08"
        width="0.28" height="0.38" depth="0.2"
        color="#95764e"></a-box>
    `;
  }

  return `
    <a-entity
      data-go="${destination}"
      position="${x} ${y} ${z}">

      <!-- ====================== -->
      <!-- PIERNAS Y PANTALONES -->
      <!-- ====================== -->

      <a-cylinder class="clickable"
        position="-0.19 0.43 0"
        radius="0.14"
        height="0.78"
        color="${outfit.pants}"></a-cylinder>

      <a-cylinder class="clickable"
        position="0.19 0.43 0"
        radius="0.14"
        height="0.78"
        color="${outfit.pants}"></a-cylinder>

      <!-- Zapatos -->
      <a-box class="clickable"
        position="-0.19 0.09 0.09"
        width="0.27" height="0.16" depth="0.42"
        color="${outfit.boots}"></a-box>

      <a-box class="clickable"
        position="0.19 0.09 0.09"
        width="0.27" height="0.16" depth="0.42"
        color="${outfit.boots}"></a-box>

      <!-- ====================== -->
      <!-- CUERPO Y CASACA -->
      <!-- ====================== -->

      <a-box class="clickable"
        position="0 1.23 0"
        width="0.72" height="0.95" depth="0.36"
        color="${outfit.coat}"></a-box>

      <!-- Chaleco -->
      <a-box class="clickable"
        position="0 1.25 0.19"
        width="0.38" height="0.76" depth="0.045"
        color="${outfit.vest}"></a-box>

      <!-- Cuello de camisa -->
      <a-box
        position="0 1.76 0.05"
        width="0.3" height="0.18" depth="0.28"
        color="#e9e0cd"></a-box>

      <!-- Botones -->
      <a-sphere position="0 1.48 0.23"
        radius="0.035" color="#d6bd91"></a-sphere>

      <a-sphere position="0 1.3 0.23"
        radius="0.035" color="#d6bd91"></a-sphere>

      <a-sphere position="0 1.12 0.23"
        radius="0.035" color="#d6bd91"></a-sphere>

      <!-- ====================== -->
      <!-- BRAZOS -->
      <!-- ====================== -->

      <a-cylinder class="clickable"
        position="-0.47 1.27 0"
        rotation="0 0 -12"
        radius="0.13"
        height="0.72"
        color="${outfit.coat}"></a-cylinder>

      <a-cylinder class="clickable"
        position="0.47 1.27 0"
        rotation="0 0 12"
        radius="0.13"
        height="0.72"
        color="${outfit.coat}"></a-cylinder>

      <!-- Puños -->
      <a-cylinder position="-0.54 0.93 0"
        radius="0.13" height="0.12"
        color="#e9e0cd"></a-cylinder>

      <a-cylinder position="0.54 0.93 0"
        radius="0.13" height="0.12"
        color="#e9e0cd"></a-cylinder>

      <!-- Manos -->
      <a-sphere class="clickable"
        position="-0.56 0.83 0.02"
        radius="0.12"
        color="${outfit.skin}"></a-sphere>

      <a-sphere class="clickable"
        position="0.56 0.83 0.02"
        radius="0.12"
        color="${outfit.skin}"></a-sphere>

      <!-- ====================== -->
      <!-- CABEZA -->
      <!-- ====================== -->

      <a-cylinder position="0 1.83 0"
        radius="0.11" height="0.2"
        color="${outfit.skin}"></a-cylinder>

      <a-sphere class="clickable"
        position="0 2.12 0"
        radius="0.27"
        color="${outfit.skin}"></a-sphere>

      <!-- Cabello base -->
      <a-sphere position="0 2.26 -0.07"
        scale="1 0.65 0.8"
        radius="0.25"
        color="${outfit.hair}"></a-sphere>

      <!-- Ojos -->
      <a-sphere position="-0.09 2.15 0.235"
        radius="0.025"
        color="#29231e"></a-sphere>

      <a-sphere position="0.09 2.15 0.235"
        radius="0.025"
        color="#29231e"></a-sphere>

      <!-- Nariz -->
      <a-sphere position="0 2.08 0.26"
        scale="0.5 0.7 0.5"
        radius="0.07"
        color="${outfit.skin}"></a-sphere>

      <!-- Accesorios particulares -->
      ${accessories}

      <!-- ====================== -->
      <!-- IDENTIFICACIÓN -->
      <!-- ====================== -->

      <a-text value="${name}"
        position="0 2.75 0"
        align="center"
        width="4"
        color="#ffffff"></a-text>

      <a-text value="EXPLORAR"
        position="0 2.52 0"
        align="center"
        width="2.5"
        color="#ffe6a8"></a-text>

    </a-entity>
  `;
}


// ======================================
// FAROLES
// ======================================

function streetLamp(x, z) {
  return `
    <a-entity position="${x} 0 ${z}">

      <a-cylinder position="0 1.5 0"
        radius="0.07" height="3"
        color="#40352d"></a-cylinder>

      <a-box position="0.22 2.85 0"
        width="0.5" height="0.07" depth="0.07"
        color="#40352d"></a-box>

      <a-cone position="0.22 2.65 0"
        radius-bottom="0.28" radius-top="0.08"
        height="0.2" color="#40352d"></a-cone>

      <a-box position="0.22 2.43 0"
        width="0.25" height="0.3" depth="0.25"
        color="#e9c56c"></a-box>

      <a-box position="0 0.15 0"
        width="0.35" height="0.3" depth="0.35"
        color="#514237"></a-box>

    </a-entity>
  `;
}


// ======================================
// PUESTOS DE MERCADO
// ======================================

function marketStall(x, z, canopyColor, sign) {
  return `
    <a-entity position="${x} 0 ${z}">

      <a-box position="0 2.5 0"
        width="3" height="0.15" depth="1.8"
        color="${canopyColor}"></a-box>

      <a-box position="0 2.25 0.85"
        width="3" height="0.45" depth="0.12"
        color="${canopyColor}"></a-box>

      <a-cylinder position="-1.35 1.2 -0.7"
        radius="0.07" height="2.4"
        color="#65452f"></a-cylinder>

      <a-cylinder position="1.35 1.2 -0.7"
        radius="0.07" height="2.4"
        color="#65452f"></a-cylinder>

      <a-cylinder position="-1.35 1.2 0.7"
        radius="0.07" height="2.4"
        color="#65452f"></a-cylinder>

      <a-cylinder position="1.35 1.2 0.7"
        radius="0.07" height="2.4"
        color="#65452f"></a-cylinder>

      <a-box position="0 0.75 0.45"
        width="2.8" height="0.85" depth="0.65"
        color="#765239"></a-box>

      <a-box position="0 1.2 0.45"
        width="2.9" height="0.12" depth="0.75"
        color="#4d3528"></a-box>

      <a-box position="0 1.85 0.93"
        width="1.8" height="0.4" depth="0.08"
        color="#eee0c2"></a-box>

      <a-text value="${sign}"
        position="0 1.82 1"
        align="center" width="2.5"
        color="#493729"></a-text>

      <a-sphere position="-0.75 1.35 0.45"
        radius="0.18" color="#bd4939"></a-sphere>

      <a-sphere position="-0.3 1.35 0.45"
        radius="0.18" color="#d8ad43"></a-sphere>

      <a-sphere position="0.2 1.35 0.45"
        radius="0.18" color="#6b934e"></a-sphere>

      <a-sphere position="0.7 1.35 0.45"
        radius="0.18" color="#bd4939"></a-sphere>

    </a-entity>
  `;
}


// ======================================
// BARRILES
// ======================================

function barrel(x, z) {
  return `
    <a-entity position="${x} 0 ${z}">

      <a-cylinder position="0 0.55 0"
        radius="0.42" height="1.1"
        color="#805536"></a-cylinder>

      <a-cylinder position="0 0.25 0"
        radius="0.44" height="0.08"
        color="#49423a"></a-cylinder>

      <a-cylinder position="0 0.85 0"
        radius="0.44" height="0.08"
        color="#49423a"></a-cylinder>

      <a-cylinder position="0 1.12 0"
        radius="0.4" height="0.06"
        color="#61452f"></a-cylinder>

    </a-entity>
  `;
}


// ======================================
// CAJAS
// ======================================

function woodenCrate(x, z) {
  return `
    <a-entity position="${x} 0 ${z}">

      <a-box position="0 0.4 0"
        width="0.85" height="0.8" depth="0.85"
        color="#9a7045"></a-box>

      <a-box position="0 0.2 0.44"
        width="0.9" height="0.08" depth="0.05"
        color="#61452f"></a-box>

      <a-box position="0 0.6 0.44"
        width="0.9" height="0.08" depth="0.05"
        color="#61452f"></a-box>

      <a-box position="0 0.82 0"
        width="0.9" height="0.08" depth="0.9"
        color="#765239"></a-box>

    </a-entity>
  `;
}
