// elementos del DOM
const list = document.querySelectorAll(".list");
const skills = document.querySelector("#sobre-mi");

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

// efecto en barra de skills

window.onscroll = function () {
  animacionSkills();
};

function animacionSkills() {
  let posicionSkills = window.innerHeight - skills.getBoundingClientRect().top;
  if (posicionSkills >= 400) {
    document.querySelector("#js").className = "progreso js";
    document.querySelector("#hl").className = "progreso hl";
    document.querySelector("#cs").className = "progreso cs";
    document.querySelector("#jv").className = "progreso jv";
  }
}
