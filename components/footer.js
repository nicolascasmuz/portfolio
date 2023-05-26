function footerComp(footer) {
  const addEl = document.createElement("div");

  addEl.innerHTML = `<footer class="footer">
  <img src="./resources/logo-portfolio.png" alt="" class="footer__logo" />
  <div class="footer__social-media-container">
    <a
      href="https://www.linkedin.com/in/nicolascasmuz/"
      class="footer__social-media-link"
    >
      <img
        src="./resources/linkedin.png"
        class="footer__social-media-logo"
      />
      <label class="footer__social-media-name" for="linkedin"
        >Linkedin</label
      >
    </a>
    <a
      href="https://github.com/nicolascasmuz"
      class="footer__social-media-link"
    >
      <img src="./resources/github.png" class="footer__social-media-logo" />
      <label class="footer__social-media-name">Github</label>
    </a>
  </div>
</footer>`;

  footer.appendChild(addEl);
}

contactComp();
