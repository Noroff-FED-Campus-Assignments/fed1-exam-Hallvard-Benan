const loadMoreButton = document.querySelector(".load-more-button");
export const toggleLoadMoreButton = () => {
  const hiddenPostCards = document.querySelectorAll(".is-hidden");
  const visiblePostCards = document.querySelectorAll(".card");
  loadMoreButton.classList.toggle(
    "gone",
    hiddenPostCards.length === 0 || visiblePostCards.length === 0
  );
};
