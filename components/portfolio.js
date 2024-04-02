function addDev(project = {}) {
  const templateEl = document.querySelector("#template-dev");
  const projectEl = document.querySelector(".section-dev");

  /* if (project.ingresar == undefined) {
    const ingresarEl = templateEl.content.querySelector(".ingresar");
    ingresarEl.style.display = "none";
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

function addAv(project = {}) {
  const templateEl = document.querySelector("#template-av");
  const projectEl = document.querySelector(".section-av");

  templateEl.content.querySelector(".section-portfolio__video").src =
    project.pic;
  templateEl.content.querySelector(".section-portfolio__h3").textContent =
    project.h3;
  templateEl.content.querySelector(".section-portfolio__p").textContent =
    project.p;
  templateEl.content.querySelector(".section-portfolio__a").href = project.a;

  const content = document.importNode(templateEl.content, true);
  projectEl.appendChild(content);
}

function addGraph(project = {}) {
  const templateEl = document.querySelector("#template-graph");
  const projectEl = document.querySelector(".section-graph");

  templateEl.content.querySelector(".section-portfolio__img").src = project.pic;
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
        if (data.items[i].fields.cat == "dev") {
          const devProject = {
            pic: data.items[i].fields.pic,
            h3: data.items[i].fields.nombre,
            p: data.items[i].fields.descripcion,
            a: data.items[i].fields.link,
            ingresar: data.items[i].fields.play,
          };
          addDev(devProject);
        }

        if (data.items[i].fields.cat == "av") {
          const avProject = {
            pic: data.items[i].fields.pic,
            h3: data.items[i].fields.nombre,
            p: data.items[i].fields.descripcion,
            a: data.items[i].fields.link,
            ingresar: data.items[i].fields.play,
          };
          addAv(avProject);
        }

        if (data.items[i].fields.cat == "graph") {
          const graphProject = {
            pic: data.items[i].fields.pic,
            h3: data.items[i].fields.nombre,
            p: data.items[i].fields.descripcion,
            a: data.items[i].fields.link,
            ingresar: data.items[i].fields.play,
          };
          addGraph(graphProject);
        }
      }
    });
}
