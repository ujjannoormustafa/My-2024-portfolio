import React, { useState } from 'react';

function Headerbar(props) {
      return (
          <div className="mx-auto md:flex block items-center mb-8 container bg-black bg-opacity-80 fixed top-0 left-1/2 transform -translate-x-1/2 z-50 justify-between  w-full  ">
                <div className="md:text-3xl  text-xl text-center sm:my-4">
                    <span>Noor</span><span className={"text-2 px-2 text-garident"}>Mustafa</span>
                </div>
                <div className="md:flex hidden">
                    <ul className="flex items-center justify-evenly p-4 no-underline">
                        <li className="relative after:absolute after:bg-[#4DB5FFFF] mx-2 after:bottom-0 after:left-0 after:h-[4px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
                           <a href={"#"} className={"text-white"}>Home</a>
                        </li>
                        <li className="relative after:absolute after:bg-[#4DB5FFFF] mx-2 after:bottom-0 after:left-0 after:h-[4px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
                            <a href={"#"} className={"text-white"}>About</a>
                        </li>
                        <li className="relative after:absolute after:bg-[#4DB5FFFF] mx-2 after:bottom-0 after:left-0 after:h-[4px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
                            <a href={"#"} className={"text-white"}>Services</a>
                        </li>
                        <li className="relative after:absolute after:bg-[#4DB5FFFF] mx-2 after:bottom-0 after:left-0 after:h-[4px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
                            <a href={"#"} className={"text-white"}>Portfolio</a>
                        </li>
                        <li className="relative after:absolute after:bg-[#4DB5FFFF] mx-2 after:bottom-0 after:left-0 after:h-[4px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
                            <a href={"#"} className={"text-white"}>Contact Me</a>
                        </li>
                        <button className={"btn-15 custom-btn " }>Login</button>
                    </ul>
                </div>
            </div>
      );
}

export default Headerbar;
