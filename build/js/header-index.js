var navMain=document.querySelector(".page-header__navigation"),navToggle=document.querySelector(".page-header__toggle"),navPseudo=document.querySelector(".page-header__pseudo-element"),navMainWrapper=document.querySelector(".page-header__main-wrapper"),navNavWrapper=document.querySelector(".page-header__desktop-nav-wrapper"),navHeaderList=document.querySelector(".page-header__list"),navHeader=document.querySelector(".page-header"),navDesktopWrapper=document.querySelector(".page-header__desktop-wrapper"),navLogoClosed=document.querySelector(".page-header__toggle-item--closed"),navLogoOpened=document.querySelector(".page-header__toggle-item--opened"),navHeaderItemOne=document.querySelector(".page-header__item--first"),navHeaderItemTwo=document.querySelector(".page-header__item--second"),navHeaderItemThree=document.querySelector(".page-header__item--third"),navHeaderItemFour=document.querySelector(".page-header__item--fourth"),introListWrapper=document.querySelector(".intro__list-wrapper");navLogoOpened.classList.add("page-header__toggle-item--hidden"),navLogoClosed.classList.remove("page-header__toggle-item--hidden"),navHeaderItemOne.classList.add("page-header__item--hidden"),navHeaderItemTwo.classList.add("page-header__item--hidden"),navHeaderItemThree.classList.add("page-header__item--hidden"),navHeaderItemFour.classList.add("page-header__item--hidden"),navMainWrapper.classList.remove("page-header__main-wrapper--opened"),navNavWrapper.classList.remove("page-header__desktop-nav-wrapper--opened"),navHeaderList.classList.remove("page-header__list--opened"),navHeader.classList.remove("page-header--opened"),navDesktopWrapper.classList.remove("page-header__desktop-wrapper--no-color"),introListWrapper.classList.add("intro__list-wrapper--closed"),navToggle.classList.remove("page-header__toggle--no-js"),navToggle.classList.add("page-header__toggle--js"),navHeader.classList.remove("page-header__pseudo-element--opened"),navToggle.addEventListener("click",(function(){navMain.classList.contains("page-header__navigation--closed")?(navMain.classList.remove("page-header__navigation--closed"),navMain.classList.add("page-header__navigation--opened"),navHeaderItemOne.classList.remove("page-header__item--hidden"),navHeaderItemTwo.classList.remove("page-header__item--hidden"),navHeaderItemThree.classList.remove("page-header__item--hidden"),navHeaderItemFour.classList.remove("page-header__item--hidden"),introListWrapper.classList.remove("intro__list-wrapper--closed"),navPseudo.classList.add("page-header__pseudo-element--opened"),navMainWrapper.classList.add("page-header__main-wrapper--opened"),navNavWrapper.classList.add("page-header__desktop-nav-wrapper--opened"),navHeaderList.classList.add("page-header__list--opened"),navHeader.classList.add("page-header--opened"),navDesktopWrapper.classList.add("page-header__desktop-wrapper--no-color"),introListWrapper.classList.add("intro__list-wrapper--opened"),navLogoClosed.classList.add("page-header__toggle-item--hidden"),navLogoOpened.classList.remove("page-header__toggle-item--hidden")):(navMain.classList.add("page-header__navigation--closed"),navMain.classList.remove("page-header__navigation--opened"),navHeaderItemOne.classList.add("page-header__item--hidden"),navHeaderItemTwo.classList.add("page-header__item--hidden"),navHeaderItemThree.classList.add("page-header__item--hidden"),navHeaderItemFour.classList.add("page-header__item--hidden"),navPseudo.classList.remove("page-header__pseudo-element--opened"),navMainWrapper.classList.remove("page-header__main-wrapper--opened"),navNavWrapper.classList.remove("page-header__desktop-nav-wrapper--opened"),navHeaderList.classList.remove("page-header__list--opened"),navHeader.classList.remove("page-header--opened"),navDesktopWrapper.classList.remove("page-header__desktop-wrapper--no-color"),introListWrapper.classList.remove("intro__list-wrapper--opened"),introListWrapper.classList.remove("intro__list-wrapper--opened"),introListWrapper.classList.add("intro__list-wrapper--closed"),navLogoOpened.classList.add("page-header__toggle-item--hidden"),navLogoClosed.classList.remove("page-header__toggle-item--hidden"))}));