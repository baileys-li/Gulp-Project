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
    if (i == prev) {
      return;
    }
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

// * Login Modal *

var userLink = document.querySelector(".user-list__login"),
  modal = document.querySelector(".modal-login"),
  close = modal.querySelector(".modal-login__close");

var login = modal.querySelector("#user-login"),
  password = modal.querySelector("#user-password");

var isStorageSupport = true,
  storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

modal.classList.remove("modal-login--nojs");

userLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.add("modal-login--show");

  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.remove("modal-login--show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
  }
  if (modal.classList.contains("modal-login--show")) {
    modal.classList.remove("modal-login--show");
  }
});
