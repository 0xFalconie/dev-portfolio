// js/typing.js
const roles = [
    "FalconieSync",
  "Software Engineer",
  "Backend Developer",
  "PHP Developer",
  "Open Source Enthusiast",
  "Academic Researcher"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById("typed-text");
const typingSpeed = 90;
const deletingSpeed = 50;
const pauseTime = 1800;

function typeRole() {
  if (!typedEl) return;

  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typedEl.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? deletingSpeed : typingSpeed;

  if (!isDeleting && charIndex === currentRole.length) {
    delay = pauseTime;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 400;
  }

  setTimeout(typeRole, delay);
}

document.addEventListener("DOMContentLoaded", () => {
  if (typedEl) typeRole();
});