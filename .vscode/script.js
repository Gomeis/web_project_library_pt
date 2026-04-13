const lerMaisButtons = document.querySelectorAll(".card__lermais");
const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const modalClose = document.querySelector(".modal__close");

lerMaisButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const fullText = btn.previousElementSibling.textContent; // pega o texto completo
    modalText.textContent = fullText;
    modal.style.display = "flex";
  });
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
