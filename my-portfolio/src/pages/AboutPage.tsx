import githubIcon from "../assets/github.svg"
import linkedinIcon from "../assets/linkedin.svg"
import itchioIcon from "../assets/itchio.svg"

function AboutPage() {
    return (
        <div className="w-full">
            <div className="flex min-h-11 h-fit gap-4">
                <section id="about-id"
                    className="bg-gray-300/35 p-6 min-w-60 rounded-2xl">
                    <img src="../assets/react.svg"></img>
                    <h2>Elijah Villanueva</h2>
                    <div id="about-id-socials"
                        className="flex gap-3 justify-between"
                    >
                        <a href="https://github.com/elijah-villanu">
                            <img src={githubIcon}
                                className="max-w-12"
                            ></img>
                        </a>
                        <a href="www.linkedin.com/in/elijah-villanueva">
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