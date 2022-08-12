function addServices(project = {}) {
  const templateEl = document.querySelector("#template-portfolio");
  const projectEl = document.querySelector(".section-portfolio");

  templateEl.content.querySelector(".section-portfolio__h3").textContent =
    project.h3;
  templateEl.content.querySelector(".section-portfolio__p").textContent =
    project.p;
  templateEl.content.querySelector(".section-portfolio__a").href = project.a;

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
          h3: data.items[i].fields.nombre,
          p: data.items[i].fields.descripcion,
          a: data.items[i].fields.link,
        };
        addServices(project);
      }
    });
}
