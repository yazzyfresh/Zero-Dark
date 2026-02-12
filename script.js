// Cache DOM queries
const header = document.querySelector(".header");
const btn = document.querySelector(".btn-mobile-nav");
const allLinks = document.querySelectorAll("a:link");
const reveals = document.querySelectorAll(".reveal, .reveal-stagger");

// Mobile nav toggle
if (btn && header) {
  btn.addEventListener("click", () => {
    header.classList.toggle("nav-open");
  });
}

// Smooth scrolling and nav close
if (allLinks.length) {
  allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      const href = link.getAttribute("href");
      if (!href) return;

      // Only prevent default for anchor links
      if (href === "#" || href.startsWith("#")) {
        e.preventDefault();

        // Scroll back to top
        if (href === "#") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }

        // Scroll to other sections
        if (href !== "#" && href.startsWith("#")) {
          const sectionEl = document.querySelector(href);
          if (sectionEl) sectionEl.scrollIntoView({ behavior: "smooth" });
        }
      }

      // Close mobile navigation
      if (link.classList.contains("main-nav-link") && header) {
        header.classList.toggle("nav-open");
      }
    });
  });
}

// Single IntersectionObserver for all reveals
if (reveals.length) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          obs.unobserve(entry.target); // animate once
        }
      });
    },
    { threshold: 0.15 },
  );
  reveals.forEach((el) => observer.observe(el));
}
