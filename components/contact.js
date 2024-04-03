function contactComp(form) {
  const addEl = document.createElement("div");

  addEl.innerHTML = `<section class="section-form">
    <h2 class="section-form__title">Contacto</h2>
    <form class="section-form__form">
      <label for="nombre" class="section-form__label">
        <h3 class="section-form__h3">NOMBRE</h3>
        <input type="text" class="section-form__input" id="nombre" name="nombre" />
      </label>
      <label for="email" class="section-form__label">
        <h3 class="section-form__h3">EMAIL</h3>
        <input type="email" class="section-form__input" id="email" name="email"/>
      </label>
      <label for="mensaje" class="section-form__label">
        <h3 class="section-form__h3">MENSAJE</h3>
        <textarea
          class="section-form__textarea"
          id="mensaje"
          cols="30"
          rows="10"
          name="mensaje"
        ></textarea>
      </label>
      <button class="section-form__button">Enviar</button>
    </form>
  </section>`;

  const formEl = addEl.querySelector(".section-form__form");
  formEl.addEventListener("submit", async (input) => {
    input.preventDefault();

    const request = {
      nombre: input.target.nombre.value,
      email: input.target.email.value,
      mensaje: input.target.mensaje.value,
    };

    fetch("http://localhost:3500" + "/send-mail", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(request),
    }).then(() => {
      console.log("request: ", request);
    });
  });

  form.appendChild(addEl);
}

contactComp();
