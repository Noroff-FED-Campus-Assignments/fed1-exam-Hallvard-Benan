const breadCrumbContainer = document.querySelector(".breadcrumb-category");
const activeBreadcrumbLink = document.querySelector(".breadcrumb-active");

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
