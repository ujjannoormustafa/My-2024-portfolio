import React from "react";

const About2 = () => {
    return (
        <>
            <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] bg-gray-700 overflow-y-scroll overflow-x-hidden">
                <div className="container">
                    <div className="flex flex-wrap items-center justify-between -mx-4">

                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="mt-10 lg:mt-0">
                <span className="block mb-2 text-lg font-semibold text-primary">
                  Why Choose Us
                </span>
                                <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl">
                                    Make your customers happy by giving services.
                                </h2>
                                <p className="mb-8 text-base text-body-color">
                                    It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its layout.
                                    The point of using Lorem Ipsum is that it has a more-or-less.
                                </p>
                                <a
                                    href="/#"
                                    className="inline-flex items-center justify-center px-10 py-4 text-base font-normal text-center text-white rounded-lg bg-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About2;
