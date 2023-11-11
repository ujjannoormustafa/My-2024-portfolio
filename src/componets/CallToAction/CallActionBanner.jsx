import React, {useEffect} from 'react'
import AOS from "aos";
import 'aos/dist/aos.css';
const CallActionBanner = () => {
    useEffect(() => {
        AOS.init({

        });
    }, []);
    return (
        <section id='ctaBanner'>
            <div className="bg-gradient-to-tr from-purple-400 via-sky-400 to-indigo-500 lg:pl-40 pl-4 mb-3 ">
                <div className="text-start w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl" data-aos="zoom-in-up">
                        <span className="block text-white">Let's turn your ideas into captivating experiences.<br/> Ready to start your next project together?</span>
                        <span className="block text-[#4db5ff] ">It's today or never.</span>
                    </h2>
                    <div className="lg:mt-0 lg:flex-shrink-0">
                        <div className="mt-8" data-aos="zoom-out-up">
                            <button className="btn-15 custom-btn">
                                <a href="https://wa.me/0307341821?text=Hello%20there!%20I%20would%20like%20to%20connect%20with%20you." target="_blank" rel="noopener noreferrer">
                                    WhatsApp
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CallActionBanner
