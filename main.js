const menu = document.querySelector(".toggleBtn");
const nav = document.querySelector(".nav");

menu.addEventListener("click", function () {
  nav.classList.add("nav-active");
  console.log("Hello");
});

