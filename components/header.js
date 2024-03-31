function headerComp(header) {
  const addEl = document.createElement("div");

  addEl.innerHTML = `<header class="header">
  <a href="./index.html" class="header__logo-a">
    <img src="./resources/logo-lg7.png" alt="logo-portfolio" class="header__logo"
  /></a>
  <input class="header__menu-input" type="checkbox" id="check" />
  <label for="check" class="header__menu-label">
    <img
      class="header__menu-img"
      src="./resources/menu-icon.png"
      alt="menu-icon"
    />
  </label>
  <ul class="header__menu-lista">
    <li>
      <a href="./index.html" class="header__option">Inicio</a>
      <a href="./portfolio.html" class="header__option">Portfolio</a>
      <a href="./servicios.html" class="header__option">Servicios</a>
      <a href="./contacto.html" class="header__option">Contacto</a>
    </li>
  </ul>
  <nav class="header__menu-nav">
    <a href="./portfolio.html" class="header__option">Portfolio</a>
    <a href="./servicios.html" class="header__option">Servicios</a>
    <a href="./contacto.html" class="header__option">Contacto</a>
  </nav>
</header>`;

  header.appendChild(addEl);
}

contactComp();
