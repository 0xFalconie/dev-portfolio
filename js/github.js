// js/github.js
const GITHUB_USERNAME = "0xFalconie";
const REPOS_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`;

async function fetchRepos() {
  const grid = document.getElementById("repos-grid");
  if (!grid) return;

  try {
    const response = await fetch(REPOS_URL);
    if (!response.ok) throw new Error("GitHub API request failed");

    const repos = await response.json();

    if (!Array.isArray(repos) || repos.length === 0) {
      grid.innerHTML = `<p class="repos-fallback">No public repositories found. Visit <a href="https://github.com/${GITHUB_USERNAME}" target="_blank" rel="noopener noreferrer">github.com/${GITHUB_USERNAME}</a></p>`;
      return;
    }

    grid.innerHTML = repos.map((repo) => {
      const updated = new Date(repo.updated_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });

      return `
        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="repo-card reveal">
          <h3 class="repo-name">${repo.name}</h3>
          <p class="repo-desc">${repo.description || "No description provided."}</p>
          <div class="repo-meta">
            ${repo.language ? `<span><i class="fas fa-circle" style="font-size:0.5rem;color:var(--accent)"></i> ${repo.language}</span>` : ""}
            <span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
            <span><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
            <span><i class="fas fa-clock"></i> ${updated}</span>
          </div>
        </a>
      `;
    }).join("");

    // Re-observe new elements for scroll reveal
    if (typeof observeReveals === "function") observeReveals();
  } catch (err) {
    grid.innerHTML = `
      <p class="repos-fallback">
        Unable to load repositories at the moment.<br>
        Visit my profile: <a href="https://github.com/${GITHUB_USERNAME}" target="_blank" rel="noopener noreferrer">github.com/${GITHUB_USERNAME}</a>
      </p>
    `;
  }
}

document.addEventListener("DOMContentLoaded", fetchRepos);