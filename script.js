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