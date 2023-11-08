import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/portfolio1.jpg'
import IMG2 from '../../assests/portfolio2.jpg'
import IMG3 from '../../assests/portfolio3.jpg'
import Slider from "../slider/Slider";
const Portfolio = () => {
  return (
     <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      {/*<div className="container portfolio__container">*/}
      {/*  <article className="portfolio_item">*/}
      {/*    <div className="portfolio__item-image">*/}
      {/*      <img src={IMG1} alt="" />*/}
      {/*    </div>*/}
      {/*    <h3>This is a portfolio item title</h3>*/}
      {/*    <div className="portfolio_item-cta">*/}
      {/*   <a href="https://github.com" className='btn'>Github</a>*/}
      {/*    <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>*/}
      {/*   </div>*/}
      {/*  </article>*/}
      {/*  <article className="portfolio_item">*/}
      {/*    <div className="portfolio__item-image">*/}
      {/*      <img src={IMG2} alt="" />*/}
      {/*    </div>*/}
      {/*    <h3>This is a portfolio item title</h3>*/}
      {/*    <div className="portfolio_item-cta">*/}
      {/*   <a href="https://github.com" className='btn'>Github</a>*/}
      {/*    <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>*/}
      {/*   </div>*/}
      {/*  </article>*/}
      {/*  <article className="portfolio_item">*/}
      {/*    <div className="portfolio__item-image">*/}
      {/*      <img src={IMG3} alt="" />*/}
      {/*    </div>*/}
      {/*    <h3>This is a portfolio item title</h3>*/}
      {/*   <div className="portfolio_item-cta">*/}
      {/*   <a href="https://github.com" className='btn'>Github</a>*/}
      {/*    <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>*/}
      {/*   </div>*/}
      {/*  </article>*/}
      {/*</div>*/}


         <div className="container h-screen  py-6 sm:py-8 lg:py-12">
             <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                 <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">

                     <div className="group relative flex h-48 items-center flex-col justify-center px-2 overflow-hidden rounded-lg service shadow-lg md:h-80">
                       <h2 className={"text-3xl text-white font-bold py-4"}>FasTech System</h2>
                       <h2 className={"text-sm text-center py-2"}>This is a landing page of FasTech System Company </h2>
                         <a href="https://www.fastechsystem.com/"  target={"_blank"} className="btn btn-primary">Visit Live</a>
                     </div>

                     <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                        <Slider  title={""}/>
                     </a>

                     <a href="#"
                        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                         <Slider  title={""}/>
                     </a>

                     <div className="group relative flex h-48 items-center flex-col justify-center px-2 overflow-hidden rounded-lg service shadow-lg md:h-80">
                         <h2 className={"text-3xl text-white font-bold py-4"}>FasTech System</h2>
                         <h2 className={"text-sm text-center py-2"}>This is a landing page of FasTech System Company </h2>
                         <a href="https://www.fastechsystem.com/"  target={"_blank"} className="btn btn-primary">Visit Live</a>
                     </div>
                 </div>
             </div>
         </div>

     </section>


  )
}

export default Portfolio