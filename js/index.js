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
