import githubIcon from "../assets/github.svg"
import linkedinIcon from "../assets/linkedin.svg"
import itchioIcon from "../assets/itchio.svg"
import { Icon } from "@iconify/react"

function AboutPage() {
    return (
        <div className="w-full">
            <div className="flex min-h-11 h-fit gap-4">
                <section id="about-id"
                    className="flex flex-col gap-4 bg-gray-300/35 p-6 min-w-60 rounded-2xl">
                    <img src="../assets/react.svg"></img>
                    <h2>Elijah Villanueva</h2>
                    {/* email, school, degree, city */}
                    <div id="about-id-content"
                        className="flex flex-col gap-2 [&>div]:flex [&>div]:items-center [&>div]:gap-3"
                    >
                        <div>
                            <Icon icon="ic:outline-email" />
                            <p>elijahrvillan@gmail.com</p>
                        </div>
                        <div>
                            <Icon icon="teenyicons:school-outline" />
                            <p>California Polytechnic State University</p>
                        </div>
                        <div>
                            <Icon icon="simple-line-icons:graduation" />
                            <p>B.S. Computer Science</p>
                        </div>
                        <div>
                            <Icon icon="iconamoon:location" />
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
                    className="bg-gray-300/35 p-6 rounded-2xl"
                >
                    <h1>Welcome</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit orci ac blandit commodo. Suspendisse dapibus, enim nec mattis placerat, metus turpis molestie libero, a hendrerit metus tortor nec tellus. Sed consectetur fringilla mauris vitae tristique. Nullam at libero metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce sit amet molestie nisl, at tincidunt urna. Mauris tristique, lectus et euismod ornare, sem leo dapibus libero, ac iaculis nisl est sed ligula. Integer quam erat, porttitor ac augue tincidunt, aliquam finibus nulla. Integer vel metus vel turpis malesuada congue quis non leo. Vestibulum egestas, ligula a lacinia mattis, enim odio posuere turpis, a tempor urna nunc id velit.</p>
                </section>
            </div>
            <div className="flex">
                <section id="about-skills">

                </section>
                <section id="about-playing">

                </section>
            </div>

        </div>
    )
}

export default AboutPage