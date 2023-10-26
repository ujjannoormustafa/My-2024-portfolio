import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import CSS from '../../assests/css.png'
import html from '../../assests/html.png'
import js from '../../assests/js.png'
import  next from '../../assests/next.png'
import  react  from '../../assests/react.png'
import ant  from '../../assests/ant.png'
import bs from '../../assests/bs.png'
import taillwind from '../../assests/taillwind.png'
import mui from '../../assests/pngwing.com.png'
import notion from "../../assests/notion.png"
import slack from "../../assests/slack.png"
import canva from '../../assests/Canva_logo_PNG6.png'
import figma from '../../assests/Figma-Logo-PNG-Photos.png'
import intellj from '../../assests/in3929i9d7-intellij-idea-logo-intellij-idea-logo.png'


const Experience = () => {
  return (
    <section id='experience'>
      <h5 >What Skills I Have</h5>
      <h2>My Skills & Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Work Experience</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
             <div>
             <h4>Intership</h4>
              <small className='text-light '>At FasTech System jun-2023 to Aug-2023</small>
              <p className='text-light'>little desc</p>
             </div>
            </article>

              <article className="experience__details">
                  <BsPatchCheckFill className='experience__details-icon' />
                  <div>
                      <h4>Front-end Developer</h4>
                      <small className='text-light '>At FasTech System Aug-2023 to Present</small>
                      <p className='text-light'>little desc</p>
                  </div>
              </article>

          </div>
        </div>
        <div className="experience__backend">
        <h3>Certification</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
             <div>
              <h4>Introducation to Front-end developement</h4>
              <small className='text-light'>from Meta <a href={"#"} >View</a> </small>
             </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
             <div>
             <h4>Programming with JavaScript</h4>
              <small className='text-light'>from Couresra <a href={"#"}>View</a></small>
             </div>
            </article>

          </div>
        </div>
      </div>

      <div className={"container w-full py-8  experience__container2 "}>
        <div>
            <h3 className={"text-center py-4"} >Technology I use</h3>
            <div className="flex justify-around ">
                <article className="experience__details" >
                    <div>
                        <img src={html} width={100}  />
                        <h4  className={"text-center"}>HTML</h4>
                    </div>
                </article>
                <article className="experience__details">
                    <div>
                        <img src={CSS} width={100} />
                        <h4  className={"text-center"}>Css</h4>
                    </div>
                </article>
                <article className="experience__details">
                    <div>
                        <img src={js} width={100} />
                        <h4  className={"text-center"}>JavaScript</h4>
                    </div>
                </article>
                <article className="experience__details">
                    <div>
                        <img src={react} width={100} />
                        <h4  className={"text-center"}>React</h4>
                    </div>
                </article>
                <article className="experience__details">
                    <div>
                        <img src={next} width={90} />
                        <h4  className={"text-center"}>Nextjs</h4>
                    </div>
                </article>
                <article className="experience__details">
                    <div>
                        <img src={taillwind} width={130} height={120} />
                        <h4  className={"text-center"}>Taillwind Css</h4>
                          
                    </div>
                </article>
                <article className="experience__details">
                    <div>
                        <img src={ant} width={80} />
                        <h4  className={"text-center"}>Ant-design</h4>
                    </div>
                </article>
                <article className="experience__details">
                    <div>
                        <img src={mui} width={100} />
                        <h4  className={"text-center"}>MUI</h4>
                    </div>
                </article>
                <article className="experience__details">
                    <div>
                        <img src={bs} width={100} />
                        <h4  className={"text-center"}>Boostrap</h4>
                    </div>
                </article>
            </div></div>
        <div>
            <h3 className={"text-center py-4"} >Tools I use everyday</h3>
            <div className="flex justify-around ">
                <article className="experience__details" >
                    <div>
                        <img src={notion} width={140}  />
                        <h4  className={"text-center"}>Notion</h4>
                    </div>
                </article>
                <article className="experience__details">
                    <div>
                        <img src={canva} width={140} />
                        <h4  className={"text-center"}>Canva</h4>
                    </div>
                </article>
                <article className="experience__details">
                    <div>
                        <img src={intellj} width={100} />
                        <h4  className={"text-center"}>Intellij IDE</h4>
                    </div>
                </article>
                <article className="experience__details">
                    <div>
                        <img src={slack} width={180} />
                        <h4  className={"text-center"}>Slack</h4>
                    </div>
                </article>
                <article className="experience__details">
                    <div>
                        <img src={figma} width={100} />
                        <h4  className={"text-center"}>Figma</h4>
                    </div>
                </article>

            </div></div>
      </div>



    </section>
  )
}

export default Experience