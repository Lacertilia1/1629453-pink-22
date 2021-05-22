// Переменные

var pageHeader = document.querySelector(".page-header");
var navList = document.querySelector(".page-header__list");
var navToggle = document.querySelector(".page-header__toggle");
var navToggleItemFirst = document.querySelector(".page-header__toggle-item--first");
var navToggleItemSecond = document.querySelector(".page-header__toggle-item--second");

// Без javascript меню находится в открытом состоянии.
// Строки ниже закрывают его, чтобы появился "бургер".

pageHeader.classList.add("page-header--background-js");
navList.classList.add("page-header__list--hidden");
navToggle.classList.remove("page-header__toggle--no-js");

// Функция

navToggle.addEventListener("click", function () {
  if (navList.classList.contains("page-header__list--hidden")) {
    pageHeader.classList.remove("page-header--background-js");
    navList.classList.remove("page-header__list--hidden");
    navToggleItemFirst.classList.add("page-header__toggle-item--hidden");
    navToggleItemSecond.classList.remove("page-header__toggle-item--hidden");
  } else {
    pageHeader.classList.add("page-header--background-js");
    navList.classList.add("page-header__list--hidden");
    navToggleItemFirst.classList.remove("page-header__toggle-item--hidden");
    navToggleItemSecond.classList.add("page-header__toggle-item--hidden");
  }
});
