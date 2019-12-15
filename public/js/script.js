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
// Find block with slider
var advantages = document.querySelector(".advantages"),
  reviews = document.querySelector(".reviews");

// Function that make slider
function makeSlider(blockName, controlButton = false) {
  var slider = blockName.querySelector(".slider"),
    slides = slider.querySelectorAll(".slider__item"),
    toggles = slider.querySelectorAll(".slider__toggle"),
    prevSlideButton = blockName.querySelector(".reviews__prev"),
    nextSlideButton = blockName.querySelector(".reviews__next"),
    prev = 2;

  slides.forEach(function(item) {
    item.classList.remove("slider__item--nojs");
  });

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

  if (controlButton) {
    prevSlideButton.addEventListener("click", function() {
      if (prev == 0) {
        showSlide(slides.length - 1);
      } else {
        showSlide(prev - 1);
      }
    });
    nextSlideButton.addEventListener("click", function() {
      if (prev == slides.length - 1) {
        showSlide(0);
      } else {
        showSlide(prev + 1);
      }
    });
  }
}

// make slider in next blocks
makeSlider(advantages);
makeSlider(reviews, true);
