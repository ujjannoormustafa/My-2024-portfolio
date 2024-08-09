import React, { useEffect } from 'react'
import AOS from "aos";
import 'aos/dist/aos.css';
import { BsWhatsapp } from 'react-icons/bs';
const CallActionBanner = () => {
    useEffect(() => {
        AOS.init({

        });
    }, []);
    return (
        <section id='ctaBanner'>
            {/*
            bg-gradient-to-tr from-purple-400 via-sky-400 to-indigo-500
            bg-gradient-to-tr from-purple-400 via-sky-400 to-indigo-500
             
             */}
            <div className="
            bg-blue-900/10
             lg:pl-40 pl-4 mb-3 ">
                <div className="text-start w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl" data-aos="zoom-in-up">
                        <span className="block text-white">Need a sleek, responsive website?</span>
                        <span className="block text-[#4db5ff] ">let's chat! </span>
                    </h2>
                    <div className="lg:mt-0 lg:flex-shrink-0">
                        <div className="mt-8" data-aos="zoom-out-up">
                            <a className={"text-white"} href="https://wa.me/03260682807" target="_blank" rel="noopener noreferrer">

                                <div className={"btn  fix-align"}>
                                    WhatsApp


                                    <BsWhatsapp />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CallActionBanner
