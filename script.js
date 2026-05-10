
// LOADER
window.addEventListener("load", () => {
  document.querySelector(".loader").style.display = "none";
});


// CURSOR
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});


// SCROLL REVEAL
const elements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if(top < window.innerHeight - 80){
      el.classList.add("active");
    }
  });
});


// NAVBAR EFFECT
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");

  nav.style.background =
    window.scrollY > 60
      ? "rgba(2,27,40,0.85)"
      : "rgba(255,255,255,0.06)";
});


// MOBILE MENU
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});


// PARALLAX HERO
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  let value = window.scrollY;
  hero.style.backgroundPositionY = value * 0.4 + "px";
});
