//NAV
const navBtn = document.querySelector(".navigation__toggle");
const navigation = document.querySelector(".navigation");
const navLinks = document.querySelectorAll(".nav__link");

navBtn.addEventListener("click", function () {
  navigation.classList.toggle("hidden");
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navigation.classList.add("hidden");
  });
}

//POPUP
const openBtn = document.querySelectorAll(".popup-open");
const closeBtn = document.querySelector(".popup__close-btn");
const popup = document.querySelector(".popup");

for (let i = 0; i < openBtn.length; i++) {
  openBtn[i].addEventListener("click", function () {
    popup.classList.remove("hidden");
    navBtn.classList.add("hidden");
  });
}

closeBtn.addEventListener("click", function () {
  popup.classList.add("hidden");
  navBtn.classList.remove("hidden");
});

//Video
const playBtn = document.querySelector(".vid-btn");
const videoOver = document.querySelector(".video__overlay");
const video = document.querySelector(".video");

playBtn.addEventListener("click", function () {
  videoOver.classList.remove("hidden");
  video.src =
    "https://player.vimeo.com/video/434213215?h=f689b5d773&title=0&byline=0&portrait=0&autoplay=1";
});

videoOver.addEventListener("click", function () {
  videoOver.classList.add("hidden");
  video.src =
    "https://player.vimeo.com/video/434213215?h=f689b5d773&title=0&byline=0&portrait=0&autoplay=0";
});
