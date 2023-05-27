import { filterPostsByCategory } from "./functions/filter";
import { updateBreadcrumb } from "./functions/filter";
import { handleLinkingSearch } from "./functions/filter";
import { addScrollEffect } from "./functions/scrollEffect";
import { makeModal } from "./functions/imageModal";
import { toggleLoadMoreButton } from "./functions/load-more-button";

const sliderContainer = document.querySelector(".swiper-wrapper");
const postListContainer = document.querySelector(".posts-list");
const categorySelector = document.getElementById("category");
const searchBar = document.querySelector(".post-filters__search-bar");
const linkingSearchbar = document.querySelector("#link-search");
const linkingSearchButton = document.querySelector("#link-search-button");
const loadMoreButton = document.querySelector(".load-more-button");

const token = import.meta.env.VITE_API_TOKEN;
const url = "https://api.airtable.com/v0/appl0dccTyyqBSUBd/tblsXxvmbCoIBmQEZ";
const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);
myHeaders.append(
  "Cookie",
  "brw=brw3dhg6K2A4sfph0; AWSALB=lCsdKQ3GWh6mswkM+76wWL4MUQLbMjqKXMSd2+EWPAEmKizmUHzcS2UwiOf2c7o54koUKYlGs3e7BvgeCCS84fNahcN9zEOCRWKGUaK+SAPvbZwxQ9glmr0SnZU7; AWSALBCORS=lCsdKQ3GWh6mswkM+76wWL4MUQLbMjqKXMSd2+EWPAEmKizmUHzcS2UwiOf2c7o54koUKYlGs3e7BvgeCCS84fNahcN9zEOCRWKGUaK+SAPvbZwxQ9glmr0SnZU7"
);
const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

if (linkingSearchButton) {
  linkingSearchButton.addEventListener("click", handleLinkingSearch);

  linkingSearchbar.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      handleLinkingSearch();
    }
  });
}

async function getPosts() {
  try {
    const response = await fetch(url, requestOptions);
    const result = await response.json();
    const posts = result.records;
    let postsToDisplay = posts;

    if (postListContainer) {
      const queryString = document.location.search;
      const params = new URLSearchParams(queryString);
      const categoryParam = params.get("category");
      const searchParam = params.get("search");
      const selected = categorySelector.value;
      let searchedPosts = posts;

      if (categoryParam) {
        postsToDisplay = filterPostsByCategory(posts, categoryParam);
        updateBreadcrumb(categoryParam);
      }

      if (searchParam) {
        const searchTerm = searchParam.trim().toLowerCase();
        postsToDisplay = posts.filter(function (post) {
          const titleMatch = post.fields.Title.trim()
            .toLowerCase()
            .includes(searchTerm);
          const blogTextMatch = post.fields["blog text"]
            .trim()
            .toLowerCase()
            .includes(searchTerm);
          const authorMatch = post.fields.author
            .trim()
            .toLowerCase()
            .includes(searchTerm);
          return titleMatch || blogTextMatch || authorMatch;
        });
        updateBreadcrumb(searchParam);
        toggleLoadMoreButton();
      }

      if (selected === "all") {
        postsToDisplay = posts;
        updateBreadcrumb(selected);
      }

      if (selected && selected !== "all") {
        postsToDisplay = filterPostsByCategory(posts, selected);
        updateBreadcrumb(selected);
      }

      const renderPosts = function (postsToRender) {
        postListContainer.innerHTML = "";
        postsToRender.forEach((post) => {
          postListContainer.innerHTML += `
            <div class="card posts-card">
              <a href="post.html?id=${post.id}" class="card__img-link">
                <img src="${post.fields.thumbnail_image[0].url}" alt="thumbnail image for ${post.fields.Title}" class="card__img" loading="lazy" />
              </a>
              <h3 class="card__title">${post.fields.Title}</h3>
              <p class="card__tagline">${post.fields.Short_excerpt}</p>
              <div class="card__details">
                <div class="card__details__date">${post.fields.publish_date}</div>
                <a href="post.html?id=${post.id}" class="cta card__cta">read more</a>
              </div>
            </div>
          `;
        });
        const renderedPostcards = document.querySelectorAll(".posts-card");
        for (let i = 10; i < postsToRender.length; i++) {
          renderedPostcards[i].classList.add("is-hidden");
          renderedPostcards[i].classList.remove("card");
        }
      };
      renderPosts(postsToDisplay);
      const cards = document.querySelectorAll(".posts-card");
      addScrollEffect(cards, 0.2);
      toggleLoadMoreButton();

      loadMoreButton.addEventListener("click", () => {
        const hiddenPostCards = document.querySelectorAll(".is-hidden");
        hiddenPostCards.forEach((card) => {
          card.classList.add("card");
          card.classList.remove("is-hidden");
        });
        const updatedHiddenPostCards = document.querySelectorAll(".is-hidden");

        if (updatedHiddenPostCards) toggleLoadMoreButton();
      });

      searchBar.addEventListener("keyup", function () {
        const searchTerm = searchBar.value.trim().toLowerCase();
        searchedPosts = posts.filter(function (post) {
          const titleMatch = post.fields.Title.trim()
            .toLowerCase()
            .includes(searchTerm);
          const blogTextMatch = post.fields["blog text"]
            .trim()
            .toLowerCase()
            .includes(searchTerm);
          const authorMatch = post.fields.author
            .trim()
            .toLowerCase()
            .includes(searchTerm);
          return titleMatch || blogTextMatch || authorMatch;
        });

        renderPosts(searchedPosts);
        let renderedPostcards = document.querySelectorAll(".posts-card");
        addScrollEffect(renderedPostcards, 0.2);
        toggleLoadMoreButton();
      });

      const sorter = document.getElementById("sort-by");

      const sortPosts = function (posts) {
        sorter.addEventListener("change", function () {
          const selectedFilter = sorter.value;
          let sortedPosts = [];

          if (selectedFilter === "a-z") {
            sortedPosts = posts.sort((a, b) =>
              a.fields.Title.localeCompare(b.fields.Title)
            );
          } else if (selectedFilter === "z-a") {
            sortedPosts = posts.sort((a, b) =>
              b.fields.Title.localeCompare(a.fields.Title)
            );
          } else if (selectedFilter === "new-old") {
            sortedPosts = posts.sort(
              (a, b) =>
                new Date(b.fields.publish_date) -
                new Date(a.fields.publish_date)
            );
          } else if (selectedFilter === "old-new") {
            sortedPosts = posts.sort(
              (a, b) =>
                new Date(a.fields.publish_date) -
                new Date(b.fields.publish_date)
            );
          }

          renderPosts(sortedPosts);
          let renderedPostcards = document.querySelectorAll(".posts-card");
          addScrollEffect(renderedPostcards, 0.2);
          toggleLoadMoreButton();
        });
      };

      sortPosts(postsToDisplay);
    }
    if (sliderContainer) {
      sliderContainer.innerHTML = "";
      posts.forEach((post) => {
        sliderContainer.innerHTML += `
        <div class="swiper-slide card">
        <a href="post.html?id=${post.id}" class="card__img-link"><img src="${post.fields.thumbnail_image[0].url}" alt="thumbnail-image for ${post.fields.Title}" class="card__img" loading="lazy" /></a>
              <h3 class="swiper-slide__title">${post.fields.Title}</h3>
              <p class="slider__card__tagline">${post.fields.Short_excerpt}
              <div class="card__details">
                <a href="post.html?id=${post.id}" class="cta card__cta">See more</a>
              </div>
        </div>
        `;
      });
      const topics = document.querySelectorAll(".topic");
      addScrollEffect(topics, 0.8);
    }
  } catch (error) {
    const errorMessage = `
  <div class="container error-container">
        <h2 class="u-section__heading">Sorry, something went wrong</h2> 
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="currentColor" d="M6.08 8.02a6.001 6.001 0 0 1 11.84 0a4.5 4.5 0 0 1 4.053 4.973A6.5 6.5 0 0 0 10.018 17H6.5a4.5 4.5 0 0 1-.42-8.982ZM22 16.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0ZM16.5 13a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5Zm0 7.125a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25Z"/></svg> 
        <div class="error-details">
          <h3>Technical details:</h3>
          <p>${error}</p>
        </div>
  </div>
  `;
    if (sliderContainer) {
      sliderContainer.innerHTML = errorMessage;
    }
    if (postListContainer) {
      postListContainer.innerHTML = errorMessage;
      postListContainer.classList.remove("posts-list");
    }
  }
}
getPosts();

if (categorySelector) {
  categorySelector.addEventListener("change", () => {
    getPosts();
    searchBar.value = "";
  });
}

const postContainer = document.querySelector(".post__text");
const bannerImageContainer = document.querySelector(".post__img--banner");
const bottomImageContainer = document.querySelector(".post__img--bottom");
const authorContainer = document.querySelector(".post-details__author");
const dateContainer = document.querySelector(".post-details__date");
const postTitile = document.getElementById("js-post-title");
const documentTitle = document.querySelector("title");
const documentAuthor = document.getElementById("meta-author");
const documentDescription = document.getElementById("meta-description");
const documentKeywords = document.getElementById("meta-keywords");
const breadCrumbTitle = document.querySelector(".breadcrumb__title");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
async function getPost() {
  try {
    const response = await fetch(url + `/${id}`, requestOptions);
    const result = await response.json();
    const post = result;
    console.log(post);
    let oldBlogText = post.fields["blog text"];
    let newBlogText = oldBlogText.replace(/["'`]/g, "");
    documentTitle.innerHTML = post.fields.Title;
    postTitile.innerHTML = post.fields.Title;
    breadCrumbTitle.innerHTML = post.fields.Title;
    const skeletonUi = document.querySelectorAll(".skeleton");
    skeletonUi.forEach((el) => {
      el.classList.remove("skeleton");
    });
    postContainer.innerHTML = newBlogText;
    authorContainer.innerHTML += post.fields.author;
    dateContainer.innerHTML += post.fields.publish_date;
    bannerImageContainer.innerHTML = `<img src="${post.fields.thumbnail_image[0].thumbnails.full.url}" alt="cover image for ${post.fields.Title}" loading="lazy">`;
    bottomImageContainer.innerHTML = `<img src="${post.fields.full_size_image_1[0].url}" alt="cover image for ${post.fields.Title}" loading="lazy">`;
    documentDescription.content = post.fields.Short_excerpt + " | blog post";
    documentAuthor.content = post.fields.author;
    documentKeywords.content += post.fields.category[0];
    console.log(documentDescription);
  } catch (error) {
    console.log(error);
  }
}

if (postContainer) {
  getPost();
  const imageModal = document.querySelector(".image-modal");
  const postImages = document.querySelectorAll(".post__img");
  makeModal(imageModal, postImages);
}
