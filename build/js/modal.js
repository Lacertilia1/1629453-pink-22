const submitButton=document.querySelector(".registration__button"),closeButton=document.querySelector(".success-popup__close-button"),closeButtonTwo=document.querySelector(".failure-popup__close-button"),successPopup=document.querySelector(".success-popup"),failurePopup=document.querySelector(".failure-popup"),secondName=document.querySelector(".registration__user-input--second-name"),firstName=document.querySelector(".registration__user-input--first-name"),form=document.querySelector(".registration__form"),email=document.querySelector(".registration__contacts-input--email"),textarea=document.querySelector(".registration__emotions-textfield");form.addEventListener("submit",(function(e){secondName.value&&email.value&&firstName.value?(e.preventDefault(),successPopup.classList.remove("popup--hidden"),successPopup.classList.add("popup--show")):(e.preventDefault(),failurePopup.classList.remove("popup--hidden"),failurePopup.classList.add("popup--show"))})),closeButton.addEventListener("click",(function(e){e.preventDefault(),successPopup.classList.remove("popup--show"),successPopup.classList.add("popup--hidden")})),closeButtonTwo.addEventListener("click",(function(e){e.preventDefault(),failurePopup.classList.remove("popup--show"),failurePopup.classList.add("popup--hidden")})),window.addEventListener("keydown",(function(e){27===e.keyCode&&failurePopup.classList.contains("popup--show")&&(e.preventDefault(),failurePopup.classList.remove("popup--show"),failurePopup.classList.add("popup--hidden"))})),window.addEventListener("keydown",(function(e){27===e.keyCode&&successPopup.classList.contains("popup--show")&&(e.preventDefault(),successPopup.classList.remove("popup--show"),successPopup.classList.add("popup--hidden"))}));