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

function AboutPage({ aboutText }: AboutPageProps) {
    return (
        <div className="w-full">
            <div className="flex min-h-11 h-fit gap-4 mb-4 max-[600px]:flex-col max-[600px]:[&>section]:w-full">
                <section id="about-id"
                    className="flex flex-col gap-4 bg-gray-300/45 p-6 min-w-60 rounded-2xl">
                    <div className="flex justify-center">
                        <img src={profileIcon}
                            className="max-w-30 rounded-full"
                        ></img>
                    </div>
                    <h2 className="font-bold">Elijah Villanueva</h2>
                    {/* email, school, degree, city */}
                    <div id="about-id-content"
                        className="flex flex-col gap-2 [&>div]:flex [&>div]:items-center [&>div]:gap-3 "
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
                    className="bg-gray-300/45 p-6 rounded-2xl"
                >
                    <h1>Hello</h1>
                    <p className="whitespace-pre-line">{aboutText}</p>
                </section>
            </div>
            <div className="flex min-h-11 h-fit gap-4 max-[600px]:flex-col max-[600px]:[&>section]:w-full">
                <section id="about-technology"
                    className="bg-gray-300/45 p-6 min-w-60 rounded-2xl"
                >
                    <h3>Skills</h3>
                    <div className="flex flex-wrap gap-3 gap-y-1">
                        <TechItem item="Python" />
                        <TechItem item="Typescript" />
                        <TechItem item="C++" />
                        <TechItem item="SQL" />
                        <TechItem item="React" />
                        <TechItem item="Astro" />
                        <TechItem item="TailwindCSS" />
                        <TechItem item="HTML" />
                        <TechItem item="Unity + C#" />
                        <TechItem item="Godot + GDScript" />
                        <TechItem item="Docker" />
                        <TechItem item="FastAPI" />
                        <TechItem item="Github" />
                        <TechItem item="UI/UX" />
                        <TechItem item="Research" />
                    </div>
                </section>
                <section id="about-playing"
                    className="flex flex-col gap-2 min-w-60 bg-gray-300/45 p-6 min-w-60 rounded-2xl"
                >
                    <div className="flex items-center gap-2">
                        <Icon icon="ri:playstation-fill"></Icon>
                        <h3>I'm Playing:</h3>
                    </div>
                    <div className="flex gap-1 items-start">
                        <img src={re8Icon}
                            className="max-w-15 rounded-md mb-2"
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