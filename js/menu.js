const navbar = document.querySelector(".header__navbar");
const hamburger = document.querySelector(".hamburger-menu");
const dissapearYours = document.querySelector(".dissapear");
const logo = document.querySelector(".logo");

const moveMenu = () => {
  navbar.classList.toggle("change");
};

const scroller = () => {
  if (window.scrollY >= 50) {
    logo.style.transition = "1s";
    dissapearYours.style.transition = ".3s";
    dissapearYours.style.opacity = "0";
    logo.style.transform = "translateX(180%)";
  } else {
    logo.style.transition = ".6s";
    dissapearYours.style.transition = "1.5s";
    dissapearYours.style.opacity = "1";
    logo.style.transform = "translateX(0%)";
  }
};

hamburger.addEventListener("click", moveMenu);
document.addEventListener("scroll", scroller);

const popup = document.querySelector(".popup__chat");
const chat = document.querySelector(".popup__click");
const close = document.querySelector(".popup__close");

const changeclass = () => {
  popup.classList.toggle("active");
  chat.classList.toggle("active");
};

chat.addEventListener("click", changeclass);
close.addEventListener("click", changeclass);

const letteron = document.querySelector(".post-container__icon");
const letter = document.querySelector(".post-container__letter-box");
const letteroff = document.querySelector(".post-container__close");

const changeclasstwo = () => {
  letter.classList.toggle("active");
};
letteron.addEventListener("click", changeclasstwo);

const changeclassthree = () => {
  letter.classList.toggle("active");
};

letteroff.addEventListener("click", changeclassthree);
