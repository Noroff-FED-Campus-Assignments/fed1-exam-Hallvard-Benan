/*
============================================
Constants
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L66
============================================
*/

// const { loadEnv } = require("vite");

// TODO: Get DOM elements from the DOM

/*
============================================
DOM manipulation
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L89
============================================
*/

// TODO: Fetch and Render the list to the DOM

// TODO: Create event listeners for the filters and the search

/**
 * TODO: Create an event listener to sort the list.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/search-form.html#L91
 */

/*
============================================
Data fectching
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L104
============================================
*/

// TODO: Fetch an array of objects from the API

/*
============================================
Helper functions
https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L154
============================================
*/

/**
 * TODO: Create a function to filter the list of item.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/search-form.html#L135
 * @param {item} item The object with properties from the fetched JSON data.
 * @param {searchTerm} searchTerm The string used to check if the object title contains it.
 */

/**
 * TODO: Create a function to create a DOM element.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/src/js/detail.js#L36
 * @param {item} item The object with properties from the fetched JSON data.
 */

import { addScrollEffect } from "./functions/scrollEffect";

const token = import.meta.env.VITE_API_TOKEN;

const url = "https://api.airtable.com/v0/appl0dccTyyqBSUBd/tblsXxvmbCoIBmQEZ";

const sliderContainer = document.querySelector(".swiper-wrapper");
const postListContainer = document.querySelector(".posts-list");
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

async function getPosts() {
  try {
    const response = await fetch(url, requestOptions);
    const result = await response.json();
    const posts = result.records;

    console.log(posts);
    if (postListContainer) {
      postListContainer.innerHTML = "";
      posts.forEach((post) => {
        postListContainer.innerHTML += `
          <div class="card posts-card">
                <a href="post.html?id=${post.id}" class="card__img-link"><img src="${post.fields.thumbnail_image[0].url}" alt="thumbnail image for ${post.fields.Title}" class="card__img" loading="lazy" /></a>
                <h3 class="card__title">${post.fields.Title}</h3>
                <p class="card__tagline">${post.fields.Short_excerpt}
                <div class="card__details">
                  <div class="card__details__date">${post.fields.publish_date}</div>
                  <a href="post.html?id=${post.id}" class="cta card__cta">read more</a>
                </div>
              </div>
          `;
      });
      const cards = document.querySelectorAll(".posts-card");
      addScrollEffect(cards, 0.2);
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

const postContainer = document.querySelector(".post__text");
const bannerImageContainer = document.querySelector(".post__img--banner");
const bottomImageContainer = document.querySelector(".post__img--bottom");
const authorContainer = document.querySelector(".post-details__author");
const dateContainer = document.querySelector(".post-details__date");
const postTitile = document.getElementById("js-post-title");
const queryString = document.location.search;
const documentTitle = document.querySelector("title");
const breadCrumbTitle = document.querySelector(".breadcrumb__title");

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
    postContainer.innerHTML = newBlogText;
    authorContainer.innerHTML += post.fields.author;
    dateContainer.innerHTML += post.fields.publish_date;
    bannerImageContainer.innerHTML = `<img src="${post.fields.thumbnail_image[0].thumbnails.full.url}" alt="cover image for ${post.fields.Title}" loading="lazy">`;
    bottomImageContainer.innerHTML = `<img src="${post.fields.full_size_image_1[0].url}" alt="cover image for ${post.fields.Title}" loading="lazy">`;
  } catch (error) {
    console.log(error);
  }
}
if (postContainer) {
  getPost();
}
