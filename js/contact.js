const contactForm = document.getElementById("contact-form");
const emailInput = document.getElementById("email");
const nameInput = document.getElementById("name");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const subjectError = document.getElementById("subject-error");
const messageError = document.getElementById("message-error");
const validationMessageContainer =
  document.getElementById("validation-message");

const inputsToValidate = [nameInput, emailInput, subjectInput, messageInput];

inputsToValidate.forEach((input) => {
  input.addEventListener("blur", validateInput);
});

function validateForm(event) {
  event.preventDefault();

  hideAllErrors();

  const nameIsValid = checkLength(nameInput, 1, nameError);
  const emailIsValid = validateEmail(emailInput, emailInput, emailError);
  const subjectIsValid = checkLength(subjectInput, 15, subjectError);
  const messageIsValid = checkLength(messageInput, 25, messageError);

  if (nameIsValid && emailIsValid && subjectIsValid && messageIsValid) {
    contactForm.classList.add("exit");
    setTimeout(function () {
      contactForm.innerHTML = "";
      validationMessageContainer.innerHTML =
        '<div class="form-success animate__animated animate__fadeIn""><h2>Thank you for your submission!</h2><div class="form-success__checkmark"><i class="fa-solid fa-check"></i></div></div><div><a href="index.html" class="cta--secondary">← Back to main page</a></div>';
      contactForm.reset();
    }, 300);
  }
}

function validateInput(event) {
  const input = event.target;
  hideAllErrors();

  if (input === nameInput) {
    checkLength(nameInput, 1, nameError);
  } else if (input === emailInput) {
    validateEmail(emailInput, emailInput, emailError);
  } else if (input === subjectInput) {
    checkLength(subjectInput, 15, subjectError);
  } else if (input === messageInput) {
    checkLength(messageInput, 25, messageError);
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

const errorsToHide = [nameError, emailError, subjectError, messageError];
function hideAllErrors() {
  errorsToHide.forEach((error) => {
    hideError(error);
  });
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
