const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");
const navLink = document.querySelectorAll(".nav-link");

burger.addEventListener("click", () => {
  navbar.classList.toggle("nav-open");
  burger.classList.toggle("burger-open");
  navLink.forEach((link) => {
    link.classList.toggle("nav-link-open");
  });
});

window.onscroll = function () {
  myFunction();
};

console.log(window.scrollY, "jkkj");

const navbarr = document.querySelector(".headd");
const sticky = navbarr.offsetTop;
const light = document.querySelector(".burger");
const a = document.querySelector(".a");
const b = document.querySelector(".b");

console.log(sticky, "shaber");

function myFunction() {
  if (window.scrollY >= 40) {
    navbarr.classList.add("headdd");
    light.style.color = "white";
    b.style.display = "block";
    a.style.display = "none";
  } else {
    navbarr.classList.remove("headdd");
    light.style.color = "black";
    a.style.display = "block";
    b.style.display = "none";
  }
}
