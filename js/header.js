const header = document.querySelector(".header");
const makeHeader = function () {
  header.innerHTML = `<div class="header-nav header--primary">
    <nav class="primary-header__nav container">
    <a href="index.html" class="nav__logo"><img src="/assets/logos/round-logo-white.svg" alt="logo" /></a>
    <button class="hamburger-menu">
    <i class="fa-solid fa-bars"></i>
    </button>
    <ul class="nav-links closed">
    <li class="nav-link nav-link--divider">
    <a href="posts.html">posts</a>
    </li>
    <li class="nav-link nav-link--divider"><a href="about.html">about us</a></li>
    <li class="nav-link"><a href="contact.html">contact</a></li>
    </ul>
    </nav>
    </div>`;
};

makeHeader();

const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("closed");
  navLinks.classList.toggle("open");

  hamburgerMenu.innerHTML = navLinks.classList.contains("open")
    ? `<i class="fa-solid fa-x"></i>`
    : `<i class="fa-solid fa-bars"></i>`;
});
