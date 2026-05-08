const projects = [

    {
        title:"Agri Connect",
        description:"Platform connecting farmers for buying, selling and exchanging agricultural products."
    },

    

    {
        title:"MSME Idea Hackathon 5.0",
        description:"Participated in national level innovation and startup hackathon."
    },

    {
        title:"Startup Hackathon - SKCET",
        description:"Participated in hackathon focused on startup ideas and problem solving."
    },

    {
        title:"U and Me State Level Hackathon",
        description:"Collaborated with team members to develop innovative technical solutions."
    }

];

const projectContainer = document.getElementById("projects");

projects.forEach(project => {

    projectContainer.innerHTML += `

        <div class="project-card">

            <h3>${project.title}</h3>

            <p>${project.description}</p>

        </div>
    `;
});