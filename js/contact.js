/*
============================================
Constants
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/advanced-form.html#L50
============================================
*/

// TODO: Get DOM elements from the DOM

// TODO: Create event listeners for the form

/*
============================================
API calls
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/advanced-form.html#L157
============================================
*/

// TODO: Set up a function to fetch data from the API

/*
============================================
Helper functions
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/advanced-form.html#L118
============================================
*/

// TODO: Create a function to validate an input field

// TODO: Create a function to create a DOM element
const contactForm = document.getElementById("contact-form");
const emailInput = document.getElementById("email");
const nameInput = document.getElementById("name");
const subjectInput = document.getElementById("subject");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const subjectError = document.getElementById("subject-error");
const validationMessageContainer =
  document.getElementById("validation-message");

nameInput.addEventListener("blur", validateInput);
emailInput.addEventListener("blur", validateInput);
subjectInput.addEventListener("blur", validateInput);

function validateForm(event) {
  event.preventDefault();

  hideError(nameError);
  hideError(emailError);
  hideError(subjectError);

  const nameIsValid = checkLength(nameInput, 1, nameError);
  const emailIsValid = validateEmail(emailInput, emailInput, emailError);
  const subjectIsValid = checkLength(subjectInput, 10, subjectError);

  if (nameIsValid && emailIsValid && subjectIsValid) {
    contactForm.classList.add("exit");
    setTimeout(function () {
      contactForm.innerHTML = "";
      validationMessageContainer.innerHTML =
        '<div class="form-success"><h2>Thank you for your submission!</h2><p>Submission succsessful ✅</p></div><div><a href="javascript:history.back()" class="pagebuttons">← Back to Movies</a></div>';
      contactForm.reset();
    }, 300);
  }
}

function validateInput(event) {
  const input = event.target;
  hideError(nameError);
  hideError(emailError);
  hideError(subjectError);

  if (input === nameInput) {
    checkLength(nameInput, 1, nameError);
  } else if (input === emailInput) {
    validateEmail(emailInput, emailInput, emailError);
  } else if (input === subjectInput) {
    checkLength(subjectInput, 10, subjectError);
  }
}

contactForm.addEventListener("submit", validateForm);

function checkLength(target, requiredLength, errorContainer) {
  if (target.value.trim().length < requiredLength) {
    errorContainer.classList.remove("is-hidden");
    target.classList.remove("valid");
    target.classList.add("error");
    return false;
  } else {
    errorContainer.classList.add("is-hidden");
    target.classList.add("valid");
    target.classList.remove("error");
    return true;
  }
}

function hideError(errorContainer) {
  errorContainer.classList.add("is-hidden");
}

function validateEmail(target, email, errorContainer) {
  const regEx =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  const patternMatches = regEx.test(email.value);

  if (patternMatches !== true) {
    errorContainer.classList.remove("is-hidden");
    target.classList.remove("valid");
    target.classList.add("error");
    return false;
  } else {
    errorContainer.classList.add("is-hidden");
    target.classList.add("valid");
    target.classList.remove("error");
    return true;
  }
}
