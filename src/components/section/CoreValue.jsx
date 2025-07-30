import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import local images
import sportmanshipDesktop from '../../assets/CoreValue/value1.jpg';
import sportmanshipMobile from '../../assets/CoreValue/valueM1.jpg';
import proactiveDesktop from '../../assets/CoreValue/value2.jpg';
import proactiveMobile from '../../assets/CoreValue/valueM2.jpg';
import enthusiasmDesktop from '../../assets/CoreValue/value3.jpg';
import enthusiasmMobile from '../../assets/CoreValue/valueM3.jpg';
import consumerFirstDesktop from '../../assets/CoreValue/value4.jpg';
import consumerFirstMobile from '../../assets/CoreValue/valueM4.jpg';
import socialResponsibilityDesktop from '../../assets/CoreValue/value5.jpg';
import socialResponsibilityMobile from '../../assets/CoreValue/valueM5.jpg';

const CoreValue = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [contentVisible, setContentVisible] = useState(true);
    const [imageLoaded, setImageLoaded] = useState(false);

    const coreValues = [
        {
            id: 1,
            title: "SPORTMANSHIP",
            description: "PASSION AND ENERGY IN EVERYTHING WE DO",
            image: {
                desktop: sportmanshipDesktop,
                mobile: sportmanshipMobile
            }
        },
        {
            id: 2,
            title: "PROACTIVE",
            description: "NEVER GIVING UP ON OUR DREAMS AND GOALS",
            image: {
                desktop: proactiveDesktop,
                mobile: proactiveMobile
            }
        },
        {
            id: 3,
            title: "ENTHUSIASM",
            description: "STRIVING FOR THE HIGHEST QUALITY IN ALL ASPECTS",
            image: {
                desktop: enthusiasmDesktop,
                mobile: enthusiasmMobile
            }
        },
        {
            id: 4,
            title: "CONSUMER FIRST",
            description: "INNOVATIVE THINKING AND ORIGINAL SOLUTIONS",
            image: {
                desktop: consumerFirstDesktop,
                mobile: consumerFirstMobile
            }
        },
        {
            id: 5,
            title: "SOCIAL RESPONSIBILITY",
            description: "UNITY AND SUPPORT FOR ONE ANOTHER",
            image: {
                desktop: socialResponsibilityDesktop,
                mobile: socialResponsibilityMobile
            }
        }
    ];

    const colorMap = {
        'S': 'text-red-500',
        'P': 'text-blue-500',
        'E': 'text-yellow-500',
        'C': 'text-red-500',
    };

    const getColoredTitle = (title) => {
        const firstLetter = title.charAt(0);
        const restOfTitle = title.slice(1);
        let colorClass;
        
        if (firstLetter === 'S') {
            if (title === 'SPORTMANSHIP') {
                colorClass = 'text-red-500';
            } else if (title === 'SOCIAL RESPONSIBILITY') {
                colorClass = 'text-green-500';
            }
        } else {
            colorClass = colorMap[firstLetter] || 'text-red-500';
        }
        
        return (
            <>
                <span className={colorClass}>{firstLetter}</span>
                {restOfTitle}
            </>
        );
    };

    const handleSlideChange = (swiper) => {
        setContentVisible(false);
        setTimeout(() => {
            setCurrentSlide(swiper.realIndex);
            setContentVisible(true);
        }, 250);
    };

    return (
        <div className="relative w-full overflow-hidden">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                speed={800}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{
                    el: '.swiper-pagination-custom',
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet-custom',
                    bulletActiveClass: 'swiper-pagination-bullet-active-custom',
                }}
                onSlideChange={handleSlideChange}
                className="w-full"
            >
                {coreValues.map((value, index) => (
                    <SwiperSlide key={value.id}>
                        <div className="relative w-full">
                            {/* Mobile Image */}
                            <div className="block md:hidden">
                                <img
                                    src={value.image.mobile}
                                    alt={value.title}
                                    className="w-full h-auto object-cover"
                                    onLoad={() => setImageLoaded(true)}
                                />
                            </div>
                            
                            {/* Desktop Image */}
                            <div className="hidden md:block relative xl:max-h-[999px]">
                                <img
                                    src={value.image.desktop}
                                    alt={value.title}
                                    className="w-full h-auto object-cover"
                                    onLoad={() => setImageLoaded(true)}
                                />
                                {/* Dark Overlay for desktop */}
                                <div className="absolute inset-0 bg-black bg-opacity-50" />
                            </div>
                            
                            {/* Content overlay for desktop */}
                            <div className="absolute inset-0 hidden md:flex items-center justify-start z-10 mx-[50px]">
                                <div 
                                    className={`text-start text-white px-4 max-w-4xl transition-all duration-500 ease-out ${
                                        contentVisible 
                                            ? 'transform translate-y-0 opacity-100' 
                                            : 'transform translate-y-8 opacity-0'
                                    }`}
                                >
                                    <p className="text-[20px] font-[700] tracking-widest uppercase opacity-90 -mb-4 ml-2">
                                        CORE VALUE
                                    </p>
                                    <h1 className="md:text-[83px] lg:text-[104px] 2xl:text-[143px] font-[800] leading-none uppercase tracking-wide">
                                        {getColoredTitle(value.title)}
                                    </h1>
                                </div>
                            </div>

                            {/* Mobile content below image */}
                            {/* <div className="block md:hidden p-6 bg-white">
                                <p className="text-[16px] font-[700] tracking-widest uppercase opacity-70 mb-2 text-gray-600">
                                    CORE VALUE
                                </p>
                                <h2 className="text-[32px] font-[800] leading-tight uppercase tracking-wide text-gray-900">
                                    {getColoredTitle(value.title)}
                                </h2>
                                <p className="text-gray-600 mt-2 text-sm uppercase tracking-wide">
                                    {value.description}
                                </p>
                            </div> */}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Arrows - Desktop only */}
            <button className="swiper-button-prev-custom absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300 hidden md:block">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button className="swiper-button-next-custom absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300 hidden md:block">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Custom Pagination Dots */}
            <div className="swiper-pagination-custom absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20 md:bottom-8"></div>

            {/* Progress Bar */}
            {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-30 z-20">
                <div
                    className="h-full bg-white md:bg-white transition-all duration-300 ease-out"
                    style={{
                        width: `${((currentSlide + 1) / coreValues.length) * 100}%`
                    }}
                />
            </div> */}

            <style jsx>{`
                .swiper-pagination-bullet-custom {
                    width: 4px !important;
                    height: 4px !important;
                    background: rgba(0, 0, 0, 0.5) !important;
                    border-radius: 50% !important;
                    opacity: 1 !important;
                    margin: 0 6px !important;
                    transition: all 0.3s ease !important;
                    cursor: pointer !important;
                }
                
                .swiper-pagination-bullet-active-custom {
                    background: black !important;
                    transform: scale(1.25) !important;
                }
                
                .swiper-pagination-bullet-custom:hover {
                    background: rgba(0, 0, 0, 0.75) !important;
                }

                @media (max-width: 768px) {
                    .swiper-pagination-bullet-custom {
                        background: rgba(0, 0, 0, 0.3) !important;
                    }
                    
                    .swiper-pagination-bullet-active-custom {
                        background: rgba(0, 0, 0, 0.8) !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default CoreValue;