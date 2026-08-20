// js/script.js
// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const html = document.documentElement;

function setTheme(theme) {
  html.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  if (themeIcon) {
    themeIcon.className = theme === "dark" ? "fas fa-moon" : "fas fa-sun";
  }
}

const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  });
}

// Mobile menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    hamburger.classList.toggle("active", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      hamburger.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}

// Navbar scroll effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (navbar) {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  }
});

// Active nav link on scroll
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

function highlightNav() {
  const scrollY = window.scrollY + 100;
  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    if (scrollY >= top && scrollY < top + height) {
      navItems.forEach((item) => {
        item.classList.remove("active");
        if (item.getAttribute("href") === `#${id}`) {
          item.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", highlightNav);

// Scroll reveal
function observeReveals() {
  const reveals = document.querySelectorAll(".reveal:not(.visible)");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  reveals.forEach((el) => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  // Add reveal class to key elements
  document.querySelectorAll(
    ".skill-category, .fact-card, .timeline-item, .about-text, .contact-info, .contact-form"
  ).forEach((el) => el.classList.add("reveal"));

  observeReveals();
});

// Contact form note (no fake submit)
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    // Allow Formspree to handle if configured; otherwise prevent default and alert
    const action = contactForm.getAttribute("action");
    if (action.includes("YOUR_FORM_ID")) {
      e.preventDefault();
      alert("Please configure Formspree (or another email service) by replacing YOUR_FORM_ID in the form action.");
    }
  });
}