// js/projects.js
const projects = [
  {
    title: "Agricultural Knowledge Portal",
    description: "A platform connecting farmers with agricultural experts through articles, questions, expert answers and knowledge sharing.",
    image: "images/projects/agri-portal.jpg",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    github: "https://github.com/0xFalconie/Agri_portal",
    demo: null
  },
  {
    title: "Online Clearance System",
    description: "A web-based student clearance platform designed to automate and simplify the graduation clearance process.",
    image: "images/projects/clearance-system.jpg",
    technologies: ["PHP", "MySQL", "JavaScript"],
    github: "https://github.com/0xFalconie/Online_Clearance_System",
    demo: null
  },
  {
    title: "Smart Inventory Prediction and Restock Alert System",
    description: "A smart inventory management system designed to monitor stock levels, predict inventory needs and generate restock alerts.",
    image: "images/projects/inventory-system.jpg",
    technologies: ["PHP", "MySQL", "JavaScript"],
    github: null,
    demo: null
  },
  {
    title: "Fashion Design Booking System",
    description: "A web application that allows customers to book fashion design services and manage appointments.",
    image: "images/projects/fashion-booking.jpg",
    technologies: ["PHP", "MySQL", "JavaScript"],
    github: null,
    demo: null
  },
  {
    title: "Secure Student Information and Communication Platform",
    description: "A secure web platform for managing student information and communication.",
    image: "images/projects/student-platform.jpg",
    technologies: ["PHP", "MySQL", "JavaScript"],
    github: null,
    demo: null
  },
  {
    title: "Automated Invigilation System",
    description: "An examination management and invigilation platform incorporating student verification, examination credentials and administrative controls.",
    image: "images/projects/invigilation-system.jpg",
    technologies: ["PHP", "MySQL", "JavaScript", "QR Code", "Facial Biometric Verification"],
    github: null,
    demo: null
  }
];

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = projects.map((project) => {
    const techBadges = project.technologies
      .map((tech) => `<span class="tech-badge">${tech}</span>`)
      .join("");

    const githubBtn = project.github
      ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="View ${project.title} on GitHub">
           <i class="fab fa-github"></i>
         </a>`
      : "";

    const demoBtn = project.demo
      ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="Live demo of ${project.title}">
           <i class="fas fa-external-link-alt"></i>
         </a>`
      : "";

    return `
      <article class="project-card reveal">
        <div class="project-img-wrapper">
          <img src="${project.image}" alt="${project.title} screenshot" class="project-img"
               onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="project-img-placeholder" style="display:none;">
            <i class="fas fa-code"></i>
          </div>
        </div>
        <div class="project-body">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.description}</p>
          <div class="project-tech">${techBadges}</div>
          <div class="project-links">
            ${githubBtn}
            ${demoBtn}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

document.addEventListener("DOMContentLoaded", renderProjects);