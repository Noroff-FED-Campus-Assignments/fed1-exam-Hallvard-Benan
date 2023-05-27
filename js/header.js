const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("closed");
  navLinks.classList.toggle("open");

  hamburgerMenu.innerHTML = navLinks.classList.contains("open")
    ? `<i class="fa-solid fa-x"></i>`
    : `<i class="fa-solid fa-bars"></i>`;
});
