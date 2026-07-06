import TechItem from "./TechItem";
interface ProjectItemProps {
    title: string;
    description: string;
    imgPath: string;
    link: string;
    skills: Array<string>
}

function ProjectItem({ title, description, imgPath, link, skills }: ProjectItemProps) {
    return (
        <div>
            <a href={link}>
                <div className="flex justify-between rounded-2xl gap-4 hover:bg-gray-300/45 transition-all duration-300">
                    <img src={imgPath}
                        className="max-w-50 max-h-50">
                    </img>
                    <div className="flex flex-col gap-4">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <div id="project-item-skills"
                            className="flex flex-wrap gap-3 gap-y-1"
                        >
                            {skills.map((skill) =>
                                < TechItem item={skill} />
                            )
                            }
                        </div>
                    </div>
                </div>
            </a>
        </div>

    )
}

export default ProjectItem;