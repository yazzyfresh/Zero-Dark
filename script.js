const header = document.querySelector(".header");
const btn = document.querySelector(".btn-mobile-nav");

btn.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

/* Scroll reveal */
const els = document.querySelectorAll(".reveal");

const obs = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("show");
    });
  },
  { threshold: 0.15 }
);

els.forEach(el => obs.observe(el));
