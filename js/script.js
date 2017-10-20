var menuButton = document.querySelector(".button-nav");
var menu = document.querySelector(".nav");
var menuLogo = document.querySelector(".header-page__image");

menuButton.addEventListener("click", function(evt){
  if(!menu.classList.contains("nav--close")){
    evt.preventDefault();
    menu.classList.add("nav--close");
    menuButton.classList.remove("button-nav--open");
    menuButton.classList.add("button-nav--close");
    menuLogo.classList.add("header-page__image--top");
  }
  else if(menu.classList.contains("nav--close")){
    evt.preventDefault();
    menu.classList.remove("nav--close");
    menuButton.classList.add("button-nav--open");
    menuButton.classList.remove("button-nav--close");
    menuLogo.classList.remove("header-page__image--top");
  }
});
