const collapse = document.querySelector("nav ul");
const navToggle = document.querySelector(".menu-hamburger");

const Menu = () => {
  collapse.classList.toggle("active");
};
navToggle.addEventListener("click", Menu);
