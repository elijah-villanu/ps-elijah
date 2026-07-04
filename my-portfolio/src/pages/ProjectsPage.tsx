import ProjectItem from "../components/ProjectItem";
import osoIcon from "../assets/projects/oso.png"
import stanfordIcon from "../assets/projects/stanford.png"
import potionIcon from "../assets/projects/potion.png"
import researchIcon from "../assets/projects/research.png"
import ecosystemIcon from "../assets/projects/ecosystem.png"

const projects = [
    {
        title: "Ocean Site One VR (Contributer)",
        description:
            "(Private Repo) An interactive VR experience based of the defunct oil platforms along California's Coast. Over time, populace artifical reefs formed on the rigs' base, creating it's own marine ecosystem. The goal of the project is to increase awareness and empathy for such life as decisions continue to be made for the oil rigs' future: whether that's removal or preservation.",
        imgPath: osoIcon,
        link: "https://laes.calpoly.edu/OSOprojects",
        skills: ["Unity + C#", "Github", "Agile/Scrum"],
    },
    {
        title: "Potion Profits (Contributer)",
        description:
            "A small potion selling game where you try to pay back (or gamble) your debt. In addition to being my senior project, this is the first game I've made at this scale. This game was made on a team of six with my senior advisor acting as our product manager.",
        imgPath: potionIcon,
        link: "https://github.com/potion-profits/pp-alpha",
        skills: ["Godot + GDscript", "Github"],
    },
    {
        title: "California Highway Patrol Data Analysis",
        description:
            "Using a dataset from Stanford's open policing project I performed a EDA and generated a report based on the findings from California Highway Patrol stops. The main goal of the project was to uncover potential racial discrapencies or injustices within traffic stops in the data. Additionally, I practiced data cleaning and pre-processing before analysis.",
        imgPath: stanfordIcon,
        link: "https://github.com/elijah-villanu/stanford-traffic-stop-analysis",
        skills: ["Python", "Polars", "DuckDB", "SQL"],
    },
    {
        title: "How Does User Control Reduce Irritation of Mid-Roll Ads",
        description:
            "Assisted Dr. Silas Hsu's research project by prototyping and gathering qualititative data via user interview for a novel video player feature that allows user to control the timing of mid roll ads. With these findings, I generated a short research report and poster that was presented at Cal Poly's 2025 SURP+ Symposium. Additionally, I worked on a custom video platform that replicates the novel feature for larger scale testing.",
        imgPath: researchIcon,
        link: "https://digitalcommons.calpoly.edu/cgi/viewcontent.cgi?article=1156&context=ceng_surp",
        skills: ["UI/UX", "Research", "Typescript", "Astro", "Qualitative Coding"],
    },
    {
        title: "Ecosystem Simulation API (Contributer)",
        description:
            "Contributed to creating a RESTful API that handles all in-game logic for an ecosystem simulator made in Pygame. In addition to assisting with endpoint design and implementation, I performed end point testing and query optimization with SQL's EXPLAIN and Docker.",
        imgPath: ecosystemIcon,
        link: "https://github.com/hlathery/Virtual-Ecosystem",
        skills: ["Python", "SQL", "PostgreSQL", "FastAPI", "Docker"],
    },
];

function ProjectsPage() {
    return (
        <div className="flex flex-col gap-5">
            {projects.map((project) => (
                <ProjectItem
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    imgPath={project.imgPath}
                    link={project.link}
                    skills={project.skills}
                />
            ))}
        </div>
    );
}

export default ProjectsPage;