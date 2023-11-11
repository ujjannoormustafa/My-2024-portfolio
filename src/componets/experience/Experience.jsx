import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'



const Experience = () => {
  return (
    <section id='experience'>
      <h5 >What Education I Have</h5>
      <h2>Experience & Certification</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3 className={"text-xl "}>Work Experience</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
             <div>
             <h4>Internship</h4>
              <small className='text-light '>At FasTech System April-2023 - May-2023</small>
              {/*<small className='text-light'>gaining hands-on experience and contributing to impactful projects in a dynamic tech environment.</small>*/}
             </div>
            </article>

              <article className="experience__details">
                  <BsPatchCheckFill className='experience__details-icon' />
                  <div>
                      <h4>Front-end Developer</h4>
                      <small className='text-light '>At FasTech System Jun 2023 - Present · 5 mos</small>
                      {/*<small className='text-light'>shaping user-centric interfaces and contributing to innovative web solutions for the past 5 months</small>*/}
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
              <h4>Introduction to Front-end development</h4>
              <small className='text-light text-center'>from Coursera <a href={"https://coursera.org/share/e89971f4507a08d597276d786f4cf52a"} >View</a> </small>
             </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
             <div>
             <h4>Programming with JavaScript</h4>
              <small className='text-light'>from Coursera <a href={"https://coursera.org/share/e89971f4507a08d597276d786f4cf52a"}>View</a></small>
             </div>
            </article>

          </div>
        </div>
      </div>





    </section>
  )
}

export default Experience