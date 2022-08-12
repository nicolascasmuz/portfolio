function addIntro(intro = {}) {
  const templateEl = document.querySelector("#template-intro");
  const introEl = document.querySelector(".section-intro");

  templateEl.content.querySelector(".section-intro__title").textContent =
    intro.title;
  templateEl.content.querySelector(".section-intro__introduction").textContent =
    intro.introduction;
  templateEl.content.querySelector(".section-intro__foto").src = intro.img;

  const content = document.importNode(templateEl.content, true);
  introEl.appendChild(content);
}

function getDataForIntro() {
  return fetch(
    "https://preview.contentful.com/spaces/boc2rp8m0dgi/environments/master/entries?access_token=Y1_N0gShtcshwQbkaOPc2u0lA-7zD8351Q0NWQCRCsU&&content_type=introForPortfolio"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      for (let i = 0; i < data["items"].length; i++) {
        const intro = {
          title: data.items[i].fields.titulo,
          introduction: data.items[i].fields.texto,
          img: data.includes.Asset[i].fields.file.url,
        };
        addIntro(intro);
      }
    });
}
