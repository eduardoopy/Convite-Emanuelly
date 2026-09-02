const cena = document.getElementById("cena");
const envelope = document.getElementById("envelope");
const fechar = document.getElementById("fechar");

envelope.addEventListener("click", () => {
  cena.classList.add("aberta");
});

fechar.addEventListener("click", (event) => {
  event.stopPropagation();
  cena.classList.remove("aberta");
});
