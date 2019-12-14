// * Open Hamburger Menu *

var navMain = document.querySelector(".main-nav");
var navToggle = navMain.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

// * Slider *
var advantages = document.querySelector(".advantages");

var slider = advantages.querySelector(".slider");
var slides = slider.querySelectorAll(".slider__item");
var toggles = slider.querySelectorAll(".slider__toggle");

slides.forEach(function(item) {
  item.classList.remove("slider__item--nojs");
});
var prev = 2;
function showSlide(i) {
  toggles[i].classList.add("slider__toggle--active");
  slides[i].classList.add("slider__item--active");

  toggles[prev].classList.remove("slider__toggle--active");
  slides[prev].classList.remove("slider__item--active");

  prev = i;
}

showSlide(0);

toggles.forEach(function(item, i) {
  item.addEventListener("click", function() {
    showSlide(i);
  });
});
