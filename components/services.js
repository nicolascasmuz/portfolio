function addServices(service = {}) {
  const templateEl = document.querySelector("#template-services");
  const serviceEl = document.querySelector(".section-services");

  templateEl.content.querySelector(".section-services__img").src = service.img;
  templateEl.content.querySelector(".section-services__h3").textContent =
    service.h3;
  templateEl.content.querySelector(".section-services__p").textContent =
    service.p;

  const content = document.importNode(templateEl.content, true);
  serviceEl.appendChild(content);
}

function getData() {
  return fetch(
    "https://preview.contentful.com/spaces/boc2rp8m0dgi/environments/master/entries?access_token=Y1_N0gShtcshwQbkaOPc2u0lA-7zD8351Q0NWQCRCsU&&content_type=servicesForPortfolio"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      for (let i = 0; i < data["items"].length; i++) {
        const service = {
          img: data.includes.Asset[i].fields.file.url,
          h3: data.items[i].fields.nombre,
          p: data.items[i].fields.descripcion,
        };
        addServices(service);
      }
    });
}
