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
                        className="max-w-50 max-h-50 mt-1.25 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                    </img>
                    <div className="flex flex-col gap-4">
                        <h3 className="relative w-fit transition-all duration-300
                                after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-black
                                after:transition-all after:duration-300 after:ease-out
                                after:w-0 hover:after:w-full">
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