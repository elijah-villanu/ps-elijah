import ProjectItem from "../components/ProjectItem";
import type { ProjectLink } from "../components/ProjectItem";
import osoIcon from "../assets/projects/oso.png"
import stanfordIcon from "../assets/projects/stanford.png"
import potionIcon from "../assets/projects/potion.png"
import researchIcon from "../assets/projects/research.png"
import ecosystemIcon from "../assets/projects/ecosystem.png"

const projects: Array<{
    title: string;
    summary: string;
    imgPath: string;
    year: string;
    role: string;
    tags: Array<string>;
    links: Array<ProjectLink>;
}> = [
    {
        title: "Ocean Site One VR",
        summary:
            "An interactive VR experience of the marine ecosystems that formed on California's decommissioned oil rigs, built to raise awareness as their future is decided.",
        imgPath: osoIcon,
        year: "2026",
        role: "Contributor",
        tags: ["Unity", "C#", "GitHub", "Agile/Scrum"],
        links: [
            { kind: "github", url: ""},
            { kind: "website", url: "https://laes.calpoly.edu/OSOprojects" }
        ],
    },
    {
        title: "Potion Profits",
        summary:
            "A potion-selling game about paying back (or gambling away) your debt. My senior project, built by a team of six with my advisor as product manager.",
        imgPath: potionIcon,
        year: "2026",
        role: "Contributor",
        tags: ["Godot", "GDScript", "GitHub"],
        links: [
            { kind: "github", url: "https://github.com/potion-profits/pp-alpha" },
            { kind: "itch", url: "https://potion-profits.itch.io/potion-profits"},
        ],
    },
    {
        title: "California Highway Patrol Data Analysis",
        summary:
            "Exploratory analysis of California Highway Patrol stops from Stanford's Open Policing Project, looking for racial disparities after cleaning and pre-processing the data.",
        imgPath: stanfordIcon,
        year: "2026",
        role: "",
        tags: ["Python", "Polars", "DuckDB", "SQL"],
        links: [{ kind: "github", url: "https://github.com/elijah-villanu/stanford-traffic-stop-analysis" }],
    },
    {
        title: "How Does User Control Reduce Irritation of Mid-Roll Ads",
        summary:
            "Prototyped a video player that lets viewers time their own mid-roll ads, ran user interviews, and presented the findings at Cal Poly's 2025 SURP+ Symposium.",
        imgPath: researchIcon,
        year: "2025",
        role: "Research Assistant",
        tags: ["UI/UX", "Research", "TypeScript", "Astro", "Qualitative Coding"],
        links: [
            { kind: "github", url: "https://github.com/elijah-villanu/user-control-mid-roll-ads"},
            { kind: "paper", url: "https://digitalcommons.calpoly.edu/cgi/viewcontent.cgi?article=1156&context=ceng_surp" }
        ],
    },
    {
        title: "Ecosystem Simulation API",
        summary:
            "A RESTful API handling all game logic for a Pygame ecosystem simulator. I helped design and test endpoints and optimised queries with EXPLAIN and Docker.",
        imgPath: ecosystemIcon,
        year: "2024",
        role: "Contributor",
        tags: ["Python", "SQL", "PostgreSQL", "FastAPI", "Docker"],
        links: [{ kind: "github", url: "https://github.com/hlathery/Virtual-Ecosystem" }],
    },
];

function ProjectsPage() {
    // App wrapper shrinks to its content, so the grid sets its own width
    return (
        <div className="grid w-5xl max-w-full grid-cols-2 gap-4 max-[900px]:grid-cols-1">
            {projects.map((project) => (
                <ProjectItem
                    key={project.title}
                    title={project.title}
                    summary={project.summary}
                    imgPath={project.imgPath}
                    year={project.year}
                    role={project.role}
                    tags={project.tags}
                    links={project.links}
                />
            ))}
        </div>
    );
}

export default ProjectsPage;
