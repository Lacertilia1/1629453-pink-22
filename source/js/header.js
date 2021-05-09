// Variables

var navMain = document.querySelector(".page-header__navigation");
var navToggle = document.querySelector(".page-header__toggle");

var navPseudo = document.querySelector(".page-header__pseudo-element");
var navMainWrapper = document.querySelector(".page-header__main-wrapper");
var navNavWrapper = document.querySelector(".page-header__desktop-nav-wrapper");
var navHeaderList = document.querySelector(".page-header__list");
var navHeader = document.querySelector(".page-header");
var navDesktopWrapper = document.querySelector(".page-header__desktop-wrapper");
var navLogoClosed = document.querySelector(".page-header__toggle-item--closed");
var navLogoOpened = document.querySelector(".page-header__toggle-item--opened");
var navHeaderItemOne = document.querySelector(".page-header__item--first");
var navHeaderItemTwo = document.querySelector(".page-header__item--second");
var navHeaderItemThree = document.querySelector(".page-header__item--third");
var navHeaderItemFour = document.querySelector(".page-header__item--fourth");
var introListWrapper = document.querySelector(".intro__list-wrapper");

// Mobile no-js

navLogoOpened.classList.add("page-header__toggle-item--hidden");
navLogoClosed.classList.remove("page-header__toggle-item--hidden");
navHeaderItemOne.classList.add("page-header__item--hidden");
navHeaderItemTwo.classList.add("page-header__item--hidden");
navHeaderItemThree.classList.add("page-header__item--hidden");
navHeaderItemFour.classList.add("page-header__item--hidden");
navPseudo.classList.remove("page-header__pseudo-element--opened");
navMainWrapper.classList.remove("page-header__main-wrapper--opened");
navNavWrapper.classList.remove("page-header__desktop-nav-wrapper--opened");
navHeaderList.classList.remove("page-header__list--opened");
navHeader.classList.remove("page-header--opened");
navDesktopWrapper.classList.remove("page-header__desktop-wrapper--no-color");
introListWrapper.classList.add("intro__list-wrapper--closed");

// Tablet no-js

// Function

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("page-header__navigation--closed")) {
    navMain.classList.remove("page-header__navigation--closed");
    navMain.classList.add("page-header__navigation--opened");

    navHeaderItemOne.classList.remove("page-header__item--hidden");
    navHeaderItemTwo.classList.remove("page-header__item--hidden");
    navHeaderItemThree.classList.remove("page-header__item--hidden");
    navHeaderItemFour.classList.remove("page-header__item--hidden");
    introListWrapper.classList.remove("intro__list-wrapper--closed");
    navPseudo.classList.add("page-header__pseudo-element--opened");
    navMainWrapper.classList.add("page-header__main-wrapper--opened");
    navNavWrapper.classList.add("page-header__desktop-nav-wrapper--opened");
    navHeaderList.classList.add("page-header__list--opened");
    navHeader.classList.add("page-header--opened");
    navDesktopWrapper.classList.add("page-header__desktop-wrapper--no-color");
    introListWrapper.classList.add("intro__list-wrapper--opened");

    // Logo
    navLogoClosed.classList.add("page-header__toggle-item--hidden");
    navLogoOpened.classList.remove("page-header__toggle-item--hidden");
  } else {
    navMain.classList.add("page-header__navigation--closed");
    navMain.classList.remove("page-header__navigation--opened");

    navHeaderItemOne.classList.add("page-header__item--hidden");
    navHeaderItemTwo.classList.add("page-header__item--hidden");
    navHeaderItemThree.classList.add("page-header__item--hidden");
    navHeaderItemFour.classList.add("page-header__item--hidden");
    navPseudo.classList.remove("page-header__pseudo-element--opened");
    navMainWrapper.classList.remove("page-header__main-wrapper--opened");
    navNavWrapper.classList.remove("page-header__desktop-nav-wrapper--opened");
    navHeaderList.classList.remove("page-header__list--opened");
    navHeader.classList.remove("page-header--opened");
    navDesktopWrapper.classList.remove("page-header__desktop-wrapper--no-color");
    introListWrapper.classList.remove("intro__list-wrapper--opened");
    introListWrapper.classList.remove("intro__list-wrapper--opened");
    introListWrapper.classList.add("intro__list-wrapper--closed");
    // Logo
    navLogoOpened.classList.add("page-header__toggle-item--hidden");
    navLogoClosed.classList.remove("page-header__toggle-item--hidden");
  }
});
