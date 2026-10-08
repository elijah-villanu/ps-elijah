import githubIcon from "../assets/github.svg"
import linkedinIcon from "../assets/linkedin.svg"
import itchioIcon from "../assets/itchio.svg"
import re8Icon from "../assets/re8.png"
import profileIcon from "../assets/profile.jpg"
import { Icon } from "@iconify/react"
import TechItem from "../components/TechItem"

interface AboutPageProps {
    aboutText: string
}

const techItems = 
    {
        languageItems: ["Python", "TypeScript", "JavaScript", "C#", "C++", "SQL"],
        frameworkItems: ["React", "SvelteKit", "HTML + CSS", "FastAPI", "Node", "Unity", "Godot"],
        toolsItems: ["GitHub", "Docker", "AWS", "PostgreSQL", "Claude", "MCP"]
    }

// Caption shown above each techItems group
const skillGroups = [
    { caption: "Languages", items: techItems.languageItems },
    { caption: "Frameworks & Engines", items: techItems.frameworkItems },
    { caption: "Tools", items: techItems.toolsItems },
]



function AboutPage({ aboutText }: AboutPageProps) {
    return (
        <div className="w-full">
            <div className="flex min-h-11 h-fit gap-4 mb-4 max-[600px]:flex-col max-[600px]:[&>section]:w-full">
                <section id="about-id"
                    className="flex flex-col gap-9 p-6 min-w-64 rounded-2xl border-[2px] light-border bg-white/28 backdrop-blur-[4px] backdrop-brightness-117 shadow-[inset_0_0_8px_1px_rgb(255_255_255/0.3)]">
                    <div className="flex flex-col items-center gap-2 justify-center">
                        <img src={profileIcon}
                            className="max-w-30 rounded-full"
                        ></img>
                        <h4 className="italic">Aspiring Developer</h4>
                    </div>
                    {/* email, school, degree, city */}
                    <div id="about-id-content"
                        className="flex flex-col gap-3 [&>div]:flex [&>div]:items-center [&>div]:gap-3 "
                    >
                        <div>
                            <Icon icon="ic:outline-email"
                                className="size-4 shrink-0"
                            />
                            <p>elijahrvillan@gmail.com</p>
                        </div>
                        <div>
                            <Icon icon="teenyicons:school-outline"
                                className="size-4 shrink-0"
                            />
                            <p>California Polytechnic State University</p>
                        </div>
                        <div>
                            <Icon icon="simple-line-icons:graduation"
                                className="size-4 shrink-0"
                            />
                            <p>B.S. Computer Science</p>
                        </div>
                        <div>
                            <Icon icon="iconamoon:location"
                                className="size-4 shrink-0"
                            />
                            <p>Santa Maria, CA</p>
                        </div>

                    </div>
                    <div id="about-id-socials"
                        className="flex gap-3 justify-between"
                    >
                        <a href="https://github.com/elijah-villanu">
                            <img src={githubIcon}
                                className="max-w-12"
                            ></img>
                        </a>
                        <a href="https://linkedin.com/in/elijah-villanueva">
                            <img src={linkedinIcon}
                                className="max-w-12"
                            ></img>
                        </a>
                        <a href="https://eli-villi.itch.io/">
                            <img src={itchioIcon}
                                className="max-w-13"
                            ></img>
                        </a>
                    </div>
                </section>
                <section id="about-text"
                    className="p-6 rounded-2xl border-[2px] light-border bg-white/28 backdrop-blur-[4px] backdrop-brightness-117 shadow-[inset_0_0_8px_1px_rgb(255_255_255/0.3)]"
                >
                    <h1>Hello</h1>
                    <p className="whitespace-pre-line pt-2">{aboutText}</p>
                </section>
            </div>
            <div className="flex min-h-11 h-fit gap-4 max-[600px]:flex-col max-[600px]:[&>section]:w-full">
                <section id="about-technology"
                    className="flex flex-col flex-1 p-6 rounded-2xl gap-2 border-[2px] light-border bg-white/28 backdrop-blur-[4px] backdrop-brightness-117 shadow-[inset_0_0_8px_1px_rgb(255_255_255/0.3)]"
                >
                    <h2 className="font-bold">Skills</h2>
                    <div className="flex flex-col gap-4 mt-1.5">
                        {skillGroups.map((group) => (
                            <div key={group.caption}>
                                <h3 className="text-[13px] italic">{group.caption}</h3>
                                <div className="flex flex-wrap gap-x-5 gap-y-4 mt-2">
                                    {group.items.map((item) => (
                                        <TechItem key={item} item={item} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section id="about-playing"
                    className="flex flex-col gap-2 p-6 min-w-60 rounded-2xl border-[2px] light-border bg-white/28 backdrop-blur-[4px] backdrop-brightness-117 shadow-[inset_0_0_8px_1px_rgb(255_255_255/0.3)]"
                >
                    <div className="flex items-center gap-2">
                        <Icon icon="ri:playstation-fill" className="w-7 h-7"></Icon>
                        <h2 className="font-bold">Playing:</h2>
                    </div>
                    <div className="flex gap-4 items-start">
                        <img src={re8Icon}
                            className="max-w-15 mt-1.25 rounded-md mb-2"
                        >
                        </img>
                        <p>Resident Evil Village</p>
                    </div>

                </section>
            </div>

        </div>
    )
}

export default AboutPage