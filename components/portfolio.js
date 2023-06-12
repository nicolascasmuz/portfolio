function addServices(project = {}) {
  const templateEl = document.querySelector("#template-portfolio");
  const projectEl = document.querySelector(".section-portfolio");

  /* if (project.ingresar == undefined) {
    const ingresarEl = templateEl.content.querySelector(".ingresar");
    ingresarEl.style.display = "none";
    console.log("primer log");
  } */

  templateEl.content.querySelector(".section-portfolio__img").src = project.pic;
  templateEl.content.querySelector(".section-portfolio__h3").textContent =
    project.h3;
  templateEl.content.querySelector(".section-portfolio__p").textContent =
    project.p;
  templateEl.content.querySelector(".section-portfolio__a").href = project.a;
  templateEl.content.querySelector(".ingresar").href = project.ingresar;

  const content = document.importNode(templateEl.content, true);
  projectEl.appendChild(content);
}

function getData() {
  return fetch(
    "https://preview.contentful.com/spaces/boc2rp8m0dgi/environments/master/entries?access_token=Y1_N0gShtcshwQbkaOPc2u0lA-7zD8351Q0NWQCRCsU&&content_type=projectsForPortfolio"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      for (let i = 0; i < data["items"].length; i++) {
        const project = {
          pic: data.items[i].fields.pic,
          h3: data.items[i].fields.nombre,
          p: data.items[i].fields.descripcion,
          a: data.items[i].fields.link,
          ingresar: data.items[i].fields.play,
        };

        addServices(project);
      }
    });
}
