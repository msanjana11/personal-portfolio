const API_URL = "https://portfolio-backend-kkwj.onrender.com/api/projects";

const projectContainer = document.getElementById("projects");

async function loadProjects() {

    const res = await fetch(API_URL);
    const projects = await res.json();

    projectContainer.innerHTML = "";

    projects.forEach(project => {

        projectContainer.innerHTML += `
        
            <div class="project-card">

                <h3>${project.title}</h3>

                <p>${project.description}</p>

                <a href="${project.githubLink}" target="_blank">
                    GitHub
                </a>

                <a href="${project.liveLink}" target="_blank">
                    Live
                </a>

            </div>
        `;
    });
}

loadProjects();