const imageModal = document.querySelector(".image_modal");
const imageForm = document.querySelector(".image_form");

function busca() {
  var inputBusca = document.getElementById("input-busca").value.toLowerCase();
  if (
    inputBusca === "abada" ||
    inputBusca === "carnaval" ||
    inputBusca === "folia"
  ) {
    window.location.href = "abadas.html";
  } else if (
    inputBusca === "santo" ||
    inputBusca === "santa" ||
    inputBusca === "crisma" ||
    inputBusca === "igreja" ||
    inputBusca === "religioso" ||
    inputBusca === "religiosa"
  ) {
    window.location.href = "religiosos.html";
  } else if (
    inputBusca === "junino" ||
    inputBusca === "quadrilha" ||
    inputBusca === "junho" ||
    inputBusca === "arraia"
  ) {
    window.location.href = "junino.html";
  }
}

function addItens(page) {
  for (var i = 0; i < itens.length; i++) {
    if (itens[i].tag === page) {
      var mat = [];
      mat.push("" + itens[i].image);

      const div = document.createElement("div");
      const image = document.createElement("img");
      const p = document.createElement("p");
      const btn = document.createElement("button");

      div.classList.add("item");
      image.src = itens[i].image;
      p.innerText = itens[i].name;
      btn.innerText = "VER PRODUTO";
      btn.classList.add("ver");
      btn.addEventListener("click", () => {
        imageModal.style.display = "flex";
        imageModal.addEventListener("click", () => {
          hideModal();
        });
        imageForm.innerHTML = `
                <p>${p.innerText}</p>
                <img src="${image.src}" alt="">
                <div class="buttons">
                    <button onclick="hideModal()">VOLTAR</button>
                <a href="https://wa.me/5585986099213?text=Quero%20esse:%20${image.src}" target="_blank" onclick="hideModal()">QUERO ESSE</a>
                </div>
                `;
      });
      div.append(image, p, btn);
      document.getElementById("conteudo").appendChild(div);
    }
  }
}

function hideModal() {
  imageModal.style.display = "none";
}
