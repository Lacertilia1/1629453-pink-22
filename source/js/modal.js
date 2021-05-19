const submitButton = document.querySelector(".registration__button");
const closeButton = document.querySelector(".success-popup__close-button");
const closeButtonTwo = document.querySelector(".failure-popup__close-button");
const successPopup = document.querySelector(".success-popup");
const failurePopup = document.querySelector(".failure-popup");
const secondName = document.querySelector(".registration__user-input--second-name");
const firstName = document.querySelector(".registration__user-input--first-name");
const form = document.querySelector(".registration__form");
const email = document.querySelector(".registration__contacts-input--email");
const textarea = document.querySelector(".registration__emotions-textfield");

// Проверка наличия localStorage в браузере.

// let isStorageSupport = true;
// let storageFirstName = localStorage.getItem("firstName");
// let storageSecondName = localStorage.getItem("secondName");
// let storageEmail = localStorage.getItem("email");

// try {
//   storage = localStorage.getItem("firstName");
//   storage = localStorage.getItem("secondName");
//   storage = localStorage.getItem("email");
// } catch (err) {
//   isStorageSupport = false;
// }

// Оживление формы.

form.addEventListener("submit", function (evt) {
  if (!secondName.value || !email.value || !firstName.value) {
    evt.preventDefault();
    failurePopup.classList.remove("popup--hidden");
    failurePopup.classList.add("popup--show");
  } else {
    evt.preventDefault();
    successPopup.classList.remove("popup--hidden");
    successPopup.classList.add("popup--show");
  }
});

// Закрытие модальных окон

closeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  successPopup.classList.remove("popup--show");
  successPopup.classList.add("popup--hidden");
});

closeButtonTwo.addEventListener("click", function (evt) {
  evt.preventDefault();
  failurePopup.classList.remove("popup--show");
  failurePopup.classList.add("popup--hidden");
});

// Закрытие модальных окон с помощью Esc

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (failurePopup.classList.contains("popup--show")) {
      evt.preventDefault();
      failurePopup.classList.remove("popup--show");
      failurePopup.classList.add("popup--hidden");
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (successPopup.classList.contains("popup--show")) {
      evt.preventDefault();
      successPopup.classList.remove("popup--show");
      successPopup.classList.add("popup--hidden");
    }
  }
});
