import React from "react";
import "./about.css";
import { CgAwards } from "react-icons/cg";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assests/me-about.jpg";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
    <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
          <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <CgAwards />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers />
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptatum. Quaerat fuga expedita at, ullam recusandae architecto dolor ipsum ab quidem quae vero nisi harum in, nostrum, repellendus inventore? Quod!</p>
          <a href="" className="btn btn-primary">Let's Talk</a>
        </div>

      </div>
    </section>
  );
};

export default About;
