import React from 'react'
import './portfolio.css'
import Slider from "../slider/Slider";
import fastech1 from "../../assests/portfolio/fastech-1.png";
import fastech2  from "../../assests/portfolio/fastech-2.JPG";
import fastech3  from "../../assests/portfolio/fastech-3.JPG";

import board1 from "../../assests/portfolio/board_1.png"
import board2 from "../../assests/portfolio/board_2.png"
import board3 from "../../assests/portfolio/board_3.png"
import board4 from "../../assests/portfolio/board_4.png"

import portfolio1 from "../../assests/portfolio/portfolio_1.png"
import portfolio2 from "../../assests/portfolio/portfolio_2.png"
import portfolio3 from "../../assests/portfolio/portfolio_3.png"

const  portfolio = [portfolio1, portfolio2, portfolio3]
const fastech = [fastech1 , fastech2 , fastech3 ];
const board = [board1, board2, board3, board4]
const Portfolio = () => {
  return (
     <section id='portfolio'>
      <h5 className={"pt-24"}>My Recent Work</h5>
      <h2>Portfolio</h2>

         <div className="container    sm:py-8 ">
             <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                 <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                     <div className="group relative flex h-48 items-center flex-col justify-center px-2 pb-1 overflow-hidden rounded-lg service shadow-lg md:h-80">
                         <h2 className={"text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-white font-bold py-1 md:py-4 lg:py-4"}>FasTech System</h2>
                         <h2 className={"text-sm text-center py-1 md:py-2"}>This is a landing page of FasTech System Company </h2>
                         <a href="https://www.fastechsystem.com/"  target={"_blank"} className="btn btn-primary">Visit Live</a>
                     </div>
                     <a href="#" className="group relative flex h-48 items-center overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                        <Slider pic={fastech}/>
                     </a>

                     <a href="#" className="group relative flex h-48 items-center overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                         <Slider pic={board}/>
                     </a>
                     <div className="group relative flex h-48 items-center flex-col justify-center px-2 pb-1 overflow-hidden rounded-lg service shadow-lg md:h-80">
                         <h2 className={"text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-white font-bold py-1 md:py-4 lg:py-4"}>BISE Website</h2>
                         <h2 className={"text-sm text-center py-1 md:py-2"}>This is Board of Intermediate and Secondary Education (BISE) </h2>
                         <a href="https://www.fastechsystem.com/"  target={"_blank"} className="btn btn-primary">Visit Live</a>
                     </div>

                     <div className="group relative flex h-48 items-center flex-col justify-center px-2 pb-1 overflow-hidden rounded-lg service shadow-lg md:h-80">
                         <h2 className={"text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-white font-bold py-1 md:py-4 lg:py-4"}>Portfolio Website</h2>
                         <h2 className={"text-sm text-center py-1 md:py-2"}>This is a Portfolio website create in Nextjs also use Threejs for create 3d earth globe </h2>
                         <a href="https://www.fastechsystem.com/"  target={"_blank"} className="btn btn-primary">Visit Live</a>
                     </div>
                     <a href="#" className="group relative flex h-48 items-center overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                        <Slider pic={portfolio}/>
                     </a>

                     {/*<a href="#" className="group relative flex h-48 items-center overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">*/}
                     {/*   */}
                     {/*</a>*/}
                     {/*<div className="group relative flex h-48 items-center flex-col justify-center px-2 pb-1 overflow-hidden rounded-lg service shadow-lg md:h-80">*/}
                     {/*    <h2 className={"text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-white font-bold py-1 md:py-4 lg:py-4"}>FasTech System</h2>*/}
                     {/*    <h2 className={"text-sm text-center py-1 md:py-2"}> Final This is a landing page of FasTech System Company </h2>*/}
                     {/*    <a href="https://www.fastechsystem.com/"  target={"_blank"} className="btn btn-primary">Visit Live</a>*/}
                     {/*</div>*/}


                 </div>
             </div>
         </div>
     </section>


  )
}

export default Portfolio