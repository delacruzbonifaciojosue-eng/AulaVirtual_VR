export function renderMuseum(world) {
  world.innerHTML = `
    <a-sky color="#172a40"></a-sky>

    <!-- Piso -->
    <a-plane rotation="-90 0 0"
      width="24" height="24"
      color="#b5a994"></a-plane>

    <!-- Pared del museo -->
    <a-box position="0 3 -7"
      width="16" height="6" depth="0.3"
      color="#e3ddd1"></a-box>

    <a-text value="MUSEO VIRTUAL DE HISTORIA"
      position="0 5 -6.7"
      align="center" width="10"
      color="#493c30"></a-text>

    <a-text value="Explora los acontecimientos que cambiaron el mundo"
      position="0 4.3 -6.7"
      align="center" width="8"
      color="#493c30"></a-text>

    <!-- Exposición -->
    <a-box position="0 2.6 -5.5"
      width="4.5" height="2.2" depth="0.2"
      color="#665342"></a-box>

    <a-plane position="0 2.7 -5.37"
      width="4.1" height="1.8"
      color="#c8b99e"></a-plane>

    <a-text value="REVOLUCIÓN FRANCESA"
      position="0 3.2 -5.3"
      align="center" width="4"
      color="#30251d"></a-text>

    <a-text value="1789 - 1799"
      position="0 2.6 -5.3"
      align="center" width="3"
      color="#30251d"></a-text>

    
<!-- Portal de entrada -->
<a-box
  class="clickable"
  data-go="revolution"
  position="0 1.4 -4.8"
  width="3"
  height="0.7"
  depth="0.2"
  color="#a66b38">

  <a-text
    value="ENTRAR A LA EXPERIENCIA"
    position="0 0 0.13"
    align="center"
    width="3.5"
    color="#ffffff">
  </a-text>

</a-box>


    
<!-- Regreso -->
<a-box
  class="clickable"
  data-go="classroom"
  position="-5 1.3 -4"
  width="2"
  height="0.65"
  depth="0.15"
  color="#405b72">

  <a-text
    value="REGRESAR"
    position="0 0 0.1"
    align="center"
    width="3"
    color="#ffffff">
  </a-text>

</a-box>

  `;
}