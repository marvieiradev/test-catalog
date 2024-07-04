function busca() {
    var inputBusca = document.getElementById("input-busca").value.toLowerCase();
    if (inputBusca === "abada" || inputBusca === "carnaval" || inputBusca === "folia") {
        window.location.href = "abadas.html";
    } else if (inputBusca === "santo" || inputBusca === "santa" || inputBusca === "crisma" || inputBusca === "igreja" || inputBusca === "religioso" || inputBusca === "religiosa") {
        window.location.href = "religiosos.html";
    } else if (inputBusca === "junino" || inputBusca === "quadrilha" || inputBusca === "junho" || inputBusca === "arraia") {
        window.location.href = "junino.html";
    }
}

function addItens(page) {
    for (var i = 0; i < itens.length; i++) {
        if (itens[i].tag === page) {

            const div = document.createElement("div");
            const image = document.createElement("img");
            const p = document.createElement("p");
            const btn = document.createElement("button");

            div.classList.add("item");
            image.src = itens[i].image;
            p.innerText = itens[i].name;
            btn.innerText = "VER PRODUTO"
            btn.classList.add("ver");
            btn.addEventListener("click", () => {
                //document.querySelector(".image_modal").style.display = "flex";
                //document.querySelector(".image_form").innerHTML = `<img src="${itens}" alt="">`;
            })
            div.append(image, p, btn);
            document.getElementById("conteudo").appendChild(div)
        }
    }
}