import React, { useState } from "react";

const TabAbout = () => {
    const [open, setOpen] = useState("home");

    const tabs = [
        { id: "home", label: "Who Am I", content: "I am a 19 years old dedicated Frontend Developer specializing in React.js, Next.js, Tailwind CSS, and Ant Design. With 1+ years of experience, I have honed my skills in crafting responsive and user-friendly web applications. My proficiency lies in translating design concepts into efficient and elegant code. Currently open to new opportunities, I am eager to contribute my expertise to innovative projects and further enhance my skills in the dynamic field of web development." },

    ];

    const handleTabOpen = (tabId) => {
        setOpen(tabId);
    };

    return (
        <>
            <div className=" mt-8   w-full  overflow-y-auto  about__card__tab">
                <div className=" py-2">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="w-full ">
                                <div className="flex flex-wrap rounded-lg justify-center border border-[#E4E4E4]   ">
                                    {tabs.map((tab) => (
                                        <a className={"mb-3"}>
                                            {tab.label}
                                        </a>
                                    ))}
                                </div>
                                {tabs.map((tab) => (
                                    <TabContent
                                        key={tab.id}
                                        details={tab.content}

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
                className={` text-base leading-relaxed text-body-color text-justify text-2   ${open === tabCategory ? "block" : "hidden"
                    } `}
            >
                {details}
            </div>
        </div>
    );
};

export default TabAbout;
