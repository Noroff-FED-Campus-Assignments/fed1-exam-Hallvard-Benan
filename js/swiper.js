const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: false,
  slidesPerGroupSkip: 0,
  grabCursor: true,
  observer: true,
  observeParents: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    575: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 10,
    },
    1100: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 10,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
