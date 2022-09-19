// Toggling Menu
const menu = document.querySelector(".menu");
const closeMenu = document.querySelectorAll(".close-menu");
const openMenu = document.querySelector(".open-menu");

// close menu add Toggle on click
for (let i = 0; i < closeMenu.length; i++) {
  closeMenu[i].addEventListener("click", toggleMenu);
}

openMenu.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    menu.classList.add("block");
  } else {
    menu.classList.remove("block");
    menu.classList.add("hidden");
  }
}

document
  .querySelector("form")
  .querySelector("button")
  .addEventListener("click", (e) => {
    e.preventDefault();
  });
