// -----------countDown-----------
const daysitem = document.querySelector("#days");
const hoursitem = document.querySelector("#hours");
const minsitem = document.querySelector("#min");
const secitem = document.querySelector("#sec");

let countDown = () => {
  let saleEndDate = new Date();
  let currentDate = new Date("20 Sep 2023");
  let remainingDate = currentDate - saleEndDate;

  let days = Math.floor(remainingDate / 1000 / 60 / 60 / 24);
  let hours = Math.floor((remainingDate / 1000 / 60 / 60) % 24);
  let min = Math.floor((remainingDate / 1000 / 60) % 60);
  let sec = Math.floor((remainingDate / 1000) % 60);

  daysitem.innerHTML = days;
  hoursitem.innerHTML = hours;
  minsitem.innerHTML = min;
  secitem.innerHTML = sec;
};
countDown();

setInterval(countDown, 1000);

// ----scroll back to top----

// function scrollTopBack() {
//   let scrollTopButton = document.querySelector("#scrollUp");
//   window.onscroll = function () {
//     var scroll = document.documentElement.scrollTop;
//     if (scroll >= 250) {
//       scrollTopButton.classList.add("scrollActive");
//     } else {
//       scrollTopButton.classList.remove("scrollActive");
//     }
//   };
// }

// ---nav hide---

var navbar = document.querySelectorAll(".nav-link");
navbar.forEach(function (a) {
  a.addEventListener("click", function () {
    removeActive();
    a.classList.add("active");
  });
});
var removeActive = function () {
  var navbar = document.querySelectorAll(".nav-link");

  navbar.forEach(function (a) {
    // var navbar = document.querySelectorAll(".nav-link");
    a.classList.remove("active");
  });
};
