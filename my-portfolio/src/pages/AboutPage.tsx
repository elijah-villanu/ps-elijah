import githubIcon from "../assets/github.svg"
import linkedinIcon from "../assets/linkedin.svg"
import itchioIcon from "../assets/itchio.svg"
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

const skillGroups = [
    { caption: "Languages", items: techItems.languageItems },
    { caption: "Frameworks & Engines", items: techItems.frameworkItems },
    { caption: "Tools", items: techItems.toolsItems },
]

const resumeLink = "https://drive.google.com/file/d/1weMiCbCpEFJseu3DvYw_fxZyFhAunKOa/view?usp=sharing"

const experienceItems = [
    {
        role: "UI/UX Research Assistant",
        company: "Cal Polytechnic State University",
        dates: "June 2025 – Aug 2026",
        summary: "Conducted user studies for two of Dr. Silas Hsu's projects, on how user control affects mid-roll ad irritation and on teaching rhythm through video games. Also designed telemetry systems and performed data analyses on results.",
    },
    {
        role: "Mathematics Tutor",
        company: "Allan Hancock College",
        dates: "Aug 2022 – Jul 2024",
        summary: "Guided students through complex math problems or programming challenges that require analytical and critical thinking through open ended teaching to engage student learning",
    },
    {
        role: "IT Cybersecurity Intern",
        company: "Space Information Laboratories",
        dates: "Mar 2024 – Jun 2024",
        summary: "Applied NIST 800-171 and CMMC frameworks to protect Controlled Unclassified Information, enforced role based access control with Active Directory, and fulfilled IT support tickets using Spiceworks.",
    },
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
                <section id="about-experience"
                    className="flex flex-col flex-7 gap-5 p-6 rounded-2xl border-[2px] light-border bg-white/28 backdrop-blur-[4px] backdrop-brightness-117 shadow-[inset_0_0_8px_1px_rgb(255_255_255/0.3)]"
                >
                    <div className="flex items-center justify-between gap-3">
                        <h2 className="font-bold">Experience</h2>
                        <a href={resumeLink} target="_blank" rel="noreferrer"
                            className="flex items-center gap-1.5 min-h-11 px-4 rounded-full border-[2px] light-border bg-white/28 font-sans text-sm font-semibold"
                        >
                            <Icon icon="ic:outline-description" className="size-4" />
                            Resume
                            <Icon icon="ic:round-arrow-outward" className="size-4" />
                        </a>
                    </div>
                    <ol>
                        {experienceItems.map((job, i) => {
                            const isLast = i === experienceItems.length - 1
                            return (
                                <li key={job.role + job.dates} className="grid grid-cols-[16px_1fr] gap-x-4">
                                    <div className="flex flex-col items-center">
                                        <div className="size-4 shrink-0 mt-0.75 rounded-full border-2 border-black/85 bg-white/60" />
                                        {!isLast && <div className="flex-1 w-0.5 my-1 bg-black/35" />}
                                    </div>
                                    <div className={`flex flex-col gap-1 ${isLast ? "" : "pb-7"}`}>
                                        <h4>{job.role}</h4>
                                        <div className="flex items-baseline justify-between gap-3">
                                            <h3 className="text-[13px]">{job.company}</h3>
                                            <h3 className="text-[13px] shrink-0">{job.dates}</h3>
                                        </div>
                                        <p className="pt-1 text-[15px]">{job.summary}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ol>
                </section>
                <section id="about-technology"
                    className="flex flex-col flex-3 p-6 rounded-2xl gap-2 border-[2px] light-border bg-white/28 backdrop-blur-[4px] backdrop-brightness-117 shadow-[inset_0_0_8px_1px_rgb(255_255_255/0.3)]"
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
            </div>

        </div>
    )
}

export default AboutPage