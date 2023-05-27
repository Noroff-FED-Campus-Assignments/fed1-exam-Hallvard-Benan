const breadCrumbContainer = document.querySelector(".breadcrumb-category");
const activeBreadcrumbLink = document.querySelector(".breadcrumb-active");
const linkingSearchbar = document.querySelector("#link-search");

//filter for category
export function filterPostsByCategory(posts, category) {
  return posts.filter(function (post) {
    return post.fields.category.includes(category);
  });
}

// Function to update breadcrumb
export function updateBreadcrumb(category) {
  activeBreadcrumbLink.classList.remove("is-active");
  breadCrumbContainer.innerHTML = ` ${category}`;
  breadCrumbContainer.classList.add("is-active");
}

// navigating from other pages using url parameters
function navigateToPostsPage(searchValue) {
  window.location.href = `posts.html?search=${encodeURIComponent(searchValue)}`;
}

export function handleLinkingSearch() {
  const searchValue = linkingSearchbar.value.trim();
  navigateToPostsPage(searchValue);
}
