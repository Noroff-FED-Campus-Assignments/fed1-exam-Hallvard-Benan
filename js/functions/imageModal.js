export const makeModal = function (container, images) {
  images.forEach((image) => {
    image.addEventListener("click", function () {
      container.innerHTML = this.innerHTML;
      container.showModal();
      console.log(container.innerHTML);
      container.addEventListener("click", () => {
        container.close();
      });
    });
  });
};
