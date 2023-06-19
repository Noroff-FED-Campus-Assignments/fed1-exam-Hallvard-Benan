const cookiesModal = document.querySelector(".cookies-modal");
const closeModalButton = document.querySelector(".cookies-modal-button");
if (!document.cookie) {
  cookiesModal.show();
}
closeModalButton.addEventListener("click", () => {
  cookiesModal.close();
  document.cookie = "bpCookiesAccepted; max-age=" + 60 * 60 * 24 * 30;
  +"domain=beyondpace.netlify.app";
});
