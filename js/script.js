// Navigation
const navToggle = document.querySelector(".nav__btn");
const navigation = document.querySelector(".navigation");
const navLinks = document.querySelectorAll(".navigation__link");

navToggle.addEventListener("click", function () {
  navigation.classList.toggle("hidden");
});

for (i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navigation.classList.toggle("hidden");
  });
}

//Form Popup
const popupClose = document.querySelector(".close-btn");
const btnCta = document.querySelector(".btn-cta");
const popup = document.querySelector(".popup");

btnCta.addEventListener("click", function () {
  popup.classList.remove("hidden");
  navToggle.classList.add("hidden");
});

popupClose.addEventListener("click", function () {
  popup.classList.add("hidden");
  navToggle.classList.remove("hidden");
});

//Video Popup
const vidOverlay = document.querySelector(".section-listings__video-overlay");
const vidBtn = document.querySelector(".section-listings__btn");
const video = document.getElementById("video");

vidBtn.addEventListener("click", function () {
  vidOverlay.classList.add("active");
  video.src += "&autoplay=1";
});

vidOverlay.addEventListener("click", function () {
  vidOverlay.classList.remove("active");
  video.src -= "&autoplay=1";
});
