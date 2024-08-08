import React from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react"
import name from "../../assests/name.png"


function Headerbar(props) {

    useEffect(() => {
        AOS.init({

        });
    }, []);
    return (
        <div className="mx-auto md:flex block items-center mb-8 px-40 bg-black  fixed top-0 left-1/2 transform -translate-x-1/2 z-50 justify-between  w-full" >
            <div className="md:text-3xl  text-xl text-center sm:my-4">
                <a href="/" data-aos="fade-down" >
                    <img src={name} alt={"logo"} width={"120"} />

                    {/* <span className={"text-xl lg:text-4xl text-white font-bold"}>Noor
                </span><span className={"text-2 text-xl lg:text-4xl px-2 font-bold text-garident"}>Mustafa</span> */}
                </a>
            </div>
            <div className="md:flex hidden" data-aos="fade-down">
                <ul className="flex items-center justify-evenly p-4 no-underline">
                    <li className="relative after:absolute after:bg-[#4DB5FFFF] mx-2 after:bottom-0 after:left-0 after:h-[4px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
                        <a href={"#home"} className={"text-white"}>Home</a>
                    </li>
                    <li className="relative after:absolute after:bg-[#4DB5FFFF] mx-2 after:bottom-0 after:left-0 after:h-[4px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
                        <a href={"#about"} className={"text-white"}>About</a>
                    </li>
                    <li className="relative after:absolute after:bg-[#4DB5FFFF] mx-2 after:bottom-0 after:left-0 after:h-[4px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
                        <a href={"#skills"} className={"text-white"}>Skills</a>
                    </li>
                    <li className="relative after:absolute after:bg-[#4DB5FFFF] mx-2 after:bottom-0 after:left-0 after:h-[4px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
                        <a href={"#portfolio"} className={"text-white"}>Portfolio</a>
                    </li>
                    <li className="relative after:absolute after:bg-[#4DB5FFFF] mx-2 after:bottom-0 after:left-0 after:h-[4px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
                        <a href={"#services"} className={"text-white"}>Services</a>
                    </li>
                    <button className={"btn-15 custom-btn "}> <a href={"#contact"}>Contact Me</a> </button>
                    {/* <button className="btn-15 custom-btn">
                            <a href="https://wa.me/0307341821?text=Hello%20there!%20I%20would%20like%20to%20connect%20with%20you." target="_blank" rel="noopener noreferrer">
                                WhatsApp
                            </a>
                        </button> */}
                </ul>
            </div>
        </div>
    );
}

export default Headerbar;
