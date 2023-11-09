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





    </section>
  )
}

export default Experience