import React, { useState } from "react";

const TabAbout = () => {
    const [open, setOpen] = useState("home");

    const tabs = [
        { id: "home", label: "Professional", content: "I am a dedicated Frontend Developer specializing in React.js, Next.js, Tailwind CSS, and Ant Design. With six months of valuable experience gained through an internship at Fastech System, I have honed my skills in crafting responsive and user-friendly web applications. My proficiency lies in translating design concepts into efficient and elegant code. Currently open to new opportunities, I am eager to contribute my expertise to innovative projects and further enhance my skills in the dynamic field of web development." },
        { id: "about", label: "Personal", content:
                "Hey there! This is Noor Mustafa Ujjan, an 18-year-old individual based in Mirpur Khas, Sindh, Pakistan. My passion lies in exploring the realms of self-help literature, coding, and design. Having completed my FSC (12th grade), I am driven by a constant curiosity to learn and apply my knowledge in creative and meaningful ways. Whether delving into code, immersing myself in design projects, or finding inspiration in self-help books, I am dedicated to continuous personal and intellectual growth." },
        {
            id: "team",
            label: "Additional",
            content: `As a Frontend Developer, I bring a blend of technical acumen and soft skills, including strong communication, problem-solving, and analytical thinking. My teamwork skills are integral to delivering high-quality and innovative solutions. Proficient in English, Urdu, and Sindhi, I navigate projects with cultural sensitivity. Connect with me on LinkedIn to explore my professional journey, check out coding projects on GitHub, and catch a glimpse of my design explorations on Instagram. Stay tuned for educational content on my YouTube channel. Let's build something amazing together! My Socials Media Handles..
            Linkedin : https://www.linkedin.com/in/noormustafa7/ ...... Github : https://github.com/ujjannoormustafa ............ Instagram : www.instagram.com/ujjannoormustafa7/ ................ `
        },

        { id: "company", label: "Future Vision", content: "Update Very Soon!!" },
    ];

    const handleTabOpen = (tabId) => {
        setOpen(tabId);
    };

    return (
        <>
            <div className="py-8 mt-8 mb-8 py-4 w-full h-1/2 overflow-y-auto lg:py-[5px] about__card__tab">
                <div className=" py-8">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="w-full mb-14">
                                <div className="flex flex-wrap rounded-lg justify-center border border-[#E4E4E4] py-3  ">
                                    {tabs.map((tab) => (
                                        <a
                                            key={tab.id}
                                            onClick={() => handleTabOpen(tab.id)}
                                            className={`rounded-md py-3 px-2 text-sm font-medium md:text-base lg:px-2 mx-2 hover:bg-blue-500 text-white transition-all delay-75 cursor-pointer ${
                                                open === tab.id ? "bg-blue-500 text-white" : " "
                                            }`}
                                        >
                                            {tab.label}
                                        </a>
                                    ))}
                                </div>
                                {tabs.map((tab) => (
                                    <TabContent
                                        key={tab.id}
                                        details={tab.content}
                                        tabCategory={tab.id}
                                        open={open}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const TabContent = ({ open, tabCategory, details }) => {
    return (
        <div>
            <div
                className={` text-base leading-relaxed text-body-color text-justify text-2   ${
                    open === tabCategory ? "block" : "hidden"
                } `}
            >
                {details}
            </div>
        </div>
    );
};

export default TabAbout;
