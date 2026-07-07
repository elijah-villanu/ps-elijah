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
                <div className="group flex justify-between gap-7 max-[500px]:flex-col">
                    <img src={imgPath}
                        className="max-w-50 max-h-50 transition-transform duration-300 group-hover:scale-105">
                    </img>
                    <div className="flex flex-col gap-4">
                        <h3 className="hover:underline transition-all duration-300">
                            {title}
                        </h3>
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