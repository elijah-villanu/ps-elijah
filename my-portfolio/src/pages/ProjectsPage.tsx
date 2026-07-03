import ProjectItem from "../components/ProjectItem"
import re8Icone from "../assets/re8.png"

function ProjectsPage() {
    return(
        <div className="w-fit flex">
            <ProjectItem
                title="Ocean Site One VR (Contributer)"
                description="(Private Repo) VR GAME This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. The default is 0 1 auto, but if you set it with a single number value, like flex: 5;, that changes the flex-basis to 0%, so it’s like setting flex-grow: 5; flex-shrink: 1; flex-basis: 0%;."
                imgPath={re8Icone}
                link="https://laes.calpoly.edu/OSOprojects"
                skills={["Unity + C#","Github", "Agile/Scrum"]}
            />
        </div>
    )
}

export default ProjectsPage