import React, { useState } from "react";

const TabAbout = () => {
    const [open, setOpen] = useState("home");

    const tabs = [
        { id: "home", label: "Personal", content: "Hello there! I'm an 18-year-old self-taught developer with a passion for crafting seamless and user-friendly web experiences. Over the past two years, I have honed my skills in ReactJS and NextJS, delving into the dynamic world of front-end development. Currently, I proudly serve as a Frontend Developer at Fastech Systems, where I bring my expertise to the forefront of cutting-edge projects. My journey began with a transformative internship at Fastech, providing me with invaluable hands-on experience and a solid foundation for my ongoing exploration of the ever-evolving tech landscape. Join me as I continue to navigate the digital realm, pushing boundaries and transforming ideas into innovative web solutions." },
        { id: "about", label: "Professional", content: "Update Very Soon!!" },
        { id: "team", label: "Additional", content: "Upade Very Soon!!" },
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
