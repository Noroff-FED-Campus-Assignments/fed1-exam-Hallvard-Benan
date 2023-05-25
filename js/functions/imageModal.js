export const makeModal = function (container, images) {
  images.forEach((image) => {
    image.addEventListener("click", function () {
      container.innerHTML = this.innerHTML;
      container.showModal();
      container.addEventListener("click", () => {
        container.close();
      });
    });
  });
};
