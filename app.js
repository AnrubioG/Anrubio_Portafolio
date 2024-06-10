// elementos del DOM
const list = document.querySelectorAll(".list");

// Efecto de icono activo
function activeLink() {
  list.forEach((item) => {
    item.classList.remove("active");
    this.classList.add("active");
  });
}

list.forEach((item) => {
  item.addEventListener("click", activeLink);
});
