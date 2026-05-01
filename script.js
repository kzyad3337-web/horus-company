
// ============================
// SMOOTH SCROLL NAVIGATION
// ============================
document.querySelectorAll('.menu a, .footer-right a').forEach(link => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (targetId.startsWith("#")) {
      e.preventDefault();

      const target = document.querySelector(targetId);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  });
});


// ============================
// NAVBAR SCROLL EFFECT
// ============================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(3, 24, 42, 0.95)";
    navbar.style.backdropFilter = "blur(10px)";
  } else {
    navbar.style.background = "rgba(0, 0, 0, 0.7)";
  }
});


// ============================
// ACTIVE MENU LINK ON SCROLL
// ============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


// ============================
// SCROLL ANIMATION (REVEAL)
// ============================
const animatedElements = document.querySelectorAll(".card, .about-section, .hero-content");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

animatedElements.forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});


// ============================
// HERO BUTTON ACTION
// ============================
const heroBtn = document.querySelector(".btn");

if (heroBtn) {
  heroBtn.addEventListener("click", () => {
    const services = document.querySelector("#services");

    if (services) {
      services.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
}


// ============================
// FIX WHATSAPP FLOAT BUTTON
// ============================
const whatsapp = document.querySelector(".contact-btn");

if (whatsapp) {
  whatsapp.classList.add("whatsapp-float");
}