import React from 'react';
// Import your local image
import aboutBgImage from '../../assets/aboutUs.jpg'; // Adjust the path and filename as needed

const About = () => {
    return (
        <section id="about" className="pb-12">
            <div className="">
                {/* First Section - About Us with Image Background */}
                <div
                    className="relative bg-cover bg-center bg-no-repeat flex items-center justify-center p-6 sm:p-8 lg:p-12 min-h-[700px] md:min-h-[581px] lg:min-h-[1070px]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${aboutBgImage})`
                    }}
                >
                    <div className="text-primary w-full max-w-7xl mx-auto">
                        <p className="text-xs sm:text-sm md:text-base lg:text-l xl:text-lg font-medium tracking-wide uppercase">
                            ABOUT US
                        </p>
                        <h2 className="text-[35px] sm:text-[40px] md:text-[50px] xl:text-[85px] font-[900] leading-none">
                            PANATRADE PRESTASI
                        </h2>
                        <p className="text-[15px] sm:text-[20px] md:text-[22px] lg:text-[24px]  leading-relaxed">
                            Panatrade Group has been creating sports footwear and apparel for more than 30 years. We believe sport can be the catalyst for positive change and the inspiration for a more active, healthy lifestyle. Panatrade products are designed to help our customers reach their full potential. Over many years, we have steadily established ourselves in the sports retail industry, strengthening our market position. This growth has been fueled by expansion into modern, general and digital trade channels.
                        </p>
                    </div>
                </div>

                {/* Second Section - Vision and Mission with White Background */}
                <div className="p-6 sm:p-8 lg:p-12 min-h-[700px] md:min-h-[581px] lg:min-h-[1070px] flex items-center justify-center">
                    <div className="w-full max-w-7xl mx-auto">
                        <div className="">
                            {/* Vision Section */}
                            <div>
                                <p className="text-xs sm:text-sm md:text-base lg:text-l xl:text-lg font-medium tracking-wide text-gray-800 uppercase">
                                    INSPIRE GREATNESS
                                </p>
                                <h3 className="text-[35px] sm:text-[40px] md:text-[50px] xl:text-[85px] font-[900] leading-none text-gray-900">
                                    OUR VISION
                                </h3>
                                <p className="text-[15px] sm:text-[20px] md:text-[22px] lg:text-[24px]  leading-relaxed text-gray-700">
                                    A world where sports are the inspiration for positive change. Where communities come together in friendly competition and nations unite to support their best and brightest.
                                </p>
                            </div>

                            {/* Mission Section */}
                            <div>
                                <h3 className="text-[35px] sm:text-[40px] md:text-[50px] xl:text-[85px] font-bold leading-none text-gray-900">
                                    OUR MISSION
                                </h3>
                                <p className="text-[15px] sm:text-[20px] md:text-[22px] lg:text-[24px]  leading-relaxed text-gray-700">
                                    To impact lives through sports. From playing fields and schoolyards to the bright lights of the big leagues, our mission is to deliver world-class products to our consumers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About