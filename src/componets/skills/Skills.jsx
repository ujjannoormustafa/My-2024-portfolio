import React from 'react'
import CSS from '../../assests/css.png'
import html from '../../assests/html.png'
import js from '../../assests/js.png'
import  next from '../../assests/next.png'
import  react  from '../../assests/react.png'
import ant  from '../../assests/ant.png'
import gt from '../../assests/github.png'
import taillwind from '../../assests/taillwind.png'
import mui from '../../assests/pngwing.com.png'
import notion from "../../assests/notion.png"
import slack from "../../assests/slack.png"
import canva from '../../assests/Canva_logo_PNG6.png'
import figma from '../../assests/Figma-Logo-PNG-Photos.png'
import intellj from '../../assests/in3929i9d7-intellij-idea-logo-intellij-idea-logo.png'
const Skills = () => {

    return (

        <section className={"pt-24"} id={"skills"}>
            <h5 >What Skills I Have</h5>
            <h2>Tools and Technologies</h2>

        <div className={"container w-full pb-2  experience__container2 "}>
            <div>
                <h3 className={"text-center py-4 "} >Technology I use</h3>
                <div className="md:flex md:justify-around lg:flex    justify-center  custom-grid">
                    <article className="experience__details icon-center" >
                        <div>
                            <img src={html} width={100}  />
                            <h4  className={"text-center"}>HTML</h4>
                        </div>
                    </article>
                    <article className="experience__details icon-center">
                        <div>
                            <img src={CSS} width={100} />
                            <h4  className={"text-center"}>Css</h4>
                        </div>
                    </article>
                    <article className="experience__details icon-center">
                        <div>
                            <img src={js} width={100} />
                            <h4  className={"text-center"}>JavaScript</h4>
                        </div>
                    </article>
                    <article className="experience__details icon-center">
                        <div>
                            <img src={react} width={100} />
                            <h4  className={"text-center"}>React</h4>
                        </div>
                    </article>
                    <article className="experience__details icon-center">
                        <div>
                            <img src={next} width={90} />
                            <h4  className={"text-center"}>Nextjs</h4>
                        </div>
                    </article>
                    <article className="experience__details icon-center">
                        <div>
                            <img src={taillwind} width={130} height={120} />
                            <h4  className={"text-center"}>Tailwind Css</h4>

                        </div>
                    </article>
                    <article className="experience__details icon-center">
                        <div>
                            <img src={ant} width={80} />
                            <h4  className={"text-center"}>Ant-design</h4>
                        </div>
                    </article>
                    <article className="experience__details icon-center">
                        <div>
                            <img src={mui} width={100} />
                            <h4  className={"text-center"}>MUI</h4>
                        </div>
                    </article>
                    <article className="experience__details icon-center">
                        <div>
                            <img src={gt} width={100} />
                            <h4  className={"text-center"}>Github</h4>
                        </div>
                    </article>
                </div></div>
            <div>
                <h3 className={"text-center py-4"} >Tools I use everyday</h3>
                <div className="md:flex md:justify-around lg:flex  justify-between custom-grid">
                    <article className="experience__details icon-center" >
                        <div>
                            <img src={figma} width={80} />
                            <h4  className={"text-center"}>Figma</h4>

                        </div>
                    </article>
                    <article className="experience__details icon-center">
                        <div>
                            <img src={notion} width={90}  />
                            <h4  className={"text-center"}>Notion</h4>

                        </div>
                    </article>
                    <article className="experience__details icon-center">
                        <div>
                            <img src={intellj} width={140} />
                            <h4  className={"text-center"}>Intellij IDE</h4>

                        </div>
                    </article>
                    <article className="experience__details icon-center">
                        <div>
                            <img src={slack} width={100} />
                            <h4  className={"text-center"}>Slack</h4>
                        </div>
                    </article>
                    <article className="experience__details icon-center">
                        <div className={"pt-4"}>
                            <img src={canva} width={140} />
                            <h4  className={"text-center"}>Canva</h4>

                        </div>
                    </article>

                </div></div>
        </div>
        </section>
    )
}
export default Skills
