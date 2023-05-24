const toTopButton = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    toTopButton.classList.add("visible");
  } else toTopButton.classList.remove("visible");
});
