//POPUP
const openBtn = document.querySelector(".popup-open");
const closeBtn = document.querySelector(".popup__close-btn");
const popup = document.querySelector(".popup");

openBtn.addEventListener("click", function () {
  popup.classList.remove("hidden");
});

closeBtn.addEventListener("click", function () {
  popup.classList.add("hidden");
});

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
