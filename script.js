
function reveal(){

  let reveals=document.querySelectorAll(".reveal");

  reveals.forEach((element)=>{

    let windowHeight=window.innerHeight;

    let revealTop=element.getBoundingClientRect().top;

    let revealPoint=100;

    if(revealTop < windowHeight - revealPoint){

      element.classList.add("active");

    }

  });

}

window.addEventListener("load",()=>{

  document.querySelector(".hero-content").style.opacity="1";

  document.querySelector(".hero-content").style.transform="translateY(0)";

});

window.addEventListener("scroll",reveal);

window.addEventListener("scroll",()=>{

  const navbar=document.querySelector(".navbar");

  if(window.scrollY > 50){

    navbar.style.background="#021b28";
    navbar.style.boxShadow="0 5px 20px rgba(0,0,0,.4)";

  }else{

    navbar.style.background="transparent";
    navbar.style.boxShadow="none";

  }

});

const toggle=document.querySelector(".menu-toggle");

const menu=document.querySelector(".menu");

toggle.addEventListener("click",()=>{

  menu.classList.toggle("active");

});
// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
});

// Navbar blur effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  nav.style.background = window.scrollY > 50
    ? "rgba(2,24,42,0.9)"
    : "rgba(255,255,255,0.06)";
});
