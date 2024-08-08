import React, { useEffect } from "react";
import "./about.css";
import { CgAwards } from "react-icons/cg";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import AOS from "aos";
import 'aos/dist/aos.css';

import TabAbout from "../tab/TabAbout";
import img from "../../assests/about/about_1.jpg"
import img2 from "../../assests/about/about_2.png"
import img3 from "../../assests/about/about_3.jfif"
const About = () => {

    useEffect(() => {
        AOS.init({
            // Initialization options go here (e.g., duration, easing, etc.)
        });
    }, []);

    return (
        <section id="about" className={"pt-24 mb-16"}>
            {/*<Globe/>*/}
            <h5 data-aos="fade-down">Get To Know</h5>
            <h2 data-aos="fade-down">About Me</h2>
            <div className="container ">

                <div className="about__content" data-aos="fade-left" data-aos-duration="500">
                    <div className="about__cards">
                        <article className="about__card">
                            <CgAwards className={"mx-auto "} />
                            <h5>Experience</h5>
                            <small>1+ Years </small>
                        </article>
                        <article className="about__card">
                            <FiUsers className={"mx-auto text-xl"} />
                            <h5>Projects</h5>
                            <small>50+
                                {/* Completed */}
                            </small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className={"mx-auto text-xl"} />
                            <h5>Clients</h5>
                            <small>10+
                                {/* Freelance */}
                            </small>
                        </article>
                    </div>
                    {/* <h5 className={"text-2 text-center my-4 lg:hidden "}>Who am i </h5> */}
                    {/* TabsAbout section */}
                    <TabAbout />
                    {/* End TabsAbout Section */}
                    {/* <button className={"btn-15 custom-btn"}><a href="#contact">Reach out to me</a></button> */}
                </div>

            </div>




        </section>
    );
};

export default About;
