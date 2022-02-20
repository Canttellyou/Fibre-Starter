document.querySelector(".header").addEventListener("mousemove", eyeball);
const cursor = document.querySelector(".cursor");
const body = document.querySelector("body");
const slides = document.querySelectorAll(".portfolios__design");
const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");
const bottom = document.querySelector(".bottom");

const viewWidth = window.innerWidth;
console.log(viewWidth);

// slides.forEach((s, i) => {
//   s.style.transform = `translateX(${100 * i}%)`;
// });

/// 0%,100%,200%,300%
let curSlide = 0;
const maxSlide = slides.length - 1;
//Next Slide
const nextSlide = function (e) {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * -curSlide}%)`;
  });
};
const prevSlide = function (e) {
  if (curSlide === 0) {
    curSlide = 0;
  } else {
    curSlide--;
  }
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * -curSlide}%)`;
  });
};
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
////////////////////////
function eyeball() {
  const eye = document.querySelectorAll(".eyes");
  eye.forEach(function (eye) {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotation = radian * (-180 / Math.PI) * 1 - 270;
    eye.style.transform = "rotate(" + rotation + "deg)";
  });
}

body.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
function myFunction(x) {
  x.classList.toggle("change");
  document.querySelector(".menu-nav").classList.toggle("hide");
  // overlayOne.classList.toggle("hide");
}
// overlayOne.addEventListener("click", function () {
//   overlayOne.classList.add("hide");
//   document.querySelector(".menu-nav").classList.add("hide");
//   document.querySelector(".container").classList.remove("change");
// });
document.addEventListener("keydown", function (esc) {
  if (
    esc.key === "Escape" &&
    document.querySelector(".burger").classList.contains("change")
  ) {
    document.querySelector(".burger").classList.remove("change");
  }
});
