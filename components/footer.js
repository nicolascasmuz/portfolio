function footerComp(footer) {
  const addEl = document.createElement("div");

  addEl.innerHTML = `<footer class="footer">
  <img src="./resources/logo-lg7.png" alt="" class="footer__logo" />
  <div class="footer__social-media-container">
    <a
      href="https://www.linkedin.com/in/nicolascasmuz/"
      class="footer__social-media-link"
    >
      <img
        src="./resources/linkedin_whiteborder.png"
        class="footer__social-media-logo"
      />
      <label class="footer__social-media-name" for="linkedin"
        >Linkedin</label
      >
    </a>
    <a
      href="https://www.instagram.com/lg7.multimedia/"
      class="footer__social-media-link"
    >
      <img
        src="./resources/instagram_whiteborder.png"
        class="footer__social-media-logo"
      />
      <label class="footer__social-media-name" for="linkedin"
        >Instagram</label
      >
    </a>
    <a
      href="https://github.com/nicolascasmuz"
      class="footer__social-media-link"
    >
      <img src="./resources/github_whiteborder.png" class="footer__social-media-logo" />
      <label class="footer__social-media-name">Github</label>
    </a>
    <a
      href="https://www.youtube.com/@LG7multimedia"
      class="footer__social-media-link"
    >
      <img src="./resources/youtube_whiteborder.png" class="footer__social-media-logo" />
      <label class="footer__social-media-name">YouTube</label>
    </a>
  </div>
</footer>`;

  footer.appendChild(addEl);
}

contactComp();
