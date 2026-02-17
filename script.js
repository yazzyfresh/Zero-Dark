const header = document.querySelector(".header");
const btn = document.querySelector(".btn-mobile-nav");

btn.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

/* Scroll reveal */
const els = document.querySelectorAll(".reveal");

const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("show");
    });
  },
  { threshold: 0.15 },
);

els.forEach((el) => obs.observe(el));

// Smooth scrolling animation
const headerEl = document.querySelector(".header");
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    // Only prevent default for anchor links
    if (href === "#" || href.startsWith("#")) {
      e.preventDefault();

      // Scroll back to top
      if (href === "#")
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

      // Scroll to other sections
      if (href !== "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

const reveals = document.querySelectorAll(".reveal, .reveal-stagger");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // animate once
      }
    });
  },
  {
    threshold: 0.15,
  },
);

reveals.forEach((el) => observer.observe(el));
